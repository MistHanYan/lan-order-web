<template>
    <div style="width: 100%">
        <TopNavigation/>
    </div>
    <van-pull-refresh 
    v-model="refreshing" 
    success-text="刷新成功"
    @refresh="onRefresh">
    <div class="container">
            <van-list
                    v-model:loading="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad">
                <Cell :commodity="commodityList"/>
            </van-list> </div>
        </van-pull-refresh>

</template>
<script setup>
import Cell from "@/views/commodity/Cell.vue";
import {reactive, ref} from "vue";
import {getStore} from "@/hooks/Refresh.ts";
import TopNavigation from "@/views/commodity/TopNavigation.vue";

const loading = ref(false);
const finished = ref(true);
const refreshing = ref(false);
let commodityList = reactive(null);

const onLoad = async() => {
        if (refreshing.value) {
            commodityList = await getStore();
            refreshing.value = false;
        }
        loading.value = false;
};

const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};

</script>
<style>
.container {
    height: 90vh;
    overflow: auto;
}</style>