import React from "react";
// import "./App.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Autocomplete({ placeholder, data, handleOnSelect, handleOnClear }) {
  // note: the id field is mandatory

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ReactSearchAutocomplete
            items={data}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            placeholder={placeholder}
            onClear={handleOnClear}
          />
        </div>
      </header>
    </div>
  );
}

export default Autocomplete;
