<template>
  <div class="skinType_">
    <p class="S_title">肌肤类型SKIN TYPE</p>
    <div class="S_kaung">
      <div>
        <input name="skinType" type="checkbox" value="0"/><label>干性肌肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="1"/><label>油性肌肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="2"/><label>混合肌肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="3"/><label>痘痘粉刺肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="4"/><label>粗糙暗黄肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="5"/><label>斑点色素肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="6"/><label>轻衰熟龄肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="7"/><label>衰老性肌肤</label>
      </div>
      <div>
        <input name="skinType" type="checkbox" value="8"/><label>敏感性肌肤</label>
      </div>
      <div class="clear_"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:[ "skinVal" ],
  data() {
    return {
      arrinx:[],
      sname_:[],
    }
  },
  mounted(){
    this.checked_();
  },
  watch: {
    skinVal(newValue, oldValue){
      var this_=this;
      this_.morenxz(newValue);
　　}
  },
  methods:{
    checked_:function(){
      var this_=this;
      $(".S_kaung>div>input").change(function(){
        // 
        $(".S_kaung>div>input").not($(this)).each(function(){
          var num_2=parseInt($(this).attr('value'));
          var i_2=this_.arrinx.indexOf(num_);
          this_.arrinx.splice(i,1);
          this_.sname_.splice(i,1);
          $(this).prop("checked", false).removeAttr("checked","checked");
        });

        var num_=parseInt($(this).attr('value'));
        var i=this_.arrinx.indexOf(num_);
        if(i>=0){
          this_.arrinx.splice(i,1);
          this_.sname_.splice(i,1);
          $(this).prop("checked", false).removeAttr("checked","checked");
        }else{
          this_.arrinx.push(num_);
          this_.sname_.push($(this).siblings('label').text());
          $(this).attr("checked","checked").prop("checked", true);
        };

        // console.log({
        //   index_:this_.arrinx,
        //   sname_:this_.sname_
        // });

        this_.$emit('megVal' , {
          index_:this_.arrinx,
          sname_:this_.sname_
        });
      });
    },
    morenxz:function(str){
      var this_=this;
      $(".S_kaung>div>input").each(function(){
        var nastr=$(this).siblings('label').text();
        if(str){
          if(str.indexOf(nastr)>=0){
            $(this).attr("checked","checked").prop("checked", true);
            var num_=parseInt($(this).attr('value'));
            this_.arrinx.push(num_);
            this_.sname_.push($(this).siblings('label').text());
          }else{
            $(this).prop("checked", false).removeAttr("checked","checked");
          }
        }
      });

      this_.$emit('megVal' , {
        index_:this_.arrinx,
        sname_:this_.sname_
      });
    }
  }
}
</script>

<style>
.S_title{
  margin: 25px 0;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  clear: both;
  text-align: left;
}
.S_kaung{
  width: 100%;
  height:110px;
  line-height:45px;
  /*display: flex;
  flex-direction:row;
  flex-wrap:wrap;*/
}
.S_kaung>div{
  width:20%;
  height: auto;
  text-align: left;
  float: left;
}
</style>
