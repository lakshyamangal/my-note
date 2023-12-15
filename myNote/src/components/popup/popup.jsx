import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/popup/popup.module.css";

function Popup(props) {
  // props regarding overlay
  let appear = props.appear;
  let dissapear = props.dissapear;

  // to unmount the popup component.
  function clean(e) {
    if (e.target.className == Styles.container) {
      dissapear();
    }
  }

  // value input form the text area
  let [value, setValue] = useState("");
  function title(e) {
    setValue(e.target.value);
  }
  //value input from color buttons
  let [colr, setColr] = useState("");
  function colrHandler(item) {
    setErr(false);
    setColr(item);
  }
  // props of the original array
  let notedata = props.notedata;
  let setNotedata = props.setNotedata;

  //error handlers
  let [err, setErr] = useState(false);
  let [errmss, setErrmss] = useState("");

  //find function in array
  function findGroup(name) {
    return notedata.some((notebook) => {
      if (notebook.name === name) return true;
    });
  }
  //function to add to group
  function addToGroup() {
    let groupTitle = "";
    let arr = Array.from(value);
    if (arr.length !== 0) {
      arr.some((item, index) => {
        if (index == 0) {
          groupTitle = groupTitle + item;
        } else if (item === " ") {
          groupTitle = groupTitle + (arr[index + 1] ? arr[index + 1] : NULL);
          return true;
        }
      });
      groupTitle = groupTitle.toUpperCase();
    }

    let title = groupTitle;
    let name = value;
    let colour = colr;
    if (name == "") {
      setErr(true);
      setErrmss("Enter the name of the group");
    } else if (colr == "") {
      setErr(true);
      setErrmss("Select any colour");
    } else if (!notedata.length) {
      setNotedata([
        ...notedata,
        { title: groupTitle, name: value, colour: colr, arr: [] },
      ]);
      dissapear();
    } else if (findGroup(name)) {
      setErr(true);
      setErrmss("Group existing , try other name");
    } else {
      setNotedata([
        ...notedata,
        { title: groupTitle, name: value, colour: colr, arr: [] },
      ]);
      dissapear();
    }
  }

  console.log(notedata);
  const buttons = ["purple", "pink", "sky", "orange", "blue", "violet"];
  return (
    <div className={Styles.container} onClick={clean}>
      <div className={Styles.popup}>
        <div className={Styles.new}>
          <p>Create New group</p>
        </div>
        <div className={Styles.span}>
          <span>Group Name</span>
        </div>
        <div className={Styles.input}>
          <input
            type="text"
            value={value}
            placeholder="Enter Group Name"
            onChange={title}
            onClick={() => {
              setErr(false);
              setColr("");
            }}
          />
        </div>
        <div className={Styles.choose}>
          <p>Choose colour</p>
        </div>
        <div className={Styles.button}>
          {buttons.map((item) => (
            <button
              name={item}
              className={`${Styles[item]} ${
                colr === item ? Styles.active : ""
              }`}
              onClick={() => colrHandler(item)}
            ></button>
          ))}
        </div>
        <div className={Styles.create}>
          {err && (
            <span
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faTriangleExclamation} />
              {errmss}
            </span>
          )}
          <button onClick={addToGroup}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
