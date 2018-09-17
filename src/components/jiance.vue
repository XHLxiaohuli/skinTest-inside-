<template>
  <div id="jiance" >

      <commontop></commontop>

      <iframe src="./static/html/jiance.html" style="width: 100%;height: 100%;margin: 0;padding: 0;border: none;position: relative">

      </iframe>






    <!--<div style="text-align: center;position: fixed;bottom: 10px;left: 50%;margin-left: -260px;">-->


  </div>
</template>
<!--<script type="text/javascript" src="swfobject.js"></script>-->
<script>

  import commontop from '@/components/commontop'
//  import { swfobject } from './swfobject'
////  import { getimg1 } from './getimg'
//
//  var api=require('./api');
//  import axios from 'axios'
  export default {
    name: 'App',
    data() {
      return {
//        msg: 'helloworld',
        biaocengceshi:true,
//        shencengceshi:false,
//        uvceshi:false,
//        kaishifenxi:false,
//        radiusline1:false,
//        radiusline2:false,
//        memberId:'',
//        jianceuserinfo:[],
//        jianceuserinfomember:[],
//        jianceuserinfoskinTestReport:[],
//        jianceuserinfoskinTestReportagingPic:''
//
      }

    },
    components:{
      commontop
    },
    created: function () {
      var that=this;
      var storage = window.localStorage;
      storage.setItem("oneWayAnalysisPage",'1');
      window.addEventListener("storage",function(e){
     

//        alert("进入监听localStorage值")
         if(e.key=="oneWayAnalysisPage"){
           if(e.oldValue=='1'&&e.newValue=='7'){
//             alert("oneWayAnalysisPage");
//             alert("localStorage值改变跳转页面")
             that.$router.push('/oneWayAnalysisPage')
           }

         }
      },false);
////      var v = new SWFObject("files/flvplayer.swf", "single", "1100", "550", "1");

//
//
//
//      var storage=window.localStorage;
//      this.memberId=storage.getItem("testuserid");
//
////      axios.post(api.commonapi.memberPageInit, {
////        memberId:  this.memberId
////      }).then(function (response) {

////        })
////        .catch(function (error) {

////        });
//      var that=this;
//      $.ajax({
//        type:"post",
//        url:"http://192.168.10.27:8887/monitorPageInit.json",
//        dataType:'json',
//        data:{
//          memberId:this.memberId
//        },
//        header: {
//          'content-type': 'application/x-www-form-urlencoded'
//        },
//        success:function (res) {

//          that.jianceuserinfo=res;
//          that.jianceuserinfomember=res.member;
//          that.jianceuserinfoskinTestReport=res.skinTestReport;
//          that.jianceuserinfoskinTestReportagingPic=res.skinTestReport.agingPic;
//
//        },
//        error:function (response) {
//
//        }
//      })
//
//
//
//
    },
//    mounted: function() {
//
//        swfobject.embedSWF("http://diy.unescn.com/AW.swf","swfid1","500", "374", "9.0.0", "http://diy.unescn.com/expressInstall.swf",{n:"hello"},{m:"false"},{id:"sfid"});
//
//
//
//    },
    methods: {
      fanhuiup:function () {

        var el=document.getElementById("shencengceshi");
    
        if(el.style.display=="block"){
          $("#biaocengceshi").hide();
          $("#shencengceshi").hide();
          $("#uvceshi").show();
        }else {

          $("#biaocengceshi").css('display','none')
          $("#shencengceshi").css('display','block')
        }
        var biaoceng=document.getElementById("biaocengceshi");
    
//        if(){
//
//        }

      }
//      test1:function () {

//          var a=document.all.sfid;
////          document.all.sfid.img1();

//          a.imgdata();
//      },
//      getimg1:function (v) {
//        alert(v)
////        document.all.img1v.value=v;
////        document.all.imgg1.src="data:image/jpeg;base64,"+v;
//      },
//      zhaopianceshi:function () {
//        if(this.shencengceshi==true){
//          this.biaocengceshi=false;
//          this.shencengceshi=false;
//          this.uvceshi=true;
//          this.kaishifenxi=true;
//          this.radiusline1=true;
//          this.radiusline2=true;
//
//
//        }else {
//
//          this.radiusline1=true;
//          this.biaocengceshi=false;
//          this.shencengceshi=true;
//        }
////        if(this.uvceshi==true){
////
////          this.radiusline2=true;
////        }
//
//
//      },
////      getimg1: function(v){
////        document.all.img1v.value=v;
////

//////        document.all.imgg1.src="data:image/jpeg;base64,"+v;
//////        if(localStorage.getItem('waterPic') != ''){
//////          $(".lastRsult").find('img').attr('src',localStorage.getItem('waterPic'));
//////        }
////      },
//      gofenxi:function () {
//        alert("321321")
//      }
    },

  }
