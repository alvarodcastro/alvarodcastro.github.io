
import "./Navbar.css"
import {Menubar} from "primereact/menubar";
import React from "react";
import logo from "../../portfoliologo.png";

// import {useRef} from "react";

function Navbar( ) {

    window.onscroll = function() {showNavBarFunction()};

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



    const items = [
        {
            label: 'Home',
            // icon: 'pi pi-home',
            command: (event) => {
                window.location.hash= "";
            }
        },
        {
            label: 'About',
            // icon: 'pi pi-question-circle',
            command: (event) => {
                window.location.hash= "about";
            }

        },
        // {
        //     label: 'Ideas',
        //     // icon: 'pi pi-file-edit',
        //     command: (event) => {
        //         window.location.hash= "ideas";
        //     }
        // },
        {
            label: 'Work',
            // icon: 'pi pi-code',
            command: (event) => {
                window.location.hash= "work";
            }
        },
        {
            label: 'Contact',
            // icon: 'pi pi-question-circle',
            command: (event) => {
                window.location.hash= "contact";
            }

        },
    ];

    // const start = <img alt="logo" src="src/favicon.ico" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const start = <img src={logo} className="App-logo-navbar" alt="logo" height="40"/>

    return (
            <div>
                <Menubar model={items}className={"Navbar-class"} id={"hidden-navbar"}/>
                <Menubar model={items} start={start} className={"Navbar-class"} id={"top-navbar"}/>
            </div>
    );
}
export default Navbar