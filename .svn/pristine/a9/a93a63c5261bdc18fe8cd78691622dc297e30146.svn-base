export default [
  // 微观
  {
    path: '/micro',
    name: 'micro',
    component: () =>
      import( /* webpackChunkName: "micro" */ '@/views/micro/index.vue'),
    redirect: '/micro/rule-industry',
    children: [
      // 规上工业
      {
        path: 'rule-industry',
        name: 'micro-rule-industry',
        component: () =>
          import( /* webpackChunkName: "micro-rule-industry" */ '@/views/micro/rule-industry.vue'),
      },

    ]
  },

]