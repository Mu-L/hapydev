import { useEffect } from 'react';
import { isElectron } from '@utils/is';
import { isUndefined } from 'lodash';
import useHttpProxy from './useHttp';
import useWebSocketProxy from './useWebsocket';
import useSocketIOProxy from './useSocketIO';
import useGrpcProxy from './useGrpc';
import useTestingProxy from './useTesting';

const useProxys = () => {
  useHttpProxy();
  useWebSocketProxy();
  useSocketIOProxy();
  useGrpcProxy();
  useTestingProxy();

  // 代理初始化
  useEffect(() => {
    if (!isElectron()) {
      if (isUndefined(window.cloud_proxy)) {
        window.cloud_proxy = window.io(import.meta.env.VITE_CLOUD_PROXY_URL, {
          reconnectionDelayMax: 30000,
        });
      }
      return () => {
        window.cloud_proxy.close();
        window.cloud_proxy.destroy();
      };
    }
  }, []);
};

export default useProxys;