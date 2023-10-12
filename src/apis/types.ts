export interface IBaseSearchListQueryParams {
  timKiemNhanh?: string;
  page?: number;
  pageSize?: number;
  isFetchAll?: boolean;
}

export interface BasePagination<T = any> {
  items: T[];
  total: number;
}

export enum Domain {
  ITEM = "/ITEM",
}

export interface BaseInfo {
  statusResponse: Boolean;
  messageResponse: String;
}
