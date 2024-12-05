import React from 'react'

export default function Footer() {
  return (
    <div>
    <section className="instagram_section mb-135">
        <div className="container-fluid p-0">
            <div className="section_title text-center mb-130">
                <h2>follow our instagram</h2>
            </div>
            <div id="instagramFeed"></div>
        </div>
    </section>
    <section className="newsletter_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="newsletter_inner d-flex justify-content-between align-items-center">
                        <div className="newsletter_text">
                            <h3>keep connected</h3>
                            <p>Get updates by subscribe our weekly newsletter</p>
                        </div>
                        <div className="newsletter_subscribe">
                            <form id="mc-form">
                                <input className="border-0" id="mc-email" type="email" autoComplete="off"
                                    placeholder="Enter your email address" />
                                <i className="icon-envelope-open icons"></i>
                                <button className="border-0" id="mc-submit">Subscribe</button>
                            </form>

                            <div className="mailchimp-alerts text-centre">
                                <div className="mailchimp-submitting"></div>
                                <div className="mailchimp-success"></div>
                                <div className="mailchimp-error"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer_widgets">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <div className="footer_widget_list">
                        <div className="footer_logo">
                            <a href="#"><img src="/assets/img/logo/logo.png" alt="" /></a>
                        </div>
                        <div className="footer_contact">
                            <div className="footer_contact_list">
                                <span>Our Location</span>
                                <p>869 General Village Apt. 645, Moorebury, USA</p>
                            </div>
                            <div className="footer_contact_list">
                                <span>24/7 hotline:</span>
                                <a href="tel:(+99)0521282399">(+99) 052 128 2399</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7">
                    <div className="footer_widget_list text-right">
                        <div className="footer_menu">
                            <ul className="d-flex justify-content-end">
                                <li><a href="index.html">home</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="product-details.html">Product</a></li>
                                <li><a href="#">pages</a></li>
                                <li><a href="blog.html">Blog</a></li>
                            </ul>
                        </div>
                        <div className="footer_social">
                            <ul className="d-flex justify-content-end">
                                <li><a href="https://twitter.com" data-tippy="Twitter" data-tippy-inertia="true"
                                        data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i
                                            className="ion-social-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com" data-tippy="Facebook" data-tippy-inertia="true"
                                        data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i
                                            className="ion-social-facebook"></i></a></li>
                                <li><a href="https://www.google.com" data-tippy="googleplus" data-tippy-inertia="true"
                                        data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i
                                            className="ion-social-googleplus-outline"></i></a></li>
                                <li><a href="https://www.instagram.com" data-tippy="Instagram" data-tippy-inertia="true"
                                        data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i
                                            className="ion-social-instagram-outline"></i></a></li>
                                <li><a href="https://www.youtube.com" data-tippy="Youtube" data-tippy-inertia="true"
                                        data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i
                                            className="ion-social-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="copyright_right">
                            <p>©2021 <span>Uthr</span>. made with <i className="ion-heart"></i>  by <a href="https://hasthemes.com" target="_blank">HasThemes</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="modal fade" id="modal_box" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="ion-android-close"></i></span>
                </button>
                <div className="modal_body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="modal_zoom_gallery">
                                    <div className="product_zoom_thumb">
                                        <img src="/assets/img/product/big-product/product1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="modal_right">
                                    <div className="modal_title mb-10">
                                        <h2>Donec Ac Tempus</h2>
                                    </div>
                                    <div className="modal_price mb-10">
                                        <span className="new_price">$64.99</span>
                                        <span className="old_price">$78.99</span>
                                    </div>
                                    <div className="modal_description mb-15">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste
                                            laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam
                                            in quos qui, </p>
                                    </div>
                                    <div className="variants_selects">
                                        <div className="variants_size">
                                            <h2>size</h2>
                                            <select className="select_option">
                                                <option selected value="1">s</option>
                                                <option value="1">m</option>
                                                <option value="1">l</option>
                                                <option value="1">xl</option>
                                                <option value="1">xxl</option>
                                            </select>
                                        </div>
                                        <div className="variants_color">
                                            <h2>color</h2>
                                            <select className="select_option">
                                                <option selected value="1">purple</option>
                                                <option value="1">violet</option>
                                                <option value="1">black</option>
                                                <option value="1">pink</option>
                                                <option value="1">orange</option>
                                            </select>
                                        </div>
                                        <div className="modal_add_to_cart">
                                            <form action="#">
                                                <input min="1" max="100" step="2" value="1" type="number" />
                                                <button type="submit">add to cart</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal_social">
                                        <h2>Share this product</h2>
                                        <ul>
                                            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a>
                                            </li>
                                            <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}
