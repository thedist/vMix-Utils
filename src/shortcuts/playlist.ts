import { type VMixShortcut } from '.'

export type ShortcutIDsPlayList = 'NextPlayListEntry' | 'PreviousPlayListEntry' | 'SelectPlayList' | 'StartPlayList' | 'StopPlayList'

export const FunctionsPlayList: VMixShortcut[] = [
  {
    id: 'NextPlayListEntry',
    category: 'PlayList',
    description: 'Move to Next Item in a running PlayList',
    params: [],
    version: '21',
  },
  {
    id: 'PreviousPlayListEntry',
    category: 'PlayList',
    description: 'Move to Previous Item in a running PlayList',
    params: [],
    version: '21',
  },
  {
    id: 'SelectPlayList',
    category: 'PlayList',
    description: 'Open PlayList with Name matching Value',
    params: [
      {
        name: 'Value',
        description: 'PlayList',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'StartPlayList',
    category: 'PlayList',
    params: [],
    version: '21',
  },
  {
    id: 'StopPlayList',
    category: 'PlayList',
    params: [],
    version: '21',
  },
]
