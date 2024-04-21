import React from "react";

type CounterProps = {
  title: string,
  length: number,
  inc: () => any,
  dec: () => any,
}

const Counter: React.FC<CounterProps> = props => {
  return (
    <div className="d-flex flex-column">
      <p>{props.title}</p>
      <div className="d-flex flex-row">
        <i className="fa-solid fa-up-long" onClick={props.inc}></i>
        <p>{props.length.toString().padStart(2, '0')}</p>
        <i className="fa-solid fa-down-long" onClick={props.dec}></i>
      </div>
    </div>
  );
}

export default Counter;