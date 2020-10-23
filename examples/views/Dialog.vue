<template>
    <div class="main">
        <div class="tag">
            <div class="tag-info">
                <div v-for='(item,index) in list' :key='index'>
                    <kkmh-button
                        block
                        text-color='#fff'
                        text-size='30'
                        round
                        height='80'
                        @click="onButtonTap(item)">
                            {{ item.title }}
                    </kkmh-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[{
                title: '自定义标题和内容',
                options: {
                    title: '大标题',
                    message: '弹窗内容',
                }
            },{
                title: '只有标题',
                options: {
                    title: '大标题',
                }
            },{
                title: '只有一个按钮',
                options: {
                    title: '大标题',
                    message: '弹窗内容',
                    showConfirmButton: false
                }
            },{
                title: '自定义按钮文案',
                options: {
                    title: '大标题',
                    message: '弹窗内容',
                    confirmButtonText: '查看更多',
                    cancelButtonText: '我知道了',
                }
            },{
                title: '自定义按钮字体颜色',
                options: {
                    title: '大标题',
                    message: '弹窗内容',
                    cancelButtonColor: 'blue',
                    confirmButtonColor: 'red'
                }
            },{
                title: '自定义类名',
                options: {
                    title: '大标题',
                    message: '自定义样式，改变遮罩层颜色',
                    className: 'my-dialog',
                }
            },{
                title: '自定义按钮点击事件',
                options: {
                    title: '大标题',
                    message: '确定按钮点击,延迟一秒关闭',
                    confirm: (event,next) => {
                        setTimeout(() => {
                            next()
                            this.$toast('延迟两秒关闭了')
                        }, 2000);
                    }
                }
            }]
        }
    },
    methods:{
        onButtonTap(value){
            this.$dialog({
                ...value.options
            })
        }
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";

.my-dialog{
    .kkmh-dialog_bg{
        background: blue;
        opacity: .4;
    }   
}

.main{
    padding:20px;
    .tag{
        padding: vws(10px) 0;
        &-title{
            font-size: vws(30px);
            color: #999;
        }
        &-info{
            padding: vws(10px) 0;
            & > div {
                margin-top: vws(20px);
            }
        }
    }
}

</style>