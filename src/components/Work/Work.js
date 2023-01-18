import "./Work.css"
import {DataScroller} from "primereact/datascroller";
import {Button} from "primereact/button";
import {useRef, useState, useEffect} from "react";
import ProjectService from "../ProjectService/ProjectService";

import im from "../../data/projects/images/personal-portfolio.png"
import { Chip } from "primereact/chip";
import TechList from "../TechList/TechList";
import {Menubar} from "primereact/menubar";

function Work() {

    // const [projects, setProjects] = useState(null);
    const ds = useRef(null);
    // console.log(projects)
    const projectService = new ProjectService();
    // let projects = null
    // useEffect(() => {
        let projects = projectService.getProjects();
    // setProjects(projectService.getProjects())
    // }, [])
    // setProjects((projectService.getProjects()))
    const projectTemplate = (data) => {
        return(
            // <div className="project-card">
            //     <div className={"card-image"}>
            //         <img src={im} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
            //     </div>
            //     <div className="project-detail">
            //         <div className="project-name">{data.name}</div>
            //         <div className="project-category">{data.category}</div>
            //         <div className="project-description">{data.description}</div>
            //     </div>
            // </div>

        <div className="card project-card">
            <div className={"card-image"}>
                <img src={im} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
             </div>
            <strong>
                <div className="project-name">{data.name}</div>
            </strong>
            <div className="project-detail">
                <div className="project-category">{data.category}</div>
                {/*<div className="project-description">{data.description}</div>            */}
            </div>
            <span className={"project-span"}>
                <div className="project-name">{data.name}</div>
                <div className="project-description">{data.description}</div>
                <div className={"span-footer"}>
                    <a href={data.link}><i className={"pi pi-github"}></i></a>
                    <TechList list={data.technologies}></TechList>
                </div>

            </span>
        </div>
        )
    }

    const footer = <Button type={"text"} label={"Show more"}
            onClick={() => ds.current.load()}></Button>

    return (
        <div className={"Work-class"}>
            <h2>Some of the work I have done:</h2>
            <div className={"Work-content-class"}>
                <div className={"Work-text-class"}>
                    {/*<p>*/}
                    {/*    Here some of the work I have developed*/}
                    {/*</p>*/}
                </div>
                <div className={"Datascroller-Class"}>
                    <DataScroller ref={ds} itemTemplate={projectTemplate} rows={2}
                    loader footer={footer} value={projects}>
                    </DataScroller>

                </div>

                {/*<div className="card">*/}
                {/*    <div className="icon">*/}
                {/*        <i className={"pi pi-instagram"}></i>*/}
                {/*    </div>*/}
                {/*    <strong> Instagram*/}
                {/*    </strong>*/}
                {/*    <div className="card__body">*/}
                {/*        Get UI elements that help you stand out.*/}
                {/*    </div>*/}
                {/*    <span>Follow us</span>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Work