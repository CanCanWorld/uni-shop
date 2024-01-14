import CustomSwiper from "@/common/components/CustomSwiper.vue";
import CustomGuess from "@/common/components/CustomGuess.vue";

declare module 'vue' {
    export interface GlobalComponents {
        CustomSwiper: typeof CustomSwiper
        CustomGuess: typeof CustomGuess
    }
}

export type CustomGuessInstance = InstanceType<typeof CustomGuess>