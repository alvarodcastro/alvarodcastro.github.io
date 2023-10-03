import "./About.css"
import TechList from "../TechList/TechList";


function About( {photo} ) {
    const skills = [
        {   label: 'Java'    },
        {   label: 'JavaScript'  },
        {   label: 'HTML/CSS'  },
        {   label: 'C/C++'  },
        {   label: 'JavaScript'  },
        {   label: 'React'  },
        {   label: 'Github'  },
        {   label: 'Unix'  },
        {   label: 'Android Development'  },
        {   label: 'SQL'  },
    ]

    return(
        <div className={"About-class"}>
            <h2>About me:</h2>
            <div className={"About-content-class"}>
                <div className={"About-text-class"}>
                    <p>
                        Hello, my name is Alvaro and I' m a <b> software developer</b> willing to
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
                        <TechList list={skills} circular={true} numVisible={3}
                                    numScroll={2} autoplay={2000} chip={false}></TechList>
                    </div>

                </div>
                {/*<Image src={photo} alt={"My photo"} height={"300px"}*/}
                {/*       className={"About-photo-class"}/>*/}
            </div>
        </div>
    )
}
export default About