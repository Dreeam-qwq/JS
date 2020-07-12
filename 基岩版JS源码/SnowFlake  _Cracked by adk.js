//恭喜你看到了源码，禁止泛滥源码，禁止二改，三改等，禁止倒卖源码by snowflake
//交流群号1039507619，此js永久免费
//发现倒卖请向作者举报
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),Typeface = android.graphics.Typeface,view = android.view,
grap = android.graphics,
lang = java.lang,
util = android.util,
io = java.io,handopen=false;
function H() {var metrics = new android.util.DisplayMetrics();ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);return metrics.heightPixels;}
function dip2px(ctx, dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
if(!java.io.File("/storage/emulated/0/binary/SF/firstrun").exists()){
java.io.File("/storage/emulated/0/binary/SF/").mkdirs()
var FW = new java.io.FileWriter(new java.io.File(String("/storage/emulated/0/binary/SF/firstrun")));
FW.write("awa");
FW.close();
var abouttext="欢迎使用SnowFlake.js，此js永久免费，禁止对其破解二改等，更不得散布该js源码，否则挂狗处理！此js永久免费，禁止倒卖！作者398513783\n倒卖狗名单\n暂时没有"
Ui(function(){var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("提示")
dialog.setMessage(abouttext);
dialog.setPositiveButton("OK",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()})
}
function 彩字(text){
var colors=[["\n","<br/>"],["§l","</b><b>"],[".js","</b><b>"+".js"+"</font></b></del></ins></i>"],["§m","</del><del>"],["§n","</ins><ins>"],["§o","</i><i>"],["§r","</font></b></del></ins></i>"],["§0","</font><font color=#000000>"],["§1","</font><font color=#0000AA>"],["§2","</font><font color=#00AA00>"],["§3","</font><font color=#00AAAA>"],["§4","</font><font color=#AA0000>"],["§5","</font><font color=#AA00AA>"],["§6","</font><font color=#FFAA00>"],["§7","</font><font color=#cccccc>"],["§8","</font><font color=#555555>"],["§9","</font><font color=#5555FF>"],["§a","</font><font color=#55FF55>"],["§b","</font><font color=#55FFFF>"],["§c","</font><font color=#FF5555>"],["§d","</font><font color=#FF55FF>"],["§e","</font><font color=#FFFF55>"],["§f","</font><font color=#FFFFFF>"],["§t","</font><font color=#00ffd2>"],["下划线","<u> </u> "]]
for(var e in colors){text=text.split(colors[e][0]).join(colors[e][1])};return android.text.Html.fromHtml(text);
}
//自创彩虹字算法
function randomNum(minNum,maxNum){ 
switch(arguments.length){ 
case 1: 
return parseInt(Math.random()*minNum+1,10); 
break; 
case 2: 
return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
break; 
default: 
return 0; 
break; 
} 
}
function longhand(){
runThread(
function() {
try {
while(handopen){
var ent = getNearestEntity(6);
Entity.setCollisionSize(ent, handl, handl-1);
lang.Thread.sleep(600);
}
}catch (err) {
bugreport(err);
}
}
);
} 
var lastc,colist=["§5","§6","§7","§3","§4","§a","§b","§c","§d","§e"];
function randomfontc(text){
var textl=text.length,i=0,finaltext="",texing;
while(true){
texing=colist[randomNum(0,9)];
if(lastc==texing){texing=colist[randomNum(0,9)];}
lastc=texing;
finaltext=finaltext+texing+text.charAt(i);
i++;
if(i==textl){break;}
}
return 彩字(finaltext);
}
function randomc(){
return colist[randomNum(0,9)];
}
function roundRect(arr,arr2,f,s){
if(!(arr instanceof Array))arr=[arr,arr,arr];
if(!(arr2 instanceof Array))arr2=[arr2,arr2,arr2,arr2];
if(arr2==null)arr2=[10,10,10,10];
var jb=null,type=null;
if(f=="上下"||f==null){
jb=android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
}else if(f=="左右"){
jb=android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
}else if(f=="右上"){
jb=android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
}else if(f=="右下"){
jb=android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
}
var dra=new android.graphics.drawable.GradientDrawable(jb,arr);
if(s==0||s==null){
type=android.graphics.drawable.GradientDrawable.LINEAR_GRADIENT;
}else if(s==1){
type=android.graphics.drawable.GradientDrawable.RADIAL_GRADIENT;
}else if(s==2){
type=android.graphics.drawable.GradientDrawable.SWEEP_GRADIENT;
}
dra.setGradientType(type);
dra.setCornerRadii([arr2[0],arr2[0],arr2[1],arr2[1],arr2[2],arr2[2],arr2[3],arr2[3]]);
return dra;
}

//再次封装上面这条
function roundBG(hex,round,f,s){
return roundRect(hexColor(hex),round,f,s)
}

//进制颜色
function hexColor(c){
return android.graphics.Color.parseColor(c);
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
wg = android.widget,vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE),
app = android.app,
wid = ctx.getWindowManager().getDefaultDisplay().getWidth(),
hei = ctx.getWindowManager().getDefaultDisplay().getHeight(),
gravity = android.view.Gravity,
left = gravity.LEFT,
top = gravity.TOP,
right = gravity.RIGHT,
bottom = gravity.BOTTOM,
center = gravity.CENTER,
mainView = ctx.getWindow().getDecorView(),
view = android.view,
grap = android.graphics,
lang = java.lang,
util = android.util,
io = java.io,
interface = android.content.DialogInterface,
root = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(),
shield = ["闪电侠", "超级跳跃", "末影使者", "点我使用展示功能", "跳跃信标", "entity"];
var radarPic = grap.Bitmap.createBitmap(hei / 3, hei / 3, grap.Bitmap.Config.ARGB_8888),
radarShow, radarWin, state = 0,
lenZ = radarPic.getWidth(),entnear=10,
lenX = radarPic.getHeight(),
radius = lenZ / 30,
speeding = false,fspd=30,
running = false,
players, flashing = false,
home = null,
getMessage, mode = false,posop=true,Typeface = android.graphics.Typeface,
da = false,
d;
/*#揭露*/function UIReveal(view,x,y,startr,endr,time){var globallayoutlinstener=new android.view.ViewTreeObserver.OnGlobalLayoutListener(){onGlobalLayout:function(){var anim=new android.view.ViewAnimationUtils.createCircularReveal(view,x,y, startr,endr);anim.setDuration(time);anim.start();view.getViewTreeObserver().removeOnGlobalLayoutListener(globallayoutlinstener);}};view.setVisibility(android.view.View.VISIBLE);view.getViewTreeObserver().addOnGlobalLayoutListener(globallayoutlinstener);return globallayoutlinstener;};
/*#移动*/function UIMove(view,x1,x2,y1,y2,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.TranslateAnimation(tp,x1*0.01,tp,x2*0.01,tp,y1*0.01,tp,y2*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*#旋转*/function UIRotate(view,A,B,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.RotateAnimation(A,B,tp,x*0.01,tp,y*0.01);dh.setDuration(time);dh.setFillAfter(true);if(view!=null)view.startAnimation(dh);return dh;}
/*#收缩*/function UIShrink(view,x1,x2,y1,y2,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.ScaleAnimation(x1*0.01,x2*0.01,y1*0.01,y2*0.01,tp,x*0.01,tp,y*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*淡入*/function UIFadein(view,A,B,time){var dh=new android.view.animation.AlphaAnimation(A*0.01,B*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*缩放*/function UIZoom(view,In,out,time,type){return UIShrink(view,In,out,In,out,50,50,time,type);}
/*水平*/function UILevel(view,In,out,time,type){return UIMove(view,In,out,0,0,time,type);}
/*垂直*/function UIPlumb(view,In,out,time,type){return UIMove(view,0,0,In,out,time,type);}

var zimiao,ft, bang, rao, 喵 = false,jumpmode=true,showglass=false,glassbutton,look=false,b64icon,uplength=2,setspeedd=50,rideopen=false,ride按钮,
长臂 = false,sment=0.5,smtr=false,twlopen=false,lockbutton,
漫步, 显示界面 = 1,jump=0.6,bpspeed=1,penspeed=1,
黑洞杀 = false,显示前按钮=false,前按钮,
急迫=false,showajump=false,jumpbutton,autojump=false,jdelay=100,
延迟=false,handopen=false,handl=9,savebutton,
跳跃=false,entnear=10,
额外坠=1,blockroad=20,blockhigh,roadtype=1,lastplayerhigh,远按钮,showlongbutton=false,
mix=false,mixbutton,showmix=false,twspeed=1,twopen=false,twbutton,showtwbutton=false,
showbutton=false,backbutton,superflight=-false,
downhp=false,downbutton,showdownbutton=false,oreviso=false,
upbutton,showupbutton=false,upperfly=false,showco=false,speedtr=false,
voibac=false,voihigh=2,闪,showflashbutton=false,
飞tf=false,dwtw=false,
夜视=false,
回弹 = false;
var 坐标x = 0,
坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5,
坐标x1, 坐标y1, 坐标x2, 坐标y2;
function Ui(command) {
ctx.runOnUiThread(new java.lang.Runnable({
run: command
}));
}var onshow=false,maint
function W() {var metrics = new android.util.DisplayMetrics();ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);return metrics.widthPixels;}
var b64icon="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";
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try {
var 窗口 = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx),
按钮 = new android.widget.ImageView(ctx);
var 图标 = android.util.Base64.decode(b64icon, 0);

按钮.setImageBitmap(new android.graphics.BitmapFactory.decodeByteArray(图标, 0, 图标.length));
if (H() > W()) {
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.1, W() * 0.1));
} else {
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
}

按钮.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v) {
Ui(function() {
 if(onshow){onshow=false;maint.dismiss()}else{ onshow=true;maint = GUI1(ctx, "精简功能", 300, 300, GUI1_List);}

});
}
}));

按钮.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, e) {
switch (e.getAction()) {
case 0:
坐标x1 = e.getX();
坐标y1 = e.getY();
break;
case 2:
坐标x2 = parseInt(e.getX() - 坐标x1) * -1 / 10;
坐标y2 = parseInt(e.getY() - 坐标y1) * -1 / 10;
坐标x = 坐标x + 坐标x2;
坐标y = 坐标y + 坐标y2;
窗口.update(坐标x, 坐标y, -1, -1);
break;
}
return false;
}
}));
layout.addView(按钮);
窗口.setContentView(layout);
窗口.setWidth(dip2px(ctx, 50));
窗口.setHeight(dip2px(ctx, 50));
窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
窗口.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
} catch (err) {
print(err)
}
}}));
var fpath,fname,alpha=150,corr=15,fopen=false,blackcolor="000000",revtime=500,buttoncolor="111111",whitecolor="ffffff",titlecolor="1de9b6",enablecolorful=false,enablebcolorful=false;
mcfont = Typeface.create("sans-serif-thin", Typeface.NORMAL)
function randomNum(minNum,maxNum){
switch(arguments.length){ 
case 1: 
return parseInt(Math.random()*minNum+1,10); 
break; 
case 2: 
return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
break; 
default: 
return 0; 
break; 
}
}
var lastc;
function randomfontc(text){
var colist=["§5","§6","§7","§3","§4","§a","§b","§c","§d","§e"],textl=text.length,i=0,finaltext="",texing;
while(true){
texing=colist[randomNum(0,9)];
if(lastc==texing){texing=colist[randomNum(0,9)];}
lastc=texing;
finaltext=finaltext+texing+text.charAt(i);
i++;
if(i==textl){break;}
}
return 彩字(finaltext);
}
function 拖动按钮(txt, 距离右侧, 距离底部, 宽度, 高度, command, 变色) {
if(!变色){if(enablebcolorful){txt=randomfontc(txt);}}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 坐标x = 距离右侧,
坐标y = 距离底部,
坐标x1, 坐标y1, 坐标x2, 坐标y2;
var 窗口 = new android.widget.PopupWindow();
runThread(function() {
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try {
var layout = new android.widget.RelativeLayout(ctx),
按钮 = NewView("LL", 宽度, 高度, "CC", 0, 2, "#"+blackcolor, 15);
var 按钮1 = NewText(txt, "CC", 14, "#ff"+whitecolor);
按钮.addView(按钮1);
//界面.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,0,25,15)));
var 背景 = new android.graphics.drawable.GradientDrawable();
背景.setCornerRadius(corr);
背景.setColor(android.graphics.Color.parseColor("#"+blackcolor));
背景.setAlpha(alpha);
按钮1.setTypeface(mcfont);
按钮.setBackground(背景);
if (command && 变色) {
按钮颜色(按钮1, 按钮, command);
} else if (command) {
按钮.setOnClickListener(new view.View.OnClickListener({
onClick: command
}));}
按钮.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, e) {
switch (e.getAction()) {
case 0:
坐标x1 = e.getX();
坐标y1 = e.getY();
break;
case 2:
坐标x2 = parseInt(e.getX() - 坐标x1) * -1 / 10;
坐标y2 = parseInt(e.getY() - 坐标y1) * -1 / 10;
坐标x = 坐标x + 坐标x2;
坐标y = 坐标y + 坐标y2;
窗口.update(坐标x, 坐标y, -1, -1);
break;
}
return false;
}
}));
layout.addView(按钮);
窗口.setContentView(layout);
窗口.setWidth(宽度);
窗口.setHeight(高度);
窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
窗口.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
} catch (err) {
print(err);
}
}
}));
});

