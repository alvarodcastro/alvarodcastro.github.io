import logo from "../../portfoliologo.png";

import "./Header.css"
import {Menubar} from "primereact/menubar";

const socialMedia = [
    {
        // label: 'Email',
        icon: 'pi pi-envelope',
        url: 'mailto:nx9cgpt5@duck.com'
    },
    {
        // label: 'Linkedin',
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/in/alvaro-de-castro-escribano/',
    },
    {
        // label: 'Github',
        icon: 'pi pi-github',
        url: 'https://github.com/alvarodcastro'
    },
];

function Header(){
    function scrollDown(ref) {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {/*<Navbar className={"Header-navbar"}></Navbar>*/}
            <header className="App-header">
                <Menubar model={socialMedia} className={"An-App-Left-Long"}></Menubar>
                <img src={logo} className="App-logo" alt="logo" />
                <p className={"An-App-Above-Long-Long"}>
                    Hello World! I'm Alvaro.
                </p>
                <p className={"Header-description-class An-App-Below-Long-Long"}>
                    A developer willing to create
                </p>

                <div className={"LearnMore-class An-App-Below"}>
                    <p>Want to learn more about me?</p>
                    {/*<Link to={"#main"}>Go</Link>*/}
                    {/*<i className="pi pi-arrow-circle-down"*/}
                    {/*   style={{'fontSize': '1em'}}></i>*/}
                    <a href={"/#mainContent"}>
                        {/*<i className="pi pi-arrow-circle-down"*/}
                        {/*     style={{'fontSize': '1em'}}></i>*/}
                        <div id="mouse-scroll">
                            <div className="mouse">
                                <div className="mouse-in"></div>
                            </div>
                            <div>
                                <span className="down-arrow-1"></span>
                                <span className="down-arrow-2"></span>
                                <span className="down-arrow-3"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header