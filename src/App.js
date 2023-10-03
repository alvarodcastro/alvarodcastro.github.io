import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import BtloC1 from "./components/Posts/btloChallenge1";
import {ScrollTop} from "primereact/scrolltop";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

import React, {useRef} from "react";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
// import Loading from "./components/Loading/Loading";

const PAGETITLE = document.title;
function App() {
    function focused(){
        window.setTimeout(function(){
            document.querySelector('title').textContent = PAGETITLE;
        },1000)
    }
    function notFocused(){
        const notFocusTitle = 'Hey I miss you - '.concat(PAGETITLE);
        window.setTimeout(function(){
            document.querySelector('title').textContent = notFocusTitle;
        },1000)
    }
    // window.addEventListener('blur', notFocused);
    // window.addEventListener('focus', focused);


    // window.addEventListener('')
  return (
    <div className="App">
    {/*//     <div id={"LoadingScreen"}>*/}
    {/*//         <LoadingScreen></LoadingScreen>*/}
    {/*//     </div>*/}
    {/*//     <Loading></Loading>*/}
        <ScrollTop threshold={1000}/>
        <Navbar></Navbar>
    {/*        <Header></Header>*/}
    {/*        <MainContent></MainContent>*/}
    {/*        <Footer></Footer>*/}
        <Router>
            <Routes>
                <Route exact path='/' exact element={<><Header/><MainContent/></>} />
                {/*<Route path={'/btlo'} element={<BtloC1 />} />*/}
                <Route path={'/btlo/:id'} element={<BtloC1 />} />
                {/*<Route path={'/btlo/0#about'} element={<><Header/><MainContent/></>}/>*/}
            </Routes>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
