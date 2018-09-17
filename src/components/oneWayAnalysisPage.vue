<template>
  <div id="oneWayAnalysisPage">
    <div id="commontop">
      <div class="main">
        <div class="logo clearfloat">
          <img src="http://unesmall.b0.upaiyun.com/unes_pro/01.png"/>
        </div>

        <ul class="topnavul clearfloat">
          <li id="navhuiyuan" @click="goHuiyuan">会员</li>
          <li>检测</li>
          <li class="active">肌肤分析</li>
          <li>分析报告</li>
        </ul>
        <div class="title_rig mendianimg">
          <img src="http://unesmall.b0.upaiyun.com/unes_pro/icon_user.png">
          {{mendian}}
          <div @click="logout" class="hoverLogout">退出</div>
        </div>

        <div class="title_rig1 icon_back" @click="fanhuiup">
          <img src="http://diy2.unescn.com/unes/img/icon_back.png">返回
        </div>

      </div>

    </div>
    <div class="main clearfloat">

      <div class="left">
        <div class="userinfo2">
          <img :src="oneWayAnalysisPageInituser.headimgurl"/>
          <label class="bianhao">编号:{{ oneWayAnalysisPageInit.skinTestReport.user.id }}</label>
          <label class="xingming">姓名：{{ oneWayAnalysisPageInit.skinTestReport.user.name }}</label>
        </div>


        <div class="ceshishijian">
          <h5>测试时间</h5>
          <!--&lt;!&ndash;{{ new Date(i.testTime).toLocaleString().substring(0,18)}}&ndash;&gt;{{  this.datefomat(i.testTime) }}-->
          <!--<div class="shijian" @click="checkzhedate(index,i.id)"  :class="checkdateindex==index?'checkdate':''"       v-for="(i,index) in testshijian">{{ i.date}}</div>-->
          <div class="shijian" 
              @click="checkzhedate(index,i.id)" 
              :class="i.id==reportId?'checkdate':''"
              v-for="(i,index) in testshijian"
              :key="index"
          >
            {{ i.date}}
          </div>
        </div>
        <div class="pagechange">
          <span @click="shangyiye">上一页</span><span
          @click="xiayiye">下一页</span><span>第{{pageindex}}页</span><span>共{{ testrecordcount }}页</span>
        </div>
      </div>
      <div class="right">
        <div class="fenxishuju_details">
          <div class="shuifen dataline">
            <div class="name datalinetext datalinetext1">水分</div>
            <div class="databg" @click="checktype(1,(oneWayAnalysisPageInit.skinTestReport.water).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg1"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.water).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom1"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.water).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.water).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.water).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="youfen dataline">
            <div class="name datalinetext datalinetext2">油份</div>
            <div class="databg" @click="checktype(2,(oneWayAnalysisPageInit.skinTestReport.oil).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg2"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.oil).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom2"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.oil).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.oil).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.oil).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>


          <div class="wenli dataline">
            <div class="name datalinetext datalinetext3">纹理</div>
            <div class="databg" @click="checktype(3,(oneWayAnalysisPageInit.skinTestReport.grain).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg3"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.grain).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom3"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.grain).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.grain).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.grain).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="laohua dataline">
            <div class="name datalinetext datalinetext4">老化</div>
            <div class="databg" @click="checktype(4,(oneWayAnalysisPageInit.skinTestReport.aging).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg4"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.aging).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom4"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.aging).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.aging).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.aging).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="yanzheng dataline">
            <div class="name datalinetext datalinetext5">炎症</div>
            <div class="databg" @click="checktype(5,(oneWayAnalysisPageInit.skinTestReport.inflammation).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg5"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.inflammation).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom5"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.inflammation).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.inflammation).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.inflammation).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="sesu dataline">
            <div class="name datalinetext datalinetext6">色素</div>
            <div class="databg" @click="checktype(6,(oneWayAnalysisPageInit.skinTestReport.pigment).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg6"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.pigment).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom6"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.pigment).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.pigment).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.pigment).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="fuse dataline">
            <div class="name datalinetext datalinetext7">肤色</div>
            <div class="databg" @click="checktype(7,(oneWayAnalysisPageInit.skinTestReport.complexion).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg7"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.complexion).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom7"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.complexion).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.complexion).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.complexion).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>
          <div class="maokong dataline">
            <div class="name datalinetext datalinetext8">毛孔</div>
            <div class="databg" @click="checktype(8,(oneWayAnalysisPageInit.skinTestReport.pore).toLocaleString().substring(0, 4))">
              <div class="checkbg" id="checkbg8"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.pore).toLocaleString().substring(0, 4) + '%'"></div>
              <div class="borderbottom" id="borderbottom8"
                   :style="'width:' + (oneWayAnalysisPageInit.skinTestReport.pore).toLocaleString().substring(0, 4) + '%'"></div>
              <span class="baifenbi"
                    :style="'left:' + (oneWayAnalysisPageInit.skinTestReport.pore).toLocaleString().substring(0, 4) + '%'">{{ (oneWayAnalysisPageInit.skinTestReport.pore).toLocaleString().substring(0, 4)
                }}%</span>
            </div>
          </div>


        </div>

        <div id="ageNow">
          <div>当前年龄的标准值,</div>
          <div :class="checkindex==1 ?'checktextbg':''">
            <span>水份：</span><span id="ageNowArr0"></span>
          </div>
          ;
          <div :class="checkindex==2 ?'checktextbg':''">
            <span>油份：</span><span id="ageNowArr1"></span>
          </div>
          ;
          <div :class="checkindex==3 ?'checktextbg':''">
            <span>纹理：</span><span id="ageNowArr2"></span>
          </div>
          ;
          <div :class="checkindex==4 ?'checktextbg':''">
            <span>老化：</span><span id="ageNowArr3"></span>
          </div>
          ;
          <div :class="checkindex==5 ?'checktextbg':''">
            <span>炎症：</span><span id="ageNowArr4"></span>
          </div>
          ;
          <div :class="checkindex==6 ?'checktextbg':''">
            <span>色素：</span><span id="ageNowArr5"></span>
          </div>
          ;
          <div :class="checkindex==7 ?'checktextbg':''">
            <span>肤色：</span><span id="ageNowArr6"></span>
          </div>
          ;
          <div :class="checkindex==8 ?'checktextbg':''">
            <span>毛孔：</span><span id="ageNowArr7"></span>
          </div>
        </div>

        <div class="skin_box">
          <div class="title">
            {{checktext}}状况分析
          </div>
          <div class="zhuangkuangfenxi zhuangkuangfenxi1 clearfloat">
            <div class="skin_box_one" id="canvas">
              <div id="myChart" :style="{width: '420px', height: '300px'}"></div>
              <span style="position: absolute;bottom: -25px;">比例</span>
            </div>
            <div class="skin_box_one">
              <img id="nowPic" @click="closezhezhao()"
                   :src="nowPicimg">
              <span>现状</span>
            </div>
            <div class="skin_box_one">
              <img id="tdPic" src="http://unesmall.b0.upaiyun.com/unes_pro/imgs/s3d.jpg">
              <span>3D展示</span>
            </div>
          </div>
          <div style="width: 100%;height: 35px;"></div>


          <div class="zhuangkuangfenxi zhuangkuangfenxi2 clearfloat">
            <div class="skin_box_one">
              <img id="goodPic"
                   :src="haoimg">
              <span>好</span>
            </div>
            <div class="skin_box_one">
              <img id="midPic"
                   :src="zhongimg">
              <span>中</span>
            </div>
            <div class="skin_box_one">
              <img id="badPic"
                   :src="chaimg">
              <span>差</span>
            </div>
          </div>


          <div style="width: 100%;height: 25px;"></div>
        </div>

        <div class="fenxibaogao clearfloat">
          <div class="buttn_report" v-if="ver==1">
            <!--<router-link to='/yuanbenfenxibaogao' target=" _blank">原版分析报告</router-link>-->
            <!--<a target="_blank" @click="analysereport">原版分析报告</a>-->
            <!--网页需要跳转新窗口-->
            <router-link tag="a" target="_blank" :to="{name:'yuanbenfenxibaogao',query:{reportId:reportId}}">原版分析报告</router-link>
            <!--桌面应用exe不需要跳转新窗口-->
            <router-link tag="a"   :to="{name:'yuanbenfenxibaogao',query:{reportId:reportId}}">原版分析报告</router-link>
            <!--<router-link tag="a" target="_blank" :to="{path: '/yuanbenfenxibaogao/' +'reportId'}">原版分析报告</router-link>-->
          </div>
          <div class="buttn_report_new" v-if="ver==2">
            <!--<a v-link="{path: '/newProductRecommenderPage'}"></a>-->
            <!--<router-link to='/newProductRecommenderPage' target=" _blank">新版分析报告</router-link>-->
            <!--<a target="_blank" @click="newanalysereport">新版分析报告</a>-->
            <!--网页需要跳转新窗口-->
            <!--<router-link tag="a" target="_blank" :to="{name:'newProductRecommenderPage',query:{reportId:reportId}}">新版分析报告</router-link>-->
            <!--桌面应用exe不需要跳转新窗口-->
            <router-link tag="a"   :to="{name:'newProductRecommenderPage',query:{reportId:reportId}}">新版分析报告</router-link>
          </div>

          <div v-if="ver!=1&&ver!=2">

            <div class="buttn_report" >
              <!--<router-link to='/yuanbenfenxibaogao' target=" _blank">原版分析报告</router-link>-->
              <!--<a target="_blank" @click="analysereport">原版分析报告</a>-->
              <!--网页需要跳转新窗口-->
              <!--<router-link tag="a" target="_blank" :to="{name:'yuanbenfenxibaogao',query:{reportId:reportId}}">原版分析报告</router-link>-->
              <!--桌面应用exe不需要跳转新窗口-->
              <router-link tag="a"   :to="{name:'yuanbenfenxibaogao',query:{reportId:reportId}}">原版分析报告</router-link>
              <!--<router-link tag="a" target="_blank" :to="{name:'yuanbenfenxibaogao',query:{reportId:reportId}}">原版分析报告1</router-link>-->
            </div>
            <div class="buttn_report_new">
              <!--<a v-link="{path: '/newProductRecommenderPage'}"></a>-->
              <!--<router-link to='/newProductRecommenderPage' target=" _blank">新版分析报告</router-link>-->
              <!--<a target="_blank" @click="newanalysereport">新版分析报告</a>-->
              <!--网页需要跳转新窗口-->
              <!--<router-link tag="a" target="_blank" :to="{name:'newProductRecommenderPage',query:{reportId:reportId}}">新版分析报告</router-link>-->
              <!--桌面应用exe不需要跳转新窗口-->
              <router-link tag="a"   :to="{name:'newProductRecommenderPage',query:{reportId:reportId}}">新版分析报告</router-link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="zhezhao" v-if="zhezhao" @click="closezhezhao">
      <div class="xianzhuangimg">
        <img :src="nowPicimg "/>
      </div>
    </div>

    <!--<div style="text-align: center;position: fixed;bottom: 10px;left: 50%;margin-left: -260px;">-->
    <!--<div class="copyrightwrap" style="width: 100%">-->
      <!--<div style="width: 100%" id="copyright">-->
        <!--Copyright@2016-2020广州优理氏生物科技有限公司粤ICP备16107136号-1-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>
