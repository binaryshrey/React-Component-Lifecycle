import React, {Component} from "react";
import {Child} from "./Child";

export class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Parent"
        };
        console.log("Parent constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Parent getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    shouldComponentUpdate() {   
        console.log("Parent shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Parent getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Parent componentDidUpdate");
    }



  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Parent</h1>
        <Child />
        <button onClick={() => this.setState({name: "New Parent"})}>Update Parent</button>
      </div>
    );
  }
}