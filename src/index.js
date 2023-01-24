/**
 * UIA-412  - Vir-ŋusē
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "dashboard/layouts/Admin/Admin.js";

import "dashboard/assets/scss/black-dashboard-react.scss";
import "dashboard/assets/demo/demo.css";
import "dashboard/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./dashboard/components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./dashboard/components/BackgroundColorWrapper/BackgroundColorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          {/* Protected Route */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
