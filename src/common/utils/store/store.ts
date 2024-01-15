import Vuex from 'vuex'
import {Themes} from "@/common/theme/themes";

const store = new Vuex.Store({
    state: {
        skin: Themes.green
    },
    getters: {},
    mutations: {
        // 皮肤更换
        changeTheme(state, theme) {
            state.skin = theme;
        }
    }
})

export default store
