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
import router from "@/router/index.js";
import {ref} from "vue";
import {showNotify} from "vant";
import {setCookie} from "@/util/cookie/Operation.js";
import axios from "axios";

const user_num = ref('');
const passwd = ref('');

function logIn(values) {
    return new Promise((resolve, reject) => {
        axios.create({
            headers: {"Content-Type": "application/json"}
        }).post("/admin/login", JSON.stringify(values))
            .then(Result => {
                if (Result.data.success) {
                    setCookie("token", Result.data.data, 7);
                    setCookie("user_num", values['user_num'],7);
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch(error => {
            console.log(error);
            reject(error);
        });
    });
}

const onSubmit = async (values) => {
    console.log(values)
    try {
        const success = await logIn(values);
        if (success) {
            showNotify({ type: 'success', message: '登录成功' });
            await router.push({path: "/home-page"});
        } else {
            // 警告通知
            showNotify({ type: 'warning', message: '登录失败' });
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
};
</script>