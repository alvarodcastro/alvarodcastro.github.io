import {Menubar} from "primereact/menubar";
import "./SocialMedia.css"

function SocialMedia( {className, orientation} ) {
    function parseLabel(label)
    {
        return label.toString().toLowerCase()
    }
    const socialMediaItemTemplate = (socialMedia) => {
        return (
            <a href={socialMedia.url}>
                <span className={"icon " +parseLabel(socialMedia.label)} onClick={() => socialMedia.url}>
                    {/*<a href={socialMedia.url}>*/}
                    <span className="tooltip">{socialMedia.label}</span>
                    <span><i className={socialMedia.icon}></i></span>
                    {/*</a>*/}
                </span>
            </a>
        )
    }

    const socialMedia = [
        {
            label: 'Email',
            icon: 'pi pi-envelope',
            url: 'mailto:nx9cgpt5@duck.com',
            template: socialMediaItemTemplate
        },
        {
            label: 'Linkedin',
            icon: 'pi pi-linkedin',
            url: 'https://www.linkedin.com/in/alvaro-de-castro-escribano/',
            template: socialMediaItemTemplate
        },
        {
            label: 'Github',
            icon: 'pi pi-github',
            url: 'https://github.com/alvarodcastro',
            template: socialMediaItemTemplate
        },
    ];

    return(
        <Menubar  model={socialMedia} className={className+" SocialMedia-Buttons "} ></Menubar>
    )
}

export default SocialMedia