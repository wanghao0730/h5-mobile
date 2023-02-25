export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      },
      {
        path: 'category',
        component: () => import('/@/views/category/index.vue'),
        meta: {
          title: 'tabbar.category',
          keepAlive: false,
        },
      },
      {
        path: 'car',
        component: () => import('/@/views/car/index.vue'),
        meta: {
          title: 'tabbar.car',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('/@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
];

export default routes;
