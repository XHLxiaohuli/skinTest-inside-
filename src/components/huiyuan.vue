<template>
  <div id="huiyuanpage">

    <div id="commontop">
      <div class="main">
        <div class="logo clearfloat">
          <img src="http://unesmall.b0.upaiyun.com/unes_pro/01.png"/>
        </div>

        <ul class="topnavul clearfloat">
          <li class="active">会员</li>
          <li>检测</li>
          <li>肌肤分析</li>
          <li>分析报告</li>
        </ul>
        <div class="title_rig">
          <img src="http://unesmall.b0.upaiyun.com/unes_pro/icon_user.png">
          {{ mendian }}
          <div @click="logout" class="hoverLogout">退出</div>
        </div>


      </div>

    </div>


    <div id="huiyuan">

      <div class="main clearfloat">
        <div class="indextop">

          <div style="float: left;width: 60%;    margin: 10px 15px 0 5px;    min-width: 500px;">
            <div class="search">
              <div class="aa">
                <input type="text" v-model="nameTel" placeholder="搜素"/>
                <img src="http://unesmall.b0.upaiyun.com/unes_pro/icon_search.png" @click="getuserlist1(searchpageindex)"/>
              </div>
            </div>
          </div>


          <div class="bianjihuiyuan" style="float: right;text-align: left;display: block;    min-width: 370px; ">
            新增会员

          </div>

        </div>


        <div class="userfrom">
          <ul class="th">
            <li><span style="visibility: hidden">666666</span></li>
            <li>
              姓名
            </li>
            <li>性别</li>
            <li>年龄</li>
            <li>联系电话</li>
            <li>最近测试时间</li>
            <li>编辑</li>
          </ul>
          <ul class="tb" v-for="(item,index) in memberList" :class="checkhangyiindex==index?'hangyiactive':''">
            <li @click="checkuser(index,item.id)" class="hangyi">
              <img class="checkfalse" src="http://unesmall.b0.upaiyun.com/unes_pro/B01.png"/>
              <img class="checktrue" src="http://unesmall.b0.upaiyun.com/unes_pro/B02.png"/>
            </li>
            <li>
              <span v-if="item.name==''">&nbsp;</span>
              <span v-else>{{ item.name }}</span>
              <!--{{item.name }}-->
            </li>
            <li>
              <span v-if="item.sex==''">&nbsp;</span>
              <span v-else>{{item.sex }}</span>

            </li>
            <li>
              {{item.age }}
            </li>
            <li>

              <span v-if="item.tel==''">&nbsp;</span>
              <span v-else> {{ (item.tel).replace((item.tel).substr(3,4),"***") }}</span>

            </li>
            <li class="zuijinceshi" v-if="item.lastTestTime=='1970-01-01'" style="position: relative">
              <!--{{  new Date(item.lastTestTime).toLocaleString().substring(0,14) }}-->
              暂无测试记录
              <span @click="showtanchuang(item.id,testRecordindex)" class="chakanceshi"
                    style="position: absolute;top: 0;left:0;width: 100%;background: rgb(100,100,100);color: white;display: none">查看测试记录</span>
            </li>

            <li class="zuijinceshi" v-if="item.lastTestTime!='1970-01-01'" style="position: relative">
              <!--{{  new Date(item.lastTestTime).toLocaleString().substring(0,14) }}-->
              {{item.lastTestTime }}
              <span @click="showtanchuang(item.id,testRecordindex)" class="chakanceshi"
                    style="position: absolute;top: 0;left:0;width: 100%;background: rgb(100,100,100);color: white;display: none">查看测试记录</span>
            </li>

            <li class="deituser_deleteuser">

              <div
                @click="bianjiuser(item.id,item.name,item.age,item.sex,item.tel,item.nickname,item.headimgurl,item.birthday,item.shop)"
                class="deituser">
                <img src="http://unesmall.b0.upaiyun.com/unes_pro/icon_edit.png"/>
                <span class="userbianji">编辑</span>
              </div>
              <div class="deleteuser" @click="shanchuuser(item.id)">
                <img src="http://unesmall.b0.upaiyun.com/unes_pro/icon_del.png"/>
                <span class="usershacnhu">删除</span>
              </div>

            </li>
          </ul>

          <div id="fenye" v-if="!shifousearch" class="clearfloat">

            <span class="shouye" @click="getuserlist(1)">首页</span>

            <span class="shangyiye" @click="getuppage">上一页</span>
            <div class="fenyedata clearfloat">
              <!--<span v-for="i in pagecount" :class="pageindex==i?'pageindexactive':''"  @click="getuserlist(i)"> {{i}}</span>-->
              <span>当前为第{{ pageindex }}/{{pagecount}}页</span>
            </div>
            <span class="xiayiye" @click="getdownpage">下一页</span>
            <span class="weiye" @click="getuserlist(pagecount)">尾页</span>
            <input type="text" class="shuruyeshu" placeholder="输入页码自动翻页" v-model="shuruyeshu"
                   onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"/>

          </div>
          <div id="fenye" v-if="shifousearch" class="clearfloat">

            <span class="shouye" @click="getuserlist1(1)">首页</span>

            <span class="shangyiye" @click="getuppage2">上一页</span>
            <div class="fenyedata clearfloat">
              <!--<span v-for="i in pagecount" :class="pageindex==i?'pageindexactive':''"  @click="getuserlist(i)"> {{i}}</span>-->
              <span>当前为第{{ searchpageindex }}/{{searchpagecount}}页</span>
            </div>
            <span class="xiayiye" @click="getdownpage2">下一页</span>
            <span class="weiye" @click="getuserlist1(searchpagecount)">尾页</span>


          </div>
        </div>
        <div class="edit">
          <div class="info1 clearfloat">
            <div class="info1name">
              <div class="xingming clearfloat">
                <span class="col1">姓名：</span>
                <input class="col2" type="text" v-model="name" placeholder="会员姓名"/>
              </div>
              <div class="xingbie clearfloat">
                <span class="col1">性别：</span>
                <div class="col2 danxuan">
                  <!--<label><input class="radio" type="radio"/>女</label>-->
                  <span @click="danxuannv">

                    <img v-if="!danxuanwoman" src="http://unesmall.b0.upaiyun.com/unes_pro/icon_radio.png"/>
                    <img v-if="danxuanwoman" src="http://unesmall.b0.upaiyun.com/unes_pro/icon_radio_checked.png"/>
                              女
                  </span>
                  <span @click="danxuannan">

                    <img v-if="!danxuanman" src="http://unesmall.b0.upaiyun.com/unes_pro/icon_radio.png"/>
                    <img v-if="danxuanman" src="http://unesmall.b0.upaiyun.com/unes_pro/icon_radio_checked.png"/>
                    男
                  </span>
                  <!--<label><input class="radio" type="radio"/>男</label>-->
                </div>

              </div>
              <div class="nicheng clearfloat">
                <span class="col1">昵称：</span>
                <input class="col2" v-model="nickname" type="text" placeholder="昵称"/>
              </div>
            </div>


            <div class="info1img">
              <img :src="headimgurl"/>
            </div>
          </div>
          <br/>
          <div class="clearfloat dianhua">
            <span class="col1">电话：</span>
            <input class="col2 col3 " v-model="tel" type="text" placeholder="会员联系手机号码" maxlength="11"/>
          </div>
          <div class="clearfloat shengri">
            <span class="col1">生日：</span>
            <!--<input class="col2 col3 " v-model="birthday" type="text" placeholder="会员出生日期"/>-->
            <div class="flex">
              <div>
                <input v-if="calendar3.display!='1970-01-01'" placeholder="会员出生日期" class="checkdatevalue" type="text"
                       @click="openByDrop($event)" v-model="calendar3.display" readonly>
                <input v-if="calendar3.display=='1970-01-01'" placeholder="会员出生日期" class="checkdatevalue" type="text"
                       @click="openByDrop($event)" readonly>
              </div>
            </div>

            <transition name="fade">
              <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}"
                   v-if="calendar3.show">
                <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value"
                          :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
              </div>
            </transition>

            <transition name="fade">
              <div class="calendar-dialog" v-if="calendar4.show">
                <div class="calendar-dialog-mask" @click="closeByDialog"></div>
                <div class="calendar-dialog-body">
                  <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar"
                            :value="calendar4.value" @select="calendar4.select"></calendar>
                </div>

              </div>
            </transition>


          </div>
          <div class="clearfloat mendian" style="display: none">
            <span class="col1">门店：</span>
            <input class="col2 col3 " type="text" placeholder="门店" :value="mendian" readonly="readonly"/>
          </div>
          <div class="clearfloat" style="margin-top: 5px">
            <span class="col1" style="visibility: hidden">1</span>
            <div style="width: 100px;float: left">
              <button id="rightClick" @click="saveUser">保存</button>
            </div>
            <div class="erweima">

              <img class="qr_pic" :src="showqrcode"/>

              <div class="font12">微信扫一扫</div>
            </div>
          </div>


        </div>

        <br/>

        <div>

        </div>
        <div class="clearfloat" style="margin: 5px 0;height: 40px;display: inline-block;position: relative;width: 100%">
          <div class="testTypeWrap">
            <button class="mashangtest">马上测试</button>
            <div class="testType" id="ceshileixing" style="display: none;">
              <div @click="mashangtest(7)">敏感性肌肤测试</div>
              <div @click="mashangtest(6)">毛孔粗大测试</div>
              <div @click="mashangtest(5)">激素脸测试</div>
              <div @click="mashangtest(4)">衰老性肌肤测试</div>
              <div @click="mashangtest(3)">红血丝肌肤测试</div>
              <div @click="mashangtest(2)">斑点性肌肤测试</div>
              <div @click="mashangtest(1)">痘痘肌测试</div>
              <!--<div @click="mashangtest(0)">普通测试</div>-->
            </div>
          </div>

        </div>


      </div>


      <!--style="text-align: center;position: fixed;bottom: 10px;left: 50%;margin-left: -260px;"-->

      <!--<div class="zhezhao" v-if="zhezhao" @click="closezhezhao">-->

      <div id="tanchuangbox" v-if="tanchuangboxdata">

        <div class="modal-header">
          <div style="font-size: 14px!important;">
            会员:&nbsp;{{popupdata.member.id}}&nbsp;&nbsp;&nbsp; {{popupdata.member.name}}&nbsp;&nbsp;&nbsp;  测试记录
          </div>
          <img class="close" src="../../static/images/close.png" @click="closetanbox"/>
        </div>
        <div class="content">
          <ul class="contenttitle clearfloat">
            <li>测试时间</li>
            <li>测试类型	</li>
            <li>水份</li>
            <li>油份</li>
            <li>纹理</li>
            <li>老化</li>
            <li>炎症</li>
            <li>色素</li>
            <li>肤色</li>
            <li>毛孔	</li>
            <li>配方	</li>
            <li>分析报告	</li>
            <li>编辑	</li>
          </ul>
          <ul class="contenttitle clearfloat" v-for="(item,index) in popupdatatanchuang">
            <li>{{ item.testTime }}</li>
            <!--<li>{{ item.testType }}</li>-->
            <li v-if="item.testType==0">普通测试</li>
            <li v-if="item.testType==null">普通测试</li>
            <li v-if="item.testType==1">痘痘肌测试</li>
            <li v-if="item.testType==2">斑点性肌肤测试</li>
            <li v-if="item.testType==3">红血丝肌肤测试</li>
            <li v-if="item.testType==4">衰老性肌肤测试</li>
            <li v-if="item.testType==5">激素脸测试</li>
            <li v-if="item.testType==6">毛孔粗大测试</li>
            <li v-if="item.testType==7">敏感性肌肤测试</li>

            <li>{{ (item.water).toString().substring(0, 4)}}%</li>
            <li>{{(item.oil).toString().substring(0, 4) }}%</li>
            <li>{{(item.grain).toString().substring(0, 4) }}%</li>
            <li>{{(item.aging).toString().substring(0, 4) }}%</li>
            <li>{{(item.inflammation).toString().substring(0, 4) }}%</li>
            <li>{{(item.pigment).toString().substring(0, 4) }}%</li>
            <li>{{(item.complexion).toString().substring(0, 4) }}%</li>
            <li>{{(item.pore).toString().substring(0, 4) }}%	</li>
            <!--<li v-if="item.scheme!=null">{{ (item.scheme).toString().replace('undefined','') }}	</li>-->
            <li v-if="item.scheme!=null">{{ (((item.scheme).toString().replace('+2,undefined','')).replace('2,','2.0')).replace('1,','1.0') }}	</li>
            <li v-if="item.scheme==null">暂未选配方	</li>
            <li>
              <span class="chakan" @click="lookanalyse(item.id,popupdata.member.id,item.createTime)">查看</span>
            </li>
            <li>
              <img @click="deleteanalyse(item.id,popupdata.member.id)"
                   src="http://unesmall.b0.upaiyun.com/unes_pro/icon_del.png"/>
            </li>

          </ul>
        </div>

        <div id="fenye1" class="clearfloat">

          <span class="shouye" @click="showtanchuang(popupdata.member.id,1)">首页</span>

          <span class="shangyiye" @click="getuppage1">上一页</span>
          <div class="fenyedata clearfloat">
            <span v-for="i in testRecordcount" :class="testRecordindex==i?'pageindexactive':''"
                  @click="showtanchuang(popupdata.member.id,i)"> {{i}}</span>

          </div>
          <span class="xiayiye" @click="getdownpage1">下一页</span>
          <span class="weiye" @click="showtanchuang(popupdata.member.id,testRecordcount)">尾页</span>
        </div>
      </div>
    </div>
    <!--<div class="copyrightwrap" style="width: 100%">-->
      <!--<div id="copyright">-->
        <!--Copyright@2016-2020广州优理氏生物科技有限公司粤ICP备16107136号-1-->
      <!--</div>-->
    <!--</div>-->
    <span class="loading">
         正在登录.....
    </span>

    <div class="zhezhao" v-if="zhezhao" @click="closezhezhao">

    </div>

  </div>

