// import React, { PureComponent } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App.js'
// import LifeCycle from './LifeCycle'
// import App1 from './App1'
// import Purememo from './Purememo'
// import Composition from './Composition'
// import HOC from './HOC/HOC'
// import Context1 from './HOC/Context1'
// import Context2 from './HOC/Context2'
// import FirstRedux from './ReduxFolder/FirstRedux'
// import store from './ReduxFolder/store'
// import { Provider } from 'react-redux'
//为了统一管理reducer和action，把store.js里面的东西都放到index.js里面
// import {createStore, applyMiddleware} from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import {firstReducer} from './ReduxFolder/count.redux'
import RouterSample from './ReactRouter/RouterSample'


// ReactDOM.render(<App></App>,document.getElementById('root'))

//演示生命周期
// ReactDOM.render(<LifeCycle></LifeCycle>,document.getElementById('root'))
//演示ant-design组件库
// ReactDOM.render(<App1></App1>,document.getElementById('root'))
//演示Purecomponent和memo
// ReactDOM.render(<Purememo></Purememo>,document.getElementById('root'))
//演示组件符合的写法
// ReactDOM.render(<Composition></Composition>,document.getElementById('root'))
//演示高阶组件
// ReactDOM.render(<HOC title="我是高阶组件体验人员"></HOC>,document.getElementById('root'))
//演示Context的使用
// ReactDOM.render(<Context1></Context1>,document.getElementById('root'))
// ReactDOM.render(<Context2></Context2>,document.getElementById('root'))
//演示react-redux
// const store = createStore(firstReducer, applyMiddleware(thunk, logger))
// ReactDOM.render(<Provider store={store}>
//     <FirstRedux></FirstRedux>
// </Provider>, document.getElementById('root'))
//演示路由的使用
ReactDOM.render(<RouterSample></RouterSample>,document.getElementById('root'))