/* 
TODO:
* Change Name of SideBar 
* Add this side bar to LAYOUT
* Make logout function
* Make login jsx
* https://themeforest.net/item/xamin-data-science-analytics-html-template/25267587

FIXME:
*/

import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import BodyArea from "./LAYOUT/BodyArea";
import Header from "./LAYOUT/Header";
import Footer from "./LAYOUT/Footer";
import RightSideMenu from "./LAYOUT/RightSideMenu";
import LeftSideMenu from "./LAYOUT/LeftSideMenu";
import SnackBar from "./Components/SnackBar/SnackBar";
import SignInDialog from "./LAYOUT/Dialogs/SignInDialog";
import SignUpDialog from "./LAYOUT/Dialogs/SignUpDialog";
import QuestionDialog from "./LAYOUT/Dialogs/QuestionDialog";
import CommentDialog from "./LAYOUT/Dialogs/CommentDialog";
import FinishVideoDialog from "./LAYOUT/Dialogs/FinishVideoDialog";
import CertificateRequestDialog from "./LAYOUT/Dialogs/CertificateRequestDialog";
import configureStore from "./Redux/Store/configStore";
import {
  startCreateUserLocal,
  startRemoveUserLocal,
} from "./Redux/Selectors/userSelector";
import { startCreateApplication } from "./Redux/Selectors/applicationSelector";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#437eeb",
    },
    secondary: {
      main: "#ec407a",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["gt-walsheim pro regular"].join(","),
    h5: {
      fontFamily: ["gt-walsheim pro bold"].join(","),
      fontSize: "1.2rem",
      "@media (min-width:600px)": { fontSize: "1.7rem" },
    },
    h4: {
      fontFamily: ["gt-walsheim pro black", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["gt-walsheim pro black", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["gt-walsheim pro black", "sans-serif"].join(","),
    },
    h1: {
      fontFamily: ["gt-walsheim pro black", "sans-serif"].join(","),
    },
  },
});

export default function App() {
  const [sideRightMenuOpen, setSideRightMenuOpen] = React.useState(false);
  const [sideLefttMenuOpen, setSideLeftMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (startCreateUserLocal(store.dispatch)) {
      console.log("user logged in");
      findApp();
    } else {
      console.log("user is not logged in");
      //setRedirctTo(true);
      findApp();
    }
  }, []);

  const findApp = () => {
    store
      .dispatch(startCreateApplication("5edb4b1bb4965a757aa6d7a1"))
      .then((app) => {})
      .catch((err) => {
        //props.showMessages(2, "Bir problem var.");
      });
  };

  // ********************** DIALOGS ********************** //
  const [signinDialogIsActive, setSigninDialogIsActive] = React.useState(false);
  const [signupDialogIsActive, setSignupDialogIsActive] = React.useState(false);
  const [
    finishVideoDialogIsActive,
    setFinishVideoDialogIsActive,
  ] = React.useState(false);
  const [questionDialogIsActive, setQuestionDialogIsActive] = React.useState(
    false
  );
  const [commentDialogIsActive, setCommentDialogIsActive] = React.useState(
    false
  );
  const [
    certificateDialogGroupId,
    setCertificateDialogGroupId,
  ] = React.useState("");

  const closeDialogs = () => {
    console.log("Close all Dialogs");
    setSigninDialogIsActive(false);
    setSignupDialogIsActive(false);
    setQuestionDialogIsActive(false);
    setCommentDialogIsActive(false);
    setFinishVideoDialogIsActive(false);
    setCertificateDialogGroupId("");
  };

  const openSignInDialog = () => {
    closeDialogs();
    console.log("Sign In Button is clicked");
    setSigninDialogIsActive(true);
  };

  const openSignUpDialog = () => {
    closeDialogs();
    console.log("Sign Up Button is clicked");
    setSignupDialogIsActive(true);
  };

  const openQuestionDialog = () => {
    closeDialogs();
    console.log("Question Button is clicked");
    setQuestionDialogIsActive(true);
  };

  const openCertificateDialog = (_id) => {
    closeDialogs();
    console.log("Certificate Dialog is clicked");
    setCertificateDialogGroupId(_id);
  };

  const openCommentDialog = () => {
    closeDialogs();
    console.log("Comment Button is clicked");
    setCommentDialogIsActive(true);
  };

  const openFinishVideoDialog = () => {
    closeDialogs();
    console.log("Finish Video Button is clicked");
    setFinishVideoDialogIsActive(true);
  };
  // ********************** ERROR HANDLING ********************** //

  const [snackIsActive, setSnackIsActive] = React.useState(false);
  const [snackType, setSnackType] = React.useState(1);
  const [snackMessage, setSnackMessage] = React.useState({});

  const showMessages = (type, messageObj) => {
    if (type == 1) {
      console.log("Success:", messageObj);
      setSnackType(1);
      setSnackMessage(messageObj);
      setSnackIsActive(true);
    } else if (type == 2) {
      console.log("Error:", messageObj);
      setSnackType(2);
      if (messageObj.code) {
        setSnackMessage(messageObj.code + ": " + messageObj.message);
      } else {
        setSnackMessage("Anlayamadığımız bir hata oluştu.");
      }

      setSnackIsActive(true);
    }
  };

  // ********************** USER ********************** //

  const logoutUser = () => {
    console.log("user logout");
    startRemoveUserLocal(store.dispatch);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackIsActive(false);
  };

  const handleOpenRightSideMenu = () => {
    setSideRightMenuOpen(true);
  };
  const handleCloseRightSideMenu = () => {
    setSideRightMenuOpen(false);
  };

  const handleOpenLeftSideMenu = () => {
    setSideLeftMenuOpen(true);
  };
  const handleCloseLeftSideMenu = () => {
    setSideLeftMenuOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header
              isUserLogin={false}
              loginOpen={openSignInDialog}
              signupOpen={openSignUpDialog}
              sideRightMenuOpen={handleOpenRightSideMenu}
              sideLeftMenuOpen={handleOpenLeftSideMenu}
            />
            <BodyArea
              certificateOpenId={openCertificateDialog}
              askQuestionOpen={openQuestionDialog}
              makeCommentOpen={openCommentDialog}
              finishVideoOpen={openFinishVideoDialog}
              updateCommentOpen={openCommentDialog}
              showMessages={showMessages}
              logoutUser={logoutUser}
            />
            <Footer />
            <SignInDialog
              isActive={signinDialogIsActive}
              signUpOpen={openSignUpDialog}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <SignUpDialog
              isActive={signupDialogIsActive}
              signInOpen={openSignInDialog}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <QuestionDialog
              isActive={questionDialogIsActive}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <CommentDialog
              isActive={commentDialogIsActive}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <CertificateRequestDialog
              isActive={certificateDialogGroupId != ""}
              groupId={certificateDialogGroupId}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <FinishVideoDialog
              isActive={finishVideoDialogIsActive}
              closeDialog={closeDialogs}
              showMessages={showMessages}
            />
            <SnackBar
              type={snackType}
              message={snackMessage}
              closeSnack={handleCloseSnack}
              isActive={snackIsActive}
            />
            <RightSideMenu
              isOpen={sideRightMenuOpen}
              open={handleOpenRightSideMenu}
              close={handleCloseRightSideMenu}
              logoutUser={logoutUser}
            />
            <LeftSideMenu
              isOpen={sideLefttMenuOpen}
              open={handleOpenLeftSideMenu}
              close={handleCloseLeftSideMenu}
              logoutUser={logoutUser}
            />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
