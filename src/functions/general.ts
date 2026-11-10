import { type VMixFunction } from '.'

export type FunctionIDsGeneral =
  | 'ActivatorRefresh'
  | 'CallManagerShowHide'
  | 'KeyPress'
  | 'SendKeys'
  | 'SetDynamicValue1'
  | 'SetDynamicValue2'
  | 'SetDynamicValue3'
  | 'SetDynamicValue4'
  | 'SetProductionClock1Message'
  | 'SetProductionClock1Type'
  | 'SetProductionClock2Message'
  | 'SetProductionClock2Type'
  | 'Undo'

export const FunctionsGeneral: VMixFunction[] = [
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
    id: 'SetProductionClock1Message',
    category: 'General',
    description: 'Set Production Clock 1 to display selected Message',
    params: [{ name: 'Value', default: '', description: 'Message', required: false }],
    version: '30'
  },
  {
    id: 'SetProductionClock1Type',
    category: 'General',
    description: 'Set Production Clock 1 to Type specified in Value',
    params: [{ name: 'Value', default: '', description: 'Clock, Event, Recording, Streaming, TimeRemaining, Message', required: false }],
    version: '30'
  },
  {
    id: 'SetProductionClock2Message',
    category: 'General',
    description: 'Set Production Clock 2 to display selected Message',
    params: [{ name: 'Value', default: '', description: 'Message', required: false }],
    version: '30'
  },
  {
    id: 'SetProductionClock2Type',
    category: 'General',
    description: 'Set Production Clock 2 to Type specified in Value',
    params: [{ name: 'Value', default: '', description: 'Clock, Event, Recording, Streaming, TimeRemaining, Message', required: false }],
    version: '30'
  },
  {
    id: 'Undo',
    category: 'General',
    description: 'Undo closing an Input',
    params: [],
    version: '27',
  },
]
