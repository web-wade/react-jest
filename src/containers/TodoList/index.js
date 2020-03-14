import React, { Component } from "react";
import Header from "./components/Header";
import "./style.css"

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            undoList: []
        };
    }

    render() {
        return (
            <div>
                <Header addUndoItem={this.addUndoItem} />
                <div>
                    {this.state.undoList.map((item,index)=>{
                        return <div key={index}>{item}</div>
                    })}
                </div>
            </div>
        );
    }

    addUndoItem = value => {
        this.setState({
            undoList: [...this.state.undoList, value]
        });
    };
}
