import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr2.jpg');

class Register1 extends Component{
	render(){
		return(
			<div className="page-wraper">
				<Header />
				<div className="page-content">
				
					<div className="dez-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: `url(${bnr})`}}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Register</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"#"}>Home</Link></li>
										<li>Register</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="section-full content-inner browse-job shop-account">
						
						<div className="container">
							<div className="row">
								<div className="col-md-12 m-b30">
									<div className="p-a30 job-bx max-w500 radius-sm bg-white m-auto">
										<div className="tab-content">
											<form id="login" className="tab-pane active">
												<h4 className="font-weight-700 m-b5">PERSONAL INFORMATION</h4>
												<p className="font-weight-600">If you have an account with us, please log in.</p>
												<div className="form-group">
													<label className="font-weight-700">First Name *</label>
													<input name="dzName" required="" className="form-control" placeholder="First Name" type="text" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">Last Name *</label>
													<input name="dzName" required="" className="form-control" placeholder="Last Name" type="text" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">E-MAIL *</label>
													<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
												</div>
												<div className="form-group">
													<label className="font-weight-700">Password *</label>
													<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
												</div>
												<div className="text-left">
													<button className="site-button button-lg outline outline-2">CREATE</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>	
				
				<Footer />
			</div>
		)
	}
}
export default Register1;