<template>
    <div v-for="(value,key) in data" :key="key">
        <van-row>
            <van-col span="24">
                <Card :order="value"/>
            </van-col>
        </van-row>
    </div>
</template>

<script setup>
import Card from "./Card.vue";

const orderList = defineProps(["data"])
</script>

<style scoped>

</style>