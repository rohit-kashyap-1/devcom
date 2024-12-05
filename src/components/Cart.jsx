import React from 'react'

export default function Cart() {
  return (
    <div>

      {/*breadcrumbs area start*/}
    <div className="breadcrumbs_area breadcrumbs_other">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content text-center">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="#">pages</a></li>
                        </ul>
                        <h3>Shopping Cart</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*breadcrumbs area end*/}

     {/*shopping cart area start */}
    <div className="shopping_cart_area">
        <div className="container">
            <form action="#">
                <div className="cart_page_inner mb-60">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart_page_tabel">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>product </th>
                                            <th>information</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-top">
                                            <td>
                                                <div className="cart_product_thumb">
                                                    <img src="assets/img/product/product4.jpg" alt="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_text">
                                                    <h4>Example With Title Product</h4>
                                                    <ul>
                                                        <li><i className="ion-ios-arrow-right"></i> Color : <span>White</span></li>
                                                        <li><i className="ion-ios-arrow-right"></i> Size : <span>XL</span></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_price">
                                                    <span>$45.05</span>
                                                </div>
                                            </td>
                                            <td className="product_quantity">
                                                <div className="cart_product_quantity">
                                                    <input min="1" max="100" value="1" type="number" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_price">
                                                    <span>$45.05</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_remove text-right">
                                                    <a href="#"><i className="ion-android-close"></i></a>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="border-top">
                                            <td>
                                                <div className="cart_product_thumb">
                                                    <img src="assets/img/product/product6.jpg" alt="" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_text">
                                                    <h4>Example With Title Product</h4>
                                                    <ul>
                                                        <li><i className="ion-ios-arrow-right"></i> Color : <span>White</span></li>
                                                        <li><i className="ion-ios-arrow-right"></i> Size : <span>XL</span></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_price">
                                                    <span>$45.05</span>
                                                </div>
                                            </td>
                                            <td className="product_quantity">
                                                <div className="cart_product_quantity">
                                                    <input min="1" max="100" value="1" type="number"/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_price">
                                                    <span>$45.05</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart_product_remove text-right">
                                                    <a href="#"><i className="ion-android-close"></i></a>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart_page_button border-top d-flex justify-content-between">
                                <div className="shopping_cart_btn">
                                    <a href="#" className="btn btn-primary border">CLEAR SHOPPING CART</a>
                                    <button className="btn btn-primary border" type="submit">UPDATE YOUR CART</button>
                                </div>
                                <div className="shopping_continue_btn">
                                    <button className="btn btn-primary" type="submit">CONTINUE SHOPPING</button>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
                 {/*coupon code area start*/}
                <div className="cart_page_bottom">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="shopping_coupon_calculate top">
                                <h3 className="border-bottom">Calculate Shipping </h3>
                                <select className="select_option border">
                                    <option value="1">United Kingdom (UK)  </option>
                                    <option value="2">Åland Islands  </option>
                                    <option value="3">Afghanistan  </option>
                                    <option value="4">Belgium </option>
                                    <option value="5">Albania  </option>
                                </select>
                                <input className="border" placeholder="State / Country" type="text"/>
                                <input className="border" placeholder="Postcode / Zip" type="text"/>
                                <button className="btn btn-primary" type="submit">get a quote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="shopping_coupon_calculate">
                                <h3 className="border-bottom">Coupon Discount   </h3>
                                <p>Enter your coupon code if you have one.</p>
                                <input className="border" placeholder="Enter your code" type="text"/>
                                <button className="btn btn-primary" type="submit">apply coupon</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="grand_totall_area">
                               <div className="grand_totall_inner border-bottom">
                                   <div className="cart_subtotal d-flex justify-content-between">
                                       <p>sub total </p>
                                       <span>$126.00</span>
                                   </div>
                                   <div className="cart_grandtotal d-flex justify-content-between">
                                       <p>grand total</p>
                                       <span>$126.00</span>
                                   </div>
                               </div>
                               <div className="proceed_checkout_btn">
                                   <a className="btn btn-primary" href="#">Proceed to Checkout</a>
                               </div>
                               <a href="#">Checkout with Mutilple Adresses</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*coupon code area end*/}
            </form>
        </div>
    </div>
     {/*shopping cart area end */}
    </div>
  )
}
