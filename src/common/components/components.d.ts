import CustomSwiper from "@/common/components/CustomSwiper.vue";
import CustomGuess from "@/common/components/CustomGuess.vue";
import MainBox from "@/common/components/MainBox.vue";

declare module 'vue' {
    export interface GlobalComponents {
        CustomSwiper: typeof CustomSwiper
        CustomGuess: typeof CustomGuess
        MainBox: typeof MainBox
    }
}

export type CustomGuessInstance = InstanceType<typeof CustomGuess>
export type MainBoxInstance = InstanceType<typeof MainBox>
