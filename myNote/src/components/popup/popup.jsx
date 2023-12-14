import React from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/popup/popup.module.css";

function Popup(props) {
  let appear = props.appear;
  let dissapear = props.dissapear;
  return (
    <div className={Styles.container} onClick={dissapear}>
      <div className={Styles.popup} onClick={appear}>
        <div className={Styles.new}>
          <p>Create New group</p>
        </div>
        <div className={Styles.span}>
          <span>Group Name</span>
        </div>
        <div className={Styles.input}>
          <input type="text" name="Enter Group Name" />
        </div>
        <div className={Styles.choose}>
          <p>Choose colour</p>
        </div>
        <div className={Styles.button}>
          <button className={Styles.purple}></button>
          <button className={Styles.pink}></button>
          <button className={Styles.sky}></button>
          <button className={Styles.orange}></button>
          <button className={Styles.blue}></button>
          <button className={Styles.violet}></button>
        </div>
        <div className={Styles.create}>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
