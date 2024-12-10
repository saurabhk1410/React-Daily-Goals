/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import Taskitem from "./Taskitem";
function App() {
  const initialArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
  const [Task, setTask] = useState(initialArray);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  
  function deletefunc(index){
    const filter=Task.filter((item,key)=>{
      return key!=index
  
    })
    setTask(filter);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Task));
  }, [Task]);

  return (
    <div className="min-h-screen w-full bg-slate-400 flex flex-col">
      <div className="w-full bg-blue-500 text-center font-semibold text-xl py-4 text-slate-900">
        Get Ready To Complete Daily Goals
      </div>
      <div className=" w-2/3 mx-auto bg-slate-300 flex-1 px-20 py-16 flex flex-col items-center">
        <h1 className=" text-3xl font-bold">DAILY GOALS</h1>
        <input
          type="text"
          className="w-2/3 mt-10 mb-3 px-2 py-1 outline-none"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
        <input
          type="text"
          className="  w-2/3 mb-4 px-2 py-1 outline-none"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
        />
        <button
          className=" w-2/3 mb-10 bg-slate-900 text-white py-2"
          onClick={(e) => {
            if(Title!="")
            {
              e.preventDefault();
              const newTask = {Title,Description};
              setTask([...Task, newTask]);
              setTitle("");
              setDescription("");
            }
          }}
        >
          ADD
        </button>
        {
          Task.map((item,index)=>{
            return(
              <Taskitem  key={index} title={item.Title} description={item.Description} deletefunc={deletefunc} Itemindex={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
