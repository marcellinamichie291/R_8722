import React from "react";
import Описание from './Описания/Описание';
import Код from './Код/Код';

const Презентация =()=> {
  return (
    <div className="презентация">
      <div className="rContainer">
        <div className="rRow">
          <Описание />
          <Код />
        </div>
      </div>
    </div>
  )
}

export default Презентация;
