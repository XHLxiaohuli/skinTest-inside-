<template>
  <div class="hello" >
      <div style="width: 100%;height: 46px"></div>


    <!-- 头部组件 -->
    <heaDer :baogaotime="baogaotime_"/>
    <div id="subOutputRank-print">


    <!-- 用户基本信息 ok -->
    <USer :userVal="USer_val"/>

    <!-- 肌肤类型 ok -->
    <skinType @megVal="showMsg" :skinVal="skin_val"/>

    <!-- 皮肤检测结果 -->
    <results :resVal="results_val" ref="results"/>

    <!-- 定制方案/产品配方 (联动选项) -->
    <linkageOptions :linOpVal="linOptions_val" ref='myson'/>

    <!-- 专家分析 -->
    <p class="S_title">专家分析PROBLEM ANALYSIS</p>
   <div class="problemAnalysis">
     <textarea class="contentedi_" style="border: 1px solid rgb(221, 221, 221);" v-model="contentedival"></textarea>
    </div>
    <div class="liuyan_">
      <div>
        <span>皮肤检测:</span>
        <input class="pfProfessor" type="text" v-model="pfProfessor">
      </div>
      <div>
        <span>私人顾问:</span>
        <input class="srProfessor" type="text" v-model="srProfessor">
      </div>
      <div>
        <span>美容护理:</span>
        <input class="mrProfessor" type="text" v-model="mrProfessor">
      </div>
      <div class="clear_"></div>
    </div>
    <!-- 提交按钮 -->
    <div class="btn_line">
      <div class="button_save" @click="sumbfun">保存</div>
      <div class="button_print" @click="button1_onclick">打印</div>
      <div class="clear_"></div>
    </div>
    </div>
  </div>
</template>

<script>
import heaDer from './header_';
import USer from './user_';
import skinType from './skinType';
import results from './results';
import linkageOptions from './linkageOptions';

