# vainui

> 基于Vue的一款移动端组件库

## 安装

``` bash
$ npm install vainui
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# 全部引用
import ui from 'vainui'
Vue.use(ui)

# 手动按需引入
import {Button} from 'vainui'
import 'vainui/dist/lib/button/style.css'
Vue.use(Button)
```

babel配置自动按需加载
``` bash
module.exports = {
  plugins: [
        ["import", {
          libraryName: "vainui",
          libraryDirectory: "dist/lib",
          style: (name) => { 
            return `${name}/style.css` 
          }
        },'vainui']
    ]
};
```

在项目中使用 vainui

```js
<template>
    <kkmh-button :bg-color='color'></kkmh-button>
</template>
<script>
  export default {
    data () {
      return {
        color: '#ff0000'
      }
    }
  }
</script>
```

## 部署
```
# 打包组件库
npm run build

# 生成示例代码
npm run demo

# 生成说明文档
npm run docs:build
```

## 项目目录

```bash
dist                       ---- 部署文件
docs                       ---- 组件说明文档
node_moudles               ---- 项目依赖包
packages                   ---- 组件库源码文件夹
public                     ---- 项目公共资源目录
examples                   ---- 项目demo目录
.gitnore                   ---- git忽略文件
babel.config.js            ---- babel配置文件
package.json               ---- 包管理文件
README.md                  ---- 项目说明文档
```

## 注意事项
更多内容可参考说明文档