import React, { useState, useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import DoctorClinicCard from "../../components/DoctorClinicCard";

import ReactPaginate from "react-paginate";
import Banner from "../../components/Banner";
import SpecialtyOption from "../../components/SpecialtyOption";
import Search from "../../components/Search";
import SearchTopic from "../../components/SearchTopic";

function Doctors() {
  const data = JSON.parse(sessionStorage.getItem("doctors"));
  const queryDoctors = JSON.parse(sessionStorage.getItem("queryDoctors"));

  const [doctors, setDoctors] = useState(data);
  const [doctorsFiltered, setDoctorsFiltered] = useState(
    queryDoctors ? queryDoctors : doctors
  );
  const [specialists, setSpecialists] = useState([]);

  function filter(valor) {
    if (valor == "") {
      setDoctorsFiltered(data);
      sessionStorage.removeItem("queryDoctors");
    } else {
      const filter = doctors.filter((elem) => {
        if (elem.first_name.includes(valor)) {
          return elem;
        }
      });
      setDoctorsFiltered(filter);
    }
  }

  const items = [...doctorsFiltered];

  const Items = ({ currentItems }) => {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item, index) => (
            <DoctorClinicCard
              linkTo="/doctors/details"
              key={index}
              doctor={item}
            />
          ))}
      </div>
    );
  };

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  function specialistdata() {
    const end = doctorsFiltered.map((doctor) => {
      return doctor.specialist.map((elem) => elem.specialist);
    });

    const end2 = end.reduce((acu, elem) => {
      elem.map((elem2) => {
        if (!acu.includes(elem2)) acu.unshift(elem2);
      });
      return acu;
    });

    setSpecialists(end2);
  }

  useEffect(() => {
    specialistdata();
    const endOffset = itemOffset + 10;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 10));
  }, [itemOffset, 10, doctorsFiltered]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % items.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {}, [queryDoctors]);

  const imageBlogStandart = "/src/assets/img/blog-standard/adv.jpg";

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-9">
      <Header />

      {/* <Banner
        title='Médicos'
        toLink='Início'
        actualLink='Médicos'
      /> */}

      <div className="section section-padding">
        <div className="container">
          {/* <Search setDoctorsFiltered={filter}/> */}
          <SearchTopic
            style={{ marginTop: "0" }}
            func={setDoctorsFiltered}
          ></SearchTopic>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget widget-categories with-icon">
                  <h5 className="widget-title">Serviço Referência</h5>
                  <ul>
                    {specialists.map((elem2) => (
                      <>
                        <SpecialtyOption
                          specialist={elem2}
                          update={setDoctorsFiltered}
                        />
                      </>
                    ))}
                  </ul>
                </div>

                <div className="widget">
                  <h5 className="widget-title">Sexo</h5>

                  <input
                    type="radio"
                    name="gendorDoctor"
                    defaultValue="nopreference"
                    id="genderDoctor"
                  />
                  <label htmlFor="genderDoctor">Sem Preferência</label>

                  <input
                    type="radio"
                    name="gendorDoctor"
                    defaultValue="female"
                    id="genderDoctor1"
                  />
                  <label htmlFor="genderDoctor1">Feminino</label>

                  <input
                    type="radio"
                    name="gendorDoctor"
                    defaultValue="male"
                    id="genderDoctor2"
                  />
                  <label className="mb-0" htmlFor="genderDoctor2">
                    Masculino
                  </label>
                </div>

                <div className="widget widget-banner">
                  <div className="banner-area">
                    <img src={imageBlogStandart} alt="img" />
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

export default Doctors;
