import React, { useEffect, useState } from 'react'
import BannerSlider from '../../components/BannerSlider'
import CardSpecialization from '../../components/CardSpecialization'
import CardServices from '../../components/CardServices'
import Header from '../../components/Header'
import SearchTopic from '../../components/SearchTopic'
import WhyChooseUs from '../../components/WhyChooseUs'
import Slider from "react-slick";
import SubscribeNews from '../../components/SubscribeNews'
import HowWork from '../../components/HowWork'
import CardTeam from '../../components/CardTeam'
import CardNews from '../../components/CardNews'
import CardComments from '../../components/CardComments'
import Footer from '../../components/Footer'
import api from "../../url/url"

function Home() {
  const [update, setUpdate] = useState(false)


  //   async function getDoctors(){

  //     // const body = await JSON.parse(sessionStorage.getItem("key"))

  //     const doctorsData = await fetch(`${api.URLAPI}/api/managedoctor`,
  //     {method: 'GET', headers: {"Content-Type": "application/json"}}
  //     ).then(data => data.json())

  //     sessionStorage.setItem("doctors", JSON.stringify( doctorsData))
  //   }
  //  useEffect(
  //   ()=>{
  //       getDoctors()
  //   }
  //  )

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };


  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-3">
      <Header />

      <BannerSlider />
      <SearchTopic />


      {/* <div className="section section-padding sigma_service-sec style-16">
        <div className="container">
          <div className="row">
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
          </div>
        </div>
        <div className="container div_see_more">
          <Link to="/services" className="see_more_especialization">
            Ver mais+
          </Link>
        </div>
      </div> */}

      {/* <WhyChooseUs /> */}

      <div className="section pb-0 "></div>

      {/* <div id="services" className="section section-padding bg-gray">
        <div className="container">
          <div className="section-title centered">
            <span className="subtitle">O Que Fazemos</span>
            <h3 className="title">Nossos Serviços</h3>
          </div>
          <div className="sigma_service-slider">
            <Slider {...settings}>
              <CardServices />
              <CardServices />
              <CardServices />
              <CardServices />
              <CardServices />
              <CardServices />
              <CardServices />
            </Slider>
          </div>

          <div className="margin-negative">
            <SubscribeNews />
          </div>
        </div>
      </div> */}

      {/* <div className="section section-padding"></div> */}

      {/* <div className="section">
        <HowWork />
      </div> */}

      {/* <div className="doctors-section section section-padding sigma_team-sec style-14 bg-gray">
        <div className="container-fluid p-sm-0">
          <div className="section-title centered" style={{ marginTop: "50px" }}>
            <span className="subtitle text-white">
              Conheça Alguns Dos Nossos Associados
            </span>
            <h3 className="title text-white">Médicos Cadastrados</h3>
          </div>
          <div className="sigma_team-slider-2">
            <Slider {...settings2}>
              <CardTeam name="Teste" />
              <CardTeam name="Rafael" />
              <CardTeam name="Agnis" />
              <CardTeam name="Roberto" />
              <CardTeam name="Bruna" />
              <CardTeam name="Joana" />
            </Slider>
          </div>
        </div>
      </div> */}
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="section-title centered">
            <span className="subtitle">Ultimas Postagens</span>
            <h3 className="title">Nossos Artigos</h3>
          </div>
          <div className="row">
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </div>

      {/* <div className="section section-padding">
        <div className="container">
          <div className="section-title centered">
            <span className="subtitle">Depoimento Dos Usuários</span>
            <h3 className="title">O Que Nosssos Usuários Dizem</h3>
          </div>
          <div className="sigma_testimonial-slider-5">
            <Slider {...settings}>
              <CardComments />
              <CardComments />
              <CardComments />
              <CardComments />
              <CardComments />
            </Slider>
          </div>
        </div>
      </div> */}
      <Footer />
    </section>
  );
}

export default Home;
