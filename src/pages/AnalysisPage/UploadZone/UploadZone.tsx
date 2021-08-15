import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attach } from '@consta/uikit/Attach';
import { Button } from '@consta/uikit/Button';
import { DragNDropField } from '@consta/uikit/DragNDropField';
import { File } from '@consta/uikit/File';
import { IconTrash } from '@consta/uikit/IconTrash';
import { Text } from '@consta/uikit/Text';

import './Attach.css';
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
  buttonDelete: {
    id: 'pages.analysis.dnd.button.delete',
    defaultMessage: 'Удалить',
  },
});

const fileSizeToMb = (size: number) => {
  return (size / 1024 / 1024).toFixed(2);
};

interface IProps {
  files: File[];
  uploadProgress: number;
  onUpload: (file: File) => void;
  onDeleteFile: (fileName: string) => void;
  uploadLimit: number;
}

export const UploadZone: React.FC<IProps> = ({
  files,
  uploadProgress = 0,
  uploadLimit,
  onUpload,
  onDeleteFile,
}) => {
  const { formatMessage } = useIntl();

  const fileSize = useMemo(() => uploadLimit * 1024 * 1024, [uploadLimit]);

  return (
    <div className={styles.root}>
      {!files.length && (
        <div className={styles.DndZone}>
          <DragNDropField
            onDropFiles={(files) => {
              files[0] && onUpload(files[0]);
            }}
            maxSize={fileSize}
          >
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
        </div>
      )}
      {files.map((file) => (
        <Attach
          key={file.name}
          fileName={file.name}
          fileExtension={file.name.match(/\.(?!.*\.)(\w*)/)?.[1]}
          fileDescription={`${fileSizeToMb(file.size)} Мб`}
          loadingProgress={uploadProgress}
          buttonIcon={IconTrash}
          buttonTitle={formatMessage(messages.buttonDelete)}
          onClick={() => onDeleteFile(file.name)}
          onButtonClick={(e) => {
            e.stopPropagation();
            onDeleteFile(file.name);
          }}
          className={styles.Attach}
        />
      ))}
    </div>
  );
};