</template>
<script>

  var dingsiqi;
  import calendar from './calendar.vue'
  import commontop from '@/components/commontop'
  //  var api = require('api')
  export default {
    name: 'App',
    data() {
      return {

        calendar1: {
          value: [2018, 2, 16], //默认日期
          // lunar:true, //显示农历
          weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          events: {
            '1918-2-14': '$408', '1918-2-15': '$460', '1918-2-16': '$500',
          },
          select(value) {
        
          }
        },
        calendar2: {
          range: true,
          value: [[2018, 2, 16], [2019, 2, 16]], //默认日期
          lunar: true, //显示农历
          begin: [2017, 2, 16], //可选开始日期
          end: [2019, 2, 16], //可选结束日期
          select(begin, end) {
           
          }
        },
        calendar3: {
          display: "",
          show: false,
          zero: true,
          value: [2018, 2, 16], //默认日期
          lunar: true, //显示农历
          select: (value) => {
            this.calendar3.show = false;
            this.calendar3.value = value;
            this.calendar3.display = value.join("-");
          }
        },
        calendar4: {
          display: "1918/02/16 ~ 2019/02/16",
          show: false,
          range: true,
          zero: true,
          value: [[2018, 2, 16], [2019, 2, 16]], //默认日期
          lunar: true, //显示农历
          select: (begin, end) => {
         
            this.calendar4.show = false;
            this.calendar4.value = [begin, end];
            this.calendar4.display = begin.join("/") + " ~ " + end.join("/");
          }
        },

        msg: 'helloworld',
        checkhangyiindex: -66,
        tanchuangboxdata: false,
        zhezhao: false,
        memberList: [],
        memberListlastTestTime: [],
        popupdata: {},
        popupdatatanchuang: [],
        isActive: false,
        testuserid: -11,
        mendian: '',
        showqrcode: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHq7jwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyUHZOVzV4UWtlaGwxYmVod3hyMWYAAgROVxdbAwSAOgkA',
        danxuanwoman: true,
        danxuanman: false,
        employeeId: '6',
        employeeName: '',
        nameTel: '',

        WxUserInfoResponse: [],

        id: '',
        name: '',
        age: '',
        sex: '女',
        tel: '',
        nickname: '',
        birthday: '',
        headimgurl: 'http://wx.qlogo.cn/mmopen/bSb5dSzPn0KSCdwrknRSzuCaqM1BpkYcRGKXfKWWxELdhicLVVrcAGfPqkCbE02aEVxZCAibWAIyaHvORnLyYJxib1iaia5gAbYnB/0',

        unionid: '',
        openId: '',

        //默认用户数据总条数
        pagecount: 1,
        //默认用户数据第几页 默认显示第一页
        pageindex: 1,
        //默认用户数据每页条数
        pageindexsize: 10,

        //是否点击搜索
        shifousearch: false,

        //搜索用户数据总条数
        searchpagecount:1,
        //搜索用户数据第几页 默认显示第一页
        searchpageindex:1,
        //搜索用户数据每页条数
        searchpagesize:10,

        //查看测试记录总条数
        testRecordcount: 1,
        //查看测试记录默认第一页
        testRecordindex: 1,

        //用户输入的页数
        shuruyeshu: ''


      }
    },
    created: function () {


      this.datainit();
      this.memberPageInit()
      this.getuserlist(this.pageindex);
      this.chushihua();
      this.saomaodenglu();
      var storage = window.localStorage;
      this.id = storage.getItem("testuserid");
      this.employeeName = storage.getItem("employeeName");
//      this.unionid = storage.getItem("unionid");
//      this.openId = storage.getItem("openId");
//      var dangqiandate=new Date().getTime();
////      alert(this.datefomat(dangqiandate))
//      dangqiandate=this.datefomat(dangqiandate);
//      this.calendar3.display=dangqiandate

      var date=new Date();
      var year=date.getFullYear();
      var month=date.getMonth();
      var day=date.getDate();
      this.calendar3.value=[year,month+1,day];


    },
    components: {
      commontop, calendar
    },
    mounted: function () {

      $(document).click(function () {
        $("#ceshileixing").fadeOut();
      });
      $(".mashangtest").click(function (event) {
        event.stopPropagation();
//          $("#ceshileixing").fadeIn();
        $("#ceshileixing").slideDown()
      })


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


    },
    methods: {
      //初始化
      chushihua: function () {
        var that = this;
        var storage = window.localStorage;
        that.employeeName = storage.getItem("employeeName");
        $.ajax({
          type: "post",
          url: "http://diy2.unescn.com/wx/getwxResponse.json",
          dataType: 'json',
          data: {
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
        
            that.showqrcode = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + res.ticket;
          },
          error: function (response) {
          }
        });
      },
      //判断是否是平板 更改每页数据条数
      datainit: function () {
        var that = this;
        var documenwidth = document.body.clientWidth;
        if (documenwidth < 1366) {
          that.pageindexsize = 8;
        }

      },
      testRecordpage: function (pageindex) {

        var that = this;
        $.ajax({
          type: "post",
          url: "http://diy2.unescn.com/wx/getwxResponse.json",
          dataType: 'json',
          data: {
            currentPage: 1,
            pageSize: 10,
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
        

          },
          error: function (response) {

          }
        });


      },
      //默认列表上一页事件
      getuppage: function () {
        var that = this;
        if (that.pageindex > 1) {
          that.pageindex = that.pageindex - 1;
        }
        that.getuserlist(that.pageindex)
      },
      //默认列表下一页事件
      getdownpage: function () {
        var that = this;
        if (that.pageindex < that.pagecount) {
          that.pageindex = that.pageindex + 1;
        }
        that.getuserlist(that.pageindex)
      },
      //测试记录上一页事件
      getuppage1: function () {
//        alert(this.popupdata.member.id)
        var that = this;
        if (that.testRecordindex > 1) {
          that.testRecordindex = that.testRecordindex - 1;
        }
        that.showtanchuang(this.popupdata.member.id, that.testRecordindex)
      },
      //测试记录下一页事件
      getdownpage1: function () {
//        alert(this.popupdata.member.id)
        var that = this;
        if (that.testRecordindex < that.testRecordcount) {
          that.testRecordindex = that.testRecordindex + 1;
        }
//        alert(that.testRecordindex)
        that.showtanchuang(this.popupdata.member.id, that.testRecordindex);

      },

      //搜索结果列表上一页事件
      getuppage2: function () {
        var that = this;
        if (that.searchpageindex > 1) {
          that.searchpageindex = that.searchpageindex - 1;
        }
        that.getuserlist1(that.searchpageindex);
      },
      //搜索结果列表下一页事件
      getdownpage2: function () {
        var that = this;
        if (that.searchpageindex < that.searchpagecount) {
          that.searchpageindex = that.searchpageindex + 1;
        }
        that.getuserlist1(that.searchpageindex)
      },

      //扫描登录事件 获取openid unionid
      saomaodenglu: function () {
//        alert("扫描登录");
        var that = this;
        dingsiqi = setInterval(function () {
          that.adduser()
        }, 5000)

      },
      //删除测试记录里的分析报告
      deleteanalyse: function (reportId, memberId) {

        var that = this;
        var mymessage = confirm("确定删除这个记录吗？");
        if (mymessage == true) {
          $.ajax({
            type: "post",
            //          url:"http://192.168.10.27:8887/memberPageInit.json",
            url: "http://diy2.unescn.com/deleteSkinTestReport.json",
            //          url:api.commonapi.memberPageInit,
            dataType: 'json',
            //          beforeSend: function(xhr) {
            //            xhr.withCredentials = true;
            //          },
            data: {
              reportId: reportId
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
         
              that.showtanchuang(memberId, that.testRecordindex);
            },
            error: function (response) {

            }
          });
        }
        else if (mymessage == false) {

        }

      },
      //查看测试记录里的分析报告
      lookanalyse: function (reportId, memberId, createTime) {
//        alert(reportId)
//        alert(memberId)
//        alert(createTime)
        var storage = window.localStorage;
        storage.setItem("reportId1", reportId);
        storage.setItem("testuserid", memberId);
        storage.setItem("createTime", createTime);
        this.$router.push('/oneWayAnalysisPage')

      },
      //编辑用户信息
      bianjiuser: function (id, name, age, sex, tel, nickname, headimgurl, birthday, shop) {
        $(".bianjihuiyuan").text("编辑会员");

        var that = this;
//          alert(sex)
//          alert(nickname);
//          alert(birthday)
//          alert(shop)
        if (sex == "男") {
          that.danxuannan();
        } else if (sex == "女") {
          that.danxuannv();
        }
        that.id = id;
        that.name = name;
        that.age = age;
        that.sex = sex;
        that.tel = tel;
        that.nickname = nickname;
        that.headimgurl = headimgurl;
        that.calendar3.display = birthday;
        that.shop = shop;


      },
      //删除用户
      shanchuuser: function (id) {
//          alert(id);
        var that = this;
        var mymessage = confirm("确定删除这个会员吗？");
        if (mymessage == true) {


          $.ajax({
            type: "post",
//          url:"http://192.168.10.27:8887/memberPageInit.json",
            url: "http://diy2.unescn.com/deleteMember.json",
//          url:api.commonapi.memberPageInit,
            dataType: 'json',
//          beforeSend: function(xhr) {
//            xhr.withCredentials = true;
//          },
            data: {
              memberId: id,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
          
              if (res.Code == '1') {
                that.getuserlist(that.pageindex);
              }
            },
            error: function (response) {

            }
          });


        }
        else if (mymessage == false) {

        }


      },
      //转换时间戳
      datefomat: function (date) {
//        alert(date)

//        var xiaoshi=date.getHours()<10?'0'+(date.getHours()):date.getHours();
//        var fenzhong=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
        if (date == ""||date==null||date==undefined) {
//          alert("32321")
          return "暂无测试记录";
        } else {
          var date = new Date(date);
          var nian = date.getFullYear();
          var yue = date.getMonth() + 1;
          yue = yue < 10 ? '0' + yue : yue;
          var ri = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();


          return nian + '-' + yue + '-' + ri;
        }


      },
      openByDrop(e) {
        this.calendar3.show = true;
        this.calendar3.left = e.target.offsetLeft + 19;
        this.calendar3.top = e.target.offsetTop + 70;

        e.stopPropagation();
        window.setTimeout(() => {
          document.addEventListener("click", (e) => {
            this.calendar3.show = false;
            document.removeEventListener("click", () => {
            }, false);
          }, false);
        }, 1000)
      },
      openByDialog() {
        this.calendar4.show = true;
      },
      closeByDialog() {
        this.calendar4.show = false;
      },
      //退出登录
      logout: function () {
        this.$router.push('/login')
      },
      //编辑会员里的选中按钮
      danxuannv: function () {
        this.danxuanwoman = true;
        this.danxuanman = false;
        this.sex = '女';
      },
      //编辑会员里的选中按钮
      danxuannan: function () {
        this.danxuanwoman = false;
        this.danxuanman = true;
        this.sex = '男';
      },
      //用户列表里的选中状态
      checkuser: function (index, id) {
        var storage = window.localStorage;
        storage.setItem("testuserid", id)
//          alert(this.testid )

        this.testuserid = id;

//        alert(this.testuserid)

        this.$nextTick(function () {
//          $(".userfrom .tb .hangyi .checktrue").hide()
//           document.querySelectorAll(".checktrue")
          var b = document.querySelectorAll(".checktrue");
          for (var i = 0; i < b.length; i++) {
            b[i].style.display = "none"
          }
          var d = document.querySelectorAll(".checkfalse");
          for (var i = 0; i < d.length; i++) {
            d[i].style.display = "inline-block"
          }

          var c = document.querySelectorAll(".checkfalse")[index];
          c.style.display = "none";


          var a = document.querySelectorAll(".checktrue")[index];
          a.style.display = "inline-block";

          this.checkhangyiindex = index;


        })

      },
      mashangtest: function (testType) {
        if (this.testuserid < 0) {
          alert("您还未选择！")
        } else {
          var storage = window.localStorage;
          storage.setItem("testType", testType);
          this.$router.push('/jiance')
        }

      },
      getuserlist: function (pageindex) {
        this.pageindex = pageindex;

     

        var that = this;
        var storage = window.localStorage;
        that.employeeName = storage.getItem("employeeName");
//        alert(that.employeeName)
        $.ajax({
          type: "post",
//          url:"http://192.168.10.27:8887/memberPageInit.json",
          url: "http://diy2.unescn.com/memberPageInit.json",
//          url:api.commonapi.memberPageInit,
          dataType: 'json',
//          beforeSend: function(xhr) {
//            xhr.withCredentials = true;
//          },
          data: {
            currentPage: pageindex,
            pageSize: that.pageindexsize,
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
         


            that.pagecount = Math.ceil(res.countMember / that.pageindexsize);
//            alert(that.pagecount)
//            that.memberList=res.memberList;
            that.mendian = res.shop;
            var result = [];
            for (var i = 0; i < res.memberList.length; i++) {
              var lastTestTime = res.memberList[i].lastTestTime;
              lastTestTime = that.datefomat(lastTestTime);
              var birthday = res.memberList[i].birthday;
              birthday = that.datefomat(birthday);
              result.push({
                name: res.memberList[i].name,
                id: res.memberList[i].id,
                lastTestTime: lastTestTime,
                sex: res.memberList[i].sex,
                age: res.memberList[i].age,
                tel: res.memberList[i].tel,
                nickname: res.memberList[i].nickname,
                shop: res.memberList[i].shop.name,
                birthday: birthday,
                openId: res.memberList[i].openId,
                headimgurl: res.memberList[i].headimgurl

              })
            }
            that.memberList = result;
            var storage = window.localStorage;
            storage.setItem("mendian", res.shop);
//            var result=[];
//            for(var i=0;i<res.memberList.length;i++){
//              var lastTestTime=res.memberList[i].lastTestTime;
//              lastTestTime=that.datefomat(lastTestTime)
//              result.push( lastTestTime)
//            }
//            that.memberListlastTestTime=result;

          },
          error: function (response) {

          }
        });


      },
      goclick: function () {
        var that = this;


        var storage = window.localStorage;
        that.employeeName = storage.getItem("employeeName");

        $.ajax({
          type: "post",
          url: "http://diy2.unescn.com/selectMemberListByNameOrTelAndPage.json",
//          url:"http://diy2.unescn.com/selectMemberListByNameOrTelAndPage.json",
//          url:api.commonapi.memberPageInit,
          dataType: 'json',
//          beforeSend: function(xhr) {
//            xhr.withCredentials = true;
//          },
          data: {
            currentPage: 1,
            pageSize: that.pageindexsize,
            nameTel: that.nameTel,
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
        
//            alert("搜索成功");

            if (that.nameTel != '') {
              that.shifousearch = true;
              var result = [];
              for (var i = 0; i < res.memberList.length; i++) {
                var lastTestTime = res.memberList[i].lastTestTime;
                if (lastTestTime == "null") {
                  lastTestTime = "暂无测试记录"
                } else {
                  lastTestTime = that.datefomat(lastTestTime);
                }

                var birthday = res.memberList[i].birthday;
                birthday = that.datefomat(birthday);
                result.push({
                  name: res.memberList[i].name,
                  id: res.memberList[i].id,
                  lastTestTime: lastTestTime,
                  sex: res.memberList[i].sex,
                  age: res.memberList[i].age,
                  tel: res.memberList[i].tel,
                  nickname: res.memberList[i].nickname,
                  shop: res.memberList[i].shop.name,
                  birthday: birthday,
                  openId: res.memberList[i].openId

                })
              }
              that.memberList = result;
            } else {
              that.getuserlist(1);
            }


          },
          error: function (response) {

          }
        });

      },
      //搜索事件 nameTel搜索字段 searchpageindex搜索结果页数
      getuserlist1: function (searchpageindex) {

//        alert(nameTel)
//        alert(searchpageindex)
        this.searchpageindex = searchpageindex;

        var that = this;
        var storage = window.localStorage;
        that.employeeName = storage.getItem("employeeName");

        $.ajax({
          type: "post",

          url: "http://diy2.unescn.com/selectMemberListByNameOrTelAndPage.json",
          dataType: 'json',
          data: {
            //搜索字段
            nameTel: that.nameTel,
            //当前页面索引
            currentPage: searchpageindex,
            //每页数据条数
            pageSize: that.searchpagesize,
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
     
            if(res.memberList.length==0){
              $(".loading").text("没有此用户")
              $(".loading").show();
              setTimeout(function () {
                $(".loading").hide();
              }, 3000)
            }else {
              that.shifousearch=true;
              that.searchpagecount = Math.ceil(res.countMember / that.searchpagesize);
              var result = [];
              for (var i = 0; i < res.memberList.length; i++) {
                var lastTestTime = res.memberList[i].lastTestTime;
                lastTestTime = that.datefomat(lastTestTime);
                var birthday = res.memberList[i].birthday;
                birthday = that.datefomat(birthday);
                result.push({
                  //用户列表所需的信息
                  //名字
                  name: res.memberList[i].name,
                  //会员id
                  id: res.memberList[i].id,
                  //最近测试时间
                  lastTestTime: lastTestTime,
                  //性别
                  sex: res.memberList[i].sex,
                  //年龄
                  age: res.memberList[i].age,
                  //手机号
                  tel: res.memberList[i].tel,
                  //昵称
                  nickname: res.memberList[i].nickname,
                  //门店
                  shop: res.memberList[i].shop.name,
                  //生日
                  birthday: birthday,
                  //openId
                  openId: res.memberList[i].openId,
                  //头像图片
                  headimgurl: res.memberList[i].headimgurl

                })
              }
              that.memberList = result;


            }


          },
          error: function (response) {

          }
        });


      },
      showtanchuang: function (memberid, testRecordindex) {
//        alert(id)
//        alert(testRecordindex)
        this.testRecordindex = testRecordindex;
        this.zhezhao = true;
        this.tanchuangboxdata = true;
     

        var that = this;
        $.ajax({
          type: "post",
//          url:"http://192.168.10.27:8887/getSkinTestReportListByMemberId.json",
          url: "http://diy2.unescn.com/getSkinTestReportListByMemberId.json",
//          url:api.commonapi.getSkinTestReportListByMemberId,
          dataType: 'json',
//          beforeSend: function(xhr) {
//            xhr.withCredentials = true;
//          },
          data: {
            memberId: memberid,
            currentPage: testRecordindex,
            pageSize: 5

          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {

        

//            pageSize:5
            that.testRecordcount = Math.ceil(res.countskinTestReport / 5);
//            alert( that.testRecordcount)
            that.popupdata = res;

            var result = [];

            for (var i = 0; i < res.skinTestReportList.length; i++) {
//              var lastTestTime=res.skinTestReportList[i].lastTestTime;
//              lastTestTime=that.datefomat(lastTestTime);
              var testTime = res.skinTestReportList[i].testTime;
              testTime = that.datefomat(testTime);
              var scheme=res.skinTestReportList[i].scheme;
              if(scheme==null){
                scheme=null;
              }else {
                scheme=( ( scheme.replace("0,", "1.0")).replace(";", "+"));
              }

              result.push({
                name: res.skinTestReportList[i].name,
                id: res.skinTestReportList[i].id,
                testTime: testTime,
                createTime: res.skinTestReportList[i].createTime,
                water: res.skinTestReportList[i].water,
                oil: res.skinTestReportList[i].oil,
                grain: res.skinTestReportList[i].grain,
                aging: res.skinTestReportList[i].aging,
                inflammation: res.skinTestReportList[i].inflammation,
                pigment: res.skinTestReportList[i].pigment,
                complexion: res.skinTestReportList[i].complexion,
                pore: res.skinTestReportList[i].pore,

                headimgurl: res.skinTestReportList[i].headimgurl,
                testType: res.skinTestReportList[i].testType,
                scheme:scheme,


              })
            }
            that.popupdatatanchuang = result;


          },
          error: function (response) {

          }
        });


      },
      closezhezhao: function () {
        this.zhezhao = false
        this.tanchuangboxdata = false;
      },
      closetanbox: function () {
        this.zhezhao = false
        this.tanchuangboxdata = false;
      },
      memberPageInit: function () {

      },
      adduser: function () {

        var storage = window.localStorage;
        this.employeeName = storage.getItem("employeeName");

        var that = this;
        jQuery.support.cors = true
        $.ajax({
          type: "post",
//          url:"http://192.168.10.27:8887/wxScanGetUser.json",
          url: "http://diy2.unescn.com/wxScanGetUser.json",
//          url:api.commonapi.wxScanGetUser,
          dataType: 'json',
         beforeSend: function(xhr) {
           xhr.withCredentials = true;
         },
          data: {
//            employeeId:that.employeeId,
            employeeName: that.employeeName
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded',
          },
          success: function (res) {

            if (res.Code == "1") {

              that.id = "";

              var storage = window.localStorage;
              storage.setItem("unionid", res.WxUserInfoResponse.unionid);
              storage.setItem("openid", res.WxUserInfoResponse.openid);


              that.WxUserInfoResponse = res.WxUserInfoResponse;
              if (res.WxUserInfoResponse.sex == 1) {
                that.danxuannan()
              } else {
                that.danxuannv()
              }

              that.unionid = res.WxUserInfoResponse.unionid;
              that.openId = res.WxUserInfoResponse.openid;

              that.headimgurl = res.WxUserInfoResponse.headimgurl;
              that.nickname = res.WxUserInfoResponse.nickname;


            }

          },
          error: function (response) {

          }
        })


      },
      saveUser: function () {

        var storage = window.localStorage;
        this.employeeName = storage.getItem("employeeName");
//        this.unionid = storage.getItem("unionid");
//        this.openId = storage.getItem("openid");


        var huoqushijiandata = document.querySelector(".checkdatevalue");
        huoqushijiandata = huoqushijiandata.value;
        this.birthday = huoqushijiandata;
        this.age = this.jisuanage(huoqushijiandata);
//        alert("323213")
//        alert(huoqushijiandata);
        var date = new Date(huoqushijiandata);
//        alert(date.getTime())
        var shijianchuo = date.getTime();
//        this.birthday=shijianchuo;
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

        if (this.name == '' || this.tel == '' || this.nickname == '' || this.birthday == '' || this.headimgurl == '') {
          $(".loading").text("请输入完整信息")
          $(".loading").show();
          setTimeout(function () {
            $(".loading").hide();
          }, 3000)

        } else if (!myreg.test(this.tel)) {
          $(".loading").text("请输入11位有效手机号码")
          $(".loading").show();
          setTimeout(function () {
            $(".loading").hide();
          }, 3000)

//        }
//        else if(this.unionid==''||this.openId==''){
//          $(".loading").text("请用微信扫描快速登录")
//          $(".loading").show();
//          setTimeout(function () {
//            $(".loading").hide();
//          },3000)

        } else {

          var that = this;
          jQuery.support.cors = true
          $.ajax({
            type: "post",
//            url:"http://192.168.10.27:8887/saveMember.json",
            url: "http://diy2.unescn.com/saveMember.json",
//            url:api.commonapi.saveMember,
            dataType: 'json',
//          beforeSend: function(xhr) {
//            xhr.withCredentials = true;
//          },
            data: {
              id: that.id,
              name: that.name,
              age: that.age,
              tel: that.tel,
              sex: that.sex,
              nickname: that.nickname,
              birthday: that.birthday,
              headimgurl: that.headimgurl,
              openId: that.openId,
              unionId: that.unionid,
              employeeName: that.employeeName

//              shop:that.mendian

            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              if (res.Code == 1) {

                that.name = '';
                that.tel = '';
                that.nickname = '';
                that.birthday = '';
                that.headimgurl = 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLAR20N8XoJUJRtpgYgnFNNtSSeMR9Naz3GUOy0otjKl5yc5gcNLhyH5zzFx6L3zBfpQRDiaVeJ2Kj3YjUTyP2OQibb5jFvJV2eh4/0';
                that.name = '';
                that.openId = '';
                that.unionId = '';

                that.calendar3.display='';

                var date=new Date();
                var year=date.getFullYear();
                var month=date.getMonth();
                var day=date.getDate();

                that.calendar3.value=[year,month+1,day];

                that.danxuannv();

                $(".bianjihuiyuan").text("新增会员");
                $(".loading").text("保存成功")
                $(".loading").show();
                setTimeout(function () {
                  $(".loading").fadeOut();
                }, 1000)

                that.getuserlist(that.pageindex);

              } else {
                $(".loading").text("保存失败")
                $(".loading").show();
                setTimeout(function () {
                  $(".loading").fadeOut();
                }, 1000)
              }
            },
            error: function (response) {

            }
          })


        }


      },
      jisuanage: function (str) {
        var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4]);
        if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
          var Y = new Date().getFullYear();
          return (Y - r[1]);
        }
      },
      getPath: function () {
       
      }
    },
    destroyed: function () {
  
      clearInterval(dingsiqi);
    },
    watch: {
      shuruyeshu(val, oldVal) {
        var that = this;
    

        var reg = /^[1-9]+[0-9]*]*$/;
        if (val == 0) {
          that.getuserlist(1);
        }
        if (reg.test(val)) {

          that.getuserlist(val);
        }

        if (val > that.pagecount) {
          alert("输入的页数不存在");
          that.getuserlist(1);
          that.shuruyeshu = '';
        }

      }
    }


  }
