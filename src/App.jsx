/*     const [showLogin, setShowLogin] = useState(false)  СОЗДАЕМ ИЗНАЧАЛЬНО ДВЕ ФУНКЦИИ



    return (


<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin()}/>:<></>} ВЫПУСКАЕМ ЕЕ В ЛОГИНПОПАП ЕСЛИ ТРУ ЕСЛИ ФОЛС ТО НИЧЕГО
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/> ДОБАВЛЯЕМ В НАВБАР ОБЪЕКТ
                */


import React, {useContext, useState} from "react";
import Navbar from "./componets/Navbar/Navbar.jsx";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import Modal from "./componets/Modal/Modal.jsx";

import {LeftDoorModal} from "./componets/LeftDoorModal/LeftDoorModal.jsx";
import LeftDoor from "./componets/LeftDoor/LeftDoor.jsx";

import LoginPopup from "./componets/LoginPopup/LoginPopup.jsx";

const App = () => {



    const [showModal, setShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [showDoorModal, setShowDoorModal] = useState(false)
        const isAuthenticated = false
    return (


        <>



            {showModal && (
                <Modal handleCloseModal={() => {
                setShowModal(false)
            }}>
            <LoginPopup handleCloseModal={() => {
                setShowModal(false)
            }}/>
        </Modal>)}



            <div className='app'>

                <Navbar searchValue={searchValue} setSearchValue={setSearchValue} isAuthenticated={isAuthenticated} setShowDoorModal={setShowDoorModal} setShowModal={setShowModal}/>
                { showDoorModal && (<LeftDoorModal handleCloseDoorModal={() => { setShowDoorModal(false)}} >
                    <LeftDoor/>
                                    </LeftDoorModal>)}
                <Routes>

                    <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order' element={<PlaceOrder/>}/>
                </Routes>
            </div>
            <Footer/>

        </>
    )
}

export default App