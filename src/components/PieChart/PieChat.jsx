import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartComponent({ trData, setTrData }) {
  console.log(
    trData?.filter((currItem) => currItem.category === "entertainment").reduce((acc,currItem) => acc+parseInt(currItem.price),0)
  );

  // const etValue = trData.filter(currItem => currItem.category === "entertainment")
  // .reduce((acc,currItem) => acc+parseInt(currItem.price),0)

  // const foodValue = trData.filter(currItem => currItem.category === "food")
  // .reduce((acc,currItem) => acc+parseInt(currItem.price),0)

  // const travelValue = trData.filter(currItem => currItem.category === "travel")
  // .reduce((acc,currItem) => acc+parseInt(currItem.price),0)

  // console.log(etValue,foodValue,travelValue)

  const data = [
    { name: "Entertainment", value: 400 },
    { name: "Food", value: 300 },
    { name: "Travel", value: 300 },
  ];
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={80}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
