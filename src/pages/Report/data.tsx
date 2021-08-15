import React from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { GroupCell } from 'pages/Report/GroupCell';
import { ITableRow } from 'pages/Report/types';

export const columns: TableColumn<ITableRow>[] = [
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
    withoutPadding: true,
    renderCell: (row) => <GroupCell {...row} />,
  },
];
