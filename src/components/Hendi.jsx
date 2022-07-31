import React from "react";
import "../style/Hendi.css";
import { useState } from "react";
import { ReactComponent as Main } from "./svgs/hendi-main.svg";
import { ReactComponent as Inside } from "./svgs/hendi-inside.svg";

import { Dialog } from "@mui/material";
import { imgSource, toolTips } from "../dictionaires/SVGLibrary";

function Hendi({ seeOutside }) {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const handleClick = (event) => {
    if (
      event.target.parentElement.id !== "instrument-window" &&
      event.target.parentElement.id !== "hendi"
    ) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  return (
    <div id="instrument-window">
      {seeOutside ? (
        <Main id="instrument" onClick={handleClick} />
      ) : (
        <Inside id="instrument" onClick={handleClick} />
      )}

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={imgSource[element]} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}

export default Hendi;
