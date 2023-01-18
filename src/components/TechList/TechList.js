import { Chip } from "primereact/chip";
import {Menubar} from "primereact/menubar";
import {Carousel} from "primereact/carousel";
import "./TechList.css"

function TechList ( {list, numVisible, numScroll, circular, autoplay, className} ) {
    // const chipTemplate = (data) => {
    //     var toRet = document.createElement('div')
    //     for (const dataKey in data) {
    //         var newElement = document.createElement('span')
    //         newElement.innerHTML = data[dataKey].label
    //         toRet.appendChild(newElement)
    //     }
    //     console.log("Toret: ", toRet)
    //     var domlist = document.getElementById("chiplist")
    //     // domlist.appendChild(toRet)
    //     try{
    //         // domlist.appendChild(toRet)
    //         domlist.innerHTML = toRet.innerHTML
    //     }catch (e){}
    //     console.log(domlist)
    //     // return toRet
    // }

    const skillTemplate = (skill) => {
        return (
            <span>{skill.label}</span>
        )
    }

    return (
    <div className={"TechList-div"}>
        <Carousel value={list} itemTemplate={skillTemplate}
                  numVisible={numVisible} numScroll={numScroll} circular={circular}
                  autoplayInterval={autoplay} className={className}>
        </Carousel>
    </div>
    )
}

export default TechList