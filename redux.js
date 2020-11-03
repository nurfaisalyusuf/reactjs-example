const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17,
};

// reducer - fungsi untuk mengupdate value di store atau task list untuk mengupdate sotre
// state ini adalah global statenya
const rootReducer = (state = initialState, action) => {
    // console.log("list action", action);
    // if (action.type === "ADD_AGE") {
    //     return {
    //         ...state,
    //         age: state.age + 1,
    //     };
    // }
    // if (action.type === "CHANGE_VALUE") {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue,
    //     };
    // }
    // return state;
    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1,
            };
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue,
            };
        default:
            return state;
    }
};
// store - wadah untuk menyimpan value state secara global
const store = createStore(rootReducer);
console.log(store.getState());

// subscription - proses pemanggilan store yang diperlukan
store.subscribe(() => {
    console.log("store changed : ", store.getState());
});

// dispatch/Action - proses pemanggilan dari redocuer
// dispatch dipasang di component yang ingin memanggil store redux
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());


