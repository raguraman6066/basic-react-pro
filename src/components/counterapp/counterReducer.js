const counterReducer = (state, action) => {
  //state- current state data
  if (action.type == "increment") {
    state = { count: state.count + 1 };
  } else if (action.type == "decrement") {
    state = { count: state.count - 1 };
  } else if (action.type == "clear") {
    state = { count: 0 };
  }

  return state;
};
export default counterReducer;
