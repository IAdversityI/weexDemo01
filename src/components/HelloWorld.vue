<template>
<div>
  <list>
    <!-- 上拉刷新 -->
    <!-- <refresh class="refresh" @refresh = "onrefresh" @pullingdown = "onpullingdown" :display="refreshShow">
      <text class="indictor">Refresh...</text>
    </refresh> -->
    <cell v-for='item in list'>
      <div class="panel">
        <text class="text">{{item.name}}</text>
        <!-- <text class="content"></text> -->
      </div>
    </cell>
    <!-- 下拉加载 -->
    <!-- <loading class="loading" @loading="onloading" :display="showLoading">
      <text class="indictor">loading...</text>
    </loading> -->
  </list>
</div>
</template>
<script>
const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
export default {
  data() {
    return {
      list: []
      // showLoading: "hide",
      // refreshShow: "hide"
    };
  },
  /* created() {
    let url = "http://192.168.30.100:9000/asset/count";
    this.getNews(url, res => {
      modal.toast({ message: "数据请求成功", duration: 1 });
      this.list = res.data;
      console.log("----res----");
      console.log(res);
    });
  },
  methods: {
    getNews(url, callback) {
      return stream.fetch(
        {
          method: 'GET',
          type: "json",
          url: url,
          headers:{
            'content-type':'application:json;charset=utf8',
            "Authorization": "Basic dXNlcjozNDczN2Q2MC1hOTU5LTRjNmItYWM0Mi0zYjVlNzNhYzUxNGM=" 
            }
        },
        callback
      );
    } */
    created(){
    // let url='http://192.168.30.100:9000/asset/count';
    this.getNews('/api',res=>{
      modal.toast({message:'请求成功',duration:1});
      this.list=res.data.data;
      console.log(res.data);
    });
  },
  methods: {
    getNews(url,callback){
      return stream.fetch({
        method:'GET',
        type:'json',
        url:url,
         headers:{
            'content-type':'application:json;charset=utf8',
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjIyOTUwODUsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiYWRtaW4iXSwianRpIjoiYmVjMWZhZGUtM2JlZS00ZWI5LThkOGYtODdjNDdlODk3NGRhIiwiY2xpZW50X2lkIjoicGlnIiwic2NvcGUiOlsic2VydmVyIl19.AZUujJW6Lx4aGkUUuBgMCWbVpxMjTohDUDojQpHH4eierQanvuqEcC2iP1ErOBMlJNDwPK3jR2bOaNzXbl2d0CJcCBAOlmokqu0mIOZ6RFb6ptbf_pcMK53Y38xSBUJFwMSm_sIBDKxGZfwWRDuZGhkawlWfZK0JjwN6IdeyjHCcDfZRi-CxPdgJcGPq9leAOJZHyZCeiCMdXCx5MUl8iiOvvojlJkULTNOvyu2grZlXGI-FITrYZqfuAVDMTasW-P49WH4O2ZYTxs1WwJTlqzCPXssrErB4HBOlws_mHcaprAP-d6GABlZC1rbxoEckjm-JYeEKA-pMWYXut4phKQ" 
            }
      },callback);
    }
  
    // 上拉刷新和下拉加载的方法
    /*  fetch(event) {
      modal.toast({ message: "loadmore", duration: 1 });
      setTimeout(() => {
        const length = this.list.length;
        for (let i = length; i < length + 4; i++) {
          this.list.push(i + 1);
        }
      }, 800);
    },
    onloading(event) {
      modal.toast({ message: "loading", duration: 1 });
      this.showLoading = "show";
      setTimeout(() => {
        const length = this.list.length;
        for (let i = length; i < length + 4; i++) {
          this.list.push(i + 1);
        }
        this.showLoading = "hide";
      }, 1500);
    },
    onrefresh(event) {
      modal.toast({ message: "refresh", duration: 1 });
      this.refreshShow = "show";
      setTimeout(() => {
        this.list = [1, 2, 3, 4, 5];
        this.refreshShow = "hide";
      }, 2000);
    },
    onpullingdown(event) {
      modal.toast({ message: "pulling down", duration: 1 });
    } */
  }
};
</script>
<style scoped>
.panel {
  width: 600px;
  height: 250px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 193);
  background-color: rgb(162, 217, 192, 0.2);
}
.text {
  font-size: 50px;
  text-align: center;
  color: #41b883;
}
/* .indictor {
  font-size: 42px;
  text-align: center;
} */
</style>


