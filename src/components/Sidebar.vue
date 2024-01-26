<template>
    <van-sidebar v-model="active">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-sidebar-item title="标签名称" />
        </van-list>
    </van-sidebar>
</template>

<script setup>
const data = defineProps(["data"]);
</script>

<style scoped>

</style>