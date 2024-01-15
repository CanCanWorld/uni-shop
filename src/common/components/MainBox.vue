<template>
    <div :style="theme">
        {{navTitle}}
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import store from "@/common/utils/store/store";
import {Themes} from "@/common/theme/themes";

const theme = computed(() => store.state.skin)
const isDark = ref(false)
const isCanGoBack = ref(false)
const navTitle = ref("")

const changeTheme = () => {
    if (isDark.value) {
        store.commit("changeTheme", Themes.green);
        isDark.value = false
    } else {
        store.commit("changeTheme", Themes.dark);
        isDark.value = true
    }
}

onMounted(() => {
    const currentPages = getCurrentPages()
    isCanGoBack.value = currentPages.length > 1
    const currentPage = currentPages[currentPages.length - 1]
    navTitle.value= currentPage.$vm.$page.meta.navigationBar.titleText
})

defineExpose({
    changeTheme
})
</script>


<style scoped lang="scss">
.text {
  color: var(--bg-color);
}
</style>
