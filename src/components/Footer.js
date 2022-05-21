import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__info">
        created by{" "}
        <a
          className="Footer__info__link"
          href="https://github.com/mojotron/memory-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mojotron
        </a>
      </p>
    </footer>
  );
}

export default Footer;
