<template>
    <div>
        <div class="main">
          <p class="title">测试组件1</p>
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
        this.$toast({
            message: '呵呵呵呵呵呵',
            duration: 5000,
        })
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";

</style>