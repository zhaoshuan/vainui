<template>
    <button 
        class="kkmh-button" 
        :style='{
            "background-color":bgColor,
            "color": textColor,
            "border-radius": countRound,
        }'>
            <div class="kkmh-button-content" @click="onClick">
                <slot>确定</slot>
            </div>
    </button>
</template>
<script>
export default {
    name: 'kkmhButton',
    props:{
        bgColor: {
            type: String,
            default: '#1989fa'
        },
        textColor: {
            type: String,
            default: '#fff'
        },
        round: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        countRound(){
            return this.round ? '999px' : '0%'
        }
    },
    methods:{
        onClick(){
            this.$emit('click')
        }
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";
.kkmh-button{
    display: inline-block;
    overflow: hidden;
    background: #fff;
    color: #333;
    text-align: center;
    &-content{
        display: block;
        font-size: vws(20px);
        height: vws(50px);
        line-height: vws(50px);
        padding:0 vws(20px);
        background: none;
    }
}
</style>