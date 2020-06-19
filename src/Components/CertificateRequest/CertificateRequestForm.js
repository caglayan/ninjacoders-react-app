import React from "react";
import { Formik } from "formik";
import { Box, Button, TextField, Grid, Link } from "@material-ui/core";

const Basic = (props) => {
  //const history = useHistory();
  return (
    <Formik
      initialValues={{ email: props.email }}
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
          <Grid container justify="center" item>
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
            <Grid item xs={10}></Grid>

            <Grid item style={{ marginTop: "15px" }} xs={10}>
              <Box textAlign="center" m={0}>
                <Button
                  onClick={props.closeDialog}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={errors.email ? true : false}
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
