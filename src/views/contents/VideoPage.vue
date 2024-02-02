<template>
  <div>
    <!-- 第一个视频部分 -->
    <div class="video-container">
      <video controls muted autoplay loop>
        <source src="@/assets/videos/video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h2 class="video-title">视频标题1</h2>
      <div class="info-section">
        <p class="info-item">观看人数: 100,000</p>
        <p class="info-item">时长: 10:30</p>
      </div>
    </div>

    <!-- 第二个视频部分 -->
    <div class="video-container">
      <video controls muted autoplay loop>
        <source src="@/assets/videos/video2.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h2 class="video-title">视频标题2</h2>
      <div class="info-section">
        <p class="info-item">观看人数: 150,000</p>
        <p class="info-item">时长: 12:45</p>
      </div>
    </div>

    <!-- 第三个视频部分 -->
    <div class="video-container">
      <video controls muted autoplay loop>
        <source src="@/assets/videos/video3.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h2 class="video-title">视频标题3</h2>
      <div class="info-section">
        <p class="info-item">观看人数: 200,000</p>
        <p class="info-item">时长: 15:20</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  margin-bottom: 20px; /* 视频部分之间的间隔 */
}

video {
  width: 100%;
  height: auto;
}

.video-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 24px;
}

.info-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  text-align: right;
  display: flex;
  flex-direction: row; /* 观看人数和时长水平排列 */
}

.info-item {
  margin: 0;
  font-size: 14px;
  margin-right: 20px; /* 项目之间的间隔 */
}
</style>
