import React, { Component, PureComponent } from 'react'

//可以使用PureComponent去代替生命周期
// class Title extends PureComponent {
//     // shouldComponentUpdate(nextProps){
//     //     return nextProps.title !== this.props.title
//     // }
//     render() {
//         console.log('我是title组件')
//         return (
//             <div>
//                 标题：{this.props.title}
//             </div>
//         )
//     }
// }

//使用React.memo代替以上的title组件，让函数式组件也拥有PureComponent的功能
const Title = React.memo((props) => {
    console.log('我是title组件')
    return (
        <div>
            标题：{props.title}
        </div>
    )
})


class Count extends Component {
    render() {
        console.log('我是条数组件')
        return (
            <div>
                条数：{this.props.count}
            </div>
        )
    }
}


export default class Purememo extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'小D课堂学习React',
            count: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}></Title>
                <Count count={this.state.count}></Count>
            </div>
        )
    }
}
