import { type VMixFunction } from '.'

export type FunctionIDsOMT = 'OMTPreviewOff' | 'OMTPreviewOn' | 'OMTSelectSourceByIndex' | 'OMTSelectSourceByName'

export const FunctionsOMT: VMixFunction[] = [
  {
    id: 'OMTPreviewOff',
    category: 'OMT',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'OMTPreviewOn',
    category: 'OMT',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'OMTSelectSourceByIndex',
    category: 'OMT',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index 0-100',
        required: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OMTSelectSourceByName',
    category: 'OMT',
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
    version: '29',
  },
]
