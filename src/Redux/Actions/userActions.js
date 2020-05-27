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
  },
});

export const removeUser = () => ({
  type: "REMOVE_USER",
  user: {
    _id: "",
    email: "",
    password: "",
  },
});
