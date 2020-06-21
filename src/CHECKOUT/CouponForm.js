import React from "react";
import { Formik } from "formik";
import { Box, Button, TextField, Grid, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Basic = (props) => {
  //const history = useHistory();
  return (
    <Formik
      initialValues={{ coupon: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.coupon) {
          errors.coupon = "Kupon Kodu Gereklidir.";
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            style={{ marginTop: "10px" }}
            spacing={2}
          >
            <Grid item xs={6}>
              <TextField
                error={errors.coupon != null && touched.coupon}
                label="Kupon Kodu"
                id="coupon"
                helperText={errors.coupon && touched.coupon && errors.coupon}
                margin="dense"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.coupon}
              />
            </Grid>
            <Grid item>
              <Box m={1}>
                <Button
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
                  Uygula
                </Button>
                <IconButton aria-label="close" onClick={props.closeForm}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Basic;
