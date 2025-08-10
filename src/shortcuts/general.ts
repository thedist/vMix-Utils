import { type VMixShortcut } from '.'

export type ShortcutIDsGeneral =
  | 'ActivatorRefresh'
  | 'CallManagerShowHide'
  | 'KeyPress'
  | 'SendKeys'
  | 'SetDynamicValue1'
  | 'SetDynamicValue2'
  | 'SetDynamicValue3'
  | 'SetDynamicValue4'
  | 'Undo'

export const FunctionsGeneral: VMixShortcut[] = [
  {
    id: 'ActivatorRefresh',
    category: 'General',
    description: 'Refresh all activator device lights and controls',
    params: [],
    version: '21',
  },
  {
    id: 'CallManagerShowHide',
    category: 'General',
    description: '',
    params: [],
    version: '21',
    info: 'No effect unless using a VMix Call Input',
  },
  {
    id: 'KeyPress',
    category: 'General',
    description: '',
    params: [{ name: 'Value', default: '', description: 'Key', required: false }],
    version: '21',
    info: 'Value is case sensitive, see keys list for list of supported values',
  },
  {
    id: 'SendKeys',
    category: 'General',
    description: 'Send keys to active window',
    params: [{ name: 'Value', default: '', description: 'Keys', required: false }],
    version: '21',
    info: 'Value is case sensitive, see keys list for list of supported values',
  },
  {
    id: 'SetDynamicValue1',
    category: 'General',
    description: 'Set Dynamic Value to use when specifying Dynamic1 as a shortcut value',
    params: [{ name: 'Value', default: '', description: 'Value', required: false }],
    version: '24',
  },
  {
    id: 'SetDynamicValue2',
    category: 'General',
    description: 'Set Dynamic Value to use when specifying Dynamic2 as a shortcut value',
    params: [{ name: 'Value', default: '', description: 'Value', required: false }],
    version: '24',
  },
  {
    id: 'SetDynamicValue3',
    category: 'General',
    description: 'Set Dynamic Value to use when specifying Dynamic3 as a shortcut value',
    params: [{ name: 'Value', default: '', description: 'Value', required: false }],
    version: '24',
  },
  {
    id: 'SetDynamicValue4',
    category: 'General',
    description: 'Set Dynamic Value to use when specifying Dynamic4 as a shortcut value',
    params: [{ name: 'Value', default: '', description: 'Value', required: false }],
    version: '24',
  },
  {
    id: 'Undo',
    category: 'General',
    description: 'Undo closing an Input',
    params: [],
    version: '27',
  },
]
