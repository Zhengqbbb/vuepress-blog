import { defineClientConfig } from '@vuepress/client'
import { addIcons } from 'oh-vue-icons'

import {
  BiApple,
  BiGit,
  BiTerminalFill,
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  GiHook,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiChromeFill,
  RiGithubLine,
  RiInstagramLine,
  RiSailboatLine,
  RiVuejsLine,
  SiDiscord,
  ViFileTypeVscode,
} from 'oh-vue-icons/icons'
import { IVuepress } from './configs/icons'

addIcons(
  GiHook,
  BiGit,
  RiChromeFill,
  ViFileTypeVscode,
  BiTerminalFill,
  BiApple,
  SiDiscord,
  RiInstagramLine,
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  IVuepress,
)

export default defineClientConfig({})
