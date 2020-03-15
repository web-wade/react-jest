import timer from "./timer"

beforeEach(() => {
    jest.useFakeTimers();
});

// test('timer two', () => {
//    const fn = jest.fn();
//    timer(fn);
//    jest.runAllTimers();
//    expect(fn).toHaveBeenCalledTimes(2);
// })

// test('timer one', () => {
//     const fn = jest.fn();
//     timer(fn);
//     jest.runOnlyPendingTimers();
//     expect(fn).toHaveBeenCalledTimes(1);
//  })

test('timer one and two', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
 })
test('timer one and two', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
 })
