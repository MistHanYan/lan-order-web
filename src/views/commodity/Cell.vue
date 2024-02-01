<template>
        <div v-for="(value,key) in commodity" :key="key">
                <Card :commodity="value"/>
        </div>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
//import { makeArrayProp } from "vant/lib/utils";

let orderList = defineProps(["commodity"])
</script>

<style scoped>

</style>