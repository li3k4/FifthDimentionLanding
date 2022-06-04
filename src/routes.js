import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Content from "./containers/Content";
import PrivacyPolicy from "./containers/PrivacyPolicy";

const useRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} exact element={<Content />} />

      <Route path={"/policy"} exact element={<PrivacyPolicy />} />
    </Routes>
  );

  /*  return (
      <Routes>
        <Route path={MainRoutesConstants.auth} exact element={<AuthPage />} />
        <Route
          path="*"
          exact
          element={<Navigate to={MainRoutesConstants.auth} />}
        />
      </Routes>
    );*/
};

export default useRoutes;
