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
      initialValues={{ body: props.body }}
      validate={(values) => {
        const errors = {};
        if (!values.body) {
          errors.body = "Bir soru yazmanız gerekmektedir.";
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
        <div>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={errors.body != null && touched.body}
                  label="Sorunuzu buraya yazabilirsiniz."
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
              {props._id ? (
                <Grid item xs={12}>
                  <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                    <Button
                      display="inline"
                      onClick={props.closeDialog}
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ marginLeft: "30px" }}
                      disabled={errors.body ? true : false}
                    >
                      Soruyu Düzenle
                    </Button>
                    <Button
                      display="inline"
                      onClick={props.delete}
                      color="secondary"
                      style={{ marginLeft: "30px" }}
                    >
                      Soruyu Sil
                    </Button>
                  </Box>
                </Grid>
              ) : (
                <Box textAlign="center" m={1}>
                  <Button
                    onClick={props.closeDialog}
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={errors.body ? true : false}
                  >
                    Soru Sor
                  </Button>
                </Box>
              )}
            </Grid>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Basic;
