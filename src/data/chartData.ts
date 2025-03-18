export interface ChartData {
  name?: string;
  value: number;
  curve: number;
  color: string;
  label?: string;
}

export const chartData = [
  { name: "WEEK 1", value: 41, curve: 32, color: "#A9DEF4", label: "You" },
  { value: 62, curve: 50, color: "#9CC9DC" },
  { value: 83, curve: 74, color: "#69A8C2" },
  { value: 104, curve: 96, color: "#5190AA" },
  { name: "WEEK 4", value: 125, curve: 125, color: "#31728D", label: "Goal" },
];
