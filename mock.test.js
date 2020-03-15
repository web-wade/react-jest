import { runCallback, getData } from "./mock";
import axios from "axios";
jest.mock("axios");

// test('测试 runCallback ', () => {
//      const func = jest.fn(); //mock函数，捕获函数的调用
//      runCallback(func);
//      expect(func).toBeCalled();
// })

// test('测试 runCallback ', () => {
//      const func = jest.fn(); //mock函数，捕获函数的调用
//      runCallback(func);
//      runCallback(func);
//      expect(func.mock.calls.length).toBe(2);
//      console.log(func.mock)
// })

test('测试 runCallback ', () => {
    const func = jest.fn(); //mock函数，捕获函数的调用
    // func.mockReturnValueOnce("wade");
    // func.mockReturnValueOnce("dell").mockReturnValueOnce("222");
    // func.mockReturnValue('wade') //自由的设置返回的结果
    func.mockImplementation(()=>{
     return "wade"
    })

    // func.mockReturnThis();

    runCallback(func);
    runCallback(func);
    runCallback(func);
    expect(func.mock.calls.length).toBe(3);
    expect(func.mock.results[0].value).toBe('wade');
    console.log(func.mock)
})

test("测试getData", async () => {
    //mock，改变函数的内部实现
  axios.get.mockResolvedValue({ data: "hello" });
  await getData().then(data => {
    expect(data).toBe("hello");
  });
});
