import React from "react";
import CourseSection1 from "./CourseSection1/CourseSection1";
import CourseSection2 from "./CourseSection2/CourseSection2";
import CourseSection3 from "./CourseSection3";
import {
  startCreatePublicCourse,
  startCreateUserCourse,
} from "../Redux/Selectors/courseSelector";
import { removeCourseUserComment } from "../Redux/Selectors/commentSelector";
import { connect } from "react-redux";
import BottomMobile from "./BottomMobile";
import { findCourseGroup } from "../Api/applicationApi";

const CourseContainer = (props) => {
  const [courseGroup, setCourseGroup] = React.useState();

  const findCourseGroupIn = () => {
    findCourseGroup(props.courseGroup_id) // skip limit
      .then((courseGroup) => {
        setCourseGroup(courseGroup);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (!courseGroup) {
      findCourseGroupIn();
      console.log("enter");
    }
  }, [props.courseGroup_id]);

  const downloadPrivateCourse = () => {
    console.log(
      "Private Course: course_id ",
      props.match.params.id,
      "user_id ",
      props.user_id
    );
    props
      .dispatch(
        startCreateUserCourse(props.token, props.match.params.id, props.user_id)
      )
      .then((course) => {})
      .catch((err) => {
        props.showMessages(2, "Bir problem var.");
      });
  };

  const downloadPublicCourse = () => {
    console.log(
      "Public Course: course_id ",
      props.match.params.id,
      "user_id ",
      props.user_id
    );

    props
      .dispatch(startCreatePublicCourse(props.match.params.id))
      .then((course) => {})
      .catch((err) => {
        props.showMessages(2, "Bir problem var.");
      });
  };

  React.useEffect(() => {
    if (props.user_id !== "") {
      props.dispatch(removeCourseUserComment());
      downloadPrivateCourse();
    } else {
      props.dispatch(removeCourseUserComment());
      downloadPublicCourse();
    }
  }, [props.user_id]);

  return (
    <div>
      <CourseSection1 courseGroup={courseGroup} {...props}></CourseSection1>
      <CourseSection2 {...props}></CourseSection2>
      <CourseSection3 {...props}></CourseSection3>
      {courseGroup ? (
        <BottomMobile
          courseGroup={courseGroup}
          premiumCourseGroups={props.premiumCourseGroups}
        ></BottomMobile>
      ) : null}
    </div>
  );
};

const CourseContainerCon = connect((state) => {
  return {
    user_id: state.userReducer._id,
    token: state.userReducer.token,
    premiumCourseGroups: state.userReducer.premiumCourseGroups,
    courseGroup_id: state.courseReducer.group_id,
  };
})(CourseContainer);

export default CourseContainerCon;
