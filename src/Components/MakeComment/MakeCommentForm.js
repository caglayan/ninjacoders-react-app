import React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  TextField,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
  },
}));

const MakeCommentForm = (props) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ body: props.body }}
      validate={(values) => {
        const errors = {};
        // if (!values.body) {
        //   errors.body = "Yorum bölümü gereklidir.";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("onSubmit:", values);
        props.onSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.body != null && touched.body}
                label="Gelişmemize yardım et! Ders için güzel bir yorum yaz."
                fullWidth
                multiline
                rows={6}
                id="body"
                helperText={errors.body && touched.body && errors.body}
                margin="dense"
                variant="outlined"
                style={{ color: "white" }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="center" m={0}>
                <Button
                  style={{ width: "100%" }}
                  onClick={props.closeDialog}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={errors.body ? true : false}
                >
                  {isSubmitting && <CircularProgress size={18} />}
                  {!isSubmitting && "Gönder"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Basic;
