import React, { useState } from "react";

export default function Textarea(props) {
  // Introducing states and their management functions
  const [text, setText] = useState("");

  // OnCLick functions definition
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been converted to Upper Case!!!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to Lower Case!!!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard!!!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(
      "Extra spaces has been removed from your text!!!",
      "success"
    );
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text-Area cleared!!!", "success");
  };

  // Returning Module
  return (
    <div
      className={`container my-3 text-${
        props.mode === "light" ? "dark" : "light"
      }`}>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          <h2 className='mb-1'>
            Try Text-Manipulator: word counter, character counter, format text
          </h2>
        </label>
        <textarea
          value={text}
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
          onChange={handleChange}
          className='form-control'
          id='my-box'
          rows='8'></textarea>
      </div>
      <div className='container-fluid'>
        <button
          type='button'
          disabled={text.length === 0}
          onClick={handleUpClick}
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "aqua" }
              : { color: "white", backgroundColor: "blue" }
          }
          className='btn btn-sm btn-primary mx-2 my-1'>
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "aqua" }
              : { color: "white", backgroundColor: "blue" }
          }
          type='button'
          onClick={handleLoClick}
          className='btn btn-sm btn-primary mx-2 my-1'>
          Convert to LowerCase
        </button>
        <button
          type='button'
          disabled={text.length === 0}
          onClick={handleCopy}
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "aqua" }
              : { color: "white", backgroundColor: "blue" }
          }
          className='btn btn-sm btn-primary mx-2 my-1'>
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type='button'
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "aqua" }
              : { color: "white", backgroundColor: "blue" }
          }
          onClick={handleExtraSpace}
          className='btn btn-sm btn-primary mx-2 my-1'>
          Remove Extra Spaces
        </button>
        <button
          type='button'
          disabled={text.length === 0}
          onClick={handleClear}
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "aqua" }
              : { color: "white", backgroundColor: "blue" }
          }
          className='btn btn-sm btn-primary mx-2 my-1'>
          Clear Text
        </button>
      </div>
      <div className='container-fluid my-2'>
        <h3>Your Text Summary: </h3>
        <p>
          You have written{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          number of words and <b>{text.length}</b> characters.
        </p>
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
