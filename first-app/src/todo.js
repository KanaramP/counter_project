import React, { useState } from "react";
import Plan from "./Plan";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Todo(props) {
    //const [list, setList] = useState({ items: [], textt: "" });
    const [list, setList] = useState("");
    
  const handleChange = (e) => {
    // setList({ ...list, textt: e.target.value });
    // console.log(list);
    setList({...list,textt:e.target.value})
  };
  const handleAdd = (e) => {
    // const arr = [...list.items];
    // if (list?.textt.length !== 0) {
    //   arr.push(list.textt);
    //   setList({ ...list, items: arr, textt: "" });
    // }
    // console.log(arr, list);
    const arr=[...list.items,list.textt]
    console.log(arr)
    setList({items:arr,textt:" "})
    console.log(list)

  };
  return (
    <>
      <div className="row">
        <h1 className="text-center shadow-lg">Today's Plan</h1>
        <div className="col-9">
          <input
            type="text"
            placeholder="Write your plan here"
            value={list.textt}
            onChange={handleChange}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-warning" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

      <div className="conatiner-fluid">
        <ul className=" row ">
          {/* {list && list.items && list?.items?.map((e) => {
            return (
              <>
                <li>{e}</li>
              </>
            );
          })} */}
          {/* <Plan items={list.items} text={list.textt}/> */}
          


        </ul>
      </div>
    </>
  );
}

export default Todo;
