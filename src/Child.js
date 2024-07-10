import React, {Component} from "react";

export class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Child"
        };
        console.log("Child constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Child getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Child componentDidMount");
    }

    shouldComponentUpdate() {   
        console.log("Child shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Child getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Child componentDidUpdate");
    }


  render() {
    console.log("Child render");
    return (
      <div>
        <h1>Child</h1>
      </div>
    );
  }
}