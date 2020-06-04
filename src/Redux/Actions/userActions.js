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
  },
});

export const removeUser = () => ({
  type: "REMOVE_USER",
  user: {
    _id: "",
    premium: false,
    registeredCourses: [],
  },
});
