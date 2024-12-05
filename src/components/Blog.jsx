import React from 'react'

export default function Blog() {
  return (
    <div>

      {/*breadcrumbs area start*/}
    <div className="breadcrumbs_area breadcrumbs_blog">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content text-center">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="blog.html">Blog</a></li>
                        </ul>
                        <h3>Write, Share & Discuss <br /> Together</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*breadcrumbs area end*/}

    {/*blog page section start*/}
    <div className="blog_page_section mb-140">
        <div className="container">
            <div className="blog_messonry_button d-flex justify-content-center">
                <button className="active" data-filter="*">all</button>
                <button data-filter=".news">news </button>
                <button data-filter=".products">products </button>
                <button data-filter=".nspiration">nspiration </button>
                <button data-filter=".community">community</button>
                <button data-filter=".others">others</button>
            </div>
            <div className="row blog_page_gallery">
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item nspiration community">
                    <article className="single_blog products community">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog1.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Five things you only know if you’re at Chanel's Hamburg Show</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item news nspiration others">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog2.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Inspiration</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Basic colord mixed - trendind 2020</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item products community">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog3.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Lookbook</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Calvin Klein Shoes Collection 2020, Activites Summer</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item news nspiration">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog4.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Five things you only know if you’re at Chanel's Hamburg Show</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item news community others">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog5.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Inspiration</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Basic colord mixed - trendind 2020</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item products nspiration">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog6.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Lookbook</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Calvin Klein Shoes Collection 2020, Activites Summer</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item news community">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog7.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">News</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Five things you only know if you’re at Chanel's Hamburg Show</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item products community">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog8.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Inspiration</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Basic colord mixed - trendind 2020</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 gird_item news nspiration others">
                    <article className="single_blog">
                        <figure>
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="assets/img/blog/blog9.jpg" alt="" /></a>
                            </div>
                            <figcaption className="blog_content">
                                <div className="blog_meta">
                                    <ul className="d-flex">
                                        <li><span className="meta_tag">Lookbook</span></li>
                                        <li><span>May 25, 2020</span></li>
                                    </ul>
                                </div>
                                <h3><a href="blog-details.html">Calvin Klein Shoes Collection 2020, Activites Summer</a></h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </div>
            <div className="pagination_style pagination blog_pagination justify-content-center">
                <ul className="d-flex">
                    <li><a  className="current" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">...</a></li>
                    <li><a href="#">15</a></li>
                    <li><a href="#">16</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </div>
    </div>
    {/*blog page section end*/}

    </div>
  )
}
