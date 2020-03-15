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
                <UndoList
                    changeStatus={this.changeStatus}
                    deleteItem={this.deleteItem}
                    handleBlur={this.handleBlur}
                    list={this.state.undoList}
                    valueChange={this.valueChange}
                />
            </div>
        );
    }

    addUndoItem = value => {
        this.setState({
            undoList: [
                ...this.state.undoList,
                {
                    status: "div",
                    value
                }
            ]
        });
    };

    deleteItem = index => {
        const list = [...this.state.undoList];
        list.splice(index, 1);
        this.setState({
            undoList: list
        });
    };

    changeStatus = index => {
        const list = [...this.state.undoList];
        list[index].status = "input";
        this.setState({
            undoList: list
        });
    };

    handleBlur = index => {
        const list = [...this.state.undoList];
        list[index].status = "div";
        this.setState({
            undoList: list
        });
    };

    valueChange = (index, value) => {
        const list = [...this.state.undoList];
        list[index].value = value;
        this.setState({
            undoList: list
        });
    };
}
