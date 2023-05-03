import Chart from "components/chart/Charts";
import Header from "components/layouts/Header";
import { useState, useRef } from "react";
import { ChartType, TypeBar } from "src/types/ChartTypes";
import "../index.css";
import Button from "components/atoms/button";

const App = (): JSX.Element => {
  const [data, setData] = useState([100, 200, 300]);
  const [labels, setLabels] = useState(["A", "B", "C"]);
  const [chartType, setChartType] = useState<TypeBar>("BAR");

  const handleType = (typeBar: TypeBar) => {
    setChartType(typeBar);
  };

  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <div>CHART</div>
      <div className="flex flex-col">
        <div className=" flex-1 bg-white w-96 mt-10" ref={ref}>
          <Chart data={data} labels={labels} chartType={chartType} />
        </div>
      </div>
    </>
  );
};

export default App;
