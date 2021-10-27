import React, { useEffect, useState } from "react";

const Card = (props:any) => {
    return (
      <li className={"unique-card"} key={props.indexValue}>
        {props.title}
      </li>
    );
}

export default Card;