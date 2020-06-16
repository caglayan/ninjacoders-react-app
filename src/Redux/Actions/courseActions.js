export const updateCourse = ({
  _id = "",
  description = "",
  abilities = [],
  title = "",
  instructor = null,
  bestComment = null,
  commentPoint = 0,
  studentNumber = 0,
  levelPoint = 0,
  comments = [],
  chapters = [],
  projects = [],
  createdAt = "",
  updatedAt = "",
  duration = 0,
  premium = null,
  statistics = null,
  isBelongNinja = false,
  numberOfSections = 0,
  __v = 0,
} = {}) => ({
  type: "UPDATE_COURSE",
  course: {
    _id,
    description,
    abilities,
    statistics,
    title,
    instructor,
    bestComment,
    commentPoint,
    studentNumber,
    levelPoint,
    premium,
    comments,
    chapters,
    projects,
    createdAt,
    updatedAt,
    duration,
    isBelongNinja,
    numberOfSections,
  },
});

export const removeCourse = () => ({
  type: "REMOVE_COURSE",
  course: {
    _id: "",
    name: "",
    isBelongNinja: false,
  },
});
