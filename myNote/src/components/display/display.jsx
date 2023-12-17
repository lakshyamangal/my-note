import React, { useState, useMemo } from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/display/display.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Display(props) {
  let groupName = props.groupName;
  let hideDisplay = props.hideDisplay;
  let notedata = props.notedata;
  let setNotedata = props.setNotedata;
  let title = "";
  let colour = "";
  // giving the current component its's title and colour
  let current = notedata.find((item) => item.name === groupName);
  title = current.title;
  colour = current.colour;

  //input
  let [inputString, setInputString] = useState("");
  function inputHandler(e) {
    setInputString(e.target.value);
  }
  function submitHandler() {
    if (inputString !== "") {
      let story = inputString;
      let updatedData = notedata.map((notebook) => {
        if (notebook.name === groupName) {
          // Add the new note to the arr array
          return {
            ...notebook,
            arr: [
              ...notebook.arr,
              {
                creation_date: new Date(),
                creation_story: story,
              },
            ],
          };
        }
        return notebook;
      });
      console.log(updatedData);

      // Update the state with the new data
      setNotedata(updatedData);
      setInputString("");
    }
  }
  let [appearSubmit, setAppearSubmit] = useState(false);
  console.log(inputString);
  useMemo(() => {
    if (inputString !== "") {
      setAppearSubmit(true);
    } else {
      setAppearSubmit(false);
    }
  }, [inputString]);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <button className={Styles[colour]}>{title}</button>{" "}
        <span> {groupName}</span>
      </div>
      <div className={Styles.notes}>
        <div className={Styles.scroll}>
          {current.arr.map((notes) => (
            <div className={Styles.scrollChild}>
              <div className={Styles.child1}>
                <p>{notes.creation_story}</p>
              </div>
              <div className={Styles.child2}>
                {/* <span>{notes.creation_date}</span>
                <span>{notes.creation_date}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.input}>
        <div className={Styles.textarea}>
          <textarea
            placeholder="Enter Your Text ...."
            value={inputString}
            type="text"
            onChange={inputHandler}
          />
        </div>
        <div className={Styles.send} onClick={submitHandler}>
          {!appearSubmit && (
            <FontAwesomeIcon style={{ color: "grey" }} icon={faPaperPlane} />
          )}
          {appearSubmit && <FontAwesomeIcon icon={faPaperPlane} />}
        </div>
      </div>
    </div>
  );
}

export default Display;
