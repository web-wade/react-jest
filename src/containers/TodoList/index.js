import React, { Component } from "react";
import Header from "./components/Header";
import "./style.css";
import UndoList from "./components/UndoList";

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
                <UndoList deleteItem={this.deleteItem} list={this.state.undoList}/>
            </div>
        );
    }

    addUndoItem = value => {
        this.setState({
            undoList: [...this.state.undoList, value]
        });
    };

    deleteItem = index => {
        const list = [...this.state.undoList];
        list.splice(index,1)
        this.setState({
            undoList: list
        });
    };
}
