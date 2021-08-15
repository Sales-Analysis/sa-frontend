import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { FileUploadService } from 'services';

export function useFileUpload(): [(file: File) => Promise<AxiosResponse | void>, number] {
  const [progress, setProgress] = useState(0);

  const upload = (file: File) => {
    return FileUploadService.upload(file, (event) => {
      console.log(event);
      setProgress(Math.round((100 * event.loaded) / event.total));
    }).catch((error: Error) => {
      console.error(error.message);
    });
  };

  return [upload, progress];
}
