import React from "react";

function Home() {
  return (
    <>
      .
      <div id="main">
        <div id="d-help" className="d-relf-wrapper">
          {/* <!--Header 1 Wrap Start--> */}
          <header className="d-hlp-header6">
            <div className="d-help-top-wrap">
              <div className="container">
                {/* <!--D HELP TOP TEXT START--> */}
                <div className="d-help-top-text">
                  <p>
                    <i className="fa fa-clock-o"></i> Mon - Fri : 09:00 - 17:00
                  </p>
                  <div className="d-help-top-contact">
                    <ul className="d-help-call-us">
                      <li>
                        <a href="#">
                          <i className="fa fa-phone"></i>8 800 256 35 87
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="fa fa-lock"></i>Login or Register
                        </a>
                      </li>
                    </ul>
                    <ul className="d-help-social-media">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="d-help-menu-btn" 
                    // onclick={openNav}
                    >
                      <i className="fa fa-align-justify"></i>
                    </span>
                    <div id="mySidenav" className="sidenav overlay">
                      <a
                        href="javascript:void(0)"
                        className="closebtn"
                        // onclick={closeNav}
                      >
                        &times;
                      </a>
                      <div className="kode_sidebar_wrap">
                        <div className="kode_sidebar_logo">
                          <a href="#">
                            <img src="images/chty-logo-2.png" alt="" />
                          </a>
                        </div>
                        <div className="kode_sidebar_content">
                          <h5 className="title">About Us</h5>
                          <p>
                            Perspiciatis unde omnis iste natus sit voluptatem
                            cusantium doloremque laudantium totam rem aperiam,
                            eaque ipsa quae. ab illo inventore veritatis et.
                          </p>
                          <ul className="kode_sidebar_service">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>Los Angeles,
                                Street Avenue, la 2540
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-phone"></i>Phone: 0810
                                123-45678
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>Email:
                                gameplay@noreply.com
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="kode_side_post">
                          <h5 className="title">Recent Post</h5>
                          <ul>
                            <li>
                              <div className="kode_recent_medium">
                                <figure
                                  id="plate-inverse14"
                                  className="hover-overlay"
                                >
                                  <img
                                    src="extra-images/side-menu-fig.jpg"
                                    alt=""
                                  />
                                </figure>
                                <div className="kode_recent_content">
                                  <p>
                                    Perspiciatis unde omnis iste natus sit
                                    voluptatem
                                  </p>
                                  <ul className="kode_side_comment">
                                    <li>
                                      <a href="#">April 30, 2017</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-comments-o"></i>2
                                        Comments
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="kode_recent_medium">
                                <figure
                                  id="plate-inverse15"
                                  className="hover-overlay"
                                >
                                  <img
                                    src="extra-images/side-menu-fig1.jpg"
                                    alt=""
                                  />
                                </figure>
                                <div className="kode_recent_content">
                                  <p>
                                    Perspiciatis unde omnis iste natus sit
                                    voluptatem
                                  </p>
                                  <ul className="kode_side_comment">
                                    <li>
                                      <a href="#">April 30, 2017</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-comments-o"></i>2
                                        Comments
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="kode_recent_medium">
                                <figure
                                  id="plate-inverse61"
                                  className="hover-overlay"
                                >
                                  <img
                                    src="extra-images/side-menu-fig2.jpg"
                                    alt=""
                                  />
                                </figure>
                                <div className="kode_recent_content">
                                  <p>
                                    Perspiciatis unde omnis iste natus sit
                                    voluptatem
                                  </p>
                                  <ul className="kode_side_comment">
                                    <li>
                                      <a href="#">April 30, 2017</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-comments-o"></i>2
                                        Comments
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="kode_side_copyright">
                          <p>
                            Copyright © 2016 <a href="#">Kodeforest.</a>
                          </p>
                          <ul className="kode_side_icon">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-search"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--D HELP TOP TEXT END--> */}
                {/* <!--D HELP NAVI WRAP START--> */}
                <div className="d-help-navi-wrap">
                  <div className="d-help-top-logo">
                    <a href="#">
                      <img src="images/chty-logo.png" alt="" />
                    </a>
                  </div>
                  <div className="d-help-navigation-wrap">
                    <nav className="navigation">
                      <ul>
                        <li>
                          <a className="active" href="index-2.html">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="#">Causes</a>
                          <ul className="chlid">
                            <li>
                              <a href="causes.html">causes</a>
                            </li>
                            <li>
                              <a href="causes-listing.html">causes listing</a>
                            </li>
                            <li>
                              <a href="causes-detail-sidebar.html">
                                causes sidebar
                              </a>
                            </li>
                            <li>
                              <a href="causes-detail.html">
                                causes detail page
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">Blog</a>
                          <ul className="chlid">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="blog-listing.html">blog listing</a>
                            </li>
                            <li>
                              <a href="blog-listing2.html">blog listing 02</a>
                            </li>
                            <li>
                              <a href="blog-detail.html">blog detail page</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega">
                          <a href="#">Mega Menu</a>
                          <div className="d-help-megamenu">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="d-help-mega-feature">
                                  <h4 className="mega-tittle">feature</h4>
                                  <ul className="d-help-mega-list">
                                    <li>
                                      <a href="shop.html">shop</a>
                                    </li>
                                    <li>
                                      <a href="faq.html">faq page</a>
                                    </li>
                                    <li>
                                      <a href="404.html">404 page</a>
                                    </li>
                                    <li>
                                      <a href="team.html">team page</a>
                                    </li>
                                    <li>
                                      <a href="shop-detail.html">shop detail</a>
                                    </li>
                                    <li>
                                      <a href="coming-soon.html">coming-soon</a>
                                    </li>
                                    <li>
                                      <a href="volunteer.html">
                                        volunteer page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-listing2.html">
                                        blog listing 02
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="d-help-mega-feature">
                                  <h4 className="mega-tittle">latest news</h4>
                                  <div className="d-help-maga-news">
                                    <figure
                                      id="plate-inverse4"
                                      className="hover-overlay"
                                    >
                                      <img
                                        src="extra-images/latest.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="d-help-mega-news-text">
                                      <h6>help in libya</h6>
                                      <span>1 hour ago</span>
                                    </div>
                                  </div>
                                  <div className="d-help-maga-news">
                                    <figure
                                      id="plate-inverse16"
                                      className="hover-overlay"
                                    >
                                      <img
                                        src="extra-images/latest1.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="d-help-mega-news-text">
                                      <h6>help in libya</h6>
                                      <span>1 hour ago</span>
                                    </div>
                                  </div>
                                  <div className="d-help-maga-news">
                                    <figure
                                      id="plate-inverse7"
                                      className="hover-overlay"
                                    >
                                      <img
                                        src="extra-images/latest2.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="d-help-mega-news-text">
                                      <h6>help in libya</h6>
                                      <span>1 hour ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="d-help-mega-feature">
                                  <h4 className="mega-tittle">features news</h4>
                                  <div className="d-help-mege-news-fig">
                                    <figure
                                      id="plate-inverse"
                                      className="hover-overlay"
                                    >
                                      <img
                                        src="extra-images/mega-news.jpg"
                                        alt=""
                                      />
                                      <a
                                        data-rel="prettyPhoto"
                                        href="https://www.youtube.com/watch?v=lVHpH1y_G4Y"
                                      >
                                        <i className="fa fa-play-circle"></i>
                                      </a>
                                    </figure>
                                    <p>
                                      It has roots in a piece of classNameical
                                      Latin piece of piece classNameical Latin
                                      literature from..
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="chlid">
                            <li>
                              <a href="#">Event</a>
                              <ul className="chlid">
                                <li>
                                  <a href="event-full.html">event full</a>
                                </li>
                                <li>
                                  <a href="event-2column.html">
                                    event 2 column
                                  </a>
                                </li>
                                <li>
                                  <a href="event-3column.html">
                                    event 3 column
                                  </a>
                                </li>
                                <li>
                                  <a href="event-listing.html">event listing</a>
                                </li>
                                <li>
                                  <a href="event-listing02.html">
                                    event listing 02
                                  </a>
                                </li>
                                <li>
                                  <a href="event-detail.html">
                                    event detail page
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Gallery</a>
                              <ul className="chlid">
                                <li>
                                  <a href="gallery-2column.html">
                                    Gallery 2 Column
                                  </a>
                                </li>
                                <li>
                                  <a href="gallery-3column.html">
                                    Gallery 3 Column
                                  </a>
                                </li>
                                <li>
                                  <a href="gallery-multi-grid.html">
                                    gallery Multiple
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop.html">shop</a>
                            </li>
                            <li>
                              <a href="faq.html">faq page</a>
                            </li>
                            <li>
                              <a href="404.html">404 page</a>
                            </li>
                            <li>
                              <a href="team.html">team page</a>
                            </li>
                            <li>
                              <a href="login.html">login page</a>
                            </li>
                            <li>
                              <a href="shop-detail.html">shop detail</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">coming soon</a>
                            </li>
                            <li>
                              <a href="volunteer.html">volunteer page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                          <ul className="chlid">
                            <li>
                              <a href="contact-us.html">contact us</a>
                            </li>
                            <li>
                              <a href="contact-us-02.html">contact us 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    {/* <!--Responsive Menu--> */}
                    <div
                      id="kode-responsive-navigation"
                      className="dl-menuwrapper"
                    >
                      <button className="dl-trigger">Open Menu</button>
                      <ul className="dl-menu">
                        <li className="active">
                          <a className="active" href="#">
                            Home
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="about-us.html">about us</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">causes</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="causes.html">causes</a>
                            </li>
                            <li>
                              <a href="causes-listing.html">causes listing</a>
                            </li>
                            <li>
                              <a href="causes-detail-sidebar.html">
                                causes sidebar
                              </a>
                            </li>
                            <li>
                              <a href="causes-detail.html">
                                causes detail page
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">event</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="event-full.html">event full</a>
                            </li>
                            <li>
                              <a href="event-2column.html">event 2 column</a>
                            </li>
                            <li>
                              <a href="event-3column.html">event 3 column</a>
                            </li>
                            <li>
                              <a href="event-listing.html">event listing</a>
                            </li>
                            <li>
                              <a href="event-listing02.html">
                                event listing 02
                              </a>
                            </li>
                            <li>
                              <a href="event-detail.html">event detail page</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">blog</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="blog-listing.html">blog listing</a>
                            </li>
                            <li>
                              <a href="blog-listing2.html">blog listing 02</a>
                            </li>
                            <li>
                              <a href="blog-detail.html">blog detail page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">gallery</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="gallery-2column.html">
                                Gallery 2 Column
                              </a>
                            </li>
                            <li>
                              <a href="gallery-3column.html">
                                Gallery 3 Column
                              </a>
                            </li>
                            <li>
                              <a href="gallery-multi-grid.html">
                                gallery Multiple
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">SHOP</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="shop.html">shop</a>
                            </li>
                            <li>
                              <a href="shop-detail.html">shop detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">pages</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="faq.html">faq page</a>
                            </li>
                            <li>
                              <a href="404.html">404 page</a>
                            </li>
                            <li>
                              <a href="team.html">team page</a>
                            </li>
                            <li>
                              <a href="login.html">login page</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">coming-soon</a>
                            </li>
                            <li>
                              <a href="volunteer.html">volunteer page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">CONTACT US</a>
                          <ul className="dl-submenu">
                            <li>
                              <a href="contact-us.html">contact us</a>
                            </li>
                            <li>
                              <a href="contact-us-02.html">contact us 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!--Responsive Menu END--> */}
                    <div className="d-help-donate-wrap">
                      {/* <!-- Button trigger modal --> */}
                      <div data-toggle="modal" data-target="#myModal">
                        <a className="btn-default theme-bg-color" href="#">
                          Donate Us
                        </a>
                      </div>

                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id="myModal"
                        tabindex="-1"
                        role="dialog"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-body">
                              {/* <!--CHILD DONATION WRAP START --> */}
                              <div className="child_donation_row pop-up">
                                <div className="child_donation_element">
                                  <div className="child_donation_des">
                                    <div className="modal-btn">
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="child_donation_caption">
                                      <span>About the Company</span>
                                      <h3 className="section_tittle_2 tittle_3">
                                        Become donation
                                      </h3>
                                      <p>
                                        <span>
                                          Child labour deprives our children
                                          from their childhood
                                        </span>
                                        which is very dangerous
                                      </p>
                                    </div>
                                    <div className="child_doantion_amount">
                                      <div className="child_amount_list">
                                        <span>$10</span>
                                        <span>$25</span>
                                        <span>$50</span>
                                        <span>$30</span>
                                        <div className="kf_commet_field">
                                          <input
                                            placeholder="Enter Your Amount (USD)"
                                            name="email"
                                            type="text"
                                            value=""
                                            data-default="Email*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="child_donation_time">
                                        <h6>I Would Like To Donate :</h6>
                                        <div className="child_donation_item">
                                          <select className="chosen-select">
                                            <option value="Select Course Name">
                                              One time Donation
                                            </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="child_donation_des donation_2">
                                  <h5>
                                    To Verify Please Complaete the Submission
                                    Form Below
                                  </h5>
                                  {/* <!--CHILD AUTHOR WRAP COMMENTS FORM START --> */}
                                  <form
                                    method="post"
                                    className="child_comment donation"
                                  >
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="child_donation_item item_2">
                                          <select className="chosen-select">
                                            <option value="Select Course Name">
                                              One time Donation
                                            </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="child_donation_item item_2">
                                          <select className="chosen-select">
                                            <option value="Select Course Name">
                                              One time Donation
                                            </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                            <option value="mercedes">
                                              Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-help-commet-field">
                                          <input
                                            placeholder="Your Name"
                                            name="author"
                                            type="text"
                                            value=""
                                            data-default="Name*"
                                            size="30"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <p className="form-submit">
                                        <button className="btn-d-help theme-bg-color">
                                          Donate Now
                                        </button>
                                      </p>
                                    </div>
                                  </form>
                                  {/* <!--CHILD AUTHOR WRAP COMMENTS FORM END --> */}
                                </div>
                              </div>
                              {/* <!--CHILD DONATION WRAP END --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--D HELP NAVI WRAP END--> */}
              </div>
            </div>
          </header>
          {/* <!--Header 2 Wrap End--> */}

          {/* <!--Banner Wrap Start--> */}
          <div className="d-relf-banner5 custom-slider">
            {/* <!--Banner Slide Wrap Start--> */}
            <ul className="d-help-slider-for2">
              <li>
                {/* <!--Banner Thumb START--> */}
                <a href="#" data-rel="prettyphoto[]" target="_blank">
                  <img src="extra-images/help-slider1.jpg" alt="" />
                  <div className="kode-caption-wrapper position-left">
                    <div className="kode-caption-inner container">
                      <div className="cap-left-small">
                        <div className="top-content-cap-small">
                          Charity Event In
                        </div>
                        <div className="top-desc-cap-small">NY City 2018</div>
                      </div>
                      <div className="kode-caption">
                        <div className="kode-caption-title">
                          29 June 2018 - Help the Children in need
                        </div>
                        <div className="kode-caption-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt pharetra arcu ut viverra. Cras
                          a feugiat mi. Vivamus rhoncus semper aliquam. Aliquam
                          porta ex ut magna elementum, a porttitor purus mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!--Banner Thumb End--> */}
              </li>
              <li>
                {/* <!--Banner Thumb START--> */}
                <a href="#" data-rel="prettyphoto[]" target="_blank">
                  <img src="extra-images/help-slider2.jpg" alt="" />
                  <div className="kode-caption-wrapper position-center">
                    <div className="kode-caption-inner container">
                      <div className="cap-left-small">
                        <div className="top-content-cap-small">
                          Charity Event In
                        </div>
                        <div className="top-desc-cap-small">NY City</div>
                      </div>
                      <div className="kode-caption">
                        <div className="kode-caption-title">
                          29 June 2018 - Help the Children in need
                        </div>
                        <div className="kode-caption-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt pharetra arcu ut viverra. Cras
                          a feugiat mi. Vivamus rhoncus semper aliquam. Aliquam
                          porta ex ut magna elementum, a porttitor purus mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!--Banner Thumb End--> */}
              </li>
              <li>
                {/* <!--Banner Thumb START--> */}
                <a href="#" data-rel="prettyphoto[]" target="_blank">
                  <img src="extra-images/help-slider3.jpg" alt="" />
                  <div className="kode-caption-wrapper position-right">
                    <div className="kode-caption-inner container">
                      <div className="cap-left-small">
                        <div className="top-content-cap-small">
                          Charity Event In
                        </div>
                        <div className="top-desc-cap-small">NY City</div>
                      </div>
                      <div className="kode-caption">
                        <div className="kode-caption-title">
                          29 June 2018 - Help the Children in need
                        </div>
                        <div className="kode-caption-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt pharetra arcu ut viverra. Cras
                          a feugiat mi. Vivamus rhoncus semper aliquam. Aliquam
                          porta ex ut magna elementum, a porttitor purus mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!--Banner Thumb End--> */}
              </li>
              <li>
                {/* <!--Banner Thumb START--> */}
                <a href="#" data-rel="prettyphoto[]" target="_blank">
                  <img src="extra-images/help-slider4.jpg" alt="" />
                  <div className="kode-caption-wrapper position-center">
                    <div className="kode-caption-inner container">
                      <div className="cap-left-small">
                        <div className="top-content-cap-small">
                          Charity Event In
                        </div>
                        <div className="top-desc-cap-small">NY City</div>
                      </div>
                      <div className="kode-caption">
                        <div className="kode-caption-title">
                          29 June 2018 - Help the Children in need
                        </div>
                        <div className="kode-caption-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt pharetra arcu ut viverra. Cras
                          a feugiat mi. Vivamus rhoncus semper aliquam. Aliquam
                          porta ex ut magna elementum, a porttitor purus mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!--Banner Thumb End--> */}
              </li>
            </ul>
            {/* <!--Banner Slide Wrap End--> */}
          </div>
          {/* <!--Banner Wrap End--> */}
          {/* <!--Main Content Wrap Start--> */}
          <div className="main-contant-wrap">
            {/* <!--D HELP ABOUT Wrap START--> */}
            <section className="d-help-about-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-help-about-fig">
                      <figure>
                        <img src="extra-images/about-me.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-help-about-text">
                      <h3>
                        <span>Working Since 1982 </span>
                      </h3>
                      <p>
                        No matter how many times your amazing, absolutely
                        brilliant - Lorem ipsum dolor sit amet, vix an natum
                        labitur eleifend, mel amet a laoreet menandri. Ei justo
                        complectitur duo. Ei mundi solet ut soletu mel possit
                        quo.
                      </p>
                      <p>
                        No matter how many times your amazing, absolutely
                        brilliant - Lorem ipsum dolor sit amet, vix an natum
                        labitur eleifend, mel amet a laoreet menandri. Ei justo
                        complectitur duo. Ei mundi solet ut soletu mel possit
                        quo.
                      </p>
                      <div className="d-help-jhon">
                        <figure>
                          <img src="extra-images/about-johan.jpg" alt="" />
                        </figure>
                        <div className="d-help-jhon-text">
                          <h6>JOHN SNOW</h6>
                          <h6>CEO & Founder of CharityPro</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--D HELP ABOUT Wrap END--> */}
            {/* <!--Media Section Start--> */}
            <section className="d-help-media">
              <div className="container">
                <div className="row">
                  {/* <!--Media Thumb Start--> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="d-help-media-thumb">
                      <h6 className="media-thumb-title">
                        <a href="#">Media</a>
                      </h6>
                      <span>
                        <i className="fa fa-music fa-4x"></i>
                      </span>
                      <p>
                        It has roots in a piece of classNameical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                  {/* <!--Media Thumb End--> */}
                  {/* <!--Media Thumb Start--> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="d-help-media-thumb">
                      <h6 className="media-thumb-title">
                        <a href="#">Become Volunteer</a>
                      </h6>
                      <span>
                        <i className="fa fa-bullhorn fa-4x"></i>
                      </span>
                      <p>
                        It has roots in a piece of classNameical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                  {/* <!--Media Thumb End--> */}
                  {/* <!--Media Thumb Start--> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="d-help-media-thumb">
                      <h6 className="media-thumb-title">
                        <a href="#">Send Donation</a>
                      </h6>
                      <span>
                        <i className="fa fa-dollar fa-4x"></i>
                      </span>
                      <p>
                        It has roots in a piece of classNameical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                  {/* <!--Media Thumb End--> */}
                </div>
              </div>
            </section>
            {/* <!--Media Section End--> */}
            {/* <!--Causes Wrap Start--> */}
            <section className="d-help-causes-bg">
              <div className="container">
                {/* <!--Section Heading Start--> */}
                <div className="d-help-section-title-new">
                  <h6>See Our RECENT CAUSES</h6>
                  <p>
                    Sed cursus elementum arcu vitae mollis. Curabitur vehicula
                    egestas libero.
                  </p>
                </div>
                {/* <!--Section Heading End--> */}
                <div className="row">
                  {/* <!--Causes Thumb Start--> */}
                  <div className="col-md-4 col-sm-6">
                    <div className="d-help-causes">
                      <figure className="hover-overlay">
                        <img src="extra-images/help-causes1.jpg" alt="" />
                      </figure>
                      {/* <!--Causes Thumb Text Start--> */}
                      <div className="text">
                        <div className="d-relf-chart" data-percent="89">
                          <h5>89%</h5>
                        </div>
                        <h6 className="help-causes-title">
                          <a href="#">Help Africa Children to have homes</a>
                        </h6>
                        <p>
                          This is Photoshop's version of Lorem Ipsum. Proin
                          gravida nibh vel velit auctor aliquet. auctor aliquet.
                        </p>
                        <a className="btn-d-help" href="#">
                          Donate
                        </a>
                      </div>
                      {/* <!--Causes Thumb Text End--> */}
                      {/* <!--Causes Thumb Footer Start--> */}
                      <div className="d-help-causes-footer">
                        <span>
                          <em>Goal:</em>
                          <em>$9500 </em>
                        </span>
                        <span>
                          <em>Raised:</em>
                          <em>$79000</em>
                        </span>
                        <span>
                          <em>Donators:</em>
                          <em>155 </em>
                        </span>
                      </div>
                      {/* <!--Causes Thumb Footer End--> */}
                    </div>
                  </div>
                  {/* <!--Causes Thumb End--> */}
                  {/* <!--Causes Thumb Start--> */}
                  <div className="col-md-4 col-sm-6">
                    <div className="d-help-causes">
                      <figure className="hover-overlay">
                        <img src="extra-images/help-causes2.jpg" alt="" />
                      </figure>
                      {/* <!--Causes Thumb Text Start--> */}
                      <div className="text">
                        <div className="d-relf-chart" data-percent="89">
                          <h5>89%</h5>
                        </div>
                        <h6 className="help-causes-title">
                          <a href="#">Help Africa Children to have homes</a>
                        </h6>
                        <p>
                          This is Photoshop's version of Lorem Ipsum. Proin
                          gravida nibh vel velit auctor aliquet. auctor aliquet.
                        </p>
                        <a className="btn-d-help" href="#">
                          Donate
                        </a>
                      </div>
                      {/* <!--Causes Thumb Text End--> */}
                      {/* <!--Causes Thumb Footer Start--> */}
                      <div className="d-help-causes-footer">
                        <span>
                          <em>Goal:</em>
                          <em>$9500 </em>
                        </span>
                        <span>
                          <em>Raised:</em>
                          <em>$79000</em>
                        </span>
                        <span>
                          <em>Detonators:</em>
                          <em>155 </em>
                        </span>
                      </div>
                      {/* <!--Causes Thumb Footer End--> */}
                    </div>
                  </div>
                  {/* <!--Causes Thumb End--> */}
                  {/* <!--Causes Thumb Start--> */}
                  <div className="col-md-4 hidden-sm">
                    <div className="d-help-causes">
                      <figure className="hover-overlay">
                        <img src="extra-images/help-causes3.jpg" alt="" />
                      </figure>
                      {/* <!--Causes Thumb Text Start--> */}
                      <div className="text">
                        <div className="d-relf-chart" data-percent="89">
                          <h5>89%</h5>
                        </div>
                        <h6 className="help-causes-title">
                          <a href="#">Help Africa Children to have homes</a>
                        </h6>
                        <p>
                          This is Photoshop's version of Lorem Ipsum. Proin
                          gravida nibh vel velit auctor aliquet. auctor aliquet.
                        </p>
                        <a className="btn-d-help" href="#">
                          Donate
                        </a>
                      </div>
                      {/* <!--Causes Thumb Text End--> */}
                      {/* <!--Causes Thumb Footer Start--> */}
                      <div className="d-help-causes-footer">
                        <span>
                          <em>Goal:</em>
                          <em>$9500 </em>
                        </span>
                        <span>
                          <em>Raised:</em>
                          <em>$79000</em>
                        </span>
                        <span>
                          <em>Detonators:</em>
                          <em>155 </em>
                        </span>
                      </div>
                      {/* <!--Causes Thumb Footer End--> */}
                    </div>
                  </div>
                  {/* <!--Causes Thumb End--> */}
                </div>
              </div>
            </section>
            {/* <!--Causes Wrap End--> */}
            {/* <!--Joining Section Start--> */}
            <section className="kode-event-time d-help-joining-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-5">
                    <div className="find-us-box">
                      <div className="find-us-heder">
                        <div className="content-blue">
                          <p>Find Us Next</p>
                          <h2>eVENT</h2>
                          <p>NEAR TO YOU..</p>
                        </div>
                      </div>
                      <div className="content-black">
                        <p>or Connect Us Directly</p>
                        <a className="contactus-button" href="#">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Event Counter --> */}
                  <div className="col-lg-8 col-md-8 col-sm-7">
                    <div className="next-event-counter">
                      <h2>Next Event Start IN</h2>
                      <ul className="countdown">
                        <li>
                          <span className="days">276</span>
                          <p className="days_ref">days</p>
                        </li>
                        <li>
                          <span className="hours">22</span>
                          <p className="hours_ref">hours</p>
                        </li>
                        <li>
                          <span className="minutes">58</span>
                          <p className="minutes_ref">minutes</p>
                        </li>
                        <li>
                          <span className="seconds last">23</span>
                          <p className="seconds_ref">seconds</p>
                        </li>
                      </ul>
                      <h3>SUBSCRIBE FOR UPDATES</h3>
                      <form className="subscribe-form" action="#">
                        <input type="email" placeholder="Email Address" />
                        <input
                          type="submit"
                          value="Subcribe Now"
                          name="submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--Joining Section End--> */}

            {/* <!--D HELP VOLUNTEER TEAM START--> */}
            <section className="d-help-volunteer-team">
              <div className="container">
                {/* <!--Section Heading Start--> */}
                <div className="d-help-section-title-new">
                  <h6>See Our Perfect Team</h6>
                  <p>
                    Sed cursus elementum arcu vitae mollis. Curabitur vehicula
                    egestas libero.
                  </p>
                </div>
                {/* <!--Section Heading End--> */}
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="d-help-volunteer-fig">
                      <figure className="overlay">
                        <img src="extra-images/volunteer-grid.jpg" alt="" />
                        <div className="d-help-vltr-team-text">
                          <h4>jhonny doe</h4>
                          <span>leader</span>
                        </div>
                        <div className="d-help-vltr-fig-caption">
                          <div className="d-help-vltr-team-text position">
                            <h4>jhonny doe</h4>
                            <span>leader</span>
                          </div>
                          <div className="d-help-vltr-team-social">
                            <p>become a volunteer to help other at denoy</p>
                            <ul className="d-help-vltr-media">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-dribbble"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="d-help-volunteer-fig">
                      <figure className="overlay">
                        <img src="extra-images/volunteer-grid1.jpg" alt="" />
                        <div className="d-help-vltr-team-text">
                          <h4>jhonny doe</h4>
                          <span>leader</span>
                        </div>
                        <div className="d-help-vltr-fig-caption">
                          <div className="d-help-vltr-team-text position">
                            <h4>jhonny doe</h4>
                            <span>leader</span>
                          </div>
                          <div className="d-help-vltr-team-social">
                            <p>become a volunteer to help other at denoy</p>
                            <ul className="d-help-vltr-media">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-dribbble"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="d-help-volunteer-fig">
                      <figure className="overlay">
                        <img src="extra-images/volunteer-grid.jpg" alt="" />
                        <div className="d-help-vltr-team-text">
                          <h4>jhonny doe</h4>
                          <span>leader</span>
                        </div>
                        <div className="d-help-vltr-fig-caption">
                          <div className="d-help-vltr-team-text position">
                            <h4>jhonny doe</h4>
                            <span>leader</span>
                          </div>
                          <div className="d-help-vltr-team-social">
                            <p>become a volunteer to help other at denoy</p>
                            <ul className="d-help-vltr-media">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-dribbble"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="d-help-volunteer-fig">
                      <figure className="overlay">
                        <img src="extra-images/volunteer-grid2.jpg" alt="" />
                        <div className="d-help-vltr-team-text">
                          <h4>jhonny doe</h4>
                          <span>leader</span>
                        </div>
                        <div className="d-help-vltr-fig-caption">
                          <div className="d-help-vltr-team-text position">
                            <h4>jhonny doe</h4>
                            <span>leader</span>
                          </div>
                          <div className="d-help-vltr-team-social">
                            <p>become a volunteer to help other at denoy</p>
                            <ul className="d-help-vltr-media">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-dribbble"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--D HELP VOLUNTEER TEAM END--> */}

            {/* <!--Stats Section Start--> */}
            <section className="d-help-stats-wrap">
              <div className="container">
                <div className="row">
                  {/* <!--Help Stats Start--> */}
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="d-help-stats">
                      <h4>Enrollment 2018</h4>
                      <h5>
                        <span className="counter">197</span>r.
                      </h5>
                      <p>We Work Constantly and We Strive for</p>
                    </div>
                  </div>
                  {/* <!--Help Stats End--> */}
                  {/* <!--Help Stats Start--> */}
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="d-help-stats">
                      <h4>Child Abuse Cases</h4>
                      <h5>
                        <span className="counter">98352</span>
                      </h5>
                      <p>Active Vlounteer Around the World</p>
                    </div>
                  </div>
                  {/* <!--Help Stats End--> */}
                  {/* <!--Help Stats Start--> */}
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="d-help-stats">
                      <h4>Human Right Violation</h4>
                      <h5>
                        <span className="counter">5,91,000</span>
                      </h5>
                      <p>We Have Compiled for all people</p>
                    </div>
                  </div>
                  {/* <!--Help Stats End--> */}
                </div>
              </div>
            </section>
            {/* <!--Stats Section End--> */}
            <section className="d-help-causes-bg">
              <div className="container">
                {/* <!--Section Heading Start--> */}
                <div className="d-help-section-title-new">
                  <h6>see our blog</h6>
                  <p>
                    Sed cursus elementum arcu vitae mollis. Curabitur vehicula
                    egestas libero.
                  </p>
                </div>
                {/* <!--Section Heading End--> */}
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="d-help-blog-list">
                      <figure id="plate-inverse3" className="hover-overlay">
                        <img src="extra-images/blog-fig.jpg" alt="" />
                      </figure>
                      <div className="d-help-blog-row">
                        <div className="d-help-blog-comment">
                          <div className="d-help-blog-date">
                            <figure>
                              <img src="extra-images/jhon-willim.jpg" alt="" />
                            </figure>
                            <p>Nov 5, 2017 by John Willa</p>
                          </div>
                          <ul className="d-help-like">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>04
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comment-o"></i>04
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-help-blog-text">
                          <h4>
                            <a href="#">
                              Lorem ipsum dolor sit amet, sectetur adipisicing
                              elit
                            </a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <a className="btn-d-help" href="#">
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="d-help-blog-list">
                      <figure id="plate-inverse1" className="hover-overlay">
                        <img src="extra-images/blog-fig1.jpg" alt="" />
                      </figure>
                      <div className="d-help-blog-row">
                        <div className="d-help-blog-comment">
                          <div className="d-help-blog-date">
                            <figure>
                              <img src="extra-images/jhon-willim.jpg" alt="" />
                            </figure>
                            <p>Nov 5, 2017 by John Willa</p>
                          </div>
                          <ul className="d-help-like">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>04
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comment-o"></i>04
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-help-blog-text">
                          <h4>
                            <a href="#">
                              Lorem ipsum dolor sit amet, sectetur adipisicing
                              elit
                            </a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <a className="btn-d-help" href="#">
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="d-help-blog-list">
                      <figure id="plate-inverse15" className="hover-overlay">
                        <img src="extra-images/blog-fig2.jpg" alt="" />
                      </figure>
                      <div className="d-help-blog-row">
                        <div className="d-help-blog-comment">
                          <div className="d-help-blog-date">
                            <figure>
                              <img src="extra-images/jhon-willim.jpg" alt="" />
                            </figure>
                            <p>Nov 5, 2017 by John Willa</p>
                          </div>
                          <ul className="d-help-like">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>04
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comment-o"></i>04
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-help-blog-text">
                          <h4>
                            <a href="#">
                              Lorem ipsum dolor sit amet, sectetur adipisicing
                              elit
                            </a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <a className="btn-d-help" href="#">
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <!--Main Content Wrap End--> */}
          {/* <!--Brand Wrap Start--> */}
          <div className="d-help-brand theme-bg-color">
            <div className="container">
              <div className="row">
                {/* <!--Brand Slider Start--> */}
                <div className="brand-slider">
                  <div>
                    <a href="#">
                      <img src="images/help-brand3.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="images/help-brand1.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="images/help-brand2.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="images/help-brand3.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="images/help-brand1.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* <!--Brand Slider End--> */}
              </div>
            </div>
          </div>
          {/* <!--Brand Wrap End--> */}
          {/* <!--Footer Wrap Start--> */}
          <footer className="d-help-footer footer2 overlay">
            <div className="container">
              {/* <!--Widget Text Start--> */}
              <div className="widget-services-call">
                <ul>
                  <li>
                    <div className="widget-call-up">
                      <a href="#">
                        <i className="fa fa-phone"></i>
                      </a>
                      <div className="widget-call-contact">
                        <h6>phone</h6>
                        <p>(+1-888-77-8989 00)</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="widget-call-up">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>
                      </a>
                      <div className="widget-call-contact">
                        <h6>address</h6>
                        <p>12od, strikerate st, us1010a</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="widget-call-up">
                      <a href="#">
                        <i className="fa fa-location-arrow"></i>
                      </a>
                      <div className="widget-call-contact">
                        <h6>email</h6>
                        <p>
                          <a href="#">info@domiannname</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--Widget Text End--> */}
              {/* <!--Widget Twitter Start--> */}
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="widget widget-email">
                    <h2 className="widget-title">Liberality</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore consectetur adipisicing
                      elit, consectetur adipisicing elit, sed do eiusmod tempor
                    </p>
                    <div className="widget email-location">
                      <div className="d-help-commet-field email">
                        <input
                          placeholder="Enter Your Email Address"
                          name="author"
                          type="text"
                          value=""
                          data-default="Name*"
                          size="30"
                          required
                        />
                        <a className="btn-d-help" href="#">
                          <i className="fa fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  {/* <!--D HELP SIDE WIDGET START--> */}
                  <div className="d-help-side-widget">
                    <h2 className="widget-title">recent post</h2>
                    <div className="d-help-side-categoires">
                      <ul>
                        <li>
                          <div className="d-help-side-latest widget">
                            <figure className="hover-overlay">
                              <img
                                src="extra-images/widget-recent.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="d-help-latest-text">
                              <span>26 july 2016</span>
                              <h6>
                                <a href="#">
                                  days are all happiness is key and free
                                </a>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-help-side-latest widget">
                            <figure className="hover-overlay">
                              <img
                                src="extra-images/widget-recent1.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="d-help-latest-text">
                              <span>26 july 2016</span>
                              <h6>
                                <a href="#">
                                  days are all happiness is key and free
                                </a>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-help-side-latest widget">
                            <figure className="hover-overlay">
                              <img
                                src="extra-images/widget-recent2.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="d-help-latest-text">
                              <span>26 july 2016</span>
                              <h6>
                                <a href="#">
                                  days are all happiness is key and free
                                </a>
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!--D HELP SIDE WIDGET END--> */}
                </div>
                <div className="col-md-4">
                  <div className="widget email-location margin">
                    <h2 className="widget-title">send us a message</h2>
                    <div className="d-help-commet-field email">
                      <input
                        placeholder="your name"
                        name="author"
                        type="text"
                        value=""
                        data-default="Name*"
                        size="30"
                        required
                      />
                    </div>
                    <div className="d-help-commet-field email">
                      <input
                        placeholder="Your Email"
                        name="author"
                        type="text"
                        value=""
                        data-default="Name*"
                        size="30"
                        required
                      />
                    </div>
                    <div className="d-help-textarea email">
                      <textarea>your message</textarea>
                    </div>
                    <a href="#" className="btn-d-help theme-bg-color">
                      send
                    </a>
                  </div>
                </div>
                {/* <!--Widget Twitter End--> */}
              </div>
            </div>
          </footer>
          {/* <!--Footer Wrap End--> */}
          {/* <!--Copy Right Wrap Start--> */}
          <div className="copy-right d-help-copy-right copy">
            <div className="container">
              <p>Copyright © 2017 liberality. All Right Reserved</p>
            </div>
          </div>
          {/* <!--Copy Right Wrap End--> */}
        </div>
        {/* <!--kode Wrapper End--> */}
        {/* <!--Jquery Library--> */}
        <script src="js/jquery.js"></script>
        {/* <!--Bootstrap core JavaScript--> */}
        <script src="js/bootstrap.js"></script>
        {/* <!--Slick Slider JavaScript--> */}
        <script src="js/slick.min.js"></script>
        {/* <!--Dl Menu Script--> */}
        <script src="js/dl-menu/modernizr.custom.js"></script>
        <script src="js/dl-menu/jquery.dlmenu.js"></script>
        <script src="js/jquery.plate.js"></script>
        {/* <!--Pretty Photo JavaScript--> */}
        <script src="js/jquery.prettyPhoto.js"></script>
        {/* <!--Pretty Photo JavaScript--> */}
        <script src="js/chosen.jquery.min.js"></script>
        <script src="js/pie.js"></script>
        {/* <!--Counter up JavaScript--> */}
        <script src="js/waypoints.js"></script>
        {/* <!--Counter up JavaScript--> */}
        <script src="js/downCount.js"></script>
        {/* <!--Custom JavaScript--> */}
        <script src="js/custom.js"></script>
      </div>
    </>
  );
}

export default Home;
