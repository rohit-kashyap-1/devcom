import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <div className="body_overlay">

      </div>
      <div className="offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <Link  to="/#"><i className="ion-android-close"></i></Link>
                </div>
                <div className="header_contact_info">
                  <ul className="d-flex">
                    <li className="text-white"> <i className="icons icon-phone"></i> <Link  to="/tel:+05483716566">+054
                      8371 65 66</Link></li>
                    <li className="text-white"> <i className="icon-envelope-letter icons"></i> <Link
                      to="/#">uthrstore@domain.com</Link></li>
                  </ul>
                </div>
                <div className="header_social d-flex">
                  <span>Follow us</span>
                  <ul className="d-flex">
                    <li><Link  to="/#"><i className="icon-social-twitter icons"></i></Link></li>
                    <li><Link  to="/#"><i className="icon-social-facebook icons"></i></Link></li>
                    <li><Link  to="/#"><i className="icon-social-instagram icons"></i></Link></li>
                    <li><Link  to="/#"><i className="icon-social-youtube icons"></i></Link></li>
                    <li><Link  to="/#"><i className="icon-social-pinterest icons"></i></Link></li>
                  </ul>
                </div>
                <div className="language_currency">
                  <ul className="d-flex">
                    <li className="language"><Link  to="/#"> Eng <i className="icon-right ion-ios-arrow-down"></i></Link>
                      <ul className="dropdown_language">
                        <li><Link  to="/#">French</Link></li>
                        <li><Link  to="/#">Spanish</Link></li>
                        <li><Link  to="/#">Russian</Link></li>
                      </ul>
                    </li>
                    <li className="currency"><Link  to="/#"> USd <i className="icon-right ion-ios-arrow-down"></i></Link>
                      <ul className="dropdown_currency">
                        <li><Link  to="/#">€ Euro</Link></li>
                        <li><Link  to="/#">£ Pound Sterling</Link></li>
                        <li><Link  to="/#">$ US Dollar</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <Link  to="/#">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link  to="/shop">Shop</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link  to="/product-details"> Product Details</Link>
                    </li>
                    <li><Link  to="/#">sale</Link></li>
                    <li className="menu-item-has-children">
                      <Link  to="/#">pages </Link>
                      <ul className="sub-menu">
                        <li><Link  to="/cart">cart</Link></li>
                        <li><Link  to="/checkout">Checkout</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link  to="/#">blog</Link>
                      <ul className="sub-menu">
                        <li><Link  to="/blog">blog</Link></li>
                        <li><Link  to="/blog-details">blog details</Link></li>
                      </ul>

                    </li>
                    <li><Link  to="/#">buy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mini_cart">
        <div className="cart_gallery">
          <div className="cart_close">
            <div className="cart_text">
              <h3>cart</h3>
            </div>
            <div className="mini_cart_close">
              <Link  to="/#"><i className="icon-close icons"></i></Link>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_img">
              <Link  to="/#"><img src="/assets/img/product/product1.jpg" alt="" /></Link>
            </div>
            <div className="cart_info">
              <Link  to="/#">Primis In Faucibus</Link>
              <p>1 x <span> $65.00 </span></p>
            </div>
            <div className="cart_remove">
              <Link  to="/#"><i className="icon-close icons"></i></Link>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_img">
              <Link  to="/#"><img src="/assets/img/product/product2.jpg" alt="" /></Link>
            </div>
            <div className="cart_info">
              <Link  to="/#">Letraset Sheets</Link>
              <p>1 x <span> $60.00 </span></p>
            </div>
            <div className="cart_remove">
              <Link  to="/#"><i className="icon-close icons"></i></Link>
            </div>
          </div>
        </div>
        <div className="mini_cart_table">
          <div className="cart_table_border">
            <div className="cart_total">
              <span>Sub total:</span>
              <span className="price">$125.00</span>
            </div>
            <div className="cart_total mt-10">
              <span>total:</span>
              <span className="price">$125.00</span>
            </div>
          </div>
        </div>
        <div className="mini_cart_footer">
          <div className="cart_button">
            <Link  to="/cart"><i className="fa fa-shopping-cart"></i> View cart</Link>
          </div>
          <div className="cart_button">
            <Link  to="/checkout"><i className="fa fa-sign-in"></i> Checkout</Link>
          </div>
        </div>
      </div>

      <header className="header_section header_transparent">
        <div className="header_top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header_top_inner d-flex justify-content-between align-items-center">
                  <div className="header_contact_info">
                    <ul className="d-flex">
                      <li className="text-white"> <i className="icons icon-phone"></i> <Link
                        to="/tel:+05483716566">+054 8371 65 66</Link></li>
                      <li className="text-white"> <i className="icon-envelope-letter icons"></i> <Link
                        to="/#">uthrstore@domain.com</Link></li>
                    </ul>
                  </div>
                  <div className="free_shipping_text">
                    <p className="text-white">Free shipping worldwide for orders over $99 <Link  to="/#">Learn
                      More</Link></p>
                  </div>
                  <div className="header_top_sidebar d-flex align-items-center">
                    <div className="header_social d-flex">
                      <span>Follow us</span>
                      <ul className="d-flex">
                        <li><Link  to="/#"><i className="icon-social-twitter icons"></i></Link></li>
                        <li><Link  to="/#"><i className="icon-social-facebook icons"></i></Link></li>
                        <li><Link  to="/#"><i className="icon-social-instagram icons"></i></Link></li>
                        <li><Link  to="/#"><i className="icon-social-youtube icons"></i></Link></li>
                        <li><Link  to="/#"><i className="icon-social-pinterest icons"></i></Link></li>
                      </ul>
                    </div>
                    <div className="language_currency">
                      <ul className="d-flex">
                        <li className="language"><Link  to="/#"> Eng <i
                          className="icon-right ion-ios-arrow-down"></i></Link>
                          <ul className="dropdown_language">
                            <li><Link  to="/#">French</Link></li>
                            <li><Link  to="/#">Spanish</Link></li>
                            <li><Link  to="/#">Russian</Link></li>
                          </ul>
                        </li>
                        <li className="currency"><Link  to="/#"> USd <i
                          className="icon-right ion-ios-arrow-down"></i></Link>
                          <ul className="dropdown_currency">
                            <li><Link  to="/#">€ Euro</Link></li>
                            <li><Link  to="/#">£ Pound Sterling</Link></li>
                            <li><Link  to="/#">$ US Dollar</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header_container d-flex justify-content-between align-items-center">
                  <div className="canvas_open">
                    <Link  to="/#"><i className="ion-navicon"></i></Link>
                  </div>
                  <div className="header_logo">
                    <Link  className="sticky_none" to="/index"><img src="/assets/img/logo/logo.png" alt="" /></Link>
                  </div>

                  <div className="main_menu d-none d-lg-block">
                    <nav>
                      <ul className="d-flex">
                        <li><Link  className="active" to="/index">demo</Link> </li>
                        <li><Link  to="/shop">shop</Link></li>
                        <li><Link  to="/product-details">product</Link></li>
                        <li><Link  to="/#">sale</Link></li>
                        <li><Link  to="/#">pages</Link>
                          <ul className="sub_menu">
                            <li><Link  to="/cart">Cart Pages</Link></li>
                            <li><Link  to="/checkout">Checkout Pages</Link></li>
                          </ul>
                        </li>
                        <li><Link  to="/blog">blog</Link>
                          <ul className="sub_menu">
                            <li><Link  to="/blog">Blog Pages</Link></li>
                            <li><Link  to="/blog-details">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link  to="/#">buy</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header_account">
                    <ul className="d-flex">
                      <li className="header_search"><Link  to="/#"><i className="icon-magnifier icons"></i></Link></li>
                      <li className="account_link"><Link  to="/#"><i className="icon-user icons"></i></Link>
                        <ul className="dropdown_account_link">
                          <li><Link  to="/#">My Account</Link></li>
                          <li><Link  to="/#">Login</Link></li>
                          <li><Link  to="/#">Contact</Link></li>
                        </ul>
                      </li>
                      <li><Link  to="/#"><i className="icon-heart icons"></i></Link> <span
                        className="item_count">2</span></li>
                      <li className="shopping_cart"><Link  to="/#"><i className="icon-basket-loaded icons"></i></Link>
                        <span className="item_count">2</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_search_box">
          <div className="search_close">
            <i className="ion-close-round"></i>
          </div>
          <form className="border-bottom" action="#">
            <input className="border-0" placeholder="Search products..." type="text" />
              <button type="submit"><span className="icon-magnifier icons"></span></button>
          </form>
        </div>

      </header>

    </div>
  )
}
