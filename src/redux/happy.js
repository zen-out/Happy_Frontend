import {
  createAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "redaxios";

/**********************************************
 * createAction API 
 * ==================================
 * const addTodo = createAction('ADD_TODO')
addTodo({ text: 'Buy milk' })
// {type : "ADD_TODO", payload : {text : "Buy milk"}})
 ***********************************************/
// const addHappy = createAction("addHappy");
// const getHappy = createAction("getHappy");
// const deleteHappy = createAction("deleteHappy");
// const editHappy = createAction("editHappy");

/**********************************************
 *
 * ==================================
 * actions:
 * happy/addHappy
 * happy/getHappy
 * happy/deleteHappy
 * happy/editHappy
 ***********************************************/
export const sliceOfHappiness = createSlice({
  name: "happy",
  initialState: { list: [], message: "", loading: false },
  reducers: {
    loadingHappy: (state, action) => {
      state.loading = action.payload;
    },
    addHappy: (state, action) => {
      state.list.push(action.payload);
    },
    getHappy: (state, action) => {
      console.log("get happy reducer", action.payload);
      state.list = action.payload;
    },
    deleteHappy: (state, action) => {
      console.log("delete happy reducer", action.payload);
      state.list.filter(
        (happy) => happy.id !== action.payload
      );
    },
    editHappy: (state, action) => {
      const index = state.list.findIndex(
        (happy) => happy.id === action.payload.id
      );
      state.list[index] = action.payload.newHappy;
    },
    happyError: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  loadingHappy,
  addHappy,
  getHappy,
  deleteHappy,
  editHappy,
  happyError,
} = sliceOfHappiness.actions;

export function AddHappyThunk(newHappy) {
  console.log("new happy", newHappy);

  return (dispatch) => {
    return axios({
      method: "post",
      url: "http://localhost:3001/api/happy",
      data: newHappy,
    })
      .then((id) => {
        newHappy.id = id;
        console.log("submitted to backend", newHappy);
        dispatch(loadingHappy(false));
        dispatch(addHappy(newHappy));
      })
      .catch((error) => {
        dispatch(loadingHappy(false));
        dispatch(happyError(error));
      });
  };
}
export function GetHappyThunk() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/happy")
      .then((response) => {
        let data = response.data;
        console.log("response", data);
        dispatch(getHappy(response.data));
        dispatch(loadingHappy(false));
      })
      .catch((error) => {
        dispatch(happyError("error", error));
        dispatch(loadingHappy(false));
      });
  };
}

export function DeleteHappyThunk(id) {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3001/api/happy/${id}`,
    })
      .then((deleted) => {
        console.log("deleted in thunk", deleted);
        dispatch(deleteHappy(id));
        dispatch(loadingHappy(false));
      })
      .catch((error) => {
        dispatch(happyError("error", error));
        dispatch(loadingHappy(false));
      });
  };
}
