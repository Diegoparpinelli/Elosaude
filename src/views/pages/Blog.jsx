import React, { useState, useEffect } from "react";

import AboutMe from "../../components/AboutMe";
import CardBlogNews from "../../components/CardBlogNews";
import MostComments from "../../components/MostComments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RecentPost from "../../components/RecentPost";
import ItemCategory from "../../components/ItemCategory";
import ItemTag from "../../components/ItemTag";

import ReactPaginate from "react-paginate";
import Banner from "../../components/Banner";
import Search from "../../components/Search";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"


function Blog() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const items = [...Array(33).keys()];

  const Items = ({ currentItems }) => {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item, index) => <CardBlogNews key={index} title={"Teste"} description={"Descrição"} content={"<p>TEESTESETSETETS</p>"} date={"2023-04-11"} author={"Teste"} />)}
      </div>
    );
  };

  useEffect(() => {
    const endOffset = itemOffset + 5;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 5));
  }, [itemOffset, 5]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % items.length;

    setItemOffset(newOffset);
  };

  const imageBlogStandart = '/src/assets/elo-imgs/Logotipo_EloSaúde_ComFundo-05.jpg'

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-8">
      <Header />
      <div className="search-form-wrapper">
        <div className="search-trigger sigma_close">
          <span></span>
          <span></span>
        </div>
      </div>
      <Banner
        title="Postagens"
        toLink="Início"
        actualLink="Blog"
        image={imageBanner}
      />
      <div className="section section-padding sigma_post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Items currentItems={currentItems} />
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <Search />

                <AboutMe />

                <div className="widget widget-categories">
                  <h5 className="widget-title">Categorias</h5>
                  <ul>
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                    <ItemCategory title="Dentista" numberPosts="12" />
                  </ul>
                </div>

                <div className="widget widget-sigma-recent-posts">
                  <h5 className="widget-title">Mais Comentados</h5>

                  <MostComments />
                  <MostComments />
                  <MostComments />
                </div>

                <div className="widget widget-sigma-recent-posts style-3">
                  <h5 className="widget-title">Postagens Recentes</h5>
                  <RecentPost />
                  <RecentPost />
                  <RecentPost />
                </div>
                <div className="widget tagcloud">
                  <h5 className="widget-title">Tags Populares</h5>
                  <ItemTag link="/blog" title="Alguma Tag" />
                  <ItemTag link="/blog" title="Alguma Tag" />
                  <ItemTag link="/blog" title="Alguma Tag" />
                  <ItemTag link="/blog" title="Alguma Tag" />
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

export default Blog;
