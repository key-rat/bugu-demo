// import type { AppRouteRecordRaw } from './types'
import { NotFound, RedirectName, RootLayout } from './constant'
import type { RouteRecordRaw } from 'vue-router'

// 404 on a page
export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',  // 捕获所有未匹配的路径
  name: 'NotFound',
  component: NotFound,       // 404 页面组件
}

export const RedirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: RedirectName,
  component: RootLayout,
  meta: {
    title: RedirectName,
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/index.tsx'),
    },
  ],
}
