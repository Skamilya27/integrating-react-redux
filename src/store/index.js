// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter = state.counter + action.inc;
        },
        decrementBy5(state, action) {
            state.counter = state.counter - action.inc;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'incrementHandlerBy5') {
//         return {
//             counter: state.counter + action.inc,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrementHandlerBy5') {
//         return {
//             counter: state.counter - action.dec,
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// };


// const store = createStore(counterReducer);
const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;