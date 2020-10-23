### Toast 吐司提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。


#### 组件注册

```js
import { Toast } from "vainui";
Vue.use(Toast);
```

#### 代码演示

```js
//基础演示
this.$toast('提示内容')

//传入更多配置参数，丰富展示形式
this.$toast({
    message: '提示内容',
    duration: 4000,
    position: 'top'
})

//duration参数为0时，提示框将不会消失
this.$toast({
    message: '提示内容',
    duration: 0,
})
```

#### API

| 参数     | 说明         | 类型         | 默认值  |
| -------- | ------------ | ---------- | ------- |
| message | 提示内容 | string | `undefined` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | number | `2000` |
| position | 位置，可选值为 top bottom | string | `middle` |


<template>
    <div class='widget'>
        <iframe src='vainui/dist/demo/index.html#toast'></iframe>
    </div>
</template>