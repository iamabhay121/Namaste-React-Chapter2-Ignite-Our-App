import React from "react";
import ReactDOM  from "react-dom/client";

const stuff = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"h1"},"I am H1 Tag"),React.createElement("h2",{id:"h2"},"I am H2 Tag")]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(stuff);
