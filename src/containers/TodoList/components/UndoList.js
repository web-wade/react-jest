import React, { Component } from "react";

export default class UndoList extends Component {
    render() {
        const { list,deleteItem } = this.props;
        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {list.map((item, index) => (
                        <li data-test="list-item" key={index}>
                            {item}
                            <span
                                data-test="delete-item"
                                onClick={() => deleteItem(index)}
                            >
                                -
                            </span>
                        </li>
                    ))}
                    <li></li>
                </ul>
            </div>
        );
    }

}
