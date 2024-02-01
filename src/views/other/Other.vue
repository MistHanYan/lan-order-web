<template>
    <TopNavigation/>
    <van-grid clickable :column-num="2" direction="horizontal" square="true">
  <van-grid-item icon="tab" text="桌号" to="/" />
  <van-grid-item icon="search" text="优惠" url="https://github.com" />
  <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
  <van-grid-item icon="about" text="关于" url="https://github.com" />
</van-grid>
</template>
<script setup lang="ts">
import TopNavigation from './TopNavigation.vue';
</script>