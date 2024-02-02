<template>
  <div>
    <!-- 第一个部分，图片 -->
    <div class="image-container">
      <!-- 顶部图片 -->
      <img src="@/assets/content/顶部图片1.jpg" alt="顶部图片" class="image top-image">
    </div>

    <!-- 第二个部分，标题和作者1 -->
    <div class="text-container">
      <!-- 标题和作者 -->
      <div class="text-section">
        <h2 class="title">示例标题1</h2>
        <p class="author">作者1</p>
      </div>
    </div>

    <!-- 第三个部分，标题和作者2 -->
    <div class="text-container">
      <!-- 标题和作者 -->
      <div class="text-section">
        <h2 class="title">示例标题2</h2>
        <p class="author">作者2</p>
      </div>
    </div>

    <!-- 第四个部分，标题和作者3 -->
    <div class="text-container">
      <!-- 标题和作者 -->
      <div class="text-section">
        <h2 class="title">示例标题3</h2>
        <p class="author">作者3</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  /* 图片占据上半部分 */
  margin-bottom: 10px; /* 图片与下半部分的间隔 */
}

.top-image {
  width: 100%; /* 图片宽度占满容器 */
  height: auto; /* 高度自适应宽度，避免变形 */
  max-height: 200px; /* 图片最大高度 */
}

.text-container {
  /* 下半部分 */
  margin-bottom: 20px; /* 每个标题和作者部分之间的间隔 */
  display: flex;
  flex-direction: column;
}

.text-section {
  /* 标题和作者在同一行 */
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
}

.author {
  font-size: 14px;
  color: gray;
}
</style>