</script>
<style scoped>

#jiance{
  height: 100vh;
}
.ceshi_box_title{
  margin-left: 10px;
  color: #646464;
}
.class-a{
  background-color: #525252 !important;
  color: white !important;
}
  .right_box_title :nth-child(2){
    margin-left: 190px;
    color: #646464;
    font-size: 14px;
    cursor: pointer;
  }
  .thisRsult span{
    color: #646464;
    font-size: 12px;
    margin-top: 10px;
    float: left;
    display: inline-block;
  }
  .button_mon{
    cursor: pointer;
    width: 150px;
    height: 40px;
    background-color: #505050;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    color: white;
    margin-top: 20px;
    margin-left: 43%;
    float: left;
  }
  .thisRsult{
    clear: both;
    border: 5px solid #323232;
    width: 510px;
    height: 385px;
    margin-top: 45px;
    background-color: #646464;
    margin-left: 30px;

  }

  .lastRsult span{
    color: #646464;
    font-size: 12px;
    float: left;
    margin-top: 10px;
  }
  .lastRsult img{
    width: 320px;
    height: 240px;
    vertical-align: middle;
  }
  .lastRsult{
    float: right;
    width: 324px;
    height: 244px;
    background-color: #dcdcdc;
    margin-right: 30px;
    position: relative;
    border: 2px solid #646464;
  }
  .pro_msg{
    float: left;
    width: 110px;
    height: 150px;
    margin-left: 30px;
    text-align: left;
  }
  .paizhaouser{

  }
  .light_tip {
    clear: both;
    width: 100%;
    height: 145px;
    border-top: 1px solid #dddddd;
    position: relative;
    bottom: 0;
  }

  .light_tip_box span {
    position: absolute;
    top: 0;
    left: -100px;
    color: #959595;
    font-size: 13px;
  }

  .light_tip_box img {
    vertical-align: middle;
  }

  .light_tip_box {
    position: relative;
    margin-top: 20px;
    margin-left: 160px;
  }

  .mon_sl div {
    cursor: pointer;
    border: 1px solid #dddddd;
    margin-top: 10px;
    width: 100px;
    height: 30px;
    float: right;
    background-color: #f5f5f5;
    border-radius: 20px;
    text-align: center;
    line-height: 30px;
  }

  .page_ a, span {
    margin-right: 5px;
  }

  .mon_sl :nth-child(3) {
    margin-top: 19px;
    float: left;
    font-size: 12px;
    color: #959595;
  }

  .mon_sl {
    clear: both;
    width: 220px;
    height: 160px;
    border: 1px solid black;
    margin-left: 105px;
    margin-top: 20px;
    position: relative;
  }

  .mon_sl :nth-child(1) {
    position: absolute;
    top: 48%;
    left: -35px;
    color: #a3a3a3;
    font-size: 15px;
    width: 35px;
  }

  .right_box_title {
    height: 40px;
    width: 100%;
    background-color: #f0f0f0;
    border-bottom: 1px solid #969696;
    font-size: 20px;
    line-height: 40px;
  }

  .right_box_title span:nth-child(1) {
    float: left;

  }

  .right_box_title span:nth-child(2) {
    float: right;

  }

  .right_box {
    width: 38%;
    float: right;
    border: 1px solid #969696;
    position: relative;
  }
  .right_box,  .left_box{
    margin-top: 33px;
  }
  .left_box {
    width: 60%;
    float: left;
  }

  #jiance .centent {
    float: left;
    background-color: white;
    height: 100%;
    min-height: 900px;
    width: 50%;
    min-width: 1100px;
    /* margin-left: 20%; */
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    padding-top: 50px;
  }

  .radiusline2 {
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    background-color: #fafafa;
    color: #979797;
    text-align: center;
    font-size: 20px;
    margin-left: 42.5%;
  }

  .radiu_text {
    position: absolute;
    line-height: 35px;
    color: #545253;
    font-size: 17px;
    left: 52%;
    margin-right: 5px;
  }

  .radiusline {
    margin-left: 40%;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    background-color: #fafafa;
    color: #979797;
    text-align: center;
    font-size: 20px;
  }

  .radius_active {
    background-color: #525252;
    color: white;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    text-align: center;
    font-size: 20px;
  }

  .topaaawrap {
    margin: 50px 0 0 250px;
    height: 40px;
    width: 575px;
    background-color: #dbd9da;
    border-radius: 30px;
    padding-top: 5px;
    position: relative;
  }

  .topaaawrap .biaoceng {
    position: absolute;
    left: -40px;
    line-height: 35px;
    color: #545253;
    font-size: 17px;
  }
