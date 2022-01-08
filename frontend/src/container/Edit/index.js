import React from "react";
import Banner from "../../components/Banner";
import image from "../../assets/images/avatar/07.jpg";

const Edit = () => {
  return (
    <main>
      <Banner/>
      <section class="pt-0">
		<div class="container">
			<div class="row">
				<div class="col-xl-3">
					<nav class="navbar navbar-light navbar-expand-xl mx-0">
						<div class="offcanvas offcanvas-end"
							tabindex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel">

							<div class="offcanvas-header bg-light">
								<h5 class="offcanvas-title"
									id="offcanvasNavbarLabel">My profile
								</h5>
								<button type="button"
									class="btn-close text-reset" 
									data-bs-dismiss="offcanvas" 
									aria-label="Close">	
								</button>
							</div>

							<div class="offcanvas-body p-3 p-xl-0">
								<div class="bg-dark border rounded-3 pb-0 p-3 w-100">

									<div class="list-group list-group-dark list-group-borderless">
										<a class="list-group-item" 
											href="\">
											<i class="bi bi-ui-checks-grid fa-fw me-2"></i>
											Dashboard
										</a>
										<a class="list-group-item" 
											href="student-subscription.html">
											<i class="bi bi-card-checklist fa-fw me-2"></i>
											My Subscriptions
										</a>
										<a class="list-group-item" 
											href="student-course-list.html">
											<i class="bi bi-basket fa-fw me-2"></i>
											My Courses
										</a>
										<a class="list-group-item"
											href="student-payment-info.html">
											<i class="bi bi-credit-card-2-front fa-fw me-2"></i>
											Payment info
										</a>
										<a class="list-group-item" 
											href="student-bookmark.html">
											<i class="bi bi-cart-check fa-fw me-2"></i>
											Wishlist
										</a>
										<a class="list-group-item active" 
											href="edit-profile">
											<i class="bi bi-pencil-square fa-fw me-2"></i>
											Edit Profile
										</a>
										<a class="list-group-item" 
											href="setting">
											<i class="bi bi-gear fa-fw me-2"></i>
											Settings
										</a>
										<a class="list-group-item" 
											href="instructor-delete-account.html">
											<i class="bi bi-trash fa-fw me-2"></i>
											Delete Profile
										</a>
										<a class="list-group-item text-danger bg-danger-soft-hover" 
											href="#">
											<i class="fas fa-sign-out-alt fa-fw me-2"></i>
											Sign Out
										</a>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>

				<div class="col-xl-9">

					<div class="card border rounded-3">
						<div class="card-header border-bottom">
							<h3 class="card-header-title mb-0">Edit Profile</h3>
						</div>

						<div class="card-body">

							<form class="row g-4">
								<div class="col-12 justify-content-center align-items-center">
									<label class="form-label">Profile picture</label>
									<div class="d-flex align-items-center">
										<label 
											class="position-relative me-4"
											for="uploadfile-1"
											title="Replace this pic">

											<span class="avatar avatar-xl">
												<img id="uploadfile-1-preview"
													class="avatar-img rounded-circle border border-white border-3 shadow" 
													src={image}
													alt=""/>
											</span>

											<button type="button" 
												class="uploadremove">
												<i class="bi bi-x text-white"></i>
											</button>
										</label>

										<label class="btn btn-primary-soft mb-0"
											for="uploadfile-1">Change
										</label>
										<input id="uploadfile-1"
											class="form-control d-none" 
											type="file"/>
									</div>
								</div>

								<div class="col-12">
									<label class="form-label">Full name</label>
									<div class="input-group">
										<input type="text" 
											class="form-control" 
											value="Lori"
											placeholder="First name"/>
										<input 
											type="text"
											class="form-control"
											value="Stevens" 
											placeholder="Last name"/>
									</div>
								</div>

								<div class="col-md-6">
									<label class="form-label">Username</label>
									<div class="input-group">
										<span class="input-group-text">Eduport.com</span>
										<input type="text" 
											class="form-control" 
											value="loristev"/>
									</div>
								</div>

								<div class="col-md-6">
									<label class="form-label">Email id</label>
									<input class="form-control" 
										type="email"
										value="example@gmail.com" 
										placeholder="Email"/>
								</div>

								<div class="col-md-6">
									<label class="form-label">Phone number</label>
									<input type="text"
										class="form-control"
										value="1234567890"
										placeholder="Phone number"/>
								</div>

								<div class="col-md-6">
									<label class="form-label">Location</label>
									<input class="form-control" 
										type="text"
										value="California"/>
								</div>
								
								<div class="col-12">
									<label class="form-label">About me</label>
									<textarea class="form-control" 
										rows="3">I’ve found a way to get paid for my favorite hobby, 
										and do so while following my dream of traveling the world.
									</textarea>
									<div class="form-text">
										Brief description for your profile.
									</div> 
								</div>

								<div class="col-12">
									<label class="form-label">Education</label>
									<input class="form-control mb-2" 
										type="text" 
										value="Bachelor in Computer Graphics"/>
									<input class="form-control mb-2" 
										type="text" 
										value="Masters in Computer Graphics"/>
									<button class="btn btn-sm btn-light mb-0">
										<i class="bi bi-plus me-1"></i>
										Add more
									</button>
								</div>

								<div class="d-sm-flex justify-content-end">
									<button type="button" 
										class="btn btn-primary mb-0">Save changes
									</button>
								</div>
							</form>
						</div>

					</div>

					
					<div class="row g-4 mt-3">

						<div class="col-lg-6">
							<div class="card border rounded-3">

								<div class="card-header border-bottom">
									<h5 class="card-header-title mb-0">Linked account</h5>
								</div>

								<div class="card-body pb-0">

									<div class="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">

										<h2 class="fs-1 mb-0 me-3">
											<i class="fab fa-google text-google-icon"></i>
										</h2>
										<div>
											<div class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
												<i class="bi bi-check-circle-fill text-success fs-5"></i>
											</div>
												<h6 class="mb-1">Google</h6>
												<p class="mb-1 small">
													You are successfully connected to your Google account
												</p>

												<button type="button" 
													class="btn btn-sm btn-danger mb-0">
													Invoke
												</button>
												<a href="#" 
													class="btn btn-sm btn-link text-body mb-0">
													Learn more
												</a>
										</div>
									</div>

									<div class="mb-4 d-sm-flex border p-3 rounded">
										<h2 class="fs-1 mb-0 me-3">
											<i class="fab fa-linkedin-in text-linkedin"></i>
										</h2>
										<div>
											<h6 class="mb-1">Linkedin</h6>
											<p class="mb-1 small">
												Connect with Linkedin account for a personalized experience
											</p>

											<button type="button" 
												class="btn btn-sm btn-primary mb-0">
												Connect Linkedin
											</button>
											<a href="#" 
												class="btn btn-sm btn-link text-body mb-0">
												Learn more
											</a>
										</div>
									</div>

									<div class="mb-4 d-sm-flex border p-3 rounded">
										<h2 class="fs-1 mb-0 me-3"><i class="fab fa-facebook text-facebook"></i></h2>
										<div>
											<h6 class="mb-1">Facebook</h6>
											<p class="mb-1 small">
												Connect with Facebook account for a personalized experience
											</p>
											<button type="button" 
												class="btn btn-sm btn-primary mb-0">
												Connect Facebook
											</button>
											<a href="#" 
												class="btn btn-sm btn-link text-body mb-0">Learn more
											</a>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-6">
							<div class="card border rounded-3">

								<div class="card-header border-bottom">
									<h5 class="card-header-title mb-0">Social media profile</h5>
								</div>

								<div class="card-body">

									<div class="mb-3">
										<label class="form-label">
											<i class="fab fa-facebook text-facebook me-2"></i>
											Enter facebook username
										</label>
										<input class="form-control" 
											type="text" 
											value="loristev" 
											placeholder="Enter username"/>
									</div>
									
									<div class="mb-3">
										<label class="form-label">
											<i class="bi bi-twitter text-twitter me-2"></i>Enter twitter username
										</label>
										<input class="form-control" 
											type="text" 
											value="loristev" 
											placeholder="Enter username"/>
									</div>

									<div class="mb-3">
										<label class="form-label">
											<i class="fab fa-instagram text-instagram-gradient me-2"></i>Enter instagram username
										</label>
										<input class="form-control" 
											type="text" 
											value="loristev" 
											placeholder="Enter username"/>
									</div>

									<div class="mb-3">
										<label class="form-label">
											<i class="fab fa-youtube text-youtube me-2"></i>
											Add your youtube profile URL
										</label>
										<input class="form-control" 
											type="text" 
											value="https://www.youtube.com/in/Eduport-05620abc" 
											placeholder="Enter username"/>
									</div>

									<div class="d-flex justify-content-end mt-4">
										<button type="button" 
											class="btn btn-primary mb-0">Save changes
										</button>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-6">
							<div class="card border rounded-3">

								<div class="card-header border-bottom">
									<h5 class="card-header-title mb-0">Update email</h5>
								</div>

								<div class="card-body">
									<p>Your current email address is 
										<span class="text-primary">example@gmail.com</span>
									</p>
									<form>
										<label class="form-label">Enter your new email id</label>
										<input class="form-control" 
											type="email" 
											placeholder="Enter new email"/>
										<div class="d-flex justify-content-end mt-4">
											<button type="button" 
												class="btn btn-primary mb-0">Update email
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
	
						<div class="col-lg-6">
							<div class="card border rounded-3">

								<div class="card-header border-bottom">
									<h5 class="card-header-title mb-0">Update password</h5>
								</div>

								<div class="card-body">

									<div class="mb-3">
										<label class="form-label">Current password</label>
										<input class="form-control" 
											type="password" 
											placeholder="Enter current password"/>
									</div>

									<div class="mb-3">
										<label class="form-label"> Enter new password</label>
										<div class="input-group">
											<input class="form-control" 
												type="password" 
												placeholder="Enter new password"/>
											<span class="input-group-text p-0 bg-transparent">
												<i class="far fa-eye cursor-pointer p-2 w-40px"></i>
											</span>
										</div>
										<div class="rounded mt-1" id="psw-strength"></div>
									</div>

									<div>
										<label class="form-label">Confirm new password</label>
										<input class="form-control" 
											type="password" 
											placeholder="Enter new password"/>
									</div>

									<div class="d-flex justify-content-end mt-4">
										<button type="button" 
											class="btn btn-primary mb-0">
											Change password
										</button>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>
   </main>


    );
  };

export default Edit;