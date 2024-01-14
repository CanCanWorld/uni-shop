import CustomNavbar from "@/common/components/CustomNavbar.vue";
import CustomSwiper from "@/common/components/CustomSwiper.vue";
import CategoryPanel from "@/common/components/CategoryPanel.vue";

declare module 'vue' {
    export interface GlobalComponents {
        CustomNavbar: typeof CustomNavbar
        CustomSwiper: typeof CustomSwiper
        CategoryPanel: typeof CategoryPanel
    }
}