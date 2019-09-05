////
//FileName:view_land.js
//Author: wangqiang
//CreateDate:2019-08-23 15:17
//Description:
//Modify:
//
const TAG ="VIEW_LAND";
const Log = GS.Log.create(TAG);
cc.Class({
    extends: cc.Component,

    properties: {
       bg:cc.Sprite,
       close_button:cc.Button,
       search_button:cc.Button,
       buy_button1:cc.Button,
       buy_button2:cc.Button,
       buy_button3:cc.Button,
       buy_button4:cc.Button,
       buy_button5:cc.Button,
       buy_button6:cc.Button,
       buy_button7:cc.Button,
       buy_button8:cc.Button,
 
       scrooll_view:cc.ScrollView,
       edit_box:{
          default:null,
          type:cc.EditBox,
          },
       view_land:{
          default:null,
          type:cc.Prefab,
      
         },
       view_getLand:{
          default:null,
          type:cc.Node,
       },
       buy_button:cc.Button,
       close2_button:cc.Button,

         },
  
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       this.close_button.node.on('click',this.close_callback,this);
       this.close2_button.node.on('click',this.close2_callback,this);
       this.search_button.node.on('click',this.search_callback,this);
       this.edit_box.node.on('editing did ended',this.edit_callback,this);
       this.buy_button.node.on('click',this.buy_callback,this);
       this.buy_button1.node.on('click',this.buy1_callback,this);
       this.buy_button2.node.on('click',this.buy2_callback,this);
       this.buy_button3.node.on('click',this.buy3_callback,this);
       this.buy_button4.node.on('click',this.buy4_callback,this);
       this.buy_button5.node.on('click',this.buy5_callback,this);
       this.buy_button6.node.on('click',this.buy6_callback,this);
       this.buy_button7.node.on('click',this.buy7_callback,this);
       this.buy_button8.node.on('click',this.buy8_callback,this);

    },
    start () {
      
   },

    update (dt) {

    },

    onDestroy(){

    },
    edit_callback: function (edit_box) {
       Log.debug("搜索");
       this.text = this.edit_box.string
       Log.debug(this.text);
      // 回调的参数是 editbox 组件
     
   },
   search_callback:function(){
      Log.debug("搜素功能");
      Log.debug(this.text);
   },
   close_callback:function(){
      Log.debug("关闭1");
      this.main=cc.find("Canvas/root/view_main")
      this.node.active = false;
      this.main.active = true;
   },
   close2_callback:function(){
      Log.debug("关闭2");
      this.view_getLand.active=false;
   },
   buy_callback:function(){
      
      Log.debug("购买土地")
      
   },
   buy1_callback:function(){
      
      this.view_getLand.active=true;
      
   },
   buy2_callback:function(){
      this.view_getLand.active=true;
   },
   buy3_callback:function(){
      this.view_getLand.active=true;
   },
   buy4_callback:function(){
      this.view_getLand.active=true;
   },
   buy5_callback:function(){
      this.view_getLand.active=true;
   },
   buy6_callback:function(){
      this.view_getLand.active=true;
   },
   buy7_callback:function(){
      this.view_getLand.active=true;
   },
   buy8_callback:function(){
      this.view_getLand.active=true;
   },
   

    
});
