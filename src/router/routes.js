/*
 * @Author: abc
 * @Date: 2020-11-06 10:47:41
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 12:22:06
 * @Description:页面路由
 */
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/index.vue'),
    meta: {
      key: '1',
      title: '首页',
      icon: 'home',
      requireAuth: true,
      roles: ['admin', 'user', 'creator']
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: () =>
      import(/* webpackChunkName: "table" */ '../views/table/index.vue'),
    meta: {
      key: '2',
      title: '表格管理',
      icon: 'table',
      requireAuth: true,
      roles: ['user']
    },
    children: [
      {
        path: '/table/list',
        name: 'List',
        component: () =>
          import(/* webpackChunkName: "table" */ '../views/table/list.vue'),
        meta: {
          key: '2-1',
          title: '统计表格',
          icon: 'tablet',
          requireAuth: true,
          roles: ['user']
        }
      },
      {
        path: '/table/money',
        name: 'Money',
        component: () =>
          import(/* webpackChunkName: "table" */ '../views/table/money.vue'),
        meta: {
          key: '2-2',
          title: '财务表格',
          icon: 'money-collect',
          requireAuth: true,
          roles: ['user']
        }
      }
    ]
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: () =>
      import(/* webpackChunkName: "echarts" */ '../views/echarts/index.vue'),
    meta: {
      key: '3',
      title: '图表管理',
      icon: 'pie-chart',
      requireAuth: true,
      roles: ['admin', 'user', 'creator']
    },
    children: [
      {
        path: '/echarts/bar',
        name: 'Bar',
        component: () =>
          import(/* webpackChunkName: "echarts" */ '../views/echarts/bar.vue'),
        meta: {
          key: '3-1',
          title: '柱形图',
          icon: 'bar-chart',
          requireAuth: true,
          roles: ['admin', 'user', 'creator']
        }
      },
      {
        path: '/echarts/line',
        name: 'Line',
        component: () =>
          import(/* webpackChunkName: "echarts" */ '../views/echarts/line.vue'),
        meta: {
          key: '3-2',
          title: '折线图',
          icon: 'line-chart',
          requireAuth: true,
          roles: ['admin', 'creator']
        }
      },
      {
        path: '/echarts/map',
        name: 'Map',
        component: () =>
          import(/* webpackChunkName: "echarts" */ '../views/echarts/map.vue'),
        meta: {
          key: '3-3',
          title: '地图',
          icon: 'heat-map',
          requireAuth: true,
          roles: ['admin', 'creator']
        }
      }
    ]
  },
  {
    path: '/lang',
    name: 'Lang',
    component: () =>
      import(/* webpackChunkName: "lang" */ '../views/lang/index.vue'),
    meta: {
      key: '4',
      title: '多语言',
      icon: 'medium',
      requireAuth: true,
      roles: ['admin', 'user']
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
    meta: {
      key: '5',
      title: '关于我们',
      icon: 'apple',
      requireAuth: true,
      roles: ['user', 'creator']
    }
  }
];
export default routes;
