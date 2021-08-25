import React, { useCallback, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { File } from '@consta/uikit/File';
import { Text } from '@consta/uikit/Text';
import { useFileUpload } from 'hooks/useFileUpload';
import { NavButtons } from 'pages/AnalysisPage/NavButtons';
import { IErrors } from 'pages/AnalysisPage/types';
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
  const [errors, setErrors] = useState<IErrors>({});
  const { upload, progress } = useFileUpload();
  const { formatMessage } = useIntl();

  const onCatchError = (error: Error, file: File) => {
    setFiles([file]);
    setErrors((prevState) => ({
      ...prevState,
      [file.name]: error.message,
    }));
  };

  const onDeleteFile = (fileName: string) => {
    setFiles((prevState) => prevState.filter(({ name }) => name !== fileName));
    setErrors({});
  };

  const onFileUpload = useCallback(
    (file: File) => {
      return upload(file)
        .then((res) => {
          setFiles([file]);
        })
        .catch((err) => onCatchError(err, file));
    },
    [upload]
  );

  const canCalculate = !!files.length && !errors.length;

  return (
    <Page bottomComponent={<NavButtons canCalculate={canCalculate} />}>
      <div className={styles.root}>
        <Text size={'4xl'} weight={'bold'}>
          {formatMessage(messages.title)}
        </Text>
        <FirstStep uploadLimit={UPLOAD_LIMIT}>
          <UploadZone
            files={files}
            errors={errors}
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
