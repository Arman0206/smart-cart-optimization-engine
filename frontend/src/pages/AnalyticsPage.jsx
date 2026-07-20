 import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaRupeeSign,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

import { IoTrendingUp } from "react-icons/io5";

const salesData = [
  { day: "Mon", sales: 20 },
  { day: "Tue", sales: 35 },
  { day: "Wed", sales: 28 },
  { day: "Thu", sales: 42 },
  { day: "Fri", sales: 50 },
  { day: "Sat", sales: 65 },
  { day: "Sun", sales: 55 },
];

const categoryData = [
  { name: "Electronics", value: 60 },
  { name: "Fashion", value: 20 },
  { name: "Groceries", value: 12 },
  { name: "Others", value: 8 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

const cards = [
  {
    title: "Revenue",
    value: "₹1.24L",
    icon: <FaRupeeSign size={30} />,
    color: "#2563eb",
  },
  {
    title: "Orders",
    value: "248",
    icon: <FaShoppingCart size={30} />,
    color: "#10b981",
  },
  {
    title: "Customers",
    value: "176",
    icon: <FaUsers size={30} />,
    color: "#f59e0b",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: <IoTrendingUp size={30} />,
    color: "#8b5cf6",
  },
];

function AnalyticsPage() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "8px",
          color: "#1f2937",
        }}
      >
        📊 Analytics Dashboard
      </h1>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "30px",
        }}
      >
        Real-time overview of Smart Cart performance
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: card.color,
              color: "white",
              borderRadius: "18px",
              padding: "22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
            }}
          >
            <div>
              <p style={{ margin: 0, opacity: 0.9 }}>{card.title}</p>

              <h2
                style={{
                  marginTop: "10px",
                  marginBottom: 0,
                  fontSize: "30px",
                }}
              >
                {card.value}
              </h2>
            </div>

            {card.icon}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "18px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            height: "380px",
          }}
        >
          <h2>📈 Weekly Sales</h2>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2563eb" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "18px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            height: "380px",
          }}
        >
          <h2>🛍 Categories</h2>

          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                outerRadius={95}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <h2>🏆 Top Selling Products</h2>

          {[
            ["Laptop",45],
            ["Headphones",38],
            ["Smart Watch",29],
            ["Keyboard",20],
          ].map(([name,value])=>(
            <div
              key={name}
              style={{
                marginBottom:"18px",
              }}
            >
              <div
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  marginBottom:"6px",
                }}
              >
                <span>{name}</span>
                <strong>{value} Sales</strong>
              </div>

              <div
                style={{
                  width:"100%",
                  height:"10px",
                  background:"#e5e7eb",
                  borderRadius:"20px",
                }}
              >
                <div
                  style={{
                    width:`${value*2}%`,
                    height:"100%",
                    background:"#2563eb",
                    borderRadius:"20px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color:"white",
            borderRadius:"18px",
            padding:"25px",
            boxShadow:"0 5px 15px rgba(0,0,0,.15)",
          }}
        >
          <h2>🤖 AI Insights</h2>

          <ul
            style={{
              lineHeight:"2",
              paddingLeft:"18px",
              marginTop:"20px",
            }}
          >
            <li>Electronics contribute 60% of total sales.</li>
            <li>Revenue increased by 18% this week.</li>
            <li>Laptops are the best-selling products.</li>
            <li>Weekend sales are 30% higher than weekdays.</li>
            <li>Expected growth next week: <strong>+12%</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;