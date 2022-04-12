export default [
  // 产业
  {
    path: '/industrial',
    name: 'industrial',
    component: () =>
      import( /* webpackChunkName: "industrial" */ '@/views/industrial/index.vue'),
    redirect: '/industrial/secondary',
    children: [
      // 第二产业
      {
        path: 'secondary',
        name: 'industrial-secondary',
        component: () =>
          import( /* webpackChunkName: "industrial-secondary" */ '@/views/industrial/secondary.vue'),

      },
      // 第二产业详情
      {
        path: 'secondary-detail',
        name: 'industrial-secondary-detail',
        component: () =>
          import( /* webpackChunkName: "industrial-secondary-detail" */ '@/views/industrial/secondary-detail.vue'),

      },
      // 第三产业
      // {
      //   path: 'service-sector',
      //   name: 'industrial-service-sector',
      //   component: () =>
      //     import( /* webpackChunkName: "industrial-service" */ '@/views/industrial/service-sector.vue'),

      // },
    ]
  },

]