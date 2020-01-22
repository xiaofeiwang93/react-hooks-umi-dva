import React, {useEffect} from 'react'

//自己封装的Hooks都要使用use开头

const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title
    }, [title])
}

export default function CustomeHooks() {
    useChangeTitle('自定义修改标题的Hooks1')
    return (
        <div>
            测试自己封装的Hooks
        </div>
    )
}
