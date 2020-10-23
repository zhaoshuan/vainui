<template>
  <div class="home">
      <div class="top">
          <p class="title">Vainui</p>
          <p class="des">基于vue的移动端UI组件库</p>
      </div>
      <ul class="list">
          <li v-for="(item,index) in list" :key='index' @click="onForward(item)">
              <p class="title">{{ item.title }}</p>
              <p class="right">&gt;</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            tip: '#fff',
            list: [{
                title: 'Button 按钮',
                path: '/button'
            }, {
                title: 'Color 测试组件',
                path: '/color'
            },{
                title: 'Dialog 确认弹窗',
                path: '/dialog'
            },{
                title: 'Toast 吐司提示',
                path: '/toast'
            },{
                title: 'Loading 加载',
                path: 'loading'
            }]
        }
    },
    methods: {
        onForward(value) {
            this.$router.push(value.path);
        }
    }
};
</script>
<style lang="scss">
@import "styles/mixins.scss";
.home {
    text-align: left;
    background: #fff;
    min-height: 800px;
    .top {
        padding:vws(20px) vws(80px);
        .title {
            font-size: vws(50px);
            font-weight: bold;
            font-style: oblique;
        }
        .des {
            font-size: vws(24px);
            color: #999;
        }
    }

    .list {
        padding: vws(20px) vws(40px);
        li {
            height: vws(80px);
            line-height: vws(80px);
            margin-bottom: vws(20px);
            background: #eee;
            border-radius: 999px;
            font-size: vws(30px);
            display: flex;
            padding:0 vws(40px);
            .title{
                font-size: vws(30px);
                font-weight: bold;
                flex:1;
            }
            .right{
                color:#999;
            }
        }
    }
}
</style>
