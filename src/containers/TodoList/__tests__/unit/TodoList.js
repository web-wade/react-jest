import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../index";

it("TodoList 初始化列表为空", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.state("undoList")).toEqual([]);
});

it("TodoList 应该给Header传递一个增加undoList内容的方法", () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find("Header");
    expect(Header.prop("addUndoItem")).toBe(wrapper.instance().addUndoItem);
});

it("当header回车是时，undolist应该新增内容", () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find("Header");
    const addFunc = Header.prop("addUndoItem");
    addFunc("学习React");
    expect(wrapper.state("undoList").length).toBe(1);
    expect(wrapper.state("undoList")[0]).toEqual({
        status: "div",
        value: "学习React"
    });
});

it("todoList应该给未完成的列表传递list数据和删除方法和changeStatus和handleBlur,valueChange", () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find("UndoList");
    expect(UndoList.prop("list")).toBeTruthy();
    expect(UndoList.prop("deleteItem")).toBeTruthy();
    expect(UndoList.prop("changeStatus")).toBeTruthy();
    expect(UndoList.prop("handleBlur")).toBeTruthy();
    expect(UndoList.prop("valueChange")).toBeTruthy();
});

it("当delete执行时，undolist应该删除内容", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
        undoList: [
            {
                status: "div",
                value: "学习React"
            },
            {
                status: "div",
                value: "学习React"
            }
        ]
    });
    wrapper.instance().deleteItem(1);
    expect(wrapper.state("undoList")).toEqual([
        {
            status: "div",
            value: "学习React"
        }
    ]);
});

it("changeStatus方法被调用，undoList数据项被删除", () => {
    const wrapper = shallow(<TodoList />);
    const data = [
        {
            status: "div",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    wrapper.setState({
        undoList: data
    });
    wrapper.instance().changeStatus(1);
    expect(wrapper.state("undoList")[1]).toEqual({
        ...data[1],
        status: "input"
    });
});

it("valueChange方法被调用，undoList数据项被修改", () => {
    const wrapper = shallow(<TodoList />);
    const data = [
        {
            status: "input",
            value: "学习React"
        }
    ];
    wrapper.setState({
        undoList: data
    });
    wrapper.instance().valueChange(0, "11111");
    expect(wrapper.state("undoList")[0]).toEqual({
        ...data[0],
        value: "11111"
    });
});
