# Cloud Flow 前端样板工程


## 简介

Cloud Flow 前端样板工程，基于 React 开发，已经集成以下特性

- 默认技术栈 TypeScript + Webpack + React
- 自带 Cloud Flow 客户端 SDK （[详情](https://github.com/cloudflow-repo/cloud-flow-sdk)）
- 支持 `() => import()` 动态导入语法与代码分离（[详情](https://www.webpackjs.com/guides/code-splitting/#%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5-dynamic-imports-)）
- 支持 SCSS 预处理器
- 默认开启编译时 `gzip` 压缩
- 默认开启 `terser-webpack-plugin` 代码压缩


## 克隆

```sh
git clone https://github.com/SongshuA/cloud-flow-sample-project.git
```


## 目录结构

```
├── config (webpack 配置，可针对生产 / 开发环境单独配置)
│   ├── webpack.config.dev.js
│   ├── webpack.config.js
│   └── webpack.config.prod.js
│
├── public (静态资源，其中 static 目录会在编译时自动拷贝到输出目录)
│   ├── favicon.ico
│   ├── index.html
│   └── static
│
├── src  (源文件)
│   ├── common
│   ├── components
│   ├── services
│   ├── typings
│   ├── index.tsx
│   └── app.tsx
│
├── tsconfig.json
```