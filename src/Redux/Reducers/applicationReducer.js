const applicationDefaultState = {
  _id: "",
  comments: [],
  courseGroups: [],
};

const applicationReducer = (state = applicationDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_APPLICATION":
      return {
        ...state,
        ...action.application,
      };
    case "REMOVE_APPLICATION":
      return {
        ...applicationDefaultState,
      };
    default:
      return state;
  }
};

export default applicationReducer;
