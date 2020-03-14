import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../../index";

Enzyme.configure({ adapter: new Adapter() });


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