/*
* const Navbar = ({setShowLogin}) ВСТАВЛЯЕМ ФУНКЦИЮ В НАВИГ БАР
* <button onClick={()=> setShowLogin(true)}>Sign in</button> ДОБАВЛЯЕМ ФУНКЦИЮ КООГДА НАЖИМАЕМ ДЛЯ ТОГО ЧТОБЫ ВОЙТИ ОНА ВЫВОДИТСЯ
*
*
*   <div className='navbar-right'>
    const [menu, setMenu] = useState('Home') ДАЕМ ЭТОТ ФУНКЦИИ ПАРАМЕТР ХОУМ
    const {getTotalCartAmount} = useContext(StoreContext) ИСПОЛЬЗУЕМ ФУНКЦИЮ КОТОРУЮ СОЗДАЛИ В СТОР КОНТЕКСТЕ
*
                <img src={assets.search_icon} alt=""/>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div> ЕСЛИ В КОРЗИНЕ НИЧЕГО НЕТ ТО НЕ БУДЕТ ТОЧКИ НАД СУМКОЙ А ЕСЛИ ЕСТЬ ТО БУДЕТ
                    * ФУНКЦИЮ ВЗЯЛИ ИЗ СТОР КОНТЕКСТ
                </div>
                <button onClick={()=> setShowLogin(true)}>Sign in</button> ПОКАЗЫВАЕМ ФУНКЦИЮ ШОУЛОГИН И СТАВИМ ЕЙ ТРУ ТО ЕСТЬ ОНА ВЫВОДИТСЯ
            </div>*/

import React, {useContext, useState} from "react";
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import {useAuth} from "../../context/AuthContext.jsx";


const Navbar = ({setShowModal, setShowDoorModal, isAuthenticated, setSearchValue, searchValue}) => {
    const [menu, setMenu] = useState('Home')
    const {getTotalCartAmount} = useContext(StoreContext)
    const {globalUser, logout} = useAuth()

    const [visibleInput, setVisibleInput] = useState(false)



    return (

        <div className='navbar' >
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>


            <div className='burger-button' onClick={() => {
                setShowDoorModal(true)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-list"
                     viewBox="0 0 16 16">
                    <path
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <Link to='/'>
                <div className='logo-div-cafe'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-truck" viewBox="0 0 16 16">
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                    </svg>
                    <h1>Vaz<span>on</span></h1>
                </div>
            </Link>
            </div>
            <ul id='lox' className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("Home")} className={menu === 'Home' ? 'active' : ""}>Главная страница</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")}
                   className={menu === 'menu' ? 'active' : ""}>Меню</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")}
                   className={menu === 'mobile-app' ? 'active' : ""}>mobile-app</a>

                {!visibleInput &&(<a href='#footer' onClick={() => setMenu("contact us")}
                    className={menu === 'contact us' ? 'active' : ""}>Контакты</a>)}

            </ul>
            <div className='navbar-right'>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>





             <img className='search-iconn' src={assets.search_icon} onClick={() => {
                    setVisibleInput(true)
                }} alt=""/>



                {globalUser && (<div
                    className='navbar-search-icon'>
                <Link

                        to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>)}
                </div>
                { globalUser ? (
                    <button className='sign-btn' onClick={logout}>Выйти</button>
                ) : (
                    <button className='sign-btn' onClick={() => setShowModal(true)}>Войти</button>
                )}
            </div>

        </div>
    )
}

export default Navbar