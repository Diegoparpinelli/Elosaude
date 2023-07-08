import React from "react";
import { Link } from "react-router-dom";
import { renderToString } from 'react-dom/server'
import AboutMe from "../../components/AboutMe";
import Banner from "../../components/Banner";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ItemCategory from "../../components/ItemCategory";
import ItemTag from "../../components/ItemTag";
import RecentPost from "../../components/RecentPost";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"
import imageBlogDetails800 from '/src/assets/img/blog-details/800x400.jpg'
import imageBlogStandart from '/src/assets/img/blog-standard/adv.jpg'

function BlogDetails() {
  const content = sessionStorage.getItem("postContent")

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-8">
      <Header />

      <Banner
        title="Detalhes"
        toLink="Início"
        actualLink="Detalhes da Postagem"
        image={imageBanner}
      />

      <div className="section pb-0 sigma_post-details style-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">
                  <a className="gallery-thumb">
                    <img
                      src={imageBlogDetails800}
                      alt="post"
                    />
                  </a>
                  <div className="sigma_post-details-meta">
                    <span>
                      {" "}
                      <i className="far fa-user"></i> By Admin
                    </span>
                    <span>
                      {" "}
                      <i className="far fa-calendar-alt"></i> March 12, 2022
                    </span>
                  </div>
                  <h2 className="entry-title">
                    Developing buildings in the new age is a bit of a process
                    with the new tech
                  </h2>

                  <div dangerouslySetInnerHTML={{ __html: content }} />

                </div>
                <hr />

                <div className="section pb-0">
                  <h3>Comentários</h3>
                  <div className="comments-list">
                    <ul>
                      <Comments />
                      <Comments />
                      <Comments />
                    </ul>
                  </div>
                </div>
                <div className="section">
                  <h3>Deixe seu Comentário</h3>
                  <div className="comment-form">
                    <form method="post">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Seu Nome"
                              className="form-control"
                              name="fname"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Seu E-mail"
                              className="form-control"
                              name="email"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Comente Aqui"
                              name="comment"
                              rows="7"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="sigma_btn-custom"
                            name="button"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style-8">
                <AboutMe />

                <div className="widget widget-categories">
                  <h5 className="widget-title">Categorias</h5>
                  <ul>
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                  </ul>
                </div>

                <div className="widget widget-sigma-recent-posts style-3">
                  <h5 className="widget-title">Postagens Recentes</h5>

                  <RecentPost />
                  <RecentPost />
                  <RecentPost />
                </div>
                <div className="widget tagcloud">
                  <h5 className="widget-title">Popular Tags</h5>
                  <ItemTag title="Alguma Tag" link="/blog/details" />
                  <ItemTag title="Alguma Tag" link="" />
                  <ItemTag title="Alguma Tag" link="" />
                  <ItemTag title="Alguma Tag" link="" />
                  <ItemTag title="Alguma Tag" link="" />
                  <ItemTag title="Alguma Tag" link="" />
                </div>
                <div className="widget widget-banner">
                  <div className="banner-area">
                    <img
                      src={imageBlogStandart}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default BlogDetails;
