<template>
    <div class="kkmh-button" 
        :class="{'kkmh-button_block':block}"
        :style='{
            "background-color":bgColor,
            "color": textColor,
            "border-radius": countRound,
            "height": countHeight,
            "font-size": countSize
        }'>
        <div class="kkmh-button_content" @click="onClick">
                <slot>确定</slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'kkmhButton',
    props:{
        bgColor: {
            type: String,
            default: '#1989fa'
        },
        maxHeight: {
            type: Number | String,
            default: 60
        },
        block: {
            type: Boolean,
            default: false
        },
        textColor: {
            type: String,
            default: '#fff'
        },
        textSize: {
            type: Number | String,
            default: 24
        },
        round: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        countRound(){
            return this.round ? '999px' : '0%'
        },
        countHeight(){
            return `${this.maxHeight/100}rem`
        },
        countSize(){
            return `${this.textSize/100}rem`
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
    overflow: hidden;
    background: #fff;
    color: #333;
    text-align: center;
    display: inline-block;
    &_block{
        width:100%;
    }
    &_content{
        display: block;
        font-weight: bold;
        padding:0 vws(20px);
        height: 100%;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>