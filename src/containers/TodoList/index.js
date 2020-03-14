import React, { Component } from "react";
import Header from "./components/Header";

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
            </div>
        );
    }

    addUndoItem = value => {
        this.setState({
            undoList: [...this.state.undoList, value]
        });
    };
}
