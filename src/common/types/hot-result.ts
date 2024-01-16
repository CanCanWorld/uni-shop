import type {SubTypeItem} from "@/common/types/sub-type-item";

export type HotResult = {
    /** id信息 */
    id: string
    /** 活动图片 */
    bannerPicture: string
    /** 活动标题 */
    title: string
    /** 子类选项 */
    subTypes: SubTypeItem[]
}