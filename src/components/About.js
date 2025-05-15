import React from "react";

export default function About(props) {
  return (
    <div
      className='container my-5 mb-2'
      style={props.mode === "light" ? { color: "black" } : { color: "white" }}>
      <h3>About Us</h3>
      <div className='accordion' id='accordionExample'>
        <div
          className='accordion-item'
          style={props.mode === "light" ? {} : { border: "2px solid #1a0242" }}>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1a0242" }
              }>
              <strong>Analyze your text:</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'>
            <div
              className='accordion-body'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1e2f3e" }
              }>
              <p>
                Text Manipulator app gives you a way to analyze your text
                quickly and effieciently. Be it word count, character count,
                text-examination or text-manipulation.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className='accordion-item'
          style={props.mode === "light" ? {} : { border: "2px solid #1a0242" }}>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1a0242" }
              }>
              <strong>Free to use:</strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>
            <div
              className='accordion-body'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1e2f3e" }
              }>
              <p>
                Text Manipulator is a free character counter toolthat provides
                instant character count and word count statistics for a given
                text. text Manipulator reports the number of words and
                characters. Thus it is suitable for writing text with
                word/character limit.
              </p>
            </div>
          </div>
        </div>
        <div
          className='accordion-item'
          style={props.mode === "light" ? {} : { border: "2px solid #1a0242" }}>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1a0242" }
              }>
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>
            <div
              className='accordion-body'
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "#1e2f3e" }
              }>
              <p>
                This word counter App works in any web browser such as Chrome,
                Firefox, Internet Explorer, Safari, Opera. it suits to count
                charcaters in facebook, blog, books, excel documents, pdf
                documents, essay etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
