import React, { useState, useEffect } from "react";
import "./Tips.css";

function Tips() {
  const [list, setList] = useState();
  
  useEffect(() => {
    fetch("https://api.nomoreparties.co/todays-tips-rus")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setList(Object.values(res));
      });
  }, []);
  
  return (
    <div className="tips">
      <ul className="tips__list">
        {list &&
          list.map((item, i) => (
            <li className="tips__item" key={i}>
              {item.tip}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Tips;
