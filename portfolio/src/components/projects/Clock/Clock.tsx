import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

import ClockCSS from "./Clock.module.css";

const Title: React.FC<any> = props => {
  return (
    <h1>25 + 5 Clock</h1>
  );
}

type CountdownProps = {
  title: string,
  length: number,
  started: boolean,
  onEnded: () => any,
}

const Countdown: React.FC<CountdownProps> = props => {
  // relevant to the clock
  const [minutes, setMinutes] = useState(props.length);
  const [seconds, setSeconds] = useState(0);
  const intervalRef: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();

  // if the props.length change, minutes change
  // if minutes changed, reset seconds to 0
  const [prevLength, setPrevLength] = useState(props.length);
  if (prevLength !== props.length) {
    setPrevLength(props.length);
    setMinutes(props.length);
    setSeconds(0);
  }

  // when countdown finished, signal
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      console.log('signal');
      props.onEnded();
    }
  }, [props, minutes, seconds])

  // if the start button is clicked
  // start the timer
  useEffect(() => {
    if (props.started) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => (prev + 59) % 60);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [props.started]);

  // if seconds reached 59, dec minute by 1
  useEffect(() => {
    if (seconds === 59) {
      setMinutes(prev => prev - 1);
    }
  }, [seconds]);

  
  return (
    <div>
      <p>{props.title}</p>
      <p>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</p>
    </div>
  );
}

const Buttons: React.FC<any> = props => {
  return (
    <div className="d-flex flex-row">
      <div onClick={props.onClick} style={{cursor: "pointer"}}>
        <i className="fa-solid fa-play"></i>
        <i className="fa-solid fa-pause"></i>
      </div>
      <i className="fa-solid fa-rotate-right"></i>
    </div>
  );
}

const Clock: React.FC<any> = props => {
  const titles = ["Sessoion", "Break"];
  const [title, setTitle] = useState(titles[0]);

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(5);

  const [started, setStarted] = useState(false);

  type HandleClick = () => any;
  const handleClick:HandleClick = () => {
    setStarted(prev => !prev);
  }

  const handleEnded: () => any = () => {
    if (title === titles[0]) {
      setTitle(titles[1]);
    } else {
      setTitle(titles[0]);
    }
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <div className={`d-flex flex-column align-items-center justify-content-evenly`}>
        <Title />
        <div className={"d-flex flex-row"}>
          <Counter 
            title="Break Length" 
            length={breakLength}
            inc={() => {
              if (!started && breakLength < 60) {
                setBreakLength(prev => prev + 1)
              }
            }}
            dec={() => {
              if (!started && breakLength > 1) {
                setBreakLength(prev => prev - 1)
              }
            }}
           />
          <Counter 
            title="Session Length" 
            length={sessionLength}
            inc={() => {
              if (!started && sessionLength < 60) {
                setSessionLength(prev => prev + 1)
              }
            }}
            dec={() => {
              if (!started && sessionLength > 1) {
                setSessionLength(prev => prev - 1)
              }
            }}
            />
        </div>
        <Countdown 
          title={title} 
          length={title === titles[0] ? sessionLength : breakLength}
          started={started} 
          onEnded={handleEnded} 
        />
        <Buttons onClick={handleClick} />
      </div>
    </div>
  );
}

export default Clock;