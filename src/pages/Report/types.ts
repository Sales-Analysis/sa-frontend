import { TableRow } from '@consta/uikit/Table';

export interface ITableRow extends TableRow {
  name: string;
  profit: number;
  profitPercent: number;
  portion: number;
  group: string;
}
