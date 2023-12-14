import React, { useState } from "react";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/main.module.css";
import List from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/list/list.jsx";
import Defualt from "../components/default/defualt";
import Popup from "../components/popup/popup";
function MainPage() {
  let [overlay, setOverlay] = useState(false);
  function dissapear() {
    setOverlay(false);
  }
  function appear() {
    setOverlay(true);
  }
  return (
    <div className={Styles.container}>
      <List appear={appear} dissapear={dissapear} />
      <Defualt />
      {overlay && (
        <div className={Styles.overlayContainer}>
          <Popup appear={appear} dissapear={dissapear} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
