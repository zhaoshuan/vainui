### 首页

这是基于 Vue 技术栈实现的 UI 组件库 

### 引入组件

#### 方式一 按需引入组件
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D

# 接着在babel.config.js中配置
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

# 接下来可以在代码中直接引入kkui组件
# 插件会自动将代码转化成方式二的按需引入形式
import { Button } from 'vainui'
Vue.use(Button)
```

#### 方式二 手动按需引入组件
```bash
import Button from 'vainui/dist/lib/button'
import 'vainui/dist/lib/button/style.css'
Vue.use(Button)
```

#### 方式三 导入所有组件 （不推荐）
```bash
import kkui from 'vainui'
import 'vainui/dist/lib/index/style.css'
Vue.use(kkui)
```

### 相关命令
```
# 打包组件库
npm run build

# 生成示例代码
npm run demo

# 启动文档
npm run docs:dev

# 生成说明文档
npm run docs:build
```

### 项目目录

```bash
dist                       ---- 部署文件
    - lib                  ---- 打包后组件
    - demo                 ---- 打包后案例
    - docs                 ---- 打包后说明文档
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

<template>
    <div class='widget'>
        <iframe src='vainui/dist/demo/index.html'></iframe>
    </div>
</template>
