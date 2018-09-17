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

    <div>
      <p style="text-align:left">
        <span v-for="(v,i) in resVal_" :key="i" style="margin-right:10px;">
          <span>{{v.title +' : '}}</span>
          <span style="color:rgb(64, 212, 6);">{{v.biaozhun+'%'}}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:[ "resVal" ],
  data() {
    return {
      resVal_:[],
      resArr:[],
    }
  },
  watch: {
    resVal: {
  　　　　handler(newValue, oldValue) {
            this.resVal_=newValue;
            // this.resArr=this.between(newValue);
            this.resArr=this.between_2(newValue);
  　　　　},
  　　　　deep: true
  　　}
  },
  mounted() {
    // this.resArr=this.between(this.resVal_);
    this.resArr=this.between_2(this.resVal_);
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
    between:function(resVal){
      if(resVal.length==0){return;}
      var arr = [];
      for(var i=0; i<resVal.length; i++){
        if(resVal[i].title == '水份'){
          // 越小越差
          var canshu_2 = resVal[i].compon/resVal[i].biaozhun;
          duibi_0(canshu_2 , resVal[i].title);
        }else if(resVal[i].title == '油份'){
          var canshu_2 = resVal[i].compon/(resVal[i].biaozhun*0.5);
          var canshu_3 = resVal[i].compon/(resVal[i].biaozhun*1.5);
          duibi_1(canshu_2 , canshu_3 , resVal[i].title);
        }else{
          // 越大越差
          var canshu_2 = resVal[i].compon/(resVal[i].biaozhun*2);
          duibi_2(canshu_2 , resVal[i].title);
        };
      };
      function duibi_0(canshu_2,title){
        arr.push({
          title:title,
          canshu:2-canshu_2
        });
      };
      function duibi_1(canshu_2,canshu_3,title){
        if((2-canshu_2) >= canshu_3){
          duibi_2((2-canshu_2),title);
        }else{
          duibi_2(canshu_3,title);
        };
      };
      function duibi_2(canshu_2,title){
        arr.push({
          title:title,
          canshu:canshu_2
        });
      };
      function compare(obj1, obj2) {
          var val1 = obj1.canshu;
          var val2 = obj2.canshu;
          if (val1 < val2) {
              return -1;
          } else if (val1 > val2) {
              return 1;
          } else {
              return 0;
          }            
      };
      // 数组从小到大排序，再翻转数组
      return arr.sort(compare).reverse();
    },
    between_2:function(resVal){
      if(resVal.length==0){return;}
      var arr=[];
      for(var i=0;i<resVal.length;i++){
          arr.push({
            title:resVal[i].title,
            canshu:resVal[i].biaozhun-resVal[i].compon > 0 ? resVal[i].biaozhun-resVal[i].compon : (resVal[i].biaozhun-resVal[i].compon)*-1
          });
      }

      function compare(obj1, obj2) {
          var val1 = obj1.canshu;
          var val2 = obj2.canshu;
          if (val1 < val2) {
              return -1;
          } else if (val1 > val2) {
              return 1;
          } else {
              return 0;
          }            
      };
      // 数组从小到大排序，再翻转数组
      return arr.sort(compare).reverse();

    },

  }
}
</script>
<style>
.R_title{
  margin-bottom: 25px;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  clear: both;
  text-align: left;
}
.R_title>span{
  font-size: 16px;
  margin-left: 15px;
}
.R_title>span:nth-child(1){
      border-bottom: 3px solid #3ed305;
}
.R_title>span:nth-child(2){
      border-bottom: 3px solid #ffbf01;
}
.R_title>span:nth-child(3){
      border-bottom: 3px solid #fe0100;
}
/*.R_kuang{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
}*/
.R_kuang:after{display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;}
.jindu_k{
  float:left;
  width: 50%;
  height: 40px;
  margin-bottom: 20px;
}
.jindu_kchild1{
  float: left;
  width: 46px;
  height: 40px;
  box-sizing: border-box;
  border-bottom:40px solid #787878;
  border-radius: 5px;
  color: white;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}
.jindu_k>div:nth-child(2){
  float: left;
  width: 80%;
  height: 40px;
  margin-left: 10px;
  position: relative;
}
.jindu_k>div:nth-child(2)>div{
  position: absolute;
  box-sizing: border-box;
  height:8px;
  left: 0;
  top:50%;
  transform: translate(0,-50%);
}
.jindu_k>div:nth-child(2)>div:nth-child(1){
  width:100%;
  border-bottom:8px solid #f0f0f0;
}
.jindu_k>div:nth-child(2)>span{
  position: absolute;
  font-size: 12px;
  left:0;
  bottom: 0;
}
</style>
