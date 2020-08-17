import React,{ReactChild,ReactText} from "react";
import style from "./card.module.scss";
interface Iprops {
  className: ReactText;
  children: ReactChild;
}
export default function Card(props:Iprops) {
  return (
    <div className={`${style.card} ${props.className}`}>
      <div className={style.cardContent}>{props.children}</div>
    </div>
  );
}
