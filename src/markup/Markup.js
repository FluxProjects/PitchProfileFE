import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage1";

import Jobprofile from "./Pages/Jobprofile";
import Jobmyresume from "./Pages/Jobmyresume";
import Jobsappliedjob from "./Pages/Jobsappliedjob";
import Changepasswordpage from "./Pages/Changepasswordpage";
import CompanyChangePass from "./Pages/CompanyChangePass";

import Companyprofile from "./Pages/Companyprofile";
import Companyresume from "./Pages/Companyresume";
import Componypostjobs from "./Pages/Componypostjobs";
import CompanyEditJobs from "./Pages/CompanyEditJobs";
import Companymanage from "./Pages/Companymanage";
import Browsecandidates from "./Pages/Browsecandidates";

import Aboutus from "./Pages/Aboutus";
import Jobdetail from "./Pages/Jobdetail";
import CompanyDetail from "./Pages/CompanyDetail";
import Companies from "./Pages/Companies";

import Categoryalljob from "./Pages/Categoryalljob";

import Loginpage3 from "./Pages/Loginpage3";

import Error404 from "./Pages/Error404";

import Contact from "./Pages/Contact";

import ScrollToTop from "./Element/ScrollToTop";
import Register from "./Pages/Register";
import Browsecandidategrid from "./Pages/Browsecandidategrid";
import MyResumeView from "./Pages/MyResumeView";
import ViewCandidateProfile from "./Pages/ViewCandidateProfile";
import { useLocation } from "react-router-dom";
import CompanyLogin from "./Pages/CompanyLogin";
import CompanyRegister from "./Pages/CompanyRegister";
import CompanyPostJobView from "./Pages/CompanyPostJobView";
import Browsejobgrid from "./Pages/Browsejobsgrid";
import Browsejoblist from "./Pages/Browsejoblist";
import MyWishlists from "./Pages/MyWishlists";
import MyWishlistCompanies from "./Pages/MyWishlistCompanies";
import MyChat from "./Pages/MyChat/Chat/Chat";

export default function Markup() {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Switch>
          {/* Routes to use */}
          {/* Candidate Resume Page */}
          <Route path="/jobs-my-resume" component={Jobmyresume} />
          <Route path="/my-chat" component={MyChat} />
          <Route path="/jobs-my-resume-view" component={MyResumeView} />
          <Route
            path="/view-candidate-profile"
            component={ViewCandidateProfile}
          />

          {/* Candidate Profile Page */}
          <Route path="/jobs-profile" component={Jobprofile} />
          {/* Login/Register */}
          <Route path="/login" component={Loginpage3} />
          <Route path="/company-login" component={CompanyLogin} />
          <Route path="/register" component={Register} />
          <Route path="/company-register" component={CompanyRegister} />
          {/* Update Password - Candidate/Company */}
          <Route path="/jobs-change-password" component={Changepasswordpage} />
          <Route
            path="/company-change-password"
            component={CompanyChangePass}
          />
          {/* Candidate Applied Jobs List */}
          <Route path="/jobs-applied-job" component={Jobsappliedjob} />
          {/* Company Profile */}
          <Route path="/company-profile" component={Companyprofile} />
          {/* Company Job Post */}
          <Route path="/company-post-jobs" component={Componypostjobs} />
          <Route path="/company-edit-job" component={CompanyEditJobs} />
          <Route
            path="/view-company-post-jobs"
            component={CompanyPostJobView}
          />

          {/* Company Posted Jobs List */}
          <Route path="/company-manage-job" component={Companymanage} />
          {/* Company Resume Received List */}
          <Route path="/company-resume" component={Companyresume} />
          <Route path="/my-wishlists-company" component={MyWishlistCompanies} />
          <Route path="/my-wishlists-candidate" component={MyWishlists} />

          {/* Search Candidates/Candidates List for Company */}
          <Route path="/browse-candidates" component={Browsecandidates} />
          {/* Search Job /Job List for Candidates */}
          <Route path="/category-all-jobs" component={Categoryalljob} />
          <Route path="/" exact component={Homepage} />
          <Route path="/job-detail" component={Jobdetail} />
          <Route
            path="/browse-candidate-grid"
            component={Browsecandidategrid}
          />

          <Route path="/browse-job-grid" component={Browsejobgrid} />
          <Route path="/browse-job-list" component={Browsejoblist} />

          {/* Routes to use */}

          <Route path="/about-us" component={Aboutus} />
          <Route path="/companies" component={Companies} />
          <Route path="/company-detail" component={CompanyDetail} />

          <Route path="/error-404" component={Error404} />

          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}
