export enum ChartType {
  LINE,
  BAR,
  DOUGHNUT,
}

export type TypeBar = keyof typeof ChartType;


export interface UserDataProps {
  setData: (data: any[]) => void,
  setLabels: (labels: string[]) => void
}

export interface ChartProps {
  data: number[];
  labels: string[];
  chartType: TypeBar;
}