<script>

//  var api = require('./api')
  var echarts=require('echarts')
  import commontop from './commontop'

  var img1 = "";
  var img2 = "";
  var img3 = "";
  var img4 = "";
  var img5 = "";
  export default {
    name: 'App',
    data() {
      return {
        zhezhao: false,
        mendian: '',
        reportId: '',
        memberId: '',
        oneWayAnalysisPageInit: {},
        getReportTestTimeByMemberAndPage: {},
        oneWayAnalysisPageInituser: {},
        countSkinTestReport: {},
        checktext: '水分',
        checkindex: 1,
        haoimg: 'http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_1.jpg',
        zhongimg: 'http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_2.jpg',
        chaimg: 'http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_3.jpg',
        testshijian: [],
        checkdateindex: 0,
        nowPicimg: '',

        testrecordcount: 0,
        pageindex: 1,
        biaozhunzhi: [],
        ver:-1

      }
    },
    created: function () {

      var storage = window.localStorage;
      this.reportId = storage.getItem("reportId1");
      this.memberId = storage.getItem("testuserid");
      this.mendian = storage.getItem("mendian");

      this.datainit();
      this.gettestrecord(this.pageindex)
//      alert(this.reportId);


//
//      alert(this.getagesection(23))
//      alert(this.getbiaozhunzhi('water'))
//      alert([60, 60, 55, 45, 42, 37, 37, 37])

    },

    methods: {

      shangyiye: function () {
        var that = this;
        if (that.pageindex > 1) {
          that.pageindex = that.pageindex - 1;
        }
        that.gettestrecord(that.pageindex);
      },
      xiayiye: function () {
        var that = this;
        if (that.pageindex < that.testrecordcount) {
          that.pageindex = that.pageindex + 1;
        }
        that.gettestrecord(that.pageindex)
      },
      fanhuiup: function () {
        this.$router.back(-1)
      },
      analysereport: function () {
//          alert(this.reportId);
        var storage = window.localStorage;
        this.reportId = storage.getItem("reportId1");
        this.$router.push({path: 'yuanbenfenxibaogao', query: {reportId: this.reportId}})

      },
      newanalysereport: function () {
        var storage = window.localStorage;
        this.reportId = storage.getItem("reportId1");
        this.$router.push({path: 'newProductRecommenderPage', query: {reportId: this.reportId}})
      },
      checkzhedate: function (index, id) {
//        alert(index)
//        alert(id)
        this.checkdateindex = index;
        this.reportId = id;
        this.checkdatedata(id);
        var storage = window.localStorage;
        storage.setItem("reportId1", id);
      },
      datefomat: function (date) {
        var date = new Date(date);
        var nian = date.getFullYear();
        var yue = (parseInt(date.getMonth()) + 1) < 10 ? '0' + (parseInt(date.getMonth()) + 1) : (parseInt(date.getMonth()) + 1);
        var ri = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
        var xiaoshi = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours();
        var fenzhong = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return nian + '-' + yue + '-' + ri + ' ' + xiaoshi + ':' + fenzhong;

      },
      checktype: function (type,percent) {
//        $(".datalinetext").css("color",'')
//        alert($("#borderbottom"+type).css("color"))
//        $(".datalinetext1").css("color","#2c3e50");
//        $(".datalinetext2").css("color","#2c3e50");
//        $(".datalinetext3").css("color","#2c3e50");
//        $(".datalinetext4").css("color","#2c3e50");
//        $(".datalinetext5").css("color","#2c3e50");
//        $(".datalinetext6").css("color","#2c3e50");
//        $(".datalinetext7").css("color","#2c3e50");
//        $(".datalinetext8").css("color","#2c3e50");


        var checkbg = document.querySelectorAll(".checkbg");
        var borderbottom = document.querySelectorAll(".borderbottom");
        var datalinetext = document.querySelectorAll(".datalinetext");
        var that = this;
        for (var i = 0; i < checkbg.length; i++) {
          checkbg[i].style.display = "none"
//          borderbottom[i].display="block";
          datalinetext[i].style.color = "#333333"
        }



        if (type == 1) {
          checkbg[0].style.display = "block";
//            borderbottom[i].display="none";
          this.checktext = "水分";
          this.checkindex = 1;
          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s1_3.jpg"
          that.nowPicimg = img1;

//          alert(that.oneWayAnalysisPageInit.skinTestReport.age)
//          alert(percent)
//          that.drawLine(that.getagesection(res.skinTestReport.age),water,$("#borderbottom1").css("color"),that.getbiaozhunzhi('water'))
//            drawLine(index,percent,bgcolor,standard)  index年龄段 percent百分比 bgcolor颜色 standard标准值
        that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('water'))

        }
        if (type == 2) {
          checkbg[1].style.display = "block";
//          borderbottom[1].display="none";
          this.checktext = "油份";
          this.checkindex = 2;
          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s2_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s3_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s2_3.jpg";
          that.nowPicimg = img2;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('oil'))

        }
        if (type == 3) {
          checkbg[2].style.display = "block";
//          borderbottom[2].display="none";
          this.checktext = "纹理";
          this.checkindex = 3;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s3_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s3_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s3_3.jpg";
          that.nowPicimg = img1;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('grain'))

        }
        if (type == 4) {
          checkbg[3].style.display = "block";
//          borderbottom[3].display="none";
          this.checktext = "老化";
          this.checkindex = 4;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s4_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s4_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s4_3.jpg";
          that.nowPicimg = img2;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('aging'))

        }
        if (type == 5) {
          checkbg[4].style.display = "block";
//          borderbottom[4].display="none";
          this.checktext = "炎症";
          this.checkindex = 5;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s5_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s5_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s5_3.jpg";
          that.nowPicimg = img3;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('inflammation'))

        }
        if (type == 6) {
          checkbg[5].style.display = "block";
//          borderbottom[5].display="none";
          this.checktext = "色素";
          this.checkindex = 6;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s6_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s6_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s6_3.jpg";
          that.nowPicimg = img4;


//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('pigment'))

        }
        if (type == 7) {
          checkbg[6].style.display = "block";
//          borderbottom[6].display="none";
          this.checktext = "肤色";
          this.checkindex = 7;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s7_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s7_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s7_3.jpg";
          that.nowPicimg = img1;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('complexion'))


        }
        if (type == 8) {
          checkbg[7].style.display = "block";
//          borderbottom[7].display="none";
          this.checktext = "毛孔";
          this.checkindex = 8;

          this.haoimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s8_1.jpg",
            this.zhongimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s8_2.jpg",
            this.chaimg = "http://unesmall.b0.upaiyun.com/unes_pro/imgs/s8_3.jpg";
          that.nowPicimg = img5;

//          alert(percent)
          that.drawLine(that.getagesection(that.oneWayAnalysisPageInit.skinTestReport.age),percent,$("#borderbottom"+type).css("color"),that.getbiaozhunzhi('pore'))

        }


