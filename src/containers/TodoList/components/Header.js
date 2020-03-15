import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Header extends Component {
    render() {
        const { handInputChange } = this.props;
        return (
            <div className="header">
                TodoList
                <input
                    data-test="input"
                    onChange={e => {
                        handInputChange(e.target.value);
                    }}
                    value={this.props.value}
                    onKeyUp={this.handInputKeyUp}
                />
            </div>
        );
    }

    handInputKeyUp = e => {
        if (e.keyCode === 13 && this.props.value) {
            this.props.addUndoItem(this.props.value);
            this.props.handInputKeyUp();
        }
    };
}

const mapState = state => {
    return {
        value: state.todo.inputValue
    };
};

const mapDispatch = dispatch => {
    return {
        handInputChange(value) {
            dispatch(actions.changeInputValue(value));
        },
        handInputKeyUp() {
            dispatch(actions.handInputKeyUp());
        }
    };
};

export default connect(mapState, mapDispatch)(Header);
