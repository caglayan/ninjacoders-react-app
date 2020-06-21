import React from "react";
import { Formik } from "formik";
import { TextField, Typography, Grid, Box, Button } from "@material-ui/core/";

const Basic = (props) => (
  <Formik
    initialValues={{ givenName: "", familyName: "", email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "E-mail gereklidir.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Lütfen geçerli bir e-mail adresi yazın";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      let email = {
        email: values.email,
      };
      props.onSubmit(email);
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
        <Grid container justify="center" item spacing={1}>
          <Grid item xs={10}>
            <Typography variant="body1" gutterBottom>
              Size şifrenizi nasıl değiştirebileceğiniz ile ilgili bir mail
              göndereceğiz.
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              error={errors.email != null && touched.email}
              label="E-mail"
              fullWidth
              id="email"
              helperText={errors.email && touched.email && errors.email}
              margin="dense"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Grid>
          <Grid item style={{ marginTop: "15px" }} xs={10}>
            <Box textAlign="center" m={0}>
              <Button
                style={{ width: "100%" }}
                onClick={props.closeDialog}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Şifremi Yenile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    )}
  </Formik>
);

export default Basic;
