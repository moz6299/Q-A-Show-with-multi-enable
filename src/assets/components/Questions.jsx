import React, { useState } from "react";
import "./Questions.css";
import data from "./data";

const Questions = () => {
  const [openId, setOpenId] = useState(null); // State to track currently open question id
  const [multiSelect, setMultiSelect] = useState(false); // State to toggle multi-select mode
  const [multiId, setMultiId] = useState([]); // State to store ids of selected questions in multi-select mode

  // Function to handle click on question header
  const handleSelect = (selectedid) => {
    if (!multiSelect) {
      // If not in multi-select mode
      console.log(selectedid);
      if (openId === selectedid) {
        // Toggle open/close state of clicked question
        setOpenId(null); // Close question if already open
      } else {
        setOpenId(selectedid); // Open clicked question
      }
    } else {
      // If in multi-select mode
      setMultiId((prev) => {
        if (prev.includes(selectedid)) {
          // Remove id from selected ids if already present
          return prev.filter((item) => item !== selectedid);
        } else {
          // Add id to selected ids if not already present
          return [...prev, selectedid];
        }
      });
    }
  };

  // Function to toggle multi-select mode
  const handleMulti = () => {
    setMultiSelect(!multiSelect); // Toggle multi-select mode
    setOpenId(null); // Close any open question when entering multi-select mode
    setMultiId([]); // Clear selected ids when entering or exiting multi-select mode
  };

  return (
    <div className="questions">
      {/* Button to toggle multi-select mode */}
      <button type="button" className="multibtn" onClick={handleMulti}>
        {multiSelect ? "Disable Multi Select" : "Enable Multi Select"}
      </button>
      {/* Mapping through data to render each question */}
      {data.map((item, index) => {
        return (
          <div key={index} className="ques">
            <h2 onClick={() => handleSelect(item.id)}>{item.question} +</h2>

            {((multiSelect === true && multiId.includes(item.id)) ||
              (multiSelect === false && openId === item.id)) && (
              <p>{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
