 import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaChartLine,
  FaRobot,
  FaArrowUp,
  FaRupeeSign,
  FaBolt,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./Dashboard.css";

const salesData = [
  { day: "Mon", sales: 12 },
  { day: "Tue", sales: 18 },
  { day: "Wed", sales: 15 },
  { day: "Thu", sales: 25 },
  { day: "Fri", sales: 22 },
  { day: "Sat", sales: 34 },
  { day: "Sun", sales: 28 },
];

const cards = [
  {
    title: "Revenue",
    value: "₹1.24L",
    growth: "+12%",
    icon: <FaRupeeSign />,
    color: "#2563eb",
  },
  {
    title: "Products",
    value: "120",
    growth: "+8",
    icon: <FaBoxOpen />,
    color: "#16a34a",
  },
  {
    title: "Orders",
    value: "248",
    growth: "+18%",
    icon: <FaShoppingCart />,
    color: "#ea580c",
  },
  {
    title: "AI Score",
    value: "96%",
    growth: "+4%",
    icon: <FaRobot />,
    color: "#9333ea",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1>👋 Welcome Back</h1>

          <p>
            Smart Cart Optimization Engine
          </p>

          <span>
            AI-powered shopping insights & recommendations
          </span>
        </div>

        <button>
          <FaBolt />
          Generate Report
        </button>
      </motion.div>

      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div
              className="icon-circle"
              style={{ background: card.color }}
            >
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <h2>{card.value}</h2>

            <p className="growth">
              <FaArrowUp />
              {card.growth} this week
            </p>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-bottom">

        <motion.div
          className="chart-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>
            <FaChartLine />
            Weekly Sales
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
  data={salesData}
  margin={{ top: 10, right: 20, left: -20, bottom: 0 }}
>
              <defs>
                <linearGradient
                  id="sales"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="sales"
                stroke="#2563eb"
                fill="url(#sales)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="insights-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>🤖 AI Insights</h2>

          <ul>
            <li>Electronics generated highest revenue.</li>
            <li>Sales increased by 18% this week.</li>
            <li>Wireless Headphones are trending.</li>
            <li>Weekend traffic is 35% higher.</li>
            <li>AI recommendation confidence: 96%.</li>
          </ul>
        </motion.div>

      </div>

    </div>
  );
}

export default Dashboard;