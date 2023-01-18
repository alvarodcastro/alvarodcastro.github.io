import { Chip } from "primereact/chip";
import {Menubar} from "primereact/menubar";

function TechList ({list} ) {
    const chipTemplate = (data) => {
        var toRet = document.createElement('div')
        for (const dataKey in data) {
            var newElement = document.createElement('span')
            newElement.innerHTML = data[dataKey].label
            toRet.appendChild(newElement)
        }
        console.log("Toret: ", toRet)
        var domlist = document.getElementById("chiplist")
        // domlist.appendChild(toRet)
        try{
            // domlist.appendChild(toRet)
            domlist.innerHTML = toRet.innerHTML
        }catch (e){}
        console.log(domlist)
        // return toRet
    }

    const techTemplate = (data) => {

    }

    return (
        <div className={"chiplist-class"} id={"chiplist"}>
            <Menubar expanded={"true"} model={list}></Menubar>
        </div>
    )
}

export default TechList