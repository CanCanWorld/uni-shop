import CustomSwiper from "@/common/components/CustomSwiper.vue";

declare module 'vue' {
    export interface GlobalComponents {
        CustomSwiper: typeof CustomSwiper
    }
}