import { type VMixFunction } from '.'

export type FunctionIDsDataSources =
  | 'DataSourceAutoNextOff'
  | 'DataSourceAutoNextOn'
  | 'DataSourceAutoNextOnOff'
  | 'DataSourceNextRow'
  | 'DataSourcePause'
  | 'DataSourcePlay'
  | 'DataSourcePlayPause'
  | 'DataSourcePreviousRow'
  | 'DataSourceSelectRow'

export const FunctionsDataSources: VMixFunction[] = [
  {
    id: 'DataSourceAutoNextOff',
    category: 'DataSources',
    description: 'Name of the Data Source, Table Name (optional)',
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'DataSourceAutoNextOn',
    category: 'DataSources',
    description: 'Name of the Data Source, Table Name (optional)',
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'DataSourceAutoNextOnOff',
    category: 'DataSources',
    description: 'Name of the Data Source, Table Name (optional)',
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'DataSourceNextRow',
    category: 'DataSources',
    description: "Name of the Data Source and Table Name (optional) eg 'Excel/CSV,Sheet1",
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'DataSourcePause',
    category: 'DataSources',
    description: "Name of the Data Source and Table Name (optional) eg 'Excel/CSV,Sheet1",
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'DataSourcePlay',
    category: 'DataSources',
    description: "Name of the Data Source and Table Name (optional) eg 'Excel/CSV,Sheet1",
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'DataSourcePlayPause',
    category: 'DataSources',
    description: "Name of the Data Source and Table Name (optional) eg 'Excel/CSV,Sheet1",
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'DataSourcePreviousRow',
    category: 'DataSources',
    description: "Name of the Data Source and Table Name (optional) eg 'Excel/CSV,Sheet1",
    params: [
      {
        name: 'Value',
        description: 'Name,Table',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'DataSourceSelectRow',
    category: 'DataSources',
    description: "Name of the Data Source, Table Name (optional) and Row Index starting from 0 eg 'Excel/CSV,Sheet1,5",
    params: [
      {
        name: 'Value',
        description: 'Name,Table,Index',
        required: false,
      },
    ],
    version: '21',
  },
]