</script>
<style scoped>
  .shuruyeshu {
    height: 22px;
    width: 120px;
    vertical-align: middle;
    vertical-align: baseline;
    border: 1px solid #cccccc;
    outline: none;
    text-indent: 5px;
  }

  .shuruyeshu::-webkit-input-placeholder {
    font-size: 11px;
  }

  .pageindexactive {
    background-color: #cccccc !important;
  }

  .deituser_deleteuser .deituser, .deituser_deleteuser .deleteuser {
    display: inline-block;
    width: 40px;
    position: relative;
  }
  .deituser_deleteuser img, .deituser_deleteuser img{
    vertical-align: middle;
  }
  .deituser span, .deleteuser span {
    display: none;
    width: 100%;
    background: rgb(100, 100, 100);
    cursor: pointer;
    font-size: 13px;
    color: #FFFFFF;
    opacity: 1;
  }

  .deituser:hover img {
    display: none;
  }

  .deituser:hover span {
    display: inline-block;
  }

  .deleteuser:hover img {
    display: none;
  }

  .deleteuser:hover span {
    display: inline-block;
  }

  /*.deituser :hover span{*/
  /*display: inline-block;*/
  /*}*/
  /*.deleteuser :hover span{*/
  /*display: inline-block;*/
  /*}*/
  /*.deituser :hover img{*/
  /*display: none;*/
  /*}*/
  /*.deleteuser :hover img{*/
  /*display: none;*/
  /*}*/

  .checkdatevalue {
    margin-top: 0 !important;
  }

  #fenye .fenyedata > span {
    display: inline-block;
    padding: 3px 8px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    float: left;
    margin-left: 3px;
  }

  #fenye .shouye, #fenye .shangyiye, #fenye .xiayiye, #fenye .weiye {
    display: inline-block;
    padding: 3px 3px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
  }

  #fenye {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  #fenye > span, #fenye > div {
    float: left;
  }

  #fenye1 .fenyedata > span {
    display: inline-block;
    padding: 3px 8px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    float: left;
    margin-left: 3px;
  }

  #fenye1 .shouye, #fenye1 .shangyiye, #fenye1 .xiayiye, #fenye1 .weiye {
    display: inline-block;
    padding: 3px 3px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
  }

  #fenye1 {
    position: absolute;
    bottom: 55px;
    right: 20px;
  }

  #fenye1 > span, #fenye1 > div {
    float: left;
  }

  .divshow {
    display: block !important;
  }

  .checktrue {
    display: none;
  }

  .testTypeWrap:hover .testType {
    display: inline-block !important;
  }

  .testTypeWrap {
    display: inline-block;
    float: left;
    z-index: 777777777;
  }

  .testType div {
    width: 140px;
    height: 35px;
    line-height: 35px;
    background-color: #f1f1f1;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 2px;
  }

  .testType div:hover {
    background-color: #505050;
    color: white;
  }

  .testType {
    width: 140px;
    height: 295px;
    text-align: center;
    position: absolute;
    bottom: -15px;
    left: 30px;
    z-index: 66666;
  }

  .zhezhao {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.65);
    opacity: 0.4;
    z-index: 88888;
  }

  .font12 {
    font-size: 12px;
    font-weight: bolder;
  }

  .erweima {
    margin-left: 55px;
    width: 210px;
    height: 210px;

  }

  .erweima img {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-left: 24px;
  }

  .erweima .font12 {
    margin-left: 60px;
    width: 150px;
    margin-top: -10px;
  }

  .danxuan {
    text-align: left;
  }

  .danxuan span {
    display: inline-block;
    float: left;
  }

  .radio {
    width: 20px;
    height: 20px;
  }

  .aa {
    width: 180px;
    background-color: #dcdcdc;
    border-radius: 20px;
  }

  .aa input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 120px;
    height: 26px;
    float: left;
    margin-left: 15px;
  }

  .zuijinceshi:hover .chakanceshi {
    display: block !important;
    cursor: pointer;
  }
  .chakanceshi{
    font-size: 13px;
  }
  .mashangtest {
    height: 35px;
    width: 140px;
    background-color: #505050;
    line-height: 35px;
    text-align: center;
    color: #f1f1f1;
    border: none;
    outline: none;
    border-radius: 5px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
    z-index: 777777777;
  }

  .chakan {
    width: 83%;
    border: 1px solid #dddddd;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
  }

  .contenttitle:nth-child(1) {
    background-color: #dcdcdc;
    margin-top: 5px;
  }

  .contenttitle li {
    font-size: 14px !important;
    font-weight: normal !important;
  }

  .contenttitle:nth-child(1) li {
    font-size: 13px !important;
  }

  .contenttitle li:nth-child(1) {
    width: 8%;
  }

  .contenttitle li:nth-child(2) {
    width: 8%;
  }

  .contenttitle li:nth-child(11) {
    width: 17%;

  }

  .contenttitle li:nth-child(12) {
    width: 5%;
  }

  .contenttitle li:nth-child(13) {
    width: 4%;
  }

  .contenttitle li:nth-child(13) img {
    cursor: pointer;
  }

  .contenttitle li {
    float: left;
    width: 4%;
    padding: 8px;
    font-size: 12px;
    text-align: center;
    font-weight: bolder;
  }

  #tanchuangbox .content {
    min-height: 400px;
    background-color: #f0f0f0;
    padding: 5px 5px 0 5px;
  }

  #tanchuangbox .close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 16px;
    cursor: pointer;

  }

  .modal-header {
    color: #ffffff;
    text-align: left;
    min-height: 16.43px;
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }

  #tanchuangbox {
    width: 61%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999999;
    height: 500px;
  }

  #rightClick {
    height: 35px;
    width: 100px;
    background-color: #787677;
    line-height: 35px;
    text-align: center;
    color: #f1f1f1;
    border: none;
    outline: none;
    border-radius: 5px;
    float: left;
    margin-top: 9px;
    cursor: pointer;
  }

  .qr_pic {
    height: 222px;
    width: 222px;

  }

  .xingming input, .nicheng input {
    width: 100px;
  }

  .xingming, .xingbie, .nicheng {
    padding: 10px 0;
  }

  .col1 {
    width: 60px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    display: inline-block;
    float: left;
    font-weight: bolder;
    font-size: 12px;
  }

  .col2 {
    float: left;
    width: 100px;
  }

  .mendian input, .mendian .col1 {
    margin-top: 10px;
  }

  .shengri {
    position: relative;
    padding-top:15px;
  }

  .edit .info1img {
    width: 39%;
    float: right;
  }

  .info1name .col2 {
    width: 144px;
    height: 28px;
    border-radius: 5px;
    outline: none;
    border: none;
    border: 1px solid #e8e8e8;
    text-indent: 10px;
  }

  .info1name .col2::-webkit-input-placeholder, .col3::-webkit-input-placeholder, .checkdatevalue::-webkit-input-placeholder {
    font-size: 12px;
    color: #cccccc;

  }

  .col3 {
    border: 1px solid #e8e8e8;
    text-indent: 10px;
    border-radius: 5px;
    height: 28px;
    width: 70% !important;

    outline: none;
  }

  .info1name .danxuan.col2 {
    border: none;
    line-height: 25px;
    font-size: 12px;
    font-weight: bolder;
  }

  .info1name .danxuan.col2 span img {
    vertical-align: middle;
  }

  .info1name .col2, .col3 {
    width: 150px;
  }

  .edit .info1img img {
    width: 100%;
  }

  .edit .info1name {
    width: 60%;
    float: left;
  }

  .edit .info1 {
    width: 100%;
    height: 160px;
  }

  .userfrom .th {
    border-bottom: 2px solid #ddd;
    height: 35px;
    line-height: 35px;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  .userfrom .tb {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  .userfrom .tb {
    border-bottom: 1px solid #ddd;
    height: 35px;
    line-height: 35px;
  }

  .userfrom .th li {
    float: left;
    font-size: 12px;
    font-weight: bolder;
  }

  .userfrom .tb li {
    float: left;
    font-size: 15px;
  }

  .userfrom .tb li img {
    cursor: pointer;
  }

  .userfrom .th li:nth-child(1), .userfrom .tb li:nth-child(1) {
    width: 8%;
  }

  .userfrom .th li:nth-child(2), .userfrom .tb li:nth-child(2) {
    width: 20%;
  }

  .userfrom .th li:nth-child(3), .userfrom .tb li:nth-child(3) {
    width: 8%;
  }

  .userfrom .th li:nth-child(4), .userfrom .tb li:nth-child(4) {
    width: 8%;
  }

  .userfrom .th li:nth-child(5), .userfrom .tb li:nth-child(5) {
    width: 20%;
  }

  .userfrom .th li:nth-child(6), .userfrom .tb li:nth-child(6) {
    width: 20%;
  }

  .userfrom .th li:nth-child(7), .userfrom .tb li:nth-child(7) {
    width: 15%;
  }

  .indextop {
    width: 100%;
    height: 50px;

  }

  .search .aa {
    float: left;
    position: relative;
    height: 30px;
  }

  .search .aa img {
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .userfrom {
    float: left;
    width: 60%;
    min-width: 700px;
    height: 76vh;
    min-height: 400px;
    border: 1px solid #ADADAD;
    margin: 10px 15px 0 5px;
    position: relative;
    box-sizing: border-box;
  }

  .edit {
    float: right;
    min-width: 35%;
    min-width: 370px;
    position: relative;
    height: 76vh;
    min-height: 400px;
    border: 1px solid #ADADAD;
    margin: 10px 5px 0 0px;
    padding-top: 7px;
    box-sizing: border-box;
  }

  /*顶部样式*/
  .icon_back {
    right: -60px !important;
  }

  /*.title_rig:hover .hoverLogout{*/
  /*display: block !important;*/
  /*}*/

  .title_rig {
    float: right;
    position: absolute;
    right: 10px;
    color: white;
    font-size: 14px;
    margin-left: 20px;
    top: 0;
    line-height: 41px;
  }

  .title_rig img {
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
    z-index: 3;
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
    position: relative;
  }

  /*demo*/
  .flex {
    width: 70%;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    /*margin-top: 15px;*/
    border-radius: 5px;
    display: inline-block;
    float:left;
    /*display: -webkit-box;
    -webkit-box-pack: start;
    -webkit-box-align: start;

    display: -webkit-flex;
    -webkit-justify-content: space-between;*/
    /*-webkit-align-items: top;*/

    /*display: flex;
    justify-content: space-between;*/
    /*align-items: top;*/
    /*flex-flow:row*/
    /*width:;p*/
  }

  .flex > div {
    height: 32px;
    line-height: 32px;
    width: 200px;
    min-width: 200px;

    border-radius: 2px;
    position: relative;

    padding: 0 !important;
    border: none !important;
    margin: 0 !important;
  }

  .flex > div > span {
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 2px 10px;
    font-size: 10px;
    border-radius: 0 0 2px 0;
    background: #ea6151;
    color: #fff;
  }

  .flex > div > input {
    height: 32px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 2px;
    border: none;
    padding: 5px;
    font-size: 14px;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwpAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGlmb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUuZW90PyNpZWZpeCIpIGZvcm1hdCgiZW1iZWRkZWQtb3BlbnR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUudHRmIikgZm9ybWF0KCJ0cnVldHlwZSIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnN2ZyNpZm9udCIpIGZvcm1hdCgic3ZnIik7IH0KCl1dPjwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJ0cmFuc2Zvcm0tZ3JvdXAiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUsIDAuMDE1NjI1KSI+PHBhdGggZD0iTTcxMS4zMDYyIDI5MC42OTcyYzI0LjI4MjEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTU0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMjYgMC00My45ODggMTkuNzI4NC00My45ODggNDQuMDUzNXYyMDAuMTA0OTZDNjY3LjMxODMgMjcwLjk5MDMgNjg3LjAwMzYgMjkwLjY5NzIgNzExLjMwNjIgMjkwLjY5NzJ6TTYyMy40ODA4IDExMy40MjAzSDQwMC43NjQ5Mjh2NjYuNTEzOTJoMjIyLjcxNTkwNDAwMDAwMDAyVjExMy40MjAyODh6TTg4NC4wNTMgMTEzLjQyMDNoLTgyLjc3NDAxNnY2Ni4xNDUyOGg4NS45NDAyMjRjMjUuMjc4NSAwIDQ2LjYxMTUgMjEuMzc2IDQ2LjYxMTUgNDYuNjc3djE1My45Mjc2OEg5MC40Mzg2NTYwMDAwMDAwMXYtMTUzLjkyNzY4YzAtMjUuMyAyMS4zMzMtNDYuNjc3IDQ2LjYxMTUtNDYuNjc3aDg2LjUwMzQyNFYxMTMuNDIwMjg4aC04Mi42NDI5NDRjLTY0LjA4NiAwLTExNi41MDc2IDUyLjUwODctMTE2LjUwNzYgMTE2LjcwMzJ2Njc2LjgwMTUzNTk5OTk5OTljMCA2NC4xNzQxIDUwLjQ5MTQgMTE2LjY4MDcgMTE0LjU3NzQgMTE2LjY4MDdIODg0LjA1Mjk5MmM2NC4wNjI1IDAgMTE2LjUwNjYtNTIuNTA2NiAxMTYuNTA2Ni0xMTYuNjgwN1YyMzAuMTIzNTE5OTk5OTk5OThDMTAwMC41NTk2IDE2NS45MjkgOTQ4LjExNDQgMTEzLjQyMDMgODg0LjA1MyAxMTMuNDIwM3pNOTMzLjgyOTYgOTEwLjM1MTRjMCAyNS4zLTIxLjMzMyA0Ni42NzYtNDYuNjExNSA0Ni42NzZIMTM3LjA1MDExMTk5OTk5OTk4Yy0yNS4yNzg1IDAtNDYuNjExNS0yMS4zNzYtNDYuNjExNS00Ni42NzZWNDQ2LjQ0NTU2OEg5MzMuODI5NjMyVjkxMC4zNTEzNnpNMjY3LjEwODQgNjQ2LjE4MTljMzYuODc3MyAwIDY2Ljc1MjUtMjkuOTM5NyA2Ni43NTI1LTY2Ljg4MTUgMC0zNi45MjI0LTI5Ljg3NTItNjYuODYxMS02Ni43NTI1LTY2Ljg2MTEtMzYuODU0OCAwLTY2Ljc1MjUgMjkuOTM5Ny02Ni43NTI1IDY2Ljg2MTFDMjAwLjM1NTggNjE2LjI0MjIgMjMwLjI1MjUgNjQ2LjE4MTkgMjY3LjEwODQgNjQ2LjE4MTl6TTUxMS41NDg0IDY0Ni4xODE5YzM2Ljg1NTggMCA2Ni43NTI1LTI5LjkzOTcgNjYuNzUyNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTU3LTY2Ljg2MTEtNjYuNzUyNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzQ0NC43OTU5IDYxNi4yNDIyIDQ3NC42NzExIDY0Ni4xODE5IDUxMS41NDg0IDY0Ni4xODE5ek0yNjUuOTE2NCA4OTAuNzA5YzM2Ljg3NzMgMCA2Ni43NTE1LTI5LjkzOTcgNjYuNzUxNS02Ni44NjExIDAtMzYuOTQyOC0yOS44NzQyLTY2Ljg4MjYtNjYuNzUxNS02Ni44ODI2LTM2Ljg1NTggMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44ODI2QzE5OS4xNjM5IDg2MC43NjkzIDIyOS4wNTk2IDg5MC43MDkgMjY1LjkxNjQgODkwLjcwOXpNNTExLjU0ODQgODkwLjcwOWMzNi44NTU4IDAgNjYuNzUyNS0yOS45Mzk3IDY2Ljc1MjUtNjYuODYxMSAwLTM2Ljk0MjgtMjkuODk1Ny02Ni44ODI2LTY2Ljc1MjUtNjYuODgyNi0zNi44NzczIDAtNjYuNzUyNSAyOS45Mzk3LTY2Ljc1MjUgNjYuODgyNkM0NDQuNzk1OSA4NjAuNzY5MyA0NzQuNjcxMSA4OTAuNzA5IDUxMS41NDg0IDg5MC43MDl6TTc1NS42NDEzIDY0Ni4xODE5YzM2Ljg1NjggMCA2Ni43NTM1LTI5LjkzOTcgNjYuNzUzNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTY3LTY2Ljg2MTEtNjYuNzUzNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzY4OC44ODk5IDYxNi4yNDIyIDcxOC43NjQgNjQ2LjE4MTkgNzU1LjY0MTMgNjQ2LjE4MTl6TTMxMS43MDM2IDI5MC42OTcyYzI0LjI4MTEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTQ0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMTYgMC00My45ODkgMTkuNzI4NC00My45ODkgNDQuMDUzNXYyMDAuMTA0OTZDMjY3LjcxNDYgMjcwLjk5MDMgMjg3LjQwMiAyOTAuNjk3MiAzMTEuNzAzNiAyOTAuNjk3MnoiIGZpbGw9IiM1ZTdhODgiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==) no-repeat 8px 10px;
    padding-left: 36px;
    color: #666;
  }

  /*transition*/
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-in-out;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateY(-10px);

  }

  /*下拉框*/
  .calendar-dropdown {
    background: #fff;
    position: absolute;
    left: 60px !important;
    top: 0;
    padding: 1px;
    border: 1px solid #eee;
    border-radius: 2px;
    top: 42px !important;
  }

  .calendar-dropdown:before {
    position: absolute;
    left: 30px;
    top: -10px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
  }

  .calendar-dropdown:after {
    position: absolute;
    left: 30px;
    top: -9px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
  }

  /*弹出框*/
  .calendar-dialog {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .calendar-dialog-mask {
    background: rgba(255, 255, 255, .5);
    width: 100%;
    height: 100%;
  }

  .calendar-dialog-body {
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 2px;
  }

  .hangyiactive {
    background-color: #e6e6e6;
  }


</style>
