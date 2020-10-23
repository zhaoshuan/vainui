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
                title: '自定义提示内容',
                options: {
                    message: '提示内容',
                }
            },{
                title: '多行提示内容',
                options: {
                    message: '这是第一行提示内容<br/>提示内容',
                }
            },{
                title: '自定义停留时长',
                options: {
                    message: '提示内容，停留4秒后关闭',
                    duration: 4000
                }
            },{
                title: '顶部提示',
                options: {
                    message: '提示内容',
                    position: 'top'
                }
            },{
                title: '底部提示',
                options: {
                    message: '提示内容',
                    position: 'bottom'
                }
            }]
        }
    },
    methods:{
        onButtonTap(value){
            this.$toast({
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