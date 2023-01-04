import { GamePage, HomePage } from "pages";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "global/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
