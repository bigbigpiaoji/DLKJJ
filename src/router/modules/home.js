export default [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/test/index.vue'),
  },
]
