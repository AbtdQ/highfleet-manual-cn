import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '高空舰队中文手册',
  description: '高空舰队中文手册',
  base: '/highfleet-manual-cn/'
})
