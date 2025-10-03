import { type VMixFunction } from '.'

export type FunctionIDsOverlay =
  | 'MoveMultiViewOverlay'
  | 'MultiViewOverlay'
  | 'MultiViewOverlayOff'
  | 'MultiViewOverlayOn'
  | 'OverlayInput1'
  | 'OverlayInput1In'
  | 'OverlayInput1Last'
  | 'OverlayInput1Off'
  | 'OverlayInput1Out'
  | 'OverlayInput1Zoom'
  | 'OverlayInput2'
  | 'OverlayInput2In'
  | 'OverlayInput2Last'
  | 'OverlayInput2Off'
  | 'OverlayInput2Out'
  | 'OverlayInput2Zoom'
  | 'OverlayInput3'
  | 'OverlayInput3In'
  | 'OverlayInput3Last'
  | 'OverlayInput3Off'
  | 'OverlayInput3Out'
  | 'OverlayInput3Zoom'
  | 'OverlayInput4'
  | 'OverlayInput4In'
  | 'OverlayInput4Last'
  | 'OverlayInput4Off'
  | 'OverlayInput4Out'
  | 'OverlayInput4Zoom'
  | 'OverlayInput5'
  | 'OverlayInput5In'
  | 'OverlayInput5Last'
  | 'OverlayInput5Off'
  | 'OverlayInput5Out'
  | 'OverlayInput5Zoom'
  | 'OverlayInput6'
  | 'OverlayInput6In'
  | 'OverlayInput6Last'
  | 'OverlayInput6Off'
  | 'OverlayInput6Out'
  | 'OverlayInput6Zoom'
  | 'OverlayInput7'
  | 'OverlayInput7In'
  | 'OverlayInput7Last'
  | 'OverlayInput7Off'
  | 'OverlayInput7Out'
  | 'OverlayInput7Zoom'
  | 'OverlayInput8'
  | 'OverlayInput8In'
  | 'OverlayInput8Last'
  | 'OverlayInput8Off'
  | 'OverlayInput8Out'
  | 'OverlayInput8Zoom'
  | 'OverlayInputAllOff'
  | 'PreviewOverlayInput1'
  | 'PreviewOverlayInput2'
  | 'PreviewOverlayInput3'
  | 'PreviewOverlayInput4'
  | 'PreviewOverlayInput5'
  | 'PreviewOverlayInput6'
  | 'PreviewOverlayInput7'
  | 'PreviewOverlayInput8'
  | 'SetMultiViewOverlay'

