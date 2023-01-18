import React from "react";
import projects from "../../data/projects/projects.json"

export default class ProjectService extends React.Component {
    constructor(props) {
        super(props);
    }

    getProjects() {
        // let toRet = fetch('./data/products.json').then(res => res.json()).then(d => d.data)
        //     .then(res => {
                // res.json()
                // console.log("Res: ", res.json())
            // })
            // .then(d => d.data)
            // .catch(error => console.log(error));

        // console.log(projects.data)
        // console.log(projects)
        // const prod = {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5}
        // console.log(prod)
        // return fetch
        return projects.data
    }
}