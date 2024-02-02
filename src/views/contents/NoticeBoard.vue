<template>
    <Hearder />
    <div class="Toggle-left">
        <span class="left">
            <router-link to="/laibian/notice-board">公告栏</router-link>
        </span>
        <span class="right">
            <router-link to="/laibian/hot">最热</router-link>
        </span>
    </div>

    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" duration="1000">
        <van-swipe-item>
            <img src="@/assets/img/图片1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/img/图片2.png" alt="">
        </van-swipe-item>
    </van-swipe>

    <ul>
        <li>
            <img src="@/assets/img/不服来辩.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/右脑特刊.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/today.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/5.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/6.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/7.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/8.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/9.png" alt="">
        </li>
        <li>
            <img src="@/assets/img/10.png" alt="">
        </li>

    </ul>

</template>

<script setup>
import Hearder from '@/components/LaiBian/LaiBianHearder.vue';
</script>

<style lang="less" scoped>
.Toggle-left{
    padding: 1rem 0 0.5rem 1rem;
    font-size: small;
    span{
        padding: 0 1rem 0 0;
    }
    a{
        text-decoration: none;
        color: #000;
        &.router-link-active{
            font-weight: 600;
            border-bottom: 3px solid #000;
        }
    }
}
.my-swipe {
    padding-top: 1rem;
    .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
ul{
    padding: 1.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    li{
        img{
            height: 100%;
            width: 100%;
            border-radius: 0.27rem;
        }
    }
}

.van-swipe{
    .van-swipe-item{
        height: 13rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>