import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';
import { Button } from '@consta/uikit/Button';
import { IconDownload } from '@consta/uikit/IconDownload';
import { Pagination } from '@consta/uikit/Pagination';
import { Table } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import { loader } from 'graphql.macro';
import { Maybe, TQuery, TRow } from 'types/structures';
import { Page } from 'components/Page';
import { columns } from './data';
import { NavButtons } from './NavButtons';
import { ITableRow } from './types';

import './table.css';
import styles from './Report.module.css';

const getReportQuery = loader('./getReportQuery.graphql');

const messages = defineMessages({
  title: {
    id: 'pages.report.title',
    defaultMessage: 'Отчет по ABC анализу',
  },
  description: {
    id: 'pages.report.description',
    defaultMessage: `Товары разделены по группам по степени их значимости.
      Группа А — самые рентабельные товары, группа B менее рентабельная и
      С самая не рентабельная.`,
  },
  subtitle: {
    id: 'pages.report.subtitle',
    defaultMessage: 'ABC по группам',
  },
  downloadButton: {
    id: 'pages.report.button.download',
    defaultMessage: 'Скачать отчет',
  },
});

function isReportRow(element: Maybe<TRow>): element is ITableRow {
  return element !== null;
}

export const Report: React.FC = () => {
  const { formatMessage } = useIntl();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const { data, loading } = useQuery<TQuery>(getReportQuery);

  const rows = useMemo<ITableRow[]>(
    () => data?.getReports.filter(isReportRow) || [],
    [data]
  );

  const totalPages = 10;

  const hotKeys = {
    prevPage: {
      label: '← Shift',
      values: ['Shift', 'ArrowLeft'],
    },
    nextPage: {
      label: 'Shift →',
      values: ['Shift', 'ArrowRight'],
    },
  };

  const handleChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <Page bottomComponent={<NavButtons />}>
      <div className={styles.TitleContainer}>
        <Text size={'4xl'} weight={'bold'} className={styles.Title}>
          {formatMessage(messages.title)}
        </Text>
        <Text view={'ghost'}>{formatMessage(messages.description)}</Text>
      </div>
      <div className={styles.SubtitleContainer}>
        <Text weight={'bold'}>{formatMessage(messages.subtitle)}</Text>
        <Button label={formatMessage(messages.downloadButton)} iconLeft={IconDownload} />
      </div>
      <Table<ITableRow>
        columns={columns}
        rows={rows}
        lazyLoad={{ maxVisibleRows: 20 }}
        borderBetweenRows
        stickyHeader
      />
      <Pagination
        form="brick"
        currentPage={currentPage}
        onChange={handleChange}
        totalPages={totalPages}
        hotkeys={hotKeys}
      />
    </Page>
  );
};