//        var arr=[60,60,55,45,42,37,37,37];
//        that.drawLine(type,percent,$("#borderbottom"+type).css("color"),arr)
//        alert(percent);

      },

      //选择时间后改变数据
      checkdatedata: function (reportId) {
        var that = this;
        $.ajax({
          type: "post",
//          url: "http://192.168.10.27:8887/oneWayAnalysisPageInit.json?" + 'reportId=' + reportId,
          url: "http://diy2.unescn.com/oneWayAnalysisPageInit.json?" + 'reportId=' + reportId,
//          url: "http://diy2.unescn.com/oneWayAnalysisPageInit.json?" + 'reportId=' + reportId,
//          url: api.commonapi.oneWayAnalysisPageInit+'?'+ 'reportId=' + reportId,
          dataType: 'json',
//          data:{
//            reportld:that.reportld
//          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
//            alert(res.skinTestReport.ver)
        
            that.oneWayAnalysisPageInit = res;
            that.oneWayAnalysisPageInituser = res.skinTestReport.user;
       
            that.ver=res.skinTestReport.ver;


            var water,oil,grain,aging,inflammation,pigment,complexion,pore;
            water = res.skinTestReport.water.toString().slice(0,4);
            oil = res.skinTestReport.oil.toString().slice(0,4);
            grain = res.skinTestReport.grain.toString().slice(0,4);
            aging = res.skinTestReport.aging.toString().slice(0,4);
            inflammation = res.skinTestReport.inflammation.toString().slice(0,4);
            pigment = res.skinTestReport.pigment.toString().slice(0,4);
            complexion = res.skinTestReport.complexion.toString().slice(0,4);
            pore = res.skinTestReport.pore.toString().slice(0,4);
//            alert(res.skinTestReport.age)
            that.changeBgImg(water,oil,grain,aging,inflammation,pigment,complexion,pore,res.skinTestReport.age);
            setTimeout(function () {
              that.changeBgImg(water,oil,grain,aging,inflammation,pigment,complexion,pore,res.skinTestReport.age);
              that.drawLine(that.getagesection(res.skinTestReport.age),water,$("#borderbottom1").css("color"),that.getbiaozhunzhi('water'))
            },100)

            that.datainit();
          },
          error: function (response) {

          }
        });
      },
      datainit: function () {
    
        var that = this;
        $.ajax({
          type: "post",
//          url: "http://192.168.10.27:8887/oneWayAnalysisPageInit.json?" + 'reportId=' + that.reportId,
          url: "http://diy2.unescn.com/oneWayAnalysisPageInit.json?" + 'reportId=' + that.reportId,
//          url: api.commonapi.oneWayAnalysisPageInit+'?'+ 'reportId=' + that.reportId,
          dataType: 'json',
//          data:{
//            reportld:that.reportld
//          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {

        
            that.oneWayAnalysisPageInit = res;
            that.oneWayAnalysisPageInituser = res.skinTestReport.user;
        
            that.nowPicimg = res.skinTestReport.waterPic.url;

            img1 = res.skinTestReport.waterPic.url;
            img2 = res.skinTestReport.agingPic.url;
            img3 = res.skinTestReport.inflammationPic.url;
            img4 = res.skinTestReport.pigmentPic.url;
            img5 = res.skinTestReport.porePic.url;

//            alert("年龄"+res.skinTestReport.age);
//            alert(that.huanshuan('water',res.skinTestReport.age));
        
            var water,oil,grain,aging,inflammation,pigment,complexion,pore;
            water = res.skinTestReport.water.toString().slice(0,4);
            oil = res.skinTestReport.oil.toString().slice(0,4);
            grain = res.skinTestReport.grain.toString().slice(0,4);
            aging = res.skinTestReport.aging.toString().slice(0,4);
            inflammation = res.skinTestReport.inflammation.toString().slice(0,4);
            pigment = res.skinTestReport.pigment.toString().slice(0,4);
            complexion = res.skinTestReport.complexion.toString().slice(0,4);
            pore = res.skinTestReport.pore.toString().slice(0,4);
      
//            alert(res.skinTestReport.ver)
            that.ver=res.skinTestReport.ver;
//            alert(res.skinTestReport.age)
            setTimeout(function () {
              that.changeBgImg(water,oil,grain,aging,inflammation,pigment,complexion,pore,res.skinTestReport.age);
              that.drawLine(that.getagesection(res.skinTestReport.age),water,$("#borderbottom1").css("color"),that.getbiaozhunzhi('water'))
            },100)




          },
          error: function (response) {

          }
        });


      },
      changeBgImg: function (water, oil, grain, aging, inflammation, pigment, complexion, pore, age) {
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

        //点击 重新绘图  去掉之前的样式
        $('#borderbottom1').removeClass('linePercent_num_good');
        $('#checkbg1').removeClass('linePercent_num_good1');
        $('#borderbottom1').removeClass('linePercent_num_mid');
        $('#checkbg1').removeClass('linePercent_num_mid1');
        $('#borderbottom1').removeClass('linePercent_num_bad');
        $('#checkbg1').removeClass('linePercent_num_bad1');

        $('#borderbottom2').removeClass('linePercent_num_good');
        $('#checkbg2').removeClass('linePercent_num_good1');
        $('#borderbottom2').removeClass('linePercent_num_mid');
        $('#checkbg2').removeClass('linePercent_num_mid1');
        $('#borderbottom2').removeClass('linePercent_num_bad');
        $('#checkbg2').removeClass('linePercent_num_bad1');

        $('#borderbottom3').removeClass('linePercent_num_good');
        $('#checkbg3').removeClass('linePercent_num_good1');
        $('#borderbottom3').removeClass('linePercent_num_mid');
        $('#checkbg3').removeClass('linePercent_num_mid1');
        $('#borderbottom3').removeClass('linePercent_num_bad');
        $('#checkbg3').removeClass('linePercent_num_bad1');

        $('#borderbottom4').removeClass('linePercent_num_good');
        $('#checkbg4').removeClass('linePercent_num_good1');
        $('#borderbottom4').removeClass('linePercent_num_mid');
        $('#checkbg4').removeClass('linePercent_num_mid1');
        $('#borderbottom4').removeClass('linePercent_num_bad');
        $('#checkbg4').removeClass('linePercent_num_bad1');


        $('#borderbottom5').removeClass('linePercent_num_good');
        $('#checkbg5').removeClass('linePercent_num_good1');
        $('#borderbottom5').removeClass('linePercent_num_mid');
        $('#checkbg5').removeClass('linePercent_num_mid1');
        $('#borderbottom5').removeClass('linePercent_num_bad');
        $('#checkbg5').removeClass('linePercent_num_bad1');


        $('#borderbottom6').removeClass('linePercent_num_good');
        $('#checkbg6').removeClass('linePercent_num_good1');
        $('#borderbottom6').removeClass('linePercent_num_mid');
        $('#checkbg6').removeClass('linePercent_num_mid1');
        $('#borderbottom6').removeClass('linePercent_num_bad');
        $('#checkbg6').removeClass('linePercent_num_bad1');


        $('#borderbottom7').removeClass('linePercent_num_good');
        $('#checkbg7').removeClass('linePercent_num_good1');
        $('#borderbottom7').removeClass('linePercent_num_mid');
        $('#checkbg7').removeClass('linePercent_num_mid1');
        $('#borderbottom7').removeClass('linePercent_num_bad');
        $('#checkbg7').removeClass('linePercent_num_bad1');

        $('#borderbottom8').removeClass('linePercent_num_good');
        $('#checkbg8').removeClass('linePercent_num_good1');
        $('#borderbottom8').removeClass('linePercent_num_mid');
        $('#checkbg8').removeClass('linePercent_num_mid1');
        $('#borderbottom8').removeClass('linePercent_num_bad');
        $('#checkbg8').removeClass('linePercent_num_bad1');

   

        var n1 = '', n2 = '', n = '';
        var old = age;

        n1 = 65;
        n2 = standerPreArr[standerTestType('water')][standerAge(age)];
        n = water;
        if (n >= n1) {
          $('#borderbottom1').addClass('linePercent_num_good');
          $('#checkbg1').addClass('linePercent_num_good1');
        } else if (n < n1 && n > n2) {
          $('#borderbottom1').addClass('linePercent_num_mid');
          $('#checkbg1').addClass('linePercent_num_mid1');
        } else if (n <= n2) {
          $('#borderbottom1').addClass('linePercent_num_bad');
          $('#checkbg1').addClass('linePercent_num_bad1');
        }

    

        n1 = standerPreArr[standerTestType('oil')][standerAge(age)] ;
        // n2 = standerPreArr[standerTestType('oil')][standerAge(age)] ;
        n = oil;
        // if (0.5*n1 <= n && n < n1*0.8) {
        //   $('#borderbottom2').addClass('linePercent_num_mid');
        //   $('#checkbg2').addClass('linePercent_num_mid1');
        // } else if (0.8*n1 <= n && n <= n1*1.2) {
        //   $('#borderbottom2').addClass('linePercent_num_good');
        //   $('#checkbg2').addClass('linePercent_num_good1');
        // } else if (1.2*n1 <= n && n <= n1*1.5) {
        //   $('#borderbottom2').addClass('linePercent_num_bad');
        //   $('#checkbg2').addClass('linePercent_num_bad1');
        // }

        if ((0.5*n1 <= n && n < n1*0.8) || (1.2*n1 < n && n <= n1*1.5)) {
          $('#borderbottom2').addClass('linePercent_num_mid');
          $('#checkbg2').addClass('linePercent_num_mid1');
        } else if (0.8*n1 <= n && n <= n1*1.2) {
          $('#borderbottom2').addClass('linePercent_num_good');
          $('#checkbg2').addClass('linePercent_num_good1');
        } else{
          $('#borderbottom2').addClass('linePercent_num_bad');
          $('#checkbg2').addClass('linePercent_num_bad1');
        }

       

        n1 = standerPreArr[standerTestType('grain')][standerAge(age)];
        n = grain;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom3').addClass('linePercent_num_good');
          $('#checkbg3').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom3').addClass('linePercent_num_mid');
          $('#checkbg3').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom3').addClass('linePercent_num_bad');
          $('#checkbg3').addClass('linePercent_num_bad1');
        }

   

        n1 = standerPreArr[standerTestType('aging')][standerAge(age)];
        // n2 = standerPreArr[standerTestType('aging')][standerAge(age)] * 1.2;
        n = aging;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom4').addClass('linePercent_num_good');
          $('#checkbg4').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom4').addClass('linePercent_num_mid');
          $('#checkbg4').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom4').addClass('linePercent_num_bad');
          $('#checkbg4').addClass('linePercent_num_bad1');
        }

    

        n1 = standerPreArr[standerTestType('inflammation')][standerAge(age)];
        // n2 = standerPreArr[standerTestType('inflammation')][standerAge(age)] * 1.2;
        n = inflammation;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom5').addClass('linePercent_num_good');
          $('#checkbg5').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom5').addClass('linePercent_num_mid');
          $('#checkbg5').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom5').addClass('linePercent_num_bad');
          $('#checkbg5').addClass('linePercent_num_bad1');
        }

     

        n1 = standerPreArr[standerTestType('pigment')][standerAge(age)];
        // n2 = standerPreArr[standerTestType('pigment')][standerAge(age)] * 1.2;
        n = pigment;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom6').addClass('linePercent_num_good');
          $('#checkbg6').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom6').addClass('linePercent_num_mid');
          $('#checkbg6').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom6').addClass('linePercent_num_bad');
          $('#checkbg6').addClass('linePercent_num_bad1');
        }

    

        n1 = standerPreArr[standerTestType('complexion')][standerAge(age)];
        // n2 = standerPreArr[standerTestType('complexion')][standerAge(age)] * 1.2;
        n = complexion;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom7').addClass('linePercent_num_good');
          $('#checkbg7').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom7').addClass('linePercent_num_mid');
          $('#checkbg7').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom7').addClass('linePercent_num_bad');
          $('#checkbg7').addClass('linePercent_num_bad1');
        }

    

        n1 = standerPreArr[standerTestType('pore')][standerAge(age)];
        // n2 = standerPreArr[standerTestType('pore')][standerAge(age)] * 1.2;
        n = pore;
        if (0<n && n<= n1*1.2) {
          $('#borderbottom8').addClass('linePercent_num_good');
          $('#checkbg8').addClass('linePercent_num_good1');
        } else if (n1*1.2 < n && n <= n1*2) {
          $('#borderbottom8').addClass('linePercent_num_mid');
          $('#checkbg8').addClass('linePercent_num_mid1');
        } else if (n1*2 < n) {
          $('#borderbottom8').addClass('linePercent_num_bad');
          $('#checkbg8').addClass('linePercent_num_bad1');
        }

  

        var bzAgeArr = [
          standerPreArr[standerTestType('water')][standerAge(age)]+'%',
          standerPreArr[standerTestType('oil')][standerAge(age)]+'%',
          standerPreArr[standerTestType('grain')][standerAge(age)]+'%',
          standerPreArr[standerTestType('aging')][standerAge(age)]+'%',
          standerPreArr[standerTestType('inflammation')][standerAge(age)]+'%',
          standerPreArr[standerTestType('pigment')][standerAge(age)]+'%',
          standerPreArr[standerTestType('complexion')][standerAge(age)]+'%',
          standerPreArr[standerTestType('pore')][standerAge(age)]+'%'
        ];
        for (var i =0;i<bzAgeArr.length;i++) {
          $("#ageNowArr"+i).html(bzAgeArr[i]);
        }
