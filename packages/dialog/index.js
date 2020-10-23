import DialogComponent from './src/dialog.vue'

// 默认参数
let defaultOptions = {
    title: '标题',
    message:'',
    overlay: true,
    className: '',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: '确定',
    confirmButtonColor: '#FF751A',
    cancelButtonText: '取消',
    cancelButtonColor: '#666666'
};

// 添加install方法
const Dialog = {
    install(Vue){

        // 创建一个VUE构造器
        const ToastConstructor = Vue.extend(DialogComponent)

        // 生成一个Vue实例
        const instance = new ToastConstructor();

        // 使用$mount来手动开启编译。用$el来访问元素，并插入到body中
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);

        // 通过Vue的原型注册一个方法
        Vue.prototype.$dialog = (config) => {

            // 判断参数类型
            if (typeof config === 'string') {

                instance.message = config;

            } else if (typeof config === 'object') {
                
                const options = Object.assign({},defaultOptions,config);
                const { confirm, close } = options;

                instance.title = options.title;
                instance.message = options.message;
                instance.overlay = options.overlay;
                instance.className = options.className;
                instance.showConfirmButton = options.showConfirmButton;
                instance.showCancelButton = options.showCancelButton;
                instance.confirmButtonText = options.confirmButtonText;
                instance.confirmButtonColor = options.confirmButtonColor;
                instance.cancelButtonText = options.cancelButtonText;
                instance.cancelButtonColor = options.cancelButtonColor;
                instance.confirm = function(event){
                    if (confirm) {
                        confirm(event,function(){
                            instance.visible = false;
                        })
                    } else {
                        instance.visible = false;
                    }
                }
                instance.close = function(event){
                    if (close) {
                        close(event,function(){
                            instance.visible = false;
                        })
                    } else {
                        instance.visible = false;
                    }
                }
            } else {
                return false;
            }

            instance.visible = true;

        }
    }
}

export default Dialog