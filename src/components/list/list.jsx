import React from "react";
import Styles from "./list.module.css";

function List(props) {
  let appear = props.appear;
  let dissapear = props.dissapear;
  let notedata = props.notedata;
  let showDisplay = props.showDisplay;
  let groupName = props.groupName;
  let setGroupName = props.setGroupName;
  function handler(name) {
    setGroupName(name);
    showDisplay();
  }
  return (
    // <div className={Styles.container}>
    <div className={Styles.item1}>
      <div className={Styles.header}>
        <p>Pocket Notes</p>
      </div>

      <div className={Styles.notes}>
        <div className={Styles.scroll}>
          {notedata.map((item) => (
            <div
              className={Styles.div}
              onClick={() => {
                handler(item.name);
              }}
            >
              <button className={Styles[item.colour]}>{item.title}</button>
              {item.name}
            </div>
          ))}
          <button className={Styles.plus} onClick={appear}>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
