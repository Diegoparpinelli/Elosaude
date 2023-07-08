import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const logoElo8 = '/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-08.png'

  return (
    <div id="footer">
      <footer className="sigma_footer style-5 pb-0">
        <div className="container">
          <div className="sigma_info-wrapper style-26 mb-5">
            <div className="sigma_info style-26">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <i>
                    <FaWhatsapp />
                  </i>
                </span>
              </div>
              <div className="sigma_info-description">
                <p>WhatsApp</p>
                <p className="secondary-color">
                  <b>(66) 66666-6666</b>
                </p>
              </div>
            </div>
            <div className="sigma_info style-26">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <i className="fal fa-phone"></i>
                </span>
              </div>
              <div className="sigma_info-description">
                <p>Telefone</p>
                <p className="secondary-color">
                  <b>3535-3535</b>
                </p>
              </div>
            </div>
            <div className="sigma_info style-26">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <i className="fal fa-envelope"></i>
                </span>
              </div>
              <div className="sigma_info-description">
                <p>E-mail</p>
                <p className="secondary-color">
                  <b>yourname@mail.com</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sigma_footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="sigma_footer-widget">
                  <div className="sigma_footer-logo mb-4">
                    <img
                      src={logoElo8}
                      alt="logo"
                    />
                  </div>
                  <div className="row"></div>
                  <ul className="sigma_social-icons has-border mt-4 justify-content-start">
                    <li>
                      <a>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3">
                <div className="sigma_footer-widget">
                  <h5 className="widget-title">Services</h5>
                  <ul className="sigma_footer-links">
                    <li>
                      <a>Condições</a>
                    </li>
                    <li>
                      <a>Termos de Uso</a>
                    </li>
                    <li>
                      <a>Nossos Serviços</a>
                    </li>
                    <li>
                      <a>Lista de Médicos</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="sigma_footer-widget">
                  <h5 className="widget-title">Inscreva-se</h5>
                  <form method="post">
                    <input type="email" name="email" placeholder="Email" />
                    <button type="button" className="mt-3 btn-block">
                      Enviar
                    </button>
                    <p className="mb-0 mt-3">
                      Receba as últimas atualizações por e-mail. A qualquer
                      momento você pode cancelar a inscrição
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
            <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
              <p className="mb-0">
                © EloSaúde
                <a>2023</a> | Todos os Direitos Reservados
              </p>
            </div>
            <ul className="sigma_footer-links">
              <li>
                <a>Privacidade</a>
              </li>
              <li>
                <a>Termos</a>
              </li>
              <li>
                <a>Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
