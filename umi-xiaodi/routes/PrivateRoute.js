import Redirect from 'umi/redirect'
import {connect} from 'dva'
import React, {Component} from 'react'

@connect(
    state => ({token: state.user.token})
)
export default class extends Component{
    render(){
        if (this.props.token) {
            return <div>{this.props.children}</div>
        }
        return <Redirect to="/login"></Redirect>
    }
}

// export default function (props) {
//     //判断是否登录成功，50%的成功率
//     if (Math.random() > 0.5){
//         return <Redirect to="/login"></Redirect>    
//     }
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

