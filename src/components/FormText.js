import React, { useState, useRef } from "react";

const FormText = (props) => {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase ", "success")
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase ", "success")
  };

  const textAreaRef = useRef(null);

  const handleCopyClick = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    props.showAlert("Text copied ", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces are removed successfully ", "success")
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            {props.heading}
          </h1>
        </label>
        <textarea
          ref={textAreaRef}
          className="form-control"
          value={text}
          id="myBox"
          rows={8}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#2b2b2b' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
            border: '1px solid grey'
          }}
        />
      </div>

      <button className="btn btn-primary mx-1"  onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-1" type="button" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" type="button" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container my-3">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary</h1>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {wordCount} words and {text.length} characters
        </p>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          Average time to read the text: {0.08 * wordCount} minutes
        </p>

        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview the text</h2>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
};

export default FormText;
