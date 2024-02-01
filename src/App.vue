<script setup>
import {check} from "@/util/websoket/Connection.js"
import {onMounted} from "vue";
import router from "@/router/index.js";

onMounted(async () => {
    try {
        if (await check()) {
            router.push({ path: "/home-page" });
        }else {
            router.push({path: "/"})
        }
    } catch (error) {
        router.push({path: "/"})
        console.error(error);
    }
});
</script>

<template>
    <div class="page">
        <router-view></router-view>
    </div>

</template>
<style>
@import "./assets/index.css";
</style>

