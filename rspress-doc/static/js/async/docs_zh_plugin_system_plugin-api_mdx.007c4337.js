(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["docs_zh_plugin_system_plugin-api_mdx"],{72097:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return t}});var r,i=s("66791"),d=s("190"),a=s("87863");function l(n){var e=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",blockquote:"blockquote"},(0,d.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"插件-api",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件-api",children:"#"}),"插件 API"]}),"\n",(0,i.jsx)(e.p,{children:"上一节我们介绍了插件的基本结构，本节我们来介绍插件的 API，帮助你更细致地了解插件功能。"}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive tip",children:[(0,i.jsx)(e.div,{className:"modern-directive-title",children:"提示"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\n为了获得更好的类型提示，你可以在项目中安装 ",(0,i.jsx)(e.code,{children:"@rspress/shared"}),"，然后通过 ",(0,i.jsx)(e.code,{children:"import { RspressPlugin } from '@rspress/shared'"})," 来引入 ",(0,i.jsx)(e.code,{children:"RspressPlugin"}),"类型。"]})})]}),"\n",(0,i.jsxs)(e.h3,{id:"globalstyles",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#globalstyles",children:"#"}),"globalStyles"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"用于添加全局样式，传入一个样式文件的绝对路径，使用方式如下："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\nimport path from 'path';\n\nexport function pluginForDoc(): RspressPlugin {\n  // 样式路径\n  const stylePath = path.join(__dirname, 'some-style.css');\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 全局样式的路径\n    globalStyles: path.join(__dirname, 'global.css'),\n  };\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"比如你想修改主题色，可以通过添加全局样式来实现："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",meta:'title="global.css"',children:":root {\n  --modern-c-brand: #ffa500;\n  --modern-c-brand-dark: #ffa500;\n  --modern-c-brand-darker: #c26c1d;\n  --modern-c-brand-light: #f2a65a;\n  --modern-c-brand-lighter: #f2a65a;\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"globaluicomponents",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#globaluicomponents",children:"#"}),"globalUIComponents"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"用于添加全局组件，传入一个数组，数组中的每一项都是一个组件的绝对路径，使用方式如下："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  // 组件路径\n  const componentPath = path.join(__dirname, 'xxx.tsx');\n  return {\n    // 插件名称\n    name: 'plugin-comp',\n    // 全局组件的路径\n    globalUIComponents: [componentPath],\n  };\n}\n"})}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(e.h3,{id:"builderconfig",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"}),"builderConfig"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"BuilderConfig"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Rspress 底层基于 ",(0,i.jsx)(e.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 的 Rspack 模式来进行文档构建。通过 ",(0,i.jsx)(e.code,{children:"builderConfig"})," 可以对 Builder 进行配置，具体的配置项可以参考 ",(0,i.jsx)(e.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"}),"。"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["当然，如果你想要直接配置 Rspack，也可以通过 ",(0,i.jsx)(e.code,{children:"buildConfig.tools.rspack"})," 进行配置。"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(slug: string): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 构建阶段的全局变量定义\n    builderConfig: {\n      source: {\n        define: {\n          SLUG: JSON.stringify(slug),\n        },\n      },\n      tools: {\n        rspack(options) {\n          // 修改 rspack 的配置\n        },\n      },\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"config",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"}),"config"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"(config: DocConfig) => DocConfig | Promise<DocConfig>"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["用于修改/扩展 Rspress 本身的配置，比如你想要修改文档的标题，可以通过 ",(0,i.jsx)(e.code,{children:"config"})," 来实现："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展 Rspress 本身的配置\n    config(config) {\n      return {\n        ...config,\n        // 这里可以扩展 Rspress 的配置\n        title: '新的文档标题',\n      };\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"beforebuildafterbuild",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildafterbuild",children:"#"}),"beforeBuild/afterBuild"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"(config: DocConfig, isProd: boolean) => void | Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"用于在文档构建之前/之后执行一些操作，第一个参数是文档的配置，第二个参数是当前是否是生产环境。使用方式如下："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 在构建之前执行的钩子\n    async beforeBuild(config, isProd) {\n      // 这里可以执行一些操作\n    },\n    // 在构建之后执行的钩子\n    async afterBuild(config, isProd) {\n      // 这里可以执行一些操作\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive tip",children:[(0,i.jsx)(e.div,{className:"modern-directive-title",children:"提醒"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\n在 ",(0,i.jsx)(e.code,{children:"beforeBuild"})," 钩子执行时，已经经过了所有插件的 ",(0,i.jsx)(e.code,{children:"config"}),"插件处理，因此 config 参数已经代表了最终的文档配置。"]})})]}),"\n",(0,i.jsxs)(e.h3,{id:"markdown",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"}),"markdown"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"{ remarkPlugins?: Plugin[]; rehypePlugins?: Plugin[]; globalComponents?: string[] }"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["用于扩展 Markdown/MDX 的编译能力，如果你想要添加自定义的 remark/rehype 插件以及 MDX 里的全局组件，可以通过 ",(0,i.jsx)(e.code,{children:"markdown"})," 配置来实现："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展 Markdown/MDX 编译能力\n    markdown: {\n      remarkPlugins: [\n        // 添加自定义的 remark 插件\n      ],\n      rehypePlugins: [\n        // 添加自定义的 rehype 插件\n      ],\n      globalComponents: [\n        // 为 MDX 注册全局组件\n      ],\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive warning",children:[(0,i.jsx)(e.div,{className:"modern-directive-title",children:"注意"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\n在开启 mdx-rs 编译的情况下(即配置文件中 ",(0,i.jsx)(e.code,{children:"markdown.experimentalMdxRs"})," 为 ",(0,i.jsx)(e.code,{children:"true"}),")，添加的 remark/rehype 插件会被忽略。"]})})]}),"\n",(0,i.jsxs)(e.h3,{id:"extendpagedata",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#extendpagedata",children:"#"}),"extendPageData"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"(pageData: PageData) => void | Promise<void>"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["用于扩展页面数据，比如你想要在页面数据中添加一些自定义的属性，可以通过 ",(0,i.jsx)(e.code,{children:"extendPageData"})," 来实现："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展页面数据\n    extendPageData(pageData) {\n      // 你可以往 pageData 对象上添加或者修改属性\n      pageData.a = 1;\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["在扩展页面数据之后，你可以在主题中通过 ",(0,i.jsx)(e.code,{children:"usePageData"})," 这个 hook 来访问页面数据。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"",children:"import { usePageData } from 'rspress';\n\nexport function MyComponent() {\n  const { page } = usePageData();\n  // page.a === 1\n  return <div>{page.a}</div>;\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"addpages",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addpages",children:"#"}),"addPages"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"(config: UserConfig) => AdditionalPage[] | Promise<AdditionalPage[]>"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["其中，",(0,i.jsx)(e.code,{children:"config"})," 为 ",(0,i.jsx)(e.code,{children:"rspress.config.ts"})," 配置文件中导出的 ",(0,i.jsx)(e.code,{children:"doc"})," 属性值，",(0,i.jsx)(e.code,{children:"AdditionalPage"})," 的类型定义如下："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"",children:"interface AdditionalPage {\n  routePath: string;\n  filepath?: string;\n  content?: string;\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["主要用来添加额外的页面，你可以在 ",(0,i.jsx)(e.code,{children:"addPages"})," 函数中返回一个数组，数组中的每一项都是一个页面的配置，你可以通过 ",(0,i.jsx)(e.code,{children:"routePath"})," 来指定页面的路由，通过 ",(0,i.jsx)(e.code,{children:"filepath"})," 或者 ",(0,i.jsx)(e.code,{children:"content"})," 来指定页面的内容。比如："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"",children:"import path from 'path';\nimport { RspressPlugin } from '@rspress/shared';\n\nexport function docPluginDemo(): RspressPlugin {\n  return {\n    name: 'add-pages',\n    addPages(config, isProd) {\n      return [\n        //  支持真实文件的绝对路径(filepath)，这样会读取磁盘中的 md(x) 内容\n        {\n          routePath: '/filepath-route',\n          filepath: path.join(__dirname, 'blog', 'index.md'),\n        },\n        //  支持通过 content 参数直接传入 md(x) 内容\n        {\n          routePath: '/content-route',\n          content: '# Demo2',\n        },\n      ];\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"addPages"})," 接受两个参数，",(0,i.jsx)(e.code,{children:"config"})," 为当前文档站的配置，",(0,i.jsx)(e.code,{children:"isProd"})," 表示是否为生产环境。"]}),"\n",(0,i.jsxs)(e.h3,{id:"routegenerated",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#routegenerated",children:"#"}),"routeGenerated"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型"}),"：",(0,i.jsx)(e.code,{children:"(routeMeta: RouteMeta[]) => void | Promise<void>"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"这这个钩子中，你可以拿到所有的路由信息，每一项路由信息的结构如下:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:"",children:"export interface RouteMeta {\n  // 路由\n  routePath: string;\n  // 文件绝对路径\n  absolutePath: string;\n  // 页面名称，作为打包产物文件名的一部分\n  pageName: string;\n  // 语言\n  lang: string;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"例子:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { RspressPlugin } from '@rspress/shared';\n\nexport function pluginForDoc(): RspressPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-routes',\n    // 在构建之后执行的钩子\n    async routeGenerated(routes) {\n      // 这里可以拿到 routes 数组，执行一些操作\n    },\n  };\n}\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugin%2Fsystem%2Fplugin-api.mdx"]={toc:[{id:"globalstyles",text:"globalStyles",depth:3},{id:"globaluicomponents",text:"globalUIComponents",depth:3},{id:"builderconfig",text:"builderConfig",depth:3},{id:"config",text:"config",depth:3},{id:"beforebuildafterbuild",text:"beforeBuild/afterBuild",depth:3},{id:"markdown",text:"markdown",depth:3},{id:"extendpagedata",text:"extendPageData",depth:3},{id:"addpages",text:"addPages",depth:3},{id:"routegenerated",text:"routeGenerated",depth:3}],title:"插件 API",frontmatter:{}};var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}}}]);