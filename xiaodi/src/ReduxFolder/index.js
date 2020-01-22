import { createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import { firstReducer as count } from "./count.redux"
import user from "./user.redux"
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

//第⼀步、创建我们的中间件
const mid = createSagaMiddleware()
//第⼆部，应⽤中间件
const store = createStore(
    //当我们reducer多的时候我们要做reducer模块化
    combineReducers({ count, user }),
    applyMiddleware(mid, logger)
)
//第三部，执⾏saga，把监听事件跑起来
mid.run(saga)
export default store