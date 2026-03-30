import type ApiResponse from '@/types/apiResponse';
import { apiClient } from './axiosInstance';
import type Company from '@/types/company';

export const getCompanies = async (fulltext?: string): Promise<ApiResponse<Company>> => {
  const response = await apiClient.get<ApiResponse<Company>>(`/company/`, {
    params: fulltext ? { fulltext } : undefined,
  });
  return response.data;
};
