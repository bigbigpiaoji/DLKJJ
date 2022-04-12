export default [
  // 宏观
  {
    path: '/macro',
    name: 'macro',
    component: () =>
      import( /* webpackChunkName: "macro" */ '@/views/macro/index.vue'),
    redirect: '/macro/gdp/analysis',
    children: [
      // gdp
      {
        path: 'gdp',
        name: 'macro-gdp',
        component: () =>
          import( /* webpackChunkName: "macro-gdp" */ '@/views/macro/gdp.vue'),
        children: [
          // 分析
          {
            path: 'analysis',
            name: 'macro-gdp-analysis',
            component: () =>
              import( /* webpackChunkName: "macro-analysis" */ '@/views/macro/analysis.vue'),
          },
          // 建模
          {
            path: 'model',
            name: 'macro-gdp-model',
            component: () =>
              import( /* webpackChunkName: "macro-model" */ '@/views/macro/model.vue'),
          },
          // 预测
          {
            path: 'forecast',
            name: 'macro-gdp-forecast',
            component: () =>
              import( /* webpackChunkName: "macro-forecast" */ '@/views/macro/forecast.vue'),
          }
        ]
      }
    ]
  },

]