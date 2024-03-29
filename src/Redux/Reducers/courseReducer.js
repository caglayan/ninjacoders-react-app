const courseDefaultState = {
  _id: "",
  name: "",
  isBelongNinja: false,
  isPremium: false,
};

const courseReducer = (state = courseDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_COURSE":
      return {
        ...state,
        ...action.course,
      };
    case "REMOVE_COURSE":
      return {
        ...courseDefaultState,
      };
    default:
      return state;
  }
};

export default courseReducer;
