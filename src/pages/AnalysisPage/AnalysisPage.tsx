import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
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

export const AnalysisPage: React.FC = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <Text size={'4xl'}>{formatMessage(messages.title)}</Text>
      <FirstStep>
        <UploadZone files={files} onUpload={setFiles} />
      </FirstStep>
      <SecondStep />
    </div>
  );
};
