import { chartData } from "@/data/chartData";
import {
  Bar,
  XAxis,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  ComposedChart,
} from "recharts";
import CustomDot from "../elements/CustomDot/CustomDot";
import { FC } from "react";

const AchievementChart: FC = () => {
  return (
    <div className="w-[32.7rem] h-[19.7rem] relative flex flex-col">
      <p className="text-[#666] text-[1.2rem] leading-[120%]  text-left w-[13.2rem]">
        Take a quiz to get <br /> a personalized plan
      </p>
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fontSize: "1rem" }}
            className="font-bold"
            tickLine={false}
          />

          <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={43}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>

          <Line
            type="basis"
            dataKey="curve"
            stroke="#000"
            strokeWidth={2}
            dot={<CustomDot data={chartData} />}
            activeDot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AchievementChart;
