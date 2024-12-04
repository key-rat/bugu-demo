import type { BuguRoutesData } from '@/dao'

export const RedirectName = 'Redirect'
export const NotFound = (): object => import('@/views/error/404/index.vue')
export const RootLayout = (): object => import('@/layout/RootLayout/index.vue')

export const rootChildren: Array<BuguRoutesData> = [
  {
    sort: 1,
    name: 'Home',
    path: '/',
    component: 'home', //   src/views/' + component + '/index.vue
    label: '首页',
    icon: 'House',
  },
]
