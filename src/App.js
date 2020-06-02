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
import SideMenu from "./LAYOUT/SideMenu";
import SnackBar from "./Components/SnackBar/SnackBar";
import SignInDialog from "./LAYOUT/Dialogs/SignInDialog";
import SignUpDialog from "./LAYOUT/Dialogs/SignUpDialog";
import QuestionDialog from "./LAYOUT/Dialogs/QuestionDialog";
import CommentDialog from "./LAYOUT/Dialogs/CommentDialog";
import configureStore from "./Redux/Store/configStore";
import {
  startCreateUserLocal,
  startRemoveUserLocal,
} from "./Redux/Selectors/userSelector";

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
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (startCreateUserLocal(store.dispatch)) {
      console.log("user logged in");
    } else {
      console.log("user is not logged in");
      //setRedirctTo(true);
    }
  }, []);

  // ********************** DIALOGS ********************** //
  const [signinDialogIsActive, setSigninDialogIsActive] = React.useState(false);
  const [signupDialogIsActive, setSignupDialogIsActive] = React.useState(false);
  const [questionDialogIsActive, setQuestionDialogIsActive] = React.useState(
    false
  );
  const [commentDialogIsActive, setCommentDialogIsActive] = React.useState(
    false
  );

  const closeDialogs = () => {
    console.log("Close all Dialogs");
    setSigninDialogIsActive(false);
    setSignupDialogIsActive(false);
    setQuestionDialogIsActive(false);
    setCommentDialogIsActive(false);
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

  const openCommentDialog = () => {
    closeDialogs();
    console.log("Comment Button is clicked");
    setCommentDialogIsActive(true);
  };
  // ********************** ERROR HANDLING ********************** //

  const [snackIsActive, setSnackIsActive] = React.useState(false);
  const [snackType, setSnackType] = React.useState(1);
  const [snackMessage, setSnackMessage] = React.useState("");

  const showMessages = (type, message) => {
    if (type == 1) {
      console.log("Success:", message);
      setSnackType(1);
      setSnackMessage(message);
      setSnackIsActive(true);
    } else if (type == 2) {
      console.log("Error:", message);
      setSnackType(2);
      setSnackMessage(message);
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

  const handleOpenSideMenu = () => {
    setSideMenuOpen(true);
  };
  const handleCloseSideMenu = () => {
    setSideMenuOpen(false);
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
              sideMenuOpen={handleOpenSideMenu}
            />
            <BodyArea
              askQuestionOpen={openQuestionDialog}
              makeCommentOpen={openCommentDialog}
              updateCommentOpen={openCommentDialog}
              showMessages={showMessages}
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
            <SnackBar
              type={snackType}
              message={snackMessage}
              closeSnack={handleCloseSnack}
              isActive={snackIsActive}
            />
            <SideMenu
              isOpen={sideMenuOpen}
              open={handleOpenSideMenu}
              close={handleCloseSideMenu}
              logoutUser={logoutUser}
            />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
