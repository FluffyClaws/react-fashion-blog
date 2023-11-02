import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LeftBar from "../components/Main/LeftBar";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import "./ContactPage.scss";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="contact-content">
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography paragraph>
                If you have any questions or feedback, please don't hesitate to
                reach out to us.
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  required
                  id="contact-name"
                  label="Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="contact-email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="contact-subject"
                  label="Subject"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="contact-message"
                  label="Message"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar />
          </Grid>
        </Grid>
      </Container>
      <BottomMenu />
      <BottomSocial />
      <Footer />
    </>
  );
};

export default ContactPage;
