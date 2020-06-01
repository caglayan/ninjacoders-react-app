export const updateQuestion = ({
  _id = "",
  course = "",
  sender = "",
  avatarImage = null,
  givenName = "",
  familyName = "",
  senderTitle = "",
  title = "",
  body = "",
  like = 0,
  createdAt = "",
  updatedAt = "",
  isUpdating = false,
  __v = 0,
} = {}) => ({
  type: "UPDATE_QUESTION",
  question: {
    _id,
    course,
    sender,
    avatarImage,
    givenName,
    familyName,
    senderTitle,
    title,
    body,
    like,
    createdAt,
    updatedAt,
    isUpdating,
  },
});

export const removeQuestion = () => ({
  type: "REMOVE_QUESTIONS",
  question: {
    _id: "",
    isUpdating: false,
  },
});
