import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import vector from '../../assets/svg/vector.svg'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  function handleChangeLng(event) {
    let lng = event.target.value;

    i18n.changeLanguage(lng);

  }
  return (
    <header className='header '>
      <div className='top-header'>
        <div className='header-content container'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link>ShopNow</Link>
          </p>
          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>


      <div className='main-header container'>
        <div className='header-left'>
          <h3>Exclusive</h3>
          <ul>
            <li>
              <Link to="/" >{t("home")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/register">{t("sign up")}</Link>
            </li>
          </ul>
        </div>


        <div className='header-right'>
          <div className='search'>
            <input type="text" placeholder='What are you looking for?' />
            <img src={vector} alt="" />
          </div>
          <div className='icons'>
            <Link to="/card">
              <CiHeart size={24} />
            </Link>
            <Link to="/cart">
              <FiShoppingCart size={24} />
            </Link>

          </div>
        </div>
      </div>

      <div style={{ border: "0.5px solid rgb(0,0,0) ", opacity: "0.3" }}></div>
    </header>
  )
}

export default Header