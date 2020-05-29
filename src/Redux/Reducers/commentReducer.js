const commentDefaultState = {
  _id: "",
  isUpdating: false,
};

const commentReducer = (state = commentDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_COMMENT":
      return {
        ...state,
        ...action.comment,
      };
    case "REMOVE_COMMENT":
      return {
        ...commentDefaultState,
      };
    default:
      return state;
  }
};

export default commentReducer;
