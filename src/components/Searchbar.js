import React from "react";

function Searchbar() {
  return (
    <div className="card">
      <div className="card-body p-2 d-flex flex-row justify-content-center align-items-center">
        {/* Test */}
        <div className="input-group m-1">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="m-2"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
          />
          {/* <div className="input-group-append"> */}

          {/* </div> */}
        </div>
        <input
          type="submit"
          value="Search"
          className="btn btn-sm btn-danger btn-rounded"
        />
        {/* Test */}
      </div>
    </div>
  );
}

export default Searchbar;
