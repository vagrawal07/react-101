import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>{return ( <h1 id="heading">Namaste React using JSX</h1>)};

//React funtional component

const HeaderComponent = ()=> (
<div className="container">
  {Title()}
  <Title></Title>
  <Title/>
<h1 className="heading">React 101</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
