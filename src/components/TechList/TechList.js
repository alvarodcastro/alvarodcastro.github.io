import { Chip } from "primereact/chip";
import {Menubar} from "primereact/menubar";
import {Carousel} from "primereact/carousel";
import "./TechList.css"

function TechList ( {list, numVisible, numScroll, circular, autoplay, className, chip} ) {
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
    const chipTemplate = (skill) => {
        return (
            <Chip label={skill.label}/>
        )
    }
    if (!chip){
        return (
            <div className={"TechList-div"}>
                <Carousel value={list} itemTemplate={skillTemplate}
                          numVisible={numVisible} numScroll={numScroll} circular={circular}
                          autoplayInterval={autoplay} className={className}>
                </Carousel>
            </div>
        )
    }else {
        return (
            <div className={"ChipList"}>
                <Carousel value={list} itemTemplate={chipTemplate} numVisible={100}
                          className={className} />
            </div>
        )
    }
}

function TechChipList ( {list} ) {
    const skillTemplate = (skill) => {
        return (
            <Chip label={skill.label} />
        )
    }

}

export default TechList