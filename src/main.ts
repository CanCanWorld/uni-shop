import { createSSRApp } from "vue";
import App from "./App.vue";
import store from "@/common/utils/store/store";
export function createApp() {
  const app = createSSRApp(App);
  app.use(store)
  return {
    app,
  };
}
