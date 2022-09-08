import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CoursesPage from "../Pages/CoursesPage";
import EnquiryPage from "../Pages/EnquiryPage";
import EnquriesPage from "../Pages/EnquriesPage";
import NotFoundPage from "../Pages/NotFoundPage";

class AppRouting extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage />}></Route>
          <Route path="/enquries" element={<EnquriesPage />}></Route>
          <Route path="/enquiry" element={<EnquiryPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default AppRouting;
