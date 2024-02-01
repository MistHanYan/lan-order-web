<template>
    <TopNavigation/>
    <van-pull-refresh 
    v-model="refreshing" 
    success-text="刷新成功"
    @refresh="onRefresh">
        <div class="container">
            <van-list
                :finished="finished"
                v-model:loading="loading"
                finished-text="没有更多订单了"
                @load="onLoad">
                <Cell :data="orderList"/>
            </van-list> </div>
    </van-pull-refresh>

</template>
<script setup>
import TopNavigation from "@/views/order/TopNavigation.vue";
import Cell from "@/views/order/Cell.vue";
import {getOrder} from "@/hooks/Refresh.ts";
import {onMounted, reactive, ref} from "vue";

// 列表状态
const loading = ref(false);

// 数据状态
const finished = ref(true);

// 下滑状态
const refreshing = ref(false);

// 订单数据
let orderList = reactive(null)

// 刷新列表数据
const onLoad = async () => {
        if (refreshing.value) {
            orderList = await getOrder();
            refreshing.value = false;
        }
        loading.value = false;
};

// 下滑
const onRefresh = async() => {
    // 清空列表数据
    finished.value = false;
    
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};

// 初始化数据
 onMounted(async () => {
    
}) 

</script>
<style>
.container {
    height: 90vh;
    overflow: auto;
}
</style>