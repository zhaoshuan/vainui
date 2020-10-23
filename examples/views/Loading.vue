<template>
    <div class="main">
        <div class="tag">
            <p class="tag-title">类型</p>
            <div class="tag-info">
                <kkmh-loading></kkmh-loading>
                <kkmh-loading type='beat'></kkmh-loading>
                <kkmh-loading type='spot'></kkmh-loading>
            </div>
        </div>
        <div class="tag">
            <p class="tag-title">颜色</p>
            <div class="tag-info">
                <kkmh-loading color='#cc0000'></kkmh-loading>
                <kkmh-loading type='spot' color='green'></kkmh-loading>
            </div>
        </div>
        <div class="tag">
            <p class="tag-title">尺寸</p>
            <div class="tag-info">
                <kkmh-loading color='#cc0000' size='100'></kkmh-loading>
                <kkmh-loading color='#cc0000' size='30'></kkmh-loading>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style lang="scss" scoped>
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