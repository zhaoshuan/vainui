<template>
    <transition name="fade">
        <div class="kkmh-dialog" :class="className" v-show='visible'>
                <div class="kkmh-dialog_bg" v-if='overlay'></div>
                <div class="kkmh-dialog_wrap">
                    <div class="kkmh-dialog_content">
                        <div class="title">{{ title }}</div>
                        <div class="des" v-if='message' v-html='message'></div>
                        <div class="bottom">
                            <p class="close" 
                                :style='{"color":cancelButtonColor}' 
                                @click="close">
                                    {{ cancelButtonText }}
                            </p>
                            <p class="next"
                                :style='{"color":confirmButtonColor}'
                                @click="confirm" 
                                v-if='showConfirmButton'>
                                    {{ confirmButtonText }}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'kkmhDialog',
    props:{
        title:{
            type:String,
        },
        message:{
            type:String,
        },
        overlay:{
            type: Boolean
        },
        className:{
            type:String,
        },
        showConfirmButton:{
            type: Boolean
        },
        showCancelButton:{
            type: Boolean
        },
        confirmButtonText:{
            type:String,
        },
        confirmButtonColor:{
            type:String,
        },
        cancelButtonText:{
            type:String,
        },
        cancelButtonColor:{
            type:String,
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){},
        confirm(){}
    }
}
</script>
<style lang="scss" scoped>
@import "styles/mixins.scss";
.kkmh-dialog{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height: 100%;
    z-index:99;
    &_bg{
        position: absolute;
        left:0;
        top:0;
        z-index:1;
        width:100%;
        height: 100%;
        background: #000;
        opacity: .7;
    }
    &_wrap{
        position: absolute;
        left: 50%;
        top:50%;
        z-index:3;
        transform: translate(-50%, -50%);
        color: #fff;
        padding: 8px 10px;
        font-size: 14px;
        border-radius:5px;
        text-align: center;
        max-width:70%;
        min-width:50px;
        min-height: unset;
        width:fit-content;
        z-index:2000;
        line-height: 20px;
        top:50%;
    }
    &_content{
        width: vws(576px);
        border-radius: vws(24px);
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        background: #fff;
        .title{
            font-size: vws(36px);
            color: #333;
            text-align: center;
            font-weight: bold;
            height: vws(76px);
            line-height: vws(76px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding:vws(28px) vws(56px) 0;
        }
        .des{
            font-size: vws(30px);
            color: #999;
            line-height: vws(48px);
            padding:vws(6px) vws(56px);
        }
        .bottom{
            margin-top:vws(28px);
            position: relative;
            height: vws(104px);
            display: flex;
            align-items: center;
            &:before{
                content: '';
                display: block;
                position: absolute;
                left:0;
                top:0;
                width:100%;
                height: 1px;
                background: #eee;
                transform: scaleY(0.5);
            }
            p{
                flex:1;
                font-weight: bold;
                color: #666;
                text-align: center;
                font-size: vws(36px);
            }
            .next{
                color: #FF751A;
            }
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
