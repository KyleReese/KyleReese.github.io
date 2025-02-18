import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "./index.css"; // For Tailwind

const app = createApp(App);
app.use(router);
app.mount("#app");
