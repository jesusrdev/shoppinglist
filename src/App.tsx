import { useState } from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import "./App.css";

function App() {
  return <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Shopping List
        </Typography>
      </Toolbar>
    </AppBar>
  </Container>;
}

export default App;
