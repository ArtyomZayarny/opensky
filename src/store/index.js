import { createStore, applyMiddleware } from 'redux';
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

const store = createStore(mainReducer,applyMiddleware(logger));

export default store;