<template>
    <van-row>
        <van-col span="24">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                @click="enter"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
                <template #tags>
                    <van-tag plain type="primary">标签</van-tag>
                    <van-tag plain type="primary">标签</van-tag>
                </template>
                <template #footer v-if="buttonShow">
                    <van-button size="small">按钮</van-button>
                </template>
            </van-card>
        </van-col>
    </van-row>

</template>

<script setup>
const data = defineProps(["data"]);
const buttonShow = true;
const enter = () =>{
    console.log("点击了卡片")
}
</script>

<style scoped>

</style>