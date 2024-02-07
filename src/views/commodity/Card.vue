<template>
    <van-swipe-cell>
        <van-card
            :num= "'销量：'+commodity.number"
            :price = "'售价：'+commodity.discount*commodity.price"
            :desc= "'分类：'+commodity.sort"
            :title = commodity.name
            :thumb = commodity.thumbnailUrl
            :origin-price = "'原价：'+commodity.price"
            @click="enter">
        <template #tags>
            <van-tag plain type="primary">上架时间：{{ commodity.createdDate }}</van-tag>
        </template>
    </van-card>
    <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
</template>

<script setup>
const data = defineProps(["commodity"])

const enter = () =>{
    //show.value = true;
}
</script>

<style scoped>
  .goods-card {
    margin: 0;
  }

  .delete-button {
    height: 100%;
  }
</style>