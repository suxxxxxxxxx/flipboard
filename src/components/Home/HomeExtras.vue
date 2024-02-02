<template>
  <div>
    <!-- 第一个部分 -->
    <div class="item-container">
      <div class="top-half">
        <div class="avatar-section">
          <!-- 头像 -->
          <img src="@/assets/img/头像1.jpg" alt="头像" class="avatar">
        </div>
        <div class="info-section">
          <!-- 名字 -->
          <span class="name">张三</span>
          <!-- 时间 -->
          <span class="time">2小时前</span>
        </div>
      </div>

      <div class="bottom-half">
        <!-- 左侧部分 -->
        <div class="left-half">
          <!-- 图片 -->
          <img src="@/assets/content/内容1.jpg" alt="图片" class="image">
        </div>
        <!-- 右侧部分 -->
        <div class="right-half">
          <div class="text-section">
            <!-- 标题 -->
            <h2 class="title">示例标题</h2>
            <!-- 图标 -->
            <i class="iconfont icon-sandian"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 第二个部分 -->
    <div class="item-container">
      <div class="top-half">
        <div class="avatar-section">
          <!-- 头像 -->
          <img src="@/assets/img/头像2.jpg" alt="头像" class="avatar">
        </div>
        <div class="info-section">
          <!-- 名字 -->
          <span class="name">张三</span>
          <!-- 时间 -->
          <span class="time">3小时前</span>
        </div>
      </div>

      <div class="bottom-half">
        <!-- 左侧部分 -->
        <div class="left-half">
          <!-- 图片 -->
          <img src="@/assets/content/内容2.jpg" alt="图片" class="image">
        </div>
        <!-- 右侧部分 -->
        <div class="right-half">
          <div class="text-section">
            <!-- 标题 -->
            <h2 class="title">示例标题</h2>
            <!-- 图标 -->
            <i class="iconfont icon-sandian"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三个部分 -->
    <div class="item-container">
      <div class="top-half">
        <div class="avatar-section">
          <!-- 头像 -->
          <img src="@/assets/img/头像3.jpg" alt="头像" class="avatar">
        </div>
        <div class="info-section">
          <!-- 名字 -->
          <span class="name">张三</span>
          <!-- 时间 -->
          <span class="time">4小时前</span>
        </div>
      </div>

      <div class="bottom-half">
        <!-- 左侧部分 -->
        <div class="left-half">
          <!-- 图片 -->
          <img src="@/assets/content/内容3.jpg" alt="图片" class="image">
        </div>
        <!-- 右侧部分 -->
        <div class="right-half">
          <div class="text-section">
            <!-- 标题 -->
            <h2 class="title">示例标题</h2>
            <!-- 图标 -->
            <i class="iconfont icon-sandian"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-container {
  margin-bottom: 20px; /* 项目之间的间隔 */
}

.top-half {
  display: flex;
  align-items: center;
}

.avatar-section {
  margin-right: 10px; /* 头像与信息之间的间隔 */
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.info-section {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
}

.time {
  color: gray;
}

.bottom-half {
  display: flex;
  margin-top: 10px; /* 上半部分与下半部分的间隔 */
}

.left-half {
  flex: 1;
}

.right-half {
  flex: 1;
  margin-left: 10px; /* 左右部分的间隔 */
}

.image {
  width: 100%; /* 图片宽度占满左侧容器 */
  max-height: 200px; /* 图片最大高度 */
}

.text-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 文字底部对齐 */
  margin-bottom: 10px; /* 文字底部与右侧容器的间隔 */
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
}

.icon-sandian {
  font-size: 20px;
}
</style>
