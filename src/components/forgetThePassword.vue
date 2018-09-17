<template>
  <div id="login">
    <div class="centent" style="width: 400px">
      <div class="logotext">
        <img src="http://unesmall.b0.upaiyun.com/unes_pro/A01.png"/>
      </div>
      <div class="logo">
        <img @click="back" class="backPic" src="http://unesmall.b0.upaiyun.com/unes_pro/A02.png"/>
      </div>
      <div>
        <div class="zhanghaoxinxi">
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A03.png"/>
            <input class="iphone" v-model="loginiphone" placeholder="请输入账号"/>
          </div>
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A04.png"/>
            <input type="password" class="iphone" v-model="oldPas" placeholder="请输入旧密码"/>
          </div>
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A04.png"/>
            <input type="password" class="iphone" v-model="newPas" placeholder="请输入新密码"/>
          </div>
          <div class="label">
            <img src="http://unesmall.b0.upaiyun.com/unes_pro/A04.png"/>
            <input type="password" class="iphone" v-model="confirmPas" placeholder="请输入确认密码"/>
          </div>
        </div>
      </div>
      <button class="button_login" @click="confirmModify">确认修改</button>
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
        loginiphone: '',
        oldPas: '',
        newPas:"",
        confirmPas:"",
      }
    },
    created: function () {
      if(localStorage.getItem("userName")!=null&&localStorage.getItem("userPas")!=null){
        this.loginiphone=localStorage.getItem("userName")
      }

    },
    methods: {

 
        //提示框
        promptBox(text){
            $(".loading").show();
            $(".loading").text(text);
            setTimeout(function () {
                $(".loading").fadeOut();
            },time)
        },
        //确认修改
        confirmModify(){
            if(this.loginiphone!=""){
                if(this.oldPas!=""){
                    if(this.newPas!=""){
                        if(this.confirmPas!=""){
                            if(this.newPas==this.confirmPas){
                                var that = this;
                                $.ajax({
                                    type: "post",
                                    url: "http://diy2.unescn.com/changePassWord.json ",
                                    dataType: 'json',
                                    beforeSend: function (xhr) {
                                    xhr.withCredentials = true;
                                    },
                                    data: {
                                    name:this.loginiphone,
                                    pwd:this.oldPas,
                                    newPwd:this.newPas,
                                    },
                                    header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                    },
                                    success: function (res) {
                                    if (res.Code == 1) {
                                           that.promptBox("修改成功")
                                           setTimeout(()=>{
                                               that.$router.push('/login');
                                           },1500)
                                           
                                    } else {
                                        that.promptBox(res.Msg)
                                    }

                                    },
                                    error: function (response) {

                                    }
                                });
                            }else{
                                this.promptBox("两次密码不一致")
                            }
                        }else{
                            this.promptBox("确认密码不能为空")
                        }
                    }else{
                        this.promptBox("新密码不能为空")
                    }
                }else{
                    this.promptBox("旧密码不能为空")
                }
            }else{
                this.promptBox("用户名不能为空")
            }
        },
        back(){
            this.$router.go(-1);
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
    margin-top: 50px;
  }

  .zhanghaoxinxi .label:nth-child(2),.zhanghaoxinxi .label:nth-child(3),.zhanghaoxinxi .label:nth-child(4) {
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
  .backPic:hover{
      cursor:pointer;
  }



</style>
