import React, {useContext} from 'react'
import {jerry} from '../Store/index'

export default function UseContext() {
    const ctx = useContext(jerry)
    return (
        <div>
            <div>我是{ctx.name}----今年{ctx.age}岁</div>
        </div>
    )
}
