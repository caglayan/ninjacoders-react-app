const questionDefaultState = {
  _id: "",
  isUpdating: false,
};

const questionReducer = (state = questionDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_QUESTION":
      return {
        ...state,
        ...action.question,
      };
    case "REMOVE_QUESTION":
      return {
        ...questionDefaultState,
      };
    default:
      return state;
  }
};

export default questionReducer;
