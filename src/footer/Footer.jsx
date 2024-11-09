import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-link">
          <div className="sb-footer-links-div">
            <h4>For Bussiness</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource</p>
            </a>
            <a href="/testimonials">
              <p>Testimonials</p>
            </a>
            <a href="/stv">
              <p>STV</p>
            </a>
          </div>

          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>

          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
        </div>

        <hr />

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} WeCode. All rights reserved</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookies">
              <div>
                <p>Cookie Desclaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
