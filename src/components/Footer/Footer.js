import "./Footer.css"
import SocialMedia from "../SocialMedia/SocialMedia";
import React from "react";

function Footer() {
    return (
        <footer className={"App-footer"} id={"footer"}>
            <div className={"Footer-contact-content"} id={"contact"}>
                <div className={"Recruiting-div"}>
                    <h4>Do you want help with something?</h4>
                    <p className={"Recruiting-text"}>
                        I think every project
                        is <b>valuable</b> and <b>enriching</b> in their
                        own way. For that reason, if you think I'd be valuable
                        in your project, or just want to ask me something
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

            <div className={"Footer-legal-content"} id={"copyright"}>
                <ul><li>&copy; Developed and designed: <a href={'mailto:hello@alvarodecastro.dev'}>
                    <b>Alvaro de Castro Escribano</b></a></li><li>Based on a design from: <a href="https://html5up.net">HTML5 UP</a></li></ul>
            </div>
        </footer>
    )
}
export default Footer