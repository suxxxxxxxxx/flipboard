<template>
    <div class="mine">
        <div class="mine-hd">
            <div class="mine-avatar">
                <img src="https://p26-passport.byteacctimg.com/img/user-avatar/6836faf9f43e8c77ef339218ab8b601b~130x130.awebp" alt="">
            </div>
            <div class="mine-name">
                心直口快的士力架
            </div>
            <div class="mine-record">
                <div class="item">
                    <div class="value">0</div>
                    <div class="description">引力值</div>
                </div>
                <div class="item">
                    <div class="value">0</div>
                    <div class="description">赞</div>
                </div>
                <div class="item">
                    <div class="value">0</div>
                    <div class="description">已读</div>
                </div>
                <div class="home">
                    <span>个人主页</span>
                    <i class="iconfont icon-youjiantou2"></i>
                </div>
            </div>
        </div>
        <div class="mine-bd">
            <ul>
                <li 
                v-for="(list, index) in lists" 
                :key="index"
                :class="{interval: index==1 || index==4}"
                >
                    <Item :list="list"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Item from '@/components/LoginView/LoginItem.vue'
let lists = ['消息通知', '原创图片打赏', '可持续生活商店', '媒体入驻', '设置', '帮助与反馈', '关于红板报']
</script>

<style scoped>
.mine{
    background-color: #F7F7F7;
    overflow: hidden;
    height: 620px;
}
.mine-avatar{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    height: 70px;
}
.mine-name{
    text-align: center;
    font-weight: 900;
    font-size: 20px;
    margin-top: 10px;
}
.mine-record{
    height: 45px;
    display: flex;
    margin: 10px 10px 0px;
}
.item{
    flex: 1;
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    padding-top: 4px;
    border-right: solid 1px #F7F7F7;
}
.home{
    flex: 1;
    background-color: black;
    margin-left: 10px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
    padding-left: 4px;
}
.mine-bd{
    margin-top: 25px;
}
.interval{
    margin-top: 10px;
}
</style>