# Smart Cart Optimization Engine

A microservices-based e-commerce platform that recommends complementary products to shoppers based on what's already in their cart — using product similarity, popularity, price, and rating signals, with LLM-generated reasons for each suggestion.

## Architecture

The project is split into three independently deployable services plus a React frontend:

| Service | Description | Port | Docs |
|---|---|---|---|
| [`frontend`](./frontend) | React + Vite UI — product catalog, cart, recommendations, analytics dashboard | 5173 (dev) | [README](./frontend/README.md) |
| [`core-service`](./core-service) | Express/MongoDB API for products and cart management | 5001 | [README](./core-service/README.md) |
| [`recommendation-service`](./recommendation-service) | Express service that scores and ranks related products, with LLM-generated explanations | 5002 | [README](./recommendation-service/README.md) |

```
                ┌─────────────┐
                │  frontend   │
                │  (Vite/React)│
                └──────┬──────┘
                       │
         ┌─────────────┼─────────────┐
         ▼                           ▼
┌─────────────────┐       ┌──────────────────────────┐
│  core-service    │       │  recommendation-service   │
│  (products/cart) │◄──────│  (scoring, ranking, LLM)  │
│  Port 5001        │       │  Port 5002                 │
└─────────────────┘       └──────────────────────────┘
         │                           │
         └───────────┬───────────────┘
                      ▼
              MongoDB Atlas ("smartcart")
```

See [`docs/API_CONTRACTS.md`](./docs/API_CONTRACTS.md) and [`docs/DATABASE_SCHEMA.md`](./docs/DATABASE_SCHEMA.md) for full API and schema details.

## Prerequisites

- Node.js 18+
- npm
- A MongoDB Atlas connection string (shared `smartcart` database)
- A Gemini API key (for `recommendation-service`'s LLM-generated recommendation reasons)

## Getting Started

Clone the repo:

```bash
git clone https://github.com/Arman0206/smart-cart-optimization-engine.git
cd smart-cart-optimization-engine
```

Each service has its own environment variables and dependencies — see the README in each folder for exact setup steps:

1. [`core-service/README.md`](./core-service/README.md) — start this first (products & cart API)
2. [`recommendation-service/README.md`](./recommendation-service/README.md) — depends on `core-service`
3. [`frontend/README.md`](./frontend/README.md) — depends on both services above

Quick start (once each service's `.env` is configured):

```bash
# Terminal 1
cd core-service && npm install && npm run dev

# Terminal 2
cd recommendation-service && npm install && npm run dev

# Terminal 3
cd frontend && npm install && npm run dev
```

Then open the frontend dev server URL printed in Terminal 3 (typically `http://localhost:5173`).

## Project Structure

```
smart-cart-optimization-engine/
├── frontend/                 # React + Vite UI
├── core-service/             # Products & cart API (Express + MongoDB)
├── recommendation-service/   # Recommendation scoring & LLM reasoning API
├── docs/
│   ├── API_CONTRACTS.md      # Full request/response contracts
│   └── DATABASE_SCHEMA.md    # MongoDB collection schemas
└── docker-compose.yml
```

## Contributing

- Keep [`docs/DATABASE_SCHEMA.md`](./docs/DATABASE_SCHEMA.md) in sync with any changes to `*.model.js` files.
- Keep [`docs/API_CONTRACTS.md`](./docs/API_CONTRACTS.md) in sync with any route changes.
