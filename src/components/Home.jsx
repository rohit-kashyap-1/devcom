import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <section className="slider_section mb-63">
        <div className="slider_area slick_slider_activation" data-slick='{
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": true,
            "dots": true,
            "autoplay": false,
            "speed": 300,
            "infinite": true
        }'>
            <div className="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="slider_text">
                                <span>Lookbook</span>
                                <h1>fashion trend for autum girls with vibes</h1>
                                <p>We love seeing how our Aslam wearers like <br /> to wear their Norda</p>
                                <Link className="btn btn-primary" to="/shop">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="slider_text">
                                <span>Lookbook</span>
                                <h1>fashion trend for autum girls with vibes</h1>
                                <p>We love seeing how our Aslam wearers like <br /> to wear their Norda</p>
                                <Link className="btn btn-primary" to="/shop">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single_slider d-flex align-items-center" data-bgimg="/assets/img/slider/slider1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="slider_text">
                                <span>Lookbook</span>
                                <h1>fashion trend for autum girls with vibes</h1>
                                <p>We love seeing how our Aslam wearers like <br /> to wear their Norda</p>
                                <Link className="btn btn-primary" to="/shop">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*slider area end*/}

    {/*shipping section start*/}
    <section className="shipping_section mb-102">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="shipping_inner d-flex justify-content-between">
                        <div className="single_shipping d-flex align-items-center">
                            <div className="shipping_icon">
                                <i className="icon-cursor icons"></i>
                            </div>
                            <div className="shipping_text">
                                <h3>Free Shipping</h3>
                                <p>Orders over $100</p>
                            </div>
                        </div>
                        <div className="single_shipping d-flex align-items-center">
                            <div className="shipping_icon">
                                <i className="icon-reload icons"></i>
                            </div>
                            <div className="shipping_text">
                                <h3>Free Returns</h3>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                        <div className="single_shipping d-flex align-items-center">
                            <div className="shipping_icon">
                                <i className="icon-lock icons"></i>
                            </div>
                            <div className="shipping_text">
                                <h3>100% Payment Secure</h3>
                                <p>Payment Online</p>
                            </div>
                        </div>
                        <div className="single_shipping d-flex align-items-center">
                            <div className="shipping_icon">
                                <i className="icon-tag icons"></i>
                            </div>
                            <div className="shipping_text">
                                <h3>Affordable Price</h3>
                                <p>Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*shipping section end*/}

    {/* banner section start */}
    <section className="banner_section mb-109">
        <div className="container">
            <div className="section_title mb-60">
                <h2>featured collections</h2>
            </div>
            <div className="banner_container d-flex">
                <figure className="single_banner position-relative mr-30">
                    <img src="/assets/img/bg/bg1.jpg" alt="" />
                    <figcaption className="banner_text position-absolute">
                        <h3>Zara Pattern <br /> backpacks</h3>
                        <p>Stretch, fresh-cool help you alway <br /> comfortable</p>
                        <Link className="btn btn-primary" to="/shop">Shop Now</Link>
                    </figcaption>
                </figure>
                <figure className="single_banner position-relative">
                    <img src="/assets/img/bg/bg2.jpg" alt="" />
                    <figcaption className="banner_text position-absolute">
                        <h3 className="text-white">Basic Color Caps</h3>
                        <p className="text-white">Minimalist never cool, choose and make <br /> the simple great again!</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
    {/* banner section end */}

    {/* product section start */}
    <section className="product_section mb-96">
        <div className="container">
            <div className="product_header d-flex justify-content-between  mb-50">
                <div className="section_title">
                    <h2>best selling items</h2>
                </div>
                <div className="product_tab_btn d-flex">
                    <ul className="nav" role="tablist">
                        <li>
                            <Link className="active" data-toggle="tab" to="/#all" role="tab" aria-controls="all"
                                aria-selected="true">
                                All
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#clothings" role="tab" aria-controls="clothings"
                                aria-selected="false">
                                Clothings
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#bags" role="tab" aria-controls="bags" aria-selected="false">
                                Bags
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#shoes" role="tab" aria-controls="shoes" aria-selected="false">
                                Shoes
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#accessories" role="tab" aria-controls="accessories"
                                aria-selected="false">
                                Accessories
                            </Link>
                        </li>
                    </ul>
                    <div className="all_product">
                        <Link to="/shop">All Product</Link>
                    </div>
                </div>
            </div>
            <div className="product_container row">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="all" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>

                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>

                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="clothings" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>



                        </div>
                    </div>
                    <div className="tab-pane fade" id="bags" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="shoes" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* product section end */}

    {/* banner section start */}
    <section className="banner_section banner_style2 mb-109">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <figure className="single_banner position-relative">
                        <img src="/assets/img/bg/bg3.jpg" alt="" />
                        <div className="banner_text position-absolute">
                            <h3>Minimalist <br /> sneaker</h3>
                            <p>Stretch, fresh-cool help you alway <br /> comfortable</p>
                            <Link className="btn btn-primary" to="/shop">Shop Now</Link>
                        </div>
                        <div className="banner_tag">
                            <span>new arrivals <br /> women</span>
                        </div>
                    </figure>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <figure className="single_banner position-relative">
                        <img src="/assets/img/bg/bg4.jpg" alt="" />
                        <div className="banner_text position-absolute text__style2">
                            <h3><span>50%</span> OFF <br /> for Autumn</h3>
                            <p>Stretch, fresh-cool help you alway <br /> comfortable</p>
                            <Link className="btn btn-primary" to="/shop">Shop Now</Link>
                        </div>
                        <div className="banner_tag">
                            <span>mega sale</span>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    {/* banner section end */}

    {/* product section start */}
    <section className="product_section mb-80">
        <div className="container">
            <div className="product_header d-flex justify-content-between  mb-60">
                <div className="section_title">
                    <h2>new arrivals</h2>
                </div>
                <div className="product_tab_btn d-flex">
                    <ul className="nav" role="tablist">
                        <li>
                            <Link className="active" data-toggle="tab" to="/#all2" role="tab" aria-controls="all2"
                                aria-selected="true">
                                All
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#clothings2" role="tab" aria-controls="clothings2"
                                aria-selected="false">
                                Clothings
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#bags2" role="tab" aria-controls="bags2" aria-selected="false">
                                Bags
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#shoes2" role="tab" aria-controls="shoes2" aria-selected="false">
                                Shoes
                            </Link>
                        </li>
                        <li>
                            <Link data-toggle="tab" to="/#accessories2" role="tab" aria-controls="accessories2"
                                aria-selected="false">
                                Accessories
                            </Link>
                        </li>
                    </ul>
                    <div className="all_product">
                        <Link to="/shop">All Product</Link>
                    </div>
                </div>
            </div>
            <div className="product_container row">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="all2" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>

                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>

                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="clothings2" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>



                        </div>
                    </div>
                    <div className="tab-pane fade" id="bags2" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="shoes2" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="accessories2" role="tabpanel">
                        <div className="product_slick slick_slider_activation" data-slick='{
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,
                            "responsive":[
                              {"breakpoint":992, "settings": { "slidesToShow": 3 } },
                              {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                              {"breakpoint":300, "settings": { "slidesToShow": 1 } }
                             ]
                        }'>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(4)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$62.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link title="Add To Cart" className="btn btn-primary" to="/#">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(6)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Make Thing Happen
                                                T-Shirts</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$38.00</span>

                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>

                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product1.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(12)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic Joggin Shorts</Link>
                                        </h4>
                                        <div className="price_box">
                                            <span className="current_price">$26.00</span>
                                            <span className="old_price">$362.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product2.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-20%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(14)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$35.00</span>
                                            <span className="old_price">$38.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product3.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="product_label">
                                            <span>-18%</span>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(2)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Basic White Simple
                                                Sneaker</Link></h4>
                                        <div className="price_box">
                                            <span className="current_price">$43.00</span>
                                            <span className="old_price">$46.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                            <article className="col single_product">
                                <figure>
                                    <div className="product_thumb">
                                        <Link to="/product-details">
                                            <img className="primary_img" src="/assets/img/product/product4.jpg"
                                                alt="consectetur" />
                                        </Link>
                                        <div className="product_action">
                                            <ul>
                                                <li className="wishlist"><Link to="/#" data-tippy="Wishlist"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-heart icons"></i></Link></li>

                                                <li className="quick_view"><Link data-toggle="modal" data-target="#modal_box"
                                                        data-tippy="Quick View" to="/#" data-tippy-inertia="true"
                                                        data-tippy-delay="50" data-tippy-arrow="true"
                                                        data-tippy-placement="left"><i
                                                            className="icon-size-fullscreen icons"></i></Link></li>
                                                <li className="compare"><Link data-tippy="Compare" to="/#"
                                                        data-tippy-inertia="true" data-tippy-delay="50"
                                                        data-tippy-arrow="true" data-tippy-placement="left"><i
                                                            className="icon-refresh icons"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <figcaption className="product_content text-center">
                                        <div className="product_ratting">
                                            <ul className="d-flex justify-content-center">
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><Link to="/#"><i className="ion-android-star"></i></Link></li>
                                                <li><span>(8)</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="product_name"><Link to="/product-details">Simple Rounded
                                                Sunglasses</Link></h4>
                                        <div className="price_box">
                                            <span className="text-black">$42.00</span>
                                        </div>
                                        <div className="add_to_cart">
                                            <Link className="btn btn-primary" to="/#" data-tippy="Add To Cart"
                                                data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true"
                                                data-tippy-placement="top">Add To Cart</Link>
                                        </div>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* product section end */}

    {/* blog section start */}
    <section className="blog_section mb-140">
        <div className="container">
            <div className="product_header border-top d-flex justify-content-between  mb-60">
                <div className="section_title">
                    <h2>press & look</h2>
                </div>
                <div className="all_articles">
                    <Link to="/blog">All articles</Link>
                </div>
            </div>
            <div className="blog_container row">
                <div className="blog_slick slick_slider_activation" data-slick='{
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "arrows": false,
                        "dots": false,
                        "autoplay": false,
                        "speed": 300,
                        "infinite": true,
                        "responsive":[
                          {"breakpoint":992, "settings": { "slidesToShow": 2 } },
                          {"breakpoint":768, "settings": { "slidesToShow": 2 } },
                          {"breakpoint":576, "settings": { "slidesToShow": 1 } }
                        ]
                    }'>
                    <article className="col single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog1.jpg" alt="" /></Link>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><Link to="/blog-details">Five things you only know if you’re at Chanel's Hamburg
                                        Show</Link></h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="col single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog2.jpg" alt="" /></Link>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><Link to="/blog-details">Basic colord mixed - trendind 2020</Link></h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="col single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog3.jpg" alt="" /></Link>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><Link to="/blog-details">Calvin Klein Shoes Collection 2020, Activites Summer</Link>
                                </h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="col single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <Link to="/blog-details"><img src="/assets/img/blog/blog1.jpg" alt="" /></Link>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><Link to="/blog-details">Five things you only know if you’re at Chanel's Hamburg
                                        Show</Link></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
