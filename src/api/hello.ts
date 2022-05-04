import httpClient from '../utils/httpClient';

export interface HelloResponse {
  message: string;
}

const helloRequest = () => httpClient.get<HelloResponse>('/hello');

export default helloRequest;
