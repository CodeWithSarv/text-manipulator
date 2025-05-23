import React from "react";

export default function Alert(props) {
  const Capitalise = (word) => {
    let newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role='alert'>
          <strong>
            {Capitalise(props.alert.type)}: {props.alert.msg}
          </strong>
        </div>
      )}
    </div>
  );
}
