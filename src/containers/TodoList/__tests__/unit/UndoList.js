import React from "react";
import { shallow } from "enzyme";
import UndoList from "../../components/UndoList";
import { finTestWrapper } from "../../../../utils/testUtils";

// it("UndoList渲染正常", () => {
//     const wrapper = shallow(<UndoList />);
//     const inputElem = finTestWrapper(wrapper, "input");
//     expect(inputElem.length).toBe(1);
// });

it("没有数据时count为0,列表无内容", () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = finTestWrapper(wrapper, "count");
    const listElem = finTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("0");
    expect(listElem.length).toBe(0);
});

it("有数据时count为长度,列表不为空", () => {
    const listData = ["1", "2"];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = finTestWrapper(wrapper, "count");
    const listElem = finTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual(listData.length + "");
    expect(listElem.length).toBe(listData.length);
});

it("未完成列表有内容时，要存在删除按钮", () => {
    const listData = ["1", "2"];
    const wrapper = shallow(<UndoList list={listData} />);
    const deleteElem = finTestWrapper(wrapper, "delete-item");
    expect(deleteElem.length).toBe(listData.length);
});

it("未完成列表有内容是，点击某个删除按钮，会调用删除方法", () => {
    const listData = ["1", "2"];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList list={listData} deleteItem={fn}/>);
    const deleteElem = finTestWrapper(wrapper, "delete-item");
    deleteElem.at(index).simulate("click");
    expect(fn).toHaveBeenLastCalledWith(index);
});
