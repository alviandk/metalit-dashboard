import React from "react";
import Banner from "../../components/Banner";

const Setting = () => {
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
                          <a class="list-group-item" 
                            href="/order">
                            <i class="bi bi-folder-check fa-fw me-2"></i>
                            Orders
                          </a>
                          <a class="list-group-item" 
                            href="edit-profile">
                            <i class="bi bi-pencil-square fa-fw me-2"></i>
                            Edit Profile
                          </a>
                          <a class="list-group-item active" 
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

                <div class="border rounded-3">
                  <div class="row">
                    <div class="col-12">

                      <div class="card">

                        <div class="card-header border-bottom">
                          <h3 class="card-header-title">Settings</h3>
                        </div>

                        <div class="card-body">

                          <h5 class="mb-4">Profile Settings</h5>
                          <div class="form-check form-switch form-check-md">
                            <input class="form-check-input" 
                              type="checkbox" 
                              role="switch" 
                              id="profilePublic" checked/>
                            <label class="form-check-label" 
                              for="profilePublic">
                              Your profile's public visibility
                              </label>
                          </div>

                          <hr/>

                          <h5 class="card-header-title">
                            Notifications Settings
                          </h5>
                          <p class="mb-2 mt-3">
                            Choose type of notifications you want to receive
                          </p>
                          <div class="form-check form-switch form-check-md mb-3">
                            <input class="form-check-input" 
                              type="checkbox" 
                              id="checkPrivacy1" 
                              checked=""/>
                            <label class="form-check-label" 
                              for="checkPrivacy1">
                              Notify me via email when logging in
                            </label>
                          </div>
                          <div class="form-check form-switch form-check-md mb-3">
                            <input class="form-check-input" 
                              type="checkbox" 
                              id="checkPrivacy2"/>
                            <label class="form-check-label" 
                              for="checkPrivacy2">
                              Send SMS confirmation for all online payments
                            </label>
                          </div>
                          <div class="form-check form-switch form-check-md mb-3">
                            <input class="form-check-input" 
                              type="checkbox" 
                              id="checkPrivacy3" 
                              checked=""/>
                            <label class="form-check-label" 
                              for="checkPrivacy3">
                              Check which device(s) access your account
                            </label>
                          </div>
                          <div class="form-check form-switch form-check-md mb-3">
                            <input class="form-check-input" 
                              type="checkbox" 
                              id="checkPrivacy4"/>
                            <label class="form-check-label" 
                              for="checkPrivacy4">
                              Show your profile publicly
                            </label>
                          </div>

                          <div class="d-sm-flex justify-content-end">
                            <button type="button" 
                              class="btn btn-sm btn-primary me-2 mb-0">
                              Save changes
                            </button>
                            <a href="#" 
                              class="btn btn-sm btn-outline-secondary mb-0">
                              Cancel
                            </a>
                          </div>

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

export default Setting;