return 窗口;
}
function runThread(func) {
var a = new java.lang.Thread(new java.lang.Runnable({
run: func
}));
a.start();
return a;
}
function NewView(type,sizeW,sizeH,gravity,ori,cm,color,cr,clickrun){
if(type=="LL"){
var _L1=new android.widget.LinearLayout(ctx);
}else if(type=="SV"){
var _L1=new android.widget.ScrollView(ctx);
};
_L1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(sizeW,sizeH));
if(gravity=="LT"){
_L1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.TOP);
}else if(gravity=="LC"){
_L1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.CENTER);
}else if(gravity=="LB"){
_L1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.BOTTOM);
}else if(gravity=="CT"){
_L1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP);
}else if(gravity=="CC"){
_L1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
}else if(gravity=="CB"){
_L1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.BOTTOM);
}else if(gravity=="RT"){
_L1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.TOP);
}else if(gravity=="RC"){
_L1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.CENTER);
}else if(gravity=="RB"){
_L1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM);
};
if(ori!=null){
_L1.setOrientation(ori);
};
if(cm==0){
_L1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
}else if(cm==1){
_L1.setBackgroundDrawable(roundBG(color,cr));
}else if(cm==2){
 
 };
if(clickrun!=null){
_L1.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){try{
clickrun(v);
}catch(e){
print(e)
};}}));
};

