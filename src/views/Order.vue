<template>
    <TopNavigation/>
    <van-row>
        <van-cell v-for="item in orderList" :key="item">
            <van-col span="24">
                <CellList :data="item"/>
            </van-col>
        </van-cell>
    </van-row>
</template>
<script setup>
import TopNavigation from "@/components/TopNavigation.vue";
import CellList from "@/components/Cell.vue";
import {onMounted} from "vue";
import axios from "axios";
import {getCookie} from "@/util/cookie/Operation.js";
import {showNotify} from "vant";
/*
let store = {
    id: null,
    sort: null,
    name: null,
    price: null,
    discount: null,
    number: null,
    createdDate: null,
    updateDate: null,
    num: null,
    url: null,
    thumbnailUrl: null,
    imgKey: null
}*/

let orderList = {
    null: {
        id: null,
        createdDate: null,
        updatedDate: null,
        storeListJson: null,
        amount: null,
        storeList: null,
        type: null,
        code: null,
        tabNum: null
    }
}


function getOrder(){
    axios.create({
        headers :{
            "Authorization" : getCookie("token")
        }
    }).get("/admin/order/show").then(res =>{
        if(res.data.success){
            console.log(res.data)
            orderList = res.data.data;
        }else {
            showNotify({ type: 'primary', message: '发生错误：' + res.data.toString() });
        }
    }).catch(error =>{
        showNotify({ type: 'danger', message: '发生错误：' + error });
        console.log(error);
    })
}
onMounted(() =>{
    getOrder();
})
</script>