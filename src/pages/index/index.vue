<template>
    <MainBox ref="mainRef">
        <CustomNavbar/>
        <scroll-view
                scroll-y
                @scrolltolower="onScrollToLower"
                class="scroll-view">
            <CustomSwiper :list="bannerList"/>
            <CategoryPanel :list="categoryList"/>
            <HotPanel :list="hotList"/>
            <CustomGuess ref="guessRef"/>
        </scroll-view>
    </MainBox>
</template>

<script setup lang="ts">

import {getHomeBannerApi, getHomeCategoryApi, getHomeHotApi} from "@/common/services/home";
import {onLoad} from "@dcloudio/uni-app";
import {ref} from "vue";
import type {BannerItem} from "@/common/types/banner-item";
import type {CategoryItem} from "@/common/types/category-item";
import CustomNavbar from "@/pages/index/components/CustomNavbar.vue";
import CategoryPanel from "@/pages/index/components/CategoryPanel.vue";
import HotPanel from "@/pages/index/components/HotPanel.vue";
import type {HotItem} from "@/common/types/hot-item";
import type {CustomGuessInstance, MainBoxInstance} from "@/common/components/components";

const mainRef = ref<MainBoxInstance>()
const guessRef = ref<CustomGuessInstance>()

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

const getHomeBannerData = async () => {
    const res = await getHomeBannerApi()
    bannerList.value = res.result
    console.log('getHomeBannerData: ', bannerList.value)
}

const getHomeCategoryData = async () => {
    const res = await getHomeCategoryApi()
    categoryList.value = res.result
    console.log('getHomeCategoryData: ', res)
}

const getHomeHotData = async () => {
    const res = await getHomeHotApi()
    hotList.value = res.result
    console.log('getHomeHotData: ', res)
}

const onScrollToLower = () => {
    console.log("滚动触底了")
    guessRef.value.getMore()
}

onLoad(() => {
    getHomeBannerData()
    getHomeCategoryData()
    getHomeHotData()
})

</script>


<style scoped lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  flex-direction: column;
}

.scroll-view {
  height: 100vh;
  padding-bottom: var(--window-bottom)
}
</style>