.pro_msg img{
  width: 110px;
  height: 110px;
}

.centent_h {
  height: 40px;
}

.title {
  color: #4f5455;
  margin-right: 20px;
}

.title_rig {
  float: left;
  color: white;
  font-size: 12px;
  margin-left: 20px;
  line-height: 55px;
  cursor: pointer;
}

.title_rig:hover {
  color: white;
}
.title_rig img{
  vertical-align: middle;
}




th {
  font-size: 12px;
  text-align: center;
}

td {
  text-align: center;
}


.checkbox input[type=checkbox],
.radiobox input[type=radio] {
  -webkit-appearance: none;
  background-color: transparent;
  outline: 0 !important;
  border: 0;
  font-size: 20px !important;
}

.checkbox input[type=checkbox]:before,
.radiobox input[type=radio]:before {
  display: inline-block;
  text-align: center;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 20px;

  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(212, 212, 212);
}

.checkbox input[type=checkbox]:checked:before,
.radiobox input[type=radio]:checked:before {
  color: rgb(0, 191, 255);
}







input::-webkit-input-placeholder {
  color: #d8d8d8;
  font-size: 12px;
}



label {
  font-size: 12px;
}


.qr_pic{
  height: 140px;width: 140px; margin: 20px 0 0 20px;
}
.qr_lab{
  position: absolute;top: 165px;right:75px ;
}
.page_{
  position: absolute;bottom: -30px;right: 0px;
}
.page_ a,span{
  margin-right: 5px;
}

