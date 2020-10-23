<template>
    <div class="main">
        <div class="tag">
            <p class="tag-title">类型</p>
            <div class="tag-info">
                <kkmh-button
                    bg-color='red' 
                    text-color='#fff'
                    @click="onStart">
                        确认按钮
                </kkmh-button>
                <kkmh-button
                    round
                    bg-color='red' 
                    text-color='#fff'
                    @click="onStart">
                        确认按钮
                </kkmh-button>
            </div>
        </div>
        <div class="tag">
            <p class="tag-title">尺寸</p>
            <div class="tag-info">
                <kkmh-button
                    bg-color='red' 
                    text-color='#fff'
                    text-size='40'
                    maxHeight='100'
                    @click="onStart">
                        确认按钮
                </kkmh-button>
                <kkmh-button
                    bg-color='red' 
                    text-color='#fff'
                    text-size='20'
                    maxHeight='40'
                    @click="onStart">
                        确认按钮
                </kkmh-button>
            </div>
        </div>
        <div class="tag">
            <p class="tag-title">背景色</p>
            <div class="tag-info">
                <kkmh-button
                    bg-color='blue' 
                    text-color='#fff'
                    @click="onStart">
                        确认按钮
                </kkmh-button>
                <kkmh-button
                    bg-color='green' 
                    text-color='#fff'
                    @click="onStart">
                        查看更多
                </kkmh-button>
            </div>
        </div>
        <div class="tag">
            <p class="tag-title">通栏</p>
            <div class="tag-info">
                <kkmh-button
                    bg-color='#ccc' 
                    text-color='#666'
                    text-size='32'
                    maxHeight='80'
                    block
                    round
                    @click="onStart">
                        确认按钮
                </kkmh-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {}
    },
    methods:{
        onStart(){
            this.$toast('点击了按钮')
        }
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";
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
                margin-right: vws(20px);
            }
        }
    }
}
</style>