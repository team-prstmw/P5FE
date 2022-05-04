import axios, { AxiosRequestConfig } from 'axios';

const httpClient = axios.create({
  baseURL: '/api',
});

httpClient.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export default httpClient as {
  get<Result>(url: string, config?: AxiosRequestConfig): Promise<Result>;
  delete<Result>(url: string, config?: AxiosRequestConfig): Promise<Result>;
  post<Data, Result>(url: string, data?: Data, config?: AxiosRequestConfig): Promise<Result>;
  put<Data, Result>(url: string, data?: Data, config?: AxiosRequestConfig): Promise<Result>;
  patch<Data, Result>(url: string, data?: Data, config?: AxiosRequestConfig): Promise<Result>;
};
