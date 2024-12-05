import React from 'react'

export default function BlogDetail() {
  return (
    <div>
      <div className="blog_details">
        <div className="blog_details_thumb">
          <img src="assets/img/blog/blogbig.jpg" alt="" />
        </div>
        <div className="blog_wrapper_details">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog_details_content">
                  <div className="post_header">
                    <h2 className="post_title">How to improve the flow of UI/UX</h2>
                    <div className="blog_meta">
                      <ul className="d-flex">
                        <li>Adam Levine </li>
                        <li>December 27, 2020 </li>
                        <li>INSPIRATION</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog_details_desc">
                    <h3>Pinterest, cornhole meditation Blue Bottle art party meggings cardigan yr sustainable. Letterpress McSwepen, poieney’s fap</h3>
                    <p className="mb-35">Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.</p>
                    <p className="mb-50">Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire.</p>
                    <blockquote className="mb-30">
                      <p>“The forms that designers <br /> produce are flexible, so long as the <br /> results serve the need.”</p>
                      </blockquote>
                        <p className="david_moye mb-50"><span>DAVID MOYE,</span> Designer at Spotify</p>
                        <p>Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semiotics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth. Kitsch pork belly cred, small batch butcher selvage direct trade. Master cleanse Bushwick cornhole narwhal plaid. Seitan vegan Portland, master cleanse gluten-free fanny pack raw denim hoodie YOLO loko.</p>
                      </div>

                  </div>
                  <div className="related_posts">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <figure className="related_thumb">
                          <img src="assets/img/blog/related1.jpg" alt="" />
                            <div className="related_popup_icon">
                              <a className="port_popup" href="assets/img/blog/related1.jpg"><i className="icon-size-fullscreen icons"></i></a>
                            </div>
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <figure className="related_thumb">
                          <img src="assets/img/blog/related2.jpg" alt="" />
                            <div className="related_popup_icon">
                              <a className="port_popup" href="assets/img/blog/related2.jpg"><i className="icon-size-fullscreen icons"></i></a>
                            </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="post_tags_social border-bottom">
                    <div className="post_tags d-flex justify-content-center align-items-center">
                      <span>TAGS: </span>
                      <ul className="d-flex">
                        <li><a href="#">Inspiration,</a></li>
                        <li><a href="#">Workspace,</a></li>
                        <li><a href="#">Minimal,</a></li>
                        <li><a href="#">Decoation</a></li>
                      </ul>
                    </div>
                    <div className="post__social d-flex justify-content-center align-items-center">
                      <span>SHARE:</span>
                      <ul className="d-flex">
                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog_navigation">
                    <ul className="d-flex justify-content-between">
                      <li className="previous"><a href="#"><i className="icon-arrow-left icons"></i> Previous</a> <span>How to combine typography perfect for any design</span></li>
                      <li className="next"><a href="#">Next  <i className="icon-arrow-right icons"></i></a> <span>Cocooil - Review</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_comment_form">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="comments_box">
                    <h3>02 Comments	</h3>
                    <div className="comment_list d-flex">
                      <div className="comment_thumb">
                        <img src="assets/img/blog/post-comment1.png" alt="" />
                      </div>
                      <div className="comment_content border-top">
                        <div className="comment_meta d-flex align-items-center">
                          <h5><a href="#">Justin Bieber </a></h5>
                          <span> - Aug 26 2020 at 15 hours ago</span>
                        </div>
                        <p>Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla.Sed a dolor sit amrt paremi quam. terdum.</p>
                        <div className="comment_reply">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="comment_list d-flex">
                      <div className="comment_thumb">
                        <img src="assets/img/blog/post-comment2.png" alt="" />
                      </div>
                      <div className="comment_content border-top">
                        <div className="comment_meta d-flex align-items-center">
                          <h5><a href="#">Selena Gomes </a></h5>
                          <span> - Aug 26 2020 at 15 hours ago</span>
                        </div>
                        <p>Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla.Sed a dolor sit amrt paremi quam. terdum.</p>
                        <div className="comment_reply">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comments_form">
                    <h3>Leave a comment </h3>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <input placeholder="Name *" type="text" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <input placeholder="Email *" type="text"/>
                        </div>
                        <div className="col-12">
                          <input placeholder="Subject (optional)" type="text"/>
                        </div>
                        <div className="col-12">
                          <textarea placeholder="Message"></textarea>
                        </div>

                      </div>
                      <button className="btn btn-primary" type="submit">Post Comment</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}