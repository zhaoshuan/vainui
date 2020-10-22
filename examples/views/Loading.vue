<template>
    <div>
        <div class="main">
          <p class="title">测试组件1</p>
          <div class="content">
              <kkmh-loading size='60' color='#cc0000'></kkmh-loading>
              <kkmh-loading type='spot'></kkmh-loading>
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
        
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";

</style>