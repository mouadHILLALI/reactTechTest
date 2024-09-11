import React, { useState } from "react";
import { Loading, ErrorComp, CollapsibleTable } from "./components/exports";
import { useFetchData } from "./api/hooks/fetchData";

export const App = () => {
  const [tab, setTab] = useState(0);
  const { data, error, isLoading } = useFetchData();

  if (isLoading) return <Loading />;
  if (error) return <ErrorComp />;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 p-2 flex flex-row items-center">
        <button
          onClick={() => setTab(1)}
          className={`py-4 px-2 text-sm text-[#344771] font-bold ${
            tab === 1 ? "border-b-[2px] border-[#7aa5d0]" : ""
          }`}
        >
          STANDARD
        </button>

        <button
          onClick={() => setTab(0)}
          className={`py-4 px-2 text-sm text-[#344771] font-bold ${
            tab === 0 ? "border-b-[2px] border-[#7aa5d0]" : ""
          }`}
        >
          ONLY RENOVATION
        </button>
      </div>
      

      {tab === 0 ? <CollapsibleTable data={data} /> : <h1>no data</h1>}

    </div>
  );
};
