<script setup>
import { navData } from '@/utils/common';
import { RouterLink } from 'vue-router'; // Add the missing import statement
</script>
<template>
  <div class="footer">
      <div class="footer-lists">
        <ul>
          <li v-for="v in navData" :key="v.path">
              <RouterLink :to="v.path"> <!-- Replace router-link with RouterLink -->
              <i class="iconfont" :class="v.icon"></i>
              <span>{{ v.title }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
  </div>
</template>
<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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
}
</style>

