import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HappyCard from "../components/HappyCard";
import HappyForm from "../components/HappyForm";
import HappyList from "../components/HappyList";
import Searchbar from "../components/Searchbar";
import Checkbox from "../components/Checkbox";
import {
  addHappy,
  getHappy,
  deleteHappy,
  editHappy,
  AddHappyThunk,
  DeleteHappyThunk,
  loadingHappy,
  GetHappyThunk,
} from "../redux/happy";
export default function HappyPage() {
  const [happyList, setHappyList] = useState([]);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [people, setPeople] = useState("");
  const [mood, setMood] = useState("");

  function timeOnChange(event) {
    setTime(event.target.value);
  }
  function locationOnChange(event) {
    setLocation(event.target.value);
  }
  function activityOnChange(event) {
    setActivity(event.target.value);
  }
  function peopleOnChange(event) {
    setPeople(event.target.value);
  }
  function moodOnChange(event) {
    setMood(event.target.value);
  }

  const dispatch = useDispatch();
  const happyStore = useSelector(
    (state) => state.happyStore.list
  );
  const loading = useSelector(
    (state) => state.happyStore.loading
  );
  console.log("loading", loading);
  console.log("happyStore.list in component", happyStore);
  useEffect(() => {
    dispatch(GetHappyThunk());
    setHappyList(happyStore);
  }, [loading]);
  function onSubmit(event) {
    event.preventDefault();
    dispatch(loadingHappy(true));
    let newHappyObject = {
      time: time,
      location: location,
      activity: activity,
      people: people,
      mood: mood,
    };
    console.log("on submit function", newHappyObject);
    dispatch(AddHappyThunk(newHappyObject));
  }
  function getHappy() {
    console.log("get happy button clicked");
    dispatch(GetHappyThunk());
    setHappyList(happyStore);
  }
  function addHappy() {
    console.log("add happy button clicked");
    console.log("help");
  }
  function deleteHappy(index) {
    dispatch(loadingHappy(true));
    console.log("delete happy button clicked");
    dispatch(DeleteHappyThunk(index));
  }
  return (
    <div>
      <button
        type="button"
        onClick={getHappy}
        className="btn btn-outline-dark waves-effect"
      >
        Get Started
      </button>

      <HappyForm
        time={time}
        location={location}
        activity={activity}
        people={people}
        mood={mood}
        onSubmit={onSubmit}
        timeOnChange={timeOnChange}
        locationOnChange={locationOnChange}
        activityOnChange={activityOnChange}
        peopleOnChange={peopleOnChange}
        moodOnChange={moodOnChange}
      />

      {/* <Searchbar /> */}
      <button
        type="button"
        onClick={getHappy}
        className="btn btn-outline-dark waves-effect"
      >
        Reload
      </button>

      {happyList.map((happy, index) => {
        return (
          <HappyCard
            key={happy.id}
            id={happy.id}
            time={happy.time}
            location={happy.location}
            activity={happy.activity}
            people={happy.people}
            mood={happy.mood}
            deleteHappy={deleteHappy}
          />
        );
      })}
    </div>
  );
}
