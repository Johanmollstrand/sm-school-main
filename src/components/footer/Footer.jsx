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
          Möllstrands Trafik Skola <br />
          Hovslagarvägen 37 <br />
          192 54 Sollentuna <br />
          Tel:{" "}
          <a href="tel:08964633" className="link">
            08 – 96 46 33
          </a>{" "}
          <br />
          Email:{" "}
          <a href="mailto:info@stockholmtab.se" className="link">
            info@stockholmtab.se
          </a>{" "}
          <br />
          Swish: 1233570793 <br />
          Bankgiro: 5805-4107 <br />
          Org.nr: 559341-2082 <br />
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
