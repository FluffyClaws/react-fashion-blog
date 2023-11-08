import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { Container, Grid } from "@mui/material";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <Grid container className="header" alignItems="center">
      <Container className="header-container">
        <Grid container className="row" alignItems="center" spacing={3}>
          <Grid item xs={6} sm={4} md={3} lg={3} style={{ order: 1 }}>
            <Logo />
          </Grid>
          <Grid
            item
            xs={6}
            sm={8}
            md={9}
            lg={9}
            style={{ order: 2, display: "flex", justifyContent: "flex-end" }}
          >
            <Menu />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;
