import React, { useState, useEffect } from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/main.module.css";
import List from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/list/list.jsx";
import Defualt from "../components/default/defualt";
import Popup from "../components/popup/popup";
import Display from "../components/display/display";
function MainPage() {
  //overlay variable for visibilty of overlay.
  let [overlay, setOverlay] = useState(false);
  function dissapear() {
    setOverlay(false);
  }
  function appear() {
    setOverlay(true);
  }

  //appearence of the display section
  let [display, setDisplay] = useState(false);
  function showDisplay() {
    setDisplay(true);
  }
  function hideDisplay() {
    setDisplay(false);
  }

  let [windowWidth, setWindowWidth] = useState(false);
  function handleClick() {
    if (window.innerWidth <= 320) setWindowWidth(window.innerWidth <= 320);
  }
  window.addEventListener("resize", handleClick);

  // which section should be opened
  let [groupName, setGroupName] = useState("");
  // storing the array in the state variable
  let [notedata, setNotedata] = useState(() => {
    const storedData = localStorage.getItem("notedata");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    localStorage.setItem("notedata", JSON.stringify(notedata));
  }, [notedata]);

  return (
    <div className={Styles.container}>
      <List
        appear={appear}
        dissapear={dissapear}
        notedata={notedata}
        setNotedata={setNotedata}
        showDisplay={showDisplay}
        groupName={groupName}
        setGroupName={setGroupName}
      />
      {display && (
        <Display
          hideDisplay={hideDisplay}
          notedata={notedata}
          setNotedata={setNotedata}
          groupName={groupName}
        />
      )}
      {!display && <Defualt />}
      {overlay && (
        <div className={Styles.overlayContainer}>
          <Popup
            appear={appear}
            dissapear={dissapear}
            notedata={notedata}
            setNotedata={setNotedata}
          />
        </div>
      )}
    </div>
  );
}

export default MainPage;
