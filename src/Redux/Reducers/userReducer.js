const userDefaultState = {
  _id: "",
  premiumCourseGroups: [],
  registeredCourses: [],
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user,
      };
    case "REMOVE_USER":
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
