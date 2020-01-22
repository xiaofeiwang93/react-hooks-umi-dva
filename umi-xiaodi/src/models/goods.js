import axios from 'axios'

//调接口，本应写在service层，但是这里为了演示，就写在model
function GetGoods(){
    return axios.get('/api/goods')
} 

export default {
    namespace: "goods", // model的命名空间，区分多个model
    state: [], // 初始状态
    effects: {// 异步操作
        *getList(action, {call, put}){
            const res = yield call(GetGoods)
            yield put ({type:'initGoods', payload: res.data.result})
        }
    },
    reducers: {
        initGoods(state, action){
            return action.payload
        },
        //添加商品
        addGood(state, action){
            return [...state, {title: action.payload.title}]
        }
    }
};