import React from 'react'
import { Link } from 'react-router-dom'
export default function Shop() {
  return (
    <div>
          {/*shop  area start*/}
    <div class="shop_section shop_reverse">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                   {/*sidebar widget start*/}
                    <aside class="sidebar_widget">
                        <div class="widget_inner">
                            <div class="widget_list widget_categories">
                                <h2>Categories</h2>
                                <ul>
                                    <li class="widget_sub_categories"><Link to="#" data-toggle="collapse" data-target="#men">Men</Link>
                                        <ul class="widget_dropdown_categories collapse show" id="men">
                                            <li><Link to="/#"> New products <span>104</span></Link></li>
                                            <li><Link to="/#">Gymwear <span>68</span></Link></li>
                                            <li><Link to="/#">Jakets <span>75</span></Link></li>
                                            <li><Link to="/#">Jeans <span>30</span></Link></li>
                                            <li><Link to="/#">Shirts <span>150</span></Link></li>
                                            <li><Link to="/#">T-Shirts <span>113</span></Link></li>
                                            <li><Link to="/#">Accessories <span>95</span></Link></li>
                                        </ul>
                                    </li>
                                    <li class="widget_sub_categories"><Link to="#" data-toggle="collapse" data-target="#women">women</Link>
                                        <ul class="widget_dropdown_categories collapse" id="women">
                                            <li><Link to="/#"> New products <span>104</span></Link></li>
                                            <li><Link to="/#">Gymwear <span>68</span></Link></li>
                                            <li><Link to="/#">Jakets <span>75</span></Link></li>
                                            <li><Link to="/#">Jeans <span>30</span></Link></li>
                                            <li><Link to="/#">Shirts <span>150</span></Link></li>
                                            <li><Link to="/#">T-Shirts <span>113</span></Link></li>
                                            <li><Link to="/#">Accessories <span>95</span></Link></li>
                                        </ul>
                                    </li>
                                    <li class="widget_sub_categories"><Link to="#" data-toggle="collapse" data-target="#footwear">footwear</Link>
                                        <ul class="widget_dropdown_categories collapse" id="footwear">
                                            <li><Link to="/#"> New products <span>104</span></Link></li>
                                            <li><Link to="/#">Gymwear <span>68</span></Link></li>
                                            <li><Link to="/#">Jakets <span>75</span></Link></li>
                                            <li><Link to="/#">Jeans <span>30</span></Link></li>
                                            <li><Link to="/#">Shirts <span>150</span></Link></li>
                                            <li><Link to="/#">T-Shirts <span>113</span></Link></li>
                                            <li><Link to="/#">Accessories <span>95</span></Link></li>
                                        </ul>
                                    </li>
                                    <li class="widget_sub_categories"><Link to="#" data-toggle="collapse" data-target="#accessories">accessories</Link>
                                        <ul class="widget_dropdown_categories collapse" id="accessories">
                                            <li><Link to="/#"> New products <span>104</span></Link></li>
                                            <li><Link to="/#">Gymwear <span>68</span></Link></li>
                                            <li><Link to="/#">Jakets <span>75</span></Link></li>
                                            <li><Link to="/#">Jeans <span>30</span></Link></li>
                                            <li><Link to="/#">Shirts <span>150</span></Link></li>
                                            <li><Link to="/#">T-Shirts <span>113</span></Link></li>
                                            <li><Link to="/#">Accessories <span>95</span></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget_list widget_filter">
                                <h2>Filter By</h2>
                                 <div class="filter__list slider_range">
                                    <h3>price</h3>
                                    <form action="#">
                                        <div id="slider-range"></div>
                                        <span>Range:</span>
                                        <input type="text" name="text" id="amount" />

                                    </form>
                                 </div>

                                <div class="filter__list widget_size">
                                    <h3> size</h3>
                                    <ul>
                                        <li>
                                            <Link to="#">S </Link>
                                        </li>
                                        <li>
                                            <Link to="#"> M</Link>
                                        </li>
                                        <li>
                                            <Link to="#">L</Link>
                                        </li>
                                        <li>
                                            <Link to="#"> XL</Link>
                                        </li>
                                        <li>
                                            <Link to="#">XLL</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="filter__list widget_color">
                                    <h3>color</h3>
                                     <ul>
                                       <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color1"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color2"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color3"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color4"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color5"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color6"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color7"></span>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <span class="checkmark color8"></span>
                                        </li>
                                    </ul>
                                </div>
                                  <div class="filter__list widget_brands">
                                    <h3 data-toggle="collapse" data-target="#brands">brands</h3>
                                    <ul class="widget_dropdown_categories collapse show" id="brands">
                                        <li><Link to="/#"> The North Face <span>104</span></Link></li>
                                        <li><Link to="/#">Zara Basic <span>68</span></Link></li>
                                        <li><Link to="/#">Moschino <span>75</span></Link></li>
                                        <li><Link to="/#">Supreme <span>30</span></Link></li>
                                        <li><Link to="/#">Ecko Unltd <span>150</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget_list">
                                <h2>Recent Product</h2>
                                <div class="recent_product">
                                    <div class="recent_product_list d-flex mb-25">
                                        <div class="recent_thumb">
                                            <Link to="/product-details"><img src="assets/img/product/product4.jpg" alt="" /></Link>
                                        </div>
                                        <div class="recent_content">
                                            <h4><Link to="/product-details">Barbour T-shirt <br /> International</Link></h4>
                                            <span>$32.00</span>
                                        </div>
                                    </div>
                                    <div class="recent_product_list d-flex">
                                        <div class="recent_thumb">
                                            <Link to="/product-details"><img src="assets/img/product/product6.jpg" alt="" /></Link>
                                        </div>
                                        <div class="recent_content">
                                            <h4><Link to="/product-details">Barbour T-shirt <br /> International</Link></h4>
                                            <span>$32.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/*sidebar widget end*/}
                </div>
                <div class="col-lg-9 col-md-12">
                    {/*shop wrapper start*/}

                    {/*breadcrumbs area start*/}
                    <div class="breadcrumb_content">
                        <ul>
                            <li><Link to="/index">home</Link></li>
                            <li>shop</li>
                        </ul>
                    </div>
                    {/*breadcrumbs area end*/}

                    <div class="shop_banner d-flex align-items-center" data-bgimg="assets/img/bg/shop_bg.jpg">
                        <div class="shop_banner_text">
                            <h2>essential <br /> wears</h2>
                            <p>The collections basic items <br /> essential for all girls</p>
                        </div>
                    </div>
                    {/*shop toolbar start*/}
                    <div class="shop_toolbar_wrapper d-flex justify-content-between align-items-center">
                        <div class="page_amount">
                            <p><span>1.260</span> Products Found</p>
                        </div>
                        <div class=" sorting_by d-flex align-items-center">
                            <span>SORT BY :</span>
                            <form class="select_option" action="#">
                                <select name="orderby" id="short">

                                    <option selected value="1">NAME       3</option>
                                    <option  value="2">NAME  4</option>
                                    <option value="3">NAME  5</option>
                                    <option value="4">NAME  6</option>
                                    <option value="5">NAME  7</option>
                                    <option value="6">NAME  8</option>
                                </select>
                            </form>
                        </div>
                        <div class="toolbar_btn_wrapper d-flex align-items-center">
                            <div class="view_btn">
                                <Link class="view" to="/#">VIEW</Link>
                            </div>
                            <div class="shop_toolbar_btn">
                                <ul class="d-flex align-items-center">
                                    <li><Link to="/#" class="active btn-grid-3" data-role="grid_3" data-tippy="3"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i class="ion-grid"></i></Link></li>

                                    <li><Link to="/#" class="btn-list" data-role="grid_list" data-tippy="List" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top"><i class="ion-navicon"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/*shop toolbar end*/}
                     <div class="row shop_wrapper">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product1.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product5.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product2.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product3.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product6.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product4.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product7.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product8.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div class="single_product">
                                 <div class="product_thumb">
                                    <Link to="/product-details" >
                                        <img class="primary_img" src="assets/img/product/product5.jpg" alt="consectetur" />
                                    </Link>
                                    <div class="product_action">
                                        <ul>
                                            <li class="wishlist"><Link to="/#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-heart icons"></i></Link></li>

                                            <li class="quick_view"><Link data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" to="/#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-size-fullscreen icons"></i></Link></li>
                                            <li class="compare"><Link data-tippy="Compare" to="/#" data-tippy-inertia="true" data-tippy-delay="50"
                                            data-tippy-arrow="true" data-tippy-placement="left"><i class="icon-refresh icons"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product_label">
                                        <span>-18%</span>
                                    </div>
                                </div>
                                <div class="product_content grid_content text-center">
                                    <div class="product_ratting">
                                        <ul class="d-flex justify-content-center">
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><Link to="/#"><i class="ion-android-star"></i></Link></li>
                                            <li><span>(2)</span></li>
                                        </ul>
                                    </div>
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>
                                    </div>
                                </div>
                                <div class="product_list_content">
                                    <h4 class="product_name"><Link to="/product-details">Basic White Simple Sneaker</Link></h4>
                                    <p><Link to="/#">shows</Link></p>
                                    <div class="price_box">
                                        <span class="current_price">$43.00</span>
                                        <span class="old_price">$46.00</span>
                                    </div>
                                    <div class="product_desc">
                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                    </div>
                                    <div class="add_to_cart">
                                        <Link class="btn btn-primary" to="/#" data-tippy="Add To Cart"  data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination_style pagination justify-content-center">
                        <ul class="d-flex">
                            <li><Link to="/#"></Link></li>
                            <li><Link to="/#">1</Link></li>
                            <li><Link class="current" to="/#">2</Link></li>
                            <li><Link to="/#">3</Link></li>
                            <li><Link to="/#">4</Link></li>
                            <li><Link to="/#">5</Link></li>
                            <li><Link to="/#"></Link></li>
                        </ul>
                    </div>

                    {/*shop toolbar end*/}
                    {/*shop wrapper end*/}
                </div>
            </div>
        </div>
    </div>
    {/*shop  area end*/}
    </div>
  )
}
