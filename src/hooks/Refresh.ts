import axios from "axios";
import {getCookie} from "@/util/cookie/Operation.js";
import {showNotify} from "vant";
import { useOrderStore } from "@/store/OrderInit";
import { useCommodityStore } from "@/store/StoreInit";

export async function getOrder() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        axios
            .create({
                headers: {
                    "Authorization": getCookie("token")
                }
            })
            .get("/admin/order/show")
            .then(res => {
                if (res.data.success) {
                    showNotify({ type: 'success', message: '数据更新成功：' + res.data.code.toString() });
                    const store: any = useOrderStore();
                    //store.setOrderList(res.data.data)
                    resolve(res.data.data); // Resolve the promise with the response data
                } else {
                    showNotify({ type: 'primary', message: '发生错误：' + res.data.toString() });
                    reject(res.data); // Reject the promise with the error message
                }
            })
            .catch(error => {
                showNotify({ type: 'danger', message: '发生错误：' + error });
                console.log(error);
                reject(error); // Reject the promise with the error message
            });
    });
}

export async function getStore() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        axios
            .create({
                headers: {
                    "Authorization": getCookie("token")
                }
            })
            .get("/admin/store/show")
            .then(res => {
                if (res.data.success) {
                    showNotify({ type: 'success', message: '数据更新成功：' + res.data.code.toString() });
                    const store: any = useCommodityStore();
                    store.setCommodityList(res.data.data)
                    resolve(res.data.data); // Resolve the promise with the response data
                } else {
                    showNotify({ type: 'primary', message: '发生错误：' + res.data.toString() });
                    reject(res.data); // Reject the promise with the error message
                }
            })
            .catch(error => {
                showNotify({ type: 'danger', message: '发生错误：' + error });
                console.log(error);
                reject(error); // Reject the promise with the error message
            });
    });
}
