(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["docs_zh_api_config_config-build_mdx"],{76018:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var d,s=r("66791"),i=r("190"),l=r("12733");function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",h3:"h3",blockquote:"blockquote",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"构建配置",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建配置",children:"#"}),"构建配置"]}),"\n",(0,s.jsxs)(n.h2,{id:"builderconfig",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"}),"builderConfig"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["用于自定义 Modern.js Builder 的配置项，完整配置项请查看 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如，将产物目录修改为 ",(0,s.jsx)(n.code,{children:"doc_dist"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"export default defineConfig({\n  builderConfig: {\n    output: {\n      distPath: {\n        root: 'doc_dist',\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"builderplugins",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugins",children:"#"}),"builderPlugins"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"BuilderPlugin[]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["用于加入 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder 的插件"}),"，比如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\nimport { builderPluginStylus } from '@rspress/builder-plugin-stylus';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginStylus()],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"默认配置",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认配置",children:"#"}),"默认配置"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你需要查看默认的 ",(0,s.jsx)(n.code,{children:"builderConfig"}),"，可以在执行 ",(0,s.jsx)(n.code,{children:"rspress dev"})," 或 ",(0,s.jsx)(n.code,{children:"rspress build"})," 命令时，添加 ",(0,s.jsx)(n.code,{children:"DEBUG=builder"})," 参数："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"",children:"DEBUG=builder rspress dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["在执行后，",(0,s.jsx)(n.code,{children:"doc_build"})," 目录下会生成 ",(0,s.jsx)(n.code,{children:"builder.config.js"})," 文件，里面包含了完整的 ",(0,s.jsx)(n.code,{children:"builderConfig"}),"。"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["请查看 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - 调试模式"})," 来了解更多调试 Builder 的方法。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"markdown",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"}),"markdown"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"配置 MDX 相关的编译能力。"}),"\n",(0,s.jsxs)(n.h3,{id:"markdownremarkplugins",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownremarkplugins",children:"#"}),"markdown.remarkPlugins"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"配置 remark 插件。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  markdown: {\n    remarkPlugins: [\n      [\n        require('remark-autolink-headings'),\n        {\n          behavior: 'wrap',\n        },\n      ],\n    ],\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"markdownrehypeplugins",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownrehypeplugins",children:"#"}),"markdown.rehypePlugins"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"配置 rehype 插件。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  markdown: {\n    rehypePlugins: [\n      [\n        require('rehype-autolink-headings'),\n        {\n          behavior: 'wrap',\n        },\n      ],\n    ],\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"markdowncheckdeadlinks",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdowncheckdeadlinks",children:"#"}),"markdown.checkDeadLinks"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否检查死链。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  markdown: {\n    checkDeadLinks: true,\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"开启这个配置后，框架会基于约定式路由表对文档中的链接进行检查，若出现无法访问的链接，构建会抛出错误并退出。"}),"\n",(0,s.jsxs)(n.h3,{id:"markdownexperimentalmdxrs",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownexperimentalmdxrs",children:"#"}),"markdown.experimentalMdxRs"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否使用 MDX 的 Rust 版本编译器，为实验性质功能。比如："}),"\n","\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"markdownshowlinenumbers",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownshowlinenumbers",children:"#"}),"markdown.showLineNumbers"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["是否显示代码块的行号。默认为 ",(0,s.jsx)(n.code,{children:"false"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"markdownglobalcomponents",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownglobalcomponents",children:"#"}),"markdown.globalComponents"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"注册全局组件，无需通过导入声明，就可以在每个 MDX 文件中使用。比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\nimport path from 'path';\n\nexport default defineConfig({\n  markdown: {\n    globalComponents: [path.join(__dirname, 'src/src/components/Alert.tsx')],\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["这样你就可以在 MDX 文件中使用 ",(0,s.jsx)(n.code,{children:"Alert"})," 组件了："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mdx",meta:'title="test.mdx"',children:'<Alert type="info">This is a info alert</Alert>\n'})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive danger",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"警告"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\n请勿在配置 ",(0,s.jsx)(n.code,{children:"globalComponents"})," 时开启 ",(0,s.jsx)(n.code,{children:"experimentalMdxRs"}),"，否则会导致全局组件不生效。"]})})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig%2Fconfig-build.mdx"]={toc:[{id:"builderconfig",text:"builderConfig",depth:2},{id:"builderplugins",text:"builderPlugins",depth:2},{id:"默认配置",text:"默认配置",depth:3},{id:"markdown",text:"markdown",depth:2},{id:"markdownremarkplugins",text:"markdown.remarkPlugins",depth:3},{id:"markdownrehypeplugins",text:"markdown.rehypePlugins",depth:3},{id:"markdowncheckdeadlinks",text:"markdown.checkDeadLinks",depth:3},{id:"markdownexperimentalmdxrs",text:"markdown.experimentalMdxRs",depth:3},{id:"markdownshowlinenumbers",text:"markdown.showLineNumbers",depth:3},{id:"markdownglobalcomponents",text:"markdown.globalComponents",depth:3}],title:"构建配置",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);