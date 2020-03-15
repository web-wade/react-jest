import { CHANGE_INPUT_VALUE,HAND_INPUT_KEYUP } from "./constants";

export const changeInputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const handInputKeyUp = value => ({
    type: HAND_INPUT_KEYUP,
});
