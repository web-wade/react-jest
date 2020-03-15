import React, { Component } from "react";
import Header from "./components/Header";
import UndoList from "./components/UndoList";
import axios from "axios";
import "./style.css";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            undoList: []
        };
    }

    componentDidMount() {
        axios
            .get("/undoList.json")
            .then(res => {
                console.log("111111")
                console.log(res)
                this.setState({ undoList: res.data });
            })
            .catch(e => {
                // console.log(e);
            });
    }

    render() {
        return (
            <div>
                <Header addUndoItem={this.addUndoItem} />
                <UndoList
                    deleteItem={this.deleteItem}
                    list={this.state.undoList}
                />
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
        list.splice(index, 1);
        this.setState({
            undoList: list
        });
    };
}
