import {Timeline} from "primereact/timeline";
import {ScrollTop} from "primereact/scrolltop";
import "./MainContent.css"
import About from "../About/About";

import myphoto from "../../monkey.jpg"
import Ideas from "../Ideas/Ideas";
import Work from "../Work/Work";


function MainContent() {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }

    let callback = (entries) => {
        for (let i = 0; i<entries.length; i++){
            if (entries[i]['isIntersecting'])
            {
                console.log("Entry: ", entries[i]['target'], " is loaded");
                // loaded.
                // console.log(loaded)


                let id = entries[i]['target'].id;
                // let element = document.getElementById(id);
                let element = entries[i]['target'];

                element.classList.remove("Inv-Class")
                //Class: An-App-{id} will make the element appearance
                element.classList.add("An-App-".concat(id))
            }
        }
    }
    let observer = new IntersectionObserver(callback, options);

    function addToObserver() {
        let divArray = document.getElementsByClassName("MainContent-Subdiv")
        console.log("Elements found:", divArray)
        let id = null;
        for (let i=0; i<divArray.length; i++) {
            id = divArray[i].id;
            observer.observe(document.getElementById(id))
            console.log("Element with id: ", id, " added to observer")
        }
        // console.log("Observer has ", observer., " entries")
        // observer.observe(document.getElementById("contact"))
        // console.log("size: ", divArray.length)
    };

    window.addEventListener("loadstart", addToObserver)
    window.onload = addToObserver()
    // window.location.onload(observer.disconnect())

    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
    return (
        <div>
            {/*<Skeleton>*/}
            <div className={"MainContent-class"} id={"mainContent"}>
                {/*<Button onClick={observer.observe(document.getElementById("mainContent"))}></Button>*/}
                <ScrollTop threshold={1000}/>
                {/*<div className={"Timeline-div"}>*/}
                {/*    <Timeline*/}
                {/*        value={events} layout={"vertical"} align={"left"} content={(item) => item.status}*/}
                {/*        className={"Timeline-class"}>*/}
                {/*    </Timeline>*/}
                {/*</div>*/}
                <div className={"MainContent-Subdiv Inv-Class"} id={"about"}>
                    <About photo={myphoto} ></About>
                </div>
                {/*<div className={"MainContent-Subdiv Inv-Class"} id={"ideas"}>*/}
                {/*    <Ideas></Ideas>*/}
                {/*</div>*/}
                <div className={"MainContent-Subdiv Inv-Class"} id={"work"}>
                    <Work></Work>
                </div>
            </div>
            {/*</Skeleton>*/}
        </div>

    )
}
export default MainContent