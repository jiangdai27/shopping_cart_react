const initialState = {
  number: 0,
  id:Number
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTHANDLER":
      return {
        number: state.number + 1,
        id:action.payload
      };
    case "DECREMENTHANDLER":
      return {
        number: (state.number - 1) < 0 ? 0 : state.number - 1,
        id:action.payload
      };
    default:
      return state;
  }
};
