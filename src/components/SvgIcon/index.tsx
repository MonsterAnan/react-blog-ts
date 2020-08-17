import React from "react";
import style from "./icon.module.scss";

interface Iprops {
  use: string;
}
export default function Icon(props:Iprops) {
  return (
    <>
      <svg className={style.svg} aria-hidden="true">
        <use xlinkHref={`#${props.use}`}></use>
      </svg>
    </>
  );
}
