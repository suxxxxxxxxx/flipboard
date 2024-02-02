<template>
  <div class="footer">
    <div class="footer-lists">
      <ul>
        <li v-for="v in navData" :key="v.path">
          <!-- 添加 .router-link-active 类 -->
          <RouterLink :to="v.path" :class="{ 'router-link-active': isRouteActive(v.path) }" @click="handleClick(v.path)">
            <i class="iconfont" :class="v.icon"></i>
            <span :class="{ 'active-text': isRouteActive(v.path) }">{{ v.title }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { navData } from '@/utils/common';
import { RouterLink } from 'vue-router';

const activeRoute = ref('');

function isRouteActive(path) {
  return activeRoute.value === path;
}

function handleClick(path) {
  activeRoute.value = path;
}
</script>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0; /* 添加这一行来消除可能的外边距 */
}

.footer-lists {
  padding-top: 10px; /* 添加内边距 */
}

.footer-lists ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.footer-lists li {
  flex: 1;
  margin: 0 15px;
  position: relative; /* 添加相对定位 */
}

.iconfont {
  font-size: 20px;
  margin-bottom: 5px;
  text-decoration: none; /* 去掉文字下划线 */
}

span {
  display: block;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.active-text {
  color: red;
}

/* 添加路由链接的下划线 */
.router-link-active {
  position: relative; /* 添加相对定位 */
  color: red;
}

.router-link-active::after {
  content: "";
  display: block;
  height: 1px;
  background-color: red;
  position: absolute;
  bottom: 0; /* 将 bottom 设置为 0 */
  left: 0;
  right: 0;
  /* 可以根据需要调整下划线的样式和位置 */
}
</style>
