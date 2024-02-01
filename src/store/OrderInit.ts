import { defineStore } from "pinia";
import { reactive } from "vue";

// @ts-ignore
type OrderItem = Map<String,order>

interface order{
    id: number,
      createdDate: object,
      updatedDate: object,
      storeListJson: string
      amount: number,
      storeList: commodity[],
      type: string,
      code: string,
      tabNum: number
}

interface commodity{
    id: number,
    sort: string,
    name: string,
    price: number,
    discount: 1,
    number: number,
    createdDate: string,
    updateDat: object,
    num: number,
    url: string,
    thumbnailUrl: string,
    imgKey: string
}


export const useOrderStore = defineStore("orderData",() => {
    const state = reactive({
        OrderItem: []
    });
        
    
    const getOrderListOfString = 
    state.OrderItem || 
    JSON.parse(localStorage.getItem("orderList") as string) || 
    null
    

    function setOrderList(data :Object){
        state.OrderItem.unshift(data)
        saveOrderListToLocalStorage(state.OrderItem as OrderItem[])
    }

    const saveOrderListToLocalStorage = (orderList: OrderItem[]): void => {
        localStorage.setItem("orderList", JSON.stringify(orderList));
      };

    return {getOrderListOfString,setOrderList}
})