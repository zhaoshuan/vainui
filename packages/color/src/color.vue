<template>
    <div class="kkmh-color" :style='{"color":color}'>color组件示例</div>
</template>
<script>
export default {
    name: 'kkmhColor',
    props:{
        color: {
            type: String,
            default: '#fff'
        }
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";
.kkmh-color{
    background: #ff976a;
    color: #fff;
    font-size: vws(18px);
    padding:vws(20px);
    width: 100%;

}
</style>