return _L1;
};

function NewCDV(cm,color,cr,view,sizeW,sizeH,fa,ta,gravity,pyx,pyy){
var _Cdkview1 = new android.widget.PopupWindow();
if(cm==0){
_Cdkview1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
}else if(cm==1){
_Cdkview1.setBackgroundDrawable(roundBG(color,cr));
}else if(cm==2){
};
_Cdkview1.setAnimationStyle(android.R.style.Animation_Dialog);
_Cdkview1.setContentView(view);
_Cdkview1.setWidth(sizeW);
_Cdkview1.setHeight(sizeH);
_Cdkview1.setFocusable(fa);
_Cdkview1.setTouchable(ta);
if(gravity=="LT"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP,pyx,pyy);
}else if(gravity=="LC"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.CENTER,pyx,pyy);
}else if(gravity=="LB"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.BOTTOM,pyx,pyy);
}else if(gravity=="CT"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP,pyx,pyy);
}else if(gravity=="CC"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER,pyx,pyy);
}else if(gravity=="CB"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.BOTTOM,pyx,pyy);
}else if(gravity=="RT"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,pyx,pyy);
}else if(gravity=="RC"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.CENTER,pyx,pyy);
}else if(gravity=="RB"){
_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,pyx,pyy);
};
return _Cdkview1;
};
function NewText(text,gravity,size,color){
var _T1 = new android.widget.TextView(ctx);
if(gravity=="LT"){
_T1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.TOP);
}else if(gravity=="LC"){
_T1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.CENTER);
}else if(gravity=="LB"){
_T1.setGravity(android.view.Gravity.LEFT|android.view.Gravity.BOTTOM);
}else if(gravity=="CT"){
_T1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP);
}else if(gravity=="CC"){
_T1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
}else if(gravity=="CB"){
_T1.setGravity(android.view.Gravity.CENTER|android.view.Gravity.BOTTOM);
}else if(gravity=="RT"){
_T1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.TOP);
}else if(gravity=="RC"){
_T1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.CENTER);
}else if(gravity=="RB"){
_T1.setGravity(android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM);
};
_T1.setText(text);
if(size!=null){
_T1.setTextSize(size);
};
if(color!=null){
_T1.setTextColor(android.graphics.Color.parseColor(color));
};
return _T1;
};

