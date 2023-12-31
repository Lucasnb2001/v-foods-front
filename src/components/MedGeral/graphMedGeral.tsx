
import { BarChart, Bar } from "recharts";

const MedGeralGraph = () => {
   const data =  [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
    ];

  return (
    <BarChart width={400} height={400} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
}
export default MedGeralGraph;