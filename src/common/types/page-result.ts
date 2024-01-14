import type {GuessItem} from "@/common/types/guess-item";

export interface PageResult<T> {
    counts: number;
    pageSize: number;
    pages: number;
    page: number;
    items: T[];
}