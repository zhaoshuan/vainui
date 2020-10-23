### Dialog 弹窗

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。


#### 组件注册

```js
import { Dialog } from "vainui";
Vue.use(Dialog);
```

#### 代码演示

```js
//基础演示
this.$dialog({
    title: '大标题',
    message: '弹窗内容',
})

//传入更多配置参数，丰富对话框的展示形式
this.$dialog({
    title: '大标题',
    message: '弹窗内容',
    cancelButtonColor: 'blue',
    confirmButtonColor: 'red',
    className: 'my-dialog',
})

//自定义按钮事件
this.$dialog({
    title: '大标题',
    message: '弹窗内容',
    confirm: (event,next) => {
        console.log('刚才点击了确认按钮')
        setTimeout(() => {
            next()
            this.$toast('延迟两秒关闭了')
        }, 2000);
    }
})
```

#### API

| 参数     | 说明         | 类型         | 默认值  |
| -------- | ------------ | ---------- | ------- |
| title | 主标题 | string | `标题` |
| message | 弹窗内容 | string | `null` |
| className | 自定义类名 | string | `null` |
| overlay | 是否有遮罩层 | boolearn | `false` |
| showConfirmButton | 是否显示确认按钮 | boolearn | `true` |
| showCancelButton | 是否显示取消按钮 | boolearn | `true` |
| confirmButtonText | 确认按钮文案 | string | `确定` |
| confirmButtonColor | 取消按钮文案 | string | `#FF751A` |
| cancelButtonText | 确认按钮字体颜色 | string | `取消` |
| cancelButtonColor | 取消按钮字体颜色 | string | `#666666` |
| confirm | 自定义点击确定按钮事件，调用next()，可关闭当前弹窗 | function(event, next){} | next() |
| close | 自定义点击取消按钮事件，调用next()，可关闭当前弹窗 | function(event, next){} | next() |


<template>
    <div class='widget'>
        <iframe src='vainui/dist/demo/index.html#dialog'></iframe>
    </div>
</template>