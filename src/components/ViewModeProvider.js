import React, { useState } from "react";
import ViewModeContext from "../context/ViewModeContext";

const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("table"); // початковий режим відображення

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "table" ? "cards" : "table"));
  };

  const value = { viewMode, toggleViewMode };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};

export default ViewModeProvider;
