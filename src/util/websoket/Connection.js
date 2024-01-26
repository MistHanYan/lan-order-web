import {getCookie} from "../cookie/Operation.js";
import {showNotify} from "vant";

function connectionHeader(){
    return new WebSocket(
        "ws://47.109.47.32:8080/admin/connection/" + getCookie("user_num"
        ));
}

export function connection(socket) {
    return new Promise((resolve, reject) => {
        socket.onopen = () => {
            // 连接已建立，可以发送数据
            showNotify({ type: 'primary', message: '正在验证' });
            resolve(true); // 连接成功，解决 Promise 并返回 true
        };

        socket.onmessage = (event) => {
            // 收到服务器发送的消息
            const response = JSON.parse(event.data);
            if (response === 'SUCCESS') {
                showNotify({ type: 'success', message: '登录成功' });
                resolve(true); // 登录成功，解决 Promise 并返回 true
            } else {
                showNotify({ type: 'danger', message: '令牌失效，请重新登录' });
                resolve(false); // 令牌失效，解决 Promise 并返回 false
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            showNotify({ type: 'warning', message: '服务器动态连接已经断开，将无法接收消息' });
            socket.close(); // 关闭连接
            reject(error); // WebSocket 错误，拒绝 Promise 并返回错误对象
        };
    });
}

export async function check() {
    if(getCookie("token") != null && getCookie("user_num") != null){
        try {
            const result =  await connection(connectionHeader());
            if (result) {
                showNotify({ type: 'success', message: '检查成功' });
                return true;
            } else {
                showNotify({ type: 'warning', message: '登录失效，请重新登录' });
                return false;
            }
        } catch (error) {
            console.log(error)
            showNotify({ type: 'danger', message: '发生错误：' + error });
            return false;
        }
    } else {
        showNotify({ type: 'danger', message: '未登录' });
        return false;
    }
}