//        alert(bzAgeArr);

      },
      gettestrecord: function (currentPage) {
        var that = this;
//        alert(that.memberId)
        $.ajax({
          type: "post",
//          url: "http://192.168.10.27:8887/getReportTestTimeByMemberAndPage.json?" + 'memberId=' + that.memberId,
          url: "http://diy2.unescn.com/getReportTestTimeByMemberAndPage.json",
          dataType: 'json',
          data: {
            memberId: that.memberId,
            currentPage: currentPage,
            pageSize: 5
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
       

//            that.testrecordcount
            that.testrecordcount = Math.ceil(res.countSkinTestReport / 5);
//            alert('共'+that.testrecordcount+'页')
            that.countSkinTestReport = res;
            var result = [];
            for (var i = 0; i < res.createTimeList.length; i++) {
              var shijian = res.createTimeList[i].testTime;
              var shijian1 = that.datefomat(shijian);
              var id = res.createTimeList[i].reportId;
              result.push({
                date: shijian1,
                id: id
              });
            }
       
            that.testshijian = result;

          },
          error: function (response) {

          }
        });
      },
      logout: function () {
        this.$router.push('/login')
      },
      goHuiyuan: function () {
        this.$router.push('/huiyuan')
      },
      closezhezhao: function () {
        this.zhezhao = !this.zhezhao;
      },
      getbiaozhunzhi: function (type) {
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
        ]

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
        }

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
        }

        return  standerPreArr[standerTestType(type)];
      },
      getagesection:function (age) {

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
        return standerAge(age)
      },
      picInit:function (text,color) {

      },
      drawLine:function(index,percent,bgcolor,standard){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        var option = {
          tooltip: {
            show: true
          },


          xAxis : [
            {
              type: 'category',
              data: ['10','20','30','40','50','60','70','年龄'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: '#939393',
                  fontSize:16,
                  fontWeight: 800
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#939393',
                  width: 4
                }
              },
              splitLine:{show:false}
            }
          ],
          yAxis : [
            {
              type: 'value',
              name: '比例',
              min: 0,
              max: 100,
              interval: 20,
//              fontWeight: 900,
//              width: 4,
              bold:900,
              axisLabel: {
                formatter: '{value} %',
                textStyle: {
                  color: '#939393',
                  fontSize:16,
                  fontWeight: 800
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#939393',
                  width: 4
                }
              },
              splitLine:{show:false}
            }
          ],
          series : [
            {
              itemStyle: {
                normal: {
                  color:'blue'
                }
              },
              "type":"bar",
              "data":[0, 0, 0, 0, 0, 0]

            },
            {
              name:'平均值',
              type:'line',
              data:standard,
              itemStyle : {
                normal : {
                  color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                      '#939393','#939393','#939393','#939393','#939393',
                      '#939393','#939393','#939393'
                    ];
                    return colorList[params.dataIndex]
                  },
                  lineStyle:{
                    color:'#939393',
                    width: 3
                  }
                }
              },
            }
          ],
          grid:{
            x:'54',
            y:'40',
            x2:'30',
            y2:'30'
          }
        };
        option.series[0].data[index]=percent;
        option.series[0].itemStyle.normal.color=bgcolor;
        myChart.setOption(option);

      }

    },
    mounted: function () {
      var that=this;


      setTimeout(function () {
        var checkbg = document.getElementById("checkbg1");
        checkbg.style.display = "inline-block";
        var datalinetext = document.querySelectorAll(".datalinetext");
        datalinetext[0].style.color = "red";
//        $("#datalinetext1").css("color",$("#borderbottom1").css("color"))
        $(".datalinetext1").css("color",$("#borderbottom1").css("color"));
        $(document).click(function () {
          $(".hoverLogout").fadeOut();
        });
        $(".title_rig").click(function (event) {
          event.stopPropagation();
//        $(".hoverLogout").fadeIn();
          $(".hoverLogout").slideDown()
        })

        var documenwidth = document.body.clientWidth;
        if (documenwidth > 1364) {
          $(".title_rig").hover(function (event) {
            $(".hoverLogout").addClass("divshow")
          }, function () {
            $(".hoverLogout").removeClass("divshow")
          })
        }

      }, 300)



    },
    watch: {},
    components: {
      commontop
    }
  }
