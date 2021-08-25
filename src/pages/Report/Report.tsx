import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';
import { Button } from '@consta/uikit/Button';
import { IconDownload } from '@consta/uikit/IconDownload';
import { Loader } from '@consta/uikit/Loader';
import { Pagination } from '@consta/uikit/Pagination';
import { Table } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import { loader } from 'graphql.macro';
import { StatsBar } from 'pages/Report/StatsBar';
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

const ROWS_PER_PAGE = 30;

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

  const visibleRows = useMemo<ITableRow[]>(() => {
    const start = currentPage * ROWS_PER_PAGE;

    return rows.slice(start, start + ROWS_PER_PAGE);
  }, [currentPage, rows]);

  const stats = useMemo(() => {
    return (
      data?.getReports.reduce((acc, report) => {
        const value = acc.has(report?.group) ? acc.get(report?.group) + 1 : 1;

        return acc.set(report?.group, value);
      }, new Map()) || new Map()
    );
  }, [data]);

  const totalPages = useMemo(() => {
    return Math.floor(rows.length / ROWS_PER_PAGE) ?? 0;
  }, [rows]);

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

      <StatsBar stats={stats} />

      <div className={styles.SubtitleContainer}>
        <Text weight={'bold'}>{formatMessage(messages.subtitle)}</Text>
        <Button label={formatMessage(messages.downloadButton)} iconLeft={IconDownload} />
      </div>
      {!loading && <Loader />}
      {loading && (
        <>
          <Table<ITableRow>
            columns={columns}
            rows={visibleRows}
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
        </>
      )}
    </Page>
  );
};
