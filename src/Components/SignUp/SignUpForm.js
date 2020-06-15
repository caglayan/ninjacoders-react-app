import React from "react";
import { Formik } from "formik";
import {
  Container,
  TextField,
  Grid,
  Box,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";

const Basic = (props) => {
  const [isBot, setIsBot] = React.useState(true);

  return (
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

        if (!values.givenName) {
          errors.givenName = "İsim gereklidir.";
        }

        if (!values.familyName) {
          errors.familyName = "Soyisim gereklidir.";
        }

        if (!values.password) {
          errors.password = "Şifre Gereklidir.";
        } else if (values.password.length < 5) {
          errors.password = "Şifre 6 karakterden uzun olmalıdır.";
        }

        console.log(errors);
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
        validate,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Container maxWidth="sm">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid container justify="center" item spacing={3}>
              <Grid item xs={6}>
                <TextField
                  error={errors.givenName != null && touched.givenName}
                  label="İsim"
                  fullWidth
                  name="givenName"
                  id="givenName"
                  helperText={
                    errors.givenName && touched.givenName && errors.givenName
                  }
                  margin="dense"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.givenName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.familyName != null && touched.familyName}
                  label="Soyisim"
                  fullWidth
                  name="familyName"
                  id="familyName"
                  helperText={
                    errors.familyName && touched.familyName && errors.familyName
                  }
                  margin="dense"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.familyName}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" item spacing={3}>
              <Grid item xs={6}>
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

              <Grid item xs={6}>
                <TextField
                  error={errors.password != null && touched.password}
                  label="Şifre"
                  type="password"
                  fullWidth
                  id="password"
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  margin="dense"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "15px" }} xs={12}>
              <Box textAlign="left" m={0}>
                Üye olarak NinjaCoders'ın{" "}
                <Link href="/service-policy">
                  Kullanıcı ve Üyelik Sözleşmesini
                </Link>{" "}
                kabul etmiş olursunuz. Bu sayfa reCAPTCHA ile korunmakta olup,
                Google'ın{" "}
                <Link href="https://policies.google.com/terms">Servis</Link> ve{" "}
                <Link href="https://policies.google.com/privacy">Gizlilik</Link>{" "}
                Sözleşmesine tabidir.
              </Box>
            </Grid>
            <Grid item style={{ marginTop: "15px" }} xs={12}>
              <Box textAlign="center" m={0}>
                <Button
                  style={{ width: "100%", height: "42px" }}
                  onClick={props.closeDialog}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={
                    errors.password ||
                    errors.email ||
                    errors.givenName ||
                    errors.familyName ||
                    isBot
                  }
                >
                  Üye ol
                </Button>
              </Box>
            </Grid>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: "20px", width: "100%" }}
            >
              <ReCAPTCHA
                //ref={this._reCaptchaRef}
                sitekey={"6LfSf6QZAAAAAKyGiv-gu_RqYSiHdKt-A_TQCVJ_"}
                hl="tr"
                onChange={(value) => {
                  if (value !== null) {
                    console.log("ReCAPTCHA is verified");
                    setIsBot(false);
                  }
                }}
              />
            </Box>
            <Typography
              align="center"
              display="block"
              color="error"
              variant="caption"
              component="p"
            >
              {isBot ? errors.isBot : null}
            </Typography>
          </form>
        </Container>
      )}
    </Formik>
  );
};

export default Basic;
