import Chart from "components/chart/Charts";
import Header from "components/layouts/Header";
import { useState, useRef } from "react";
import { TypeBar } from "src/types/ChartTypes";
import "../index.css";
import UserData from "components/UserData";

const App = (): JSX.Element => {
  const [data, setData] = useState([100, 200, 300]);
  const [labels, setLabels] = useState(["A", "B", "C"]);
  const [chartType, setChartType] = useState<TypeBar>("LINE");

  const ChangeType = (typeBar: TypeBar) => {
    setChartType(typeBar);
  };

  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <div className="w-full flex justify-center flex-col items-center my-5">
        <div className="text-2xl font-mono text-slate-800">Chart GPT</div>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex justify-center flex-col items-center">
          <UserData setData={setData} setLabels={setLabels} />
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className=" flex-1 bg-white w-96 mt-10" ref={ref}>
            <Chart data={data} labels={labels} chartType={chartType} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
