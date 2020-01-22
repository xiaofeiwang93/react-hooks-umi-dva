import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import store from '../ReduxFolder/index'
import {login} from '../ReduxFolder/user.redux'

function App(){
    return (
        <div>
            {/* 编写路由陶阳 */}
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/classes">课程</Link>
                </li>
                <li>
                    <Link to="/mine">我的</Link>
                </li>
                <li>
                    <Link to="/mineaaami ne">没有的组件</Link>
                </li> 
            </ul>
            {/* 路由配置 */}
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/classes" component={Classes}></Route>
                <Route path="/login" component={Login}></Route>
                {/* <Route path="/mine" component={Mine}></Route> */}
                <RouteGard path="/mine" component={Mine}></RouteGard>
                {/* 配置课程详情页，演示路由传参取参 */}
                <Route path="/detail/:course" component={Detail}></Route>
                {/* 配置404组件，必须放在最后*/}
                <Route component={Notfound}></Route>
            </Switch>
        </div>
    )
}

//编写路由守卫组件进行权限控制
@connect(state=>({isLogin: state.user.isLogin}))
class RouteGard extends Component {
    // state = {
    //     isLogin: true
    // }
    render(){
        const {component: Component, ...otherProps} = this.props
        return (
            <Route {...otherProps} render={props => (
                this.props.isLogin? <Component {...props}></Component>: 
                (<Redirect to={
                    {pathname: '/login', state: {from: props.location.pathname}}
                }></Redirect>)
            )}></Route>
        )
    }
}

//登录组件
@connect(
    state=>({isLogin: state.user.isLogin}),
    {login}
)
class Login extends Component{
    // state = {
    //     isLogin: false
    // }
    // login = () => {
    //     auth.login(()=>{
    //         this.setState({
    //             isLogin: true
    //         })
    //     })
    // }
    render(){
        //回调地址
        const from = (this.props.location.state&&this.props.location.state.from) || '/'
        if (this.props.isLogin){
            return <Redirect to={from}></Redirect>
        }
        return(
            <div>
                <p>请先登录</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

//模拟接口
// const auth =  {
//     isLogin: false,
//     login(callback) {
//         this.isLogin = true
//         setTimeout(callback,1000)
//     }
// }
 
//详情页组件
function Detail({match, location,history}){
    //没解构的写法是直接获取参数
    // console.log(props)
    console.log(match)
    console.log(location)
    console.log(history)
    return(
        <div>
            我是{match.params.course}页
            <button onClick={() => history.push({pathname:'/', state: {foo: 'bar'}})}>返回首页</button>
        </div>
    )
}

//首页组件
function Home({location}) {
    if (location.state && location.state.foo){
        console.log('路由跳转带回来的参数: ' + location.state.foo)
    }
    
    return(
        <div>首页
            {location.state && location.state.foo? <p>从详情页带回来的参数{location.state.foo}</p>: null}
        </div>
    )
}

//课程组件
function Classes() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/detail/react">React</Link>
                </li>
                <li>
                    <Link to="/detail/vue">Vue</Link>
                </li>
            </ul>
        </div>
    )
}


//我的组件
function Mine() {
    return(
        <div>
            <h2>个人中心</h2>
            <ul>
                <li>
                    <Link to="/mine/userinfo">个人中心</Link>
                </li>
                <li>
                    <Link to="/mine/order">客户订单</Link>
                </li>
            </ul>
            {/* 路由配置 */}
            <Switch>
                <Route path="/mine/userinfo" component={()=>(<div>个人信息</div>)}></Route>
                <Route path="/mine/order" component={() => (<div>客户订单</div>)}></Route>
                {/* 路由重定向，当进入个人中心页面的时候，都没有命中我们路由配置的时候，就显示重定向路由的内容 */}
                <Redirect to="/mine/userinfo"></Redirect>
            </Switch>
        </div>
    )
}

//配置404组件
function Notfound(){
    return (
        <div>404页面</div>
    )
}

export default function RouterSample() {
    return (
        <div>
            <h1>演示React-router的4.X版本</h1>
            <BrowserRouter>
            <Provider store={store}>
                <App></App>
            </Provider>
            </BrowserRouter>
        </div>
    )
}
