import { type VMixFunction } from '.'

export type FunctionIDsInput =
  | 'ActiveInput'
  | 'AddInput'
  | 'AutoPauseOff'
  | 'AutoPauseOn'
  | 'AutoPlayFirst'
  | 'AutoPlayFirstOff'
  | 'AutoPlayFirstOn'
  | 'AutoPlayNext'
  | 'AutoPlayNextOff'
  | 'AutoPlayNextOn'
  | 'AutoPlayOff'
  | 'AutoPlayOn'
  | 'AutoRestartOff'
  | 'AutoRestartOn'
  | 'ColourCorrectionAuto'
  | 'ColourCorrectionReset'
  | 'CreateVirtualInput'
  | 'DeinterlaceOff'
  | 'DeinterlaceOn'
  | 'Effect1'
  | 'Effect1Off'
  | 'Effect1On'
  | 'Effect2'
  | 'Effect2Off'
  | 'Effect2On'
  | 'Effect3'
  | 'Effect3Off'
  | 'Effect3On'
  | 'Effect4'
  | 'Effect4Off'
  | 'Effect4On'
  | 'InputPreviewHide'
  | 'InputPreviewShow'
  | 'InputPreviewShowHide'
  | 'LayerOff'
  | 'LayerOn'
  | 'LayerOnOff'
  | 'ListAdd'
  | 'ListExport'
  | 'ListPlayOut'
  | 'ListRemove'
  | 'ListRemoveAll'
  | 'ListShowHide'
  | 'ListShuffle'
  | 'LivePlayPause'
  | 'Loop'
  | 'LoopOff'
  | 'LoopOn'
  | 'MarkIn'
  | 'MarkOut'
  | 'MarkReset'
  | 'MarkResetIn'
  | 'MarkResetOut'
  | 'MirrorOff'
  | 'MirrorOn'
  | 'MoveInput'
  | 'MoveLayer'
  | 'NextItem'
  | 'NextPicture'
  | 'Pause'
  | 'Play'
  | 'PlayPause'
  | 'PreviewInput'
  | 'PreviewInputNext'
  | 'PreviewInputPrevious'
  | 'PreviousItem'
  | 'PreviousPicture'
  | 'RemoveInput'
  | 'ResetInput'
  | 'Restart'
  | 'SaveVideoDelay'
  | 'SelectCategory'
  | 'SelectIndex'
  | 'SetAlpha'
  | 'SetCCGainB'
  | 'SetCCGainG'
  | 'SetCCGainR'
  | 'SetCCGainRGB'
  | 'SetCCGainY'
  | 'SetCCGammaB'
  | 'SetCCGammaG'
  | 'SetCCGammaR'
  | 'SetCCGammaRGB'
  | 'SetCCGammaY'
  | 'SetCCHue'
  | 'SetCCLiftB'
  | 'SetCCLiftG'
  | 'SetCCLiftR'
  | 'SetCCLiftRGB'
  | 'SetCCLiftY'
  | 'SetCCSaturation'
  | 'SetCrop'
  | 'SetCropX1'
  | 'SetCropX2'
  | 'SetCropY1'
  | 'SetCropY2'
  | 'SetDynamicInput1'
  | 'SetDynamicInput2'
  | 'SetDynamicInput3'
  | 'SetDynamicInput4'
  | 'SetEffect1Strength'
  | 'SetEffect2Strength'
  | 'SetEffect3Strength'
  | 'SetEffect4Strength'
  | 'SetFrameDelay'
  | 'SetInputName'
  | 'SetLayer'
  | 'SetLayer1Crop'
  | 'SetLayer1CropX1'
  | 'SetLayer1CropX2'
  | 'SetLayer1CropY1'
  | 'SetLayer1CropY2'
  | 'SetLayer1Height'
  | 'SetLayer1PanX'
  | 'SetLayer1PanY'
  | 'SetLayer1Rectangle'
  | 'SetLayer1Width'
  | 'SetLayer1X'
  | 'SetLayer1Y'
  | 'SetLayer1Zoom'
  | 'SetLayer2Crop'
  | 'SetLayer2CropX1'
  | 'SetLayer2CropX2'
  | 'SetLayer2CropY1'
  | 'SetLayer2CropY2'
  | 'SetLayer2Height'
  | 'SetLayer2PanX'
  | 'SetLayer2PanY'
  | 'SetLayer2Rectangle'
  | 'SetLayer2Width'
  | 'SetLayer2X'
  | 'SetLayer2Y'
  | 'SetLayer2Zoom'
  | 'SetLayer3Crop'
  | 'SetLayer3CropX1'
  | 'SetLayer3CropX2'
  | 'SetLayer3CropY1'
  | 'SetLayer3CropY2'
  | 'SetLayer3Height'
  | 'SetLayer3PanX'
  | 'SetLayer3PanY'
  | 'SetLayer3Rectangle'
  | 'SetLayer3Width'
  | 'SetLayer3X'
  | 'SetLayer3Y'
  | 'SetLayer3Zoom'
  | 'SetLayer4Crop'
  | 'SetLayer4CropX1'
  | 'SetLayer4CropX2'
  | 'SetLayer4CropY1'
  | 'SetLayer4CropY2'
  | 'SetLayer4Height'
  | 'SetLayer4PanX'
  | 'SetLayer4PanY'
  | 'SetLayer4Rectangle'
  | 'SetLayer4Width'
  | 'SetLayer4X'
  | 'SetLayer4Y'
  | 'SetLayer4Zoom'
  | 'SetLayer5Crop'
  | 'SetLayer5CropX1'
  | 'SetLayer5CropX2'
  | 'SetLayer5CropY1'
  | 'SetLayer5CropY2'
  | 'SetLayer5Height'
  | 'SetLayer5PanX'
  | 'SetLayer5PanY'
  | 'SetLayer5Rectangle'
  | 'SetLayer5Width'
  | 'SetLayer5X'
  | 'SetLayer5Y'
  | 'SetLayer5Zoom'
  | 'SetLayer6Crop'
  | 'SetLayer6CropX1'
  | 'SetLayer6CropX2'
  | 'SetLayer6CropY1'
  | 'SetLayer6CropY2'
  | 'SetLayer6Height'
  | 'SetLayer6PanX'
  | 'SetLayer6PanY'
  | 'SetLayer6Rectangle'
  | 'SetLayer6Width'
  | 'SetLayer6X'
  | 'SetLayer6Y'
  | 'SetLayer6Zoom'
  | 'SetLayer7Crop'
  | 'SetLayer7CropX1'
  | 'SetLayer7CropX2'
  | 'SetLayer7CropY1'
  | 'SetLayer7CropY2'
  | 'SetLayer7Height'
  | 'SetLayer7PanX'
  | 'SetLayer7PanY'
  | 'SetLayer7Rectangle'
  | 'SetLayer7Width'
  | 'SetLayer7X'
  | 'SetLayer7Y'
  | 'SetLayer7Zoom'
  | 'SetLayer8Crop'
  | 'SetLayer8CropX1'
  | 'SetLayer8CropX2'
  | 'SetLayer8CropY1'
  | 'SetLayer8CropY2'
  | 'SetLayer8Height'
  | 'SetLayer8PanX'
  | 'SetLayer8PanY'
  | 'SetLayer8Rectangle'
  | 'SetLayer8Width'
  | 'SetLayer8X'
  | 'SetLayer8Y'
  | 'SetLayer8Zoom'
  | 'SetLayer9Crop'
  | 'SetLayer9CropX1'
  | 'SetLayer9CropX2'
  | 'SetLayer9CropY1'
  | 'SetLayer9CropY2'
  | 'SetLayer9Height'
  | 'SetLayer9PanX'
  | 'SetLayer9PanY'
  | 'SetLayer9Rectangle'
  | 'SetLayer9Width'
  | 'SetLayer9X'
  | 'SetLayer9Y'
  | 'SetLayer9Zoom'
  | 'SetLayer10Crop'
  | 'SetLayer10CropX1'
  | 'SetLayer10CropX2'
  | 'SetLayer10CropY1'
  | 'SetLayer10CropY2'
  | 'SetLayer10Height'
  | 'SetLayer10PanX'
  | 'SetLayer10PanY'
  | 'SetLayer10Rectangle'
  | 'SetLayer10Width'
  | 'SetLayer10X'
  | 'SetLayer10Y'
  | 'SetLayer10Zoom'
  | 'SetLayerAnimated'
  | 'SetLayerDynamicCrop'
  | 'SetLayerDynamicCropX1'
  | 'SetLayerDynamicCropX2'
  | 'SetLayerDynamicCropY1'
  | 'SetLayerDynamicCropY2'
  | 'SetLayerDynamicHeight'
  | 'SetLayerDynamicPanX'
  | 'SetLayerDynamicPanY'
  | 'SetLayerDynamicRectangle'
  | 'SetLayerDynamicWidth'
  | 'SetLayerDynamicX'
  | 'SetLayerDynamicY'
  | 'SetLayerDynamicZoom'
  | 'SetPanX'
  | 'SetPanY'
  | 'SetPictureEffect'
  | 'SetPictureEffectDuration'
  | 'SetPictureTransition'
  | 'SetPosition'
  | 'SetRate'
  | 'SetRateSlowMotion'
  | 'SetZoom'
  | 'SharpenOff'
  | 'SharpenOn'
  | 'SwapLayerAnimated'
  | 'VideoCallAudioSource'
  | 'VideoCallConnect'
  | 'VideoCallReconnect'
  | 'VideoCallVideoSource'
  | 'VideoDelayStartRecording'
  | 'VideoDelayStartStopRecording'
  | 'VideoDelayStopRecording'
  | 'WaitForCompletion'
  | 'ZoomJoinMeeting'
  | 'ZoomMuteSelf'
  | 'ZoomSelectParticipantByName'
  | 'ZoomUnMuteSelf'

