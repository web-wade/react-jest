import { CHANGE_INPUT_VALUE, HAND_INPUT_KEYUP } from "./constants";
const defaultState = {
    inputValue: ""
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { inputValue: action.value };
        case HAND_INPUT_KEYUP:
            return { inputValue: "" };
        default:
            return state;
    }
};
