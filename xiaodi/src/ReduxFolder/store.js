//为了统一管理reducer和action，把store.js里面的东西都放到index.js里面。现在这个store.js文件不再被用到

import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//编写第一个reducer
const firstReducer = (state=10, action) => {
    switch(action.type){
        //当我们传入的action的type是add的时候，就给state加一
        case 'add': 
            return state + 1;
        //当我们传入的action的type是reduce的时候，就给state减一
        case 'reduce': 
            return state - 1;
        //当我们传入的type不是以上情况，就返回默认的state
        default:
            return state;
    }
}

//创建数据仓库，把我们编写好的reducer传入给createStore
const store = createStore(firstReducer, applyMiddleware(thunk, logger))

export default store 