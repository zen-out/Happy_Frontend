import {
  createAction,
  createSlice,
} from "@reduxjs/toolkit";
const addHappy = createAction("addHappy");
const getHappy = createAction("getHappy");
const deleteHappy = createAction("deleteHappy");
const editHappy = createAction( "editHappy" );

function GetHappyThunk () {
    return ( dispatch ) => {
        
    }
}

const sliceOfHappiness = createSlice({
  name: "happy",
    initialState: [],
  
});
