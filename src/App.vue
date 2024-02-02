<script setup>
import MainLayout from './views/MainLayout.vue';
</script>

<template>
  <div >
    <router-view />
    <MainLayout />
  </div>
</template>

<style>
.router-link-active {
    text-decoration: none;
    color: black
  }
  a{
    text-decoration: none;
    color: grey;
  }

</style>


