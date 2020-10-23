### Button 按钮

按钮用于开始一个即时操作。

#### 组件注册

```js
import { Button } from "vainui";
Vue.use(Button);
```

#### 代码演示

```html
<template>
    <div>
        <kkmh-button>测试</kkmh-button>
    </div>
</template>
```

#### API

| 参数     | 说明         | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| bg-color | 按钮背景色 | string | `#1989fa` |
| text-color | 按钮文字颜色 | string | `#ffffff` |
| text-size | 文字尺寸，传入转换前的px值 | string | `24` |
| maxHeight | 按钮高度，传入转换前的px值 | number、string | `60` |
| block | 是否通栏 | boolearn | `false` |
| round | 是否圆角 | boolearn | `false` |

#### 事件

| 事件名称 | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| click    | 点击按钮时的回调 | (event) => void |


<template>
    <div class='widget'>
        <iframe src='vainui/dist/demo/index.html#button'></iframe>
    </div>
</template>
