import {
  PieChart,
  LineChart,
  Pie,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
  CartesianGrid,
} from "recharts";
import WeatherWidget from "./WeatherWidget";
import RecentActivity from "./RecentActivity";
import DisplayCard from "./DisplayCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { weather } = useSelector((state) => state.weather);

  const data = [
    { name: "Temp_min", value: weather?.main?.temp_min },
    { name: "temp_max", value: weather?.main?.temp_max },
    { name: "feels_like", value: weather?.main?.feels_like },
  ];
  const Bardata = [
    {
      name: weather?.name,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <DisplayCard heading="Tempreture Graph">
          <LineChart width={320} height={200} data={data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </DisplayCard>
        <DisplayCard heading="temprature pi-chart">
          {/*  */}
          <PieChart width={350} height={200}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </DisplayCard>
        <DisplayCard>
          <BarChart
            width={350}
            height={200}
            data={Bardata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </DisplayCard>

        <WeatherWidget />
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;
