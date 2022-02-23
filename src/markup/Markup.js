import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage1";

import Jobprofile from "./Pages/Jobprofile";
import Jobmyresume from "./Pages/Jobmyresume";
import Jobsappliedjob from "./Pages/Jobsappliedjob";
import Changepasswordpage from "./Pages/Changepasswordpage";

import Companyprofile from "./Pages/Companyprofile";
import Companyresume from "./Pages/Companyresume";
import Componypostjobs from "./Pages/Componypostjobs";
import Companymanage from "./Pages/Companymanage";
import Browsecandidates from "./Pages/Browsecandidates";

import Aboutus from "./Pages/Aboutus";
import Jobdetail from "./Pages/Jobdetail";
import Companies from "./Pages/Companies";

import Categoryalljob from "./Pages/Categoryalljob";

import Loginpage3 from "./Pages/Loginpage3";

import Error404 from "./Pages/Error404";

import Contact from "./Pages/Contact";

import ScrollToTop from "./Element/ScrollToTop";
import Register from "./Pages/Register";
import Browsejobgrid from "./Pages/Browsejobgrid";

export default function Markup() {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Switch>
          {/* Routes to use */}
          {/* Candidate Resume Page */}
          <Route path="/jobs-my-resume" component={Jobmyresume} />
          {/* Candidate Profile Page */}
          <Route path="/jobs-profile" component={Jobprofile} />
          {/* Login/Register */}
          <Route path="/login" component={Loginpage3} />
          <Route path="/register" component={Register} />
          {/* Update Password - Candidate/Company */}
          <Route path="/jobs-change-password" component={Changepasswordpage} />
          {/* Candidate Applied Jobs List */}
          <Route path="/jobs-applied-job" component={Jobsappliedjob} />
          {/* Company Profile */}
          <Route path="/company-profile" component={Companyprofile} />
          {/* Company Job Post */}
          <Route path="/company-post-jobs" component={Componypostjobs} />
          {/* Company Posted Jobs List */}
          <Route path="/company-manage-job" component={Companymanage} />
          {/* Company Resume Received List */}
          <Route path="/company-resume" component={Companyresume} />
          {/* Search Candidates/Candidates List for Company */}
          <Route path="/browse-candidates" component={Browsecandidates} />
          {/* Search Job /Job List for Candidates */}
          <Route path="/category-all-jobs" component={Categoryalljob} />
          <Route path="/" exact component={Homepage} />
          <Route path="/job-detail" component={Jobdetail} />
          <Route path="/browse-job-grid" component={Browsejobgrid} />

          {/* Routes to use */}

          <Route path="/about-us" component={Aboutus} />
          <Route path="/companies" component={Companies} />

          <Route path="/error-404" component={Error404} />

          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}
