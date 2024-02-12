import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { globalStateContext } from "../../App";
import SummaryCard from "../../pages/Doctor/Components/SummaryCard/SummaryCard";
import "./styles.css";

const Stack = (props) => {
  const { darkMode } = useContext(globalStateContext);
  const ref = useRef(null);
  const [disable, setDisable] = useState(false);
  const handleNextClick = () => {
    setDisable(true);
    const child = ref.current.children[props.data.length - 1];
    child.classList.add("fade-up");
    setTimeout(() => {
      child.classList.remove("fade-up");
      // child.style.bottom

      ref.current.removeChild(ref.current.children[props.data.length - 1]);
      ref.current.prepend(child);
      props.data.map((data, i) => {
        ref.current.children[i].style.bottom = i * 10 + "px";
        ref.current.children[i].style.transform = `scale(${
          0.9 + ((i / (props.data.length - 1)) * 1) / 10
        } )`;
      });
      setDisable(false);
    }, 200);
  };

  // const handlePrevClick = function () {};

  return (
    <div className='stack-container'>
      <div className='card-stack'>
        <ul ref={ref} className='card-list'>
          {props.data.map((item, i) => {
            return (
              <li
                className='card'
                key={i}
                style={{
                  bottom: i * 10 + "px",
                  transform: `scale(${
                    0.9 + ((i / (props.data.length - 1)) * 1) / 10
                  } )`,
                }}
              >
                <SummaryCard
                  title={item.title}
                  content={item.content}
                  indicatorWidth={55 / props.data.length}
                  x={36 - i * (36 / (props.data.length - 1))}
                />
              </li>
            );
          })}
        </ul>

        <button
          className='buttons next'
          href='#'
          onClick={handleNextClick}
          disabled={disable}
        >
          <i class='fa-solid fa-angle-right'></i>
        </button>
      </div>
    </div>
  );
};

export default Stack;
