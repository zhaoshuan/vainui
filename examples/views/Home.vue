<template>
  <div class="home">
    <div class="top">
      <p class="title">Vainui</p>
      <p class="des">基于vue的移动端UI组件库</p>
    </div>
    <ul class="list">
      <li v-for="(item,index) in list" :key='index' @click="onForward(item)">
          <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: "Home",
  data(){
    return {
      tip: '#fff',
      list:[{
          title: 'Button 按钮',
          path: '/button'
      },{
          title: 'Color 测试组件',
          path: '/color'
      }]
    }
  },
  methods:{
      onForward(value){
          this.$router.push(value.path);
      }
  }
};
</script>
<style lang="scss">
  .home{
    text-align: left;
    background: #fff;
    .top{
      padding:10px 40px;
      .title{
        font-size: 30px;
        font-weight: bold;
      }
      .des{
        font-size:20px;
        color: #999;
      }
    }
    .list{
      padding:20px 40px;
      li{
        height: 50px;
        margin:15px 0;
        background: #ccc;
        line-height: 50px;
        border-radius: 999px;
        text-align: center;
      }
    }
  }
</style>
