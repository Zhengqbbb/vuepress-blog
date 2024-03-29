/* eslint-disable @typescript-eslint/no-var-requires */
import { defineUserConfig, viteBundler } from 'vuepress'
import { gungnirTheme } from 'vuepress-theme-gungnir'
import { pageInfo } from './configs'
import * as pagePlugins from './plugins'

export default defineUserConfig({
  base: pageInfo.base,
  head: pageInfo.headConfig,
  title: pageInfo.title,
  description: pageInfo.description,
  lang: pageInfo.lang,
  bundler: viteBundler(),

  plugins: [
    pagePlugins.docSearchPlugin,
    pagePlugins.codeCopyPlugin,
    pagePlugins.searchCNConsolePlugin,
  ],
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-task-lists'))
    md.use(require('markdown-it-deflist'))
  },

  theme: gungnirTheme(pageInfo.themeConfig),
})
