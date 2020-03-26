import { CloudFlowService, CloudFlowServiceOptions } from '@cloud-flow/sdk';
import { initiateClient } from './init';



const options: CloudFlowServiceOptions = {
  // Cloud-Flow 云服务提供商网址
  host: 'https://mrsongshu.com/cloud-flow/',

  // 工程的 API Key, 在 Cloud Flow 工程面板可以查看
  apiKey: '<YOUR_API_KEY>'
}




const _client: CloudFlowService = new CloudFlowService(options);
initiateClient(_client);




export const client: CloudFlowService = _client;