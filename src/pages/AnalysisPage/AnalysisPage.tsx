import React, { useCallback } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { useFileUpload } from 'hooks/useFileUpload';
import { Page } from 'components/Page';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';
import { UploadZone } from './UploadZone';

import styles from './AnalysisPage.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.analysis.title',
    defaultMessage: 'ABC анализ продаж',
  },
});

const UPLOAD_LIMIT = Number(process.env.REACT_APP_UPLOAD_FILESIZE) || 100;

export const AnalysisPage: React.FC = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [upload, progress] = useFileUpload();
  const { formatMessage } = useIntl();

  const onDeleteFile = (fileName: string) => {
    setFiles((prevState) => prevState.filter(({ name }) => name !== fileName));
  };

  const onFileUpload = useCallback(
    (file: File) => {
      upload(file).then((res) => {
        console.log(res);
      });
    },
    [upload]
  );

  return (
    <Page>
      <div className={styles.root}>
        <Text size={'4xl'} weight={'bold'}>
          {formatMessage(messages.title)}
        </Text>
        <FirstStep uploadLimit={UPLOAD_LIMIT}>
          <UploadZone
            files={files}
            uploadProgress={progress}
            onUpload={onFileUpload}
            onDeleteFile={onDeleteFile}
            uploadLimit={UPLOAD_LIMIT}
          />
        </FirstStep>
        <SecondStep />
      </div>
    </Page>
  );
};
