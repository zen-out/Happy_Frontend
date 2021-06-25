import React from "react";

// ti
export default function HappyForm(props) {
  return (
    <div className="card">
      <h5 className="card-header info-color white-text text-center py-4">
        <strong>be happy</strong>
      </h5>
      <div className="card-body px-lg-5 pt-0">
        <form
          className="text-center"
          style={{ color: "#757575" }}
          onSubmit={props.onSubmit}
        >
          <div className="md-form mt-3">
            <input
              type="text"
              value={props.time}
              onChange={props.timeOnChange}
              id="materialContactFormName"
              className="form-control"
              placeholder="Time"
            />
          </div>
          <div className="md-form mt-3">
            <input
              type="text"
              value={props.location}
              onChange={props.locationOnChange}
              id="locationLabel"
              className="form-control"
              placeholder="Location"
            />
          </div>

          <div className="md-form">
            <input
              type="text"
              value={props.activity}
              onChange={props.activityOnChange}
              id="materialContactFormEmail"
              className="form-control"
              placeholder="Activity"
            />
          </div>
          <div className="md-form mt-3">
            <input
              type="text"
              id="locationLabel"
              className="form-control"
              value={props.people}
              onChange={props.peopleOnChange}
              placeholder="People"
            />
          </div>
          <select
            onChange={props.moodOnChange}
            value={props.mood}
            className="browser-default custom-select mb-4"
          >
            <option value="Choose!" selected>
              Choose your option
            </option>
            <option value="happy">happy</option>
            <option value="neutral">neutral</option>
            <option value="sad">sad</option>
          </select>

          <input
            className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
