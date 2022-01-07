import React from "react";
import image1 from '../../assets/images/avatar/09.jpg';
import image2 from "../../assets/images/courses/4by3/08.jpg";
import image3 from "../../assets/images/courses/4by3/03.jpg";
import image4 from '../../assets/images/courses/4by3/05.jpg';
import image5 from '../../assets/images/courses/4by3/01.jpg';
import image6 from '../../assets/images/courses/4by3/02.jpg';

const Coba = () => {
  return (
<main>
	<section class="pt-0">
		<div class="container-fluid px-0">
			<div class="card bg-blue h-100px h-md-200px rounded-0 pattern">
			</div>
		</div>
		<div class="container mt-n4">
			<div class="row">
				<div class="col-12">
					<div class="card bg-transparent card-body pb-0 ps-0 mt-2 mt-sm-0">
						<div class="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">

							<div class="col-auto">
								<div class="avatar avatar-xxl position-relative mt-n3">
									<img class="avatar-img rounded-circle border border-white border-3 shadow"
										src={image1} alt=""/>
									<span class="badge bg-success text-white rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro
									</span>
								</div>
							</div>

							<div class="col d-sm-flex justify-content-between align-items-center">
								<div>
									<h1 class="my-1 fs-4">Lori Stevens</h1>
									<ul class="list-inline mb-0">
										<li class="list-inline-item me-3 mb-1 mb-sm-0">
	                    					<span class="h6">255</span>
	                    					<span class="text-body fw-light">points</span>
	                  					</li>
	                  					<li class="list-inline-item me-3 mb-1 mb-sm-0">
	                    					<span class="h6">7</span>
	                    					<span class="text-body fw-light">Completed courses</span>
	                  					</li>
	                  					<li class="list-inline-item me-3 mb-1 mb-sm-0">
	                   						<span class="h6">52</span>
	                    					<span class="text-body fw-light">Completed lessons</span>
	                  					</li>
									</ul>
								</div>

								<div class="mt-2 mt-sm-0">
									<a href="student-course-list.html"
										class="btn btn-outline-primary mb-0">
										View my courses
									</a>
								</div>
							</div>
						</div>
					</div>

					<hr class="d-xl-none"/>
					<div class="col-12 col-xl-3 d-flex justify-content-between align-items-center">
						<a class="h6 mb-0 fw-bold d-xl-none"
							href="#">Menu
						</a>
						<button class="btn btn-primary d-xl-none"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar">
							<i class="fas fa-sliders-h"></i>
						</button>
					</div>

				</div>
			</div>
		</div>
	</section>

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
										<a class="list-group-item active" 
											href="student-dashboard.html">
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
										<a class="list-group-item" 
											href="instructor-edit-profile.html">
											<i class="bi bi-pencil-square fa-fw me-2"></i>
											Edit Profile
										</a>
										<a class="list-group-item" 
											href="instructor-setting.html">
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

					<div class="row mb-4">

						<div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
							<div class="d-flex justify-content-center align-items-center p-4 bg-orange bg-opacity-15 rounded-3">
								<span class="display-6 lh-1 text-orange mb-0">
									<i class="fas fa-tv fa-fw"></i>
								</span>
								<div class="ms-4">
									<div class="d-flex">
										<h5 class="purecounter mb-0 fw-bold"
											data-purecounter-start="0" 
											data-purecounter-end="9"
											data-purecounter-delay="200">0
										</h5>
									</div>
									<p class="mb-0 h6 fw-light">Total Courses</p>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
							<div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-15 rounded-3">
								<span class="display-6 lh-1 text-purple mb-0">
									<i class="fas fa-clipboard-check fa-fw"></i>
								</span>
								<div class="ms-4">
									<div class="d-flex">
										<h5 class="purecounter mb-0 fw-bold"
											data-purecounter-start="0"
											data-purecounter-end="52"
											data-purecounter-delay="200">0
										</h5>
									</div>
									<p class="mb-0 h6 fw-light">Complete lessons</p>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
							<div class="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-10 rounded-3">
								<span class="display-6 lh-1 text-success mb-0">
									<i class="fas fa-medal fa-fw"></i>
								</span>
								<div class="ms-4">
									<div class="d-flex">
										<h5 class="purecounter mb-0 fw-bold" 
											data-purecounter-start="0" 
											data-purecounter-end="8" 
											data-purecounter-delay="300">0
										</h5>
									</div>
									<p class="mb-0 h6 fw-light">Achieved Certificates</p>
								</div>
							</div>
						</div>
					</div>


					<div class="card border rounded-3">

						<div class="card-header border-bottom">
							<h3 class="mb-0">My Courses List</h3>
						</div>

						<div class="card-body">

							<div class="row g-3 align-items-center justify-content-between mb-4">

								<div class="col-md-8">
									<form class="rounded position-relative">
										<input class="form-control pe-5 bg-transparent" 
											type="search" 
											placeholder="Search" 
											aria-label="Search"/>
										<button class="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" 
											type="submit">
											<i class="fas fa-search fs-6 "></i>
										</button>
									</form>
								</div>

								<div class="col-md-3">

									<form>
										<select class="form-select js-choice border-0 z-index-9 bg-transparent" 
											aria-label=".form-select-sm">
											<option value="">Sort by</option>
											<option>Free</option>
											<option>Newest</option>
											<option>Most popular</option>
											<option>Most Viewed</option>
										</select>
									</form>
								</div>
							</div>

							<div class="table-responsive border-0">
								<table class="table table-dark-gray align-middle p-4 mb-0 table-hover">

									<thead>
										<tr>
											<th scope="col" class="border-0 rounded-start">Course Title</th>
											<th scope="col" class="border-0">Total Lectures</th>
											<th scope="col" class="border-0">Completed Lecture</th>
											<th scope="col" class="border-0 rounded-end">Action</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="w-100px">
														<img src={image2} class="rounded" alt=""/>
													</div>

													<div class="mb-0 ms-2">
														<h6>
															<a href="#">Building Scalable APIs with GraphQL</a>
														</h6>

														<div class="overflow-hidden">
															<h6 class="mb-0 text-end">85%</h6>
															<div class="progress progress-sm bg-primary bg-opacity-10">
																<div class="progress-bar bg-primary aos persen85" 
																	role="progressbar"
																	data-aos="slide-right"
																	data-aos-delay="200"
																	data-aos-duration="1000"
																	data-aos-easing="ease-in-out"
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
											</td>

											<td>56</td>

											<td>40</td>

											<td>
												<a href="#" 
													class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
													<i class="bi bi-play-circle me-1"></i>Continue
												</a>
											</td>
										</tr>

										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="w-100px">
														<img src={image3} class="rounded" alt=""/>
													</div>
													<div class="mb-0 ms-2">
														<h6>
															<a href="#">Create a Design System in Figma</a>
														</h6>
														<div class="overflow-hidden">
															<h6 class="mb-0 text-end">100%</h6>
															<div class="progress progress-sm bg-primary bg-opacity-10">
																<div class="progress-bar bg-primary aos persen100"
																	role="progressbar"
																	data-aos="slide-right"
																	data-aos-delay="200"
																	data-aos-duration="1000"
																	data-aos-easing="ease-in-out"
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
											</td>

											<td>42</td>

											<td>42</td>

											<td>
												<button class="btn btn-sm btn-success me-1 mb-1 mb-x;-0 disabled">
													<i class="bi bi-check me-1"></i>Complete
												</button>
												<a href="#" class="btn btn-sm btn-light me-1">
													<i class="bi bi-arrow-repeat me-1"></i>Restart
												</a>
											</td>
										</tr>

										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="w-100px">
														<img src={image4} class="rounded" alt=""/>
													</div>
													<div class="mb-0 ms-2">
														<h6>
															<a href="#">The Complete Web Development in python</a>
														</h6>
														<div class="overflow-hidden">
															<h6 class="mb-0 text-end">60%</h6>
															<div class="progress progress-sm bg-primary bg-opacity-10">
																<div class="progress-bar bg-primary aos persen60"
																	role="progressbar"
																	data-aos="slide-right"
																	data-aos-delay="200"
																	data-aos-duration="1000"
																	data-aos-easing="ease-in-out" 
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
											</td>

											<td>28</td>

											<td>12</td>

											<td>
												<a href="#"
													class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
													<i class="bi bi-play-circle me-1"></i>Continue
												</a>
											</td>
										</tr>

										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="w-100px">
														<img src={image5} class="rounded" alt=""/>
													</div>
													<div class="mb-0 ms-2">
														<h6><a href="#">Digital Marketing Masterclass</a></h6>
														<div class="overflow-hidden">
															<h6 class="mb-0 text-end">40%</h6>
															<div class="progress progress-sm bg-primary bg-opacity-10">
																<div class="progress-bar bg-primary aos persen40"
																role="progressbar"
																data-aos="slide-right"
																data-aos-delay="200" 
																data-aos-duration="1000"
																data-aos-easing="ease-in-out">
																</div>
															</div>
														</div>
													</div>
												</div>
											</td>

											<td>32</td>

											<td>18</td>

											<td>
												<a href="#" 
													class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
													<i class="bi bi-play-circle me-1"></i>Continue
												</a>
											</td>
										</tr>

										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="w-100px">
														<img src={image6} class="rounded" alt=""/>
													</div>
													<div class="mb-0 ms-2">
														<h6>
															<a href="#">Graphic Design Masterclass</a>
														</h6>
														<div class="overflow-hidden">
															<h6 class="mb-0 text-end">90%</h6>
															<div class="progress progress-sm bg-primary bg-opacity-10">
																<div class="progress-bar bg-primary aos persen90"
																	role="progressbar"
																	data-aos="slide-right"
																	data-aos-delay="200"
																	data-aos-duration="1000" 
																	data-aos-easing="ease-in-out">
																</div>
															</div>
														</div>
													</div>
												</div>
											</td>

											<td>16</td>

											<td>14</td>
											
											<td>
												<a href="#" class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
													<i class="bi bi-play-circle me-1"></i>Continue
												</a>
											</td>
										</tr>
									</tbody>

								</table>
							</div>

							<div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
								<p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
								<nav class="d-flex justify-content-center mb-0" aria-label="navigation">
									<ul class="pagination pagination-sm pagination-primary-soft mb-0 pb-0">
										<li class="page-item mb-0">
											<a class="page-link" href="#" tabindex="-1">
												<i class="fas fa-angle-left"></i>
											</a>
										</li>
										<li class="page-item mb-0">
											<a class="page-link" href="#">1</a>
										</li>
										<li class="page-item mb-0 active">
											<a class="page-link" href="#">2</a>
										</li>
										<li class="page-item mb-0">
											<a class="page-link" href="#">3</a>
										</li>
										<li class="page-item mb-0">
											<a class="page-link" href="#">
												<i class="fas fa-angle-right"></i>
											</a>
										</li>
									</ul>
								</nav>
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

export default Coba;