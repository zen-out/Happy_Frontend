import React from "react";

function Checkbox(props) {
  let done = props.checked === "true";
  return (
    <div className="form-check">
      {done ? (
        <div>
          {" "}
          <input
            type="checkbox"
            className="form-check-input"
            id="materialContactFormCopy"
            checked
          />
          <label
            className="form-check-label"
            for="materialContactFormCopy"
          >
            {props.item}
          </label>
        </div>
      ) : (
        <div>
          {" "}
          <input
            type="checkbox"
            className="form-check-input"
            id="materialContactFormCopy"
          />
          <label
            className="form-check-label"
            for="materialContactFormCopy"
          >
            {props.item}
          </label>
        </div>
      )}
    </div>
  );
}

export default Checkbox;
