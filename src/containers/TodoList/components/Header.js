import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    render() {
        return (
            <div className="header">
                TodoList
                <input
                    data-test="input"
                    onChange={e => {
                        this.setState({ value: e.target.value });
                    }}
                    value={this.state.value}
                    onKeyUp={this.handInputKeyUp}
                />
            </div>
        );
    }

    handInputKeyUp = e => {
        if (e.keyCode === 13 && this.state.value) {
            this.props.addUndoItem(this.state.value);
            this.setState({
                value:""
            })
        }
    };
}
