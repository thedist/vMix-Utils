import { type VMixFunction } from '.'

export type FunctionIDsReplay =
  | 'ReplayACamera1'
  | 'ReplayACamera2'
  | 'ReplayACamera3'
  | 'ReplayACamera4'
  | 'ReplayACamera5'
  | 'ReplayACamera6'
  | 'ReplayACamera7'
  | 'ReplayACamera8'
  | 'ReplayAppendLastEventText'
  | 'ReplayAppendLastEventTextCamera'
  | 'ReplayAppendSelectedEventText'
  | 'ReplayAppendSelectedEventTextCamera'
  | 'ReplayBCamera1'
  | 'ReplayBCamera2'
  | 'ReplayBCamera3'
  | 'ReplayBCamera4'
  | 'ReplayBCamera5'
  | 'ReplayBCamera6'
  | 'ReplayBCamera7'
  | 'ReplayBCamera8'
  | 'ReplayCamera1'
  | 'ReplayCamera2'
  | 'ReplayCamera3'
  | 'ReplayCamera4'
  | 'ReplayCamera5'
  | 'ReplayCamera6'
  | 'ReplayCamera7'
  | 'ReplayCamera8'
  | 'ReplayCCamera1'
  | 'ReplayCCamera2'
  | 'ReplayCCamera3'
  | 'ReplayCCamera4'
  | 'ReplayCCamera5'
  | 'ReplayCCamera6'
  | 'ReplayCCamera7'
  | 'ReplayCCamera8'
  | 'ReplayChangeDirection'
  | 'ReplayChangeSpeed'
  | 'ReplayCopyLastEvent'
  | 'ReplayCopySelectedEvent'
  | 'ReplayDCamera1'
  | 'ReplayDCamera2'
  | 'ReplayDCamera3'
  | 'ReplayDCamera4'
  | 'ReplayDCamera5'
  | 'ReplayDCamera6'
  | 'ReplayDCamera7'
  | 'ReplayDCamera8'
  | 'ReplayDeleteLastEvent'
  | 'ReplayDeleteSelectedEvent'
  | 'ReplayDuplicateLastEvent'
  | 'ReplayDuplicateSelectedEvent'
  | 'ReplayExportLastEvent'
  | 'ReplayFastBackward'
  | 'ReplayFastForward'
  | 'ReplayJumpFrames'
  | 'ReplayJumpFramesFastOff'
  | 'ReplayJumpFramesFastOn'
  | 'ReplayJumpToNow'
  | 'ReplayJumpToSelectedInPoint'
  | 'ReplayJumpToSelectedOutPoint'
  | 'ReplayLastEventCameraOff'
  | 'ReplayLastEventCameraOn'
  | 'ReplayLastEventSingleCameraOn'
  | 'ReplayLive'
  | 'ReplayLiveToggle'
  | 'ReplayMarkCancel'
  | 'ReplayMarkIn'
  | 'ReplayMarkInLive'
  | 'ReplayMarkInOut'
  | 'ReplayMarkInOutLive'
  | 'ReplayMarkInOutLiveFuture'
  | 'ReplayMarkInOutRecorded'
  | 'ReplayMarkInRecorded'
  | 'ReplayMarkInRecordedNow'
  | 'ReplayMarkOut'
  | 'ReplayMoveLastEvent'
  | 'ReplayMoveSelectedEvent'
  | 'ReplayMoveSelectedEventDown'
  | 'ReplayMoveSelectedEventUp'
  | 'ReplayMoveSelectedInPoint'
  | 'ReplayMoveSelectedOutPoint'
  | 'ReplayPause'
  | 'ReplayPlay'
  | 'ReplayPlayAllEvents'
  | 'ReplayPlayAllEventsToOutput'
  | 'ReplayPlayBackward'
  | 'ReplayPlayEvent'
  | 'ReplayPlayEventsByID'
  | 'ReplayPlayEventsByIDToOutput'
  | 'ReplayPlayEventToOutput'
  | 'ReplayPlayForward'
  | 'ReplayPlayLastEvent'
  | 'ReplayPlayLastEventToOutput'
  | 'ReplayPlayNext'
  | 'ReplayPlayPause'
  | 'ReplayPlayPrevious'
  | 'ReplayPlaySelectedEvent'
  | 'ReplayPlaySelectedEventToOutput'
  | 'ReplayQuadModeOff'
  | 'ReplayQuadModeOn'
  | 'ReplayRecorded'
  | 'ReplayScrollSelectedEvent'
  | 'ReplaySelectAllEvents'
  | 'ReplaySelectChannelA'
  | 'ReplaySelectChannelAB'
  | 'ReplaySelectChannelB'
  | 'ReplaySelectedEventCameraOff'
  | 'ReplaySelectedEventCameraOn'
  | 'ReplaySelectedEventSingleCameraOn'
  | 'ReplaySelectEvents1'
  | 'ReplaySelectEvents2'
  | 'ReplaySelectEvents3'
  | 'ReplaySelectEvents4'
  | 'ReplaySelectEvents5'
  | 'ReplaySelectEvents6'
  | 'ReplaySelectEvents7'
  | 'ReplaySelectEvents8'
  | 'ReplaySelectEvents9'
  | 'ReplaySelectEvents10'
  | 'ReplaySelectEvents11'
  | 'ReplaySelectEvents12'
  | 'ReplaySelectEvents13'
  | 'ReplaySelectEvents14'
  | 'ReplaySelectEvents15'
  | 'ReplaySelectEvents16'
  | 'ReplaySelectEvents17'
  | 'ReplaySelectEvents18'
  | 'ReplaySelectEvents19'
  | 'ReplaySelectEvents20'
  | 'ReplaySelectFirstEvent'
  | 'ReplaySelectLastEvent'
  | 'ReplaySelectNextEvent'
  | 'ReplaySelectPreviousEvent'
  | 'ReplaySetAudioSource'
  | 'ReplaySetChannelAToBTimecode'
  | 'ReplaySetChannelAToBTimecodeAndCamera'
  | 'ReplaySetChannelBToATimecode'
  | 'ReplaySetChannelBToATimecodeAndCamera'
  | 'ReplaySetDirectionBackward'
  | 'ReplaySetDirectionForward'
  | 'ReplaySetLastEventText'
  | 'ReplaySetLastEventTextCamera'
  | 'ReplaySetSelectedEventText'
  | 'ReplaySetSelectedEventTextCamera'
  | 'ReplaySetSpeed'
  | 'ReplaySetTimecode'
  | 'ReplayShowHide'
  | 'ReplayStartRecording'
  | 'ReplayStartStopRecording'
  | 'ReplayStopEvents'
  | 'ReplayStopRecording'
  | 'ReplaySwapChannels'
  | 'ReplayToggleLastEventCamera1'
  | 'ReplayToggleLastEventCamera2'
  | 'ReplayToggleLastEventCamera3'
  | 'ReplayToggleLastEventCamera4'
  | 'ReplayToggleLastEventCamera5'
  | 'ReplayToggleLastEventCamera6'
  | 'ReplayToggleLastEventCamera7'
  | 'ReplayToggleLastEventCamera8'
  | 'ReplayToggleQuadMode'
  | 'ReplayToggleSelectedEventCamera1'
  | 'ReplayToggleSelectedEventCamera2'
  | 'ReplayToggleSelectedEventCamera3'
  | 'ReplayToggleSelectedEventCamera4'
  | 'ReplayToggleSelectedEventCamera5'
  | 'ReplayToggleSelectedEventCamera6'
  | 'ReplayToggleSelectedEventCamera7'
  | 'ReplayToggleSelectedEventCamera8'
  | 'ReplayUpdateSelectedInPoint'
  | 'ReplayUpdateSelectedOutPoint'
  | 'ReplayUpdateSelectedSpeed'
  | 'ReplayUpdateSelectedSpeedDefault'
  | 'ReplayUpdateSelectedSpeedFromValue'

