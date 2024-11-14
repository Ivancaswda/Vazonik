import React  from "react";
import './Header.css'

const Header = () => {
    return (

        <div className='header' id='header'>

            <div className="header-contents">
                <h2>Мы готовим только с нежностью и заботой!</h2>
                <p>Не жалеем продуктов! Попробуйте наши изысканные блюда по недорогой цене с быстрой доставкой от <b>400 рублей</b>.</p>
                <button><a className='reffer-meny' href='#explore-menu'>Глянуть Меню</a></button>

            </div>

        </div>
    )
}

export default Header
