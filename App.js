import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = (<h1 id="heading">Namaste React using JSX</h1>);

//React funtional component

const HeaderComponent = ()=>{
  return <h1 className="heading">React 101</h1>
};

const HeaderComponent2 = ()=> <h1 className="heading">React 101</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
