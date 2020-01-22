//因为本地mock没有数据库，所以我们在这里模拟
let data = [
    {title: 'vue单页面电商页面'},
    {title: 'react单页面后台管理页面项目'}
]

export default {
    //method url 跟我们node编写的express是一样的
    "get /api/goods": function(req, res){
        setTimeout(() => {
            res.json({result: data})
        }, 1000);
    }
}
