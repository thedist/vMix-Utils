import { type VMixFunction } from '.'

export type FunctionIDsBrowser =
  | 'BrowserBack'
  | 'BrowserForward'
  | 'BrowserKeyboardDisabled'
  | 'BrowserKeyboardEnabled'
  | 'BrowserMouseDisabled'
  | 'BrowserMouseEnabled'
  | 'BrowserNavigate'
  | 'BrowserReload'

export const FunctionsBrowser: VMixFunction[] = [
  {
    id: 'BrowserBack',
    category: 'Browser',
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
    id: 'BrowserForward',
    category: 'Browser',
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
    id: 'BrowserKeyboardDisabled',
    category: 'Browser',
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
    id: 'BrowserKeyboardEnabled',
    category: 'Browser',
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
    id: 'BrowserMouseDisabled',
    category: 'Browser',
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
    id: 'BrowserMouseEnabled',
    category: 'Browser',
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
    id: 'BrowserNavigate',
    category: 'Browser',
    description: 'URL',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'URL',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'BrowserReload',
    category: 'Browser',
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
