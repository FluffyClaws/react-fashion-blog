import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { Container, Grid } from "@mui/material";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <Grid container className="header" alignItems="center">
      <Container className="header-container">
        <Grid container className="row" spacing={3}>
          <Grid item xs={6}>
            <Logo />
          </Grid>
          <Grid
            item
            xs={6}
            container
            justifyContent="flex-end"
            alignItems={"center"}
          >
            <Menu />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;
