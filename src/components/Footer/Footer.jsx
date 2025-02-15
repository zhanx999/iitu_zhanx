import React from "react";
import "./Footer.css"; // Подключаем стили

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>О нас</h4>
          <div className="link_div">
          <a href="#about">About</a>
          <a href="#course-info">Course Info</a>
          <a href="#enrollment">Enrollment</a>
          <a href="#faculty">Faculty</a>
          <a href="#footer">Contact</a>
        </div>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Адрес: г. Алматы, пр. Манаса, 34А</p>
          <p>Телефон: +7 (727) 320 00 00</p>
          <p>Email: info@iitu.kz</p>
        </div>
        <div className="footer-section">
          <h4>Социальные сети</h4>
          <ul className="socials">
            <li><a href="https://www.facebook.com/iitu.university" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/iitu_university/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/iitu_university" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Международный университет информационных технологий. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
