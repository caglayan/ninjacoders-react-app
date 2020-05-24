import React from "react";
import CourseSection1 from "./CourseSection1";
import CourseSection2 from "./CourseSection2";
import CourseSection3 from "./CourseSection3";
import { startCreatePublicCourse } from "../Redux/Selectors/courseSelector";
import { connect } from "react-redux";

class CourseContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("course with ", props.match.params.id);
    props
      .dispatch(startCreatePublicCourse(props.match.params.id, props._id))
      .then((course) => {})
      .catch((err) => {
        props.showMessages(1, "Bir problem var.");
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <CourseSection1></CourseSection1>
        <CourseSection2></CourseSection2>
        <CourseSection3></CourseSection3>
      </div>
    );
  }
}

const CourseContainerCon = connect((state) => {
  return {
    _id: state.userReducer._id,
  };
})(CourseContainer);

export default CourseContainerCon;
