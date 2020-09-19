import { createStore, applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';

const CREATE_USER = 'CREATE_USER';

export  const createUser = (user) => {
    return {
        type:CREATE_USER,
        payload:user
    }
}


const initState = {
    users:[]
}
const mainReducer = (state=initState,action) => {
    switch(action.type) {
        case CREATE_USER:
            return {...state.users, ...action.payload}
    }
    return state
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(mainReducer,composeEnhancers(applyMiddleware(logger)));

export default store;