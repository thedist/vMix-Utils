import { type VMixShortcut } from '.'

export type ShortcutIDsOutput =
  | 'Fullscreen'
  | 'FullscreenOff'
  | 'FullscreenOn'
  | 'SetOutput2'
  | 'SetOutput3'
  | 'SetOutput4'
  | 'SetOutputExternal2'
  | 'SetOutputFullscreen'
  | 'SetOutputFullscreen2'
  | 'Snapshot'
  | 'SnapshotInput'
  | 'StartExternal'
  | 'StartMultiCorder'
  | 'StartRecording'
  | 'StartSRTOutput'
  | 'StartStopExternal'
  | 'StartStopMultiCorder'
  | 'StartStopRecording'
  | 'StartStopSRTOutput'
  | 'StartStopStreaming'
  | 'StartStreaming'
  | 'StopExternal'
  | 'StopMultiCorder'
  | 'StopRecording'
  | 'StopSRTOutput'
  | 'StopStreaming'
  | 'StreamingSetKey'
  | 'StreamingSetPassword'
  | 'StreamingSetURL'
  | 'StreamingSetUsername'
  | 'WriteDurationToRecordingLog'

export const FunctionsOutput: VMixShortcut[] = [
  {
    id: 'Fullscreen',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'FullscreenOff',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'FullscreenOn',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'SetOutput2',
    category: 'Output',
    description: 'Change what is displayed on Output 2',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetOutput3',
    category: 'Output',
    description: 'Change what is displayed on Output 3',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetOutput4',
    category: 'Output',
    description: 'Change what is displayed on Output 4',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetOutputExternal2',
    category: 'Output',
    description: 'Change what is displayed on the External2 Output',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetOutputFullscreen',
    category: 'Output',
    description: 'Change what is displayed on the Fullscreen Output',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetOutputFullscreen2',
    category: 'Output',
    description: 'Change what is displayed on the Fullscreen2 Output',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: true,
        default: 'Output',
        range: {
          type: 'enum',
          values: ['Output', 'Preview', 'MultiView', 'Input'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'Snapshot',
    category: 'Output',
    description: 'Create a snapshot image of the current Output',
    params: [
      {
        name: 'Value',
        description: 'Value',
        required: false,
      },
    ],
    info: "Will open a Save As window if no value is specified. If a full path isn't specified the file will be saved to the vMixStorage folder in your documents path",
    version: '21',
  },
  {
    id: 'SnapshotInput',
    category: 'Output',
    description: 'Create a snapshot image of the selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value',
        required: false,
      },
    ],
    info: "Will open a Save As window if no value is specified. If a full path isn't specified the file will be saved to the vMixStorage folder in your documents path",
    version: '23',
  },
  {
    id: 'StartExternal',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartMultiCorder',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartRecording',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartSRTOutput',
    category: 'Output',
    description: 'Optional output number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Output',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'StartStopExternal',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartStopMultiCorder',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartStopRecording',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StartStopSRTOutput',
    category: 'Output',
    description: 'Optional output number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Output',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'StartStopStreaming',
    category: 'Output',
    description: 'Optional stream number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'StartStreaming',
    category: 'Output',
    description: 'Optional stream number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'StopExternal',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StopMultiCorder',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StopRecording',
    category: 'Output',
    params: [],
    version: '21',
  },
  {
    id: 'StopSRTOutput',
    category: 'Output',
    description: 'Optional output number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Output',
        required: false,
      },
    ],
    version: '24',
  },
  {
    id: 'StopStreaming',
    category: 'Output',
    description: 'Optional stream number starting from 0',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'StreamingSetKey',
    category: 'Output',
    description: 'Set Key on Custom RTMP Stream',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: true,
      },
    ],
    version: '23',
  },
  {
    id: 'StreamingSetPassword',
    category: 'Output',
    description: 'Set Password on Custom RTMP Stream',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: true,
      },
    ],
    version: '23',
  },
  {
    id: 'StreamingSetURL',
    category: 'Output',
    description: 'Set URL on Custom RTMP Stream',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: true,
      },
    ],
    version: '23',
  },
  {
    id: 'StreamingSetUsername',
    category: 'Output',
    description: 'Set Username on Custom RTMP Stream',
    params: [
      {
        name: 'Value',
        description: 'Stream',
        required: true,
      },
    ],
    version: '23',
  },
  {
    id: 'WriteDurationToRecordingLog',
    category: 'Output',
    description: 'Write current recording duration to log file with optional tag text Value',
    params: [
      {
        name: 'Value',
        description: 'Tag Text',
        required: false,
      },
    ],
    version: '21',
  },
]
