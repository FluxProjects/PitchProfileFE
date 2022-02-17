import React, { Component } from "react";
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

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/react">
        <div className="page-wraper">
          <Switch>
            {/* Routes to use */}
            {/* Candidate Resume Page */}
            <Route path="/jobs-my-resume" exact component={Jobmyresume} />
            {/* Candidate Profile Page */}
            <Route path="/jobs-profile" exact component={Jobprofile} />
            {/* Login/Register */}
            <Route path="/login" exact component={Loginpage3} />
            <Route path="/register" exact component={Register} />
            {/* Update Password - Candidate/Company */}
            <Route
              path="/jobs-change-password"
              exact
              component={Changepasswordpage}
            />
            {/* Candidate Applied Jobs List */}
            <Route path="/jobs-applied-job" exact component={Jobsappliedjob} />
            {/* Company Profile */}
            <Route path="/company-profile" exact component={Companyprofile} />
            {/* Company Job Post */}
            <Route
              path="/company-post-jobs"
              exact
              component={Componypostjobs}
            />
            {/* Company Posted Jobs List */}
            <Route path="/company-manage-job" exact component={Companymanage} />
            {/* Company Resume Received List */}
            <Route path="/company-resume" exact component={Companyresume} />
            {/* Search Candidates/Candidates List for Company */}
            <Route
              path="/browse-candidates"
              exact
              component={Browsecandidates}
            />
            {/* Search Job /Job List for Candidates */}
            <Route path="/category-all-jobs" exact component={Categoryalljob} />
            <Route path="/" exact component={Homepage} />
            {/* Routes to use */}

            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/job-detail" exact component={Jobdetail} />
            <Route path="/companies" exact component={Companies} />

            <Route path="/error-404" exact component={Error404} />

            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
        <ScrollToTop />
      </BrowserRouter>
    );
  }
}

export default Markup;
