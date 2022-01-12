/* eslint-disable no-unused-vars */

export function createRouterGuards(router) {
    router.beforeEach(async (to, from, next) => {
      next()
    })

    router.afterEach((to, _, failure) => {
    })

    router.onError((error) => {
        console.log(error, '路由错误')
    })
}
