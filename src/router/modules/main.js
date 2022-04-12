export default [{
    path: '/main',
    name: 'main',
    component: () =>
      import( /* webpackChunkName: "main" */ '@/views/main/main.vue'),
  },

]