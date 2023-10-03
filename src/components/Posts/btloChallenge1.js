import "./assets/css/main.css"
import "./assets/css/noscript.css"
import React from 'react';
import {useParams} from "react-router-dom";
import ProjectService from "../ProjectService/ProjectService";
import { Image } from 'primereact/image';
import { Chip } from 'primereact/chip'
import im1 from "../../../src/images/post0/images/image3.png"
import im2 from "../../../src/images/post0/images/image1.png"
import im3 from "../../../src/images/post0/images/image4.png"
import im4 from "../../../src/images/post0/images/image5.png"
import im5 from "../../../src/images/post0/images/image6.png"
import im6 from "../../../src/images/post0/images/image7.png"
import im7 from "../../../src/images/post0/images/image2.png"
import im8 from "../../../src/images/post0/images/image8.png"
import TechList from "../TechList/TechList";
import TechChipList from "../TechList/TechList"


const BtloC1 = (data) => {
    let { id } = useParams();
    const projectService = new ProjectService();
    let project = projectService.getProject(id);
    return (
        <div id="wrapper">
            <div id="main">
                <section className="post">
                    <header className="major">
                        <span className="date">{project.date}</span>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                        <TechList list={project.technologies} className={"chipList"} chip={true} />
                    </header>
                    <div className="image main"><img src="images/pic01.jpg" alt="" /></div>
                    <div className={"question"}>
                        <h3>How many browser-profiles are present in Google Chrome?</h3>
                        <p>In order to solve this question we need to understand how Google Chrome stores different profiles within the system by default. </p>
                        <p>The first browser profile is created by default and placed on “Default” folder under the directory
                            <code>\Users\[username]\AppData\Local\Google\Chrome\User Data</code>. Each profile created will be placed at
                            folder Profile [x], being the first profile created by the user placed on Profile 1, and so on.
                        </p>
                        <p>Knowing this, we could look at the directory mentioned above:</p>
                        <Image src={im1} preview/>
                        <p>It seems easy to recognise two different profiles: “Default” and “Profile 1”.</p>
                        <p><b>Answer: </b>2</p>
                    </div>
                    <div className={"question"}>
                        <h3>What is the name of the browser theme installed on Google Chrome?</h3>
                        <p>By default, Google Chrome themes are stored on the <code>\Users\[username]\AppData\
                            Local\Google\Chrome\User Data\Default|Extensions\</code>,
                            so if we search for this directory:</p>
                        <Image preview src={im2}/>
                        <p>
                            We find a few folders named with each extension id, so we should be looking at them one by one and check for any references to the browser theme. I recommend just looking the “manifest.json” file under each directory, as it usually contains valuable information for our investigation. To keep it short, we will focus on the correct folder:
                        </p>
                        <Image preview src={im3} />
                        <p>If we looked at the “manifest.json”:</p>
                        <Image preview src={im4} />
                        <p>
                            Even with little knowledge about how this works, we could easily be saying that it has something to do with the browser theme. We can find the web-url for the installed theme:
                            "http://atavi.com/browser-themes/?from=chrome-themes&tid=earth_in_space".
                            We could navigate to the url, but the answer seems clear.
                        </p>
                        <p><b>Answer: </b>Earth in space</p>
                    </div>
                    <div className={"question"}>
                        <h3>Identify the Extension ID and Extension Name of the cryptominer</h3>
                        <p>During our search for the browser theme we have likely come across an interesting extension regarding our investigation: </p>
                        <Image preview src={im5} />
                        <p>If we look at the “manifest.json” file: </p>
                        <Image preview src={im6}/>
                        <p><b>Answer: </b>egnfmleidkolminhjlkaomjefheafbbb, DFP Cryptocurrency Miner</p>
                    </div>
                    <div className={"question"}>
                        <h3>What is the description text of this extension?</h3>
                        <p><b>Answer: </b> Allows staff members to mine cryptocurrency in the background of their web browser</p>
                    </div>
                    <div className={"question"}>
                        <h3>What is the name of the specific javascript web miner used in the browser extension?</h3>
                        <p>On the “manifest.json” file, we find some references to a JavaScript file named “background.js”. Fortunately, we have this file on the same directory, if we analyze its content:</p>
                        <Image preview src={im7}/>
                        <p><b>Answer: </b>cryptoloot</p>
                    </div>
                    <div className={"question"}>
                        <h3>How many hashes is the crypto miner calculating per second?</h3>
                        <p>Analyzing the previous code, it can easily be answered.</p>
                        <p><b>Answer: </b>20</p>
                    </div>
                    <div className={"question"}>
                        <h3>What is the public key associated with this mining activity?</h3>
                        <p>We also get it from the code above.</p>
                        <p><b>Answer: </b>b23efb4650150d5bc5b2de6f05267272cada06d985a0</p>
                    </div>
                    <div className={"question"}>
                        <h3>What is the URL of the official Twitter page of the javascript web miner?</h3>
                        <p>We can answer this question by using some specific google search:</p>
                        <Image preview src={im8}/>
                        <p><b>Answer: </b>twitter.com/CryptoLootMiner</p>
                    </div>
                </section>

            </div>
        </div>

    );
};
export default BtloC1;