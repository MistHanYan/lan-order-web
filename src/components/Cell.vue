<template>
    <van-row>
        <van-col span="24">
            <van-card
                :num
                :price
                desc="null"
                :title
                @click="enter">
                <template #tags>
                    <van-tag plain type="primary">标签</van-tag>
                    <van-tag plain type="primary">标签</van-tag>
                </template>
                <template #footer>
                    <van-button size="small">{{ buttonName }}</van-button>
                </template>
            </van-card>
        </van-col>
    </van-row>

</template>

<script setup>
const order = defineProps(["item"]);

const orderData = order.item;

console.log(orderData)
//const tabNum = defineProps(["key"])

defineExpose({
    title: orderData.tabNum,
    price: orderData.amount,
    buttonShow: true,
    num: orderData.storeList.length,
    buttonName: "结束"
})
/*const orderData = {

}*/
const enter = () =>{
    console.log("点击了卡片")
}
</script>

<style scoped>

</style>