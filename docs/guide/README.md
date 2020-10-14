### 指南

::: tip
testtt UI 组件库使用方法
:::

#### 全局安装

```bash
npm install testtt --save
```

#### 使用方法

```js
// 入口文件引入（main.js）
import testtt from "vainui";
import "vainui/lib/index/style.css";

Vue.use(testtt);

// 组件里使用
<kkmh-button>确定</kkmh-button>;
```

#### 按需加载

> 需要安装插件 `babel-plugin-import`

```bash
npm install babel-plugin-import --save-dev
```

#### 按需使用

```js

import { Button } from "vainui";
Vue.use(Button);

<template>
    <div>
        <kkmh-button>测试</kkmh-button>
    </div>
</template>
```
