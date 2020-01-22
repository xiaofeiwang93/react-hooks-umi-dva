//初始化state
const initialState = {
    isLogin: false
}

//reducer
export default (state = initialState, action) => {
    switch (action.type) {

    case 'login':
        return {isLogin: true}
    // case 'login_failed':
    //     return {isLogin: false}
    default:
        return state
    }
}

//编写redux-saga生成action的函数
const login = function(){
    return {type: 'login_request'}
}
export {login}