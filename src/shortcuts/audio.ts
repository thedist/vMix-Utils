import { type VMixShortcut } from '.'

export type ShortcutIDsAudio =
  | 'Audio'
  | 'AudioAuto'
  | 'AudioAutoOff'
  | 'AudioAutoOn'
  | 'AudioBus'
  | 'AudioBusOff'
  | 'AudioBusOn'
  | 'AudioChannelMatrixApplyPreset'
  | 'AudioMixerShowHide'
  | 'AudioOff'
  | 'AudioOn'
  | 'AudioPluginOff'
  | 'AudioPluginOn'
  | 'AudioPluginOnOff'
  | 'AudioPluginShow'
  | 'BusAAudio'
  | 'BusAAudioOff'
  | 'BusAAudioOn'
  | 'BusAAudioPluginOff'
  | 'BusAAudioPluginOn'
  | 'BusAAudioPluginOnOff'
  | 'BusAAudioPluginShow'
  | 'BusBAudio'
  | 'BusBAudioOff'
  | 'BusBAudioOn'
  | 'BusBAudioPluginOff'
  | 'BusBAudioPluginOn'
  | 'BusBAudioPluginOnOff'
  | 'BusBAudioPluginShow'
  | 'BusXAudio'
  | 'BusXAudioOff'
  | 'BusXAudioOn'
  | 'BusXAudioPluginOff'
  | 'BusXAudioPluginOn'
  | 'BusXAudioPluginOnOff'
  | 'BusXAudioPluginShow'
  | 'BusXSendToMaster'
  | 'BusXSendToMasterOff'
  | 'BusXSendToMasterOn'
  | 'BusXSolo'
  | 'BusXSoloOff'
  | 'BusXSoloOn'
  | 'MasterAudio'
  | 'MasterAudioOff'
  | 'MasterAudioOn'
  | 'MasterAudioPluginOff'
  | 'MasterAudioPluginOn'
  | 'MasterAudioPluginOnOff'
  | 'MasterAudioPluginShow'
  | 'SetBalance'
  | 'SetBusAVolume'
  | 'SetBusAVolumeFade'
  | 'SetBusBVolume'
  | 'SetBusBVolumeFade'
  | 'SetBusCVolume'
  | 'SetBusCVolumeFade'
  | 'SetBusDVolume'
  | 'SetBusDVolumeFade'
  | 'SetBusEVolume'
  | 'SetBusEVolumeFade'
  | 'SetBusFVolume'
  | 'SetBusFVolumeFade'
  | 'SetBusGVolume'
  | 'SetBusGVolumeFade'
  | 'SetGain'
  | 'SetGainChannel1'
  | 'SetGainChannel2'
  | 'SetHeadphonesVolume'
  | 'SetMasterVolume'
  | 'SetMasterVolumeFade'
  | 'SetVolume'
  | 'SetVolumeBusMixer'
  | 'SetVolumeBusMixerA'
  | 'SetVolumeBusMixerB'
  | 'SetVolumeBusMixerC'
  | 'SetVolumeBusMixerD'
  | 'SetVolumeBusMixerE'
  | 'SetVolumeBusMixerF'
  | 'SetVolumeBusMixerG'
  | 'SetVolumeBusMixerM'
  | 'SetVolumeChannel1'
  | 'SetVolumeChannel2'
  | 'SetVolumeChannelMixer'
  | 'SetVolumeChannelMixer1'
  | 'SetVolumeChannelMixer2'
  | 'SetVolumeChannelMixer3'
  | 'SetVolumeChannelMixer4'
  | 'SetVolumeChannelMixer5'
  | 'SetVolumeChannelMixer6'
  | 'SetVolumeChannelMixer7'
  | 'SetVolumeChannelMixer8'
  | 'SetVolumeChannelMixer9'
  | 'SetVolumeChannelMixer10'
  | 'SetVolumeChannelMixer11'
  | 'SetVolumeChannelMixer12'
  | 'SetVolumeChannelMixer13'
  | 'SetVolumeChannelMixer14'
  | 'SetVolumeChannelMixer15'
  | 'SetVolumeChannelMixer16'
  | 'SetVolumeFade'
  | 'Solo'
  | 'SoloAllOff'
  | 'SoloOff'
  | 'SoloOn'
  | 'SoloPFL'
  | 'SoloPFLOff'
  | 'SoloPFLOn'

