import { FunctionsAudio, type ShortcutIDsAudio } from './audio'
import { FunctionsBrowser, type ShortcutIDsBrowser } from './browser'
import { FunctionsDataSources, type ShortcutIDsDataSources } from './dataSources'
import { FunctionsGeneral, type ShortcutIDsGeneral } from './general'
import { FunctionsInput, type ShortcutIDsInput } from './input'
import { FunctionsNDI, type ShortcutIDsNDI } from './ndi'
import { FunctionsOutput, type ShortcutIDsOutput } from './output'
import { FunctionsOverlay, type ShortcutIDsOverlay } from './overlay'
import { FunctionsPlayList, type ShortcutIDsPlayList } from './playlist'
import { FunctionsPreset, type ShortcutIDsPreset } from './preset'
import { FunctionsPTZ, type ShortcutIDsPTZ } from './ptz'
import { FunctionsReplay, type ShortcutIDsReplay } from './replay'
import { FunctionsScripting, type ShortcutIDsScripting } from './scripting'
import { FunctionsTitle, type ShortcutIDsTitle } from './title'
import { FunctionsTransition, type ShortcutIDsTransition } from './transition'

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
  | 'PTZ'
  | 'Preset'
  | 'DataSources'
  | 'Browser'

export type VMixShortcut = {
  id: ShortcutIDs
  category: Category
  description?: string
  params: ShortcutParams[]
  version: string
  info?: string
}

export type ShortcutIDs =
  | ShortcutIDsAudio
  | ShortcutIDsBrowser
  | ShortcutIDsDataSources
  | ShortcutIDsGeneral
  | ShortcutIDsInput
  | ShortcutIDsNDI
  | ShortcutIDsOutput
  | ShortcutIDsOverlay
  | ShortcutIDsPlayList
  | ShortcutIDsPreset
  | ShortcutIDsPTZ
  | ShortcutIDsReplay
  | ShortcutIDsScripting
  | ShortcutIDsTitle
  | ShortcutIDsTransition

export type ShortcutParams = {
  name: string
  default?: string | number
  description?: string
  required: boolean
  range?: EnumRange | IntRange | NumberRange
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

export const shortcuts: VMixShortcut[] = [
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
  ...FunctionsPTZ,
  ...FunctionsPreset,
  ...FunctionsDataSources,
  ...FunctionsBrowser,
]
