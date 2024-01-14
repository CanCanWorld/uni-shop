import {http_get} from "@/common/utils/network/http";
import {Api} from "@/common/utils/network/api";
import type {BannerItem} from "@/common/types/banner-item";
import type {CategoryItem} from "@/common/types/category-item";
import type {HotItem} from "@/common/types/hot-item";
import type {PageResult} from "@/common/types/page-result";
import type {GuessItem} from "@/common/types/guess-item";
import type {PageParams} from "@/common/types/page-params";

/**
 * 首页-广告区域
 * @param distributionSite
 */
export const getHomeBannerApi = (distributionSite = 1) => {
    return http_get<BannerItem[]>({
        url: Api.homeBanner,
        data: {
            distributionSite,
        }
    })
}

/**
 * 首页-前台分类
 */
export const getHomeCategoryApi = () => {
    return http_get<CategoryItem[]>({
        url: Api.homeCategoryMutli
    })
}

export const getHomeHotApi = () => {
    return http_get<HotItem[]>({
        url: Api.homeHotMutli
    })
}

export const getHomeGoodsGuessLikeApi = (data?: PageParams) => {
    return http_get<PageResult<GuessItem>>({
        url: Api.homeGoodsGuessLike,
        data
    })
}