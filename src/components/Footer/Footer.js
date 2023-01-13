import "./Footer.css"
import {Menubar} from "primereact/menubar";
import SocialMedia from "../SocialMedia/SocialMedia";

function Footer() {
    return (
        <footer className={"App-footer"} id={"footer"}>
            <div className={"Footer-contact-content"} id={"contact"}>
                <div className={"Recruiting-div"}>
                    <h3>Do you want help with something?</h3>
                    <p className={"Recruiting-text"}>
                        I think every project
                        is <b>valuable</b> and <b>enriching</b> in their
                        own way. For that reason, if you think I'd be valuable
                        in your project {/*considering my skills and knowledge*/}
                        I'm always <b>open</b> to do my best work, enhance my
                        knowledge and <b>grow!</b>   So don't hesitate to
                        <b> contact</b> me on any Social Media.
                    </p>
                    <span><i className="fab fa-facebook-f"></i></span>

                </div>
                <div className={"SocialMedia-div"}>
                    <p>Contact me:</p>
                    <SocialMedia orientation={"horizontal"}></SocialMedia>
                </div>
            </div>
            <hr className={"Footer-decoration"}/>

            <div className={"Footer-legal-content"}>
                <p>
                    Developed and designed: <a href={'mailto:nx9cgpt5@duck.com'}>
                    <b>Alvaro de Castro Escribano</b></a>

                </p>
            </div>
        </footer>
    )
}
export default Footer