let Layout = () => import('@/layout/index.vue')

const demoRouter = {
  path: '',
  name: "demo",
  component: Layout,
  meta: {
      title: "Demo",
  },
  children: [
    {
      path: '/demo/1',
      name: 'Demo1',
      component: () => import('@/views/demo/demo1.vue'),
      meta: {
        title: 'Demo1',
      },
    }
  ],
}

export default demoRouter
