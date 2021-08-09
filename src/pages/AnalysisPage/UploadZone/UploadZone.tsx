import React, { Dispatch, SetStateAction } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attach } from '@consta/uikit/Attach';
import { Button } from '@consta/uikit/Button';
import { DragNDropField } from '@consta/uikit/DragNDropField';
import { Text } from '@consta/uikit/Text';

import styles from './UploadZone.module.css';

const messages = defineMessages({
  description: {
    id: 'pages.analysis.filezone.title',
    defaultMessage: 'Загрузите файл простым переносом или нажмите для выбора файла',
  },
  button: {
    id: 'pages.analysis.dnd.button',
    defaultMessage: 'Выбрать файл',
  },
});

interface IProps {
  files: File[];
  onUpload: Dispatch<SetStateAction<File[]>>;
}

export const UploadZone: React.FC<IProps> = ({ files, onUpload }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <DragNDropField onDropFiles={onUpload}>
        {({ openFileDialog }) => (
          <>
            <Text>{formatMessage(messages.description)}</Text>
            <Button
              className={styles.Button}
              onClick={openFileDialog}
              view={'secondary'}
              label={formatMessage(messages.button)}
            />
          </>
        )}
      </DragNDropField>
      {files.map((file) => (
        <Attach
          key={file.name}
          fileName={file.name}
          fileExtension={file.name.match(/\.(?!.*\.)(\w*)/)?.[1]}
          fileDescription={file.type}
        />
      ))}
    </div>
  );
};
