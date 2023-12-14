import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import poster from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/assets/images/poster.png";
import Styles from "/Users/lakshya_mangal/Desktop/cuvette/my-note/myNote/src/components/default/default.module.css";

function Defualt() {
  return (
    <div className={Styles.item2}>
      <div className={Styles.header}>
        <img src={poster} alt="Note Taking Simplified" />
        <p className={Styles.Pocket}>Pocket Notes</p>
        <p>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
      </div>
      <div className={Styles.footer}>
        <p>
          <FontAwesomeIcon icon={faLock} /> end-to-end encrypted
        </p>
      </div>
    </div>
  );
}

export default Defualt;
