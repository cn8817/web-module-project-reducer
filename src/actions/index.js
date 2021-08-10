export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const SET_MEMORY = "SET_MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clear = () => {
    return({type:CLEAR})
}

export const setMemory = () => {
    return({type:SET_MEMORY})
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}