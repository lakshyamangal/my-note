import React, { useState } from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/display/display.module.css";
function Display(props) {
  let groupName = props.groupName;
  let hideDisplay = props.hideDisplay;
  let notedata = props.notedata;
  let setNotedata = props.setNotedata;
  let title = "";
  let colour = "";
  notedata.some((item) => {
    if (groupName === item.name) {
      title = item.title;
      colour = item.colour;
      return true;
    }
  });
  //input
  let [inputString, setInputString] = useState("");
  function inputHandler(e) {
    setInputString(e.target.value);
  }
  function submitHandler() {
    let time = new Date().toLocaleTimeString;
    let date = new Date().toLocaleDateString;
    let story = inputString;
    let updatedData = notedata.map((notebook) => {
      if (notebook.name === groupName) {
        // Add the new note to the arr array
        return {
          ...notebook,
          arr: [
            ...notebook.arr,
            { creation_time: time, creation_date: date, creation_story: story },
          ],
        };
      }
      return notebook;
    });
    console.log(updatedData);

    // Update the state with the new data
    setNotedata(updatedData);
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <button className={Styles[colour]}>{title}</button>{" "}
        <span> {groupName}</span>
      </div>
      <div className={Styles.notes}>
        <div className={Styles.scroll}>
          {notedata.some((item) => {
            if (item.name == groupName) {
              item.arr.map((notes) => (
                <div>
                  <div>
                    <span>{notes.time}</span>
                    <span>{notes.date}</span>
                  </div>
                  <div>{notes.story}</div>
                </div>
              ));
              return true;
            }
          })}
        </div>
      </div>
      <div className={Styles.input}>
        <div className={Styles.textarea}>
          <input value={inputString} type="text" onChange={inputHandler} />
        </div>
        <div className={Styles.send} onClick={submitHandler}>
          ➡️
        </div>
      </div>
    </div>
  );
}

export default Display;
