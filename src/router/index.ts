import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { ErrorPageRoute, RedirectRoute } from './base'
import { rootChildren } from './constant'
import RootLayout from '@/layout/RootLayout/index.vue'
import type { App } from 'vue'
import type { BuguRoutesData } from '@/dao'
import { _import } from '@/utils/tool'
import { createRouterGuards } from './routerGuards'
const generateRoutes = (routesData: Array<BuguRoutesData>): Array<RouteRecordRaw> => {
  const res = routesData
    .map((item) => {
      const { sort, name, path, label, icon, redirect, children } = item
      const meta = { sort, label, icon }
      const component = _import(item.component)
      let routeDate = { name, path, component, meta }
      if (redirect) {
        routeDate = Object.assign(routeDate, redirect)
      }
      if (children) {
        routeDate = Object.assign(routeDate, { children: generateRoutes(children) })
      }
      return routeDate
    })
    .sort((a, b) => {
      return a.meta.sort - b.meta.sort
    })
  return res
}

export const RootRoute: RouteRecordRaw = {
  path: '',
  name: 'Root',
  redirect: { name: 'Home' },
  component: RootLayout,
  meta: {
    title: 'Root',
  },
  children: [
    ...generateRoutes(rootChildren),
    RedirectRoute,
    ErrorPageRoute
  ]
}

//需要验证权限
// export const asyncRoutes = [...routeModuleList];

//普通路由 无需验证权限
export const constantRouter: RouteRecordRaw[] = [RootRoute]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})


export function setupRouter(app: App): void {
  app.use(router)

  // 创建路由守卫
  createRouterGuards(router)
}

export default router