export const FunctionsAudio: VMixShortcut[] = [
  {
    id: 'Audio',
    category: 'Audio',
    description: 'Toggle Audio mute On/Off',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioAuto',
    category: 'Audio',
    description: '',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioAutoOff',
    category: 'Audio',
    description: '',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioAutoOn',
    category: 'Audio',
    description: '',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioBus',
    category: 'Audio',
    description: '',
    params: [
      { name: 'Input', description: '', default: 'Preview', required: false },
      { name: 'Value', description: 'Bus M,A,B,C,D,E,F,G', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } },
    ],
    version: '21',
  },
  {
    id: 'AudioBusOff',
    category: 'Audio',
    description: '',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Bus M,A,B,C,D,E,F,G', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } },
    ],
    version: '21',
  },
  {
    id: 'AudioBusOn',
    category: 'Audio',
    description: '',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Bus M,A,B,C,D,E,F,G', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } },
    ],
    version: '21',
  },
  {
    id: 'AudioChannelMatrixApplyPreset',
    category: 'Audio',
    description: 'Apply preset to channel matrix',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Preset Name', default: '', required: true },
    ],
    version: '24',
  },
  {
    id: 'AudioMixerShowHide',
    description: '',
    category: 'Audio',
    params: [],
    version: '21',
  },
  {
    id: 'AudioOff',
    category: 'Audio',
    description: '',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioOn',
    category: 'Audio',
    description: '',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '21',
  },
  {
    id: 'AudioPluginOff',
    category: 'Audio',
    description: 'Turn off Audio Plugin, starting from 1',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } },
    ],
    version: '21',
  },
  {
    id: 'AudioPluginOn',
    category: 'Audio',
    description: 'Turn on Audio Plugin, starting from 1',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } },
    ],
    version: '21',
  },
  {
    id: 'AudioPluginOnOff',
    category: 'Audio',
    description: 'Turn on/off Audio Plugin, starting from 1',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } },
    ],
    version: '21',
  },
  {
    id: 'AudioPluginShow',
    category: 'Audio',
    description: 'Show Audio Plugin Editor, starting from 1',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Plugin Number', required: false },
    ],
    version: '21',
  },
  { id: 'BusAAudio', category: 'Audio', params: [], version: '21' },
  { id: 'BusAAudioOff', category: 'Audio', params: [], version: '21' },
  { id: 'BusAAudioOn', category: 'Audio', params: [], version: '21' },
  {
    id: 'BusAAudioPluginOff',
    category: 'Audio',
    description: 'Turn off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus A isn't configured in Audio Output settings",
  },
  {
    id: 'BusAAudioPluginOn',
    category: 'Audio',
    description: 'Turn on Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus A isn't configured in Audio Output settings",
  },
  {
    id: 'BusAAudioPluginOnOff',
    category: 'Audio',
    description: 'Turn on/off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus A isn't configured in Audio Output settings",
  },
  {
    id: 'BusAAudioPluginShow',
    category: 'Audio',
    description: 'Show Audio Plugin Editor, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus A isn't configured in Audio Output settings",
  },
  { id: 'BusBAudio', category: 'Audio', params: [], version: '21' },
  { id: 'BusBAudioOff', category: 'Audio', params: [], version: '21' },
  { id: 'BusBAudioOn', category: 'Audio', params: [], version: '21' },
  {
    id: 'BusBAudioPluginOff',
    category: 'Audio',
    description: 'Turn off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus B isn't configured in Audio Output settings",
  },
  {
    id: 'BusBAudioPluginOn',
    category: 'Audio',
    description: 'Turn on Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus B isn't configured in Audio Output settings",
  },
  {
    id: 'BusBAudioPluginOnOff',
    category: 'Audio',
    description: 'Turn on/off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus B isn't configured in Audio Output settings",
  },
  {
    id: 'BusBAudioPluginShow',
    category: 'Audio',
    description: 'Show Audio Plugin Editor, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
    info: "Returns an error if Bus B isn't configured in Audio Output settings",
  },
  {
    id: 'BusXAudio',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXAudioOff',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXAudioOn',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  { id: 'BusXAudioPluginOff', category: 'Audio', params: [{ name: 'Value', description: 'Bus,PluginNumber', required: true }], version: '23' },
  { id: 'BusXAudioPluginOn', category: 'Audio', params: [{ name: 'Value', description: 'Bus,PluginNumber', required: true }], version: '23' },
  { id: 'BusXAudioPluginOnOff', category: 'Audio', params: [{ name: 'Value', description: 'Bus', required: true }], version: '23' },
  { id: 'BusXAudioPluginShow', category: 'Audio', params: [{ name: 'Value', description: 'Bus', required: true }], version: '23' },
  {
    id: 'BusXSendToMaster',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXSendToMasterOff',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXSendToMasterOn',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXSolo',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXSoloOff',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  {
    id: 'BusXSoloOn',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Bus', required: true, default: 'M', range: { type: 'enum', values: ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] } }],
    version: '23',
  },
  { id: 'MasterAudio', category: 'Audio', params: [], version: '21' },
  { id: 'MasterAudioOff', category: 'Audio', params: [], version: '21' },
  { id: 'MasterAudioOn', category: 'Audio', params: [], version: '21' },
  {
    id: 'MasterAudioPluginOff',
    category: 'Audio',
    description: 'Turn off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
  },
  {
    id: 'MasterAudioPluginOn',
    category: 'Audio',
    description: 'Turn on Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
  },
  {
    id: 'MasterAudioPluginOnOff',
    category: 'Audio',
    description: 'Turn on/off Audio Plugin, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
  },
  {
    id: 'MasterAudioPluginShow',
    category: 'Audio',
    description: 'Show Audio Plugin Editor, starting from 1',
    params: [{ name: 'Value', description: 'Plugin Number', required: false, range: { type: 'int', min: 1 } }],
    version: '21',
  },
  {
    id: 'SetBalance',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Balance -1 to 1', required: true, range: { type: 'number', min: -1, max: 1 } },
    ],
    version: '21',
  },
  {
    id: 'SetBusAVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '21',
  },
  {
    id: 'SetBusAVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusBVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '21',
  },
  {
    id: 'SetBusBVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusCVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '23',
  },
  {
    id: 'SetBusCVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusDVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '23',
  },
  {
    id: 'SetBusDVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusEVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '23',
  },
  {
    id: 'SetBusEVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusFVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '23',
  },
  {
    id: 'SetBusFVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetBusGVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '23',
  },
  {
    id: 'SetBusGVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetGain',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Gain dB 0 to 24', required: true, range: { type: 'number', min: 0, max: 24 } },
    ],
    version: '21',
  },
  {
    id: 'SetGainChannel1',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Gain dB 0 to 24', required: true, range: { type: 'number', min: 0, max: 24 } },
    ],
    version: '21',
  },
  {
    id: 'SetGainChannel2',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Gain dB 0 to 24', required: true, range: { type: 'number', min: 0, max: 24 } },
    ],
    version: '21',
  },
  {
    id: 'SetHeadphonesVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '21',
  },
  {
    id: 'SetMasterVolume',
    category: 'Audio',
    params: [{ name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } }],
    version: '21',
  },
  {
    id: 'SetMasterVolumeFade',
    category: 'Audio',
    description: 'Set volume gradually over x milliseconds',
    params: [{ name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true }],
    version: '28',
  },
  {
    id: 'SetVolume',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '21',
  },
  {
    id: 'SetVolumeBusMixer',
    description: "Set Volume of an Input's Bus Mixer (M,A,B,C,D,E,F,G)",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Bus,Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerA',
    description: "Set Volume of an Input's A Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerB',
    description: "Set Volume of an Input's B Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerC',
    description: "Set Volume of an Input's C Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerD',
    description: "Set Volume of an Input's D Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerE',
    description: "Set Volume of an Input's E Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerF',
    description: "Set Volume of an Input's F Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerG',
    description: "Set Volume of an Input's G Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeBusMixerM',
    description: "Set Volume of an Input's M Bus",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannel1',
    description: 'When using SeparateMono on an Audio Input, this can be used to set channel volumes independently',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '21',
  },
  {
    id: 'SetVolumeChannel2',
    description: 'When using SeparateMono on an Audio Input, this can be used to set channel volumes independently',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100', required: true, range: { type: 'number', min: 0, max: 100 } },
    ],
    version: '21',
  },
  {
    id: 'SetVolumeChannelMixer',
    description: "Set Volume of an Input's sub channel (1 to 16)",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Channel,Volume 0 to 100', required: true },
    ],
    version: '21',
  },
  {
    id: 'SetVolumeChannelMixer1',
    description: "Set Volume of an Input's sub channel 1",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer2',
    description: "Set Volume of an Input's sub channel 2",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer3',
    description: "Set Volume of an Input's sub channel 3",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer4',
    description: "Set Volume of an Input's sub channel 4",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer5',
    description: "Set Volume of an Input's sub channel 5",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer6',
    description: "Set Volume of an Input's sub channel 6",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer7',
    description: "Set Volume of an Input's sub channel 7",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer8',
    description: "Set Volume of an Input's sub channel 8",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer9',
    description: "Set Volume of an Input's sub channel 9",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer10',
    description: "Set Volume of an Input's sub channel 10",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer11',
    description: "Set Volume of an Input's sub channel 11",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer12',
    description: "Set Volume of an Input's sub channel 12",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer13',
    description: "Set Volume of an Input's sub channel 13",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer14',
    description: "Set Volume of an Input's sub channel 14",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer15',
    description: "Set Volume of an Input's sub channel 15",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeChannelMixer16',
    description: "Set Volume of an Input's sub channel 16",
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: true },
      { name: 'Value', description: 'Volume 0 to 100', required: true },
    ],
    version: '27',
  },
  {
    id: 'SetVolumeFade',
    description: 'Set volume gradually over x milliseconds',
    category: 'Audio',
    params: [
      { name: 'Input', default: 'Preview', required: false },
      { name: 'Value', description: 'Volume 0 to 100,Milliseconds', required: true },
    ],
    version: '21',
  },
  { id: 'Solo', category: 'Audio', params: [{ name: 'Input', default: 'Preview', required: false }], version: '21' },
  { id: 'SoloAllOff', description: 'Turn off Solo for all Inputs and Busses', category: 'Audio', params: [], version: '27' },
  { id: 'SoloOff', category: 'Audio', params: [{ name: 'Input', default: 'Preview', required: false }], version: '21' },
  { id: 'SoloOn', category: 'Audio', params: [{ name: 'Input', default: 'Preview', required: false }], version: '21' },
  {
    id: 'SoloPFL',
    description: 'Toggle between AFL or PFL mode for Solo',
    category: 'Audio',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '27',
  },
  {
    id: 'SoloPFLOff',
    description: 'Turn off PFL mode for Solo',
    category: 'Audio',
    params: [{ name: 'Input', default: 'Preview', required: false }],
    version: '27',
  },
  { id: 'SoloPFLOn', description: 'Turn on PFL mode for Solo', category: 'Audio', params: [{ name: 'Input', default: 'Preview', required: false }], version: '27' },
]
