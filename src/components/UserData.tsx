import React, { useState, useCallback } from "react";
import { UserDataProps } from "src/types/ChartTypes";

const UserData = ({ setData, setLabels }: UserDataProps) => {
  const handleData = useCallback((data: string) => {
    setData(data.split(","));
  }, []);

  const handleLabels = useCallback((labels: string) => {
    setLabels(labels.split(","));
  }, []);

  return (
    <section className="flex bg-gray-50 w-3/6 justify-center items-center flex-col rounded">
      <p className="text-slate-800 text-center mt-5">
        Enter The Data. Separate with{" "}
        <span className="px-1 py-1 bg-slate-200 text-xl"> , </span>
      </p>
      <div className="flex">
        <div className="p-5">
          <label htmlFor="data">Enter Your Data Here</label>
          <textarea
            name="data"
            id="data"
            placeholder="example: 100,200,300"
            rows={5}
            cols={33}
            onChange={(event) => handleData(event.target.value)}
          />
        </div>
        <div className="p-5">
          <label htmlFor="labels">Enter Your Labels Here</label>
          <textarea
            name="labels"
            id="labels"
            placeholder="example: A,B,C"
            rows={5}
            cols={33}
            onChange={(event) => handleLabels(event.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default UserData;
