<template>
    <transition name="fade">
        <div 
            class="kkmh-toast" 
            :class='`kkmh-toast_${position}`' 
            v-show='visible'>
                {{ message }}
        </div>
    </transition>
</template>
<script>
export default {
    name: 'kkmhToast',
    props:{
        message:{
            type:String,
            default:''
        },
        visible:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'middle'
        }
    }
}
</script>
<style lang="scss" scoped>
.kkmh-toast{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
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
    &_top{
        top:15%;
    }
    &_middle{
        top:50%;
    }
    &_bottom{
        top:85%;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
