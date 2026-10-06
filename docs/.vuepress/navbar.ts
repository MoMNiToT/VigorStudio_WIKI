/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '前言', link: '/preface/' },
  { text: 'AIGC', link: '/aigc/' },
  { text: '导演', link: '/director/' },
  { text: '摄制', link: '/photo/' },
  { text: '后期', link: '/video/' },
  { text: '舞台', link: '/stage/' },
  { text: '直播', link: '/live/' },
])
