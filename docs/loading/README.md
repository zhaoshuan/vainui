### Loading 加载

加载动效展示


#### 组件注册

```js
import { Loading } from "vainui";
Vue.use(Loading);
```

#### 代码演示

```html
<template>
    <div>
        <kkmh-loading color='red'>测试</kkmh-loading>
    </div>
</template>
```

#### API

| 参数     | 说明         | 类型         | 默认值  |
| -------- | ------------ | ---------- | ------- |
| type | 展示类型，可选参数有beat、spot | string | `spinner` |
| color | 颜色 | string | `#FDE23D` |
| size | 尺寸，传入转换前的px值 | number、string | `50` |

<template>
    <div class='widget'>
        <iframe src='vainui/dist/demo/index.html#loading'></iframe>
    </div>
</template>