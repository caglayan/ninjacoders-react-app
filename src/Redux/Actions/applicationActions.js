export const updateApplication = ({
  _id = "",
  comments = [],
  courseGroups = [],
  __v = 0,
} = {}) => ({
  type: "UPDATE_APPLICATION",
  application: {
    _id,
    comments,
    courseGroups,
    __v,
  },
});

export const removeApplication = () => ({
  type: "UPDATE_APPLICATION",
  application: {
    _id: "",
    comments: [],
    courseGroups: [],
  },
});
