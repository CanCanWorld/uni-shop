<template>
  <view class="page">
    <CustomNavbar/>
    <CustomSwiper :list="bannerList"/>
    <CategoryPanel/>
  </view>
</template>

<script setup lang="ts">

import {getHomeBannerApi} from "@/common/services/home";
import {onLoad} from "@dcloudio/uni-app";
import {ref} from "vue";
import type {BannerItem} from "@/common/types/banner-item";

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
  console.log('bannerList: ', bannerList.value)
}

onLoad(() => {
  getHomeBannerData()
})

</script>


<style scoped lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
