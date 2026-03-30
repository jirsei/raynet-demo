export default interface ApiResponse<T> {
  success: string; // could also be boolean if you prefer
  totalCount?: number;
  data: T[];
}
