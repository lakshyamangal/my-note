import React, { useState } from "react";

const NoteTakingApp = () => {
  const [noteData, setNoteData] = useState([
    { title: "Notebook 1", arr: [] },
    { title: "Notebook 2", arr: [] },
    // ... other notebooks
  ]);

  const addNote = (title, newNote) => {
    // Find the notebook with the specified title
    const updatedData = noteData.map((notebook) => {
      if (notebook.title === title) {
        // Add the new note to the arr array
        return {
          ...notebook,
          arr: [...notebook.arr, newNote],
        };
      }
      return notebook;
    });

    // Update the state with the new data
    setNoteData(updatedData);
  };

  // Example: Add a new note to "Notebook 1"
  const handleAddNote = () => {
    const newNote = {
      date: "2023-01-01",
      time: "12:00 PM",
      note: "This is a new note.",
    };

    addNote("Notebook 1", newNote);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <button onClick={handleAddNote}>Add Note to Notebook 1</button>

      {/* Display the current state of the data */}
      <pre>{JSON.stringify(noteData, null, 2)}</pre>
    </div>
  );
};

export default NoteTakingApp;

/////////
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [titles, setTitles] = useState([]);
  function handler(e) {
    console.log(e.target.value);
    let title = e.target.value;
    setTitles([...titles, { title: title, arr: [] }]);
  }
  function handler2(e) {
    let content = e.target.value;
    let time = new Date().toLocaleTimeString;
    let date = new Date().toLocaleDateString;
    let arr = titles.find((obj) => obj.title === title);
  }
  return (
    <div>
      <input type="text" onChange={handler} />
      <input type="text" onChange={handler2} />
    </div>
  );
}
export default App;

{buttons.map((item) => (
  <button
    name={item}
    className={`${styles[item]} ${colr === item ? styles.active : ''}`}
    onClick={() => handleClick(item)}
  >
  </button>
))}