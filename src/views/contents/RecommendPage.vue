<template>
  <div>
    <!-- 推荐页面第一个部分 -->
    <div class="item-container">
      <!-- 上半部分的图片 -->
      <div class="top-image">
        <img src="@/assets/content/推荐1.jpg" alt="推荐图片" class="image top-image">
      </div>
    </div>

    <!-- 推荐页面第二部分 -->
    <div class="item-container">
      <!-- 下半部分的两张图片 -->
      <div class="bottom-half">
        <!-- 左侧图片 -->
        <div class="left-half">
          <img src="@/assets/content/推荐2.jpg" alt="推荐图片" class="image">
        </div>
        <!-- 右侧图片 -->
        <div class="right-half">
          <img src="@/assets/content/推荐3.jpg" alt="推荐图片" class="image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-container {
  margin-bottom: 20px; /* 项目之间的间隔 */
}

.top-image {
  /* 图片占据上半部分 */
  margin-bottom: 10px; /* 图片与下半分的间隔 */
}

.bottom-half {
  display: flex;
}

.left-half,
.right-half {
  flex: 1;
}

/* 设置第一张图片的高度 */
.top-image img {
  width: 100%; /* 图片宽度占满容器 */
  max-height:360px; /* 调整第一张图片的最大高度 */
}

.image {
  width: 100%; /* 图片宽度占满容器 */
  height: auto; /* 高度自适应宽度，避免变形 */
  max-height: 200px; /* 图片最大高度 */
}
</style>
