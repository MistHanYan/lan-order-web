<script setup>
import {check} from "@/util/websoket/Connection.js"
import {onMounted} from "vue";
import router from "@/router/index.js";

onMounted(async () => {
    try {
        if (await check()) {
            await router.push({ path: "/home-page" });
        }
    } catch (error) {
        await router.push({path: "/login"})
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

