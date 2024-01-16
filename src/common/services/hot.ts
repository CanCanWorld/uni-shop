import type {PageParams} from "@/common/types/page-params";
import {http_get} from "@/common/utils/network/http";
import type {HotResult} from "@/common/types/hot-result";

export const getHotRecommendApi = (url: string, data?: PageParams & { subType?: string }) => {
    return http_get<HotResult>({
        url,
        data
    })
}