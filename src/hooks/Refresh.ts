import axios from "axios";
import {getCookie} from "@/util/cookie/Operation.js";
import {showNotify} from "vant";
//import { useOrderStore } from "@/store/OrderInit";
import { useCommodityStore } from "@/store/StoreInit";


const token = "Authorization";

const getOrderListPath = "/admin/order/list";

const getOrderByTabNumPath = "/admin/order";

const getStoreListInOrderPath = "/admin/order/store/list";

const updateOrderPath = "/admin/order/update";

const getStoreForLimitPath = "/admin/store/limit";

const getAllStoreListPath = "/admin/store/list";

const getStoreByIdPath = "/admin/store";

const deleteStoreInTablePath = "/admin/store/delete";

const updateStoreInTablePath = "/admin/store/update";

const seekStoreInTablePath = "/admin/store/seek";

const addStoreInTablePath = "/admin/store/insert";

const addRecordPath = "/admin/record/add";

const updateRecordPath = "/admin/record/update";

const deleteRecordPath = "/admin/record/delete";

const getRecordPath = "/admin/record/show";



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
                    //const store: any = useOrderStore();
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



export async function getOrderById(tabNum:number) {
    
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
