<template>
  <view class="page">
    <CustomNavbar/>
    <CustomSwiper :list="bannerList"/>
    <CategoryPanel :list="categoryList"/>
    <HotPanel :list="hotList"/>
  </view>
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

const getHomeHotData = async ()=>{
  const res =  await getHomeHotApi()
  hotList.value = res.result
  console.log('getHomeHotData: ', res)
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
}
</style>
