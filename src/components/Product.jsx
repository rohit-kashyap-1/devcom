import React from 'react'

export default function Product() {
  return (
    <div>
      <div className="breadcrumbs_area breadcrumbs_product">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li><a href="index.html">home</a></li>
                  <li><a href="shop.html">shop</a></li>
                  <li>Product Example</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*breadcrumbs area end*/}

      {/*product details start*/}
      <section className="product_details mb-135">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product_zoom_gallery">
                <div className="zoom_gallery_inner d-flex">
                  <div className="zoom_tab_img">
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product1.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product2.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product3.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product4.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product1.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product2.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product3.png" alt="tab-thumb" /></a>
                    <a className="zoom_tabimg_list" href="javascript:void(0)"><img src="assets/img/product/small-product/product4.png" alt="tab-thumb" /></a>
                  </div>
                  <div className="product_zoom_main_img">
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                    <div className="product_zoom_thumb">
                      <img data-image="assets/img/product/big-product/product1.png" src="assets/img/product/big-product/product1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product_d_right">
                <form action="#">
                  <h1>Edwin T-Shirt Logo Script Print in Navy</h1>
                  <div className="product_ratting_review d-flex align-items-center">
                    <div className=" product_ratting">
                      <ul className="d-flex">
                        <li><a href="#"><i className="ion-ios-star"></i></a></li>
                        <li><a href="#"><i className="ion-ios-star"></i></a></li>
                        <li><a href="#"><i className="ion-ios-star"></i></a></li>
                        <li><a href="#"><i className="ion-ios-star"></i></a></li>
                        <li><a href="#"><i className="ion-ios-star"></i></a></li>
                      </ul>
                    </div>
                    <div className="product_review">
                      <ul className="d-flex">
                        <li>4 reviews</li>
                        <li>Write your review</li>
                      </ul>
                    </div>
                  </div>
                  <div className="price_box">
                    <span className="current_price">$39.00</span>
                  </div>
                  <div className="product_availalbe">
                    <ul className="d-flex">
                      <li><i className="icon-layers icons"></i> Only <span>15</span> left </li>
                      <li>Availalbe: <span className="stock">In Stock</span></li>
                    </ul>
                  </div>
                  <div className="product_desc">
                    <p>A t-shirt that comes in three colors (red, white and blue) and three sizes (small, medium, large) is a configurable product.  </p>
                  </div>
                  <div className="product_variant">
                    <div className="filter__list widget_color d-flex align-items-center">
                      <h3>select color</h3>
                      <ul>
                        <li>
                          <input type="checkbox" />
                            <span className="checkmark color1"></span>
                        </li>
                        <li>
                          <input type="checkbox" />
                            <span className="checkmark color2"></span>
                        </li>
                        <li>
                          <input type="checkbox" />
                            <span className="checkmark color3"></span>
                        </li>
                        <li>
                          <input type="checkbox" />
                            <span className="checkmark color5"></span>
                        </li>
                      </ul>
                    </div>
                    <div className="filter__list widget_size d-flex align-items-center">
                      <h3>select size</h3>
                      <ul>
                        <li>
                          <a href="javascript:void(0)">S </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)"> M</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">L</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)"> XL</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">XLL</a>
                        </li>
                      </ul>
                    </div>

                    <div className="variant_quantity_btn d-flex">
                      <div className="pro-qty border">
                        <input min="1" max="100" type="tex" value="1" />
                      </div>
                      <button className="button btn btn-primary" type="submit"><i className="ion-android-add"></i> Add To Cart</button>
                      <a className="wishlist" href="#"><i className="ion-ios-heart"></i></a>
                    </div>
                  </div>
                  <div className="product_sku">
                    <p><span>SKU: </span> #ABC123456</p>
                  </div>
                  <div className="product_tags d-flex">
                    <span>tags: </span>
                    <ul className="d-flex">
                      <li><a href="#">fashion,</a></li>
                      <li><a href="#">clothings,</a></li>
                      <li><a href="#">accessorires</a></li>
                    </ul>
                  </div>
                  <div className="priduct_social d-flex">
                    <span>SHARE: </span>
                    <ul>
                      <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                      <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                      <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                      <li><a href="#"><i className="ion-social-pinterest"></i></a></li>
                      <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product details end*/}

      {/*product info start*/}
      <div className="product_d_info mb-118">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product_d_inner">
                <div className="product_info_button border-bottom">
                  <ul className="nav" role="tablist">
                    <li >
                      <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Product Description</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews          </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tags" role="tab" aria-controls="tags" aria-selected="false">Tags </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#additional" role="tab" aria-controls="additional" aria-selected="false">Additional Information </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tabinfo" role="tab" aria-controls="tabinfo" aria-selected="false">Custom Tab Info  </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Custom Tab Video </a>
                    </li>

                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="info" role="tabpanel" >
                    <div className="product_info_content">
                      <p>Coupling a blended linen construction with tailored style, the River Island HR Jasper Blazer will imprint a touch of dapper charm into your after-dark wardrobe. <br /> Our model wearing a size medium blazer, and usually takes a size medium/38L shirt. <br /> He is 6’2 1/2” (189cm) tall with a 38” (96 cm) chest and a 31” (78 cm) waist.</p>
                        <ul>
                          <li>Length: 74cm</li>
                          <li>Regular fit</li>
                          <li>Notched lapels</li>
                          <li>Twin button front fastening</li>
                          <li>Front patch pockets; chest pocket</li>
                          <li> Internal pockets</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" >
                      <div className="reviews_wrapper">
                        <h2>1 review for Donec eu furniture</h2>
                        <div className="reviews_comment_box">
                          <div className="comment_thmb">
                            <img src="assets/img/blog/comment2.jpg" alt="" />
                          </div>
                          <div className="comment_text">
                            <div className="reviews_meta">
                              <div className="star_rating">
                                <ul className="d-flex">
                                  <li><a href="#"><i className="icon-star"></i></a></li>
                                  <li><a href="#"><i className="icon-star"></i></a></li>
                                  <li><a href="#"><i className="icon-star"></i></a></li>
                                  <li><a href="#"><i className="icon-star"></i></a></li>
                                  <li><a href="#"><i className="icon-star"></i></a></li>
                                </ul>
                              </div>
                              <p><strong>admin </strong>- September 12, 2018</p>
                              <span>roadthemes</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_title">
                          <h2>Add a review </h2>
                          <p>Your email address will not be published.  Required fields are marked </p>
                        </div>
                        <div className="product_ratting mb-10">
                          <h3>Your rating</h3>
                          <ul className="d-flex">
                            <li><a href="#"><i className="icon-star"></i></a></li>
                            <li><a href="#"><i className="icon-star"></i></a></li>
                            <li><a href="#"><i className="icon-star"></i></a></li>
                            <li><a href="#"><i className="icon-star"></i></a></li>
                            <li><a href="#"><i className="icon-star"></i></a></li>
                          </ul>
                        </div>
                        <div className="product_review_form">
                          <form action="#">
                            <div className="row">
                              <div className="col-12">
                                <label for="review_comment">Your review </label>
                                <textarea name="comment" id="review_comment" ></textarea>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label for="author">Name</label>
                                <input id="author" type="text"/>

                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label for="email">Email </label>
                                <input id="email" type="text"/>
                              </div>
                            </div>
                            <button type="submit">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tags" role="tabpanel" >
                      <div className="product_info_content">
                        <ul>
                          <li>Length: 74cm</li>
                          <li>Regular fit</li>
                          <li>Notched lapels</li>
                          <li>Twin button front fastening</li>
                          <li>Front patch pockets; chest pocket</li>
                          <li> Internal pockets</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="additional" role="tabpanel" >
                      <div className="product_d_table">
                        <form action="#">
                          <table>
                            <tbody>
                              <tr>
                                <td className="first_child">Compositions</td>
                                <td>Polyester</td>
                              </tr>
                              <tr>
                                <td className="first_child">Styles</td>
                                <td>Girly</td>
                              </tr>
                              <tr>
                                <td className="first_child">Properties</td>
                                <td>Short Dress</td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                      <div className="product_info_content">
                        <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabinfo" role="tabpanel" >
                      <div className="product_d_table">
                        <form action="#">
                          <table>
                            <tbody>
                              <tr>
                                <td className="first_child">Compositions</td>
                                <td>Polyester</td>
                              </tr>
                              <tr>
                                <td className="first_child">Styles</td>
                                <td>Girly</td>
                              </tr>
                              <tr>
                                <td className="first_child">Properties</td>
                                <td>Short Dress</td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                      <div className="product_info_content">
                        <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="video" role="tabpanel" >
                      <div className="product_tab_vidio text-center">
                        <iframe width="729" height="410" src="https://www.youtube.com/embed/BUWzX78Ye_8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*product info end*/}

        {/*product area start*/}
        <section className="product_area related_products mb-118">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section_title mb-50">
                  <h2>Related Products</h2>
                </div>
              </div>
            </div>
            <div className="product_container row">
              <div className=" product_slick slick_slider_activation" data-slick='{
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
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product1.jpg" alt="consectetur"/>
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(4)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Basic Joggin Shorts</a></h4>
                        <div className="price_box">
                          <span className="current_price">$26.00</span>
                          <span className="old_price">$62.00</span>
                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product2.jpg" alt="consectetur"/>
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                        <div className="product_label">
                          <span>-20%</span>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(6)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Make Thing Happen T-Shirts</a></h4>
                        <div className="price_box">
                          <span className="text-black">$38.00</span>

                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product3.jpg" alt="consectetur"/>
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                        <div className="product_label">
                          <span>-18%</span>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(2)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Basic White Simple Sneaker</a></h4>
                        <div className="price_box">
                          <span className="current_price">$43.00</span>
                          <span className="old_price">$46.00</span>
                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product4.jpg" alt="consectetur"/>
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(8)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Simple Rounded Sunglasses</a></h4>
                        <div className="price_box">
                          <span className="text-black">$42.00</span>
                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product1.jpg" alt="consectetur" />
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(12)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Basic Joggin Shorts</a></h4>
                        <div className="price_box">
                          <span className="current_price">$26.00</span>
                          <span className="old_price">$362.00</span>
                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-3">
                  <article className="single_product">
                    <figure>
                      <div className="product_thumb">
                        <a href="product-details.html" >
                          <img className="primary_img" src="assets/img/product/product2.jpg" alt="consectetur"/>
                        </a>
                        <div className="product_action">
                          <ul>
                            <li className="wishlist"><a href="#" data-tippy="Wishlist" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-heart icons"></i></a></li>

                            <li className="quick_view"><a data-toggle="modal" data-target="#modal_box" data-tippy="Quick View" href="#" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-size-fullscreen icons"></i></a></li>
                            <li className="compare"><a data-tippy="Compare" href="#" data-tippy-inertia="true" data-tippy-delay="50"
                              data-tippy-arrow="true" data-tippy-placement="left"><i className="icon-refresh icons"></i></a></li>
                          </ul>
                        </div>
                        <div className="product_label">
                          <span>-20%</span>
                        </div>
                      </div>
                      <figcaption className="product_content text-center">
                        <div className="product_ratting">
                          <ul className="d-flex justify-content-center">
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><a href="#"><i className="ion-android-star"></i></a></li>
                            <li><span>(14)</span></li>
                          </ul>
                        </div>
                        <h4 className="product_name"><a href="product-details.html">Simple Rounded Sunglasses</a></h4>
                        <div className="price_box">
                          <span className="current_price">$35.00</span>
                          <span className="old_price">$38.00</span>
                        </div>
                        <div className="add_to_cart">
                          <a className="btn btn-primary" href="#" data-tippy="Add To Cart" data-tippy-inertia="true" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-placement="top">Add To Cart</a>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*product area end*/}
        </div>

  )
}