export default {
  components:{
    heaDer,
    USer,
    skinType,
    results,
    linkageOptions
  },
  data () {
    return {
    	baogaotime_:'',
      skinType:'',
      pfProfessor:'',
      srProfessor:'',
      mrProfessor:'',
      skin_val:'',
      USer_val:'',
      results_val:'',
      linOptions_val:'',
      contentedi_text:[
        '保持充足睡眠，适当的运动，注意防晒保湿，避免使用含刺激物的产品，多喝水多吃蔬菜水果，牛奶、鸡蛋、坚果等。坚持做好日常护理和周期护理。',
        '保持皮肤水油平衡，尽量选择不含油脂的护肤产品，养成良好的生活习惯不要熬夜，忌辛辣、刺激、高糖、高脂肪的食物，坚持做好日常护理和周期护理，建议一周做一次深层清洁及去角质。',
        '分区护理。T区抑制过量油脂分泌，同时还要补充相应的水分，U区着重补水保湿。整体护理以调节肌肤水油平衡为主，保持良好的生活习惯，注意防晒。坚持做好日常护理和周期护理。',
        '保持皮肤清洁，不宜频繁洗脸，忌手挤抠痘痘，保持皮肤水油平衡，注意饮食养成良好的生活习惯，坚持做好日常护理和周期护理。',
        '保持充足睡眠，多吃蔬菜水果。适当按摩，加速皮肤新陈代谢。注意防晒，加强补水保湿，使用温和安全的美白产品，坚持做好日常护理和周期护理。',
        '保持充足睡眠，多吃蔬菜水果。每天吃一片维生素C和维生素E，可达到淡斑的作用。注意防晒，加强补水保湿，使用温和安全的美白淡斑产品，坚持做好日常护理和周期护理。',
        '选用保湿滋润修复型的护肤品，适当多吃含胶原蛋白含脂类的食物，多吃水果蔬菜加强运动，做好防晒，坚持做好日常护理和周期护理。',
        '保持充足的睡眠，禁烟防晒，注意饮食补充胶原蛋白，多饮水，多吃蔬菜水果，使用温和无刺激针对性强的抗衰老产品，坚持做好日常护理和周期护理。',
        "应注意减少刺激因素，尽量温水洁面，避免接触致敏源，减少肌肤肌肤裸露面积，注意防晒。同时注意营养平衡，要多吃牛奶、豆制品及新鲜的蔬菜和水果，避免吃鱼、虾、蟹等易引起过敏的食物。"
      ],
      contentedival:'',
      reportId:''
    }
  },
  beforeMount(){
    // this.$nextTick(function(){
      this.ajaxVal();
    // });
  },
  mounted(){
    // this.$nextTick(function(){
      // this.ajaxVal();
    // });
  },
  watch: {
    pfProfessor(newValue, oldValue){
      $(".pfProfessor").attr('value',newValue);
　　},
    srProfessor(newValue, oldValue){
      $(".srProfessor").attr('value',newValue);
    },
    mrProfessor(newValue, oldValue){
      $(".mrProfessor").attr('value',newValue);
    }
  },
  methods:{
    ajaxVal:function(){
//      var storage = window.localStorage;
//      this.reportId = storage.getItem("reportId1");
      this.reportId=this.$route.query.reportId;
//      alert(this.$route.query.reportId)
//      alert(this.reportId)

      var this_=this;
      // 获取当前用户数据信息
       $.ajax({
        type:"get",
        url:"http://diy2.unescn.com/newProductRecommenderPageInit.json",
//        url:"http://192.168.10.27:8887/newProductRecommenderPageInit.json",
        data:{
          reportId:this_.reportId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success:function (res) {
          var resVal=JSON.parse(res);

       
          //报告时间
					this_.baogaotime_=this_.formatDate(new Date(resVal.skinTestReport.createTime));

          // 用户信息val
          this_.USer_val=resVal.member;

          // skin_val
          this_.skin_val=resVal.skinTestReport.skinType;

          // 皮肤检测结果val
          // 获取用户年龄
          var uage_=resVal.member.age;
          this_.results_val=[
            {
              title:'水份',
              compon:resVal.skinTestReport.water,
              biaozhun:this_.huanshuan('water',uage_)
            },
            {
              title:'油份',
              compon:resVal.skinTestReport.oil,
              biaozhun:this_.huanshuan('oil',uage_)
            },
            {
              title:'纹理',
              compon:resVal.skinTestReport.grain,
              biaozhun:this_.huanshuan('grain',uage_)
            },
            {
              title:'老化',
              compon:resVal.skinTestReport.aging,
              biaozhun:this_.huanshuan('aging',uage_)
            },
            {
              title:'炎症',
              compon:resVal.skinTestReport.inflammation,
              biaozhun:this_.huanshuan('inflammation',uage_)
            },
            {
              title:'色素',
              compon:resVal.skinTestReport.pigment,
              biaozhun:this_.huanshuan('pigment',uage_)
            },
            {
              title:'肤色',
              compon:resVal.skinTestReport.complexion,
              biaozhun:this_.huanshuan('complexion',uage_)
            },
            {
              title:'毛孔',
              compon:resVal.skinTestReport.pore,
              biaozhun:this_.huanshuan('pore',uage_)
            }
          ];

          // 定制方案/产品配方 (联动选项)
          var morenxianslin={};
          morenxianslin.zixuanarr=[];
          morenxianslin.morenpeifang='';
          if(resVal.commendList){
            for(var i=0;i<resVal.commendList.length;i++){
              morenxianslin.zixuanarr.push(
                resVal.commendList[i].productId
              );
            };
            morenxianslin.morenpeifang=resVal.skinTestReport.scheme;
          }
          this_.linOptions_val={
            yylfpf:resVal.原液理肤配方,
            hxtpf:resVal.活性肽配方,
            rchl:resVal.日常护理,
            zhl:resVal.周护理,
            morenxians:morenxianslin
          };

          // pfProfessor
          this_.pfProfessor=resVal.skinTestReport.pfProfessor;
          // srProfessor
          this_.srProfessor=resVal.skinTestReport.srProfessor;
          // mrProfessor
          this_.mrProfessor=resVal.skinTestReport.mrProfessor;

          this_.contentedival=resVal.skinTestReport.advice;
        },
        error:function (response) {
        
        }
      });
    },
    showMsg:function(msg){
      var src=this.contentedi_text[msg.index_[0]];
      this.contentedival=src;
      this.skinType=msg.sname_.join();

      this.$refs.myson.newPfchecked_2(msg.index_[0]);
    },
    huanshuan:function(standerTestType_,standerAge_){
      // 标准值
      var standerPreArr = [
            [60, 60, 55, 45, 42, 37, 37, 37],//水分
            [37, 37, 37, 37, 37, 37, 37, 37],//油份   <20为缺油
            [1, 10, 15, 20, 22, 25, 27, 30],//纹理
            [12, 17, 21, 26, 31, 35, 37, 45],//老化
            [16, 16, 15, 14, 13, 12, 12, 14],//炎症
            [10, 15, 22, 25, 30, 30, 30, 30],//色素
            [12, 20, 22, 26, 29, 29, 29, 29],//肤色
            [10, 20, 31, 34, 35, 35, 35, 35]//毛孔
          ];
      function standerTestType(testType) {
          if (testType == 'water') {
              return 0;
          } else if (testType == 'oil') {
              return 1;
          } else if (testType == 'grain') {
              return 2;
          } else if (testType == 'aging') {
              return 3;
          } else if (testType == 'inflammation') {
              return 4;
          } else if (testType == 'pigment') {
              return 5;
          } else if (testType == 'complexion') {
              return 6;
          } else if (testType == 'pore') {
              return 7;
          }
      };
      function standerAge(age) {
          if (age <= 10) {
              return 0;
          } else if (10 < age && age <= 20) {
              return 1;
          } else if (20 < age && age <= 30) {
              return 2;
          } else if (30 < age && age <= 40) {
              return 3;
          } else if (40 < age && age <= 50) {
              return 4;
          } else if (50 < age && age <= 60) {
              return 5;
          } else if (60 < age && age <= 70) {
              return 6;
          } else if (70 < age && age <= 80) {
              return 7;
          } else {
              return 2;
          }
      };
      return  standerPreArr[standerTestType(standerTestType_)][standerAge(standerAge_)];
    },
    sumbfun:function(){
      

//      var storage = window.localStorage;
//      this.reportId = storage.getItem("reportId1");
//      alert(this.$route.query.reportId)
      // reportId
      var reportId=this.$route.query.reportId;
    
      // skinType         肌肤类型
      var skinType=this.skinType;
      // advice             专家意见
      var advice=this.contentedival;
      // scheme           0/2,配方名字
      var scheme=this.$refs.myson.nameStr;
      // productIds
      var productIds=this.$refs.myson.strVal_;
      // cureType            0/2
      var cureType=scheme.indexOf("激素脸配方")>=0||scheme.indexOf("美白淡斑配方")>=0||scheme.indexOf("紧致淡纹配方")>=0||scheme.indexOf("红血丝配方")>=0?'2':'0';
      // pfProfessor        皮肤检测
      var pfProfessor=this.pfProfessor;
      // srProfessor         私人顾问
      var srProfessor=this.srProfessor;
      // mrProfessor       美容护理
      var mrProfessor=this.mrProfessor;
      // ver                2
      var ver='2';






      if(skinType!='' && scheme!='' && skinType!=null && scheme!=null && skinType!=undefined && scheme!=undefined){
          $.ajax({
            type:"post",
            url:"http://diy2.unescn.com/saveProductRecommender.json",
//            url:"http://192.168.10.27:8887/saveProductRecommender.json",
            dataType:'json',
            data:{
              reportId,
              skinType,
              advice,
              scheme,
              productIds,
              cureType,
              pfProfessor,
              srProfessor,
              mrProfessor,
              ver
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success:function (res) {
              if(res.Msg=='成功'){
                alert('保存成功');
              }
            },
            error:function (response) {
             
            }
          });
      }else{
        alert('肌肤类型与配方不能为空');
      }


    },
    button1_onclick() {
       // skinType         肌肤类型
      var skinType=this.skinType;
      // scheme           0/2,配方名字
      var scheme=this.$refs.myson.nameStr;

      if(skinType!='' && scheme!='' && skinType!=null && scheme!=null && skinType!=undefined && scheme!=undefined){
        var this_=this;
        $(".contentedi_").text(this_.contentedival);

        let subOutputRankPrint = document.getElementById('subOutputRank-print');
    
        let newContent =subOutputRankPrint.innerHTML;
        let oldContent = document.body.innerHTML;
        document.body.innerHTML = newContent;
        window.print();
        window.location.reload();
        document.body.innerHTML = oldContent;
      }else{
        alert('肌肤类型与配方不能为空');
      }
    },
    formatDate:function(now) { 
			 var year = now.getFullYear();  
       var month = now.getMonth()+1;  
       var date = now.getDate();  
       var hour = now.getHours();  
       var minute = now.getMinutes();  
       var second = now.getSeconds();  
       return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;  
		} 
  }
}
</script>
<style scoped>

 .dangepeif{
    font-size: 17px;
  }
.problemAnalysis {
    width: 95%;
    height: 168px;
    margin-top: 20px;
}
.problemAnalysis textarea {
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;

}
.btn_line {
    width: 900px;
    height: 50px;
    margin-top: 100px;
}
.button_save {
    float: left;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 40px solid #505050;
    color: white;
}
.button_print {
    float: left;
    margin-left: 20px;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: white;
    color: #515151;
    border: 1px solid #515151;
}
.contentedi_{
  width: 100%;
  height:168px;
  border: 1px #ccc solid;
  box-sizing: border-box;
  padding: 10px;
  line-height: 24px;
  text-align: left;
  word-wrap:break-word;
word-break:break-all;
}
.liuyan_{
  width: 100%;
  height: auto;
  margin: 25px 0;
}
.liuyan_>div{
  width: 28%;
  height: auto;
  margin-right: 20px;
  float: left;
  text-align: left;
}
.liuyan_>div>span{
  font-size: 14px;
    color: #636363;
}
.liuyan_>div>input{
  padding-left: 10px;
  width: 150px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #f0f0f0;
}
</style>
