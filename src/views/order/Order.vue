<template>
    <TopNavigation/>
    <van-row>
        <van-col span="24">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
                <Cell :data="orderList"/>
            </van-list>
        </van-col>
    </van-row>
</template>
<script setup>
import TopNavigation from "@/components/TopNavigation.vue";
import Cell from "@/components/Cell.vue";
import { getOrder } from "@/hooks/Refresh.ts";
import { onMounted } from "vue";
import { useOrderStore } from "@/store/OrderInit.ts"
//import { storeToRefs } from "pinia";
//import { reactive } from "vue";

const store = useOrderStore();

let orderList = store.getOrderListOfString



onMounted(async () => {
    try {
         // Wait for the getOrder function to complete and get the response data
        orderList = await getOrder();
        // Assign the response data to the orderList variable
    } catch (error) {
        console.log(error)
    }
}
);

</script>