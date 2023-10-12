import {XuLyStatusApi} from './statusApi'

let apiStatusInstance: InstanceType<typeof XuLyStatusApi>;

export const useStatusApi = (): XuLyStatusApi => {
    if (!apiStatusInstance) {
        apiStatusInstance = new XuLyStatusApi();
    }
    return apiStatusInstance;
  };
  