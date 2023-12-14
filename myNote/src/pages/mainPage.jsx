import React, { useState, useEffect } from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/main.module.css";
import List from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/list/list.jsx";
import Defualt from "../components/default/defualt";
import Popup from "../components/popup/popup";
function MainPage() {
  //overlay variable for visibilty of overlay.
  let [overlay, setOverlay] = useState(false);
  function dissapear() {
    setOverlay(false);
  }
  function appear() {
    setOverlay(true);
  }
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
      />
      <Defualt />
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
