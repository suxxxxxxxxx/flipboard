<template>
    <div class="items">
        <span>{{ list }}</span>
        <i class="iconfont icon-youjiantou2"></i>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps(['list'])
// console.log(props.list);
</script>

<style scoped>
.items{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 25px;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    padding: 10px 10px;
}
</style>