export const FunctionsOverlay: VMixFunction[] = [
  {
    id: 'MoveMultiViewOverlay',
    category: 'Overlay',
    description: 'Move Overlay in Input MultiView according to Value parameter',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'FromIndex,ToIndex',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'MultiViewOverlay',
    category: 'Overlay',
    description: 'Toggle On/Off MultiView Overlay for Input at Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'MultiViewOverlayOff',
    category: 'Overlay',
    description: 'Turn Off MultiView Overlay for Input at Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'MultiViewOverlayOn',
    category: 'Overlay',
    description: 'Turn On MultiView Overlay for Input at Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput1',
    category: 'Overlay',
    description: 'Toggle Overlay1 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput1In',
    category: 'Overlay',
    description: 'Transition Out to Overlay1 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput1Last',
    category: 'Overlay',
    description: 'Toggle Overlay 1 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '25',
  },
  {
    id: 'OverlayInput1Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay1 Off (Cut)',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput1Out',
    category: 'Overlay',
    description: 'Transition Out Overlay1',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput1Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput2',
    category: 'Overlay',
    description: 'Toggle Overlay2 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput2In',
    category: 'Overlay',
    description: 'Transition Out to Overlay2 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput2Last',
    category: 'Overlay',
    description: 'Toggle Overlay 2 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '25',
  },
  {
    id: 'OverlayInput2Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay2 Off (Cut)',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput2Out',
    category: 'Overlay',
    description: 'Transition Out Overlay2',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput2Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput3',
    category: 'Overlay',
    description: 'Toggle Overlay3 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput3In',
    category: 'Overlay',
    description: 'Transition Out to Overlay3 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput3Last',
    category: 'Overlay',
    description: 'Toggle Overlay 3 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '25',
  },
  {
    id: 'OverlayInput3Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay3 Off (Cut)',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput3Out',
    category: 'Overlay',
    description: 'Transition Out Overlay3',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput3Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput4',
    category: 'Overlay',
    description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput4In',
    category: 'Overlay',
    description: 'Transition Out to Overlay4 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '21',
  },
  {
    id: 'OverlayInput4Last',
    category: 'Overlay',
    description: 'Toggle Overlay 4 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '25',
  },
  {
    id: 'OverlayInput4Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay4 Off (Cut)',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput4Out',
    category: 'Overlay',
    description: 'Transition Out Overlay4',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput4Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '21',
  },
  {
    id: 'OverlayInput5',
    category: 'Overlay',
    description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput5In',
    category: 'Overlay',
    description: 'Transition Out to Overlay4 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput5Last',
    category: 'Overlay',
    description: 'Toggle Overlay 4 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput5Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay4 Off (Cut)',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput5Out',
    category: 'Overlay',
    description: 'Transition Out Overlay4',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput5Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput6',
    category: 'Overlay',
    description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput6In',
    category: 'Overlay',
    description: 'Transition Out to Overlay4 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput6Last',
    category: 'Overlay',
    description: 'Toggle Overlay 4 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput6Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay4 Off (Cut)',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput6Out',
    category: 'Overlay',
    description: 'Transition Out Overlay4',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput6Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput7',
    category: 'Overlay',
    description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput7In',
    category: 'Overlay',
    description: 'Transition Out to Overlay4 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput7Last',
    category: 'Overlay',
    description: 'Toggle Overlay 4 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput7Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay4 Off (Cut)',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput7Out',
    category: 'Overlay',
    description: 'Transition Out Overlay4',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput7Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput8',
    category: 'Overlay',
    description: 'Toggle Overlay4 On/Off with selected Input using configured Transition',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput8In',
    category: 'Overlay',
    description: 'Transition Out to Overlay4 with selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput8Last',
    category: 'Overlay',
    description: 'Toggle Overlay 4 On/Off with last used Input on this channel',
    params: [
      {
        name: 'Mix',
        default: '0',
        required: false,
        multi: true,
      },
    ],
    version: '29',
  },
  {
    id: 'OverlayInput8Off',
    category: 'Overlay',
    description: 'Immediately switch Overlay4 Off (Cut)',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput8Out',
    category: 'Overlay',
    description: 'Transition Out Overlay4',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInput8Zoom',
    category: 'Overlay',
    description: 'Zooms PIP Overlay to fill Fullscreen and vice versa',
    params: [],
    version: '29',
  },
  {
    id: 'OverlayInputAllOff',
    category: 'Overlay',
    description: 'Immediately switch all Overlays Off',
    params: [],
    version: '21',
  },
  {
    id: 'PreviewOverlayInput1',
    category: 'Overlay',
    description: 'Preview Overlay1 using the selected Input',
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
    id: 'PreviewOverlayInput2',
    category: 'Overlay',
    description: 'Preview Overlay2 using the selected Input',
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
    id: 'PreviewOverlayInput3',
    category: 'Overlay',
    description: 'Preview Overlay3 using the selected Input',
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
    id: 'PreviewOverlayInput4',
    category: 'Overlay',
    description: 'Preview Overlay4 using the selected Input',
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
    id: 'PreviewOverlayInput5',
    category: 'Overlay',
    description: 'Preview Overlay4 using the selected Input',
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
    id: 'PreviewOverlayInput6',
    category: 'Overlay',
    description: 'Preview Overlay4 using the selected Input',
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
    id: 'PreviewOverlayInput7',
    category: 'Overlay',
    description: 'Preview Overlay4 using the selected Input',
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
    id: 'PreviewOverlayInput8',
    category: 'Overlay',
    description: 'Preview Overlay4 using the selected Input',
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
    id: 'SetMultiViewOverlay',
    category: 'Overlay',
    description: 'Change Overlay in Input MultiView according to Value parameter',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Index,Input',
        required: true,
      },
    ],
    version: '21',
  },
]
