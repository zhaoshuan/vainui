import ToastComponent from './src/toast.vue'

// 默认参数
let def = {
    message:'undefined',
    position:'middle',
    duration:2000
};

// 延时器缓存
let timer = null;

// 添加install方法
const Toast = {
    install(Vue){

        // 创建一个VUE构造器
        const ToastConstructor = Vue.extend(ToastComponent)

        // 生成一个Vue实例
        const instance = new ToastConstructor();

        // 使用$mount来手动开启编译。用$el来访问元素，并插入到body中
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);

        // 通过Vue的原型注册一个方法
        Vue.prototype.$toast = (config) => {

            // 初始化时间
            let time = def.duration;

            // 如果toast已经存在
            if (timer) {
                clearTimeout(timer);
                timer = null;
                instance.visible = false;
                instance.position = def.position
                instance.message = def.message;
            }
            
            // 判断参数类型
            if (typeof config === 'string') {

                instance.position = def.position;
                instance.message = config;

            } else if (typeof config === 'object') {

                let { message,duration,position } = config;
                instance.message = message || def.message;
                instance.position = position || def.position;
                time = (duration != undefined) ? duration : def.duration;

            } else {
                return false;
            }

            // 显示toast
            instance.visible = true;

            // 添加延时器，0秒状态下一直显示
            if (time != 0) {
                timer = setTimeout(() => {
                    instance.visible = false;
                    clearTimeout(timer);
                    timer = null;
                }, time);
            }
            
        }
    }
}

export default Toast