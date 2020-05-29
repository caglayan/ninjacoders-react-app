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
      initialValues={{ email: props.body }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required.";
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
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={errors.email != null && touched.email}
                label="Gelişmemize yardım et! Ders için güzel bir yorum yaz."
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
                  Gönder
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
