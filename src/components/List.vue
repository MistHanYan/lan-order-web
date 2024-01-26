<template>
<!-- 可下拉，上滑刷新-->
    <van-pull-refresh
            v-model="isLoading"
            success-text="刷新成功"
            @refresh="onRefresh">
<!--        list -->
        <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
<!--           卡片 -->
            <Cell/>
        </van-list>
    </van-pull-refresh>
</template>

<script setup>
import Cell from "@/components/Cell.vue";
</script>

<style scoped>

</style>