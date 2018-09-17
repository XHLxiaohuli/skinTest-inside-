<template>
  <div class="USer">
    <p class="U_title">用户基本信息USER INFORMATION</p>
    <div class="U_kuang">
      <img class="heaimg_" src="" alt="">
      <div class="k_xinx">
        <p>编号:{{u_number}}</p>
        <p>姓名:{{u_name}}</p>
        <p>手机:{{u_phone}}</p>
        <p>门店:{{u_stores}}</p>
        <p>性别:{{u_gender}}</p>
        <p>年龄:{{u_age}}</p>
        <p>生日:{{u_birthday}}</p>
        <p>昵称:{{u_nickname}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:[ "userVal" ],
  data() {
    return {
      // 编号
      u_number:'',
      // 姓名
      u_name:'',
      // 手机
      u_phone:'',
      // 门店
      u_stores:'',
      // 性别
      u_gender:'',
      // 年龄
      u_age:'',
      // 生日
      u_birthday:'',
      // 昵称
      u_nickname:''
    }
  },
  watch: {
    userVal: {
　　　　handler(newValue, oldValue) {
          var date_=new Date(newValue.birthday);
          this.u_number=newValue.id;
          this.u_name=newValue.name;
          this.u_phone=newValue.tel;
          this.u_stores=newValue.shop.name;
          this.u_gender=newValue.sex;
          this.u_age=newValue.age;
          this.u_birthday=date_.getFullYear()+'年'+date_.getMonth()+'月'+date_.getDate()+'日';
          this.u_nickname=newValue.nickname;

          $('.heaimg_').attr('src',newValue.headimgurl);
　　　　},
　　　　deep: true
　　}
  }
}
</script>

<style>
.U_title{
  margin: 25px 0;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  clear: both;
  text-align: left;
}
.U_kuang{
  width: 100%;
  height: auto;
  /*display: flex;
  flex-direction:row;*/
}
.U_kuang>img{
  width:10%; 
  /*height:10%;*/
  float: left;
}
.k_xinx{
  width: 85.5%;
  height:110px;
  float:left;
  margin-left:4.5%;
  line-height: 55px;
  /*margin-left: 50px;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-content:space-around;*/
}
.k_xinx>p{
  width:25%;
  height:auto;
  font-size: 16px;
  color: #333;
  text-align: left;
  float:left;
}
.USer:after{display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;}
</style>
