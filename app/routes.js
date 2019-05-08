/*
 * @Author: hy 
 * @Date: 2019-05-08 09:43:23 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 09:44:28
 */

// 路由
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import FormPage from '@pages/FormPage'
import DynamicRoutePage from '@pages/DynamicRoutePage'
import NotFoundPage from '@pages/NotFoundPage'
import PanelLeftPage from '@pages/PanelLeftPage'
import PanelRightPage from '@pages/PanelRightPage'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
]