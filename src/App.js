import React, { useState } from 'react';
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import { Patch, Home } from "./pages";
import { Box } from '@mui/material';

function App({ signOut }) {
  return (
    <div className="App">
      <Navigation />
      <Box sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patch" element={<Patch />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;