.bigTip{
  height: 70px;line-height: 35px;text-align: center; width: 40px;background-color: #e6e6e6;
  border: 2px solid black;
}
.bigTip_active{
  background-color: #7fd8dc;
}
.line_left{
  border-bottom: 1px solid black;width: 35%;float: left;
}
.line_right{
  border-bottom: 1px solid black;width: 35%;float: right;
}
.userTips{
  width: 60%;position: relative;text-align: center;float: left;
}
.return_icon{
  float: right;height: 30px;line-height: 30px; color: #6e6e6e;margin-top: 15px;margin-right: 20px;
}
.return_icon img{
  margin-top: -5px;
}
.bottom_font{
  position: absolute;
  bottom: -60px;
  margin-left: 30%;
  font-size: 12px;
}
.head_left :nth-child(2){
  cursor: pointer;
}
.hoverLogout{
  text-align: center;font-size: 14px; position: absolute;height: 40px;width: 66px;bottom: -20px;left: 25px;background-color: #051419;color: white;
  cursor: pointer;display: none;
}
.pro_ra{
  position: relative;margin: 50px 0 0 250px; height: 40px;width: 575px;background-color: #dbd9da;border-radius: 30px;padding-top: 5px;
}
.radius{
  float: left;width: 30px;height: 30px;line-height: 30px; border-radius: 30px;background-color: #fafafa;color: #979797;text-align: center;font-size: 20px;
}
.radius_active{
  background-color: #525252;color: white;
}
.radiu_text{
  position: absolute;line-height: 35px;color: #545253;font-size: 17px;
}
.left_box{
  width: 600px;height: 700px;margin-top: 33px;float: left;
}
.pro_msg{
  float: left; width: 110px;height: 150px;margin-left: 30px;
}
.pro_msg img{
  width: 110px;height: 110px;
}
.lastRsult{
  float: right; width: 324px;height: 244px;background-color: #dcdcdc;margin-right: 30px;position: relative;border: 2px solid #646464;
}
.lastRsult img{
  width: 320px;height: 240px;
}
.lastRsult span{
  color: #646464;font-size: 12px;float: left;margin-top: 10px;
}
.thisRsult{
  width: 510px;height: 384px;background-color: #646464;margin-left: 30px;margin-top: 45px; clear: both;border: 5px solid #323232;
}
.thisRsult div{
  width: 500px;height: 374px;
}
.thisRsult span{
  color: #646464;font-size: 12px;margin-top: 10px;float: left;
}
.right_box{
  float: right; width: 375px;height: 666px;margin-top: 33px;border:1px solid #969696;position: relative;
}
.right_box_title{
  height: 40px;width: 100%;background-color: #f0f0f0;border-bottom:1px solid #969696;font-size: 20px;line-height: 40px;
}
.right_box_title :nth-child(1){
  margin-left: 10px;color: #646464;
}
.right_box_title :nth-child(2){
  margin-left: 190px;color: #646464;font-size: 14px;cursor: pointer;
}
.button_mon,.button_setting{
  cursor: pointer; width: 150px;height: 40px;background-color: #505050;border-radius: 5px;line-height: 40px;text-align: center;color: white;margin-top: 20px;margin-left: 43%;float: left;
}
.mon_sl{
  clear: both;width: 220px;height: 160px;border: 1px solid black;margin-left: 105px;margin-top: 20px; position: relative;
}
.mon_sl div{
  cursor: pointer;border: 1px solid #dddddd; margin-top: 10px; width: 100px;height: 30px;float: right;background-color: #f5f5f5;border-radius: 20px;text-align: center;line-height: 30px;
}
.mon_sl img{
  width: 218px;height: 158px;
}
.mon_sl :nth-child(1){
  position: absolute;top: 48%;left: -35px;color: #a3a3a3;font-size: 15px;width: 35px;
}
.mon_sl :nth-child(3){
  margin-top: 19px; float: left;font-size: 12px;color: #959595;
}

/*平板*/
@media screen  and (max-height:720px) {

  .pro_ra {
    margin-top: 20px;
    margin-left: 50px;
  }

  .lastRsult {
    width: 164px;
    height: 124px;
  }

  .lastRsult img {
    width: 160px;
    height: 120px;
  }

  .thisRsult {
    width: 510px;
    height: 385px;
    margin-top: 20px;
  }

  .thisRsult div {
    width: 500px;
    height: 375px;
  }

  .thisRsult object {
    width: 500px;
    height: 375px;
  }

  .right_box {
    height: 630px;
    margin-top: -40px;
  }

  .bottom_font {
    display: none;
  }

  .left_box {
    height: auto;
  }

  .centent {
    min-height: 600px;
  }

  .button_mon {
    margin-top: -60px;
    margin-left: 50.5%;
  }
}






</style>
