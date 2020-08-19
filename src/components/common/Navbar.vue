<template>
  <div class="navbar">
      <div class="logo">
          <img src="@/assets/logo.png" alt="">
      </div>
      <div>
          <p>
              请输入内容
              <van-icon name="search" class="ipt-icon"/>
          </p>
      </div>
      <div>
          <img :src="imgUrl" alt="" @click="$router.push('/userinfo')" v-if="imgUrl">
          <img v-else src="@/assets/default_img.jpg" alt="" @click="$router.push('/login')">
          <p>下载App</p>
      </div>
  </div>
</template>

<script>
export default {
 data() {
        return {
            imgUrl:''
        }
    },
    methods:{
        async NavInit() {
            if(localStorage.getItem('token')){
            const res = await this.$http.get('/user/' + localStorage.getItem('id'))
            this.imgUrl = res.data[0].user_img
            }
        }
    },
    mounted() {
        this.NavInit()
    }
}
</script>

<style lang="less">
.navbar{
    display: flex;
    height: 12.5vw;
    background-color: white;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 100%;
        img{
        width: 100%;
        height: 100%;
    }
    }
     div:nth-child(2){
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 1.389vw;
        p{
            font-size: 3.333vw;
            line-height: 7.222vw;
            position: relative;
            padding-left: 6.944vw;
            height: 7.222vw;
            width: 100%;
            border-radius: 3.611vw;
            background-color: #f4f4f4;
             color: #aaa;
            .ipt-icon{
                position: absolute;
                left: 2.778vw;
                top: 50%;
                transform: translate(0,-50%);
                color: #aaa;

            }
        }
    }
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 6.667vw;
            height: 6.667vw;
            border-radius: 50%;
        }
        p{
        
            padding: 1.389vw 2.778vw;
            margin: 0 2.222vw;
            background-color: #fb7299;
            color: white;
            font-size: 3.611vw;
            border-radius: 0.833vw;
        }
    }
    
}
</style>