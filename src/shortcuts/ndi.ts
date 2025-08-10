import { type VMixShortcut } from '.'

export type ShortcutIDsNDI = 'NDICommand' | 'NDISelectSourceByIndex' | 'NDISelectSourceByName' | 'NDIStartRecording' | 'NDIStopRecording'

export const FunctionsNDI: VMixShortcut[] = [
  {
    id: 'NDICommand',
    category: 'NDI',
    description: 'Send specified command to NDI source',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Command',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'NDISelectSourceByIndex',
    category: 'NDI',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index 0 to 100',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 100,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'NDISelectSourceByName',
    category: 'NDI',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Name',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'NDIStartRecording',
    category: 'NDI',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'NDIStopRecording',
    category: 'NDI',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '21',
  },
]
