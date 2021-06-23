export function addHappy(state, action) {
  state.push(action.payload);
}
export function getHappy(state, action) {
  state = action.payload;
}

export function deleteHappy(state, action) {
  console.log("Delete Happy Reducer", action.payload.id);
  return state.filter(
    (todo) => todo.id !== action.payload.id
  );
}

export function editHappy(state, action) {
  console.log("edit happy reducer");
}
