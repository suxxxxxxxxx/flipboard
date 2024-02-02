<template>
  <div>
    <!-- Top Navigation -->
    <div class="top-nav">
      <!-- Left Section: 关注、推荐、深度、视频 -->
      <div class="left-section">
        <router-link to="/homepage/following" class="nav-item" :class="{ 'active-link': $route.path === '/homepage/following' }">关注</router-link>
        <router-link to="/homepage/recommend" class="nav-item" :class="{ 'active-link': $route.path === '/homepage/recommend' }">推荐</router-link>
        <router-link to="/homepage/depth" class="nav-item" :class="{ 'active-link': $route.path === '/homepage/depth' }">深度</router-link>
        <router-link to="/homepage/video" class="nav-item" :class="{ 'active-link': $route.path === '/homepage/video' }">视频</router-link>
      </div>

      <!-- Right Section: 两个图标 -->
      <div class="right-section">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-sanheng"></i>
      </div>
    </div>

    <!-- Main Content -->
    <!-- 这里添加首页的其他内容 -->

    <!-- 子页面内容 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.left-section {
  display: flex;
}

.nav-item {
  margin-right: 20px;
  /* 调整这个值以增加间隔 */
}

.right-section {
  display: flex;
}

.iconfont {
  font-size: 20px;
  margin-left: 10px;
}

.active-link {
  /* 下划线样式 */
  border-bottom: 2px solid red;  /* 可以根据需要调整颜色和样式 */
}

/* 可以根据需要添加其他样式 */
</style>
