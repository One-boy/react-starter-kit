/**
 * 公共工具
 */

// 强制去登录页面，用于不能使用react-route-dom时的跳转
// 如服务都返回未登录或过期时，拦截器里的跳转
const toLoginPage = () => {
  sessionStorage.clear()
  location.hash = '#/login'
}

export {
  toLoginPage,
}