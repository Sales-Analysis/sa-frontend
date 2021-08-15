import axios, { AxiosInstance, AxiosResponse } from 'axios';

const httpConnector: AxiosInstance = axios.create({});

function upload(
  file: File,
  onUploadProgress: (event: ProgressEvent) => void
): Promise<AxiosResponse> {
  const formData = new FormData();

  formData.append('file', file);

  return httpConnector.post('/upload', formData, {
    onUploadProgress,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
}

export { upload };
