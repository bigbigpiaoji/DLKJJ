export default [
  // 区域
  {
    path: '/area',
    name: 'area',
    component: () =>
      import( /* webpackChunkName: "area" */ '@/views/area/index.vue'),
    redirect: '/area/electricity',
    children: [
      // 区域用电
      {
        path: 'electricity',
        name: 'area-electricity',
        component: () =>
          import( /* webpackChunkName: "area-electricity" */ '@/views/area/electricity.vue'),

      },
      // 重点片区
      {
        path: 'emphasis',
        name: 'area-emphasis',
        component: () =>
          import( /* webpackChunkName: "area-emphasis" */ '@/views/area/emphasis.vue'),

      },
    ]
  },

]