export default {
  //插件配置
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  //路由配置
  routes: [
    {
      path: '/login',
      component: './login',
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: './home',
          name: '首页'
        },
        {
          path: '/home',
          component: './home',
          name: '首页'
        }, //路径是相对于pages
        {
          path: '/home/pageview',
          component: './home/report/pageview',
          name: '页面浏览人次'
        },
        {
          path: '/home/userview',
          component: './home/report/userview',
          name: '用户浏览人次',
        },
        {
          path: '/home/setpage',
          component: './home/setting/setpage',
          name: '页面设置'
        },
        {
          path: '/home/setlanguage',
          component: './home/setting/setlanguage',
          name: '语言设置'
        },
        {
          path: '/goods/entryleveljava',
          // path: '/goods/livejava',
          component: './goods/streamcourse/entryleveljava',
          name: 'Java零基础'
        },
        {
          // path: '/goods/letsgoarchitect',
          path: '/goods/livearchitect',
          component: './goods/streamcourse/letsgoarchitect',
          name: '冲啊架构师'
        },
        {
          // path: '/goods/frontend',
          path: '/goods/frontcourse',
          component: './goods/recorededcourse/frontend',
          name: '前端课程页'
        },
        {
          // path: '/goods/backend',
          path: '/goods/backendcourse',
          component: './goods/recorededcourse/backend',
          name: '后端课程页'
        },
        {
          path: '/goods',
          component: './goods/goods',
          name: '商品页',
        },
        {
          path: '/about',
          component: './about/about',
          name: '关于页',
          Routes: ['./routes/PrivateRoute.js'], //路由守卫配置编写，路径相对于根目录，后缀名不能省略
        },
        {
          path: '/users',
          component: './users/_layout',
          routes: [
            {
              path: '/users/',
              component: './users/index',
            },
            {
              path: '/users/:name',
              component: './users/$name',
            },
          ],
        },
        {
          component: './notfound',
          //在上面任何一个路径都匹配不上的时候，就用这个
          name: '404页面',
        },
      ],
    },
  ],
};
