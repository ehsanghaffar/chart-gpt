export enum ChartType {
  LINE,
  BAR,
  DOUGHNUT,
}

export type TypeBar = keyof typeof ChartType;
