export interface PaginationQuery {
  page: number;
  limit: number;
}

export interface PaginationResponse<T = any> {
  prev: string | null;
  next: string | null;
  count: number;
  total: number;
  result: T[];
}
