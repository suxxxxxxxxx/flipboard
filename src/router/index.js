// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomePage from '../views/contents/HomePage.vue';
import FollowingPage from '../views/contents/FollowingPage.vue';
import LaiBian from '../views/contents/LaiBian.vue';
import ShuHua from '../views/contents/ShuHua.vue';
import LoginView from '../views/contents/LoginView.vue';

const routes = [
  {
    path: '/',
    redirect: '/homepage/following',
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
    redirect: '/homepage/following',
    children: [
      {
        path: 'following',
        name: 'following',
        component: FollowingPage,
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('../views/contents/RecommendPage.vue'),
      },
      {
        path: 'depth',
        name: 'depth',
        component: () => import('../views/contents/DepthPage.vue'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('../views/contents/VideoPage.vue'),
      },
    ],
  },
  {
    path: '/laibian',
    name: 'laibian',
    component: LaiBian,
    redirect: '/laibian/latest',  // 添加重定向
    children: [
      {
        path: 'notice-board',
        name: 'notice-board',
        component: () => import('../views/contents/NoticeBoard.vue'),
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import('../views/contents/LaiBianHot.vue'),
      },
      {
        path: 'latest',
        name: 'latest',
        component: () => import('../views/contents/LaiBianLatest.vue'),
      },
    ],
  },
  {
    path: '/shuhua',
    name: 'shuhua',
    component: ShuHua,
    redirect: '/shuhua/shuhuabook', // 添加重定向
    children: [
      {
        path: 'shuhuabook',
        name: 'shuhuabook',
        component: () => import('@/views/contents/ShuHuabook.vue'),
      },
    ],
  },
  {
    path: '/loginview',
    name: 'loginview',
    component: LoginView,
    redirect: '/loginview/loginviewmine',
    children: [
      {
        path: 'loginviewmine',
        name: 'loginviewmine',
        component: () => import('@/views/contents/LoginViewmine.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
