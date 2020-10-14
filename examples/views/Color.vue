<template>
    <div>
        <div class="header">
          <p class="back" @click="back">&lt;</p>
          <p class="title">Color</p>
        </div>
        <div class="main">
          <p class="title">测试组件</p>
          <div class="content">
            <kkmh-color color='#fff'></kkmh-color>
          </div>
          <p class="title">测试组件</p>
          <div class="content">
            <kkmh-color color='#000'></kkmh-color>
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
        back(){
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="scss">
@import "styles/mixins.scss";
  .header{
    height: vws(80px);
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    .back{
      position: absolute;
      left:vws(20px);
      top:0;
      font-size: vws(30px);
      height: vws(80px);
      line-height: vws(80px);
    }
    .title{
      text-align: center;
      font-size:vws(30px);
      font-weight: bold;
      width:100%;
    }
  }
  .main{
    padding:20px;
    .title{
      font-size:20px;
      line-height: 40px;
      color: #999;
      margin-top:20px;
    }
    .content{
      display: flex;
      button{
        margin-right: 20px;
      }
    }
  }
</style>