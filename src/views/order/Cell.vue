<template>
    <van-row>
        <van-cell v-for="(value,key) in data[0]" :key="key">
            <van-col span="24">
                <Card :order="value"/>
            </van-col>
        </van-cell>
    </van-row>
</template>

<script setup lang="ts">
import Card from "../views/order/Card.vue";
//import { makeArrayProp } from "vant/lib/utils";

let orderList = defineProps(["data"])

//const orderData = mapToObject(orderList)
// function mapToObject(map){
//   const obj = [];
//   let i = 0;
//     map.array.forEach(element => {
//         obj[i] = element;
//         i++;
//     });
// }
//let data = reactive(orderList)
</script>

<style scoped>

</style>