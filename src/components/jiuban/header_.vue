<template>
  <div>

  <commontop></commontop>
  <div class="header_">
    <div class="logo_">
      <img src="http://unesmall.b0.upaiyun.com/unes_pro/E01.png" alt="">
    </div>

    <img id="viewImg2" src="" style="height:120px;width:120px;position:absolute;bottom:18px;right:-17px;">

    <div class="title_">
      <span>肌肤检测报告</span>
      <!-- 检测报告时间 -->
      <span>{{baogaotime}}</span>
    </div>
  </div>
  </div>
</template>

<script>

  import commontop from '../../components/commontop'
export default {
	props:[ "baogaotime" ],
  data() {
    return {

    }
  },
  components: {
    commontop
  },
  watch: {
    baogaotime(newValue, oldValue){
　			
	　}
　},
  mounted(){

    var storage = window.localStorage;
    this.reportId = storage.getItem("reportId1");

    var text=Date.parse(new Date());
    $('#viewImg2').attr('src','http://diy2.unescn.com/wx/createQR.json?reportId='+ this.reportId+'&amp;time='+text+'&ver=1&view=view');
  }
}
</script>

<style>
  .header_{
    width: 50%;
    min-width: 1100px;
    margin: 0 auto;
    margin-top: 40px;
    height:auto;
    border-bottom: 2px solid #323232;
    position: relative;
  }
  .logo_{
    text-align: left;
  }
  .title_{
    position: relative;
  }
  .title_>span:nth-child(1){
    font-size: 28px;
    line-height: 50px;
  }
  .title_>span:nth-child(2){
    position: absolute;
    font-size: 13px;
    right:0;
    bottom:6px;
  }
</style>
