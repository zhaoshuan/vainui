import Button from './button'
import Loading from './loading'
import Toast from './toast'
import Dialog from './dialog'

// 存储组件列表
const components = [
    Button,
    Loading,
    Toast,
    Dialog
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => {
        if (component.name) {
            Vue.component(component.name, component)
        } else {
            Vue.use(component)
        }
    })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
    Button,
    Loading,
    Toast,
    Dialog
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Button,
    Loading,
    Toast,
    Dialog
}