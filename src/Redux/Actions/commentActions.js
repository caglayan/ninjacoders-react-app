export const updateComment = ({
  _id = "",
  course = "",
  sender = "",
  avatarImage = null,
  givenName = "",
  familyName = "",
  senderTitle = "",
  body = "",
  star = 0,
  createdAt = "",
  updatedAt = "",
  isUpdating = false,
  __v = 0,
} = {}) => ({
  type: "UPDATE_COMMENT",
  comment: {
    _id,
    course,
    sender,
    avatarImage,
    givenName,
    familyName,
    senderTitle,
    body,
    star,
    createdAt,
    updatedAt,
    isUpdating,
  },
});

export const removeComment = () => ({
  type: "REMOVE_COMMENT",
  comment: {
    _id: "",
    isUpdating: false,
  },
});