function NewPB(mode,max,pro){
if(mode==1){
var _PB1 = new android.widget.ProgressBar(ctx);
return _PB1;
}else if(mode==2){
var _PB2 = new android.widget.ProgressBar(ctx,null,android.R.attr.progressBarStyleHorizontal);
_PB2.setMax(max);
_PB2.setProgress(pro);
};
};
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),_sr=null;
var gdd = ctx.getWindowManager().getDefaultDisplay();
var p_h = gdd.getHeight();//获取屏幕高
var p_w = gdd.getWidth();//获取屏幕宽




var GravityList = {
'LT':android.view.Gravity.LEFT | android.view.Gravity.TOP,
'LC':android.view.Gravity.LEFT | android.view.Gravity.CENTER,
'LB':android.view.Gravity.LEFT | android.view.Gravity.BOTTOM,
'CT':android.view.Gravity.CENTER | android.view.Gravity.TOP,
'CC':android.view.Gravity.CENTER | android.view.Gravity.CENTER,
'CB':android.view.Gravity.CENTER | android.view.Gravity.BOTTOM,
'RT':android.view.Gravity.RIGHT| android.view.Gravity.TOP,
'RC':android.view.Gravity.RIGHT| android.view.Gravity.CENTER,
'RB':android.view.Gravity.RIGHT| android.view.Gravity.BOTTOM,
}
function 顶部提示(text) {
var lay = NewView("LL", W() / 10 * 3.5, H() * 0.08, "CC", 0, 1, "#"+blackcolor, 20);
var $P = new android.widget.ProgressBar(ctx);
lay.addView($P);
var 文字 = NewText(text, "LC", 14, "#ff"+whitecolor);
文字.setTypeface(mcfont);
lay.addView(文字);
var 界面 = NewCDV(2, null, null, lay, W() / 10 * 4, H() /11, false, true, "CT", 0, H() * 0.02);
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
UIReveal(lay, 0,0, 0,2000, revtime*2);
}}));
runThread(function(){var le=text.length,tmp="",i=0;
while(true){
ft=""
tmp=tmp+ft+text.charAt(i);
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
 if(i==le){文字.setText(彩字(tmp));}
else{文字.setText(彩字(tmp+"_"));} 
}}));
java.lang.Thread.sleep(200)
i=i+1;if(i>le){break}
}})
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable({
run: function() {
UIMove(lay, 0, 0, 0,H()/11*-1, 500, null)
}
}), revtime+1000)
}
}));
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable({
run: function() {
界面.dismiss();
}
}), revtime+1500)
}
}));
}

