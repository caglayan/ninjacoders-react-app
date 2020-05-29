import React from "react";
import CourseSection1 from "./CourseSection1";
import CourseSection2 from "./CourseSection2";
import CourseSection3 from "./CourseSection3";
import { startCreatePublicCourse } from "../Redux/Selectors/courseSelector";
import { connect } from "react-redux";

const CourseContainer = (props) => {
  const downloadCourse = () => {
    console.log("course_id ", props.match.params.id);
    console.log("user_id ", props._id);
    props
      .dispatch(startCreatePublicCourse(props.match.params.id, props._id))
      .then((course) => {})
      .catch((err) => {
        props.showMessages(2, "Bir problem var.");
      });
  };

  React.useEffect(() => {
    downloadCourse();
  }, [props._id]);

  return (
    <div>
      <CourseSection1 {...props}></CourseSection1>
      <CourseSection2 {...props}></CourseSection2>
      <CourseSection3 {...props}></CourseSection3>
    </div>
  );
};

const CourseContainerCon = connect((state) => {
  return {
    _id: state.userReducer._id,
  };
})(CourseContainer);

export default CourseContainerCon;
