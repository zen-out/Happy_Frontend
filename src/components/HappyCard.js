import React from "react";

export default function HappyCard(props) {
  const happy = props.mood === "happy";
  const neutral = props.mood === "neutral";
  const sad = props.mood === "sad";
  return (
    <div className="searchCard card m-2">
      <div className="card-body">
        <div className="row">
          {/*  column  */}
          <div className="col-2">
            <span className="font-weight-bold">Time</span>
            <br />
            {props.time}
          </div>{" "}
          {/*  column  */}
          <div className="col-2">
            <span className="font-weight-bold">
              Location
            </span>
            <br />
            {props.location}
          </div>
          {/*  column  */}
          <div className="col-2">
            <span className="font-weight-bold">
              Activity
            </span>
            <br />
            {props.activity}
          </div>{" "}
          {/*  column  */}
          <div className="col-2">
            <span className="font-weight-bold">People</span>
            <br />
            {props.people}
          </div>
          {/* Third column  */}
          <div className="col-2">
            {happy && (
              <span className="mr-1 badge badge-pill badge-danger">
                happy
              </span>
            )}

            {neutral && (
              <span className="mr-2 badge badge-pill badge-warning">
                neutral
              </span>
            )}

            {sad && (
              <span className="mr-1 badge badge-pill badge-light">
                sad
              </span>
            )}
          </div>
          <div className="col-2">
            <button
              onClick={() => props.deleteHappy(props.id)}
              type="button"
              className="btn btn-sm btn-outline-danger"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