var LayoutParams = android.view.ViewGroup.LayoutParams;
var LinearLayout = android.widget.LinearLayout;
var ScrollView = android.widget.ScrollView;
var WRAP_CONTENT = LayoutParams.WRAP_CONTENT;
var FILL_PARENT = LayoutParams.FILL_PARENT;
var hexColor = android.graphics.Color.parseColor;
var TextView= android.widget.TextView;
var PopupWindow = android.widget.PopupWindow;
var ColorDraw = android.graphics.drawable.ColorDrawable;
function GUI1(context, MenuName, WinX, WinY, onDraw) {
/*
var MenuName = "测试";
var WinX = 200;
var WinY = 200;
*/
var WinWidth = 400;//窗口高度
var TopHeight = 100;//窗口顶栏高度

//
var text_w = WinWidth * 0.7;
var dx = 0;
var dy = 0;
var moving = false;
var status = false;
var Menu = null;

var WinLayout = new LinearLayout(context);
var TopLayout = new LinearLayout(context);
var MenuLayout_ = new ScrollView(context);
var MenuLayout = new LinearLayout(context);
var PopupWin = new PopupWindow();

var Text1 = new TextView (context);
var Text2 = new TextView (context);

WinLayout.setOrientation(1);
TopLayout.setOrientation(0);
MenuLayout.setOrientation(1);
Text1.setText(MenuName);
Text1.setTextSize(16);
Text1.setTextColor(hexColor("#dddddd"));
Text1.setGravity(GravityList['CC']);
Text1.setLayoutParams(new LayoutParams(WinWidth - TopHeight * 2, TopHeight));
TopLayout.addView(Text1);

Text2.setText("-");
Text2.setTextSize(24);
Text2.setTextColor(hexColor("#dddddd"));
Text2.setGravity(GravityList['CC']);
Text2.setLayoutParams(new LayoutParams(TopHeight, TopHeight));


TopLayout.setGravity(GravityList['RC']);
WinLayout.setGravity(GravityList['LT']);

TopLayout.setLayoutParams(new LayoutParams(WinWidth, WRAP_CONTENT));
MenuLayout_.setLayoutParams(new LayoutParams(WinWidth, WRAP_CONTENT));
MenuLayout.setLayoutParams(new LayoutParams(WinWidth, WRAP_CONTENT));

TopLayout.addView(Text2);
WinLayout.addView(TopLayout);
MenuLayout_.addView(MenuLayout);

TopLayout.setBackgroundDrawable(new ColorDraw(hexColor("#1b1b1b")));
MenuLayout_.setBackgroundDrawable(new ColorDraw(hexColor("#001b1b1b")));

TopLayout.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
status = !status;
if(status){
WinLayout.addView(MenuLayout_);
ctx.runOnUiThread(new java.lang.Runnable(function(){Text2.setText("+")}))
}else{
ctx.runOnUiThread(new java.lang.Runnable(function(){Text2.setText("-")}))
if(!status){
WinLayout.removeView(MenuLayout_);
}
}
}catch(e){
print(e.lineNumber + ": " + e);
}
}
}));
TopLayout.setOnTouchListener(new android.view.View.OnTouchListener({onTouch:function (view, event) {
try {
switch (event.getAction()) {
case android.view.MotionEvent.ACTION_DOWN:
dx = event.getX();
dy = event.getY();
break;
case android.view.MotionEvent.ACTION_MOVE:
WinX = parseInt(WinX + (event.getX() - dx) * 0.3);
WinY = parseInt(WinY + (event.getY() - dy) * 0.3);
PopupWin.update(WinX,WinY, -1, -1);
break;
case android.view.MotionEvent.ACTION_UP:
case android.view.MotionEvent.ACTION_CANCEL:
}
}
catch (c) {
}
return false;
}}));
onDraw(context, MenuLayout, PopupWin);
PopupWin.setContentView(WinLayout);
PopupWin.setFocusable(false);
PopupWin.setHeight(WRAP_CONTENT);//设置高
PopupWin.setWidth(WRAP_CONTENT);//设置宽
PopupWin.setBackgroundDrawable(new ColorDraw(hexColor("#001b1b1b")));
context.runOnUiThread(new java.lang.Runnable({run:function(){//在UI线程上运行
try{
PopupWin.showAtLocation(context.getWindow().getDecorView(), GravityList["LT"], WinX, WinY);
}catch(e){
print(e.lineNumber + e);
}
}}));
return PopupWin;
}

