import React from "react";
import "./BodyArea.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ScrollToTop from "react-router-scroll-top";
import NotFoundPage from "./NotFoundPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import AskQuestionPage from "./Pages/QuestionPage";
import MakeCommentPage from "./Pages/CommentPage";
import ResetPassPage from "./Pages/ResetPassPage";
import CreatePassPage from "./Pages/CreatePassPage";
import AccountPage from "../USER/Account/Account";
import QuestionsPage from "../USER/Questions/Questions";
import CourseMapUserPage from "../USER/CourseMap/CourseMap";
import CoursePage from "../COURSE/CourseMain";
import MainPage from "../MAIN/Main";
import MyCoursesPage from "../USER/Courses/Courses";
import CourseMapPage from "../COURSEMAP/CourseMap";
import CheckoutPage from "../CHECKOUT/Checkout";
import ServicePolicyPage from "../HELP/ServicePolicy";
import PrivacyPolicyPage from "../HELP/PrivacyPolicy";
import HelpPage from "../HELP/Help";
import AboutUsPage from "../HELP/AboutUs";

import { startCreateUserLocal } from "../Redux/Selectors/userSelector";

function BodyArea(propsGeneral) {
  var checkLogin = () => {
    if (propsGeneral._id) {
      console.log("user logged in before");
      return true;
    } else {
      if (startCreateUserLocal(propsGeneral.dispatch)) {
        console.log("user logged in now");
        return true;
      } else {
        console.log("user is not logged in");
        return false;
      }
    }
  };

  return (
    <div className="container">
      <ScrollToTop>
        <Switch>
          <Route
            path="/course/:id"
            render={(props) => {
              return (
                <CoursePage
                  {...props}
                  questionOpen={propsGeneral.questionOpen}
                  makeCommentOpen={propsGeneral.makeCommentOpen}
                  finishVideoOpen={propsGeneral.finishVideoOpen}
                  updateCommentOpen={propsGeneral.updateCommentOpen}
                  askQuestionOpen={propsGeneral.askQuestionOpen}
                  showMessages={propsGeneral.showMessages}
                />
              );
            }}
          />
          <Route
            path="/user/questions"
            exact={true}
            render={(props) =>
              checkLogin() ? (
                <QuestionsPage
                  {...props}
                  questionOpen={propsGeneral.questionOpen}
                  makeCommentOpen={propsGeneral.makeCommentOpen}
                  updateCommentOpen={propsGeneral.updateCommentOpen}
                  askQuestionOpen={propsGeneral.askQuestionOpen}
                  showMessages={propsGeneral.showMessages}
                />
              ) : (
                <Redirect to="/signin?via=/user/questions" />
              )
            }
          />
          <Route
            path="/user/courses"
            exact={true}
            render={(props) =>
              checkLogin() ? (
                <MyCoursesPage
                  {...props}
                  questionOpen={propsGeneral.questionOpen}
                  makeCommentOpen={propsGeneral.makeCommentOpen}
                  updateCommentOpen={propsGeneral.updateCommentOpen}
                  askQuestionOpen={propsGeneral.askQuestionOpen}
                  showMessages={propsGeneral.showMessages}
                />
              ) : (
                <Redirect to="/signin?via=/user/courses" />
              )
            }
          />
          <Route
            path="/user/coursemap"
            exact={true}
            render={(props) =>
              checkLogin() ? (
                <CourseMapUserPage
                  {...props}
                  certificateOpenId={propsGeneral.certificateOpenId}
                  showMessages={propsGeneral.showMessages}
                />
              ) : (
                <Redirect to="/signin?via=/user/coursemap" />
              )
            }
          />
          <Route
            path="/user/checkout/:coupon"
            exact={true}
            render={(props) =>
              checkLogin() ? (
                <CheckoutPage
                  {...props}
                  showMessages={propsGeneral.showMessages}
                />
              ) : (
                <Redirect to="/signin?via=/user/checkout/TATIL" />
              )
            }
          />
          <Route
            path="/user/account"
            render={(props) =>
              checkLogin() ? (
                <AccountPage
                  {...props}
                  showMessages={propsGeneral.showMessages}
                />
              ) : (
                <Redirect to="/signin?via=/user/account" />
              )
            }
          />

          <Route
            path="/reset-password/:token"
            render={(props) => (
              <CreatePassPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />

          <Route
            path="/signin"
            exact={true}
            render={(props) => (
              <SignInPage {...props} showMessages={propsGeneral.showMessages} />
            )}
          />
          <Route
            path="/signup"
            exact={true}
            render={(props) => (
              <SignUpPage {...props} showMessages={propsGeneral.showMessages} />
            )}
          />
          <Route
            path="/askquestion"
            exact={true}
            render={(props) => (
              <AskQuestionPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/makecomment"
            exact={true}
            render={(props) => (
              <MakeCommentPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/reset-password"
            exact={true}
            render={(props) => (
              <ResetPassPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/coursemap/:id"
            exact={true}
            render={(props) => (
              <CourseMapPage
                {...props}
                certificateOpenId={propsGeneral.certificateOpenId}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/service-policy"
            exact={true}
            render={(props) => (
              <ServicePolicyPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/privacy-policy"
            exact={true}
            render={(props) => (
              <PrivacyPolicyPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/help"
            exact={true}
            render={(props) => (
              <HelpPage {...props} showMessages={propsGeneral.showMessages} />
            )}
          />
          <Route
            path="/about-us"
            exact={true}
            render={(props) => (
              <AboutUsPage
                {...props}
                showMessages={propsGeneral.showMessages}
              />
            )}
          />
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <MainPage {...props} showMessages={propsGeneral.showMessages} />
            )}
          />
          <Route
            path="/logout"
            exact={true}
            render={(props) => <Redirect to="/" />}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default connect((state) => {
  return {
    _id: state.userReducer._id,
  };
})(BodyArea);
