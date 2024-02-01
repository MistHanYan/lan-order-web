<template>
    <div style="width: 100%; height: 100%">
        <router-view></router-view>
    </div>

    <van-tabbar
            :v-model="active"
            :placeholder="true">
        <van-tabbar-item
                name="order"
                icon="todo-list-o"
                replace to="/order">订单
        </van-tabbar-item>
        <van-tabbar-item
                name="commodity"
                icon="shop-o"
                replace to="/commodity">商品
        </van-tabbar-item>
        <van-tabbar-item
                name="record"
                icon="records-o"
                replace to="/record">进货记录
        </van-tabbar-item>
        <van-tabbar-item
                name="other"
                icon="apps-o"
                replace to="/other">更多
        </van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import {ref} from "vue";

const active = ref('order');
</script>
