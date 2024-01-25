import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World From React "),
    React.createElement("h2", { id: "heading" }, "Hello World From React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World From React"),
    React.createElement("h2", { id: "heading" }, "Hello World From React"),
  ]),
]);

//JSX - HTML-like or XML-like syntax

const jsxHeading = (<h1 id="heading">Namaste React using JSX</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