</script>
<style scoped>
  .buttn_report a,.buttn_report_new a {
    color: #ffffff !important;
    display: inline-block;width: 100%;height: 100%;
  }

  .buttn_report_new a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .baifenbi {
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    padding-left: 18px;
  }

  .xianzhuangimg {
    width: 420px;
    height: 236px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .xianzhuangimg img {
    width: 100%;
    height: 100%;
  }

  .zhezhao {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    opacity: 1;
    z-index: 88888;
  }

  #ageNow > div {
    display: inline-block;
    font-size: 13px;
  }

  #ageNow > div span {
    font-weight: bolder;
  }

  .pagechange {
    padding-left: 25px;
    text-align: left;
    font-size: 11px;
    margin-top: 30px;
  }

  .pagechange span:nth-child(1), .pagechange span:nth-child(2) {
    cursor: pointer;
  }

  .pagechange span:nth-child(2), .pagechange span:nth-child(3) {
    margin-left: 10px;
  }

  .ceshishijian .shijian {
    padding-left: 25px;
    height: 26px;
    line-height: 26px;
    cursor: pointer;
    text-align: left;
    font-size: 14px;
  }

  .ceshishijian h5 {
    margin: 10px 0 !important;
    text-align: left;
    padding-left: 25px !important;
    font-size: 14px;
    font-weight: bolder;
  }
    #canvas{
      position: relative;
    }


  .ceshishijian {
    margin-top: 120px;
  }

  .userinfo2 img {
    display: block;
    width: 140px;
    height: 140px;
  }

  .userinfo2 {
    margin: 16px 0 0 24px;
  }

  .userinfo2 label {
    width: 100%;
    display: inline-block;
    text-align: left;
    font-size: 14px;
    font-weight: bolder;
  }

  .userinfo2 .bianhao {
    margin-top: 4px;
  }

  p, .ceshishijian h5 {
    margin: 0;
    padding: 0;
  }

  .main .left {
    border: 1px solid #dddddd;
    height: 605px;
  }

  .zhuangkuangfenxi1 {
    padding-top: 10px;
    padding-left: 40px;
  }

  .zhuangkuangfenxi2 {
    padding-bottom: 10px;
    padding-left: 40px;
  }

  .skin_box {
    border: 1px solid #dddddd;
    color: #969696;

  }

  .skin_box {
    margin-top: 10px;
  }

  #ageNow {
    margin-top: 20px;
  }

  .fenxibaogao {
    text-align: center;
    padding-left: 200px;
    margin-top: 50px;
  }

  .buttn_report, .buttn_report_new {
    cursor: pointer;
    width: 150px;
    height: 40px;
    background-color: #505050;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    color: white;
    margin-left: 20px;
    float: left;
  }

  .buttn_report_new a {
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
  }

  .zhuangkuangfenxi .skin_box_one {
    height: 155px;
    width: 256px;
    font-size: 14px;
    float: left;
    margin-right: 4px;
  }

  .linePercent_num_good{
    border-bottom: 2px solid #40d406;color: #40d406;
    box-sizing: border-box;
  }
  .linePercent_num_mid{
    border-bottom: 2px solid #ffc000;color: #ffc000;
    box-sizing: border-box;
  }
  .linePercent_num_bad{
    border-bottom: 2px solid #fe0000;color: #fe0000;
    box-sizing: border-box;
  }
  .linePercent_num_good1{
    background-color:#40d406 !important;
  }
  .linePercent_num_mid1{
    background-color: #ffc000 !important;
  }
  .linePercent_num_bad1{
   background-color:#fe0000 !important;
  }

  .zhuangkuangfenxi .skin_box_one img {
    height: 155px;
    width: 256px;
  }

  .borderbottom {
    width: 300px;
    height: 100%;
    background-color: #dcdcdc;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .skin_box .title {
    width: 100%;
    color: #969696;
    font-size: 15px;
    height: 36px;

    border-bottom: 1px solid #dddddd;
    line-height: 36px;
    text-align: left;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .dataline .name {
    width: 8%;
    float: left;
    font-size: 12px !important;
    font-weight: bolder;
  }

  .dataline .databg {
    width: 92%;
    background-color: #fafafa;
    height: 100%;
    float: left;
    position: relative;
  }

  .dataline {
    height: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .dataline, .fenxishuju_details {
    width: 100%;
  }

  #oneWayAnalysisPage .main {
    width: 50%;
    min-width: 1100px;
    margin: 0 auto;
    margin-top: 53px;
  }

  .left {
    width: 20%;
    float: left;
  }

  .right {
    width: 76%;
    float: right;
  }

  #navhuiyuan {
    cursor: pointer;
  }

  .icon_back {
    right: 0px !important;
  }

  .title_rig {
    float: right;
    position: absolute;
    right: 69px;
    color: white;
    font-size: 14px;
    margin-left: 20px;
    top: 0;
    line-height: 41px;
  }

  .title_rig1 {
    float: right;
    position: absolute;
    right: 10px;
    color: white;
    font-size: 14px;
    margin-left: 20px;
    top: 0;
    line-height: 41px;
  }

  .title_rig img, .title_rig1 img {
    vertical-align: middle;
  }

  .topnavul li:nth-child(1) {
    margin-left: 40px;
  }

  .topnavul {
    margin-left: 20px;
  }

  .topnavul li {
    float: left;
    font-size: 15px;
    margin-right: 20px;
    color: #4f5455;
  }

  #commontop {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #051419;
    position: fixed;
    top: 0;
    z-index: 99999999999999;
  }

  #commontop .main {
    width: 50%;
    min-width: 1100px;
    height: 40px;
    line-height: 40px;
    background-color: #051419;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  #commontop .main .logo {
    float: left;
  }

  .databg .checkbg, .databg .borderbottom {
    display: inline-block;
  }

  .databg .checkbg {
    height: 100%;
    /*width: 300px;*/
    background-color: red;
    position: absolute;
    left: 0;
    display: none;
    z-index: 9999;

  }

  /*.laohua .databg .checkbg, .laohua .borderbottom, .sesu .databg .checkbg, .sesu .borderbottom, .fuse .databg .checkbg, .fuse .borderbottom {*/
    /*background-color: #ffc000 !important;*/
  /*}*/

  #ageNow {
    height: 30px;
    line-height: 30px;
    border: 1px solid #dddddd;
    text-align: center;
  }

  .checktextbg {
    color: rgb(64, 212, 6) !important;
  }

  .checkdate {
    background-color: #cccccc;
  }
</style>
