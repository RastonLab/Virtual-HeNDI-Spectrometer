import React from "react";
import "../style/Hendi.css";
import { useState } from "react";
import { ReactComponent as Exterior } from "./svgs/hendi-exterior.svg";
import { ReactComponent as Interior } from "./svgs/hendi-interior.svg";

import { Dialog } from "@mui/material";
import { toolTips } from "../dictionaires/SVGLibrary";

export default function Hendi({ seeOutside }) {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState();

  const handleClick = (event) => {
    if (
      event.target.parentElement.id !== "instrument-window" &&
      event.target.parentElement.id !== "instrument" &&
      event.target.parentElement.id !== "hendi"
    ) {
      setElement(event.target.parentElement.id);
      setToggled(!toggled);
    }
  };

  return (
    <div id="instrument-window">

      <Interior className={`instrument ${!seeOutside ? '' : 'transparent'}`} onClick={handleClick} />
      <Exterior className={`instrument ${seeOutside ? '' : 'transparent'}`} onClick={handleClick} />

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={toolTips[element].image} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}
