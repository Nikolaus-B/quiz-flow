import { FC } from "react";
import { DotProps } from "recharts";

interface DataPoint {
  name?: string;
  value: number;
  curve: number;
  color: string;
  label?: string;
}

interface CustomDotProps extends DotProps {
  index?: number;
  payload?: DataPoint;
  data: DataPoint[];
}

const CustomDot: FC<CustomDotProps> = ({
  cx = 0,
  cy = 0,
  index,
  payload,
  data,
}) => {
  const isEdgeDot = index === 0 || index === data.length - 1;
  if (!isEdgeDot || !payload) return null;

  return (
    <g transform={`translate(${cx}, ${cy - (payload.value - payload.curve)})`}>
      <circle r={13} fill={payload.color} stroke="white" strokeWidth={6} />
      {payload.label && (
        <foreignObject
          x={-25}
          y={"-25%"}
          width="50"
          height="30"
          className="overflow-visible"
        >
          <div
            className="bg-white px-[7px] py-[8px] rounded-[5px] text-[1rem] font-bold flex items-center justify-center"
            style={{ boxShadow: "0px 3px 11px rgba(0, 0, 0, 0.15)" }}
          >
            {payload.label}
          </div>
        </foreignObject>
      )}
    </g>
  );
};

export default CustomDot;
