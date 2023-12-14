import React from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/list/list.module.css";

function List(props) {
  let appear = props.appear;
  let dissapear = props.dissapear;
  return (
    // <div className={Styles.container}>
    <div className={Styles.item1}>
      <p>Pocket Notes</p>
      <div className={Styles.notes}>
        <button onClick={appear}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default List;
