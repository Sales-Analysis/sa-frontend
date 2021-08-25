import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { FileUploadService } from 'services';

interface IUseFileUpload {
  upload: (file: File) => Promise<AxiosResponse | void>;
  progress: number;
}

export function useFileUpload(): IUseFileUpload {
  const [progress, setProgress] = useState(0);

  const upload = (file: File) => {
    return FileUploadService.upload(file, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    });
  };

  return { upload, progress };
}
