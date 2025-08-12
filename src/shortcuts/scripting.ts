import { type VMixFunction } from '.'

export type FunctionIDsScripting = 'ScriptStart' | 'ScriptStartDynamic' | 'ScriptStop' | 'ScriptStopAll' | 'ScriptStopDynamic'

export const FunctionsScripting: VMixFunction[] = [
  {
    id: 'ScriptStart',
    category: 'Scripting',
    params: [
      {
        name: 'Value',
        description: 'Script Name',
        required: true,
      },
    ],
    info: '',
    version: '21',
  },
  {
    id: 'ScriptStartDynamic',
    category: 'Scripting',
    description: 'Start a dynamic script using code specified as the Value',
    params: [
      {
        name: 'Value',
        description: 'Code',
        required: true,
      },
    ],
    info: '',
    version: '21',
  },
  {
    id: 'ScriptStop',
    category: 'Scripting',
    params: [
      {
        name: 'Value',
        description: 'Script Name',
        required: true,
      },
    ],
    info: '',
    version: '21',
  },
  {
    id: 'ScriptStopAll',
    category: 'Scripting',
    params: [],
    info: '',
    version: '21',
  },
  {
    id: 'ScriptStopDynamic',
    category: 'Scripting',
    params: [],
    info: '',
    version: '21',
  },
]
