import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

import {useRef} from "react";
import Loading from "./components/Loading/Loading";

const PAGETITLE = document.title;
function App() {
    function focused(){
        document.querySelector('title').textContent = PAGETITLE;
    }
    function notFocused(){
        const notFocusTitle = 'Hey I miss you - '.concat(PAGETITLE);
        window.setTimeout(function(){
            document.querySelector('title').textContent = notFocusTitle;
        },1000)
    }
    window.addEventListener('blur', notFocused);
    window.addEventListener('focus', focused);


    // window.addEventListener('')
  return (
    <div className="App">
        {/*<div id={"LoadingScreen"}>*/}
        {/*    <LoadingScreen></LoadingScreen>*/}
        {/*</div>*/}
        <Loading></Loading>
            {/*<Navbar></Navbar>*/}
            {/*<Header></Header>*/}
            {/*<MainContent></MainContent>*/}
            {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
