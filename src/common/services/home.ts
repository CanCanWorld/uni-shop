import {http} from "@/common/utils/network/http";
import {Api} from "@/common/utils/network/api";
import type {BannerItem} from "@/common/types/banner-item";

/**
 * 首页-广告区域
 * @param distributionSite
 */
export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: Api.homeBanner,
        data: {
            distributionSite,
        }
    })
}