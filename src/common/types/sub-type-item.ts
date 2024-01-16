import type {GoodsItem} from "@/common/types/goods-item";
import type {PageResult} from "@/common/types/page-result";

/** 热门推荐-子类选项 */
export type SubTypeItem = {
    /** 子类id */
    id: string
    /** 子类标题 */
    title: string
    /** 子类对应的商品集合 */
    goodsItems: PageResult<GoodsItem>
}