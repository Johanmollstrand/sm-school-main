import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h4 className="heading">Villkor</h4>
        <ul className="list">
          <li className="listItem">
            <a href="#" className="link">
              GDPR – Integritetspolicy
            </a>
          </li>
        </ul>
      </div>
      <div className="section">
        <h4 className="heading">Om oss</h4>
        <ul className="list">
          <li className="listItem">
            <a href="#" className="link">
              Om oss
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Personal
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Gästbok
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Kontakta oss
            </a>
          </li>
        </ul>
      </div>
      <div className="section">
        <h4 className="heading">Externa länkar</h4>
        <ul className="list">
          <li className="listItem">
            <a href="#" className="link">
              Transportstyrelsen
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Trafikverket
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Resurs Bank
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              STR körkort.nu
            </a>
          </li>
        </ul>
      </div>
      <div className="section">
        <h4 className="heading">Våra tjänster</h4>
        <ul className="list">
          <li className="listItem">
            <a href="#" className="link">
              Delbetalning
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Erbjudande
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Intensivkurs bil
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Handledarutbildning
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Riskettan
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link">
              Syntest
            </a>
          </li>
        </ul>
      </div>
      <div className="section">
        <h4 className="heading">Företagsuppgifter</h4>
        <address className="address">
          Möllstrands Trafik Skola
          <br />
          Tel:{" "}
          <a href="tel:08964633" className="link">
            072-298 24 57
          </a>{" "}
          <br />
          Email:{" "}
          <a href="mailto:kontakt@mollstrands.com" className="link">
            kontakt@mollstrands.com
          </a>{" "}
          <br />
          Swish: 123 119 5338 <br />
          Bankgiro: 560-3931 <br />
          Org.nr: 559461-6228 <br />
          Innehar F-skattebevis
        </address>
      </div>
      <div className="socialMedia">
        <a href="#" className="icon">
          <FaFacebook />
        </a>
        <a href="#" className="icon">
          <FaInstagram />
        </a>
        <a href="#" className="icon">
          <FaTiktok />
        </a>
      </div>
      <div className="copyRight">© Möllstrands Trafik Skola</div>
    </footer>
  );
};

export default Footer;
