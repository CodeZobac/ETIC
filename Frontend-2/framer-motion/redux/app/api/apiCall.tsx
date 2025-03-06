import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products"

interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Adding CORS support
  withCredentials: false, // Set to true if API requires cookies/credentials
});

/**
 * Makes a POST request to the products API
 * @param data - Request payload
 * @param config - Optional axios config overrides
 */
export const createProduct = async <T = any>(
  data: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  // Ensure we're making a POST request directly to the base URL
  try {
    const response: AxiosResponse = await axiosInstance.post(
      '',  // Empty string to use the base URL
      data,
      {
        ...config,
        headers: {
          ...config?.headers,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // Adapt the response to our ApiResponse format
    return {
      data: response.data,
      success: response.status >= 200 && response.status < 300,
      message: 'Product created successfully'
    };
  } catch (error) {
    console.error('API Error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return {
        data: null as unknown as T,
        success: false,
        message: `Error: ${error.response.status} - ${error.response.statusText}`
      };
    }
    return {
      data: null as unknown as T,
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

/**
 * Fetches all products from the API
 * @param config - Optional axios config overrides
 */
export const getProducts = async <T = any>(
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      '',  // Empty string to use the base URL
      config
    );
    
    return {
      data: response.data,
      success: response.status >= 200 && response.status < 300,
      message: 'Products retrieved successfully'
    };
  } catch (error) {
    console.error('API Error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return {
        data: null as unknown as T,
        success: false,
        message: `Error: ${error.response.status} - ${error.response.statusText}`
      };
    }
    return {
      data: null as unknown as T,
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export const postRequest = async <T = any>(
  endpoint: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(
      endpoint,
      data,
      config
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as ApiResponse<T>;
    }
    return {
      data: null as unknown as T,
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

// Export the axios instance for direct use
export default axiosInstance;

