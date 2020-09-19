export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// action creators
export const increment = () =>{
    return {
        type: INCREMENT
    };
};

export const decrement = () =>{
    return {
        type: DECREMENT
    };
};

export const add = (value) =>{
    return {
        type: ADD,
        value: value
    };
};

export const subtract = (value) =>{
    return {
        type: SUBTRACT,
        value: value
    };
};

export const saveResult = (value) =>{
    return {
        type: STORE_RESULT,
        result: value
    };
}
export const storeResult = (value) =>{
    return dispatch => {
        setTimeout(() =>{
             dispatch(saveResult(value));
        }, 2000);
    };
};

export const deleteResult = (value) =>{
    return {
        type: DELETE_RESULT,
        resultElId: value
    };
};