import React from "react";
//import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

//import "./styles.css";

function Example(props) {
  function down() {
    props.setCount(props.count - 1);
  }

  useEffect(() => {});

  return (
    <div>
      <button onClick={() => down()}>-</button>
      <p>{props.count}</p>
      <button onClick={props.click}>+</button>
    </div>
  );
}

function Example2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  let isVisible = count1 | count2 | count3 ? true : false;

  function checkAdault(count, setCount) {
    if (count1 <= 0) {
      console.log("성인이 필요해");
    } else {
      setCount(count + 1);
      /*
      const newCount = [...count];
      newCount[0] = 1;
      setCount(newCount);
      */
    }
  }
  function up() {
    setCount1(count1 + 1);
  }

  function resetNum() {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  }

  return (
    <>
      <Example count={count1} setCount={setCount1} click={up} />
      <Example
        count={count2}
        setCount={setCount2}
        click={() => checkAdault(count2, setCount2)}
      />
      <Example
        count={count3}
        setCount={setCount3}
        click={() => checkAdault(count3, setCount3)}
      />
      {isVisible && <button onClick={resetNum}>reset</button>}
    </>
  );
}

export default Example2;

