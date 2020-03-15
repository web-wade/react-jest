jest.mock("./mockHigh");
import { fetchData } from "./mockHigh";
const {getNumber} = jest.requireActual('./mockHigh');

test("fetchData测试", () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual("123");
  });
});

test("getNumber测试", () => {
  expect(getNumber()).toEqual(123);
});
