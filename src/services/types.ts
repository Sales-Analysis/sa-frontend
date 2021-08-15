import { AxiosResponse } from 'axios';

export interface IUploadService {
  upload: (data: File) => Promise<AxiosResponse>;
}

export interface IUploadEvent extends Event {
  loaded: unknown;
  total: unknown;
}
