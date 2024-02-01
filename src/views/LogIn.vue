<template>
        <div class="location">
            <div style="margin: auto">
                <van-row :gutter="[0,15]"
                         justify="center">
                    <van-col span="10">
                        <div style="font-size: 35px;text-align: center; font-weight: bold">
                            LanOrder
                        </div>
                    </van-col>
                    <van-col span="21">
                        <van-form @submit="onSubmit"
                                  show-error="show-error">
                            <van-cell-group inset>
                                <!-- 输入任意文本 -->
                                <van-field
                                    v-model="user_num"
                                    name="user_num"
                                    label="账号"
                                    label-width="2em"
                                    placeholder="用户名/邮箱"
                                    :rules="[{ required: true}]"/>
                                <!-- 输入密码 -->
                                <van-field
                                    v-model="passwd"
                                    type="password"
                                    name="passwd"
                                    label="密码"
                                    placeholder="密码"
                                    :rules="[{ required: true}]"
                                    label-width="2em"/>
                            </van-cell-group>
                            <van-row gutter="[0,15]" justify="center">
                                <van-col span="24">
                                    <div style="font-size: 2%;margin-left: 80%">
                                        <a>忘记密码</a>
                                    </div>
                                </van-col>
                                <van-col span="16">
                                    <div style="margin: 16px;">
                                        <van-button round block type="primary" native-type="submit">登录</van-button>
                                    </div>
                                </van-col>
                            </van-row>
                        </van-form>
                    </van-col>
                </van-row>
            </div>
        </div>
</template>
<script setup>
import {showNotify} from "vant";
import {setCookie} from "@/util/cookie/Operation.js";
import axios from "axios";
import {ref} from "vue";
import router from "@/router/index.js";

const user_num = ref('');
const passwd = ref('');

const onSubmit = (values) => {
    try {
        axios.create({headers: {"Content-Type" : "application/json"}})
            .post("/admin/login", JSON.stringify(values))
            .then(Result => {
                if (Result.data.success) {
                    setCookie("token", Result.data.data, 7);
                    setCookie("user_num", values['user_num'], 7);
                    router.push({path: "/home-page"});
                    showNotify({type: 'success', message: '登录成功'});
                } else {
                    showNotify({type: 'warning', message: '登录失败'});
                    router.push({path: "/"});
                }
            })
            .catch(error => {
                showNotify({type: 'warning', message: '登录异常'});
                router.push({path: "/"});
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
};
</script>