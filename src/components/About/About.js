import "./About.css"
import {Image} from "primereact/image";
import {Carousel} from "primereact/carousel";
import {Link} from "react-router-dom";


function About( {photo} ) {
    const skills = [
        {   name: 'Java'    },
        {   name: 'JavaScript'  },
        {   name: 'HTML/CSS'  },
        {   name: 'C/C++'  },
        {   name: 'JavaScript'  },
        {   name: 'React'  },
        {   name: 'Github'  },
        {   name: 'Unix'  },
        {   name: 'Android Development'  },
        {   name: 'SQL'  },
    ]
    const skillTemplate = (skill) => {
        return (
            <span>{skill.name}</span>
        )
    }

    return(
        <div className={"About-class"}>
            <h2>About me:</h2>
            <div className={"About-content-class"}>
                <div className={"About-text-class"}>
                    <p>
                        Hello, my name is Alvaro and I' m a <b>developer</b> willing to
                        create! I'm currently studying the <b>Bachelor's Degree in
                        Computer Engineering</b> at <a href={"https://www.ujaen.es"}>
                                                Universidad de Jaen</a>
                    </p>
                    <p>
                        As being on my Degree final stages, most of my skills have
                        been developed on projects of personal interest or during
                        my student career.
                    </p>
                    <p>
                    </p>
                    <p>These are some of the skills I've already acquired and
                        technologies that I have been using recently:
                    </p>
                    <div className={"Skill-List-Class"}>
                        <Carousel value={skills} itemTemplate={skillTemplate}
                                    numVisible={3} numScroll={2} circular={true}
                                    autoplayInterval={2000}>
                        </Carousel>
                    </div>

                </div>
                <Image src={photo} alt={"My photo"} height={"200px"}
                       className={"About-photo-class"}/>
            </div>
        </div>
    )
}
export default About