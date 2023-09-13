"use client";
import React, { useState } from "react";

const page = () => {
  const [titel, settitel] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const hendalsubmit = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { titel, desc }]);
    console.log(mainTask);
    settitel("");
    setdesc("");
  };

  const deletHandlaer = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  const EditHandlaer = ()=>{
    let editTask = [...mainTask];
    editTask(setmainTask)
  }

  let RenderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    RenderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.titel}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
            <button
              onClick={() => {
                deletHandlaer(i);
              }}
              className="bg-red-500 text-white rounded font-bold px-4 py-2"
            >
              Delet
            </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 font-bold text-5xl text-center ">
        meet to do list
      </h1>
      <form onSubmit={hendalsubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 px-4 py-5 m-5"
          placeholder="ennter titel here"
          value={titel}
          onChange={(e) => {
            settitel(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 px-4 py-5 m-5"
          placeholder="ennter details here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl m-5 rounded">
          add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{RenderTask}</ul>
      </div>
    </>
  );
};

export default page;
