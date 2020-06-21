import React from "react";
import { Formik } from "formik";
import LensIcon from "@material-ui/icons/Lens";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Container,
} from "@material-ui/core/";

const Basic = (props) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      pass1: "",
      pass2: "",
    }}
    validate={(values) => {
      const errors = {};

      if (!values.pass1) {
        errors.pass1 = "Yeni bir şifre yazmak zorundasınız";
      } else if (values.pass1.length < 6) {
        errors.pass1 = "Yeni şifreniz 5 karakterden uzun olmalıdır.";
      }

      if (!values.pass2) {
        errors.pass2 = "Yeni bir şifre yazmak zorundasınız";
      } else if (values.pass2.localeCompare(values.pass1)) {
        errors.pass2 = "Şifreler uyuşmuyor.";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      const password = {
        password: values.pass1,
      };
      props.onSubmit(password);
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
      <Container maxWidth="sm">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Typography variant="h5">Şifreyi yenile</Typography>
          <Typography variant="subtitle2">
            <List dense={true}>
              Hesabınızı güvende tutmak için, şifreniz:
              <ListItem>
                <ListItemIcon>
                  <LensIcon style={{ fontSize: 10 }} />
                </ListItemIcon>
                5 karakterden uzun olmalıdır.
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LensIcon style={{ fontSize: 10 }} />
                </ListItemIcon>
                email adresinizle, isminizle ve soyisiminizle ilişkili
                olmamalıdır.
              </ListItem>
            </List>
          </Typography>
          <Grid
            container
            style={{ marginTop: "10px" }}
            justify="center"
            item
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                error={errors.pass1 != null && touched.pass1}
                helperText={errors.pass1 && touched.pass1 && errors.pass1}
                label="Yeni Şifre"
                fullWidth
                name="pass1"
                type="password"
                id="pass11"
                margin="dense"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pass1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errors.pass2 != null && touched.pass2}
                helperText={errors.pass2 && touched.pass2 && errors.pass2}
                label="Yeni Şifrenizi Tekrar Yazın"
                fullWidth
                name="pass2"
                id="pass12"
                type="password"
                margin="dense"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pass2}
              />
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "25px" }} xs={12}>
            <Box textAlign="center" m={0}>
              <Button
                style={{ width: "100%" }}
                onClick={props.closeDialog}
                variant="contained"
                color="secondary"
                type="submit"
                disabled={
                  errors.pass1 ? true : false || errors.pass2 ? true : false
                }
              >
                Şifreyi değiştir ve Giriş yap
              </Button>
            </Box>
          </Grid>
        </form>
      </Container>
    )}
  </Formik>
);

export default Basic;
