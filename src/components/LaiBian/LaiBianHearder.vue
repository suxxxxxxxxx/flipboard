<template>
    <div class="hearder" @click="goInformation">
        <img src="https://img0.baidu.com/it/u=3979949991,2513156939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <div class="name">
            <h1>CC.</h1>
            <span>推新知，达新奇，到新度</span>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goInformation = () => {
    router.push({path: '/information'})
}
</script>

<style lang="less" scoped>
.hearder{
    display: flex;
    img{
        width: 3rem;
        height: 3rem;
        padding: 1rem 1rem 0 1rem;
    }
    .name{
        padding-top: 1rem;
        h1{
            padding-top: 0.5rem;
            font-size: small;
            font-weight: 600;
        }
        span{
            display: block;
            padding-top: 0.5rem;
            font-size: small;
        }
    }
}
</style>