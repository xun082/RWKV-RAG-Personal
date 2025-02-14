import axiosInstance from "@/utils/axiosInstance";
import qs from "qs";

export const getRecallInfo = async (params: any = {}) => {
  try {
    const response = await axiosInstance.get(
      `/knowledgebase/search_history_detail?${qs.stringify(params)}`
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch knowledge list:', error);
    throw error;
  }
};
