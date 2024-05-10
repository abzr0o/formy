import React, { useState } from "react";
import { DataTable } from "./Table";
import { Response, columns } from "./Columns";

const Responses = () => {
  const dataString = localStorage.getItem("data");

  const [data, SetData] = useState<Response[]>(
    dataString ? JSON.parse(dataString) : []
  );
  console.log(data);
  return (
    <div className="w-full px-16 mt-20">
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Responses;
