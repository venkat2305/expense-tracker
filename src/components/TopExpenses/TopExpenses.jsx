import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import styles from "./TopExpenses.module.css";

const data = [
  { category: "Entertainment", value: 90 },
  { category: "Food", value: 50 },
  { category: "Travel", value: 30 },
];

const HorizontalBarChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={295}
      className={styles.BarChartContainer}
    >
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 0,
        }}
      >
        <XAxis type="number" hide={true} />
        <YAxis
          dataKey="category"
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="value" fill="#8884d8" barSize={35} />
      </BarChart>
    </ResponsiveContainer>
  );
};

function TopExpenses({trData,setTrData}) {
  return (
    <div className={styles.TopExpensesContainer}>
      <h2>Top Expenses</h2>
      <HorizontalBarChart trData={trData} setTrData={setTrData} />
    </div>
  );
}

export default TopExpenses;
