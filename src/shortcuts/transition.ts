import { type VMixFunction } from '.'

export type FunctionIDsTransition =
  | 'Fade'
  | 'Zoom'
  | 'Wipe'
  | 'Slide'
  | 'Fly'
  | 'CrossZoom'
  | 'FlyRotate'
  | 'Cube'
  | 'CubeZoom'
  | 'VerticalWipe'
  | 'VerticalSlide'
  | 'Merge'
  | 'WipeReverse'
  | 'SlideReverse'
  | 'VerticalWipeReverse'
  | 'VerticalSlideReverse'
  | 'BarnDoor'
  | 'RollerDoor'
  | 'Cut'
  | 'CutDirect'
  | 'FadeToBlack'
  | 'QuickPlay'
  | 'SetFader'
  | 'SetStingerGTInput1'
  | 'SetStingerGTInput2'
  | 'SetStingerGTInput3'
  | 'SetStingerGTInput4'
  | 'SetTransitionDuration1'
  | 'SetTransitionDuration2'
  | 'SetTransitionDuration3'
  | 'SetTransitionDuration4'
  | 'SetTransitionEffect1'
  | 'SetTransitionEffect2'
  | 'SetTransitionEffect3'
  | 'SetTransitionEffect4'
  | 'Stinger1'
  | 'Stinger2'
  | 'Stinger3'
  | 'Stinger4'
  | 'Transition1'
  | 'Transition2'
  | 'Transition3'
  | 'Transition4'

