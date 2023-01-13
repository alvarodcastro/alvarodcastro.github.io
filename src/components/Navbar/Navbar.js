
import "./Navbar.css"
import {Menubar} from "primereact/menubar";
import React from "react";
import logo from "../../portfoliologo.png";

// import {useRef} from "react";

function Navbar( ) {

    window.onscroll = function() {showNavBarFunction()};

    function locate(section) {
        window.location.hash = ""
        window.location.hash = section
    }

    function showNavBarFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            document.getElementById("hidden-navbar").classList.remove("An-DisApp-Below");
            document.getElementById("hidden-navbar").classList.add("An-App-Above");

            window.setTimeout(function(){
                document.getElementById("hidden-navbar").style.visibility = "visible";
            },200)



        } else {
            document.getElementById("hidden-navbar").classList.remove("An-App-Above");
            document.getElementById("hidden-navbar").classList.add("An-DisApp-Below");
            // document.getElementById("hidden-navbar").style.visibility = "hidden";

            window.setTimeout(function(){
                document.getElementById("hidden-navbar").style.visibility = "hidden";
            },200)



        }
    }

    const menuItemTemplate = (item) => {
        return (
            <button className="button" onClick={ () => locate(item.section)}>
                <span className="actual-text">&nbsp;{item.label}&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;{item.label}&nbsp;</span>
            </button>
        )
    }

    const items = [
        {
            label: 'Home',
            template: menuItemTemplate,
            section: 'home',
        },
        {
            label: 'About',
            template: menuItemTemplate,
            section: 'about',

        },
        // {
        //     label: 'Ideas',
        //     template: menuItemTemplate("ideas"),
        // },
        {
            label: 'Work',
            template: menuItemTemplate,
            section: 'work',
        },
        {
            label: 'Contact',
            template: menuItemTemplate,
            section: 'contact',

        },
    ];

    // const start = <img alt="logo" src="src/favicon.ico" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const start =
        <div className={"Navbar-First"} onClick={function () {window.location =""}}>
            <img src={logo} className="App-logo-navbar" alt="logo" height="40"/>
            <span className={"PageTitle-Navbar button"}>ALVARO DE CASTRO</span>
        </div>

    return (
            <div>
                <Menubar model={items} className={"Navbar-class"} id={"hidden-navbar"}/>
                <Menubar model={items} start={start} className={"Navbar-class"} id={"top-navbar"}/>
                {/*<MenuItem ></MenuItem>*/}
            </div>

    );
}
export default Navbar