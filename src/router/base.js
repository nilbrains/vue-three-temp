let Layout = () => import('@/layout/index.vue')

export const NotFoundPage = {
  path: '/:path(.*)*',
  name: 'NotFoundPage',
  hidden: true,
  component: () => import('@/views/base/404.vue'),
  meta: {
    title: '',
  },
}

export const RootRoute = {
  path: '',
  name: 'Root',
  component: Layout,
  redirect: '/home',
  meta: {
    title: 'Root',
  },
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
}
