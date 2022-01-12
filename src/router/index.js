import { createRouter, createWebHashHistory } from 'vue-router'
import { NotFoundPage, RootRoute } from './base'
import { createRouterGuards } from './permission'

/**
 * @type { RouteRecordRaw[] } routeModuleList
 */
const routeModuleList = []

const modules = require.context('./modules', true, /^[^_]*\.js$/)

modules.keys().forEach((key) => {
  const mod = modules(key).default ?? {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0)
}

routeModuleList.sort(sortRoute)

//需要验证权限
export const asyncRoutes = [...routeModuleList]

//普通路由 无需验证权限
export const constantRouter = [RootRoute, ...asyncRoutes, NotFoundPage]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
