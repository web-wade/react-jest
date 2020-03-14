import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../index";

it('TodoList 初始化列表为空', () => {
    const wrapper = shallow(<TodoList/>);
    expect(wrapper.state('undoList')).toEqual([])
});

it('TodoList 应该给Header传递一个增加undoList内容的方法', () => {
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
});  

it('当header回车是时，undolist应该新增内容', () => {
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    const addFunc = Header.prop('addUndoItem');
    addFunc('学习React') 
    expect(wrapper.state('undoList').length).toBe(1)
    expect(wrapper.state('undoList')[0]).toBe('学习React')
}); 

it("todoList应该给未完成的列表传递list数据和删除方法", () => {
    const wrapper = shallow(<TodoList/>);
    const UndoList = wrapper.find("UndoList");
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
});

it("当delete执行时，undolist应该删除内容", () => {
    const wrapper = shallow(<TodoList/>);
    wrapper.setState({
        undoList:["1",'2']
    })
    wrapper.instance().deleteItem(1)
    expect(wrapper.state('undoList')).toEqual(["1"]);
});
