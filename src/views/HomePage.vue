<template>
    <van-row>
        <van-col span="24">
            <router-view></router-view>
        </van-col>
            <van-tabbar
                v-model="active"
                @change="onChange">
                <van-tabbar-item
                    name="order"
                    icon="todo-list-o"
                    replace to="home-page">订单</van-tabbar-item>
                <van-tabbar-item
                    name="commodity"
                    icon="shop-o"
                    replace to="commodity">商品</van-tabbar-item>
                <van-tabbar-item
                    name="record"
                    icon="records-o"
                    replace to="record">进货记录</van-tabbar-item>
                <van-tabbar-item
                    name="other"
                    icon="apps-o"
                    replace to="other">更多</van-tabbar-item>
            </van-tabbar>
    </van-row>
</template>

<script setup>
import {ref} from "vue";

const active = ref(0);
</script>
