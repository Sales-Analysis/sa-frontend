import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
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
  const { formatMessage } = useIntl();

  const onDeleteFile = (fileName: string) => {
    setFiles((prevState) => prevState.filter(({ name }) => name !== fileName));
  };

  return (
    <Page>
      <div className={styles.root}>
        <Text size={'4xl'} weight={'bold'}>
          {formatMessage(messages.title)}
        </Text>
        <FirstStep uploadLimit={UPLOAD_LIMIT}>
          <UploadZone
            files={files}
            onUpload={setFiles}
            onDeleteFile={onDeleteFile}
            uploadLimit={UPLOAD_LIMIT}
          />
        </FirstStep>
        <SecondStep />
      </div>
    </Page>
  );
};
