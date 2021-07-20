import Vue from "vue";
import App from "./App.vue";
import "./plugins/element";
import "./plugins/eleForm";
import "./plugins/avue.js";
import router from "./router";
import axios, { AxiosInstance } from "axios";

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.$axios = axios;
declare module "vue/types/vue" {
    interface Vue {
        $axios: AxiosInstance;
    }
}
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