function NewButton(context, layout, text, click){

var Height = 100;
var Width = 400;

var Layout = new LinearLayout(context);
var Text1 = new TextView (context);
var Text2 = new TextView (context);
Layout.setGravity(GravityList['CC']);
Layout.setOrientation(0);
Layout.setBackgroundDrawable(new ColorDraw(hexColor("#343434")));
Layout.setLayoutParams(new LayoutParams(FILL_PARENT, WRAP_CONTENT));
Text1.setText(text);
Text1.setTextColor(hexColor("#dddddd"));
Text1.setTextSize(16);
Text1.setGravity(GravityList['CC']);
Text1.setLayoutParams(new LayoutParams(Width - Height * 2, Height));
Layout.addView(Text1);
Layout.setOnClickListener(new android.view.View.OnClickListener({onClick: function(view){
try{
if(click){
return click(view, Text2, Text1);
}
}catch(e){
print(e.lineNumber + ": " + e);
}
}}));
if(layout){
layout.addView(Layout);
}
return Layout;
}
//盗源码司马
//p
//o
//w
var 冲按钮,显示冲按钮=false,显示绑喵绕=false,绑喵绕按钮;
//e
var penspeed=0.7,显示搭路按钮=false,搭路按钮;
//r
//e
//d
//b
//y
var voiback=false,voihigh=4;
//盗源码sm
function GUI1_List(context, MenuLayout, PopupWin){//
NewButton(context, MenuLayout, "飞行", function(view, t1, t2){
Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 2, Player.getZ());Player.setFlying(true);
return false;
},function(view, t1, t2){
Player.setFlying(false);
return true;
});
NewButton(context, MenuLayout, "长臂猿", function(view, t1, t2){
if (handopen) {
handopen = false;
var ent = getNearestEntity(6);
Entity.setCollisionSize(ent, 0.6, 1.8);
顶部提示("已关闭长臂猿");
} else {
handopen = true;
顶部提示("已开启长臂猿");
}longhand();
return false;
});
NewButton(context, MenuLayout, "自动搭路", function(view, t1, t2){
 if (显示搭路按钮) {
搭路按钮.dismiss();
显示搭路按钮 = false;
} else {
搭();
显示搭路按钮 = true;
}
return false;
});
NewButton(context, MenuLayout, "绑喵绕骑", function(view, t1, t2){
if (!显示绑喵绕) {
绑喵绕();
显示绑喵绕 = true;
} else if (显示绑喵绕) {
绑喵绕按钮.dismiss();
显示绑喵绕 = false;
}
return false;
});
NewButton(context, MenuLayout, "冲刺按键", function(view, t1, t2){
if(显示冲按钮){显示冲按钮=false;冲按钮.dismiss()}
else{显示冲按钮=true;冲();}
return false;
});
NewButton(context, MenuLayout, "虚空回弹", function(view, t1, t2){
 if (voibac) {
voibac = false;
顶部提示("已关闭回弹");
} else {
voibac = true;
顶部提示("已开启回弹");
}voidback();
return false;
});
}
function 冲() {
Ui(function() {
冲按钮 = 拖动按钮("冲", W() * 0.9, H() / 4 * 2, H() / 10, H() / 10, function() {
冲刺(getPlayerEnt(),3*penspeed, 2*penspeed, 3*penspeed);
})
});
}
function 冲刺(实体, x, y, z) {
var a = getYaw() * Math.PI / 180;
var b = getPitch() * Math.PI / 180;
xx = -Math.sin(a) * Math.cos(b);
yy = -Math.sin(b);
zz = Math.cos(a) * Math.cos(b);
setVelX(实体, xx * x);
setVelY(实体, yy * y);
setVelZ(实体, zz * z);
}
function 绑绕(player, flashMode) {
runThread(function() {
try {
喵 = true;
while (喵) {
invalidate();
if (players.indexOf(player) == -1 || Entity.getY(player) == 0) {
喵 = false;
break;
} else {
var yaw;
var wtime;
if (flashMode) {
yaw = Math.random() * 360 - 180;
wtime = 300;
} else {
yaw = Entity.getYaw(player) - 180;
wtime = 1;
}
var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
pointY = Entity.getY(player) + 0.5,
pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
Entity.setRot(Player.getEntity(), yaw + 180, 30);
Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
Entity.setVelY(getPlayerEnt(), 0);
lang.Thread.sleep(wtime);
}
}
} catch (err) {
print(err);
}
});
}
var ridekillo=false;
function ridekill() {
runThread(function() {
try {
while (ridekillo) {
var player=getNearestEntity(entnear);
 if (player != null) {
 if(Player.getName(player)!="entity"){
var pointX = Entity.getX(player),
pointY = Entity.getY(player) + 2,
pointZ = Entity.getZ(player);
Entity.setCollisionSize(player,1,5);
Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
Entity.setVelY(getPlayerEnt(), 0);
lang.Thread.sleep(5);
Entity.setVelY(getPlayerEnt(), 0);
lang.Thread.sleep(5);
Entity.setVelY(getPlayerEnt(), 0);
lang.Thread.sleep(5);}
else{
lang.Thread.sleep(50);
}}
}
} catch (err) {
print(err);
}
});
}
runThread(function() {
while (true) {
if (喵 == false && bang == true) {
// print("test");
if (getNearestEntity(entnear) != null) {
绑绕(getNearestEntity(entnear), false);
}
lang.Thread.sleep(50);
}
}
});

function 绑() {
if (bang) {
bang = false;
喵 = false;
} else {
rao = false;
bang = true;
}
}

//自动进程
runThread(function() {
while (true) {
if (喵 == false && rao == true) {
if (getNearestEntity(entnear) != null) {
绑绕(getNearestEntity(entnear), true);
}
}
lang.Thread.sleep(50);
}
});

function 绕() {
if (rao) {
rao = false;
喵 = false;
} else {
bang = false;
rao = true;
}
}

