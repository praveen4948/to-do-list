import "./App.css";
import { useState } from "react";
import { List } from "./comp/List";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [n, setn] = useState(0);
  const [val, setVal] = useState([]);
  const [input, setinput] = useState("");

  // setVal((oldval) => {
  //   // let ip = "write and click + to add";
  //   return [...oldval, "click add l"];
  // });
  // setVal((oldval) => {
  //   let ip = "click delete icon to delete item";
  //   return [...oldval, ip];
  // });
  // setVal((oldval) => {
  //   let ip = "clickk cross to to cross the item";
  //   return [...oldval, ip];
  // });

  const inputf = (event) => {
    setinput(event.target.value);
  };

  const add = () => {
    if (input === "") alert("Text area is empty!");
    else {
      setVal((oldval) => {
        return [...oldval, input];
      });
    }
    setinput("");
    setn(n + 1);
  };

  const deleteitem = (id) => {
    setVal((oldval) => {
      return oldval.filter((arrelement, index) => {
        return index !== id;
      });
    });
    setn(n - 1);
  };
  return (
    <div className="main">
      <div className="content" style={{ height: `${330 + n * 40}px` }}>
        <h1 className="head">To do list </h1>
        <div className="input">
          <input
            type="text"
            placeholder="Add a Item"
            onChange={inputf}
            name="item"
            value={input}
            autocomplete="off"
          />
          <Button className="pbut" onClick={add}>
            <AddIcon />
          </Button>
        </div>
        <ol>
          {val.map((item, index) => {
            return (
              <List itemi={item} key={index} id={index} onselect={deleteitem} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
