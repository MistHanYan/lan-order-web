import { defineStore } from "pinia";
import { reactive } from "vue";

// interface commodity{
//     id: number,
//     sort: string,
//     name: string,
//     price: number,
//     discount: 1,
//     number: number,
//     createdDate: string,
//     updateDat: object,
//     num: number,
//     url: string,
//     thumbnailUrl: string,
//     imgKey: string
// }

// interface store {
//     commodityList: commodity[]
// }

type store = []



export const useCommodityStore = defineStore("commodityData",() => {
    const state = reactive({
        store: []
    });
        
    
    const getCommodityListOfString = 
    state.store || 
    JSON.parse(localStorage.getItem("commodityList") as string) || 
    null
    

    function setCommodityList(data :Object){
        state.store.unshift(data)
        saveCommodityListToLocalStorage(state.store as store[])
    }

    const saveCommodityListToLocalStorage = (commodityList: store[]): void => {
        localStorage.setItem("commodityList", JSON.stringify(commodityList));
      };

    return {getCommodityListOfString,setCommodityList}
})