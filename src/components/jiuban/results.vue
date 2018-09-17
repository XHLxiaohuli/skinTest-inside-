<template>
  <div class="results_">
    <p class="R_title">皮肤检测结果TEST RESULTS <span>安全值</span> <span>警惕值</span> <span>危险值</span></p>
    <div class="R_kuang">
      <div class="jindu_k" v-for="(val,index) in resVal_" :key="index">
        <div class="jindu_kchild1">{{val.title}}</div>
        <div>
          <div></div>
          <div class="jindutiao"
               :style="{width:val.compon+'%',borderBottom:'8px solid',borderBottomColor:yanse(val.title,val.compon,val.biaozhun)}"
          ></div>
          <span>{{Number(val.compon).toFixed(2)}}%</span>
        </div>
        <div class="clear_"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["resVal"],
    data() {
      return {
        resVal_: []
      }
    },
    watch: {
      resVal: {
        handler(newValue, oldValue) {
          this.resVal_ = newValue;
        },
        deep: true
      }
    },
    methods:{
      yanse:function(title,val,biaoz){
    

        var yans_=''
        if(title=='水份'){

          if(val>=65){
            yans_ = '#40d406';
          }else if(val<65 && val>biaoz){
            yans_ = '#ffc000';
          }else if(val<=biaoz){
            yans_ = '#fe0000';
          }

        }else if(title=='油份'){

          // if(0.5*biaoz <= val && val < biaoz*0.8){
          //   yans_ = '#ffc000';
          // }else if(0.8*biaoz <= val && val <= biaoz*1.2){
          //   yans_ = '#40d406';
          // }else if(1.2*biaoz <= val && val <= biaoz*1.5){
          //   yans_ = '#fe0000';
          // }

          if(0.8*biaoz <= val && val <= biaoz*1.2){
            yans_ = '#40d406';  //绿色
          }else if((0.5*biaoz <= val && val < biaoz*0.8) || (1.2*biaoz < val && val <= biaoz*1.5)){
            yans_ = '#ffc000';  //黄色
          }else{
            yans_ = '#fe0000';  //红色
          }

        }else if(title=='纹理' || title=='老化' || title=='炎症' || title=='色素' || title=='肤色' || title=='毛孔'){

          if(0<val && val<= biaoz*1.2){
            yans_ = '#40d406';
          }else if(biaoz*1.2 < val && val <= biaoz*2){
            yans_ = '#ffc000';
          }else if(biaoz*2 < val){
            yans_ = '#fe0000';
          }

        };

        return yans_;
      },
    }
  }
</script>
<style>
  .R_title {
    margin-bottom: 25px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
    clear: both;
    text-align: left;
  }

  .R_title > span {
    font-size: 16px;
    margin-left: 15px;
  }

  .R_title > span:nth-child(1) {
    border-bottom: 3px solid #3ed305;
  }

  .R_title > span:nth-child(2) {
    border-bottom: 3px solid #ffbf01;
  }

  .R_title > span:nth-child(3) {
    border-bottom: 3px solid #fe0100;
  }

  /*.R_kuang {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }*/
  .R_kuang:after{display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;}
  .jindu_k {
    float:left;
    width: 50%;
    height: 40px;
    margin-bottom: 20px;
  }

  .jindu_kchild1 {
    float: left;
    width: 46px;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 40px solid #787878;
    border-radius: 5px;
    color: white;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
  }

  .jindu_k > div:nth-child(2) {
    float: left;
    width: 80%;
    height: 40px;
    margin-left: 10px;
    position: relative;
  }

  .jindu_k > div:nth-child(2) > div {
    position: absolute;
    box-sizing: border-box;
    height: 8px;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
  }

  .jindu_k > div:nth-child(2) > div:nth-child(1) {
    width: 100%;
    border-bottom: 8px solid #f0f0f0;
  }

  .jindu_k > div:nth-child(2) > span {
    position: absolute;
    font-size: 12px;
    left: 0;
    bottom: 0;
  }
</style>
