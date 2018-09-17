<template>
  <div id="login">
    <div class="centent" style="width: 400px">
      <div class="logotext">
        <img src="http://unesmall.b0.upaiyun.com/unes_pro/A01.png"/>
      </div>
      <div class="logo">
        <img src="http://unesmall.b0.upaiyun.com/unes_pro/A02.png"/>
      </div>
      <div>
        <div class="zhanghaoxinxi">
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A03.png"/>
            <input class="iphone" v-model="loginiphone" placeholder="手机/用户名"/>
          </div>
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A04.png"/>
            <input type="password" class="iphone" v-model="loginpsw" placeholder="密码"/>
          </div>
          <div class="modifyPasDiv">
            <span class="singleElection" @click="isRememberPas">{{tickNumber}}</span><span class="rememberPas">记住密码</span>
            <a class="modifyPas" title="前往修改密码" @click="jumpMoPas">修改密码</a>
          </div>
        </div>
      </div>
      <button class="button_login" @click="login">登录</button>
    </div>

    <span class="loading">
         正在登录.....
    </span>
  </div>
</template>
<script>
  //    import axios from 'axios'
  var time=800;
//  var api = require('./api')
  export default {
    name: 'App',
    data() {
      return {
        msg: 'helloworld',
        loginiphone: '',
        loginpsw: '',
        tickNumber:"√",
      }
    },
    created: function () {
      if(localStorage.getItem("isRemember")!==null&&localStorage.getItem("isRemember")!==undefined&&localStorage.getItem("isRemember")!==""){
        this.tickNumber="√"
        if(localStorage.getItem("userName")!=null&&localStorage.getItem("userPas")!=null){
          this.loginpsw=localStorage.getItem("userPas")
        }
      }else{
        this.tickNumber=""
      }
      if(localStorage.getItem("userName")!=null&&localStorage.getItem("userPas")!=null){
        this.loginiphone=localStorage.getItem("userName")
      }

    },
    methods: {

      login: function () {
//        alert(login)
        if (this.loginiphone == '' || this.loginpsw == '') {
          $(".loading").show();
          $(".loading").text("用户名不能为空")
          setTimeout(function () {
            $(".loading").fadeOut();
          },time)

        } else {

          var that = this;
          jQuery.support.cors = true
          $.ajax({
            type: "post",
//            url: "http://192.168.10.27:8887/login.json ",
            url: "http://diy2.unescn.com/login.json ",
//            url:api.commonapi.login,
            dataType: 'json',
            beforeSend: function (xhr) {
              xhr.withCredentials = true;
            },
            data: {
              name: this.loginiphone,
              pwd: this.loginpsw
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              if (res.Code == 1) {
                var storage=window.localStorage;
                storage.setItem("employeeName",res.employeeName);
                localStorage.setItem("userName",that.loginiphone)
                localStorage.setItem("userPas",that.loginpsw)
                $(".loading").show();
                $(".loading").text("正在登录ing.....");
//


                setTimeout(function () {
                  $(".loading").fadeOut();
                  that.$router.push({path: '/huiyuan'})
                },time)

              } else {
                $(".loading").show();
                $(".loading").text(res.Msg);
                setTimeout(function () {
                     $(".loading").fadeOut();
                },time)

//                alert("没有此用户！")
              }

            },
            error: function (response) {

            }
          });
        }


      },
      jumpMoPas(){
        this.$router.push('/forgetThePassword');
      },
      isRememberPas(){
        if(localStorage.getItem("isRemember")!==null&&localStorage.getItem("isRemember")!==undefined&&localStorage.getItem("isRemember")!==""){
          this.tickNumber=""
          localStorage.removeItem("isRemember")
        }else{
          this.tickNumber="√"
          localStorage.setItem("isRemember",true)
        }
      }
    },
    watch: {}
  }
</script>
<style scoped>

  .logo {
    margin: 60px 0px 16px 0px;
  }

  #login {
    width: 100%;
  }

  .centent {
    float: left;
    background-color: white;
    width: 400px;
    min-width: 1100px;
    /* margin-left: 20%; */
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 60px;
  }

  .button_login {
    cursor: pointer;
    color: white;
    background-color: #505050;
    width: 30%;
    height: 40px;
    clear: both;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    outline: none;
    border: none;
  }

  .zhanghaoxinxi .label:nth-child(2) {
    margin-top: 30px !important;
  }

  .zhanghaoxinxi .label {
    position: relative;
    height: 33px;
    line-height: 33px;
    border: 1px solid #dddddd;
    padding-bottom: 5px;
    /*background-color: rgb(250, 255, 189) !important;*/
  }

  .zhanghaoxinxi .label input {
    border: none;
    outline: none;
    height: 30px;
    width: 80%;
    text-indent: 4px;
    background-color: transparent;
    margin-top: 3px;
    font-size: 15px;
    text-indent: 10px;
  }

  .zhanghaoxinxi .label:nth-child(2) {
    margin-top: 5px;
  }

  .zhanghaoxinxi .label img, .zhanghaoxinxi .label input {
    vertical-align: middle;
  }

  .zhanghaoxinxi {
    padding-top: 20px;
  }

  .zhanghaoxinxi, .denglubtn, .disanfangname {
    width: 30%;
    margin: 0 auto;
  }

  .disanfangtitle {
    width: 70%;
    margin: 0 15%;
  }
  .modifyPasDiv{
    width:100%;
    text-align:right;
    margin:25px 0;
    font-size:12px;
    position:relative;
  }
  .modifyPas{
    font-size:12px;
    color:#000;
  }
  .modifyPas:hover{
    cursor:pointer;
  }
  .singleElection{
    display: inline-block;
    width:12px;
    height:12px;
    border:1px solid #000;
    box-sizing: border-box;
    position:absolute;
    top:0;
    bottom:0;
    left:5px;
    margin:auto;
    text-align:center;
    color:red;
    font-weight: bolder;
    font-family: iconfont;
    line-height: 12px;
  }
  .singleElection:hover{
    cursor:pointer;
  }
  .rememberPas{
    position:absolute;
    left:18px;
    top:0;
    bottom:0;
    margin:auto;
    font-size:12px;
    color:#000;
  }



</style>
