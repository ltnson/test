import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Checkbox, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-sky-500 grid grid-cols-4 gap-4  mx-1.5">
        <div className="h-48 opacity-70 order-4 flex justify-start rounded-xl bg-black  text-neutral-300">
          <p>Test 1</p>
        </div>
        <div className="h-96 order-3 opacity-50 flex shadow-lg justify-between items-end rounded-xl bg-black  text-red-900">
          <p>Test 2</p>
          <p>Test 2</p>
        </div>
        <div className="h-auto rounded-xl bg-orange-300  text-neutral-300">
          <p>Test 3</p>
        </div>
        <div className="h-4/5 rounded-xl bg-yellow-400 text-stone-800">
          <p>Test 4</p>
        </div>
        <div className="h-4/5 col-span-3 order-5 rounded-xl bg-yellow-400 text-stone-800">
          <p>Test 4</p>
        </div>
      </div>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
      <div>
        <Button variant="text">Hello World</Button>
      </div>
      <div>
        <Button variant="outline">Hello World</Button>
      </div>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  );
}

export default App;
