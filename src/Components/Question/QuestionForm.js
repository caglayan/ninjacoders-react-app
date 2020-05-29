import React from "react";
import { Formik } from "formik";
import { Box, Button, TextField, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
  },
}));

const Basic = (props) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ givenName: "", familyName: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required.";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Incorrect email.";
        }

        if (!values.password) {
          errors.password = "Password is required.";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
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
          <Grid container justify="flex-end" spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.email != null && touched.email}
                label="Sorunuzu buraya yazabilirsiniz."
                fullWidth
                multiline
                rows={6}
                id="email"
                helperText={errors.email && touched.email && errors.email}
                margin="dense"
                variant="outlined"
                style={{ color: "white" }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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
                  disabled={
                    errors.password
                      ? true
                      : false || errors.email
                      ? true
                      : false
                  }
                >
                  Soru Sor
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
