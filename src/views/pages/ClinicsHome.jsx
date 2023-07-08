import React, { useState, useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import DoctorClinicCard from "../../components/DoctorClinicCard";
import Banner from "../../components/Banner";
import GenderOption from "../../components/GenderOption";

import ReactPaginate from "react-paginate";
import SpecialtyOption from "../../components/SpecialtyOption";
import Search from "../../components/Search";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"


const items = [...Array(33).keys()];

const Items = ({ currentItems }) => {
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item, index) => (
          <DoctorClinicCard linkTo="/clinics/details" key={index} />
        ))}
    </div>
  );
};

function ClinicsHome() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 10;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 10));
  }, [itemOffset, 10]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % items.length;

    setItemOffset(newOffset);
  };

  const imageBlogStandart = '/src/assets/img/blog-standard/adv.jpg'

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-9">
      <Header />

      <Banner
        title="Clínicas"
        toLink="Início"
        actualLink="Clinicas"
        image={imageBanner}
      />

      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Search />

              <div className="sidebar">
                <AboutMe />

                <div className="widget widget-categories with-icon">
                  <h5 className="widget-title">Serviço Referência</h5>
                  <ul>
                    <SpecialtyOption />
                    <SpecialtyOption />
                    <SpecialtyOption />
                    <SpecialtyOption />
                    <SpecialtyOption />
                    <SpecialtyOption />
                  </ul>
                </div>

                <GenderOption />

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
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ClinicsHome;