export const FunctionsReplay: VMixFunction[] = [
  {
    id: 'ReplayACamera1',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayACamera2',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayACamera3',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayACamera4',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayACamera5',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayACamera6',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayACamera7',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayAppendLastEventText',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Text',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'ReplayAppendLastEventTextCamera',
    category: 'Replay',
    description: 'Adds the text to the specified angle (1-4), example: 3,angle3text',
    params: [
      {
        name: 'Value',
        description: 'Camera,Text',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'ReplayAppendSelectedEventText',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Text',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'ReplayAppendSelectedEventTextCamera',
    category: 'Replay',
    description: 'Adds the text to the specified angle (1-4), example: 3,angle3text',
    params: [
      {
        name: 'Value',
        description: 'Camera,Text',
        required: false,
      },
    ],
    version: '29',
  },
  {
    id: 'ReplayACamera8',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayBCamera1',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayBCamera2',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayBCamera3',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayBCamera4',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayBCamera5',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayBCamera6',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayBCamera7',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayBCamera8',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayCamera1',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera2',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera3',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera4',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera5',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera6',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera7',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCamera8',
    category: 'Replay',
    params: [],
    version: 'ReplayACamera5',
  },
  {
    id: 'ReplayCCamera1',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera2',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera3',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera4',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera5',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera6',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera7',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayCCamera8',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayChangeDirection',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayChangeSpeed',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Speed',
        required: false,
        range: {
          type: 'number',
        },
      },
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayCopyLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Event List 0 to 7',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 7,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayCopySelectedEvent',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Event List 0 to 7',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 7,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayDCamera1',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera2',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera3',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera4',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera5',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera6',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera7',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDCamera8',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayDeleteLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayDeleteSelectedEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayDuplicateLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayDuplicateSelectedEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayExportLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Folder',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayFastBackward',
    category: 'Replay',
    description: '1 to 30s',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Speed',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 30,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayFastForward',
    category: 'Replay',
    description: '1 to 30s',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Speed',
        required: false,
        range: {
          type: 'number',
          min: 0,
          max: 30,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayJumpFrames',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Frames',
        required: false,
        range: {
          type: 'int',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayJumpFramesFastOff',
    category: 'Replay',
    description: 'ReplayJumpFrames jumps 1 frame for each value instead of 1 second',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayJumpFramesFastOn',
    category: 'Replay',
    description: 'ReplayJumpFrames jumps 1 second for each value instead of 1 frame',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayJumpToNow',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayJumpToSelectedInPoint',
    category: 'Replay',
    description: 'Set Position to In point of Selected Event',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '28',
  },
  {
    id: 'ReplayJumpToSelectedOutPoint',
    category: 'Replay',
    description: 'Set Position to Out point of Selected Event',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '28',
  },
  {
    id: 'ReplayLastEventCameraOff',
    category: 'Replay',
    description: 'Turns off the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayLastEventCameraOn',
    category: 'Replay',
    description: 'Turns on the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayLastEventSingleCameraOn',
    category: 'Replay',
    description: 'Turns on only the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayLive',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayLiveToggle',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkCancel',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkIn',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkInLive',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkInOut',
    category: 'Replay',
    description: 'Number of previous seconds to use when creating a new event',
    params: [
      {
        name: 'Value',
        default: 'Seconds',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMarkInOutLive',
    category: 'Replay',
    description: 'Number of previous seconds to use when creating a new event',
    params: [
      {
        name: 'Value',
        default: 'Seconds',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMarkInOutLiveFuture',
    category: 'Replay',
    description: 'Number of seconds into the future to use when creating a new event.',
    params: [
      {
        name: 'Value',
        default: 'Seconds',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '26',
  },
  {
    id: 'ReplayMarkInOutRecorded',
    category: 'Replay',
    description: 'Number of previous seconds to use when creating a new event',
    params: [
      {
        name: 'Value',
        description: 'Seconds',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMarkInRecorded',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkInRecordedNow',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMarkOut',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMoveLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Event List 0 to 7',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 7,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMoveSelectedEvent',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Event List 0 to 19',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 19,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMoveSelectedEventDown',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMoveSelectedEventUp',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayMoveSelectedInPoint',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Frames',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayMoveSelectedOutPoint',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Frames',
        required: false,
        range: {
          type: 'number',
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPause',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlay',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayAllEvents',
    category: 'Replay',
    description: 'Play all Events in active list',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayAllEventsToOutput',
    category: 'Replay',
    description: 'Play all Events in active list',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayBackward',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Event Number 0 to 1000',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 1000,
        },
      },
    ],
    description: 'Plays an Event by Index (not event ID)',
    version: '21',
  },
  {
    id: 'ReplayPlayEventsByID',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'List of IDs',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayEventsByIDToOutput',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'List of IDs',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayEventToOutput',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
      {
        name: 'Value',
        description: 'Event Number 0 to 1000',
        required: false,
        range: {
          type: 'int',
          min: 0,
          max: 1000,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayForward',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayLastEventToOutput',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayNext',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayPause',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlayPrevious',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlaySelectedEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayPlaySelectedEventToOutput',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayQuadModeOff',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayQuadModeOn',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayRecorded',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayScrollSelectedEvent',
    category: 'Replay',
    description: 'Move back or forward through events list',
    params: [
      {
        name: 'Value',
        description: 'Count -10 to 10',
        required: true,
      },
    ],
    version: '27',
  },
  {
    id: 'ReplaySelectAllEvents',
    category: 'Replay',
    description: 'Select all events in active channel',
    params: [],
    version: '24',
  },
  {
    id: 'ReplaySelectChannelA',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplaySelectChannelAB',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplaySelectChannelB',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplaySelectedEventCameraOff',
    category: 'Replay',
    description: 'Turns off the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectedEventCameraOn',
    category: 'Replay',
    description: 'Turns on the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectedEventSingleCameraOn',
    category: 'Replay',
    description: 'Turns on only the specified camera angle (1 to 4)',
    params: [
      {
        name: 'Value',
        description: 'Camera',
        required: false,
        range: {
          type: 'int',
          min: 1,
          max: 4,
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents1',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents2',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents3',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents4',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents5',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents6',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents7',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents8',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectEvents9',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents10',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents11',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents12',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents13',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents14',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents15',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents16',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents17',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents18',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents19',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectEvents20',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySelectFirstEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectLastEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectNextEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySelectPreviousEvent',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetAudioSource',
    category: 'Replay',
    description: 'Name as per dropdown box',
    params: [
      {
        name: 'Value',
        description: 'AudioSource',
        required: true,
      },
    ],
    version: '24',
  },
  {
    id: 'ReplaySetChannelAToBTimecode',
    category: 'Replay',
    description: 'Set A Timecode to B Timecode',
    params: [],
    version: '26',
  },
  {
    id: 'ReplaySetChannelAToBTimecodeAndCamera',
    category: 'Replay',
    description: 'Set A Timecode and Camera to B',
    params: [],
    version: '28',
  },
  {
    id: 'ReplaySetChannelBToATimecode',
    category: 'Replay',
    description: 'Set B Timecode to A Timecode',
    params: [],
    version: '26',
  },
  {
    id: 'ReplaySetChannelBToATimecodeAndCamera',
    category: 'Replay',
    description: 'Set B Timecode and Camera to A',
    params: [],
    version: '28',
  },
  {
    id: 'ReplaySetDirectionBackward',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetDirectionForward',
    category: 'Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetLastEventText',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Text',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetLastEventTextCamera',
    category: 'Replay',
    description: 'Changes the text of the specified angle (1 to 4), example: 3,angle3text',
    params: [
      {
        name: 'Value',
        description: 'Camera,Text',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetSelectedEventText',
    category: 'Replay',
    params: [
      {
        name: 'Value',
        description: 'Text',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetSelectedEventTextCamera',
    category: 'Replay',
    description: 'Changes the text of a specified angle (1 to 4), example: 3,angle3text',
    params: [
      {
        name: 'Value',
        description: 'Camera,Text',
        required: false,
      },
    ],
    version: '21',
  },
  {
    id: 'ReplaySetSpeed',
    category: 'Replay',
    description: 'Set Slow Motion speed for Instant Replay',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
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
    id: 'ReplaySetTimecode',
    category: 'Replay',
    description: 'Set position to Timecode in format yyyy-MM-ddTHH:mm:ss.fff',
    params: [
      {
        name: 'Value',
        description: 'Timecode',
        required: true,
      },
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '26',
  },
  {
    id: 'ReplayShowHide',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayStartRecording',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayStartStopRecording',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayStopEvents',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayStopRecording',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplaySwapChannels',
    category: 'Replay',
    description: 'Swap A to B and vice versa, includes angles and playback status',
    params: [],
    version: '25',
  },
  {
    id: 'ReplayToggleLastEventCamera1',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleLastEventCamera2',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleLastEventCamera3',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleLastEventCamera4',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleLastEventCamera5',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleLastEventCamera6',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleLastEventCamera7',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleLastEventCamera8',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleQuadMode',
    category: 'Replay',
    params: [],
    version: '29',
  },
  {
    id: 'ReplayToggleSelectedEventCamera1',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleSelectedEventCamera2',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleSelectedEventCamera3',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleSelectedEventCamera4',
    category: 'Replay',
    params: [],
    version: '21',
  },
  {
    id: 'ReplayToggleSelectedEventCamera5',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleSelectedEventCamera6',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleSelectedEventCamera7',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayToggleSelectedEventCamera8',
    category: 'Replay',
    params: [],
    version: '24',
  },
  {
    id: 'ReplayUpdateSelectedInPoint',
    category: 'Replay',
    description: 'Update Mark In point of Selected Event to current Position',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayUpdateSelectedOutPoint',
    category: 'Replay',
    description: 'Update Mark Out point of Selected Event to current Position',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '21',
  },
  {
    id: 'ReplayUpdateSelectedSpeed',
    category: 'Replay',
    description: 'Update Selected Event to use Current Speed',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayUpdateSelectedSpeedDefault',
    category: 'Replay',
    description: 'Update Selected Event to use Default Speed',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
      },
    ],
    version: '24',
  },
  {
    id: 'ReplayUpdateSelectedSpeedFromValue',
    category: 'Replay',
    description: 'See SetRateSlowMotion',
    params: [
      {
        name: 'Channel',
        required: true,
        default: 'Current',
        range: {
          type: 'enum',
          values: ['Current', 'A', 'B'],
        },
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
    version: '28',
  },
]
