import { type VMixShortcut } from '.'

export type ShortcutIDsTitle =
  | 'AdjustCountdown'
  | 'ChangeCountdown'
  | 'NextTitlePreset'
  | 'PauseCountdown'
  | 'PauseRender'
  | 'PreviousTitlePreset'
  | 'ResumeRender'
  | 'SelectTitlePreset'
  | 'SetColor'
  | 'SetCountdown'
  | 'SetImage'
  | 'SetImageVisible'
  | 'SetImageVisibleOff'
  | 'SetImageVisibleOn'
  | 'SetText'
  | 'SetTextColour'
  | 'SetTextVisible'
  | 'SetTextVisibleOff'
  | 'SetTextVisibleOn'
  | 'SetTickerSpeed'
  | 'StartCountdown'
  | 'StopCountdown'
  | 'SuspendCountdown'
  | 'TitleBeginAnimation'

export const FunctionsTitle: VMixShortcut[] = [
  {
    id: 'AdjustCountdown',
    category: 'Title',
    description: 'Seconds to add or subtract from current Countdown time',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Seconds',
        required: false,
        range: {
          type: 'int',
        },
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ChangeCountdown',
    category: 'Title',
    description: 'Change countdown time according to Value as hh:mm:ss (00:00:00)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Time 00:00:00',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'NextTitlePreset',
    category: 'Title',
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
    id: 'PauseCountdown',
    category: 'Title',
    description: 'Pause or Resume Countdown or if complete, Start from beginning',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'PauseRender',
    category: 'Title',
    description: 'Freeze Title Input while making multiple updates',
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
    id: 'PreviousTitlePreset',
    category: 'Title',
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
    id: 'ResumeRender',
    category: 'Title',
    description: 'Resume Title Input rendering after making multiple updates',
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
    id: 'SelectTitlePreset',
    category: 'Title',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Preset Index',
        required: false,
        range: {
          type: 'int',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetColor',
    category: 'Title',
    description: 'Change Color in Title using HTML #xxxxxxxx format',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Color',
        required: true,
      },
    ],
    version: '25',
  },
  {
    id: 'SetCountdown',
    category: 'Title',
    description: 'Set countdown duration according to Value as hh:mm:ss (00:00:00)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Duration 00:00:00',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'SetImage',
    category: 'Title',
    description: 'Change Image in Title according to Filename or empty to clear',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Filename',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'SetImageVisible',
    category: 'Title',
    description: 'Toggle Image in Title - SelectedIndex or SelectedValue can be used to select image',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Value of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetImageVisibleOff',
    category: 'Title',
    description: 'Hide Image in Title - SelectedIndex or SelectedValue can be used to select image',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Value of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetImageVisibleOn',
    category: 'Title',
    description: 'Show Image in Title - SelectedIndex or SelectedValue can be used to select image',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Value of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetText',
    category: 'Title',
    description: 'Change Text in Title according to Value parameter',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Text',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'SetTextColour',
    category: 'Title',
    description: 'Change Colour of Text in Title in HTML format (#xxxxxx)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Colour',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'SetTextVisible',
    category: 'Title',
    description: 'Toggle Text Visibility in Title - SelectedIndex or SelectedValue can be used to select text field',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetTextVisibleOff',
    category: 'Title',
    description: 'Hide Text in Title - SelectedIndex or SelectedValue can be used to select text field',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetTextVisibleOn',
    category: 'Title',
    description: 'Show Text in Title - SelectedIndex or SelectedValue can be used to select text field',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index of title layer to adjust',
        default: 0,
        required: false,
      },
      {
        name: 'SelectedValue',
        description: 'Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'SetTickerSpeed',
    category: 'Title',
    description: 'Change Ticker Speed',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1000',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 1000,
        },
      },
    ],
    version: '23',
  },
  {
    id: 'StartCountdown',
    category: 'Title',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'StopCountdown',
    category: 'Title',
    description: 'Stop and Reset Countdown',
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
    id: 'SuspendCountdown',
    category: 'Title',
    description: 'Pause Countdown Only',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'SelectedIndex',
        description: 'Index or Name of title layer to adjust',
        default: 0,
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'TitleBeginAnimation',
    category: 'Title',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Animation',
        required: false,
      },
    ],
    version: '23',
  },
]
