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

const data = defineProps(["order"])
 // const show = ref(false);
const enter = () =>{
    //show.value = true;
    console.log(data)
}

const end = () =>{
    console.log(data);
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