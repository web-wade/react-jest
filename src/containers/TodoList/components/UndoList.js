import React, { Component } from "react";

export default class UndoList extends Component {
    render() {
        const {
            list,
            deleteItem,
            changeStatus,
            handleBlur,
            valueChange
        } = this.props;
        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {list.map((item, index) => (
                        <li
                            data-test="list-item"
                            key={index}
                            onClick={() => changeStatus(index)}
                        >
                            {item.status === "div" ? (
                                item.value
                            ) : (
                                <input
                                    data-test="input"
                                    value={item.value}
                                    onChange={e =>
                                        valueChange(index, e.target.value)
                                    }
                                    onBlur={() => handleBlur(index)}
                                />
                            )}
                            <span
                                data-test="delete-item"
                                onClick={e => {
                                    e.stopPropagation();
                                    deleteItem(index);
                                }}
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
