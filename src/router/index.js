import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LogIn from "@/views/LogIn.vue";
import Other from "@/views/Other.vue";
import Order from "@/views/Order.vue";
import Commodity from "@/views/Commodity.vue";
import Record from "@/views/Record.vue";

const routes = [
    // {path: "", name: "default", redirect: "/LogIn"},
    {
        path: "/",
        component: LogIn
    },
    {
        path: "/home-page",
        component: HomePage,
        children: [
            {
                path: "",
                name: "order",
                component: Order
            },
            {
                path: "/commodity",
                name: "commodity",
                component: Commodity
            },
            {
                path: "/record",
                name: "record",
                component: Record
            },
            {
                path: "/other",
                name: "other",
                component: Other
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