function 自瞄() {
if (zimiao) {
zimiao = false;
顶部提示("自瞄已关闭");
} else {
zimiao = true;
顶部提示("自瞄已开启");
try {
runThread(function() {
while (zimiao) {
aimAtEnt(getNearestEntity(entnear));
lang.Thread.sleep(10);
}
});
} catch (err) {
print(err);
}
}
}
//从skiddy抄来并修改了的函数

function getNearestEntity(最远选择距离) {
invalidate();
var 最远选择距离2 = 最远选择距离;
var 选取玩家 = null;
for (var x = 0; x < players['length']; x++) {
var X距离 = Entity.getX(players[x]) - getPlayerX();
var Y距离 = Entity.getY(players[x]) - getPlayerY();
var Z距离 = Entity.getZ(players[x]) - getPlayerZ();
var 距离 = Math.sqrt(Math.pow(X距离, 2) + Math.pow(Y距离, 2) + Math.pow(Z距离, 2));
if (距离 < 最远选择距离2 && 距离 > 0 && Entity.getHealth(players[x]) >= 1) {
最远选择距离2 = 距离;
选取玩家 = players[x];
}
};
return 选取玩家;
}


function aimAtEnt(自瞄对象) {
if (自瞄对象 != null) {
var distanceX = Entity.getX(自瞄对象) - getPlayerX();
var distanceY = Entity.getY(自瞄对象) - getPlayerY();
var distanceZ = Entity.getZ(自瞄对象) - getPlayerZ();
var 玩家实体ID = '63';
if (Entity.getEntityTypeId(自瞄对象) != 玩家实体ID) {
distanceY += 0.5;
};
var _0x2bf6x178 = Entity.getX(自瞄对象) + 0.5;
var _0x2bf6x179 = Entity.getY(自瞄对象);
var _0x2bf6x17a = Entity.getZ(自瞄对象) + 0.5;
var _0x2bf6x17b = Math.sqrt(distanceX * distanceX + distanceY * distanceY + distanceZ * distanceZ);
var distanceY = distanceY / _0x2bf6x17b;
var 俯仰角 = Math.asin(distanceY);
俯仰角 = 俯仰角 * 180.0 / Math.PI;
俯仰角 = -俯仰角;
var 偏航角 = -Math.atan2(_0x2bf6x178 - (Player.getX() + 0.5), _0x2bf6x17a - (Player.getZ() + 0.5)) * (180 / Math.PI);
if (俯仰角 < 89 && 俯仰角 > -89) {
Entity.setRot(Player.getEntity(), 偏航角, 俯仰角)
}
}
}
function 绑喵绕() {
var command;
var 绑按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null),
喵按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null),
绕按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null),
骑按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null)
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 坐标x = W() / 4,
坐标y = H() / 5 * 2,
坐标x1, 坐标y1, 坐标x2, 坐标y2,t1="绑",t2="喵",t3="绕",t4="骑";
绑喵绕按钮 = new android.widget.PopupWindow();
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try {
var 绑按钮1 = NewText(t1, "CC", 14, "#ff"+whitecolor),
喵按钮1 = NewText(t2, "CC", 14, "#ff"+whitecolor),
绕按钮1 = NewText(t3, "CC", 14, "#ff"+whitecolor),
骑按钮1 = NewText(t4, "CC", 14, "#ff"+whitecolor);
绑按钮.addView(绑按钮1);
喵按钮.addView(喵按钮1);
绕按钮.addView(绕按钮1);
骑按钮.addView(骑按钮1);
绑按钮1.setTypeface(mcfont);
喵按钮1.setTypeface(mcfont);
绕按钮1.setTypeface(mcfont);
骑按钮1.setTypeface(mcfont);
var layout = new android.widget.RelativeLayout(ctx),
界面 = NewView("LL", -2, H() * 0.1, "CC", 0, 2, "#"+blackcolor, 15);
界面.addView(绑按钮);
界面.addView(喵按钮);
界面.addView(绕按钮);
界面.addView(骑按钮);
var 绑颜色 = false;
var 绕颜色 = false;
var 喵颜色 = false;
var 骑颜色 = false;
绑按钮.setOnClickListener(new view.View.OnClickListener({
onClick: function() {
绑();
if (绑颜色) {
绑按钮1.setTextColor(android.graphics.Color.parseColor("#ff"+whitecolor));
绑颜色 = false;
} else {
绑按钮1.setTextColor(android.graphics.Color.parseColor("#"+titlecolor));
绑颜色 = true;
}
}
}));
骑按钮.setOnClickListener(new view.View.OnClickListener({
onClick: function() {
if(ridekillo){ridekillo=false;}else{ridekillo=true;ridekill();}
if (骑颜色) {
骑按钮1.setTextColor(android.graphics.Color.parseColor("#ff"+whitecolor));
骑颜色 = false;
} else {
骑按钮1.setTextColor(android.graphics.Color.parseColor("#"+titlecolor));
骑颜色 = true;
}
}
}));
绕按钮.setOnClickListener(new view.View.OnClickListener({
onClick: function() {
绕();
if (绕颜色) {
绕按钮1.setTextColor(android.graphics.Color.parseColor("#ff"+whitecolor));
绕颜色 = false;
} else {
绕按钮1.setTextColor(android.graphics.Color.parseColor("#"+titlecolor));
绕颜色 = true;
}
}
}));
喵按钮.setOnClickListener(new view.View.OnClickListener({
onClick: function() {
自瞄();
if (喵颜色) {
喵按钮1.setTextColor(android.graphics.Color.parseColor("#ff"+whitecolor));
喵颜色 = false;
} else {
喵按钮1.setTextColor(android.graphics.Color.parseColor("#"+titlecolor));
喵颜色 = true;
}
}
}));
//界面.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,0,25,15)));
var 背景 = new android.graphics.drawable.GradientDrawable();
背景.setCornerRadius(corr);
背景.setColor(android.graphics.Color.parseColor("#"+blackcolor));
背景.setAlpha(alpha);
界面.setBackground(背景);

喵按钮.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, e) {
switch (e.getAction()) {
case 0:
坐标x1 = e.getX();
坐标y1 = e.getY();
break;
case 2:
坐标x2 = parseInt(e.getX() - 坐标x1) * -1 / 10;
坐标y2 = parseInt(e.getY() - 坐标y1) * -1 / 10;
坐标x = 坐标x + 坐标x2;
坐标y = 坐标y + 坐标y2;
绑喵绕按钮.update(坐标x, 坐标y, -1, -1);
break;
}
return false;
}
}));
layout.addView(界面);
绑喵绕按钮.setContentView(layout);
绑喵绕按钮.setWidth(-2);
绑喵绕按钮.setHeight(H() * 0.1);
绑喵绕按钮.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
绑喵绕按钮.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
UIReveal(layout, 0,0, 0,2000, revtime*2);
} catch (err) {
print(err);
}
}
}));
}

