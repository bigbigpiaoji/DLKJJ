export default [
  // 热点事件
  {
    path: '/hot',
    name: 'hot',
    component: () =>
      import( /* webpackChunkName: "hot" */ '@/views/hot/index.vue'),
    redirect: '/hot/trade-disputes',
    children: [
      // 贸易争端
      {
        path: 'trade-disputes',
        name: 'hot-trade-disputes',
        component: () =>
          import( /* webpackChunkName: "hot-trade-disputes" */ '@/views/hot/trade-disputes.vue'),
      },

    ]
  },

]