export const FunctionsInput: VMixFunction[] = [
  {
    id: 'ActiveInput',
    category: 'Input',
    description: 'Send to Output the selected Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Mix',
        description: 'Mix 0 is the Main mix, values 1 to 3 are for additional mixes that are labeled 2 to 4 in vMix',
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
    id: 'AddInput',
    category: 'Input',
    description: 'Create a new Input based on information provided in Value',
    params: [
      {
        name: 'Value',
        description: 'Type|Filename',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'AutoPauseOff',
    category: 'Input',
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
    id: 'AutoPauseOn',
    category: 'Input',
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
    id: 'AutoPlayFirst',
    category: 'Input',
    description: 'Toggle automatically playing first item in a List with Transition',
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
    id: 'AutoPlayFirstOff',
    category: 'Input',
    description: 'Turn Off automatically playing first item in a List with Transition',
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
    id: 'AutoPlayFirstOn',
    category: 'Input',
    description: 'Turn On automatically playing first item in a List with Transition',
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
    id: 'AutoPlayNext',
    category: 'Input',
    description: 'Toggle automatically playing next item in a List',
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
    id: 'AutoPlayNextOff',
    category: 'Input',
    description: 'Turn Off automatically playing next item in a List',
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
    id: 'AutoPlayNextOn',
    category: 'Input',
    description: 'Turn On automatically playing next item in a List',
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
    id: 'AutoPlayOff',
    category: 'Input',
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
    id: 'AutoPlayOn',
    category: 'Input',
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
    id: 'AutoRestartOff',
    category: 'Input',
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
    id: 'AutoRestartOn',
    category: 'Input',
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
    id: 'ColourCorrectionAuto',
    category: 'Input',
    description: 'Basic Auto Colour Correction',
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
    id: 'ColourCorrectionReset',
    category: 'Input',
    description: 'Reset Colour Correction to Default Values',
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
    id: 'CreateVirtualInput',
    category: 'Input',
    description: 'Create a new Virtual Input from the specified Input',
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
    id: 'DeinterlaceOff',
    category: 'Input',
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
    id: 'DeinterlaceOn',
    category: 'Input',
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
    id: 'Effect1',
    category: 'Input',
    description: 'Toggle Effect 1 On/Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect1Off',
    category: 'Input',
    description: 'Toggle Effect 1 Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect1On',
    category: 'Input',
    description: 'Toggle Effect 1 On',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect2',
    category: 'Input',
    description: 'Toggle Effect 2 On/Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect2Off',
    category: 'Input',
    description: 'Toggle Effect 2 Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect2On',
    category: 'Input',
    description: 'Toggle Effect 2 On',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect3',
    category: 'Input',
    description: 'Toggle Effect 3 On/Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect3Off',
    category: 'Input',
    description: 'Toggle Effect 3 Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect3On',
    category: 'Input',
    description: 'Toggle Effect 3 On',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect4',
    category: 'Input',
    description: 'Toggle Effect 4 On/Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect4Off',
    category: 'Input',
    description: 'Toggle Effect 4 Off',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'Effect4On',
    category: 'Input',
    description: 'Toggle Effect 4 On',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'InputPreviewHide',
    category: 'Input',
    description: 'Hides large preview of input',
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
    id: 'InputPreviewShow',
    category: 'Input',
    description: 'Shows large preview of input',
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
    id: 'InputPreviewShowHide',
    category: 'Input',
    description: 'Toggles large preview of input',
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
    id: 'LayerOff',
    category: 'Input',
    description: 'Turn Off Layer For Input At Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'LayerOn',
    category: 'Input',
    description: 'Turn On Layer For Input At Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'LayerOnOff',
    category: 'Input',
    description: 'Turn OnOff Layer For Input At Index (starting from 1)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Index',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'ListAdd',
    category: 'Input',
    description: 'Add Filename to List',
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
    ],
    version: '21',
  },
  {
    id: 'ListExport',
    category: 'Input',
    description: 'Export List as M3U to Filename',
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
    ],
    version: '21',
  },
  {
    id: 'ListPlayOut',
    category: 'Input',
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
    id: 'ListRemove',
    category: 'Input',
    description: 'Remove from List by index starting from 1',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'index',
        required: false,
        range: {
          type: 'int',
          min: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ListRemoveAll',
    category: 'Input',
    description: 'Remove all items from List',
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
    id: 'ListShowHide',
    category: 'Input',
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
    id: 'ListShuffle',
    category: 'Input',
    description: 'Shuffle (randomize) List',
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
    id: 'LivePlayPause',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '23',
  },
  {
    id: 'Loop',
    category: 'Input',
    description: 'Toggle Loop on Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'LoopOff',
    category: 'Input',
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
    id: 'LoopOn',
    category: 'Input',
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
    id: 'MarkIn',
    category: 'Input',
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
    id: 'MarkOut',
    category: 'Input',
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
    id: 'MarkReset',
    category: 'Input',
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
    id: 'MarkResetIn',
    category: 'Input',
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
    id: 'MarkResetOut',
    category: 'Input',
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
    id: 'MirrorOff',
    category: 'Input',
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
    id: 'MirrorOn',
    category: 'Input',
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
    id: 'MoveInput',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Number',
        required: true,
      },
    ],
    version: '21',
  },
  {
    id: 'MoveLayer',
    category: 'Input',
    description: 'Move Layer in Input according to Value parameter',
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
    version: '24',
  },
  {
    id: 'NextItem',
    category: 'Input',
    description: 'Move to next item in List',
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
    id: 'NextPicture',
    category: 'Input',
    description: 'Move to Next Picture for Photo and PowerPoint Inputs',
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
    id: 'Pause',
    category: 'Input',
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
    id: 'Play',
    category: 'Input',
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
    id: 'PlayPause',
    category: 'Input',
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
    id: 'PreviewInput',
    category: 'Input',
    description: 'Send to Preview the selected Input',
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
    id: 'PreviewInputNext',
    category: 'Input',
    description: 'Send to Preview the next Input',
    params: [],
    version: '21',
  },
  {
    id: 'PreviewInputPrevious',
    category: 'Input',
    description: 'Send to Preview the previous Input',
    params: [],
    version: '21',
  },
  {
    id: 'PreviousItem',
    category: 'Input',
    description: 'Move to previous item in List',
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
    id: 'PreviousPicture',
    category: 'Input',
    description: 'Move to Previous Picture for Photo and PowerPoint Inputs',
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
    id: 'RemoveInput',
    category: 'Input',
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
    id: 'ResetInput',
    category: 'Input',
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
    id: 'Restart',
    category: 'Input',
    description: 'Restart selected Input',
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
    id: 'SaveVideoDelay',
    category: 'Input',
    description: 'Save video clip from Video Delay according to Duration in milliseconds',
    params: [
      {
        name: 'Duration',
        default: 1000,
        description: 'Milliseconds',
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
    ],
    version: '21',
  },
  {
    id: 'SelectCategory',
    category: 'Input',
    description: 'Change to Category according to Value (All, Red, Green, Orange, Purple, Aqua, Blue)',
    params: [
      {
        name: 'Value',
        description: 'Category',
        required: true,
        default: 'All',
        range: {
          type: 'enum',
          values: ['All', 'Red', 'Green', 'Orange', 'Purple', 'Aqua', 'Blue'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SelectIndex',
    category: 'Input',
    description: 'Photos, List: Selects item in List according to Value starting from number 1 - Virtual Set: Zooms to selected preset using the current speed',
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
        range: {
          type: 'int',
          min: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetAlpha',
    category: 'Input',
    description: 'Set Input transparency according to Value',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Alpha 0 to 255',
        required: true,
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
    id: 'SetCCGainB',
    category: 'Input',
    description: 'Change Gain B level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 2',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGainG',
    category: 'Input',
    description: 'Change Gain G level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 2',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGainR',
    category: 'Input',
    description: 'Change Gain R level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 2',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGainRGB',
    category: 'Input',
    description: 'Change Gain RGB level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 2',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGainY',
    category: 'Input',
    description: 'Change Gain Y level of Input. 1=Original',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 2',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    ],
    version: '27',
  },
  {
    id: 'SetCCGammaB',
    category: 'Input',
    description: 'Change Gamma B level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGammaG',
    category: 'Input',
    description: 'Change Gamma G level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGammaR',
    category: 'Input',
    description: 'Change Gamma R level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGammaRGB',
    category: 'Input',
    description: 'Change Gamma RGB level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCGammaY',
    category: 'Input',
    description: 'Change Gamma Y level of Input. 0=Original',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '27',
  },
  {
    id: 'SetCCHue',
    category: 'Input',
    description: 'Charge Hue level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCLiftB',
    category: 'Input',
    description: 'Change Lift B level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCLiftG',
    category: 'Input',
    description: 'Change Lift G level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCLiftR',
    category: 'Input',
    description: 'Change Lift R level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCLiftRGB',
    category: 'Input',
    description: 'Change Lift RGB level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCCLiftY',
    category: 'Input',
    description: 'Change Lift Y level of Input. 0=Original',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '27',
  },
  {
    id: 'SetCCSaturation',
    category: 'Input',
    description: 'Change Saturation level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -1 to 1',
        required: false,
        range: {
          type: 'number',
          min: -1,
          max: 1,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetCrop',
    category: 'Input',
    description: 'Change current Crop value of Input. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetCropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input. 0=No Crop 1=Full Crop',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetCropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input. 0=No Crop 1=Full Crop',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetCropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input. 0=No Crop 1=Full Crop',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetCropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input. 0=No Crop 1=Full Crop',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetDynamicInput1',
    category: 'Input',
    description: 'Set Dynamic Input from Input Name or Number',
    params: [
      {
        name: 'Value',
        description: 'Input',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'SetDynamicInput2',
    category: 'Input',
    description: 'Set Dynamic Input from Input Name or Number',
    params: [
      {
        name: 'Value',
        description: 'Input',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'SetDynamicInput3',
    category: 'Input',
    description: 'Set Dynamic Input from Input Name or Number',
    params: [
      {
        name: 'Value',
        description: 'Input',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'SetDynamicInput4',
    category: 'Input',
    description: 'Set Dynamic Input from Input Name or Number',
    params: [
      {
        name: 'Value',
        description: 'Input',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'SetEffect1Strength',
    category: 'Input',
    description: 'Set Effect 1 Strength on Input',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 1',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'SetEffect2Strength',
    category: 'Input',
    description: 'Set Effect 2 Strength on Input',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 1',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'SetEffect3Strength',
    category: 'Input',
    description: 'Set Effect 3 Strength on Input',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 1',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'SetEffect4Strength',
    category: 'Input',
    description: 'Set Effect 4 Strength on Input',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 1',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'SetFrameDelay',
    category: 'Input',
    description: 'Set the delay in frames',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: false,
      },
      {
        name: 'Value',
        description: 'Frames',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'SetInputName',
    category: 'Input',
    description: 'Set the Display Name of the Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Name',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'SetLayer',
    category: 'Input',
    description: 'Change Layer in Input according to Value parameter',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Index,Input',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'SetLayer1Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer1Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer2Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer3Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer4Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer5Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer6Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer7Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer8Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer9Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Crop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer. X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10CropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10CropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10CropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10CropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer. 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Height',
    category: 'Input',
    description: 'Change current Height value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10PanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer. 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10PanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer. 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Rectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Width',
    category: 'Input',
    description: 'Change current Width value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10X',
    category: 'Input',
    description: 'Change current X value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Y',
    category: 'Input',
    description: 'Change current Y value of Input Layer. In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayer10Zoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer. 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerAnimated',
    description: 'Change Layer Index to Input. Animate if input exists in another layer. Example: 1,2,1000 changes Layer1 to Input2',
    category: 'Input',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Index,Input,DurationMilliseconds',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicCrop',
    category: 'Input',
    description: 'Change current Crop value of Input Layer from DynamicValue1 (1-10). X1,Y1,X2,Y2',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1,Y1,X2,Y2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicCropX1',
    category: 'Input',
    description: 'Change current Crop X1 value of Input Layer from DynamicValue1 (1-10). 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicCropX2',
    category: 'Input',
    description: 'Change current Crop X2 value of Input Layer from DynamicValue1 (1-10). 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicCropY1',
    category: 'Input',
    description: 'Change current Crop Y1 value of Input Layer from DynamicValue1 (1-10). 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y1 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicCropY2',
    category: 'Input',
    description: 'Change current Crop Y2 value of Input Layer from DynamicValue1 (1-10). 0=No Crop, 1=Full Crop',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Y2 0 to 1',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicHeight',
    category: 'Input',
    description: 'Change current Height value of Input Layer from DynamicValue1 (1-10). In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicPanX',
    category: 'Input',
    description: 'Change current PanX value of Input Layer from DynamicValue1 (1-10). 0=centered, -2=100% to left, 2=100% to right',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicPanY',
    category: 'Input',
    description: 'Change current PanY value of Input Layer from DynamicValue1 (1-10). 0=centered, -2=100% to bottom, 2=100% to top',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pan -2 to 2',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicRectangle',
    category: 'Input',
    description: 'Change current Rectangle values of Input Layer from DynamicValue1 (1-10) in pixels. X,Y,Width,Height',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'X,Y,Width,Height',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicWidth',
    category: 'Input',
    description: 'Change current Width value of Input Layer from DynamicValue1 (1-10). In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicX',
    category: 'Input',
    description: 'Change current X value of Input Layer from DynamicValue1 (1-10). In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicY',
    category: 'Input',
    description: 'Change current Y value of Input Layer from DynamicValue1 (1-10). In pixels based on preset resolution',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: 'Pixels -4096 to 4096',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetLayerDynamicZoom',
    category: 'Input',
    description: 'Change current Zoom level of Input Layer from DynamicValue1 (1-10). 1=100%, 0.5=50%, 2=200%',
    params: [
      {
        name: 'Input',
        description: 'Input',
        required: true,
      },
      {
        name: 'Value',
        description: '0 to 5',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'SetPanX',
    category: 'Input',
    description: 'Change current PanX value of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -2 to 2',
        required: true,
        range: {
          type: 'number',
          min: -2,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetPanY',
    category: 'Input',
    description: 'Change current PanY value of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value -2 to 2',
        required: true,
        range: {
          type: 'number',
          min: -2,
          max: 2,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetPictureEffect',
    category: 'Input',
    description: 'Set transition effect for Photos and PowerPoint Inputs (Fade, Zoom, etc)',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Transition',
        required: false,
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
          ],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetPictureEffectDuration',
    category: 'Input',
    description: 'Set duration of transition effect in Milliseconds',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Duration MS',
        required: false,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetPictureTransition',
    category: 'Input',
    description: 'Set transition time between Photos and PowerPoint slides in Seconds',
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
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetPosition',
    category: 'Input',
    description: 'Set Position of selected Input according to Value in Milliseconds',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Milliseconds',
        required: true,
        range: {
          type: 'int',
          min: 0,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetRate',
    category: 'Input',
    description: 'Set Playback speed/rate for Videos and Video Delays',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0.1 to 4',
        required: true,
        range: {
          type: 'number',
          min: 0.1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'SetRateSlowMotion',
    category: 'Input',
    description: 'Set Slow Motion speed for Instant Replay',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Speed 0 to 1',
        required: true,
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
    id: 'SetZoom',
    category: 'Input',
    description: 'Change current Zoom level of Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Value 0 to 5',
        required: true,
        range: {
          type: 'number',
          min: 0,
        },
      },
    ],
    info: 'Value param allows values greater than the described max of 5. Using unsupported values may result in errors',
    version: '21',
  },
  {
    id: 'SharpenOff',
    category: 'Input',
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
    id: 'SharpenOn',
    category: 'Input',
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
    id: 'SwapLayerAnimated',
    category: 'Input',
    description: 'Animate swapping the Layers in Input according to Value parameter. Example: 1,2,1000 swaps Layer1 and layer2 over 1000 ms',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'FromIndex,ToIndex,DurationMilliseconds',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'VideoCallAudioSource',
    category: 'Input',
    description: 'Master, Headphones, BusA, BusB, BusC, BusD, BusE, BusF, BusG',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Source',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'VideoCallConnect',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Name,Password',
        required: false,
      },
    ],
    version: '28',
  },
  {
    id: 'VideoCallReconnect',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '28',
  },

  {
    id: 'VideoCallVideoSource',
    category: 'Input',
    description: 'Output1, Output2, Output3, Output4',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Source',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'VideoDelayStartRecording',
    category: 'Input',
    description: 'Start Video Delay Recording',
    params: [
      {
        name: 'Duration',
        default: 1000,
        description: 'Milliseconds',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'VideoDelayStartStopRecording',
    category: 'Input',
    description: 'Toggle Video Delay Recording',
    params: [
      {
        name: 'Duration',
        default: 1000,
        description: 'Milliseconds',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'VideoDelayStopRecording',
    category: 'Input',
    description: 'Stop Video Delay Recording',
    params: [
      {
        name: 'Duration',
        default: 1000,
        description: 'Milliseconds',
        required: false,
        range: {
          type: 'int',
          min: 0,
        },
      },
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'WaitForCompletion',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ZoomJoinMeeting',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: true,
      },
      {
        name: 'Value',
        description: 'MeetingID,Password',
        required: true,
      },
    ],
    version: '28',
  },
  {
    id: 'ZoomMuteSelf',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'ZoomSelectParticipantByName',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
      {
        name: 'Value',
        description: 'Name',
        required: false,
      },
    ],
    version: '27',
  },
  {
    id: 'ZoomUnMuteSelf',
    category: 'Input',
    params: [
      {
        name: 'Input',
        default: 'Preview',
        required: false,
      },
    ],
    version: '27',
  },
]
