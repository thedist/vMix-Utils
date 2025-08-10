import { type VMixShortcut } from '.'

export type ShortcutIDsPTZ =
  | 'PTZCreateVirtualInput'
  | 'PTZFocusAuto'
  | 'PTZFocusFar'
  | 'PTZFocusManual'
  | 'PTZFocusNear'
  | 'PTZFocusStop'
  | 'PTZHome'
  | 'PTZMoveDown'
  | 'PTZMoveDownLeft'
  | 'PTZMoveDownRight'
  | 'PTZMoveLeft'
  | 'PTZMoveRight'
  | 'PTZMoveStop'
  | 'PTZMoveToVirtualInputPosition'
  | 'PTZMoveToVirtualInputPositionByIndex'
  | 'PTZMoveUp'
  | 'PTZMoveUpLeft'
  | 'PTZMoveUpRight'
  | 'PTZUpdateVirtualInput'
  | 'PTZZoomIn'
  | 'PTZZoomOut'
  | 'PTZZoomStop'

export const FunctionsPTZ: VMixShortcut[] = [
  {
    id: 'PTZCreateVirtualInput',
    category: 'PTZ',
    description: 'Creates a PTZ Virtual Input with the current Position',
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
    id: 'PTZFocusAuto',
    category: 'PTZ',
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
    id: 'PTZFocusFar',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZFocusManual',
    category: 'PTZ',
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
    id: 'PTZFocusNear',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZFocusStop',
    category: 'PTZ',
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
    id: 'PTZHome',
    category: 'PTZ',
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
    id: 'PTZMoveDown',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveDownLeft',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveDownRight',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveLeft',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveRight',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveStop',
    category: 'PTZ',
    description: 'Stop all PTZ movement',
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
    id: 'PTZMoveToVirtualInputPosition',
    category: 'PTZ',
    description: 'Moves to the Position of the PTZ Virtual Input without selecting it into Preview',
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
    id: 'PTZMoveToVirtualInputPositionByIndex',
    category: 'PTZ',
    description: 'Moves to the Position of the PTZ Virtual Input associated with this Input',
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
    id: 'PTZMoveUp',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveUpLeft',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZMoveUpRight',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZUpdateVirtualInput',
    category: 'PTZ',
    description: 'Updates selected PTZ Virtual Input with current Position',
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
    id: 'PTZZoomIn',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZZoomOut',
    category: 'PTZ',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'PTZZoomStop',
    category: 'PTZ',
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
