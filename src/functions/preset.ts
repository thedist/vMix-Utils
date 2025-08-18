import { type VMixFunction } from '.'

export type FunctionIDsPreset = 'LastPreset' | 'OpenPreset' | 'SavePreset'

export const FunctionsPreset: VMixFunction[] = [
  {
    id: 'LastPreset',
    category: 'Preset',
    description: 'Load the last preset',
    params: [],
    version: '21',
  },
  {
    id: 'OpenPreset',
    category: 'Preset',
    description: 'Load the preset from the specified Filename',
    params: [
      {
        name: 'Value',
        description: 'Filename',
        required: false,
      },
    ],
    info: "Will open a Open window if no value is specified. If a full path isn't specified the file will be saved to the vMix install directory",
    version: '21',
  },
  {
    id: 'SavePreset',
    category: 'Preset',
    description: 'Save preset to the specified Filename',
    params: [
      {
        name: 'Value',
        description: 'Filename',
        required: false,
      },
    ],
    info: "Will open a Save As window if no value is specified. If a full path isn't specified the file will be saved to the vMix install directory",
    version: '21',
  },
]
