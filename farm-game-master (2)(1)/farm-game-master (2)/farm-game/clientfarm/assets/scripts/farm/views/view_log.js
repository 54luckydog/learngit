
// 
//FileName:view_log.js
//Author: wangqiang
//CreateDate:2019-08-21 09:56
//Description:
//Modify:
//
const TAG ="VIEW_LOG";
const Log = GS.Log.create(TAG);
cc.Class({
    extends: cc.Component,

    properties: {
        Log_High:60,//每条高度30
        Log_const:10,//每页条数
        bg:cc.Sprite,//获取背景图层
        log_name:cc.Label,//日志标题
        page_num:cc.Label,//页码
        scroll_view:cc.ScrollView,//获取scrollview组件
        back_button:cc.Button,//上一页按钮
        next_button:cc.Button,//下页按钮
        close_button:cc.Button,//关闭按钮
        log_item_prefab:cc.Prefab,//日志预制体

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         //LOG.debug('onload');
         this.back_button.node.on('click',this.back_callback,this);
         this.next_button.node.on('click',this.next_callback,this);
         this.close_button.node.on('click',this.close_callback,this);
     },
     back_callback:function(){
         Log.debug("上一页");
         //var self = this.bg;//加载背景图片(暂时没有素材请勿删除)
        // 远程 url 带图片后缀名
       // var remoteUrl = "http://unknown.org/someres.png";
       //cc.loader.load(remoteUrl, function (err, texture) {
       //  self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
       // });
     },
     next_callback:function(){
         Log.debug("下一页");
         //var self = this.bg;//加载背景图片(暂时没有素材请勿删除)
        // 远程 url 带图片后缀名
       // var remoteUrl = "http://unknown.org/someres.png";
       //cc.loader.load(remoteUrl, function (err, texture) {
       //  self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
       // });
     },
     close_callback:function(){
         Log.debug("关闭");
         this.main = cc.find("Canvas/root/view_main");
         this.node.active = false;
         this.main.active = true;
         //var self = this.bg;//加载背景图片(暂时没有素材请勿删除)
        // 远程 url 带图片后缀名
       // var remoteUrl = "http://unknown.org/someres.png";
       //cc.loader.load(remoteUrl, function (err, texture) {
       //  self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
       // });
     },

    
    start () {
        //var self = this.bg;//加载背景图片(暂时没有素材请勿删除)
        // 远程 url 带图片后缀名
       // var remoteUrl = "http://unknown.org/someres.png";
       //cc.loader.load(remoteUrl, function (err, texture) {
       //  self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
       // });
    },
    
     update () {
         var page=this.page_num;
         var num="url"
         page.node.getComponent(cc.Label).string=num;
     },
     onDestroy(){

     },
});
