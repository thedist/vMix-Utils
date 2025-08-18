import { FunctionsAudio, type FunctionIDsAudio } from './audio'
import { FunctionsBrowser, type FunctionIDsBrowser } from './browser'
import { FunctionsDataSources, type FunctionIDsDataSources } from './dataSources'
import { FunctionsGeneral, type FunctionIDsGeneral } from './general'
import { FunctionsInput, type FunctionIDsInput } from './input'
import { FunctionsNDI, type FunctionIDsNDI } from './ndi'
import { FunctionsOMT, type FunctionIDsOMT } from './omt'
import { FunctionsOutput, type FunctionIDsOutput } from './output'
import { FunctionsOverlay, type FunctionIDsOverlay } from './overlay'
import { FunctionsPlayList, type FunctionIDsPlayList } from './playlist'
import { FunctionsPreset, type FunctionIDsPreset } from './preset'
import { FunctionsPTZ, type FunctionIDsPTZ } from './ptz'
import { FunctionsReplay, type FunctionIDsReplay } from './replay'
import { FunctionsScripting, type FunctionIDsScripting } from './scripting'
import { FunctionsTitle, type FunctionIDsTitle } from './title'
import { FunctionsTransition, type FunctionIDsTransition } from './transition'

export type Category =
  | 'General'
  | 'Audio'
  | 'Transition'
  | 'Output'
  | 'Title'
  | 'Input'
  | 'Overlay'
  | 'PlayList'
  | 'Scripting'
  | 'Replay'
  | 'NDI'
  | 'OMT'
  | 'PTZ'
  | 'Preset'
  | 'DataSources'
  | 'Browser'

export type VMixFunction = {
  id: FunctionIDs
  category: Category
  description?: string
  params: FunctionParams[]
  version: string
  info?: string
}

export type FunctionIDs =
  | FunctionIDsAudio
  | FunctionIDsBrowser
  | FunctionIDsDataSources
  | FunctionIDsGeneral
  | FunctionIDsInput
  | FunctionIDsNDI
  | FunctionIDsOMT
  | FunctionIDsOutput
  | FunctionIDsOverlay
  | FunctionIDsPlayList
  | FunctionIDsPreset
  | FunctionIDsPTZ
  | FunctionIDsReplay
  | FunctionIDsScripting
  | FunctionIDsTitle
  | FunctionIDsTransition

export type FunctionParams = {
  name: string
  default?: string | number
  description?: string
  required: boolean
  range?: EnumRange | IntRange | NumberRange
  multiline?: boolean
}

type EnumRange = {
  type: 'enum'
  values: (string | number)[]
}

type IntRange = {
  type: 'int'
  min?: number
  max?: number
}

type NumberRange = {
  type: 'number'
  min?: number
  max?: number
}

export const functions: VMixFunction[] = [
  ...FunctionsGeneral,
  ...FunctionsAudio,
  ...FunctionsTransition,
  ...FunctionsOutput,
  ...FunctionsTitle,
  ...FunctionsInput,
  ...FunctionsOverlay,
  ...FunctionsPlayList,
  ...FunctionsScripting,
  ...FunctionsReplay,
  ...FunctionsNDI,
  ...FunctionsOMT,
  ...FunctionsPTZ,
  ...FunctionsPreset,
  ...FunctionsDataSources,
  ...FunctionsBrowser,
]
