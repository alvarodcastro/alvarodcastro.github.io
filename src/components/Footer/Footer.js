import "./Footer.css"
import {Menubar} from "primereact/menubar";

function Footer() {
    // let socialMedia;
    const socialMedia = [
        {
            label: 'Email',
            icon: 'pi pi-envelope',
            url: 'mailto:alvarodecastroescribano0025@gmail.com'
        },
        {
            label: 'Linkedin',
            icon: 'pi pi-linkedin',
            url: 'https://www.linkedin.com/in/alvaro-de-castro-escribano/',
        },
        {
            label: 'Github',
            icon: 'pi pi-github',
            url: 'https://github.com/ace00029'
        },
    ];

    return (
        <footer className={"App-footer"} id={"footer"}>
            <div className={"Footer-contact-content"} id={"contact"}>
                <div className={"SocialMedia-div"}>
                    <p>Contact me:</p>
                    <Menubar model={socialMedia} />
                </div>
                <div className={"Recruiting-div"}>
                    <h3>Do you want me to help you with something?</h3>
                    {/*<p className={"Recruiting-text"}>*/}
                    {/*    I think every project*/}
                    {/*    is <b>valuable</b> and <b>enriching</b> in their*/}
                    {/*    own way. For that reason, if you think I'd be valuable*/}
                    {/*    in your project /!*considering my skills and knowledge*!/*/}
                    {/*    I'm always <b>open</b> to do my best work, enhance my*/}
                    {/*    knowledge and <b>grow!</b>   So don't hesitate to*/}
                    {/*    <b> contact</b> me on any Social Media.*/}
                    {/*</p>*/}
                </div>
            </div>
            <hr className={"Footer-decoration"}/>

            <div className={"Footer-legal-content"}>
                <p>
                    © 2023 Copyright: <b>Alvaro de Castro Escribano</b>
                </p>
            </div>
        </footer>
    )
}
export default Footer