export const updateUser = ({
  _id = "",
  email = "",
  password = "",
  givenName = "",
  familyName = "",
  token = "",
  avatarImage = "",
  premium = false,
  shoppingCart = [],
  registeredCourses = [],
  premiumCourseGroups = [],
} = {}) => ({
  type: "UPDATE_USER",
  user: {
    _id,
    email,
    password,
    givenName,
    familyName,
    token,
    avatarImage,
    shoppingCart,
    premium,
    registeredCourses,
    premiumCourseGroups,
  },
});

export const removeUser = () => ({
  type: "REMOVE_USER",
  user: {
    _id: "",
    premiumCourseGroups: [],
    registeredCourses: [],
  },
});
