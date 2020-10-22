<template>
    <div>
        <div class="main">
          <p class="title" @click="test">测试组件1</p>
          <div class="content">
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {}
    },
    created(){
        this.$dialog({
            title: '测试标题测试标题测试标题测试标题测试标题测试标题',
            message: '测试测试测试测试测',
            className: 'my-dialog',
            // overlay: false,
            confirmButtonText: '哈确实啊',
            cancelButtonText: '我知道了',
            // cancelButtonColor: '#000',
            // confirmButtonColor: 'blue',
            // showConfirmButton: false,
            confirm: (event,next) => {
                next()
            },
            close: (res,next) => {
                setTimeout(() => {
                    next()
                }, 2000);
            }
        })
    },
    methods:{
        test(){
            this.$dialog({
                title: '测试标题',
                message: '呵呵呵呵呵呵',
                confirmButtonText: '又一个横划',
                cancelButtonText: '我知道了',
                confirm: (event,next) => {
                    next()
                },
                close: (res,next) => {
                    setTimeout(() => {
                        next()
                    }, 2000);
                }
            })
        }
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";

.my-dialog{
    .kkmh-dialog_bg{
        background: red;
        opacity: .2;
    }   
}

</style>