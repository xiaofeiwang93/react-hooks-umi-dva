import React from 'react'
import ReactDDM from 'react-dom'
// import App from './App'
// import UseContext from './UseContext/UseContext'
// import UseReducerComp from './UseReducerComp'
// import OtherHooks from './OtherHooks'
// import CustomeHoooks from './CustomeHooks'
import FirstRedux from './ReduxFolder/FirstRedux'
import store from './ReduxFolder/store'
import { Provider } from 'react-redux'

//演示useEffect
// ReactDDM.render(<App></App>, document.getElementById('root'))
//演示useContext的使用
// ReactDDM.render(<UseContext></UseContext>, document.getElementById('root'))
//演示UseReducerComp
// ReactDDM.render(<UseReducerComp></UseReducerComp>, document.getElementById('root'))
//演示other hooks
// ReactDDM.render(<OtherHooks></OtherHooks>, document.getElementById('root'))
//演示Custom Hooks
// ReactDDM.render(<CustomeHoooks></CustomeHoooks>, document.getElementById('root'))
//演示Redux
// const render = () => {
//     ReactDDM.render(<FirstRedux></FirstRedux>, document.getElementById('root'))
// }
// render()
// store.subscribe(render)
//演示react-redux
ReactDDM.render(<Provider store={store}>
    <FirstRedux></FirstRedux>
</Provider>, document.getElementById('root'))