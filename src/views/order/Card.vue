<template>
        <van-swipe-cell>
    <van-card
            :num = order.num
            :price = order.amount
            desc="null"
            :title = order.tabNum
            @click="enter">
        <template #tags>
            <van-tag plain type="primary">{{ order.createdDate }}</van-tag>
        </template>
    </van-card>
    <template #right>
    <van-button square text="结束" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
</template>

<script setup>
//import {reactive} from "vue";

const data = defineProps(["order"])
//console.log(data)

// let order = reactive<order>({
//     num: data.num,
//     tabNum: data.tabNum,
//     amount: data.amount
// })
const enter = () =>{
    console.log("点击了卡片")
}

const end = () =>{
    console.log(data);
}
</script>
<style>
  .goods-card {
    margin: 0;
  }

  .delete-button {
    height: 100%;
  }
</style>