function 按钮颜色(文字, button, command) {
var 颜色 = false;
button.setOnClickListener(new view.View.OnClickListener({
onClick: function() {
if (command) eval(command);
if (颜色) {
文字.setTextColor(android.graphics.Color.parseColor("#ff"+whitecolor));
颜色 = false;
} else {
文字.setTextColor(android.graphics.Color.parseColor("#"+titlecolor));
颜色 = true;
}
}
}));
return 颜色;
}

function invalidate() {
try {
if (mode) {
players = Array.slice.call(Server.getAllPlayers());
players.shift();
} else {
var ls = [];
for (var i = 0; i <= 10000; i++)
if (Entity.getEntityTypeId(i) == 63)
ls.push(i);
players = ls;
}
var arr = []
for (var i in players)
if (shield.indexOf(Player.getName(players[i])) > -1) arr.unshift(i);
for (var i in arr) players.splice(arr[i], 1);
} catch (err) {
print(err);
}
}
function searchMode(v, c) {
mode = c;
}
function 搭() {
Ui(function() {
搭路按钮 = 拖动按钮("搭", W() - W() / 8, H() - H() / 5, H() / 10, H() / 10, "if(da){da=false;顶部提示('自动搭路已关闭');}else{da=true;搭路();顶部提示('自动搭路已开启');}", true);
});
}

function 搭路() {
runThread(
function() {
try {
if (da) {
while (da) {
if(roadtype==1){blockhigh=Player.getY() - 2;}
else if(roadtype==2){blockhigh=lastplayerhigh;}
//else if(roadtype==3){blockhigh=Player.getY() + 1}
setTile(Player.getX(), blockhigh, Player.getZ(), blockroad, 0);

setTile(Player.getX(), blockhigh, Player.getZ() + 1, blockroad, 0);

setTile(Player.getX(), blockhigh, Player.getZ() - 1, blockroad, 0);

setTile(Player.getX() + 1, blockhigh, Player.getZ(), blockroad, 0);

setTile(Player.getX() - 1, blockhigh, Player.getZ(), blockroad, 0);

setTile(Player.getX() - 1, blockhigh, Player.getZ() + 1, blockroad, 0);

setTile(Player.getX() + 1, blockhigh, Player.getZ() + 1, blockroad, 0);

setTile(Player.getX() - 1, blockhigh, Player.getZ() - 1, blockroad, 0);

setTile(Player.getX() + 1, blockhigh, Player.getZ() - 1, blockroad, 0);

lang.Thread.sleep(14);
//顶部提示("running");
}
}
} catch (err) {
bugreport(err);
}
}
);
}
function reback(){
runThread(
function() {
try {
lang.Thread.sleep(1000);
voidback();
}catch (err) {
bugreport(err);
}
}
);
}
function voidback(){
runThread(
function() {
try {
while(voibac){
if(Player.getY()<=voihigh){
reback();
Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 5, Player.getZ());
Player.setFlying(true);
Entity.setVelY(getPlayerEnt(), 0.6);
顶部提示("回弹成功！");
if(voihigh<=Player.getY() -100){lang.Thread.sleep(5000);}
else{lang.Thread.sleep(75);}
break;
}
}
}catch (err) {
clientMessage("complete");
}
}
);
}