<template>
    <TopNavigation/>
    <van-row>
        <van-cell v-for="item in list" :key="item">
            <van-col span="24">
                <CellList :data="data"/>
            </van-col>
        </van-cell>
    </van-row>
</template>
<script setup>
import TopNavigation from "@/components/TopNavigation.vue";
import CellList from "@/components/Cell.vue";
const list = [1,2,3,4];
</script>