export const FunctionsTransition: VMixFunction[] = [
  {
    id: 'Fade',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Zoom',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Wipe',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Slide',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Fly',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'CrossZoom',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'FlyRotate',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Cube',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'CubeZoom',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'VerticalWipe',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'VerticalSlide',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Merge',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'WipeReverse',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SlideReverse',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'VerticalWipeReverse',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'VerticalSlideReverse',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'BarnDoor',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'RollerDoor',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Cut',
    category: 'Transition',
    params: [
      {
        name: 'Duration',
        description: 'Milliseconds',
        default: 1000,
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 to 15 (Mix 0 is the main vMix ouput)',
        default: 0,
        required: true,
        range: {
          type: 'enum',
          values: [0, 1, 2, 3],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'CutDirect',
    category: 'Transition',
    description: 'Cuts the Input directly to Output without changing Preview',
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
    id: 'FadeToBlack',
    category: 'Transition',
    description: 'Toggle FTB On/Off',
    params: [],

    version: '21',
  },
  {
    id: 'QuickPlay',
    category: 'Transition',
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
    id: 'SetFader',
    category: 'Transition',
    description: 'Set Master Fader T-Bar, 255 will cut to Preview',
    params: [
      {
        name: 'Value',
        description: 'Fader 0 to 255',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 255,
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetStingerGTInput1',
    category: 'Transition',
    description: 'Assign GT Input as animation source for Stinger 1',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
    ],

    version: '28',
  },
  {
    id: 'SetStingerGTInput2',
    category: 'Transition',
    description: 'Assign GT Input as animation source for Stinger 2',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
    ],

    version: '28',
  },
  {
    id: 'SetStingerGTInput3',
    category: 'Transition',
    description: 'Assign GT Input as animation source for Stinger 3',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
    ],

    version: '28',
  },
  {
    id: 'SetStingerGTInput4',
    category: 'Transition',
    description: 'Assign GT Input as animation source for Stinger 4',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
    ],

    version: '28',
  },
  {
    id: 'SetTransitionDuration1',
    category: 'Transition',
    description: 'Change Transition Duration for Button 1',
    params: [
      {
        name: 'Value',
        description: 'Duration MS',
        required: true,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionDuration2',
    category: 'Transition',
    description: 'Change Transition Duration for Button 2',
    params: [
      {
        name: 'Value',
        description: 'Duration MS',
        required: true,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionDuration3',
    category: 'Transition',
    description: 'Change Transition Duration for Button 3',
    params: [
      {
        name: 'Value',
        description: 'Duration MS',
        required: true,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionDuration4',
    category: 'Transition',
    description: 'Change Transition Duration for Button 4',
    params: [
      {
        name: 'Value',
        description: 'Duration MS',
        required: true,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionEffect1',
    category: 'Transition',
    description: 'Change Transition for button 1',
    params: [
      {
        name: 'Value',
        description: 'Transition',
        required: true,
        default: 'Cut',
        range: {
          type: 'enum',
          values: [
            'Cut',
            'Fade',
            'Zoom',
            'Wipe',
            'Slide',
            'Fly',
            'CrossZoom',
            'FlyRotate',
            'Cube',
            'CubeZoom',
            'VerticalWipe',
            'VerticalSlide',
            'Merge',
            'WipeReverse',
            'SlideReverse',
            'VerticalWipeReverse',
            'VerticalSlideReverse',
            'BarnDoor',
            'RollerDoor',
            'Stinger1',
            'Stinger2',
          ],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionEffect2',
    category: 'Transition',
    description: 'Change Transition for button 2',
    params: [
      {
        name: 'Value',
        description: 'Transition',
        required: true,
        default: 'Cut',
        range: {
          type: 'enum',
          values: [
            'Cut',
            'Fade',
            'Zoom',
            'Wipe',
            'Slide',
            'Fly',
            'CrossZoom',
            'FlyRotate',
            'Cube',
            'CubeZoom',
            'VerticalWipe',
            'VerticalSlide',
            'Merge',
            'WipeReverse',
            'SlideReverse',
            'VerticalWipeReverse',
            'VerticalSlideReverse',
            'BarnDoor',
            'RollerDoor',
            'Stinger1',
            'Stinger2',
          ],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionEffect3',
    category: 'Transition',
    description: 'Change Transition for button 3',
    params: [
      {
        name: 'Value',
        description: 'Transition',
        required: true,
        default: 'Cut',
        range: {
          type: 'enum',
          values: [
            'Cut',
            'Fade',
            'Zoom',
            'Wipe',
            'Slide',
            'Fly',
            'CrossZoom',
            'FlyRotate',
            'Cube',
            'CubeZoom',
            'VerticalWipe',
            'VerticalSlide',
            'Merge',
            'WipeReverse',
            'SlideReverse',
            'VerticalWipeReverse',
            'VerticalSlideReverse',
            'BarnDoor',
            'RollerDoor',
            'Stinger1',
            'Stinger2',
          ],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'SetTransitionEffect4',
    category: 'Transition',
    description: 'Change Transition for button 4',
    params: [
      {
        name: 'Value',
        description: 'Transition',
        required: true,
        default: 'Cut',
        range: {
          type: 'enum',
          values: [
            'Cut',
            'Fade',
            'Zoom',
            'Wipe',
            'Slide',
            'Fly',
            'CrossZoom',
            'FlyRotate',
            'Cube',
            'CubeZoom',
            'VerticalWipe',
            'VerticalSlide',
            'Merge',
            'WipeReverse',
            'SlideReverse',
            'VerticalWipeReverse',
            'VerticalSlideReverse',
            'BarnDoor',
            'RollerDoor',
            'Stinger1',
            'Stinger2',
          ],
        },
      },
    ],

    version: '21',
  },
  {
    id: 'Stinger1',
    category: 'Transition',
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
    id: 'Stinger2',
    category: 'Transition',
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
    id: 'Stinger3',
    category: 'Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],

    version: '24',
  },
  {
    id: 'Stinger4',
    category: 'Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],

    version: '42',
  },
  {
    id: 'Transition1',
    category: 'Transition',
    description: 'Clicks First Transition button in the main vMix window',
    params: [],

    version: '21',
  },
  {
    id: 'Transition2',
    category: 'Transition',
    description: 'Clicks Second Transition button in the main vMix window',
    params: [],

    version: '21',
  },
  {
    id: 'Transition3',
    category: 'Transition',
    description: 'Clicks Third Transition button in the main vMix window',
    params: [],

    version: '21',
  },
  {
    id: 'Transition4',
    category: 'Transition',
    description: 'Clicks Fourth Transition button in the main vMix window',
    params: [],

    version: '21',
  },
]
