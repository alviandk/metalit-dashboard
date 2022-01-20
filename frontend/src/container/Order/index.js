import React from "react";
import Banner from "../../components/Banner";

const Order = () => {
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
                            href="/">
                            <i class="bi bi-ui-checks-grid fa-fw me-2"></i>
                            Dashboard
                          </a>
                          <a class="list-group-item" 
                            href="/subscription">
                            <i class="bi bi-card-checklist fa-fw me-2"></i>
                            My Subscriptions
                          </a>
                          <a class="list-group-item" 
                            href="/course-list">
                            <i class="bi bi-basket fa-fw me-2"></i>
                            My Courses
                          </a>
                          <a class="list-group-item"
                            href="/payment-info">
                            <i class="bi bi-credit-card-2-front fa-fw me-2"></i>
                            Payment info
                          </a>
                          <a class="list-group-item" 
                            href="/bookmark">
                            <i class="bi bi-cart-check fa-fw me-2"></i>
                            Wishlist
                          </a>
                          <a class="list-group-item  active" 
                            href="/order">
                            <i class="bi bi-folder-check fa-fw me-2"></i>
                            Orders
                          </a>
                          <a class="list-group-item" 
                            href="/payouts">
                            <i class="bi bi-wallet2 fa-fw me-2"></i>
                            Payouts
                          </a>
                          <a class="list-group-item" 
                            href="/edit-profile">
                            <i class="bi bi-pencil-square fa-fw me-2"></i>
                            Edit Profile
                          </a>
                          <a class="list-group-item" 
                            href="/setting">
                            <i class="bi bi-gear fa-fw me-2"></i>
                            Settings
                          </a>
                          <a class="list-group-item" 
                            href="/delete-account">
                            <i class="bi bi-trash fa-fw me-2"></i>
                            Delete Profile
                          </a>
                          <a class="list-group-item text-danger bg-danger-soft-hover" 
                            href="/">
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
                    <h3 class="mb-0">Order List</h3>
                  </div>

                  <div class="card-body">
                    <div class="row g-3 align-items-center justify-content-between mb-4">
                      <div class="col-md-8">
                        <form class="rounded position-relative">
                          <input class="form-control pe-5 bg-transparent" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"/>
                          <button 
                            class="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" 
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
                            <option>Oldest</option>
                          </select>
                        </form>
                      </div>
                    </div>

                    <div class="table-responsive border-0">
                      <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
                        <thead>
                          <tr>
                            <th scope="col" class="border-0 rounded-start">Course name</th>
                            <th scope="col" class="border-0">Order ID</th>
                            <th scope="col" class="border-0">Date</th>
                            <th scope="col" class="border-0">Amount</th>
                            <th scope="col" class="border-0 rounded-end">Payment</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">The complete Digital Marketing Course - 8 Course in 1</a>
                              </h6>
                            </td>

                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#125489</u></a>
                            </td>

                            <td>18/8/2021</td>
                            <td>$356</td>
                            <td>Credit Card</td>
                          </tr>

                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">Time Management Mastery: Do More, Stress Less</a>
                              </h6>
                            </td>

                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#235486</u></a>
                            </td>

                            <td>25/7/2021</td>
                            <td>$186</td>
                            <td>Debit Card</td>
                          </tr>

                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">Building Scalable APIs with GraphQL</a>
                              </h6>
                            </td>

                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#0215789</u></a>
                            </td>

                            <td>4/9/2020</td>
                            <td>$450</td>
                            <td>Paypal</td>
                          </tr>

                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">Sketch from A to Z: for app designer</a>
                              </h6>
                            </td>

                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#0135689</u></a>
                            </td>

                            <td>5/6/2021</td>
                            <td>$0</td>
                            <td>Free</td>
                          </tr>

                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">Build Responsive Websites with HTML</a>
                              </h6>
                            </td>

                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#0587623</u></a>
                            </td>

                            <td>2/6/2021</td>
                            <td>$250</td>
                            <td>Credit Card</td>
                          </tr>

                          <tr>
                            <td>
                              <h6 class="mt-2 mt-lg-0 mb-0">
                                <a href="/">JavaScript: Full Understanding</a>
                              </h6>
                            </td>
   
                            <td class="text-center text-sm-start text-primary-hover">
                              <a href="/" class="text-body"><u>#0215789</u></a>
                            </td>

                            <td>14/1/2021</td>
                            <td>$325</td>
                            <td>Debit Card</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>

                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                      <p class="mb-0 text-center text-sm-start">
                        Showing 1 to 8 of 20 entries
                      </p>

                      <nav class="d-flex justify-content-center mb-0" 
                        aria-label="navigation">
                        <ul class="pagination pagination-sm pagination-primary-soft mb-0 pb-0">
                          <li class="page-item mb-0">
                            <a class="page-link" href="/" tabindex="-1">
                              <i class="fas fa-angle-left"></i>
                            </a>
                          </li>
                          <li class="page-item mb-0">
                            <a class="page-link" href="/">1</a>
                          </li>
                          <li class="page-item mb-0 active">
                            <a class="page-link" href="/">2</a>
                          </li>
                          <li class="page-item mb-0">
                            <a class="page-link" href="/">3</a>
                          </li>
                          <li class="page-item mb-0">
                            <a class="page-link" href="/">
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

export default Order;