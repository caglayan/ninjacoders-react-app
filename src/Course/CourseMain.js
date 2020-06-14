import React from "react";
import CourseSection1 from "./CourseSection1/CourseSection1";
import CourseSection2 from "./CourseSection2/CourseSection2";
import CourseSection3 from "./CourseSection3";
import {
  startCreatePublicCourse,
  startCreateUserCourse,
  startCreatePublicCourseLocal,
} from "../Redux/Selectors/courseSelector";
import { connect } from "react-redux";
import BottomMobile from "./BottomMobile";

const CourseContainer = (props) => {
  const downloadCourse = () => {
    console.log("course_id ", props.match.params.id);
    console.log("user_id ", props.user_id);
    if (props.user_id) {
      props
        .dispatch(
          startCreateUserCourse(
            props.token,
            props.match.params.id,
            props.user_id
          )
        )
        .then((course) => {})
        .catch((err) => {
          props.showMessages(2, "Bir problem var.");
        });
    } else {
      props
        .dispatch(startCreatePublicCourse(props.match.params.id))
        .then((course) => {})
        .catch((err) => {
          props.showMessages(2, "Bir problem var.");
        });
    }
  };

  React.useEffect(() => {
    downloadCourse();
  }, [props.user_id]);

  return (
    <div>
      <CourseSection1 {...props}></CourseSection1>
      <CourseSection2 {...props}></CourseSection2>
      <CourseSection3 {...props}></CourseSection3>
      <BottomMobile></BottomMobile>
    </div>
  );
};

const CourseContainerCon = connect((state) => {
  return {
    user_id: state.userReducer._id,
    token: state.userReducer.token,
  };
})(CourseContainer);

export default CourseContainerCon;
