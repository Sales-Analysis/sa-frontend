import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';
import { Button } from '@consta/uikit/Button';
import { IconDownload } from '@consta/uikit/IconDownload';
import { Pagination } from '@consta/uikit/Pagination';
import { Table, TableColumn, TableRow } from '@consta/uikit/Table';
import { Text } from '@consta/uikit/Text';
import { loader } from 'graphql.macro';
import { Page } from 'components/Page';

const getReportQuery = loader('./getReportQuery.graphql');

const messages = defineMessages({
  title: {
    id: 'pages.report.title',
    defaultMessage: 'Отчет по ABC анализу',
  },
  downloadButton: {
    id: 'pages.report.button.download',
    defaultMessage: 'Скачать отчет',
  },
});

interface ITableRow extends TableRow {
  name: string;
  profit: number;
  profitPercent: number;
  portion: number;
  group: string;
}

const columns: TableColumn<ITableRow>[] = [
  {
    title: 'Наименование',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'Доход',
    accessor: 'profit',
    sortable: true,
  },
  {
    title: 'Доля дохода',
    accessor: 'profitPercent',
    sortable: true,
  },
  {
    title: 'Накопленная доля',
    accessor: 'portion',
    sortable: true,
  },
  {
    title: 'Группа',
    accessor: 'group',
    sortable: true,
  },
];

interface IProps {
  some?: any;
}

export const Report: React.FC<IProps> = () => {
  const { formatMessage } = useIntl();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const { data } = useQuery(getReportQuery);

  const rows = useMemo(() => data?.getReports || [], [data]);

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
    <Page>
      <Text size={'4xl'}>{formatMessage(messages.title)}</Text>
      <Button label={formatMessage(messages.downloadButton)} iconLeft={IconDownload} />
      <Table<ITableRow> columns={columns} rows={rows} borderBetweenRows />
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
