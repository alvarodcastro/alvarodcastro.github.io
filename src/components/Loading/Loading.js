import "./Loading.css"
import React from "react";
// import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import {json} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";
// import "bootstrap/dist/css/bootstrap.css";

import * as rocketData from "./rocketLoading.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
// window.addEventListener('unload', window.location.replace('/'))

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: undefined,
            loading: undefined
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading:true });
            setTimeout(() => {
                this.setState({ done: true });
                window.location.hash = ""
            },1500)
        }, 1700)
    }


    render() {
        return (
            <div>
                {!this.state.done ? (
                    <div className={"LoadingScreen-div scale-out-top"}>
                        <Lottie options={defaultOptions} height={220} width={220}></Lottie>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div>
                        <Navbar></Navbar>
                        <Header></Header>
                        <MainContent></MainContent>
                        <Footer></Footer>
                    </div>
                )}
            </div>
        );
    }
}