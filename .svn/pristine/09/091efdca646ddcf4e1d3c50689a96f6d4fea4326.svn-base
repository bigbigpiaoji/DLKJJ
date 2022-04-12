export default [
    //时间
    {
      path: '/time',
      name: 'time',
      component: () =>
        import( /* webpackChunkName: "time" */ '@/views/time/index.vue'),
      redirect: 'time/holiday-gdp',
      children: [
        // 假日经济
        {
          path: 'holiday-gdp',
          name: 'holiday-gdp',
          component: () =>
            import( /* webpackChunkName: "holidaygdp" */ '@/views/time/holiday-gdp.vue'),
        //   children: [

        //     {
        //       path: 'analysis',
        //       name: 'macro-gdp-analysis',
        //       component: () =>
        //         import( /* webpackChunkName: "macro-analysis" */ '@/views/macro/analysis.vue'),
        //     },
        //   ]
        }
      ]
    },
  
  ]