/*
作者为白熊
*/
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function dip2px(dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}

ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
try{
ctx.setTheme(android.R.style.Theme_Material);
var wm = ctx.getApplicationContext().getSystemService(android.content.Context.WINDOW_SERVICE);
var params = new android.view.WindowManager.LayoutParams();
params.type = android.view.WindowManager.LayoutParams.TYPE_TOAST;
params.format = android.graphics.PixelFormat.RGBA_8888;
params.flags = android.view.WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL | android.view.WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE;
params.width = -1;
//宽度
params.height = -1;
//高度
params.x = 0;
//横向偏移
params.y = 0;
//纵向偏移

var GUI = (function(){
var GUI = new android.widget.LinearLayout(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-1,-1);
GUI.setLayoutParams(lp);
GUI.setGravity(android.view.Gravity.CENTER);
GUI.setOrientation(1);
var GUI_0 = new android.widget.TextView(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_0.setLayoutParams(lp);
GUI_0.setText("输入密码:");
GUI.addView(GUI_0);
var GUI_1 = new android.widget.TextView(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_1.setLayoutParams(lp);
GUI_1.setTextSize(38)
GUI.addView(GUI_1);
  
  function jt(v){
    v.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
      if(GUI_1.getText().length()>=4){
        android.widget.Toast.makeText(ctx,"密码只有四位╮(╯_╰)╭",0).show();
        return;
      }
      GUI_1.setText(GUI_1.getText()+v.getText());
    }});
  }
  
var GUI_2 = new android.widget.LinearLayout(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-1,-2);
GUI_2.setLayoutParams(lp);
GUI_2.setOrientation(0);
GUI_2.setGravity(android.view.Gravity.CENTER);
var GUI_2_0 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_2_0.setLayoutParams(lp);
GUI_2_0.setText("你");
  jt(GUI_2_0);
GUI_2.addView(GUI_2_0);
var GUI_2_1 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_2_1.setLayoutParams(lp);
GUI_2_1.setText("我");
  jt(GUI_2_1);
GUI_2.addView(GUI_2_1);
var GUI_2_2 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_2_2.setLayoutParams(lp);
GUI_2_2.setText("他");
  jt(GUI_2_2);
GUI_2.addView(GUI_2_2);
GUI.addView(GUI_2);
var GUI_3 = new android.widget.LinearLayout(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-1,-2);
GUI_3.setLayoutParams(lp);
GUI_3.setOrientation(0);
GUI_3.setGravity(android.view.Gravity.CENTER);
var GUI_3_0 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_3_0.setLayoutParams(lp);
GUI_3_0.setText("全");
  jt(GUI_3_0);
GUI_3.addView(GUI_3_0);
var GUI_3_1 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_3_1.setLayoutParams(lp);
GUI_3_1.setText("部");
  jt(GUI_3_1);
GUI_3.addView(GUI_3_1);
var GUI_3_2 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_3_2.setLayoutParams(lp);
GUI_3_2.setText("都");
  jt(GUI_3_2);
GUI_3.addView(GUI_3_2);
GUI.addView(GUI_3);
var GUI_4 = new android.widget.LinearLayout(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-1,-2);
GUI_4.setLayoutParams(lp);
GUI_4.setOrientation(0);
GUI_4.setGravity(android.view.Gravity.CENTER);
var GUI_4_0 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_4_0.setLayoutParams(lp);
GUI_4_0.setText("爱");
  jt(GUI_4_0);
GUI_4.addView(GUI_4_0);
var GUI_4_1 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_4_1.setLayoutParams(lp);
GUI_4_1.setText("白");
  jt(GUI_4_1);
GUI_4.addView(GUI_4_1);
var GUI_4_2 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_4_2.setLayoutParams(lp);
GUI_4_2.setText("熊");
  jt(GUI_4_2);
GUI_4.addView(GUI_4_2);
GUI.addView(GUI_4);
var GUI_5 = new android.widget.LinearLayout(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-1,-2);
GUI_5.setLayoutParams(lp);
GUI_5.setOrientation(0);
GUI_5.setGravity(android.view.Gravity.CENTER);
var GUI_5_0 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_5_0.setLayoutParams(lp);
GUI_5_0.setText("←");
  GUI_5_0.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
    if(GUI_1.getText().length()==0)return;
    var t = GUI_1.getText()+"";
    t = t.substring(0,t.length - 1);
    GUI_1.setText(t);
  }});
GUI_5.addView(GUI_5_0);
var GUI_5_1 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_5_1.setLayoutParams(lp);
GUI_5_1.setText("0");
  jt(GUI_5_1);
GUI_5.addView(GUI_5_1);
var GUI_5_2 = new android.widget.Button(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_5_2.setLayoutParams(lp);
GUI_5_2.setText("确定");
  GUI_5_2.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
    if(GUI_1.getText()+""=="部爱他你"){
      wm.removeView(GUI);
      android.widget.Toast.makeText(ctx,"密码正确",0).show();
    }else{
      ctx.getSystemService(android.app.Service.VIBRATOR_SERVICE).vibrate(10000);
      android.widget.Toast.makeText(ctx,"密码错误：震动……",0).show();
    }
  }});
GUI_5.addView(GUI_5_2);
GUI.addView(GUI_5);
var GUI_6 = new android.widget.TextView(ctx);
var lp = new android.widget.LinearLayout.LayoutParams(-2,-2);
GUI_6.setLayoutParams(lp);
GUI_6.setText("只有加入群才有机会获得验证");
GUI.addView(GUI_6);

return GUI;
})();
wm.addView(GUI,params);


}catch(err){print(err);}
}}));



//作者:白熊

var 五芒星="/9j/4QBkRXhpZgAATU0AKgAAAAgABYdpAAQAAAABAAAASgESAAQAAAABAAAAAAEBAAMAAAABAAAAAAEyAAIAAAABAAAAAAEAAAMAAAABAAAAAAAAAAAAAZIIAAQAAAABAAAAAAAAAAD/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAEAAQADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAECAwUEBgf/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB75J+bUSQRJIi5FRjYhSAAdIbIqYRGiLkRFtrEYIbIOShNlVkXEhANOmREaCB1TpuIScGMSJEVEpCtYnDIgwAEDSCLIpIAGgAdIHEJMoGSxYiSasITiTFKVDBDBDBDgEwKyLsUogwRIiRJIJRcC1ccNO8SycWDS5LO+WXpKxEskgaEKadgwOd1snFBMrkSIsYgeVDX6Z8vD0Wp0x5vW9RPGvM8nsSX5vy/TcPefHbm35A9OuHr4dLCsiwqlVhWotK0UlZV0YVI87u4NNefD0y25keLph+58R7vebetPFAFAAAOTwX0jw2plb3n7a9DCi3z9Lc6/j1O6/ktxbykpHKV1RKyrg18656r7e9rFz/AEvmuvPX9bi7ySDOzrRKQuDGNkAMLdos+dKUuudOzRh5u2dnd3PZLtgYsyDrJpup1O/qxNuIadslTBV570OVrPotPm6dYMrV5ZcLyv0zPry/t49AAQAHzrtr1NOkT5dKsbdrMa3s45JkQy4372nNojlAABEcucq9XdTdvkc/QSgUlwmAAAHkVdwZ1sOq3OhMqGTsxMZy5Gbtzy/orbwJQAOG3PH1c2hqeisqt1zAJQAAAAAA85l72DNW6WPpZ1eAAIXnt3AI9nPL0cfQlVvn7FU8oix0tPM27nWu5erWCE6pbSEwCArOTrAKCnyvtPEzUpwJvXfN0wQljs8ys5u/LtTNS3Vwezh1Vac0AC9P5X2esUd/D2XMhEvN1cfUS4uzPs7bK7A5b6l6PHex8zLnAZ29bIcWchLtyddq3huLqM8nv59NAsOO6i0KpTCssCssCssCssCssCssCtWhS7Qp4NXzepqvm6e/F1zjRx25sp18qxr1Inx6AAAAAAAAAAAAAAAABV5vVyumLdfD0+mLbYTsxq6VnV5zh6brxtnj1AIAAAAAAAAAAAAAAIGFzc5259E+WVnoXm6Ws4QGdAB0+g8t6jntgY0AAAAAAAAAAAAAGfoYepwEn151qwDaxemv/8QAKxAAAQMDAwQCAgIDAQAAAAAAAgABAwQREhATIAUhMDEiQDIzI0EUFTRQ/9oACAEBAAEFAr6XV1krq6yWSclkyyZXV1dXV1dXV1fvdXV+N1fyf1/5TevFdN4n/LwP68V7eQvXgf34m19eJvB/beH3rbWzKzK3C2je+bembWysrKysna6sraX0fw/3LUBGo6sDfidVHGoawZH8z9vBPUr2i7KGpqDYYq4l/jVqNq6NTVUxNpTVGbeZuVRUXVN0oXCbpzbsHTYQTCw8DiCVi6ZHGb0NJURyAUE8E2baXV9bq6vwdGLpzKOUTYxurqee6jex724o42FucgOLzyb8wHg8cjG117V1vkRDna+vdd13UjvgMl1Uftp/0qaa6ZkAOckMQxR+HqUOzVW7Rng7Hm3dS32qf8jOzNe3dd+DtkxRuKP8oXtEIFMqqAQFdNiynBvF1aLOlVlTQ3hu7PJ+sHsmByTetN4UMzE6N/iB5KYbzw0+IqQM4104bUrek9dC1W8o3zfSbqIQ1mswbkKYcnZrMYMbSXEYBZ3M8Wb1fhFNdO2SaEiMIxj4VTbctMONPo8Mc9T1Kvko3fqFW70PUasql4oyPhI2M1IFz0kjGQcSpyECNNyghMhZmZuFcFxBtab/AJ5IglH/AFlHeOCKHlWxkNbALDDqYMYt8FfVkIuTwUgx8ndhZ7yyh70iFwHwdR7VMBWfgQsYnG8brsoYilUUIwjykPcKFr1Accjvy6o386A8x4OzO0gvEnlVFJiXKY9KVr1QevH1VvkoixPi7MTTRbJsLsMR7kfCWTBm0oW/lD14+pjeBP3UR5hwkPAZDcycnvSG4HqZsA93fSj+MIak+I8BLLhVjlS6AWEmpEwtNK5F+bACJlGeYJ3sxFuFrTDehhLIdJGvGD5BoRMA0zO0Oknp2yFmtrCeQaSyPIWLW7gWlKWJqWTcfV/VM1oYviWtP+rSq/WHrT8p1MONRoJYGp5bpm0IWJtC7I59xvTan+Ie5fjKz9ldkBCM+TK6L51Q+kZMAQi4xqvG1TruuINwbR3ZmgECh2wW2C2wW2C2wWIrAVgKwFYCsBWArAVtisBWArAVgywFbYOtqNbUa2o1PtxSakm9KY3N6Evh9eofcngK46CmU0mlMWM/1pTwiUZ4En7upTw1vZ2e7fVrC7aRHcB0M8y1piyg+rUFnPoL4k3dl8l3Xdd1QF9UywC67q7rJU8vfjTljP8AUrCtHZliyxZYsh+LgTGPD07Pdvp1ZZTcYTxf/8QAHxEAAQQCAgMAAAAAAAAAAAAAAQACECARMCExQFBR/9oACAEDAQE/AfbZ3kzmOtB6zBNwbkfEE5C4CPaximIcOELAcxhYsbioNHXFQaOuJKJhpl1xLjLdhoNjqjwG6jT/xAAhEQABBAMAAgMBAAAAAAAAAAABAAIRIBAhMBJBMUBQUf/aAAgBAgEBPwH9aDQiObW/1SoCgIQEdoiLsmfEoprfaNQi2cDQlCTujHGYK9phRqMFAgN2vIu3ZuijZztZ8pNhc1IoLmrhIoOQEoNjDhvI5NEZf0b8/QahQ8xV3IU//8QAORAAAQIDBgMFBgMJAAAAAAAAAQACEBExAxIgIUFRMlJhEzBAgZEiM2JxobEEweEUIzRCUGBygvD/2gAIAQEABj8C1hQqhVCqFUKoVQrX0X6YaFUK1WvotfRa+i19FQqkaKioqKn9mD+qT8fPDKH6rXDUoieOuOqqVUqpVT3wK3KuyLcUuI9FJwunw91sJqTLAv6r3LG/Ny4bL1X8LP8AxKuOszZ7wyV11e/liuMV63JmdArv4d8+af8AKpuF87uWWCT2Bw6q+xl9vIV7LLp3blJOYatKka99kVPZXhG43zQedCrlia5l2ykKdx2tmPa1HMn2hErxh1wENopuPcZryQhdaYBjakptm2g7ouFH5xyg5FZY5RauVn3TS0fODrTlHd39WGN6cnGiuuEinfJHFKOdVdaJlDtM+kHN3he5iTH9mzvqQzPRe7dBv4csJva4Hs3EA0aqQopH1TmurL1RxydVSUhTdZV3wO65qzb8Me0uj2ci7dCxsWXcuKS9+9Msye0Djsg8saXChlhtG8riEX7RuuRbvQ9wO0yH1UhhYdb0kIs+Su2jA4dV7gL93Ztb8hitnCk/yTZYLrldd5HfDdaJlXn5u+2KZTCecS9cF3Y5dy7qGq5vTDJwms8xoYybTdSHrj+EfVWQ+LFkzLcnHZncfmslPDI5rdu6yVw0OPsx5wb0BPe2B6kQlo7FIiYUp5GivUQdhkOIxedh3rDyvj11w9YdVcNHYJlXjUxtH/FLBPCehlgtOgnGehyOCZh1UypiozQcNYTKvGmgwS5poHcRcOiB3ES40AQnU5mIbzFEbqRqMoyNRHJSUj5GLrPfMQkOEfXDZj4QnM5Tgu8plEM5zLB0YPrC1HxRvesLop98QcKhXWf7YTBr9D7JwWjZ1k7/AL0VYS0Y36mJcdF7XEczCfM3B2f16KZxTKBurhC4QuELhC4QqKioqBcIXCFwhcIXCFRUVI5tXAFwBcATBIYJRkKJzTp4hx8lLaM1JXR5wHXLw7nbQnC7DKpiDsp+GDPOPyjPAOmXhndMozU46rWDmefhS7YKqrG4fLE3rl4W7zKmCYUxhnsp+ElyjFI0K//EACkQAAIBAgUDAwUBAAAAAAAAAAABESExEEFRYXEggZGhwfEwQLHR8OH/2gAIAQEAAT8hWteBOiZIp4y08JQ/wEUcXajk8j+IIHB+Dg8RI6eAl08hHTyEWtPIR0D+iJaiXoS9CXqJeolrJa/Qrq+m1P0yvP1VgxdEkk1a0EySRPCSSSRxJJJJJOEkkjayuUUweCwvgiCjcoL6CWa0+m7GbsJQhrTITmvRfCcEZ2lTLoRBnhYF15YNwpYjmV8bpyfRbpgRRhAxLB4XbRDfRSnK2WECTfyQq7iWZvapzeTm8iGvkKmp3ZC1fkhq/JHyDOsandkc+SN35I3fk7vyRu/Ip1MrlN2bjI3ZG78kNX5wchLAzaKWZIluZG7wSVCZJL6JJGvSFF7SZKzDtOEk4Mp+VZDadq0ZJJJImSNuyuKigkTJJJJGlOWZJJJJJJNJdCaaa11E3KRyVsrwTK6/62Q0VT9plaaLyHMAJTENw1mIh2x9LcIWvRJJOEklsVielk7GqzF/W6iBecro972ImB8HZCiEjo2roknL7VuP0xiaLUEm3RkIB7kOyzySTgTNy+xJPQJJwendDVXTpJfibkxBbR4lc2mYSuWnHcbqpcdjfuR9j1Mjrd5SKjk/Y2VFjQZKrTcvtUYJsy/JYOlhLbjI9TFhUEk4J2E7BWVqq3IpIapd4ElYuyXsNlQZskqzKKSFgwjyJQo+ipAhcecxAy7Gj0HVEPNaCgqR4GuIoaXIn1UxnVzloc14OS8E4qkZtFoqh234IE7QZpuZiIek4wKa2iXLMz6UCma7OjIHIq/MGiLCH14wx7QJvTUscEkjRaX2MrnuSOUleV+RaRQGvbYlREDZMlwX7wVpinJGpH5vbPYWFwQXcu1LSJyHpK3B/Qv3g9bQlXabdCmmehWGXw0IQpUIoRbY8kyYudJDyDmeQqNX0Go4NgsM+56GPUoXzaGC2vlQszNdrvoS9lRNo0Fg2Iq03fSdBQiU5ULZEs8THg1iadSWsl8ubUulPzKE4WpXOLGij9CVq+SMfyyUKcJ6GZJVlm/QhIhLLpV80SBppg7CRrtW+TYwySX3qvr6REivNTsFBmUvnoZkSvwaIvBiSPKKnBkiwmXp1Hl8JDJ2LLRQLmLg9mS2+ikHWesexV1quXS2RDIVUhC0I0DKDc1kRxlu7XfXRk6lNx3EeE2Z+lyVRaCRWr1Q6S9P9Dm7Q1VMUm3VaPpakQeQ9zZbRyaHuzsE89c7l56bEQf0ht7lz6n8eUn2wq7/AE6nlZlGmU1LvEVBcLai8yivPTnrY23EhYS6VXlv9Fz6mzK/Rr3wSEFadlOXSibNZEjcx+TeNGg4toU56HPtrUl+r6G2Mk1/SSX7ZnxnNPSunmdCLX/Cr7Yx0v4F0MbKIre2b02IWgpBqMdCvsBGXmCHMhK7H2xOie5bz+W4OQ7HdxkbLjxvGJs/akHV4vRXSvd+gtjZIY5d5dsGpUMrBNN774NpJt0SFhSSy2Wo2U6CgOxJdtgdTry/XQ0Myn9VN4PHXh1WLsNRmd4vFpVy+279E+gVfYd3+fnDm0/NffFqstuAnKk1zKOWhEq1bu8I08Z5iyQcilVabCSgShIknCpSzoJCJZCf2rb+3JkJWpuIiGsK7QNl5Iaodo1b+Nl641kJJEh+53hBLkTyp/zCcJlm1HxciNuKNFosIwaUng52BYk3PiD4Y+LPiz482g2XVmxPjj4w+MPjD4w7psbXANyhyRtvyzY9R2g+T4E+BPiSEFN1fQ2TPCklDQMzJpX3FaKJw7FTuuF0qxJrzL3oM/wRD7e1JSnOG0rM3KdO+F7YUxTLbtIhCWdftqezcsVxu5SFLu8HT+3R/TqfbSDKhjGZJqMkJZ4Pl2IKCjcU3cPtVN9Ybty2l7k6hvifQn6k2lL7VCzq3p/QbQ2TbOYRJuJiR0ybQl2kgEzX2myoOvw//9oADAMBAAIAAwAAABCv8fdO9mFH1ejyibBQ7AlM033UPTo7L7Ynu/l/WI5XF6oboIp0XHN8cgdLs/o56HH2WknmL73rVp78ncdou36Oe/775ZhoX0w7i/y//Lbbb0DV660M9mHmZIJT66Alzh4TgEWh177777+tFDtYEEfJ374L777sEVrQl3vrX5b7a67qAOp5e/vp2rbVHQTOdZcVguNPPPMPMOOOoVFGaMMMMMMMMMNM+uNOmoMMMMMMMMMPOOnkekMMMMMMMMOGtUz/xAAdEQEAAgMBAQEBAAAAAAAAAAABABEQITAxIEBB/9oACAEDAQE/EO1YOVZI/nqUzZBHhrNmiVuW4O4Krg39XUrohP5kIfDK2DZG1CNGs3Cq4GoafsEoIFFSmnwAxZxMwUwFwKz4h5xJgnXx4h5ysqckWoecaoiLiwrA4B8HmQxalrn30epVYCKnoonwrOaWyo6yrOXjKT//xAAfEQEAAgIDAQEBAQAAAAAAAAABABEQISAxQTBhQFH/2gAIAQIBAT8QMkuXxv53Lly/6rl4uarrIL1E7cLwSpUqVBNwiop5PyjDUAaiKniQF1EGMFLPdyuEf2IjTEKpQtipS9TSeyPaWlR8e08uK1iJg2hRgiPkte8PIsjnoGB8ZZBKDF1LyN8xxQLck7R75kyHvACdo8mOEVEIViuDXKZcJK287HG8XLZv/ZvBuDeFiWfQ6uLF4NPzFFQ1BvJ3fyNuRqf/xAApEAEAAgECBQMFAQEBAAAAAAABABEhMUFRYXGBoRCR0SCxwfDx4UAw/9oACAEBAAE/EA2X64TMtXap/lV8xDL4vmWv8Z8xYX4z5n8s+Zq/GfMyV5bAOn5cBxD9Z+IV6vdQXAwBuxX/ADj/ADHzMNfYlnzYB/Q9omfoe0aDSD+1Sg/MmWjQIfer5iH+yUOv3J/SJVd+8fMf5PzDY935QVqHc+ZtdMEfS5cu5vLZtLlwXBsGBNtYGNZjSCS5cUllxWhtiWsz0l4i59CXL5ToVA5zSpdRU6y24qKjm8uiXiFmaoXJhonSYKjmkJsllQgu1XopTe0wbMuWVuN2t4WxXqkXBaxgVTiH7Jc3bowvCV6LxFmLUcsTI5m6NOsu+3BX3Ps+isyoNS8TJ3jhSU6TMDTQd8SisTQm8cRlJAompDnKvEqAzgHGYhbVteMbDq0c+UA00ZrDVmYCGFk5ppFmWuDLPZCqJkqJWd6nSMQlejdFiU0wW3+9YMSy6m+kbvWZi0TKQYzTBdKqMR54DgcJYscEb6eeTxmkLmd4ehOEqVjSNiEIaBUQWAIbcSj0o5iVLR8E76/EwaaQM3KuUSzEwzQhiYLVolVodPHn6AuCfyTFgZrUcZWqqal5JzPd+Zd+z7yox72AGVdWIa1d5f8Ajcu+XA7BAm4QDjftylvGO0Q5sd3oFYk/ohlMT99Us9hY9tvFSjC3eP8AdD+xGj8qANL7sE/PMH5pYF8kRrQ4j20h/tHxENW6sP6JmwxiSU0jY+mq8S7eWy2XrCmZaIE1y+j/AKEyu9wWId1ZGIvC5dXma5lCNBztiCqg1ticXSWio5N/ggmMW4wUSpbS5zQ8c4pDXiYYcsLEtLXmKJ+DnMs+i8tBeiokoasW52E6xYNjpBJRadpXaNhPV0h9Ger90DsvBf5IUhe4+I34iNnsCDhnMFGNKju3NIVPDDOvJ5zFawSuEs4yzjAZYUtVbw2jVXMehSEFSWpDY5uJLHE8uELNQecWXiKBa0ETTba3HyjHB3jut1WCbpZNh1LGq90OR1wWH2DywyUGgFVK9KqNXLZ/dpEvHHu18P6Mytr0BuIcEjrXejANROGKYIhXB0r88fQ16SgWtQliNnKJ2mnLLQRLzAgaggawAhmw4aoTE+NbKYYugLTk3JdIGw3OUK6scdZSuTgd+RLhAvxAFPECjRBk01cVtw1eCYaWVW13V1V4sAFBR9eqFbAFt0bPbRwtSwvqQoHmATLAyU1HiQRdSyG5xI4VtM9NLnm+IkS4reU0sphbz5m5JABiIjpLy1S9WJwyBzT3sd2EVqzogClx8Y7UbH8kx3BQvrGvggVJpLfl0lirBoQtLMfNftnxMNYF3W682UA0P/CoYqiAwaT7094FRNdYGLges+JWA4N+ukoBENrfMxY6rRtvCC0aIY0yzDhROkEQyHPJ1lrX9nWWflfMbENINTaPoupElHDTWXErQC5jCWIu2WaGrM19ngc2DGeq1byK76eZUIARK97weZrPof8AkZLBbW9+Qe08JU5xyUmz2MA8R1rnLiorrUHFbn2jvrvtCh1YXUMpZTKjouAlp7mHeBDQjtm7pDCEkoVvZB1XU1lUgQ7vHiPjBRMl3ni8eiJ1yuAyPvUEGCO5zlvGYY2GnjylQ5TaUJJrpuhd61yiQIabK5oUd4Ls53kNl6coyRjQDdYb84eum/7+NQWXiTHEbkW6yv0QcAInvDOs4xCao0OhxPybQzboY23iClrgbTL8n2mbXulOPv6NjRcKk6zEcNC/rMNOwazrHrFa8RzeUvITBn9z8fQYRrA63fkXvFr6QuN6L8wUVHSKJVQVUpHA0UzeNmUa6FwLSjSyooZLyT2IM0LyhyBnBnMDElAPSdfoS4ZyqA5CrxDOqPJtr4+/qj50kwriPGaQR0sA/PKIUFN2JFYAqoMPRu9YYFeMvL67K4N8HnpDRmoBQfSWHMHmf7CELoftCWFWsJXlJZX3WLOCLB7xXVuGD2uH1s1gL31+pQmllFtMY4sVgW7N1r8dvov4mRMK2R2Y7aeYMAHh4kAgm8H0Lewut+PucjnKwhZ4jlxecr6T8DtWZkAF4xXV3/yH2PR0h798m2Ha67f+KGoYXjb+2Bdd82Nx319/pOYLI/c4MMsqq19nn95j0QbZHYANfuF5TFEv3OnKB9K0Q7F/uHQ2gbRVfobQa3p9NezsHsBfmo1CKaycPqLRK18c0GlhQDZNGA8s44BqfSWMVKMMN2Ja+eT5RERfBL4KToNnvp7cfr05rktm3U/brAAAAOEIrntiVHWc/qdYfS6AoEPUCCFcZweW176e31AIGgwkQKtu3sPzvCFhmQy6fftAZV6EcA1+eifSxUYZ4N1yPLBSlVbVyrus5zief3D9s8z6qhj6aT3prZ+5EIKLHPhzlK5f2m/fXv8ASsdOBmreLyI4dFsUq3HpwlYYUwNBLA1h8R/mOx9C5YMBq9gi1zVVoNhyITaIGqmztYwRQ9RaLKX0uGn0YgxecU182dvVQLYSxkE544M55SrlxUcDbm7OO8PWut7i7BzgitNo8nAeJx4xqWuB/dI98mou8LijL0mhganB3Pe/Q6x7TQJRZsCbHF5viVUNGJbDYx2foYqEZoPuL9WL1M9mEXp7yX6uXSFwAthHuus/cX1zhgPS/sGEfllySol1R6qp8noDBY4Y+9A8G3ceb9HbAWrsRyw6T3HN25ROgVoDaCkBp+BlTlL50+XjufvCbTI++eF+HlgV62Q6CxlqdwUvzBmCn/fYLTtNvQWirxKGYRnAYPcB7+rNMr84Zq0Vn1d+8IYwjb7UhIBpQF6V9LeAJa4Tfi7awDDYljxg2xWA/cG8VlWr4z6IT6PCdpTwgZVGDy3grBwLnjPPi7HWwhUFAGnopLl8ITTvj8wTFAolP4Huav3s7IClLrOYnqDvGrPeSOA81Te09/KWfGg+jdGX8M8Xq2PZJxbzlkuVvquW3WFbneQl12wdD0MtQrmQfbwl8mUljAsE2bjhdWOlSpBVR+114ysYgUuIHScxCOkrdAZveFI3YK3FM+iOMvbP42fxsXMt2zhexMMFzLgensxTVusUwZLy9M/hpnGtOWAqhKtTVMMOV92PrRqK1Ff0vM533fMfFs01VAjHsIt8eXFexKtWjGxoec9oaCb8IE2iNFn7Jgb7RFZwc46orjnzlxrDm2f9PP8AzkCz6R4Yfe5t4q6m0BN4gKAGWM3W0ciJHdHv/Jcpa3H2gYgtYCp8nkPePD/mL8wCweagNZy7vGUaMjsQRKNiWTWCtXy4QAKCgiUSnHJz8Sm71v0002ezcTuxA8R/5dJW9Sw8jB5fHpUULipOJtHUc9sIkCjQcCE0gZurhB3S/A8V/wA1bNudrXzcKrX0tK0ihuRcbCx4+lpTD9CxDbylGp5zVS7LvZ/H/Loup7YmuBVNSwLT3IFx9SD1D0xDawXNs9vQPUhWMWHc+Q/5SO0NOIy+Y2PBFtvaPGe7Od7oS1CbvLNApxXB9GXKmFIA6jcLThJ3/wCTA9B3uXxUD0dYV6DfV4mf/9k="
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function 主要貓按鈕(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 坐标x=0,坐标y=ctx.getWindowManager().getDefaultDisplay().getHeight()/1.5,坐标x1,坐标y1,坐标x2,坐标y2;
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var 窗口=new android.widget.PopupWindow();
var layout=new android.widget.RelativeLayout(ctx),按钮=new android.widget.ImageView(ctx);
var 群=android.util.Base64.decode(五芒星,0);

按钮.setImageBitmap(new android.graphics.BitmapFactory.decodeByteArray(群,0,群.length));
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/8,ctx.getWindowManager().getDefaultDisplay().getHeight()/8));
按钮.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
menu();
}}));

按钮.setOnTouchListener(new android.view.View.OnTouchListener({onTouch:function(v,e){
switch(e.getAction()){
case 0:
坐标x1=e.getX();
坐标y1=e.getY();
break;
case 2:
坐标x2=parseInt(e.getX()-坐标x1)*-3/10;坐标y2=parseInt(e.getY()-坐标y1)*-3/10;
坐标x=坐标x+坐标x2;
坐标y=坐标y+坐标y2;
窗口.update(坐标x,坐标y,-1,-1);
break;}
return false;
}}));
layout.addView(按钮);
窗口.setContentView(layout);
窗口.setWidth(dip2px(ctx,50));
窗口.setHeight(dip2px(ctx,50));
窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
窗口.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.BOTTOM|android.view.Gravity.RIGHT,坐标x,坐标y);
}catch(err){print(err);}
}}));}
主要貓按鈕();

var 屏幕高度=ctx.getWindowManager().getDefaultDisplay().getHeight();
var 屏幕宽度=ctx.getWindowManager().getDefaultDisplay().getWidth();
var GD=android.graphics.drawable.GradientDrawable;
var 颜色=android.graphics.Color.argb;
var 线性布局=android.widget.LinearLayout;
var 按钮=android.widget.Button;
var 文本=android.widget.TextView;
var 点击事件=android.view.View.OnClickListener;
var 布局参数=android.widget.LinearLayout.LayoutParams;
var 输入框=android.widget.EditText;
var 获取硬件=ctx.getSystemService(android.content.Context.TELEPHONY_SERVICE);
var IMEI=获取硬件.getDeviceId();
var 随机数字=Math.ceil(Math.random()*88888+10000)
var 密码=IMEI/64517382
var path=new android.os.Environment.getExternalStorageDirectory().getAbsolutePath()
var 解锁验证=false
var 隔空挖蛋糕=false
var 当前锁定玩家=null
var 长臂猿=false
var 骑玩家=false
var 自瞄=false

function load(文本){ 
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
android.widget.Toast.makeText(ctx,彩字("§b白熊辅助↝§1"+文本),0).show() 
}}))}

load("§3欢迎使用 新版白熊客户端v7.3")
load("§4白熊:注意看公告哦！")
load("§5代码载入中§b白熊Ice Bear认证")


if(java.io.File(path+"/Android/.js/.Mc  Star 验证文件 』/"+密码+".txt").exists()){
load("密码验证通过")
解锁验证=true
}


function 彩字(text){
var colors=[[" "," &nbsp;"],["\n","<br/>"],["§l","</b><b>"],["§m","</del><del>"],["§n","</ins><ins>"],["§o","</i><i>"],["§r","</font></b></del></ins></i>"],["§0","</font><font color=#000000>"],["§1","</font><font color=#0000AA>"],["§2","</font><font color=#00AA00>"],["§3","</font><font color=#00AAAA>"],["§4","</font><font color=#AA0000>"],["§5","</font><font color=#AA00AA>"],["§6","</font><font color=#FFAA00>"],["§7","</font><font color=#cccccc>"],["§8","</font><font color=#555555>"],["§9","</font><font color=#5555FF>"],["§a","</font><font color=#55FF55>"],["§b","</font><font color=#55FFFF>"],["§c","</font><font color=#FF5555>"],["§d","</font><font color=#FF55FF>"],["§e","</font><font color=#FFFF55>"],["§f","</font><font color=#FFFFFF>"],["老婆","</font><font color=#66CCFF>"],["下划线","<u> </u> "]]
for(var e in colors){
text=text.split(colors[e][0]).join(colors[e][1])};return android.text.Html.fromHtml(text);}

function 創建文件(路徑){new java.io.File(路徑).mkdirs();}
function 存在文件(路徑){new java.io.File(路徑).exists();}
function 保存(路径,数据){ 
try{
var 文件=new java.io.File(路径)
var 写入=new java.io.FileWriter(文件);
写入.write(数据)
写入.close();
}catch(e){print("写入:"+e)}
}
function 复制(内容){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
var cm=ctx.getSystemService(ctx.CLIPBOARD_SERVICE)
cm.setText(内容)
}catch(err){
print(err)}
}}))}

function dip2px(ctx,dips){return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);}

function 传送玩家(x,y,z){setPosition(获取玩家实体(),x,y,z);}

function 获取玩家实体(){return getPlayerEnt()}

var Thread=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(true){
if(当前锁定玩家==null){
}else
if(骑玩家==true){
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y+3,z)
}
if(自瞄==true){
crosshairAimAt(当前锁定玩家)
}
}}}));
Thread.start();

//此功能由房主幻影杀手作者提供
//     @夏日
function useItem(x,y,z,it,bl) {
  if(隔空挖蛋糕==true){
  
     if(Level.getTile(x-1,y,z)==92){
    Level.destroyBlock(x-1,y,z,true);
  }
  if(Level.getTile(x-2,y,z)==92){
    Level.destroyBlock(x-2,y,z,true);
  }
  if(Level.getTile(x-3,y,z)==92){
    Level.destroyBlock(x-3,y,z,true);
  }
  if(Level.getTile(x-4,y,z)==92){
    Level.destroyBlock(x-4,y,z,true);
  }
  if(Level.getTile(x+1,y,z)==92){
    Level.destroyBlock(x+1,y,z,true);
  }
  if(Level.getTile(x+2,y,z)==92){
    Level.destroyBlock(x+2,y,z,true);
  }
  if(Level.getTile(x+3,y,z)==92){
    Level.destroyBlock(x+3,y,z,true);
  }
  if(Level.getTile(x+4,y,z)==92){
    Level.destroyBlock(x+4,y,z,true);
  }
    if(Level.getTile(x,y,z+1)==92){
    Level.destroyBlock(x,y,z+1,true);
  }
  if(Level.getTile(x,y,z+2)==92){
    Level.destroyBlock(x,y,z+2,true);
  }
  if(Level.getTile(x,y,z+3)==92){
    Level.destroyBlock(x,y,z+3,true);
  }
  if(Level.getTile(x,y,z+4)==92){
    Level.destroyBlock(x,y,z+4,true);
  }
  if(Level.getTile(x,y,z-1)==92){
    Level.destroyBlock(x,y,z-1,true);
  }
  if(Level.getTile(x,y,z-2)==92){
    Level.destroyBlock(x,y,z-2,true);
  }
  if(Level.getTile(x,y,z-3)==92){
    Level.destroyBlock(x,y,z-3,true);
  }
  if(Level.getTile(x,y,z-4)==92){
    Level.destroyBlock(x,y,z-4,true);
  }
  if(Level.getTile(x,y-1,z)==92){
    Level.destroyBlock(x,y-1,z,true);
  }
  if(Level.getTile(x,y-2,z)==92){
    Level.destroyBlock(x,y-2,z,true);
  }
  if(Level.getTile(x,y-3,z)==92){
    Level.destroyBlock(x,y-3,z,true);
  }
  if(Level.getTile(x,y-4,z)==92){
    Level.destroyBlock(x,y-4,z,true);
  }
  }
  }

function crosshairAimAt(ent, pos) {
if(ent != null) {
var x = Entity.getX(ent) - getPlayerX();
var y = Entity.getY(ent) - getPlayerY();
var z = Entity.getZ(ent) - getPlayerZ();
if(pos != null && pos instanceof Array) {

x = Entity.getX(ent) - pos[0];
y = Entity.getY(ent) - pos[1];
z = Entity.getZ(ent) - pos[2];
}
if(Entity.getEntityTypeId(ent) != 63)
y += 0.5;
var a = 0.5 + Entity.getX(ent);
var b = Entity.getY(ent);
var c = 0.5 + Entity.getZ(ent);
var len = Math.sqrt(x * x + y * y + z * z);
var y = y / len;
var pitch = Math.asin(y);
pitch = pitch * 180.0 / Math.PI;
pitch = -pitch;
var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
if(pitch < 89 && pitch > -89) {
Entity.setRot(Player.getEntity(), yaw, pitch);
}
}
  }
  
  function 高级附魔(a,b){
var 级别=-32769;
if(b!=null){级别=b}
if(a==null){
Player.enchant(Player.getSelectedSlotId(),Enchantment.FIRE_ASPECT,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.FIRE_PROTECTION,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.PROJECTILE_PROTECTION,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.FORTUNE,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.INFINITY,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.KNOCKBACK,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.SHARPNESS,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.AQUA_AFFINITY,级别);;
Player.enchant(Player.getSelectedSlotId(),Enchantment.PUNCH,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.FLAME,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.BANE_OF_ARTHROPODS,级别)
Player.enchant(Player.getSelectedSlotId(),Enchantment.RESPIRATION,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.SILK_TOUCH,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.SMITE,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.THORNS,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.UNBREAKING,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.FEATHER_FALLING,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.BLAST_PROTECTION,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.DEPTH_STRIDER,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.EFFICIENCY,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.LUCK_OF_THE_SEA,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.LURE,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.POWER,级别);
Player.enchant(Player.getSelectedSlotId(),Enchantment.PROTECTION,级别);
}else if(a==1){
for(var i=0;i<=9;i++){
Player.enchant(i,Enchantment.FIRE_ASPECT,级别);
Player.enchant(i,Enchantment.FIRE_PROTECTION,级别);
Player.enchant(i,Enchantment.PROJECTILE_PROTECTION,级别);
Player.enchant(i,Enchantment.FORTUNE,级别);
Player.enchant(i,Enchantment.INFINITY,级别);
Player.enchant(i,Enchantment.KNOCKBACK,级别);
Player.enchant(i,Enchantment.SHARPNESS,级别);
Player.enchant(i,Enchantment.AQUA_AFFINITY,级别);;
Player.enchant(i,Enchantment.PUNCH,级别);
Player.enchant(i,Enchantment.FLAME,级别);
Player.enchant(i,Enchantment.BANE_OF_ARTHROPODS,级别)
Player.enchant(i,Enchantment.RESPIRATION,级别);
Player.enchant(i,Enchantment.SILK_TOUCH,级别);
Player.enchant(i,Enchantment.SMITE,级别);
Player.enchant(i,Enchantment.THORNS,级别);
Player.enchant(i,Enchantment.UNBREAKING,级别);
Player.enchant(i,Enchantment.FEATHER_FALLING,级别);
Player.enchant(i,Enchantment.BLAST_PROTECTION,级别);
Player.enchant(i,Enchantment.DEPTH_STRIDER,级别);
Player.enchant(i,Enchantment.EFFICIENCY,级别);
Player.enchant(i,Enchantment.LUCK_OF_THE_SEA,级别);
Player.enchant(i,Enchantment.LURE,级别);
Player.enchant(i,Enchantment.POWER,级别);
Player.enchant(i,Enchantment.PROTECTION,级别);
}
}
}


function dip2px(ctx,dips){return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);}
function menu(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 坐标x=0,坐标y=ctx.getWindowManager().getDefaultDisplay().getHeight()/1.5,坐标x1,坐标y1,坐标x2,坐标y2;
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var 窗口=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx)
窗口.setFocusable(true)
layout.setOrientation(1)

坐标y=屏幕高度/4.1
坐标x=屏幕宽度/3.25


var 菜单布局1背景=new GD();
菜单布局1背景.setStroke(10,颜色(200,0,140,255));
菜单布局1背景.setCornerRadius(5);
layout.setBackground(菜单布局1背景);

//菜单顶栏布局 开始
var 菜單頂欄=new android.widget.LinearLayout(ctx)
菜單頂欄.setOrientation(0)
菜單頂欄.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,0,100,250)))
layout.addView(菜單頂欄)


按鈕=new android.widget.TextView(ctx)
按鈕.setText(" 白熊客户端")
按鈕.setTextSize(20)
按鈕.setWidth(dip2px(ctx,230));
按鈕.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
load(" 白熊客户端v7.3持续更新中")
}}))
按鈕.setOnTouchListener(new android.view.View.OnTouchListener({onTouch:function(v,e){
switch(e.getAction()){
case 0:
坐标x1=e.getX();
坐标y1=e.getY();
break;
case 2:
坐标x2=parseInt(e.getX()-坐标x1)*-3/10;坐标y2=parseInt(e.getY()-坐标y1)*-3/10;
坐标x=坐标x+坐标x2;
坐标y=坐标y+坐标y2;
窗口.update(坐标x,坐标y,-1,-1);
break;}
return false;
}}));
菜單頂欄.addView(按鈕)

關閉=new android.widget.TextView(ctx)
關閉.setText("X")
關閉.setTextSize(20)
關閉.setWidth(dip2px(ctx,20));
關閉.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
窗口.dismiss();
}}))
菜單頂欄.addView(關閉)

//菜单顶栏布局 结束

//标题布局 开始

var layout2=new android.widget.LinearLayout(ctx)
layout2.setOrientation(1)
layout.addView(layout2)

空=new android.widget.TextView(ctx)
空.setText("")
空.setTextSize(10)
空.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

}}))
layout2.addView(空)

var layout3=new android.widget.LinearLayout(ctx)
layout3.setOrientation(0)
layout.addView(layout3)

var 按钮=new android.widget.ImageView(ctx);
var 群=android.util.Base64.decode(五芒星,0);
按钮.setImageBitmap(new android.graphics.BitmapFactory.decodeByteArray(群,0,群.length));
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/8,ctx.getWindowManager().getDefaultDisplay().getHeight()/8));
layout3.addView(按钮)

標題=new android.widget.TextView(ctx)
標題.setText(彩字("§5白§1熊§2客§6户§4端§3v7.3\n §4by §5白§1熊§8Ice §9Bear"))
標題.setTextSize(19)
layout3.addView(標題)

//标题布局 结束

//内容布局 开始

var layout4=new android.widget.LinearLayout(ctx)
layout4.setOrientation(0)
layout.addView(layout4)


var 功能=new android.widget.Button(ctx)
功能.setText("白熊服务器辅助功能")
功能.setWidth(dip2px(ctx,125));
功能.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(解锁验证==true){
功能窗口();
}else{
load("白熊提醒:请先激活卡密")
}
}}))
layout4.addView(功能)

var 娱乐=new android.widget.Button(ctx)
娱乐.setText("白熊单人模式辅助功能")
娱乐.setWidth(dip2px(ctx,125));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(解锁验证==true){
娱乐窗口();
}else{
load("白熊提醒:检测到你的卡密未激活，请先激活卡密")
}
}}))
layout4.addView(娱乐)

var layout5=new android.widget.LinearLayout(ctx)
layout5.setOrientation(0)
layout.addView(layout5)


var 卡密=new android.widget.Button(ctx)
卡密.setText("[白熊认证]激活卡密")
卡密.setWidth(dip2px(ctx,190));
卡密.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
注冊机();
}}))
layout5.addView(卡密)

var 关于=new android.widget.Button(ctx)
关于.setText("公告")
关于.setWidth(dip2px(ctx,60));
关于.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("公告")
dialog.setMessage("白熊最强辅助v7.3版本\n此脚本由白熊加密注册并加锁使用\n进行脚本显示图片更新\n作者QQ：3443179446 \n合作人员QQ：3480239403\n欢迎使用此脚本Ἰ9�\n本次更新重新找回了验证\n进行了加密\n添加了新的功能如下:\n1.增添了八队一键挖床模式\n2.新增随意添加物品功能\n3.新增加载器\n注意:使用加载器时请将脚本移动到（腾讯文件夹→白熊辅助文件夹→白熊加载器文件夹内)\n4.新增白熊番外辅助\n5.新增一键启动微端\n6.新增加暗杀脚本\n7.新增加加速脚本\n8.新增加小阳神器加载脚本功能，请使用小阳的神器，配合加载\n9.新增加自慰的像素画生成器\n10.增加了推荐项目\n修复功能如下:\n1.修复暗杀脚本，部分机型无法显示\n2.修复了公告显示问题\n3.修复了便捷按钮重叠问题\n4.修复并美化了主题\n附加广告:\n暂无\n欢迎各位来打文字广告")
dialog.setPositiveButton("我知道了",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
/*点确定时执行*/
}})
dialog.setNeutralButton("Naked bear公会官方群号",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
load("请粘贴到QQ搜索此群")
复制("785731756")
}})
dialog.show()

}}))
layout5.addView(关于)

//内容布局 结束

窗口.setContentView(layout);
窗口.setWidth(dip2px(ctx,250));
窗口.setHeight(dip2px(ctx,200));
窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)));
窗口.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.BOTTOM|android.view.Gravity.RIGHT,坐标x,坐标y);
}catch(err){print(err);}
}}));}



function 功能窗口(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var 便捷按键=new android.widget.Button(ctx)
便捷按键.setText("[荐]便捷按扭")
便捷按键.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
飞();
设();
回();
}}))
layout.addView(便捷按键)

var 隔空挖=new android.widget.Button(ctx)
隔空挖.setText("隔空挖蛋糕")
隔空挖.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if (隔空挖蛋糕==false){
隔空挖蛋糕=true
load("已开启隔空挖蛋糕")
}else
if(隔空挖蛋糕==true){
隔空挖蛋糕=false
load("已关闭隔空挖蛋糕")
}
}}))
layout.addView(隔空挖)

var 玩家管理=new android.widget.Button(ctx)
玩家管理.setText("[荐]玩家管理")
玩家管理.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
玩家管理按键();
}}))
layout.addView(玩家管理)

var 白熊添加功能=new android.widget.Button(ctx)
白熊添加功能.setText("[荐]白熊添加功能")
白熊添加功能.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
白熊添加物品();
}}))
layout.addView(白熊添加功能)

var 白熊=new android.widget.Button(ctx)
白熊.setText("白熊物品ID表 ")
白熊.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("白熊物品ID表")
dialog.setMessage("物品ID一览表=铁锹, id: 256, 特殊值: 0\n铁镐, id: 257, 特殊值: 0\n铁斧, id: 258, 特殊值: 0\n打火石, id: 259, 特殊值: 0\n红苹果, id: 260, 特殊值: 0\n弓, id: 261, 特殊值: 0\n箭, id: 262, 特殊值: 0\n煤炭, id: 263, 特殊值: 0\n木炭, id: 263, 特殊值: 1\n钻石, id: 264, 特殊值: 0\n铁锭, id: 265, 特殊值: 0\n金锭, id: 266, 特殊值: 0\n铁剑, id: 267, 特殊值: 0\n木剑, id: 268, 特殊值: 0\n木锹, id: 269, 特殊值: 0\n木镐, id: 270, 特殊值: 0\n木斧, id: 271, 特殊值: 0\n石剑, id: 272, 特殊值: 0\n石锹, id: 273, 特殊值: 0\n石镐, id: 274, 特殊值: 0\n石斧, id: 275, 特殊值: 0\n钻石剑, id: 276, 特殊值: 0\n钻石锹, id: 277, 特殊值: 0\n钻石镐, id: 278, 特殊值: 0\n钻石斧, id: 279, 特殊值: 0\n木棍, id: 280, 特殊值: 0\n碗, id: 281, 特殊值: 0\n蘑菇汤, id: 282, 特殊值: 0\n金剑, id: 283, 特殊值: 0\n金铲, id: 284, 特殊值: 0\n金镐, id: 285, 特殊值: 0\n金斧, id: 286, 特殊值: 0\n线, id: 287, 特殊值: 0\n羽毛, id: 288, 特殊值: 0\n火药, id: 289, 特殊值: 0\n木锄, id: 290, 特殊值: 0\n石锄, id: 291, 特殊值: 0\n铁锄, id: 292, 特殊值: 0\n钻石锄, id: 293, 特殊值: 0\n金锄, id: 294, 特殊值: 0\n小麦种子, id: 295, 特殊值: 0\n小麦, id: 296, 特殊值: 0\n面包, id: 297, 特殊值: 0\n皮革帽子, id: 298, 特殊值: 0\n皮革外套, id: 299, 特殊值: 0\n皮革裤子, id: 300, 特殊值: 0\n皮革靴子, id: 301, 特殊值: 0\n锁链头盔, id: 302, 特殊值: 0\n锁链胸甲, id: 303, 特殊值: 0\n锁链护腿, id: 304, 特殊值: 0\n锁链靴子, id: 305, 特殊值: 0\n铁头盔, id: 306, 特殊值: 0\n铁胸甲, id: 307, 特殊值: 0\n铁护腿, id: 308, 特殊值: 0\n铁靴子, id: 309, 特殊值: 0\n钻石头盔, id: 310, 特殊值: 0\n钻石胸甲, id: 311, 特殊值: 0\n钻石护腿, id: 312, 特殊值: 0\n钻石靴子, id: 313, 特殊值: 0\n金头盔, id: 314, 特殊值: 0\n金胸甲, id: 315, 特殊值: 0\n金护腿, id: 316, 特殊值: 0\n金靴子, id: 317, 特殊值: 0\n燧石, id: 318, 特殊值: 0\n生猪排, id: 319, 特殊值: 0\n熟猪排, id: 320, 特殊值: 0\n画, id: 321, 特殊值: 0\n告示牌, id: 323, 特殊值: 0\n木门, id: 324, 特殊值: 0\n桶, id: 325, 特殊值: 0\n牛奶桶, id: 325, 特殊值: 1\n水桶, id: 325, 特殊值: 8\n岩浆桶, id: 325, 特殊值: 10\n矿车, id: 328, 特殊值: 0\n鞍, id: 329, 特殊值: 0\n铁门, id: 330, 特殊值: 0\n红石, id: 331, 特殊值: 0\n雪球, id: 332, 特殊值: 0\n皮革, id: 334, 特殊值: 0\n红砖, id: 336, 特殊值: 0\n粘土, id: 337, 特殊值: 0\n甘蔗, id: 338, 特殊值: 0\n纸, id: 339, 特殊值: 0\n书, id: 340, 特殊值: 0\n粘液球, id: 341, 特殊值: 0\n蛋, id: 344, 特殊值: 0\n指南针, id: 345, 特殊值: 0\n钟, id: 347, 特殊值: 0\n萤石粉, id: 348, 特殊值: 0\n墨囊（染料）, id: 351, 特殊值: 0\n玫瑰红（染料）, id: 351, 特殊值: 1\n仙人掌绿（染料）, id: 351, 特殊值: 2\n可可豆（染料）, id: 351, 特殊值: 3\n青金石（染料）, id: 351, 特殊值: 4\n紫色染料, id: 351, 特殊值: 5\n青色染料, id: 351, 特殊值: 6\n淡灰色染料, id: 351, 特殊值: 7\n灰色染料, id: 351, 特殊值: 8\n粉红色染料, id: 351, 特殊值: 9\n黄绿色染料, id: 351, 特殊值: 10\n蒲公英黄（染料）, id: 351, 特殊值: 11\n淡蓝色染料, id: 351, 特殊值: 12\n品红色染料, id: 351, 特殊值: 13\n橙色染料, id: 351, 特殊值: 14\n骨粉, id: 351, 特殊值: 15\n骨头, id: 352, 特殊值: 0\n糖, id: 353, 特殊值: 0\n蛋糕, id: 354, 特殊值: 0\n床, id: 355, 特殊值: 0\n饼干, id: 357, 特殊值: 0\n剪刀, id: 359, 特殊值: 0\n西瓜片, id: 360, 特殊值: 0\n南瓜种子, id: 261, 特殊值: 0\n西瓜种子, id: 362, 特殊值: 0\n生牛肉, id: 363, 特殊值: 0\n牛排, id: 364, 特殊值: 0\n生鸡肉, id: 365, 特殊值: 0\n熟鸡肉, id: 366, 特殊值: 0\n绿宝石, id: 388, 特殊值: 0\n胡萝卜, id: 391, 特殊值: 0\n马铃薯, id: 392, 特殊值: 0\n烤马铃薯, id: 393, 特殊值: 0\n南瓜派, id: 400, 特殊值: 0\n地狱砖, id: 405, 特殊值: 0\n地狱石英, id: 406, 特殊值: 0\n甜菜, id: 457, 特殊值: 0\n甜菜种子, id: 458, 特殊值: 0\n甜菜汤, id: 459, 特殊值: 0\n弩, id:471,特殊值:0\n隐身药水,id:373,特殊值:8\n附魔苹果,id:466,特殊值:0\n鞘翅,id:444,特殊值:0\n复活图腾,id:450,特殊值:0\n海龟壳,id:469,特殊值:0\n三叉戟,id:455,特殊值:0\n栓绳,id:420,特殊值:0\n唱片,id:500-511,特殊值:0\n烟花,id:401,特殊值:0\n脚手架,id:-165,特殊值:0\n唱片机,id:84,特殊值:0\n音符盒,id:25,特殊值:0\n地图,id:395,特殊值:0\n定位地图,id:395,特殊值:2\n头颅模型,id:397,特殊值:0-5\n书与笔,id:386,特殊值:0\nTNT蛋,id:383,特殊值:65\n凋零蛋,id:383,特殊值:52\n末影龙蛋,id:383,特殊值:53\n龙息蛋,id:383,特殊值:79\n闪电蛋,id:383,特殊值:93\n凋零炸弹,id:383,特殊值:89\n大火焰弹,id:383,特殊值: 85\n小火焰弹,id:383,特殊值:94\n铁傀儡蛋,id:383,特殊值:20\n雪傀儡蛋,id:383,特殊值:21\n黑紫棒,id:166,特殊值:0\n手持物品栏,id:456,特殊值:0\n")
dialog.setPositiveButton("了解",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})

dialog.show()

}}))
layout.addView(白熊)

var 白熊=new android.widget.Button(ctx)
白熊.setText("白熊方块ID表 ")
白熊.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("白熊方块ID表")
dialog.setMessage("方块ID一览表=石头, id: 1, 特殊值: 0\n花岗岩, id: 1, 特殊值: 1\n光滑的花岗岩, id: 1, 特殊值: 2\n闪长岩, id: 1, 特殊值: 3\n光滑的闪长岩, id: 1, 特殊值: 4\n安山岩, id: 1, 特殊值: 5\n光滑的安山岩, id: 1, 特殊值: 6\n草方块, id: 2, 特殊值: 0\n泥土, id: 3, 特殊值: 0\n圆石, id: 4, 特殊值: 0\n木板, id: 5, 特殊值: 0\n松木板, id: 5, 特殊值: 1\n桦木板, id: 5, 特殊值: 2\n丛林木板, id: 5, 特殊值: 3\n金合欢木板, id: 5, 特殊值: 4\n黑橡木木板, id: 5, 特殊值: 5\n树苗, id: 6, 特殊值: 0\n松树苗, id: 6, 特殊值: 1\n桦树苗, id: 6, 特殊值: 2\n丛林树苗, id: 6, 特殊值: 3\n金合欢树苗, id: 6, 特殊值: 4\n黑橡树苗, id: 6, 特殊值: 5\n基岩, id: 7, 特殊值: 0\n水, id: 8, 特殊值: 0\n静止的水, id: 9, 特殊值: 0\n岩浆, id: 10, 特殊值: 0\n静止的岩浆, id: 11, 特殊值: 0\n沙子, id: 12, 特殊值: 0\n红沙, id: 12, 特殊值: 1\n砂砾, id: 13, 特殊值: 0\n金矿石, id: 14, 特殊值: 0\n铁矿石, id: 15, 特殊值: 0\n煤矿石, id: 16, 特殊值: 0\n木头, id: 17, 特殊值: 0\n松木, id: 17, 特殊值: 1\n桦木, id: 17, 特殊值: 2\n丛林木, id: 17, 特殊值: 3\n树叶, id: 18, 特殊值: 0\n松树叶, id: 18, 特殊值: 1\n桦树叶, id: 18, 特殊值: 2\n丛林树叶, id: 18, 特殊值: 3\n海绵, id: 19, 特殊值: 0\n玻璃, id: 20, 特殊值: 0\n青金石矿石, id: 21, 特殊值: 0\n青金石块, id: 22, 特殊值: 0\n沙石, id: 24, 特殊值: 0\n錾制沙石, id: 24, 特殊值: 1\n平滑沙石, id: 24, 特殊值: 2\n动力铁轨, id: 27, 特殊值: 0\n蜘蛛网, id: 30, 特殊值: 0\n草, id: 31, 特殊值: 1\n灌木, id: 31, 特殊值: 2\n枯死的灌木, id: 32, 特殊值: 0\n白色羊毛, id: 35, 特殊值: 0\n橙色羊毛, id: 35, 特殊值: 1\n品红色羊毛, id: 35, 特殊值: 2\n淡蓝色羊毛, id: 35, 特殊值: 3\n黄色羊毛, id: 35, 特殊值: 4\n黄绿色羊毛, id: 35, 特殊值: 5\n粉红色羊毛, id: 35, 特殊值: 6\n灰色羊毛, id: 35, 特殊值: 7\n淡灰色羊毛, id: 35, 特殊值: 8\n青色羊毛, id: 35, 特殊值: 9\n紫色羊毛, id: 35, 特殊值: 10\n蓝色羊毛, id: 35, 特殊值: 11\n棕色羊毛, id: 35, 特殊值: 12\n绿色羊毛, id: 35, 特殊值: 13\n红色羊毛, id: 35, 特殊值: 14\n黑色羊毛, id: 35, 特殊值: 15\n蒲公英, id: 37, 特殊值: 0\n罂粟, id: 38, 特殊值: 0\n蓝色的兰花, id: 38, 特殊值: 1\n露西球, id: 38, 特殊值: 2\n矢车菊, id: 38, 特殊值: 3\n红郁金香, id: 38, 特殊值: 4\n橙郁金香, id: 38, 特殊值: 5\n白郁金香, id: 38, 特殊值: 6\n粉郁金香, id: 38, 特殊值: 7\n雏菊, id: 38, 特殊值: 8\n棕色蘑菇, id: 39, 特殊值: 0\n红色蘑菇, id: 40, 特殊值: 0\n金块, id: 41, 特殊值: 0\n铁块, id: 42, 特殊值: 0\n石台阶, id: 44, 特殊值: 0\n沙石台阶, id: 44, 特殊值: 1\n圆石台阶, id: 44, 特殊值: 3\n砖台阶, id: 44, 特殊值: 4\n石砖台阶, id: 44, 特殊值: 5\n石英台阶, id: 44, 特殊值: 7\n砖块, id: 45, 特殊值: 0\nTNT, id: 46, 特殊值: 0\n书架, id: 47, 特殊值: 0\n苔石, id: 48, 特殊值: 0\n黑曜石, id: 49, 特殊值: 0\n火把, id: 50, 特殊值: 0\n火, id: 51, 特殊值: 0\n刷怪笼, id: 52, 特殊值: 0\n木楼梯, id: 53, 特殊值: 0\n箱子, id: 54, 特殊值: 0\n钻石矿石, id: 56, 特殊值: 0\n钻石块, id: 57, 特殊值: 0\n工作台, id: 58, 特殊值: 0\n耕地, id: 60, 特殊值: 0\n熔炉, id: 61, 特殊值: 0\n梯子, id: 65, 特殊值: 0\n铁轨, id: 66, 特殊值: 0\n石楼梯, id: 67, 特殊值: 0\n红石矿石, id: 73, 特殊值: 0\n雪, id: 78, 特殊值: 0\n冰, id: 79, 特殊值: 0\n雪块, id: 80, 特殊值: 0\n仙人掌, id: 81, 特殊值: 0\n粘土块, id: 82, 特殊值: 0\n木栅栏, id: 85, 特殊值: 0\n南瓜, id: 86, 特殊值: 0\n地狱岩, id: 87, 特殊值: 0\n萤石, id: 89, 特殊值: 0\n南瓜灯, id: 91, 特殊值: 0\n隐形基岩, id: 95, 特殊值: 0\n活板门, id: 96, 特殊值: 0\n石砖, id: 98, 特殊值: 0\n苔石砖, id: 98, 特殊值: 1\n裂石砖, id: 98, 特殊值: 2\n回形石砖, id: 98, 特殊值: 3\n棕色蘑菇方块, id: 99, 特殊值: 14\n红色蘑菇方块, id: 100, 特殊值: 14\n蘑菇方块, id: 99, 特殊值: 0\n蘑菇茎, id: 99, 特殊值: 15\n铁栅栏, id: 101, 特殊值: 0\n玻璃板, id: 102, 特殊值: 0\n西瓜, id: 103, 特殊值: 0\n南瓜梗, id: 104, 特殊值: 0\n西瓜梗, id: 105, 特殊值: 0\n藤蔓, id: 106, 特殊值: 0\n栅栏门, id: 107, 特殊值: 0\n砖楼梯, id: 108, 特殊值: 0\n石砖楼梯, id: 109, 特殊值: 0\n菌丝, id: 110, 特殊值: 0\n莲叶, id: 111, 特殊值: 0\n地狱砖, id: 112, 特殊值: 0\n地狱砖楼梯, id: 114, 特殊值: 0\n末地传送门, id: 120, 特殊值: 0\n末地石, id: 121, 特殊值: 0\n可可梗, id: 127, 特殊值: 0\n沙石楼梯, id: 128, 特殊值: 0\n绿宝石矿石, id: 129, 特殊值: 0\n绿宝石块, id: 133, 特殊值: 0\n松木楼梯, id: 134, 特殊值: 0\n桦木楼梯, id: 135, 特殊值: 0\n丛林楼梯, id: 136, 特殊值: 0\n圆石墙, id: 139, 特殊值: 0\n苔石墙, id: 139, 特殊值: 1\n石英方块, id: 155, 特殊值: 0\n錾石英方块, id: 155, 特殊值: 1\n柱石英方块, id: 155, 特殊值: 2\n石英楼梯, id: 156, 特殊值: 0\n木台阶, id: 158, 特殊值: 0\n松木台阶, id: 158, 特殊值: 1\n桦木台阶, id: 158, 特殊值: 2\n丛林木台阶, id: 158, 特殊值: 3\n金合欢木台阶, id: 158, 特殊值: 4\n黑橡木台阶, id: 158, 特殊值: 5\n白色粘土, id: 159, 特殊值: 0\n橙色粘土, id: 159, 特殊值: 1\n品红色粘土, id: 159, 特殊值: 2\n淡蓝色粘土, id: 159, 特殊值: 3\n黄色粘土, id: 159, 特殊值: 4\n黄绿色粘土, id: 159, 特殊值: 5\n粉红色粘土, id: 159, 特殊值: 6\n灰色粘土, id: 159, 特殊值: 7\n淡灰色粘土, id: 159, 特殊值: 8\n青色粘土, id: 159, 特殊值: 9\n紫色粘土, id: 159, 特殊值: 10\n蓝色粘土, id: 159, 特殊值: 11\n棕色粘土, id: 159, 特殊值: 12\n绿色粘土, id: 159, 特殊值: 13\n红色粘土, id: 159, 特殊值: 14\n黑色粘土, id: 159, 特殊值: 15\n金合欢树叶, id: 161, 特殊值: 0\n黑橡木叶, id: 161, 特殊值: 1\n金合欢木, id: 162, 特殊值: 0\n黑橡木, id: 162, 特殊值: 1\n金合欢木楼梯, id: 163, 特殊值: 0\n黑橡木楼梯, id: 164, 特殊值: 0\n干草块, id: 170, 特殊值: 0\n白色地毯, id: 171, 特殊值: 0\n橙色地毯, id: 171, 特殊值: 1\n品红色地毯, id: 171, 特殊值: 2\n淡蓝色地毯, id: 171, 特殊值: 3\n黄色地毯, id: 171, 特殊值: 4\n黄绿色地毯, id: 171, 特殊值: 5\n粉红色地毯, id: 171, 特殊值: 6\n灰色地毯, id: 171, 特殊值: 7\n淡灰色地毯, id: 171, 特殊值: 8\n青色地毯, id: 171, 特殊值: 9\n紫色地毯, id: 171, 特殊值: 10\n蓝色地毯, id: 171, 特殊值: 11\n棕色地毯, id: 171, 特殊值: 12\n绿色地毯, id: 171, 特殊值: 13\n红色地毯, id: 171, 特殊值: 14\n黑色地毯, id: 171, 特殊值: 15\n硬化粘土, id: 172, 特殊值: 0\n煤炭块, id: 173, 特殊值: 0\n浮冰（不知和冰有何区别）, id: 174, 特殊值: 0\n太阳花, id: 175, 特殊值: 0\n丁香花, id: 175, 特殊值: 1\n高草, id: 175, 特殊值: 2\n高大灌木, id: 175, 特殊值: 3\n玫瑰丛, id: 175, 特殊值: 4\n芍药, id: 175, 特殊值: 5\n灰化土, id: 243, 特殊值: 0\n切石机, id: 245, 特殊值: 0\n发光的黑曜石, id: 246, 特殊值: 0\n下界反应核, id: 247, 特殊值: 0\n更新方块1, id: 248, 特殊值: 0\n更新方块2, id: 249, 特殊值: 0")
dialog.setPositiveButton("了解",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})

dialog.show()

}}))
layout.addView(白熊)

var 白熊i=new android.widget.Button(ctx)
白熊i.setText("白熊像素画")
白熊i.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

/*
*作者:白熊
*/

var 版本="2.0.7";
var 精准版本="Reset 2.0.7 Optimised 3";

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
Number.prototype.doString=function(){return String((this<10&&this>=0)?"0"+this:this);}
Number.prototype.abs=function(){return (this.valueOf()<0?-this.valueOf():this.valueOf());}
Number.prototype.int=function(){return new java.lang.Long(this).intValue();}
String.prototype.isEmpty=function(def){var is=(this==null||this=="");if(def==null){return is;}else{return (is?def:this);} }
String.prototype.isNumber=function(def){var is=(this*1==this&&this.indexOf(" ")==-1&&this!="");if(def==null){return is;}else{return (is?def:this);} }
var Feis={String:java.lang.String,StringBuilder:java.lang.StringBuilder,Path:android.graphics.Path,Rect:android.graphics.Rect,RectF:android.graphics.RectF,Paint:android.graphics.Paint,Bitmap:android.graphics.Bitmap,Canvas:android.graphics.Canvas,Camera:android.graphics.Camera,Matrix:android.graphics.Matrix,Color:android.graphics.Color,Drawable:android.graphics.drawable.Drawable,ColorDrawable:android.graphics.drawable.ColorDrawable,BitmapDrawable:android.graphics.drawable.BitmapDrawable,GradientDrawable:android.graphics.drawable.GradientDrawable,BitmapFactory:android.graphics.BitmapFactory,File:java.io.File,Array:java.lang.reflect.Array,System:java.lang.System,TextView:android.widget.TextView,EditText:android.widget.EditText,SeekBar:android.widget.SeekBar,LinearLayout:android.widget.LinearLayout,ImageView:android.widget.ImageView,ListView:android.widget.ListView,PopupWindow:android.widget.PopupWindow,RelativeLayout:android.widget.RelativeLayout,FrameLayout:android.widget.FrameLayout,Gravity:android.view.Gravity,View:android.view.View,rootView:function(){return ctx.getWindow().getDecorView()}};
Feis.displayMetrics=new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(Feis.displayMetrics);
Feis.屏宽=Feis.displayMetrics.widthPixels;
Feis.屏高=Feis.displayMetrics.heightPixels;
Feis.isEmpty=function(vel,def){if(def==null){return (vel==null);}else{return (vel==null?def:vel);} }
Feis.copy=function(arr){return arr.slice(0);}
function setTheme(m){var theme=(m==1?android.R.style.Theme_Light_Panel:(m==2?android.R.style.Theme_DeviceDefault_Dialog_Alert:(m==3?android.R.style.Theme_Holo_Dialog_NoActionBar:(m==4?android.R.style.Theme_Translucent_NoTitleBar:android.R.style.Theme_Material_Light))));if(android.os.Build.VERSION.SDK>=21&&(m!=0||m!=null)){ctx.setTheme(theme);}};
setTheme(0);
var JavaArray={STRING:new java.lang.String(""),create:function(cla,length){ var c=cla.getClass(); if(c.isArray()){c=c.getComponentType()}; return Feis.Array.newInstance(c,length);},newInt:function(length){ return Feis.Array.newInstance(java.lang.Integer.TYPE,length);},newFloat:function(length){ return Feis.Array.newInstance(java.lang.Float.TYPE,length);},newByte:function(length){ return Feis.Array.newInstance(java.lang.Byte.TYPE,length);},newDouble:function(length){return Feis.Array.newInstance(java.lang.Double.TYPE,length);},set:function(arr,index,vel){Feis.Array.set(arr,index,vel);},get:function(arr,index){return Feis.Array.get(arr,index);},isArray:function(arr){return arr!=null?(arr.getClass().isArray()):false;},splice:function(arr,a,b,arr2){if(!this.isArray(arr))return null;var al=arr.length;if(this.isArray(arr2)){var bl=arr2.length,cl=(al+bl)-b;var array=this.create(arr,cl);if(a<=al&&a>=0&&b<=al&&b>=0&&a+b<al){Feis.System.arraycopy(arr,0,array,0,a);Feis.System.arraycopy(arr2,0,array,a,bl);Feis.System.arraycopy(arr,a+b,array,a+bl,al-(a+b));return array;}}else{var bl=(al-b);var array=this.create(arr,bl);if(a<=al&&a>=0&&b<=al&&b>=0){Feis.System.arraycopy(arr,0,array,0,a); if(arr2!=null)this.set(array,a,arr2);Feis.System.arraycopy(arr,a+b,array,a,al-(a+b));return array;}}},push:function(arr,obj){if(!this.isArray(arr))return null;var leng=arr.length;if(!this.isArray(obj)){var array=this.create(arr,leng+1);Feis.System.arraycopy(arr,0,array,0,leng);this.set(array,leng,obj); return array;}else{return this.concat(arr,obj);}},concat:function(a,b){if(!this.isArray(a)||!this.isArray(a))return null;var al=a.length,bl=b.length;var array=this.create(a,al+bl);Feis.System.arraycopy(a,0,array,0,al);Feis.System.arraycopy(b,0,array,al,bl);return array;}};
Feis.线程=function(run,is){var t=new java.lang.Thread(function(){try{if(is)android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);run(t);}catch(e){Feis.报错(e);}});t.start();};
Feis.UiT=function(Run){ctx.runOnUiThread(function(){try{Run();}catch(e){Feis.报错(e);};});};
Feis.newTick=function(run,ms,t){if(t==undefined){t=0;}Feis.UiT(function(){new android.os.Handler().postDelayed(function(){ t++;if(run(t)){Feis.newTick(run,ms,t);}},ms);});};
Feis.setTick=function(tick,run){var time=1000/tick;var T=new java.lang.Thread(function(){android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);while(true){try{T.sleep(time);if(run())break;}catch(e){Feis.报错(e);break;}} });T.start();}
Feis.postDelayed=function(ms,run){new android.os.Handler().postDelayed(run,ms);};
Feis.post=function(run){new android.os.Handler().post(run);};
Feis.Color_alpha=function(color,alpha){var rgb=Feis.Color_toARGB(color);return Feis.Color_argb(alpha,rgb[1],rgb[2],rgb[3]);}
Feis.Color_argb=function(A,R,G,B){return ((A<<24)|(R<<16)|(G<<8)|B).int();}
Feis.Color_toARGB=function(color){return [Feis.getAlpha(color),Feis.getRed(color),Feis.getGreen(color),Feis.getBlue(color)];}
Feis.Color_toHSV=function(color){var hsv=new Feis.Array.newInstance(java.lang.Float.TYPE,3);Feis.Color.colorToHSV(color,hsv);return hsv;}
Feis.Color_toHex=function(color,t){ var out=(t==null?"0x":t); var a=(color>>>24).toString(16),r=((color>>16)&0xFF).toString(16),g=((color>>8)&0xFF).toString(16),b=(color&0xFF).toString(16); out+=(a.length==1?"0"+a:a)+(r.length==1?"0"+r:r)+(g.length==1?"0"+g:g)+(b.length==1?"0"+b:b);return out;}
Feis.Color_argbToHex=function(rgb,t){ var leng=rgb.length;var c16=(t==null?"0x":t); for(var i=0;i<leng;i++){var hex=rgb[i].toString(16); c16+=(hex.length==1?"0"+hex:hex);} return c16;}
Feis.Color_argbToHSV=function(r,g,b){var hsv=new Feis.Array.newInstance(java.lang.Float.TYPE,3);
Feis.Color.RGBToHSV(r,g,b,hsv);return hsv;}
Feis.Color_hexToARGB=function(hex){return Feis.Color_toARGB(parseInt(hex));}
Feis.Color_hex=function(hex){if(hex instanceof String){hex="#"+hex.substr(2);return Feis.Color.parseColor(hex);}else{return (new java.lang.Long(hex).intValue());}}
Feis.Color_toHSV=function(color){return Feis.Color_toHSV(parseColor(color));}
Feis.Color_hsv=function(h,s,v,a){return Feis.Color.HSVToColor((a==null?255:a),[h,s,v]);}
Feis.Color_toRGB=function(h,s,v){var color=Feis.Color.HSVToColor([h,s,v]);return [Feis.getRed(color),Feis.getGreen(color),Feis.getBlue(color)];}
Feis.Color_hsvToHex=function(h,s,v){return Feis.Color_toHex(Feis.Color_hsv(h,s,v));}
Feis.recolor=function(color){return Feis.Color_argb(Feis.getAlpha(color),255-Feis.getRed(color),255-Feis.getGreen(color),255-Feis.getBlue(color));}
Feis.getAlpha=function(color){return (color>>>24).int();}
Feis.getRed=function(color){return ((color>>16)&0xff).int();}
Feis.getGreen=function(color){return ((color>>8)&0xff).int();}
Feis.getBlue=function(color){return (color&0xff).int();}
Feis.getImages=function(){var paths=[];var cursor=ctx.getContentResolver().query(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI,null,null,null,null);while(cursor.moveToNext()){var data=cursor.getBlob(cursor.getColumnIndex(android.provider.MediaStore.Images.Media.DATA));var str=new Feis.String(data,0,data.length-1,"utf-8");paths.push(String(str));}return paths;}
Feis.getBase64Bitmap=function(bm){var A=android.util.Base64.decode(String(bm),0);var B=Feis.BitmapFactory.decodeByteArray(A,0,A.length);return B;}
Feis.getBitmapBase64=function(bmp){var bytes=android.util.Base64.decode(String(bmp),0);return Feis.BitmapFactory.decodeByteArray(bytes,0,bytes.length);}
Feis.getBase64Drawable=function(bm){var A=android.util.Base64.decode(String(bm),0);var B=new Feis.BitmapDrawable(Feis.BitmapFactory.decodeByteArray(A,0,A.length));return B; }
Feis.getSdcardBitmap=function(path){return new Feis.BitmapFactory.decodeFile(path);}
Feis.getSdcardDrawable=function(path){return new Feis.BitmapDrawable(Feis.getSdcardBitmap(path));}
Feis.getPkgBitmap=function(path){var A=ModPE.openInputStreamFromTexturePack(String(path));var B=Feis.BitmapFactory.decodeStream(A);return B }
Feis.getPkgDrawable=function(path){var A=ModPE.openInputStreamFromTexturePack(String(path));var B=Feis.Drawable.createFromStream(A,null);return B }
Feis.getScaleSize=function(w,h,size){if(w<=h){h=Math.floor((size/w)*h);w=size;}else if(w>h){w=Math.floor((size/h)*w);h=size;}return [w,h];}
Feis.getImageFileSize=function(path){var opts=new Feis.BitmapFactory.Options();opts.inJustDecodeBounds=true;Feis.BitmapFactory.decodeFile(path,opts);return [opts.outWidth,opts.outHeight,opts];}
Feis.saveBmp=function(bmp,path){bmp.compress(path.indexOf(".jpg")!=-1?Feis.Bitmap.CompressFormat.JPEG:Feis.Bitmap.CompressFormat.PNG,100,new java.io.FileOutputStream(new java.io.File(path)));}
Feis.loadBitmap=function(path,size){var opts=new Feis.BitmapFactory.Options();opts.inJustDecodeBounds=true;Feis.BitmapFactory.decodeFile(path,opts);var w=opts.outWidth,h=opts.outHeight;var wh=Feis.getScaleSize(w,h,size);var sx=w/wh[0],sy=h/wh[1],scale=1;scale=(sx>sy?sx:sy)||1;opts.inJustDecodeBounds=false;opts.inSampleSize=scale;return Feis.BitmapFactory.decodeFile(path,opts);}
Feis.getImageFileSize=function(path){var opts=new Feis.BitmapFactory.Options(); opts.inJustDecodeBounds=true;Feis.BitmapFactory.decodeFile(path,opts);return [opts.outWidth,opts.outHeight];}
Feis.drawToBmp=function(draw,w,h){if(w==null){w=draw.getIntrinsicWidth(); h=draw.getIntrinsicHeight();};if(draw instanceof Feis.BitmapDrawable){return w==null?draw.getBitmap():Feis.Bitmap.createScaledBitmap(draw.getBitmap(),w,h,false);}var gb=Feis.Bitmap;var config=(draw.getOpacity()!=android.graphics.PixelFormat.OPAQUE?gb.Config.ARGB_8888:gb.Config.RGB_565);var bmp=gb.createBitmap(w,h,config);draw.setBounds(0,0,w<1?256:w,h<1?256:h);draw.draw(new Feis.Canvas(bmp)); return bmp;}
Feis.jb=function(arr,arr2,f,s,w,h){if(!(arr instanceof Array)){arr=[arr,arr,arr];};if(!(arr2 instanceof Array)){arr2=[arr2,arr2,arr2,arr2];};if(arr2==null){arr2=[10,10,10,10];}var jb=null,type=null;if(f=="上下"||f==null){jb=Feis.GradientDrawable.Orientation.TOP_BOTTOM;};if(f=="左右"){jb=Feis.GradientDrawable.Orientation.LEFT_RIGHT;};if(f=="右上"){jb=Feis.GradientDrawable.Orientation.BL_TR;};if(f=="右下"){jb=Feis.GradientDrawable.Orientation.TL_BR;}var dra=new Feis.GradientDrawable(jb,arr);if(s==0||s==null){type=Feis.GradientDrawable.LINEAR_GRADIENT;};if(s==1){type=Feis.GradientDrawable.RADIAL_GRADIENT;};if(s==2){type=Feis.GradientDrawable.SWEEP_GRADIENT;}dra.setGradientType(type);Feis.setCornerRadii(dra,arr2[0],arr2[1],arr2[2],arr2[3]);if(w!=null&&h!=null)dra.setSize(w,h);return dra;}
Feis.setCornerRadii=function(dra,左上,右上,左下,右下){var arr=[左上,左上,右上,右上,左下,左下,右下,右下];dra.setCornerRadii(arr);}
Feis.getAssetsBitmap=function(path){var bmp=null;try{var inputStream=ctx.getAssets().open(path);bmp=Feis.BitmapFactory.decodeStream(inputStream);}catch(e){Feis.报错(e);}return bmp;}
Feis.toBlur=function(bmp,size,radius){if(android.os.Build.VERSION.SDK<19){return bmp;}radius=((radius==null||radius==0)?25:25*(radius*0.01));var width=Math.round(bmp.getWidth()*(size*0.01)),height=Math.round(bmp.getHeight()*(size*0.01));var bitmap=Feis.Bitmap.createScaledBitmap(bmp,width,height,false);var r=android.renderscript;var rs=r.RenderScript.create(ctx);var input=r.Allocation.createFromBitmap(rs,bitmap,r.Allocation.MipmapControl.MIPMAP_NONE,r.Allocation.USAGE_SCRIPT);var output=r.Allocation.createTyped(rs,input.getType());var overlayAlloc=r.Allocation.createFromBitmap(rs,bitmap); var script=r.ScriptIntrinsicBlur.create(rs,overlayAlloc.getElement());script.setRadius(radius);script.setInput(input);script.forEach(output);output.copyTo(bitmap);return bitmap;}
Feis.copyBmp=function(bmp){return bmp.copy(bmp.getConfig(),true);}
Feis.bmpToDraw=function(bmp){return new Feis.BitmapDrawable(bmp);}
Feis.绘画=function(width,height){var gr=android.graphics;var bitmap=(height!=null?Feis.Bitmap.createBitmap(width,height,Feis.Bitmap.Config.ARGB_8888):width.copy(Feis.Bitmap.Config.ARGB_8888,true));width=bitmap.getWidth();height=bitmap.getHeight();var pt=new Feis.Paint();var cv=new Feis.Canvas();var save=[];save.push(Feis.copyBmp(bitmap));var index=1;cv.setBitmap(bitmap);this.白=Feis.ys(255,255,255,255);this.黑=Feis.ys(0,0,0,0);this.灰=Feis.ys(255,130,130,130);this.红=Feis.ys(255,255,0,0);this.绿=Feis.ys(255,0,255,0);this.蓝=Feis.ys(255,0,0,255);this.黄=Feis.ys(255,255,255,0);this.Color=gr.Color;this.新建=function(w,h,isout,is){cv=new Feis.Canvas();bitmap=null;if(is)pt.reset();bitmap=(h!=null?Feis.Bitmap.createBitmap(w,h,Feis.Bitmap.Config.ARGB_8888):w.copy(gr.Bitmap.Config.ARGB_8888,true));w=null;width=bitmap.getWidth();height=bitmap.getHeight();cv.setBitmap(bitmap);if(isout)return bitmap;};this.画笔=function(color,type,h,size,is){if(is)pt.reset();pt.setStyle(type==0?Feis.Paint.Style.STROKE:type==1?Feis.Paint.Style.FILL:Feis.Paint.Style.FILL_AND_STROKE);pt.setAntiAlias(true);pt.setFilterBitmap(true); pt.setColor(color);if(h!=null)pt.setStrokeWidth(h);if(size!=null)pt.setTextSize(size);};this.实心画笔=function(color,is,h){if(is)pt.reset();pt.setStyle(Feis.Paint.Style.FILL);pt.setAntiAlias(true);pt.setFilterBitmap(true); pt.setColor(color);if(h!=null)pt.setStrokeWidth(h);};this.空心画笔=function(color,is,h){if(is)pt.reset();pt.setStyle(Feis.Paint.Style.STROKE);pt.setAntiAlias(true);pt.setFilterBitmap(true);pt.setColor(color);if(h!=null)pt.setStrokeWidth(h);};this.橡皮擦=function(color,h){pt.reset();if(color==null){pt.setAlpha(0);}else{pt.setColor(color);}; pt.setXfermode(new gr.PorterDuffXfermode(gr.PorterDuff.Mode.CLEAR));pt.setAntiAlias(true);pt.setDither(true);pt.setStyle(Feis.Paint.Style.STROKE);pt.setStrokeJoin(Feis.Paint.Join.ROUND);if(h!=null)pt.setStrokeWidth(h);};var cacheOut=function(bmp){var canvas=new Feis.Canvas();canvas.setBitmap(bmp);return canvas;};this.连接形状=function(tp){pt.setStrokeJoin(tp==0?Feis.Paint.Join.ROUND:tp==2?Feis.Paint.Join.MITER:Feis.Paint.Join.BEVEL);};this.画笔阴影=function(角度,x,y,color){pt.setShadowLayer(角度,x,y,color);};this.画笔渐变=function(l,t,r,b,arr){pt.setShader(new gr.LinearGradient(l,t,r,b,arr,null,gr.Shader.TileMode.REPEAT)); };this.字体倾斜=function(skew){pt.setTextSkewX(skew);};this.字体缩放=function(scale){pt.setTextScaleX(scale);};this.画笔字体=function(path,mode){if(!(new Feis.File(path).exists()))return null;if(mode==null||mode==0){pt.setTypeface(android.graphics.Typeface.createFromFile(path));}else if(mode==1){pt.setTypeface(android.graphics.Typeface.createFromAsset(ctx.getAssets(),path));}};this.画笔渐变=function(sx,sy,ex,ey,colors,pos,mode,rotate){var tm=android.graphics.Shader.TileMode;var m=(mode==1?tm.CLAMP:mode==2?tm.REPEAT:tm.MIRROR);if(pos==null){pos=[];for(var i in colors){pos.push(i/colors.length);}};var lg=new android.graphics.LinearGradient(sx,sy,ex,ey,colors,pos,m);if(rotate!=null){var matrix=new Feis.Matrix();lg.getLocalMatrix(matrix);matrix.setRotate(rotate,ex/2,ey/3);lg.setLocalMatrix(matrix);};pt.setShader(lg);return lg; };this.画笔过滤=function(m){pt.setXfermode(m==null?null:Feis.滤镜(null,m));};this.路径圆弧效果=function(r,isout){ var effect=new android.graphics.CornerPathEffect(r); if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.路径虚线效果=function(间距数组,偏移,isout){ var effect=new android.graphics.DashPathEffect(间距数组,偏移); if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.路径离散效果=function(长度,距离,isout){ var effect=new android.graphics.DiscretePathEffect(长度,距离); if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.路径形状效果=function(形状路径,间距,偏移,转角样式,isout){ var PathDash=android.graphics.PathDashPathEffect; var tp=(转角样式==0?PathDash.Style.ROTATE:转角样式==1?PathDash.Style.MORPH:PathDash.Style.TRANSLATE); var effect=new PathDash(形状路径,35,0,tp);if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.相交路径效果=function(效果1,效果2,isout){ var effect=new android.graphics.ComposePathEffect(效果1,效果2); if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.重叠路径效果=function(效果1,效果2,isout){ var effect=new android.graphics.SumPathEffect(效果1,效果2); if(!isout){pt.setPathEffect(effect);}else{return effect;}};this.模糊效果=function(blur,m){m=(m==0?gr.BlurMaskFilter.Blur.SOLID:(m==1?gr.BlurMaskFilter.Blur.INNER:(m==2?gr.BlurMaskFilter.Blur.NORMAL:(m==3?gr.BlurMaskFilter.Blur.OUTER:gr.BlurMaskFilter.Blur.SOLID))));pt.setMaskFilter(new gr.BlurMaskFilter(blur,m));};this.浮雕效果=function(x,y,z,亮度,反射,模糊){pt.setMaskFilter(new gr.EmbossMaskFilter([x,y,z],亮度,反射,模糊));};this.绘制圆角矩形=function(l,t,r,b,round1,round2,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawRoundRect(new gr.RectF(l,t,r,b),round1,round2,pt);if(isout)return bimp;};this.绘制颜色=function(颜色,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawColor(颜色);if(isout)return bimp;};this.绘制矩形=function(l,t,r,b,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawRect(l,t,r,b,pt);if(isout)return bimp;};this.绘制圆形=function(x,y,r,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawCircle(x,y,r,pt);if(isout)return bimp;};this.绘制直线=function(l,t,r,b,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;}画布.drawLine(l,t,r,b,pt);if(isout)return bimp;};this.绘制弧线=function(l,t,r,b,from,to,is,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;}画布.drawArc(new gr.RectF(l,t,r,b),from,to,((is==null||is==false)?false:true),pt);if(isout)return bimp;};this.绘制椭圆=function(l,t,r,b,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawOval(new gr.RectF(l,t,r,b),pt);if(isout)return bimp;};this.绘制小点=function(x,y,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawPoint(x,y,pt);if(isout)return bimp;};this.绘制图片=function(bmp,x,y,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawBitmap(bmp,x,y,pt);if(isout)return bimp;};this.绘制路径=function(arr,is,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};var path=new gr.Path();path.moveTo(arr[0],arr[1]);for(var i=2;i<arr.length;i+=2){path.lineTo(arr[i],arr[i+1]);};if(is)path.close();画布.drawPath(path,pt);if(isout)return bimp;};this.onDraw=function(run){run(pt,cv);};this.绘制贝塞尔曲线=function(arr,is,r,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};var path=new gr.Path();path.moveTo(arr[0],arr[1]);for(var i=2;i<arr.length;i+=r?6:4){if(r==null||r==false){path.quadTo(arr[i],arr[i+1],arr[i+2],arr[i+3]);};if(r){path.rCubicTo(arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5]);}};if(is)path.close();画布.drawPath(path,pt);if(isout)return bimp;};this.绘制图片=function(bmp,rect,rectf,isout){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);}else{画布=cv;};画布.drawBitmap(bmp,rect,rectf,pt);if(isout)return bimp;};this.文本大小=function(size){pt.setTextSize(size);};this.绘制文本=function(文本,x,y,isout,isrect,fx){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);if(isrect!=null)画布.drawRect(x,y-size,x+size*文本.length(),y+size/5,pt);}else{画布=cv;};if(fx!=null)pt.setTextAlign(fx==0?Feis.Paint.Align.RIGHT:fx==1?Feis.Paint.Align.LEFT:gr.Paint.Align.CENTER);画布.drawText(文本,x,y,pt);if(isout)return bimp;};this.绘制多行文本=function(str,x,y,isout,isrect,fx){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);if(isrect!=null)画布.drawRect(x,y-size,x+size*文本.length(),y+size/5,pt);}else{画布=cv;};if(fx!=null)pt.setTextAlign(fx==0?Feis.Paint.Align.RIGHT:fx==1?Feis.Paint.Align.LEFT:gr.Paint.Align.CENTER);var lines=str.split("\n");var txtSize=-pt.ascent()+pt.descent();if(pt.getStyle()==Feis.Paint.Style.FILL_AND_STROKE||pt.getStyle()==Feis.Paint.Style.STROKE){txtSize+=pt.getStrokeWidth();};var lineSpace=txtSize*0.1; for(var i=0; i<lines.length;++i){画布.drawText(lines[i], x,y+(txtSize+lineSpace)*i,pt);};if(isout)return bimp;};this.绘制曲线文本=function(str,size,arr,x,y,is,isout,fx){var 画布,bimp;if(isout){bimp=Feis.copyBmp(bitmap);画布=cacheOut(bimp);if(isrect!=null)画布.drawRect(x,y-size,x+size*文本.length(),y+size/5,pt);}else{画布=cv;};if(fx!=null)pt.setTextAlign(fx==0?gr.Paint.Align.RIGHT:fx==1?gr.Paint.Align.LEFT:Feis.Paint.Align.CENTER);var path=new Feis.Path();path.moveTo(arr[0],arr[1]);for(var i=2;i<arr.length;i+=4){path.quadTo(arr[i],arr[i+1],arr[i+2],arr[i+3]);};if(is)path.close();pt.setTextSize(size);画布.drawTextOnPath(str,path,x,y,pt);if(isout)return bimp;};this.镜像=function(x,y,isout){var b=Feis.绘图.镜像(bitmap,x,y);if(isout){return b;}else{this.新建(b);} };this.旋转=function(r,isout){var b=Feis.绘图.旋转(bitmap,r);if(isout){return b;}else{this.新建(b);}};this.倾斜=function(x,y,isout){var b=Feis.绘图.倾斜(bitmap,x,y); if(isout){return b;}else{this.新建(b);}};this.缩放=function(w,h,isout){var b=Feis.Bitmap.createScaledBitmap(bitmap,w,h,false);if(isout){return b;}else{this.新建(b);}};this.解析=function(b){if(b==null)b=bitmap;var arr=JavaArray.newInt(width*height);try{b.getPixels(arr,0,b.getWidth(),0,0,b.getWidth(),b.getHeight());}catch(e){Feis.tz("",String(e));}return arr;};this.平移=function(x,y){cv.translate(x,y)};this.保存=function(){if(index<save.length-1)save.splice(index+1);save.push(Feis.copyBmp(bitmap));if(save.length>20)save.shift();index=save.length;};this.撤销=function(){if(index==save.length)index-=1;if(index>0)index-=1;this.新建(save[index]);};this.重做=function(){if(index<save.length-1){index+=1;this.新建(save[index]);}};this.撤销索引=function(){return index;};this.撤销长度=function(){return save.length;};this.另存=function(path){bitmap.compress(String(path).indexOf(".jpg")!=-1?Feis.Bitmap.CompressFormat.JPEG:Feis.Bitmap.CompressFormat.PNG,100,new java.io.FileOutputStream(path));};this.清屏=function(){ var pt=new Feis.Paint(); pt.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR));cv.drawPaint(pt); };this.getWidth=function(){return width;};this.getHeight=function(){return height;};this.getBitmap=function(is){return is?Feis.copyBmp(bitmap):bitmap;};this.onDraw=function(run){run(cv);};this.getPaint=function(){return pt;};this.setPaint=function(paint){pt=paint;};this.getCanvas=function(){return cv;};this.setCanvas=function(canvas){cv=canvas;};this.getDrawable=function(){return new Feis.BitmapDrawable(bitmap);} }
Feis.绘图=function(bitmap,w,h){var matrix=new Feis.Matrix(); if(bitmap==null&&w!=null&&h!=null){bitmap=Feis.Bitmap.createBitmap(w,h,Feis.Bitmap.Config.ARGB_8888);};var bmp=bitmap.copy(Feis.Bitmap.Config.ARGB_8888,true);var W=bitmap.getWidth(),H=bitmap.getHeight();this.reset=function(){bmp=bitmap.copy(Feis.Bitmap.Config.ARGB_8888,true);};this.旋转=function(rotate,is,isout){if(is)matrix.reset();matrix.setRotate(rotate,W/2,H/2);if(isout){return Feis.Bitmap.createBitmap(bmp,0,0,W,H,matrix,true);}else{bmp=Feis.Bitmap.createBitmap(bmp,0,0,W,H,matrix,true);}};this.缩放=function(w,h,isout){if(isout){return Feis.Bitmap.createScaledBitmap(bmp,w,h,false);}else{bmp=Feis.Bitmap.createScaledBitmap(bmp,w,h,false);}};this.镜像=function(x,y,is,isout){if(is)matrix.reset();matrix.postScale(x>=0?1:-1,y>=0?1:-1);if(isout){return Feis.Bitmap.createBitmap(bmp,0,0,W,H,matrix,true);}else{bmp=Feis.Bitmap.createBitmap(bmp,0,0,W,H,matrix,true);}};this.裁剪=function(x,y,w,h,isout){if(isout){return Feis.Bitmap.createBitmap(bmp,x,y,w,h,null,true);}else{bmp=Feis.Bitmap.createBitmap(bmp,x,y,w,h,null,true);}};this.解析=function(b){if(b==null)b=bmp;var arr=JavaArray.newInt(W*H);b.getPixels(arr,0,W,0,0,W,H);return arr;};this.getBitmap=function(is){is?Feis.copyBmp(bmp):bmp;};this.getDrawable=function(){return new Feis.BitmapDrawable(bmp);} }
Feis.绘画.画布=function(bmp){return new Feis.Canvas(bmp);}
Feis.绘画.文本高度=function(pt){var txtSize=-pt.ascent()+pt.descent();if(pt.getStyle()==Feis.Paint.Style.FILL_AND_STROKE||pt.getStyle()==Feis.Paint.Style.STROKE){txtSize+=pt.getStrokeWidth();}var lineSpace=txtSize*0.1,out=0; for(var i=0; i<lines.length;++i){out=(txtSize+lineSpace)*i}return out;}
Feis.绘画.清屏=function(canvas){ var pt=new Feis.Paint(); pt.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR)); canvas.drawPaint(pt); }
Feis.绘画.画笔=function(color,tp,h,size,pd){ var pt=new Feis.Paint(); pt.setStyle((tp==0||tp==null)?Feis.Paint.Style.STROKE:tp==1?Feis.Paint.Style.FILL:Feis.Paint.Style.FILL_AND_STROKE); pt.setAntiAlias(true);pt.setFilterBitmap(true); pt.setColor(color); if(pd){pt.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR));pt.setDither(true); pt.setStrokeJoin(Feis.Paint.Join.ROUND);} if(h!=null)pt.setStrokeWidth(h);if(size!=null)pt.setTextSize(size);return pt;}
Feis.绘画.获取文本矩形=function(paint,str){ var bounds=new Feis.Rect(); paint.getTextBounds(str,0,str.length,bounds);return bounds;}
Feis.绘画.文本宽度=function(paint,str){return paint.measureText(str);}
Feis.绘画.文本间距=function(paint){ var m=paint.getFontMetrics(); this.顶部=m.top;this.底部=m.bottom; this.字上=m.ascent;this.字下=m.descent; this.行距=m.leading;}
Feis.绘画.字符解析=function(p,str){var arr=str.split("\n");var max=0;this.length=arr.length;var txtSize=(-p.ascent()+p.descent());if(p.getStyle()!=Feis.Paint.Style.FILL){txtSize+=p.getStrokeWidth();};this.lineSpace=txtSize*0.1;this.space=this.lineSpace*0.5;this.lineHeight=txtSize;for(var i in arr){if(max<Feis.绘画.文本宽度(p,arr[i]))max=Feis.绘画.文本宽度(p,arr[i]);};this.width=(max+this.lineSpace)+this.space;this.height=(txtSize+this.lineSpace)*arr.length+this.lineSpace;}
Feis.绘图.缩放=function(bmp,w,h){return Feis.Bitmap.createScaledBitmap(bmp,w,h,false);};
Feis.绘图.裁剪=function(bmp,x,y,w,h,is){return Feis.Bitmap.createBitmap(bmp,x,y,(is!=null?(w-x):w),(is!=null?(h-y):h),new Feis.Matrix(),true);};
Feis.绘图.旋转=function(bmp,rotate){ var matrix=new Feis.Matrix();  var w=bmp.getWidth(),h=bmp.getHeight(); matrix.setRotate(rotate);return Feis.Bitmap.createBitmap(bmp,0,0,w,h,matrix,true);};
Feis.绘图.倾斜=function(bmp,x,y){ var matrix=new Feis.Matrix();  matrix.postSkew(x,y);return Feis.Bitmap.createBitmap(bmp,0,0,bmp.getWidth(),bmp.getHeight(),matrix,true);};
Feis.绘图.镜像=function(bmp,x,y){ var matrix=new Feis.Matrix();matrix.postScale(x>=0?1:-1,y>=0?1:-1);return Feis.Bitmap.createBitmap(bmp,0,0,bmp.getWidth(),bmp.getHeight(),matrix,true);};
Feis.getWallpaper=function(isBmp){var A=android.app.WallpaperManager.getInstance(ctx);return ((!isBmp)?A.getDrawable():Feis.drawToBmp(A.getDrawable()));}
Feis.getPkgString=function(path){var inputStream=ModPE.openInputStreamFromTexturePack(String(path));var read=0;var outStream=new java.io.ByteArrayOutputStream();var bytes=Feis.Array.newInstance(java.lang.Byte.TYPE,1024);while((read=inputStream.read(bytes))!=-1){outStream.write(bytes,0,read);}inputStream.close();return new java.lang.String(outStream.toByteArray());}
Feis.ts=function(i,s){Feis.UiT(function(){(new android.widget.Toast.makeText(ctx,String(i),(s==null?0:s))).show();});}
Feis.ts2=function(str,x,y,cor){if(x==undefined){x=0;y=200;}cor=(cor==null?Feis.jb(Feis.ys(220,220,190,130),10):cor);Feis.UiT(function(){var toast=new android.widget.Toast.makeText(ctx,"",1);toast.setGravity(Feis.Gravity.CENTER_HORIZONTAL,Feis.dp(0,x),Feis.dp(3,y));var view=new Feis.TextView(ctx);view.setText(Feis.fontColor(String(str)));Feis.setTextGravity(view,"居中");view.setBackgroundDrawable(cor);toast.setView(view);toast.show();});}
Feis.tz=function(A,B){Feis.UiT(function(){var toast= new android.app.AlertDialog.Builder(ctx);toast.setTitle(String(A));toast.setMessage(String(B));toast.show();}); }
Feis.ys=function(A,B,C,D,E){switch(arguments.length){case 1:return arguments[0].int();break;case 2:return new Feis.ColorDrawable(arguments[0].int());break;case 4:return Feis.Color_argb(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:return new Feis.ColorDrawable(Feis.Color_argb(arguments[0],arguments[1],arguments[2],arguments[3]));break;}}
Feis.zzz=function(B){return ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate((B==null?18:B))}
Feis.getBattery=function(ctx){try{var BM=android.os.BatteryManager;var status=ctx.registerReceiver(null,new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED));return [status.getIntExtra(BM.EXTRA_LEVEL,-1)*100/status.getIntExtra(BM.EXTRA_SCALE,-1),status.getIntExtra(BM.EXTRA_TEMPERATURE,-1)/10,status.getIntExtra(BM.EXTRA_PLUGGED,-1)];}catch(e){return [-1,-1,-1];} }
Feis.剪切板=function(str){var A=ctx.getSystemService(ctx.CLIPBOARD_SERVICE);if(str==undefined){return A.getText();}else{A.setText(str);}}
Feis.setViewFont=function(view,path){view.setTypeface(android.graphics.Typeface.createFromFile(path));}
Feis.jz=function(x,y,W,H,is,fill){if(W==undefined&&H==undefined){W=x;H=y;x=0;y=0;}else if(W!=undefined&&H==undefined){is=W;W=A;H=B;A=0;B=0;}var h=0,w=Feis.dp(0,W),Y=0;if(is){h=Feis.dp(1,H);Y=fill!=null?Math.round((Feis.dp(1,fill)-h)*(y*0.001)):Feis.dp(3,y);}else{h=Feis.dp(3,H);Y=Feis.dp(3,y);}var L=Feis.LinearLayout.LayoutParams;var wrap=L.WRAP_CONTENT,fill=L.FILL_PARENT,match=L.MATCH_PARENT;switch(W){case -3:w=wrap;break;case -1:w=fill;break;case -2:w=match;break;}switch(H){case -3:h=wrap;break;case -1:h=fill;break;case -2:h=match;break;}var CS=new Feis.LinearLayout.LayoutParams(w,h);CS.setMargins(Feis.dp(0,x),Y,0,0);return CS;}
Feis.jzr=function(A,B,W,H,is){if(W==undefined&&H==undefined){W=A;H=B;A=0;B=0;}else if(W!=undefined&&H==undefined){is=W;W=A;H=B;A=0;B=0;}var h=0,w=Feis.dp(0,W);if(is){h=Feis.dp(1,H);}else{h=Feis.dp(3,H);}var R=Feis.RelativeLayout.LayoutParams;var wrap=R.WRAP_CONTENT,fill=R.FILL_PARENT,match=R.MATCH_PARENT;switch(W){case -3:w=wrap;break;case -1:w=fill;break;case -2:w=match;break;}switch(H){case -3:h=wrap;break;case -1:h=fill;break;case -2:h=match;break;}var CS=new Feis.RelativeLayout.LayoutParams(w,h);CS.setMargins(Feis.dp(0,A),Feis.dp(3,B),0,0);return CS; }
Feis.dip=function(pixels){return android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,1,ctx.getResources().getDisplayMetrics())*pixels;}
Feis.setTextShadow=function(view,x,y,blur,is,color){if(a==undefined){x=2;y=2;blur=2;is=true;color=Feis.Color.rgb(0,0,0)}view.getPaint().setFakeBoldText(is);view.setShadowLayer(x,y,blur,color);}
Feis.getGravity=function(B){var G=Feis.Gravity;var t=G.TOP,b=G.BOTTOM,l=G.LEFT,r=G.RIGHT,c=G.CENTER,x=c;switch(B){case "上": x=t;break;case "下": x=b;break;case "左": x=l;break;case "右": x=r;break;case "上左":x=t|l;break;case "上右":x=t|r;break;case "下左":x=b|l;break;case "下右":x=b|r;break;case "上中":x=t|c;break;case "下中":x=b|c;break;case "左中":x=l|c;break;case "右中":x=r|c;break;case "居中":x=c;break;} return x;}
Feis.fontColor=function(text){var colors=[[" "," &nbsp;"],["\n","<br/>"],["§l","</b><b>"],["§m","</del><del>"],["§n","</ins><ins>"],["§o","</i><i>"],["§r","</font></b></del></ins></i>"],["§0","</font><font color=#000000>"],["§1","</font><font color=#0000AA>"],["§2","</font><font color=#00AA00>"],["§3","</font><font color=#00AAAA>"],["§4","</font><font color=#AA0000>"],["§5","</font><font color=#AA00AA>"],["§6","</font><font color=#FFAA00>"],["§7","</font><font color=#cccccc>"],["§8","</font><font color=#555555>"],["§9","</font><font color=#5555FF>"],["§a","</font><font color=#55FF55>"],["§b","</font><font color=#55FFFF>"],["§c","</font><font color=#FF5555>"],["§d","</font><font color=#FF55FF>"],["§e","</font><font color=#FFFF55>"],["§f","</font><font color=#FFFFFF>"]];for(var e in colors){text=text.split(colors[e][0]).join(colors[e][1]);};return android.text.Html.fromHtml(text);}
Feis.html={颜色:function(str){return "</font><font color="+str+">";},换行:"<br/>",空格:" &nbsp;",图片:function(){return "<p><img src='"+name+"'></p>";},有图返回:function(str,arr){return android.text.Html.fromHtml(str,new android.text.Html.ImageGetter(){getDrawable:function(source){for(var i in arr){if(arr[i].name==source){var draw=arr[i].drawdraw.setBounds(0,0,draw.getIntrinsicWidth(),draw.getIntrinsicHeight());return draw; }}; }},null);},无图返回:function(str){return android.text.Html.fromHtml(str);}}
Feis.移动动画=function(view,x1,x2,y1,y2,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.TranslateAnimation(tp,x1*0.01,tp,x2*0.01,tp,y1*0.01,tp,y2*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
Feis.旋转动画=function(view,A,B,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.RotateAnimation(A,B,tp,x*0.01,tp,y*0.01);dh.setDuration(time);dh.setFillAfter(true);if(view!=null)view.startAnimation(dh);return dh;}
Feis.淡入动画=function(view,A,B,time){var dh=new android.view.animation.AlphaAnimation(A*0.01,B*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
Feis.收缩动画=function(view,x1,x2,y1,y2,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.ScaleAnimation(x1*0.01,x2*0.01,y1*0.01,y2*0.01,tp,x*0.01,tp,y*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
Feis.缩放动画=function(view,In,out,time,type){return Feis.收缩动画(view,In,out,In,out,50,50,time,type);}
Feis.水平动画=function(view,In,out,time,type){return Feis.移动动画(view,In,out,0,0,time,type);}
Feis.垂直动画=function(view,In,out,time,type){return Feis.移动动画(view,0,0,In,out,time,type);}
Feis.动画监听=function(动画,run,sum){if(sum==undefined){sum=0;};动画.setAnimationListener(new android.view.animation.Animation.AnimationListener({onAnimationEnd:function(v){run(sum+=1,run);return true;}}));}
Feis.设置动画=function(view,anim){view.startAnimation(anim);}
Feis.创建动画=function(view){var anim=android.view.animation;var type_0=anim.Animation.RELATIVE_To_SELF,type_1=anim.Animation.RELATIVE_To_PARENT;var array=[];var set=new anim.AnimationSet(true);var TRANSLATE=function(x1,x2,y1,y2,time,type){ type=((type==null||type==0)?type_0:type_1); var dh=new anim.TranslateAnimation(type,x1*0.01,type,x2*0.01,type,y1*0.01,type,y2*0.01); dh.setDuration(time);array.push(dh);set.addAnimation(dh);};var SCALE=function(x1,x2,y1,y2,x,y,time,type){ type=((type==null||type==0)?type_0:type_1); var dh=new anim.ScaleAnimation(x1*0.01,x2*0.01,y1*0.01,y2*0.01,type,x*0.01,type,y*0.01); dh.setDuration(time);array.push(dh);set.addAnimation(dh);};this.缩放=function(In,out,x,y,time,type){ var len=arguments.length;var is=(len==4||len==3);return SCALE(In,out,In,out,is?50:arguments[2],is?50:arguments[3], is?arguments[2]:arguments[4],is?arguments[3]:arguments[5]);};this.水平=function(In,out,time,type){ return TRANSLATE(In,out,0,0,time,type);};this.垂直=function(In,out,time,type){ return TRANSLATE(0,0,In,out,time,type);};this.淡入=function(In,out,time){ var dh=new anim.AlphaAnimation(In*0.01,out*0.01); dh.setDuration(time);array.push(dh);set.addAnimation(dh);};this.旋转=function(A,B,x,y,time,type){ type=((type==null||type==0)?type_0:type_1); var dh=new anim.RotateAnimation(A,B,type,x*0.01,type,y*0.01); dh.setDuration(time);dh.setFillAfter(true);array.push(dh); set.addAnimation(dh);};this.监听器=function(a,run,sum){ sum=(sum==null?0:sum); a.setAnimationListener(new anim.Animation.AnimationListener({ onAnimationEnd:function(a){run(sum+=1,run);return true;}}));};var play=function(a){view.startAnimation(a);return a;};this.顺序播放=function(run_){ this.监听器(play(array[0]),function(id,run){ if(id<array.length){this.监听器(play(array[id]),run,id);} if(run_!=null){run_(id,view);} });};this.同步播放=function(run_){ this.监听器(play(set),function(id){if(run_!=null)run_(id,view);});};}
Feis.dp=function(A,B){var G=0,E=0,F=0,out=0;if(Feis.屏宽<1||Feis.屏高<1){var dView=ctx.getWindow().getDecorView();Feis.屏宽=dView.getWidth();Feis.屏高=dView.getHeight();}E=Feis.屏宽*(B*0.001); F=Feis.屏高*(B*0.001); G=E-F;switch(A){case 0:out=(G>=0?E:F);break; case 1:out=(G>=0?F+G:E-G);break;case 2:out=(G>=0?E:F);break; case 3:out=(G>=0?F:E);break;}return Math.round(out);}
Feis.wh=function(win,B,C){var wh=Feis.dp();return Math.round(B==0?(wh[0]-win.getWidth())*(C*0.001):(wh[1]-win.getHeight())*(C*0.001));}
Feis.makeMenu=function(win,la,type){var JD=null,SP=null;var ML=new Feis.RelativeLayout(ctx);if(type==0){JD=new android.widget.ScrollView(ctx);JD.setLayoutParams(Feis.jz(0,0,-1,-1));JD.addView(la);ML.addView(JD);};if(type==1){JD=new android.widget.HorizontalScrollView(ctx);JD.setLayoutParams(Feis.jz(0,0,-1,-1));JD.addView(la);ML.addView(JD);};if(type==2){JD=new android.widget.ScrollView(ctx);SP=new android.widget.HorizontalScrollView(ctx);JD.setLayoutParams(Feis.jz(0,0,-1,-1));SP.setLayoutParams(Feis.jz(0,0,-1,-1));SP.addView(la);JD.addView(SP);ML.addView(JD);}win.setContentView(ML);return [ML,JD,SP];}
Feis.addScroll=function(la,type,jg){var JD=null,SP=null;var layout=Feis.addLayout();if(type==0||type==null){JD=new android.widget.ScrollView(ctx);JD.setFillViewport(true);if(jg!=null)JD.setLayoutParams(jg);JD.addView(layout);};if(type==1){JD=new android.widget.HorizontalScrollView(ctx);JD.setFillViewport(true);if(jg!=null)JD.setLayoutParams(jg);JD.addView(layout);};if(type==2){JD=new android.widget.ScrollView(ctx);SP=new android.widget.HorizontalScrollView(ctx);JD.setFillViewport(true);SP.setFillViewport(true);if(jg!=null)JD.setLayoutParams(jg);SP.addView(layout);JD.addView(SP);}la.addView(JD);return [layout,JD,SP];}
Feis.窗口移动=function(view,win,is,run,m){var long=(!is?true:false);var X=Feis.屏宽;Y=Feis.屏高;switch(m){case 0:X=Y=0;break;case 1:Y=0;break;case 3:;break;case 2:X=0;break;default:Y=0;};if(is)Feis.长按监听(view,function(v){long=true;return true;});Feis.触摸监听(view,function(e,a){ if(long){var w=view.getMeasuredWidth()/2,h=view.getMeasuredHeight()/2;var x=(X>1?X-(e.getRawX()+w):e.getRawX()-w);var y=(Y>1?Y-(e.getRawY()+h):e.getRawY()-h);if(run!=null)run(x,y,e);win.update(x,y,-1,-1);};if(a==android.view.MotionEvent.ACTION_UP&&is){long=false;}return true;});}
Feis.窗口拖动=function(win,view){var X=Feis.屏宽,Y=Feis.屏高;var 开关=false;this.对齐模式=function(m){switch(m){case 0:X=Y=0;break;case 1:Y=0;break;case 3:;break;case 2:X=0;break;default:Y=0;} };this.对齐模式(null);this.设置开关=function(off){开关=off;};this.触摸拖动=function(run){Feis.触摸监听(view,function(e,a){ var w=view.getMeasuredWidth()/2,h=view.getMeasuredHeight()/2;var x=(X>1?X-(e.getRawX()+w):e.getRawX()-w);var y=(Y>1?Y-(e.getRawY()+h):e.getRawY()-h);if(run!=null)run(x,y,e);win.update(x,y,-1,-1);return true;}); };this.长按拖动=function(run){var long=false;Feis.长按监听(view,function(v){long=true;return true;});
Feis.触摸监听(view,function(e,a){if(long){var w=view.getMeasuredWidth()/2,h=view.getMeasuredHeight()/2;var x=(X>1?X-(e.getRawX()+w):e.getRawX()-w);var y=(Y>1?Y-(e.getRawY()+h):e.getRawY()-h);if(run!=null)run(x,y,e);win.update(x,y,-1,-1);};if(a==android.view.MotionEvent.ACTION_UP){long=false;}return true;}); };this.开关拖动=function(run,run2){Feis.触摸监听(view,function(e,a){ if(开关){var w=view.getMeasuredWidth()/2,h=view.getMeasuredHeight()/2;var x=(X>1?X-(e.getRawX()+w):e.getRawX()-w);var y=(Y>1?Y-(e.getRawY()+h):e.getRawY()-h);if(run!=null)run(x,y,e);win.update(x,y,-1,-1);};if(a==android.view.MotionEvent.ACTION_UP&&开关){if(run2!=null)run2();开关=false;return false;}return true;}); };this.点击监听=function(run){Feis.点击监听(view,function(v){if(!开关)run(v);});};this.长按监听=function(run){Feis.长按监听(view,function(v){if(!开关){return run(v);}else{return false;}});} }
Feis.setShowHide=function(view,m){if(m==-1){return view.getVisibility();}view.post(function(){view.setVisibility((m==0?Feis.View.GONE:(m==1?Feis.View.VISIBLE:Feis.View.INVISIBLE))); });}
Feis.addWindow=function(dra,x,y,w,h,focus,touch,zb){zb=(zb==undefined)?true:zb;focus=(focus==undefined)?false:focus;touch=(touch==undefined)?true:touch;var la=Feis.addLayout();var win=new Feis.PopupWindow(la); win.setFocusable(focus);win.setTouchable(touch);var mla=Feis.makeMenu(win,la,0);win.setBackgroundDrawable(dra);var data=Feis.窗口坐标(x,y,w,h,zb);win.setWidth(data[0]);win.setHeight(data[1]);win.showAtLocation(ctx.getWindow().getDecorView(),Feis.Gravity.RIGHT|Feis.Gravity.TOP,da[2],da[3]);return [win,la,mla[0],mla[1],mla[2]];}
Feis.addWindow2=function(dra,x,y,w,h,focus,touch,view){var la=Feis.addLayout();var win=new Feis.PopupWindow(la); win.setFocusable(focus==null?false:focus);win.setTouchable(touch==null?true:touch);var mla=Feis.makeMenu(win,la,0);win.setBackgroundDrawable(dra);win.setWidth(w);win.setHeight(h);if(view==null){win.showAtLocation(ctx.getWindow().getDecorView(),Feis.Gravity.RIGHT|Feis.Gravity.TOP,x,y);}else if(view!=null){win.showAsDropDown(view.getParent(),x,y);}return [win,la,mla[0],mla[1],mla[2]];}
Feis.窗口按键监听=function(pop,run){pop.setOnKeyListener(function(){run();});}
Feis.updataLayout=function(v,w,h){var p=v.getLayoutParams();p.height=h;p.width=w;v.requestLayout();}
Feis.窗口坐标=function(x,y,w,h,等比){var X轴=Y轴=W=H=0;var 宽度=Feis.屏宽, 高度=Feis.屏高, 高宽差值=宽度-高度;if(高宽差值>=0){W=宽度*(w*0.001);H=高度*(h*0.001);if(等比){H+=(宽度*(h*0.001)-H);}X轴=(宽度-W)*(x*0.001);Y轴=(高度-H)*(y*0.001);};if(高宽差值<0){W=宽度*(h*0.001);H=高度*(w*0.001);if(等比){W=H;H=(宽度*(h*0.001))+(高度*(h*0.001)-W);}X轴=(高度-W)*(y*0.001);Y轴=(宽度-H)*(x*0.001);X轴=高度-(高度-Y轴);Y轴=(高度-W)*(y*0.001);}return [W,H,X轴,Y轴];}
Feis.addLayout=function(layout,C,jz){var la=new Feis.LinearLayout(ctx);la.setOrientation(C==null?1:C);if(jz!=null){la.setLayoutParams(jz);};if(layout!=null){layout.addView(la);}return la;}
Feis.addRayout=function(layout){var la=new Feis.RelativeLayout(ctx);if(layout!=null){layout.addView(la);}return la;}
Feis.addFayout=function(la){var layout=new Feis.FrameLayout(ctx);if(la!=null){la.addView(layout);}return layout;}
Feis.相对位置=function(对齐方式,布局,控件,相对id,控件id){控件.setId(控件id);var R=Feis.RelativeLayout;var param=new Feis.RelativeLayout();switch(对齐方式){case "水平居中":wz=R.CENTER_HORIZONTAL;break;case "垂直居中":wz=R.CENTER_VERTICAL;break;case "完全居中":wz=R.CENTER_IN_PARENT;break;case "容器下边":wz=R.ALIGN_PARENT_BOTTOM;break;case "容器上边":wz=R.ALIGN_PARENT_TOP;break;case "容器左边":wz=R.ALIGN_PARENT_LEFT;break;case "容器右边":wz=R.ALIGN_PARENT_RIGHT;break;case "相对上边":wz=R.ABOVE;break;case "相对下边":wz=R.BELOW;break;case "相对左边":wz=R.LEFT_OF;break;case "相对右边":wz=R.RIGHT_OF;break;case "上对上边缘":wz=R.ALIGN_TOP;break;case "上对下边缘":wz=R.ALIGN_BOTTOM;break;case "上对左边缘":wz=R.ALIGN_LEFT;break;case "上对右边缘":wz=R.ALIGN_RIGHT;break;case "基线对齐":wz=R.ALIGN_BASELINE;break;}param.addRule(wz,相对id);布局.addView(控件,param);}
Feis.根路径=function(路径){return String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+路径);}
Feis.保存文本=function(path,data){try{var file=new Feis.File(path);if(!file.exists()){file.getParentFile().mkdirs();}var wr=new java.io.FileWriter(file);wr.write(data);wr.close();}catch(e){Feis.tz("保存文本",file+""+e);}}
Feis.读取文本=function(path){var file=new Feis.File(path);if(file.isFile()){var out=[];var line="";var ins=new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");var buff=new java.io.BufferedReader(ins);while((line=buff.readLine())!=null){out.push(line);}ins.close();return out.join("\n");}else{return null;}}
Feis.文件管理=function(path){this.文件=function(path){return new Feis.File(path)};this.当前=this.文件(path);this.列表=[];this.获取列表=function(){ var list=this.当前.listFiles(); var f=[],d=[]; for(var i in list){ if(!list[i].isHidden()){ if(list[i].isDirectory())d.push(list[i]); else if(list[i].isFile())f.push(list[i]); } } d.sort();f.sort();this.列表=d.concat(f);return this.列表;};this.新建目录=function(name){new Feis.File(当前,name).mkdirs();};this.上级=function(){ var file=(new Feis.File(this.当前).getParentFile()); if(this.当前!="/"){this.当前=file;}else{Feis.ts("已经是根目录.");}};this.获取大小=function(file){return android.text.format.Formatter.formatFileSize(ctx,file.length());};this.获取日期=function(file){var formatter=new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");return formatter.format(file.lastModified());};this.扩展名称=function(file){var name=file.getName();return name.substr(name.lastIndexOf("."));}};
Feis.删除目录=function(path){var file=new Feis.File(String(path));if(file.isDirectory()){var list=file.listFiles();if(list.length==0){return file.delete();}else{for(var i in dir){if(list[i].isDirectory()){if(Feis.删除目录(list[i]))list[i].delete();}else{list[i].delete();} };if(file.listFiles().length==0){file.delete();}return true;}}else{return file.delete();} }
Feis.材质包解压=function(包内路径,新路径){try{ var byte;var stream=ModPE.openInputStreamFromTexturePack(String(包内路径));var file=new Feis.File(新路径);if(!(file.exists())){file.getParentFile().mkdirs();};if(stream!=undefined){var out=new Feis.FileOutputStream(file);while((byte=stream.read())!=-1){out.write(byte);}out.close();stream.close();}}catch(e){Feis.ts("材质包解压"+e);}}
Feis.jsonData=function(data){if(typeof(data)=="string"){return JSON.parse(data);}else{return JSON.stringify(data);}}
Feis.触摸监听=function(view,run){ view.setClickable(true); view.setOnTouchListener(new Feis.View.OnTouchListener(){ onTouch:function(v,e){return (!run(e,e.getAction())); }});}
Feis.窗口监听=function(win,run,d){ if(!d){win.setOnDismissListener(new Feis.PopupWindow.OnDismissListener({ onDismiss:function(){run();}}));} if(d){win.setTouchInterceptor(new Feis.View.OnTouchListener({ onTouch: function(v,e){return run(e,e.getAction());}}));}}
Feis.点击监听=function(view,run){ view.setOnClickListener(new Feis.View.OnClickListener({ onClick:function(v){try{run(v);}catch(e){Feis.报错(e);};}}));}
Feis.长按监听=function(view,run){ view.setOnLongClickListener(new Feis.View.OnLongClickListener({ onLongClick:function(v,t){try{return run(v,t);}catch(e){Feis.报错(e);return true;};}}));}
Feis.进度监听=function(view,run){ view.setOnSeekBarChangeListener(new Feis.SeekBar.OnSeekBarChangeListener({ onProgressChanged:function(v,p,is){try{run(p,is);}catch(e){Feis.报错(e);};}}));}
Feis.输入监听=function(edit,run){ edit.addTextChangedListener(new android.text.TextWatcher({ beforeTextChanged:function(CharSequence,start,count,after){run(2,CharSequence,start,count,after);}, onTextChanged:function(CharSequence,start,before,count){run(1,CharSequence,start,before,count);}, afterTextChanged:function(Editable){run(0,edit.getText().toString()); }}));}
Feis.列表点击监听=function(list,run){list.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener(){onItemClick:function(av,v,id,p){try{run(av,v,id,p);}catch(e){Feis.报错(e);};}});}
Feis.列表滚动监听=function(list,run){list.setOnScrollListener(new android.widget.AbsListView.OnScrollListener(){onScroll:function(lv,int0,int1,int2){try{run(lv,int0,int1,int2);}catch(e){Feis.报错(e);};},onScrollStateChanged:function(lv,int){try{run(lv,int);}catch(e){Feis.报错(e);};}});}
Feis.报错=function(er){var e=er.name;A="";if(e.equalsIgnoreCase("SyntaxError")){A="语法错误(检查变量或符号)";};if(e.equalsIgnoreCase("ReferenceError")){A="赋值错误或变量、函数不存在";};if(e.equalsIgnoreCase("RangeError")){A="某数值无效";};if(e.equalsIgnoreCase("TypeError")){A="参数不是预期类型";};if(e.equalsIgnoreCase("EvalError")){A="eval执行出错";}Feis.tz(e,"类型:"+A+"\n原因:"+er.message+"\n位置:"+er.stack);}
Feis.滤镜=function(color,id){try{var xg=null;var P=android.graphics.PorterDuff.Mode;switch(id){case 0:xg=P.CLEAR;/*所绘制不会提交到画布上。*/;break;case 1:xg=P.SRC;/*绘制源图像*/;break;case 2:xg=P.DST;/*绘制目标图片*/;break;case 3:xg=P.SRC_OVER;/*在源图像顶部绘制*/;break;case 4:xg=P.DST_OVER;/*在目标图像顶部绘制*/;break;case 5:xg=P.SRC_IN;/*两层相交的地方绘制源图像*/;break;case 6:xg=P.DST_IN;/*两层相交的地方绘制目标图像*/;break;case 7:xg=P.SRC_OUT;/*两层不相交的地方绘制源图像*/;break;case 8:xg=P.DST_OUT;/*两层不相交的地方绘制目标图像*/;break;case 9:xg=P.SRC_ATOP;/*取下层非交集部分与上层交集部分*/;break;case 10:xg=P.DST_ATOP;/*取上层非交集部分与下层交集部分*/;break;case 11:xg=P.XOR;/*变暗*/;break;case 12:xg=P.DARKEN;/*调亮*/;break;case 13:xg=P.LIGHTEN;/*用于颜色滤镜*/;break;case 14:xg=P.SCREEN;;break;default: xg=P.MULTIPLY;};if(color!=null){return new android.graphics.PorterDuffColorFilter(color,xg);}else{return new android.graphics.PorterDuffXfermode(xg);}}catch(e){Feis.报错(e);}}
Feis.随机颜色=function(m,透明){if(透明==undefined){透明=255;};if(m==0){return Feis.Color_argb(透明,Feis.随机(0,255),Feis.随机(0,255),Feis.随机(0,255));};if(m==1){return new android.graphics.drawable.ColorDrawable(Feis.Color_argb(透明,Feis.随机(0,255),Feis.随机(0,255),Feis.随机(0,255)));} }
Feis.随机=function(min,max){return Math.round(Math.random()*(max-min))+min;}
Feis.打开输入法=function(v){var A=v.getContext().getSystemService(ctx.INPUT_METHOD_SERVICE);A.showSoftInput(v,android.view.inputmethod.InputMethodManager.SHOW_FORCED);}
Feis.铃声=function(A,is){var a=(A==0?android.media.RingtoneManager.TYPE_RINGTONE:A==1?android.media.RingtoneManager.TYPE_ALARM:A==2?android.media.RingtoneManager.TYPE_ALL:android.media.RingtoneManager.TYPE_NOTIFICATION);var mp=new android.media.MediaPlayer();mp.setDataSource(ctx,android.media.RingtoneManager.getDefaultUri(a));if(is)mp.setLooping(true);mp.prepare();mp.start();return mp;}
Feis.网络图片=function(PATH){var url=new java.net.URL(String(PATH));if(url!=null){var 网图=url.openConnection();网图.setConnectTimeout(3000);网图.setRequestMethod("GET");网图.setDoInput(true);var 判定=网图.getResponseCode();if(判定==java.net.HttpURLConnection.HTTP_OK){var C=new Feis.BitmapDrawable(网图.getInputStream());} else {Feis.ts("网络错误");} return C; }}
Feis.网页视图=function(la,链接){try{var url=new java.net.URL(链接);var web=new android.webkit.WebView(ctx);var wb=web.getSettings();wb.setJavaScriptEnabled(true);wb.setLoadWithOverviewMode(true);wb.setUseWideViewPort(true);wb.setLayoutAlgorithm(android.webkit.WebSettings.LayoutAlgorithm.NARROW_COLUMNS);wb.setAllowFileAccess(true);wb.setSupportZoom(true);web.setWebChromeClient(new android.webkit.WebChromeClient());web.setWebViewClient(new android.webkit.WebViewClient());web.loadUrl(url);web.setDownloadListener(new android.webkit.DownloadListener({onDownloadStart: function(url,userAgent,Name,MIMEtype,size){var uri=android.net.Uri.parse(url);var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,uri);ctx.startActivity(intent) ;Feis.ts("下载文件！");}}));la.addView(web);return web;}catch(e){Feis.报错(e);}}
Feis.Print=function(str,t,bg){var time=(t==null?4000:t);var content=(str==null?"":str);var start=Feis.垂直动画(null,-100,0,400);var end=Feis.淡入动画(null,100,0,1000);var 背景=bg==null?Feis.ys(200,59,59,59):bg;this.弹出动画=function(anim){start=anim;};this.隐藏动画=function(anim){end=anim;};this.背景颜色=function(color){背景=color;};this.时间=function(ms){time=ms;};this.显示=function(str,x,y){Feis.UiT(function(){ var win=Feis.addWindow2(Feis.ys(0,0,0,0,-1),0,0,Feis.屏宽,Feis.屏高,false,false); var la=Feis.addLayout(win[1]); var tv=Feis.JSONTextView({文本:Feis.fontColor(str==null?content:str),宽度:Feis.dip(300),高度:-1,左边距:x==null?Feis.dip(0):x,上边距:y==null?Feis.dip(0):y,位置重心:Feis.getGravity("居中"),文本大小:16,文本颜色:Feis.ys(255,255,255,255),背景绘图:Feis.jb(背景,[0,0,Feis.dip(10),Feis.dip(10)]),文本重心:Feis.getGravity("居中"),布局:la}); Feis.设置动画(tv,start); Feis.动画监听(start,function(t,run){if(t==1){Feis.动画监听(Feis.淡入动画(tv,100,100,time),run,t);};if(t==2){Feis.设置动画(tv,end);Feis.动画监听(end,run,t);};if(t==3){win[0].dismiss();} },0); }); } }
Feis.文字统计=function(str){var line=str.split("\n");return [line.length,str.length];}
Feis.分享文本=function(标题,内容){ var 发送=new android.content.Intent();发送.setAction(android.content.Intent.ACTION_SEND);发送.putExtra(android.content.Intent.EXTRA_TEXT,标题+"\n"+内容);发送.setType("text/plain");ctx.startActivity(android.content.Intent.createChooser(发送,标题));}
Feis.分享图片=function(标题,path){ var intent=new android.content.Intent();intent.setAction("android.intent.action.SEND");intent.setType("image/*"); /**/intent.putExtra(android.content.Intent.EXTRA_TEXT,标题);intent.putExtra(android.content.Intent.EXTRA_STREAM, android.net.Uri.fromFile(new Feis.File(file)));ctx.startActivity(intent);}
Feis.BaseAdapter=function(arr,run){
var data=arr.slice(0);var listener=run;
var mDataSetObservable=new android.database.DataSetObservable();
var ad=new android.widget.ListAdapter(){
 hasStableIds:function(){return false;},
 registerDataSetObserver:function(observer){
mDataSetObservable.registerObserver(observer);},
 unregisterDataSetObserver:function(observer){
mDataSetObservable.unregisterObserver(observer);},
 notifyDataSetChanged:function(){
mDataSetObservable.notifyChanged();},
 notifyDataSetInvalidated:function(){
mDataSetObservable.notifyInvalidated();},
 areAllItemsEnabled:function(){return true;},
 getDropDownView:function(pos,convertView,parent){
return this.getView(pos,convertView,parent);},
 getItemViewType:function(pos){return 0;},
 getViewTypeCount:function(){return 1;},
 getView:function(pos,cv,parent){
return listener(pos,cv,parent,data[pos]);},
 getCount:function(){return data.length;},
 getItem:function(pos){return data[pos];},
 getItemId:function(pos){return pos;},
 isEnabled:function(pos){return true;},
 isEmpty:function(){return this.getCount()==0;} };
this.update=function(array){
if(array!=null)data=array.slice(0);
mDataSetObservable.notifyChanged();}
this.delete=function(index){
data.splice(index,1);
mDataSetObservable.notifyChanged();}
this.get=function(index){return data[index];}
this.getAdapter=function(){return ad;}
this.setContentView=function(run){listener=run;} 
};

Feis.viewShow=function(v,m){v.setVisibility(m==1?Feis.View.VISIBLE:m==0?Feis.View.GONE:Feis.View.INVISIBLE);}
Feis.newArray=function(w,h){var arr=[];for(var i=0;i<w;i++){arr[i]=[];if(h!=null){for(var j=0;j<h;j++){arr[i][j]=[];}}};return arr;};
function 相对方位(rx,ry,tx,ty){var a=Math.atan((ty-ry)/(tx-rx))*180/Math.PI;return a<0?a+360:a;}
function 面向(){return [-Math.sin(getYaw()/180*Math.PI),-Math.tan(getPitch()/180*Math.PI),Math.cos(getYaw()/180*Math.PI)];}
Feis.seekbarColor=function(sb,color){sb.getProgressDrawable().setColorFilter(Feis.滤镜(color));}

Feis.JSONTextView=function(json,lp){
var tv=new Feis.TextView(ctx);
if(json.文本!=null)tv.setText(json.文本);
if(json.文本颜色!=null)tv.setTextColor(json.文本颜色);
if(json.背景颜色!=null)tv.setBackgroundColor(json.背景颜色);
if(json.背景绘图!=null)tv.setBackgroundDrawable(json.背景绘图);
if(json.文本重心!=null)tv.setGravity(json.文本重心);
if(json.文本大小!=null)tv.setTextSize(json.文本大小);
if(json.旋转!=null)tv.setRotation(json.旋转);
tv.setLayoutParams(Feis.JSONParams(json,lp));
if(json.单行!=null)tv.setSingleLine(json.单行);
if(json.阴影!=null)Feis.setElevation(tv,json.阴影,json.阴影);
if(json.监听!=null)Feis.点击监听(tv,function(v){json.监听(v);});
if(json.长按!=null)Feis.长按监听(tv,function(v){return json.长按(v);});
if(json.触摸!=null)Feis.触摸监听(img,function(e,a){return json.触摸(e,a);});
if(json.布局!=null)json.布局.addView(tv);
return tv;
}
Feis.JSONEditText=function(json){
var edit=new Feis.EditText(ctx);
if(json.提示!=null)edit.setHint(json.提示);
if(json.提示颜色!=null)edit.setHintColor(json.提示颜色);
if(json.输入数字)edit.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
edit.setFocusable(true);
edit.setFocusableInTouchMode(true);
if(json.文本!=null)edit.setText(json.文本);
if(json.文本颜色!=null)edit.setTextColor(json.文本颜色);
if(json.背景颜色!=null)edit.setBackgroundColor(json.背景颜色);
if(json.背景绘图!=null)edit.setBackgroundDrawable(json.背景绘图);
if(json.文本重心!=null)edit.setGravity(json.文本重心);
if(json.文本大小!=null)edit.setTextSize(json.文本大小);
if(json.旋转!=null)edit.setRotation(json.旋转);
edit.setLayoutParams(Feis.JSONParams(json));
if(json.单行!=null)edit.setSingleLine(json.单行);
if(json.阴影!=null)Feis.setElevation(edit,json.阴影,json.阴影);
if(json.布局!=null)json.布局.addView(edit);
return edit;
}
Feis.JSONSeekBar=function(json){
var sb=new Feis.SeekBar(ctx);
if(json.最大进度!=null)sb.setMax(json.最大进度);
if(json.进度!=null)sb.setProgress(json.进度);
if(json.进度颜色)sb.getProgressDrawable().setColorFilter(Feis.滤镜(json.进度颜色));
if(json.背景颜色!=null)sb.setBackgroundColor(json.背景颜色);
if(json.背景绘图!=null)sb.setBackgroundDrawable(json.背景绘图);
if(json.阴影!=null)Feis.setElevation(sb,json.阴影,json.阴影);
if(json.旋转!=null)sb.setRotation(json.旋转);
sb.setLayoutParams(Feis.JSONParams(json));
if(json.监听!=null)Feis.进度监听(sb,function(p,is){json.监听(p,is);});
if(json.布局!=null)json.布局.addView(sb);
return sb;
};
Feis.JSONParams=function(json,lp){
var LinearLayout=android.widget.LinearLayout;
if(lp==null)lp=new LinearLayout.LayoutParams(0,0);
var getWH=function(str){
if(str==-1)return LinearLayout.LayoutParams.WRAP_CONTENT;
else if(str==-2)return LinearLayout.LayoutParams.MATCH_PARENT;
else {return str;} }
lp.width=getWH(json.宽度);lp.height=getWH(json.高度);
if(json.位置重心!=null)lp.gravity=json.位置重心;
if(json.上边距!=null)lp.topMargin=json.上边距;
if(json.右边距!=null)lp.rightMargin=json.右边距;
if(json.左边距!=null)lp.leftMargin=json.左边距;
if(json.下边距!=null)lp.bottomMargin=json.下边距;
return lp;
}
Feis.JSONImageView=function(json){
var img=new android.widget.ImageView(ctx);
if(json.位图!=null)img.setImageBitmap(json.位图);
if(json.背景颜色!=null)img.setBackgroundColor(json.背景颜色);
if(json.背景绘图!=null)img.setBackgroundDrawable(json.背景绘图);
img.setLayoutParams(Feis.JSONParams(json));
if(json.旋转!=null)img.setRotation(json.旋转);
if(json.阴影!=null)Feis.setElevation(img,json.阴影,json.阴影);
if(json.监听!=null)Feis.点击监听(img,function(v){json.监听(v);});
if(json.触摸!=null)Feis.触摸监听(img,function(e,a){return json.触摸(e,a);});
if(json.长按!=null)Feis.长按监听(img,function(v){return json.长按(v);});
if(json.布局!=null)json.布局.addView(img);
return img;
}
Feis.JSONListView=function(json){
var list=new android.widget.ListView(ctx);
if(json.适配器!=null)list.setAdapter(json.适配器);
list.setLayoutParams(Feis.JSONParams(json));
if(json.背景颜色!=null)list.setBackgroundColor(json.背景颜色);
if(json.背景绘图!=null)list.setBackgroundDrawable(json.背景绘图);
if(json.间隙绘图!=null)list.setDivider(json.间隙绘图);
if(json.间隙高度!=null)list.setDividerHeight(json.间隙高度);
if(json.阴影!=null)Feis.setElevation(list,json.阴影,json.阴影);
if(json.布局)json.布局.addView(list);
return list;
}
Feis.getEditText=function(title,run,text,hint){
Feis.UiT(function(){
var noDismiss=function(DialogInterface,b){
try{var field=DialogInterface.getClass().getSuperclass().getDeclaredField("mShowing");
field.setAccessible(true);field.set(DialogInterface,b);
if(b)DialogInterface.dismiss();}catch(e){Feis.报错(e);} }
var toast=new android.app.AlertDialog.Builder(ctx);
toast.setTitle(String(title));
var edit=new Feis.EditText(ctx);
edit.setHint(hint==null?"此处输入内容…":hint);
if(text!=null)edit.setText(text);
edit.setFocusable(true);
edit.setFocusableInTouchMode(true);
edit.addTextChangedListener(new android.text.TextWatcher(){
beforeTextChanged:function(charSequence,start,count,after){},
onTextChanged:function(charSequence,start,before,count){},
afterTextChanged:function(editable){if(run!=null)run(edit.getText().toString(),true);}});
toast.setView(edit);
toast.setNeutralButton(lang("复制","Copy",配置.语言),new android.content.DialogInterface.OnClickListener(){
onClick:function(DialogInterface,i){
noDismiss(DialogInterface,false);Feis.ts("已复制到剪贴板.");
Feis.setCilp(edit.getText().toString());}});
toast.setNegativeButton(lang("取消","Cancel",配置.语言),new android.content.DialogInterface.OnClickListener(){
onClick:function(DialogInterface,i){
noDismiss(DialogInterface,true);}});
toast.setPositiveButton(lang("确认","Ok",配置.语言),new android.content.DialogInterface.OnClickListener(){
onClick:function(DialogInterface,i){
var t=edit.getText().toString()
if(run!=null&&!t.isEmpty())run(t);
noDismiss(DialogInterface,t.isEmpty()?false:true);}});
toast.setCancelable(false);
toast.show();}); }

Feis.工具={
判断圆内:function(x,y,px,py,pr){return (Math.sqrt((px-x)*(px-x)+(py-y)*(py-y))<=pr);},
矩形:function(){
var rect=[];this.左=0;this.上=0;this.右=0;this.下=0,this.宽=0;this.高=0,w=0,h=0;
this.设定=function(l,t,r,b){this.左=l;this.上=t;this.右=r;this.下=b; this.宽=(this.右-this.左);this.高=(this.下-this.上);}
this.设定矩形=function(rect){this.左=rect.l;this.上=rect.t;this.右=rect.r;this.下=rect.b; this.宽=(this.右-this.左);this.高=(this.下-this.上);}
this.断空=function(){return this.左>=this.右||this.上>=this.下;}
this.宽度=function(){return this.宽;}
this.高度=function(){return this.高;}
this.获取水平居中=function(){return (this.左+this.右)*0.5;}
this.获取垂直居中=function(){return (this.上+this.下)*0.5;}
this.重置=function(){this.左=this.上=this.右=this.下=0; this.宽=(this.右-this.左);this.高=(this.下-this.上);}
this.位移标记=function(x,y){rect=[];rect.push(x-this.左);rect.push(y-this.上);rect.push(this.右-x);rect.push(this.下-y);}
this.标记位移=function(x,y){this.左=x-rect[0];this.上=y-rect[1];this.右=x+rect[2];this.下=y+rect[3];}
this.居中位移=function(x,y){var w=this.宽,h=this.高;this.左=x-w/2;this.上=y-h/2;this.右=x+w/2;this.下=y+h/2;}
this.位移=function(l,t){this.右+=l-this.左;this.下+=t-this.上;this.左=l;this.上=t;}
this.在内=function(x,y){return (this.左<x&&this.右>x&&this.上<y&&this.下>y);}
this.在矩形内=function(l,t,r,b){return (this.左>=l&&this.上>=t&&this.右<=r&&this.下<=b);}
this.缩放=function(scale){if(scale!=1){this.左*=scale;this.上*=scale;this.右*=scale;this.下*=scale; this.宽=(this.右-this.左);this.高=(this.下-this.上);}}
this.禁止越界=function(l,t,r,b){
 if(this.左<l){this.左=l; this.右=this.左+this.宽;}
if(this.上<t){this.上=t;this.下=this.上+this.高;}
 if(this.右>r){this.右=r; this.左=this.右-this.宽;}
if(this.下>b){this.下=b;this.上=this.下-this.高;}}
this.临时缓存=function(){w=this.宽;h=this.高;}
this.临时缩放=function(x,y){var rw=w*0.5,rh=h*0.5;
this.左=(this.左+rw)-x*0.5;this.上=(this.上+rh)-y*0.5;this.右=this.左+x,this.下=this.上+y;
}
this.右下=function(w,h){
if(w>this.左&&h>this.上){this.右=w;this.下=h;this.宽=(this.右-this.左);this.高=(this.下-this.上);}}
this.左上=function(x,y){this.左=x;this.上=y;this.宽=(this.右-this.左);this.高=(this.下-this.上);}
this.导出矩形=function(){return new Feis.RectF(this.左,this.上,this.右,this.下);}
},
路径解析:function(list){
var PathDir=function(){
 this.Name;this.Path;this.ListPath=[];
 this.toString=function(){return this.Path;}
 this.getName=function(){return this.Name;}
 this.getPath=function(){return this.Path;}
 this.list=function(){return this.ListPath;}
 this.length=function(){return this.ListPath.length;} 
 this.review=function(){return this.ListPath[0];} }
this.listFiles=function(){
 var dir=[],pd=[];
 for(var i in list){
 if(this.isFile(list[i])){
 var path=this.getParent(list[i]);
 var index=dir.indexOf(path);
 if(index==-1){dir.push(path);
 var p=new PathDir();
 p.Name=this.getName(path);
 p.ListPath.push(list[i]);
 p.Path=path;pd.push(p);
 }else{pd[index].ListPath.push(list[i]);}
 }else{
 if(dir.indexOf(list[i])==-1){dir.push(list[i]);
 var p=new PathDir();
 p.Name=this.getName(list[i]);
 p.Path=list[i];pd.push(p);}}
 } dir=[]; return pd;}
this.getParent=function(path){
 var length=path.length;
 if(length==1)return path
 if(path.charAt(length-1)=="/"){
 path=path.substring(0,length-2);}
 return path.substring(0,path.lastIndexOf("/")+1);}
this.getName=function(path){
 var length=path.length;
 if(length==1)return path
 if(path.charAt(length-1)=="/"){
 path=path.substring(0,length-1);}
 return path.substring(path.lastIndexOf("/")+1);}
this.isFile=function(path){return (path.charAt(path.length-1)!="/");}
this.isDirectory=function(path){return !(this.isFile(path));}
this.isHidden=function(path){return (this.getName(path).charAt(0)==".");}
},
路径名称:function(path){
 var length=path.length;
 if(length==1)return path
 if(path.charAt(length-1)=="/"){
 path=path.substring(0,length-1);}
 return path.substring(path.lastIndexOf("/")+1);},
画圆角度:function(i){
return [-Math.sin(i/180*Math.PI),Math.cos(i/180*Math.PI)];},
getTextWidth:function(paint,str){
var width=0;
if(str!=null&&str.length>0){
var widths=JavaArray.newFloat(str.length);
paint.getTextWidths(content,widths);
for(var i in str){width+=Math.ceil(widths[i]);} }
return width;},
索引二转一:function(y,x,w){return x*w+y;},
索引一转二:function(i,w,h){
var x=Math.floor((i/h)%w), y=i%h;
return [x,y];},
近值匹配:function(arr, num){
var leng=arr.length,r=leng*0.5,index=-1;
if(leng%2==1) r=Math.ceil(leng*0.5);
var ret=arr[0];
if(leng==1)return [ret,0];
var dis=Math.abs(ret-num);
for(var i=1;i<=r;i++){
var d=Math.abs(arr[i]-num);
if(d<=dis){dis=d;ret=arr[i];index=i;}
if((r+i)<leng){
var d2=Math.abs(arr[i+r]-num);
if(d2<=dis){dis=d2;index=i+r;ret=arr[index];} } } 
return [ret,index];},
}
Feis.getImageViewXY=function(bw,bh,vw,vh,x,y){
 if(bw>=bh){var b=vh/(vw/bw)-bh;
 return [(bw/vw)*x, bh/(vh-b*0.5)*y];
 }else if(bh>bw){var b=vw/(vh/bh)-bw;
 return [bw/(vw-b*0.5)*x,(bh/vh)*y];}
}
Feis.NewLock=function(){
var lock=new java.util.concurrent.locks.ReentrantLock();
this.synchronized=function(run){lock.lock();
try{return run(lock);}finally{lock.unlock();}} 
} 

Feis.FastView=function(la){
var tv=new android.view.TextureView(ctx);
var isrun=false;
var lock=new Feis.NewLock();
var thread;var TICK=30,w=0,h=0;
this.setTick=function(v){TICK=1000/v;}
this.setLayoutParams=function(p){tv.setLayoutParams(p);w=p.width;h=p.height;}
this.show=function(layout){if(layout!=null)la=layout;la.addView(tv);}
this.draw=function(run){var canvas=tv.lockCanvas();run(canvas,tv);tv.unlockCanvasAndPost(canvas);}
var onDraw=function(run){
 tv.setSurfaceTextureListener(new android.view.TextureView.SurfaceTextureListener(){
 onSurfaceTextureAvailable:function(surface,width,height){
 try{isrun=true;
var 帧=30,计=0;差=0,始=new Date();
thread=new java.lang.Thread(function(){
while(isrun){var start=new Date();
lock.synchronized(function(){var canvas=tv.lockCanvas();run(canvas,w,h,帧);tv.unlockCanvasAndPost(canvas);
差=new Date()-始;
if(差<=1000){计+=1;}else{帧=计;计=1;始=new Date();} });
var update=(new Date()-start);
while(update<=TICK&&isrun){update=(new Date()-start);thread.yield();}
}});thread.start();
 }catch(e){Feis.报错(e);} },
 onSurfaceTextureSizeChanged:function(surface,width,height){},
 onSurfaceTextureDestroyed:function(surface){isrun=false; },
 onSurfaceTextureUpdated:function(surface){} });}
this.stopDraw=function(){isrun=false;var sp=true;
 while(sp){try{thread.join();}catch(e){ }sp=false;}}
this.startDraw=function(run){if(run!=null){onDraw(run);}}
this.getView=function(){return tv;}
this.dismiss=function(){this.stopDraw();
tv.setSurfaceTextureListener(null);
Feis.UiT(function(){la.removeView(tv);});}
}

Feis.setElevation=function(view,e,t){
if(android.os.Build.VERSION.SDK>20){
view.setElevation(e);
view.setTranslationZ(t);} }

function lang(zh,en,mode){
if(mode==0){
var locale=ctx.getResources().getConfiguration().locale;
var language=locale.getLanguage();
if(language.endsWith("zh")){return zh;}else{return en;}
}else if(mode==1){return zh;
}else if(mode==2){return en;}else{return en;} 
}

Feis.画笔=function(p){
var paint=(p==null?new Feis.Paint():p);
this.样式=function(type){
paint.setStyle(type==0?Feis.Paint.Style.STROKE:type==1?Feis.Paint.Style.FILL:Feis.Paint.Style.FILL_AND_STROKE);
}
this.重置=function(){paint.reset();}
this.平滑=function(){
paint.setAntiAlias(true);
paint.setFilterBitmap(true); 
}
this.颜色=function(color){paint.setColor(color);}
this.笔画宽度=function(w){paint.setStrokeWidth(w);}
this.字体大小=function(size){paint.setTextSize(size);}
this.实心画笔=function(color,is){this.平滑();
if(is)paint.reset();paint.setStyle(Feis.Paint.Style.FILL);
paint.setColor(color);};
this.空心画笔=function(color,is,h){this.平滑();
if(is)paint.reset();paint.setStyle(Feis.Paint.Style.STROKE);
paint.setColor(color);if(h!=null)paint.setStrokeWidth(h);}
this.橡皮擦=function(h){
paint.reset();paint.setAlpha(0);
paint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR));
paint.setAntiAlias(true);paint.setDither(true);
this.样式(0);paint.setStrokeJoin(Feis.Paint.Join.ROUND);
if(h!=null)paint.setStrokeWidth(h);
}
this.连接形状=function(tp){
paint.setStrokeJoin(tp==0?Feis.Paint.Join.ROUND:tp==2?Feis.Paint.Join.MITER:Feis.Paint.Join.BEVEL);
}
this.阴影=function(角度,x,y,color){
paint.setShadowLayer(角度,x,y,color);
};
this.渐变=function(l,t,r,b,arr){
paint.setShader(new android.graphics.LinearGradient(l,t,r,b,arr,null,android.graphics.Shader.TileMode.REPEAT)); 
};
this.字体倾斜=function(skew){paint.setTextSkewX(skew);}
this.字体缩放=function(scale){paint.setTextScaleX(scale);}
this.字体=function(path,mode){
if(!(new Feis.File(path).exists()))return null;
if(mode==null||mode==0){paint.setTypeface(android.graphics.Typeface.createFromFile(path));
}else if(mode==1){paint.setTypeface(android.graphics.Typeface.createFromAsset(ctx.getAssets(),path));}}
this.渐变=function(sx,sy,ex,ey,colors,pos,mode,rotate){
var tm=android.graphics.Shader.TileMode;
var m=(mode==1?tm.CLAMP:mode==2?tm.REPEAT:tm.MIRROR);
if(pos==null){pos=[];for(var i in colors){pos.push(i/colors.length);}}
var lg=new android.graphics.LinearGradient(sx,sy,ex,ey,colors,pos,m);
if(rotate!=null){var matrix=new Feis.Matrix();
lg.getLocalMatrix(matrix);matrix.setRotate(rotate,ex/2,ey/3);
lg.setLocalMatrix(matrix);}paint.setShader(lg);return lg; 
}
this.滤镜=function(m){
paint.setXfermode(m==null?null:Feis.滤镜(null,m));
}
this.路径圆弧效果=function(r,isout){
 var effect=new android.graphics.CornerPathEffect(r);
 if(!isout){paint.setPathEffect(effect);}else{return effect;}
}
this.路径虚线效果=function(间距数组,偏移,isout){
 var effect=new android.graphics.DashPathEffect(间距数组,偏移);
 if(!isout){paint.setPathEffect(effect);}else{return effect;}
}
this.路径离散效果=function(长度,距离,isout){
 var effect=new android.graphics.DiscretePathEffect(长度,距离);
 if(!isout){paont.setPathEffect(effect);}else{return effect;}
}
this.路径形状效果=function(形状路径,间距,偏移,转角样式,isout){
 var PathDash=android.graphics.PathDashPathEffect;
 var tp=(转角样式==0?PathDash.Style.ROTATE:转角样式==1?PathDash.Style.MORPH:PathDash.Style.TRANSLATE);
 var effect=new PathDash(形状路径,35,0,tp)
 if(!isout){paint.setPathEffect(effect);}else{return effect;}
}
this.相交路径效果=function(效果1,效果2,isout){
 var effect=new android.graphics.ComposePathEffect(效果1,效果2);
 if(!isout){paint.setPathEffect(effect);}else{return effect;}
}
this.重叠路径效果=function(效果1,效果2,isout){
 var effect=new android.graphics.SumPathEffect(效果1,效果2);
 if(!isout){paint.setPathEffect(effect);}else{return effect;}
}
this.模糊=function(blur,m){
m=(m==0?android.graphics.BlurMaskFilter.Blur.SOLID:
(m==1?android.graphics.BlurMaskFilter.Blur.INNER:
(m==2?android.graphics.BlurMaskFilter.Blur.NORMAL:
(m==3?android.graphics.BlurMaskFilter.Blur.OUTER:
android.graphics.BlurMaskFilter.Blur.SOLID))));
paint.setMaskFilter(new android.graphics.BlurMaskFilter(blur,m));
}
this.浮雕=function(x,y,z,亮度,反射,模糊){
paint.setMaskFilter(new android.graphics.EmbossMaskFilter([x,y,z],亮度,反射,模糊));
}
this.getPaint=function(){return paint;}
}
Feis.sp=function(spVal){
return android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_SP,spVal,ctx.getResources().getDisplayMetrics());
}
function ppp(str){
new Feis.Print().显示(str);
}
function qq聊天界面(qq){
var url="mqqwpa://im/chat?chat_type=wpa&uin="+qq+"&version=1";
 ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)));
}
function toRGB(R,G,B,colors){
var index=0;
var color=colors[0];
var start=Math.sqrt(Math.pow(R-color.r,2)+Math.pow(G-color.g,2)+Math.pow(B-color.b,2));
for(var i in colors){
 var obj=colors[i];
 var dist=Math.sqrt(Math.pow(R-obj.r,2)+Math.pow(G-obj.g,2)+Math.pow(B-obj.b,2));
 if(dist<start){index=i;start=dist;} }
return colors[index];
}
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～

function 圆形进度(){
var 路径=new Feis.Path();
var 画笔=Feis.绘画.画笔(Feis.Color.RED,2,5);
var 底色=Feis.ys(255,255,0,0),
面色=Feis.ys(255,0,0,255);
var 进程=0,
阶级=10,
变化粗细=5,
固定粗细=3;
this.setLineWidth=function(b,t){
 固定粗细=b;
 变化粗细=t;
}
this.setLineCount=function(n){
 阶级=Math.floor(360/n);
}
this.onDraw=function(画布,x,y,min,max){
 进程+=阶级;
 进程%=360;
 for(var i=0;i<360;i+=阶级){
var sx=-Math.sin(i/180*Math.PI);
var cy=Math.cos(i/180*Math.PI);
路径.reset();
路径.moveTo(x+min*sx,y+min*cy);
路径.lineTo(x+max*sx,y+max*cy);
if(i<=进程&&i>进程-360){
画笔.setStrokeWidth(变化粗细);
if(进程<阶级){
 底色=面色;
 面色=Feis.随机颜色(0,255);
}
画笔.setColor(面色)
}else{
画笔.setColor(底色);
画笔.setStrokeWidth(固定粗细);
}
画布.drawPath(路径,画笔);
}
} 
}

//～～～～～～～～～

function 方块动画(w){
var 格子数=8,
格子宽=0,
间隙=0,
格子=0,
进度=0,
停留=50;
var 颜色=头像正面; 
var 阶级=5,
滞留=0;
var 数组=[];
var update=function(c){
 格子数=c;
 格子宽=w/(格子数+2);
 间隙=(格子宽*2)/(格子数+1);
}
update(格子数);
var 矩形=new Feis.工具.矩形();
矩形.设定(0,0,格子宽,格子宽);
矩形.临时缓存();
this.setCount=function(c){
 update(c);
}
this.setTime=function(s){
 停留=s;
}
this.setLevel=function(l){
 阶级=l;
}
this.setColors=function(arr){
 颜色=arr;
}
this.setListColors=function(arr){
 数组=arr;
};
this.draw=function(cv){
矩形.设定(0,0,格子宽,格子宽);
进度+=阶级;
if(进度>格子宽){
 格子+=1;
 进度=0;
}
if(格子>格子数*格子数+停留){
 滞留+=1;
 if(滞留>=格子数*格子数){
格子=0;
滞留=0;
if(数组.length>0)颜色=数组[Feis.随机(0,数组.length-1)];
 } 
}
for(var i=滞留;i<格子&&i<格子数*格子数;i++){
 var f=Feis.工具.索引一转二(i,格子数,格子数);
 var x=f[0],y=f[1];
 矩形.位移(间隙+(间隙+格子宽)*y,间隙+(间隙+格子宽)*x);
 if(i==格子-1)矩形.临时缩放(进度,进度);
 cv.drawRect(矩形.左,矩形.上,矩形.右,矩形.下,Feis.绘画.画笔(Feis.ys(颜色[i]),2,0));
}
cv.drawRect(0,0,w,w,Feis.绘画.画笔(Feis.ys(255,0,255,220),0,1))
}
}

var 头像正面=[
0x88f2f2f2,0xffa387b3,0xffff9ec0,0xff867893,0xff81758c,0xff81758c,0xffa387b3,0x88f2f2f2,
0xff81758c,0xffa387b3,0xfff2f2f2,0xffff9ec0,0xff81758c,0xff81758c,0xffa387b3,0xff81758c,
0xffff9ec0,0xfff2f2f2,0xff81758c,0xffa387b3,0xff81758c,0xff81758c,0xffa387b3,0xff81758a,
0xff81758c,0xffff9ec0,0xff927ea0,0xffa387b3,0xff81758c,0xff81758c,0xffa387b3,0xff81758c,
0xff81758c,0xffa387b3,0xff1f1b19,0xffa387b3,0xff8e7b9a,0xff1f1b19,0xffa387b3,0xff81758c,
0xff85759c,0xffebe3ed,0xff1f1b19,0xffffead7,0xff8e7b9a,
0xff1f1b19,0xffebe3ed,0xff85759c,
0xff81758c,0xfffbf3ed,0xff554a43,0xffffead7,0xffffead7,
0xff554a43,0xfffbf3ed,0xff81758c,
0x6081758c,0xff877893,0xffffddbe,0xffffead7,0xffffead7,
0xffffddbe,0xff877893,0x6081758c
];

var 头像背面=[
0xffffffff,0xffffffff,0xff81758c,0xff867893,0xff81758c,0xff81758c,0xffffffff,0xffffffff,
0xffffffff,0xffff004d,0xff8c7b9a,0xff917ea0,0xff867893,0xff8c7b9a,0xffff004d,0xffffffff,
0xff8e7b9a,0xff9d84ad,0xff8c7b9a,0xff9781a6,0xff967893,0xff8c7b9a,0xff9d84ad,0xff8e7b9a,
0xff877893,0xff750026,0xff750026,0xffa387b3,0xff877893,0xff750026,0xff750026,0xff877893,
0xff750026,0xfff2f2f2,0xff00a7ff,0xffffead7,0xff877893,0xff00a7ff,0xfff2f2f2,0xff750026,
0xff750026,0xfff2f2f2,0xff00a7ff,0xffffead7,0xffffead7,0xff00a7ff,0xfff2f2f2,0xff750026,
0xff877893,0xffffb5d4,0xffffb5d4,0xffffead7,0xffffead7,0xffffb5d4,0xffffb5d4,0xff877893,
0xff8e758c,0xff8c7b9a,0xffffead7,0xffffead7,0xffffead7,0xffffead7,0xff8c7b9a,0xff8e758c
];

var 苦力怕头=[
0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,
0xff1d9400,0xff121212,0xff121212,0xff1d9400,0xff1d9400,0xff121212,0xff121212,0xff1d9400,
0xff1d9400,0xff121212,0xff121212,0xff1d9400,0xff1d9400,0xff121212,0xff121212,0xff1d9400,
0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,
0xff1d9400,0xff1d9400,0xff1d9400,0xff121212,0xff121212,0xff1d9400,0xff1d9400,
0xff1d9400,0xff1d9400,0xff1d9400,0xff121212,0xff121212,0xff121212,0xff121212,0xff1d9400,0xff1d9400,
0xff1d9400,0xff1d9400,0xff121212,0xff1d9400,0xff1d9400,0xff121212,0xff1d9400,0xff1d9400,
0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400,0xff1d9400
];

var 史蒂夫头=[
0xff2f200b,0xff2f200b,0xff2f200b,0xff2f200b,0xff2f200b,0xff2f200b,0xff2f200b,0xff2f200b,
0xff2f200b,0xff2f200b,0xff291e0c,0xff33240f,0xff402b10,0xff3e2a12,0xff2b1e0d,0xff342510,
0xff2f200b,0xffb58a6a,0xffbb8e71,0xffc49671,0xffa2745d,0xffbc8174,0xffac7758,0xff342510,
0xffa97d64,0xffb2846c,0xffa07d64,0xffad806b,0xff9b735a,0xffb98972,0xff9b6a4a,0xff9b6a4a,
0xffb2846c,0xffffffff,0xff513c87,0xffb47b67,0xffb98972,0xff513c87,0xffffffff,0xffb2846c,
0xff9a6344,0xffb37b62,0xffb68372,0xff69402e,0xff69402e,0xffbe896a,0xffa06a46,0xff805332,
0xff8f5d42,0xff965f40,0xff764234,0xff764234,0xff764234,0xff764234,0xff8f5e3d,0xff805238,
0xff6e442b,0xff6e442b,0xff805238,0xff805238,0xff7a4e33,0xff82543a,0xff82543a,0xff7a4e33
];

var 骷髅头像=[
0xff636563,0xff636163,0xff636563,0xff5a595a,0xff525152,0xff525552,0xff5a5d5a,0xff636163,
0xff636163,0xff5a5d5a,0xff636163,0xff6b696b,0xff737573,0xff737173,0xff636163,0xff5a595a,
0xff636163,0xff7b797b,0xff7b7d7b,0xff848184,0xff7b7d7b,0xff7b7d7b,0xff737173,0xff6b696b,
0xff737173,0xff7b797b,0xff737173,0xff737573,0xff6b696b,0xff7b7d7b,0xff6b696b,0xff6b696b,
0xff7b797b,0xff312d31,0xff312d31,0xff7b797b,0xff7b7d7b,0xff312d31,0xff312d31,0xff737173,
0xff6b696b,0xff737573,0xff7b797b,0xff525152,0xff525152,0xff7b7d7b,0xff6b696b,0xff5a595a,
0xff636163,0xff292d29,0xff292d29,0xff292d29,0xff292d29,0xff292d29,0xff292d29,0xff5a595a,
0xff4a4d4a,0xff524d52,0xff525152,0xff525552,0xff5a595a,0xff525152,0xff5a5d5a,0xff525152
];

var xxxxx=[
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,
0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff ,0xff 
];

var 主题=[
{
 zh_name:"粉色主题",
 en_name:"Pink theme",
 data:{
线条类型:0,
标题圆角:0,
标题圆角1:0,
标题背色:Feis.ys(0xFFFC787B),
标题背色2:Feis.ys(0xFFFC787B),
标题文色:Feis.ys(255,255,255,255),
提示颜色:Feis.ys(255,0,0,0),
标题阴影:7,
按键圆角:5,
按键圆角1:10,
按键圆角2:15,
按键背色:Feis.ys(0xFFFA8F91),
按键背色2:Feis.ys(0xFFFA8F91),
按键文色:Feis.ys(255,255,255,255),
按键阴影:7,
背景线数:12,
背景线条:Feis.ys(255,0,0,0),
背景颜色:Feis.ys(255,240,240,240),
编辑线数:18,
编辑线条:Feis.ys(255,255,255,255),
编辑背色:Feis.ys(255,150,150,150)
 }
},
{
 zh_name:"科幻主题",
 en_name:"Science theme",
 data:{
线条类型:0,
标题圆角:0,
标题圆角1:0,
标题背色:Feis.ys(100,0,0,0),
标题背色2:Feis.ys(100,0,0,0),
标题文色:Feis.ys(255,0,200,210),
提示颜色:Feis.ys(255,255,255,0),
标题阴影:7,
按键圆角:5,
按键圆角1:10,
按键圆角2:15,
按键背色:Feis.ys(100,0,200,210),
按键背色2:Feis.ys(100,0,200,210),
按键文色:Feis.ys(255,255,255,0),
按键阴影:7,
背景线数:30,
背景线条:Feis.ys(255,0,200,210),
背景颜色:Feis.ys(120,0,0,0),
编辑线数:80,
编辑线条:Feis.ys(255,0,200,210),
编辑背色:Feis.ys(180,0,0,0)
 }
},
 {
 zh_name:"卡其色主题",
 en_name:"Khaki theme",
 data:{
 线条类型:2,
标题圆角:5,
标题圆角1:0,
标题背色:Feis.ys(0xFFF5C48A),
标题背色2:Feis.ys(0xFFF5C48A),
标题文色:Feis.ys(0xFFAA5A00),
提示颜色:Feis.ys(255,0,0,0),
标题阴影:2,
按键圆角:4,
按键圆角1:6,
按键圆角2:8,
按键背色:Feis.ys(0xFFFFEA96),
按键背色2:Feis.ys(0xFFFFEA96),
按键文色:Feis.ys(0xFF5A4800),
按键阴影:7,
背景线数:5,
背景线条:Feis.ys(0xFF5E0000),
背景颜色:Feis.ys(0xFFF8DB67),
编辑线数:10,
编辑线条:Feis.ys(0xFED69600),
编辑背色:Feis.ys(0xFE695D41)
 }
},
 {
 zh_name:"缤纷主题",
 en_name:"Profusion theme",
 data:{
线条类型:3,
标题圆角:8,
标题圆角1:2,
标题背色:[Feis.ys(0xFF73FF00),
Feis.ys(0xFFFFF300),
Feis.ys(0xFF0080FF),
Feis.ys(0xFFFF0000)
],
标题背色2:Feis.ys(0xFFFFF300),
标题文色:Feis.ys(0xFFFF0000),
提示颜色:Feis.ys(255,200,0,0),
标题阴影:4,
按键圆角:6,
按键圆角1:8,
按键圆角2:12,
按键背色:[Feis.ys(0xFFC8DD6A),
Feis.ys(0xFFDD6D6A),
Feis.ys(0xFF6ADD9C)
],
按键背色2:Feis.ys(0xFFC8DD6A),
按键文色:Feis.ys(0xFFFFFFFF),
按键阴影:5,
背景线数:1,
背景线条:Feis.ys(0xFE00FFEA),
背景颜色:[Feis.ys(0xFF86003C),
Feis.ys(0xFF006786),
Feis.ys(0xFF864A00),
Feis.ys(0xFF758600)
],
编辑线数:2,
编辑线条:Feis.ys(0xFE0005FF),
编辑背色:[Feis.ys(0xFF580700),
Feis.ys(0xFF415800),
Feis.ys(0xFF00581D),
Feis.ys(0xFF004A58),
Feis.ys(0xFF200058),
Feis.ys(0xFF580053),
Feis.ys(0xFF580014)
]
 }
},
{
 zh_name:"QQ蓝",
 en_name:"Bule theme",
 data:{
线条类型:4,
标题圆角:2,
标题圆角1:0,
标题阴影:2,
标题背色:[
Feis.ys(0xFF26C5FD),
Feis.ys(0xFF4E8EFE),
],
标题背色2:Feis.ys(0xFF25C4FD),
标题文色:Feis.ys(0xffeeeeee),
提示颜色:Feis.ys(255,0,0,0),
按键圆角:2,
按键圆角1:4,
按键圆角2:6,
按键阴影:7,
按键背色:Feis.ys(0xFFFFFFFF),
按键背色2:Feis.ys(0xFFFFFFFF),
按键文色:Feis.ys(0xFF000000),
背景线数:10,
背景线条:Feis.ys(0xFFDEDFE0),
背景颜色:Feis.ys(0xFFFFFFFF),
编辑线数:15,
编辑线条:Feis.ys(0xFFDEDFE0),
编辑背色:Feis.ys(0xFFF9F9FB)
 }
},
 {
 zh_name:"小黑主题",
 en_name:"Enderdragon",
 data:{
线条类型:1,
标题圆角:4,
标题圆角1:0,
标题背色:Feis.ys(255,0,0,0),
标题背色2:Feis.ys(255,0,0,0),
标题文色:Feis.ys(255,213,0,255),
提示颜色:Feis.ys(255,255,0,255),
标题阴影:7,
按键圆角:3,
按键圆角1:5,
按键圆角2:8,
按键背色:Feis.ys(255,59,59,59),
按键背色2:Feis.ys(255,59,59,59),
按键文色:Feis.ys(255,255,0,255),
按键阴影:7,
背景线数:5,
背景线条:Feis.ys(255,255,0,255),
背景颜色:[Feis.ys(255,59,59,59),
Feis.ys(255,0,0,0)],
编辑线数:10,
编辑线条:Feis.ys(255,255,0,255),
编辑背色:[Feis.ys(255,95,95,95),
Feis.ys(255,0,0,0)]
 }
},
{
 zh_name:"壁纸主题",
 en_name:"Wallpaper",
 data:{
线条类型:0,
标题圆角:2,
标题圆角1:2,
标题背色:Feis.ys(200,200,200,200),
标题背色2:Feis.ys(200,200,200,200),
标题文色:Feis.ys(255,0,0,0),
提示颜色:Feis.ys(255,255,255,0),
标题阴影:7,
按键圆角:10,
按键圆角1:20,
按键圆角2:30,
按键背色:Feis.ys(120,200,200,200),
按键背色2:Feis.ys(120,200,200,200),
按键文色:Feis.ys(255,0,0,0),
按键阴影:7,
背景线数:0,
背景线条:Feis.ys(255,255,0,255),
背景颜色:null,
编辑线数:0,
编辑线条:Feis.ys(255,255,0,255),
编辑背色:null
 }
},
{
 zh_name:"夜间主题",
 en_name:"Night theme",
 data:{
线条类型:4,
标题圆角:2,
标题圆角1:0,
标题背色:Feis.ys(255,18,42,80),
标题背色2:Feis.ys(255,18,42,80),
标题文色:Feis.ys(255,118,153,186),
提示颜色:Feis.ys(255,255,255,255),
标题阴影:7,
按键圆角:0,
按键圆角1:0,
按键圆角2:0,
按键背色:Feis.ys(255,24,50,87),
按键背色2:Feis.ys(255,24,50,87),
按键文色:Feis.ys(255,118,153,186),
按键阴影:7,
背景线数:50,
背景线条:Feis.ys(255,48,74,102),
背景颜色:Feis.ys(250,10,24,45),
编辑线数:25,
编辑线条:Feis.ys(255,167,196,226),
编辑背色:Feis.ys(250,5,28,61)
 }
},
{
 zh_name:"深海主题",
 en_name:"Deep sea theme",
 data:{
线条类型:4,
标题圆角:10,
标题圆角1:0,
标题背色:[Feis.ys(250,0,31,76),
Feis.ys(250,0,103,255)],
标题背色2:Feis.ys(250,0,0,96),
标题文色:Feis.ys(255,255,255,255),
提示颜色:Feis.ys(255,200,200,200),
标题阴影:7,
按键圆角:40,
按键圆角1:30,
按键圆角2:20,
按键背色:[Feis.ys(150,0,0,64),
Feis.ys(150,0,0,255)],
按键背色2:Feis.ys(150,0,0,110),
按键文色:Feis.ys(255,200,200,200),
按键阴影:7,
背景线数:50,
背景线条:Feis.ys(255,170,0,70),
背景颜色:[
Feis.ys(255,0,0,224),
Feis.ys(255,0,0,192),
Feis.ys(255,0,0,160),
Feis.ys(255,0,0,128),
Feis.ys(255,0,0,96),
Feis.ys(255,0,0,64),
Feis.ys(255,0,0,32),
Feis.ys(255,0,0,0)],
编辑线数:20,
编辑线条:Feis.ys(255,170,0,70),
编辑背色:[Feis.ys(255,0,0,224),
Feis.ys(255,0,0,192),
Feis.ys(255,0,0,160),
Feis.ys(255,0,0,128),
Feis.ys(255,0,0,96),
Feis.ys(255,0,0,64),
Feis.ys(255,0,0,32),
Feis.ys(255,0,0,0)]
 }
}
];

var 壁纸;
var 获取壁纸=function(){
if(壁纸==null){
var bz=Feis.toBlur(Feis.getWallpaper(true),40,100);
壁纸=Feis.bmpToDraw(bz);
}
return 壁纸;
}

Feis.newFileList=function(path){
var file=new Feis.File(path);
if(file.isFile()){
 file.getParentFile().mkdirs();
}else{
 file.mkdirs();
}
}

//～～～～～～～～～～～～～～～～～～～～～～

var 历史目录=Feis.根路径("/games/印画/历史");
var 配置目录=Feis.根路径("/games/印画/配置");
var 配置文件=配置目录+"/setting.dat";

var 当前绘画;
var 当前高度=0;
var 当前宽度=0;
var 当前像素;
var 当前主题;
var 当前模式=1;
var 放置方向=0;
var 放置状态=0;
var 当前色系;
var 像素;
var 放置记录=[];

var 模式名称=["玻璃","泥沙","混泥土","羊毛","黏土","彩色方块","杂色方块","所有方块","草地染色"];
var 模式名称2=["Glass block","Cement powder","Concrete block","Wool block","Clay block","Colors block","Noise color","All block","Grass dyed"];
var 语言名称=["Language(Auto)",">English<",">简体中文<"];

var 配置={
语言:0,
主题:3,
线程:1,
位置x:Feis.dp(1,800),
位置y:Feis.dp(3,200),
}

Feis.newFileList(历史目录);
Feis.newFileList(配置目录);
	ppp(lang("正在加载...","loading...",配置.语言));

if(!(new Feis.File(配置文件).exists())){
数据存储();
}else{
数据恢复();
}
var 当前主题=主题[配置.主题].data;

function 数据恢复(){
var 设置数据=Feis.读取文本(配置文件);
if(设置数据!=null)
配置=Feis.jsonData(设置数据);
else 
数据存储();
}

function 数据存储(){
Feis.保存文本(配置文件,Feis.jsonData(配置));
}

//～～～～～～～～～～～～～～～～～～～～～

function getTimeString(){
return new java.text.SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
}

function Orientation(xz){
var x=0,z=0,m=0;
var f=(getYaw()%360+360)%360;
if(f>=315||f<45){x=-1;z=1;m=0}//西
if(f>=45&&f<135){x=-1;z=-1;m=1}//北
if(f>=135&&f<225){x=1;z=-1;m=2}//东
if(f>=225&&f<315){x=1;z=1;m=3}//南
if(xz==0){return x}
if(xz==1){return z}
if(xz==2){return m}
}

function GrassPaint(x,y,z,color){
if(color.indexOf("0xff")!=-1){
 Level.setTile(x,y,z,0);
 Level.setTile(x,y,z,2,0);
 Level.setGrassColor(x,z,color);
}
}

//～～～～～～～～～～～～～～～～～～

function GrassPaintDraw(x,y,z){
var m=Orientation(2);
像素=Feis.copy(当前像素);
放置记录=[];
var h=当前高度,w=当前宽度
for(var i=0;i<当前像素.length;i++){
 var f=Feis.工具.索引一转二(i,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[i],i);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
染色放置(x,y,z,px,pz,m,i)
}
放置状态=0;
放置状态关闭();
ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));
}

//～～～～～～～～～～～～～～～～～～～

function BlockPaintDraw(x,y,z){
var m=Orientation(2);
像素=Feis.copy(当前像素);
放置记录=[];
var h=当前高度,w=当前宽度;
for(var i=0;i<像素.length;i++){
 var f=Feis.工具.索引一转二(i,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[i],i);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
if(放置方向==0){
水平放置(x,y,z,px,pz,m,i);
}else if(放置方向==1){
垂直放置(x,y,z,px,pz,m,i);
}
 }
放置状态=0;
放置状态关闭();
ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));
}

//～～～～～～～～～～～～～～～～～～～～～

function GrassPaintDraw2(x,y,z){
var m=Orientation(2);
像素=Feis.copy(当前像素);
放置记录=[];
var h=当前高度,w=当前宽度;
var length=Math.floor(像素.length/2);
var count1=0,count2=1;
ppp(lang("§e开始绘制...","§eStart drawing...",配置.语言)+x+","+y+","+z);
Feis.线程(function(){
for(var i=0;i<length;i++,count1++){
 var f=Feis.工具.索引一转二(i,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[i],count1+count2);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
染色放置(x,y,z,px,pz,m,i);
if((count1+count2)==像素.length){
 放置状态=0;放置状态关闭();
 ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));}
}
});
Feis.线程(function(){
for(var j=像素.length-1;j>=length;j--,count2++){
 var f=Feis.工具.索引一转二(j,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[j],count1+count2);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
染色放置(x,y,z,px,pz,m,j);
if((count1+count2)==像素.length){
 放置状态=0;放置状态关闭();
 ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));}
}
});
}


function BlockPaintDraw2(x,y,z){
var m=Orientation(2);
像素=Feis.copy(当前像素);
放置记录=[];
var h=当前高度,w=当前宽度;
var length=Math.floor(像素.length/2);
var count1=0,count2=1;
ppp(lang("§e开始绘制...","§eStart drawing...",配置.语言)+x+","+y+","+z);
Feis.线程(function(){
for(var i=0;i<length;i++,count1++){
 var f=Feis.工具.索引一转二(i,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[i],count1+count2);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
if(放置方向==0){
水平放置(x,y,z,px,pz,m,i);
}else if(放置方向==1){
垂直放置(x,y,z,px,pz,m,i);
}
if((count1+count2)==像素.length){
放置状态=0;放置状态关闭();
ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));}
}
});
Feis.线程(function(){
for(var j=像素.length-1;j>=length;j--,count2++){
 var f=Feis.工具.索引一转二(j,h,w);
 var px=f[0],pz=f[1];
放置状态更新(pz,px,像素[j],count1+count2);
if(放置状态==0){
 放置状态关闭();
 ppp(lang("§e放置取消","§eDraw cancel",配置.语言));
 break;
}
if(放置方向==0){
水平放置(x,y,z,px,pz,m,j);
}else if(放置方向==1){
垂直放置(x,y,z,px,pz,m,j);
}
if((count1+count2)==像素.length){
放置状态=0;放置状态关闭();
ppp(lang("§e绘制结束","§eDraw complete...",配置.语言));}
}
});
}

//～～～～～～～～～～～～～～～～～～～～～～

function 水平放置(x,y,z,px,pz,m,i){
if(m==0){x-=px;z+=pz;}//西
else if(m==1){x-=pz;z-=px;}//北
else if(m==3){z+=px;x+=pz;}//东
else if(m==2){z-=pz;x+=px;}//南
if(Feis.getAlpha(像素[i])>20){
var c=Feis.Color_toARGB(像素[i]);
var bc=toRGB(c[1],c[2],c[3],当前色系);
放置录制(x,y,z);
Level.setTile(x,y,z,bc.id,bc.da);
}
}

function 垂直放置(x,y,z,px,pz,m,i){
if(m==0)z+=px;
else if(m==1)x-=px;
else if(m==2)z-=px;
else if(m==3)x+=px;
if(Feis.getAlpha(像素[i])>40){
var c=Feis.Color_toARGB(像素[i]);
var bc=toRGB(c[1],c[2],c[3],当前色系);
放置录制(x,y+pz,z);
Level.setTile(x,y+pz,z,bc.id,bc.da);
}
}

function 染色放置(x,y,z,px,pz,m,i){
if(m==0){x-=px;z+=pz;}//西
else if(m==1){x-=pz;z-=px;}//北
else if(m==3){z+=px;x+=pz;}//东
else if(m==2){z-=pz;x+=px;}//南
if(Feis.getAlpha(像素[i])>40){
放置录制(x,y,z);
GrassPaint(x,y,z,Feis.Color_toHex(像素[i]));
}
}


function 放置录制(x,y,z){
放置记录.push([x,y,z,Level.getTile(x,y,z),Level.getData(x,y,z)]);
}

function 放置恢复(){
ppp(lang("§e恢复中...","§eRecovery...",配置.语言));
Feis.线程(function(){
for(var i in 放置记录){
var d=放置记录[i];
Level.setTile(d[0],d[1],d[2],d[3],d[4]);
}
放置记录=[];
ppp(lang("§e恢复结束","§eRecovery complete",配置.语言));
});
}


//～～～～～～～～～～～～～～～～～～～～～

function useItem(x,y,z,手持,被点,面,手持特值,被点特值){
if(手持==267&&当前像素!=null&&放置状态==0){
放置状态=1;
放置状态窗口();
if(配置.线程==0){
 ppp(lang("§e开始绘制...","§eStart drawing...",配置.语言)+x+","+y+","+z);
 try{
  if(当前模式==方块色系.length){
  GrassPaintDraw(x,y,z);
  }else{
  BlockPaintDraw(x,y,z);}
  }catch(e){Feis.报错(e);}

}else if(配置.线程==1){
ppp(lang("§e开始绘制...","§eStart drawing...",配置.语言)+x+","+y+","+z);
Feis.线程(function(){
 try{
  if(当前模式==方块色系.length){
  GrassPaintDraw(x,y,z);
  }else{
  BlockPaintDraw(x,y,z);}
 }catch(e){Feis.报错(e);}
 });
 
}else if(配置.线程==2){
 try{
  if(当前模式==方块色系.length){
  GrassPaintDraw2(x,y,z);
  }else{
  BlockPaintDraw2(x,y,z);}
 }catch(e){Feis.报错(e);}
}
}
}

function newLevel(){
ppp(lang("§e欢迎使用§b像素印画Ⅱ","§eWelcome to use §bPixelsPrinterⅡ",配置.语言));
}

//～～～～～～～～～～～～～～～～～～～～～

var 状态窗口;
var 状态视图;
var 状态位图;
var 状态文本;

function 放置状态窗口(){
Feis.UiT(function(){
var winArray=Feis.addWindow2(Feis.ys(0,0,0,0,0),
 Feis.dp(0,1000),Feis.dp(3,2),Feis.dip(120),Feis.dip(140),false,false);
 状态窗口=winArray[0];
 var layout=winArray[1];
 try{
 状态位图=Feis.Bitmap.createBitmap(当前宽度,当前高度,Feis.Bitmap.Config.ARGB_8888);
状态视图=Feis.JSONImageView({
位图:状态位图,
宽度:Feis.dip(120),
高度:Feis.dip(120),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(Feis.ys(0,0,0,0),Feis.dip(0)),
旋转:270,
布局:layout,
阴影:当前主题.按键阴影,
});

 状态文本=Feis.JSONTextView({
文本:"0%",
宽度:Feis.dip(60),
高度:Feis.dip(20),
文本大小:10,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.提示颜色,
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(4)),
文本重心:Feis.getGravity("居中"),
布局:layout,
});

}catch(e){Feis.报错(e);}
});
}

function 放置状态关闭(){
Feis.UiT(function(){
if(状态窗口!=null){
状态窗口.dismiss();
状态窗口=null;
}
});
}

function 放置状态更新(x,y,color,porg){
Feis.线程(function(){
var leng=当前宽度*当前高度;
if(状态窗口!=null&&状态视图!=null){
状态位图.setPixel(x,y,color);
Feis.UiT(function(){
状态文本.setText((porg*100/leng).toFixed()+"%");
状态视图.setImageBitmap(状态位图);
});
}
});
}

//～～～～～～～～～～～～～～～～～～～～～

var 信息窗口;
var 信息视图;
var 信息文本;
当前信息窗口();

function 当前信息窗口(){
Feis.UiT(function(){
 var winArray=Feis.addWindow2(Feis.ys(0,0,0,0,0),
 Feis.dp(0,1000),Feis.dp(3,420),Feis.dip(60),Feis.dip(90),false,false);
 信息窗口=winArray[0];
 var layout=winArray[1];
 try{
信息视图=Feis.JSONImageView({
宽度:Feis.dip(60),
高度:Feis.dip(60),
位置重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
});

 信息文本=Feis.JSONTextView({
文本:"",
宽度:Feis.dip(60),
高度:Feis.dip(28),
文本大小:7,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.提示颜色,
背景绘图:Feis.jb(Feis.ys(10,0,0,0),Feis.dip(4)),
文本重心:Feis.getGravity("居中"),
布局:layout,
});

}catch(e){Feis.报错(e);}
});
}

function 信息统计更新(){
Feis.线程(function(){
var size=0;
for(var i=0;i<当前像素.length;i++){
 if(Feis.getAlpha(当前像素[i])>40)size+=1;
 }
信息窗口更新(size);
});
}

function 信息窗口更新(num){
Feis.UiT(function(){
信息视图.setImageBitmap(当前绘画.getBitmap(true));
信息文本.setText(当前宽度+"x"+当前高度+"\nblocks:"+num);
信息文本.setTextColor(当前主题.提示颜色);
});
}


//～～～～～～～～～～～～～～～～～～～～～


function 铺图选项(w,h,x,y){
Feis.UiT(function(){
 try{
var pw=Feis.dip(160),ph=Feis.dip(235);
 if(x<=pw){x=x+w;}else{x-=pw;}
 if(y>=Feis.屏高-ph){y=y-ph;}else{y+=(w/2);}
var winArray=Feis.addWindow2(
当前主题.背景颜色==null?获取壁纸():
画线(pw,ph,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型),x,y,pw,ph,true,true);
var win=winArray[0];
var layout=winArray[1];

var la0=Feis.addLayout(layout,0);
 la0.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(45),
上边距:Feis.dip(6),
位置重心:Feis.getGravity("居中")
})
 );
 
Feis.JSONTextView({
文本:lang("编辑图像","Edit image",配置.语言),
宽度:Feis.dip(75),
高度:Feis.dip(35),
上边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la0,
阴影:当前主题.按键阴影,
监听:function(v){
编辑菜单(当前绘画);
//useItem(0,0,0,267);
}
});

Feis.JSONTextView({
文本:lang("重选图片","Reselect lmage",配置.语言),
宽度:Feis.dip(75),
高度:Feis.dip(35),
左边距:Feis.dip(2),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la0,
阴影:当前主题.按键阴影,
监听:function(v){
 if(主页窗口==null)主页();
}
});

var tv2=Feis.JSONTextView({
文本:lang("模式:"+模式名称[当前模式],"Mode:"+模式名称2[当前模式],配置.语言),
宽度:Feis.dip(154),
高度:Feis.dip(35),
上边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(v){
if(放置状态==0){
 当前模式+=1;
 if(当前模式>方块色系.length){
 当前模式=0;
 }
 if(当前模式<方块色系.length){
 当前色系=方块色系[当前模式];
 }
 tv2.setText(lang("模式:"+模式名称[当前模式],"Mode:"+模式名称2[当前模式],配置.语言));
 }else{
 ppp(lang("§e放置中，稍后再试...","§e Drawing，Please wait a moment...",配置.语言));
 }
}
});

var tv3=Feis.JSONTextView({
文本:lang(
"线程:"+(配置.线程==0?"关闭":配置.线程==1?"单线程":"双线程"),
"Thread:"+(配置.线程==0?"off":配置.线程==1?"single":"double"),配置.语言),
宽度:Feis.dip(154),
高度:Feis.dip(35),
上边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(v){
if(放置状态==0){
if(配置.线程==0){
 配置.线程=1;
 ppp(lang("§e单线程模式打印§a速度快§e，但打印大尺寸图片§c可能闪退","§eSingle-threaded mode prints §afast§e, but printing large-size images may §ccrash§e.",配置.语言));
}else if(配置.线程==1){
 配置.线程=2;
ppp(lang("§e双线程模式打印§c速度慢§e且§c容易闪退§e，不建议使用","§eDual-threaded mode prints §cslowly §eand is easy to§c crash§e. Not recommended to use",配置.语言));
}else if(配置.线程==2){
 配置.线程=0;
 ppp(lang("§e该模式下打印§a稳定不闪退§e，建议大尺寸图片使用","§eIn this mode, printing is §astable§e and does§a not crashed§e. It is recommended to use in large size pictures.",配置.语言));
}
 tv3.setText(lang(
"线程:"+(配置.线程==0?"关闭":配置.线程==1?"单线程":"双线程"),
"Thread:"+(配置.线程==0?"off":配置.线程==1?"single":"double"),配置.语言));
 数据存储();
  }else{
 ppp(lang("§e放置中，稍后再试...","§e Drawing.，Please wait a moment..",配置.语言));
 }
}
});

Feis.JSONTextView({
文本:lang("如果放置方块闪退请关闭线程！","Set block exception. please close thread!",配置.语言),
宽度:Feis.dip(154),
高度:Feis.dip(20),
文本大小:8,
文本颜色:当前主题.提示颜色,
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(Feis.ys(0,255,255,255),Feis.dip(2)),
文本重心:Feis.getGravity("居中"),
布局:layout,
});

var tv4=Feis.JSONTextView({
文本:lang("方向:"+(放置方向==0?"水平":"垂直"),"Orientation:"+(放置方向==0?"level":"vertical"),配置.语言),
宽度:Feis.dip(154),
高度:Feis.dip(35),
上边距:Feis.dip(2),
下边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(v){
if(放置状态==0){
 if(放置方向==0)
 放置方向=1;
 else if(放置方向==1)
 放置方向=0;
 tv4.setText(lang("方向:"+(放置方向==0?"水平":"垂直"),"Orientation:"+(放置方向==0?"level":"vertical"),配置.语言));
 }else{
 ppp(lang("§e放置中，稍后再试...","§e Drawing.，Please wait a moment..",配置.语言));
 }
}
});

var la1=Feis.addLayout(layout,0);
 la1.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(45),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中")
})
 );

var tv5=Feis.JSONTextView({
文本:lang("放置终止","Place block stop",配置.语言),
宽度:Feis.dip(75),
高度:Feis.dip(35),
上边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(v){
 if(放置状态==1)
 放置状态=0;
 else {
 ppp(lang("没有图像正在打印","The current has not placed",配置.语言));
 }
}
});

var tv6=Feis.JSONTextView({
文本:lang("撤销放置","Undo place",配置.语言),
宽度:Feis.dip(75),
高度:Feis.dip(35),
上边距:Feis.dip(2),
左边距:Feis.dip(2),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(v){
 if(放置状态==0){
  if(放置记录.length>0){
   放置恢复();
  }else{
   ppp(lang("§e没有放置记录","§e No place record..",配置.语言));
  }
 }else{
  ppp(lang("§e放置中，稍后再试...","§e Drawing.，Please wait a moment..",配置.语言));
 }
}
});

 }catch(e){Feis.报错(e);}
});
}



快捷方式();

function 快捷方式(){
Feis.UiT(function(){
var w=Feis.dip(55),
h=Feis.dip(55);
 var winArray=Feis.addWindow2(Feis.ys(0,0,0,0,0),
 配置.位置x,配置.位置y,w,h,false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
var fla=Feis.addLayout(layout);
var fv=new Feis.FastView(fla);
 fv.show();
 fv.setTick(15);
 fv.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(54),
高度:Feis.dip(54)
})
 );
var f=new 方块动画(Feis.dip(54));
 f.setLevel(10);
 f.setColors(头像正面);
 f.setListColors([头像正面,头像背面,史蒂夫头,苦力怕头,骷髅头像]);

fv.startDraw(function(cv,w,h,t){
try{
 Feis.绘画.清屏(cv);
 f.draw(cv);
}catch(e){Feis.报错(e);fv.stopDraw();}
});

var move=new Feis.窗口拖动(win,fv.getView());
 move.开关拖动(function(x,y,e){
配置.位置x=x;
配置.位置y=y;
 },function(){
ppp(lang("§e头像§7位置设置完成！","§eHead portrait §7Position has been fixed",配置.语言));
数据存储();
}
);

move.点击监听(function(v){
//if(主页窗口==null)主页();
if(当前像素!=null||当前绘画!=null){
 铺图选项(w,h,配置.位置x,配置.位置y);
}else{
if(主页窗口==null)主页();
}
ppp(lang("§e当前还没有选择或已编辑的图片，长按“头像”可以打开菜单","§eThere are no selected or edited pictures at the moment. Open menu by long press \"head image\"",配置.语言));
});

move.长按监听(function(v){
快捷选项(w,h,配置.位置x,配置.位置y,move);
return true;
});
}catch(e){Feis.报错(e);}
});
}

//～～～～～～～～～～～～～～～～～～～～～～

function 主题预览(){
Feis.UiT(function(){
 var pw=Feis.dip(300),
ph=Feis.dip(400);
 var winArray=Feis.addWindow2(
 画背景(Feis.dip(300),Feis.dip(400))
 ,Feis.dp(1,500)-pw/2,Feis.dp(3,500)-ph/2,pw,ph,false,true);
 var win=winArray[0];
 var layout=winArray[1];
try{
var tv=Feis.JSONTextView({
文本:lang("ὑ9�选择主题","ὑ9�Select theme️",配置.语言),
宽度:Feis.dip(300),
高度:Feis.dip(40),
位置重心:Feis.getGravity("居中"),
文本大小:16,
文本颜色:当前主题.标题文色,
背景绘图:
Feis.jb(当前主题.标题背色,
[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.标题阴影,
监听:function(v){
win.dismiss();
}
});

var ad=new Feis.BaseAdapter(主题,function(pos,convertView,parent,obj){
try{
var la=Feis.addLayout(null,1);

var la0=Feis.addLayout(la,1);
 la0.setBackgroundDrawable(
 obj.data.背景颜色==null?获取壁纸():
 画线(Feis.dip(294),Feis.dip(100),
obj.data.背景线数,
obj.data.背景线条,
obj.data.背景颜色,
obj.data.线条类型));
 la0.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(294),
高度:Feis.dip(200),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中")
})
 );
 
var tv0=Feis.JSONTextView({
 文本:lang(obj.zh_name,obj.en_name,配置.语言),
 宽度:Feis.dip(290),
 高度:Feis.dip(30),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:15,
 文本颜色:obj.data.标题文色,
 背景绘图:
 Feis.jb(obj.data.标题背色,
 [Feis.dip(obj.data.标题圆角1),Feis.dip(obj.data.标题圆角1),Feis.dip(obj.data.标题圆角),Feis.dip(obj.data.标题圆角)]),
 文本重心:Feis.getGravity("居中"),
 阴影:obj.data.标题阴影,
 布局:la0
});

var tvb0=Feis.JSONTextView({
 文本:配置.主题!=pos?lang("☐选择","☐Select",配置.语言):lang("☑使用中","☑Used",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 上边距:Feis.dip(50),
 位置重心:Feis.getGravity("居中"),
 文本大小:15,
 文本颜色:obj.data.按键文色,
 背景绘图:
 Feis.jb(obj.data.按键背色,
 Feis.dip(obj.data.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:obj.data.按键阴影,
 监听:function(v){
 当前主题=主题[配置.主题=pos].data;
 数据存储();
 tv.setTextColor(当前主题.标题文色);
 tv.setBackgroundDrawable(Feis.jb(当前主题.标题背色,[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]));
 ad.update(主题);
 //win.dismiss();
 }
});
return la;
}catch(e){Feis.报错(e)}
 });

var list=Feis.JSONListView({
适配器:ad.getAdapter(),
宽度:-2,
高度:Feis.dip(310),
上边距:Feis.dip(2),
背景颜色:Feis.ys(0,255,255,255),
间隙高度:Feis.dip(3),
位置重心:Feis.getGravity("居中"),
布局:layout
});

}catch(e){Feis.报错(e)}
 });
 ppp(lang("§e点击标题可以关闭窗口","§eClick title close window",配置.语言));
}

//～～～～～～～～～～～～～～～～～～～～～～

function 关于(){
Feis.UiT(function(){
 var mp=Feis.铃声(1,true);
 var wx=Feis.dp(1,500),
wy=Feis.dp(3,10),
w=Feis.dip(300),
h=Feis.dp(3,980);
 var winArray=Feis.addWindow2(
 当前主题.背景颜色==null?获取壁纸():
 画线(500,1000,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型),wx-w/2,wy ,w,h,false,true);
 var win=winArray[0];
 var layout=winArray[1];
	ppp(lang("§f后期优化By §bF§al§co§ea§dt§aD§eu§cs§at§f，原作者已授权§7（优化内容:加载条,提示信息）",".",配置.语言));
 try{
var tv0=Feis.JSONTextView({
文本:lang("关于","About",配置.语言),
宽度:Feis.dip(296),
高度:Feis.dip(35),
左边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.标题阴影,
监听:function(v){
 mp.stop();
 fv.dismiss();
 win.dismiss();
}
});

var fla=Feis.addLayout(layout);
var fv=new Feis.FastView(fla);
 fv.show();
 fv.setTick(30);
 fv.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(80),
高度:Feis.dip(80),
位置重心:Feis.getGravity("居中"),
上边距:Feis.dip(18)
})
 );
var f=new 方块动画(Feis.dip(80));
 f.setLevel(5);
 f.setListColors([头像正面,头像背面]);
fv.startDraw(function(cv,w,h,t){
try{
 //Feis.绘画.清屏(cv);
 cv.drawColor(Feis.ys(255,220,220,220));
 f.draw(cv);
}catch(e){Feis.报错(e);fv.stopDraw();}
});

var la=Feis.addLayout(layout,1);
 la.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(170),
高度:Feis.dip(200),
位置重心:Feis.getGravity("居中")
})
 );

var tv1=Feis.JSONTextView({
文本:lang("名称: 像素印画Ⅱ","Name: PixelsPrinterⅡ",配置.语言),
宽度:Feis.dip(160),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(18),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
位置重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){}
});
Feis.水平动画(tv1,-100,0,200);

var tv2=Feis.JSONTextView({
文本:lang("制作: 鄢主晴伊","Editor: @feis",配置.语言),
宽度:Feis.dip(160),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(15),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
位置重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
ppp("§eQQ 815821214")
}
});
Feis.水平动画(tv2,100,0,300);

var tv3=Feis.JSONTextView({
文本:lang("赞助: 点击添加QQ","Add OICQ",配置.语言),
宽度:Feis.dip(160),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(15),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
位置重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
qq聊天界面(815821214);
}
});
Feis.水平动画(tv3,-100,0,400);

var tv4=Feis.JSONTextView({
文本:精准版本,
宽度:Feis.dip(160),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(15),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
位置重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
 mp.stop();
 fv.dismiss();
 win.dismiss();
 ppp(lang("§a已3次进行Js优化","。",配置.语言));
}
});
Feis.水平动画(tv4,100,0,500);
 }catch(e){Feis.报错(e);}
});
}


function 快捷选项(w,h,x,y,move){
Feis.UiT(function(){
 try{
var pw=Feis.dip(100),
 ph=Feis.dip(200);
 if(x<=pw){x=x+w;}else{x-=pw;}
 if(y>=Feis.屏高-ph){y=y-ph;}else{y+=(w/2);}

 var winArray=Feis.addWindow2(
 当前主题.背景颜色==null?获取壁纸():
 画线(200,500,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型),x,y,pw,ph,true,true);
 var win=winArray[0];
 var layout=winArray[1];

 var la=Feis.addLayout(layout,1);
la.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(100),
高度:Feis.dip(200),
位置重心:Feis.getGravity("居中")
 })
);

var tv0=Feis.JSONTextView({
文本:lang("打开","Open",配置.语言),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(5),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
 if(主页窗口==null)主页();
 win.dismiss();
 ppp(lang("§e当前还没有选择或已编辑的图片，长按“头像”可以打开菜单","§eThere are no selected or edited pictures at the moment. Open menu by long press \"head image\"",配置.语言));
}
});

var tv1=Feis.JSONTextView({
文本:lang("相册","Albums",配置.语言),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(2),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
图片选择器(true,function(path){
var size=Feis.getImageFileSize(path);
var s=(size[0]>size[1]?size[0]:size[1]);
if(s>500){
 尺寸选择(path,function(bmp){
 编辑菜单(new Feis.绘画(bmp)); 
});
}else{
 编辑菜单(new Feis.绘画(Feis.getSdcardBitmap(path)));
}
win.dismiss();
 });
 ppp(lang("§e如果读取§c卡住或闪退§e请检查启动器§b读取存储权限§e是否开启","§eIf the reading is §cstuck or flashed back§e, please check if the launcher §breads the storage permission§e is enabled.",配置.语言));
}
});

var tv2=Feis.JSONTextView({
文本:lang("主题","Themes",配置.语言),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(2),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
主题预览();
win.dismiss();
}
});

var tv3=Feis.JSONTextView({
文本:lang("移动","Move",配置.语言),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(2),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
 move.设置开关(true);
 ppp(lang("§7请拖动§e头像§7快捷方式进行移动","§7Please drag the §eHead portrait shortcut §7to move",配置.语言));
 win.dismiss();
}
});

var tv4=Feis.JSONTextView({
文本:语言名称[配置.语言],
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(2),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
if(配置.语言==0){
配置.语言=1;
}else if(配置.语言==1){
配置.语言=2;
}else if(配置.语言==2){
配置.语言=0;
}
tv0.setText(lang("打开","Open",配置.语言));
tv1.setText(lang("相册","Albums",配置.语言));
tv2.setText(lang("主题","Themes",配置.语言));
tv3.setText(lang("移动","Move",配置.语言));
tv4.setText(语言名称[配置.语言]);
tv5.setText(lang("关于","About",配置.语言));
数据存储();
}
});

var tv5=Feis.JSONTextView({
文本:lang("关于","About",配置.语言),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(2),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(v){
 关于();
}
});

 }catch(e){Feis.报错(e);}
});
}

//～～～～～～～～～～～～～～～～～～～～～～

function 快速列表(title,arr,run){
Feis.UiT(function(){
 try{
var pw=Feis.dip(100),
 ph=Feis.dp(3,800);
var winArray=Feis.addWindow2(Feis.jb(Feis.ys(220,95,95,95),Feis.dip(5)),Feis.dp(0,820),Feis.dp(3,100),pw,ph,true,true);
var win=winArray[0];
var layout=winArray[1];
var tv=Feis.JSONTextView({
文本:title,
宽度:Feis.dip(100),
高度:Feis.dip(35),
上边距:0,
文本大小:11,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
文本重心:Feis.getGravity("居中"),
布局:layout,
监听:function(v){
win.dismiss();
}
});

var ad=new Feis.BaseAdapter(arr,function(pos,convertView,parent,obj){
try{
 var la=Feis.addLayout(null,0);
la.setLayoutParams(
 Feis.JSONParams({
宽度:-1,
高度:-1,
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中")
 })
);
 var tv0=Feis.JSONTextView({
文本:obj.toString(),
宽度:Feis.dip(90),
高度:Feis.dip(30),
左边距:Feis.dip(5),
上边距:Feis.dip(0),
文本大小:11,
文本颜色:当前主题.按键文色,背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la
 });
 return la
}catch(e){Feis.报错(e)} 
});
var list=Feis.JSONListView({
适配器:ad.getAdapter(),
宽度:pw,
高度:ph-Feis.dip(40),
左边距:Feis.dip(0),
上边距:Feis.dip(2),
背景颜色:Feis.ys(60,255,255,255),
间隙高度:Feis.dip(3),
布局:layout
});
Feis.列表点击监听(list,function(av,v,id,p){
run(arr[id]);
win.dismiss();
}); 
 }catch(e){Feis.报错(e);}
});
}

//～～～～～～～～～～～～～～～～～～～～～～

function 尺寸选择(path,run){
Feis.UiT(function(){
 try{
var pw=Feis.dip(300),
 ph=Feis.dip(220);
var bmp=Feis.loadBitmap(path,100);
var winArray=Feis.addWindow2(Feis.BitmapDrawable(Feis.toBlur(bmp,80,100))/*图像图标()*/,Feis.dp(1,500)-pw/2,Feis.dp(3,500)-ph/2,pw,ph,false,true);
var win=winArray[0];
var layout=winArray[1];

var tv0=Feis.JSONTextView({
文本:lang("请选择操作"," Select",配置.语言),
宽度:Feis.dip(296),
高度:Feis.dip(35),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角)),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.标题阴影,
监听:function(v){
win.dismiss();
}
});

var la=Feis.addLayout(layout,0);
 la.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(90),
上边距:Feis.dip(40),
位置重心:Feis.getGravity("居中")
})
 );

var tv1=Feis.JSONTextView({
文本:lang("原图","Original",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(80),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(){
 if(run!=null)run(Feis.getSdcardBitmap(path)); 
 win.dismiss();
 ppp(lang("§e图片像素大小可能超出视野范围，或高于256格方块限制，请留意","§eImage pixel size may exceed the field of view, or exceed 256 blocks limit, please note.",配置.语言));
}
});

var tv2=Feis.JSONTextView({
文本:lang("最快","Fast",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(80),
左边距:Feis.dip(12),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(){
 if(run!=null)run(Feis.loadBitmap(path,120));
 win.dismiss();
 ppp(lang("§e图片像素大小可能超出视野范围，或高于256格方块限制，请留意","§eImage pixel size may exceed the field of view, or exceed 256 blocks limit, please note.",配置.语言));
}
});

var tv3=Feis.JSONTextView({
文本:lang("最佳","Best",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(80),
左边距:Feis.dip(12),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(){
 if(run!=null)run(Feis.loadBitmap(path,256));
 win.dismiss();
 ppp(lang("§e图片像素大小可能超出视野范围，或高于256格方块限制，请留意","§eImage pixel size may exceed the field of view, or exceed 256 blocks limit, please note.",配置.语言));
}
});
 }catch(e){print(e)}
});
}

//～～～～～～～～～～～～～～～～～～～～～～～


var 画笔设置={
画笔颜色:Feis.ys(255,255,0,0),
画笔类型:1,
画笔粗细:2,
画笔模式:0,
橡皮大小:30,
矩形圆角:0
};


function 添加绘画(画,run){
Feis.UiT(function(){
 var width=画.getWidth(),
height=画.getHeight();
 var w=width,
h=height,
x=0,
y=0,
过程=0;
 var 面画=new Feis.绘画(w,h);
面画.绘制颜色(Feis.ys(0,0,0,0));
 var 路径=[];
 var 预览=new 悬浮预览();
 var mode=0,
r=Math.max(w,h)/20;
 var 矩形=new Feis.工具.矩形();
 var bitmap=null;

 var 更新画笔=function(a){
if(画笔设置.画笔类型==0){
面画.实心画笔(画笔设置.画笔颜色,true,画笔设置.画笔粗细);
}else{
面画.空心画笔(画笔设置.画笔颜色,true,画笔设置.画笔粗细);
}

if(画笔设置.画笔模式==0){
面画.绘制贝塞尔曲线(路径)
return 面画.getBitmap();
}else if(画笔设置.画笔模式==1){
面画.橡皮擦(null,画笔设置.橡皮大小);
面画.绘制贝塞尔曲线(路径);
面画.空心画笔(当前主题.按键背色2,true,3);
return 面画.绘制圆形(x,y,画笔设置.橡皮大小/2,true);
}else if(画笔设置.画笔模式==2){
if(过程==0){
if(a==0){矩形.设定(x,y,x,y);}
if(a==2){矩形.右下(x,y);}
if(a==1){过程=1;} 
}else if(过程==1){
if(a==0){
 if(矩形.在内(x,y))mode=1;
 if(Feis.工具.判断圆内(x,y,矩形.右+r,矩形.下+r,r))
mode=2;
 if(Feis.工具.判断圆内(x,y,矩形.右+r,矩形.上-r,r))
mode=3;
 矩形.位移标记(x,y);
}else if(a==2){
 if(mode==1)
矩形.标记位移(x,y);
 if(mode==2)
矩形.右下(x-r,y-r);
}else if(a==1){
 mode=0;
}
}
var b=面画.绘制圆角矩形(矩形.左,矩形.上,矩形.右,矩形.下,画笔设置.矩形圆角,画笔设置.矩形圆角,true);
var p=Feis.绘画.画笔(Feis.Color_alpha(当前主题.按键背色2,180),1,1);
p.setTextSize(r-r/4);
var 画布=Feis.绘画.画布(b);
画布.drawCircle(矩形.右+r,矩形.下+r,r,p);
画布.drawCircle(矩形.右+r,矩形.上-r,r,p);
if(mode==1&&a==2){
画布.drawText(lang("位置:","Coord size:",配置.语言)+Math.floor(矩形.左)+","+Math.floor(矩形.上),r,r,p);
}
if((mode==2||过程==0)&&a==2){
画布.drawText(lang("画布:","Canvas size:",配置.语言)+w+"*"+h+lang(" 矩形:"," Rect size:",配置.语言)+Math.floor(矩形.宽度())+"*"+Math.floor(矩形.高度()),r,r,p);
}
if(mode==3&&a==2){
p.setColor(Feis.ys(255,255,100,0));
画布.drawRoundRect(x-r,矩形.上-r*2,矩形.右+r,矩形.上,r/2,r/2,p);
p.setColor(Feis.Color_alpha(当前主题.按键背色2,180));
画布.drawCircle(x,矩形.上-r,r,p);
画笔设置.矩形圆角=Math.floor((矩形.右+r)-x);
画笔设置.矩形圆角=(画笔设置.矩形圆角<0?0:画笔设置.矩形圆角);
画布.drawText(lang("圆角:","Rounded corners size:",配置.语言)+画笔设置.矩形圆角,r,r,p); 
}
 return b;
}
if(画笔设置.画笔模式==3){
 if(a==0){
if(矩形.在内(x,y))mode=1;
if(Feis.工具.判断圆内(x,y,矩形.右,矩形.下,r))
mode=2;
矩形.位移标记(x,y);
//面画.空心画笔(当前主题.按键背色,true,3);
 }
 if(a==2){
if(mode==1)矩形.标记位移(x,y);
if(mode==2&&x<w&&y<h)矩形.右下(x,y); 
矩形.禁止越界(0,0,w,h);
 }else if(a==1)
mode=0;
var b=面画.绘制图片(bitmap,new Feis.Rect(0,0,bitmap.getWidth(),bitmap.getHeight()),new Feis.RectF(矩形.左,矩形.上,矩形.右,矩形.下),true);

var p=Feis.绘画.画笔(Feis.Color_alpha(当前主题.按键背色2,180),1,1);
var 画布=Feis.绘画.画布(b);
p.setTextSize(r-r/4);
画布.drawCircle(矩形.右,矩形.下,r,p);
if(mode==1&&a==2){
 画布.drawText(lang("位置:","Coord size:",配置.语言)+Math.floor(矩形.左)+","+Math.floor(矩形.上),r,r,p);}
if(mode==2&&a==2){
 画布.drawText(lang("画布:","Canvas size:",配置.语言)+w+"*"+h+lang(" 矩形:"," Rect size:",配置.语言)+Math.floor(矩形.宽度())+"*"+Math.floor(矩形.高度()),r,r,p);
}
return b;
 }
}

 var 绘制刷新=function(isout,a){
return 画.绘制图片(更新画笔(a),0,0,!isout);
 }
 var 获取刷新=function(isout){
return 画.绘制图片(面画.getBitmap(),0,0,!isout);
 }

 var winArray=Feis.addWindow2(
 当前主题.编辑背色==null?获取壁纸():
 画线(1400,800,当前主题.编辑线数,当前主题.编辑线条,当前主题.编辑背色,当前主题.线条类型),Feis.dp(1,10),Feis.dp(3,10),Feis.dip(600),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
try{
var la=Feis.addLayout(layout,0);
la.setLayoutParams(
Feis.JSONParams({
 宽度:-2,
 高度:-2,
 位置重心:Feis.getGravity("居中")
})
);

 var la_l=Feis.addLayout(Feis.addScroll(la,0,
Feis.JSONParams({
宽度:Feis.dip(320),
高度:Feis.dp(3,978),
位置重心:Feis.getGravity("居中")
}))[0]);

la_l.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:-1,
 位置重心:Feis.getGravity("居中")
})
);


var img=Feis.JSONImageView({
 位图:画.getBitmap(),
 宽度:Feis.dip(280),
 高度:Feis.dip(280),
 上边距:Feis.dip(12),
 位置重心:Feis.getGravity("居中"),
 背景绘图:画背景(Feis.dip(300),Feis.dip(300)),
 布局:la_l,
 阴影:当前主题.按键阴影
});
Feis.触摸监听(img,function(e,a){ 
 var xy=Feis.getImageViewXY(w,h,img.getWidth(),img.getHeight(),e.getX(),e.getY());
 x=xy[0];
 y=xy[1];
 var bmp=null;
 if(画笔设置.画笔模式<2){
if(a==0){
路径.push(x,y);
}
if(a==2){
路径.push(x,y);
路径.push(x,y);
img.setImageBitmap(bmp=绘制刷新());
}
if(a==1){
路径=[];
面画.保存();
tv3.setText(lang("撤销:","Undo:",配置.语言)+(面画.撤销索引()-1));
tv4.setText(lang("重做:","Redo:",配置.语言)+(面画.撤销长度()-面画.撤销索引()));
}
 }
 if(画笔设置.画笔模式>=2){
img.setImageBitmap(bmp=绘制刷新(null,a));
 }
/*if(画笔设置.画笔模式==3){
img.setImageBitmap(bmp=更新画笔(a));
}*/
预览.updateImage(bmp,x,y,Feis.dp(1,1000),Feis.dp(3,y>(h/2)?100:600),a);
return true;
 }); 
 var tv=Feis.JSONTextView({
文本:lang("触摸绘画","Drag paint",配置.语言),
宽度:Feis.dip(280),
高度:Feis.dip(30),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.提示颜色,
背景绘图:Feis.jb(Feis.ys(0,100,200,255),Feis.dip(10)),
文本重心:Feis.getGravity("居中"),
布局:la_l
 });

 var la_r=Feis.addScroll(la,0,
Feis.JSONParams({
宽度:Feis.dip(256),
高度:Feis.dp(3,970),
位置重心:Feis.getGravity("居中")
}))[0];

var la_r0=Feis.addLayout(la_r,0);
la_r0.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(12),
 位置重心:Feis.getGravity("居中")
})
);

var tv0=Feis.JSONTextView({
 文本:lang("画笔颜色:","Brush color:",配置.语言)+Feis.Color_toHex(画笔设置.画笔颜色),
 宽度:Feis.dip(120),
 高度:Feis.dip(35),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.recolor(画笔设置.画笔颜色),
 背景绘图:Feis.jb(画笔设置.画笔颜色,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r0,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(画笔设置.画笔颜色,function(color){
画笔设置.画笔颜色=color;
tv0.setText(lang("画笔颜色:","Brush color:",配置.语言)+Feis.Color_toHex(画笔设置.画笔颜色));
tv0.setTextColor(Feis.Color_alpha(Feis.recolor(画笔设置.画笔颜色),255));
tv0.setBackgroundColor(画笔设置.画笔颜色);
img.setImageBitmap(获取刷新());
 });
}
});

var tv1=Feis.JSONTextView({
 文本:画笔设置.画笔类型==1?lang("空心","Stroke",配置.语言):lang("实心","Fill",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r0,
 阴影:当前主题.按键阴影,
 监听:function(){
画笔设置.画笔类型=(画笔设置.画笔类型==0?1:0);
tv1.setText(画笔设置.画笔类型==1?lang("空心","Stroke",配置.语言):lang("实心","Fill",配置.语言));
if(画笔设置.画笔模式>1)
img.setImageBitmap(绘制刷新(null,0));
//img.setImageBitmap(获取刷新());
 }
});

var tv2=Feis.JSONTextView({
 文本:画笔设置.画笔模式==0?lang("笔刷","Brush",配置.语言):lang("橡皮","Eraser",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r0,
 阴影:当前主题.按键阴影,
 监听:function(){
移除部件(画笔设置.画笔模式,function(){
按键染色();
});
画笔设置.画笔模式=(画笔设置.画笔模式==0?1:0);
tv2.setText(画笔设置.画笔模式==0?lang("笔刷","Brush",配置.语言):lang("橡皮","Eraser",配置.语言));
if(画笔设置.画笔模式==0)
img.setImageBitmap(获取刷新());
 }
});

var la_r1=Feis.addLayout(la_r,0);
la_r1.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中")
})
);

var tv3=Feis.JSONTextView({
 文本:lang("撤销:0","Undo:0",配置.语言),
 宽度:Feis.dip(79),
 高度:Feis.dip(40),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
面画.撤销();
tv3.setText(lang("撤销:","Undo:",配置.语言)+面画.撤销索引());
tv4.setText(lang("重做:","Redo:",配置.语言)+(面画.撤销长度()-面画.撤销索引()-1));
img.setImageBitmap(获取刷新());
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("重做:0","Redo:0",配置.语言),
 宽度:Feis.dip(79),
 高度:Feis.dip(40),
 左边距:Feis.dip(1), 
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
面画.重做()
tv4.setText(lang("重做:","Redo:",配置.语言)+(面画.撤销长度()-面画.撤销索引()-1));
tv3.setText(lang("撤销:","Undo:",配置.语言)+面画.撤销索引());
img.setImageBitmap(获取刷新());
 }
});

var tv5=Feis.JSONTextView({
 文本:lang("原始","Original",配置.语言),
 宽度:Feis.dip(80),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
ppp(lang("长按恢复原始状态","Long press to restore the original state",配置.语言));
 }
});
Feis.长按监听(tv5,function(v,t){
 面画.橡皮擦(null,1);面画.实心画笔(画笔设置.画笔颜色,false);
 面画.绘制矩形(0,0,w,h);img.setImageBitmap(获取刷新());
return true;
});

var tv6=Feis.JSONTextView({
 文本:lang(" 笔刷半径:"," Brush radius:",配置.语言)+画笔设置.画笔粗细,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb=Feis.JSONSeekBar({
 进度:画笔设置.画笔粗细,
 最大进度:w/6,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
画笔设置.画笔粗细=p
tv6.setText(lang(" 笔刷半径:"," Brush radius:",配置.语言)+画笔设置.画笔粗细);
if(画笔设置.画笔模式>1)img.setImageBitmap(绘制刷新(null,0));
//img.setImageBitmap(获取刷新());
 }
});

var tv7=Feis.JSONTextView({
 文本:lang(" 橡皮半径:"," Eraser radius:",配置.语言)+画笔设置.橡皮大小,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb0=Feis.JSONSeekBar({
 进度:画笔设置.橡皮大小,
 最大进度:w/4,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
画笔设置.橡皮大小=p,
tv7.setText(lang(" 橡皮半径:"," Brush radius:",配置.语言)+画笔设置.橡皮大小);
if(画笔设置.画笔模式>1)img.setImageBitmap(绘制刷新(null,0));
//img.setImageBitmap(获取刷新());
 }
});

var la_r2=Feis.addLayout(la_r,0);
la_r2.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中")
})
);

var 笔刷监听=function(view,id){
 Feis.点击监听(view,function(v){
if(id==2){
ppp(lang("\n§7触摸图像，设置矩形的§e起点§7，拖动松开为§e终点\n","Touch the image sets the starting point of the rectangle, loosen to a destination",配置.语言));
移除部件(3,function(){
 添加部件(2,function(){ }); 
});
}
if(id==3){
移除部件(2,function(){
 图片选择器(true,function(obj){
var se=Feis.getImageFileSize(obj);
var s=(se[0]>se[1]?se[0]:se[1]);
if(s>800){
尺寸选择(obj,function(bmp){
 编辑图像(new Feis.绘画(bmp),function(th){
bitmap=th.getBitmap();
矩形.设定(w/10,h/10,w-w/10,h-h/10);
img.setImageBitmap(绘制刷新(null,0)); 
 });
});
}else{
编辑图像(new Feis.绘画(Feis.getSdcardBitmap(obj)),function(th){
 bitmap=th.getBitmap();
 矩形.设定(w/10,h/10,w-w/10,h-h/10);
 img.setImageBitmap(绘制刷新(null,0)); 
});
}
添加部件(3,function(){ }); 
 });
});
}
画笔设置.画笔模式=id;
按键染色(v);
 });
}
var tv8=Feis.JSONTextView({
 文本:lang("矩形","Rect",配置.语言),
 宽度:Feis.dip(119),
 高度:Feis.dip(35),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r2,
 阴影:当前主题.按键阴影
});
笔刷监听(tv8,2);

var tv9=Feis.JSONTextView({
 文本:lang("图像","Image",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(35),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r2,
 阴影:当前主题.按键阴影
});
笔刷监听(tv9,3);

var 按键染色=function(v){
 tv8.setBackgroundDrawable(Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)));
 tv9.setBackgroundDrawable(Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)));
 if(v!=null)v.setBackgroundDrawable(Feis.jb(Feis.recolor(当前主题.按键背色2),Feis.dip(当前主题.按键圆角)));
}

var la_r3=Feis.addLayout(la_r,0);
la_r3.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:-1,
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中")
})
);

var tv_0,
tv_1;
var 移除部件=function(id,run){
 if(tv_1==null||tv_0==null||画笔设置.画笔模式!=id){
run();
return ;
 }
 Feis.动画监听(id==2?Feis.水平动画(tv_1,0,-100,200):Feis.水平动画(tv_0,0,100,200),function(){
Feis.viewShow(id==2?tv_1:tv_0,8);
Feis.动画监听(Feis.垂直动画(la_r3,0,-100,300),function(){
la_r3.removeAllViews();
if(run!=null)run();
});
 });
}
var 添加部件=function(id,run){
 la_r3.removeAllViews();
 矩形.重置();
 过程=0;
 img.setImageBitmap(获取刷新());
 
 tv_0=Feis.JSONTextView({
文本:lang("重置","Reset",配置.语言),
宽度:Feis.dip(117),
高度:Feis.dip(35),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.recolor(当前主题.按键背色2),Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la_r3,
阴影:当前主题.按键阴影,
监听:function(){
Feis.动画监听(Feis.淡入动画(tv_0,100,0,500),function(){
 if(id==2){
矩形.重置();
过程=0;
img.setImageBitmap(获取刷新());
Feis.淡入动画(tv_0,0,100,400);
 }
 if(id==3){
矩形.重置();
过程=0;
img.setImageBitmap(获取刷新());
Feis.淡入动画(tv_0,0,100,400);
 }
});
}
 });
 
 tv_1=Feis.JSONTextView({
文本:lang("确认","Ok",配置.语言),
宽度:Feis.dip(117),
高度:Feis.dip(35),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.recolor(当前主题.按键背色2),Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la_r3,
阴影:当前主题.按键阴影,
监听:function(){ 
if(id==2){
 面画.绘制圆角矩形(矩形.左,矩形.上,矩形.右,矩形.下,画笔设置.矩形圆角,画笔设置.矩形圆角);
 矩形.重置();
 过程=0;
 img.setImageBitmap(获取刷新());
}
if(id==3){
 面画.绘制图片(bitmap,new Feis.Rect(0,0,bitmap.getWidth(),bitmap.getHeight()),new Feis.RectF(矩形.左,矩形.上,矩形.右,矩形.下));
 img.setImageBitmap(获取刷新());
}
移除部件(id,function(){按键染色();});
画笔设置.画笔模式=0;
面画.保存();
tv3.setText(lang("撤销:","Undo:",配置.语言)+(面画.撤销索引()-1));
tv4.setText(lang("重做:","Redo:",配置.语言)+(面画.撤销长度()-面画.撤销索引()));
}
 });
 
 Feis.viewShow(id==2?tv_1:tv_0,8);
 Feis.动画监听(Feis.垂直动画(la_r3,-100,0,400,0),function(){
if(id==2){
Feis.viewShow(tv_1,1);
Feis.水平动画(tv_1,-100,0,500);
}else{
Feis.viewShow(tv_0,1);
Feis.水平动画(tv_0,100,0,500);
}
 });
}

var la_r4=Feis.addLayout(la_r,0);
la_r4.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(60),
 上边距:Feis.dip(8),
 位置重心:Feis.getGravity("居中")
})
);

var tv16=Feis.JSONTextView({
 文本:lang("取消","Cancel",配置.语言),
 宽度:Feis.dip(119),
 高度:Feis.dip(48),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r4,
 阴影:当前主题.按键阴影,
 监听:function(){
win.dismiss();
 }
});

var tv17=Feis.JSONTextView({
 文本:lang("确认","Ok",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(48),
 左边距:Feis.dip(1),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r4,
 阴影:当前主题.按键阴影,
 监听:function(){
获取刷新(true);
run();
win.dismiss();
 }
});
}catch(e){Feis.报错(e)}
 });
}

//～～～～～～～～～～～～～～～～～～～～～～

function 悬浮预览(){
var win=null,
img=null;
this.show=function(x,y){
 Feis.UiT(function(){
var winArray=Feis.addWindow2(Feis.ys(255,0,255,255,-1),x,y,Feis.dip(120),Feis.dip(120),false,true);
win=winArray[0];
var layout=winArray[1];
img=Feis.JSONImageView({
位图:null,
宽度:Feis.dip(110),
高度:Feis.dip(110),
上边距:Feis.dip(5),
左边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
背景绘图:画背景(Feis.dip(110),Feis.dip(110)),
布局:layout
});
 });
}

this.updateImage=function(bmp,x,y,px,py,a){
 if(a==0){this.open(px,py);}
 if(bmp!=null&&a==2){
Feis.UiT(function(){
var p=0,
w=bmp.getWidth(),
h=bmp.getHeight();
if(w-h>=0){
 p=w/4;
 p=p>h?h:p;
}else{
 p=h/4;
 p=p>w?w:p;
}
x=x-p/2; 
y=y-p/2; 
x=(x<0?0:x>w-p?w-p:x); 
y=(y<0?0:y>h-p?h-p:y);
if(win!=null)win.update(px,py,-1,-1);
if(img!=null)
 img.setImageBitmap(Feis.绘图.裁剪(bmp,x,y,p,p));
});
 }
 if(a==1)this.dismiss();
}

this.dismiss=function(){
 if(win!=null){
win.dismiss();
win=null;
 }
}

this.open=function(x,y){
 if(win==null)this.show(x==null?0:x,y==null?0:y);
}
}


//～～～～～～～～～～～～～～～～～～～～～～
//～～～～～～～～～～～～～～～～～～～～～～

var 主页窗口=null;

function 主页(){
Feis.UiT(function(){
 var winArray=Feis.addWindow2(
 当前主题.背景颜色==null?获取壁纸():
 画线(800,900,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型),Feis.dp(1,10),Feis.dp(3,10),Feis.dip(300),Feis.dp(3,980),false,true);
 主页窗口=winArray[0];
 var layout=winArray[1];
 try{
首页(layout);
 }catch(e){Feis.报错(e)}
});
}

//～～～～～～～～～～～～～

function 首页(la){
la.removeAllViews()
var tv=Feis.JSONTextView({
 文本:lang("你想做什么","What do you want to do?",配置.语言),
 宽度:Feis.dip(296),
 高度:Feis.dip(45),
 上边距:0,
 文本大小:14,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]),
 文本重心:Feis.getGravity("居中"),
 位置重心:Feis.getGravity("居中"),
 布局:la,
 阴影:当前主题.标题阴影,
 监听:function(v){
主页窗口.dismiss();
主页窗口=null;
}
});

var la0=Feis.addLayout(la,1);
la0.setLayoutParams(
Feis.JSONParams({
 宽度:Feis.dip(120),
 高度:Feis.dip(285),
 位置重心:Feis.getGravity("居中")
})
);

var tv1=Feis.JSONTextView({
 文本:lang("创建图像","Create an image",配置.语言),
 宽度:Feis.dip(110),
 高度:Feis.dip(35),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
创建图像(la);
 }
});

var tv2=Feis.JSONTextView({
 文本:lang("相册选择","Form albums",配置.语言),
 宽度:Feis.dip(110),
 高度:Feis.dip(35),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
图片选择器(true,function(path){
var size=Feis.getImageFileSize(path);
var s=(size[0]>size[1]?size[0]:size[1]);
if(s>500){
 尺寸选择(path,function(bmp){
 编辑菜单(new Feis.绘画(bmp)); 
});
}else{
编辑菜单(new Feis.绘画(Feis.getSdcardBitmap(path)));
}
主页窗口.dismiss();
主页窗口=null;
 });
 ppp(lang("§e如果读取§c卡住或闪退§e请检查启动器§b读取存储权限§e是否开启","§eIf the reading is §cstuck or flashed back§e, please check if the launcher §breads the storage permission§e is enabled.",配置.语言));
}
});

var tv3=Feis.JSONTextView({
 文本:lang("文件选择","Form files",配置.语言),
 宽度:Feis.dip(110),
 高度:Feis.dip(35),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
文件选择器(null,function(p){
var size=Feis.getImageFileSize(p);
var s=(size[0]>size[1]?size[0]:size[1]);
if(s>500){
 尺寸选择(p,function(bmp){
编辑菜单(new Feis.绘画(bmp)); 
 });
}else{
 编辑菜单(new Feis.绘画(Feis.getSdcardBitmap(path)));
}
主页窗口.dismiss();
主页窗口=null;
},[".png",".jpg",".jpeg"]);
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("历史印画","Print history",配置.语言),
 宽度:Feis.dip(110),
 高度:Feis.dip(35),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,阴影:
 当前主题.按键阴影,
 监听:function(){
文件选择器(历史目录,function(p){
编辑菜单(new Feis.绘画(Feis.getSdcardBitmap(p)));
主页窗口.dismiss();
主页窗口=null;
},[".png",".jpg",".jpeg"]);
 }
});

var tv5=Feis.JSONTextView({
 文本:lang("什么也不做！","Don't do anything",配置.语言),
 宽度:Feis.dip(110),
 高度:Feis.dip(35),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
主页窗口.dismiss();
主页窗口=null;
 }
});
}

//～～～～～～～～～～～～

function 创建图像(la){
try{
 la.removeAllViews()
 var w=200,
h=200;
 var color=Feis.ys(255,200,200,200);
 var 图=new Feis.绘画(w,h);
图.绘制颜色(color);
 var 更新颜色=function(){
图.新建(w,h);
图.绘制颜色(color);
 }
 
 var tv=Feis.JSONTextView({
文本:lang("ὑ9�创建图像的宽高","ὑ9�Create images high and wide",配置.语言),
宽度:Feis.dip(292),
高度:Feis.dip(45),
上边距:0,
文本大小:15,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]),
文本重心:Feis.getGravity("居中"),
位置重心:Feis.getGravity("居中"),
布局:la,
阴影:当前主题.标题阴影,
监听:function(v){
首页(la);
}
 });
 
 var img=Feis.JSONImageView({
位图:图.getBitmap(),
宽度:Feis.dip(130),
高度:Feis.dip(130),
上边距:Feis.dip(8),
位置重心:Feis.getGravity("居中"),
背景绘图:画背景(Feis.dip(120),Feis.dip(120)),
布局:la,
阴影:当前主题.按键阴影,
监听:function(){
颜色选择器(color,function(c){
 color=c;
 tv0.setText(Feis.Color_toHex(color));
 tv0.setTextColor(Feis.Color_alpha(Feis.recolor(color),255));
 tv0.setBackgroundDrawable(Feis.jb(color,Feis.dip(5)));
 更新颜色();
 img.setImageBitmap(图.getBitmap());
});
}
 });
 
 var tv=Feis.JSONTextView({
文本:lang("尺寸:","Size:",配置.语言)+w+"*"+h,
宽度:Feis.dip(120),
高度:Feis.dip(15),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.提示颜色,
背景绘图:Feis.jb(Feis.ys(20,100,200,255),Feis.dip(10)),
文本重心:Feis.getGravity("居中"),
布局:la
 });
 
 var jsb=Feis.JSONSeekBar({
进度:w,
最大进度:620,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(280),
高度:Feis.dip(30),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(p,is){
w=p+100;
img.setImageBitmap(图.缩放(w,h,true));
tv.setText(lang("尺寸:","size:",配置.语言)+w.doString()+"*"+h.doString());
}
 });
 
 var jsb2=Feis.JSONSeekBar({
进度:h,
最大进度:620,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(280),
高度:Feis.dip(30),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(p,is){
h=p+100;
img.setImageBitmap(图.缩放(w,h,true));
tv.setText(lang("尺寸:","size:",配置.语言)+w.doString()+"*"+h.doString());
}
 });
 
 
 var la1=Feis.addLayout(la,0);
la1.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(280),
高度:Feis.dip(52),
上边距:Feis.dip(10),
位置重心:Feis.getGravity("居中")
 })
);

 var tv0=Feis.JSONTextView({
文本:Feis.Color_toHex(color),
宽度:Feis.dip(100),
高度:Feis.dip(38),
上边距:Feis.dip(2),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:Feis.recolor(color),
背景绘图:Feis.jb(color,Feis.dip(1)),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(){
颜色选择器(color,function(c){
 color=c;
 tv0.setText(Feis.Color_toHex(color));
 tv0.setTextColor(Feis.Color_alpha(Feis.recolor(color),255));
 tv0.setBackgroundDrawable(Feis.jb(color,Feis.dip(5)));
 更新颜色();
 img.setImageBitmap(图.getBitmap());
});
}
 });


 var tv1=Feis.JSONTextView({
文本:lang("取消","Cancel",配置.语言),
宽度:Feis.dip(85),
高度:Feis.dip(38),
上边距:Feis.dip(2),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(){
首页(la);
}
 });
 
 var tv2=Feis.JSONTextView({
文本:lang("创建","Create",配置.语言),
宽度:Feis.dip(85),
高度:Feis.dip(38),
上边距:Feis.dip(2),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(){
图.缩放(w,h);
编辑菜单(图);
首页(la);
}
 });
}catch(e){Feis.报错(e)}
}

//～～～～～～～～～～～

function 编辑菜单(画){
 var 关窗限定=0;
var width=画.getWidth(),
height=画.getHeight();
var w=width,
h=height,
size=50,
x=w/2,
y=h/2;
Feis.UiT(function(){
 var winArray=Feis.addWindow2(
 当前主题.编辑背色==null?获取壁纸():
 画线(1400,800,当前主题.编辑线数,当前主题.编辑线条,当前主题.编辑背色,当前主题.线条类型),Feis.dp(1,10),Feis.dp(3,10),Feis.dip(600),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
var la=Feis.addLayout(layout,0);
la.setLayoutParams(
Feis.JSONParams({
 宽度:-2,
 高度:-2,
 位置重心:Feis.getGravity("居中")
})
);

var la_l=Feis.addLayout(la,1);
 la_l.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(320),
高度:-2,
位置重心:Feis.getGravity("居中")
})
 );

var img=Feis.JSONImageView({
位图:画.getBitmap(),
宽度:Feis.dip(300),
高度:Feis.dip(300),
上边距:Feis.dip(12),
位置重心:Feis.getGravity("居中"),
背景绘图:画背景(Feis.dip(300),Feis.dip(300)),
布局:la_l
});

var tv=Feis.JSONTextView({
文本:lang("尺寸: ","Size: ",配置.语言)+w+"x"+h,
宽度:Feis.dip(280),
高度:Feis.dip(30),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.提示颜色,
背景绘图:Feis.jb(Feis.ys(0,100,200,255),Feis.dip(10)),
文本重心:Feis.getGravity("居中"),
布局:la_l
});

var la_r=Feis.addLayout(la,1);
 la_r.setLayoutParams(
Feis.JSONParams({
宽度:-2,
高度:-2,
位置重心:Feis.getGravity("居中")
})
 );

var la_r1=Feis.addLayout(Feis.addScroll(la_r,0,
Feis.JSONParams({
 宽度:-2,
 高度:Feis.dp(3,900),
 上边距:Feis.dip(12),
 位置重心:Feis.getGravity("居中")
}))[0]);
la_r1.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:-2,
位置重心:Feis.getGravity("居中")
})
 );

var tv0=Feis.JSONTextView({
文本:lang("文本","Text",配置.语言),
宽度:Feis.dip(200),
高度:Feis.dip(40),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角1)),
文本重心:Feis.getGravity("居中"),
布局:la_r1,
阴影:当前主题.按键阴影,
监听:function(){
if(android.os.Build.VERSION.SDK>=26){
ppp(lang("§e抱了个歉，安卓8.0不知道那个api有问题此功能不能用！","§eSorry! android 8.0 cannot be used！",配置.语言));
return;
}
 Feis.getEditText(lang("请输入文本","Input text",配置.语言),function(str,is){
if(!is&&!str.isEmpty()){
添加文本(画,str,function(){
 img.setImageBitmap(画.getBitmap());
});
}
 });
}
});
 
var tv1=Feis.JSONTextView({
文本:lang("绘画","Paint",配置.语言),
宽度:Feis.dip(200),
高度:Feis.dip(40),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角1)),
文本重心:Feis.getGravity("居中"),
布局:la_r1,
阴影:当前主题.按键阴影,
监听:function(){
 添加绘画(画,function(){
img.setImageBitmap(画.getBitmap());
 });
}
});

var tv2=Feis.JSONTextView({
文本:lang("编辑","Edit",配置.语言),
宽度:Feis.dip(200),
高度:Feis.dip(40),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角1)),
文本重心:Feis.getGravity("居中"),
布局:la_r1,
阴影:当前主题.按键阴影,
监听:function(){
 关窗限定=1;
 编辑图像(画,function(h){
 if(h!=null){
画=h;
width=画.getWidth(),
height=画.getHeight();
w=width,
h=height,
tv.setText(lang("尺寸: ","Size: ",配置.语言)+w+"x"+h);
img.setImageBitmap(画.getBitmap());
}
关窗限定=0;
 });
}
});

var tv3=Feis.JSONTextView({
文本:lang("分享","Share",配置.语言),
宽度:Feis.dip(200),
高度:Feis.dip(40),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角1)),
文本重心:Feis.getGravity("居中"),
布局:la_r1,
阴影:当前主题.按键阴影,
监听:function(){
 ppp(lang("§e加载中...","§eLoading...",配置.语言));
var p=配置目录+"/像素印画(编辑).png";
var file=new Feis.File(p);
if(file.exists())file.delete()
 画.另存(p);
 var intent=new android.content.Intent();
//intent.setComponent(new android.content.ComponentName("com.tencent.mm","com.tencent.mm.ui.tools.ShareImgUI"));
intent.setAction("android.intent.action.SEND");
intent.setType("image/*"); /**/
intent.putExtra(android.content.Intent.EXTRA_TEXT,"分享");
intent.putExtra(android.content.Intent.EXTRA_STREAM, android.net.Uri.fromFile(new Feis.File(p)));
ctx.startActivity(intent);
}
});

var tv16=Feis.JSONTextView({
文本:lang("另存","Save",配置.语言),
宽度:Feis.dip(200),
高度:Feis.dip(40),
上边距:Feis.dip(15),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la_r1,
阴影:当前主题.按键阴影,
监听:function(){
 try{
ppp(lang("仅保存为.jpg/.png",".jg/.png",配置.语言));
Feis.getEditText(lang("输入图片名称","Input image name",配置.语言),function(str,is){
if(!is&&str!=""){
 文件选择器(null,function(file){
var p=file.getPath();
if(str.indexOf(".png")==-1)str+=".png";
if(new java.io.File(p+"/"+str).exists()){
return ;
ppp(lang("文件已存在","File existsed",配置.语言));
}
画.另存(p+"/"+str);
Feis.ts(lang("图像已保存到:","Saved image do:",配置.语言)+p+"/"+str); 
 },"目录");
}
});
 }catch(e){Feis.报错(e);}
}
});

var la_r3=Feis.addLayout(la_r1,0);
 la_r3.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(70),
上边距:Feis.dip(10),
位置重心:Feis.getGravity("居中")
})
 );
 
var tv16=Feis.JSONTextView({
文本:lang("取消","Cancel",配置.语言),
宽度:Feis.dip(99),
高度:Feis.dip(58),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:14,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la_r3,
阴影:当前主题.按键阴影,
监听:function(){
if(关窗限定==0){
win.dismiss();
}else{
ppp(lang("请先关闭上层窗口","Please first close top window ",配置.语言));
}
 }
});

var tv17=Feis.JSONTextView({
文本:lang("确认","Ok",配置.语言),
宽度:Feis.dip(99),
高度:Feis.dip(58),
左边距:Feis.dip(2),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:14,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la_r3,
阴影:当前主题.按键阴影,
监听:function(){
if(关窗限定==0){
 当前绘画=画;
 var bp=画.旋转(90,true)
 当前像素=画.解析(bp);
 当前宽度=bp.getWidth();
 当前高度=bp.getHeight();
 当前绘画.另存(历史目录+"/"+getTimeString()+".png");
 信息统计更新();
 if(当前模式<方块色系.length&&当前色系==null)当前色系=方块色系[当前模式];
 win.dismiss();
 ppp(lang("铁剑点地即可打印","Iron sword click on the block…",配置.语言)); 
 }else{
 ppp(lang("请先关闭上层窗口","Please first close top window",配置.语言));
 }
}
});
 }catch(e){Feis.报错(e)}
});
}

//～～～～～～～～～～～～～～～～～～～～～～～

var 文本设置={
画笔颜色:Feis.ys(255,255,0,0),
画笔颜色2:Feis.ys(255,0,0,255),
颜色角度:0,
背景颜色:Feis.ys(0,120,120,120),
背景颜色2:Feis.ys(0,120,120,120),
背景角度:0,
画笔类型:0,
画笔粗细:1,
边距x:0,
边距y:0,
字体倾斜:0,
字体角度:0,
字体缩放:0,
字体路径:"/system/fonts/DroidSansChinese.ttf"
};


function 添加文本(画,str,run){
Feis.UiT(function(){
 var w=画.getWidth(),h=画.getHeight(),size=40,x=w/2,y=h/2;
 var 矩形=new Feis.工具.矩形();
矩形.设定(x,y,w,h);
 var 画笔=new Feis.绘画.画笔(Feis.ys(255,255,0,0),0,1,size);
 var 解析=new Feis.绘画.字符解析(画笔,str);
 var 宽度=解析.width;
 var 高度=解析.height;
 var 行高=解析.lineHeight;
 var 阴影模糊=2;
 var 阴影偏移x=2;
 var 阴影偏移y=2;
 var 阴影颜色=Feis.ys(0,255,255,255);

 var 画文=new Feis.绘画(宽度,高度);
画文.绘制颜色(Feis.ys(0,0,0,0));

 var 更新画笔=function(isout){
画文.文本大小(size);
画文.画笔字体(文本设置.字体路径);
画文.字体缩放(文本设置.字体缩放);
解析=new Feis.绘画.字符解析(画文.getPaint(),str);
宽度=解析.width;
高度=解析.height;
行高=解析.lineHeight;
宽度+=文本设置.边距x;
高度+=文本设置.边距y;
画文.新建(宽度,高度);
画文.绘制颜色(Feis.ys(0,0,0,0));
画文.实心画笔(文本设置.背景颜色,false);
if(文本设置.背景颜色!=文本设置.背景颜色2)
画文.画笔渐变(0,0,宽度,高度,[文本设置.背景颜色,文本设置.背景颜色,文本设置.背景颜色,文本设置.背景颜色2,文本设置.背景颜色2,文本设置.背景颜色2],null,1,文本设置.背景角度);
画文.绘制矩形(0,0,宽度,高度);
if(!isout){
画文.onDraw(function(c){
 c.drawRect(0,0,宽度,高度,new Feis.绘画.画笔(Feis.ys(255,255,0,0),0,3,size)); 
});
}
if(文本设置.画笔类型==0){
 画文.空心画笔(文本设置.画笔颜色,true,文本设置.画笔粗细);
}else{
 画文.实心画笔(文本设置.画笔颜色,true,文本设置.画笔粗细);
}
if(文本设置.画笔颜色!=文本设置.画笔颜色2)
 画文.画笔渐变(0,0,宽度,行高,[文本设置.画笔颜色,文本设置.画笔颜色,文本设置.画笔颜色,文本设置.画笔颜色,文本设置.画笔颜色,文本设置.画笔颜色2,文本设置.画笔颜色2,文本设置.画笔颜色2,文本设置.画笔颜色2,文本设置.画笔颜色2],null,2,文本设置.颜色角度);
画文.文本大小(size);
画文.画笔字体(文本设置.字体路径);
画文.字体缩放(文本设置.字体缩放);
if(Feis.getAlpha(阴影颜色)>10)
 画文.画笔阴影(阴影模糊,阴影偏移x,阴影偏移y,阴影颜色);
 return Feis.绘图.旋转(Feis.绘图.倾斜(画文.绘制多行文本(str,解析.space,行高-解析.lineSpace,true),文本设置.字体倾斜,0),文本设置.字体角度);
 }

 var 绘制刷新=function(isout,is){
return 画.绘制图片(更新画笔(isout),矩形.左,矩形.上,!is);
 }

 var winArray=Feis.addWindow2(
 当前主题.编辑背色==null?获取壁纸():
 画线(1400,800,当前主题.编辑线数,当前主题.编辑线条,当前主题.编辑背色,当前主题.线条类型),Feis.dp(1,10),Feis.dp(3,10),Feis.dip(600),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
try{
var la=Feis.addLayout(layout,0);
la.setLayoutParams(
Feis.JSONParams({
 宽度:-2,
 高度:-2,
 位置重心:Feis.getGravity("居中")
})
);

var la_l=Feis.addScroll(la,0,
 Feis.JSONParams({
 宽度:Feis.dip(320),
 高度:Feis.dp(3,978),
 位置重心:Feis.getGravity("居中")
 }))[0];

var img=Feis.JSONImageView({
 位图:绘制刷新(),
 宽度:Feis.dip(280),
 高度:Feis.dip(280),
 上边距:Feis.dip(10),
 位置重心:Feis.getGravity("居中"),
 背景绘图:画背景(Feis.dip(300),Feis.dip(300)),
 布局:la_l,
 触摸:function(e,a){
var xy=Feis.getImageViewXY(w,h,img.getWidth(),img.getHeight(),e.getX(),e.getY());
x=xy[0];
y=xy[1];
if(a==0)矩形.位移标记(x,y);
if(a==2){矩形.标记位移(x,y);
img.setImageBitmap(绘制刷新());
}
return true;
 }
}); 

var tv=Feis.JSONTextView({
 文本:lang("请触摸文字移动到想要的位置","Drag the text setting position",配置.语言),
 宽度:Feis.dip(280),
 高度:Feis.dip(30),
 上边距:Feis.dip(5),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.提示颜色,
 背景绘图:Feis.jb(Feis.ys(0,100,200,255),Feis.dip(10)),
 文本重心:Feis.getGravity("居中"),
 布局:la_l
});

var la_r=Feis.addLayout(Feis.addScroll(la,0,
 Feis.JSONParams({
宽度:-2,
高度:Feis.dp(3,970),
位置重心:Feis.getGravity("居中")
 }))[0]);
 
la_r.setLayoutParams(
Feis.JSONParams({
 宽度:-2,
 高度:-1,
 位置重心:Feis.getGravity("居中")
})
);
 
var la_r0=Feis.addLayout(la_r,0);
la_r0.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 位置重心:Feis.getGravity("居中"),
 上边距:Feis.dip(10)
})
);

var tv0=Feis.JSONTextView({
 文本:str,
 宽度:Feis.dip(178),
 高度:Feis.dip(35),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r0,
 阴影:当前主题.按键阴影,
 监听:function(){
Feis.getEditText(lang("请输入文本","Input text",配置.语言),function(string,is){
if(!is&&!string.isEmpty()){
 str=string;tv0.setText(str);
 img.setImageBitmap(绘制刷新()); 
}
},str);
 }
});

var tv00=Feis.JSONTextView({
 文本:文本设置.画笔类型==0?lang("空心","Stroke",配置.语言):lang("实心","Fill",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r0,
 阴影:当前主题.按键阴影,
 监听:function(){
文本设置.画笔类型=(文本设置.画笔类型==0?1:0);
tv00.setText(文本设置.画笔类型==0?lang("空心","Stroke",配置.语言):lang("实心","Fill",配置.语言));
img.setImageBitmap(绘制刷新());
 }
});

var la_r1=Feis.addLayout(la_r,0);
la_r1.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中")
})
);

var tv1=Feis.JSONTextView({
 文本:lang("字体颜色:\n","Text color:\n",配置.语言)+Feis.Color_toHex(文本设置.画笔颜色),
 宽度:Feis.dip(98),
 高度:Feis.dip(40),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.recolor(文本设置.画笔颜色),
 背景绘图:Feis.jb(文本设置.画笔颜色,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(文本设置.画笔颜色,function(color){
文本设置.画笔颜色=color;
tv1.setText(lang("字体颜色:\n","Text color:\n",配置.语言)+Feis.Color_toHex(文本设置.画笔颜色));
tv1.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.画笔颜色),255));
tv1.setBackgroundColor(文本设置.画笔颜色);
img.setImageBitmap(绘制刷新());
});
 }
});

var tv2=Feis.JSONTextView({
 文本:lang("字体颜色2:\n","Text color2:\n",配置.语言)+Feis.Color_toHex(文本设置.画笔颜色2),
 宽度:Feis.dip(98),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.recolor(文本设置.画笔颜色2),
 背景绘图:Feis.jb(文本设置.画笔颜色2,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(文本设置.画笔颜色2,function(color){
文本设置.画笔颜色2=color;
tv2.setText(lang("字体颜色2:\n","Text color2:\n",配置.语言)+Feis.Color_toHex(文本设置.画笔颜色2));
tv2.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.画笔颜色2),255));
tv2.setBackgroundColor(文本设置.画笔颜色2);
img.setImageBitmap(绘制刷新());
});
 }
});

var tv3=Feis.JSONTextView({
 文本:lang("同色","With",配置.语言),
 宽度:Feis.dip(40),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r1,
 阴影:当前主题.按键阴影,
 监听:function(){
文本设置.画笔颜色2=文本设置.画笔颜色;
tv2.setText(lang("字体颜色2:\n","Text color2:\n",配置.语言)+Feis.Color_toHex(文本设置.画笔颜色2));
tv2.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.画笔颜色2),255));
tv2.setBackgroundColor(文本设置.画笔颜色2);
img.setImageBitmap(绘制刷新());
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("渐变角度:","Gradient angle:",配置.语言)+文本设置.颜色角度,
 宽度:Feis.dip(240),
 高度:Feis.dip(22),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb=Feis.JSONSeekBar({
 进度:文本设置.颜色角度,
 最大进度:360,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.颜色角度=p;
tv4.setText(lang("渐变角度:","Gradient angle:",配置.语言)+文本设置.颜色角度);
img.setImageBitmap(绘制刷新());
 }
});

var la_r2=Feis.addLayout(la_r,0);
la_r2.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
})
);

var tv5=Feis.JSONTextView({
 文本:lang("背景颜色:\n","Background color:\n",配置.语言)+Feis.Color_toHex(文本设置.背景颜色),
 宽度:Feis.dip(98),
 高度:Feis.dip(40),
 边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.Color_alpha(Feis.recolor(文本设置.背景颜色),255),
 背景绘图:Feis.jb(文本设置.背景颜色,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r2,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(文本设置.背景颜色,function(color){
文本设置.背景颜色=color;
tv5.setText(lang("背景颜色;\n","Background color:\n",配置.语言)+Feis.Color_toHex(文本设置.背景颜色));
tv5.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.背景颜色),255));
tv5.setBackgroundColor(文本设置.背景颜色);
img.setImageBitmap(绘制刷新());
});
 }
});

var tv6=Feis.JSONTextView({
 文本:lang("背景颜色2:\n","Background color2:\n",配置.语言)+Feis.Color_toHex(文本设置.背景颜色2),
 宽度:Feis.dip(98),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.Color_alpha(Feis.recolor(文本设置.背景颜色2),255),
 背景绘图:Feis.jb(文本设置.背景颜色2,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r2,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(文本设置.背景颜色2,function(color){
文本设置.背景颜色2=color;
tv6.setText(lang("背景颜色2:\n","background color2:\n",配置.语言)+Feis.Color_toHex(文本设置.背景颜色2));
tv6.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.背景颜色2),255));
tv6.setBackgroundColor(文本设置.背景颜色2);
img.setImageBitmap(绘制刷新());
});
 }
});

var tv7=Feis.JSONTextView({
 文本:lang("同色","With",配置.语言),
 宽度:Feis.dip(40),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r2,
 阴影:当前主题.按键阴影,
 监听:function(){
文本设置.背景颜色2=文本设置.背景颜色;
tv6.setText(lang("背景颜色:2\n","Background color2:\n",配置.语言)+Feis.Color_toHex(文本设置.背景颜色2));
tv6.setTextColor(Feis.Color_alpha(Feis.recolor(文本设置.背景颜色2),255));
tv6.setBackgroundColor(文本设置.背景颜色2);
img.setImageBitmap(绘制刷新());
 }
});

var tv8=Feis.JSONTextView({
 文本:lang(" 渐变角度:"," Gradient angle:",配置.语言)+文本设置.背景角度,
 宽度:Feis.dip(240),
 高度:Feis.dip(22),
 左边距:Feis.dip(0),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb1=Feis.JSONSeekBar({
 进度:文本设置.背景角度,
 最大进度:360,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 监听:function(p,is){
文本设置.背景角度=p;
tv8.setText(lang(" 渐变角度:"," Gradient angle:",配置.语言)+文本设置.背景角度);
img.setImageBitmap(绘制刷新());
 }
});

var tv9=Feis.JSONTextView({
 文本:lang(" 文本大小:"," Text size:",配置.语言)+size,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 左边距:Feis.dip(0),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb2=Feis.JSONSeekBar({
 进度:size,
 最大进度:w,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
size=p>1?p:2;
tv9.setText(lang(" 字体大小:"," Text size:",配置.语言)+size);
img.setImageBitmap(绘制刷新());
 }
});

var tv10=Feis.JSONTextView({
 文本:lang(" 字体粗细:"," Text stroke:",配置.语言)+文本设置.画笔粗细,宽度:Feis.dip(240),
 高度:Feis.dip(25),
 左边距:Feis.dip(0),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb3=Feis.JSONSeekBar({
 进度:文本设置.画笔粗细,
 最大进度:20,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.画笔粗细=p;
tv10.setText(lang(" 字体粗细:"," Text stroke:",配置.语言)+文本设置.画笔粗细);
img.setImageBitmap(绘制刷新());
 }
});

var tv11=Feis.JSONTextView({
 文本:lang(" 水平缩放:"," Scale-X:",配置.语言)+文本设置.字体缩放,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb4=Feis.JSONSeekBar({
 进度:文本设置.字体缩放,
 最大进度:20,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.字体缩放=p;
tv11.setText(lang(" 水平缩放:"," Scale-X:",配置.语言)+文本设置.字体缩放);
img.setImageBitmap(绘制刷新());
 }
});

var tv12=Feis.JSONTextView({
 文本:lang(" 水平边距:"," Margin-X:",配置.语言)+文本设置.边距x,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb5=Feis.JSONSeekBar({
 进度:文本设置.边距x,
 最大进度:w,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.边距x=p;
tv12.setText(lang(" 水平边距:"," Margin-X:",配置.语言)+文本设置.边距x);
img.setImageBitmap(绘制刷新());
 }
});

var tv13=Feis.JSONTextView({
 文本:lang(" 垂直边距:"," Margin-Y:",配置.语言)+文本设置.边距y,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb6=Feis.JSONSeekBar({
 进度:文本设置.边距y,
 最大进度:h,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.边距y=p;
tv13.setText(lang(" 垂直边距:"," Margin-Y:",配置.语言)+文本设置.边距y);
img.setImageBitmap(绘制刷新());
 }
});

var tv14=Feis.JSONTextView({
 文本:lang(" 字体倾斜:"," Text skew:",配置.语言)+文本设置.字体倾斜.toFixed(2),
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb7=Feis.JSONSeekBar({
 进度:文本设置.字体倾斜+10,
 最大进度:20,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.字体倾斜=(p*0.1)-1;
img.setImageBitmap(绘制刷新());
tv14.setText(lang(" 字体倾斜:"," Text skew:",配置.语言)+文本设置.字体倾斜.toFixed(2));
 }
});

var tv15=Feis.JSONTextView({
 文本:lang(" 旋转:"," Rotate:",配置.语言)+文本设置.字体角度,
 宽度:Feis.dip(240),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("左中"),
 布局:la_r,
 阴影:当前主题.按键阴影
});

var jsb8=Feis.JSONSeekBar({
 进度:文本设置.字体角度,
 最大进度:360,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(240),
 高度:Feis.dip(30),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
文本设置.字体角度=p;
tv15.setText(lang(" 旋转:"," Rotate:",配置.语言)+文本设置.字体角度);
img.setImageBitmap(绘制刷新());
 }
});

var tv16=Feis.JSONTextView({
 文本:lang("当前字体:\n","Font:\n",配置.语言)+(文本设置.字体路径).substr((文本设置.字体路径).lastIndexOf("/")),
 宽度:Feis.dip(240),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(0)),文本重心:Feis.getGravity("居中"),
 布局:la_r,
 阴影:当前主题.按键阴影,
 监听:function(){
文件选择器(null,function(file){
文本设置.字体路径=file.getPath();
tv16.setText(lang("当前字体:\n","Font:\n",配置.语言)+(文本设置.字体路径).substr((文本设置.字体路径).lastIndexOf("/")));
img.setImageBitmap(绘制刷新()); 
},".ttf");
 }
});

var la_r3=Feis.addLayout(la_r,0);
la_r3.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(45),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中")
})
);

var tv17=Feis.JSONTextView({
 文本:lang("阴影颜色:\n","Text color:\n",配置.语言)+Feis.Color_toHex(阴影颜色),
 宽度:Feis.dip(198),
 高度:Feis.dip(35),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:Feis.recolor(文本设置.画笔颜色),
 背景绘图:Feis.jb(文本设置.画笔颜色,Feis.dip(0)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r3,
 阴影:当前主题.按键阴影,
 监听:function(){
颜色选择器(阴影颜色,function(color){
阴影颜色=color;
tv17.setText(lang("阴影颜色:\n","Shadow color:\n",配置.语言)+Feis.Color_toHex(阴影颜色));
tv17.setTextColor(Feis.Color_alpha(Feis.recolor(阴影颜色),255));
tv17.setBackgroundColor(阴影颜色);
if(Feis.getAlpha(阴影颜色)>10&&la_r4.getChildCount()==0){
 阴影选项卡(la_r4);
 ppp(lang("\n§7只有文本的颜色相同，阴影的颜色才能生效\n","Only text color is the same, the shadow color to be effective",配置.语言)); 
}
img.setImageBitmap(绘制刷新());
});
 }
});

var tv18=Feis.JSONTextView({
 文本:lang("关闭","Close",配置.语言),
 宽度:Feis.dip(40),
 高度:Feis.dip(35),
 左边距:Feis.dip(1),
 上边距:Feis.dip(1),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r3,
 阴影:当前主题.按键阴影,
 监听:function(){
阴影颜色=Feis.Color_alpha(阴影颜色,0);
tv17.setText(lang("阴影颜色:\n","Shadow color2:\n",配置.语言)+Feis.Color_toHex(阴影颜色));
tv17.setTextColor(Feis.Color_alpha(Feis.recolor(阴影颜色),255));
tv17.setBackgroundColor(阴影颜色);
关闭阴影选项卡();
img.setImageBitmap(绘制刷新());
 }
});

var la_r4=Feis.addLayout(la_r,1);
la_r4.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:-1,
 位置重心:Feis.getGravity("居中")
})
);

var 关闭阴影选项卡=function(){
 la_r4.removeAllViews();
}

var 阴影选项卡=function(la){
 var tv19=Feis.JSONTextView({
文本:lang(" 阴影模糊:"," Shadow blur:",配置.语言)+阴影模糊.toFixed(1),
宽度:Feis.dip(220),
高度:Feis.dip(25),
位置重心:11,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
文本重心:Feis.getGravity("左中"),
布局:la
 });
 
 var jsb9=Feis.JSONSeekBar({
进度:阴影模糊*10,
最大进度:300,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(220),
高度:Feis.dip(30),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
布局:la,
阴影:当前主题.按键阴影,
监听:function(p,is){
阴影模糊=p*0.1+0.1;
tv19.setText(lang(" 阴影模糊:"," Shadow blur:",配置.语言)+阴影模糊.toFixed(1));
img.setImageBitmap(绘制刷新());
}
 });
 
 var tv20=Feis.JSONTextView({
文本:lang(" 阴影水平偏移:"," Shadow offset-X:",配置.语言)+阴影偏移x.toFixed(1),
宽度:Feis.dip(220),
高度:Feis.dip(25),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
文本重心:Feis.getGravity("左中"),
布局:la
 });
 
 var jsb10=Feis.JSONSeekBar({
进度:(阴影偏移x+20)*10,
最大进度:400,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(220),
高度:Feis.dip(30),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
布局:la,
监听:function(p,is){
阴影偏移x=p*0.1-20;
tv20.setText(lang(" 阴影水平偏移:"," Shadow offset-X:",配置.语言)+阴影偏移x.toFixed(1));
img.setImageBitmap(绘制刷新());
}
 });
 
 var tv21=Feis.JSONTextView({
文本:lang(" 阴影垂直偏移:"," Shadow offset-Y:",配置.语言)+阴影偏移y.toFixed(1),
宽度:Feis.dip(220),
高度:Feis.dip(25),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
文本重心:Feis.getGravity("左中"),
布局:la
 });
 
 var jsb11=Feis.JSONSeekBar({
进度:(阴影偏移y+20)*10,
最大进度:400,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(220),
高度:Feis.dip(30),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
布局:la,
监听:function(p,is){
阴影偏移y=p*0.1-20;
tv21.setText(lang(" 阴影垂直偏移:"," Shadow offset-Y:",配置.语言)+阴影偏移y.toFixed(1));
img.setImageBitmap(绘制刷新());
}
 });
}

var la_r6=Feis.addLayout(la_r,0);
la_r6.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(52),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中")
})
 );
 
var tv25=Feis.JSONTextView({
 文本:lang("取消","Cancel",配置.语言),
 宽度:Feis.dip(118),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r6,
 阴影:当前主题.按键阴影,
 监听:function(){
win.dismiss();
 }
});

var tv26=Feis.JSONTextView({
 文本:lang("确认","Ok",配置.语言),
 宽度:Feis.dip(118),
 高度:Feis.dip(40),
 左边距:Feis.dip(1),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la_r6,
 阴影:当前主题.按键阴影,
 监听:function(){
绘制刷新(true,true);
run();
win.dismiss();
 }
});
}catch(e){Feis.报错(e)}
 });
}

//～～～～～～～～～～～～～～～～～～～～～～～

function 编辑图像(画,run){
Feis.UiT(function(){
 var pw=Feis.dip(300),
ph=Feis.dp(3,980);
 var w=画.getWidth(),
h=画.getHeight();
 var x=w/2,
y=h/2,
mode=0,
r=Math.max(w,h)/20;
 var 预览=new 悬浮预览();
 var 矩形=new Feis.工具.矩形();
矩形.设定(w/10,h/10,w-w/10,h-h/10);
 var 当前模式=1;
 var 画图=new Feis.绘画(画.getBitmap());
画图.空心画笔(当前主题.按键背色2,true,3);

 var 属性刷新=function(){
w=画图.getWidth();
h=画图.getHeight();
x=w/2;
y=h/2;
r=Math.max(w,h)/20;
矩形.设定(w/10,h/10,w-w/10,h-h/10);
 }

 var 更新画笔=function(a){
if(当前模式==1){
if(a==0){
 if(矩形.在内(x,y))mode=1;
 if(Feis.工具.判断圆内(x,y,矩形.右,矩形.下,r))mode=2;
 矩形.位移标记(x,y);
 画图.空心画笔(当前主题.按键背色2,true,3);
}
if(a==2){
 if(mode==1)矩形.标记位移(x,y);
 if(mode==2&&x<w&&y<h)矩形.右下(x,y); 
 矩形.禁止越界(0,0,w,h);
}
if(a==1)mode=0;
var b=画图.绘制矩形(矩形.左,矩形.上,矩形.右,矩形.下,true);
var p=Feis.绘画.画笔(Feis.Color_alpha(当前主题.按键背色2,180),1,1);
var 画布=Feis.绘画.画布(b);
p.setTextSize(r-r/4);
画布.drawCircle(矩形.右,矩形.下,r,p);
if(mode==1&&a==2){
画布.drawText(lang("位置:","Coord size:",配置.语言)+Math.floor(矩形.左)+","+Math.floor(矩形.上),r,r,p);
}
if(mode==2&&a==2){
画布.drawText(lang("画布:","Canvas size:",配置.语言)+w+"*"+h+lang(" 矩形:"," Rect size:",配置.语言)+Math.floor(矩形.宽度())+"*"+Math.floor(矩形.高度()),r,r,p);}
return b;
}
return 画图.getBitmap();
 }
 
 var 绘制刷新=function(isout,a){
return 更新画笔(a);
 }

 var winArray=Feis.addWindow2(
 当前主题.编辑背色==null?获取壁纸():
 画线(500,800,当前主题.编辑线数,当前主题.编辑线条,当前主题.编辑背色,当前主题.线条类型),Feis.dp(1,500)-pw/2,Feis.dp(3,10),pw,ph,false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
var img=Feis.JSONImageView({
位图:画.getBitmap(),
宽度:Feis.dip(250),
高度:Feis.dip(250),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
背景绘图:画背景(Feis.dip(300),Feis.dip(300)),
布局:layout,
触摸:function(e,a){ 
 var xy=Feis.getImageViewXY(w,h,img.getWidth(),img.getHeight(),e.getX(),e.getY());
 x=xy[0];
 y=xy[1];
 img.setImageBitmap(绘制刷新(true,a));
 return true;
}
}); 

var sa=Feis.addScroll(layout,0,
Feis.JSONParams({
 宽度:-2,
 高度:Feis.dp(3,980)-Feis.dip(257),
 左边距:Feis.dip(0),
 上边距:Feis.dip(0),
 位置重心:Feis.getGravity("居中")
}))[0];

var la=Feis.addLayout(sa,1);

var 操作菜单=function(){
la.removeAllViews();
var la0=Feis.addLayout(la,0);
la0.setLayoutParams(
Feis.JSONParams({
 宽度:Feis.dip(250),
 高度:Feis.dip(42),
 位置重心:Feis.getGravity("居中")
})
);

var tv0=Feis.JSONTextView({
文本:lang("裁剪","Cut",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(35),
左边距:Feis.dip(2),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la0,
阴影:当前主题.按键阴影,
监听:function(){
 当前模式=1;
 img.setImageBitmap(绘制刷新(true,0));
 裁剪操作();
}
});

var tv1=Feis.JSONTextView({
文本:lang("翻转","Rotate",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(35),
左边距:Feis.dip(2),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la0,
阴影:当前主题.按键阴影,
监听:function(){
 当前模式=2;
 镜像操作();
}
});

var tv2=Feis.JSONTextView({
文本:lang("缩放","Scale",配置.语言),
宽度:Feis.dip(80),
高度:Feis.dip(35),
左边距:Feis.dip(2),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la0,
阴影:当前主题.按键阴影,
监听:function(){
 当前模式=3
 缩放操作();
}
});

var la1=Feis.addLayout(la,0);
 la1.setLayoutParams(
Feis.JSONParams({
宽度:-1,
高度:Feis.dip(48),
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中")
})
 );

var tv3=Feis.JSONTextView({
文本:lang("取消编辑","Edit cancel",配置.语言),
宽度:Feis.dip(120),
高度:Feis.dip(40),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(){
if(run!=null)run(null);
 win.dismiss();
}
});

var tv4=Feis.JSONTextView({
文本:lang("编辑完成","Edit complete",配置.语言),
宽度:Feis.dip(120),
高度:Feis.dip(40),
左边距:Feis.dip(3),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
文本重心:Feis.getGravity("居中"),
布局:la1,
阴影:当前主题.按键阴影,
监听:function(){
 if(run!=null)run(画图);
 win.dismiss();
}
});
}

//～～～～～～～～～～～～

操作菜单();

var 裁剪操作=function(){
la.removeAllViews();
var la1=Feis.addLayout(la,1);
la1.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(96),
 位置重心:Feis.getGravity("居中")
})
);

var tv3=Feis.JSONTextView({
 文本:lang("取消裁剪","Cut cancel",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
操作菜单();
img.setImageBitmap(画图.getBitmap());
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("确认裁剪","Confirm cut",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 左边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
操作菜单();
img.setImageBitmap(画图.新建(Feis.绘图.裁剪(画图.getBitmap(),矩形.左,矩形.上,矩形.宽,矩形.高),null,true));
属性刷新();
 }
});
}

//～～～～～～～～～～～～～

var 镜像操作=function(){
la.removeAllViews();
var 新画=new Feis.绘画(画图.getBitmap());
var la0=Feis.addLayout(la,0);
la0.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(48),
 位置重心:Feis.getGravity("居中")
})
 );
 
var tv0=Feis.JSONTextView({
 文本:lang("左90","Left 90",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
新画.旋转(270);
img.setImageBitmap(新画.getBitmap());
 }
});

var tv1=Feis.JSONTextView({
 文本:lang("右90","Roght 90",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(2),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
新画.旋转(90);
img.setImageBitmap(新画.getBitmap());
 }
});

var tv2=Feis.JSONTextView({
 文本:lang("垂直","Vertical",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(2),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
新画.镜像(1,-1);
img.setImageBitmap(新画.getBitmap());
 }
});

var tv2=Feis.JSONTextView({
 文本:lang("水平","Horizontal",配置.语言),
 宽度:Feis.dip(60),
 高度:Feis.dip(35),
 左边距:Feis.dip(2),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
新画.镜像(-1,1);
img.setImageBitmap(新画.getBitmap());
 }
});

var la1=Feis.addLayout(la,0);
la1.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(52),
 位置重心:Feis.getGravity("居中")
})
);

var tv3=Feis.JSONTextView({
 文本:lang("取消"," Cancel",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
操作菜单()
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("完成","Complete",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 左边距:Feis.dip(3),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
画图=新画;
操作菜单();
 }
});
}

//～～～～～～～～～～～～

var 缩放操作=function(){
la.removeAllViews();
var w=画图.getWidth(),
h=画图.getHeight(),
scale=0;

var la0=Feis.addLayout(la,0);
la0.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(52),
 位置重心:Feis.getGravity("居中")
})
);

var tv0=Feis.JSONTextView({
 文本:lang("尺寸:\n","Size:\n",配置.语言)+w+"x"+h,
 宽度:Feis.dip(60),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.标题文色,
 背景绘图:Feis.jb(当前主题.标题背色,Feis.dip(当前主题.标题圆角1)),
 文本重心:Feis.getGravity("居中"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(){
快速列表(lang("推荐尺寸(1~3)","Suitable size(1~3)",配置.语言),[144,177,200,232,256,320,360,480,800],function(obj){
scale=obj;
var wh=Feis.getScaleSize(w,h,scale);
if(scale>250){
 tv0.setTextColor(Feis.ys(255,255,0,0));
}else if(scale<=250&&scale>=160){
 tv0.setTextColor(Feis.ys(255,0,255,0));
}else if(scale<160){
 tv0.setTextColor(Feis.ys(255,255,255,0));
}
tv0.setText(lang("尺寸:\n","Size:\n",配置.语言)+wh[0]+"x"+wh[1]);
jsb.setProgress(scale);
img.setImageBitmap(画图.缩放(wh[0],wh[1],true));
});
 }
});

var jsb=Feis.JSONSeekBar({
 进度:w>h?w:h,
 最大进度:w>h?w:h,
 进度颜色:Feis.ys(255,255,100,150),
 宽度:Feis.dip(188),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 左边距:Feis.dip(1),
 位置重心:Feis.getGravity("左中"),
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角),"左右"),
 布局:la0,
 阴影:当前主题.按键阴影,
 监听:function(p,is){
scale=p>0?p:1;
var wh=Feis.getScaleSize(w,h,scale);
if(scale>250){
tv0.setTextColor(Feis.ys(255,255,0,0));
}else if(scale<=256&&scale>=160){
tv0.setTextColor(Feis.ys(255,0,255,0));
}else if(scale<160){
tv0.setTextColor(Feis.ys(255,255,255,0));
}
tv0.setText(lang("尺寸:\n","Size:\n",配置.语言)+wh[0]+"x"+wh[1]);
img.setImageBitmap(画图.缩放(wh[0],wh[1],true));
 }
});

var la1=Feis.addLayout(la,0);
la1.setLayoutParams(
Feis.JSONParams({
 宽度:-1,
 高度:Feis.dip(50),
 位置重心:Feis.getGravity("居中")
})
);

var tv3=Feis.JSONTextView({
 文本:lang("取消缩放","Scale cancel",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
操作菜单();
img.setImageBitmap(画图.getBitmap());
 }
});

var tv4=Feis.JSONTextView({
 文本:lang("确认缩放","Confirm Scale",配置.语言),
 宽度:Feis.dip(120),
 高度:Feis.dip(40),
 左边距:Feis.dip(3),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:11,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la1,
 阴影:当前主题.按键阴影,
 监听:function(){
当前模式=0;
操作菜单();
var wh=Feis.getScaleSize(w,h,scale);
画图.缩放(wh[0],wh[1]);
img.setImageBitmap(画图.getBitmap());
属性刷新();
 }
});
}
}catch(e){Feis.报错(e)}
});
}

//～～～～～～～～～～～～～～～～～～～～～～～～

function 颜色选择器(col,run){
var colors=[
Feis.ys(255,0,0,255),
Feis.ys(255,255,0,0),
Feis.ys(255,255,100,150),
Feis.ys(255,255,255,0),
Feis.ys(255,0,255,0),
Feis.ys(255,0,255,255),
Feis.ys(255,150,100,255),
Feis.ys(255,0,0,255),
Feis.ys(0xffffffff),
Feis.ys(0xff000000)
];

var 渐变=function(color){
 return [
Feis.ys(0xffffffff),
color,Feis.ys(0xff000000)
 ];
}

Feis.UiT(function(){
 var winArray=Feis.addWindow2(
 当前主题.背景颜色==null?获取壁纸():
 Feis.jb(当前主题.背景颜色,0),Feis.dp(1,10),Feis.dp(3,10),Feis.dip(450),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
col=(col==null?Feis.ys(0xffffffff):col);
var color=col,
 A=Feis.getAlpha(col);
var w1=Feis.dip(350),
 h1=Feis.dip(100),
 x1=w1/2,
 y1=h1/2;
 var w0=w1,
 h0=h1/4,
 x0=w0/2,
 y0=h0/2;
 
var 画布0=new Feis.绘画(Feis.drawToBmp(Feis.jb(colors,0,"左右",0,w0,h0)));
 画布0.空心画笔(Feis.recolor(color),false,5);
var 画布1=new Feis.绘画(Feis.drawToBmp(Feis.jb(渐变(color),0,"左右",0,w1,h1)));
 画布1.空心画笔(Feis.recolor(color),false,5);

var tv=Feis.JSONTextView({
文本:lang("ὑ9�颜色提取器","ὑ9�Color extractor",配置.语言),
宽度:Feis.dip(430),
高度:Feis.dip(35),
上边距:Feis.dip(5),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:Feis.ys(255,0,0,0),
背景绘图:Feis.jb(Feis.ys(250,255,100,150),[0,0,Feis.dip(10),Feis.dip(10)]),
文本重心:Feis.getGravity("居中"),
布局:layout,
监听:function(v){
win.dismiss();
}
});
var img0=Feis.JSONImageView({
 位图:画布0.绘制圆形(x0,y0,h0/2,true),
 宽度:Feis.dip(350),
 高度:Feis.dip(25),
 上边距:Feis.dip(10),
 位置重心:Feis.getGravity("居中"),
 背景绘图:Feis.jb(Feis.ys(255,150,200,255),Feis.dip(5)),
 布局:layout,
 触摸:function(e,a){ 
var px=Math.round(e.getX()),
 py=Math.round(e.getY());
if(px>0&&px<w0)x0=px;
var c=画布0.getBitmap().getPixel(x0,y0);
画布1.新建(Feis.drawToBmp(Feis.jb(渐变(c),0,"左右",0,w1,h1)));
var c=Feis.recolor(Feis.Color_alpha(c,255));
画布0.空心画笔(c,true,5);
img0.setImageBitmap(画布0.绘制圆形(x0,y0,h0/2,true));
画布1.空心画笔(c,true,5);
img1.setImageBitmap(画布1.绘制圆形(x1,y1,35,true));
var c=updateColor(画布1,x1,y1);
画布1.空心画笔(c,true,5);
img1.setImageBitmap(画布1.绘制圆形(x1,y1,35,true));
return true;
 }
});

 var img1=Feis.JSONImageView({
位图:画布1.绘制圆形(x1,y1,35,true),
宽度:Feis.dip(350),
高度:Feis.dip(100),
上边距:Feis.dip(20),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(Feis.ys(255,150,200,255),Feis.dip(5)),
布局:layout,
触摸:function(e,a){ 
var px=Math.round(e.getX()),
py=Math.round(e.getY())
if(px>0&&px<w1)x1=px;
if(py>0&&py<h1)y1=py;
var c=updateColor(画布1,x1,y1);
画布1.空心画笔(c,true,5);
img1.setImageBitmap(画布1.绘制圆形(x1,y1,35,true));
return true;
}
 });
 
 var jsb=Feis.JSONSeekBar({
进度:A,
最大进度:255,
进度颜色:Feis.ys(255,255,100,150),
宽度:Feis.dip(350),
高度:Feis.dip(30),
上边距:Feis.dip(20),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb([Feis.Color_alpha(col,0),Feis.Color_alpha(col,255)],Feis.dip(15),"左右"),
布局:layout,
监听:function(p,is){
A=p;
jsb.setBackgroundDrawable(Feis.jb([Feis.Color_alpha(color,0),Feis.Color_alpha(color,255)],Feis.dip(15),"左右"));
updateColor();
}
 });
 
var la=Feis.addLayout(layout,0);
la.setLayoutParams(
Feis.JSONParams({
 宽度:Feis.dip(300),
 高度:Feis.dip(55),
 上边距:Feis.dip(20),
 位置重心:Feis.getGravity("居中")
})
);

var tv2=Feis.JSONTextView({
文本:lang("原色:","Original color:\n",配置.语言)+Feis.Color_toHex(col),
宽度:Feis.dip(110),
高度:Feis.dip(50),
左边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:15,
文本颜色:Feis.recolor(col),
背景颜色:col,
文本重心:Feis.getGravity("居中"),
布局:la,
监听:function(){
 color=col;updateColor();
}
});

var tv3=Feis.JSONTextView({
 文本:lang("当前:","New color\n",配置.语言)+Feis.Color_toHex(col),
 宽度:Feis.dip(110),
 高度:Feis.dip(50),
 左边距:Feis.dip(5),
 位置重心:Feis.getGravity("居中"),
 文本大小:15,
 文本颜色:Feis.recolor(col),
 背景颜色:col,
 文本重心:Feis.getGravity("居中"),
 布局:la,
 监听:function(){
if(run!=null)run(color);
win.dismiss();
 }
});

Feis.JSONTextView({
 文本:lang("取消","Cancel",配置.语言),
 宽度:Feis.dip(70),
 高度:Feis.dip(50),
 左边距:Feis.dip(5),
 位置重心:Feis.getGravity("居中"),
 文本大小:15,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(当前主题.按键圆角)),
 文本重心:Feis.getGravity("居中"),
 布局:la,
 监听:function(){
win.dismiss();
 }
});

var updateColor=function(画布,x,y){
 if(画布!=null&&x!=null&&y!=null){
color=画布.getBitmap().getPixel(x,y);
 }
 color=Feis.Color_alpha(color,A);
 tv3.setText(lang("当前:","New color\n",配置.语言)+Feis.Color_toHex(color));
 tv3.setBackgroundColor(color);
 jsb.setBackgroundDrawable(Feis.jb([Feis.Color_alpha(color,0),Feis.Color_alpha(color,255)],Feis.dip(15),"左右"));
 var c=Feis.recolor(Feis.Color_alpha(color,255));
 //Feis.seekbarColor(jsb,c);
 tv3.setTextColor(c);
 return c;
}

}catch(e){Feis.报错(e)} 
 });
}

//～～～～～～～～～～～～～～～～～～～～～

var 图标适配器=function(){
this.文件=文件图标();
this.目录=目录图标();
this.图像=图像图标();
var 文本=文本图标(),
压缩=压缩图标(),
字体=字体图标();
var 音频=音频图标(),
视频=视频图标();
this.key=[".txt",".js",".java",".zip",".jar",".rar",
".ttf",".ttc",".mp3",".ogg",".mp4",".3gp"];
this.indexOf=function(str){
 return this.get(this.key.indexOf(str));
}

this.get=function(pos){
 if(pos==-1)return this.文件;
 return [文本,文本,文本,压缩,压缩,压缩,字体,字体,音频,音频,视频,视频][pos];
}
}

var 图标适配=null;

//～～～～～～～～～～～～～～

function 文件处理(ad,fm,file){
Feis.UiT(function(){
 try{
var pw=Feis.dip(160),
 ph=Feis.dip(100);
var winArray=Feis.addWindow2(
当前主题.背景颜色==null?获取壁纸():
画线(pw,ph,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型)
,Feis.dp(0,500)-pw/2,Feis.dp(3,500)-ph/2,pw,ph,true,true);
var win=winArray[0];
var layout=winArray[1];

var tv=Feis.JSONTextView({
文本:lang("文件处理","File operate",配置.语言),
宽度:Feis.dip(154),
高度:Feis.dip(32),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(当前主题.标题背色,[Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角1),Feis.dip(当前主题.标题圆角),Feis.dip(当前主题.标题圆角)]),
文本重心:Feis.getGravity("居中"),
布局:layout
});

var tv0=Feis.JSONTextView({
文本:lang("删除","Delete",配置.语言),
宽度:Feis.dip(150),
高度:Feis.dip(35),
上边距:Feis.dip(10),
下边距:Feis.dip(10),
文本大小:11,
位置重心:Feis.getGravity("居中"),
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(v){
if(new Feis.File(file).delete()){
ad.update(fm.获取列表());
win.dismiss();
}
}
});

 }catch(e){Feis.报错(e);}
});
}




function 文件选择器(path,run,type){
Feis.UiT(function(){
 var 文管=new Feis.文件管理(path==null?Feis.根路径(""):path);
 if(图标适配==null)图标适配=new 图标适配器();
 var winArray=Feis.addWindow2(Feis.ys(255,224,225,185,-1),Feis.dp(1,200),Feis.dp(3,10),Feis.dip(300),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
var la=Feis.addLayout(layout,0);
 la.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(290),
高度:Feis.dip(38),
左边距:Feis.dip(5),
上边距:Feis.dip(1)
})
 );
 la.setBackgroundDrawable(Feis.jb(当前主题.标题背色,Feis.dip(5)));
 Feis.setElevation(la,当前主题.标题阴影,当前主题.标题阴影);

var tv=Feis.JSONTextView({
文本:lang("文件管理","Files manage",配置.语言),
宽度:Feis.dip(217),
高度:Feis.dip(34),
左边距:Feis.dip(1),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:14,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(Feis.ys(100,255,255,255),[Feis.dip(5),0,0,Feis.dip(5)]),
文本重心:Feis.getGravity("居中"),
布局:la
});

var tv0=Feis.JSONTextView({
文本:lang("取消","Cancel",配置.语言),
宽度:Feis.dip(70),
高度:Feis.dip(34),
左边距:Feis.dip(1),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(Feis.ys(100,255,255,255),[0,Feis.dip(5),Feis.dip(5),0]),
文本重心:Feis.getGravity("居中"),
布局:la,
监听:function(){
 win.dismiss();
}
});

var tv1=Feis.JSONTextView({
文本:lang("返回上一级目录","Up",配置.语言),
宽度:Feis.dip(280),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(){
 文管.上级();
 ad.update(文管.获取列表());
}
});

var ad=new Feis.BaseAdapter(文管.获取列表(),function(pos,convertView,parent,obj){
try{
 var e=文管.扩展名称(obj)
 var 图标=obj.isDirectory()?图标适配.目录:图标适配.indexOf(e);
 if([".jpg",".png",".jpeg",".gif"].indexOf(e)!=-1){
var la=Feis.addLayout(null,1);
var img=Feis.JSONImageView({
位图:图标适配.图像,
宽度:Feis.dip(200),
高度:Feis.dip(200),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
布局:la,
监听:function(){
 if(type.indexOf(e)!=-1){
if(run!=null)run(obj);
win.dismiss();
 }else if(type=="文件"&&obj.isFile()){
if(run!=null)run(obj);
win.dismiss();
 }else if(type=="目录"&&obj.isDirectory()){
if(run!=null)run(obj);
win.dismiss();
 }else if(type==null){
if(run!=null)run(obj);
win.dismiss();
 }else{
var msg=((type instanceof Array)?type.join(" or "):type);
ppp(lang("请选择一个… ","Please select a… ",配置.语言)+msg);
 }
},
长按:function(v){
文件处理(ad,文管,obj);
return true;
}
});

Feis.JSONTextView({
文本:""+obj.getName(),
宽度:Feis.dip(200),
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
文本重心:Feis.getGravity("居中"),
布局:la
});

Feis.JSONTextView({
文本:""+文管.获取日期(obj)+""+文管.获取大小(obj),
宽度:Feis.dip(200),
高度:Feis.dip(10),
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
文本重心:Feis.getGravity("居中"),
布局:la
});

Feis.线程(function(){
var bmp=Feis.loadBitmap(obj.getPath(),100);
if(img!=null)img.post(function(){
 img.setImageBitmap(bmp);
});
});

Feis.缩放动画(la,0,100,500);
 return la;
 }
 
 var la=Feis.addLayout(null,0);
 Feis.JSONImageView({
位图:图标,宽度:Feis.dip(40),
高度:Feis.dip(40),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
布局:la
 });
 
 var la0=Feis.addLayout(la,1);
la0.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(200),
高度:Feis.dip(40),
左边距:Feis.dip(0),
上边距:Feis.dip(0)
 })
);

 var tv=Feis.JSONTextView({
文本:""+obj.getName(),
宽度:-2,
高度:Feis.dip(30),
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
文本重心:Feis.getGravity("左中"),
布局:la0
 });
 
 if(e.equalsIgnoreCase(".ttf"))
Feis.setViewFont(tv,obj.getPath());

 Feis.JSONTextView({
文本:obj.isFile()?(""+文管.获取日期(obj)+""+文管.获取大小(obj)):"",
宽度:-2,
高度:Feis.dip(10),
左边距:Feis.dip(0),
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:Feis.ys(255,0,0,0),
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
文本重心:Feis.getGravity("左中"),
布局:la0
 });
 
 Feis.点击监听(
Feis.JSONTextView({
文本:lang("选中","Choose",配置.语言),
宽度:Feis.dip(60),
高度:Feis.dip(40),
左边距:1,
上边距:Feis.dip(0),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(Feis.ys(40,0,0,0),Feis.dip(0)),
文本重心:Feis.getGravity("居中"),
布局:la
}),function(){ 
if(type.indexOf(e)!=-1){
 if(run!=null)run(obj);
 win.dismiss();
}else if(type=="文件"&&obj.isFile()){
 if(run!=null)run(obj);
 win.dismiss();
}else if(type=="目录"&&obj.isDirectory()){
 if(run!=null)run(obj);
 win.dismiss();
}else if(type==null){
 if(run!=null)run(obj);
 win.dismiss();
}else{
 var msg=((type instanceof Array)?type.join(" or "):type);
 ppp(lang("请选择一个… ","Please select a… ",配置.语言)+msg);
}
});

Feis.水平动画(la,100,0,200);
 return la;
}catch(e){Feis.报错(e)} 
});

var list=Feis.JSONListView({
适配器:ad.getAdapter(),
宽度:-2,
高度:Feis.dp(3,980)-Feis.dip(74),
左边距:Feis.dip(0),
上边距:Feis.dip(2),
背景颜色:Feis.ys(100,255,255,255),
间隙高度:Feis.dip(2),
布局:layout,
位置重心:Feis.getGravity("居中")
});
Feis.列表点击监听(list,function(av,v,id,p){
var file=ad.get(id);
if(file.isDirectory()){
 文管.当前=file;ad.update(文管.获取列表());
}
}); 

 }catch(e){Feis.报错(e)} 
});
}
//～～～～～～～～～～～～～～～～～～～～～～
var 相册解析;
var 相册列表;

function 图片选择器(is,run){
var it=0;
Feis.UiT(function(){
 var 无图,透明图层;
 var 目录=[];
 var 模式=0,
 记录位置=0;
 
 var get=function(list){
var 图像=[];
for(var i=0;i<list.length;i+=2)
图像.push([list[i],list[i+1]]);
return 图像;
 }
 
 var winArray=Feis.addWindow2(
 当前主题.背景颜色==null?获取壁纸():
 画线(500,900,当前主题.背景线数,当前主题.背景线条,当前主题.背景颜色,当前主题.线条类型),Feis.dp(1,200),Feis.dp(3,10),Feis.dip(300),Feis.dp(3,980),false,true);
 var win=winArray[0];
 var layout=winArray[1];
 try{
//layout.removeAllViews()
var la=Feis.addLayout(layout,0);
 la.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(300),
高度:Feis.dip(40),
左边距:Feis.dip(0),
上边距:Feis.dip(0)
})
 );
la.setBackgroundDrawable(Feis.jb(当前主题.标题背色,当前主题.标题圆角));
Feis.setElevation(la,当前主题.标题阴影,当前主题.标题阴影);

var tv=Feis.JSONTextView({
文本:lang("选择相册","Choose photo albums",配置.语言),
宽度:Feis.dip(228),
高度:Feis.dip(35),
左边距:Feis.dip(1),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(Feis.ys(0,0,0,0),当前主题.标题圆角),
文本重心:Feis.getGravity("居中"),
布局:la
});

var tv0=Feis.JSONTextView({
文本:lang("返回","Back",配置.语言),
宽度:Feis.dip(70),
高度:Feis.dip(35),
左边距:Feis.dip(1),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:13,
文本颜色:当前主题.标题文色,
背景绘图:Feis.jb(Feis.ys(0,0,0,0),当前主题.标题圆角),
文本重心:Feis.getGravity("居中"),
布局:la,
监听:function(){
if(fv!=null)fv.dismiss();
if(it==1){
win.dismiss();
}else{
ppp(lang("加载中...无法关闭！","Loading...",配置.语言));
}
}
});

var tv1=Feis.JSONTextView({
文本:lang("返回相册列表","Back albums list",配置.语言),
宽度:Feis.dip(300),
高度:Feis.dip(35),
左边距:Feis.dip(0),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:11,
文本颜色:Feis.ys(255,0,0,0),背景绘图:Feis.jb(Feis.ys(180,255,255,255),Feis.dip(5)),
文本重心:Feis.getGravity("居中"),
布局:layout,
阴影:当前主题.按键阴影,
监听:function(){
 Feis.viewShow(tv1,0);
 控件高度(0);
 tv.setText(lang("选择相册","Choose photo albums",配置.语言));
 模式=0;ad.update(目录);
 list.smoothScrollToPositionFromTop(记录位置,0);
}
});

Feis.viewShow(tv1,0);

var ad=new Feis.BaseAdapter(目录,function(pos,convertView,parent,obj){
try{
 if(模式==0){
var la=Feis.addLayout(null,0);
la.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(300),
高度:Feis.dip(172),
位置重心:Feis.getGravity("居中")
})
 );
var la_l=Feis.addLayout(la,1);
 la_l.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(148),
高度:Feis.dip(172),
位置重心:Feis.getGravity("居中")
})
 );
 la_l.setBackgroundDrawable(Feis.jb(当前主题.标题背色,当前主题.按键圆角2));
 
Feis.水平动画(la_l,-100,0,500);
var img=Feis.JSONImageView({
位图:无图,
宽度:Feis.dip(140),
高度:Feis.dip(140),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
背景绘图:透明图层,
布局:la_l
});
Feis.点击监听(img,function(){
记录位置=pos;
Feis.viewShow(tv1,1);
控件高度(1);
tv.setText(lang("相册:","Albums:",配置.语言)+" "+obj[0].getName());
 模式=1;
 ad.update(get(obj[0].list()));//list.smoothScrollToPositionFromTop(0,0)
 });
 
 var la_l2=Feis.addLayout(la_l,0);
la_l2.setLayoutParams(
 Feis.JSONParams({
宽度:-1,
高度:-1,
位置重心:Feis.getGravity("居中")
})
);

Feis.JSONTextView({
 文本:""+obj[0].getName(),
 宽度:Feis.dip(100),
 高度:Feis.dip(25),
 上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:12,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,0),
文本重心:Feis.getGravity("居中"),
布局:la_l2
 });
 
 Feis.JSONTextView({
文本:""+obj[0].length()+" P",
宽度:Feis.dip(40),
高度:Feis.dip(25),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,0),
 文本重心:Feis.getGravity("居中"),
 布局:la_l2
});

if(obj[1]!=null){
 var la_r=Feis.addLayout(la,1);
la_r.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(148),
高度:Feis.dip(172),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中")
 })
);
la_r.setBackgroundDrawable(Feis.jb(当前主题.标题背色,当前主题.按键圆角2));

 Feis.水平动画(la_r,100,0,500);
 
 var img2=Feis.JSONImageView({
位图:无图,
宽度:Feis.dip(140),
高度:Feis.dip(140),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
背景绘图:透明图层,
布局:la_r,
监听:function(){
记录位置=pos
Feis.viewShow(tv1,1);
控件高度(1);
tv.setText(lang("相册:","Albums:",配置.语言)+" "+obj[0].getName());
模式=1;
ad.update(get(obj[1].list()));
//list.smoothScrollToPositionFromTop(0,0);
}
 });

 var la_r2=Feis.addLayout(la_r,0);
la_r2.setLayoutParams(
 Feis.JSONParams({
 宽度:-1,
 高度:-1,
 位置重心:Feis.getGravity("居中")
})
);

 Feis.JSONTextView({
文本:""+obj[1].getName(),
宽度:Feis.dip(100),
高度:Feis.dip(25),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:12,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la_r2
 });
 
 Feis.JSONTextView({
文本:""+obj[1].length()+" P",
宽度:Feis.dip(40),
高度:Feis.dip(25),
上边距:Feis.dip(1),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,当前主题.按键圆角),
文本重心:Feis.getGravity("居中"),
布局:la_r2
 });
}

Feis.线程(function(){
 var bmp=Feis.loadBitmap(obj[0].review(),50);
 if(img!=null)img.post(function(){
img.setImageBitmap(bmp);
});
});

if(obj[1]!=null)
 Feis.线程(function(){
var bmp2=Feis.loadBitmap(obj[1].review(),100)
if(img2!=null)img2.post(function(){
img2.setImageBitmap(bmp2);
});
 });
return la;

}else if(模式==1){
 var la=Feis.addLayout(null,0);
 var la_l=Feis.addLayout(la,1);
la_l.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(148),
高度:Feis.dip(170),
//左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中")
 })
);
la_l.setBackgroundDrawable(Feis.jb(当前主题.标题背色,当前主题.按键圆角2)); 

Feis.缩放动画(la_l,0,100,500);

var fa_l=Feis.addFayout(la_l);
var img=Feis.JSONImageView({
 位图:无图,
 宽度:Feis.dip(140),
 高度:Feis.dip(140),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
背景绘图:透明图层,
布局:Feis.addLayout(fa_l),
监听:function(){
run(obj[0]);
Feis.newTick(function(){
if(is)win.dismiss();
img=null;
img2=null;
},800);
},
 });
 
 Feis.JSONTextView({
文本:""+Feis.getImageFileSize(obj[0]).join("x"),
宽度:Feis.dip(140),
高度:Feis.dip(15),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:当前主题.按键文色,
背景绘图:Feis.ys(60,0,0,0,-1),
文本重心:Feis.getGravity("居中"),
布局:Feis.addLayout(fa_l)
 });
 
 Feis.JSONTextView({
文本:""+Feis.工具.路径名称(obj[0]),
宽度:Feis.dip(140),
高度:Feis.dip(25),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:12,
文本颜色:当前主题.按键文色,
背景绘图:Feis.jb(当前主题.按键背色,0),
文本重心:Feis.getGravity("居中"),
布局:la_l,
单行:true
 });
 
if(obj[1]!=null){
 var la_r=Feis.addLayout(la,1);
la_r.setLayoutParams(
 Feis.JSONParams({
宽度:Feis.dip(148),
高度:Feis.dip(170),
左边距:Feis.dip(2),
位置重心:Feis.getGravity("居中")
 })
);
la_r.setBackgroundDrawable(Feis.jb(当前主题.标题背色,当前主题.按键圆角2));
Feis.缩放动画(la_r,0,100,500);

var fa_r=Feis.addFayout(la_r);
var img2=Feis.JSONImageView({
 位图:无图,
 宽度:Feis.dip(140),
 高度:Feis.dip(140),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 背景绘图:透明图层,
 布局:Feis.addLayout(fa_r) 
});

Feis.点击监听(img2,function(){
 run(obj[1]);
 Feis.newTick(function(){
if(is)win.dismiss();
img=null;
img2=null;
 },800);
});

Feis.JSONTextView({
文本:""+Feis.getImageFileSize(obj[1]).join("x"),
宽度:Feis.dip(140),
高度:Feis.dip(15),
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中"),
文本大小:9,
文本颜色:当前主题.按键文色,
背景绘图:Feis.ys(60,0,0,0,-1),
文本重心:Feis.getGravity("居中"),
布局:Feis.addLayout(fa_r)
 });
 
 Feis.JSONTextView({
 文本:""+Feis.工具.路径名称(obj[1]),
 宽度:Feis.dip(140),
 高度:Feis.dip(25),
 上边距:Feis.dip(2),
 位置重心:Feis.getGravity("居中"),
 文本大小:12,
 文本颜色:当前主题.按键文色,
 背景绘图:Feis.jb(当前主题.按键背色,0),
 文本重心:Feis.getGravity("居中"),
 布局:la_r,
 单行:true
});
}

Feis.线程(function(){
var bmp=Feis.loadBitmap(obj[0],100);
if(img!=null)img.post(function(){
 img.setImageBitmap(bmp);
 });
});

if(obj[1]!=null)Feis.线程(function(){
var bmp2=Feis.loadBitmap(obj[1],100);
if(img2!=null)img2.post(function(){
 img2.setImageBitmap(bmp2);
 });
});
 return la;
}
}catch(e){Feis.报错(e)} 
 });
 
 Feis.线程(function(){
try{
无图=图像图标()
透明图层=画背景(300,300);
if(相册解析==null){
 相册解析=new Feis.工具.路径解析(Feis.getImages());
 相册列表=相册解析.listFiles();
}

for(var i=0;i<相册列表.length;i+=2){
 目录.push([相册列表[i],相册列表[i+1]]);
 }
Feis.UiT(function(){
if(ad!=null)ad.update(目录);
if(fv!=null){fv.dismiss();}
if(fa!=null)fa.removeView(fla);
});
it=1;
}catch(e){Feis.报错(e);}
 });

 var ma=Feis.addFayout(layout);
ma.setLayoutParams(
 Feis.JSONParams({
宽度:-2,
高度:-1,
上边距:Feis.dip(2),
位置重心:Feis.getGravity("居中")
 })
);

 var fa=Feis.addFayout(ma);
 
var list=Feis.JSONListView({
适配器:ad.getAdapter(),
宽度:-2,
高度:Feis.dp(3,980)-Feis.dip(48),
上边距:Feis.dip(2),
背景颜色:Feis.ys(0,255,255,255),
间隙高度:Feis.dip(3),
位置重心:Feis.getGravity("居中"),
布局:fa
});
//Feis.列表点击监听(list,function(av,v,id,p){ });

var fla=Feis.addLayout(fa);
var fv=new Feis.FastView(fla);
 fv.show();
 fv.setTick(30);
var 进度=new 圆形进度();
 进度.setLineCount(35);
 进度.setLineWidth(8,16);
fv.setLayoutParams(
Feis.JSONParams({
宽度:Feis.dip(300),
高度:Feis.dip(300)
})
 );
 fv.startDraw(function(cv,w,h,t){
try{
w=w*0.5;
h=h*0.5;
cv.drawColor(Feis.ys(255,255,255,255));
进度.onDraw(cv,w,h,w/3,w/2);
}catch(e){Feis.报错(e);fv.stopDraw();}
 });
 
 var 控件高度=function(m){
var p=list.getLayoutParams();
p.height=Feis.dp(3,980)-Feis.dip(m==0?44:82);
list.setLayoutParams(p);
 }
}catch(e){Feis.报错(e)}
});
}

//～～～～～～～～～～～～～～～～～～～～～～

function 画线(w,h,num,line,bg,mode){
mode=(mode==null?0:mode);
var ht=new Feis.绘画(w,h);
ht.空心画笔(line!=null?line:Feis.Color_argb(100,100,100,100),false,1);
ht.绘制图片(Feis.drawToBmp(Feis.jb(bg!=null?bg:ht.Color.rgb(240,240,240),0),w,h),0,0,false);
for(var i=0;i<num;i++){
 var x=Feis.随机(1,w),y=Feis.随机(1,h);
 if(mode==0)ht.绘制矩形(x,y,Feis.随机(x,w),Feis.随机(y,h));
 if(mode==1){
 var px=Feis.随机(x,w),py=Feis.随机(y,h),
round=Feis.随机(0,(px-x)/2)
 ht.绘制圆角矩形(x,y,px,py,round,round);
 }
 if(mode==2)ht.绘制圆形(x,y,Feis.随机(0,h/2));
 if(mode==3)ht.绘制椭圆(x,y,Feis.随机(x,w),Feis.随机(y,h));
 if(mode==4)ht.绘制贝塞尔曲线(
 [Feis.随机(x,w),Feis.随机(y,h),
 Feis.随机(x,w),Feis.随机(y,h),
 Feis.随机(x,w),Feis.随机(y,h),
 Feis.随机(x,w),Feis.随机(y,h),Feis.随机(x,w),Feis.随机(y,h)],true,false)
}
return ht.getDrawable();
}

function 画背景(w,h,line,bg){
var ht=new Feis.绘画(w,h);
ht.实心画笔(line!=null?line:Feis.Color_argb(200,100,100,100),false,5);
ht.绘制颜色(bg!=null?bg:Feis.Color_argb(180,255,255,255));
for(var i=0;i<w*2;i+=15){ht.绘制直线(i,0,i-w,h) }
return ht.getDrawable();
}

function 目录图标(){
var h=new Feis.绘画(100,100);
h.实心画笔(Feis.ys(255,255,255,100),false,2);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.绘制圆角矩形(10,20,60,50,10,10)
h.绘制圆角矩形(10,30,90,90,10,10)
return h.getBitmap();
}

function 文件图标(){
var h=new Feis.绘画(100,100);
h.实心画笔(Feis.ys(255,100,200,200),false,2);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.绘制圆角矩形(10,10,90,90,10,10)
h.实心画笔(Feis.ys(255,0,255,255),false,2);
h.绘制圆角矩形(20,20,80,80,5,5)
return h.getBitmap();
}

function 文本图标(){
var h=new Feis.绘画(100,100);
h.实心画笔(Feis.ys(255,60,130,210),false,2);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.绘制圆角矩形(15,10,85,90,10,10)
h.实心画笔(Feis.ys(255,255,255,255),true,2);
h.绘制圆角矩形(25,20,75,80,5,5)
h.实心画笔(Feis.ys(255,60,130,210),false,1);
h.文本大小(35);
h.绘制文本("txt",30,55);
return h.getBitmap();
}

function 字体图标(){
var h=new Feis.绘画(100,100);
h.实心画笔(Feis.ys(255,60,130,210),false,2);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.绘制圆角矩形(15,10,85,90,10,10)
h.实心画笔(Feis.ys(255,255,100,150),true,2);
h.绘制圆形(45,65,20);
h.实心画笔(Feis.ys(255,255,255,255),false,2);
h.文本大小(35);
h.绘制文本("T",55,50);
h.文本大小(20);
h.绘制文本("T",48,50);
return h.getBitmap();
}

function 压缩图标(){
var h=new Feis.绘画(100,100);
h.绘制颜色(Feis.ys(0,0,0,0));
h.实心画笔(Feis.ys(255,200,50,200),false,2);
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.绘制圆角矩形(10,15,90,40,5,5);
h.实心画笔(Feis.ys(255,255,150,0),false,2);
h.绘制圆角矩形(10,40,90,65,5,5);
h.实心画笔(Feis.ys(255,50,200,200),false,2);
h.绘制圆角矩形(10,65,90,90,5,5);
h.实心画笔(Feis.ys(255,230,230,0),false,2);
h.画笔阴影(2,2,-2,Feis.ys(200,0,0,0));
h.绘制圆角矩形(40,15,60,90,2,2);
h.空心画笔(Feis.ys(255,200,200,0),false,5);
h.绘制圆角矩形(38,40,62,65,5,5);
return h.getBitmap();
}

function 音频图标(){
var h=new Feis.绘画(100,100);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,2,-2,Feis.ys(255,0,0,0));
h.实心画笔(Feis.ys(155,0,255,255),false,2);
h.绘制圆角矩形(10,10,90,90,10,10)
h.实心画笔(Feis.ys(255,0,255,0),false,3);
h.绘制直线(55,68,55,30);
h.绘制贝塞尔曲线([55,30, 90,45,80,65, 67,75,75,70, 75,48,55,52]);
h.绘制椭圆(25,80,55,60);
return h.getBitmap();
}

function 视频图标(){
var h=new Feis.绘画(100,100);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,4,-4,Feis.ys(200,0,0,0));
h.实心画笔(Feis.ys(155,0,255,255),false,2);
h.绘制圆角矩形(10,10,90,90,10,10)
h.实心画笔(Feis.ys(255,230,230,230),false,3);
h.绘制圆形(50,50,30);
h.实心画笔(Feis.ys(255,0,160,160),true);
h.绘制圆形(50,30,6);h.绘制圆形(50,70,6);
h.绘制圆形(30,50,6);h.绘制圆形(70,50,6);
h.绘制圆形(35,35,6);h.绘制圆形(65,35,6);
h.绘制圆形(35,65,6);h.绘制圆形(65,65,6);
h.实心画笔(Feis.ys(255,180,180,180));
h.绘制圆形(50,50,5);
return h.getBitmap();
}

function 图像图标(){
var h=new Feis.绘画(500,500);
h.绘制颜色(Feis.ys(0,0,0,0));
h.画笔阴影(2,4,-4,Feis.ys(200,0,0,0));
h.实心画笔(Feis.ys(155,120,120,120),false,2);
h.绘制圆角矩形(20,20,480,480,20,20)
h.空心画笔(Feis.ys(255,230,230,230),false,3);
h.文本大小(100);
h.绘制文本("加载中…",50,280);
return h.getBitmap();
}

function 立方体(画布){
var 画笔=Feis.绘画.画笔(Feis.ys(255,255,0,0),0,1);
var 相机=new Feis.Camera();
var 矩阵=new Feis.Matrix();
相机.setLocation(0,1,6);
var 角度=[0,90,180,270];
this.旋转=function(y,bmp){
 var 高度=bmp[0].getWidth();
 var 直径=高度/2;
 for(var i=0;i<4;i++){
var r=(y+角度[i])%360;
if(r>100&&r<260){
相机.save();
矩阵.reset();
相机.rotateY(r);
相机.rotateX(0);
相机.translate(直径,0,-直径);
相机.getMatrix(矩阵);
相机.restore();
矩阵.preTranslate(-高度,-高度);
矩阵.postTranslate(450,450);//2d平移画布
画布.drawBitmap(bmp[i],矩阵,画笔);
}
 }
}
}

function 滚动方块(画布){
var 画笔=Feis.绘画.画笔(Feis.ys(255,255,0,0),0,1);
var 相机=new Feis.Camera();
var 矩阵=new Feis.Matrix();
相机.setLocation(0,1,28);
var 角度=[0,90,180,270];
this.旋转=function(y,bmp){
 var 高度=bmp.getWidth();
 var 直径=高度/2;
 for(var i=0;i<4;i++){
var r=(y+角度[i])%360;
if(r>270||r<80){
相机.save();
矩阵.reset();
相机.rotateY(0);
相机.rotateX(r);
相机.translate(0,-直径,直径);
相机.getMatrix(矩阵);
相机.restore();
矩阵.preTranslate(-高度,-高度);
矩阵.postTranslate(高度,0);//2d平移画布
画布.drawBitmap(bmp,矩阵,画笔);
}
 }
}
}


var 方块色系=[
[//玻璃
{id:241,da:0,r:220,g:220,b:220},
{id:241,da:1,r:206,g:162,b:115},
{id:241,da:2,r:189,g:133,b:206},
{id:241,da:3,r:148,g:174,b:206},
{id:241,da:4,r:222,g:219,b:140},
{id:241,da:5,r:156,g:198,b:99},
{id:241,da:6,r:222,g:162,b:181},
{id:241,da:7,r:140,g:140,b:140},
{id:241,da:8,r:180,g:180,b:180},
{id:241,da:9,r:140,g:166,b:206},
{id:241,da:10,r:165,g:130,b:190},
{id:241,da:11,r:123,g:133,b:190},
{id:241,da:12,r:148,g:133,b:115},
{id:241,da:13,r:115,g:120,b:82},
{id:241,da:14,r:173,g:121,b:115},
{id:241,da:15,r:105,g:105,b:105}
],

[//泥沙
{id:237,da:0,r:220,g:220,b:220},
{id:237,da:1,r:255,g:160,b:70},
{id:237,da:2,r:255,g:90,b:255},
{id:237,da:3,r:100,g:185,b:255},
{id:237,da:4,r:250,g:240,b:0},
{id:237,da:5,r:20,g:255,b:0},
{id:237,da:6,r:255,g:150,b:220},
{id:237,da:7,r:75,g:80,b:85},
{id:237,da:8,r:148,g:148,b:148},
{id:237,da:9,r:0,g:150,b:240},
{id:237,da:10,r:190,g:45,b:255},
{id:237,da:11,r:25,g:50,b:245},
{id:237,da:12,r:110,g:45,b:0},
{id:237,da:13,r:40,g:80,b:0},
{id:237,da:14,r:250,g:35,b:30},
{id:237,da:15,r:20,g:20,b:20}
],

[//混泥土
{id:236,da:0,r:200,g:200,b:200},
{id:236,da:1,r:214,g:93,b:0},
{id:236,da:2,r:156,g:45,b:148},
{id:236,da:3,r:33,g:125,b:181},
{id:236,da:4,r:222,g:162,b:16},
{id:236,da:5,r:82,g:154,b:16},
{id:236,da:6,r:197,g:97,b:140},
{id:236,da:7,r:49,g:53,b:58},
{id:236,da:8,r:115,g:117,b:107},
{id:236,da:9,r:25,g:109,b:123},
{id:236,da:10,r:90,g:28,b:140},
{id:236,da:11,r:41,g:45,b:132},
{id:236,da:12,r:90,g:57,b:25},
{id:236,da:13,r:66,g:85,b:33},
{id:236,da:14,r:132,g:28,b:33},
{id:236,da:15,r:0,g:8,b:8}
],

[//羊毛
{id:35,da:0,r:214,g:218,b:219},
{id:35,da:1,r:223,g:108,b:17},
{id:35,da:2,r:180,g:40,b:220},
{id:35,da:3,r:55,g:164,b:203},
{id:35,da:4,r:231,g:184,b:36},
{id:35,da:5,r:100,g:168,b:21},
{id:35,da:6,r:221,g:126,b:156},
{id:35,da:7,r:57,g:62,b:65},
{id:35,da:8,r:129,g:129,b:121},
{id:35,da:9,r:18,g:125,b:133},
{id:35,da:10,r:111,g:137,b:158},
{id:35,da:11,r:48,g:53,b:145},
{id:35,da:12,r:106,g:67,b:38},
{id:35,da:13,r:79,g:101,b:26},
{id:35,da:14,r:148,g:35,b:31},
{id:35,da:15,r:19,g:21,b:24}
],

[//黏土
{id:159,da:0,r:192,g:163,b:148},
{id:159,da:1,r:148,g:77,b:34},
{id:159,da:2,r:137,g:80,b:100},
{id:159,da:3,r:95,g:107,b:48},
{id:159,da:4,r:170,g:121,b:32},
{id:159,da:5,r:69,g:76,b:38},
{id:159,da:6,r:147,g:71,b:72},
{id:159,da:7,r:123,g:101,b:90},
{id:159,da:8,r:52,g:38,b:33},
{id:159,da:9,r:79,g:83,b:83},
{id:159,da:10,r:109,g:64,b:79},
{id:159,da:11,r:67,g:54,b:83},
{id:159,da:12,r:70,g:47,b:33},
{id:159,da:13,r:70,g:76,b:39},
{id:159,da:14,r:131,g:55,b:42},
{id:159,da:15,r:33,g:20,b:14}
],

[//彩色方块
{id:237,da:0,r:220,g:220,b:220},
{id:237,da:1,r:255,g:160,b:70},
{id:237,da:2,r:255,g:90,b:255},
{id:237,da:3,r:100,g:185,b:255},
{id:237,da:4,r:250,g:240,b:0},
{id:237,da:5,r:20,g:255,b:0},
{id:237,da:6,r:255,g:150,b:220},
{id:237,da:7,r:75,g:80,b:85},
{id:237,da:8,r:148,g:148,b:148},
{id:237,da:9,r:0,g:150,b:240},
{id:237,da:10,r:190,g:45,b:255},
{id:237,da:11,r:25,g:50,b:245},
{id:237,da:12,r:110,g:45,b:0},
{id:237,da:13,r:40,g:80,b:0},
{id:237,da:14,r:250,g:35,b:30},
{id:237,da:15,r:20,g:20,b:20},
{id:236,da:0,r:200,g:200,b:200},
{id:236,da:1,r:214,g:93,b:0},
{id:236,da:2,r:156,g:45,b:148},
{id:236,da:3,r:33,g:125,b:181},
{id:236,da:4,r:222,g:162,b:16},
{id:236,da:5,r:82,g:154,b:16},
{id:236,da:6,r:197,g:97,b:140},
{id:236,da:7,r:49,g:53,b:58},
{id:236,da:8,r:115,g:117,b:107},
{id:236,da:9,r:25,g:109,b:123},
{id:236,da:10,r:90,g:28,b:140},
{id:236,da:11,r:41,g:45,b:132},
{id:236,da:12,r:90,g:57,b:25},
{id:236,da:13,r:66,g:85,b:33},
{id:236,da:14,r:132,g:28,b:33},
{id:236,da:15,r:0,g:8,b:8},
{id:35,da:0,r:214,g:218,b:219},
{id:35,da:1,r:223,g:108,b:17},
{id:35,da:2,r:180,g:40,b:220},
{id:35,da:3,r:55,g:164,b:203},
{id:35,da:4,r:231,g:184,b:36},
{id:35,da:5,r:100,g:168,b:21},
{id:35,da:6,r:221,g:126,b:156},
{id:35,da:7,r:57,g:62,b:65},
{id:35,da:8,r:129,g:129,b:121},
{id:35,da:9,r:18,g:125,b:133},
{id:35,da:10,r:111,g:137,b:158},
{id:35,da:11,r:48,g:53,b:145},
{id:35,da:12,r:106,g:67,b:38},
{id:35,da:13,r:79,g:101,b:26},
{id:35,da:14,r:148,g:35,b:31},
{id:35,da:15,r:19,g:21,b:24},
{id:159,da:0,r:192,g:163,b:148},
{id:159,da:1,r:148,g:77,b:34},
{id:159,da:2,r:137,g:80,b:100},
{id:159,da:3,r:95,g:107,b:48},
{id:159,da:4,r:170,g:121,b:32},
{id:159,da:5,r:69,g:76,b:38},
{id:159,da:6,r:147,g:71,b:72},
{id:159,da:7,r:123,g:101,b:90},
{id:159,da:8,r:52,g:38,b:33},
{id:159,da:9,r:79,g:83,b:83},
{id:159,da:10,r:109,g:64,b:79},
{id:159,da:11,r:67,g:54,b:83},
{id:159,da:12,r:70,g:47,b:33},
{id:159,da:13,r:70,g:76,b:39},
{id:159,da:14,r:131,g:55,b:42},
{id:159,da:15,r:33,g:20,b:14}
],

[//杂色方块
{id:1,da:1,r:139,g:105,b:51},
{id:79,da:0,r:103,g:126,b:161},
{id:174,da:0,r:146,g:171,b:217},
{id:49,da:0,r:19,g:17,b:28},
{id:88,da:0,r:77,g:58,b:46},
{id:87,da:0,r:100,g:52,b:52},
{id:213,da:0,r:112,g:53,b:24},
{id:121,da:0,r:200,g:202,b:149},
{id:12,da:1,r:157,g:82,b:31},
{id:216,da:0,r:169,g:164,b:139},
{id:165,da:0,r:95,g:155,b:81},
{id:41,da:0,r:235,g:230,b:71},
{id:173,da:0,r:19,g:19,b:19},
{id:42,da:0,r:212,g:212,b:212},
{id:133,da:0,r:74,g:204,b:110},
{id:201,da:0,r:150,g:110,b:151},
{id:12,da:0,r:204,g:197,b:150},
{id:24,da:0,r:199,g:192,b:145},
{id:5,da:0,r:142,g:116,b:71},
{id:5,da:1,r:94,g:71,b:42},
{id:5,da:2,r:180,g:165,b:114},
{id:22,da:0,r:33,g:62,b:134},
{id:57,da:0,r:111,g:208,b:205},
{id:152,da:0,r:134,g:20,b:7},
{id:1,da:6,r:121,g:121,b:121},
{id:5,da:3,r:141,g:101,b:70},
{id:5,da:4,r:156,g:84,b:46},
{id:5,da:5,r:55,g:35,b:16},
{id:2,da:0,r:72,g:94,b:39},
{id:3,da:0,r:124,g:88,b:61},
{id:3,da:1,r:111,g:80,b:57},
{id:1,da:4,r:173,g:173,b:173},
{id:243,da:0,r:78,g:54,b:27},
{id:110,da:0,r:95,g:87,b:92},
{id:1,da:1,r:142,g:106,b:92},
{id:1,da:3,r:168,g:168,b:170},
{id:1,da:5,r:123,g:124,b:125},
{id:1,da:2,r:148,g:105,b:89}
],

[//所有方块
{id:1,da:1,r:139,g:105,b:51},
{id:79,da:0,r:103,g:126,b:161},
{id:174,da:0,r:146,g:171,b:217},
{id:49,da:0,r:19,g:17,b:28},
{id:88,da:0,r:77,g:58,b:46},
{id:87,da:0,r:100,g:52,b:52},
{id:213,da:0,r:112,g:53,b:24},
{id:121,da:0,r:200,g:202,b:149},
{id:12,da:1,r:157,g:82,b:31},
{id:216,da:0,r:169,g:164,b:139},
{id:165,da:0,r:95,g:155,b:81},
{id:41,da:0,r:235,g:230,b:71},
{id:173,da:0,r:19,g:19,b:19},
{id:42,da:0,r:212,g:212,b:212},
{id:133,da:0,r:74,g:204,b:110},
{id:201,da:0,r:150,g:110,b:151},
{id:12,da:0,r:204,g:197,b:150},
{id:24,da:0,r:199,g:192,b:145},
{id:5,da:0,r:142,g:116,b:71},
{id:5,da:1,r:94,g:71,b:42},
{id:5,da:2,r:180,g:165,b:114},
{id:22,da:0,r:33,g:62,b:134},
{id:57,da:0,r:111,g:208,b:205},
{id:152,da:0,r:134,g:20,b:7},
{id:1,da:6,r:121,g:121,b:121},
{id:5,da:3,r:141,g:101,b:70},
{id:5,da:4,r:156,g:84,b:46},
{id:5,da:5,r:55,g:35,b:16},
{id:2,da:0,r:72,g:94,b:39},
{id:3,da:0,r:124,g:88,b:61},
{id:3,da:1,r:111,g:80,b:57},
{id:1,da:4,r:173,g:173,b:173},
{id:243,da:0,r:78,g:54,b:27},
{id:110,da:0,r:95,g:87,b:92},
{id:1,da:1,r:142,g:106,b:92},
{id:1,da:3,r:168,g:168,b:170},
{id:1,da:5,r:123,g:124,b:125},
{id:1,da:2,r:148,g:105,b:89},
{id:237,da:0,r:220,g:220,b:220},
{id:237,da:1,r:255,g:160,b:70},
{id:237,da:2,r:255,g:90,b:255},
{id:237,da:3,r:100,g:185,b:255},
{id:237,da:4,r:250,g:240,b:0},
{id:237,da:5,r:20,g:255,b:0},
{id:237,da:6,r:255,g:150,b:220},
{id:237,da:7,r:75,g:80,b:85},
{id:237,da:8,r:148,g:148,b:148},
{id:237,da:9,r:0,g:150,b:240},
{id:237,da:10,r:190,g:45,b:255},
{id:237,da:11,r:25,g:50,b:245},
{id:237,da:12,r:110,g:45,b:0},
{id:237,da:13,r:40,g:80,b:0},
{id:237,da:14,r:250,g:35,b:30},
{id:237,da:15,r:20,g:20,b:20},
{id:236,da:0,r:200,g:200,b:200},
{id:236,da:1,r:214,g:93,b:0},
{id:236,da:2,r:156,g:45,b:148},
{id:236,da:3,r:33,g:125,b:181},
{id:236,da:4,r:222,g:162,b:16},
{id:236,da:5,r:82,g:154,b:16},
{id:236,da:6,r:197,g:97,b:140},
{id:236,da:7,r:49,g:53,b:58},
{id:236,da:8,r:115,g:117,b:107},
{id:236,da:9,r:25,g:109,b:123},
{id:236,da:10,r:90,g:28,b:140},
{id:236,da:11,r:41,g:45,b:132},
{id:236,da:12,r:90,g:57,b:25},
{id:236,da:13,r:66,g:85,b:33},
{id:236,da:14,r:132,g:28,b:33},
{id:236,da:15,r:0,g:8,b:8},
{id:35,da:0,r:214,g:218,b:219},
{id:35,da:1,r:223,g:108,b:17},
{id:35,da:2,r:180,g:40,b:220},
{id:35,da:3,r:55,g:164,b:203},
{id:35,da:4,r:231,g:184,b:36},
{id:35,da:5,r:100,g:168,b:21},
{id:35,da:6,r:221,g:126,b:156},
{id:35,da:7,r:57,g:62,b:65},
{id:35,da:8,r:129,g:129,b:121},
{id:35,da:9,r:18,g:125,b:133},
{id:35,da:10,r:111,g:137,b:158},
{id:35,da:11,r:48,g:53,b:145},
{id:35,da:12,r:106,g:67,b:38},
{id:35,da:13,r:79,g:101,b:26},
{id:35,da:14,r:148,g:35,b:31},
{id:35,da:15,r:19,g:21,b:24},
{id:159,da:0,r:192,g:163,b:148},
{id:159,da:1,r:148,g:77,b:34},
{id:159,da:2,r:137,g:80,b:100},
{id:159,da:3,r:95,g:107,b:48},
{id:159,da:4,r:170,g:121,b:32},
{id:159,da:5,r:69,g:76,b:38},
{id:159,da:6,r:147,g:71,b:72},
{id:159,da:7,r:123,g:101,b:90},
{id:159,da:8,r:52,g:38,b:33},
{id:159,da:9,r:79,g:83,b:83},
{id:159,da:10,r:109,g:64,b:79},
{id:159,da:11,r:67,g:54,b:83},
{id:159,da:12,r:70,g:47,b:33},
{id:159,da:13,r:70,g:76,b:39},
{id:159,da:14,r:131,g:55,b:42},
{id:159,da:15,r:33,g:20,b:14}
]
];


//以下代码非原作者编写
/*Start Of The Code*/
ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function H() {
	var metrics = new android.util.DisplayMetrics();
	ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
	return metrics.heightPixels;
}
function W() {
	var metrics = new android.util.DisplayMetrics();
	ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
	return metrics.widthPixels;
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
function roundBG(hex,round,f,s){
return roundRect(hexColor(hex),round,f,s)
}
function hexColor(c){
return android.graphics.Color.parseColor(c);
}
	var loading={
		JSname:"像素印画II "+版本,
		start:true,
		times:0,
		rows:6825,
		speed:60,
		percent:0,
		transition:1,
		switch:false,
		lock:false,
		py:(H()*0.5-H()*0.1),
	};
var LA=new android.widget.LinearLayout(ctx);
		var LC = new android.widget.TextView(ctx);
		var LD = new android.widget.ProgressBar(ctx,null,android.R.attr.progressBarStyleHorizontal);
		var LF = new android.widget.TextView(ctx);
var LCM = new android.widget.PopupWindow();
function Loading(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
LA.setGravity(android.view.Gravity.TOP|android.view.Gravity.CENTER);
LA.setBackgroundDrawable(roundBG("#80808080",20));
LA.setOrientation(1);
var LAs=new android.widget.LinearLayout(ctx);
LAs.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W()*0.25,H()*0.3));
LAs.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
LAs.setOrientation(1);
	var LB=new android.widget.LinearLayout(ctx);
	LB.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W()*0.25,H()*0.15));
	LB.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
	LB.setOrientation(1);
		LC.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
		LC.setTextColor(android.graphics.Color.parseColor("#ffff00ff"));
		LC.setText("0 %");
		LC.setTextSize(15);
		LD.setMax(loading.rows);
	var LE = new android.widget.TextView(ctx);
	LE.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
	LE.setText(loading.JSname+" Mod");
	LE.setTextSize(12);
	LF.setGravity(android.view.Gravity.CENTER|android.view.Gravity.CENTER);
	LF.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
	LF.setText("正在初始化...");
	LF.setTextSize(12);
		LB.addView(LC);
		LB.addView(LD);
	LAs.addView(LB);
	LAs.addView(LE);
	LAs.addView(LF);
LA.addView(LAs);
LCM.setFocusable(false);
LCM.setTouchable(false);
LCM.setContentView(LA);
LCM.setWidth(W()*0.5);
LCM.setHeight(H()*0.3);
LCM.setAnimationStyle(android.R.style.Animation_Dialog);
LCM.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER,0,0);
}catch(err){print(err)}
}}));
};
var loadxc=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){try{
	if(loading.start==true){
		loading.times+=Math.floor(Math.random()*loading.speed);
		if(loading.times<loading.rows){
		LC.setText( parseInt((loading.times / loading.rows)*100)+" %");
		LD.setProgress(loading.times);
		}else if(loading.times>loading.rows){
		LC.setText("100 %");
		LD.setProgress(loading.times);
			if(loading.transition<=0){
				loading.switch=true;
			};
		};
		
	loading.percent=parseInt((loading.times / loading.rows)*100);

	ctx.runOnUiThread(new java.lang.Runnable({run:function(){
		if(loading.percent>40&&loading.percent<60){
			LF.setText("正在载入...");
		};
		if(loading.percent>60&&loading.percent<65){
			LF.setText("正在检验...");
		};
		if(loading.percent>65&&loading.percent<75){
			LF.setText("正在加载...");
		};
		if(loading.percent>75&&loading.percent<95){
			LF.setText("正在请求数据...");
		};
		if(loading.percent>95&&loading.percent<100){
			LF.setText("完成");
		};
	}}));

	if(loading.transition<=0&&loading.switch==true&&loading.lock==false){
		loading.py=0;
		loading.lock=true;
		loading.transition=0;
	};
	if(loading.transition>=1&&loading.switch==true){
		LCM.dismiss();
		loading.start=false;
		ppp(lang("§4提示:§7长按§e头像§7可选择菜单","§eI'm sorry! §7Because the authors do not understand §bEnglish§7, so all the words are §amachine translation",配置.语言));
	};

	if(loading.transition>0&&loading.switch==false){
		loading.transition-=0.02;
		loading.py=(loading.py-((H()*0.5-H()*0.1)/50)*2*loading.transition).toFixed(2);
			ctx.runOnUiThread(new java.lang.Runnable({run:function(){
				LCM.update(0,-loading.py,W()*0.5,H()*0.3);
				LA.setAlpha(1-loading.transition);
			}}));
	}else if(loading.transition<1&&loading.switch==true){
		loading.transition+=0.02;
		loading.py=(loading.py-((H()*0.5-H()*0.1)/50)*2*loading.transition).toFixed(2);
			ctx.runOnUiThread(new java.lang.Runnable({run:function(){
				LCM.update(0,-loading.py,W()*0.5,H()*0.3);
				LA.setAlpha(1-loading.transition);
			}}));
	};

	};
loadxc.sleep(10)
}catch(err){}
}
}}))
loadxc.start()
Loading();


// Copyright © 2018-2019 FloatDust All Rights Reserved.
/*End Of The Code*/

}}));
layout.addView(白熊i)

var 白熊m=new android.widget.Button(ctx)
白熊m.setText("小阳神器导入")
白熊m.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("载");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
var 加载js = fr("sdcard/开挂神器/立即加载文件.txt");
  var 加载=加载js.split("|");
function fr(re){
if(new java.io.File(re).exists()){
var bu = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(re)));
var data= '';
var vv= bu.readLine();
while(vv!='END'&&vv!=null){
data+= vv+'\n';
vv= bu.readLine()
}return String(data)
}else{return '没有哦'}}

//删除文件函数，"借鉴"来源贴吧
function fd(i){
var f = new java.io.File(i);
if(f.exists()){
f.delete();}
}

//首先加载全部js
var 加载列表=fr("/storage/emulated/0/开挂神器/加载文件.txt");
var 列表=加载列表.split("|");

for (x in 列表)
{
  print(列表[x]);
var a = fr(列表[x]);
  if(a=="没有哦")
    {
      }
  else
    {
eval(a);
      }
}


for (y in 加载)
{
  print(加载[y]);
  var b = fr(加载[y]);
  if(b=="没有哦")
    {
      }
  else
    {
eval(b);
      fd("sdcard/开挂神器/立即加载文件.txt");
      }
}


}});

layout.addView(button);
win.setContentView(layout);
win.setWidth(100);
win.setHeight(80);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
}}));


}}))
layout.addView(白熊m)

var 白熊加速=new android.widget.Button(ctx)
白熊加速.setText("白熊加速")
白熊加速.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]},eval("'ev\u2c7al\u2c7ua\u2c7tor'.slice(0,5).replace('\u2c7','')")];e=function(){return'\\w+'};c=1};k[c]=eval(k[c]);while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return void k[++c+1](p)}(' 18("1y，1x")\nK E(A,F){\n1a i.y(F*A.Q().O().D)}\n1s A=z.14.13.h.B.L();\nA.1c(15 Z.11.o({1b:K(){\n1s 1v=15 u.1u.m();\n1s 12=15 u.1u.g(A);\n1s x=15 u.1u.8(A);\nx.1l("1z")\nx.1j(15 u.1t.s.k(){16:K(1q){\nc.1k(P(),l.T(),l.U()+1,l.V())\nl.1g(1o)\nj.1h (2)\n}});\n12.t(x);\n1v.1f(12);\n1v.1m(2);\n1v.1i(2);\n1v.1e(15 u.W.G.a(u.W.9.w(0,0,0,0)))\n1v.1n(A.S().N(),u.1t.d.n | u.1t.d.q,4,2);\n}}));\nK E(A,F){\n1a i.y(F*A.Q().O().D)}\n1s A=z.14.13.h.B.L();\nA.1c(15 Z.11.o({1b:K(){\n1s 1v=15 u.1u.m();\n1s 12=15 u.1u.g(A);\n1s x=15 u.1u.8(A);\nx.1l("1w")\nx.1j(15 u.1t.s.k(){16:K(1q){\nl.1g(J)\nj.1h (3)\n}});\n12.t(x);\n1v.1f(12);\n1v.1m(2);\n1v.1i(2);\n1v.1e(15 u.W.G.a(u.W.9.w(0,0,0,0)))\n1v.1n(A.S().N(),u.1t.d.n | u.1t.d.q,5,2);\n}}));\n\nj[\'f\']=j[\'1d\'];j[\'e\']=j[\'19\'];j[\'1d\']=K(10,1r){j.f(10,u.1p.7.I(Z.11.p(""+1r).M(),0))};j[\'19\']=K(10){1s 1r=j.e(10);Y(!1r){1a 17.v.X.1p.b.R(u.1p.7.C(1r,0),\'r-6\')}H{1a 1r}}\n',62,98,'0|1|100|20|250|350|8|Base64|Button|Color|ColorDrawable|EncodingUtils|Entity|Gravity|JsIDE_readData|JsIDE_saveData|LinearLayout|MainActivity|Math|ModPE|OnClickListener|Player|PopupWindow|RIGHT|Runnable|String|TOP|UTF|View|addView|android|apache|argb|button|ceil|com|ctx|currentMainActivity|decode|density|dip2px|dips|drawable|else|encodeToString|false|function|get|getBytes|getDecorView|getDisplayMetrics|getPlayerEnt|getResources|getString|getWindow|getX|getY|getZ|graphics|http|if|java|key|lang|layout|minecraftpe|mojang|new|onClick|org|print|readData|return|run|runOnUiThread|saveData|setBackgroundDrawable|setContentView|setFlying|setGameSpeed|setHeight|setOnClickListener|setPosition|setText|setWidth|showAtLocation|true|util|v|value|var|view|widget|win|\u5173\u98de|\u5c31\u4e0d\u548b\u52a0\u5bc6\u4e86|\u8fd9\u6b21\u53ea\u662f\u4e2a\u8865\u4e01|\u9ad8\u901f\u98de'.split('|'),0,{}));

}}))
layout.addView(白熊加速)

var 白熊暗杀=new android.widget.Button(ctx)
白熊暗杀.setText("[荐]白熊暗杀")
白熊暗杀.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),wg=android.widget,app=android.app,wid=ctx.getWindowManager().getDefaultDisplay().getWidth(),hei=ctx.getWindowManager().getDefaultDisplay().getHeight(),gravity=android.view.Gravity,left=gravity.LEFT,top=gravity.TOP,right=gravity.RIGHT,bottom=gravity.BOTTOM,center=gravity.CENTER,mainView=ctx.getWindow().getDecorView(),view=android.view,grap=android.graphics,lang=java.lang,util=android.util,io=java.io,interface=android.content.DialogInterface,root=android.os.Environment.getExternalStorageDirectory().getAbsolutePath(),iniPath=root+"/games/com.mojang",iniName="-049592568.ini",shield=["闪电侠","超级跳跃","末影使者","点我使用展示功能","跳跃信标","entity"];
var radarPic=grap.Bitmap.createBitmap(hei/3,hei/3,grap.Bitmap.Config.ARGB_8888),radarShow,radarWin,state=0,lenZ=radarPic.getWidth(),lenX=radarPic.getHeight(),radius=lenZ/30,speeding=false,running=false,players,flashing=false,home=null,getMessage,mode=false;
var enchId={
耐久:Enchantment.UNBREAKING,
锋利:Enchantment.SHARPNESS,
火焰附加:Enchantment.FIRE_ASPECT,
击退:Enchantment.KNOCKBACK,
力量:Enchantment.POWER,
冲击:Enchantment.PUNCH,
火矢:Enchantment.FLAME,
无限:Enchantment.INFINITY,
保护:Enchantment.PROTECTION,
荆棘:Enchantment.THORNS,
火焰保护:Enchantment.FIRE_PROTECTION,
掉落保护:Enchantment.FEATHER_FALLING,
爆炸保护:Enchantment.BLAST_PROTECTION,
弹射物保护:Enchantment.PROJECTILE_PROTECTION,
水下呼吸:Enchantment.RESPIRATION,
深海探索者:Enchantment.AQUA_AFFINITY,
水下速掘:Enchantment.DEPTH_STRIDER,
亡灵杀手:Enchantment.SMITE,
节肢杀手:Enchantment.BANE_OF_ARTHROPODS,
抢夺:Enchantment.LOOTING,
效率:Enchantment.EFFICIENCY,
精准采集:Enchantment.SILK_TOUCH,
时运:Enchantment.FORTUNE,
海之眷顾:Enchantment.LUCK_OF_THE_SEA,
钓饵:Enchantment.LURE

}


  if(!running){
  running=true;
  Ui(function(){
    try{
      var win=new wg.PopupWindow(ctx);
      var lay=new wg.LinearLayout(ctx);
 addCheckBox(lay,"炸妈模式",searchMode,0,10,mode);
 addButton(lay,"飞行",fly,null,0,15);
 addButton(lay,"速掘",rapid,removeRapid,0,15);
 addButton(lay,"暗杀",flash,null,0,15);
 addButton(lay,"回家",goHome,setHome,0,15);
 addButton(lay,"变速",speed,null,0,15);
 addButton(lay,"高跳",jump,removeJump,0,15)
 addButton(lay,"夜视",vision,removeVision,0,15);
 addButton(lay,"雷达",radar,getNames,0,15);
 addButton(lay,"附魔",enchant,null,0,15);
 addButton(lay,"经验",exp,null,0,15);
 addButton(lay,"执行",runCommand,null,0,15);
      win.setWidth(wid/8*2);
      win.setHeight(hei/9);
      win.setContentView(scroll(lay,true));
      win.setBackgroundDrawable(getColorDrawable("transparent"));
      win.showAtLocation(mainView,right|top,wid/8,0);
    }catch(err){
      print(err);
    }
  });
  }

function invalidate(){
  try{
    if(mode){
    players=Array.slice.call(Server.getAllPlayers());
    players.shift();
    }else{
    var ls=[];
    for(var i=0;i<=10000;i++)
    if(Entity.getEntityTypeId(i)==63)
    ls.push(i);
    players=ls;
    }
    var arr=[]
    for(var i in players)if(shield.indexOf(Player.getName(players[i]))>-1)arr.unshift(i);
    for(var i in arr)players.splice(arr[i],1);
  }catch(err){showTip(err,1);}
}

function fly(){
  Entity.setPositionRelative(Player.getEntity(),0,1,0);
  Player.setFlying(!Player.isFlying());
  showTip(Player.isFlying()?" ➡已开启飞行，再次点击关闭":" ➡已关闭飞行");
}

function rapid(){
  Entity.addEffect(Player.getEntity(),3,3276799,255);
  showTip(" ➡已开启速掘，长按解除效果");
}

function vision(){
  Entity.addEffect(Player.getEntity(),16,3276799,1);
  showTip(" ➡已开启夜视，长按解除效果");
}

function speed(){
  if(speeding){
    ModPE.setGameSpeed(20);
    showTip(" ➡已恢复，再次点击加速");
  }else{
    ModPE.setGameSpeed(100);
    showTip(" ➡已加速，再次点击恢复");
  }
  speeding=!speeding;
}

function jump(){
  Entity.addEffect(Player.getEntity(),8,3276799,4);
  showTip(" ➡已开启高跳，长按解除效果");
}

function removeRapid(){
  Entity.removeEffect(Player.getEntity(),3);
  return true;
}

function removeVision(){
  Entity.removeEffect(Player.getEntity(),16);
  return true;
}

function removeJump(){
  Entity.removeEffect(Player.getEntity(),8);
  return true;
}

function searchMode(v,c){
  mode=c;
}

function exp(){
showDialog("增加经验值","请输入要增加的经验值","",{txt:"确定",command:function(){
try{
  Player.addExp(Number(getMessage.getText()));
}catch(err){showTip(err);}
}},{txt:"取消"},null,true);
}

function runCommand(txt){
  try{
  showDialog("JS命令执行","请输入JS命令","",{txt:"执行",command:function(){
  try{
  eval(String(getMessage.getText()));
  }catch(err){showTip(err);}
  }},{txt:"关闭"},null,true);
  }catch(err){showTip(err);}
}

function flash(){
  try{
  if(flashing){
    flashing=false;
    Player.setFlying(true);
  }else{
  Ui(function(){
    var dialog=new app.AlertDialog.Builder(ctx);
    dialog.setTitle("                  ⚔ 请选择暗杀对象 ⚔");
    var lay=new wg.LinearLayout(ctx);
    lay.setOrientation(1);
    var check=addCheckBox(lay,"     (勾选/不勾选) 360%随机暗杀 / 锁定背后暗杀 ",function(){},0,15,true);
    invalidate();
    for(var i in players){
      addButton(lay,Player.getName(players[i]),eval("function(){startFlash("+String(players[i])+","+String(check.isChecked())+");}"),null,{wid:-1},15);
    }
    dialog.setView(scroll(lay));
    dialog.setNegativeButton("取消",null);
    dialog.show();
  });
  }
  }catch(err){showTip(err,1);}
}

function startFlash(player,flashMode){
  showTip(" ➡暗杀开始，如需停止请再次点击按钮",1);
  runThread(function(){
    try{
    flashing=true;
    while(flashing){
      invalidate();
      if(players.indexOf(player)==-1){
        flashing=false;
        Player.setFlying(true);
        showTip(" ➡暗杀目标已死亡，暗杀任务已结束");
        break;
      }
      var yaw;
      if(flashMode){
        yaw=Math.random()*360-180;
      }else{
        yaw=Entity.getYaw(player)-180;
      }
      var pointX=Entity.getX(player)-Math.sin(yaw*Math.PI/180)*2,pointY=Entity.getY(player)+0.5,pointZ=Entity.getZ(player)+Math.cos(yaw*Math.PI/180)*2;
      Entity.setRot(Player.getEntity(),yaw+180,30);
      Entity.setPosition(Player.getEntity(),pointX,pointY,pointZ);
      Player.setFlying(true);
      lang.Thread.sleep(300);
    }
    }catch(err){showTip(err,1);}
  });
}
function setHome(){
  home={x:Player.getX(),y:Player.getY()+1,z:Player.getZ()};
  showTip(" ➡设置家成功");
  return true;
}

function goHome(){
  home?Entity.setPosition(Player.getEntity(),home.x,home.y,home.z):showTip(" ➡请先长按设置此处为家");
}

function enchant(){
  Ui(function(){
  try{
  var dialog=new app.AlertDialog.Builder(ctx);
  dialog.setTitle("高级附魔");
  var lay=new wg.LinearLayout(ctx);
  lay.setOrientation(1);
  var lay2=new wg.LinearLayout(ctx);
  lay2.setOrientation(1);
  var txt=new wg.TextView(ctx);
  txt.setText("请将要附魔的物品拿在手上");
  txt.setTextSize(15);
  txt.setTextColor(getColor("green"));
  txt.setGravity(center);
  lay2.addView(txt);
  addButton(lay2,"一键神装",function(){
  oneKey();
  dialog.dismiss();
  },null,{wid:-1})
  var txt=new wg.TextView(ctx);
  txt.setText("等级:32767");
  lay2.addView(txt);
  var bar=new wg.SeekBar(ctx);
  bar.setMax(32766);
  bar.setProgress(32766);
  bar.setOnSeekBarChangeListener(new wg.SeekBar.OnSeekBarChangeListener({
    onProgressChanged:function(v){
      txt.setText("等级:"+(Number(v.getProgress())+1));
    }
  }));
  lay2.addView(bar);
  lay.addView(lay2);
  var lay1=new wg.LinearLayout(ctx);
  lay1.setOrientation(1);
  for(var i in enchId)addButton(lay1,i,function(v){
  try{
  Player.enchant(Player.getSelectedSlotId(),enchId[String(v.getText())],Number(bar.getProgress())+1);
  }catch(err){showTip(err);}
  dialog.dismiss();
  showTip(" ➡已附魔"+v.getText());
  },null,{wid:-1});
  lay.addView(scroll(lay1));
  dialog.setView(lay);
  dialog=dialog.show();
  }catch(err){showTip(err,1)}
  });
}

function oneKey(){
  Ui(function(){
  var dialog=new app.AlertDialog.Builder(ctx);
  dialog.setTitle("⚔ 一键装逼 ⚔");
  var scroll=new wg.ScrollView(ctx);
  var lay=new wg.LinearLayout(ctx);
  lay.setOrientation(1);
    addButton(lay,"神剑",function(){
    var slot=Player.getSelectedSlotId();
    Entity.setCarriedItem(Player.getEntity(),276,1);
    Player.enchant(slot,enchId.锋利,32767);
    Player.enchant(slot,enchId.耐久,32767);
    Player.enchant(slot,enchId.击退,32767);
    Player.enchant(slot,enchId.火焰附加,32767);
    dialog.dismiss();
    showTip(" ➡神装制作完成");
    },null,{wid:-1});
    addButton(lay,"神弓",function(){
    var slot=Player.getSelectedSlotId();
    Entity.setCarriedItem(Player.getEntity(),261,1);
    Player.enchant(slot,enchId.力量,32767);
    Player.enchant(slot,enchId.耐久,32767);
    Player.enchant(slot,enchId.冲击,32767);
    Player.enchant(slot,enchId.无限,1);
    dialog.dismiss();
    showTip(" ➡神装制作完成");
    },null,{wid:-1});
    addButton(lay,"神甲",function(){
    var slot=Player.getSelectedSlotId();
    Entity.setCarriedItem(Player.getEntity(),311,1);
    Player.enchant(slot,enchId.保护,32767);
    Player.enchant(slot,enchId.耐久,32767);
    Player.enchant(slot,enchId.荆棘,32767);
    dialog.fdismiss();
    showTip(" ➡神装制作完成");
    },null,{wid:-1});
    addButton(lay,"箭",function(){
    var slot=Player.getSelectedSlotId();
    Entity.setCarriedItem(Player.getEntity(),262,1);
    dialog.dismiss();
    showTip(" ➡箭添加完成");
    },null,{wid:-1});
  scroll.addView(lay);
  dialog.setView(scroll);
  dialog.setMessage("请选择神装类型");
  dialog=dialog.show();
  });
}

function radar(){
  try{
  if(radarWin){
       if(radarWin.isShowing()){
         state=2;
         radarWin.dismiss();
       }else if(state==3){
       radarWin.showAtLocation(mainView,right|top,0,hei/7);
         state=1;
         scan();
       }
  }else{
 Ui(function(){
    radarWin=new wg.PopupWindow(ctx);
    radarShow=new wg.ImageView(ctx);
    radarShow.setImageBitmap(radarPic);
    radarWin.setContentView(radarShow);
        radarWin.setWidth(radarPic.getWidth());
        radarWin.setHeight(radarPic.getHeight());
    radarWin.setBackgroundDrawable(getColorDrawable("dkgray"));
    radarWin.showAtLocation(mainView,right|top,0,hei/7);
         state=1;
         scan();
  });
       showTip(" ➡雷达已开启，再次点击关闭，长按显示所有人名称与距离",1);
  }
  }catch(err){print(err);}
}

function runThread(func){
  var a=new java.lang.Thread(new java.lang.Runnable({run:func}));
  a.start();
  return a;
}

function thread(func){
  var a=new java.lang.Thread(new java.lang.Runnable({run:func}));
  return a;
}

function showTip(text,show){
  Ui(function(){
    var toast=wg.Toast.makeText(ctx,String(text),show?show:0);
    toast.show();
  });
}

function getNames(){
  var arr=[],x=Player.getX(),y=Player.getY(),z=Player.getZ();
  invalidate();
  for(var i in players)arr.push(Player.getName(players[i])+"--"+Math.round(gougu(x-Entity.getX(players[i]),y-Entity.getY(players[i]),z-Entity.getZ(players[i]))));
  showDialog("所有玩家名","若在游戏房间外使用，则列表不会正确显示",arr.join("\n"),{txt:"关闭"});
  return true;
}

function showDialog(title,message,text,negative,positive,neutral,uncancel){
  Ui(function(){
  try{
  var dialog=new app.AlertDialog.Builder(ctx);
  dialog.setTitle(title);
  var scroll=new wg.ScrollView(ctx);
  if(typeof(text)=="string"){
  getMessage=new wg.EditText(ctx);
  getMessage.setText(text);
  scroll.addView(getMessage);
  }else if(typeof(text)=="object"){
  scroll.addView(text);
  }
  dialog.setView(scroll);
  if(negative)dialog.setNegativeButton(negative.txt?negative.txt:"",negative.command?negative.command:null);
  if(positive)dialog.setPositiveButton(positive.txt?positive.txt:"",positive.command?positive.command:null);
  if(neutral)dialog.setNeutralButton(neutral.txt?neutral.txt:"",neutral.command?neutral.command:null);
  dialog.setMessage(message);
  dialog.setCancelable(uncancel?false:true);
  dialog.show();
  }catch(err){showTip(err,1)}
  });
  return true;
}

function addCheckBox(parent,text,command,ave,size,checked){
  try{
  var check=new wg.CheckBox(ctx);
    check.setText(text?text:"");
      check.setChecked(checked?checked:false);
      if(size)check.setTextSize(size);
      if(command)check.setOnCheckedChangeListener(new wg.CompoundButton.OnCheckedChangeListener({onCheckedChanged:command}));
    aveLayout(check,typeof(ave)=="number"?ave:ave.type,ave.wid,ave.hei);
      parent.addView(check);
      return check;
  }catch(err){print(err)}
}

function aveLayout(view,ave,width,height,weight){
  switch(ave){
        case 1:
        view.setLayoutParams(new wg.RelativeLayout.LayoutParams(width?width:-2,height?height:-2,weight?weight:1));
        return view;
        default:
        view.setLayoutParams(new wg.LinearLayout.LayoutParams(width?width:-2,height?height:-2,weight?weight:1));
        return view;
      }
}

function Ui(command){
  ctx.runOnUiThread(new java.lang.Runnable({run:command}));
}

function getColorDrawable(color){
  return new grap.drawable.ColorDrawable(getColor(color));
}

function getColor(color){
  return eval("grap.Color."+color.toUpperCase());
}

function scan(){
  runThread(function(){
    abc:while(1){
      try{
      if(state==1){
      var x=Player.getX(),z=Player.getZ();
      invalidate();
      if(players.length>0){
      var scaleX=null,scaleZ=null;
      for(var i in players){
        if(state==2)break abc;
        var ls=Math.abs(x-Entity.getX(players[i]));
        if(scaleX==null||ls>scaleX){
          scaleX=ls;
        }
        ls=Math.abs(z-Entity.getZ(players[i]));
        if(scaleZ==null||ls>scaleZ){
          scaleZ=ls;
        }
      }
      var distX=scaleX*10/9,distZ=scaleZ*10/9,baseX=x-distX,baseZ=z-distZ,ratioX=lenX/2/distX,ratioZ=lenZ/2/distZ;
      for(var i in players){
        if(state==2)break abc;
        var name=Player.getName(players[i]),color=name.length>3&&name.substr(0,1)=="§"&&getColorValue(name.substr(3,1))?getColorValue(name.substr(3,1)):grap.Color.WHITE,actX=lenX-Math.abs(Entity.getX(players[i])-baseX)*ratioX,actZ=Math.abs(Entity.getZ(players[i])-baseZ)*ratioZ;
        draw(actZ,actX,color);
        drawPoint(players[i],actZ,actX,color);
      }
      }
      draw(lenZ/2,lenX/2,grap.Color.MAGENTA);
      drawPoint(Player.getEntity(),lenZ/2,lenX/2,grap.Color.MAGENTA);
      Ui(function(){
       radarShow.setImageBitmap(radarPic);
      radarPic=grap.Bitmap.createBitmap(lenZ,lenX,grap.Bitmap.Config.ARGB_8888);
      });
      }else{
        break;
      }
      java.lang.Thread.sleep(1000);
      }catch(err){
        showTip(err,1);
        break;
      }
    }
    state=3;
    Ui(function(){if(radarWin.isShowing())radarWin.dismiss();});
  });
}

function draw(x,y,color){
  var canvas=new grap.Canvas(radarPic);
  var paint=getPaint({color:color,dither:true});
  canvas.drawCircle(x,y,radius,paint);
}

function drawPoint(player,x,y,color){
  var ratio=Math.PI/180,yaw=Entity.getYaw(player);
  var x0=radius*1.3*Math.cos(yaw*ratio),y0=radius*1.3*Math.sin(yaw*ratio),x1=x0+radius*Math.cos((yaw-90)*ratio),y1=y0+radius*Math.sin((yaw-90)*ratio),x2=x0+radius*Math.cos((yaw+90)*ratio),y2=y0+radius*Math.sin((yaw+90)*ratio),x3=x0*2,y3=y0*2;
  var canvas=new grap.Canvas(radarPic);
  var paint=getPaint({color:color,dither:true,style:grap.Paint.Style.FILL});
  var path=new grap.Path();
  path.moveTo(x+x3,y+y3);
  path.lineTo(x+x1,y+y1);
  path.lineTo(x+x2,y+y2);
  path.close();
  canvas.drawPath(path,paint);
}

function gougu(){
  if(arguments.length<=3){
    var result=0;
    for(var i in arguments){
      result+=arguments[i]*arguments[i];
    }
    return Math.sqrt(result);
  }else{
    return null;
  }
}

function scroll(view,horizontal){
  var scrollView=horizontal?new wg.HorizontalScrollView(ctx):new wg.ScrollView(ctx);
  scrollView.addView(view);
  return scrollView;
}

function getColorValue(str){
  switch(str){
    case "红":
    return grap.Color.RED;
    case "黄":
    return grap.Color.YELLOW;
    case "蓝":
    return grap.Color.BLUE;
    case "绿":
    return grap.Color.GREEN;
    case "青":
    return grap.Color.CYAN;
    case "紫":
    return grap.Color.rgb(160,32,240);
    case "灰":
    return grap.Color.GRAY;
    case "白":
    return grap.Color.WHITE;
    case "黑":
    return grap.Color.BLACK;
    case "橙":
    return grap.Color.rgb(255,165,0);
    default:
    return null;
  }
}

function getPaint(fields){
  var paint=new grap.Paint();
  if(fields.color)paint.setColor(fields.color);
  if(fields.dither)paint.setDither(fields.dither);
  if(fields.antiAlias)paint.setAntiAlias(fields.antiAlias);
  if(fields.shader)paint.setShader(fields.shader);
  if(fields.width)paint.setStrokeWidth(fields.width);
  if(fields.style)paint.setStyle(fields.style);
  return paint;
}

function addButton(parent,text,command,longCommand,ave,size){
  try{
  var button=new wg.Button(ctx);
    button.setText(text?text:"");
      if(size)button.setTextSize(1,size);
      if(command)button.setOnClickListener(new view.View.OnClickListener({onClick:command}));
    if(longCommand)button.setOnLongClickListener(new view.View.OnLongClickListener({onLongClick:longCommand}));
      aveLayout(button,typeof(ave)=="number"?ave:ave.type,ave.wid,ave.hei);
      parent.addView(button);
      return button;
  }catch(err){print(err)}
}


}}))
layout.addView(白熊暗杀)

var 一键挖床=new android.widget.Button(ctx)
一键挖床.setText("[荐]一键挖床花雨庭8队模式")
一键挖床.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

/*
●●●●●●●●●●
你解密这个js是为了什么?
●●●●●●●●●●
*/
/*
请勿将js修改后给别人,修改的只允许自己用
*/
/*
qq群:820372853
作者qq:2733104006
作者在国际版xbox的id:er zi zhu
作者在网易我的世界的id:猪儿子zez
作者在多玩我的世界盒子的id:猪儿子zez
作者在bilibili的id:猪儿子zez
*/
/*原作者:xuxiqwq*/
function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("飞")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()+1,Player.getZ())
Player.setFlying(true)
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(25,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,18,250);
}}));

/*gui*/

var View=android.view.View;
var String=java.lang.String;
var Integer=java.lang.Integer;

var LinearLayout=android.widget.LinearLayout;
var Runnable=java.lang.Runnable;
var Color=android.graphics.Color;
var MotionEvent=android.view.MotionEvent;
var Matrix=android.graphics.Matrix;
var Bitmap=android.graphics.Bitmap;
var ScrollView=android.widget.ScrollView;
var FrameLayout=android.widget.FrameLayout;
var Gravity=android.view.Gravity;
var RelativeLayout=android.widget.RelativeLayout;
var InputFilter=android.text.InputFilter;
var TextWatcher=android.text.TextWatcher;
var ColorDrawable=android.graphics.drawable.ColorDrawable;
var StringBuilder=java.lang.StringBuilder;

var Button=android.widget.Button;
var TextView=android.widget.TextView;
var EditText=android.widget.EditText;
var ImageView=android.widget.ImageView;
var ImageButton=android.widget.ImageButton;
var PopupWindow=android.widget.PopupWindow;
var SeekBar=android.widget.SeekBar;


var logobase64="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";
var logo=android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(logobase64,0),0,android.util.Base64.decode(logobase64,0).length)

context=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

context.setTheme(android.R.style.Theme_Material_Light_NoActionBar);

//state

var buttonbg={t:-531890357,//e04bff4b
f:-520139957,//e0ff4b4b
s:-526475618//e09e9e9e
}



var Metrics = context.getResources().getDisplayMetrics();

var ScreenWidth=Metrics.widthPixels;
var ScreenHeight=Metrics.heightPixels;

function dip2px(dips){ 
return Math.ceil(dips * Metrics.density); 
}

function sp2px(sp){
return (sp*Metrics.scaledDensity+0.5);
}

function bitmapScale(bitmap,x,y){
var matrix = new Matrix();  
    matrix.postScale(x/bitmap.getWidth(),y/bitmap.getHeight());
    return Bitmap.createBitmap(bitmap, 0, 0,bitmap.getWidth(),bitmap.getHeight() , matrix,true);
}

function setClick(view,executeString,x){view.setOnClickListener(new View.OnClickListener(){onClick:function(v){
return(eval(executeString));//虽然不需要return
}});
}

function setTouch(view,executeString){view.setOnTouchListener(new View.OnTouchListener(){onTouch:function(v,event){
return(eval(executeString));
}});
}

function setDismiss(popwin,executeString){popwin.setOnDismissListener(new PopupWindow.OnDismissListener(){onDismiss:function(){
eval(executeString);
}});
}

function setSeekBarChange(seekbar,executeString,x){
seekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
onProgressChanged:function(seekbar,progress,fromUser){
eval(executeString);
},

onStartTrackingTouch:function(seekbar){
// 
},

onStopTrackingTouch:function(seekbar){
//
},

});
}

function addTextChanged(edit,executeString,x){
edit.addTextChangedListener(new TextWatcher(){

beforeTextChanged:function(str,start,count,after){
},

onTextChanged:function(str,start,before,count){
},

afterTextChanged:function(s){
eval(executeString);
},

});
}



//popwin
var $IconPopwin;
var $MemuPopwin;
var $EnchantPopwin;
//var $TpPopwin;
var $TpMemuPopwin;var $TpModeButtonPopwin;


function DrawIcon(showX,showY){
context.runOnUiThread(new Runnable({run:function(){

if($IconPopwin!=null){
$IconPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
return;
}
var view=new LinearLayout(context);
var iconbutton=new ImageButton(context);
iconbutton.setImageBitmap(bitmapScale(logo,dip2px(50),dip2px(50)));


view.addView(iconbutton);
iconbutton.setBackgroundColor(Color.argb(0,0,0,0));

var popwin=new PopupWindow(view,
LinearLayout.LayoutParams.WRAP_CONTENT,
LinearLayout.LayoutParams.WRAP_CONTENT
);
//show
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
//state
$IconPopwin=popwin;
setClick(iconbutton,"IconPopwinClick();");
setTouch(iconbutton,"IconPopwinMove(event);");
}}));
}

/*↓↓↓变量↓↓↓*/
var 床y,
  床1x,
  床1z,
  床2x,
  床2z,
  床3x,
  床3z,
  床4x,
  床4z,
  床5x,
  床5z,
  床6x,
  床6z,
  床7x,
  床7z,
  床8x,
  床8z,
  传床,
  起床配置 = 0;

var MemuButtons=[

/*↓↓↓按钮↓↓↓*/

{text:"传送[玩家]",checktest:function(){
return !(/*($TpPopwin==null||!$TpPopwin.isShowing())||*/($TpMemuPopwin==null||!$TpMemuPopwin.isShowing()));
},exe:"if($TpMemuPopwin==null||!$TpMemuPopwin.isShowing()){DrawTpMemu();}else{$TpMemuPopwin.dismiss();}"},

{text:"一键挖床",exe:"一键挖床();"},

{text:"切换起床配置",exe:"切换起床配置();"},

{text:"坐标",exe:"坐标();"},

{text:"药水",exe:"Entity.addEffect(Player.getEntity(), 16, 13333320, 1, false, false);Entity.addEffect(Player.getEntity(), 3, 13333320, 255, false, false);"},

{text:"附魔",exe:"EnchantHandItem();"},

{text:"重置js",exe:"重置js();"},

];

/*↓↓↓定义函数↓↓↓*/

function 一键挖床() {
  if ((传床 == 0)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e无配置,请先选择配置');
  }
  if ((传床 == 8)) {
    Entity.setPosition(Player.getEntity(), 床8x,床y,床8z);
    停();
    传床 = 9;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e黄§2绿§a青§1蓝§5紫§f§l[白]§r');
  }
  if ((传床 == 7)) {
    Entity.setPosition(Player.getEntity(), 床7x,床y,床7z);
    停();
    传床 = 8;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e黄§2绿§a青§1蓝§5§l[紫]§r§f白');
  }
  if ((传床 == 6)) {
    Entity.setPosition(Player.getEntity(), 床6x,床y,床6z);
    停();
    传床 = 7;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e黄§2绿§a青§1§l[蓝]§r§5紫§f白');
  }
  if ((传床 == 5)) {
    Entity.setPosition(Player.getEntity(), 床5x,床y,床5z);
    停();
    传床 = 6;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e黄§2绿§a§l[青]§r§1蓝§5紫§f白');
  }
  if ((传床 == 4)) {
    Entity.setPosition(Player.getEntity(), 床4x,床y,床4z);
    停();
    传床 = 5;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e黄§2§l[绿]§r§a青§1蓝§5紫§f白');
  }
  if ((传床 == 3)) {
    Entity.setPosition(Player.getEntity(), 床3x,床y,床3z);
    停();
    传床 = 4;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6橙§e§l[黄]§r§2绿§a青§1蓝§5紫§f白');
  }
  if ((传床 == 2)) {
    Entity.setPosition(Player.getEntity(), 床2x,床y,床2z);
    停();
    传床 = 3;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4红§6§l[橙]§r§e黄§2绿§a青§1蓝§5紫§f白');
  }
  if ((传床 == 1)) {
    Entity.setPosition(Player.getEntity(), 床1x,床y,床1z);
    停();
    传床 = 2;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床:§4§l[红]§r§6橙§e黄§2绿§a青§1蓝§5紫§f白');
  }
  if ((传床 == 9)) {
    传床 = 1;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床已结束');
  }
}

function 切换起床配置() {
  if ((起床配置 == 0)) {
    起床配置 = 1;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e选择好配置后,就可以点[一键挖床]');
  }
  if ((起床配置 == 6)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:水果派对,易拉罐,女巫花园,石坛,石门之择,§b§l[海底世界]§r§e');
    传床 = 1;
    起床配置 = 7;
    床y = 60.7;
    床1x = -18.5;
    床1z = 70.5;
    床2x = 19.5;
    床2z = -69.5;
    床3x = 19.5;
    床3z = 70.5;
    床4x = 70.5;
    床4z = 19.5;
    床5x = -18.5;
    床5z = -69.5;
    床6x = -69.5;
    床6z = 19.5;
    床7x = -69.5;
    床7z = -18.5;
    床8x = 70.5;
    床8z = -18.5;
  }
  if ((起床配置 == 5)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:水果派对,易拉罐,女巫花园,石坛,§b§l[石门之择]§r§e,海底世界');
    传床 = 1;
    起床配置 = 6;
    床y = 62.7;
    床1x = -54.5;
    床1z = 28.5;
    床2x = 55.5;
    床2z = -27.5;
    床3x = -27.5;
    床3z = 55.5;
    床4x = 28.5;
    床4z = 55.5;
    床5x = 28.5;
    床5z = -54.5;
    床6x = -54.5;
    床6z = -28.5;
    床7x = -27.5;
    床7z = -54.5;
    床8x = 55.5;
    床8z = 28.5;
  }
  if ((起床配置 == 4)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:水果派对,易拉罐,女巫花园,§b§l[石坛]§r§e,石门之择,海底世界');
    传床 = 1;
    起床配置 = 5;
    床y = 89.7;
    床1x = -42.5;
    床1z = 25.5;
    床2x = 25.5;
    床2z = -42.5;
    床3x = 25.5;
    床3z = 43.5;
    床4x = 43.5;
    床4z = 25.5;
    床5x = -24.5;
    床5z = -42.5;
    床6x = -24.5;
    床6z = 43.5;
    床7x = -42.5;
    床7z = -24.5;
    床8x = 43.5;
    床8z = -24.5;
  }
  if ((起床配置 == 3)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:水果派对,易拉罐,§b§l[女巫花园]§r§e,石坛,石门之择,海底世界');
    传床 = 1;
    起床配置 = 4;
    床y = 60.7;
    床1x = 17.5;
    床1z = 57.5;
    床2x = -16.5;
    床2z = 56.5;
    床3x = 51.5;
    床3z = 57.5;
    床4x = -50.5;
    床4z = -56.5;
    床5x = 17.5;
    床5z = 56.5;
    床6x = -16.5;
    床6z = 57.5;
    床7x = -50.5;
    床7z = 57.5;
    床8x = 51.5;
    床8z = -56.5;
  }
  if ((起床配置 == 2)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:水果派对,§b§l[易拉罐]§r§e,女巫花园,石坛,石门之择,海底世界');
    传床 = 1;
    起床配置 = 3;
    床y = 102.7;
    床1x = -28.5;
    床1z = 60.5;
    床2x = 29.5;
    床2z = -61.5;
    床3x = -61.5;
    床3z = -28.5;
    床4x = -28.5;
    床4z = -61.5;
    床5x = 62.5;
    床5z = -28.5;
    床6x = -61.5;
    床6z = 29.5;
    床7x = 62.5;
    床7z = 29.5;
    床8x = 29.5;
    床8z = 62.5;
  }
  if ((起床配置 == 1)) {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b§l[水果派对]§r§e,易拉罐,女巫花园,石坛,石门之择,海底世界');
    传床 = 1;
    起床配置 = 2;
    床y = 106.7;
    床1x = -61.5;
    床1z = -29.5;
    床2x = 62.5;
    床2z = 30.5;
    床3x = -29.5;
    床3z = -61.5;
    床4x = 30.5;
    床4z = -61.5;
    床5x = 30.5;
    床5z = 62.5;
    床6x = -61.5;
    床6z = 30.5;
    床7x = -29.5;
    床7z = 62.5;
    床8x = 62.5;
    床8z = -29.5;
  }
  if ((起床配置 == 7)) {
    起床配置 = 1;
  }
}

function 坐标() {
  MCPE_GUI_SHOW_CLIENT_MESSAGE((~~(getPlayerX()*100)/100),(~~(getPlayerY()*100)/100),(~~(getPlayerZ()*100)/100));
}

function 重置js() {
  MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§6[花雨庭毁灭者_1.0]');
  MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b无');
  床y = 4;
  床1x = 0;
  床1z = 0;
  床2x = 0;
  床2z = 0;
  床3x = 0;
  床3z = 0;
  床4x = 0;
  床4z = 0;
  床5x = 0;
  床5z = 0;
  床6x = 0;
  床6z = 0;
  床7x = 0;
  床7z = 0;
  床8x = 0;
  床8z = 0;
  传床 = 0;
  起床配置 = 0;
}

/*非gui*/
function 停() {
  Entity.setVelX(Player.getEntity(), 0);
  Entity.setVelY(Player.getEntity(), 0);
  Entity.setVelZ(Player.getEntity(), 0);
}

/*↑↑↑定义函数↑↑↑*/

function MCPE_GUI_SHOW_CLIENT_MESSAGE() {
  var msg_list = [];
  for (var i=0; i<arguments.length; i++) {
    msg_list.push(arguments[i]);
  }
  clientMessage(msg_list);
}

function MemuButtonBGDraw(count,bt){
if(MemuButtons[count].checktest()){bt.setBackgroundColor(buttonbg.t);}
else{bt.setBackgroundColor(buttonbg.f);}
}

function MemuButtonDraw(view){
for(var count=0;count<MemuButtons.length;count++){
var bt=new Button(context);
bt.setElevation(10);

bt.setAllCaps(false);
var btext=new String(MemuButtons[count].text);
/*
if(typeof(MemuButtons[count].rs)!="undefined")
for(var i=0;i<MemuButtons[count].rs.length;i++){
btext=btext.replace("%$"+i,MemuButtons[count].rs[i]());
}
*/
bt.setText(btext);

if(typeof(MemuButtons[count].checktest)!="undefined"){
MemuButtonBGDraw(count,bt);
setClick(bt,MemuButtons[count].exe+"MemuButtonBGDraw(x[0],x[1]);",[count,bt]);
}
else{
bt.setBackgroundColor(buttonbg.s);
setClick(bt,MemuButtons[count].exe,[bt,count]);
}

view.addView(bt,-1,-2);//WRAP_CONTENT,WRAP_FILL_PARENT暂且这么写
}
}

function DrawMemu(showX,showY){
//context.runOnUiThread(new Runnable({run:function(){

if($MemuPopwin!=null){
$MemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);//ScreenWidth-dip2px(220),dip2px(120));
return;}
var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113882113);//#8200b7ff

var zhuerzi=new TextView(context);
zhuerzi.setText("花雨庭毁灭者_1.0[\u732a\u513f\u5b50]");
view.addView(zhuerzi,-2,-2);
//add buttons

////////////////
MemuButtonDraw(view);
////////////////

var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_CONTENT,WRAP_FILL_PARENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);
popwin.setWidth(dip2px(180));
popwin.setHeight(ScreenHeight/2);
popwin.setOutsideTouchable(true);
popwin.setElevation(10);
setDismiss(popwin,"MenuPopwinDismiss();");
popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
popwin.setFocusable(true);
$MemuPopwin=popwin;
//show
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);//ScreenWidth-dip2px(220),dip2px(120));

//}}));
}

//tool win//
var $ToolWinIsShow=false;

//be的id按顺序
var EnchantList=[
{id:0,name:"\u4fdd\u62a4"},
{id:1,name:"\u706b\u7130\u4fdd\u62a4"},
{id:2,name:"\u6389\u843d\u4fdd\u62a4"},
{id:3,name:"\u7206\u70b8\u4fdd\u62a4"},
{id:4,name:"\u5f39\u5c04\u7269\u4fdd\u62a4"},
{id:5,name:"\u8346\u68d8"},
{id:6,name:"\u6c34\u4e0b\u547c\u5438"},
{id:7,name:"\u6df1\u6d77\u63a2\u7d22\u8005"},
{id:8,name:"\u6c34\u4e0b\u901f\u6398"},
{id:9,name:"\u950b\u5229"},
{id:10,name:"\u4ea1\u7075\u6740\u624b"},
{id:11,name:"\u622a\u80a2\u6740\u624b"},
{id:12,name:"\u51fb\u9000"},
{id:13,name:"\u706b\u7130\u9644\u52a0"},
{id:14,name:"\u62a2\u593a"},
{id:15,name:"\u6548\u7387"},
{id:16,name:"\u7cbe\u51c6\u91c7\u96c6"},
{id:17,name:"\u8010\u4e45"},
{id:18,name:"\u65f6\u8fd0"},
{id:19,name:"\u529b\u91cf"},
{id:20,name:"\u51b2\u51fb"},
{id:21,name:"\u706b\u77e2"},
{id:22,name:"\u65e0\u9650"},
{id:23,name:"\u6d77\u4e4b\u7737\u987e"},
{id:24,name:"\u9975\u9493"},
{id:25,name:"\u51b0\u971c\u884c\u8005"},
{id:26,name:"\u7ecf\u9a8c\u4fee\u8865"},
{id:27,name:"\u7ed1\u5b9a\u8bc5\u5492"},
{id:28,name:"\u6d88\u5931\u8bc5\u5492"},
{id:29,name:"\u7a7f\u523a"},
{id:30,name:"\u6fc0\u6d41"},
{id:31,name:"\u5fe0\u8bda"},
{id:32,name:"\u5f15\u96f7"},
{id:33,name:"\u591a\u91cd\u5c04\u51fb"},
{id:34,name:"\u7a7f\u900f"},
{id:35,name:"\u5feb\u901f\u88c5\u586b"},

];

function DrawEnchant(){
$ToolWinIsShow=true;


//context.runOnUiThread(new Runnable({run:function(){

if($EnchantPopwin!=null){
$EnchantPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,ScreenWidth/4,ScreenHeight/4);
return;
}

var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113882113);//#8200b7ff
//text         id 0xa
//button    id 0x1
//SeekBar id 0x2
//edit         id 0x3
//params
var textParams=new RelativeLayout.LayoutParams(sp2px(10*5),-2);
textParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT,RelativeLayout.TRUE);
var buttonParams=new RelativeLayout.LayoutParams(-2,-2);
buttonParams.addRule(RelativeLayout.ALIGN_PARENT_RIGHT,RelativeLayout.TRUE);
var editParams=new RelativeLayout.LayoutParams(sp2px(15*5),-2);
editParams.addRule(RelativeLayout.LEFT_OF,0x1);
var sbParams=new RelativeLayout.LayoutParams(-1,-2);
sbParams.addRule(RelativeLayout.RIGHT_OF,0xa);
sbParams.addRule(RelativeLayout.LEFT_OF,0x3);

for(var i=0;i<EnchantList.length;i++){
var relative=new RelativeLayout(context);
var name=new TextView(context);
name.setId(0xa);
var button=new Button(context);
button.setId(0x1);
var sb=new SeekBar(context);
//sb.setId(0x2);
var level=new EditText(context);
level.setId(0x3);

level.setInputType(2);//number
level.setText("0");
level.setFocusable(true);
level.setFocusableInTouchMode(true);
level.setFilters([new InputFilter.LengthFilter(5)]);
addTextChanged(level,"EnchantEditChange(s,x);",[level,sb]);
sb.setMax(32767);
sb.setPadding(dip2px(20),0,dip2px(50),0);
setSeekBarChange(sb,"EnchantSeekChange(progress,fromUser,x);",[level]);
name.setText(EnchantList[i].name);
button.setText("\u9644\u9b54");
setClick(button,"EnchantHand("+i+",x[0].getProgress());",[sb]);
//button.setGravity(Gravity.RIGHT);
//name.setGravity(Gravity.LEFT);
//level.setGravity(Gravity.CENTER);
relative.addView(name,textParams);
relative.addView(level,editParams);
relative.addView(button,buttonParams);
relative.addView(sb,sbParams);
view.addView(relative,-1,-2);
}
//dividing line--------
var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_FILL_PARENT,WRAP_CONTENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);
popwin.setWidth(ScreenWidth/2);
popwin.setHeight(ScreenHeight/2);
popwin.setOutsideTouchable(true);
popwin.setElevation(10);
setDismiss(popwin,"EnchantPopwinDismiss();");
popwin.setFocusable(true);
popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
popwin.setFocusable(true);
$EnchantPopwin=popwin;
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,ScreenWidth/4,ScreenHeight/4);

//}}));
}

/*
function DrawTp(showX,showY){
//context.runOnUiThread(new Runnable({run:function(){

if($TpPopwin!=null){
$TpPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
return;

var view=new LinearLayout(context);
}
//}}));
}*/


function TpPlayerRefresh(){
var view=$TpPlayersView;
view.removeAllViews();
var players=Server.getAllPlayers();
for(var i=0;i<players.length;i++){
var player=players[i];
var name=Player.getName(player);
var bt=new Button(context);
bt.setBackgroundColor(buttonbg.s);
bt.setAllCaps(false);
bt.setText(""+name);
setClick(bt,"TpModes[$TpMode].run(x[0]);",[player]);
view.addView(bt,-1,-2);
}

}


var TpModes=[
{id:0,name:"tp",run:function(player){
setPosition(Player.getEntity(),Entity.getX(player),Entity.getY(player),Entity.getZ(player));
}},

{id:1,name:"tpa",run:function(player){
setPosition(player,Player.getX(),Player.getY(),Player.getZ());
}},

];
var $TpMode=0;



function DrawTpMemu(){
//context.runOnUiThread(new Runnable({run:function(){
var showX=0;var showY=0;
if($TpMemuPopwin!=null){
TpPlayerRefresh();
$TpMemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
$TpModeButtonPopwin.getContentView().findViewById(0x1).setText(TpModes[$TpMode].name);
$TpModeButtonPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX+dip2px(180),showY);

return;
}

var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113882113);//#8200b7ff

$TpPlayersView=new LinearLayout(context);
$TpPlayersView.setOrientation(LinearLayout.VERTICAL);
var bt=new Button(context);
bt.setText("刷新");
view.addView(bt,-1,-2);
setClick(bt,"TpPlayerRefresh();");

TpPlayerRefresh();

view.addView($TpPlayersView,-1,-2);

var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_FILL_PARENT,WRAP_CONTENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);

popwin.setWidth(dip2px(180));
popwin.setHeight(dip2px(180*1.5));

$TpMemuPopwin=popwin;
setDismiss(popwin,"$TpModeButtonPopwin.dismiss();");
$TpMemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);

//Mode Button
var mview=new LinearLayout(context);
var modebutton=new Button(context);

modebutton.setText(TpModes[0].name);
modebutton.setBackgroundColor(buttonbg.s);
setClick(modebutton,"if($TpMode>=TpModes.length-1)$TpMode=0;else ++$TpMode;v.setText(TpModes[$TpMode].name);");
modebutton.setId(0x1);
modebutton.setAllCaps(false);
$TpMode=0;
mview.addView(modebutton,-1,-1);

var mpop=new PopupWindow(mview,dip2px(80),dip2px(40));
$TpModeButtonPopwin=mpop;
$TpModeButtonPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX+dip2px(180),showY);



//}}));
}

//state
var $orgX=null, $orgY=null,$offset=null, $offsetY=null;
var $IconPopwinX=null,$IconPopwinY=null;

function IconPopwinMove(event){
switch (event.getAction()) {
case MotionEvent.ACTION_DOWN:
$orgX =  event.getX();
$orgY = event.getY();
break;
case MotionEvent.ACTION_MOVE:
$offsetX =  event.getRawX()- $orgX;
$offsetY =  event.getRawY() - $orgY;
$IconPopwin.update($offsetX,$offsetY, -1, -1, true);

break;
case MotionEvent.ACTION_UP:
$IconPopwinX=event.getRawX()-event.getX();
$IconPopwinY=event.getRawY()-event.getY();
break;
}
return false;
}

function IconPopwinClick(){

$IconPopwin.dismiss();
DrawMemu($IconPopwinX,$IconPopwinY);
return false;
}

function MenuPopwinDismiss(){
if(!$ToolWinIsShow)
DrawIcon($IconPopwinX,$IconPopwinY);
}

function EnchantPopwinDismiss(){
$ToolWinIsShow=false;
DrawMemu($IconPopwinX,$IconPopwinY);
}

function EnchantHandItem(){
DrawEnchant();
$MemuPopwin.dismiss();
}

function EnchantSeekChange(progress,fromUser,x){
if(fromUser)
x[0].setText(""+progress);
}

function EnchantEditChange(s,x){
if(s.toString()==""){var progress=0;}else
var progress=Integer.valueOf(s.toString());
if(progress>32767){
x[0].setText("32767");

progress=32767;
setSelection(5);
}

x[1].setProgress(progress);
}

function EnchantHand(id,level){
///Player.getEnchantments(par1int);
Item.setEnchantType(getCarriedItem(),id,1);
Player.enchant(Player.getSelectedSlotId(),id,level);
}


MC={
getAllPlayers:function(){
var e=Entity.getAll();
var players=new Array();
for(var i=0;i<e.length;i++){
if(Player.isPlayer(e[i]))
players.push(e[i]);
}
print(e.length+","+e[0]+","+e[length-1]);
return players;
},

}



DrawIcon(ScreenWidth,0.5*ScreenHeight-dip2px(40));

/*
function newLevel(){
DrawIcon(ScreenWidth,0.5*ScreenHeight-dip2px(40));
}
function leaveGame(){
context.runOnUiThread(new Runnable({run:function(){
$IconPopwin.dismiss();
}}));
}*/


}}))
layout.addView(一键挖床)

var 一键启动微端=new android.widget.Button(ctx)
一键启动微端.setText("[荐]一键启动微端2.5")
一键启动微端.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

/*
｜我自己做的？要是不服来咬我啊？
｜居然有说我是抄袭转发破解的，真的没素质
｜原作者Q 921696216认准，勿被二改狗骗
｜2019-04-13
//File Select
//Made By XFY9326
文件选择器由XFY9326制作
*/

var Base="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\ndEWqmwk0wAAAAABJRU5ErkJggg==\n";
var wh="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\n";

var _0xd603 = [
    'bXl4',
    'cFla',
    'eXh6',
    'WGRF',
    'YWZJ',
    'dGV4dA\x3d\x3d',
    'SHRtbA\x3d\x3d',
    'ZnJvbUh0bWw\x3d',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'UnVubmFibGU\x3d',
    'SExT',
    'VG9hc3Q\x3d',
    'bWFrZVRleHQ\x3d',
    'SVlP',
    'c2hvdw\x3d\x3d',
    'bW5K',
    'clRn',
    'QmFzZTY0',
    'ZGVjb2Rl',
    'Qml0bWFwRHJhd2FibGU\x3d',
    'Qml0bWFwRmFjdG9yeQ\x3d\x3d',
    'ZGVjb2RlQnl0ZUFycmF5',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'dXRpbA\x3d\x3d',
    'RGlzcGxheU1ldHJpY3M\x3d',
    'Z2V0V2luZG93TWFuYWdlcg\x3d\x3d',
    'Z2V0RGVmYXVsdERpc3BsYXk\x3d',
    'Z2V0TWV0cmljcw\x3d\x3d',
    'aGVpZ2h0UGl4ZWxz',
    'd2lkdGhQaXhlbHM\x3d',
    'MXw4fDR8OXw3fDZ8MTJ8MTB8MTF8MHw1fDJ8Mw\x3d\x3d',
    'c3BsaXQ\x3d',
    'elhm',
    'RFJK',
    'eEdD',
    'c2V0T25DbGlja0xpc3RlbmVy',
    'dmlldw\x3d\x3d',
    'Vmlldw\x3d\x3d',
    'T25DbGlja0xpc3RlbmVy',
    'SVNT',
    'YXlh',
    'TGhU',
    'c2V0R3Jhdml0eQ\x3d\x3d',
    'd3Fk',
    'R3Jhdml0eQ\x3d\x3d',
    'TEVGVA\x3d\x3d',
    'VE9Q',
    'UkdP',
    'Q0VOVEVS',
    'Zmhl',
    'Qk9UVE9N',
    'T0tw',
    'dWFl',
    'Rnhn',
    'dnJ1',
    'REpv',
    'Rmxp',
    'UklHSFQ\x3d',
    'WE1U',
    'ZkZ4',
    'amR4',
    'd2lkZ2V0',
    'TGluZWFyTGF5b3V0',
    'U2Nyb2xsVmlldw\x3d\x3d',
    'c2V0TGF5b3V0UGFyYW1z',
    'TGF5b3V0UGFyYW1z',
    'c2V0QmFja2dyb3VuZERyYXdhYmxl',
    'Z3JhcGhpY3M\x3d',
    'ZHJhd2FibGU\x3d',
    'Q29sb3JEcmF3YWJsZQ\x3d\x3d',
    'Q29sb3I\x3d',
    'cGFyc2VDb2xvcg\x3d\x3d',
    'R0ha',
    'a1pC',
    'c2V0T3JpZW50YXRpb24\x3d',
    'MTB8MXw0fDExfDh8Mnw1fDd8M3wwfDZ8OQ\x3d\x3d',
    'R21m',
    'c2hvd0F0TG9jYXRpb24\x3d',
    'Z2V0V2luZG93',
    'Z2V0RGVjb3JWaWV3',
    'UGdr',
    'SWhE',
    'T2VY',
    'UWhU',
    'bmV4',
    'QU9N',
    'Y2Za',
    'R0tQ',
    'REpO',
    'c2V0V2lkdGg\x3d',
    'c2V0VG91Y2hhYmxl',
    'c2V0SGVpZ2h0',
    'c2V0Rm9jdXNhYmxl',
    'c2V0Q29udGVudFZpZXc\x3d',
    'UG9wdXBXaW5kb3c\x3d',
    'c2V0QW5pbWF0aW9uU3R5bGU\x3d',
    'c3R5bGU\x3d',
    'QW5pbWF0aW9uX0RpYWxvZw\x3d\x3d',
    'NnwyfDh8N3wzfDF8NHwwfDU\x3d',
    'dUVR',
    'cmJv',
    'Z0Nz',
    'ZkpG',
    'VlRk',
    'a0tu',
    'd2hs',
    'RnZY',
    'RWhu',
    'RENQ',
    'V0NB',
    'b3dM',
    'c2V0VGV4dFNpemU\x3d',
    'c2V0VGV4dENvbG9y',
    'VGV4dFZpZXc\x3d',
    'c2V0VGV4dA\x3d\x3d',
    'QkZU',
    'UHJvZ3Jlc3NCYXI\x3d',
    'Rmx1',
    'YXR0cg\x3d\x3d',
    'cHJvZ3Jlc3NCYXJTdHlsZUhvcml6b250YWw\x3d',
    'c2V0TWF4',
    'c2V0UHJvZ3Jlc3M\x3d',
    'RmlsZQ\x3d\x3d',
    'ZXhpc3Rz',
    'aXNGaWxl',
    'M3w0fDd8NnwyfDF8MHw1',
    'Y2xvc2U\x3d',
    'dVVU',
    'cmVhZExpbmU\x3d',
    'cHVzaA\x3d\x3d',
    'am9pbg\x3d\x3d',
    'QnVmZmVyZWRSZWFkZXI\x3d',
    'SW5wdXRTdHJlYW1SZWFkZXI\x3d',
    'RmlsZUlucHV0U3RyZWFt',
    'VVRGLTg\x3d',
    'RmlsZU91dHB1dFN0cmVhbQ\x3d\x3d',
    'd3JpdGU\x3d',
    'bGFuZw\x3d\x3d',
    'U3RyaW5n',
    'Z2V0Qnl0ZXM\x3d',
    'N3wxfDl8MTF8NHw1fDN8MHwxMHw4fDJ8Ng\x3d\x3d',
    'Wldy',
    'R1Jj',
    'R3JhZGllbnREcmF3YWJsZQ\x3d\x3d',
    'TElORUFSX0dSQURJRU5U',
    'Q05z',
    'UkFESUFMX0dSQURJRU5U',
    'U1dFRVBfR1JBRElFTlQ\x3d',
    'Zm5S',
    'c2V0Q29ybmVyUmFkaWk\x3d',
    'T3JpZW50YXRpb24\x3d',
    'VE9QX0JPVFRPTQ\x3d\x3d',
    'WWxj',
    'TEVGVF9SSUdIVA\x3d\x3d',
    'Z05z',
    'QkxfVFI\x3d',
    'dXFh',
    'VExfQlI\x3d',
    'TnlC',
    'c2V0R3JhZGllbnRUeXBl',
    'T0dB',
    'bGVuZ3Ro',
    'WnBP',
    'b2ZI',
    'UFl6',
    'S2FJ',
    'NHwzfDJ8NXwwfDE\x3d',
    'ZkpQ',
    'c3RhcnRBbmltYXRpb24\x3d',
    'VHJhbnNsYXRlQW5pbWF0aW9u',
    'QVVL',
    'RkVY',
    'VXha',
    'Wkhi',
    'QW5pbWF0aW9u',
    'UkVMQVRJVkVfVE9fU0VMRg\x3d\x3d',
    'UkVMQVRJVkVfVE9fUEFSRU5U',
    'QUJTT0xVVEU\x3d',
    'YW5pbWF0aW9u',
    'c2V0RHVyYXRpb24\x3d',
    'MXwyfDN8Nnw0fDV8MA\x3d\x3d',
    'Q2Zu',
    'Um90YXRlQW5pbWF0aW9u',
    'V0tS',
    'QUhB',
    'c2V0RmlsbEFmdGVy',
    'UmVO',
    'MXw0fDN8MnwwfDU\x3d',
    'b1pt',
    'U2NhbGVBbmltYXRpb24\x3d',
    'Y2Nz',
    'eUh6',
    'UkZB',
    'bHpz',
    'eVds',
    'QWxwaGFBbmltYXRpb24\x3d'
];
(function (_0x59c06c, _0x2254b4) {
    var _0x435994 = function (_0x1351a6) {
        while (--_0x1351a6) {
            _0x59c06c['\x70\x75\x73\x68'](_0x59c06c['\x73\x68\x69\x66\x74']());
        }
    };
    _0x435994(++_0x2254b4);
}(_0xd603, 0x1a6));
var _0x3d60 = function (_0x2a08f4, _0x4bd4ab) {
    _0x2a08f4 = _0x2a08f4 - 0x0;
    var _0x4038f0 = _0xd603[_0x2a08f4];
    if (_0x3d60['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x3b0f90 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x29be24 = _0x3b0f90();
            var _0x1fba88 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x29be24['\x61\x74\x6f\x62'] || (_0x29be24['\x61\x74\x6f\x62'] = function (_0x4a5fc0) {
                var _0x3101f3 = String(_0x4a5fc0)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1b109f = 0x0, _0x1f12ae, _0x592ade, _0x19971b = 0x0, _0x54f4ca = ''; _0x592ade = _0x3101f3['\x63\x68\x61\x72\x41\x74'](_0x19971b++); ~_0x592ade && (_0x1f12ae = _0x1b109f % 0x4 ? _0x1f12ae * 0x40 + _0x592ade : _0x592ade, _0x1b109f++ % 0x4) ? _0x54f4ca += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x1f12ae >> (-0x2 * _0x1b109f & 0x6)) : 0x0) {
                    _0x592ade = _0x1fba88['\x69\x6e\x64\x65\x78\x4f\x66'](_0x592ade);
                }
                return _0x54f4ca;
            });
        }());
        _0x3d60['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0xb3ac0b) {
            var _0x523ef5 = atob(_0xb3ac0b);
            var _0x53be02 = [];
            for (var _0x5041b4 = 0x0, _0x34ba50 = _0x523ef5['\x6c\x65\x6e\x67\x74\x68']; _0x5041b4 < _0x34ba50; _0x5041b4++) {
                _0x53be02 += '\x25' + ('\x30\x30' + _0x523ef5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5041b4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x53be02);
        };
        _0x3d60['\x64\x61\x74\x61'] = {};
        _0x3d60['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x3d60['\x64\x61\x74\x61'][_0x2a08f4] === undefined) {
        _0x4038f0 = _0x3d60['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x4038f0);
        _0x3d60['\x64\x61\x74\x61'][_0x2a08f4] = _0x4038f0;
    } else {
        _0x4038f0 = _0x3d60['\x64\x61\x74\x61'][_0x2a08f4];
    }
    return _0x4038f0;
};
ctx = com[_0x3d60('0x0')][_0x3d60('0x1')][_0x3d60('0x2')][_0x3d60('0x3')][_0x3d60('0x4')]();
function H() {
    var _0x2d9f0d = new android[_0x3d60('0x5')][_0x3d60('0x6')]();
    ctx[_0x3d60('0x7')]()[_0x3d60('0x8')]()[_0x3d60('0x9')](_0x2d9f0d);
    return _0x2d9f0d[_0x3d60('0xa')];
}
;
function W() {
    var _0x1a0168 = new android[_0x3d60('0x5')][_0x3d60('0x6')]();
    ctx[_0x3d60('0x7')]()[_0x3d60('0x8')]()[_0x3d60('0x9')](_0x1a0168);
    return _0x1a0168[_0x3d60('0xb')];
}
;
function NewView(_0x312296, _0x557d99, _0x396e45, _0x3caea8, _0x3fad9c, _0x471d84, _0x4ae6e2, _0x591255, _0x3392ae) {
    var _0x5a2d77 = {
        '\x7a\x58\x66': function _0x424bca(_0xf5cc7b, _0x4489a0) {
            return _0xf5cc7b(_0x4489a0);
        },
        '\x44\x52\x4a': function _0x13b19c(_0x14e6a5, _0x1dfd9e) {
            return _0x14e6a5(_0x1dfd9e);
        },
        '\x78\x47\x43': function _0x6a0aec(_0x2bafaa, _0x3dac55) {
            return _0x2bafaa != _0x3dac55;
        },
        '\x4c\x68\x54': function _0x526509(_0x619a5f, _0x3d6154) {
            return _0x619a5f == _0x3d6154;
        },
        '\x77\x71\x64': function _0x4ed4d8(_0x42b455, _0x2ac4c9) {
            return _0x42b455 | _0x2ac4c9;
        },
        '\x52\x47\x4f': function _0x2c004f(_0x282fcd, _0x86f54) {
            return _0x282fcd == _0x86f54;
        },
        '\x66\x68\x65': function _0x43cbaa(_0x4d46be, _0x1af93d) {
            return _0x4d46be == _0x1af93d;
        },
        '\x4f\x4b\x70': function _0x3f7c5a(_0x885750, _0x55219c) {
            return _0x885750 == _0x55219c;
        },
        '\x75\x61\x65': function _0x13fab7(_0x30cf86, _0x38198b) {
            return _0x30cf86 | _0x38198b;
        },
        '\x46\x78\x67': function _0x110710(_0x42539a, _0x2c4783) {
            return _0x42539a == _0x2c4783;
        },
        '\x76\x72\x75': function _0x567e9a(_0x5d1c47, _0x1622f1) {
            return _0x5d1c47 | _0x1622f1;
        },
        '\x44\x4a\x6f': function _0x46a190(_0x4eb169, _0x5daaf3) {
            return _0x4eb169 == _0x5daaf3;
        },
        '\x46\x6c\x69': function _0x42b6aa(_0x115ac5, _0x33c380) {
            return _0x115ac5 | _0x33c380;
        },
        '\x58\x4d\x54': function _0x16c788(_0x534031, _0x42d09b) {
            return _0x534031 == _0x42d09b;
        },
        '\x66\x46\x78': function _0x4bba60(_0x1ee403, _0x23d1d3) {
            return _0x1ee403 == _0x23d1d3;
        },
        '\x6a\x64\x78': function _0x5abdd8(_0x4f668e, _0xc28fb8) {
            return _0x4f668e == _0xc28fb8;
        },
        '\x47\x48\x5a': function _0x381a07(_0xb2d578, _0x26e2fe, _0x183973) {
            return _0xb2d578(_0x26e2fe, _0x183973);
        },
        '\x6b\x5a\x42': function _0x167ea6(_0x534890, _0x108ac9) {
            return _0x534890 != _0x108ac9;
        }
    };
    var _0x4ace7f = _0x3d60('0xc')[_0x3d60('0xd')]('\x7c'), _0x553b89 = 0x0;
    while (!![]) {
        switch (_0x4ace7f[_0x553b89++]) {
        case '0':
            ;
            continue;
        case '1':
            var _0x3caefe = {
                '\x49\x53\x53': function _0x2aa704(_0x30ad65, _0x4d5cfb) {
                    return _0x5a2d77[_0x3d60('0xe')](_0x30ad65, _0x4d5cfb);
                },
                '\x61\x79\x61': function _0x606c4d(_0x24bc84, _0x3ee737) {
                    return _0x5a2d77[_0x3d60('0xf')](_0x24bc84, _0x3ee737);
                }
            };
            continue;
        case '2':
            ;
            continue;
        case '3':
            return _0x3338ba;
            continue;
        case '4':
            ;
            continue;
        case '5':
            if (_0x5a2d77[_0x3d60('0x10')](_0x3392ae, null)) {
                _0x3338ba[_0x3d60('0x11')](new android[_0x3d60('0x12')][_0x3d60('0x13')][_0x3d60('0x14')]({
                    '\x6f\x6e\x43\x6c\x69\x63\x6b': function (_0x1b416e) {
                        try {
                            _0x3caefe[_0x3d60('0x15')](_0x3392ae, _0x1b416e);
                        } catch (_0x493efa) {
                            _0x3caefe[_0x3d60('0x16')](print, _0x493efa);
                        }
                        ;
                    }
                }));
            }
            continue;
        case '6':
            ;
            continue;
        case '7':
            if (_0x5a2d77[_0x3d60('0x17')](_0x3caea8, 'LT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x1d')](_0x3caea8, 'LC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x1f')](_0x3caea8, 'LB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x5a2d77[_0x3d60('0x21')](_0x3caea8, 'CT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x21')](_0x3caea8, 'CC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x22')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x23')](_0x3caea8, 'CB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x24')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x5a2d77[_0x3d60('0x25')](_0x3caea8, 'RT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x28')](_0x3caea8, 'RC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x29')](_0x3caea8, 'RB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            }
            continue;
        case '8':
            if (_0x5a2d77[_0x3d60('0x2a')](_0x312296, 'LL')) {
                var _0x3338ba = new android[_0x3d60('0x2b')][_0x3d60('0x2c')](ctx);
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x312296, 'SV')) {
                var _0x3338ba = new android[_0x3d60('0x2b')][_0x3d60('0x2d')](ctx);
            }
            continue;
        case '9':
            _0x3338ba[_0x3d60('0x2e')](new android[_0x3d60('0x2b')][_0x3d60('0x2c')][_0x3d60('0x2f')](_0x557d99, _0x396e45));
            continue;
        case '10':
            ;
            continue;
        case '11':
            if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x0)) {
                _0x3338ba[_0x3d60('0x30')](new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x33')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4ae6e2)));
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x1)) {
                _0x3338ba[_0x3d60('0x30')](_0x5a2d77[_0x3d60('0x36')](roundBG, _0x4ae6e2, _0x591255));
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x2)) {
            }
            continue;
        case '12':
            if (_0x5a2d77[_0x3d60('0x37')](_0x3fad9c, null)) {
                _0x3338ba[_0x3d60('0x38')](_0x3fad9c);
            }
            continue;
        }
        break;
    }
}
;
function NewCDV(_0x4194ec, _0x4f57ec, _0x1e69e0, _0x24474d, _0xf1f43b, _0x10ae0a, _0x3f0275, _0x4bcb5c, _0xb27a35, _0xc893ea, _0x3b09c7) {
    var _0x2755d7 = {
        '\x47\x6d\x66': function _0x398fd7(_0x57258a, _0x4b00fe) {
            return _0x57258a == _0x4b00fe;
        },
        '\x50\x67\x6b': function _0x2598a3(_0x1f7d10, _0x5cd5be) {
            return _0x1f7d10 | _0x5cd5be;
        },
        '\x49\x68\x44': function _0xc9d157(_0x202a91, _0x5a7b2e) {
            return _0x202a91 | _0x5a7b2e;
        },
        '\x4f\x65\x58': function _0x3e72be(_0x3d6aec, _0x177bc4) {
            return _0x3d6aec == _0x177bc4;
        },
        '\x51\x68\x54': function _0x49c29b(_0x28a07b, _0x2bb713) {
            return _0x28a07b | _0x2bb713;
        },
        '\x6e\x65\x78': function _0x1804c4(_0x5636da, _0x289924) {
            return _0x5636da == _0x289924;
        },
        '\x41\x4f\x4d': function _0x26ca1c(_0x204984, _0x42f09f) {
            return _0x204984 | _0x42f09f;
        },
        '\x63\x66\x5a': function _0x1569ba(_0xb565e3, _0x4564b6) {
            return _0xb565e3 | _0x4564b6;
        },
        '\x47\x4b\x50': function _0x344ea2(_0x3c9dd1, _0x1e71b2, _0x496154) {
            return _0x3c9dd1(_0x1e71b2, _0x496154);
        },
        '\x44\x4a\x4e': function _0x1a34b4(_0x5e1d33, _0x236754) {
            return _0x5e1d33 == _0x236754;
        }
    };
    var _0xc23341 = _0x3d60('0x39')[_0x3d60('0xd')]('\x7c'), _0x465130 = 0x0;
    while (!![]) {
        switch (_0xc23341[_0x465130++]) {
        case '0':
            if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3e')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3f')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3f')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x40')](_0xb27a35, 'CT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'CC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'CB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x43')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x44')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x44')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            }
            continue;
        case '1':
            if (_0x2755d7[_0x3d60('0x42')](_0x4194ec, 0x0)) {
                _0x55c946[_0x3d60('0x30')](new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x33')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4f57ec)));
            } else if (_0x2755d7[_0x3d60('0x42')](_0x4194ec, 0x1)) {
                _0x55c946[_0x3d60('0x30')](_0x2755d7[_0x3d60('0x45')](roundBG, _0x4f57ec, _0x1e69e0));
            } else if (_0x2755d7[_0x3d60('0x46')](_0x4194ec, 0x2)) {
            }
            continue;
        case '2':
            _0x55c946[_0x3d60('0x47')](_0xf1f43b);
            continue;
        case '3':
            _0x55c946[_0x3d60('0x48')](_0x4bcb5c);
            continue;
        case '4':
            ;
            continue;
        case '5':
            _0x55c946[_0x3d60('0x49')](_0x10ae0a);
            continue;
        case '6':
            ;
            continue;
        case '7':
            _0x55c946[_0x3d60('0x4a')](_0x3f0275);
            continue;
        case '8':
            _0x55c946[_0x3d60('0x4b')](_0x24474d);
            continue;
        case '9':
            return _0x55c946;
            continue;
        case '10':
            var _0x55c946 = new android[_0x3d60('0x2b')][_0x3d60('0x4c')]();
            continue;
        case '11':
            _0x55c946[_0x3d60('0x4d')](android['R'][_0x3d60('0x4e')][_0x3d60('0x4f')]);
            continue;
        }
        break;
    }
}
;
function NewText(_0x54d6c6, _0x47f95b, _0x3476ef, _0x5a7f08) {
    var _0x108989 = {
        '\x75\x45\x51': function _0x371ee1(_0x2c5610, _0x519025) {
            return _0x2c5610 == _0x519025;
        },
        '\x72\x62\x6f': function _0x53d762(_0x52de00, _0x2dd191) {
            return _0x52de00 | _0x2dd191;
        },
        '\x67\x43\x73': function _0xd96748(_0x139216, _0xf4e6ce) {
            return _0x139216 == _0xf4e6ce;
        },
        '\x66\x4a\x46': function _0x4dbbad(_0x2a9d71, _0x5f452c) {
            return _0x2a9d71 | _0x5f452c;
        },
        '\x56\x54\x64': function _0x1bf04d(_0x311155, _0x568bce) {
            return _0x311155 | _0x568bce;
        },
        '\x6b\x4b\x6e': function _0x2f65d7(_0x28f1dc, _0x342f3f) {
            return _0x28f1dc == _0x342f3f;
        },
        '\x77\x68\x6c': function _0x2a0a73(_0x442891, _0x41dd6a) {
            return _0x442891 == _0x41dd6a;
        },
        '\x46\x76\x58': function _0x54f5bd(_0x55e9ca, _0x5e4a9e) {
            return _0x55e9ca | _0x5e4a9e;
        },
        '\x45\x68\x6e': function _0x4e43da(_0x58d901, _0x58db51) {
            return _0x58d901 == _0x58db51;
        },
        '\x44\x43\x50': function _0x47f5d6(_0x46fd47, _0x26d9fe) {
            return _0x46fd47 | _0x26d9fe;
        },
        '\x57\x43\x41': function _0x4f4bd1(_0x6b37ff, _0x569bf8) {
            return _0x6b37ff | _0x569bf8;
        },
        '\x6f\x77\x4c': function _0x509c58(_0x380624, _0x404b54) {
            return _0x380624 != _0x404b54;
        }
    };
    var _0x23bf0b = _0x3d60('0x50')[_0x3d60('0xd')]('\x7c'), _0x975f53 = 0x0;
    while (!![]) {
        switch (_0x23bf0b[_0x975f53++]) {
        case '0':
            ;
            continue;
        case '1':
            ;
            continue;
        case '2':
            if (_0x108989[_0x3d60('0x51')](_0x47f95b, 'LT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x52')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'LC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x54')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'LB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'CT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'CC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x56')](_0x47f95b, 'CB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x108989[_0x3d60('0x57')](_0x47f95b, 'RT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x58')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x59')](_0x47f95b, 'RC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x5a')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x59')](_0x47f95b, 'RB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x5b')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            }
            continue;
        case '3':
            if (_0x108989[_0x3d60('0x5c')](_0x3476ef, null)) {
                _0x5569d2[_0x3d60('0x5d')](_0x3476ef);
            }
            continue;
        case '4':
            if (_0x108989[_0x3d60('0x5c')](_0x5a7f08, null)) {
                _0x5569d2[_0x3d60('0x5e')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x5a7f08));
            }
            continue;
        case '5':
            return _0x5569d2;
            continue;
        case '6':
            var _0x5569d2 = new android[_0x3d60('0x2b')][_0x3d60('0x5f')](ctx);
            continue;
        case '7':
            _0x5569d2[_0x3d60('0x60')](_0x54d6c6);
            continue;
        case '8':
            ;
            continue;
        }
        break;
    }
}
;
function NewPB(_0x1dbe40, _0x450014, _0x503012) {
    var _0x1b0cee = {
        '\x42\x46\x54': function _0x6dbcac(_0xa72935, _0x4f206e) {
            return _0xa72935 == _0x4f206e;
        },
        '\x46\x6c\x75': function _0x1b4d51(_0xfeaa61, _0x550811) {
            return _0xfeaa61 == _0x550811;
        }
    };
    if (_0x1b0cee[_0x3d60('0x61')](_0x1dbe40, 0x1)) {
        var _0x19def3 = new android[_0x3d60('0x2b')][_0x3d60('0x62')](ctx);
        return _0x19def3;
    } else if (_0x1b0cee[_0x3d60('0x63')](_0x1dbe40, 0x2)) {
        var _0x53fe79 = new android[_0x3d60('0x2b')][_0x3d60('0x62')](ctx, null, android['R'][_0x3d60('0x64')][_0x3d60('0x65')]);
        _0x53fe79[_0x3d60('0x66')](_0x450014);
        _0x53fe79[_0x3d60('0x67')](_0x503012);
    }
    ;
}
;
function CheckFiles(_0x194559) {
    var _0x292699 = new java['io'][_0x3d60('0x68')](_0x194559);
    if (!_0x292699[_0x3d60('0x69')]()) {
        return ![];
    } else {
        return !![];
    }
    ;
}
;
function ReadData(_0x20ccf0) {
    var _0x2127d4 = {
        '\x75\x55\x54': function _0x3d36e0(_0x2fd469, _0x481b54) {
            return _0x2fd469 != _0x481b54;
        }
    };
    var _0x22f730 = new java['io'][_0x3d60('0x68')](_0x20ccf0);
    if (_0x22f730[_0x3d60('0x6a')]()) {
        var _0xd16ae2 = _0x3d60('0x6b')[_0x3d60('0xd')]('\x7c'), _0x54bdbc = 0x0;
        while (!![]) {
            switch (_0xd16ae2[_0x54bdbc++]) {
            case '0':
                _0x657503[_0x3d60('0x6c')]();
                continue;
            case '1':
                ;
                continue;
            case '2':
                while (_0x2127d4[_0x3d60('0x6d')](_0x49d7ee = _0x437f6b[_0x3d60('0x6e')](), null)) {
                    _0x961ee6[_0x3d60('0x6f')](_0x49d7ee);
                }
                continue;
            case '3':
                var _0x961ee6 = [];
                continue;
            case '4':
                var _0x49d7ee = '';
                continue;
            case '5':
                return _0x961ee6[_0x3d60('0x70')]('\x0a');
                continue;
            case '6':
                var _0x437f6b = new java['io'][_0x3d60('0x71')](_0x657503);
                continue;
            case '7':
                var _0x657503 = new java['io'][_0x3d60('0x72')](new java['io'][_0x3d60('0x73')](_0x22f730), _0x3d60('0x74'));
                continue;
            }
            break;
        }
    }
    ;
}
;
function InputData(_0x4b6201, _0xaa1c58) {
    var _0x77cb32 = new java['io'][_0x3d60('0x75')](_0x4b6201);
    _0x77cb32[_0x3d60('0x76')](java[_0x3d60('0x77')][_0x3d60('0x78')](_0xaa1c58)[_0x3d60('0x79')]());
    _0x77cb32[_0x3d60('0x6c')]();
}
;
function roundRect(_0x902ed2, _0x2424b1, _0x3bd8d5, _0x4d13a8) {
    var _0x187b45 = {
        '\x5a\x57\x72': function _0x1fc6ff(_0x32a78e, _0x3197fd) {
            return _0x32a78e == _0x3197fd;
        },
        '\x47\x52\x63': function _0x12d264(_0xc82092, _0x1f6ed8) {
            return _0xc82092 == _0x1f6ed8;
        },
        '\x43\x4e\x73': function _0x1856a1(_0x4511e8, _0x2820b1) {
            return _0x4511e8 == _0x2820b1;
        },
        '\x66\x6e\x52': function _0x1d2d78(_0x318b00, _0x45f6e6) {
            return _0x318b00 instanceof _0x45f6e6;
        },
        '\x59\x6c\x63': function _0x27bdcf(_0x4c0b0e, _0x4bf685) {
            return _0x4c0b0e == _0x4bf685;
        },
        '\x67\x4e\x73': function _0x451fc1(_0x20c820, _0x3e2080) {
            return _0x20c820 == _0x3e2080;
        },
        '\x75\x71\x61': function _0x3b14c6(_0x503cf4, _0x51ab6c) {
            return _0x503cf4 == _0x51ab6c;
        },
        '\x4e\x79\x42': function _0x2ac49e(_0x10ccbe, _0x20e4b5) {
            return _0x10ccbe instanceof _0x20e4b5;
        }
    };
    var _0x6165b = _0x3d60('0x7a')[_0x3d60('0xd')]('\x7c'), _0x3e0f99 = 0x0;
    while (!![]) {
        switch (_0x6165b[_0x3e0f99++]) {
        case '0':
            if (_0x187b45[_0x3d60('0x7b')](_0x4d13a8, 0x0) || _0x187b45[_0x3d60('0x7c')](_0x4d13a8, null)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x7e')];
            } else if (_0x187b45[_0x3d60('0x7f')](_0x4d13a8, 0x1)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x80')];
            } else if (_0x187b45[_0x3d60('0x7f')](_0x4d13a8, 0x2)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x81')];
            }
            continue;
        case '1':
            if (!_0x187b45[_0x3d60('0x82')](_0x2424b1, Array))
                _0x2424b1 = [
                    _0x2424b1,
                    _0x2424b1,
                    _0x2424b1,
                    _0x2424b1
                ];
            continue;
        case '2':
            _0x2b3ed5[_0x3d60('0x83')]([
                _0x2424b1[0x0],
                _0x2424b1[0x0],
                _0x2424b1[0x1],
                _0x2424b1[0x1],
                _0x2424b1[0x2],
                _0x2424b1[0x2],
                _0x2424b1[0x3],
                _0x2424b1[0x3]
            ]);
            continue;
        case '3':
            var _0x2b3ed5 = new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')](_0x413493, _0x902ed2);
            continue;
        case '4':
            if (_0x187b45[_0x3d60('0x7f')](_0x3bd8d5, 'TB') || _0x187b45[_0x3d60('0x7f')](_0x3bd8d5, null)) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x85')];
            } else if (_0x187b45[_0x3d60('0x86')](_0x3bd8d5, 'LR')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x87')];
            } else if (_0x187b45[_0x3d60('0x88')](_0x3bd8d5, 'RT')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x89')];
            } else if (_0x187b45[_0x3d60('0x8a')](_0x3bd8d5, 'RB')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x8b')];
            }
            continue;
        case '5':
            ;
            continue;
        case '6':
            return _0x2b3ed5;
            continue;
        case '7':
            if (!_0x187b45[_0x3d60('0x8c')](_0x902ed2, Array))
                _0x902ed2 = [
                    _0x902ed2,
                    _0x902ed2,
                    _0x902ed2
                ];
            continue;
        case '8':
            _0x2b3ed5[_0x3d60('0x8d')](_0x1769ac);
            continue;
        case '9':
            if (_0x187b45[_0x3d60('0x8a')](_0x2424b1, null))
                _0x2424b1 = [
                    0xa,
                    0xa,
                    0xa,
                    0xa
                ];
            continue;
        case '10':
            ;
            continue;
        case '11':
            var _0x413493 = null, _0x1769ac = null;
            continue;
        }
        break;
    }
}
;
function roundBG(_0x1224fd, _0x29fe7d, _0x185cad) {
    var _0x286ec3 = {
        '\x4f\x47\x41': function _0x30b19e(_0x2e2ef9, _0x3d4d50) {
            return _0x2e2ef9 == _0x3d4d50;
        },
        '\x5a\x70\x4f': function _0x47003f(_0x3f2202, _0x2e97e1, _0x3921d5, _0x243ac5, _0x21bc29) {
            return _0x3f2202(_0x2e97e1, _0x3921d5, _0x243ac5, _0x21bc29);
        },
        '\x6f\x66\x48': function _0x4e6743(_0xb21a09, _0x2197ac) {
            return _0xb21a09(_0x2197ac);
        },
        '\x50\x59\x7a': function _0x371829(_0x544eae, _0x204b32) {
            return _0x544eae(_0x204b32);
        },
        '\x4b\x61\x49': function _0x107330(_0x85955, _0x15ba0a) {
            return _0x85955(_0x15ba0a);
        }
    };
    if (_0x286ec3[_0x3d60('0x8e')](_0x1224fd[_0x3d60('0x8f')], 0x2)) {
        return _0x286ec3[_0x3d60('0x90')](roundRect, _0x286ec3[_0x3d60('0x91')](hexColor, _0x1224fd[0x1]), _0x29fe7d, _0x1224fd[0x0], _0x185cad);
    } else if (_0x286ec3[_0x3d60('0x8e')](_0x1224fd[_0x3d60('0x8f')], 0x3)) {
        return _0x286ec3[_0x3d60('0x90')](roundRect, [
            _0x286ec3[_0x3d60('0x92')](hexColor, _0x1224fd[0x1]),
            _0x286ec3[_0x3d60('0x93')](hexColor, _0x1224fd[0x2])
        ], _0x29fe7d, _0x1224fd[0x0], _0x185cad);
    }
    ;
}
;
function hexColor(_0x4c43be) {
    return android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4c43be);
}
;
function UIMove(_0x5aed1c, _0x4c1a41, _0x5d4593, _0xd049b3, _0x17185e, _0x2e7c7d, _0x5c3a03) {
    var _0x3c80d5 = {
        '\x66\x4a\x50': function _0x5e446d(_0x1e2f52, _0x58e515) {
            return _0x1e2f52 != _0x58e515;
        },
        '\x41\x55\x4b': function _0x47a7f0(_0x170416, _0x3a3e4f) {
            return _0x170416 * _0x3a3e4f;
        },
        '\x46\x45\x58': function _0x567d40(_0x386b33, _0x47c183) {
            return _0x386b33 * _0x47c183;
        },
        '\x55\x78\x5a': function _0x1e9b52(_0x3f7e44, _0xe18c5f) {
            return _0x3f7e44 * _0xe18c5f;
        },
        '\x5a\x48\x62': function _0x30796d(_0x5c1128, _0x1e2f3b) {
            return _0x5c1128 == _0x1e2f3b;
        }
    };
    var _0x45bfc8 = _0x3d60('0x94')[_0x3d60('0xd')]('\x7c'), _0x25afcf = 0x0;
    while (!![]) {
        switch (_0x45bfc8[_0x25afcf++]) {
        case '0':
            if (_0x3c80d5[_0x3d60('0x95')](_0x5aed1c, null))
                _0x5aed1c[_0x3d60('0x96')](_0x7c4c4e);
            continue;
        case '1':
            return _0x7c4c4e;
            continue;
        case '2':
            var _0x7c4c4e = new _0x269912[_0x3d60('0x97')](_0x2baf95, _0x3c80d5[_0x3d60('0x98')](_0x4c1a41, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x99')](_0x5d4593, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x99')](_0xd049b3, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x9a')](_0x17185e, 0.01));
            continue;
        case '3':
            var _0x2baf95 = _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, null) || _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, 0x0) ? _0x269912[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, 0x1) ? _0x269912[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x269912[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '4':
            var _0x269912 = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '5':
            _0x7c4c4e[_0x3d60('0xa1')](_0x2e7c7d);
            continue;
        }
        break;
    }
}
;
function UIRotate(_0x5f31df, _0xbad7ba, _0x58ed61, _0xec7a84, _0x3dd1f4, _0x2c9ef7, _0x53aa42) {
    var _0x563221 = {
        '\x43\x66\x6e': function _0x2149d4(_0x518d49, _0x4d19e9) {
            return _0x518d49 == _0x4d19e9;
        },
        '\x57\x4b\x52': function _0x2f7e2c(_0x24d082, _0x57dfb1) {
            return _0x24d082 * _0x57dfb1;
        },
        '\x41\x48\x41': function _0x20d404(_0x338e9f, _0x4f094d) {
            return _0x338e9f * _0x4f094d;
        },
        '\x52\x65\x4e': function _0x5a293a(_0x4c48f8, _0x5dd085) {
            return _0x4c48f8 != _0x5dd085;
        }
    };
    var _0x4f3c46 = _0x3d60('0xa2')[_0x3d60('0xd')]('\x7c'), _0x1717f5 = 0x0;
    while (!![]) {
        switch (_0x4f3c46[_0x1717f5++]) {
        case '0':
            return _0x8ebae4;
            continue;
        case '1':
            var _0x56d74f = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '2':
            var _0x504def = _0x563221[_0x3d60('0xa3')](_0x53aa42, null) || _0x563221[_0x3d60('0xa3')](_0x53aa42, 0x0) ? _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0x563221[_0x3d60('0xa3')](_0x53aa42, 0x1) ? _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '3':
            var _0x8ebae4 = new _0x56d74f[_0x3d60('0xa4')](_0xbad7ba, _0x58ed61, _0x504def, _0x563221[_0x3d60('0xa5')](_0xec7a84, 0.01), _0x504def, _0x563221[_0x3d60('0xa6')](_0x3dd1f4, 0.01));
            continue;
        case '4':
            _0x8ebae4[_0x3d60('0xa7')](!![]);
            continue;
        case '5':
            if (_0x563221[_0x3d60('0xa8')](_0x5f31df, null))
                _0x5f31df[_0x3d60('0x96')](_0x8ebae4);
            continue;
        case '6':
            _0x8ebae4[_0x3d60('0xa1')](_0x2c9ef7);
            continue;
        }
        break;
    }
}
;
function UIShrink(_0x37f7d7, _0x2154de, _0x4e7744, _0x4317ac, _0xd3658b, _0x229ad2, _0x119079, _0x27d40f, _0x11e762) {
    var _0xbf7396 = {
        '\x6f\x5a\x6d': function _0x4432ae(_0x5df012, _0x3c3a53) {
            return _0x5df012 != _0x3c3a53;
        },
        '\x63\x63\x73': function _0x233776(_0x3681a7, _0x49f611) {
            return _0x3681a7 * _0x49f611;
        },
        '\x79\x48\x7a': function _0xd1bd82(_0x4083e3, _0x8f8676) {
            return _0x4083e3 * _0x8f8676;
        },
        '\x52\x46\x41': function _0x51e59e(_0x4b417b, _0x56df6f) {
            return _0x4b417b * _0x56df6f;
        },
        '\x6c\x7a\x73': function _0x13977b(_0x3504cc, _0x393efb) {
            return _0x3504cc * _0x393efb;
        },
        '\x79\x57\x6c': function _0x353319(_0x2a6587, _0x14a7ad) {
            return _0x2a6587 == _0x14a7ad;
        }
    };
    var _0x390fc6 = _0x3d60('0xa9')[_0x3d60('0xd')]('\x7c'), _0x16987f = 0x0;
    while (!![]) {
        switch (_0x390fc6[_0x16987f++]) {
        case '0':
            if (_0xbf7396[_0x3d60('0xaa')](_0x37f7d7, null))
                _0x37f7d7[_0x3d60('0x96')](_0x363d63);
            continue;
        case '1':
            var _0x249c7b = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '2':
            _0x363d63[_0x3d60('0xa1')](_0x27d40f);
            continue;
        case '3':
            var _0x363d63 = new _0x249c7b[_0x3d60('0xab')](_0xbf7396[_0x3d60('0xac')](_0x2154de, 0.01), _0xbf7396[_0x3d60('0xad')](_0x4e7744, 0.01), _0xbf7396[_0x3d60('0xae')](_0x4317ac, 0.01), _0xbf7396[_0x3d60('0xae')](_0xd3658b, 0.01), _0x2b5677, _0xbf7396[_0x3d60('0xaf')](_0x229ad2, 0.01), _0x2b5677, _0xbf7396[_0x3d60('0xaf')](_0x119079, 0.01));
            continue;
        case '4':
            var _0x2b5677 = _0xbf7396[_0x3d60('0xb0')](_0x11e762, null) || _0xbf7396[_0x3d60('0xb0')](_0x11e762, 0x0) ? _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0xbf7396[_0x3d60('0xb0')](_0x11e762, 0x1) ? _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '5':
            return _0x363d63;
            continue;
        }
        break;
    }
}
;
function UIFadein(_0x2801b2, _0x46fd5c, _0x438f20, _0x200bdd) {
    var _0x42336c = {
        '\x6d\x79\x78': function _0x487624(_0x454150, _0x28145b) {
            return _0x454150 * _0x28145b;
        },
        '\x70\x59\x5a': function _0x344764(_0x29fd9a, _0x5b2dc6) {
            return _0x29fd9a != _0x5b2dc6;
        }
    };
    var _0xa96c02 = new android[_0x3d60('0x12')][_0x3d60('0xa0')][_0x3d60('0xb1')](_0x42336c[_0x3d60('0xb2')](_0x46fd5c, 0.01), _0x42336c[_0x3d60('0xb2')](_0x438f20, 0.01));
    _0xa96c02[_0x3d60('0xa1')](_0x200bdd);
    if (_0x42336c[_0x3d60('0xb3')](_0x2801b2, null))
        _0x2801b2[_0x3d60('0x96')](_0xa96c02);
    return _0xa96c02;
}
;
function UIZoom(_0x36e5fe, _0x58b03c, _0x2203bf, _0x1466c8, _0x4099c7) {
    var _0x34eea5 = {
        '\x79\x78\x7a': function _0x3f97c2(_0x32091e, _0x2674de, _0x39885d, _0x262009, _0x4c37d8, _0x41713d, _0x1f27a0, _0x13683d, _0x402340, _0x579c1f) {
            return _0x32091e(_0x2674de, _0x39885d, _0x262009, _0x4c37d8, _0x41713d, _0x1f27a0, _0x13683d, _0x402340, _0x579c1f);
        }
    };
    return _0x34eea5[_0x3d60('0xb4')](UIShrink, _0x36e5fe, _0x58b03c, _0x2203bf, _0x58b03c, _0x2203bf, 0x32, 0x32, _0x1466c8, _0x4099c7);
}
;
function UILevel(_0x44e1ed, _0x298f34, _0x4b1784, _0x5bd6cd, _0x2e03c4) {
    var _0x3644d7 = {
        '\x58\x64\x45': function _0x344175(_0xa1efc0, _0x3a548d, _0x3015c7, _0x431d56, _0x36f726, _0x17ace9, _0x11e8fd, _0x278780) {
            return _0xa1efc0(_0x3a548d, _0x3015c7, _0x431d56, _0x36f726, _0x17ace9, _0x11e8fd, _0x278780);
        }
    };
    return _0x3644d7[_0x3d60('0xb5')](UIMove, _0x44e1ed, _0x298f34, _0x4b1784, 0x0, 0x0, _0x5bd6cd, _0x2e03c4);
}
;
function UIPlumb(_0x5ae7f6, _0x3727f9, _0x10cf85, _0x1c133e, _0x51b80a) {
    var _0x4660a9 = {
        '\x61\x66\x49': function _0x5b2b88(_0x31adc3, _0x5414db, _0x2d7a59, _0xa981e4, _0x5b3d7c, _0x3af3fd, _0x4c35dd, _0x1fb71b) {
            return _0x31adc3(_0x5414db, _0x2d7a59, _0xa981e4, _0x5b3d7c, _0x3af3fd, _0x4c35dd, _0x1fb71b);
        }
    };
    return _0x4660a9[_0x3d60('0xb6')](UIMove, _0x5ae7f6, 0x0, 0x0, _0x3727f9, _0x10cf85, _0x1c133e, _0x51b80a);
}
;
function color(_0x10dc31) {
    return new android[_0x3d60('0xb7')][_0x3d60('0xb8')][_0x3d60('0xb9')](_0x10dc31);
}
;
function toast(_0x306bf8, _0x7dea8) {
    var _0x17ad0c = {
        '\x48\x4c\x53': function _0x1b5890(_0x4b7c11, _0x196bdb) {
            return _0x4b7c11 == _0x196bdb;
        },
        '\x49\x59\x4f': function _0x4542b2(_0x933dc6, _0x127138) {
            return _0x933dc6(_0x127138);
        },
        '\x6d\x6e\x4a': function _0x566c6b(_0x430718, _0x514b36) {
            return _0x430718 != _0x514b36;
        },
        '\x72\x54\x67': function _0x2ae029(_0x442db4, _0x12ae95) {
            return _0x442db4(_0x12ae95);
        }
    };
    ctx[_0x3d60('0xba')](new java[_0x3d60('0x77')][_0x3d60('0xbb')]({
        '\x72\x75\x6e': function () {
            if (_0x17ad0c[_0x3d60('0xbc')](_0x7dea8, null)) {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xbf')](color, _0x306bf8), 0x2)[_0x3d60('0xc0')]();
            } else if (_0x17ad0c[_0x3d60('0xc1')](_0x7dea8, 0x1)) {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xc2')](color, _0x306bf8), 0xa)[_0x3d60('0xc0')]();
            } else {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xc2')](color, _0x17ad0c[_0x3d60('0xc2')](replaceColor, lang[0xa])), 0x0)[_0x3d60('0xc0')]();
            }
            ;
        }
    }));
}
;
function BaseT(_0x4e580f) {
    var _0x513190 = android[_0x3d60('0x5')][_0x3d60('0xc3')][_0x3d60('0xc4')](_0x4e580f, 0x0);
    var _0x10ecd5 = new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0xc5')](android[_0x3d60('0x31')][_0x3d60('0xc6')][_0x3d60('0xc7')](_0x513190, 0x0, _0x513190[_0x3d60('0x8f')]));
    return _0x10ecd5;
}
;


var _0x509f = [
    'UXp2',
    '5YWN6LSj5aOw5piO5Y\x2bK5L2\x2f55So5p2h5qy\x2b77ya',
    'ICAxLuS9v\x2beUqOivpei1hOa6kOihqOekuuaCqOW3suWQjOaEj\x2bW5tuaOpeWPl\x2bebuOWFs\x2badoeasvuOAgg\x3d\x3d',
    'ICAyLuWOn\x2bS9nOiAheS4jeS8muWvueS9v\x2beUqOiAheS9v\x2beUqOivpei1hOa6kOmAoOaIkOeahOS4gOWIh\x2bWQjuaenOi0n\x2bi0o\x2b\x2b8jOWMheaLrOS9huS4jemZkOS6jua1gemHj\x2beahOaUtuWPluOAgeaVsOaNrueahOaNn\x2bWdj\x2betieOAgg\x3d\x3d',
    'ICAzLuWvueS6juWtmOWcqOS6jua6kOeggeS4remdnuWOn\x2bWIm\x2bacquaOiOadg\x2beahOS7o\x2begge\x2b8jOW3suWwveWPr\x2biDveiBlOezu\x2bS6huWOn\x2bS9nOiAhe\x2b8jOS9hueUseS6juS6kuiBlOe9keeahOWkjeadguaAp\x2bWPr\x2biDveacieeWj\x2ba8j\x2b\x2b8jOWPr\x2biBlOezu\x2baIkeWkhOeQhu\x2b8jOS9huS4jeS8mui0n\x2bWFtuWug\x2bi0o\x2bS7u\x2bOAgg\x3d\x3d',
    'ICA0LuWvueS6jueJiOacrOabtOaWsOOAgeWFjei0o\x2bWjsOaYjuetieWFrOWRiuS\x2fruaUueaXtu\x2b8jOivt\x2beUqOaIt\x2bafpeivouacieWFs\x2bWGheWuue\x2b8jOiLpee7p\x2be7reS9v\x2beUqOS7o\x2bihqOWQjOaEj\x2b\x2b8jOWQpuWImeW6lOWBnOatouS9v\x2beUqOOAgg\x3d\x3d',
    'ICA1Luemgeatouebl\x2beUqO\x2b8jOegtOino\x2b\x2b8jOS\x2fruaUueS7o\x2beggeacque7j\x2bWFgeiuuOWPkeW4g\x2bWIsOesrOS4ieaWueW5s\x2bWPsOOAgg\x3d\x3d',
    'ICA2LuemgeatouWcqOWOn\x2bS9nOiAheazqOWGjOeahOebuOWFs\x2be9kee7nOW5s\x2bWPsOi\x2fm\x2bihjOmqmuaJsOOAgg\x3d\x3d',
    'ICA3Luivt\x2bWLv\x2bS9v\x2beUqOS7luS6uueahOegtOino\x2bOAgemtlOaUueerr\x2b\x2b8jOWPr\x2biDveWQq\x2bacieeXheavkuaIluS4jeiJr\x2bS\x2foeaBr\x2b\x2b8jOivt\x2bS9v\x2beUqOWOn\x2bS9nOiAheWPkeW4g\x2beahOato\x2beJiOOAgg\x3d\x3d',
    'ICA4Luivt\x2bWLv\x2bWwhui1hOa6kOWcqOacque7j\x2bWOn\x2bS9nOiAheWFgeiuuOeahOaDheWGteS4i\x2bWPkeW4g\x2bOAgei9rOWPkee7meesrOS4ieaWueW5s\x2bWPsOaIluS4quS6uuS9v\x2beUqOOAgg\x3d\x3d',
    'ICA5Lui\x2fnee6pumcgOi0n\x2bebuOWFs\x2bi0o\x2bS7u\x2bOAgg\x3d\x3d',
    'bGVuZ3Ro',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'bGpv',
    'aFRE',
    'U2Nq',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMv',
    'RmlsZQ\x3d\x3d',
    'bWtkaXJz',
    'SlZU',
    'bHFw',
    'L21jdG9vbHMvanNjYWNoZTIuNQ\x3d\x3d',
    'ZFRz',
    'a1NF',
    'VFFs',
    'Zklm',
    'S1Jq',
    'Y094',
    'UnpN',
    'a0Jt',
    'I0ZGRkZGRg\x3d\x3d',
    'UVBm',
    'dkp5',
    'SGhP',
    'dlBa',
    'MXwyfDN8NHww',
    'c3BsaXQ\x3d',
    'RFB5',
    'VmxT',
    'c2V0VGV4dA\x3d\x3d',
    'V2VIYWNrICB2Mi41',
    'c2V0VGV4dFNpemU\x3d',
    'U3dG',
    'Rmph',
    'b2py',
    'Vktq',
    'd0tx',
    'RkJ0',
    'M3w0fDF8Mnww',
    'UFBO',
    'YWRkVmlldw\x3d\x3d',
    'amtN',
    'VUJD',
    'eWJ0',
    'Qnk6IEZsb2F0RHVzdA\x3d\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'dnhS'
];
(function (_0x20b45b, _0x27439c) {
    var _0x44aef5 = function (_0x57bcc1) {
        while (--_0x57bcc1) {
            _0x20b45b['\x70\x75\x73\x68'](_0x20b45b['\x73\x68\x69\x66\x74']());
        }
    };
    _0x44aef5(++_0x27439c);
}(_0x509f, 0xfd));
var _0xf509 = function (_0x1d56a4, _0x18a461) {
    _0x1d56a4 = _0x1d56a4 - 0x0;
    var _0x5f0fe6 = _0x509f[_0x1d56a4];
    if (_0xf509['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x2e3c6c = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x1171a6 = _0x2e3c6c();
            var _0x3581d0 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x1171a6['\x61\x74\x6f\x62'] || (_0x1171a6['\x61\x74\x6f\x62'] = function (_0x14de2e) {
                var _0x5553d6 = String(_0x14de2e)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1ecdac = 0x0, _0x9a7ed2, _0x7a0fe0, _0x9c49fa = 0x0, _0x4154c8 = ''; _0x7a0fe0 = _0x5553d6['\x63\x68\x61\x72\x41\x74'](_0x9c49fa++); ~_0x7a0fe0 && (_0x9a7ed2 = _0x1ecdac % 0x4 ? _0x9a7ed2 * 0x40 + _0x7a0fe0 : _0x7a0fe0, _0x1ecdac++ % 0x4) ? _0x4154c8 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x9a7ed2 >> (-0x2 * _0x1ecdac & 0x6)) : 0x0) {
                    _0x7a0fe0 = _0x3581d0['\x69\x6e\x64\x65\x78\x4f\x66'](_0x7a0fe0);
                }
                return _0x4154c8;
            });
        }());
        _0xf509['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x59581c) {
            var _0x39ae7c = atob(_0x59581c);
            var _0x71ac03 = [];
            for (var _0x5b4ad7 = 0x0, _0x2e7889 = _0x39ae7c['\x6c\x65\x6e\x67\x74\x68']; _0x5b4ad7 < _0x2e7889; _0x5b4ad7++) {
                _0x71ac03 += '\x25' + ('\x30\x30' + _0x39ae7c['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5b4ad7)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x71ac03);
        };
        _0xf509['\x64\x61\x74\x61'] = {};
        _0xf509['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0xf509['\x64\x61\x74\x61'][_0x1d56a4] === undefined) {
        _0x5f0fe6 = _0xf509['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x5f0fe6);
        _0xf509['\x64\x61\x74\x61'][_0x1d56a4] = _0x5f0fe6;
    } else {
        _0x5f0fe6 = _0xf509['\x64\x61\x74\x61'][_0x1d56a4];
    }
    return _0x5f0fe6;
};
var i = 0x0;
var mod = 0x0;
var jst3 = [
    _0xf509('0x0'),
    '',
    _0xf509('0x1'),
    _0xf509('0x2'),
    _0xf509('0x3'),
    _0xf509('0x4'),
    _0xf509('0x5'),
    _0xf509('0x6'),
    _0xf509('0x7'),
    _0xf509('0x8'),
    _0xf509('0x9')
];
var jst4 = [''];
for (a = 0x0; a < jst3[_0xf509('0xa')]; a++) {
    jst4 = jst4 + jst3[a] + '\x0a';
}
;
var l;
ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
    '\x72\x75\x6e': function () {
        var _0x264cd = {
            '\x6c\x6a\x6f': function _0xaae4ee(_0x1e982d, _0x114b1e) {
                return _0x1e982d == _0x114b1e;
            },
            '\x68\x54\x44': function _0x2e713a(_0x736eb1, _0x20599d) {
                return _0x736eb1(_0x20599d);
            },
            '\x53\x63\x6a': function _0xc6d4cf(_0x1a47e0, _0x245cc6) {
                return _0x1a47e0 + _0x245cc6;
            },
            '\x4a\x56\x54': function _0x2f8c20(_0x8c1be2, _0x24a97c) {
                return _0x8c1be2 == _0x24a97c;
            },
            '\x6c\x71\x70': function _0x5decea(_0x135f01, _0x14f820) {
                return _0x135f01 + _0x14f820;
            },
            '\x64\x54\x73': function _0x37ee48(_0x286867) {
                return _0x286867();
            },
            '\x6b\x53\x45': function _0xfa23b7(_0x361d89, _0x5ec0b7) {
                return _0x361d89 + _0x5ec0b7;
            },
            '\x54\x51\x6c': function _0x35441c(_0x4f6b2c, _0x2bcd3b) {
                return _0x4f6b2c * _0x2bcd3b;
            },
            '\x66\x49\x66': function _0x22d3a6(_0x2f15da, _0x233d39) {
                return _0x2f15da * _0x233d39;
            },
            '\x4b\x52\x6a': function _0x37c5d2(_0x38e48a, _0x194726) {
                return _0x38e48a + _0x194726;
            }
        };
        new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
            '\x72\x75\x6e': function () {
                if (_0x264cd[_0xf509('0x10')](_0x264cd[_0xf509('0x11')](CheckFiles, _0x264cd[_0xf509('0x12')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x15'))), ![])) {
                    new java['io'][_0xf509('0x16')](_0x264cd[_0xf509('0x12')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x15')))[_0xf509('0x17')]();
                }
                ;
                if (_0x264cd[_0xf509('0x18')](_0x264cd[_0xf509('0x11')](CheckFiles, _0x264cd[_0xf509('0x19')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x1a'))), ![])) {
                    _0x264cd[_0xf509('0x1b')](ui1);
                } else {
                    _0x264cd[_0xf509('0x11')](jslog, jst2);
                    mod = _0x264cd[_0xf509('0x1c')](mod, 0x2);
                    i = _0x264cd[_0xf509('0x1c')](_0x264cd[_0xf509('0x1d')](i, 0xa), _0x264cd[_0xf509('0x1e')](_0x264cd[_0xf509('0x1f')](0x1, i), 0x5));
                    l = -l;
                }
                ;
            }
        }), 0x5dc);
    }
}));
function ui1() {
    var _0x20a863 = {
        '\x63\x4f\x78': function _0xe3114a(_0x323810, _0x486112, _0x36e318, _0xbf44a8, _0x54cfa4, _0x61622e, _0x4c087d, _0x191b33, _0x23360b, _0x304982) {
            return _0x323810(_0x486112, _0x36e318, _0xbf44a8, _0x54cfa4, _0x61622e, _0x4c087d, _0x191b33, _0x23360b, _0x304982);
        },
        '\x52\x7a\x4d': function _0x4ba8d3(_0x4b86cc) {
            return _0x4b86cc();
        },
        '\x6b\x42\x6d': function _0x48bdf0(_0x2c1c80) {
            return _0x2c1c80();
        },
        '\x51\x50\x66': function _0x50a748(_0x5ad5a2, _0x158762, _0x171669, _0x6a70ab, _0x1c95e3, _0x4a946c, _0x4e1246, _0x2b4dd5, _0x53cfd8, _0x50bc0e, _0x2f0aa8, _0x39cd20) {
            return _0x5ad5a2(_0x158762, _0x171669, _0x6a70ab, _0x1c95e3, _0x4a946c, _0x4e1246, _0x2b4dd5, _0x53cfd8, _0x50bc0e, _0x2f0aa8, _0x39cd20);
        },
        '\x76\x4a\x79': function _0x5590f7(_0x437747, _0x14f545, _0x375838, _0x302415, _0x5d13b3) {
            return _0x437747(_0x14f545, _0x375838, _0x302415, _0x5d13b3);
        },
        '\x48\x68\x4f': function _0x6fb4db(_0x5abb6c, _0x5ca5b3) {
            return _0x5abb6c(_0x5ca5b3);
        },
        '\x76\x50\x5a': function _0x437786(_0x28ca76) {
            return _0x28ca76();
        }
    };
    ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
        '\x72\x75\x6e': function () {
            try {
                vn0 = _0x20a863[_0xf509('0x20')](NewView, 'LL', _0x20a863[_0xf509('0x21')](W), _0x20a863[_0xf509('0x22')](H), 'CC', 0x1, 0x0, _0xf509('0x23'), 0x0, null);
                pl0 = _0x20a863[_0xf509('0x24')](NewCDV, 0x2, null, 0x0, vn0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                _0x20a863[_0xf509('0x25')](UIFadein, vn0, 0x0, 0x64, 0x1f4);
            } catch (_0x28662d) {
                _0x20a863[_0xf509('0x26')](print, _0x28662d);
            }
        }
    }));
    ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
        '\x72\x75\x6e': function () {
            new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    _0x20a863[_0xf509('0x27')](ui2);
                }
            }), 0x3e8);
        }
    }));
}
;
function ui2() {
    var _0x1b673c = {
        '\x53\x77\x46': function _0x482d78(_0x191745, _0xc825a9, _0x156397, _0x710d68, _0xc2dd58) {
            return _0x191745(_0xc825a9, _0x156397, _0x710d68, _0xc2dd58);
        },
        '\x46\x6a\x61': function _0xed7d71(_0x2d5d69, _0x568950, _0x33ee2a, _0x2b6708, _0x26721b, _0x2067b4, _0x191d1c, _0x5fc83e, _0x15e076, _0x46f61c, _0x260cce, _0x5a6f9b) {
            return _0x2d5d69(_0x568950, _0x33ee2a, _0x2b6708, _0x26721b, _0x2067b4, _0x191d1c, _0x5fc83e, _0x15e076, _0x46f61c, _0x260cce, _0x5a6f9b);
        },
        '\x6f\x6a\x72': function _0x520a7f(_0x12ac06, _0x13245d, _0x9f1b4b, _0x364ad1, _0x20f8a5, _0x129dd8, _0xbe81ed, _0x1f9158, _0x2f85fb, _0x406ff4) {
            return _0x12ac06(_0x13245d, _0x9f1b4b, _0x364ad1, _0x20f8a5, _0x129dd8, _0xbe81ed, _0x1f9158, _0x2f85fb, _0x406ff4);
        },
        '\x56\x4b\x6a': function _0x2ff351(_0x50516a) {
            return _0x50516a();
        },
        '\x77\x4b\x71': function _0x146391(_0x9069b9, _0xbec3ce) {
            return _0x9069b9(_0xbec3ce);
        },
        '\x46\x42\x74': function _0x2fe1e2(_0xd4e625, _0x45e972, _0x5a7796, _0x548c1d, _0x30053b) {
            return _0xd4e625(_0x45e972, _0x5a7796, _0x548c1d, _0x30053b);
        }
    };
    var _0x3fde84 = _0xf509('0x28')[_0xf509('0x29')]('\x7c'), _0x1efa0f = 0x0;
    while (!![]) {
        switch (_0x3fde84[_0x1efa0f++]) {
        case '0':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            var _0x1adac3 = {
                                '\x44\x50\x79': function _0x3cfda2(_0x52eb46, _0x4d66e3, _0x130b02, _0x29ba18, _0x562dca) {
                                    return _0x52eb46(_0x4d66e3, _0x130b02, _0x29ba18, _0x562dca);
                                },
                                '\x56\x6c\x53': function _0x230052(_0x4d572e) {
                                    return _0x4d572e();
                                }
                            };
                            var _0x430c35 = _0xf509('0x28')[_0xf509('0x29')]('\x7c'), _0x371727 = 0x0;
                            while (!![]) {
                                switch (_0x430c35[_0x371727++]) {
                                case '0':
                                    _0x1adac3[_0xf509('0x2a')](UIFadein, vn1, 0x0, 0x64, 0x3e8);
                                    continue;
                                case '1':
                                    _0x1adac3[_0xf509('0x2b')](sea);
                                    continue;
                                case '2':
                                    _0x1adac3[_0xf509('0x2b')](web);
                                    continue;
                                case '3':
                                    t1[_0xf509('0x2c')](_0xf509('0x2d'));
                                    continue;
                                case '4':
                                    t1[_0xf509('0x2e')](0x1c);
                                    continue;
                                }
                                break;
                            }
                        }
                    }), 0xcb2);
                }
            }));
            continue;
        case '1':
            var _0x471d36 = {
                '\x50\x50\x4e': function _0x4a00e6(_0x3093a0, _0x2c8785, _0x373185, _0x3480ef, _0x113b83) {
                    return _0x1b673c[_0xf509('0x2f')](_0x3093a0, _0x2c8785, _0x373185, _0x3480ef, _0x113b83);
                },
                '\x6a\x6b\x4d': function _0x583255(_0x528584, _0x5b2338, _0x32f0c3, _0x30224c, _0x43cc55, _0x19369a, _0x3f4d15, _0x35205c, _0x5d0ac1, _0x304f03, _0x3a0265, _0x271725) {
                    return _0x1b673c[_0xf509('0x30')](_0x528584, _0x5b2338, _0x32f0c3, _0x30224c, _0x43cc55, _0x19369a, _0x3f4d15, _0x35205c, _0x5d0ac1, _0x304f03, _0x3a0265, _0x271725);
                },
                '\x55\x42\x43': function _0x40e902(_0xf80881, _0x45b9d9, _0x457ee1, _0x484266, _0x3d7d6d, _0x210c66, _0x2838f7, _0x58e077, _0x52bdc0, _0xa60afc) {
                    return _0x1b673c[_0xf509('0x31')](_0xf80881, _0x45b9d9, _0x457ee1, _0x484266, _0x3d7d6d, _0x210c66, _0x2838f7, _0x58e077, _0x52bdc0, _0xa60afc);
                },
                '\x79\x62\x74': function _0x40636a(_0x5060e8) {
                    return _0x1b673c[_0xf509('0x32')](_0x5060e8);
                },
                '\x76\x78\x52': function _0x2abc4b(_0x415a23, _0x252904) {
                    return _0x1b673c[_0xf509('0x33')](_0x415a23, _0x252904);
                },
                '\x51\x7a\x76': function _0x4800b0(_0x3df6f3, _0x592210, _0x38fd36, _0x29510e, _0x2a060b) {
                    return _0x1b673c[_0xf509('0x34')](_0x3df6f3, _0x592210, _0x38fd36, _0x29510e, _0x2a060b);
                }
            };
            continue;
        case '2':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    try {
                        var _0x144954 = _0xf509('0x35')[_0xf509('0x29')]('\x7c'), _0xf8d4e1 = 0x0;
                        while (!![]) {
                            switch (_0x144954[_0xf8d4e1++]) {
                            case '0':
                                _0x471d36[_0xf509('0x36')](UIFadein, vn1, 0x0, 0x64, 0x3e8);
                                continue;
                            case '1':
                                vn1[_0xf509('0x37')](t1);
                                continue;
                            case '2':
                                pl1 = _0x471d36[_0xf509('0x38')](NewCDV, 0x2, null, 0x0, vn1, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                                continue;
                            case '3':
                                vn1 = _0x471d36[_0xf509('0x39')](NewView, 'LL', _0x471d36[_0xf509('0x3a')](W), _0x471d36[_0xf509('0x3a')](H), 'CC', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '4':
                                t1 = _0x471d36[_0xf509('0x36')](NewText, _0xf509('0x3b'), 'CC', 0x12, _0xf509('0x3c'));
                                continue;
                            }
                            break;
                        }
                    } catch (_0x43051a) {
                        _0x471d36[_0xf509('0x3d')](print, _0x43051a);
                    }
                }
            }));
            continue;
        case '3':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            _0x471d36[_0xf509('0x3e')](UIFadein, vn1, 0x64, 0x0, 0x3e8);
                        }
                    }), 0x7d0);
                }
            }));
            continue;
        case '4':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            t1[_0xf509('0x2c')]('');
                        }
                    }), 0xbb8);
                }
            }));
            continue;
        }
        break;
    }
}
;


var _0xda74 = [
    'dUpu',
    'QXdQ',
    'c2V0T25DbGlja0xpc3RlbmVy',
    'dmlldw\x3d\x3d',
    'Vmlldw\x3d\x3d',
    'T25DbGlja0xpc3RlbmVy',
    'UE9a',
    'RlRa',
    'VGJH',
    'UFRC',
    'YWRkVmlldw\x3d\x3d',
    'SHJR',
    'ZGlzbWlzcw\x3d\x3d',
    'aXNu',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'MnwxfDB8NHwz',
    'c3BsaXQ\x3d',
    'cnpZ',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'Tlh3',
    'aXFZ',
    'NHwzfDF8NXwyfDA\x3d',
    'a2ln',
    'bkxK',
    'bUti',
    'WXJI',
    'Ulpw',
    'IzExZmZmZmZm',
    'I2ZmZmZmZmZm',
    'cFBG'
];
(function (_0x53884f, _0x59d739) {
    var _0x4d077a = function (_0x49bace) {
        while (--_0x49bace) {
            _0x53884f['\x70\x75\x73\x68'](_0x53884f['\x73\x68\x69\x66\x74']());
        }
    };
    _0x4d077a(++_0x59d739);
}(_0xda74, 0x116));
var _0x4da7 = function (_0x2d1b14, _0x320f15) {
    _0x2d1b14 = _0x2d1b14 - 0x0;
    var _0x51729d = _0xda74[_0x2d1b14];
    if (_0x4da7['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x58e38f = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x99af6d = _0x58e38f();
            var _0x5c90f4 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x99af6d['\x61\x74\x6f\x62'] || (_0x99af6d['\x61\x74\x6f\x62'] = function (_0x285759) {
                var _0x431e5e = String(_0x285759)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0xa61bb4 = 0x0, _0x3dc396, _0x33148b, _0x17d947 = 0x0, _0x1956b6 = ''; _0x33148b = _0x431e5e['\x63\x68\x61\x72\x41\x74'](_0x17d947++); ~_0x33148b && (_0x3dc396 = _0xa61bb4 % 0x4 ? _0x3dc396 * 0x40 + _0x33148b : _0x33148b, _0xa61bb4++ % 0x4) ? _0x1956b6 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x3dc396 >> (-0x2 * _0xa61bb4 & 0x6)) : 0x0) {
                    _0x33148b = _0x5c90f4['\x69\x6e\x64\x65\x78\x4f\x66'](_0x33148b);
                }
                return _0x1956b6;
            });
        }());
        _0x4da7['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x98e7c9) {
            var _0x2e7003 = atob(_0x98e7c9);
            var _0xb1f296 = [];
            for (var _0x2e0afa = 0x0, _0x5c2742 = _0x2e7003['\x6c\x65\x6e\x67\x74\x68']; _0x2e0afa < _0x5c2742; _0x2e0afa++) {
                _0xb1f296 += '\x25' + ('\x30\x30' + _0x2e7003['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x2e0afa)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0xb1f296);
        };
        _0x4da7['\x64\x61\x74\x61'] = {};
        _0x4da7['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x4da7['\x64\x61\x74\x61'][_0x2d1b14] === undefined) {
        _0x51729d = _0x4da7['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x51729d);
        _0x4da7['\x64\x61\x74\x61'][_0x2d1b14] = _0x51729d;
    } else {
        _0x51729d = _0x4da7['\x64\x61\x74\x61'][_0x2d1b14];
    }
    return _0x51729d;
};
function sea() {
    var _0x45ed6a = {
        '\x50\x4f\x5a': function _0x4fbd2a(_0x4e94ba, _0x27943e) {
            return _0x4e94ba == _0x27943e;
        },
        '\x69\x71\x59': function _0xa1cf65(_0x3d3ec8, _0x4eab10) {
            return _0x3d3ec8 * _0x4eab10;
        }
    };
    ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x2c47b3 = {
                '\x72\x7a\x59': function _0x11e7f9(_0x6e217d, _0x10b35a) {
                    return _0x6e217d < _0x10b35a;
                },
                '\x6b\x69\x67': function _0x15d581(_0x446119, _0x5ec0cc, _0x53e276, _0x203bcd, _0x298f76) {
                    return _0x446119(_0x5ec0cc, _0x53e276, _0x203bcd, _0x298f76);
                },
                '\x6e\x4c\x4a': function _0x3a4f9a(_0xf0460, _0x277ec1, _0x5b5288, _0x55ddc4, _0x40ad78, _0x43d030, _0x3b5965, _0xb091f0, _0x1ab271, _0x13e9c6) {
                    return _0xf0460(_0x277ec1, _0x5b5288, _0x55ddc4, _0x40ad78, _0x43d030, _0x3b5965, _0xb091f0, _0x1ab271, _0x13e9c6);
                },
                '\x6d\x4b\x62': function _0x5cc3bb(_0x1b619d, _0xc26c38) {
                    return _0x1b619d * _0xc26c38;
                },
                '\x59\x72\x48': function _0x327223(_0x3d074e) {
                    return _0x3d074e();
                },
                '\x52\x5a\x70': function _0x1b2a14(_0x451865, _0x54401d) {
                    return _0x451865 * _0x54401d;
                },
                '\x70\x50\x46': function _0x30f0c7(_0x5adeed, _0x2bd43b, _0x29d844, _0x58cfe4, _0x34379b, _0x439e39, _0x58fee2, _0x40bf71, _0x5bdb9a, _0x3e99cf, _0xb29268, _0x536199) {
                    return _0x5adeed(_0x2bd43b, _0x29d844, _0x58cfe4, _0x34379b, _0x439e39, _0x58fee2, _0x40bf71, _0x5bdb9a, _0x3e99cf, _0xb29268, _0x536199);
                },
                '\x75\x4a\x6e': function _0x2b32a0(_0x17bba6, _0x36907b) {
                    return _0x17bba6 * _0x36907b;
                },
                '\x41\x77\x50': function _0x48258d(_0x20dbb6) {
                    return _0x20dbb6();
                },
                '\x46\x54\x5a': function _0x2831c7(_0x39e530) {
                    return _0x39e530();
                },
                '\x54\x62\x47': function _0x3394ae(_0x13016e, _0x21ae45) {
                    return _0x13016e * _0x21ae45;
                },
                '\x50\x54\x42': function _0x2292ce(_0x3eeb4b) {
                    return _0x3eeb4b();
                },
                '\x48\x72\x51': function _0x33819e(_0x1cc67c, _0x3043bb) {
                    return _0x1cc67c(_0x3043bb);
                }
            };
            var _0x28a6d0 = _0x4da7('0x3')[_0x4da7('0x4')]('\x7c'), _0x1dff63 = 0x0;
            while (!![]) {
                switch (_0x28a6d0[_0x1dff63++]) {
                case '0':
                    for (a = 0x1; _0x2c47b3[_0x4da7('0x5')](a, 0x5); a++) {
                        ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                            '\x72\x75\x6e': function () {
                                new android['os'][_0x4da7('0x6')]()[_0x4da7('0x7')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x5c9970[_0x4da7('0x8')](UILevel, se2, -0x64, 0x578, 0x3e8);
                                    }
                                }), _0x45ed6a[_0x4da7('0x9')](0x5dc, a));
                            }
                        }));
                    }
                    continue;
                case '1':
                    try {
                        var _0x5280d1 = _0x4da7('0xa')[_0x4da7('0x4')]('\x7c'), _0x34f0fb = 0x0;
                        while (!![]) {
                            switch (_0x5280d1[_0x34f0fb++]) {
                            case '0':
                                _0x2c47b3[_0x4da7('0xb')](UILevel, se2, -0x64, 0x578, 0x3e8);
                                continue;
                            case '1':
                                se2 = _0x2c47b3[_0x4da7('0xc')](NewView, 'LL', _0x2c47b3[_0x4da7('0xd')](_0x2c47b3[_0x4da7('0xe')](W), 0.05), _0x2c47b3[_0x4da7('0xf')](_0x2c47b3[_0x4da7('0xe')](H), 0.2), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x4da7('0x10'),
                                    _0x4da7('0x11')
                                ], 0x0, null);
                                continue;
                            case '2':
                                sc1 = _0x2c47b3[_0x4da7('0x12')](NewCDV, 0x2, null, 0x0, se1, _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x14')](W), 0.7), _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x14')](H), 0.2), ![], !![], 'CC', 0x0, 0x0);
                                continue;
                            case '3':
                                se1[_0x4da7('0x15')](new android[_0x4da7('0x16')][_0x4da7('0x17')][_0x4da7('0x18')]({
                                    '\x6f\x6e\x43\x6c\x69\x63\x6b': function (_0x4d0f2b) {
                                        i++;
                                        if (_0x45ed6a[_0x4da7('0x19')](i, 0x5) && _0x45ed6a[_0x4da7('0x19')](l, -0x1)) {
                                            mod = 0x1;
                                        }
                                    }
                                }));
                                continue;
                            case '4':
                                se1 = _0x2c47b3[_0x4da7('0xc')](NewView, 'LL', _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x1a')](W), 0.7), _0x2c47b3[_0x4da7('0x1b')](_0x2c47b3[_0x4da7('0x1c')](H), 0.2), 'LR', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '5':
                                se1[_0x4da7('0x1d')](se2);
                                continue;
                            }
                            break;
                        }
                    } catch (_0x956095) {
                        _0x2c47b3[_0x4da7('0x1e')](print, _0x956095);
                    }
                    continue;
                case '2':
                    var _0x5c9970 = {
                        '\x4e\x58\x77': function _0x5ed2fc(_0x4fa907, _0x499a8b, _0xa9a638, _0x123f37, _0x245d86) {
                            return _0x2c47b3[_0x4da7('0xb')](_0x4fa907, _0x499a8b, _0xa9a638, _0x123f37, _0x245d86);
                        },
                        '\x69\x73\x6e': function _0xb184b8(_0x1b9fd5, _0x21c415) {
                            return _0x2c47b3[_0x4da7('0x1e')](_0x1b9fd5, _0x21c415);
                        }
                    };
                    continue;
                case '3':
                    ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                        '\x72\x75\x6e': function () {
                            new android['os'][_0x4da7('0x6')]()[_0x4da7('0x7')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                                '\x72\x75\x6e': function () {
                                    sc1[_0x4da7('0x1f')]();
                                    _0x5c9970[_0x4da7('0x20')](jslog, jst4);
                                }
                            }), 0x1b58);
                        }
                    }));
                    continue;
                case '4':
                    ;
                    continue;
                }
                break;
            }
        }
    }));
}
;

function web(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
se5=NewView("LL",-1,H()*0.5,"CC",1,2,null,null,null);
se6=NewView("LL",H()*0.2,H()*0.2,"CC",1,2,null,null,null);
var webv = new android.webkit.WebView(ctx);
webv.loadUrl("https://m.gitee.com/fddata/SkyWars-Simulator.js/raw/0b92aa1516834117daf9466ebce668fae5b31af6/win10.gif");
webv.setOnLongClickListener(new android.view.View.OnLongClickListener(){onLongClick:
function(v){
l--;
return true;
}});
se5.addView(se6);
se6.addView(webv);
sc3=NewCDV(2,null,0,se5,-1,H()*0.5,false,true,"CB",0,0);
UIFadein(se5, 0, 100, 500);
}catch(err){print(err)}
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
sc3.dismiss();
}}),7000) }}));
}}));
};


var _0xff02 = [
    'IzEwOTY5Njk2',
    'YWRkVmlldw\x3d\x3d',
    'RUVS',
    'VWNx',
    'eXpt',
    'Zmh4',
    'a1Bu',
    'VFRX',
    'cVND',
    'c0lY',
    'SE5D',
    'I0ZGRkZGRg\x3d\x3d',
    'bXJk',
    'VGNs',
    'R2dE',
    'QlVk',
    'bHFR',
    'YndS',
    'ZlN5',
    'T2RS',
    'SU9J',
    'bUpV',
    'Y0dQ',
    'dldk',
    'Y2Zq',
    'dHBW',
    'UnBY',
    'V0ggfCDlvq7nq68g4oCiIA\x3d\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'Y1NH',
    'VHZB',
    'c1pp',
    'QmpY',
    'Q3Vz',
    'bm15',
    'ZFFC',
    'S25r',
    'N3wwfDZ8M3w0fDF8Mnw4fDU\x3d',
    'Q1FI',
    'Mnw1fDN8N3wxMHwwfDEzfDZ8OXw0fDEyfDExfDh8MQ\x3d\x3d',
    'UXh3',
    'bGpS',
    'WndN',
    'Vm5l',
    'ckVK',
    'VVJU',
    'T0x4',
    'RkN2',
    'ZmRm',
    'S1R0',
    'Wkpi',
    'dVZF',
    'a1BI',
    'R3lQ',
    'b3VE',
    'anhQ',
    'THVa',
    'ZUVV',
    'I2ZmZDhmZmY5',
    'I2ZmZWZmZmQ4',
    'RUN6',
    'SmFI',
    'VVBK',
    'elhv',
    'T3lm',
    'd05m',
    'Wmtt',
    'Q0xp',
    'VVdw',
    'IzRiZmZmZmZm',
    'dm9L',
    'R2N4',
    'YW5Z',
    'S05I',
    'elpa',
    'dmFU',
    'WVNP',
    'c3VU',
    'dXpx',
    'SG5w',
    'bXlB',
    'dlB1',
    '5qyi6L\x2bO5L2\x2f55SoV2VIYWNrLU1YIHYyLjXvvIzku6XkuIvmmK\x2fnm7jlhbPkvb\x2fnlKjor7TmmI7vvIzor7fmgonnn6XjgII\x3d',
    '5LiA5YiH5L2\x2f55So6K\x2b05piO6YO95Zyo5q2k5YaZ5piO5LqG77yM5LiN5oeC6K\x2b35p\x2bl6ZiF44CC6K\x2bl566A5LuL5LiT5rK75ZCE56eN5LiN5pyN44CC',
    '4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU',
    'IzAg5pu05paw5YWs5ZGKI\x2b\x2b8mg\x3d\x3d',
    'ICDlsYXnhLbmnInkurror7Tku6PnoIHmmK\x2fmioTliKvkurrnmoTvvJ\x2fov5jmnInkurror7TkuI3mmK\x2fljp\x2fliJvnmoTvvJ\x2flnKjmraTor7TmmI7vvIzor6XotYTmupDlrozlhajljp\x2fliJvvvIzpg6jliIbliKvkurrnmoTku6PnoIHml6nlsLHlvpfliLDlr7nmlrnnmoTmjojmnYPkuobvvIE\x3d',
    'IzEg5YWz5LqO5q2kSnMj77ya',
    'ICDor6XotYTmupDnsbvkvLzkuo7ooaXkuIHvvIzkuI3mmK\x2flpKflnotH44CC5byAR\x2bacieW6pu\x2b8jOeUqOS6juWBmuWlveS6i\x2bS8muW\x2bl\x2bWIsOaUr\x2baMgeOAguasoui\x2fjuWKoOWFpU1D57KJ5Lid576k77yM576k5Y\x2b3NDgwNzU3NDg1',
    'IzIg5L2\x2f55So5aOw5piOI\x2b\x2b8mg\x3d\x3d',
    'ICDor6XotYTmupDkuLrkuK3lm73niYjlrprliLbotYTmupDvvIzlm73pmYXniYjpg6jliIblip\x2fog73kuI3lj6\x2fnlKjjgILkvb\x2fnlKjor6XotYTmupDluKbmnaXnmoTkuIDliIflkI7mnpzljp\x2fkvZzogIXkuI3otJ\x2fkuIDliIfotKPku7s\x3d',
    '4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU',
    'IzMg5L2\x2f55So6K\x2b05piOI\x2b\x2b8mg\x3d\x3d',
    'ICAgIOKXjyDoj5zljZXlpITnkIYg4peP',
    'ICAxLueCueWHu\x2bWPs\x2bS4iuinkueahOKAnFdI4oCd5oyJ6ZKu5Y\x2bv5ouJ5byA5oq95bGJ',
    'ICAyLueCueWHu\x2bKAnO\x2b4veKAneaMiemSruWPr\x2bWFs\x2bmXreaKveWxieWPiuWIhuaUr1VJ',
    'ICAgIOKXjyDlip\x2fog73nroDku4sg4peP',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDnianlk4Hmt7vliqDvvJo\x3d',
    'ICAgIC3kvb\x2fnlKjliY3or7fnoa7kv53miYvkuIrmsqHmnInph43opoHnianlk4HvvIzlkKbliJnkvJrmuIXnqbo\x3d',
    'ICAgIC3ngrnlh7vlv6vmjbfmjInpkq7mt7vliqDnianlk4HvvIzmt7vliqDlkI7or7fmiZPlvIDog4zljIXlsIbnianlk4HmlL7lnKjlkIjmiJDmoI\x2flho3mi7\x2flh7rmnaU\x3d',
    'ICAgIC1JROihqOeUsWh0dHA6Ly9tYy56eXlhcHAuY29t5o\x2bQ5L6b77yM5omT5byA5pe25Y\x2bv6IO95pi\x2b56S656m655m977yM56iN562J5Y2z5Y\x2bv',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDnianlk4HpmYTprZQ\x3d',
    'ICAgIC3miYvmjIHmrablmagv6KOF5aSH77yM6YCJ5oup5a\x2b55bqU6ZmE6a2U57G75Z6L6L\x2bb6KGM5LiA6ZSu6ZmE6a2U',
    'ICAgIC3ngrnlh7vmjInpkq7pmYTprZTlkI7vvIzmiZPlvIDog4zljIXvvIzlsIbpmYTprZTnmoTnianlk4HmlL7lnKjlkIjmiJDmoI\x2flho3mi7\x2flh7rljbPlj6\x2fkvb\x2fnlKg\x3d',
    'ICAgIC3lvq7nq68yLjPniYjmnKzku6XkuIrlt7LpgILphY3kuK3lm73niYh2MS4xMg\x3d\x3d',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDoja\x2fmsLTmlYjmnpzvvJo\x3d',
    'ICAgIC3pgInmi6nlr7nlupTnsbvlnovov5vooYzmt7vliqDvvIzmgKXov6vkuLoyNTXnuqfvvIzlpJzop4blj4rot7Pot4Pmj5DljYfkuLoy57qn',
    'ICAgIC3nlLHkuo7lj6rmnInot7Pot4PjgIHlpJzop4bjgIHmgKXov6vmlYjmnpzmnInmlYjvvIzliKvnmoTpg73nlKjkuI3kuobvvIzmiYDku6XpgInpobnlvojlsJE\x3d',
    'ICDvvZxCZWhhdmlvcueOqeWutuihjOS4uiAtIOeOqeWutuS8oOmAge\x2b8mg\x3d\x3d',
    'ICAgIC3ngrnlh7vmjInpkq7vvIzlsLHog73liJflh7rmnI3liqHlmajnjqnlrrbvvIzngrnlh7vnjqnlrrblsLHog73kvKDpgIHliLDku5bnmoTkvY3nva4\x3d',
    'ICAgIC3liJfkuI3lh7rnjqnlrrbmmK\x2flkK\x2fliqjlmahCdWfvvIzph43nva7mnI3liqHlmajmlbDmja7ljbPlj68\x3d',
    'ICDvvZxCZWhhdmlvcueOqeWutuihjOS4uiAtIOiZmuepuuWbnuW8uQ\x3d\x3d',
    'ICAgIC3njqnlrrbmjonomZrnqbrmiJbpq5jlpITokL3kuIvml7bvvIzkvJroh6rliqjov5Tlm57kuIrmlrnlubPlj7DjgILpg6jliIbmnI3liqHlmajkvJrliKTlrprkuLrnnqznp7vvvIznlJroh7PliKTlrprkuLrpo57ooYzogIzooqtiYW4\x3d',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIOiEmuacrOWvvOWFpQ\x3d\x3d',
    'ICAgIC3or7flsIbkvaDopoHlr7zlhaXnmoRqc\x2baWh\x2bS7tuaUvuWcqCcnbWN0b29scy9zY3JpcHRzLycn5paH5Lu25aS577yM5omN6IO96K\x2b75Y\x2bW77yM5aaC5p6c5rKh55yL5YiwJydzY3JpcHRzJyfmlofku7blpLnor7foh6rlt7HliJvlu7rkuIDkuKo\x3d',
    'ICAgIC3pgInmi6nliJfooajmlofku7blkI7ngrnlh7vljbPlj6\x2flr7zlhaXvvIzlj6rog73lr7zlhaVqc\x2baWh\x2bS7tu\x2b8jOS9huS4jeaUr\x2baMgeeijuaipuiAheOAgU1hdHJpeOetiemDqOWIhmpz44CC5a\x2b85YWl5ZCO5peg5rOV5Y245LiL77yM6Zmk6Z2e5L2g6YeN5ZCv5ri45oiP',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIOeUn\x2beJqeaYvuihgA\x3d\x3d',
    'ICAgIC3mmL7ooYDmjIfpkojmiYDlr7nlrp7kvZPooYDph4\x2fvvIzmnI3liqHlmajosozkvLzml6DmlYg\x3d',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIE1peOeykuWtkA\x3d\x3d',
    'ICAgIC3ku4Xoh6rlt7Hlj6\x2fop4E\x3d',
    'ICAgIC3nspLlrZAxOumfs\x2bespuihjOi1sOi9qOi\x2fue\x2b9nOeykuWtkDI65bKp5rWG5YWr6IqS5pif6Zi1772c57KS5a2QMzrnu7\x2fojLXlj4zonrrml4vliIflibLvvZznspLlrZA0OueBq\x2beDn\x2bmbvueIhueCuOWkluaJqeWchueQgw\x3d\x3d',
    'IzQg5pu05paw5YaF5a65I\x2b\x2b8mg\x3d\x3d',
    'djIuMyA\x2bIHYyLjUgfCAxOTA0MTM\x3d',
    'MS7orr7orqHkuobmlrDnmoRVSeOAgVVJ5biD5bGA5L\x2bu5pS5',
    'Mi7nianlk4Hmt7vliqDvvJrkv67lpI3pg6jliIbmnLrlnovlhbPkuI3mjonnlYzpnaLnmoTpl67popjjgIHnibnmrorlgLzpu5jorqTorr7nva7kuLow',
    'My7pmYTprZTnvJbovpHvvJrmt7vliqDpkpPnq7\x2fpmYTprZTmlYjmnpzjgIHmt7vliqDmsLTkuIvlkbzlkLjvvIzmt7HmtbfmjqLntKLogIXvvIzmkZTokL3kv53miqTnrYnmlYjmnpw\x3d',
    'NC7oja\x2fmsLTmlYjmnpzvvJrmlYjmnpzmjIHnu63ml7bpl7Tlu7bplb\x2foh7MxMOWIhumSn\x2bOAgea3u\x2bWKoOa4hemZpOaViOaenOWKn\x2biDvQ\x3d\x3d',
    'NS7omZrnqbrlm57lvLnvvJrpgILlvZPosIPmlbTlj7LojrHlp4bmlYjmnpw\x3d',
    'Li4u',
    'djIuMCA\x2bIHYyLjMgfCAxOTA0MDY\x3d',
    'MS7kv67lpI3omZrnqbrlm57lvLnpl6rpgIDpl67popjjgIHkvJjljJblm57lvLnmnLrliLY\x3d',
    'djEuNCA\x2bIHYyLjAgfCAxOTA0MDI\x3d',
    'MS7orr7orqHkuoblhajmlrDnmoTnlYzpnaLvvIzngbDnmb3oibLnmoTorr7orqHpo47moLzvvIzmm7TnroDnuqbogIzkuI3mmK\x2foirHph4zog6Hkv48\x3d',
    '5paH5Lu25qCh6aqM56CB77ya',
    'WEhVd01EVTNYSFV3TURZMVhIVXdNRE15WEhVd01ESmxYSFV3TURNMQ\x3d\x3d',
    'bGVuZ3Ro',
    'QVF6',
    'QkR4',
    'Sk5B',
    'V3dB',
    'MTJ8MTN8MnwxNHwxN3w4fDE2fDB8M3w3fDEwfDl8NXwxMXwxNXw0fDZ8MQ\x3d\x3d',
    'clN2',
    'TU5x',
    'cnBn',
    'Vkxw',
    'eFZM',
    'SEJk',
    'IzgwZmZmZmZm',
    'd2hV',
    'cm1F',
    'Y2ZM',
    'TmtR',
    'eU1Z',
    'SXJk',
    'YmNN',
    'YXFW',
    'a0JQ',
    'NHwwfDF8M3w1fDd8Nnw4fDI\x3d',
    'eWVL',
    'Rm9K',
    '5qyi6L\x2bO5L2\x2f55So77yB54K55Ye7JydXSCcn5omT5byA5oq95bGJID4\x3d',
    '5b6u56uv5o\x2bQ6YaS5oKo77ya6YCJ5oup5Y2D5LiH5p2h77yM5a6J5YWo56ys5LiA5p2h77yM6KGM5Li65LiN6KeE6IyD77yM6LSm5Y\x2b35Lik6KGM5rOq77yB',
    'U0t6',
    'aGtG',
    'ZWZB',
    'c2V0QmFja2dyb3VuZA\x3d\x3d',
    'UnpN',
    'SU5P',
    'YXVJ',
    'QkFZ',
    'em1i',
    'SlpO',
    'Vk9O',
    '5Y6f5L2c6ICFUTogOTIxNjk2MjE2IOe7neWvueiHquWItgrvvZzlhY3otLnotYTmupDvvIzli7\x2fooqvkuozmlLnni5fpqpfvvZw\x3d',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'ZmluaXNo',
    '5p2D6ZmQ5pyJ6K\x2bv77yB',
    'd1ZH',
    'TnJD',
    'dHR3',
    'd1l4',
    'UExy',
    'bFlC',
    'aldJ',
    'c25T',
    'TkJS',
    'TFFP',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMvanNjYWNoZTIuNQ\x3d\x3d',
    'RmlsZQ\x3d\x3d',
    'Y3JlYXRlTmV3RmlsZQ\x3d\x3d',
    'V2Fq',
    'bUhQ',
    '5oKo55qE5paH5Lu25p2l5rqQ6Z2e5rOV77yM5rKh5pyJ5b6X5Yiw5Y6f5L2c6ICF5YWB6K646L2s5Y\x2bR55qE5p2D6ZmQ',
    'Vmd1',
    'IzY0ZmZmZmZm',
    'dVdj',
    'S2FJ',
    'bWxq',
    'cGhQ',
    'UHZy',
    'bW1k',
    'VEl6',
    'VkNr',
    'UXhm',
    'Wlhy',
    'THRN',
    'I2ZmYTdmZmQ4',
    'I2ZmZmZkM2Y4',
    'QlNE',
    'dFlu',
    'SGFB',
    'IzExOTA5MDkw',
    'T3By',
    'c1ZY',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'OHw0fDd8MXwzfDV8MHw2fDI\x3d',
    'c3BsaXQ\x3d',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'dGtX',
    'Yk5Z',
    'bGt3',
    'cUJZ',
    'elRp',
    'ZGlzbWlzcw\x3d\x3d',
    'TnRk',
    'RUx2',
    'MTB8MTN8N3w4fDl8MHwxMnwzfDJ8MTF8Nnw0fDF8NQ\x3d\x3d',
    'Q0h6',
    'a2p6',
    'WGNQ',
    'VXpy',
    'cG1j',
    'IzVhOTY5Njk2'
];
(function (_0x223725, _0x316977) {
    var _0x449ceb = function (_0x313fce) {
        while (--_0x313fce) {
            _0x223725['\x70\x75\x73\x68'](_0x223725['\x73\x68\x69\x66\x74']());
        }
    };
    _0x449ceb(++_0x316977);
}(_0xff02, 0x1ce));
var _0x2ff0 = function (_0x464831, _0xe10887) {
    _0x464831 = _0x464831 - 0x0;
    var _0x591e3f = _0xff02[_0x464831];
    if (_0x2ff0['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0xb31e84 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x34209e = _0xb31e84();
            var _0x237ebc = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x34209e['\x61\x74\x6f\x62'] || (_0x34209e['\x61\x74\x6f\x62'] = function (_0x27ab3e) {
                var _0x37585d = String(_0x27ab3e)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x4b8a0e = 0x0, _0xbfb0a6, _0x38e4f2, _0x52ba92 = 0x0, _0x117384 = ''; _0x38e4f2 = _0x37585d['\x63\x68\x61\x72\x41\x74'](_0x52ba92++); ~_0x38e4f2 && (_0xbfb0a6 = _0x4b8a0e % 0x4 ? _0xbfb0a6 * 0x40 + _0x38e4f2 : _0x38e4f2, _0x4b8a0e++ % 0x4) ? _0x117384 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0xbfb0a6 >> (-0x2 * _0x4b8a0e & 0x6)) : 0x0) {
                    _0x38e4f2 = _0x237ebc['\x69\x6e\x64\x65\x78\x4f\x66'](_0x38e4f2);
                }
                return _0x117384;
            });
        }());
        _0x2ff0['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x33d74f) {
            var _0x569b3b = atob(_0x33d74f);
            var _0x615aee = [];
            for (var _0x475448 = 0x0, _0x3b5a87 = _0x569b3b['\x6c\x65\x6e\x67\x74\x68']; _0x475448 < _0x3b5a87; _0x475448++) {
                _0x615aee += '\x25' + ('\x30\x30' + _0x569b3b['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x475448)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x615aee);
        };
        _0x2ff0['\x64\x61\x74\x61'] = {};
        _0x2ff0['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x2ff0['\x64\x61\x74\x61'][_0x464831] === undefined) {
        _0x591e3f = _0x2ff0['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x591e3f);
        _0x2ff0['\x64\x61\x74\x61'][_0x464831] = _0x591e3f;
    } else {
        _0x591e3f = _0x2ff0['\x64\x61\x74\x61'][_0x464831];
    }
    return _0x591e3f;
};
var vc1;
function TipMes(_0x25673e, _0x479a50) {
    var _0x483528 = {
        '\x71\x42\x59': function _0x2c5b42(_0x26db92, _0x46c5af) {
            return _0x26db92(_0x46c5af);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x367513 = {
                '\x7a\x54\x69': function _0x49af74(_0x36e1ef, _0x426893, _0x3013bc, _0x2e38e4, _0x379345) {
                    return _0x36e1ef(_0x426893, _0x3013bc, _0x2e38e4, _0x379345);
                },
                '\x45\x4c\x76': function _0x380581(_0x37b0db, _0x1f74c9) {
                    return _0x37b0db != _0x1f74c9;
                },
                '\x43\x48\x7a': function _0x409a41(_0x2e20bc, _0x4287d3, _0x51d64c, _0x7847b0, _0x30526e, _0x142e34, _0x1e4a6f, _0x4cb772, _0x4b2da4, _0x51c589) {
                    return _0x2e20bc(_0x4287d3, _0x51d64c, _0x7847b0, _0x30526e, _0x142e34, _0x1e4a6f, _0x4cb772, _0x4b2da4, _0x51c589);
                },
                '\x6b\x6a\x7a': function _0x388c92(_0x401985, _0x15294d) {
                    return _0x401985 * _0x15294d;
                },
                '\x58\x63\x50': function _0x1ffaaa(_0x3dad04) {
                    return _0x3dad04();
                },
                '\x55\x7a\x72': function _0xf2663(_0x51f1eb, _0x2c0c75) {
                    return _0x51f1eb * _0x2c0c75;
                },
                '\x70\x6d\x63': function _0x221ff6(_0x6db980) {
                    return _0x6db980();
                },
                '\x45\x45\x52': function _0x1b9e89(_0x2903f9, _0x5d6ffb, _0x9dd60, _0x15aa10, _0x5edf4f, _0x12984c, _0x36d9ca, _0xbb18e5, _0x42531c, _0x716af8, _0x6afa35, _0x1413c5) {
                    return _0x2903f9(_0x5d6ffb, _0x9dd60, _0x15aa10, _0x5edf4f, _0x12984c, _0x36d9ca, _0xbb18e5, _0x42531c, _0x716af8, _0x6afa35, _0x1413c5);
                },
                '\x55\x63\x71': function _0x4e2194(_0x29d63a, _0x16bac0) {
                    return _0x29d63a * _0x16bac0;
                },
                '\x79\x7a\x6d': function _0x25a347(_0x21c35c) {
                    return _0x21c35c();
                },
                '\x66\x68\x78': function _0x25cfa3(_0x16e1c2, _0x394e56) {
                    return _0x16e1c2 * _0x394e56;
                },
                '\x6b\x50\x6e': function _0x1eddad(_0x476f82, _0x26d46f, _0x1f0b7b, _0x4d30b7, _0x458d9f, _0x25c96b, _0x54ab29, _0x5b4346, _0x46ff07, _0x432cab) {
                    return _0x476f82(_0x26d46f, _0x1f0b7b, _0x4d30b7, _0x458d9f, _0x25c96b, _0x54ab29, _0x5b4346, _0x46ff07, _0x432cab);
                },
                '\x54\x54\x57': function _0x2658cb(_0x28c566, _0x39c72c) {
                    return _0x28c566 * _0x39c72c;
                },
                '\x71\x53\x43': function _0x181f5c(_0x405d2a) {
                    return _0x405d2a();
                },
                '\x73\x49\x58': function _0x59aab1(_0x2e1d9c, _0x2778ef) {
                    return _0x2e1d9c - _0x2778ef;
                },
                '\x48\x4e\x43': function _0x5e0b16(_0x49521d, _0x2f3eb3) {
                    return _0x49521d * _0x2f3eb3;
                },
                '\x6d\x72\x64': function _0x3dd188(_0x105788, _0x3a6dae) {
                    return _0x105788 * _0x3a6dae;
                },
                '\x54\x63\x6c': function _0x2295f2(_0x3688e1) {
                    return _0x3688e1();
                },
                '\x47\x67\x44': function _0x3c54f1(_0x11ed4a) {
                    return _0x11ed4a();
                },
                '\x42\x55\x64': function _0x1dd6c9(_0x320ab5, _0x59aba8) {
                    return _0x320ab5 - _0x59aba8;
                },
                '\x6c\x71\x51': function _0x5ac3c5(_0xe60c48, _0x520ee6) {
                    return _0xe60c48 * _0x520ee6;
                },
                '\x62\x77\x52': function _0x378ca3(_0x44259b) {
                    return _0x44259b();
                },
                '\x66\x53\x79': function _0x4ab90e(_0x470688, _0x312627) {
                    return _0x470688 * _0x312627;
                },
                '\x4f\x64\x52': function _0x348f0e(_0x54083a, _0x57fb8a) {
                    return _0x54083a * _0x57fb8a;
                },
                '\x49\x4f\x49': function _0x340440(_0x1b6107, _0x4f769d) {
                    return _0x1b6107 - _0x4f769d;
                },
                '\x6d\x4a\x55': function _0x115b51(_0x85b294, _0x1ad981) {
                    return _0x85b294 * _0x1ad981;
                },
                '\x63\x47\x50': function _0x342763(_0x520c11, _0x213fb2) {
                    return _0x520c11 * _0x213fb2;
                },
                '\x76\x57\x64': function _0x21bdb7(_0x3ff97c) {
                    return _0x3ff97c();
                },
                '\x63\x66\x6a': function _0x1fb253(_0x561307, _0x1477fd) {
                    return _0x561307 * _0x1477fd;
                },
                '\x74\x70\x56': function _0x1c2978(_0x4ed2cb, _0x4e0a55, _0x1347f6, _0xad2b98, _0x36ff88) {
                    return _0x4ed2cb(_0x4e0a55, _0x1347f6, _0xad2b98, _0x36ff88);
                },
                '\x52\x70\x58': function _0x1fba30(_0x4d7129, _0x5baafe) {
                    return _0x4d7129 + _0x5baafe;
                },
                '\x63\x53\x47': function _0x13932f(_0x33e96d) {
                    return _0x33e96d();
                },
                '\x54\x76\x41': function _0x3f57a2(_0x1a2b70) {
                    return _0x1a2b70();
                },
                '\x73\x5a\x69': function _0x44b3ee(_0x33b33b) {
                    return _0x33b33b();
                },
                '\x42\x6a\x58': function _0x131482(_0x3a0081, _0x20c731) {
                    return _0x3a0081(_0x20c731);
                },
                '\x43\x75\x73': function _0x19596e(_0x54c293, _0x424a69, _0x50df00, _0x1765bf, _0x38fe3f) {
                    return _0x54c293(_0x424a69, _0x50df00, _0x1765bf, _0x38fe3f);
                },
                '\x6e\x6d\x79': function _0x4e6c44(_0x4c8886, _0x12c1f5) {
                    return _0x4c8886 != _0x12c1f5;
                },
                '\x64\x51\x42': function _0x4fa7f7(_0x466f1a, _0x14fad2, _0x4fcc69, _0x45aea7, _0x25baf8) {
                    return _0x466f1a(_0x14fad2, _0x4fcc69, _0x45aea7, _0x25baf8);
                },
                '\x4b\x6e\x6b': function _0x3c1304(_0xdc7983, _0x202af1) {
                    return _0xdc7983(_0x202af1);
                }
            };
            var _0xab0b36 = _0x2ff0('0x3')[_0x2ff0('0x4')]('\x7c'), _0x170681 = 0x0;
            while (!![]) {
                switch (_0xab0b36[_0x170681++]) {
                case '0':
                    ;
                    continue;
                case '1':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            try {
                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1ad39a[_0x2ff0('0x7')](vc1, null)) {
                                            _0x1ad39a[_0x2ff0('0x8')](UIPlumb, v1, 0x0, -0x64, 0x12c);
                                            _0x1ad39a[_0x2ff0('0x9')](UIFadein, v2, 0x64, 0x0, 0x12c);
                                        }
                                        ;
                                    }
                                }), 0xdac);
                            } catch (_0x65cc6e) {
                                _0x483528[_0x2ff0('0xa')](print, _0x65cc6e);
                            }
                        }
                    }));
                    continue;
                case '2':
                    _0x367513[_0x2ff0('0xb')](UIFadein, v2, 0x0, 0x64, 0x12c);
                    continue;
                case '3':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            try {
                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1ad39a[_0x2ff0('0x7')](vc1, null)) {
                                            vc1[_0x2ff0('0xc')]();
                                            vc1 = null;
                                        }
                                        ;
                                    }
                                }), 0xed8);
                            } catch (_0x3abff7) {
                                _0x1ad39a[_0x2ff0('0xd')](print, _0x3abff7);
                            }
                        }
                    }));
                    continue;
                case '4':
                    if (_0x367513[_0x2ff0('0xe')](vc1, null)) {
                        vc1[_0x2ff0('0xc')]();
                        vc1 = null;
                    }
                    continue;
                case '5':
                    try {
                        var _0x4677e7 = _0x2ff0('0xf')[_0x2ff0('0x4')]('\x7c'), _0x24de11 = 0x0;
                        while (!![]) {
                            switch (_0x4677e7[_0x24de11++]) {
                            case '0':
                                v7 = _0x367513[_0x2ff0('0x10')](NewView, 'LL', _0x367513[_0x2ff0('0x11')](_0x367513[_0x2ff0('0x12')](W), 0.39), _0x367513[_0x2ff0('0x13')](_0x367513[_0x2ff0('0x14')](W), 0.01), 'CC', 0x1, 0x1, [
                                    'TB',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0xa,
                                    0x0,
                                    0x0
                                ], null);
                                continue;
                            case '1':
                                v1[_0x2ff0('0x17')](v7);
                                continue;
                            case '2':
                                v2[_0x2ff0('0x17')](v3);
                                continue;
                            case '3':
                                v1[_0x2ff0('0x17')](v2);
                                continue;
                            case '4':
                                v2[_0x2ff0('0x17')](v6);
                                continue;
                            case '5':
                                vc1 = _0x367513[_0x2ff0('0x18')](NewCDV, 0x2, null, 0x0, v1, _0x367513[_0x2ff0('0x19')](_0x367513[_0x2ff0('0x1a')](W), 0.4), _0x367513[_0x2ff0('0x1b')](_0x367513[_0x2ff0('0x1a')](H), 0.1), ![], ![], 'CT', 0x0, _0x367513[_0x2ff0('0x1b')](_0x367513[_0x2ff0('0x1a')](W), 0.008));
                                continue;
                            case '6':
                                v4[_0x2ff0('0x17')](vt1);
                                continue;
                            case '7':
                                v3 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x1d')](_0x367513[_0x2ff0('0x1e')](W), 0.39), _0x367513[_0x2ff0('0x1f')](_0x367513[_0x2ff0('0x20')](_0x367513[_0x2ff0('0x1e')](H), 0.1), _0x367513[_0x2ff0('0x20')](_0x367513[_0x2ff0('0x1e')](W), 0.01)), 'CC', 0x0, 0x1, [
                                    null,
                                    _0x2ff0('0x21')
                                ], 0x14, null);
                                continue;
                            case '8':
                                v4 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x1f')](_0x367513[_0x2ff0('0x22')](_0x367513[_0x2ff0('0x23')](W), 0.39), _0x367513[_0x2ff0('0x22')](_0x367513[_0x2ff0('0x24')](H), 0.1)), _0x367513[_0x2ff0('0x25')](_0x367513[_0x2ff0('0x26')](_0x367513[_0x2ff0('0x27')](H), 0.1), _0x367513[_0x2ff0('0x28')](_0x367513[_0x2ff0('0x27')](W), 0.01)), 'LC', 0x0, 0x2, null, null, null);
                                continue;
                            case '9':
                                v6 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x29')](_0x367513[_0x2ff0('0x27')](W), 0.01), _0x367513[_0x2ff0('0x2a')](_0x367513[_0x2ff0('0x2b')](_0x367513[_0x2ff0('0x27')](H), 0.1), _0x367513[_0x2ff0('0x2c')](_0x367513[_0x2ff0('0x2d')](W), 0.01)), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0x0,
                                    0x0,
                                    0xa
                                ], null);
                                continue;
                            case '10':
                                v1 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x2c')](_0x367513[_0x2ff0('0x2d')](W), 0.4), _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x2d')](H), 0.1), 'LT', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '11':
                                v3[_0x2ff0('0x17')](v4);
                                continue;
                            case '12':
                                vt1 = _0x367513[_0x2ff0('0x2f')](NewText, _0x367513[_0x2ff0('0x30')](_0x2ff0('0x31'), _0x25673e), 'CC', 0xc, _0x2ff0('0x32'));
                                continue;
                            case '13':
                                v2 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x33')](W), 0.4), _0x367513[_0x2ff0('0x2a')](_0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x34')](H), 0.1), _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x35')](W), 0.01)), 'CC', 0x0, 0x2, null, null, null);
                                continue;
                            }
                            break;
                        }
                    } catch (_0x38f086) {
                        _0x367513[_0x2ff0('0x36')](print, _0x38f086);
                    }
                    continue;
                case '6':
                    _0x367513[_0x2ff0('0x37')](UIPlumb, v1, -0x64, 0x0, 0x12c);
                    continue;
                case '7':
                    ;
                    continue;
                case '8':
                    var _0x1ad39a = {
                        '\x74\x6b\x57': function _0x1cc2f4(_0xf0a08c, _0x51a356) {
                            return _0x367513[_0x2ff0('0x38')](_0xf0a08c, _0x51a356);
                        },
                        '\x62\x4e\x59': function _0x55bf9a(_0x3d11da, _0xd449, _0x3b9987, _0x36dde3, _0x30c8b8) {
                            return _0x367513[_0x2ff0('0x37')](_0x3d11da, _0xd449, _0x3b9987, _0x36dde3, _0x30c8b8);
                        },
                        '\x6c\x6b\x77': function _0x1bbd22(_0x31fd2a, _0x4835b7, _0xb6fe5b, _0x212664, _0x47a420) {
                            return _0x367513[_0x2ff0('0x39')](_0x31fd2a, _0x4835b7, _0xb6fe5b, _0x212664, _0x47a420);
                        },
                        '\x4e\x74\x64': function _0x221391(_0x4a75ec, _0x9ad66f) {
                            return _0x367513[_0x2ff0('0x3a')](_0x4a75ec, _0x9ad66f);
                        }
                    };
                    continue;
                }
                break;
            }
        }
    }));
}
;
var kc1;
function Connect(_0x47ba2f) {
    var _0x2665dd = {
        '\x61\x6e\x59': function _0xf9eec(_0x1a11a4, _0x2b62ae) {
            return _0x1a11a4 != _0x2b62ae;
        },
        '\x4b\x4e\x48': function _0x3634ba(_0x16005d, _0x2688c5, _0x345b0e, _0x324079, _0x571da2) {
            return _0x16005d(_0x2688c5, _0x345b0e, _0x324079, _0x571da2);
        },
        '\x7a\x5a\x5a': function _0x5cf7ee(_0xe3034e, _0x46f51d, _0x22a837, _0x758d71, _0x2c592c) {
            return _0xe3034e(_0x46f51d, _0x22a837, _0x758d71, _0x2c592c);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x141307 = {
                '\x43\x51\x48': function _0x3c8dec(_0x36a92f, _0x395ed1) {
                    return _0x36a92f != _0x395ed1;
                },
                '\x51\x78\x77': function _0xa1a468(_0x36a2f4, _0x278c3e, _0x2f81bc, _0xf1ba7c, _0x4d5c31, _0x4565ae, _0xeff0d6, _0x3d3d68, _0x140a7d, _0x1f4ed2) {
                    return _0x36a2f4(_0x278c3e, _0x2f81bc, _0xf1ba7c, _0x4d5c31, _0x4565ae, _0xeff0d6, _0x3d3d68, _0x140a7d, _0x1f4ed2);
                },
                '\x6c\x6a\x52': function _0x520b96(_0x4777ef, _0x352556) {
                    return _0x4777ef - _0x352556;
                },
                '\x5a\x77\x4d': function _0x56e147(_0x3ec7ae, _0x4f6764) {
                    return _0x3ec7ae * _0x4f6764;
                },
                '\x56\x6e\x65': function _0x4de894(_0x162f2c) {
                    return _0x162f2c();
                },
                '\x72\x45\x4a': function _0x3e2eb6(_0x41232a) {
                    return _0x41232a();
                },
                '\x55\x52\x54': function _0x44d6bb(_0x50e4f5, _0x3f73fe) {
                    return _0x50e4f5 * _0x3f73fe;
                },
                '\x4f\x4c\x78': function _0x4bcb9d(_0x1dcdb4) {
                    return _0x1dcdb4();
                },
                '\x46\x43\x76': function _0x499249(_0x1570c1, _0x458966, _0x366c30, _0x54f52b, _0x1ceda7, _0x21f790, _0x1b35cc, _0x271ca7, _0xe92b73, _0x402ca5, _0x39c27d, _0x4cbf69) {
                    return _0x1570c1(_0x458966, _0x366c30, _0x54f52b, _0x1ceda7, _0x21f790, _0x1b35cc, _0x271ca7, _0xe92b73, _0x402ca5, _0x39c27d, _0x4cbf69);
                },
                '\x66\x64\x66': function _0x30c8a9(_0x26e002) {
                    return _0x26e002();
                },
                '\x4b\x54\x74': function _0x498d49(_0x34635b) {
                    return _0x34635b();
                },
                '\x5a\x4a\x62': function _0x146ff6(_0x3c56e7, _0x513ed7, _0x4ce6f8, _0x4cb3e6, _0x270ecd, _0x4cea86, _0x3f867d, _0x308f6a, _0x1ebaf2, _0x2918f5) {
                    return _0x3c56e7(_0x513ed7, _0x4ce6f8, _0x4cb3e6, _0x270ecd, _0x4cea86, _0x3f867d, _0x308f6a, _0x1ebaf2, _0x2918f5);
                },
                '\x75\x56\x45': function _0x11e2c8(_0x11d79a) {
                    return _0x11d79a();
                },
                '\x6b\x50\x48': function _0x25959c(_0x491370, _0x4e651b, _0x40a3eb, _0x5543fd, _0x904d86, _0x517c85, _0x1cfbc9, _0x25e96d, _0x179de8, _0x945c6d) {
                    return _0x491370(_0x4e651b, _0x40a3eb, _0x5543fd, _0x904d86, _0x517c85, _0x1cfbc9, _0x25e96d, _0x179de8, _0x945c6d);
                },
                '\x47\x79\x50': function _0x167d6e(_0x193631, _0x4a360f) {
                    return _0x193631 * _0x4a360f;
                },
                '\x6f\x75\x44': function _0x127852(_0x36f961) {
                    return _0x36f961();
                },
                '\x6a\x78\x50': function _0x5ee42c(_0x58b6e1, _0x3181c5) {
                    return _0x58b6e1 * _0x3181c5;
                },
                '\x4c\x75\x5a': function _0x6b0e01(_0x41d09c) {
                    return _0x41d09c();
                },
                '\x65\x45\x55': function _0x33894e(_0x436e9c) {
                    return _0x436e9c();
                },
                '\x45\x43\x7a': function _0x565528(_0x3507cf, _0x30aae9) {
                    return _0x3507cf * _0x30aae9;
                },
                '\x4a\x61\x48': function _0x154d7d(_0x1ded48) {
                    return _0x1ded48();
                },
                '\x55\x50\x4a': function _0x20f352(_0x249f62, _0x39ee5d) {
                    return _0x249f62 * _0x39ee5d;
                },
                '\x7a\x58\x6f': function _0x5c8b38(_0x1d1bdb, _0x3bc472, _0xd790f8, _0x40a41b, _0x51bd43, _0x1dd728, _0x2610d7, _0x225372, _0x1422b8, _0x5c5613) {
                    return _0x1d1bdb(_0x3bc472, _0xd790f8, _0x40a41b, _0x51bd43, _0x1dd728, _0x2610d7, _0x225372, _0x1422b8, _0x5c5613);
                },
                '\x4f\x79\x66': function _0x27fba5(_0x35a088, _0x3233ee) {
                    return _0x35a088 * _0x3233ee;
                },
                '\x77\x4e\x66': function _0x439a3f(_0x25ec23) {
                    return _0x25ec23();
                },
                '\x5a\x6b\x6d': function _0x5f07b5(_0x2bcafe) {
                    return _0x2bcafe();
                },
                '\x43\x4c\x69': function _0x29d0a8(_0x34f497, _0x393bbb) {
                    return _0x34f497 * _0x393bbb;
                },
                '\x55\x57\x70': function _0x24e9a8(_0x2d93c2) {
                    return _0x2d93c2();
                },
                '\x76\x6f\x4b': function _0x2ac557(_0x414c4a, _0xfe294e, _0x3fe3d5, _0xad21f1, _0x52894b) {
                    return _0x414c4a(_0xfe294e, _0x3fe3d5, _0xad21f1, _0x52894b);
                },
                '\x47\x63\x78': function _0x5d1c8c(_0x219d54, _0x2aa483) {
                    return _0x219d54(_0x2aa483);
                },
                '\x48\x6e\x70': function _0x1d8ea7(_0x3dc24c, _0x100093, _0x31677c, _0x48c075, _0x41bb10) {
                    return _0x3dc24c(_0x100093, _0x31677c, _0x48c075, _0x41bb10);
                },
                '\x6d\x79\x41': function _0xdecddd(_0xaff5a1, _0x47515e) {
                    return _0xaff5a1 != _0x47515e;
                },
                '\x76\x50\x75': function _0x4b00dd(_0x2b35fb, _0x4fb8a0, _0x5f0c26, _0x1db02e, _0x562c32) {
                    return _0x2b35fb(_0x4fb8a0, _0x5f0c26, _0x1db02e, _0x562c32);
                }
            };
            var _0x302fb2 = _0x2ff0('0x3b')[_0x2ff0('0x4')]('\x7c'), _0x1b5de3 = 0x0;
            while (!![]) {
                switch (_0x302fb2[_0x1b5de3++]) {
                case '0':
                    if (_0x141307[_0x2ff0('0x3c')](kc1, null)) {
                        kc1[_0x2ff0('0xc')]();
                    }
                    continue;
                case '1':
                    try {
                        var _0x18092f = _0x2ff0('0x3d')[_0x2ff0('0x4')]('\x7c'), _0x5ca08f = 0x0;
                        while (!![]) {
                            switch (_0x18092f[_0x5ca08f++]) {
                            case '0':
                                k4 = _0x141307[_0x2ff0('0x3e')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x40')](_0x141307[_0x2ff0('0x41')](W), 0.5), _0x141307[_0x2ff0('0x40')](_0x141307[_0x2ff0('0x42')](H), 0.01)), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x44')](H), 0.01), 'CC', 0x1, 0x1, [
                                    'TB',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0xa,
                                    0x0,
                                    0x0
                                ], null);
                                continue;
                            case '1':
                                kc1 = _0x141307[_0x2ff0('0x45')](NewCDV, 0x2, null, 0x0, k1, _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x46')](W), 0.5), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x47')](H), 0.65), ![], ![], 'CB', 0x0, 0x0);
                                continue;
                            case '2':
                                k1 = _0x141307[_0x2ff0('0x48')](NewView, 'LL', _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x49')](W), 0.5), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x49')](H), 0.7), 'LT', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '3':
                                k2 = _0x141307[_0x2ff0('0x4a')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x4b')](_0x141307[_0x2ff0('0x4c')](W), 0.5), _0x141307[_0x2ff0('0x4d')](_0x141307[_0x2ff0('0x4e')](H), 0.01)), _0x141307[_0x2ff0('0x4d')](_0x141307[_0x2ff0('0x4f')](H), 0.14), 'CC', 0x1, 0x1, [
                                    'RB',
                                    _0x2ff0('0x50'),
                                    _0x2ff0('0x51')
                                ], 0x14, null);
                                continue;
                            case '4':
                                k1$[_0x2ff0('0x17')](k2$);
                                continue;
                            case '5':
                                k1$ = _0x141307[_0x2ff0('0x4a')](NewView, 'LL', _0x141307[_0x2ff0('0x52')](_0x141307[_0x2ff0('0x53')](W), 0.5), _0x141307[_0x2ff0('0x54')](_0x141307[_0x2ff0('0x53')](H), 0.14), 'LT', 0x0, 0x2, null, 0x0, null);
                                continue;
                            case '6':
                                k1[_0x2ff0('0x17')](k1$);
                                continue;
                            case '7':
                                k2$ = _0x141307[_0x2ff0('0x55')](NewView, 'LL', _0x141307[_0x2ff0('0x56')](_0x141307[_0x2ff0('0x57')](H), 0.01), _0x141307[_0x2ff0('0x56')](_0x141307[_0x2ff0('0x58')](H), 0.14), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0x0,
                                    0x0,
                                    0xa
                                ], null);
                                continue;
                            case '8':
                                k1[_0x2ff0('0x17')](k4);
                                continue;
                            case '9':
                                k1$[_0x2ff0('0x17')](k2);
                                continue;
                            case '10':
                                k3 = _0x141307[_0x2ff0('0x55')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x58')](W), 0.5), _0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.02)), _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.15), _0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.02)), 'CC', 0x1, 0x1, [
                                    'RB',
                                    _0x2ff0('0x5b')
                                ], 0x14, null);
                                continue;
                            case '11':
                                k3[_0x2ff0('0x17')](kt1);
                                continue;
                            case '12':
                                k2[_0x2ff0('0x17')](k3);
                                continue;
                            case '13':
                                kt1 = _0x141307[_0x2ff0('0x5c')](NewText, _0x47ba2f, 'CC', null, _0x2ff0('0x32'));
                                continue;
                            }
                            break;
                        }
                    } catch (_0x2d72) {
                        _0x141307[_0x2ff0('0x5d')](print, _0x2d72);
                    }
                    continue;
                case '2':
                    ;
                    continue;
                case '3':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            var _0x517dfe = {
                                '\x76\x61\x54': function _0xf44c0f(_0x216a32, _0x33b5ea) {
                                    return _0x2665dd[_0x2ff0('0x5e')](_0x216a32, _0x33b5ea);
                                },
                                '\x59\x53\x4f': function _0x1ae3e0(_0x2aeac2, _0x31896a, _0x25aeb9, _0x367fec, _0x1a06af) {
                                    return _0x2665dd[_0x2ff0('0x5f')](_0x2aeac2, _0x31896a, _0x25aeb9, _0x367fec, _0x1a06af);
                                },
                                '\x73\x75\x54': function _0x48a0b2(_0x4c54f3, _0x159b44, _0x1173fb, _0x14a97e, _0x2b436f) {
                                    return _0x2665dd[_0x2ff0('0x60')](_0x4c54f3, _0x159b44, _0x1173fb, _0x14a97e, _0x2b436f);
                                }
                            };
                            new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                '\x72\x75\x6e': function () {
                                    if (_0x517dfe[_0x2ff0('0x61')](kc1, null)) {
                                        _0x517dfe[_0x2ff0('0x62')](UIPlumb, k1, 0x0, 0x28, 0x96);
                                        _0x517dfe[_0x2ff0('0x63')](UIFadein, k1$, 0x64, 0x0, 0x96);
                                    }
                                    ;
                                }
                            }), 0x1388);
                        }
                    }));
                    continue;
                case '4':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                '\x72\x75\x6e': function () {
                                    if (_0x514d32[_0x2ff0('0x64')](kc1, null)) {
                                        kc1[_0x2ff0('0xc')]();
                                    }
                                    ;
                                }
                            }), 0x141e);
                        }
                    }));
                    continue;
                case '5':
                    _0x141307[_0x2ff0('0x65')](UIFadein, k1$, 0x0, 0x64, 0x96);
                    continue;
                case '6':
                    ;
                    continue;
                case '7':
                    var _0x514d32 = {
                        '\x75\x7a\x71': function _0x374c16(_0x44a236, _0x15837f) {
                            return _0x141307[_0x2ff0('0x66')](_0x44a236, _0x15837f);
                        }
                    };
                    continue;
                case '8':
                    _0x141307[_0x2ff0('0x67')](UIPlumb, k1, 0x28, 0x0, 0x96);
                    continue;
                }
                break;
            }
        }
    }));
}
;
var jst1 = [
    _0x2ff0('0x68'),
    _0x2ff0('0x69'),
    '',
    _0x2ff0('0x6a'),
    _0x2ff0('0x6b'),
    _0x2ff0('0x6c'),
    '',
    _0x2ff0('0x6d'),
    _0x2ff0('0x6e'),
    '',
    _0x2ff0('0x6f'),
    _0x2ff0('0x70'),
    _0x2ff0('0x71'),
    _0x2ff0('0x72'),
    '',
    _0x2ff0('0x73'),
    '',
    _0x2ff0('0x74'),
    _0x2ff0('0x75'),
    '',
    _0x2ff0('0x76'),
    '',
    _0x2ff0('0x77'),
    _0x2ff0('0x78'),
    _0x2ff0('0x79'),
    _0x2ff0('0x7a'),
    '',
    _0x2ff0('0x7b'),
    _0x2ff0('0x7c'),
    _0x2ff0('0x7d'),
    _0x2ff0('0x7e'),
    '',
    _0x2ff0('0x7f'),
    _0x2ff0('0x80'),
    _0x2ff0('0x81'),
    '',
    _0x2ff0('0x82'),
    _0x2ff0('0x83'),
    _0x2ff0('0x84'),
    '',
    _0x2ff0('0x85'),
    _0x2ff0('0x86'),
    '',
    _0x2ff0('0x87'),
    _0x2ff0('0x88'),
    _0x2ff0('0x89'),
    '',
    _0x2ff0('0x8a'),
    _0x2ff0('0x8b'),
    '',
    _0x2ff0('0x8c'),
    _0x2ff0('0x8d'),
    _0x2ff0('0x8e'),
    '',
    _0x2ff0('0x71'),
    _0x2ff0('0x8f'),
    _0x2ff0('0x90'),
    _0x2ff0('0x91'),
    _0x2ff0('0x92'),
    _0x2ff0('0x93'),
    _0x2ff0('0x94'),
    _0x2ff0('0x95'),
    _0x2ff0('0x96'),
    '',
    _0x2ff0('0x97'),
    _0x2ff0('0x98'),
    _0x2ff0('0x96'),
    '',
    _0x2ff0('0x99'),
    _0x2ff0('0x9a'),
    _0x2ff0('0x96'),
    '',
    '',
    '',
    _0x2ff0('0x9b'),
    _0x2ff0('0x9c')
];
var jst2 = [''];
for (a = 0x0; a < jst1[_0x2ff0('0x9d')]; a++) {
    jst2 = jst2 + jst1[a] + '\x0a';
}
;
var nc1;
function jslog(_0x2ced80) {
    var _0x25c054 = {
        '\x77\x68\x55': function _0x3b0a21(_0x9b57e9, _0x143077, _0x49e52a, _0x2a4979, _0x73d8c5, _0x583a3f, _0x341085, _0x4e54c3, _0x86864a, _0x513043) {
            return _0x9b57e9(_0x143077, _0x49e52a, _0x2a4979, _0x73d8c5, _0x583a3f, _0x341085, _0x4e54c3, _0x86864a, _0x513043);
        },
        '\x72\x6d\x45': function _0x55a5d4(_0x3d8de6, _0x1a5e5c) {
            return _0x3d8de6 * _0x1a5e5c;
        },
        '\x63\x66\x4c': function _0x322b6b(_0xe4c32d) {
            return _0xe4c32d();
        },
        '\x4e\x6b\x51': function _0x5b237a(_0x174c05, _0x345818) {
            return _0x174c05(_0x345818);
        },
        '\x79\x4d\x59': function _0x5a5902(_0x25e0ce, _0x2df143, _0x296a04, _0x3ecd3a, _0x4917f3, _0xa8ea76, _0x4b646a, _0xf550c7, _0xf53367, _0x2f1679, _0x2d2872, _0x337659) {
            return _0x25e0ce(_0x2df143, _0x296a04, _0x3ecd3a, _0x4917f3, _0xa8ea76, _0x4b646a, _0xf550c7, _0xf53367, _0x2f1679, _0x2d2872, _0x337659);
        },
        '\x49\x72\x64': function _0x2b05ad(_0x4bd3cd) {
            return _0x4bd3cd();
        },
        '\x62\x63\x4d': function _0x2dacbc(_0x121c2d, _0x3b2c56, _0x251d40, _0x177a0a, _0x11d148) {
            return _0x121c2d(_0x3b2c56, _0x251d40, _0x177a0a, _0x11d148);
        },
        '\x61\x71\x56': function _0x9e41d2(_0x13f86c, _0x3f1909) {
            return _0x13f86c(_0x3f1909);
        },
        '\x6b\x42\x50': function _0x3d2c2d(_0x5b279f, _0x4db99f) {
            return _0x5b279f == _0x4db99f;
        },
        '\x79\x65\x4b': function _0x4d9fe9(_0x57deea) {
            return _0x57deea();
        },
        '\x46\x6f\x4a': function _0x28a3af(_0x2132fd, _0x4d89ae) {
            return _0x2132fd(_0x4d89ae);
        },
        '\x77\x56\x47': function _0x67e9f1(_0xa5c959, _0x41a4fe) {
            return _0xa5c959 != _0x41a4fe;
        },
        '\x4e\x72\x43': function _0x8e2b44(_0x595165, _0x330da1) {
            return _0x595165 == _0x330da1;
        },
        '\x41\x51\x7a': function _0x11bb43(_0x4ef181, _0x25b0be) {
            return _0x4ef181 == _0x25b0be;
        },
        '\x42\x44\x78': function _0x23aff4(_0x4c052c, _0x387033) {
            return _0x4c052c(_0x387033);
        },
        '\x4a\x4e\x41': function _0x263d16(_0x35bcc2, _0x360a1d) {
            return _0x35bcc2 + _0x360a1d;
        },
        '\x57\x77\x41': function _0x1e8925(_0xf0cfd) {
            return _0xf0cfd();
        },
        '\x72\x53\x76': function _0x3ba3be(_0xbce680, _0x189e59, _0x717ba5, _0x3b8022, _0x53ed62, _0x3c3aa1, _0x232172, _0x28a1f2, _0x3e0079, _0x3bb0d9) {
            return _0xbce680(_0x189e59, _0x717ba5, _0x3b8022, _0x53ed62, _0x3c3aa1, _0x232172, _0x28a1f2, _0x3e0079, _0x3bb0d9);
        },
        '\x4d\x4e\x71': function _0x5933d5(_0x3f77bf, _0x3a97ed) {
            return _0x3f77bf * _0x3a97ed;
        },
        '\x72\x70\x67': function _0x1db25c(_0x177311, _0x1497a2) {
            return _0x177311 - _0x1497a2;
        },
        '\x56\x4c\x70': function _0x408ede(_0x34ff51, _0x5c00a5) {
            return _0x34ff51 * _0x5c00a5;
        },
        '\x78\x56\x4c': function _0x5cf6e5(_0x2ced7e, _0x1c415b) {
            return _0x2ced7e * _0x1c415b;
        },
        '\x48\x42\x64': function _0x4b6b92(_0x207836) {
            return _0x207836();
        },
        '\x56\x67\x75': function _0x42bb40(_0x328e3f, _0x28710b, _0x4adb35, _0x55ef21, _0x164316, _0x3f2b70, _0x50ff0b, _0x2c9be1, _0x3ca1d2, _0xfaa8aa, _0x10d92d, _0x2d0511) {
            return _0x328e3f(_0x28710b, _0x4adb35, _0x55ef21, _0x164316, _0x3f2b70, _0x50ff0b, _0x2c9be1, _0x3ca1d2, _0xfaa8aa, _0x10d92d, _0x2d0511);
        },
        '\x75\x57\x63': function _0x2deed8(_0x37a008, _0x315b60, _0x13eb1d, _0xd2e102, _0x30815a, _0x393a9d, _0x44a21f, _0x580e2a, _0xd55949, _0x449b25) {
            return _0x37a008(_0x315b60, _0x13eb1d, _0xd2e102, _0x30815a, _0x393a9d, _0x44a21f, _0x580e2a, _0xd55949, _0x449b25);
        },
        '\x4b\x61\x49': function _0x338f7c(_0x56c8b0) {
            return _0x56c8b0();
        },
        '\x6d\x6c\x6a': function _0x503532(_0x51fd5a, _0x3b4a44, _0x1c9410, _0x3a3421, _0xf32b5) {
            return _0x51fd5a(_0x3b4a44, _0x1c9410, _0x3a3421, _0xf32b5);
        },
        '\x70\x68\x50': function _0x35f56a(_0x3b5bb0, _0x553f06, _0xf78cc7, _0x243c80, _0x2ba48b) {
            return _0x3b5bb0(_0x553f06, _0xf78cc7, _0x243c80, _0x2ba48b);
        },
        '\x50\x76\x72': function _0x45e733(_0x3ccdb0, _0x323e3f) {
            return _0x3ccdb0 * _0x323e3f;
        },
        '\x6d\x6d\x64': function _0x87e108(_0x157dea, _0x4ecae8) {
            return _0x157dea - _0x4ecae8;
        },
        '\x54\x49\x7a': function _0x260d20(_0x2ecf09, _0x521c6a) {
            return _0x2ecf09 * _0x521c6a;
        },
        '\x56\x43\x6b': function _0x19704b(_0xc60c85) {
            return _0xc60c85();
        },
        '\x51\x78\x66': function _0xc12c47(_0x44872e) {
            return _0x44872e();
        },
        '\x5a\x58\x72': function _0x1423c9(_0x3f58a2, _0x7892aa) {
            return _0x3f58a2 * _0x7892aa;
        },
        '\x4c\x74\x4d': function _0x27aab2(_0x127c6a) {
            return _0x127c6a();
        },
        '\x42\x53\x44': function _0x201434(_0xe2033c, _0x4eca59, _0x1e7a86, _0x39cc2d, _0x24e9e2, _0x55b743, _0x3b3353, _0x52119e, _0x4ff8d7, _0x54b075) {
            return _0xe2033c(_0x4eca59, _0x1e7a86, _0x39cc2d, _0x24e9e2, _0x55b743, _0x3b3353, _0x52119e, _0x4ff8d7, _0x54b075);
        },
        '\x74\x59\x6e': function _0x5b2f9b(_0x5d9aff) {
            return _0x5d9aff();
        },
        '\x48\x61\x41': function _0x1f5556(_0x263e7d, _0x3e01a5) {
            return _0x263e7d * _0x3e01a5;
        },
        '\x4f\x70\x72': function _0x5fe61(_0x3a1265, _0x2c4982) {
            return _0x3a1265(_0x2c4982);
        },
        '\x73\x56\x58': function _0x47baef(_0x406f7c, _0x4ba4df, _0x128218, _0x7707b4, _0xfab8e4) {
            return _0x406f7c(_0x4ba4df, _0x128218, _0x7707b4, _0xfab8e4);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x42b56d = {
                '\x74\x74\x77': function _0x2ac14c(_0x25b25d, _0x230e62) {
                    return _0x25c054[_0x2ff0('0x9e')](_0x25b25d, _0x230e62);
                },
                '\x77\x59\x78': function _0x5de809(_0x16dcfe, _0x224c0b) {
                    return _0x25c054[_0x2ff0('0x9f')](_0x16dcfe, _0x224c0b);
                },
                '\x50\x4c\x72': function _0xde18a1(_0xd0e229, _0x382099) {
                    return _0x25c054[_0x2ff0('0xa0')](_0xd0e229, _0x382099);
                },
                '\x6c\x59\x42': function _0x279c1e(_0x177372) {
                    return _0x25c054[_0x2ff0('0xa1')](_0x177372);
                },
                '\x6a\x57\x49': function _0x766e1(_0x4314d5, _0x1b3613) {
                    return _0x25c054[_0x2ff0('0x9f')](_0x4314d5, _0x1b3613);
                }
            };
            try {
                var _0x44e0f4 = _0x2ff0('0xa2')[_0x2ff0('0x4')]('\x7c'), _0x1dedf6 = 0x0;
                while (!![]) {
                    switch (_0x44e0f4[_0x1dedf6++]) {
                    case '0':
                        n5 = _0x25c054[_0x2ff0('0xa3')](NewView, 'LL', _0x25c054[_0x2ff0('0xa4')](_0x25c054[_0x2ff0('0xa1')](W), 0.619), _0x25c054[_0x2ff0('0xa5')](_0x25c054[_0x2ff0('0xa6')](_0x25c054[_0x2ff0('0xa1')](H), 0.1), _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xa8')](W), 0.01)), 'CC', 0x1, 0x1, [
                            null,
                            _0x2ff0('0xa9')
                        ], 0xf, function (_0x5de261) {
                            var _0x2699bb = {
                                '\x53\x4b\x7a': function _0x15f3e3(_0x5cdf87, _0x4cfe72, _0x582f46, _0x4f7933, _0x1c1db0, _0x74eef5, _0x235b11, _0xd25c9e, _0x57210c, _0xde7ab4) {
                                    return _0x25c054[_0x2ff0('0xaa')](_0x5cdf87, _0x4cfe72, _0x582f46, _0x4f7933, _0x1c1db0, _0x74eef5, _0x235b11, _0xd25c9e, _0x57210c, _0xde7ab4);
                                },
                                '\x68\x6b\x46': function _0x2e7af3(_0x41b025, _0x5f1433) {
                                    return _0x25c054[_0x2ff0('0xab')](_0x41b025, _0x5f1433);
                                },
                                '\x65\x66\x41': function _0x336d8b(_0x1da797) {
                                    return _0x25c054[_0x2ff0('0xac')](_0x1da797);
                                },
                                '\x52\x7a\x4d': function _0x31abaf(_0x98445f, _0x1f2ae8) {
                                    return _0x25c054[_0x2ff0('0xad')](_0x98445f, _0x1f2ae8);
                                },
                                '\x49\x4e\x4f': function _0x519e74(_0x4a7b4c, _0x1150d3, _0x281b7e, _0x498a42, _0x5440c6, _0x5c2c99, _0x6fc4d2, _0x5dfe95, _0x3fcdb7, _0x43ec09, _0x40e2b5, _0x11d016) {
                                    return _0x25c054[_0x2ff0('0xae')](_0x4a7b4c, _0x1150d3, _0x281b7e, _0x498a42, _0x5440c6, _0x5c2c99, _0x6fc4d2, _0x5dfe95, _0x3fcdb7, _0x43ec09, _0x40e2b5, _0x11d016);
                                },
                                '\x61\x75\x49': function _0x55df12(_0x3276c4, _0x3a82ca) {
                                    return _0x25c054[_0x2ff0('0xab')](_0x3276c4, _0x3a82ca);
                                },
                                '\x42\x41\x59': function _0x7ecc13(_0xce8f5b, _0x51b170) {
                                    return _0x25c054[_0x2ff0('0xab')](_0xce8f5b, _0x51b170);
                                },
                                '\x7a\x6d\x62': function _0x301ff6(_0x32c7ce) {
                                    return _0x25c054[_0x2ff0('0xaf')](_0x32c7ce);
                                },
                                '\x4a\x5a\x4e': function _0x363105(_0x356121, _0x3d10a0, _0x531b4c, _0x32318d, _0xf2f4f8) {
                                    return _0x25c054[_0x2ff0('0xb0')](_0x356121, _0x3d10a0, _0x531b4c, _0x32318d, _0xf2f4f8);
                                },
                                '\x56\x4f\x4e': function _0x369daf(_0x450d80, _0x1bb708) {
                                    return _0x25c054[_0x2ff0('0xb1')](_0x450d80, _0x1bb708);
                                }
                            };
                            nc1[_0x2ff0('0xc')]();
                            if (_0x25c054[_0x2ff0('0xb2')](_0x2ced80, jst2)) {
                                var _0x17fead = _0x2ff0('0xb3')[_0x2ff0('0x4')]('\x7c'), _0x5b8683 = 0x0;
                                while (!![]) {
                                    switch (_0x17fead[_0x5b8683++]) {
                                    case '0':
                                        _0x25c054[_0x2ff0('0xb4')](UI1);
                                        continue;
                                    case '1':
                                        _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xb6'));
                                        continue;
                                    case '2':
                                        ;
                                        continue;
                                    case '3':
                                        _0x25c054[_0x2ff0('0xb5')](Connect, _0x2ff0('0xb7'));
                                        continue;
                                    case '4':
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                try {
                                                    n0$ = _0x2699bb[_0x2ff0('0xb8')](NewView, 'LL', _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), 'CC', 0x1, 0x2, null, 0x0, null);
                                                    n0$[_0x2ff0('0xbb')](_0x2699bb[_0x2ff0('0xbc')](BaseT, Base));
                                                    nc0$ = _0x2699bb[_0x2ff0('0xbd')](NewCDV, 0x2, null, 0x0, n0$, _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), _0x2699bb[_0x2ff0('0xbe')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), ![], ![], 'CT', 0x0, _0x2699bb[_0x2ff0('0xbf')](_0x2699bb[_0x2ff0('0xc0')](H), 0.02));
                                                } catch (_0x39a639) {
                                                    _0x2699bb[_0x2ff0('0xbc')](print, _0x39a639);
                                                }
                                                ;
                                                _0x2699bb[_0x2ff0('0xc1')](UIPlumb, n0$, -0x64, 0x0, 0x1f4);
                                            }
                                        }));
                                        continue;
                                    case '5':
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        _0x2699bb[_0x2ff0('0xc2')](Connect, _0x2ff0('0xc3'));
                                                    }
                                                }), 0x141e);
                                            }
                                        }));
                                        continue;
                                    case '6':
                                        ;
                                        continue;
                                    case '7':
                                        if (_0x25c054[_0x2ff0('0xb2')](i, 0x5) && _0x25c054[_0x2ff0('0xb2')](l, -0x1)) {
                                        } else {
                                            ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                '\x72\x75\x6e': function () {
                                                    new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                        '\x72\x75\x6e': function () {
                                                            var _0x5d6c8b = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                            _0x5d6c8b[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                                '\x72\x75\x6e': function () {
                                                                    _0x5d6c8b[_0x2ff0('0xc9')]();
                                                                }
                                                            }));
                                                        }
                                                    }), 0x1388);
                                                }
                                            }));
                                            _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xca'));
                                        }
                                        continue;
                                    case '8':
                                        if (_0x25c054[_0x2ff0('0xcb')](mod, 0x2)) {
                                            ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                '\x72\x75\x6e': function () {
                                                    new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                        '\x72\x75\x6e': function () {
                                                            var _0x73e0c5 = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                            _0x73e0c5[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                                '\x72\x75\x6e': function () {
                                                                    _0x73e0c5[_0x2ff0('0xc9')]();
                                                                }
                                                            }));
                                                        }
                                                    }), 0x1388);
                                                }
                                            }));
                                            _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xca'));
                                        }
                                        continue;
                                    }
                                    break;
                                }
                            } else if (_0x25c054[_0x2ff0('0xb2')](_0x2ced80, jst4)) {
                                if (_0x25c054[_0x2ff0('0xcc')](mod, 0x0)) {
                                    if (_0x25c054[_0x2ff0('0x9e')](i, 0x5) && _0x25c054[_0x2ff0('0x9e')](l, -0x1)) {
                                        mod = 0x2;
                                        _0x25c054[_0x2ff0('0xb0')](UIFadein, vn0, 0x64, 0x0, 0x3e8);
                                        _0x25c054[_0x2ff0('0xb0')](UIFadein, vn1, 0x64, 0x0, 0x3e8);
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                var _0x23f9f0 = {
                                                    '\x73\x6e\x53': function _0x799aa8(_0x580bea, _0x4ba9c7) {
                                                        return _0x42b56d[_0x2ff0('0xcd')](_0x580bea, _0x4ba9c7);
                                                    },
                                                    '\x4e\x42\x52': function _0x1258e3(_0x4b01af, _0x289f28) {
                                                        return _0x42b56d[_0x2ff0('0xce')](_0x4b01af, _0x289f28);
                                                    },
                                                    '\x4c\x51\x4f': function _0x5d2523(_0x2a3ecc, _0x5b1155) {
                                                        return _0x42b56d[_0x2ff0('0xcf')](_0x2a3ecc, _0x5b1155);
                                                    },
                                                    '\x57\x61\x6a': function _0x5548ab(_0x1bb37f) {
                                                        return _0x42b56d[_0x2ff0('0xd0')](_0x1bb37f);
                                                    },
                                                    '\x6d\x48\x50': function _0x14896a(_0x3fa740, _0x5a1af4) {
                                                        return _0x42b56d[_0x2ff0('0xd1')](_0x3fa740, _0x5a1af4);
                                                    }
                                                };
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        pl0[_0x2ff0('0xc')]();
                                                        pl1[_0x2ff0('0xc')]();
                                                        if (_0x23f9f0[_0x2ff0('0xd2')](_0x23f9f0[_0x2ff0('0xd3')](CheckFiles, _0x23f9f0[_0x2ff0('0xd4')](android['os'][_0x2ff0('0xd5')][_0x2ff0('0xd6')](), _0x2ff0('0xd7'))), ![])) {
                                                            new java['io'][_0x2ff0('0xd8')](_0x23f9f0[_0x2ff0('0xd4')](android['os'][_0x2ff0('0xd5')][_0x2ff0('0xd6')](), _0x2ff0('0xd7')))[_0x2ff0('0xd9')]();
                                                            _0x23f9f0[_0x2ff0('0xda')](挂墙);
                                                        } else {
                                                            _0x23f9f0[_0x2ff0('0xdb')](jslog, jst2);
                                                        }
                                                        ;
                                                    }
                                                }), 0x3e8);
                                            }
                                        }));
                                    } else {
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        var _0x41afc8 = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                        _0x41afc8[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                            '\x72\x75\x6e': function () {
                                                                _0x41afc8[_0x2ff0('0xc9')]();
                                                            }
                                                        }));
                                                    }
                                                }), 0x1388);
                                            }
                                        }));
                                        _0x25c054[_0x2ff0('0x9f')](TipMes, _0x2ff0('0xca'));
                                        _0x25c054[_0x2ff0('0x9f')](Connect, _0x2ff0('0xdc'));
                                    }
                                    ;
                                } else {
                                }
                                ;
                            }
                            ;
                        });
                        continue;
                    case '1':
                        nc1 = _0x25c054[_0x2ff0('0xdd')](NewCDV, 0x0, _0x2ff0('0xde'), 0x0, n0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                        continue;
                    case '2':
                        n0 = _0x25c054[_0x2ff0('0xdf')](NewView, 'LL', _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xa8')](W), 0.629), _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xe0')](H), 0.75), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '3':
                        t1 = _0x25c054[_0x2ff0('0xe1')](NewText, _0x2ced80, 'LT', 0xd, _0x2ff0('0x32'));
                        continue;
                    case '4':
                        n1[_0x2ff0('0x17')](n4);
                        continue;
                    case '5':
                        n0[_0x2ff0('0x17')](n1);
                        continue;
                    case '6':
                        n4[_0x2ff0('0x17')](n5);
                        continue;
                    case '7':
                        t2 = _0x25c054[_0x2ff0('0xe2')](NewText, '\u786e\u5b9a', 'CC', 0xf, _0x2ff0('0x32'));
                        continue;
                    case '8':
                        n3 = _0x25c054[_0x2ff0('0xdf')](NewView, 'SV', _0x25c054[_0x2ff0('0xe3')](_0x25c054[_0x2ff0('0xe0')](W), 0.613), _0x25c054[_0x2ff0('0xe4')](_0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe6')](H), 0.65), _0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe7')](W), 0.008)), null, null, 0x1, [
                            null,
                            _0x2ff0('0xa9')
                        ], [
                            0xf,
                            0xf,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '9':
                        n5[_0x2ff0('0x17')](t2);
                        continue;
                    case '10':
                        n3[_0x2ff0('0x17')](t1);
                        continue;
                    case '11':
                        n1[_0x2ff0('0x17')](n2);
                        continue;
                    case '12':
                        if (_0x25c054[_0x2ff0('0xcb')](nc1, null)) {
                            nc1[_0x2ff0('0xc')]();
                        }
                        continue;
                    case '13':
                        ;
                        continue;
                    case '14':
                        n1 = _0x25c054[_0x2ff0('0xdf')](NewView, 'LL', _0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe7')](W), 0.629), _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xe9')](H), 0.75), 'CC', 0x1, 0x1, [
                            'RT',
                            _0x2ff0('0xea'),
                            _0x2ff0('0xeb')
                        ], 0xf, null);
                        continue;
                    case '15':
                        n2[_0x2ff0('0x17')](n3);
                        continue;
                    case '16':
                        n4 = _0x25c054[_0x2ff0('0xec')](NewView, 'LL', _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](W), 0.629), _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '17':
                        n2 = _0x25c054[_0x2ff0('0xec')](NewView, 'LL', _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](W), 0.613), _0x25c054[_0x2ff0('0xee')](_0x25c054[_0x2ff0('0xed')](H), 0.65), 'CB', 0x1, 0x0, _0x2ff0('0xef'), null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x24021f) {
                _0x25c054[_0x2ff0('0xf0')](print, _0x24021f);
            }
            _0x25c054[_0x2ff0('0xf1')](UIPlumb, n1, 0x64, 0x0, 0xc8);
            _0x25c054[_0x2ff0('0xf1')](UIFadein, n0, 0x0, 0x64, 0xc8);
        }
    }));
}
;


var _0x7d82 = [
    'amRz',
    'V0Rv',
    'MnwwfDR8NXw3fDF8Nnwz',
    'SE5v',
    'V0Jp',
    'eVpY',
    'QnVN',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'ckRG',
    'd3VW',
    'RFZG',
    'Zlh4',
    'Q25S',
    'TFRx',
    'c21P',
    'WkdX',
    'YWRkVmlldw\x3d\x3d',
    'SUxX',
    'VE5N',
    'WlZw',
    'U2p1',
    'WG9W',
    'UmlJ',
    'IzAwMDAwMA\x3d\x3d',
    'aUd4',
    'cVB1',
    'ZFJh',
    'YUxU',
    'cG9Y',
    'Qk1E',
    'V0NZ',
    'S2Vv',
    'anND',
    'ZEdO',
    'ZHJS',
    'dWJH',
    'RURU',
    'a1RD',
    'aU9s',
    'TWlZ',
    'YVpn',
    'ZWpt',
    'YlNq',
    'RFZL',
    'RWR4',
    'eGFj',
    'R1VM',
    'SnFn',
    'aGVI',
    'SnJn',
    'blZC',
    'eGdJ',
    'bnRW',
    'U1N2',
    'Tlhz',
    'bUNh',
    'dnBZ',
    'S1NG',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'ZmluaXNo',
    'YldH',
    '5p2D6ZmQ5pyJ6K\x2bv77yB',
    'U3pP',
    'Y2pK',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'M3wyfDR8MHw1fDE\x3d',
    'c3BsaXQ\x3d',
    'c2V0QmFja2dyb3VuZA\x3d\x3d',
    'cHFP',
    'UUpq',
    'SEpV',
    'ZGlzbWlzcw\x3d\x3d',
    'bUJ1',
    'Y0ZL',
    'RmdL',
    'eVlC',
    'RlZS',
    'WENi',
    'Qk5H',
    'amdO',
    'c3V3',
    'NXw0fDB8M3wxfDI\x3d',
    'MzJ8MzB8MjB8MjR8MzZ8MXwzNXw2fDIzfDIyfDExfDM3fDEwfDN8Mjl8MHw0fDI3fDE4fDE5fDIxfDd8MTN8NXwxNXwzMXwxMnwyOHwyNnwzM3wyNXwxN3wxNnwxNHw5fDM0fDJ8OA\x3d\x3d',
    'Sk5t',
    'Q1VU',
    'ZGdx',
    'emFY',
    'UExx',
    'I2I0ZjVmNWY1'
];
(function (_0x401b83, _0x1bc292) {
    var _0xefd39a = function (_0xf80819) {
        while (--_0xf80819) {
            _0x401b83['\x70\x75\x73\x68'](_0x401b83['\x73\x68\x69\x66\x74']());
        }
    };
    _0xefd39a(++_0x1bc292);
}(_0x7d82, 0x1c5));
var _0x27d8 = function (_0x44c8c3, _0x33fb70) {
    _0x44c8c3 = _0x44c8c3 - 0x0;
    var _0xb69fa6 = _0x7d82[_0x44c8c3];
    if (_0x27d8['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x482a6a = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x2a59ee = _0x482a6a();
            var _0x39fddd = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x2a59ee['\x61\x74\x6f\x62'] || (_0x2a59ee['\x61\x74\x6f\x62'] = function (_0x351381) {
                var _0x1ea8ca = String(_0x351381)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1a7eec = 0x0, _0x4622ec, _0x350063, _0x4c01a7 = 0x0, _0x505374 = ''; _0x350063 = _0x1ea8ca['\x63\x68\x61\x72\x41\x74'](_0x4c01a7++); ~_0x350063 && (_0x4622ec = _0x1a7eec % 0x4 ? _0x4622ec * 0x40 + _0x350063 : _0x350063, _0x1a7eec++ % 0x4) ? _0x505374 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x4622ec >> (-0x2 * _0x1a7eec & 0x6)) : 0x0) {
                    _0x350063 = _0x39fddd['\x69\x6e\x64\x65\x78\x4f\x66'](_0x350063);
                }
                return _0x505374;
            });
        }());
        _0x27d8['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x20c243) {
            var _0x37d221 = atob(_0x20c243);
            var _0x57b010 = [];
            for (var _0x4ecdd0 = 0x0, _0x24c465 = _0x37d221['\x6c\x65\x6e\x67\x74\x68']; _0x4ecdd0 < _0x24c465; _0x4ecdd0++) {
                _0x57b010 += '\x25' + ('\x30\x30' + _0x37d221['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4ecdd0)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x57b010);
        };
        _0x27d8['\x64\x61\x74\x61'] = {};
        _0x27d8['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x27d8['\x64\x61\x74\x61'][_0x44c8c3] === undefined) {
        _0xb69fa6 = _0x27d8['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0xb69fa6);
        _0x27d8['\x64\x61\x74\x61'][_0x44c8c3] = _0xb69fa6;
    } else {
        _0xb69fa6 = _0x27d8['\x64\x61\x74\x61'][_0x44c8c3];
    }
    return _0xb69fa6;
};
var bc1;
var ec1;
function UI1() {
    var _0xd366be = {
        '\x46\x56\x52': function _0xa3ac4(_0x46ac15, _0x394e18) {
            return _0x46ac15 != _0x394e18;
        },
        '\x58\x43\x62': function _0x5508a3(_0x1ca428) {
            return _0x1ca428();
        }
    };
    ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x1ee1af = {
                '\x70\x71\x4f': function _0x477ebb(_0x181175, _0x51b83f) {
                    return _0x181175(_0x51b83f);
                },
                '\x51\x4a\x6a': function _0x3b07d6(_0x513155, _0xe65c41, _0x204901, _0xfef771, _0x57fc66, _0x2a52f0, _0x236274) {
                    return _0x513155(_0xe65c41, _0x204901, _0xfef771, _0x57fc66, _0x2a52f0, _0x236274);
                },
                '\x48\x4a\x55': function _0x1ee5f3(_0x333408, _0x282cd1) {
                    return _0x333408 != _0x282cd1;
                },
                '\x6d\x42\x75': function _0x584b23(_0x17cd0c, _0x523ec0, _0x39262f, _0x365e2b, _0x2dfe41, _0x129787, _0x47ffa1, _0x36f23f, _0x1c376a, _0x104951) {
                    return _0x17cd0c(_0x523ec0, _0x39262f, _0x365e2b, _0x2dfe41, _0x129787, _0x47ffa1, _0x36f23f, _0x1c376a, _0x104951);
                },
                '\x63\x46\x4b': function _0x2b7c7d(_0x72337d, _0x44bcf5) {
                    return _0x72337d * _0x44bcf5;
                },
                '\x46\x67\x4b': function _0x2e1b0a(_0x492e89) {
                    return _0x492e89();
                },
                '\x79\x59\x42': function _0x555024(_0x1f74da, _0x2e7810) {
                    return _0x1f74da * _0x2e7810;
                },
                '\x42\x4e\x47': function _0x2dad43(_0x102481, _0x7791bf, _0x1fbbb3, _0x17c847, _0x579086, _0xe4052f, _0x39475a, _0x4838a7, _0x533e0f, _0x5984d1, _0x556f92, _0xd6e281) {
                    return _0x102481(_0x7791bf, _0x1fbbb3, _0x17c847, _0x579086, _0xe4052f, _0x39475a, _0x4838a7, _0x533e0f, _0x5984d1, _0x556f92, _0xd6e281);
                },
                '\x6a\x67\x4e': function _0x4e2c54(_0x437f28, _0x24acf5) {
                    return _0x437f28 * _0x24acf5;
                },
                '\x73\x75\x77': function _0x22124d(_0x6904fb) {
                    return _0x6904fb();
                }
            };
            var _0xa5981d = _0x27d8('0x3')[_0x27d8('0x4')]('\x7c'), _0x27807e = 0x0;
            while (!![]) {
                switch (_0xa5981d[_0x27807e++]) {
                case '0':
                    b1[_0x27d8('0x5')](_0x1ee1af[_0x27d8('0x6')](BaseT, wh));
                    continue;
                case '1':
                    _0x1ee1af[_0x27d8('0x7')](UIRotate, b1, 0x0, 0x168, 0x32, 0x32, 0x12c);
                    continue;
                case '2':
                    ;
                    continue;
                case '3':
                    if (_0x1ee1af[_0x27d8('0x8')](bc1, null)) {
                        bc1[_0x27d8('0x9')]();
                        bc1 = null;
                    }
                    continue;
                case '4':
                    b1 = _0x1ee1af[_0x27d8('0xa')](NewView, 'LL', _0x1ee1af[_0x27d8('0xb')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), _0x1ee1af[_0x27d8('0xd')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), 'CC', 0x1, 0x2, null, 0x0, function (_0x2a40fa) {
                        if (_0xd366be[_0x27d8('0xe')](bc1, null)) {
                            bc1[_0x27d8('0x9')]();
                            bc1 = null;
                        }
                        ;
                        _0xd366be[_0x27d8('0xf')](UI2);
                    });
                    continue;
                case '5':
                    bc1 = _0x1ee1af[_0x27d8('0x10')](NewCDV, 0x2, null, 0x0, b1, _0x1ee1af[_0x27d8('0x11')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), _0x1ee1af[_0x27d8('0x11')](_0x1ee1af[_0x27d8('0x12')](H), 0.1), ![], !![], 'RT', 0x1e, 0x0);
                    continue;
                }
                break;
            }
        }
    }));
}
;
function UI2() {
    var _0x44e752 = {
        '\x4b\x53\x46': function _0x3854d5(_0x3fac82, _0x5604f2) {
            return _0x3fac82 != _0x5604f2;
        },
        '\x62\x57\x47': function _0x37ad69(_0x1c2544, _0x4d4cb3) {
            return _0x1c2544(_0x4d4cb3);
        },
        '\x53\x7a\x4f': function _0x582c49(_0x5df28b, _0x202704) {
            return _0x5df28b == _0x202704;
        },
        '\x63\x6a\x4a': function _0x52343a(_0x167495) {
            return _0x167495();
        }
    };
    var _0x1ed6a7 = _0x27d8('0x13')[_0x27d8('0x4')]('\x7c'), _0x4d94a3 = 0x0;
    while (!![]) {
        switch (_0x1ed6a7[_0x4d94a3++]) {
        case '0':
            ;
            continue;
        case '1':
            ;
            continue;
        case '2':
            ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                '\x72\x75\x6e': function () {
                    var _0xaac948 = {
                        '\x4a\x4e\x6d': function _0x485411(_0x274f2e, _0x28fe50, _0x41a4cd, _0x3ab1c6, _0x21e1cd, _0x5a24d3, _0x4452d1, _0x25453a, _0xcf1c75, _0x57d99c) {
                            return _0x274f2e(_0x28fe50, _0x41a4cd, _0x3ab1c6, _0x21e1cd, _0x5a24d3, _0x4452d1, _0x25453a, _0xcf1c75, _0x57d99c);
                        },
                        '\x43\x55\x54': function _0x21ff3e(_0x1ebf24, _0x8ac323) {
                            return _0x1ebf24 * _0x8ac323;
                        },
                        '\x64\x67\x71': function _0x29740d(_0x3f4e4b) {
                            return _0x3f4e4b();
                        },
                        '\x7a\x61\x58': function _0x599d60(_0x46cec3, _0x1e245e) {
                            return _0x46cec3 * _0x1e245e;
                        },
                        '\x50\x4c\x71': function _0xa91a3b(_0x18aa2e) {
                            return _0x18aa2e();
                        },
                        '\x6a\x64\x73': function _0x5bf2e6(_0x1c6f75, _0x40c7bd) {
                            return _0x1c6f75 * _0x40c7bd;
                        },
                        '\x57\x44\x6f': function _0x5a73ed(_0xcc3fb9) {
                            return _0xcc3fb9();
                        },
                        '\x66\x58\x78': function _0x250cb7(_0x12061c, _0x4026e0, _0x4bb681, _0x35b967, _0x1c2645) {
                            return _0x12061c(_0x4026e0, _0x4bb681, _0x35b967, _0x1c2645);
                        },
                        '\x43\x6e\x52': function _0x11b0ef(_0x572e0a, _0xc700dd, _0x281143, _0x14ee18, _0x13cda3, _0x1cefaf, _0x592e28, _0x5cab07, _0x5343c8, _0x306fbe) {
                            return _0x572e0a(_0xc700dd, _0x281143, _0x14ee18, _0x13cda3, _0x1cefaf, _0x592e28, _0x5cab07, _0x5343c8, _0x306fbe);
                        },
                        '\x4c\x54\x71': function _0x5310d2(_0x152c9a, _0x5e7a0c) {
                            return _0x152c9a * _0x5e7a0c;
                        },
                        '\x73\x6d\x4f': function _0x25d07c(_0x5b8cc5) {
                            return _0x5b8cc5();
                        },
                        '\x5a\x47\x57': function _0x585e35(_0x35e6ad, _0x1b8637, _0xfdd30c, _0xf25743, _0x299345, _0x223f6f, _0x306bc6, _0x3e0640, _0x569a7b, _0x41e438) {
                            return _0x35e6ad(_0x1b8637, _0xfdd30c, _0xf25743, _0x299345, _0x223f6f, _0x306bc6, _0x3e0640, _0x569a7b, _0x41e438);
                        },
                        '\x49\x4c\x57': function _0x682d0f(_0x112939, _0x4f9f83, _0x7750d8, _0x473fe3, _0x104d06, _0x4cef7e, _0x2f95c8, _0x2b78cc, _0x359f5b, _0x115100) {
                            return _0x112939(_0x4f9f83, _0x7750d8, _0x473fe3, _0x104d06, _0x4cef7e, _0x2f95c8, _0x2b78cc, _0x359f5b, _0x115100);
                        },
                        '\x54\x4e\x4d': function _0x23ba0e(_0x31f224, _0x5aa950) {
                            return _0x31f224 * _0x5aa950;
                        },
                        '\x5a\x56\x70': function _0x16edcc(_0x1e8bd5) {
                            return _0x1e8bd5();
                        },
                        '\x53\x6a\x75': function _0x4f97ac(_0x3e17b1) {
                            return _0x3e17b1();
                        },
                        '\x52\x69\x49': function _0xdc154f(_0x485240, _0x28b138, _0xa2aa15, _0x466f76, _0x5265aa) {
                            return _0x485240(_0x28b138, _0xa2aa15, _0x466f76, _0x5265aa);
                        },
                        '\x69\x47\x78': function _0x4dee9e(_0x297a41, _0x5237d6, _0x2c0559, _0x23d663, _0x1dae36) {
                            return _0x297a41(_0x5237d6, _0x2c0559, _0x23d663, _0x1dae36);
                        },
                        '\x71\x50\x75': function _0x1b395a(_0x2e1240, _0xf7937c, _0x50acc2, _0x338208, _0xa779a, _0x2e1db0, _0x411f43) {
                            return _0x2e1240(_0xf7937c, _0x50acc2, _0x338208, _0xa779a, _0x2e1db0, _0x411f43);
                        },
                        '\x64\x52\x61': function _0x676d7d(_0x1241a4, _0xa74a66, _0x4637ae, _0x26e8f7, _0xda302e, _0x46e3d5, _0x5d079f, _0x710114, _0x2e44e1, _0x3d78a8) {
                            return _0x1241a4(_0xa74a66, _0x4637ae, _0x26e8f7, _0xda302e, _0x46e3d5, _0x5d079f, _0x710114, _0x2e44e1, _0x3d78a8);
                        },
                        '\x61\x4c\x54': function _0x1140ba(_0x3f3ea3) {
                            return _0x3f3ea3();
                        },
                        '\x70\x6f\x58': function _0x1179d6(_0x2a0801, _0x514b53, _0x255bb8, _0x1523cf, _0x225175, _0x26220e, _0x130e8b, _0x4802b2, _0x1783dc, _0x3070c7) {
                            return _0x2a0801(_0x514b53, _0x255bb8, _0x1523cf, _0x225175, _0x26220e, _0x130e8b, _0x4802b2, _0x1783dc, _0x3070c7);
                        },
                        '\x42\x4d\x44': function _0x2dd0cd(_0x5cfbad) {
                            return _0x5cfbad();
                        },
                        '\x57\x43\x59': function _0xd69f04(_0x4e8702) {
                            return _0x4e8702();
                        },
                        '\x4b\x65\x6f': function _0x5dfa79(_0xddfb4b, _0x577308, _0x504fc6, _0x4a3efd, _0x5722fa) {
                            return _0xddfb4b(_0x577308, _0x504fc6, _0x4a3efd, _0x5722fa);
                        },
                        '\x6a\x73\x43': function _0x46132a(_0x5c99a3, _0x4b45bb, _0xbc380a, _0x10c59e, _0x23ce96, _0x46572a, _0x2fc527, _0x5f188d, _0x1f484e, _0x209555) {
                            return _0x5c99a3(_0x4b45bb, _0xbc380a, _0x10c59e, _0x23ce96, _0x46572a, _0x2fc527, _0x5f188d, _0x1f484e, _0x209555);
                        },
                        '\x64\x47\x4e': function _0x49a85f(_0x1557b8) {
                            return _0x1557b8();
                        },
                        '\x75\x62\x47': function _0x1f47db(_0x1b9559, _0x58f8c2, _0x21b378, _0x273283, _0x21658d, _0x3f3473, _0x26120b, _0x384a26, _0x3d870d, _0x58e9e7) {
                            return _0x1b9559(_0x58f8c2, _0x21b378, _0x273283, _0x21658d, _0x3f3473, _0x26120b, _0x384a26, _0x3d870d, _0x58e9e7);
                        },
                        '\x45\x44\x54': function _0x4f1080(_0x4cfe3d) {
                            return _0x4cfe3d();
                        },
                        '\x6b\x54\x43': function _0x402344(_0x494da8, _0x35ba6e) {
                            return _0x494da8 * _0x35ba6e;
                        },
                        '\x69\x4f\x6c': function _0x2ab468(_0x378467) {
                            return _0x378467();
                        },
                        '\x4d\x69\x59': function _0x273643(_0x1ed0d2) {
                            return _0x1ed0d2();
                        },
                        '\x61\x5a\x67': function _0x3d0009(_0xbde52b, _0x4b4d28) {
                            return _0xbde52b * _0x4b4d28;
                        },
                        '\x65\x6a\x6d': function _0x39745c(_0x3706c9) {
                            return _0x3706c9();
                        },
                        '\x62\x53\x6a': function _0x516d1c(_0x57aa74, _0x28b502, _0x1eb70a, _0x15f2e5, _0xfc1ccd, _0x35a1b8, _0x493d47, _0x4c4f73, _0xad3044, _0x1ed210) {
                            return _0x57aa74(_0x28b502, _0x1eb70a, _0x15f2e5, _0xfc1ccd, _0x35a1b8, _0x493d47, _0x4c4f73, _0xad3044, _0x1ed210);
                        },
                        '\x44\x56\x4b': function _0x45ceca(_0x15de0b) {
                            return _0x15de0b();
                        },
                        '\x45\x64\x78': function _0x59287d(_0x1e3003, _0x59f865) {
                            return _0x1e3003 * _0x59f865;
                        },
                        '\x78\x61\x63': function _0x56c7d7(_0x2505db, _0x1d08e3) {
                            return _0x2505db != _0x1d08e3;
                        },
                        '\x47\x55\x4c': function _0x40cfe9(_0xd61a93, _0x5e5043, _0x3a5f21, _0x72da9c, _0x3e296c, _0x55deb3, _0x46d9e5, _0x37f490, _0x1c50a1, _0x5cd969, _0x5b9c2f, _0x69900b) {
                            return _0xd61a93(_0x5e5043, _0x3a5f21, _0x72da9c, _0x3e296c, _0x55deb3, _0x46d9e5, _0x37f490, _0x1c50a1, _0x5cd969, _0x5b9c2f, _0x69900b);
                        },
                        '\x4a\x71\x67': function _0xcd565d(_0x52342a, _0x497efc, _0x5ddb1a, _0x57dade, _0x4cdb15, _0x4e9819, _0x22646d, _0x469031, _0x2e6fa5, _0x53f3a0) {
                            return _0x52342a(_0x497efc, _0x5ddb1a, _0x57dade, _0x4cdb15, _0x4e9819, _0x22646d, _0x469031, _0x2e6fa5, _0x53f3a0);
                        },
                        '\x68\x65\x48': function _0x1de880(_0x96cab6, _0xe2537) {
                            return _0x96cab6 * _0xe2537;
                        },
                        '\x4a\x72\x67': function _0x2f0429(_0x58de09) {
                            return _0x58de09();
                        },
                        '\x6e\x56\x42': function _0x41fbca(_0x41c84) {
                            return _0x41c84();
                        },
                        '\x78\x67\x49': function _0xb67425(_0x475036, _0x54e167, _0x4a54b4, _0x3b2800, _0x326c1c, _0x57cb73, _0x46e761, _0x567ba5, _0x254439, _0x580efc) {
                            return _0x475036(_0x54e167, _0x4a54b4, _0x3b2800, _0x326c1c, _0x57cb73, _0x46e761, _0x567ba5, _0x254439, _0x580efc);
                        },
                        '\x6e\x74\x56': function _0x503661(_0x23b666, _0x3a6b5f, _0x1f5d22, _0x12862e, _0x3c5e31, _0x5798a4, _0x3dafc2, _0x51b207, _0x33cc0f, _0x26381b) {
                            return _0x23b666(_0x3a6b5f, _0x1f5d22, _0x12862e, _0x3c5e31, _0x5798a4, _0x3dafc2, _0x51b207, _0x33cc0f, _0x26381b);
                        },
                        '\x53\x53\x76': function _0x47a447(_0x3e1c9d, _0x43130a) {
                            return _0x3e1c9d * _0x43130a;
                        },
                        '\x4e\x58\x73': function _0x2681cc(_0x48a059) {
                            return _0x48a059();
                        },
                        '\x6d\x43\x61': function _0x510cec(_0x4b2df3, _0x107986) {
                            return _0x4b2df3 * _0x107986;
                        }
                    };
                    var _0x17df9c = _0x27d8('0x14')[_0x27d8('0x4')]('\x7c'), _0x34a46c = 0x0;
                    while (!![]) {
                        switch (_0x17df9c[_0x34a46c++]) {
                        case '0':
                            n10 = _0xaac948[_0x27d8('0x15')](NewView, 'LL', _0xaac948[_0x27d8('0x16')](_0xaac948[_0x27d8('0x17')](H), 0.1), _0xaac948[_0x27d8('0x18')](_0xaac948[_0x27d8('0x19')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x517c9c) {
                            });
                            continue;
                        case '1':
                            n2 = _0xaac948[_0x27d8('0x15')](NewView, 'LL', _0xaac948[_0x27d8('0x1b')](_0xaac948[_0x27d8('0x19')](H), 0.1), _0xaac948[_0x27d8('0x1b')](_0xaac948[_0x27d8('0x1c')](H), 0.1), 'CB', 0x1, 0x2, null, null, function (_0x5d5d4a) {
                                var _0x41fe1a = {
                                    '\x48\x4e\x6f': function _0x2b517a(_0x138062, _0xe71129, _0x3f930a, _0x161d4d, _0x1ee828) {
                                        return _0x138062(_0xe71129, _0x3f930a, _0x161d4d, _0x1ee828);
                                    },
                                    '\x57\x42\x69': function _0x360545(_0x46a83b, _0x147e6c) {
                                        return _0x46a83b != _0x147e6c;
                                    },
                                    '\x79\x5a\x58': function _0x410676(_0x2b6b9f, _0x56056f) {
                                        return _0x2b6b9f != _0x56056f;
                                    },
                                    '\x42\x75\x4d': function _0x254673(_0x5db136) {
                                        return _0x5db136();
                                    },
                                    '\x44\x56\x46': function _0x521e43(_0xffbb86, _0x16af9a) {
                                        return _0xffbb86 != _0x16af9a;
                                    }
                                };
                                var _0x3ca76d = _0x27d8('0x1d')[_0x27d8('0x4')]('\x7c'), _0x1c4f6f = 0x0;
                                while (!![]) {
                                    switch (_0x3ca76d[_0x1c4f6f++]) {
                                    case '0':
                                        _0x41fe1a[_0x27d8('0x1e')](UIFadein, n1, 0x64, 0x0, 0x96);
                                        continue;
                                    case '1':
                                        if (_0x41fe1a[_0x27d8('0x1f')](ac2, null)) {
                                            ac2[_0x27d8('0x9')]();
                                            ac2 = null;
                                        }
                                        continue;
                                    case '2':
                                        var _0x1f36ec = {
                                            '\x72\x44\x46': function _0x31139e(_0x23b6d3, _0x198a8c) {
                                                return _0x41fe1a[_0x27d8('0x20')](_0x23b6d3, _0x198a8c);
                                            },
                                            '\x77\x75\x56': function _0x5d4cd4(_0x579575) {
                                                return _0x41fe1a[_0x27d8('0x21')](_0x579575);
                                            }
                                        };
                                        continue;
                                    case '3':
                                        ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        if (_0x1f36ec[_0x27d8('0x24')](ec1, null)) {
                                                            ec1[_0x27d8('0x9')]();
                                                            ec1 = null;
                                                            _0x1f36ec[_0x27d8('0x25')](UI1);
                                                        }
                                                        ;
                                                    }
                                                }), 0x96);
                                            }
                                        }));
                                        continue;
                                    case '4':
                                        _0x41fe1a[_0x27d8('0x1e')](UIPlumb, n0, 0x0, -0x14, 0x96);
                                        continue;
                                    case '5':
                                        if (_0x41fe1a[_0x27d8('0x26')](ac1, null)) {
                                            ac1[_0x27d8('0x9')]();
                                            ac1 = null;
                                        }
                                        continue;
                                    case '6':
                                        ;
                                        continue;
                                    case '7':
                                        ;
                                        continue;
                                    }
                                    break;
                                }
                            });
                            continue;
                        case '2':
                            _0xaac948[_0x27d8('0x27')](UIFadein, n1, 0x0, 0x64, 0x96);
                            continue;
                        case '3':
                            n8 = _0xaac948[_0x27d8('0x28')](NewView, 'LL', _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x260732) {
                            });
                            continue;
                        case '4':
                            n11 = _0xaac948[_0x27d8('0x2b')](NewView, 'LL', _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '5':
                            n1[_0x27d8('0x2c')](n2);
                            continue;
                        case '6':
                            n2$ = _0xaac948[_0x27d8('0x2d')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x2f')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x30')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x54b085) {
                                _0x7741d6[_0x27d8('0x31')](B1);
                            });
                            continue;
                        case '7':
                            t2 = _0xaac948[_0x27d8('0x32')](NewText, 'FC', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '8':
                            _0xaac948[_0x27d8('0x34')](UIPlumb, n0, -0x14, 0x0, 0x96);
                            continue;
                        case '9':
                            _0xaac948[_0x27d8('0x35')](UIRotate, n2, -0x168, 0x0, 0x32, 0x64, 0x12c);
                            continue;
                        case '10':
                            n7 = _0xaac948[_0x27d8('0x36')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x37')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x37')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '11':
                            n5 = _0xaac948[_0x27d8('0x38')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x39')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3a')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '12':
                            n1[_0x27d8('0x2c')](n2$);
                            continue;
                        case '13':
                            n0[_0x27d8('0x2c')](n1);
                            continue;
                        case '14':
                            n6[_0x27d8('0x2c')](t2);
                            continue;
                        case '15':
                            n2[_0x27d8('0x2c')](t0);
                            continue;
                        case '16':
                            n1[_0x27d8('0x2c')](n6);
                            continue;
                        case '17':
                            n1[_0x27d8('0x2c')](n5);
                            continue;
                        case '18':
                            t0 = _0xaac948[_0x27d8('0x3b')](NewText, '\ufe3d', 'CC', 0x16, _0x27d8('0x33'));
                            continue;
                        case '19':
                            t0$ = _0xaac948[_0x27d8('0x3b')](NewText, 'ET', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '20':
                            ;
                            continue;
                        case '21':
                            t1 = _0xaac948[_0x27d8('0x3b')](NewText, 'BT', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '22':
                            n4 = _0xaac948[_0x27d8('0x3c')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3d')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3d')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x130e11) {
                                _0x3a5337[_0x27d8('0x3e')](B2);
                            });
                            continue;
                        case '23':
                            n3 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x40')](H), 0.1), _0xaac948[_0x27d8('0x41')](_0xaac948[_0x27d8('0x42')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '24':
                            n0 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x41')](_0xaac948[_0x27d8('0x42')](H), 0.1), _0xaac948[_0x27d8('0x43')](H), 'CT', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '25':
                            n4[_0x27d8('0x2c')](t1);
                            continue;
                        case '26':
                            n1[_0x27d8('0x2c')](n3);
                            continue;
                        case '27':
                            n12 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x43')](H), 0.1), _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x45')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x5bcb6b) {
                            });
                            continue;
                        case '28':
                            n2$[_0x27d8('0x2c')](t0$);
                            continue;
                        case '29':
                            n9 = _0xaac948[_0x27d8('0x46')](NewView, 'LL', _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x47')](H), 0.1), _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '30':
                            if (_0xaac948[_0x27d8('0x49')](ec1, null)) {
                                ec1[_0x27d8('0x9')]();
                                ec1 = null;
                            }
                            continue;
                        case '31':
                            n1[_0x27d8('0x2c')](n1$);
                            continue;
                        case '32':
                            var _0x3a5337 = {
                                '\x64\x72\x52': function _0x5f599a(_0x3d2d3c) {
                                    return _0xaac948[_0x27d8('0x47')](_0x3d2d3c);
                                }
                            };
                            continue;
                        case '33':
                            n1[_0x27d8('0x2c')](n4);
                            continue;
                        case '34':
                            ec1 = _0xaac948[_0x27d8('0x4a')](NewCDV, 0x2, null, 0x0, n0, _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.1), _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.85), ![], !![], 'RT', 0x1e, 0x0);
                            continue;
                        case '35':
                            n1$ = _0xaac948[_0x27d8('0x4b')](NewView, 'LL', _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4d')](H), 0.1), _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4e')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '36':
                            n1 = _0xaac948[_0x27d8('0x4f')](NewView, 'LL', _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4e')](H), 0.1), _0xaac948[_0x27d8('0x4e')](H), 'CT', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '37':
                            n6 = _0xaac948[_0x27d8('0x50')](NewView, 'LL', _0xaac948[_0x27d8('0x51')](_0xaac948[_0x27d8('0x52')](H), 0.1), _0xaac948[_0x27d8('0x53')](_0xaac948[_0x27d8('0x52')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x49129c) {
                                _0x7741d6[_0x27d8('0x54')](B3);
                            });
                            continue;
                        }
                        break;
                    }
                }
            }));
            continue;
        case '3':
            if (_0x44e752[_0x27d8('0x55')](mod, 0x2)) {
                ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                    '\x72\x75\x6e': function () {
                        new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x2f6b2b = com[_0x27d8('0x56')][_0x27d8('0x57')][_0x27d8('0x58')][_0x27d8('0x59')][_0x27d8('0x5a')]();
                                _0x2f6b2b[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x2f6b2b[_0x27d8('0x5b')]();
                                    }
                                }));
                            }
                        }), 0x1388);
                    }
                }));
                _0x44e752[_0x27d8('0x5c')](TipMes, _0x27d8('0x5d'));
            }
            continue;
        case '4':
            if (_0x44e752[_0x27d8('0x5e')](i, 0x5) && _0x44e752[_0x27d8('0x5e')](l, -0x1)) {
            } else {
                ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                    '\x72\x75\x6e': function () {
                        new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x17f476 = com[_0x27d8('0x56')][_0x27d8('0x57')][_0x27d8('0x58')][_0x27d8('0x59')][_0x27d8('0x5a')]();
                                _0x17f476[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x17f476[_0x27d8('0x5b')]();
                                    }
                                }));
                            }
                        }), 0x1388);
                    }
                }));
                _0x44e752[_0x27d8('0x5c')](TipMes, _0x27d8('0x5d'));
            }
            continue;
        case '5':
            var _0x7741d6 = {
                '\x58\x6f\x56': function _0x75a49d(_0x1dc4da) {
                    return _0x44e752[_0x27d8('0x5f')](_0x1dc4da);
                },
                '\x76\x70\x59': function _0x5caa40(_0x4cf3ff) {
                    return _0x44e752[_0x27d8('0x5f')](_0x4cf3ff);
                }
            };
            continue;
        }
        break;
    }
}
;


var gb=false;
function 挂墙(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(nc1!=null){
nc1.dismiss();
};
n0=NewView("LL",W()*0.829,H()*0.95,"CC",1,2,null,null,null);
n1=NewView("LL",W()*0.829,H()*0.95,"CC",1,1,["LR","#CE1800","#AE00FF"],15,null);
n2=NewView("LL",W()*0.813,H()*0.85,"CB",1,0,"#11909090",null,null);
n3=NewView("SV",W()*0.813,H()*0.85-W()*0.008,null,null,1,[null,"#80ffffff"],[15,15,0,0],null);
n4=NewView("LL",W()*0.829,H()*0.1,"CC",1,2,null,null,null);
n5=NewView("LL",W()*0.819,H()*0.1-W()*0.01,"CC",1,1,[null,"#80ffffff"],15,
function(v){
if(gb==true){
nc1.dismiss();
挂墙2();
}else{
print("再等10秒就能关");
};
}
);
var webv = new android.webkit.WebView(ctx);
webv.loadUrl("http://bbs.huluxia.com/wap/thread/685234.html?para=37Hftt+037HfuN+037nfsd+w3p/ftt+437Xfst+z37Q=&product=tool");
t2=NewText("[挂墙-葫芦侠] 昵称''樱花||永恒''｜原因:盗发文件，厚脸皮还不删","CC",15,"#000000");
n3.addView(webv);
n5.addView(t2);
n0.addView(n1);
n1.addView(n2);
n2.addView(n3);
n1.addView(n4);
n4.addView(n5);
nc1=NewCDV(0,"#64ffffff",0,n0,-1,-1,false,true,"CC",0,0);
}catch(err){print(err)}
}}));
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
gb=true;
}}),10000) }}));
};

var _0x4994 = [
    'aG5N',
    'VFJJ',
    'IzExOTA5MDkw',
    'RnFW',
    'dEZW',
    'Z1NX',
    'ZGRN',
    'IzY0ZmZmZmZm',
    'RU5w',
    'YkVM',
    'clVl',
    'I0NFMTgwMA\x3d\x3d',
    'I0FFMDBGRg\x3d\x3d',
    'bU9Y',
    'SXp0',
    'VUh5',
    'c3VN',
    'S1pC',
    'SXlw',
    'cVVh',
    'dEJa',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    '5oyC5aKZ77yaMjAxOS0wNC0xMw\x3d\x3d',
    '4oCiIFtRUee\x2bpO\x2b9nOaIkeeahOS4lueVjOW8gOaMguelnuWZqOa4heaYjueJiF0g4oCiIDY2MDUxNjc0NA\x3d\x3d',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB56ew5Y6f5L2c6ICF5ZyI6ZKx44CB566h55CG5oCB5bqm6Juu5qiq5peg55CG',
    '4oCiIFtRUeWPt10g4oCiIDI0MTQ1NjY5MTPvvZwyMTk1NzU2Mjgx',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB57Sg6LSo5p6B5YW25L2O5LiL44CB56ew5Y6f5L2c6ICF55qE5Luj56CB6YO95piv5oqE5Yir5Lq655qE',
    '4oCiIFvokavoiqbkvqDnpL7ljLpdIOKAoiDmqLHoirEgfHwg5rC45oGS',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB5LiN5om\x2f6K6k5Y6f5L2c6ICF44CB56ew5Y6f5L2c6ICF5piv5LqM5pS554uX',
    '5aaC5p6c55uX5Y\x2bR5paH5Lu255qE5Lq65Li75Yqo5Yig5paH5Lu277yM5bCx5LiN5Lya5Zyo5aKZ5LiK55WZ5Y\x2b3',
    'bGVuZ3Ro',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'QW5w',
    'Z2xk',
    'NHwzfDh8MTN8N3wxNXwxNnw1fDZ8MHwxMXwxNHwxMnwxMHwyfDE3fDF8OQ\x3d\x3d',
    'c3BsaXQ\x3d',
    'ZlBI',
    'U3RhcnQgV2VIYWNr',
    'IzAwMDAwMA\x3d\x3d',
    'YWRkVmlldw\x3d\x3d',
    'cUJx',
    'ZGlzbWlzcw\x3d\x3d',
    'WW1M',
    'b1ZH',
    'QWxH',
    'WlNw',
    'IzgwZmZmZmZm',
    'ckhB',
    'b3d5',
    '5YaN562JMTDnp5LlsLHog73lhbM\x3d',
    'aFFD'
];
(function (_0x2b074e, _0x58a52d) {
    var _0x133ca3 = function (_0x55504c) {
        while (--_0x55504c) {
            _0x2b074e['\x70\x75\x73\x68'](_0x2b074e['\x73\x68\x69\x66\x74']());
        }
    };
    _0x133ca3(++_0x58a52d);
}(_0x4994, 0x15b));
var _0x4499 = function (_0x250c0f, _0x3e0f96) {
    _0x250c0f = _0x250c0f - 0x0;
    var _0x4964d3 = _0x4994[_0x250c0f];
    if (_0x4499['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x5903fb = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x4805d5 = _0x5903fb();
            var _0x483473 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x4805d5['\x61\x74\x6f\x62'] || (_0x4805d5['\x61\x74\x6f\x62'] = function (_0x3707be) {
                var _0x1163ab = String(_0x3707be)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0xbd200f = 0x0, _0x19d91e, _0x403ad4, _0x1a4ae6 = 0x0, _0x5c712c = ''; _0x403ad4 = _0x1163ab['\x63\x68\x61\x72\x41\x74'](_0x1a4ae6++); ~_0x403ad4 && (_0x19d91e = _0xbd200f % 0x4 ? _0x19d91e * 0x40 + _0x403ad4 : _0x403ad4, _0xbd200f++ % 0x4) ? _0x5c712c += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x19d91e >> (-0x2 * _0xbd200f & 0x6)) : 0x0) {
                    _0x403ad4 = _0x483473['\x69\x6e\x64\x65\x78\x4f\x66'](_0x403ad4);
                }
                return _0x5c712c;
            });
        }());
        _0x4499['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x58d3e6) {
            var _0x504ef1 = atob(_0x58d3e6);
            var _0x278706 = [];
            for (var _0x4be657 = 0x0, _0x11c6f6 = _0x504ef1['\x6c\x65\x6e\x67\x74\x68']; _0x4be657 < _0x11c6f6; _0x4be657++) {
                _0x278706 += '\x25' + ('\x30\x30' + _0x504ef1['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4be657)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x278706);
        };
        _0x4499['\x64\x61\x74\x61'] = {};
        _0x4499['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x4499['\x64\x61\x74\x61'][_0x250c0f] === undefined) {
        _0x4964d3 = _0x4499['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x4964d3);
        _0x4499['\x64\x61\x74\x61'][_0x250c0f] = _0x4964d3;
    } else {
        _0x4964d3 = _0x4499['\x64\x61\x74\x61'][_0x250c0f];
    }
    return _0x4964d3;
};
var jst5 = [
    _0x4499('0x0'),
    '',
    _0x4499('0x1'),
    _0x4499('0x2'),
    '',
    _0x4499('0x3'),
    _0x4499('0x4'),
    '',
    _0x4499('0x5'),
    _0x4499('0x6'),
    '',
    '',
    _0x4499('0x7')
];
var jst6 = [''];
for (a = 0x0; a < jst5[_0x4499('0x8')]; a++) {
    jst6 = jst6 + jst5[a] + '\x0a';
}
;
var gb2 = ![];
function 挂墙2() {
    var _0xad8f53 = {
        '\x41\x6e\x70': function _0x2746e1(_0x3320fd, _0x4e09c4) {
            return _0x3320fd == _0x4e09c4;
        },
        '\x67\x6c\x64': function _0x41801d(_0x1d890d, _0x641f08) {
            return _0x1d890d(_0x641f08);
        },
        '\x66\x50\x48': function _0x2e68d2(_0x1789cf, _0x302e1d, _0x2ee826, _0x2e1a3c, _0x12ca19) {
            return _0x1789cf(_0x302e1d, _0x2ee826, _0x2e1a3c, _0x12ca19);
        },
        '\x71\x42\x71': function _0x4a49aa(_0x23f49e, _0x50facc) {
            return _0x23f49e != _0x50facc;
        },
        '\x59\x6d\x4c': function _0x78fab3(_0x2a63eb, _0x93d66a, _0x360088, _0x56e408, _0xec1ff1, _0xf93ad9, _0x4a2ee7, _0x547563, _0x2976fa, _0x22cfad) {
            return _0x2a63eb(_0x93d66a, _0x360088, _0x56e408, _0xec1ff1, _0xf93ad9, _0x4a2ee7, _0x547563, _0x2976fa, _0x22cfad);
        },
        '\x6f\x56\x47': function _0x4bb531(_0x3a3c86, _0x3a8e1f) {
            return _0x3a3c86 * _0x3a8e1f;
        },
        '\x41\x6c\x47': function _0x1275e2(_0x248bd8) {
            return _0x248bd8();
        },
        '\x5a\x53\x70': function _0x2d7276(_0x1daa7d, _0xd106be) {
            return _0x1daa7d - _0xd106be;
        },
        '\x68\x51\x43': function _0x960681(_0x4309f4, _0x505ce9) {
            return _0x4309f4 * _0x505ce9;
        },
        '\x68\x6e\x4d': function _0x2d01c3(_0x2bcdf4) {
            return _0x2bcdf4();
        },
        '\x54\x52\x49': function _0x2d75e2(_0x197b56) {
            return _0x197b56();
        },
        '\x46\x71\x56': function _0x255c54(_0x829ea2, _0x3a0f42, _0x156118, _0x7cb1dc, _0x2982fa, _0x2c0766, _0x2230a8, _0x19795b, _0x8ce66e, _0x1820fa) {
            return _0x829ea2(_0x3a0f42, _0x156118, _0x7cb1dc, _0x2982fa, _0x2c0766, _0x2230a8, _0x19795b, _0x8ce66e, _0x1820fa);
        },
        '\x74\x46\x56': function _0x2a7645(_0x5c3587, _0x4530d1) {
            return _0x5c3587 * _0x4530d1;
        },
        '\x67\x53\x57': function _0x576c7f(_0x2e3dfe, _0x5eab37) {
            return _0x2e3dfe * _0x5eab37;
        },
        '\x64\x64\x4d': function _0xbf26c3(_0x1aac56, _0x3eac2a, _0x4efb85, _0x44ebb0, _0xe6b5be, _0x7858d9, _0xabbc5b, _0x3c071d, _0x25d857, _0x498aa9, _0x4725c4, _0x46bca4) {
            return _0x1aac56(_0x3eac2a, _0x4efb85, _0x44ebb0, _0xe6b5be, _0x7858d9, _0xabbc5b, _0x3c071d, _0x25d857, _0x498aa9, _0x4725c4, _0x46bca4);
        },
        '\x45\x4e\x70': function _0x523e49(_0x2aa4db, _0x5689a1, _0x14634a, _0x4c5351, _0x3e9c44, _0xab72fe, _0x56bb0e, _0x1d659e, _0xeecaa0, _0x305d3b) {
            return _0x2aa4db(_0x5689a1, _0x14634a, _0x4c5351, _0x3e9c44, _0xab72fe, _0x56bb0e, _0x1d659e, _0xeecaa0, _0x305d3b);
        },
        '\x62\x45\x4c': function _0x5e2db3(_0x3055b1) {
            return _0x3055b1();
        },
        '\x72\x55\x65': function _0x179f37(_0x501ffd, _0x5a79b7) {
            return _0x501ffd * _0x5a79b7;
        },
        '\x6d\x4f\x58': function _0x3508ce(_0x43e336, _0x135c92, _0x40d012, _0x168635, _0x4b927b, _0x5c8182, _0x426a79, _0x2d4af3, _0x24cbc5, _0x5ce4f) {
            return _0x43e336(_0x135c92, _0x40d012, _0x168635, _0x4b927b, _0x5c8182, _0x426a79, _0x2d4af3, _0x24cbc5, _0x5ce4f);
        },
        '\x49\x7a\x74': function _0x5a04c6(_0x1a08e5, _0x4001f5) {
            return _0x1a08e5 * _0x4001f5;
        },
        '\x55\x48\x79': function _0x394bd6(_0xed10bb) {
            return _0xed10bb();
        },
        '\x73\x75\x4d': function _0x134558(_0x55f71a, _0x330bf1) {
            return _0x55f71a * _0x330bf1;
        },
        '\x4b\x5a\x42': function _0x236d03(_0x576a85, _0x3cb23a) {
            return _0x576a85 * _0x3cb23a;
        },
        '\x49\x79\x70': function _0x355154(_0x206c37) {
            return _0x206c37();
        },
        '\x71\x55\x61': function _0xb078dd(_0x77b260, _0x5f10e2) {
            return _0x77b260 * _0x5f10e2;
        },
        '\x74\x42\x5a': function _0x286f3b(_0x5e09df) {
            return _0x5e09df();
        }
    };
    ctx[_0x4499('0x9')](new java[_0x4499('0xa')][_0x4499('0xb')]({
        '\x72\x75\x6e': function () {
            var _0x1a42b4 = {
                '\x72\x48\x41': function _0x235576(_0x335daa, _0x120fe1) {
                    return _0xad8f53[_0x4499('0xc')](_0x335daa, _0x120fe1);
                },
                '\x6f\x77\x79': function _0x3ff376(_0x529616, _0x2c92ef) {
                    return _0xad8f53[_0x4499('0xd')](_0x529616, _0x2c92ef);
                }
            };
            try {
                var _0x50dd5b = _0x4499('0xe')[_0x4499('0xf')]('\x7c'), _0x10871c = 0x0;
                while (!![]) {
                    switch (_0x50dd5b[_0x10871c++]) {
                    case '0':
                        t2 = _0xad8f53[_0x4499('0x10')](NewText, _0x4499('0x11'), 'CC', 0xf, _0x4499('0x12'));
                        continue;
                    case '1':
                        n4[_0x4499('0x13')](n5);
                        continue;
                    case '2':
                        n2[_0x4499('0x13')](n3);
                        continue;
                    case '3':
                        ;
                        continue;
                    case '4':
                        if (_0xad8f53[_0x4499('0x14')](nc1, null)) {
                            nc1[_0x4499('0x15')]();
                        }
                        continue;
                    case '5':
                        n5 = _0xad8f53[_0x4499('0x16')](NewView, 'LL', _0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](W), 0.619), _0xad8f53[_0x4499('0x19')](_0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](H), 0.1), _0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](W), 0.01)), 'CC', 0x1, 0x1, [
                            null,
                            _0x4499('0x1a')
                        ], 0xf, function (_0x10a25b) {
                            if (_0x1a42b4[_0x4499('0x1b')](gb2, !![])) {
                                nc1[_0x4499('0x15')]();
                                _0x1a42b4[_0x4499('0x1c')](jslog, jst2);
                            } else {
                                _0x1a42b4[_0x4499('0x1c')](print, _0x4499('0x1d'));
                            }
                            ;
                        });
                        continue;
                    case '6':
                        t1 = _0xad8f53[_0x4499('0x10')](NewText, jst6, 'LC', 0xf, _0x4499('0x12'));
                        continue;
                    case '7':
                        n2 = _0xad8f53[_0x4499('0x16')](NewView, 'LL', _0xad8f53[_0x4499('0x1e')](_0xad8f53[_0x4499('0x1f')](W), 0.613), _0xad8f53[_0x4499('0x1e')](_0xad8f53[_0x4499('0x20')](H), 0.65), 'CB', 0x1, 0x0, _0x4499('0x21'), null, null);
                        continue;
                    case '8':
                        n0 = _0xad8f53[_0x4499('0x22')](NewView, 'LL', _0xad8f53[_0x4499('0x23')](_0xad8f53[_0x4499('0x20')](W), 0.629), _0xad8f53[_0x4499('0x24')](_0xad8f53[_0x4499('0x20')](H), 0.75), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '9':
                        nc1 = _0xad8f53[_0x4499('0x25')](NewCDV, 0x0, _0x4499('0x26'), 0x0, n0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                        continue;
                    case '10':
                        n1[_0x4499('0x13')](n2);
                        continue;
                    case '11':
                        n3[_0x4499('0x13')](t1);
                        continue;
                    case '12':
                        n0[_0x4499('0x13')](n1);
                        continue;
                    case '13':
                        n1 = _0xad8f53[_0x4499('0x27')](NewView, 'LL', _0xad8f53[_0x4499('0x24')](_0xad8f53[_0x4499('0x28')](W), 0.629), _0xad8f53[_0x4499('0x29')](_0xad8f53[_0x4499('0x28')](H), 0.75), 'CC', 0x1, 0x1, [
                            'LR',
                            _0x4499('0x2a'),
                            _0x4499('0x2b')
                        ], 0xf, null);
                        continue;
                    case '14':
                        n5[_0x4499('0x13')](t2);
                        continue;
                    case '15':
                        n3 = _0xad8f53[_0x4499('0x2c')](NewView, 'SV', _0xad8f53[_0x4499('0x2d')](_0xad8f53[_0x4499('0x2e')](W), 0.613), _0xad8f53[_0x4499('0x19')](_0xad8f53[_0x4499('0x2f')](_0xad8f53[_0x4499('0x2e')](H), 0.65), _0xad8f53[_0x4499('0x30')](_0xad8f53[_0x4499('0x31')](W), 0.008)), null, null, 0x1, [
                            null,
                            _0x4499('0x1a')
                        ], [
                            0xf,
                            0xf,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '16':
                        n4 = _0xad8f53[_0x4499('0x2c')](NewView, 'LL', _0xad8f53[_0x4499('0x30')](_0xad8f53[_0x4499('0x31')](W), 0.629), _0xad8f53[_0x4499('0x32')](_0xad8f53[_0x4499('0x33')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '17':
                        n1[_0x4499('0x13')](n4);
                        continue;
                    }
                    break;
                }
            } catch (_0x4ed64b) {
                _0xad8f53[_0x4499('0xd')](print, _0x4ed64b);
            }
        }
    }));
    ctx[_0x4499('0x9')](new java[_0x4499('0xa')][_0x4499('0xb')]({
        '\x72\x75\x6e': function () {
            new android['os'][_0x4499('0x34')]()[_0x4499('0x35')](new java[_0x4499('0xa')][_0x4499('0xb')]({
                '\x72\x75\x6e': function () {
                    gb2 = !![];
                }
            }), 0x2710);
        }
    }));
}
;


var _0x4656 = [
    'YWRkVmlldw\x3d\x3d',
    'RnZD',
    'IzAwMDAwMA\x3d\x3d',
    'VWxq',
    'UktR',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'QUFK',
    'VWJK',
    'b3Nk',
    'NXwzfDl8MTR8MTV8MTN8MTJ8MTZ8MnwwfDE3fDEwfDExfDF8NHw2fDh8MTh8Nw\x3d\x3d',
    'UURT',
    '54mp5ZOB6ZmE6a2U',
    'VklB',
    'UlZr',
    'RW50aXR5IOWunuS9k\x2baOp\x2bWItg\x3d\x3d',
    '6I2v5rC05pWI5p6c',
    'cUlw',
    'ZGlzbWlzcw\x3d\x3d',
    'VlVW',
    '5LiN5Lya55So77yf5p\x2bl55yL5biu5YqpID4\x3d',
    'bUV2',
    'Z3dP',
    'dktS',
    'Qmdh',
    'a1Bo',
    '54mp5ZOB5re75Yqg',
    'V2xa',
    'dEtP',
    'ck1F',
    'bmhh',
    'c216',
    'I2I0ZWJlYmVi',
    'Ukht',
    'UkdB',
    'VURO',
    'WWty',
    'YkRR',
    'bUZ3',
    'Rkxy',
    'U2VX',
    'T1VY',
    'b0Nl',
    'UXls',
    'MXwyfDE2fDd8MTN8NHwxOXw4fDE0fDZ8MTB8OXwzfDExfDE3fDB8NXwxNXwxMnwxOA\x3d\x3d',
    'b01L',
    '6Ieq556E55m95ZCN5Y2VKOW8gOWPkeS4rSk\x3d',
    'eW1I',
    'cVdE',
    '546p5a625Lyg6YCB',
    'emZH',
    'ZmxJ',
    'a3BF',
    'WEtV',
    'S2xy',
    'VHpK',
    '6Lef6Liq6Ieq556EUHJvKOW8gOWPkeS4rSk\x3d',
    'bnJB',
    'ZlRE',
    '6Jma56m65Zue5by5',
    'NHwxfDB8M3wy',
    'Z1hY',
    'WW5h',
    'QXVk',
    'c01s',
    'ZGNr',
    'a3ZT',
    'Sm9B',
    'WGJp',
    'QmVoYXZpb3Ig546p5a626KGM5Li6',
    '6Ieq6LWw6Jma56m6KOW8gOWPkeS4rSk\x3d',
    'Z0lr',
    'aVJU',
    'WXZa',
    'RmJD',
    'SmNO',
    'NXwyfDExfDd8MTd8NHwxNnwxfDE1fDZ8OXw4fDEyfDEwfDN8MTN8MHwxNA\x3d\x3d',
    'eEpi',
    'UEti',
    'a1p6',
    'eVpx',
    'RVlx',
    'emRX',
    'dUVh',
    'cnpJ',
    'ekl4',
    'RXRF',
    'TWl457KS5a2Q',
    'MXwyfDR8MHwz',
    'WHhy',
    'cVNn',
    'c05K',
    'eE1D',
    'Z3Vs',
    'dHZV',
    'Q2hV',
    '55Sf54mp5pi\x2b6KGA',
    'M3wwfDR8Mnwx',
    'RUdm',
    'Yll5',
    'Y0pJ',
    '6ISa5pys5a\x2b85YWl',
    'Unlo',
    'dm5C',
    'RnVuY3Rpb24g5Yqf6IO95YiX6KGo',
    'Z2VV',
    'TXJG',
    'bHVj',
    'RFBz',
    'W\x2bW3suWFs\x2bmXrV0\x3d',
    'NnwwfDF8Mnw0fDN8OHw3fDU\x3d',
    'c3BsaXQ\x3d',
    'SEFG',
    'a2JE',
    'TXJR',
    'c09h',
    'I2I0ZjdmN2Y3',
    'RmZY',
    'W\x2bW3suW8gOWQr10\x3d',
    'VFlQ',
    'ZUpG',
    'ZFpX',
    'I2I0ZWZmZmQ4',
    'I2I0ZDhmZmY5',
    'I2I0ZjBmMGYw'
];
(function (_0x1fa2cf, _0x143b83) {
    var _0x43c859 = function (_0x186630) {
        while (--_0x186630) {
            _0x1fa2cf['\x70\x75\x73\x68'](_0x1fa2cf['\x73\x68\x69\x66\x74']());
        }
    };
    _0x43c859(++_0x143b83);
}(_0x4656, 0xec));
var _0x6465 = function (_0x564bc5, _0x3ec56e) {
    _0x564bc5 = _0x564bc5 - 0x0;
    var _0x5416a7 = _0x4656[_0x564bc5];
    if (_0x6465['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x117842 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x277567 = _0x117842();
            var _0x4aebfc = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x277567['\x61\x74\x6f\x62'] || (_0x277567['\x61\x74\x6f\x62'] = function (_0x3783b8) {
                var _0x51e2fd = String(_0x3783b8)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x39bd2c = 0x0, _0x40c58d, _0x59d715, _0x1570d3 = 0x0, _0x51f0ea = ''; _0x59d715 = _0x51e2fd['\x63\x68\x61\x72\x41\x74'](_0x1570d3++); ~_0x59d715 && (_0x40c58d = _0x39bd2c % 0x4 ? _0x40c58d * 0x40 + _0x59d715 : _0x59d715, _0x39bd2c++ % 0x4) ? _0x51f0ea += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x40c58d >> (-0x2 * _0x39bd2c & 0x6)) : 0x0) {
                    _0x59d715 = _0x4aebfc['\x69\x6e\x64\x65\x78\x4f\x66'](_0x59d715);
                }
                return _0x51f0ea;
            });
        }());
        _0x6465['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0xd885d9) {
            var _0x5e5d9f = atob(_0xd885d9);
            var _0x4c3d35 = [];
            for (var _0x3f83a9 = 0x0, _0x246e48 = _0x5e5d9f['\x6c\x65\x6e\x67\x74\x68']; _0x3f83a9 < _0x246e48; _0x3f83a9++) {
                _0x4c3d35 += '\x25' + ('\x30\x30' + _0x5e5d9f['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3f83a9)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x4c3d35);
        };
        _0x6465['\x64\x61\x74\x61'] = {};
        _0x6465['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x6465['\x64\x61\x74\x61'][_0x564bc5] === undefined) {
        _0x5416a7 = _0x6465['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x5416a7);
        _0x6465['\x64\x61\x74\x61'][_0x564bc5] = _0x5416a7;
    } else {
        _0x5416a7 = _0x6465['\x64\x61\x74\x61'][_0x564bc5];
    }
    return _0x5416a7;
};
var ac1;
var ac2;
var fun1 = [];
var fun2 = [
    _0x6465('0x0'),
    _0x6465('0x0'),
    _0x6465('0x0')
];
var fun3 = [
    _0x6465('0x0'),
    _0x6465('0x0')
];
function addoption(_0x12c84d, _0x3bf6df, _0x294e18) {
    var _0x19368d = {
        '\x48\x41\x46': function _0x1b8cca(_0x136539, _0x21101f, _0x1a5a20, _0x10b897, _0x398d84, _0x404d92, _0x2f5c5d, _0x481f25, _0x2a0c4f, _0x43a64c) {
            return _0x136539(_0x21101f, _0x1a5a20, _0x10b897, _0x398d84, _0x404d92, _0x2f5c5d, _0x481f25, _0x2a0c4f, _0x43a64c);
        },
        '\x6b\x62\x44': function _0x2fed54(_0xbe932c, _0x1ff517) {
            return _0xbe932c * _0x1ff517;
        },
        '\x4d\x72\x51': function _0x2abb38(_0x59bb99) {
            return _0x59bb99();
        },
        '\x73\x4f\x61': function _0x43934c(_0x33c9ac, _0x495326) {
            return _0x33c9ac * _0x495326;
        },
        '\x46\x66\x58': function _0x233bce(_0x5a1d9a, _0x2c8096) {
            return _0x5a1d9a == _0x2c8096;
        },
        '\x54\x59\x50': function _0x3bc0f4(_0x4f9dad, _0x45cacb, _0xc932f2, _0x476834, _0x51726c, _0x270f02, _0x5a7d78, _0x93a556, _0x5cad6c, _0xafce4d) {
            return _0x4f9dad(_0x45cacb, _0xc932f2, _0x476834, _0x51726c, _0x270f02, _0x5a7d78, _0x93a556, _0x5cad6c, _0xafce4d);
        },
        '\x65\x4a\x46': function _0x370623(_0x347657, _0x395b00) {
            return _0x347657 * _0x395b00;
        },
        '\x64\x5a\x57': function _0xec7f2f(_0x59f051) {
            return _0x59f051();
        },
        '\x46\x76\x43': function _0x4f9b08(_0x459ba0, _0x5df22c, _0x34e23d, _0x2458a9, _0x5643bb) {
            return _0x459ba0(_0x5df22c, _0x34e23d, _0x2458a9, _0x5643bb);
        },
        '\x55\x6c\x6a': function _0x25901e(_0x4c2d1d, _0x254bb5, _0x1ba526, _0x3f4cc6, _0x4d69f6, _0x4d177f, _0x411933, _0x1b8b65, _0x4e124f, _0x49831d) {
            return _0x4c2d1d(_0x254bb5, _0x1ba526, _0x3f4cc6, _0x4d69f6, _0x4d177f, _0x411933, _0x1b8b65, _0x4e124f, _0x49831d);
        },
        '\x52\x4b\x51': function _0x209559(_0x130454, _0x680aac) {
            return _0x130454 * _0x680aac;
        }
    };
    var _0x595a77 = _0x6465('0x1')[_0x6465('0x2')]('\x7c'), _0x264f4b = 0x0;
    while (!![]) {
        switch (_0x595a77[_0x264f4b++]) {
        case '0':
            avn1 = _0x19368d[_0x6465('0x3')](NewView, 'LL', _0x19368d[_0x6465('0x4')](_0x19368d[_0x6465('0x5')](W), 0.3), _0x19368d[_0x6465('0x6')](_0x19368d[_0x6465('0x5')](H), 0.02), 'CC', 0x1, 0x1, [
                null,
                _0x6465('0x7')
            ], 0x0, null);
            continue;
        case '1':
            if (_0x19368d[_0x6465('0x8')](_0x294e18, _0x6465('0x9'))) {
                avn2 = _0x19368d[_0x6465('0xa')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](H), 0.08), 'CC', 0x1, 0x1, [
                    'RT',
                    _0x6465('0xd'),
                    _0x6465('0xe')
                ], 0xa, _0x3bf6df);
            } else {
                avn2 = _0x19368d[_0x6465('0xa')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](H), 0.08), 'CC', 0x1, 0x0, _0x6465('0xf'), 0xa, _0x3bf6df);
            }
            continue;
        case '2':
            ;
            continue;
        case '3':
            avn0[_0x6465('0x10')](avn1);
            continue;
        case '4':
            avn3 = _0x19368d[_0x6465('0x11')](NewText, _0x12c84d, 'CC', 0xd, _0x6465('0x12'));
            continue;
        case '5':
            return avn0;
            continue;
        case '6':
            avn0 = _0x19368d[_0x6465('0x13')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0x14')](_0x19368d[_0x6465('0xc')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
            continue;
        case '7':
            avn2[_0x6465('0x10')](avn3);
            continue;
        case '8':
            avn0[_0x6465('0x10')](avn2);
            continue;
        }
        break;
    }
}
;
function B1() {
    var _0x67d2c8 = {
        '\x71\x49\x70': function _0x4d3c97(_0x44b55b) {
            return _0x44b55b();
        },
        '\x41\x41\x4a': function _0x5ad1f5(_0x3ae5d9) {
            return _0x3ae5d9();
        },
        '\x55\x62\x4a': function _0x56b532(_0x85c660, _0x550f50) {
            return _0x85c660 != _0x550f50;
        },
        '\x6f\x73\x64': function _0x366018(_0x31eece, _0xedd724) {
            return _0x31eece(_0xedd724);
        },
        '\x51\x44\x53': function _0x177d1b(_0x462d9b, _0x3a683c, _0x148d90) {
            return _0x462d9b(_0x3a683c, _0x148d90);
        },
        '\x52\x56\x6b': function _0x1d23bb(_0x1e4fdf, _0x4b7f6e, _0x3f76c2, _0x14b248, _0xaa153a) {
            return _0x1e4fdf(_0x4b7f6e, _0x3f76c2, _0x14b248, _0xaa153a);
        },
        '\x56\x55\x56': function _0x22a466(_0x32372a, _0x43c1f0, _0x39485e) {
            return _0x32372a(_0x43c1f0, _0x39485e);
        },
        '\x76\x4b\x52': function _0x3bfa8b(_0x387056, _0x5588f6, _0x58e1f5, _0x2aafcb, _0x31526a) {
            return _0x387056(_0x5588f6, _0x58e1f5, _0x2aafcb, _0x31526a);
        },
        '\x42\x67\x61': function _0x1264dd(_0x1a762c, _0x1182aa) {
            return _0x1a762c != _0x1182aa;
        },
        '\x6b\x50\x68': function _0xe0c6eb(_0x2c865c, _0xd19875, _0x2e7cc1) {
            return _0x2c865c(_0xd19875, _0x2e7cc1);
        },
        '\x57\x6c\x5a': function _0x5229f8(_0x79b251, _0x151441, _0x1b7b33, _0x3b9be4, _0x3e6b63, _0xac435d, _0x2f8cf7, _0x56e2b9, _0x98a73a, _0x131c19) {
            return _0x79b251(_0x151441, _0x1b7b33, _0x3b9be4, _0x3e6b63, _0xac435d, _0x2f8cf7, _0x56e2b9, _0x98a73a, _0x131c19);
        },
        '\x74\x4b\x4f': function _0x50ed46(_0x48cb07, _0xc1479a) {
            return _0x48cb07 * _0xc1479a;
        },
        '\x72\x4d\x45': function _0x17b89e(_0xc09260) {
            return _0xc09260();
        },
        '\x6e\x68\x61': function _0x253d8e(_0x360083, _0x5ab8fc) {
            return _0x360083 * _0x5ab8fc;
        },
        '\x73\x6d\x7a': function _0x478aca(_0x2a6c7f) {
            return _0x2a6c7f();
        },
        '\x52\x48\x6d': function _0x3509be(_0x131a91) {
            return _0x131a91();
        },
        '\x52\x47\x41': function _0x4ad530(_0x52f4ee) {
            return _0x52f4ee();
        },
        '\x55\x44\x4e': function _0x186609(_0x40a3fc, _0x5641d7) {
            return _0x40a3fc * _0x5641d7;
        },
        '\x59\x6b\x72': function _0x544806(_0x1990a3) {
            return _0x1990a3();
        },
        '\x62\x44\x51': function _0x3d6535(_0x446bab, _0x3da508) {
            return _0x446bab * _0x3da508;
        },
        '\x6d\x46\x77': function _0x1c734d(_0x31aae0) {
            return _0x31aae0();
        },
        '\x46\x4c\x72': function _0xd2ee99(_0xd3033, _0x530169, _0x25bd97, _0xd0e048, _0x4296ce, _0x210fc8, _0x103943, _0x446ce3, _0x2653f8, _0x74f56d, _0x31be4b, _0x331ee5) {
            return _0xd3033(_0x530169, _0x25bd97, _0xd0e048, _0x4296ce, _0x210fc8, _0x103943, _0x446ce3, _0x2653f8, _0x74f56d, _0x31be4b, _0x331ee5);
        },
        '\x53\x65\x57': function _0x50c607(_0x321577, _0x1235dc) {
            return _0x321577 * _0x1235dc;
        },
        '\x4f\x55\x58': function _0x46a4cb(_0x1216bf, _0x4587e6) {
            return _0x1216bf * _0x4587e6;
        },
        '\x6f\x43\x65': function _0x4a3c24(_0x41b211) {
            return _0x41b211();
        },
        '\x51\x79\x6c': function _0x308279(_0x44ea65, _0x24f980) {
            return _0x44ea65(_0x24f980);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            var _0x30d068 = {
                '\x56\x49\x41': function _0x2d0a8e(_0x854d61) {
                    return _0x67d2c8[_0x6465('0x18')](_0x854d61);
                },
                '\x6d\x45\x76': function _0x25bcca(_0x2bb1bc, _0x10e71a) {
                    return _0x67d2c8[_0x6465('0x19')](_0x2bb1bc, _0x10e71a);
                },
                '\x67\x77\x4f': function _0x4ff797(_0x53654e, _0x5af773) {
                    return _0x67d2c8[_0x6465('0x1a')](_0x53654e, _0x5af773);
                }
            };
            try {
                var _0x3b4321 = _0x6465('0x1b')[_0x6465('0x2')]('\x7c'), _0x2c126c = 0x0;
                while (!![]) {
                    switch (_0x3b4321[_0x2c126c++]) {
                    case '0':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '1':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x1c')](addoption, _0x6465('0x1d'), function (_0x30ddcb) {
                            _0x30d068[_0x6465('0x1e')](MaxEnchanted);
                        }));
                        continue;
                    case '2':
                        cv1 = _0x67d2c8[_0x6465('0x1f')](NewText, _0x6465('0x20'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '3':
                        ;
                        continue;
                    case '4':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x1c')](addoption, _0x6465('0x21'), function (_0x5b77db) {
                            _0x67d2c8[_0x6465('0x22')](EffectEditor);
                        }));
                        continue;
                    case '5':
                        if (_0x67d2c8[_0x6465('0x19')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '6':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x24')](addoption, _0x6465('0x25'), function (_0x34f691) {
                            ac2[_0x6465('0x23')]();
                            if (_0x30d068[_0x6465('0x26')](ac1, null)) {
                                ac1[_0x6465('0x23')]();
                                ac1 = null;
                            }
                            ;
                            _0x30d068[_0x6465('0x27')](jslog, jst2);
                        }));
                        continue;
                    case '7':
                        _0x67d2c8[_0x6465('0x28')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '8':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '9':
                        if (_0x67d2c8[_0x6465('0x29')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '10':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '11':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x2a')](addoption, _0x6465('0x2b'), function (_0x50a552) {
                            _0x67d2c8[_0x6465('0x22')](ItemEditor);
                        }));
                        continue;
                    case '12':
                        av3 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x2d')](_0x67d2c8[_0x6465('0x2e')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x30')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '13':
                        av2 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x32')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '14':
                        ;
                        continue;
                    case '15':
                        av1 = _0x67d2c8[_0x6465('0x2c')](NewView, 'SV', _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '16':
                        av4 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x34')](_0x67d2c8[_0x6465('0x35')](W), 0.3), _0x67d2c8[_0x6465('0x36')](_0x67d2c8[_0x6465('0x37')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '17':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '18':
                        ac2 = _0x67d2c8[_0x6465('0x38')](NewCDV, 0x2, null, 0x0, av1, _0x67d2c8[_0x6465('0x39')](_0x67d2c8[_0x6465('0x37')](W), 0.3), _0x67d2c8[_0x6465('0x3a')](_0x67d2c8[_0x6465('0x37')](H), 0.49), ![], !![], 'RT', _0x67d2c8[_0x6465('0x3a')](_0x67d2c8[_0x6465('0x3b')](W), 0.08), 0x0);
                        continue;
                    }
                    break;
                }
            } catch (_0x5687fc) {
                _0x67d2c8[_0x6465('0x3c')](print, _0x5687fc);
            }
        }
    }));
}
;
function B2() {
    var _0x1e2f7d = {
        '\x7a\x66\x47': function _0x5c2be6(_0x5b2c13) {
            return _0x5b2c13();
        },
        '\x6f\x4d\x4b': function _0x3a6e6c(_0x495fd0, _0xdd9a33, _0x5d3fad) {
            return _0x495fd0(_0xdd9a33, _0x5d3fad);
        },
        '\x79\x6d\x48': function _0x2c5d47(_0x55e42c, _0x2fed43) {
            return _0x55e42c != _0x2fed43;
        },
        '\x71\x57\x44': function _0x165189(_0xea46de, _0x460c6e, _0x1878a5) {
            return _0xea46de(_0x460c6e, _0x1878a5);
        },
        '\x66\x6c\x49': function _0x2ae094(_0xcff5d2, _0x25bf5b, _0x5c50da, _0x133d03, _0x5a458e, _0x39e54f, _0x43d510, _0x47a3f5, _0x3fb1c0, _0x418ef3) {
            return _0xcff5d2(_0x25bf5b, _0x5c50da, _0x133d03, _0x5a458e, _0x39e54f, _0x43d510, _0x47a3f5, _0x3fb1c0, _0x418ef3);
        },
        '\x6b\x70\x45': function _0x3e62f2(_0x458878, _0x131f02) {
            return _0x458878 * _0x131f02;
        },
        '\x58\x4b\x55': function _0x281fc9(_0xa694f1) {
            return _0xa694f1();
        },
        '\x4b\x6c\x72': function _0x375a30(_0x22ffb8, _0x362e79) {
            return _0x22ffb8 * _0x362e79;
        },
        '\x54\x7a\x4a': function _0x33111b(_0xde227d, _0xca2613, _0x4254ec) {
            return _0xde227d(_0xca2613, _0x4254ec);
        },
        '\x6e\x72\x41': function _0x19a085(_0x3a0604) {
            return _0x3a0604();
        },
        '\x66\x54\x44': function _0x565227(_0x15772a, _0x3fb466, _0x4d762c, _0x28b0f5) {
            return _0x15772a(_0x3fb466, _0x4d762c, _0x28b0f5);
        },
        '\x41\x75\x64': function _0x2267f8(_0x3e03bc, _0x363597, _0x4fe486, _0x2f1c3f, _0x18f7f4, _0x4409e5, _0x1ddfa7, _0x330b7e, _0x2719ea, _0x296698, _0x3b9e7e, _0x5283c4) {
            return _0x3e03bc(_0x363597, _0x4fe486, _0x2f1c3f, _0x18f7f4, _0x4409e5, _0x1ddfa7, _0x330b7e, _0x2719ea, _0x296698, _0x3b9e7e, _0x5283c4);
        },
        '\x73\x4d\x6c': function _0x485045(_0x4e32fa, _0x53f203) {
            return _0x4e32fa * _0x53f203;
        },
        '\x64\x63\x6b': function _0x155aa7(_0x4c2685, _0x412d38, _0x112bde, _0x4d55b8, _0x4c6692, _0x332239, _0x5c9675, _0x5c30da, _0x2aa7e7, _0x59fb84) {
            return _0x4c2685(_0x412d38, _0x112bde, _0x4d55b8, _0x4c6692, _0x332239, _0x5c9675, _0x5c30da, _0x2aa7e7, _0x59fb84);
        },
        '\x6b\x76\x53': function _0x5241fb(_0x5cba22) {
            return _0x5cba22();
        },
        '\x4a\x6f\x41': function _0x566f9e(_0x3347c0, _0x3cd01a) {
            return _0x3347c0 * _0x3cd01a;
        },
        '\x58\x62\x69': function _0xf8cd9a(_0x2341fb, _0x1ef8ef, _0x45ad52, _0x59d720, _0x278294) {
            return _0x2341fb(_0x1ef8ef, _0x45ad52, _0x59d720, _0x278294);
        },
        '\x67\x49\x6b': function _0x29b871(_0x175262, _0x562b32) {
            return _0x175262 * _0x562b32;
        },
        '\x69\x52\x54': function _0x522bd3(_0x59fda8) {
            return _0x59fda8();
        },
        '\x59\x76\x5a': function _0x104676(_0x123d45, _0x3a1c3a) {
            return _0x123d45 * _0x3a1c3a;
        },
        '\x46\x62\x43': function _0x3c3f46(_0x52398a) {
            return _0x52398a();
        },
        '\x4a\x63\x4e': function _0x16ff81(_0x7f2e0e, _0x240d2f) {
            return _0x7f2e0e(_0x240d2f);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x53d943 = _0x6465('0x3d')[_0x6465('0x2')]('\x7c'), _0x39a80d = 0x0;
                while (!![]) {
                    switch (_0x53d943[_0x39a80d++]) {
                    case '0':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x3e')](addoption, _0x6465('0x3f'), function (_0x8abe64) {
                        }));
                        continue;
                    case '1':
                        if (_0x1e2f7d[_0x6465('0x40')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '2':
                        ;
                        continue;
                    case '3':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x41')](addoption, _0x6465('0x42'), function (_0x4639b9) {
                            _0x1e2f7d[_0x6465('0x43')](PlayerPosition);
                        }));
                        continue;
                    case '4':
                        av2 = _0x1e2f7d[_0x6465('0x44')](NewView, 'LL', _0x1e2f7d[_0x6465('0x45')](_0x1e2f7d[_0x6465('0x46')](W), 0.3), _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x46')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '5':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x48')](addoption, _0x6465('0x49'), function (_0x1478c4) {
                        }));
                        continue;
                    case '6':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '7':
                        ;
                        continue;
                    case '8':
                        av4 = _0x1e2f7d[_0x6465('0x44')](NewView, 'LL', _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x4a')](W), 0.3), _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x4a')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '9':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '10':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '11':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x4b')](addoption, _0x6465('0x4c'), function (_0x520b6e) {
                            var _0x12aaa8 = {
                                '\x67\x58\x58': function _0x355649(_0x1fe9b2, _0x50aab0) {
                                    return _0x1fe9b2 != _0x50aab0;
                                },
                                '\x59\x6e\x61': function _0x15eb9d(_0x51ab5b, _0x119580) {
                                    return _0x51ab5b == _0x119580;
                                }
                            };
                            var _0x413590 = _0x6465('0x4d')[_0x6465('0x2')]('\x7c'), _0x1cd6a7 = 0x0;
                            while (!![]) {
                                switch (_0x413590[_0x1cd6a7++]) {
                                case '0':
                                    ;
                                    continue;
                                case '1':
                                    if (_0x12aaa8[_0x6465('0x4e')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '2':
                                    ;
                                    continue;
                                case '3':
                                    if (_0x12aaa8[_0x6465('0x4f')](fun2[0x0], _0x6465('0x0'))) {
                                        fun2[0x0] = _0x6465('0x9');
                                    } else {
                                        fun2[0x0] = _0x6465('0x0');
                                    }
                                    continue;
                                case '4':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                }
                                break;
                            }
                        }, fun2[0x0]));
                        continue;
                    case '12':
                        ac2 = _0x1e2f7d[_0x6465('0x50')](NewCDV, 0x2, null, 0x0, av1, _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](W), 0.3), _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](H), 0.49), ![], !![], 'RT', _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](W), 0.08), 0x0);
                        continue;
                    case '13':
                        av1 = _0x1e2f7d[_0x6465('0x52')](NewView, 'SV', _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x53')](W), 0.3), _0x1e2f7d[_0x6465('0x54')](_0x1e2f7d[_0x6465('0x53')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '14':
                        cv1 = _0x1e2f7d[_0x6465('0x55')](NewText, _0x6465('0x56'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '15':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '16':
                        if (_0x1e2f7d[_0x6465('0x40')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '17':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x48')](addoption, _0x6465('0x57'), function (_0x369826) {
                        }));
                        continue;
                    case '18':
                        _0x1e2f7d[_0x6465('0x55')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '19':
                        av3 = _0x1e2f7d[_0x6465('0x52')](NewView, 'LL', _0x1e2f7d[_0x6465('0x58')](_0x1e2f7d[_0x6465('0x59')](W), 0.3), _0x1e2f7d[_0x6465('0x5a')](_0x1e2f7d[_0x6465('0x5b')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    }
                    break;
                }
            } catch (_0x18135d) {
                _0x1e2f7d[_0x6465('0x5c')](print, _0x18135d);
            }
        }
    }));
}
;
function B3() {
    var _0x7cf5b = {
        '\x6b\x5a\x7a': function _0x2d95d6(_0x59edd8) {
            return _0x59edd8();
        },
        '\x78\x4a\x62': function _0x3b0e90(_0x30ca05, _0x4f66fb, _0x6dc9f9, _0x1c5465, _0xdfde06, _0x48d0b9, _0x273f40, _0x38576e, _0x48c0f4, _0x5643ad, _0x40e41a, _0xcb289f) {
            return _0x30ca05(_0x4f66fb, _0x6dc9f9, _0x1c5465, _0xdfde06, _0x48d0b9, _0x273f40, _0x38576e, _0x48c0f4, _0x5643ad, _0x40e41a, _0xcb289f);
        },
        '\x50\x4b\x62': function _0x429b45(_0x576583, _0x3fba23) {
            return _0x576583 * _0x3fba23;
        },
        '\x79\x5a\x71': function _0xfa2dc8(_0x4ca7f8) {
            return _0x4ca7f8();
        },
        '\x45\x59\x71': function _0x52f2be(_0x57ec7b) {
            return _0x57ec7b();
        },
        '\x7a\x64\x57': function _0x3489c2(_0x4343c7, _0x285cb1, _0x55f5ce, _0x13e7c9, _0x1e6810, _0x1087be, _0x48ff4f, _0x3ea156, _0x5627e5, _0xad5124) {
            return _0x4343c7(_0x285cb1, _0x55f5ce, _0x13e7c9, _0x1e6810, _0x1087be, _0x48ff4f, _0x3ea156, _0x5627e5, _0xad5124);
        },
        '\x75\x45\x61': function _0x35e445(_0x5c6ba3) {
            return _0x5c6ba3();
        },
        '\x72\x7a\x49': function _0x286d76(_0x196992, _0x158634) {
            return _0x196992 * _0x158634;
        },
        '\x7a\x49\x78': function _0xce4725(_0x49fc57) {
            return _0x49fc57();
        },
        '\x45\x74\x45': function _0x43b639(_0x3f1c74, _0x4e8690, _0x32a3dd, _0x30f921) {
            return _0x3f1c74(_0x4e8690, _0x32a3dd, _0x30f921);
        },
        '\x73\x4e\x4a': function _0x5f0c9c(_0x49f221, _0x23eb91) {
            return _0x49f221 * _0x23eb91;
        },
        '\x78\x4d\x43': function _0x5e5a67(_0x83b678) {
            return _0x83b678();
        },
        '\x67\x75\x6c': function _0x555016(_0x2de186) {
            return _0x2de186();
        },
        '\x74\x76\x55': function _0x2f1d2f(_0x179ddb, _0xdb646d) {
            return _0x179ddb != _0xdb646d;
        },
        '\x43\x68\x55': function _0x4b816d(_0x464ed6, _0x5b922a, _0x34c5f8, _0x2f6ac7) {
            return _0x464ed6(_0x5b922a, _0x34c5f8, _0x2f6ac7);
        },
        '\x63\x4a\x49': function _0x2c2e46(_0xfa5fcd, _0x4d9c91, _0x3aa56d) {
            return _0xfa5fcd(_0x4d9c91, _0x3aa56d);
        },
        '\x52\x79\x68': function _0x5a69b2(_0x261758, _0x48edba, _0x287a0e, _0x3e1546, _0x29c846) {
            return _0x261758(_0x48edba, _0x287a0e, _0x3e1546, _0x29c846);
        },
        '\x76\x6e\x42': function _0x274c17(_0x3861ee, _0x1993fb, _0x4c50b5, _0x39738c, _0x1e79d2) {
            return _0x3861ee(_0x1993fb, _0x4c50b5, _0x39738c, _0x1e79d2);
        },
        '\x67\x65\x55': function _0x52b3b8(_0x1275f0, _0x2c4aeb, _0x4617b3, _0xcfc43a, _0x3bd45e, _0x5af262, _0x33ea6a, _0x5dfdd9, _0x1ddb84, _0x477211) {
            return _0x1275f0(_0x2c4aeb, _0x4617b3, _0xcfc43a, _0x3bd45e, _0x5af262, _0x33ea6a, _0x5dfdd9, _0x1ddb84, _0x477211);
        },
        '\x4d\x72\x46': function _0x428974(_0x519d59) {
            return _0x519d59();
        },
        '\x6c\x75\x63': function _0x5aa502(_0x3afc67) {
            return _0x3afc67();
        },
        '\x44\x50\x73': function _0xd946d8(_0x3bd445, _0x480148) {
            return _0x3bd445(_0x480148);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x4a4768 = _0x6465('0x5d')[_0x6465('0x2')]('\x7c'), _0x221a6c = 0x0;
                while (!![]) {
                    switch (_0x4a4768[_0x221a6c++]) {
                    case '0':
                        ac2 = _0x7cf5b[_0x6465('0x5e')](NewCDV, 0x2, null, 0x0, av1, _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x60')](W), 0.3), _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x61')](H), 0.49), ![], !![], 'RT', _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x62')](W), 0.08), 0x0);
                        continue;
                    case '1':
                        av4 = _0x7cf5b[_0x6465('0x63')](NewView, 'LL', _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x64')](W), 0.3), _0x7cf5b[_0x6465('0x65')](_0x7cf5b[_0x6465('0x66')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '2':
                        ;
                        continue;
                    case '3':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x67')](addoption, _0x6465('0x68'), function (_0x1d4f78) {
                            var _0x52d50f = {
                                '\x58\x78\x72': function _0x2e8161(_0x12c75e, _0x13c9c4) {
                                    return _0x12c75e == _0x13c9c4;
                                },
                                '\x71\x53\x67': function _0x310650(_0xbc867e, _0x5c1df5) {
                                    return _0xbc867e != _0x5c1df5;
                                }
                            };
                            var _0x344943 = _0x6465('0x69')[_0x6465('0x2')]('\x7c'), _0x24883a = 0x0;
                            while (!![]) {
                                switch (_0x344943[_0x24883a++]) {
                                case '0':
                                    if (_0x52d50f[_0x6465('0x6a')](fun3[0x1], _0x6465('0x0'))) {
                                        fun3[0x1] = _0x6465('0x9');
                                    } else {
                                        fun3[0x1] = _0x6465('0x0');
                                    }
                                    continue;
                                case '1':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                case '2':
                                    if (_0x52d50f[_0x6465('0x6b')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '3':
                                    ;
                                    continue;
                                case '4':
                                    ;
                                    continue;
                                }
                                break;
                            }
                        }, fun3[0x1]));
                        continue;
                    case '4':
                        av2 = _0x7cf5b[_0x6465('0x63')](NewView, 'LL', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6d')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6e')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '5':
                        if (_0x7cf5b[_0x6465('0x6f')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '6':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '7':
                        ;
                        continue;
                    case '8':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '9':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '10':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x70')](addoption, _0x6465('0x71'), function (_0x30a5a0) {
                            var _0x549b02 = {
                                '\x45\x47\x66': function _0x208503(_0x3be06e, _0x3f91a7) {
                                    return _0x3be06e != _0x3f91a7;
                                },
                                '\x62\x59\x79': function _0x1cefa7(_0x4b9a94, _0x5744db) {
                                    return _0x4b9a94 == _0x5744db;
                                }
                            };
                            var _0x321ea2 = _0x6465('0x72')[_0x6465('0x2')]('\x7c'), _0x33a6a7 = 0x0;
                            while (!![]) {
                                switch (_0x321ea2[_0x33a6a7++]) {
                                case '0':
                                    if (_0x549b02[_0x6465('0x73')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '1':
                                    ;
                                    continue;
                                case '2':
                                    if (_0x549b02[_0x6465('0x74')](fun3[0x0], _0x6465('0x0'))) {
                                        fun3[0x0] = _0x6465('0x9');
                                    } else {
                                        fun3[0x0] = _0x6465('0x0');
                                    }
                                    continue;
                                case '3':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                case '4':
                                    ;
                                    continue;
                                }
                                break;
                            }
                        }, fun3[0x0]));
                        continue;
                    case '11':
                        if (_0x7cf5b[_0x6465('0x6f')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '12':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x75')](addoption, _0x6465('0x76'), function (_0x29fd0c) {
                            _0x7cf5b[_0x6465('0x60')](JsImporter);
                        }));
                        continue;
                    case '13':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '14':
                        _0x7cf5b[_0x6465('0x77')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '15':
                        cv1 = _0x7cf5b[_0x6465('0x78')](NewText, _0x6465('0x79'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '16':
                        av3 = _0x7cf5b[_0x6465('0x7a')](NewView, 'LL', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6e')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7b')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '17':
                        av1 = _0x7cf5b[_0x6465('0x7a')](NewView, 'SV', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7c')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7c')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x5e1584) {
                _0x7cf5b[_0x6465('0x7d')](print, _0x5e1584);
            }
        }
    }));
}
;

//----------------

var swi2=0;
function ItemEditor(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(ac1!=null){
ac1.dismiss();
ac1=null;
};
if(swi2<3){
swi2++;
TipMes("点按添加1个，长按添加64个");
};
av1=NewView("SV",W()*0.3,H()*0.49,null,null,2,null,null,null);
av2=NewView("LL",W()*0.3,H()*0.49,"CT",1,1,[null,"#b4f7f7f7"],10,null);
av3=NewView("LL",W()*0.3,H()*0.05,"CC",1,1,[null,"#b4ebebeb"],[10,10,0,0],null);
av4=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],[0,0,10,10],null);

avm0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
 avm1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
_avm2=NewView("LL",W()*0.3,H()*0.08,"CC",0,0,"#b4f0f0f0",10,null);
avm2=NewView("LL",W()*0.15,H()*0.08,"CC",1,0,"#b4f0f0f0",10,
function(v){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(nc1!=null){
nc1.dismiss();
};
n0=NewView("LL",W()*0.329,H()*0.85,"CC",1,2,null,null,null);
n1=NewView("LL",W()*0.329,H()*0.85,"CC",1,1,["RT","#ffa7ffd8","#ffffd3f8"],15,null);
n2=NewView("LL",W()*0.313,H()*0.75,"CB",1,0,"#11909090",null,null);
n3=NewView("SV",W()*0.313,H()*0.75-W()*0.008,null,null,1,[null,"#80ffffff"],[15,15,0,0],null);
n4=NewView("LL",W()*0.329,H()*0.1,"CC",1,2,null,null,null);
n5=NewView("LL",W()*0.319,H()*0.1-W()*0.01,"CC",1,1,[null,"#80ffffff"],15,
function(v){
nc1.dismiss();
}
);
var webv = new android.webkit.WebView(ctx);
webv.loadUrl("http://mc.zyyapp.com/");
t2=NewText("关闭","CC",15,"#000000");
n3.addView(webv);
n5.addView(t2);
n0.addView(n1);
n1.addView(n2);
n2.addView(n3);
n1.addView(n4);
n4.addView(n5);
nc1=NewCDV(0,"#64ffffff",0,n0,-1,-1,true,true,"CC",0,0);
}catch(err){print(err)}
}}));
TipMes("正在打开网页，请稍候...");
});
avm2$=NewView("LL",W()*0.15,H()*0.08,"CC",1,0,"#b4ffdede",10,
function(v){
ac1.dismiss();
}
);

avm3=NewText("查ID","CC",14,"#000000");
avm4=NewText("关闭","CC",14,"#000000");
avm0.addView(avm1);
avm0.addView(_avm2);
_avm2.addView(avm2);
_avm2.addView(avm2$);
avm2.addView(avm3);
avm2$.addView(avm4);

avn0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
 avn1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
avn2=NewView("LL",W()*0.3,H()*0.08,"CC",0,0,"#b4f0f0f0",10,null);
avn11=NewView("LL",W()*0.1,H()*0.08,"CC",0,2,null,10,null);
avn12=NewView("LL",W()*0.1,H()*0.08,"CC",0,2,null,10,null);
avn13=NewView("LL",W()*0.1,H()*0.08,"CC",0,0,"#b4c7fff0",10,
function(v){
if(et1.getText()!="" && et2.getText()!=""){
try{
Entity.setCarriedItem(getPlayerEnt(),et1.getText(),1,et2.getText());
}catch(e){TipMes("添加失败！")};
};
});
avn13.setOnLongClickListener(new android.view.View.OnLongClickListener()
{
onLongClick:
function(v){
try{
Entity.setCarriedItem(getPlayerEnt(),et1.getText(),64,et2.getText());
}catch(e){TipMes("添加失败！")};
return true;
}});

var et1=new android.widget.EditText(ctx);
et1.setText("");
et1.setHint("ID");
et1.setTextSize(10);
var et2=new android.widget.EditText(ctx);
et2.setText("0");
et2.setHint("SV");
et2.setTextSize(10);

avn3=NewText("添加","CC",14,"#000000");
avn0.addView(avn1);
avn0.addView(avn2);
avn2.addView(avn11);
avn11.addView(et1);
avn2.addView(avn12);
avn12.addView(et2);
avn2.addView(avn13);
avn13.addView(avn3);

cv1=NewText("ItemEditor v1.1","CC",10,"#000000");

av1.addView(av2);
av2.addView(av3);
av2.addView(avm0);
av3.addView(cv1);
av2.addView(avn0);

av2.addView(Aadd("钻石剑" ,276 ,0));
av2.addView(Aadd("附魔果" ,466 ,0));
av2.addView(Aadd("隐身药" ,373 ,8))
av2.addView(Aadd("伤害药" ,441 ,24));
av2.addView(Aadd("炸药包" ,46 ,0));
av2.addView(Aadd("打火石" ,259 ,0));
av2.addView(Aadd("TNT蛋(闪退)" ,383 ,65));
av2.addView(Aadd("凋零蛋" ,383 ,52));
av2.addView(Aadd("末影蛋(不动)" ,383 ,53));

av2.addView(av4);

ac1=NewCDV(2,null,0,av1,W()*0.3,H()*0.49,true,true,"RB",W()*0.08,0);
UIPlumb(av1, 100 , 0 , 150);
}catch(err){print(err)};
}}));
};

function Aadd(name,id,ts){
avm0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
 avm1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
avm2=NewView("LL",W()*0.3,H()*0.08,"CC",1,0,"#b4f0f0f0",10,
function(v){
Entity.setCarriedItem(getPlayerEnt(),id,1,ts);
});
avm2.setOnLongClickListener(new android.view.View.OnLongClickListener()
{
onLongClick:
function(v){
Entity.setCarriedItem(getPlayerEnt(),id,64,ts);
return true;
}})
avm3=NewText(name,"CC",14,"#000000");
avm0.addView(avm1);
avm0.addView(avm2);
avm2.addView(avm3);
return avm0;
};



function MaxEnchanted(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(ac1!=null){
ac1.dismiss();
ac1=null;
};
av1=NewView("SV",W()*0.3,H()*0.49,null,null,2,null,null,null);
av2=NewView("LL",W()*0.3,H()*0.49,"CT",1,1,[null,"#b4f7f7f7"],10,null);
av3=NewView("LL",W()*0.3,H()*0.05,"CC",1,1,[null,"#b4ebebeb"],[10,10,0,0],null);
av4=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],[0,0,10,10],null);

cv1=NewText("MaxEnchanted v1.7","CC",10,"#000000");

av1.addView(av2);
av2.addView(av3);
av3.addView(cv1);

av2.addView(addoption("锋利｜力量｜荆棘",
function(v){
for(a=0;a<9;a++){
Player.enchant(a, Enchantment.SHARPNESS, -98305);
Player.enchant(a, Enchantment.POWER, -98305);
Player.enchant(a, Enchantment.FLAME, -98305);
Player.enchant(a, Enchantment.INFINITY, -98305);
Player.enchant(a, Enchantment.PROTECTION, -98305);
Player.enchant(a, Enchantment.THORNS, -98305);
Player.enchant(a, Enchantment.UNBREAKING, -98305);
Player.enchant(a, Enchantment.RESPIRATION, -98305);
Player.enchant(a, Enchantment.AQUA_AFFINITY, -98305);
Player.enchant(a, Enchantment.DEPTH_STRIDER, -98305);
Player.enchant(a, Enchantment.FEATHER_FALLING, -98305);
};
}
));
av2.addView(addoption("击退｜冲击｜保护",
function(v){
for(a=0;a<9;a++){
Player.enchant(a, Enchantment.KNOCKBACK, -98305);
Player.enchant(a, Enchantment.FIRE_ASPECT, -98305);
Player.enchant(a, Enchantment.PUNCH, -98305);
Player.enchant(a, Enchantment.INFINITY, -98305);
Player.enchant(a, Enchantment.PROTECTION, -98305);
Player.enchant(a, Enchantment.UNBREAKING, -98305);
Player.enchant(a, Enchantment.RESPIRATION, -98305);
Player.enchant(a, Enchantment.AQUA_AFFINITY, -98305);
Player.enchant(a, Enchantment.DEPTH_STRIDER, -98305);
Player.enchant(a, Enchantment.FEATHER_FALLING, -98305);
};
}
));
av2.addView(addoption("时运 + 效率",
function(v){
for(a=0;a<9;a++){
Player.enchant(a, Enchantment.EFFICIENCY, -98305);
Player.enchant(a, Enchantment.FORTUNE, -98305);
Player.enchant(a, Enchantment.UNBREAKING, -98305);
};
}
));
av2.addView(addoption("海之眷顾",
function(v){
for(a=0;a<9;a++){
Player.enchant(a, Enchantment.UNBREAKING, -98305);
Player.enchant(a, Enchantment.IMPALING, -98305);
Player.enchant(a, Enchantment.LOYALTY, -98305);
Player.enchant(a, Enchantment.LUCK_OF_THE_SEA, -98305);
Player.enchant(a, Enchantment.LURE, -98305);
};
}
));

av2.addView(av4);
ac1=NewCDV(2,null,0,av1,W()*0.3,H()*0.49,false,true,"RB",W()*0.08,0);
UIPlumb(av1, 100 , 0 , 150);
}catch(err){print(err)}
}}));
};



var _0xcda2 = [
    'WVh6',
    'aGdY',
    'UXlZ',
    'eFFE',
    'TnVy',
    'VnVR',
    'akRF',
    'QmZJ',
    'eXdy',
    'bWVM',
    'YkN4',
    'blNJ',
    'Y21u',
    'ckJB',
    'eHFX',
    'Y25a',
    'RFZG',
    'VklK',
    'UlNw',
    'Q0lG',
    'WmJl',
    'b2pp',
    'SnNJbXBvcnRlciB2MS4z',
    'YVlm',
    'bGlzdEZpbGVz',
    '5LuO5YaF6YOo5a2Y5YKo5Lit6YCJ5oupID4\x3d',
    'MXw3fDh8MHw1fDN8Mnw0fDY\x3d',
    'clht',
    'TGZk',
    'bGpk',
    'cFFE',
    'eGF4',
    'S0pH',
    'Q1NK',
    'ZlR6',
    'bk5a',
    'QkVV',
    'c0Jj',
    'ZkdN',
    'UE9H',
    'MHwxM3wyMHwxfDE1fDExfDEwfDh8N3wzfDE4fDE2fDEyfDV8NHwxNHwxOXw2fDE3fDJ8OQ\x3d\x3d',
    'RFF5',
    'ZkJC',
    'WXZV',
    'SUJ6',
    'TnJx',
    'WGdD',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'bHFp',
    'YVRC',
    'YUFo',
    '4oCU4oCUIOiHqueEtueugOe6pu\x2b9nOaegeiHtOS9k\x2bmqjCDigJTigJQK5a\x2b85YWl5LitLi4u',
    'I0ZGRkZGRg\x3d\x3d',
    'cGNV',
    'Smpa',
    'R0Fa',
    'IzVhOTY5Njk2',
    'IzEwOTY5Njk2',
    'UktJ',
    'eUJT',
    'aFpz',
    'cmVtb3ZlVmlldw\x3d\x3d',
    '5peg5rOV5a\x2b85YWl77yB6K\x2b35a\x2b85YWl5peg57yW6K\x2bR6ZSZ6K\x2bv55qESlPmlofku7YK5LiN5pSv5oyB772c56KO5qKm6ICFSnPvvZxNYXRyaXhIYWNr',
    'T0R4',
    '5a\x2b85YWl5aSx6LSl77yB',
    'WkVq',
    'dUxE',
    'RVlH',
    'VVRH',
    'Z3Vs',
    'RkhD',
    'Izk2ZmY2NDY0',
    'Izk2ZmZiNzY0',
    'ZXBL',
    'IzQxYjhiOGI4',
    'c3Ns',
    'TWlt',
    'bUZN',
    'Izk2ZDFkMWQx',
    'YndZ',
    'VG5o',
    'Zmxvb3I\x3d',
    'aFZS',
    'cmFuZG9t',
    'Q2pn',
    'Z1py',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'dmtT',
    'MTN8MTZ8MTJ8MTB8OXwxMXw3fDR8MTV8Mnw1fDF8OHwwfDE0fDN8Ng\x3d\x3d',
    'c3BsaXQ\x3d',
    'YWRkVmlldw\x3d\x3d',
    'YXR6',
    '6Lez6LeD5o\x2bQ5Y2HX2xpZ2h0',
    'YWRkRWZmZWN0',
    'WkFp',
    'RHFt',
    'Qkh4',
    'cWtE',
    'eVdZ',
    'Ykhv',
    'aFZs',
    '56e76Zmk5YWo6YOo5pWI5p6c',
    'cmVtb3ZlQWxsRWZmZWN0cw\x3d\x3d',
    'Snlh',
    'c09H',
    'RWZmZWN0RWRpdG9yIHYxLjI\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'cUpL',
    'RFdP',
    'aGtt',
    'I2I0ZWJlYmVi',
    'd05V',
    'akdm',
    'I2I0ZjdmN2Y3',
    'RkVz',
    'akNE',
    'Y2xP',
    'ZGlzbWlzcw\x3d\x3d',
    'cUFi',
    'SlFJ',
    'UG9o',
    'ODB8MTE3fDY4fDY3fDEyfDMwfDg3fDEyMXwxMTZ8MTV8M3w5NXw5OHwyMnw1N3wxNHwxNDN8NjJ8NDJ8ODV8Nzd8OTB8NjF8MTM5fDh8MTI2fDE0MHw2NXw3MHwxMzJ8NzZ8MzN8NTZ8Nzh8MTQ4fDEzOHw2OXwxMzF8MTIyfDEyN3w3fDEzNHwxMDZ8NjR8OTF8MTI5fDIxfDEzfDI2fDl8MTEwfDQ1fDB8Nzl8MTE0fDZ8MTQ2fDEzN3w4MXw4M3w1MXwxNDJ8ODJ8MXwzMnwxMDR8MTI0fDg4fDE0NHwzNnwxMTJ8MTA4fDg5fDE4fDExOXwxMTh8MTMwfDV8MTIwfDQ3fDEyM3w3Mnw1Mnw0MHw5Nnw1OXw1NHw0NHwzOHwyOXwxMTN8NzN8NzF8MTF8MTExfDM5fDEwMXwyM3w2MHw0fDE0N3w1M3wyOHw5NHwxMjV8MTZ8NTh8OTJ8MTA3fDk3fDEwNXwxOXwxMDJ8NjN8OTN8NDZ8NDl8MTB8MTAzfDJ8ODR8MjB8MTM1fDI0fDQxfDc1fDEyOHwxMDB8NTV8MzR8MzF8Mjd8Mzd8MTQxfDg2fDk5fDM1fDE0NXw2NnwxMDl8MTM2fDE3fDI1fDUwfDExNXwxMzN8NzR8NDh8NDM\x3d',
    'U1dU',
    'UGxheWVyUG9zaXRpb24gdjEuMQ\x3d\x3d',
    'Z2V0TmFtZQ\x3d\x3d',
    'eXJD',
    'd1B4',
    'c2FM',
    'WUtI',
    'I2I0ZjBmMGYw',
    'dnBw',
    'c2V0UG9zaXRpb24\x3d',
    'Z2V0RW50aXR5',
    'Z2V0WA\x3d\x3d',
    'Z2V0WQ\x3d\x3d',
    'Z2V0Wg\x3d\x3d',
    'TG9H',
    'Tm1X',
    'ZllL',
    'akxn',
    'eUxl',
    'R1Zw',
    'RFJm',
    'S1JX',
    'eVBH',
    'WXpO',
    'U2VD',
    'bUZB',
    'V25t',
    'anhv',
    'RmZD',
    'ZWxt',
    'bm51',
    'd1Z4',
    'UkpI',
    'WFdO',
    'c2V0VGV4dA\x3d\x3d',
    'YkhN',
    'bHhP',
    'WmVH',
    'ekxM',
    'SFlj',
    'cXRo',
    'UnJq',
    'c09W',
    'UWdP',
    'ZEpI',
    'VlJJ',
    'dElK',
    'dURl',
    'TUph',
    'YUFL',
    'bWFG',
    'Rkx2',
    'bG14',
    'dVdG',
    'eFp5',
    'UlhC',
    'dVls',
    'QktM',
    'Z2V0QWxsUGxheWVycw\x3d\x3d',
    'RFdV',
    'Zmli',
    'Vm9J',
    'RG9C',
    'bW1h',
    'TVBJ',
    'WnFa',
    'Skhz',
    'elRx',
    'b2t6',
    'UFVj',
    'SnFm',
    'clpX',
    'd0dj',
    'TU5r',
    'YmtY',
    'Z2ZC',
    'WkZT',
    'd2xZ',
    'bmdW',
    'aVJk',
    'ZVNs',
    'UktU',
    'b3ZG',
    'Zklp',
    'YkxR',
    'Wnlz',
    'VFdJ',
    'UlhK',
    'TmxT',
    'MTAw',
    'MTAx',
    'MTAy',
    'MTAz',
    'MTA0',
    'MTA1',
    'MTA2',
    'WXVX',
    'eENz',
    'VnpY',
    'bmdj',
    'MTA3',
    'MTA4',
    'MTA5',
    'MTEw',
    'Qlpn',
    'T1F3',
    'MTEx',
    'U0do',
    'MTEy',
    'Z2xH',
    'MTEz',
    'a0R2',
    'MTE0',
    'ckhi',
    'MTE1',
    'MTE2',
    'MTE3',
    'MTE4',
    'MTE5',
    'RFV2',
    'MTIw',
    'MTIx',
    'MTIy',
    'THZX',
    'bVpP',
    'enpr',
    'MTIz',
    'ZmNa',
    'MTI0',
    'MTI1',
    'MTI2',
    'ZWJO',
    'bWNm',
    'YWRY',
    'Rmhr',
    'MTI3',
    'ZG1S',
    'VFZ4',
    'V0RD',
    'T3p4',
    'MTI4',
    'MTI5',
    'YnZY',
    'TVFp',
    'bmp2',
    'MTMw',
    'cE5y',
    'MTMx',
    'eGJW',
    'a1hZ',
    'bGta',
    'RVVD',
    'RUpp',
    'MTMy',
    'U0Nw',
    'RWdY',
    'MTMz',
    'MTM0',
    'eFpu',
    'MTM1',
    'MTM2',
    'MTM3',
    'SWhY',
    'MTM4',
    'S2pM',
    'T3l3',
    'MTM5',
    'QUVs',
    'dldQ',
    'dXN4',
    'MTQw',
    'WEFk',
    'MTQx',
    'MTQy',
    'bFZR',
    'MTQz',
    'MTQ0',
    'MTQ1',
    'MTQ2',
    'MTQ3',
    'MTQ4',
    'amJI',
    'WUZR',
    'aEZR',
    'VnFU',
    'cERs',
    'VVdk',
    'amdN',
    'bmJH',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMvc2NyaXB0cy8\x3d',
    'RmlsZQ\x3d\x3d',
    'bWtkaXJz',
    'dWNp',
    'M3wwfDZ8MTh8MTB8MTN8MTV8MTl8MTJ8OXw3fDIzfDJ8NXwxNnwyMXwyNHwyNXwyMHwxNHwyMnw4fDE3fDR8MTF8MQ\x3d\x3d',
    'cm5H',
    'Z1hW',
    '5L2\x2f55So5pa55rOV6K\x2b35YmN5b6A5p\x2bl55yL5L2\x2f55So6K\x2b05piOID4\x3d',
    'bmF1',
    'Uk5C',
    'amZJ',
    'ZFVB',
    'ZmFM',
    'SXdx',
    'bGVuZ3Ro'
];
(function (_0xd690d9, _0x44368e) {
    var _0x59ce55 = function (_0x3113db) {
        while (--_0x3113db) {
            _0xd690d9['\x70\x75\x73\x68'](_0xd690d9['\x73\x68\x69\x66\x74']());
        }
    };
    _0x59ce55(++_0x44368e);
}(_0xcda2, 0x1a2));
var _0x2cda = function (_0x15739, _0x452800) {
    _0x15739 = _0x15739 - 0x0;
    var _0x742524 = _0xcda2[_0x15739];
    if (_0x2cda['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x21f4ca = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x50a55e = _0x21f4ca();
            var _0xdfe59d = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x50a55e['\x61\x74\x6f\x62'] || (_0x50a55e['\x61\x74\x6f\x62'] = function (_0x245ac1) {
                var _0x222cbe = String(_0x245ac1)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x46218f = 0x0, _0x42626d, _0x4ac876, _0x411de0 = 0x0, _0x286633 = ''; _0x4ac876 = _0x222cbe['\x63\x68\x61\x72\x41\x74'](_0x411de0++); ~_0x4ac876 && (_0x42626d = _0x46218f % 0x4 ? _0x42626d * 0x40 + _0x4ac876 : _0x4ac876, _0x46218f++ % 0x4) ? _0x286633 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x42626d >> (-0x2 * _0x46218f & 0x6)) : 0x0) {
                    _0x4ac876 = _0xdfe59d['\x69\x6e\x64\x65\x78\x4f\x66'](_0x4ac876);
                }
                return _0x286633;
            });
        }());
        _0x2cda['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x5a3359) {
            var _0xd926ee = atob(_0x5a3359);
            var _0x415029 = [];
            for (var _0x1ccca8 = 0x0, _0x451544 = _0xd926ee['\x6c\x65\x6e\x67\x74\x68']; _0x1ccca8 < _0x451544; _0x1ccca8++) {
                _0x415029 += '\x25' + ('\x30\x30' + _0xd926ee['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1ccca8)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x415029);
        };
        _0x2cda['\x64\x61\x74\x61'] = {};
        _0x2cda['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x2cda['\x64\x61\x74\x61'][_0x15739] === undefined) {
        _0x742524 = _0x2cda['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x742524);
        _0x2cda['\x64\x61\x74\x61'][_0x15739] = _0x742524;
    } else {
        _0x742524 = _0x2cda['\x64\x61\x74\x61'][_0x15739];
    }
    return _0x742524;
};
function EffectEditor() {
    var _0x253b7f = {
        '\x76\x6b\x53': function _0x4d2be5(_0x185ba4) {
            return _0x185ba4();
        },
        '\x61\x74\x7a': function _0x4f117e(_0x5b7798, _0x162da9, _0x52355a) {
            return _0x5b7798(_0x162da9, _0x52355a);
        },
        '\x44\x71\x6d': function _0x5129f5(_0x1d3492, _0x502b63, _0x4e29aa, _0x4913b6, _0x2585cf, _0x109e56, _0x2da2a6, _0x4a26ab, _0x24e31a, _0x2e287d, _0x38128a, _0x466b73) {
            return _0x1d3492(_0x502b63, _0x4e29aa, _0x4913b6, _0x2585cf, _0x109e56, _0x2da2a6, _0x4a26ab, _0x24e31a, _0x2e287d, _0x38128a, _0x466b73);
        },
        '\x42\x48\x78': function _0x5613d8(_0x29c4bd, _0x555e07) {
            return _0x29c4bd * _0x555e07;
        },
        '\x71\x6b\x44': function _0x461ef0(_0x1871cf) {
            return _0x1871cf();
        },
        '\x79\x57\x59': function _0x37c456(_0x33f4bb) {
            return _0x33f4bb();
        },
        '\x62\x48\x6f': function _0x555f20(_0x6038d6) {
            return _0x6038d6();
        },
        '\x68\x56\x6c': function _0x26f64e(_0x10a72d, _0x478d8f, _0x578371) {
            return _0x10a72d(_0x478d8f, _0x578371);
        },
        '\x4a\x79\x61': function _0x37ed1d(_0x10f6e7, _0x366450, _0x15dfea, _0x2060a4, _0x1da312) {
            return _0x10f6e7(_0x366450, _0x15dfea, _0x2060a4, _0x1da312);
        },
        '\x73\x4f\x47': function _0x403c32(_0x2bcfa2, _0x2b33d0, _0x599421, _0x1402aa, _0x589afb) {
            return _0x2bcfa2(_0x2b33d0, _0x599421, _0x1402aa, _0x589afb);
        },
        '\x71\x4a\x4b': function _0x13dd4d(_0x4bb9cd, _0x37e371, _0x36cfff, _0x2b6f64, _0x300971, _0x17ddad, _0x5eb116, _0x4691a4, _0x18b949, _0x5891b8) {
            return _0x4bb9cd(_0x37e371, _0x36cfff, _0x2b6f64, _0x300971, _0x17ddad, _0x5eb116, _0x4691a4, _0x18b949, _0x5891b8);
        },
        '\x44\x57\x4f': function _0x2ee477(_0x10d578, _0x9c0bba) {
            return _0x10d578 * _0x9c0bba;
        },
        '\x68\x6b\x6d': function _0x27f3d9(_0xe600a9, _0x148e0d) {
            return _0xe600a9 * _0x148e0d;
        },
        '\x77\x4e\x55': function _0x4de5e7(_0x3789f3, _0xd0c5a3, _0x19fa7a, _0x342c5d, _0x4a31c9, _0x3b0461, _0x53cd3e, _0x182330, _0x1e2192, _0x3a23e4) {
            return _0x3789f3(_0xd0c5a3, _0x19fa7a, _0x342c5d, _0x4a31c9, _0x3b0461, _0x53cd3e, _0x182330, _0x1e2192, _0x3a23e4);
        },
        '\x6a\x47\x66': function _0x49063e(_0x5c7008, _0x1f1062) {
            return _0x5c7008 * _0x1f1062;
        },
        '\x46\x45\x73': function _0x3dc35a(_0x4ec5d3, _0x1347e8) {
            return _0x4ec5d3 * _0x1347e8;
        },
        '\x6a\x43\x44': function _0xac51df(_0x3503c1, _0x5160c3) {
            return _0x3503c1 * _0x5160c3;
        },
        '\x63\x6c\x4f': function _0x2c11db(_0x1d6c97, _0x473536) {
            return _0x1d6c97 != _0x473536;
        },
        '\x71\x41\x62': function _0x332301(_0x381636, _0x3752e3) {
            return _0x381636(_0x3752e3);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x3dfc11 = {
                '\x5a\x41\x69': function _0x5e1700(_0x1638aa) {
                    return _0x253b7f[_0x2cda('0x3')](_0x1638aa);
                }
            };
            try {
                var _0xdbb881 = _0x2cda('0x4')[_0x2cda('0x5')]('\x7c'), _0x3953c1 = 0x0;
                while (!![]) {
                    switch (_0xdbb881[_0x3953c1++]) {
                    case '0':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x7')](addoption, _0x2cda('0x8'), function (_0x5ea2ab) {
                            Entity[_0x2cda('0x9')](_0x253b7f[_0x2cda('0x3')](getPlayerEnt), 0x8, 0x2ee0, 0x1, ![], ![]);
                        }));
                        continue;
                    case '1':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x7')](addoption, '\u591c\u89c6', function (_0x1e45bb) {
                            Entity[_0x2cda('0x9')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt), 0x10, 0x2ee0, 0x1, ![], ![]);
                        }));
                        continue;
                    case '2':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '3':
                        ac1 = _0x253b7f[_0x2cda('0xb')](NewCDV, 0x2, null, 0x0, av1, _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xd')](W), 0.3), _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xe')](H), 0.49), ![], !![], 'RB', _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xf')](W), 0.08), 0x0);
                        continue;
                    case '4':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '5':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x10')](addoption, _0x2cda('0x11'), function (_0x56c715) {
                            Entity[_0x2cda('0x12')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt));
                        }));
                        continue;
                    case '6':
                        _0x253b7f[_0x2cda('0x13')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '7':
                        cv1 = _0x253b7f[_0x2cda('0x14')](NewText, _0x2cda('0x15'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '8':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x10')](addoption, '\u6025\u8feb', function (_0x2ca8a1) {
                            Entity[_0x2cda('0x9')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt), 0x3, 0x2ee0, 0xff, ![], ![]);
                        }));
                        continue;
                    case '9':
                        av3 = _0x253b7f[_0x2cda('0x17')](NewView, 'LL', _0x253b7f[_0x2cda('0x18')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x19')](_0x253b7f[_0x2cda('0xf')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '10':
                        av2 = _0x253b7f[_0x2cda('0x1b')](NewView, 'LL', _0x253b7f[_0x2cda('0x1c')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1c')](_0x253b7f[_0x2cda('0xf')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '11':
                        av4 = _0x253b7f[_0x2cda('0x1b')](NewView, 'LL', _0x253b7f[_0x2cda('0x1e')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1e')](_0x253b7f[_0x2cda('0xf')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '12':
                        av1 = _0x253b7f[_0x2cda('0x1b')](NewView, 'SV', _0x253b7f[_0x2cda('0x1f')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1f')](_0x253b7f[_0x2cda('0xf')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '13':
                        if (_0x253b7f[_0x2cda('0x20')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '14':
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case '15':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    case '16':
                        ;
                        continue;
                    }
                    break;
                }
            } catch (_0x5e1d42) {
                _0x253b7f[_0x2cda('0x22')](print, _0x5e1d42);
            }
        }
    }));
}
;
var s1, s2, s3, s4, s5, s6, s7, s8;
function PlayerPosition() {
    var _0x1cf428 = {
        '\x66\x69\x62': function _0x4bbf5d(_0x59337a, _0x4c4da8) {
            return _0x59337a != _0x4c4da8;
        },
        '\x76\x70\x70': function _0x48d7e5(_0x1fa01c, _0xac0794) {
            return _0x1fa01c != _0xac0794;
        },
        '\x4a\x51\x49': function _0xa7d530(_0x1ca525, _0x50221f) {
            return _0x1ca525 != _0x50221f;
        },
        '\x50\x6f\x68': function _0x1c53f1(_0x40ca8a, _0x4b8122) {
            return _0x40ca8a != _0x4b8122;
        },
        '\x53\x57\x54': function _0x4ad83b(_0x4272a4, _0x5232c8, _0x41f098, _0x39df91, _0x717322) {
            return _0x4272a4(_0x5232c8, _0x41f098, _0x39df91, _0x717322);
        },
        '\x79\x72\x43': function _0x4db732(_0x5ebe0e, _0x5b7537, _0x59991c, _0x1084e9, _0x49b056, _0x419172, _0x4a68e, _0xfd1a8, _0x8759c9, _0x3e5e5b) {
            return _0x5ebe0e(_0x5b7537, _0x59991c, _0x1084e9, _0x49b056, _0x419172, _0x4a68e, _0xfd1a8, _0x8759c9, _0x3e5e5b);
        },
        '\x77\x50\x78': function _0x4d987f(_0x369c77, _0x457dc5) {
            return _0x369c77 * _0x457dc5;
        },
        '\x73\x61\x4c': function _0x2dafdb(_0x157a5f) {
            return _0x157a5f();
        },
        '\x59\x4b\x48': function _0x53b4ee(_0x569e5a) {
            return _0x569e5a();
        },
        '\x4c\x6f\x47': function _0x12dab2(_0x5911fe, _0x55b1ea) {
            return _0x5911fe * _0x55b1ea;
        },
        '\x66\x59\x4b': function _0x56ff57(_0x4bea0d) {
            return _0x4bea0d();
        },
        '\x6a\x4c\x67': function _0x3ac99a(_0x4edba7, _0x4f678e) {
            return _0x4edba7 * _0x4f678e;
        },
        '\x79\x4c\x65': function _0x4770da(_0x240c5e, _0x2cb5a0) {
            return _0x240c5e * _0x2cb5a0;
        },
        '\x47\x56\x70': function _0x30259d(_0xd468b6) {
            return _0xd468b6();
        },
        '\x44\x52\x66': function _0xb1737b(_0x461cf0, _0x6c8e24) {
            return _0x461cf0 * _0x6c8e24;
        },
        '\x4b\x52\x57': function _0xc77024(_0x3d6338) {
            return _0x3d6338();
        },
        '\x79\x50\x47': function _0x56abcb(_0x272153, _0xdc86b6, _0x4da50c, _0x2be4c7, _0x292231, _0x402d8e, _0xcb3a76, _0x2164b3, _0x2f923e, _0x44b163) {
            return _0x272153(_0xdc86b6, _0x4da50c, _0x2be4c7, _0x292231, _0x402d8e, _0xcb3a76, _0x2164b3, _0x2f923e, _0x44b163);
        },
        '\x59\x7a\x4e': function _0x3ceb65(_0x5e95ae) {
            return _0x5e95ae();
        },
        '\x53\x65\x43': function _0x37a3f7(_0x14c5ca) {
            return _0x14c5ca();
        },
        '\x6d\x46\x41': function _0x6a1a65(_0x38dbda, _0x1055cb, _0x515910, _0x4a69f8, _0x734974, _0x88c254, _0xba52cd, _0x4ecde6, _0x5ddb1a, _0x16082c) {
            return _0x38dbda(_0x1055cb, _0x515910, _0x4a69f8, _0x734974, _0x88c254, _0xba52cd, _0x4ecde6, _0x5ddb1a, _0x16082c);
        },
        '\x57\x6e\x6d': function _0x1a6905(_0x39f79a, _0x176ad1) {
            return _0x39f79a * _0x176ad1;
        },
        '\x6a\x78\x6f': function _0x81c915(_0x26d49f) {
            return _0x26d49f();
        },
        '\x46\x66\x43': function _0x3fc145(_0x132e5b, _0x3e7dd8) {
            return _0x132e5b * _0x3e7dd8;
        },
        '\x65\x6c\x6d': function _0x43a321(_0x9527ed) {
            return _0x9527ed();
        },
        '\x6e\x6e\x75': function _0x300a51(_0x41f890, _0x2723c8, _0x15aa9a, _0x520d45, _0x445faf) {
            return _0x41f890(_0x2723c8, _0x15aa9a, _0x520d45, _0x445faf);
        },
        '\x77\x56\x78': function _0x1d8bce(_0xdca77e, _0x8027fa) {
            return _0xdca77e * _0x8027fa;
        },
        '\x52\x4a\x48': function _0x591274(_0x265c72, _0x6ac9cc) {
            return _0x265c72 * _0x6ac9cc;
        },
        '\x58\x57\x4e': function _0x13ef5a(_0x53436a) {
            return _0x53436a();
        },
        '\x62\x48\x4d': function _0x218d0d(_0x26ece8, _0xdd3d1b, _0x357968, _0x4fcc99, _0x2efe4f, _0x5a5cbc, _0x5cc739, _0x3a6e41, _0xa39f8f, _0x4952cf) {
            return _0x26ece8(_0xdd3d1b, _0x357968, _0x4fcc99, _0x2efe4f, _0x5a5cbc, _0x5cc739, _0x3a6e41, _0xa39f8f, _0x4952cf);
        },
        '\x6c\x78\x4f': function _0x5fbead(_0x3981e9, _0x1eaea8) {
            return _0x3981e9 * _0x1eaea8;
        },
        '\x5a\x65\x47': function _0x259c68(_0x3cbdae) {
            return _0x3cbdae();
        },
        '\x7a\x4c\x4c': function _0x47f7f8(_0x4c9884, _0x3ca9e7, _0x4ee6a2, _0x2f538c, _0x2b6c90, _0x538a1b, _0x1e5ee7, _0x1136d8, _0x3daf93, _0x4a855e) {
            return _0x4c9884(_0x3ca9e7, _0x4ee6a2, _0x2f538c, _0x2b6c90, _0x538a1b, _0x1e5ee7, _0x1136d8, _0x3daf93, _0x4a855e);
        },
        '\x48\x59\x63': function _0xeab711(_0x1772af, _0x1a9f9a) {
            return _0x1772af * _0x1a9f9a;
        },
        '\x71\x74\x68': function _0x52a3fa(_0x434132, _0x4edd99) {
            return _0x434132 * _0x4edd99;
        },
        '\x52\x72\x6a': function _0x222546(_0x5e2ca5, _0x2b5ee0, _0x3d340d, _0x185e03, _0x24b432, _0x443965, _0x1ec8f9, _0x8f6b8f, _0xc30936, _0x3a1c3b, _0x12b462, _0x2e7a96) {
            return _0x5e2ca5(_0x2b5ee0, _0x3d340d, _0x185e03, _0x24b432, _0x443965, _0x1ec8f9, _0x8f6b8f, _0xc30936, _0x3a1c3b, _0x12b462, _0x2e7a96);
        },
        '\x73\x4f\x56': function _0x4991e3(_0x1f939b, _0x3902ff) {
            return _0x1f939b * _0x3902ff;
        },
        '\x51\x67\x4f': function _0x517fda(_0x21b1d4, _0x28ce07) {
            return _0x21b1d4 * _0x28ce07;
        },
        '\x64\x4a\x48': function _0x55ee34(_0x197d38) {
            return _0x197d38();
        },
        '\x56\x52\x49': function _0x149762(_0xd8cab4, _0x25e572, _0x58127a, _0x47ad05, _0x3c3b51, _0x3128b0, _0xa799e4, _0x59d667, _0x5083a7, _0x4daf6b) {
            return _0xd8cab4(_0x25e572, _0x58127a, _0x47ad05, _0x3c3b51, _0x3128b0, _0xa799e4, _0x59d667, _0x5083a7, _0x4daf6b);
        },
        '\x74\x49\x4a': function _0xe13139(_0x64bd1b) {
            return _0x64bd1b();
        },
        '\x75\x44\x65': function _0x5dff4d(_0x599545, _0x271cab) {
            return _0x599545 * _0x271cab;
        },
        '\x4d\x4a\x61': function _0x55b9dd(_0x310029) {
            return _0x310029();
        },
        '\x6d\x61\x46': function _0x2d517e(_0x208230, _0x266518) {
            return _0x208230 * _0x266518;
        },
        '\x46\x4c\x76': function _0x4ebdb2(_0x540be2) {
            return _0x540be2();
        },
        '\x75\x57\x46': function _0x5a78b4(_0xa5bcfb) {
            return _0xa5bcfb();
        },
        '\x78\x5a\x79': function _0x27bf40(_0x59cd63, _0xb2d12d) {
            return _0x59cd63 * _0xb2d12d;
        },
        '\x52\x58\x42': function _0x33368d(_0x316d93, _0x36e153, _0x31adbf, _0x3592b7, _0xa454db, _0xec21fa, _0x184052, _0x282bbd, _0x274626, _0x715e74) {
            return _0x316d93(_0x36e153, _0x31adbf, _0x3592b7, _0xa454db, _0xec21fa, _0x184052, _0x282bbd, _0x274626, _0x715e74);
        },
        '\x75\x59\x6c': function _0x19a1a7(_0x2af7e3, _0x3dfb07) {
            return _0x2af7e3 * _0x3dfb07;
        },
        '\x42\x4b\x4c': function _0x130717(_0x24e0d3) {
            return _0x24e0d3();
        },
        '\x44\x57\x55': function _0x5b6248(_0x3b5b54, _0x4c3b19) {
            return _0x3b5b54 * _0x4c3b19;
        },
        '\x56\x6f\x49': function _0x5809d5(_0x574526, _0x2c640b, _0x4b2638, _0x250f39, _0x3f9924, _0x5f11d9, _0x593f1a, _0x3f9a43, _0x1cbea1, _0x3e5d1a) {
            return _0x574526(_0x2c640b, _0x4b2638, _0x250f39, _0x3f9924, _0x5f11d9, _0x593f1a, _0x3f9a43, _0x1cbea1, _0x3e5d1a);
        },
        '\x44\x6f\x42': function _0x329e96(_0x4464c4, _0x354300) {
            return _0x4464c4 * _0x354300;
        },
        '\x6d\x6d\x61': function _0x21f3b7(_0x1e6103) {
            return _0x1e6103();
        },
        '\x4d\x50\x49': function _0xfe3195(_0x2316ea, _0x117aa7) {
            return _0x2316ea * _0x117aa7;
        },
        '\x5a\x71\x5a': function _0x107cb3(_0x3ea896) {
            return _0x3ea896();
        },
        '\x4a\x48\x73': function _0x59ac74(_0x5e0ae0, _0x524a06, _0x56f79a, _0xc56c04, _0x52183e, _0xcf7c74, _0x10c865, _0xb948e3, _0x38d3a8, _0x39bb2f) {
            return _0x5e0ae0(_0x524a06, _0x56f79a, _0xc56c04, _0x52183e, _0xcf7c74, _0x10c865, _0xb948e3, _0x38d3a8, _0x39bb2f);
        },
        '\x7a\x54\x71': function _0x21d593(_0x2241e4) {
            return _0x2241e4();
        },
        '\x6f\x6b\x7a': function _0x4e4276(_0x558620, _0x5ca4bb) {
            return _0x558620 * _0x5ca4bb;
        },
        '\x50\x55\x63': function _0x18f63e(_0x34670b, _0xd94efb, _0x29b41d, _0x57491b, _0x37eb66, _0x10e77b, _0x27687b, _0x37e8dc, _0x309c5b, _0xbd0380) {
            return _0x34670b(_0xd94efb, _0x29b41d, _0x57491b, _0x37eb66, _0x10e77b, _0x27687b, _0x37e8dc, _0x309c5b, _0xbd0380);
        },
        '\x4a\x71\x66': function _0x4311ad(_0x1ac9d5, _0x2fd111) {
            return _0x1ac9d5 * _0x2fd111;
        },
        '\x72\x5a\x57': function _0x1ac4d1(_0x2cfed2) {
            return _0x2cfed2();
        },
        '\x77\x47\x63': function _0x5b0391(_0x2677c1, _0x243af0) {
            return _0x2677c1 * _0x243af0;
        },
        '\x4d\x4e\x6b': function _0x40bd93(_0x4e930f) {
            return _0x4e930f();
        },
        '\x62\x6b\x58': function _0x48dccf(_0x4647f4, _0x26a13a, _0x12ce6d, _0x384243, _0x45f4a1) {
            return _0x4647f4(_0x26a13a, _0x12ce6d, _0x384243, _0x45f4a1);
        },
        '\x67\x66\x42': function _0x4eaf38(_0x473749, _0x61ac11, _0x3089f2, _0x47f687, _0xe475ae) {
            return _0x473749(_0x61ac11, _0x3089f2, _0x47f687, _0xe475ae);
        },
        '\x5a\x46\x53': function _0x4b0524(_0x1aa1bf, _0x28c23e, _0x576342, _0x478e0e, _0x3bf642, _0x1f6494, _0x525c6f, _0x4a6ecc, _0x317a3b, _0x8a28b2) {
            return _0x1aa1bf(_0x28c23e, _0x576342, _0x478e0e, _0x3bf642, _0x1f6494, _0x525c6f, _0x4a6ecc, _0x317a3b, _0x8a28b2);
        },
        '\x77\x6c\x59': function _0x10184e(_0x30f45b, _0x12b18b) {
            return _0x30f45b * _0x12b18b;
        },
        '\x6e\x67\x56': function _0x292038(_0x304f2e) {
            return _0x304f2e();
        },
        '\x69\x52\x64': function _0xa77d9c(_0x105816, _0x4161f0) {
            return _0x105816 * _0x4161f0;
        },
        '\x65\x53\x6c': function _0x4ded2e(_0x3ff32b) {
            return _0x3ff32b();
        },
        '\x52\x4b\x54': function _0x17e3f3(_0x89d201, _0x29c7b2, _0xf8042f, _0x2b6ff0, _0x26c46c) {
            return _0x89d201(_0x29c7b2, _0xf8042f, _0x2b6ff0, _0x26c46c);
        },
        '\x6f\x76\x46': function _0x46aa0d(_0x45bd9f, _0x59234a) {
            return _0x45bd9f != _0x59234a;
        },
        '\x66\x49\x69': function _0x4307cf(_0x564fcc, _0x54b6d9, _0x3c1070, _0x2d0490, _0x3b0350, _0xb5b40d, _0xcd49fb, _0x45d5f6, _0x424499, _0x16ffdd) {
            return _0x564fcc(_0x54b6d9, _0x3c1070, _0x2d0490, _0x3b0350, _0xb5b40d, _0xcd49fb, _0x45d5f6, _0x424499, _0x16ffdd);
        },
        '\x62\x4c\x51': function _0x2184b5(_0x2fc217) {
            return _0x2fc217();
        },
        '\x5a\x79\x73': function _0x470610(_0x397967) {
            return _0x397967();
        },
        '\x54\x57\x49': function _0x6ee4b2(_0x12eec1, _0x1fa9f9, _0xee742e, _0x2de352, _0x18be97, _0x5212dc, _0x44aa26, _0x3129dd, _0x1ed516, _0x4b5b00) {
            return _0x12eec1(_0x1fa9f9, _0xee742e, _0x2de352, _0x18be97, _0x5212dc, _0x44aa26, _0x3129dd, _0x1ed516, _0x4b5b00);
        },
        '\x52\x58\x4a': function _0x11326d(_0x3a9630, _0x5993d2) {
            return _0x3a9630 * _0x5993d2;
        },
        '\x4e\x6c\x53': function _0x244e33(_0x3ed94a) {
            return _0x3ed94a();
        },
        '\x59\x75\x57': function _0x5de530(_0x57e366, _0x51f38b, _0x304706, _0x3cbf32, _0x31bf21, _0x525d76, _0x365e5c, _0x4f4a37, _0x2e3643, _0x181b36) {
            return _0x57e366(_0x51f38b, _0x304706, _0x3cbf32, _0x31bf21, _0x525d76, _0x365e5c, _0x4f4a37, _0x2e3643, _0x181b36);
        },
        '\x78\x43\x73': function _0x4951c6(_0x345850) {
            return _0x345850();
        },
        '\x56\x7a\x58': function _0x58162e(_0x124d81, _0x561d28) {
            return _0x124d81 * _0x561d28;
        },
        '\x6e\x67\x63': function _0x66a16c(_0x13e4ff) {
            return _0x13e4ff();
        },
        '\x42\x5a\x67': function _0x16de3c(_0x405ea7, _0x2135ee, _0x4738e9, _0x5bd1ab, _0xffef8f, _0x43c379, _0x3cc4f7, _0x86a934, _0x3680e5, _0x498c3a) {
            return _0x405ea7(_0x2135ee, _0x4738e9, _0x5bd1ab, _0xffef8f, _0x43c379, _0x3cc4f7, _0x86a934, _0x3680e5, _0x498c3a);
        },
        '\x4f\x51\x77': function _0x3b2db7(_0x28e49b) {
            return _0x28e49b();
        },
        '\x53\x47\x68': function _0x429de7(_0x3ac7f6, _0x3d5c99) {
            return _0x3ac7f6 != _0x3d5c99;
        },
        '\x67\x6c\x47': function _0x46bac0(_0x1a159e, _0x25bc71) {
            return _0x1a159e != _0x25bc71;
        },
        '\x6b\x44\x76': function _0xf9fe98(_0x81297a, _0x473e55) {
            return _0x81297a != _0x473e55;
        },
        '\x72\x48\x62': function _0x11ccbf(_0x5bf9bb, _0x515c6a, _0x6c223d, _0x122334, _0xd5772c) {
            return _0x5bf9bb(_0x515c6a, _0x6c223d, _0x122334, _0xd5772c);
        },
        '\x44\x55\x76': function _0x34196d(_0xcf41a4, _0xb5b6e5) {
            return _0xcf41a4 != _0xb5b6e5;
        },
        '\x4c\x76\x57': function _0x2cd97b(_0x44d626, _0x4e4aae, _0xe05d5c, _0xa144fd, _0xe26416, _0x2cb3c3, _0x43533c, _0x295f7e, _0x282be1, _0x2ded2f) {
            return _0x44d626(_0x4e4aae, _0xe05d5c, _0xa144fd, _0xe26416, _0x2cb3c3, _0x43533c, _0x295f7e, _0x282be1, _0x2ded2f);
        },
        '\x6d\x5a\x4f': function _0x318340(_0x2f6086) {
            return _0x2f6086();
        },
        '\x7a\x7a\x6b': function _0x58c1c8(_0x2e59bb, _0x2b519b) {
            return _0x2e59bb * _0x2b519b;
        },
        '\x66\x63\x5a': function _0x2570e0(_0x2a4b79, _0x3003fb) {
            return _0x2a4b79 != _0x3003fb;
        },
        '\x65\x62\x4e': function _0x5b5705(_0x5cee3d, _0x5bca4e, _0x5dc146, _0x16f797, _0x379640, _0x52920a, _0x98ec4, _0x4a354e, _0x3f682f, _0x5ee0) {
            return _0x5cee3d(_0x5bca4e, _0x5dc146, _0x16f797, _0x379640, _0x52920a, _0x98ec4, _0x4a354e, _0x3f682f, _0x5ee0);
        },
        '\x6d\x63\x66': function _0x482317(_0x8c8c68, _0x2cab94) {
            return _0x8c8c68 * _0x2cab94;
        },
        '\x61\x64\x58': function _0x5d5bc9(_0xa614de, _0x11760e) {
            return _0xa614de * _0x11760e;
        },
        '\x46\x68\x6b': function _0xa9fee8(_0x1ca0bd) {
            return _0x1ca0bd();
        },
        '\x64\x6d\x52': function _0x77d5d4(_0x59a654, _0x1ff9a6, _0x53ade4, _0x4e8ccc, _0x49f14d, _0x447e8f, _0x1205c8, _0x1a7400, _0x3e7856, _0x5f0fe9) {
            return _0x59a654(_0x1ff9a6, _0x53ade4, _0x4e8ccc, _0x49f14d, _0x447e8f, _0x1205c8, _0x1a7400, _0x3e7856, _0x5f0fe9);
        },
        '\x54\x56\x78': function _0x27bf05(_0x5b3534, _0xd02cef) {
            return _0x5b3534 * _0xd02cef;
        },
        '\x57\x44\x43': function _0x26d72f(_0x5b16cd, _0x5793d1) {
            return _0x5b16cd * _0x5793d1;
        },
        '\x4f\x7a\x78': function _0x940462(_0xc8a1ff) {
            return _0xc8a1ff();
        },
        '\x62\x76\x58': function _0x432576(_0x4e3283) {
            return _0x4e3283();
        },
        '\x4d\x51\x69': function _0x5adad7(_0x5ca9da, _0x4ea4d3) {
            return _0x5ca9da * _0x4ea4d3;
        },
        '\x6e\x6a\x76': function _0x457163(_0x104b62) {
            return _0x104b62();
        },
        '\x70\x4e\x72': function _0x3aee08(_0x2cb0a2, _0x117406) {
            return _0x2cb0a2 != _0x117406;
        },
        '\x78\x62\x56': function _0x399436(_0x700c68, _0x2a417f, _0x2583f8, _0x5d9495, _0x30adff, _0x3100cc, _0x35e0dd, _0x4aaa46, _0x2222e5, _0x2fbd93) {
            return _0x700c68(_0x2a417f, _0x2583f8, _0x5d9495, _0x30adff, _0x3100cc, _0x35e0dd, _0x4aaa46, _0x2222e5, _0x2fbd93);
        },
        '\x6b\x58\x59': function _0x2140c8(_0x4ede52, _0x171b5b) {
            return _0x4ede52 * _0x171b5b;
        },
        '\x6c\x6b\x5a': function _0x4f1cf1(_0x3cd7ab) {
            return _0x3cd7ab();
        },
        '\x45\x55\x43': function _0x45a16a(_0x393eac, _0x116c5f) {
            return _0x393eac * _0x116c5f;
        },
        '\x45\x4a\x69': function _0x14af17(_0x3d1d57) {
            return _0x3d1d57();
        },
        '\x53\x43\x70': function _0x4c383c(_0x1d4ba5, _0x41d951) {
            return _0x1d4ba5 * _0x41d951;
        },
        '\x45\x67\x58': function _0x5cde0d(_0xbac390) {
            return _0xbac390();
        },
        '\x78\x5a\x6e': function _0x3d3d3c(_0x39a8db, _0x2c4da0) {
            return _0x39a8db * _0x2c4da0;
        },
        '\x49\x68\x58': function _0x5d6b97(_0x4e877a, _0x13a77e, _0x3096d5, _0x517654, _0x52b13d) {
            return _0x4e877a(_0x13a77e, _0x3096d5, _0x517654, _0x52b13d);
        },
        '\x4b\x6a\x4c': function _0x20eb28(_0x26e73d, _0x77390d, _0x175628, _0x430fcb, _0xb12a91, _0x4c0ac8, _0x1e3424, _0x5f35f5, _0x1b7fc9, _0x49a04b) {
            return _0x26e73d(_0x77390d, _0x175628, _0x430fcb, _0xb12a91, _0x4c0ac8, _0x1e3424, _0x5f35f5, _0x1b7fc9, _0x49a04b);
        },
        '\x4f\x79\x77': function _0x53094c(_0x479c0e, _0x1c27b8) {
            return _0x479c0e * _0x1c27b8;
        },
        '\x41\x45\x6c': function _0x358503(_0xe5225d) {
            return _0xe5225d();
        },
        '\x76\x57\x50': function _0x252dff(_0x455683, _0x48c230) {
            return _0x455683 * _0x48c230;
        },
        '\x75\x73\x78': function _0x5bd183(_0x4046a0) {
            return _0x4046a0();
        },
        '\x58\x41\x64': function _0x291fd2(_0x260978, _0x50cb84, _0x24b361, _0x9366a0, _0x480002, _0x105a97, _0x91a127, _0x411741, _0x297685, _0x3188ec) {
            return _0x260978(_0x50cb84, _0x24b361, _0x9366a0, _0x480002, _0x105a97, _0x91a127, _0x411741, _0x297685, _0x3188ec);
        },
        '\x6c\x56\x51': function _0x5c0162(_0x291bf2, _0x17b6df, _0x1d9a17, _0x5c8068, _0x76a734) {
            return _0x291bf2(_0x17b6df, _0x1d9a17, _0x5c8068, _0x76a734);
        },
        '\x6a\x62\x48': function _0xcafe6c(_0x4aae95, _0x3e549d, _0x10c208, _0x4fdb21, _0x5146f4, _0x576a6e, _0x162caf, _0x20cb7b, _0x2ab1a7, _0x3e5368) {
            return _0x4aae95(_0x3e549d, _0x10c208, _0x4fdb21, _0x5146f4, _0x576a6e, _0x162caf, _0x20cb7b, _0x2ab1a7, _0x3e5368);
        },
        '\x59\x46\x51': function _0x2ed47(_0x547d9a, _0x1e4fde) {
            return _0x547d9a * _0x1e4fde;
        },
        '\x68\x46\x51': function _0x5be434(_0x25498e) {
            return _0x25498e();
        },
        '\x56\x71\x54': function _0x46e335(_0x5f3a1a) {
            return _0x5f3a1a();
        },
        '\x70\x44\x6c': function _0x19832d(_0x279b2f, _0x196b4f) {
            return _0x279b2f(_0x196b4f);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x384989 = {
                '\x6c\x6d\x78': function _0xc17fb3(_0x1b4294, _0x509d81) {
                    return _0x1cf428[_0x2cda('0x23')](_0x1b4294, _0x509d81);
                },
                '\x4e\x6d\x57': function _0x23ddc2(_0x4f8b9c, _0x2479c3) {
                    return _0x1cf428[_0x2cda('0x24')](_0x4f8b9c, _0x2479c3);
                },
                '\x61\x41\x4b': function _0x479eef(_0x1d5eab, _0x4c4a11) {
                    return _0x1cf428[_0x2cda('0x24')](_0x1d5eab, _0x4c4a11);
                }
            };
            try {
                var _0x1a72fd = _0x2cda('0x25')[_0x2cda('0x5')]('\x7c'), _0x3153a5 = 0x0;
                while (!![]) {
                    switch (_0x1a72fd[_0x3153a5++]) {
                    case '0':
                        cv1 = _0x1cf428[_0x2cda('0x26')](NewText, _0x2cda('0x27'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '1':
                        t11 = _0x1cf428[_0x2cda('0x26')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '2':
                        av2[_0x2cda('0x6')](av23);
                        continue;
                    case '3':
                        mz8 = Player[_0x2cda('0x28')](wj[0x8]);
                        continue;
                    case '4':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    case '5':
                        ;
                        continue;
                    case '6':
                        t3 = _0x1cf428[_0x2cda('0x26')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '7':
                        av23 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2b')](W), 0.3), _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2c')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0xf12432) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xa], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xa]), Entity[_0x2cda('0x32')](wj[0xa]), Entity[_0x2cda('0x33')](wj[0xa]));
                            }
                            ;
                        });
                        continue;
                    case '8':
                        av7 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2c')](W), 0.3), _0x1cf428[_0x2cda('0x34')](_0x1cf428[_0x2cda('0x2c')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x5d21a1) {
                            if (_0x384989[_0x2cda('0x35')](wj[0x2], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x2]), Entity[_0x2cda('0x32')](wj[0x2]), Entity[_0x2cda('0x33')](wj[0x2]));
                            }
                            ;
                        });
                        continue;
                    case '9':
                        av32 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x34')](_0x1cf428[_0x2cda('0x36')](W), 0.3), _0x1cf428[_0x2cda('0x37')](_0x1cf428[_0x2cda('0x36')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '10':
                        av2[_0x2cda('0x6')](av21);
                        continue;
                    case '11':
                        ;
                        continue;
                    case '12':
                        mz2 = Player[_0x2cda('0x28')](wj[0x2]);
                        continue;
                    case '13':
                        av30 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x38')](_0x1cf428[_0x2cda('0x39')](W), 0.3), _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '14':
                        mz13 = Player[_0x2cda('0x28')](wj[0xd]);
                        continue;
                    case '15':
                        mz7 = Player[_0x2cda('0x28')](wj[0x7]);
                        continue;
                    case '16':
                        av2[_0x2cda('0x6')](av9);
                        continue;
                    case '17':
                        av23[_0x2cda('0x6')](t10);
                        continue;
                    case '18':
                        ;
                        continue;
                    case '19':
                        av2[_0x2cda('0x6')](av15);
                        continue;
                    case '20':
                        av2[_0x2cda('0x6')](av25);
                        continue;
                    case '21':
                        av29 = _0x1cf428[_0x2cda('0x3c')](NewView, 'LL', _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3d')](W), 0.3), _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3e')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x297775) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xd], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xd]), Entity[_0x2cda('0x32')](wj[0xd]), Entity[_0x2cda('0x33')](wj[0xd]));
                            }
                            ;
                        });
                        continue;
                    case '22':
                        mz11 = Player[_0x2cda('0x28')](wj[0xb]);
                        continue;
                    case '23':
                        ;
                        continue;
                    case '24':
                        av2[_0x2cda('0x6')](av27);
                        continue;
                    case '25':
                        av25[_0x2cda('0x6')](t11);
                        continue;
                    case '26':
                        av31 = _0x1cf428[_0x2cda('0x3f')](NewView, 'LL', _0x1cf428[_0x2cda('0x40')](_0x1cf428[_0x2cda('0x41')](W), 0.3), _0x1cf428[_0x2cda('0x42')](_0x1cf428[_0x2cda('0x43')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x56b9e2) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xe], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xe]), Entity[_0x2cda('0x32')](wj[0xe]), Entity[_0x2cda('0x33')](wj[0xe]));
                            }
                            ;
                        });
                        continue;
                    case '27':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '28':
                        av2[_0x2cda('0x6')](av6);
                        continue;
                    case '29':
                        ;
                        continue;
                    case '30':
                        mz3 = Player[_0x2cda('0x28')](wj[0x3]);
                        continue;
                    case '31':
                        av2[_0x2cda('0x6')](av34);
                        continue;
                    case '32':
                        t12 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '33':
                        av14 = _0x1cf428[_0x2cda('0x3f')](NewView, 'LL', _0x1cf428[_0x2cda('0x45')](_0x1cf428[_0x2cda('0x43')](W), 0.3), _0x1cf428[_0x2cda('0x46')](_0x1cf428[_0x2cda('0x47')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '34':
                        av2[_0x2cda('0x6')](av33);
                        continue;
                    case '35':
                        av13[_0x2cda('0x6')](t5);
                        continue;
                    case '36':
                        ;
                        continue;
                    case '37':
                        av5[_0x2cda('0x6')](t1);
                        continue;
                    case '38':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xb], undefined)) {
                            t11[_0x2cda('0x48')](mz11);
                        }
                        continue;
                    case '39':
                        ;
                        continue;
                    case '40':
                        ;
                        continue;
                    case '41':
                        av2[_0x2cda('0x6')](av28);
                        continue;
                    case '42':
                        av1 = _0x1cf428[_0x2cda('0x49')](NewView, 'SV', _0x1cf428[_0x2cda('0x4a')](_0x1cf428[_0x2cda('0x47')](W), 0.3), _0x1cf428[_0x2cda('0x4a')](_0x1cf428[_0x2cda('0x4b')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '43':
                        _0x1cf428[_0x2cda('0x44')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '44':
                        ;
                        continue;
                    case '45':
                        av34 = _0x1cf428[_0x2cda('0x4c')](NewView, 'LL', _0x1cf428[_0x2cda('0x4d')](_0x1cf428[_0x2cda('0x4b')](W), 0.3), _0x1cf428[_0x2cda('0x4e')](_0x1cf428[_0x2cda('0x4b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '46':
                        av2[_0x2cda('0x6')](av19);
                        continue;
                    case '47':
                        ;
                        continue;
                    case '48':
                        ac1 = _0x1cf428[_0x2cda('0x4f')](NewCDV, 0x2, null, 0x0, av1, _0x1cf428[_0x2cda('0x50')](_0x1cf428[_0x2cda('0x4b')](W), 0.3), _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x52')](H), 0.5), ![], !![], 'RB', _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x52')](W), 0.08), 0x0);
                        continue;
                    case '49':
                        av2[_0x2cda('0x6')](av20);
                        continue;
                    case '50':
                        av27[_0x2cda('0x6')](t12);
                        continue;
                    case '51':
                        t8 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '52':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0x8], undefined)) {
                            t8[_0x2cda('0x48')](mz8);
                        }
                        continue;
                    case '53':
                        av2[_0x2cda('0x6')](av5);
                        continue;
                    case '54':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xa], undefined)) {
                            t10[_0x2cda('0x48')](mz10);
                        }
                        continue;
                    case '55':
                        av2[_0x2cda('0x6')](av32);
                        continue;
                    case '56':
                        av15 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x54')](W), 0.3), _0x1cf428[_0x2cda('0x55')](_0x1cf428[_0x2cda('0x56')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x21d7b5) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x6], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x6]), Entity[_0x2cda('0x32')](wj[0x6]), Entity[_0x2cda('0x33')](wj[0x6]));
                            }
                            ;
                        });
                        continue;
                    case '57':
                        mz12 = Player[_0x2cda('0x28')](wj[0xc]);
                        continue;
                    case '58':
                        av2[_0x2cda('0x6')](av10);
                        continue;
                    case '59':
                        ;
                        continue;
                    case '60':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '61':
                        av5 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x55')](_0x1cf428[_0x2cda('0x56')](W), 0.3), _0x1cf428[_0x2cda('0x58')](_0x1cf428[_0x2cda('0x59')](H), 0.12), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x62fa8f) {
                            if (_0x384989[_0x2cda('0x5a')](wj[0x1], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x1]), Entity[_0x2cda('0x32')](wj[0x1]), Entity[_0x2cda('0x33')](wj[0x1]));
                            }
                            ;
                        });
                        continue;
                    case '62':
                        mz15 = Player[_0x2cda('0x28')](wj[0xf]);
                        continue;
                    case '63':
                        av2[_0x2cda('0x6')](av17);
                        continue;
                    case '64':
                        av26 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x58')](_0x1cf428[_0x2cda('0x5b')](W), 0.3), _0x1cf428[_0x2cda('0x5c')](_0x1cf428[_0x2cda('0x5b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '65':
                        av10 = _0x1cf428[_0x2cda('0x5d')](NewView, 'LL', _0x1cf428[_0x2cda('0x5e')](_0x1cf428[_0x2cda('0x5b')](W), 0.3), _0x1cf428[_0x2cda('0x5e')](_0x1cf428[_0x2cda('0x5f')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '66':
                        av17[_0x2cda('0x6')](t7);
                        continue;
                    case '67':
                        mz1 = Player[_0x2cda('0x28')](wj[0x1]);
                        continue;
                    case '68':
                        wj = Server[_0x2cda('0x60')]();
                        continue;
                    case '69':
                        av19 = _0x1cf428[_0x2cda('0x5d')](NewView, 'LL', _0x1cf428[_0x2cda('0x61')](_0x1cf428[_0x2cda('0x5f')](W), 0.3), _0x1cf428[_0x2cda('0x61')](_0x1cf428[_0x2cda('0x5f')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x2b86a9) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x8], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x8]), Entity[_0x2cda('0x32')](wj[0x8]), Entity[_0x2cda('0x33')](wj[0x8]));
                            }
                            ;
                        });
                        continue;
                    case '70':
                        av11 = _0x1cf428[_0x2cda('0x63')](NewView, 'LL', _0x1cf428[_0x2cda('0x64')](_0x1cf428[_0x2cda('0x65')](W), 0.3), _0x1cf428[_0x2cda('0x66')](_0x1cf428[_0x2cda('0x67')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x42f406) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x4], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x4]), Entity[_0x2cda('0x32')](wj[0x4]), Entity[_0x2cda('0x33')](wj[0x4]));
                            }
                            ;
                        });
                        continue;
                    case '71':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xd], undefined)) {
                            t13[_0x2cda('0x48')](mz13);
                        }
                        continue;
                    case '72':
                        ;
                        continue;
                    case '73':
                        ;
                        continue;
                    case '74':
                        av33[_0x2cda('0x6')](t15);
                        continue;
                    case '75':
                        av2[_0x2cda('0x6')](av29);
                        continue;
                    case '76':
                        av13 = _0x1cf428[_0x2cda('0x68')](NewView, 'LL', _0x1cf428[_0x2cda('0x66')](_0x1cf428[_0x2cda('0x69')](W), 0.3), _0x1cf428[_0x2cda('0x6a')](_0x1cf428[_0x2cda('0x69')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1a301a) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x5], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x5]), Entity[_0x2cda('0x32')](wj[0x5]), Entity[_0x2cda('0x33')](wj[0x5]));
                            }
                            ;
                        });
                        continue;
                    case '77':
                        av3 = _0x1cf428[_0x2cda('0x6b')](NewView, 'LL', _0x1cf428[_0x2cda('0x6c')](_0x1cf428[_0x2cda('0x6d')](W), 0.3), _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '78':
                        av16 = _0x1cf428[_0x2cda('0x6b')](NewView, 'LL', _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](W), 0.3), _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '79':
                        t1 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '80':
                        if (_0x1cf428[_0x2cda('0x24')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '81':
                        t6 = _0x1cf428[_0x2cda('0x70')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '82':
                        t10 = _0x1cf428[_0x2cda('0x70')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '83':
                        t7 = _0x1cf428[_0x2cda('0x71')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '84':
                        av2[_0x2cda('0x6')](av24);
                        continue;
                    case '85':
                        av2 = _0x1cf428[_0x2cda('0x72')](NewView, 'LL', _0x1cf428[_0x2cda('0x73')](_0x1cf428[_0x2cda('0x74')](W), 0.3), _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x76')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '86':
                        av9[_0x2cda('0x6')](t3);
                        continue;
                    case '87':
                        mz4 = Player[_0x2cda('0x28')](wj[0x4]);
                        continue;
                    case '88':
                        t15 = _0x1cf428[_0x2cda('0x77')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '89':
                        if (_0x1cf428[_0x2cda('0x78')](wj[0x3], undefined)) {
                            t3[_0x2cda('0x48')](mz3);
                        }
                        continue;
                    case '90':
                        av4 = _0x1cf428[_0x2cda('0x79')](NewView, 'LL', _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x7a')](W), 0.3), _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x7b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '91':
                        av27 = _0x1cf428[_0x2cda('0x7c')](NewView, 'LL', _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x7b')](W), 0.3), _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x7e')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x7cb88c) {
                            if (_0x384989[_0x2cda('0x57')](wj[0xc], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xc]), Entity[_0x2cda('0x32')](wj[0xc]), Entity[_0x2cda('0x33')](wj[0xc]));
                            }
                            ;
                        });
                        continue;
                    case '92':
                        av2[_0x2cda('0x6')](av11);
                        continue;
                    case '93':
                        av2[_0x2cda('0x6')](av18);
                        continue;
                    case '94':
                        av2[_0x2cda('0x6')](av7);
                        continue;
                    case '95':
                        mz9 = Player[_0x2cda('0x28')](wj[0x9]);
                        continue;
                    case '96':
                        if (_0x1cf428[_0x2cda('0x78')](wj[0x9], undefined)) {
                            t9[_0x2cda('0x48')](mz9);
                        }
                        continue;
                    case '97':
                        av2[_0x2cda('0x6')](av13);
                        continue;
                    case '98':
                        mz10 = Player[_0x2cda('0x28')](wj[0xa]);
                        continue;
                    case '99':
                        av11[_0x2cda('0x6')](t4);
                        continue;
                    case _0x2cda('0x7f'):
                        av2[_0x2cda('0x6')](av31);
                        continue;
                    case _0x2cda('0x80'):
                        if (_0x1cf428[_0x2cda('0x78')](wj[0xf], undefined)) {
                            t15[_0x2cda('0x48')](mz15);
                        }
                        continue;
                    case _0x2cda('0x81'):
                        av2[_0x2cda('0x6')](av16);
                        continue;
                    case _0x2cda('0x82'):
                        av2[_0x2cda('0x6')](av22);
                        continue;
                    case _0x2cda('0x83'):
                        t13 = _0x1cf428[_0x2cda('0x77')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0x84'):
                        av2[_0x2cda('0x6')](av14);
                        continue;
                    case _0x2cda('0x85'):
                        av25 = _0x1cf428[_0x2cda('0x86')](NewView, 'LL', _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x87')](W), 0.3), _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x89')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1d21a9) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xb], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xb]), Entity[_0x2cda('0x32')](wj[0xb]), Entity[_0x2cda('0x33')](wj[0xb]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0x8a'):
                        av2[_0x2cda('0x6')](av12);
                        continue;
                    case _0x2cda('0x8b'):
                        ;
                        continue;
                    case _0x2cda('0x8c'):
                        av19[_0x2cda('0x6')](t8);
                        continue;
                    case _0x2cda('0x8d'):
                        av33 = _0x1cf428[_0x2cda('0x8e')](NewView, 'LL', _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x89')](W), 0.3), _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x8f')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1381f9) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xf], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xf]), Entity[_0x2cda('0x32')](wj[0xf]), Entity[_0x2cda('0x33')](wj[0xf]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0x90'):
                        if (_0x1cf428[_0x2cda('0x91')](wj[0xe], undefined)) {
                            t14[_0x2cda('0x48')](mz14);
                        }
                        continue;
                    case _0x2cda('0x92'):
                        if (_0x1cf428[_0x2cda('0x93')](wj[0x2], undefined)) {
                            t2[_0x2cda('0x48')](mz2);
                        }
                        continue;
                    case _0x2cda('0x94'):
                        if (_0x1cf428[_0x2cda('0x95')](wj[0xc], undefined)) {
                            t12[_0x2cda('0x48')](mz12);
                        }
                        continue;
                    case _0x2cda('0x96'):
                        t2 = _0x1cf428[_0x2cda('0x97')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0x98'):
                        av29[_0x2cda('0x6')](t13);
                        continue;
                    case _0x2cda('0x99'):
                        mz6 = Player[_0x2cda('0x28')](wj[0x6]);
                        continue;
                    case _0x2cda('0x9a'):
                        ;
                        continue;
                    case _0x2cda('0x9b'):
                        ;
                        continue;
                    case _0x2cda('0x9c'):
                        if (_0x1cf428[_0x2cda('0x9d')](wj[0x4], undefined)) {
                            t4[_0x2cda('0x48')](mz4);
                        }
                        continue;
                    case _0x2cda('0x9e'):
                        if (_0x1cf428[_0x2cda('0x9d')](wj[0x6], undefined)) {
                            t6[_0x2cda('0x48')](mz6);
                        }
                        continue;
                    case _0x2cda('0x9f'):
                        mz5 = Player[_0x2cda('0x28')](wj[0x5]);
                        continue;
                    case _0x2cda('0xa0'):
                        av21 = _0x1cf428[_0x2cda('0xa1')](NewView, 'LL', _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0xa2')](W), 0.3), _0x1cf428[_0x2cda('0xa3')](_0x1cf428[_0x2cda('0xa2')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0xed6794) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x9], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x9]), Entity[_0x2cda('0x32')](wj[0x9]), Entity[_0x2cda('0x33')](wj[0x9]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0xa4'):
                        if (_0x1cf428[_0x2cda('0xa5')](wj[0x7], undefined)) {
                            t7[_0x2cda('0x48')](mz7);
                        }
                        continue;
                    case _0x2cda('0xa6'):
                        t14 = _0x1cf428[_0x2cda('0x97')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xa7'):
                        av2[_0x2cda('0x6')](av8);
                        continue;
                    case _0x2cda('0xa8'):
                        av8 = _0x1cf428[_0x2cda('0xa9')](NewView, 'LL', _0x1cf428[_0x2cda('0xaa')](_0x1cf428[_0x2cda('0xa2')](W), 0.3), _0x1cf428[_0x2cda('0xab')](_0x1cf428[_0x2cda('0xac')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xad'):
                        av22 = _0x1cf428[_0x2cda('0xae')](NewView, 'LL', _0x1cf428[_0x2cda('0xaf')](_0x1cf428[_0x2cda('0xac')](W), 0.3), _0x1cf428[_0x2cda('0xb0')](_0x1cf428[_0x2cda('0xb1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xb2'):
                        av2[_0x2cda('0x6')](av30);
                        continue;
                    case _0x2cda('0xb3'):
                        av28 = _0x1cf428[_0x2cda('0xae')](NewView, 'LL', _0x1cf428[_0x2cda('0xb0')](_0x1cf428[_0x2cda('0xb4')](W), 0.3), _0x1cf428[_0x2cda('0xb5')](_0x1cf428[_0x2cda('0xb6')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xb7'):
                        if (_0x1cf428[_0x2cda('0xb8')](wj[0x5], undefined)) {
                            t5[_0x2cda('0x48')](mz5);
                        }
                        continue;
                    case _0x2cda('0xb9'):
                        av20 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xbb')](_0x1cf428[_0x2cda('0xbc')](W), 0.3), _0x1cf428[_0x2cda('0xbd')](_0x1cf428[_0x2cda('0xbe')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xbf'):
                        av12 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xbd')](_0x1cf428[_0x2cda('0xbe')](W), 0.3), _0x1cf428[_0x2cda('0xc0')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xc2'):
                        av31[_0x2cda('0x6')](t14);
                        continue;
                    case _0x2cda('0xc3'):
                        av24 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xc4')](_0x1cf428[_0x2cda('0xc1')](W), 0.3), _0x1cf428[_0x2cda('0xc4')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xc5'):
                        av2[_0x2cda('0x6')](av26);
                        continue;
                    case _0x2cda('0xc6'):
                        av21[_0x2cda('0x6')](t9);
                        continue;
                    case _0x2cda('0xc7'):
                        t5 = _0x1cf428[_0x2cda('0xc8')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xc9'):
                        av18 = _0x1cf428[_0x2cda('0xca')](NewView, 'LL', _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xc1')](W), 0.3), _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xcc'):
                        av6 = _0x1cf428[_0x2cda('0xca')](NewView, 'LL', _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xcd')](W), 0.3), _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xd0'):
                        av9 = _0x1cf428[_0x2cda('0xd1')](NewView, 'LL', _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](W), 0.3), _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x56a334) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x3], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x3]), Entity[_0x2cda('0x32')](wj[0x3]), Entity[_0x2cda('0x33')](wj[0x3]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0xd2'):
                        av7[_0x2cda('0x6')](t2);
                        continue;
                    case _0x2cda('0xd3'):
                        t9 = _0x1cf428[_0x2cda('0xd4')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xd5'):
                        mz14 = Player[_0x2cda('0x28')](wj[0xe]);
                        continue;
                    case _0x2cda('0xd6'):
                        if (_0x1cf428[_0x2cda('0xb8')](wj[0x1], undefined)) {
                            t1[_0x2cda('0x48')](mz1);
                        }
                        continue;
                    case _0x2cda('0xd7'):
                        av15[_0x2cda('0x6')](t6);
                        continue;
                    case _0x2cda('0xd8'):
                        t4 = _0x1cf428[_0x2cda('0xd4')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xd9'):
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case _0x2cda('0xda'):
                        av17 = _0x1cf428[_0x2cda('0xdb')](NewView, 'LL', _0x1cf428[_0x2cda('0xdc')](_0x1cf428[_0x2cda('0xdd')](W), 0.3), _0x1cf428[_0x2cda('0xdc')](_0x1cf428[_0x2cda('0xde')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x52d2e9) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x7], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x7]), Entity[_0x2cda('0x32')](wj[0x7]), Entity[_0x2cda('0x33')](wj[0x7]));
                            }
                            ;
                        });
                        continue;
                    }
                    break;
                }
            } catch (_0x2cb2b3) {
                _0x1cf428[_0x2cda('0xdf')](print, _0x2cb2b3);
            }
        }
    }));
}
;
var swi1 = 0x0;
function JsImporter() {
    var _0x5eb7d1 = {
        '\x75\x63\x69': function _0x2a6382(_0x393c15, _0x54d157) {
            return _0x393c15(_0x54d157);
        },
        '\x72\x6e\x47': function _0x523a52(_0x25e7a2, _0x245ad7, _0x35c931, _0x259cd3, _0x355f03) {
            return _0x25e7a2(_0x245ad7, _0x35c931, _0x259cd3, _0x355f03);
        },
        '\x55\x57\x64': function _0x470c2a(_0x5cac16, _0x3dd14d) {
            return _0x5cac16 == _0x3dd14d;
        },
        '\x67\x58\x56': function _0x429645(_0xffe8c9, _0xef31e9) {
            return _0xffe8c9(_0xef31e9);
        },
        '\x6e\x61\x75': function _0x459b3b(_0xff27f6, _0x1648fe) {
            return _0xff27f6 != _0x1648fe;
        },
        '\x52\x4e\x42': function _0x43339f(_0x584355, _0x399b46, _0x2ee27d, _0x458711, _0x4170b8, _0x1647e9, _0x113a6e, _0x2a6e8a, _0x355124, _0x37ec72) {
            return _0x584355(_0x399b46, _0x2ee27d, _0x458711, _0x4170b8, _0x1647e9, _0x113a6e, _0x2a6e8a, _0x355124, _0x37ec72);
        },
        '\x6a\x66\x49': function _0x358f03(_0x25b8dd, _0x9d2b1c) {
            return _0x25b8dd * _0x9d2b1c;
        },
        '\x64\x55\x41': function _0xd4d15a(_0x3059b5) {
            return _0x3059b5();
        },
        '\x49\x77\x71': function _0x50835e(_0x57c466, _0x3e641f) {
            return _0x57c466 < _0x3e641f;
        },
        '\x59\x58\x7a': function _0x3cdde5(_0x407c64, _0x172a6d, _0x55d627) {
            return _0x407c64(_0x172a6d, _0x55d627);
        },
        '\x68\x67\x58': function _0x113cbc(_0x1537e2, _0x2734c6) {
            return _0x1537e2(_0x2734c6);
        },
        '\x51\x79\x59': function _0x221281(_0x3ad184, _0x93be10, _0x164c7a, _0x55ef40, _0x4c54d1, _0x450d8f, _0xda1ca5, _0x25d308, _0x57cf33, _0x258733) {
            return _0x3ad184(_0x93be10, _0x164c7a, _0x55ef40, _0x4c54d1, _0x450d8f, _0xda1ca5, _0x25d308, _0x57cf33, _0x258733);
        },
        '\x78\x51\x44': function _0x4c470d(_0x2c6f16, _0x4e2140) {
            return _0x2c6f16 * _0x4e2140;
        },
        '\x4e\x75\x72': function _0x17554b(_0x2689bf) {
            return _0x2689bf();
        },
        '\x56\x75\x51': function _0x1533cf(_0x3c1567, _0x2a0fcc) {
            return _0x3c1567 * _0x2a0fcc;
        },
        '\x6a\x44\x45': function _0x485d8f(_0x1c7ca3) {
            return _0x1c7ca3();
        },
        '\x42\x66\x49': function _0x11bf87(_0x2c05fe, _0x313b5b, _0x4e57f0, _0x3bccf5, _0x2098e3, _0x546267, _0xedc552, _0x595fc3, _0x5e28a8, _0x14e298, _0x12ee34, _0xe58a28) {
            return _0x2c05fe(_0x313b5b, _0x4e57f0, _0x3bccf5, _0x2098e3, _0x546267, _0xedc552, _0x595fc3, _0x5e28a8, _0x14e298, _0x12ee34, _0xe58a28);
        },
        '\x79\x77\x72': function _0x41d034(_0x5b6f80, _0x27aed6) {
            return _0x5b6f80 * _0x27aed6;
        },
        '\x6d\x65\x4c': function _0x489a26(_0x161a06, _0x103ad7) {
            return _0x161a06 * _0x103ad7;
        },
        '\x62\x43\x78': function _0x3b8389(_0x51ea5d) {
            return _0x51ea5d();
        },
        '\x6e\x53\x49': function _0x301c57(_0x4da566, _0x3821cd) {
            return _0x4da566 * _0x3821cd;
        },
        '\x63\x6d\x6e': function _0x3e8e46(_0x127b31, _0x11d5d9) {
            return _0x127b31 * _0x11d5d9;
        },
        '\x72\x42\x41': function _0x42a14c(_0x51c331) {
            return _0x51c331();
        },
        '\x78\x71\x57': function _0x1cd62c(_0x3086b0) {
            return _0x3086b0();
        },
        '\x63\x6e\x5a': function _0x446fab(_0x3d95fc, _0x136ef8) {
            return _0x3d95fc * _0x136ef8;
        },
        '\x44\x56\x46': function _0x506311(_0x32e679) {
            return _0x32e679();
        },
        '\x56\x49\x4a': function _0x5d981d(_0x1e5783, _0x1648b3, _0x41d46e, _0x250a4d, _0x33e8b8, _0xfc1e0, _0x59a10f, _0x1ebf5b, _0x3ce8a5, _0x182463) {
            return _0x1e5783(_0x1648b3, _0x41d46e, _0x250a4d, _0x33e8b8, _0xfc1e0, _0x59a10f, _0x1ebf5b, _0x3ce8a5, _0x182463);
        },
        '\x52\x53\x70': function _0x45b115(_0x2603d1, _0x5c10c) {
            return _0x2603d1 * _0x5c10c;
        },
        '\x43\x49\x46': function _0x5671d9(_0x2efe6c) {
            return _0x2efe6c();
        },
        '\x5a\x62\x65': function _0xc24477(_0x3f4a95, _0x5da103) {
            return _0x3f4a95 * _0x5da103;
        },
        '\x6f\x6a\x69': function _0x168c90(_0x33817a, _0x245c0f, _0x4ad1c9, _0x2b411d, _0x4008f0) {
            return _0x33817a(_0x245c0f, _0x4ad1c9, _0x2b411d, _0x4008f0);
        },
        '\x61\x59\x66': function _0x508c2a(_0x190fc4, _0x2aeb29) {
            return _0x190fc4 + _0x2aeb29;
        },
        '\x6a\x67\x4d': function _0x2d2a02(_0x4e65b5, _0x2e2944) {
            return _0x4e65b5(_0x2e2944);
        },
        '\x6e\x62\x47': function _0xf2dcc8(_0x4cea75, _0x2ab614) {
            return _0x4cea75 + _0x2ab614;
        }
    };
    if (_0x5eb7d1[_0x2cda('0xe0')](_0x5eb7d1[_0x2cda('0xe1')](CheckFiles, _0x5eb7d1[_0x2cda('0xe2')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5'))), ![])) {
        new java['io'][_0x2cda('0xe6')](_0x5eb7d1[_0x2cda('0xe2')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5')))[_0x2cda('0xe7')]();
    }
    ;
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x25472d = {
                '\x66\x61\x4c': function _0x15457c(_0x1972a2, _0x206bd1) {
                    return _0x5eb7d1[_0x2cda('0xe8')](_0x1972a2, _0x206bd1);
                }
            };
            try {
                var _0x298e67 = _0x2cda('0xe9')[_0x2cda('0x5')]('\x7c'), _0x23aaa9 = 0x0;
                while (!![]) {
                    switch (_0x298e67[_0x23aaa9++]) {
                    case '0':
                        ;
                        continue;
                    case '1':
                        _0x5eb7d1[_0x2cda('0xea')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '2':
                        avn0[_0x2cda('0x6')](avn1);
                        continue;
                    case '3':
                        if (_0x5eb7d1[_0x2cda('0xe0')](swi1, 0x0)) {
                            swi1++;
                            _0x5eb7d1[_0x2cda('0xeb')](TipMes, _0x2cda('0xec'));
                        }
                        continue;
                    case '4':
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case '5':
                        avn0[_0x2cda('0x6')](avn2);
                        continue;
                    case '6':
                        if (_0x5eb7d1[_0x2cda('0xed')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '7':
                        avn2 = _0x5eb7d1[_0x2cda('0xee')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xef')](_0x5eb7d1[_0x2cda('0xf0')](W), 0.3), _0x5eb7d1[_0x2cda('0xef')](_0x5eb7d1[_0x2cda('0xf0')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x24dd9b) {
                            _0x25472d[_0x2cda('0xf1')](File_Select, android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')]());
                        });
                        continue;
                    case '8':
                        for (a = 0x0; _0x5eb7d1[_0x2cda('0xf2')](a, P1[_0x2cda('0xf3')]); a++) {
                            av2[_0x2cda('0x6')](_0x5eb7d1[_0x2cda('0xf4')](add, P1[a][_0x2cda('0x28')](), _0x5eb7d1[_0x2cda('0xf5')](ReadData, P1[a])));
                        }
                        continue;
                    case '9':
                        avn1 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](W), 0.3), _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '10':
                        av1 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'SV', _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](W), 0.3), _0x5eb7d1[_0x2cda('0xf9')](_0x5eb7d1[_0x2cda('0xfa')](H), 0.5), null, null, 0x2, null, null, null);
                        continue;
                    case '11':
                        ac1 = _0x5eb7d1[_0x2cda('0xfb')](NewCDV, 0x2, null, 0x0, av1, _0x5eb7d1[_0x2cda('0xfc')](_0x5eb7d1[_0x2cda('0xfa')](W), 0.3), _0x5eb7d1[_0x2cda('0xfd')](_0x5eb7d1[_0x2cda('0xfe')](H), 0.5), ![], !![], 'RB', _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](W), 0.08), 0x0);
                        continue;
                    case '12':
                        avn0 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](W), 0.3), _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](H), 0.12), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '13':
                        av2 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x101')](W), 0.3), _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x102')](H), 0.5), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '14':
                        av2[_0x2cda('0x6')](avn0);
                        continue;
                    case '15':
                        av3 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x102')](W), 0.3), _0x5eb7d1[_0x2cda('0x103')](_0x5eb7d1[_0x2cda('0x104')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '16':
                        avn2[_0x2cda('0x6')](avn3);
                        continue;
                    case '17':
                        ;
                        continue;
                    case '18':
                        ;
                        continue;
                    case '19':
                        av4 = _0x5eb7d1[_0x2cda('0x105')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x106')](_0x5eb7d1[_0x2cda('0x107')](W), 0.3), _0x5eb7d1[_0x2cda('0x108')](_0x5eb7d1[_0x2cda('0x107')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '20':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '21':
                        cv1 = _0x5eb7d1[_0x2cda('0x109')](NewText, _0x2cda('0x10a'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '22':
                        P1 = new java['io'][_0x2cda('0xe6')](_0x5eb7d1[_0x2cda('0x10b')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5')))[_0x2cda('0x10c')]();
                        continue;
                    case '23':
                        avn3 = _0x5eb7d1[_0x2cda('0x109')](NewText, _0x2cda('0x10d'), 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '24':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '25':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    }
                    break;
                }
            } catch (_0x4b81f8) {
                _0x5eb7d1[_0x2cda('0xe1')](print, _0x4b81f8);
            }
        }
    }));
}
;
function add(_0x5180ac, _0xbbfbaa) {
    var _0x27a330 = {
        '\x72\x58\x6d': function _0x18111d(_0x5ade94, _0x184f9c, _0x1931e2, _0x278589, _0x3da8a7, _0x5bbfbf, _0x183aca, _0x17ae5c, _0x594b16, _0x17dad7) {
            return _0x5ade94(_0x184f9c, _0x1931e2, _0x278589, _0x3da8a7, _0x5bbfbf, _0x183aca, _0x17ae5c, _0x594b16, _0x17dad7);
        },
        '\x4c\x66\x64': function _0x440816(_0x4e4b7b, _0x4e8378) {
            return _0x4e4b7b * _0x4e8378;
        },
        '\x6c\x6a\x64': function _0x59eb83(_0x59dd9e) {
            return _0x59dd9e();
        },
        '\x70\x51\x44': function _0x4f8f98(_0xda0461, _0x179e3c) {
            return _0xda0461 * _0x179e3c;
        },
        '\x78\x61\x78': function _0x27a117(_0x6376e3) {
            return _0x6376e3();
        },
        '\x43\x53\x4a': function _0x4902d2(_0x1d1565, _0xcb32d1) {
            return _0x1d1565(_0xcb32d1);
        },
        '\x66\x54\x7a': function _0x370e91(_0x29021d, _0x3be493, _0x3ac948, _0x4cfd69, _0x15ec36) {
            return _0x29021d(_0x3be493, _0x3ac948, _0x4cfd69, _0x15ec36);
        },
        '\x6e\x4e\x5a': function _0x20a11b(_0xd9344a, _0x3200e0, _0x5e0e33, _0x4d88d3, _0x590fbd, _0x4da769, _0x431229, _0x22b760, _0x285f6b, _0x597dfb) {
            return _0xd9344a(_0x3200e0, _0x5e0e33, _0x4d88d3, _0x590fbd, _0x4da769, _0x431229, _0x22b760, _0x285f6b, _0x597dfb);
        },
        '\x42\x45\x55': function _0x5aeed8(_0x23d499, _0x5c8bdd) {
            return _0x23d499 * _0x5c8bdd;
        },
        '\x73\x42\x63': function _0x57f659(_0xc17e89) {
            return _0xc17e89();
        },
        '\x66\x47\x4d': function _0x14a80d(_0x2efdde, _0x5c9ac0) {
            return _0x2efdde * _0x5c9ac0;
        }
    };
    var _0x410a5e = _0x2cda('0x10e')[_0x2cda('0x5')]('\x7c'), _0xd28c6 = 0x0;
    while (!![]) {
        switch (_0x410a5e[_0xd28c6++]) {
        case '0':
            avn2 = _0x27a330[_0x2cda('0x10f')](NewView, 'LL', _0x27a330[_0x2cda('0x110')](_0x27a330[_0x2cda('0x111')](W), 0.3), _0x27a330[_0x2cda('0x112')](_0x27a330[_0x2cda('0x113')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x100ed5) {
                _0x141812[_0x2cda('0x114')](load, _0xbbfbaa);
            });
            continue;
        case '1':
            var _0x141812 = {
                '\x4b\x4a\x47': function _0x1841b5(_0x490a35, _0xe7e27c) {
                    return _0x27a330[_0x2cda('0x115')](_0x490a35, _0xe7e27c);
                }
            };
            continue;
        case '2':
            avn0[_0x2cda('0x6')](avn2);
            continue;
        case '3':
            avn0[_0x2cda('0x6')](avn1);
            continue;
        case '4':
            avn2[_0x2cda('0x6')](avn3);
            continue;
        case '5':
            avn3 = _0x27a330[_0x2cda('0x116')](NewText, _0x5180ac, 'CC', 0xe, _0x2cda('0x16'));
            continue;
        case '6':
            return avn0;
            continue;
        case '7':
            avn0 = _0x27a330[_0x2cda('0x117')](NewView, 'LL', _0x27a330[_0x2cda('0x112')](_0x27a330[_0x2cda('0x113')](W), 0.3), _0x27a330[_0x2cda('0x118')](_0x27a330[_0x2cda('0x119')](H), 0.12), 'CC', 0x1, 0x2, null, null, null);
            continue;
        case '8':
            avn1 = _0x27a330[_0x2cda('0x117')](NewView, 'LL', _0x27a330[_0x2cda('0x118')](_0x27a330[_0x2cda('0x119')](W), 0.3), _0x27a330[_0x2cda('0x11a')](_0x27a330[_0x2cda('0x119')](H), 0.02), 'CC', 0x1, 0x1, [
                null,
                _0x2cda('0x1d')
            ], 0x0, null);
            continue;
        }
        break;
    }
}
;
var l1;
function load(_0x525855) {
    var _0x1bacda = {
        '\x52\x4b\x49': function _0x46ef4d(_0x5291e5, _0x2b1d76, _0xdb64a9, _0x11004a, _0x5646c9) {
            return _0x5291e5(_0x2b1d76, _0xdb64a9, _0x11004a, _0x5646c9);
        },
        '\x79\x42\x53': function _0x6c6024(_0x38e00f, _0x5a1a8f) {
            return _0x38e00f(_0x5a1a8f);
        },
        '\x68\x5a\x73': function _0x963bf2(_0x1157ae, _0x3901b3) {
            return _0x1157ae(_0x3901b3);
        },
        '\x50\x4f\x47': function _0x303d5f(_0x4b7311, _0x58ed57) {
            return _0x4b7311 != _0x58ed57;
        },
        '\x44\x51\x79': function _0x3e9987(_0x2d898b, _0x160ade) {
            return _0x2d898b != _0x160ade;
        },
        '\x66\x42\x42': function _0x27c9df(_0x238342, _0x51643, _0x501124, _0x4ba563, _0x45077f, _0x38d640, _0xd9247b, _0x4a9521, _0x57cc2b, _0xb26cc4) {
            return _0x238342(_0x51643, _0x501124, _0x4ba563, _0x45077f, _0x38d640, _0xd9247b, _0x4a9521, _0x57cc2b, _0xb26cc4);
        },
        '\x59\x76\x55': function _0x55e67a(_0x2f6fbb, _0x27e976) {
            return _0x2f6fbb * _0x27e976;
        },
        '\x49\x42\x7a': function _0xf02312(_0x5e2ce1) {
            return _0x5e2ce1();
        },
        '\x4e\x72\x71': function _0x1aaefc(_0xa58311, _0x475757) {
            return _0xa58311 * _0x475757;
        },
        '\x58\x67\x43': function _0x4b2c20(_0x1d3971) {
            return _0x1d3971();
        },
        '\x61\x54\x42': function _0x239eae(_0x56829c, _0x293daf, _0x3559c8, _0x17464c, _0xc2e84a) {
            return _0x56829c(_0x293daf, _0x3559c8, _0x17464c, _0xc2e84a);
        },
        '\x61\x41\x68': function _0x5582a1(_0x35d766, _0x185a3e, _0xc60951, _0xe78aed, _0x20972c) {
            return _0x35d766(_0x185a3e, _0xc60951, _0xe78aed, _0x20972c);
        },
        '\x70\x63\x55': function _0x1880ab(_0x42621d) {
            return _0x42621d();
        },
        '\x4a\x6a\x5a': function _0x521820(_0x550f11, _0x278569) {
            return _0x550f11 * _0x278569;
        },
        '\x47\x41\x5a': function _0x2cab65(_0x42d2f) {
            return _0x42d2f();
        },
        '\x5a\x45\x6a': function _0x25050c(_0xe6e8e3, _0x28144d, _0x15a18f, _0x3ad501, _0x3568d0, _0x13d154, _0x228402, _0xc4515e, _0xa197dd, _0x2c0a0d) {
            return _0xe6e8e3(_0x28144d, _0x15a18f, _0x3ad501, _0x3568d0, _0x13d154, _0x228402, _0xc4515e, _0xa197dd, _0x2c0a0d);
        },
        '\x75\x4c\x44': function _0x3090e7(_0x37a4dd, _0x4f9421, _0x4046cd, _0x5c2adf, _0x1805d1, _0x2d5a20, _0x342ec6, _0x4ee1bd, _0x48ec96, _0x2842c1) {
            return _0x37a4dd(_0x4f9421, _0x4046cd, _0x5c2adf, _0x1805d1, _0x2d5a20, _0x342ec6, _0x4ee1bd, _0x48ec96, _0x2842c1);
        },
        '\x45\x59\x47': function _0x2b345d(_0xf70076, _0x317bc9) {
            return _0xf70076 * _0x317bc9;
        },
        '\x55\x54\x47': function _0xdc03b5(_0x187825) {
            return _0x187825();
        },
        '\x67\x75\x6c': function _0x48a7d7(_0x4e93d7, _0x1fccbd) {
            return _0x4e93d7 * _0x1fccbd;
        },
        '\x46\x48\x43': function _0x41eeb8(_0x14b102) {
            return _0x14b102();
        },
        '\x65\x70\x4b': function _0x218955(_0x46b007, _0x4d6b79, _0x462e5b, _0x52d6d2, _0x56564e, _0x555b99, _0x9a0a19, _0x31de5d, _0x34a669, _0x553182, _0x40a2b2, _0x1ca532) {
            return _0x46b007(_0x4d6b79, _0x462e5b, _0x52d6d2, _0x56564e, _0x555b99, _0x9a0a19, _0x31de5d, _0x34a669, _0x553182, _0x40a2b2, _0x1ca532);
        },
        '\x73\x73\x6c': function _0x35cfd8(_0x2d6a1f, _0x3f8938, _0x264d80, _0x241cec, _0xcb54b1, _0x340b93, _0x4378ed, _0x4ab19a, _0x13d78b, _0x57404a) {
            return _0x2d6a1f(_0x3f8938, _0x264d80, _0x241cec, _0xcb54b1, _0x340b93, _0x4378ed, _0x4ab19a, _0x13d78b, _0x57404a);
        },
        '\x4d\x69\x6d': function _0x1c65ca(_0x5db91a, _0x542514) {
            return _0x5db91a * _0x542514;
        },
        '\x6d\x46\x4d': function _0x41d267(_0x493af8) {
            return _0x493af8();
        },
        '\x62\x77\x59': function _0x53e1c2(_0x1f326e, _0x116ea1, _0x2450c0, _0x2af5bc, _0x3f6df0) {
            return _0x1f326e(_0x116ea1, _0x2450c0, _0x2af5bc, _0x3f6df0);
        },
        '\x54\x6e\x68': function _0xfb4d0c(_0x44c7e2, _0x34bd45) {
            return _0x44c7e2 + _0x34bd45;
        },
        '\x68\x56\x52': function _0x53a7c6(_0x389757, _0x449cc4) {
            return _0x389757 * _0x449cc4;
        },
        '\x43\x6a\x67': function _0x23282e(_0x2b1957, _0x37a29a, _0x39b265, _0x16d74b, _0x241646, _0x97b3d, _0x145415, _0x361226, _0x7ed303, _0x53d287) {
            return _0x2b1957(_0x37a29a, _0x39b265, _0x16d74b, _0x241646, _0x97b3d, _0x145415, _0x361226, _0x7ed303, _0x53d287);
        },
        '\x67\x5a\x72': function _0x3f9a0b(_0x2ed6c8, _0x58c537) {
            return _0x2ed6c8(_0x58c537);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x1041a2 = {
                '\x6c\x71\x69': function _0x297ff5(_0x16196c, _0x3a172f) {
                    return _0x1bacda[_0x2cda('0x11b')](_0x16196c, _0x3a172f);
                }
            };
            try {
                var _0x146a5b = _0x2cda('0x11c')[_0x2cda('0x5')]('\x7c'), _0x8470e5 = 0x0;
                while (!![]) {
                    switch (_0x146a5b[_0x8470e5++]) {
                    case '0':
                        if (_0x1bacda[_0x2cda('0x11d')](l1, null)) {
                            l1[_0x2cda('0x21')]();
                            l1 = null;
                        }
                        continue;
                    case '1':
                        d2 = _0x1bacda[_0x2cda('0x11e')](NewView, 'LL', _0x1bacda[_0x2cda('0x11f')](_0x1bacda[_0x2cda('0x120')](H), 0.5), _0x1bacda[_0x2cda('0x121')](_0x1bacda[_0x2cda('0x122')](H), 0.02), 'CC', 0x0, 0x2, null, null, null);
                        continue;
                    case '2':
                        ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                            '\x72\x75\x6e': function () {
                                new android['os'][_0x2cda('0x123')]()[_0x2cda('0x124')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1041a2[_0x2cda('0x125')](l1, null)) {
                                            l1[_0x2cda('0x21')]();
                                            l1 = null;
                                        }
                                        ;
                                    }
                                }), _0x2f8193);
                            }
                        }));
                        continue;
                    case '3':
                        d1[_0x2cda('0x6')](d2);
                        continue;
                    case '4':
                        d1[_0x2cda('0x6')](d6);
                        continue;
                    case '5':
                        d1[_0x2cda('0x6')](d5);
                        continue;
                    case '6':
                        _0x1bacda[_0x2cda('0x126')](UIFadein, d1, 0x0, 0x64, 0xc8);
                        continue;
                    case '7':
                        d6 = _0x1bacda[_0x2cda('0x127')](NewText, _0x2cda('0x128'), 'CC', 0xe, _0x2cda('0x129'));
                        continue;
                    case '8':
                        d5 = _0x1bacda[_0x2cda('0x11e')](NewView, 'LL', _0x1bacda[_0x2cda('0x121')](_0x1bacda[_0x2cda('0x12a')](H), 0.49), _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.01), 'CC', 0x1, 0x1, [
                            'TB',
                            _0x2cda('0x12d'),
                            _0x2cda('0x12e')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '9':
                        new android['os'][_0x2cda('0x123')]()[_0x2cda('0x124')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x1c0bd6 = {
                                    '\x4c\x76\x57': function _0x261af4(_0x1b6441, _0x1606b4, _0xd8dcb5, _0x1366bc, _0x41be78) {
                                        return _0x1bacda[_0x2cda('0x12f')](_0x1b6441, _0x1606b4, _0xd8dcb5, _0x1366bc, _0x41be78);
                                    },
                                    '\x4f\x44\x78': function _0x1ff3a9(_0x128091, _0x4b6513) {
                                        return _0x1bacda[_0x2cda('0x130')](_0x128091, _0x4b6513);
                                    }
                                };
                                try {
                                    _0x1bacda[_0x2cda('0x131')](eval, _0x525855);
                                } catch (_0x267ec0) {
                                    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                                        '\x72\x75\x6e': function () {
                                            _0x1c0bd6[_0x2cda('0xa1')](UILevel, d3$, 0x0, 0x0, 0x0);
                                            d3[_0x2cda('0x132')](d3$);
                                            d6[_0x2cda('0x48')](_0x2cda('0x133'));
                                            _0x1c0bd6[_0x2cda('0x134')](TipMes, _0x2cda('0x135'));
                                        }
                                    }));
                                }
                                ;
                            }
                        }), 0x1f4);
                        continue;
                    case '10':
                        d4 = _0x1bacda[_0x2cda('0x136')](NewView, 'LL', _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.01), _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.02), 'CC', 0x1, 0x1, [
                            'LR',
                            _0x2cda('0x12d'),
                            _0x2cda('0x12e')
                        ], [
                            0xa,
                            0x0,
                            0x0,
                            0xa
                        ], null);
                        continue;
                    case '11':
                        d3$ = _0x1bacda[_0x2cda('0x137')](NewView, 'LL', _0x1bacda[_0x2cda('0x138')](_0x1bacda[_0x2cda('0x139')](H), 0.49), _0x1bacda[_0x2cda('0x13a')](_0x1bacda[_0x2cda('0x13b')](H), 0.02), 'CC', 0x1, 0x1, [
                            'RT',
                            _0x2cda('0x13c'),
                            _0x2cda('0x13d')
                        ], 0xa, null);
                        continue;
                    case '12':
                        d2[_0x2cda('0x6')](d4);
                        continue;
                    case '13':
                        ;
                        continue;
                    case '14':
                        l1 = _0x1bacda[_0x2cda('0x13e')](NewCDV, 0x0, _0x2cda('0x13f'), 0x0, d1, -0x1, -0x1, ![], !![], 'CT', 0x0, 0x0);
                        continue;
                    case '15':
                        d3 = _0x1bacda[_0x2cda('0x140')](NewView, 'LL', _0x1bacda[_0x2cda('0x141')](_0x1bacda[_0x2cda('0x13b')](H), 0.49), _0x1bacda[_0x2cda('0x141')](_0x1bacda[_0x2cda('0x142')](H), 0.02), 'LC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x143')
                        ], 0xa, null);
                        continue;
                    case '16':
                        d3[_0x2cda('0x6')](d3$);
                        continue;
                    case '17':
                        _0x1bacda[_0x2cda('0x144')](UILevel, d3$, -0x64, 0x0, _0x2f8193);
                        continue;
                    case '18':
                        d2[_0x2cda('0x6')](d3);
                        continue;
                    case '19':
                        var _0x2f8193 = _0x1bacda[_0x2cda('0x145')](0x1f4, Math[_0x2cda('0x146')](_0x1bacda[_0x2cda('0x147')](Math[_0x2cda('0x148')](), 0x9c4)));
                        continue;
                    case '20':
                        d1 = _0x1bacda[_0x2cda('0x149')](NewView, 'LL', -0x1, -0x1, 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x225856) {
                _0x1bacda[_0x2cda('0x14a')](print, _0x225856);
            }
        }
    }));
}
;


var _0x5ece = [
    'QVh4',
    'SFAgdWkgZXJyCg\x3d\x3d',
    'UnNI',
    'aGFwcHlWaWxsYWdlcg\x3d\x3d',
    'VGhyZWFk',
    'MHwyfDR8NXw2fDF8Mw\x3d\x3d',
    'b1Bp',
    'UFlj',
    'W\x2bW3suW8gOWQr10\x3d',
    'V3Z3',
    'TmxB',
    'Z2V0WA\x3d\x3d',
    'Z2V0WQ\x3d\x3d',
    'Z2V0Wg\x3d\x3d',
    'Vmlr',
    'bHRm',
    'aWN0',
    'bGVuZ3Ro',
    'YWRkUGFydGljbGU\x3d',
    'bm90ZQ\x3d\x3d',
    'OHwxMHwxMnw3fDZ8MTR8M3wxfDR8OXwyfDB8MTN8NXwxMQ\x3d\x3d',
    'bVFQ',
    'VGxE',
    'WUNQ',
    'UVhv',
    'ZGdV',
    'bU9x',
    'WWFR',
    'SUhM',
    'Y29z',
    'S3FO',
    'V3BG',
    'eFVQ',
    'Ym9H',
    'eXFE',
    'U254',
    'a1Vq',
    'VGxM',
    'c2lu',
    'd0ZF',
    'bmFt',
    'b2NK',
    'U2Vx',
    'Y01I',
    'TEp1',
    'UFBo',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'UFlq',
    'MHw1fDJ8M3w0fDE\x3d',
    'ZHJpcExhdmE\x3d',
    'bXFM',
    'eFds',
    'Nnw0fDF8M3w1fDB8Mnw3',
    'bklz',
    'VVBr',
    'QWtC',
    'WGhK',
    'cmdj',
    'd1Nw',
    'WXpI',
    'bXR4',
    'Wmty',
    'akVV',
    'aEty',
    'QWt0',
    'UnlS',
    'Qmpa',
    'S3di',
    'RFBi',
    'bFlV',
    'TE1J',
    'bHRq',
    'VFJs',
    'ZUpG',
    'VERz',
    'SEVF',
    'Z0xj',
    'cEFU',
    'QmFo',
    'T3FT',
    'cnFo',
    'dXpw',
    'bmt4',
    'Z1Rv',
    'ekpy',
    'cW5y',
    'Rmdo',
    'VERv',
    'Tkts',
    'cHdH',
    'TlJV',
    'YXJn',
    'ZGpq',
    'TXJ4',
    'c3FydA\x3d\x3d',
    'S3Bq',
    'RFRF',
    'U1V4',
    'bGJy',
    'ZXdE',
    'WExz',
    'Rmtq',
    'U0ZX',
    'M3wyfDR8NXwxfDA\x3d',
    'dXZW',
    'ZmxhbWU\x3d',
    'UFNL',
    'T29O',
    'Y2xvdWQ\x3d',
    'TVVD',
    'c2FH',
    'cmFuZG9t',
    'U3d6',
    'b2l1',
    'TklQ',
    'QXJw',
    'S0lG',
    'TFJF',
    'WUx2',
    'QW1h',
    'aEhC',
    'Z2V0VmVsWQ\x3d\x3d',
    'dG9GaXhlZA\x3d\x3d',
    'Vmps',
    'Ym53',
    'c2V0UG9zaXRpb24\x3d',
    'Z2V0RW50aXR5',
    'YWdO',
    'a1FF',
    'Z2V0VGlsZQ\x3d\x3d',
    'Q1Rl',
    'QVJ3',
    'VFdR',
    'TG53',
    'U0dQ',
    'M3w0fDB8Mnwx',
    'all2',
    'd0ZV',
    'TnpR',
    'T2RK',
    'c2V0VmVsWQ\x3d\x3d',
    'eW5x',
    'd1Fm',
    'a0d0',
    'SVRq',
    'ZVFI',
    'T1VX',
    'Z2V0TWF4SGVhbHRo',
    'Z2V0UG9pbnRlZEVudGl0eQ\x3d\x3d',
    'Z2V0SGVhbHRo',
    'QUtS',
    'ZGlzbWlzcw\x3d\x3d',
    'ZkVx',
    'c2V0TGF5b3V0UGFyYW1z',
    'd2lkZ2V0',
    'TGluZWFyTGF5b3V0',
    'TGF5b3V0UGFyYW1z',
    'S3dP',
    'bXd2',
    'U1dk',
    'enlE',
    'a2d6',
    'Z1VV',
    'a0hH',
    'blJp',
    'amF2YS5sYW5nLlRocmVhZCBlcnI6Cg\x3d\x3d',
    'c2xlZXA\x3d',
    'c3RhcnQ\x3d',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'MTF8MTB8Mnw1fDd8OXwzfDF8MHw0fDh8Ng\x3d\x3d',
    'c3BsaXQ\x3d',
    'YWRkVmlldw\x3d\x3d',
    'RWtP',
    'U3Rh',
    'akNT',
    'aUt0',
    'Izk2ZmZkOGYx',
    'Izk2ZmZmNWUy',
    'TG1v',
    'b2Fh',
    'aGFT',
    'Izk2MDBmZmNj',
    'Izk2MDBmZmVl',
    'ZUdG',
    'UUFP',
    'WVFS',
    'cGp1',
    'T2dy',
    'UGFk',
    'RFpt',
    'IzVhOTY5Njk2',
    'IzEwOTY5Njk2',
    'eENa',
    'SG14',
    'QkpI',
    'UmJ3',
    'eEtk',
    'ZXV6',
    'cENX',
    'SmtK',
    'bVlo'
];
(function (_0x3ed5d8, _0x3b07f4) {
    var _0x426e97 = function (_0x576aac) {
        while (--_0x576aac) {
            _0x3ed5d8['\x70\x75\x73\x68'](_0x3ed5d8['\x73\x68\x69\x66\x74']());
        }
    };
    _0x426e97(++_0x3b07f4);
}(_0x5ece, 0x175));
var _0xe5ec = function (_0xcb37b8, _0x34699d) {
    _0xcb37b8 = _0xcb37b8 - 0x0;
    var _0x22536c = _0x5ece[_0xcb37b8];
    if (_0xe5ec['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x53df85 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x2874cb = _0x53df85();
            var _0xbcb215 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x2874cb['\x61\x74\x6f\x62'] || (_0x2874cb['\x61\x74\x6f\x62'] = function (_0x1407c2) {
                var _0x3423dc = String(_0x1407c2)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x572171 = 0x0, _0x397cd1, _0x536bba, _0x3ab455 = 0x0, _0x377afb = ''; _0x536bba = _0x3423dc['\x63\x68\x61\x72\x41\x74'](_0x3ab455++); ~_0x536bba && (_0x397cd1 = _0x572171 % 0x4 ? _0x397cd1 * 0x40 + _0x536bba : _0x536bba, _0x572171++ % 0x4) ? _0x377afb += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x397cd1 >> (-0x2 * _0x572171 & 0x6)) : 0x0) {
                    _0x536bba = _0xbcb215['\x69\x6e\x64\x65\x78\x4f\x66'](_0x536bba);
                }
                return _0x377afb;
            });
        }());
        _0xe5ec['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x34d06a) {
            var _0x566666 = atob(_0x34d06a);
            var _0x773dc3 = [];
            for (var _0x6e3573 = 0x0, _0x23c4f4 = _0x566666['\x6c\x65\x6e\x67\x74\x68']; _0x6e3573 < _0x23c4f4; _0x6e3573++) {
                _0x773dc3 += '\x25' + ('\x30\x30' + _0x566666['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x6e3573)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x773dc3);
        };
        _0xe5ec['\x64\x61\x74\x61'] = {};
        _0xe5ec['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0xe5ec['\x64\x61\x74\x61'][_0xcb37b8] === undefined) {
        _0x22536c = _0xe5ec['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x22536c);
        _0xe5ec['\x64\x61\x74\x61'][_0xcb37b8] = _0x22536c;
    } else {
        _0x22536c = _0xe5ec['\x64\x61\x74\x61'][_0xcb37b8];
    }
    return _0x22536c;
};
var hpc1;
var hp3$;
function ShowHP() {
    var _0x32b81e = {
        '\x45\x6b\x4f': function _0x439653(_0x23413e, _0x47be18, _0x258cf9, _0x3e5b58, _0x2b3965, _0x9dabdf, _0x2522fe, _0x959fd4, _0x21432f, _0x5800aa) {
            return _0x23413e(_0x47be18, _0x258cf9, _0x3e5b58, _0x2b3965, _0x9dabdf, _0x2522fe, _0x959fd4, _0x21432f, _0x5800aa);
        },
        '\x53\x74\x61': function _0x487798(_0x4d17c4, _0x264395) {
            return _0x4d17c4 * _0x264395;
        },
        '\x6a\x43\x53': function _0x263f84(_0x3d6ad6) {
            return _0x3d6ad6();
        },
        '\x69\x4b\x74': function _0x134c5a(_0x20a664, _0x3a5529) {
            return _0x20a664 * _0x3a5529;
        },
        '\x4c\x6d\x6f': function _0x395fef(_0x4e9c4d, _0x4d55de) {
            return _0x4e9c4d * _0x4d55de;
        },
        '\x6f\x61\x61': function _0x236075(_0x785640, _0x2cdf92) {
            return _0x785640 * _0x2cdf92;
        },
        '\x68\x61\x53': function _0x48f9e0(_0x2b2523) {
            return _0x2b2523();
        },
        '\x65\x47\x46': function _0x1dc75d(_0x3ce737, _0x3fa665, _0x2e3766, _0x2c2691, _0x10b6cb, _0x3d80cd, _0x298004, _0x36585e, _0x5ae1f0, _0x17b781, _0x4fb0b9, _0x189090) {
            return _0x3ce737(_0x3fa665, _0x2e3766, _0x2c2691, _0x10b6cb, _0x3d80cd, _0x298004, _0x36585e, _0x5ae1f0, _0x17b781, _0x4fb0b9, _0x189090);
        },
        '\x51\x41\x4f': function _0x4b5123(_0x2c4f7d, _0x372df9) {
            return _0x2c4f7d * _0x372df9;
        },
        '\x59\x51\x52': function _0x1e3a60(_0x3908c0) {
            return _0x3908c0();
        },
        '\x70\x6a\x75': function _0x3a6278(_0x2a54a3, _0x515389) {
            return _0x2a54a3 * _0x515389;
        },
        '\x4f\x67\x72': function _0x234e43(_0x8e1705) {
            return _0x8e1705();
        },
        '\x50\x61\x64': function _0x454302(_0x23cc34, _0x26ac22) {
            return _0x23cc34 * _0x26ac22;
        },
        '\x44\x5a\x6d': function _0x5150f7(_0x1d8e55) {
            return _0x1d8e55();
        },
        '\x78\x43\x5a': function _0x2d06a5(_0x11be07, _0x5005be, _0x281e48, _0x4c518, _0x53a90a, _0x22d2e0, _0x6aac26, _0x191622, _0x732a43, _0x37859b) {
            return _0x11be07(_0x5005be, _0x281e48, _0x4c518, _0x53a90a, _0x22d2e0, _0x6aac26, _0x191622, _0x732a43, _0x37859b);
        },
        '\x48\x6d\x78': function _0x587d40(_0x301227, _0x179db6, _0x5ea18a, _0x50b2d5, _0x4c30f0, _0x12f912, _0x521a5c, _0x52413e, _0x4c5dd4, _0x2ecfb4) {
            return _0x301227(_0x179db6, _0x5ea18a, _0x50b2d5, _0x4c30f0, _0x12f912, _0x521a5c, _0x52413e, _0x4c5dd4, _0x2ecfb4);
        },
        '\x42\x4a\x48': function _0x177346(_0x274698, _0x4d242b) {
            return _0x274698 * _0x4d242b;
        },
        '\x52\x62\x77': function _0x3d7278(_0x722c01) {
            return _0x722c01();
        },
        '\x78\x4b\x64': function _0x335cd2(_0x56fd0f, _0x1ea915, _0x1c785f, _0x573a77, _0x312836, _0xc52d73, _0x707d7a, _0x2f142f, _0x1375e1, _0x4214e0) {
            return _0x56fd0f(_0x1ea915, _0x1c785f, _0x573a77, _0x312836, _0xc52d73, _0x707d7a, _0x2f142f, _0x1375e1, _0x4214e0);
        },
        '\x65\x75\x7a': function _0x288f2a(_0x4ad780, _0x192e86) {
            return _0x4ad780 * _0x192e86;
        },
        '\x70\x43\x57': function _0x4854c9(_0x2b4ee4, _0x36a8da) {
            return _0x2b4ee4 * _0x36a8da;
        },
        '\x4a\x6b\x4a': function _0xde0d32(_0xd0cf91) {
            return _0xd0cf91();
        },
        '\x6d\x59\x68': function _0x19103e(_0x3e0fbe, _0x428cba) {
            return _0x3e0fbe(_0x428cba);
        },
        '\x41\x58\x78': function _0x5b6003(_0x2e6b21, _0x33a760) {
            return _0x2e6b21 + _0x33a760;
        },
        '\x52\x73\x48': function _0x55804a(_0x148da8, _0xa1dfa4, _0x10c204, _0x9b23e1, _0x3d5378) {
            return _0x148da8(_0xa1dfa4, _0x10c204, _0x9b23e1, _0x3d5378);
        }
    };
    ctx[_0xe5ec('0x0')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x5bc5a0 = _0xe5ec('0x3')[_0xe5ec('0x4')]('\x7c'), _0x4308ea = 0x0;
                while (!![]) {
                    switch (_0x5bc5a0[_0x4308ea++]) {
                    case '0':
                        hp3[_0xe5ec('0x5')](hp3$);
                        continue;
                    case '1':
                        hp2[_0xe5ec('0x5')](hp3);
                        continue;
                    case '2':
                        hp3 = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0x7')](_0x32b81e[_0xe5ec('0x8')](H), 0.49), _0x32b81e[_0xe5ec('0x9')](_0x32b81e[_0xe5ec('0x8')](H), 0.03), 'LC', 0x1, 0x1, [
                            'RT',
                            _0xe5ec('0xa'),
                            _0xe5ec('0xb')
                        ], 0xa, null);
                        continue;
                    case '3':
                        hp1[_0xe5ec('0x5')](hp2);
                        continue;
                    case '4':
                        hp2[_0xe5ec('0x5')](hp4);
                        continue;
                    case '5':
                        hp3$ = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0xc')](_0x32b81e[_0xe5ec('0x8')](H), 0.49), _0x32b81e[_0xe5ec('0xd')](_0x32b81e[_0xe5ec('0xe')](H), 0.03), 'CC', 0x1, 0x1, [
                            'RT',
                            _0xe5ec('0xf'),
                            _0xe5ec('0x10')
                        ], 0xa, null);
                        continue;
                    case '6':
                        hpc1 = _0x32b81e[_0xe5ec('0x11')](NewCDV, 0x2, null, 0x0, hp1, -0x1, _0x32b81e[_0xe5ec('0x12')](_0x32b81e[_0xe5ec('0x13')](H), 0.75), ![], ![], 'CB', 0x0, 0x0);
                        continue;
                    case '7':
                        hp4 = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0x14')](_0x32b81e[_0xe5ec('0x15')](H), 0.01), _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.03), 'CC', 0x1, 0x1, [
                            'LR',
                            _0xe5ec('0x18'),
                            _0xe5ec('0x19')
                        ], [
                            0xa,
                            0x0,
                            0x0,
                            0xa
                        ], null);
                        continue;
                    case '8':
                        hp1[_0xe5ec('0x5')](hp5);
                        continue;
                    case '9':
                        hp5 = _0x32b81e[_0xe5ec('0x1a')](NewView, 'LL', _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.49), _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.01), 'CC', 0x1, 0x1, [
                            'TB',
                            _0xe5ec('0x18'),
                            _0xe5ec('0x19')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '10':
                        hp2 = _0x32b81e[_0xe5ec('0x1b')](NewView, 'LL', _0x32b81e[_0xe5ec('0x1c')](_0x32b81e[_0xe5ec('0x17')](H), 0.5), _0x32b81e[_0xe5ec('0x1c')](_0x32b81e[_0xe5ec('0x1d')](H), 0.03), 'CC', 0x0, 0x2, null, null, null);
                        continue;
                    case '11':
                        hp1 = _0x32b81e[_0xe5ec('0x1e')](NewView, 'LL', _0x32b81e[_0xe5ec('0x1f')](_0x32b81e[_0xe5ec('0x1d')](H), 0.5), _0x32b81e[_0xe5ec('0x20')](_0x32b81e[_0xe5ec('0x21')](H), 0.04), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x21a5dd) {
                _0x32b81e[_0xe5ec('0x22')](print, _0x32b81e[_0xe5ec('0x23')](_0xe5ec('0x24'), _0x21a5dd));
            }
            _0x32b81e[_0xe5ec('0x25')](UIFadein, hp1, 0x0, 0x64, 0xc8);
        }
    }));
}
;
var xx1 = [], yy1 = [], zz1 = [], ti = 0x0;
var l = 0x1;
var k = 0xa;
var xx2 = 0xa;
var n = ParticleType[_0xe5ec('0x26')];
var gh = 0x0;
var loc1 = ![];
var x = 0x0, y = 0x0, z = 0x0;
var spy = 0x0, y1 = 0x0, y2 = 0x0;
var det = 0x2;
var lev = 0x0;
var pro = 0x0;
var x1 = new java[_0xe5ec('0x1')][_0xe5ec('0x27')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
    '\x72\x75\x6e': function () {
        var _0x44b77d = {
            '\x75\x76\x56': function _0x501d5e(_0x414c76, _0x4d2434) {
                return _0x414c76 == _0x4d2434;
            },
            '\x50\x53\x4b': function _0x1b75f3(_0x72ea40, _0x18ebfe) {
                return _0x72ea40 * _0x18ebfe;
            },
            '\x4f\x6f\x4e': function _0x286bb4(_0x3dd552, _0x540c6f) {
                return _0x3dd552 * _0x540c6f;
            },
            '\x4d\x55\x43': function _0x39f0cf(_0x1cb44f, _0xe764c8) {
                return _0x1cb44f * _0xe764c8;
            },
            '\x73\x61\x47': function _0x276da5(_0x56e5b3, _0xc47a8f) {
                return _0x56e5b3 - _0xc47a8f;
            },
            '\x53\x77\x7a': function _0x400cf4(_0x5ca7f4, _0x2128be) {
                return _0x5ca7f4 - _0x2128be;
            },
            '\x6f\x69\x75': function _0x3ff856(_0x21cae9, _0x3f5a9c) {
                return _0x21cae9 / _0x3f5a9c;
            },
            '\x4e\x49\x50': function _0x111498(_0x273317, _0x5eca75) {
                return _0x273317 + _0x5eca75;
            },
            '\x41\x72\x70': function _0x28d6b9(_0x445b32, _0x81dafc) {
                return _0x445b32 * _0x81dafc;
            },
            '\x4b\x49\x46': function _0x4e34cf(_0x2c547e, _0x52d890) {
                return _0x2c547e * _0x52d890;
            },
            '\x6b\x48\x47': function _0x3e1207(_0x52920a, _0x17ed9e) {
                return _0x52920a(_0x17ed9e);
            },
            '\x6e\x52\x69': function _0x24e8a9(_0x2393d7, _0x214df8) {
                return _0x2393d7 + _0x214df8;
            }
        };
        while (0x1) {
            try {
                ctx[_0xe5ec('0x0')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
                    '\x72\x75\x6e': function () {
                        var _0x3d73e5 = {
                            '\x6f\x50\x69': function _0xb81397(_0x4e7a6c) {
                                return _0x4e7a6c();
                            },
                            '\x50\x59\x63': function _0x29f5fe(_0x47eb7f, _0x2f842f) {
                                return _0x47eb7f == _0x2f842f;
                            },
                            '\x57\x76\x77': function _0x77b1ac(_0x57ee20, _0x15f5bb) {
                                return _0x57ee20 > _0x15f5bb;
                            },
                            '\x4e\x6c\x41': function _0x38dc6f(_0x395410, _0x4f2339) {
                                return _0x395410 == _0x4f2339;
                            },
                            '\x56\x69\x6b': function _0x784d2(_0x5fea9, _0x28e5bc) {
                                return _0x5fea9 - _0x28e5bc;
                            },
                            '\x6c\x74\x66': function _0x3a5ac8(_0x2e0d4c, _0x309a85) {
                                return _0x2e0d4c > _0x309a85;
                            },
                            '\x69\x63\x74': function _0xbd6863(_0x56ba24, _0x54d0b0) {
                                return _0x56ba24 < _0x54d0b0;
                            },
                            '\x58\x4c\x73': function _0x3dcabe(_0x19cbc8, _0x5960c8, _0x45e679, _0x1b2fd2, _0x29ef22) {
                                return _0x19cbc8(_0x5960c8, _0x45e679, _0x1b2fd2, _0x29ef22);
                            },
                            '\x46\x6b\x6a': function _0x2bab0c(_0x49064e) {
                                return _0x49064e();
                            },
                            '\x53\x46\x57': function _0x1c19d9(_0x45c508) {
                                return _0x45c508();
                            },
                            '\x4c\x52\x45': function _0x856935(_0x272e49, _0x56df73, _0x5d8793, _0x37e604, _0xb489e6, _0x2463a0, _0x1009d0) {
                                return _0x272e49(_0x56df73, _0x5d8793, _0x37e604, _0xb489e6, _0x2463a0, _0x1009d0);
                            },
                            '\x59\x4c\x76': function _0x352809(_0x2ac42d, _0x1d4046) {
                                return _0x2ac42d - _0x1d4046;
                            },
                            '\x41\x6d\x61': function _0xa21c4d(_0x457467, _0x44302f) {
                                return _0x457467 == _0x44302f;
                            },
                            '\x68\x48\x42': function _0x5ef8eb(_0x417c6a, _0x17f837) {
                                return _0x417c6a == _0x17f837;
                            },
                            '\x56\x6a\x6c': function _0x58fb21(_0x43f7a2, _0x5cc18c) {
                                return _0x43f7a2 == _0x5cc18c;
                            },
                            '\x62\x6e\x77': function _0x346e23(_0x735b05, _0x148054) {
                                return _0x735b05 == _0x148054;
                            },
                            '\x61\x67\x4e': function _0x3d74a2(_0x11b805, _0x187f50) {
                                return _0x11b805 + _0x187f50;
                            },
                            '\x6b\x51\x45': function _0x5cc3b9(_0x27b953, _0x596d0d) {
                                return _0x27b953 != _0x596d0d;
                            },
                            '\x43\x54\x65': function _0x28d210(_0x3595bf, _0x422ad2) {
                                return _0x3595bf - _0x422ad2;
                            },
                            '\x41\x52\x77': function _0x34ee5c(_0x1528fe) {
                                return _0x1528fe();
                            },
                            '\x54\x57\x51': function _0x388a39(_0x400c06) {
                                return _0x400c06();
                            },
                            '\x4c\x6e\x77': function _0x59c80c(_0x16a35c) {
                                return _0x16a35c();
                            },
                            '\x53\x47\x50': function _0x394ce7(_0x4008c2) {
                                return _0x4008c2();
                            },
                            '\x6a\x59\x76': function _0x5f28d2(_0x3335a7, _0x4ab743) {
                                return _0x3335a7 < _0x4ab743;
                            },
                            '\x77\x46\x55': function _0x50c1a0(_0x4f9f4a, _0xea0dfb) {
                                return _0x4f9f4a != _0xea0dfb;
                            },
                            '\x4e\x7a\x51': function _0x2bd71a(_0x195888, _0x3f02b) {
                                return _0x195888 != _0x3f02b;
                            },
                            '\x4f\x64\x4a': function _0x5e06e6(_0x24230c, _0x43e8ac) {
                                return _0x24230c + _0x43e8ac;
                            },
                            '\x79\x6e\x71': function _0x1209c8(_0x2a7dea) {
                                return _0x2a7dea();
                            },
                            '\x77\x51\x66': function _0x2c9057(_0x3a5315, _0x4184f8) {
                                return _0x3a5315 * _0x4184f8;
                            },
                            '\x6b\x47\x74': function _0xf000f6(_0x4c8deb) {
                                return _0x4c8deb();
                            },
                            '\x49\x54\x6a': function _0x5d53a9(_0x57bf13) {
                                return _0x57bf13();
                            },
                            '\x65\x51\x48': function _0x4eed57(_0x27420a) {
                                return _0x27420a();
                            },
                            '\x4f\x55\x57': function _0xaee0eb(_0x59a116, _0xe5e703) {
                                return _0x59a116 == _0xe5e703;
                            },
                            '\x41\x4b\x52': function _0x5236d7(_0x1ae658, _0x1ce1a3) {
                                return _0x1ae658 != _0x1ce1a3;
                            },
                            '\x66\x45\x71': function _0x2af09c(_0x2f7e42, _0x15852f) {
                                return _0x2f7e42 != _0x15852f;
                            },
                            '\x4b\x77\x4f': function _0x382fa9(_0x5e825a, _0x311b45) {
                                return _0x5e825a * _0x311b45;
                            },
                            '\x6d\x77\x76': function _0x20c715(_0x14fd09, _0x25ac7e) {
                                return _0x14fd09 * _0x25ac7e;
                            },
                            '\x53\x57\x64': function _0x5bc8bf(_0x3621a4, _0x98a0c) {
                                return _0x3621a4 / _0x98a0c;
                            },
                            '\x7a\x79\x44': function _0x4309f4(_0x232765, _0x2dd488) {
                                return _0x232765 * _0x2dd488;
                            },
                            '\x6b\x67\x7a': function _0x120240(_0x422a9f) {
                                return _0x422a9f();
                            },
                            '\x67\x55\x55': function _0x13d4ab(_0x5c3855, _0x2d1b59) {
                                return _0x5c3855 != _0x2d1b59;
                            }
                        };
                        var _0x47384a = _0xe5ec('0x28')[_0xe5ec('0x4')]('\x7c'), _0x321c5d = 0x0;
                        while (!![]) {
                            switch (_0x47384a[_0x321c5d++]) {
                            case '0':
                                var _0x2986e1 = {
                                    '\x50\x59\x6a': function _0x75e152(_0x5487c6) {
                                        return _0x3d73e5[_0xe5ec('0x29')](_0x5487c6);
                                    }
                                };
                                continue;
                            case '1':
                                if (_0x3d73e5[_0xe5ec('0x2a')](fun3[0x1], _0xe5ec('0x2b'))) {
                                    pro++;
                                    if (_0x3d73e5[_0xe5ec('0x2c')](pro, 0x32)) {
                                        pro = 0x0;
                                    }
                                    ;
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1)) {
                                        loc1 = !![];
                                    }
                                    ;
                                    var _0x53ea30 = Player[_0xe5ec('0x2e')](), _0x59e0a4 = Player[_0xe5ec('0x2f')](), _0x1cb9d6 = Player[_0xe5ec('0x30')]();
                                    xx1[ti] = _0x53ea30, yy1[ti] = _0x3d73e5[_0xe5ec('0x31')](_0x59e0a4, 1.4), zz1[ti] = _0x1cb9d6;
                                    ti++;
                                    if (_0x3d73e5[_0xe5ec('0x32')](ti, 0xa)) {
                                        xx1 = [], yy1 = [], zz1 = [], ti = 0x0;
                                    }
                                    for (var _0x7470b2 = 0x0; _0x3d73e5[_0xe5ec('0x33')](_0x7470b2, xx1[_0xe5ec('0x34')]); _0x7470b2++) {
                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x36')], xx1[_0x7470b2], yy1[_0x7470b2], zz1[_0x7470b2], 0x0, 0x0, 0x0, 0x2);
                                    }
                                    if (_0x3d73e5[_0xe5ec('0x2d')](loc1, !![])) {
                                        function _0x2d2779() {
                                            var _0x1e7d20 = {
                                                '\x6d\x51\x50': function _0x5754e6(_0x170ce6, _0x5f501e) {
                                                    return _0x170ce6 + _0x5f501e;
                                                },
                                                '\x54\x6c\x44': function _0x11a62b(_0x5ac7d4, _0x2f00db) {
                                                    return _0x5ac7d4 * _0x2f00db;
                                                },
                                                '\x59\x43\x50': function _0x17e430(_0x57f919, _0x2a40b5) {
                                                    return _0x57f919 + _0x2a40b5;
                                                },
                                                '\x51\x58\x6f': function _0x4775a6(_0xd165ec, _0xda402f) {
                                                    return _0xd165ec - _0xda402f;
                                                },
                                                '\x64\x67\x55': function _0x1fc501(_0x1631b3, _0x12a025) {
                                                    return _0x1631b3 * _0x12a025;
                                                },
                                                '\x6d\x4f\x71': function _0x377e65(_0x14b8a9, _0x32f0f5) {
                                                    return _0x14b8a9 - _0x32f0f5;
                                                },
                                                '\x59\x61\x51': function _0x3834bf(_0x5f51ff, _0x129001) {
                                                    return _0x5f51ff + _0x129001;
                                                },
                                                '\x49\x48\x4c': function _0x72ec89(_0xecb124, _0x201c66) {
                                                    return _0xecb124 + _0x201c66;
                                                },
                                                '\x4b\x71\x4e': function _0xb3f068(_0x221e2b, _0x2c9939) {
                                                    return _0x221e2b * _0x2c9939;
                                                },
                                                '\x57\x70\x46': function _0x19c596(_0x21a9f6, _0x215828) {
                                                    return _0x21a9f6 / _0x215828;
                                                },
                                                '\x78\x55\x50': function _0x830ff4(_0x1e8143, _0x459d1f) {
                                                    return _0x1e8143 * _0x459d1f;
                                                },
                                                '\x62\x6f\x47': function _0x1915a4(_0x30e92, _0x44562d) {
                                                    return _0x30e92 - _0x44562d;
                                                },
                                                '\x79\x71\x44': function _0x5d71a0(_0x410e1b, _0x5c0984) {
                                                    return _0x410e1b * _0x5c0984;
                                                },
                                                '\x53\x6e\x78': function _0x346864(_0x94d22c, _0x38ef79) {
                                                    return _0x94d22c * _0x38ef79;
                                                },
                                                '\x6b\x55\x6a': function _0x2e7522(_0x18e35c, _0x360bfc) {
                                                    return _0x18e35c * _0x360bfc;
                                                },
                                                '\x54\x6c\x4c': function _0x10ae15(_0x2a97da, _0x52df61) {
                                                    return _0x2a97da * _0x52df61;
                                                },
                                                '\x77\x46\x45': function _0x1966dc(_0x1dad68, _0x51d508) {
                                                    return _0x1dad68 * _0x51d508;
                                                },
                                                '\x6e\x61\x6d': function _0x489b7d(_0x804e1c, _0xa91da) {
                                                    return _0x804e1c / _0xa91da;
                                                },
                                                '\x6f\x63\x4a': function _0x5ae700(_0x38dc98, _0x16cf01) {
                                                    return _0x38dc98 * _0x16cf01;
                                                },
                                                '\x53\x65\x71': function _0x19ddf5(_0x364aa9, _0x1696aa) {
                                                    return _0x364aa9 > _0x1696aa;
                                                },
                                                '\x63\x4d\x48': function _0x2175ee(_0x4258d8, _0x41882e) {
                                                    return _0x4258d8 - _0x41882e;
                                                },
                                                '\x4c\x4a\x75': function _0x496663(_0x46acc4, _0x36dff0) {
                                                    return _0x46acc4 * _0x36dff0;
                                                },
                                                '\x50\x50\x68': function _0x11f23b(_0x3cbdae, _0x4ebc5f) {
                                                    return _0x3cbdae * _0x4ebc5f;
                                                }
                                            };
                                            var _0x5065df = _0xe5ec('0x37')[_0xe5ec('0x4')]('\x7c'), _0x42ddf3 = 0x0;
                                            while (!![]) {
                                                switch (_0x5065df[_0x42ddf3++]) {
                                                case '0':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x38')](xx4, _0x1e7d20[_0xe5ec('0x39')](_0x3367c9, l)), _0x1e7d20[_0xe5ec('0x3a')](yy4, gh), _0x1e7d20[_0xe5ec('0x3b')](zz4, _0x1e7d20[_0xe5ec('0x3c')](_0x19e40c, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '1':
                                                    xx4 = Player[_0xe5ec('0x2e')]();
                                                    continue;
                                                case '2':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x3d')](xx4, _0x1e7d20[_0xe5ec('0x3c')](_0x19e40c, l)), _0x1e7d20[_0xe5ec('0x3e')](yy4, gh), _0x1e7d20[_0xe5ec('0x3f')](zz4, _0x1e7d20[_0xe5ec('0x3c')](_0x3367c9, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '3':
                                                    var _0x31c2e4 = _0x1e7d20[_0xe5ec('0x3c')](Math[_0xe5ec('0x40')](_0x1e7d20[_0xe5ec('0x41')](_0x1e7d20[_0xe5ec('0x42')](_0x1e7d20[_0xe5ec('0x43')](xx3, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '4':
                                                    yy4 = _0x1e7d20[_0xe5ec('0x3f')](Player[_0xe5ec('0x2f')](), 0.5);
                                                    continue;
                                                case '5':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x3f')](xx4, _0x1e7d20[_0xe5ec('0x43')](_0x3fcdce, l)), _0x1e7d20[_0xe5ec('0x3f')](yy4, gh), _0x1e7d20[_0xe5ec('0x44')](zz4, _0x1e7d20[_0xe5ec('0x45')](_0x31c2e4, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '6':
                                                    var _0x19e40c = _0x1e7d20[_0xe5ec('0x46')](Math[_0xe5ec('0x40')](_0x1e7d20[_0xe5ec('0x47')](_0x1e7d20[_0xe5ec('0x42')](_0x1e7d20[_0xe5ec('0x47')](xx2, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '7':
                                                    var _0x3367c9 = _0x1e7d20[_0xe5ec('0x48')](Math[_0xe5ec('0x49')](_0x1e7d20[_0xe5ec('0x4a')](_0x1e7d20[_0xe5ec('0x4b')](_0x1e7d20[_0xe5ec('0x4c')](xx2, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '8':
                                                    xx2++;
                                                    continue;
                                                case '9':
                                                    zz4 = Player[_0xe5ec('0x30')]();
                                                    continue;
                                                case '10':
                                                    gh += 0.1;
                                                    continue;
                                                case '11':
                                                    if (_0x1e7d20[_0xe5ec('0x4d')](gh, 0x1)) {
                                                        gh = -0x2;
                                                        loc1 = ![];
                                                    }
                                                    continue;
                                                case '12':
                                                    xx3 = _0x1e7d20[_0xe5ec('0x3f')](xx2, 0x8);
                                                    continue;
                                                case '13':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x4e')](xx4, _0x1e7d20[_0xe5ec('0x4c')](_0x31c2e4, l)), _0x1e7d20[_0xe5ec('0x3f')](yy4, gh), _0x1e7d20[_0xe5ec('0x3f')](zz4, _0x1e7d20[_0xe5ec('0x4f')](_0x3fcdce, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '14':
                                                    var _0x3fcdce = _0x1e7d20[_0xe5ec('0x50')](Math[_0xe5ec('0x49')](_0x1e7d20[_0xe5ec('0x50')](_0x1e7d20[_0xe5ec('0x4b')](_0x1e7d20[_0xe5ec('0x50')](xx3, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                        ;
                                        _0x3d73e5[_0xe5ec('0x29')](_0x2d2779);
                                        new android['os'][_0xe5ec('0x51')]()[_0xe5ec('0x52')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                _0x2986e1[_0xe5ec('0x53')](_0x2d2779);
                                            }
                                        }), 0x4b);
                                    }
                                    ;
                                    function _0x40fad1(_0x607256, _0x21f54a, _0x16b7d4, _0xf85621) {
                                        var _0x5b0606 = {
                                            '\x6d\x71\x4c': function _0x24dc0b(_0x442776, _0x3a988a) {
                                                return _0x442776 <= _0x3a988a;
                                            },
                                            '\x78\x57\x6c': function _0x55d030(_0x280766, _0x14694a) {
                                                return _0x280766 / _0x14694a;
                                            },
                                            '\x6e\x49\x73': function _0x34cc5d(_0x21c46a, _0x316da9) {
                                                return _0x21c46a + _0x316da9;
                                            },
                                            '\x55\x50\x6b': function _0x28a16f(_0x4af013, _0x4ace71) {
                                                return _0x4af013 * _0x4ace71;
                                            },
                                            '\x41\x6b\x42': function _0x37925b(_0x59d534, _0x36d4df) {
                                                return _0x59d534 - _0x36d4df;
                                            },
                                            '\x58\x68\x4a': function _0xbb5613(_0x4ce795, _0x5bd571) {
                                                return _0x4ce795 + _0x5bd571;
                                            },
                                            '\x72\x67\x63': function _0x1f11d2(_0x3612b1, _0x85fc44) {
                                                return _0x3612b1 - _0x85fc44;
                                            },
                                            '\x77\x53\x70': function _0x58fb7b(_0x3b6324, _0x3c411b) {
                                                return _0x3b6324 - _0x3c411b;
                                            },
                                            '\x59\x7a\x48': function _0x102f15(_0x34dbbc, _0x936875) {
                                                return _0x34dbbc * _0x936875;
                                            },
                                            '\x6d\x74\x78': function _0x510d96(_0x1c65bf, _0x4fa016) {
                                                return _0x1c65bf / _0x4fa016;
                                            },
                                            '\x5a\x6b\x72': function _0x2c691d(_0x52ecd7, _0x432187) {
                                                return _0x52ecd7 * _0x432187;
                                            },
                                            '\x6a\x45\x55': function _0x2a6e45(_0x54a57f, _0x15d79e) {
                                                return _0x54a57f + _0x15d79e;
                                            },
                                            '\x68\x4b\x72': function _0x671904(_0x5ecade, _0x8bfd64) {
                                                return _0x5ecade * _0x8bfd64;
                                            },
                                            '\x41\x6b\x74': function _0xcea80c(_0x509b2a, _0x5a411f) {
                                                return _0x509b2a + _0x5a411f;
                                            },
                                            '\x52\x79\x52': function _0x3955f7(_0x1c4c85, _0x5f0db5) {
                                                return _0x1c4c85 + _0x5f0db5;
                                            },
                                            '\x42\x6a\x5a': function _0x40cfc6(_0x1da433, _0x58369f) {
                                                return _0x1da433 * _0x58369f;
                                            },
                                            '\x4b\x77\x62': function _0x1838ed(_0x46c911, _0x12fda6) {
                                                return _0x46c911 / _0x12fda6;
                                            },
                                            '\x44\x50\x62': function _0x347818(_0xf5ba25, _0x1c4eaa) {
                                                return _0xf5ba25 * _0x1c4eaa;
                                            },
                                            '\x6c\x59\x55': function _0x49d5a2(_0x537d26, _0x5ea4df) {
                                                return _0x537d26 / _0x5ea4df;
                                            },
                                            '\x4c\x4d\x49': function _0x3a82f5(_0xce7530, _0x1a0ce9) {
                                                return _0xce7530 * _0x1a0ce9;
                                            },
                                            '\x6c\x74\x6a': function _0x3dab65(_0x5f1f43, _0x336a07) {
                                                return _0x5f1f43 + _0x336a07;
                                            },
                                            '\x54\x52\x6c': function _0x5644e6(_0x277a3a, _0x5019d7) {
                                                return _0x277a3a * _0x5019d7;
                                            },
                                            '\x65\x4a\x46': function _0x1b93d6(_0x273a41, _0x801269) {
                                                return _0x273a41 + _0x801269;
                                            },
                                            '\x54\x44\x73': function _0x8aba86(_0x10517f, _0x5dc7e6) {
                                                return _0x10517f / _0x5dc7e6;
                                            },
                                            '\x48\x45\x45': function _0x25c61b(_0xd53c41, _0x2b2294) {
                                                return _0xd53c41 * _0x2b2294;
                                            },
                                            '\x67\x4c\x63': function _0x267549(_0x195e97, _0x5014e7) {
                                                return _0x195e97 + _0x5014e7;
                                            },
                                            '\x70\x41\x54': function _0x59f6ab(_0x1918f8, _0xdb638a) {
                                                return _0x1918f8 * _0xdb638a;
                                            },
                                            '\x42\x61\x68': function _0x34dd59(_0x90f20f, _0x4324f5) {
                                                return _0x90f20f / _0x4324f5;
                                            },
                                            '\x4f\x71\x53': function _0x368c1b(_0x1dbe13, _0xfb89b1) {
                                                return _0x1dbe13 * _0xfb89b1;
                                            },
                                            '\x72\x71\x68': function _0x25b98e(_0xa94a90, _0xf9b220) {
                                                return _0xa94a90 + _0xf9b220;
                                            },
                                            '\x75\x7a\x70': function _0x7d4218(_0x43ec83, _0x39a85e) {
                                                return _0x43ec83 + _0x39a85e;
                                            },
                                            '\x6e\x6b\x78': function _0x427db5(_0x74bf0b, _0x55ba3f) {
                                                return _0x74bf0b * _0x55ba3f;
                                            },
                                            '\x67\x54\x6f': function _0x23ba19(_0x5e920e, _0x17bade) {
                                                return _0x5e920e * _0x17bade;
                                            },
                                            '\x7a\x4a\x72': function _0x41beb4(_0x22b8a7, _0x502f77) {
                                                return _0x22b8a7 + _0x502f77;
                                            },
                                            '\x71\x6e\x72': function _0x5ec247(_0x464ce8, _0x552b3b) {
                                                return _0x464ce8 + _0x552b3b;
                                            },
                                            '\x46\x67\x68': function _0x58160c(_0x379e4d, _0x44e0f9) {
                                                return _0x379e4d * _0x44e0f9;
                                            },
                                            '\x54\x44\x6f': function _0x164fb6(_0xc80299, _0xc3f5af) {
                                                return _0xc80299 / _0xc3f5af;
                                            },
                                            '\x4e\x4b\x6c': function _0xa21bb7(_0x32f8f3, _0x3f2bbe) {
                                                return _0x32f8f3 / _0x3f2bbe;
                                            },
                                            '\x70\x77\x47': function _0xd736b7(_0x282d33, _0x1e95d1) {
                                                return _0x282d33 - _0x1e95d1;
                                            },
                                            '\x4e\x52\x55': function _0x195926(_0x11b1c7, _0x53997a) {
                                                return _0x11b1c7 + _0x53997a;
                                            },
                                            '\x61\x72\x67': function _0x48b639(_0x59a6ce, _0x2104f3) {
                                                return _0x59a6ce - _0x2104f3;
                                            },
                                            '\x64\x6a\x6a': function _0x3d7945(_0x4fa24e, _0x5428b0) {
                                                return _0x4fa24e * _0x5428b0;
                                            },
                                            '\x4d\x72\x78': function _0x645f6b(_0x563e55, _0x1cabf3) {
                                                return _0x563e55 - _0x1cabf3;
                                            },
                                            '\x4b\x70\x6a': function _0x2833f7(_0x264006, _0x1d2003) {
                                                return _0x264006 + _0x1d2003;
                                            },
                                            '\x44\x54\x45': function _0x22e631(_0x2ae6bf, _0x4f9bd8) {
                                                return _0x2ae6bf * _0x4f9bd8;
                                            },
                                            '\x53\x55\x78': function _0x9915f4(_0x5e61db, _0x896a4) {
                                                return _0x5e61db * _0x896a4;
                                            },
                                            '\x6c\x62\x72': function _0x1f9009(_0x3abbbf, _0x167895) {
                                                return _0x3abbbf / _0x167895;
                                            },
                                            '\x65\x77\x44': function _0x2ebfc0(_0x4230d1, _0x28d337) {
                                                return _0x4230d1 + _0x28d337;
                                            }
                                        };
                                        var _0x3f4ffc = _0xe5ec('0x54')[_0xe5ec('0x4')]('\x7c'), _0x56cd82 = 0x0;
                                        while (!![]) {
                                            switch (_0x3f4ffc[_0x56cd82++]) {
                                            case '0':
                                                var _0x4f1998 = ParticleType[_0xe5ec('0x55')];
                                                continue;
                                            case '1':
                                                for (var _0x111f8a = 0x0; _0x5b0606[_0xe5ec('0x56')](_0x111f8a, _0x1715ce); _0x111f8a += _0x5b0606[_0xe5ec('0x57')](_0xf85621, 0x9)) {
                                                    var _0x237983 = _0xe5ec('0x58')[_0xe5ec('0x4')]('\x7c'), _0x5c42c8 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x237983[_0x5c42c8++]) {
                                                        case '0':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x59')](_0x607256, _0x5b0606[_0xe5ec('0x5a')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x57')](_0x5b0606[_0xe5ec('0x5a')](_0x5b0606[_0xe5ec('0x5b')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x5c')](_0x5b0606[_0xe5ec('0x5c')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x5a')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x57')](_0x5b0606[_0xe5ec('0x5a')](_0x5b0606[_0xe5ec('0x5d')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '1':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x5c')](_0x5b0606[_0xe5ec('0x5e')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x5f')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x61')](22.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x62')](_0x16b7d4, _0x5b0606[_0xe5ec('0x61')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](22.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '2':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x62')](_0x607256, _0x5b0606[_0xe5ec('0x63')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](_0x5b0606[_0xe5ec('0x64')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x5e')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x63')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](_0x5b0606[_0xe5ec('0x65')](0x5a, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '3':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x5e')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x66')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x67')](_0x5b0606[_0xe5ec('0x68')](337.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x65')](_0x16b7d4, _0x5b0606[_0xe5ec('0x68')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x69')](_0x5b0606[_0xe5ec('0x6a')](337.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '4':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x6b')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x6c')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x69')](_0x5b0606[_0xe5ec('0x6c')](202.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x6d')](_0x16b7d4, _0x5b0606[_0xe5ec('0x6c')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x6e')](_0x5b0606[_0xe5ec('0x6f')](202.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '5':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x70')](_0x607256, _0x5b0606[_0xe5ec('0x71')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x73')](_0x5b0606[_0xe5ec('0x74')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x74')](_0x5b0606[_0xe5ec('0x75')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x76')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x77')](_0x5b0606[_0xe5ec('0x78')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '6':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x79')](_0x5b0606[_0xe5ec('0x79')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x77')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x77')](157.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x79')](_0x16b7d4, _0x5b0606[_0xe5ec('0x7a')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x7b')](_0x5b0606[_0xe5ec('0x7a')](157.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '7':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x79')](_0x607256, _0x5b0606[_0xe5ec('0x7a')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x7a')](_0x5b0606[_0xe5ec('0x7d')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x7e')](_0x5b0606[_0xe5ec('0x7f')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x80')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x80')](_0x5b0606[_0xe5ec('0x81')](0x5a, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                                continue;
                                            case '2':
                                                var _0xf85621 = Math[_0xe5ec('0x82')](_0x5b0606[_0xe5ec('0x83')](_0x5b0606[_0xe5ec('0x84')](_0xf85621, _0xf85621), _0x5b0606[_0xe5ec('0x84')](_0xf85621, _0xf85621)));
                                                continue;
                                            case '3':
                                                var _0x1715ce = _0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x83')](Math[_0xe5ec('0x82')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x85')](_0xf85621, _0xf85621), 0x2)), _0xf85621), Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x85')](22.5, Math['PI']), 0xb4)));
                                                continue;
                                            case '4':
                                                for (_0x111f8a = 0x0; _0x5b0606[_0xe5ec('0x56')](_0x111f8a, 0x14); _0x111f8a += _0x5b0606[_0xe5ec('0x86')](_0xf85621, 0xa)) {
                                                    Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x87')](_0x607256, _0x5b0606[_0xe5ec('0x85')](Math[_0xe5ec('0x40')](_0x111f8a), _0xf85621)), _0x21f54a, _0x5b0606[_0xe5ec('0x87')](_0x16b7d4, _0x5b0606[_0xe5ec('0x85')](Math[_0xe5ec('0x49')](_0x111f8a), _0xf85621)), 0x0, 0x0, 0x0, _0x20f69e);
                                                }
                                                continue;
                                            case '5':
                                                var _0x20f69e = 0x1;
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1)) {
                                        loc1 = !![];
                                        _0x3d73e5[_0xe5ec('0x88')](_0x40fad1, _0x3d73e5[_0xe5ec('0x89')](getPlayerX), _0x3d73e5[_0xe5ec('0x31')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x2);
                                    }
                                    ;
                                    function _0x313050(_0x1c13c3, _0x2a8499, _0x23a8e1, _0x208c01, _0x13fd10, _0x1857e0) {
                                        while (_0x13fd10--) {
                                            var _0x1fd8f3 = _0xe5ec('0x8b')[_0xe5ec('0x4')]('\x7c'), _0x1baea9 = 0x0;
                                            while (!![]) {
                                                switch (_0x1fd8f3[_0x1baea9++]) {
                                                case '0':
                                                    if (_0x44b77d[_0xe5ec('0x8c')](_0x208c01, 0x2)) {
                                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x8d')], _0x1c13c3, _0x2a8499, _0x23a8e1, _0x44b77d[_0xe5ec('0x8e')](_0x49e016, _0x1b4e5a), _0x44b77d[_0xe5ec('0x8e')](_0x49e016, _0x4cec23), _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x4d479f), 0x1);
                                                    }
                                                    continue;
                                                case '1':
                                                    if (_0x44b77d[_0xe5ec('0x8c')](_0x208c01, 0x1)) {
                                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x90')], _0x1c13c3, _0x2a8499, _0x23a8e1, _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x1b4e5a), _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x4cec23), _0x44b77d[_0xe5ec('0x91')](_0x49e016, _0x4d479f), 0x1);
                                                    }
                                                    continue;
                                                case '2':
                                                    var _0x4cec23 = _0x44b77d[_0xe5ec('0x92')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '3':
                                                    var _0x1b4e5a = _0x44b77d[_0xe5ec('0x92')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '4':
                                                    var _0x4d479f = _0x44b77d[_0xe5ec('0x94')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '5':
                                                    var _0x49e016 = _0x44b77d[_0xe5ec('0x95')](_0x1857e0, Math[_0xe5ec('0x82')](_0x44b77d[_0xe5ec('0x96')](_0x44b77d[_0xe5ec('0x96')](_0x44b77d[_0xe5ec('0x97')](_0x1b4e5a, _0x1b4e5a), _0x44b77d[_0xe5ec('0x98')](_0x4cec23, _0x4cec23)), _0x44b77d[_0xe5ec('0x98')](_0x4d479f, _0x4d479f))));
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                        ;
                                    }
                                    ;
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1e)) {
                                        _0x3d73e5[_0xe5ec('0x99')](_0x313050, _0x3d73e5[_0xe5ec('0x8a')](getPlayerX), _0x3d73e5[_0xe5ec('0x9a')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x1, 0x32, 0.5);
                                        _0x3d73e5[_0xe5ec('0x99')](_0x313050, _0x3d73e5[_0xe5ec('0x8a')](getPlayerX), _0x3d73e5[_0xe5ec('0x9a')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x2, 0x64, 0.5);
                                    }
                                    ;
                                }
                                continue;
                            case '2':
                                if (_0x3d73e5[_0xe5ec('0x9b')](fun2[0x0], _0xe5ec('0x2b'))) {
                                    if (_0x3d73e5[_0xe5ec('0x9c')](det, 0x1)) {
                                        if (_0x3d73e5[_0xe5ec('0x33')](Entity[_0xe5ec('0x9d')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerEnt))[_0xe5ec('0x9e')](0x1), -1.2)) {
                                            if (_0x3d73e5[_0xe5ec('0x9f')](x, 0x0) && _0x3d73e5[_0xe5ec('0xa0')](y, 0x0) && _0x3d73e5[_0xe5ec('0xa0')](z, 0x0)) {
                                            } else {
                                                Entity[_0xe5ec('0xa1')](Player[_0xe5ec('0xa2')](), x, _0x3d73e5[_0xe5ec('0xa3')](y, 0.5), z);
                                            }
                                            ;
                                        } else {
                                            if (_0x3d73e5[_0xe5ec('0xa4')](Level[_0xe5ec('0xa5')](_0x3d73e5[_0xe5ec('0xa6')](Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xa7')](getPlayerEnt)), 0x1), _0x3d73e5[_0xe5ec('0xa6')](Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xa7')](getPlayerEnt)), 0x2), Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xa8')](getPlayerEnt))), 0x0)) {
                                                x = Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xa9')](getPlayerEnt));
                                                y = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xa9')](getPlayerEnt));
                                                z = Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xaa')](getPlayerEnt));
                                            }
                                            ;
                                        }
                                        ;
                                    } else if (_0x3d73e5[_0xe5ec('0xa0')](det, 0x2)) {
                                        var _0x513e28 = _0xe5ec('0xab')[_0xe5ec('0x4')]('\x7c'), _0x7b90a8 = 0x0;
                                        while (!![]) {
                                            switch (_0x513e28[_0x7b90a8++]) {
                                            case '0':
                                                y2 = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xaa')](getPlayerEnt));
                                                continue;
                                            case '1':
                                                ;
                                                continue;
                                            case '2':
                                                if (_0x3d73e5[_0xe5ec('0xac')](spy, -2.4)) {
                                                    if (_0x3d73e5[_0xe5ec('0xa4')](x, 0x0) && _0x3d73e5[_0xe5ec('0xad')](y, 0x0) && _0x3d73e5[_0xe5ec('0xae')](z, 0x0)) {
                                                        if (_0x3d73e5[_0xe5ec('0xac')](lev, 0x3)) {
                                                            lev += 0x1;
                                                            Entity[_0xe5ec('0xa1')](Player[_0xe5ec('0xa2')](), x, _0x3d73e5[_0xe5ec('0xaf')](y, 0.5), z);
                                                            Entity[_0xe5ec('0xb0')](_0x3d73e5[_0xe5ec('0xb1')](getPlayerEnt), _0x3d73e5[_0xe5ec('0xb2')](lev, 0.2));
                                                        }
                                                        ;
                                                    }
                                                    ;
                                                } else if (_0x3d73e5[_0xe5ec('0xa0')](spy, 0x0)) {
                                                    lev = 0x0;
                                                    x = Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xb3')](getPlayerEnt));
                                                    y = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xb4')](getPlayerEnt));
                                                    z = Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xb4')](getPlayerEnt));
                                                }
                                                continue;
                                            case '3':
                                                y1 = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xb5')](getPlayerEnt));
                                                continue;
                                            case '4':
                                                spy = _0x3d73e5[_0xe5ec('0xa6')](y1, y2);
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                    ;
                                } else {
                                    x = 0x0, y = 0x0, z = 0x0;
                                }
                                continue;
                            case '3':
                                ;
                                continue;
                            case '4':
                                ;
                                continue;
                            case '5':
                                if (_0x3d73e5[_0xe5ec('0xb6')](fun3[0x0], _0xe5ec('0x2b'))) {
                                    var _0x445df9 = Entity[_0xe5ec('0xb7')](Player[_0xe5ec('0xb8')]());
                                    var _0x57f94e = Entity[_0xe5ec('0xb9')](Player[_0xe5ec('0xb8')]());
                                    if (_0x3d73e5[_0xe5ec('0xb6')](_0x57f94e, 0x0)) {
                                        if (_0x3d73e5[_0xe5ec('0xba')](hpc1, null)) {
                                            hpc1[_0xe5ec('0xbb')]();
                                            hpc1 = null;
                                        }
                                        ;
                                    } else {
                                        if (_0x3d73e5[_0xe5ec('0xbc')](hpc1, null)) {
                                            hp3$[_0xe5ec('0xbd')](new android[_0xe5ec('0xbe')][_0xe5ec('0xbf')][_0xe5ec('0xc0')](_0x3d73e5[_0xe5ec('0xc1')](_0x3d73e5[_0xe5ec('0xc2')](_0x3d73e5[_0xe5ec('0xb5')](H), 0.49), _0x3d73e5[_0xe5ec('0xc3')](_0x57f94e, _0x445df9)), _0x3d73e5[_0xe5ec('0xc4')](_0x3d73e5[_0xe5ec('0xb5')](H), 0.04)));
                                        } else {
                                            _0x3d73e5[_0xe5ec('0xc5')](ShowHP);
                                        }
                                        ;
                                    }
                                    ;
                                } else {
                                    if (_0x3d73e5[_0xe5ec('0xc6')](hpc1, null)) {
                                        hpc1[_0xe5ec('0xbb')]();
                                        hpc1 = null;
                                    }
                                    ;
                                }
                                continue;
                            case '6':
                                ;
                                continue;
                            }
                            break;
                        }
                    }
                }));
            } catch (_0xfdf2e4) {
                _0x44b77d[_0xe5ec('0xc7')](print, _0x44b77d[_0xe5ec('0xc8')](_0xe5ec('0xc9'), _0xfdf2e4));
            }
            x1[_0xe5ec('0xca')](0x96);
        }
    }
}));
x1[_0xe5ec('0xcb')]();






//File Select
//Made By XFY9326
function File_Select(Default_Path)
{
var File=new java.io.File(Default_Path);
var File_Folder=File.getAbsolutePath().toString();
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
if(File.exists()&&File.isDirectory())
{
UI(File_Folder_List(File));
}
else
{
print("无法打开路径"+Default_Path);
}

function File_Folder_List(file)
{
var arr=new Array();
var list=file.listFiles();
if(list==null)
{
arr[0]="/...";
}
else
{
for(var i=0;i<list.length;i++)
{
arr[i]=list[i].getName().toString();
}
arr.sort();
arr.unshift("/...");
}
return arr;
}
function File_Folder_Selected(path)
{
var file=new java.io.File(path);
if(!file.exists())
{
print("路径不存在！"+path);
}
else if(file.isDirectory())
{
UI(File_Folder_List(file));
}
else if(file.isFile())
{
File_Selected(path);
}
}
function File_Selected(path)
{
load(ReadData(path));
TipMes("选择器由 XFY9326 提供");
}
function UI(data)
{
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
try
{
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("请选择文件");
dialog.setItems(data,new android.content.DialogInterface.OnClickListener(){onClick:
function(dialog,which)
{
if(which==0)
{
var pathtemp=File_Folder.split("/");
var result="";
for(var i=0;i<pathtemp.length;i++)
{
if(i!=pathtemp.length-1&&pathtemp[i]!=""&&pathtemp[i]!=" ")
{
result+="/"+pathtemp[i];
}
}
result+="/";
if(File_Folder=="/")
{
TipMes("已在根目录，无法返回");
}
else
{
dialog.cancel();
File_Folder=result;
File_Folder_Selected(File_Folder);
}
}
else
{
dialog.cancel();
File_Folder+="/"+data[which];
File_Folder_Selected(File_Folder);
}
}});
dialog.setNegativeButton("取消选择",null);
dialog.show();
}
catch(err)
{
print("无法打开选择器UI: "+err);
}
}}));
}
}


}}))
layout.addView(一键启动微端)


var 白熊加载器=new android.widget.Button(ctx)
白熊加载器.setText("白熊加载器")
白熊加载器.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

//2018-18-12

ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function H() {
var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
return metrics.heightPixels;
}

function W() {
var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
return metrics.widthPixels;
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
BC(e)
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

function CheckFiles(path){
  var ml=new java.io.File(path);
  if(!ml.exists()){
    return false;
  }else{
    return true;
};
};

function ReadData(path){
var file=new java.io.File(path);
if(file.isFile()){
var out=[];
var line="";
var ins=new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");
var buff=new java.io.BufferedReader(ins);
while((line=buff.readLine())!=null){
out.push(line);
};
ins.close();
return out.join("\n");
};
};

function InputData(path,data){
var foss=new java.io.FileOutputStream(path);
foss.write(java.lang.String(data).getBytes());
foss.close();
};


//圆角矩形背景   By:鄢主晴伊  已授权QwQ
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

//视图动画，原作者 鄢主晴伊，已授权，保留原有形式
/*#移动*/function UIMove(view,x1,x2,y1,y2,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.TranslateAnimation(tp,x1*0.01,tp,x2*0.01,tp,y1*0.01,tp,y2*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*#旋转*/function UIRotate(view,A,B,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.RotateAnimation(A,B,tp,x*0.01,tp,y*0.01);dh.setDuration(time);dh.setFillAfter(true);if(view!=null)view.startAnimation(dh);return dh;}
/*#收缩*/function UIShrink(view,x1,x2,y1,y2,x,y,time,type){var anim=android.view.animation;var tp=((type==null||type==0)?anim.Animation.RELATIVE_TO_SELF:type==1?anim.Animation.RELATIVE_TO_PARENT:anim.Animation.ABSOLUTE);var dh=new anim.ScaleAnimation(x1*0.01,x2*0.01,y1*0.01,y2*0.01,tp,x*0.01,tp,y*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*淡入*/function UIFadein(view,A,B,time){var dh=new android.view.animation.AlphaAnimation(A*0.01,B*0.01);dh.setDuration(time);if(view!=null)view.startAnimation(dh);return dh;}
/*缩放*/function UIZoom(view,In,out,time,type){return UIShrink(view,In,out,In,out,50,50,time,type);}
/*水平*/function UILevel(view,In,out,time,type){return UIMove(view,In,out,0,0,time,type);}
/*垂直*/function UIPlumb(view,In,out,time,type){return UIMove(view,0,0,In,out,time,type);}









var vxSt=false;
var vxTime=0;
var vxSj=5+Math.floor(Math.random()*5)

var loin=false;
var canuse=true;

function UIm0(){
vxSt=true;
loin=true;
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{

vx1=NewView("LL",W()*0.5,H()*0.50,"CC",1,2,null,null,null);
vx2=NewView("LL",W()*0.5,H()*0.50,"CC",1,1,"#ffccffe5",30,null);
vx3=NewView("LL",W()*0.5,H()*0.38,"CC",1,2,null,null,null);
vx4=NewView("LL",W()*0.5,H()*0.02,"CC",0,2,null,null,null);
vx4a=NewView("LL",W()*0.25,H()*0.02,"CC",0,2,null,null,null);
vx4b=NewView("LL",W()*0.25,H()*0.02,"CC",0,2,null,null,null);
vx4sa=NewView("LL",W()*0.25,H()*0.02,"CC",0,0,"#FFFFFF",null,null);
vx4sb=NewView("LL",W()*0.25,H()*0.02,"CC",0,0,"#FFFFFF",null,null);
vx5=NewView("LL",W()*0.5,H()*0.1,"CC",1,2,null,null,null);

vt1=NewText("白熊加载器","CC",30);
vt2=NewText("初始化中..可能会卡住 ;)","CC");


vx1.addView(vx2);
vx2.addView(vx3);
vx3.addView(vt1);
vx2.addView(vx4);
vx4.addView(vx4a);
vx4.addView(vx4b);
vx4a.addView(vx4sa);
vx4b.addView(vx4sb);
vx2.addView(vx5);
vx5.addView(vt2);


CDV1=NewCDV(2,null,null,vx1,-1,-1,false,true,"CC",0,0);
UIFadein(vx1,0,100,1000);

}catch(err){print(err)}
}}));
};

var MrPath="sdcard/tencent/白熊辅助文件夹/白熊加载器";

var xc1=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(vxSt==true){
vxTime++;
if(vxTime==2){
try{
if(CheckFiles(MrPath)==false){
new java.io.File(MrPath).mkdirs();
};
if(CheckFiles(MrPath+"白熊加载器")==false){
new java.io.File(MrPath+"白熊加载器").mkdirs();
};
if(CheckFiles(MrPath+"白熊加载器/data")==true){
new java.io.File(MrPath+"白熊加载器/data").delete();
crash();
};
}catch(e){print(e)};
};
if(vxTime==3){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
P1=new java.io.File("sdcard/tencent/白熊辅助文件夹/白熊加载器").listFiles();
for(a=0;a<P1.length;a++){
if(a<=20){
P2=P1[a].getName();
ReadData(P1[a]);
};
};
}}),350+Math.floor(Math.random()*50))}catch(err){print(err)}}}));
};
if(vxTime>=0 && vxTime<=vxSj){
UILevel(vx4sa,100,-300,1000);
UILevel(vx4sb,-100,300,1000);
};
if(vxTime==vxSj){
UIFadein(vx2,100,0,1000);
UILevel(vx1,0,-100,1000);
};
if(vxTime==vxSj+1){
CDV1.dismiss();
UIm1();
};
};
}catch(e){print("XC ERR:"+e)};
}}));
xc1.sleep(1000)
}
}}))
xc1.start()




function UIm1(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
vm1=NewView("LL",W()*0.3,H(),"CC",1,2,null,null,null);
vm2=NewView("LL",W()*0.3,H(),"CT",1,0,"#ffccffe5",null,null);
vm3=NewView("LL",W()*0.3,H()*0.1,"CC",1,0,"#ffa5ffcf",null,
function(v){
CDV2.dismiss();
}
);
vm4=NewView("LL",W()*0.3,H()*0.02,"CC",1,0,"#ffccffe5",null,null);
vm5=NewView("LL",W()*0.25,H()*0.1,"CC",1,1,"#FFFFFF",30,
function(v){
UIm2();
}
);

vs1=NewText("  白熊加载器","LC");
vs2=NewText("导入脚本","CC");
vs3=NewText("已加载的脚本会在下方显示","CC");

vm1.addView(vm2);
vm2.addView(vm3);
vm3.addView(vs1);
vm2.addView(vm4);
vm2.addView(vm5);
vm5.addView(vs2);
vm2.addView(vs3);
if(lmv.v1!=false){
vm2.addView(lomod(1,lmt.t1));
};
if(lmv.v2!=false){
vm2.addView(lomod(2,lmt.t2));
};
if(lmv.v3!=false){
vm2.addView(lomod(3,lmt.t3));
};
if(lmv.v4!=false){
vm2.addView(lomod(4,lmt.t4));
};
if(lmv.v5!=false){
vm2.addView(lomod(5,lmt.t5));
};


CDV2=NewCDV(2,null,null,vm1,W()*0.3,-1,false,true,"RC",0,0);
UILevel(vm1,100,0,500);

}catch(err){print(err)}
}}));
};

function lomod(number,name){
lov1=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,0,null);
lov2=NewView("LL",W()*0.3,H()*0.05,"CC",1,2,null,null,null);
lov3=NewView("LL",W()*0.25,H()*0.05,"CC",1,1,"#FFFFFF",30,null);

lot1=NewText("  "+number+"-"+name,"LC",10);

lov1.addView(lov2);
lov1.addView(lov3);
lov3.addView(lot1);
return lov1;
};




function UIm2(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
UILevel(vm1,0,100,500);
load("提取数据中");

ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
CDV2.dismiss();


vc1=NewView("LL",W()*0.3,H(),"CC",1,2,null,null,null);
vc2=NewView("LL",W()*0.3,H(),"CT",1,0,"#ffccffe5",null,null);
vc3=NewView("LL",W()*0.3,H()*0.1,"CC",1,0,"#ffa5ffcf",null,
function(v){
CDV3.dismiss();
}
);
vc4=NewView("LL",W()*0.3,H()*0.02,"CC",1,0,"#ffccffe5",null,null);
vc5=NewView("LL",W()*0.3,H()*0.1,"CC",1,0,"#FFFFFF",0,
function(v){
va2.setText("点击项目就能加载...");
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
va2.setText("文件管理>tencent>白熊辅助文件夹>白熊加载器");
}}),2000)}catch(err){print(err)}}}));
}
);
vc6=NewView("SV",W()*0.3,H()*0.78,null,null,2,null,null,null);
vc6s=NewView("LL",W()*0.3,H()*0.78,"CC",1,2,null,null,null)

va1=NewText("  白熊加载器","LC");
va2=NewText("文件管理>盒子Mod目录","CC");

vc1.addView(vc2);
vc2.addView(vc3);
vc3.addView(va1);
vc2.addView(vc4);
vc2.addView(vc5);
vc5.addView(va2);
vc2.addView(vc6);
vc6.addView(vc6s);

P1=new java.io.File("sdcard/tencent/白熊辅助文件夹/白熊加载器").listFiles();
for(a=0;a<P1.length;a++){
P2=P1[a].getName();
ReadData(P1[a]);
vc6s.addView(lofile(a,P2));
};

CDV3=NewCDV(2,null,null,vc1,W()*0.3,-1,false,true,"RC",0,0);
UILevel(vc1,100,0,500);

}}),500)}catch(err){print(err)}}}));

}catch(err){print(err)}
}}));
};



function lofile(a,name){
lof1=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,0,null);
lof2=NewView("LL",W()*0.3,H()*0.005,"CC",1,0,"#FFFFFF",null,null);
lof3=NewView("LL",W()*0.3,H()*0.095,"CC",1,2,null,null,null);
lof3.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){try{
runjs(a);
}catch(e){
print(e)
};
}}));

lok1=NewText("  "+name,"LC");

lof1.addView(lof2);
lof1.addView(lof3);
lof3.addView(lok1);
return lof1;
};



var lmv={
v1:false,
v2:false,
v3:false,
v4:false,
v5:false,
};
var lmt={
t1:"undefined",
t2:"undefined",
t3:"undefined",
t4:"undefined",
t5:"undefined",
};


function runjs(data){
if(canuse==true){
if(lmv.v5!=true){
UILevel(vc1,0,100,500);
load("白熊为你导入中");
};
};
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
if(canuse==true){
if(lmv.v5!=true){
CDV3.dismiss();
};
};
if(canuse==true){
try{
if(lmv.v1!=true){
sj=ReadData(P1[data]);
eval(sj);
lmv.v1=true;
lmt.t1=P1[data].getName();
UIm1();
}else if(lmv.v2!=true){
sj=ReadData(P1[data]);
eval(sj);
lmv.v2=true;
lmt.t2=P1[data].getName();
UIm1();
}else if(lmv.v3!=true){
sj=ReadData(P1[data]);
eval(sj);
lmv.v3=true;
lmt.t3=P1[data].getName();
UIm1();
}else if(lmv.v4!=true){
sj=ReadData(P1[data]);
eval(sj);
lmv.v4=true;
lmt.t4=P1[data].getName();
UIm1();
}else if(lmv.v5!=true){
eval(sj);
sj=ReadData(P1[data]);
lmv.v5=true;
lmt.t5=P1[data].getName();
UIm1();
} else {
va2.setText("欢迎使用白熊辅助");
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
va2.setText("感谢支持哦!!!");
}}),2000)}catch(err){print(err);}}}));
};
}catch(e){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
load("很抱歉，导入失败！",1);
}}),2000) }}));
};
}else if(canuse==false){
va2.setText("进入存档后不能导入Mod");
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
va2.setText("点击顶端标题可关闭");
}}),2000)}catch(err){print(err);}}}));
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
va2.setText("文件管理>tencent>白熊辅助文件夹>白熊加载器");
}}),3000)}catch(err){print(err);}}}));
};

}}),500)}catch(err){print(err);
}}}));
};


ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
vw1=NewView("LL",H()*0.2,H()*0.1,"CC",1,2,null,null,
function(v){
if(loin==false){
UIm0();
}else{
UIm1();
};
}
);
vw2=NewView("LL",H()*0.2,H()*0.1,"CC",0,1,"#32c4c4c4",40,null);
vw3=NewView("LL",H()*0.05,H()*0.1,"CC",0,2,null,null,null);
vw4=NewView("LL",H()*0.1,H()*0.1,"CC",0,2,null,null,null);
vw5=NewView("LL",H()*0.05,H()*0.1,"CC",0,2,null,null,null);

vv1=NewText(">","RC");
vv2=NewText("白熊","CC");
vv3=NewText("<","LC");

vw1.addView(vw2);
vw2.addView(vw3);
vw2.addView(vw4);
vw2.addView(vw5);
vw3.addView(vv1);
vw4.addView(vv2);
vw5.addView(vv3);

CDVM=NewCDV(2,null,null,vw1,H()*0.2,H()*0.1,false,true,"RC",100,0,null);
}catch(err){print(err)}
}}));



var xc2=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
UILevel(vw3,-100,0,500);
UILevel(vw5,100,0,500);

ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
UILevel(vw3,0,-1000,2000);
UILevel(vw5,0,1000,2000);
}}),500)}catch(err){print(err)}}}));

}catch(e){print("XC ERR:"+e)};
}}));
xc2.sleep(2000);
}
}}))
xc2.start()



var DT=-1;
var CDVL;

function load(text,mode){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(CDVL!=null){
CDVL.dismiss();
};
vl1=NewView("LL",H()*0.5,H()*0.1,"CC",0,2,null,null,null);
if(mode==null){
vl2=NewView("LL",H()*0.5,H()*0.1,"CC",0,1,"#ff00f1b1",20,null);
vl3=NewView("LL",H()*0.48,H()*0.08,"CC",0,1,"#ff00ffbf",20,null);
}else if(mode==1){
vl2=NewView("LL",H()*0.5,H()*0.1,"CC",0,1,"#ffff6464",20,null);
vl3=NewView("LL",H()*0.48,H()*0.08,"CC",0,1,"#ffff8282",20,null);
};
vl4=NewView("LL",H()*0.2,H()*0.08,"CC",0,2,null,null,null);
vl5=NewView("LL",H()*0.28,H()*0.08,"CC",0,2,null,null,null);
if(mode==null){
vl6=NewView("LL",H()*0.25,H()*0.06,"CC",0,0,"#FFFFFF",null,null);
}else if(mode==1){
vl6=NewView("LL",H()*0.25,H()*0.06,"CC",0,0,"#ffffffc7",null,null);
};

vi1=NewText(text,"CC");

vl1.addView(vl2);
vl2.addView(vl3);
vl3.addView(vl4);
vl3.addView(vl5);
vl4.addView(vi1);
vl5.addView(vl6);

CDVL=NewCDV(2,null,null,vl1,H()*0.5,H()*0.1,false,true,"CT",0,H()*0.25,null);

if(mode==null){
DT=0;
}else if(mode==1){
DT=100;
};
UIFadein(vl1,0,100,500);
}catch(err){print(err)}
}}));
};


var xc3=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
if(DT>=0&&DT<=11){
DT+=1;
if(DT<=10){
UILevel(vl6,-100,300,250);
};
if(DT==8){
UIFadein(vl1,100,0,500);
};
if(DT==10){
CDVL.dismiss();
};
if(DT>=11){
DT=-1;
};
};
if(DT>=100&&DT<=111){
DT+=1;
if(DT==101||DT==105||DT==109){
UILevel(vl6,100,-300,1000);
};
if(DT==108){
UIFadein(vl1,100,0,500);
};
if(DT==110){
CDVL.dismiss();
};
if(DT>=111){
DT=-1;
};
};
}catch(e){print("XC ERR:"+e)};
}}));
xc3.sleep(250);
}
}}))
xc3.start()




function crash(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
vc1=NewView("LL",H()*0.8,H()*0.1,"CC",0,2,null,null,null);
vc2=NewView("LL",H()*0.8,H()*0.1,"CC",0,1,"#ff00f1b1",20,null);
vc3=NewView("LL",H()*0.78,H()*0.08,"CC",0,1,"#ff00ffbf",20,null);

vb1=NewText("检测到游戏崩溃或非正常退出！","CC");

vc1.addView(vc2);
vc2.addView(vc3);
vc3.addView(vb1);

CDVC=NewCDV(2,null,null,vc1,H()*0.8,H()*0.1,false,true,"CT",0,H()*0.25,null);

UIFadein(vc1,0,100,500);
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
UIFadein(vc1,100,0,500);
}}),8000)}catch(err){print(err)}}}));
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
CDVC.dismiss();
}}),8500)}catch(err){print(err)}}}));
}catch(err){print(err)}
}}));
};



function newLevel(){
try{
canuse=false;
new java.io.File(MrPath+"白熊加载器/data").createNewFile();
InputData(MrPath+"白熊加载器/data",Math.floor(Math.random()*10000));
}catch(e){print(e)};
};

function leaveGame(){
try{
canuse=true;
new java.io.File(MrPath+"白熊加载器/data").delete();
}catch(e){print(e)};
};

}}))
layout.addView(白熊加载器)

var 白熊辅助番外=new android.widget.Button(ctx)
白熊辅助番外.setText("[荐]白熊辅助番外")
白熊辅助番外.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

/*
此脚本为白熊辅助的番外篇
*/
function 创建存档(路径,存档){var iO= new java.io.PrintWriter( new java.io.BufferedWriter( new java.io.FileWriter(路径,false)));iO.write(存档);iO.close();};
  function 读取数据(路径){var file=new java.io.File(路径);if(file.isFile()){var out=[];var line="";var ins=new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");var buff=new java.io.BufferedReader(ins);while((line=buff.readLine())!=null){out.push(line);};ins.close();return out.join("\n");}};
var 防摔伤掉落虚空=false
function 萊墀螓憐(){


   /*飞行begin */
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx);
button.setText("白熊");
  button.setTextSize(12);
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
  Player.setFlying(true);
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(100);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,500);
}}));
/*飞行end */
var ad=android.app.AlertDialog.Builder
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
var d=new ad(ctx)
d.setNegativeButton("关闭",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
  
}})
d.setTitle("[荐]欢迎使用白熊辅助番外篇")
d.setMessage("欢迎使用白星辅助番外篇\n功能介绍：\n1.白熊按钮为飞行，请跳跃时同时点击\n2.添加脚本功能，请下载到腾讯文件夹内\n3.传送功能\n4.虚空防掉落功能(可能会闪退）\n5.js代码执行功能\n6.调节生存创造功能\n7.无限添加药水\n注意:打开后无法关闭\n白熊，祝你玩的开心");
d.show()
}catch(e){print(e)}
// TODO: Active Debugger
debugger;
}})) 
/*执行js代码*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 执行js代码 = new java.lang.Runnable({run:function(){try{
  var 宽 = ctx.getScreenWidth();
  var 高 = ctx.getScreenHeight()
var $1=new android.widget.LinearLayout(ctx);
$1.setOrientation(1);
$1.setGravity(17);
var $2=new android.widget.LinearLayout(ctx);
var $2_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$2.setLayoutParams($2_params);
var $3=new android.widget.TextView(ctx);
$3.setText("请输入js代码内容");
var $3_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$3.setLayoutParams($3_params);
$2.addView($3);
$1.addView($2);
var $4=new android.widget.LinearLayout(ctx);
var $4_params=new android.widget.LinearLayout.LayoutParams(宽*0.3,高*0.7);
$4.setLayoutParams($4_params);
var $5=new android.widget.EditText(ctx);
$5.setHint("js代码......");
var $5_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$5.setLayoutParams($5_params);
$4.addView($5);
$1.addView($4);
var $6=new android.widget.LinearLayout(ctx);
var $6_params=new android.widget.LinearLayout.LayoutParams(宽*0.3,120);
$6.setLayoutParams($6_params);
var $7=new android.widget.Button(ctx);
$7.setText("执行");
$7.setTextSize(12);
   $7.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 var 代码 = String($5.getText());
     try{eval(代码)}catch(e){print(e)}
   
   }}));    
    $7.setBackgroundColor(android.graphics.Color.argb(0,0,0,0));
 $7.setTextColor(android.graphics.Color.rgb(250,0,0));

var $7_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$7.setLayoutParams($7_params);
$6.addView($7);
$1.addView($6);
var $=new android.widget.PopupWindow(ctx);
$.setFocusable(true);
$.setContentView($1);
$.setWidth(宽*0.3);
  $.setHeight(高);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255,8,180,255)))
$.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT  | android.view.Gravity.TOP,0,0);
}catch(e){print(e)}}});
/*执行js代码*/

/*瞬移begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var mz1,mz2,mz3,mz4,mz5,mz6,mz7,mz8,mz9,mz10,mz11,mz12,mz13,mz14,mz15,mz16
var gb = false
var $=new android.widget.PopupWindow(ctx);
var gui = new java.lang.Runnable({run:function(){try{
 $.setFocusable(false);
  人数 = Server.getAllPlayers();
  mz1 = Entity.getNameTag(人数[1])
  mz2 = Entity.getNameTag(人数[2])
  mz3 = Entity.getNameTag(人数[3])
  mz4 = Entity.getNameTag(人数[4])
  mz5 = Entity.getNameTag(人数[5])
  mz6 = Entity.getNameTag(人数[6])
  mz7 = Entity.getNameTag(人数[7])
  mz8 = Entity.getNameTag(人数[8])
  mz9 = Entity.getNameTag(人数[9])
  mz10 = Entity.getNameTag(人数[10])
  mz11 = Entity.getNameTag(人数[11])
  mz12 = Entity.getNameTag(人数[12])
  mz13 = Entity.getNameTag(人数[13])
  mz14 = Entity.getNameTag(人数[14])
  mz15 = Entity.getNameTag(人数[15])
  mz16 = Entity.getNameTag(人数[16])
var $1=new android.widget.LinearLayout(ctx);
$1.setGravity(17);
var $2=new android.widget.ScrollView(ctx);
var $2_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$2.setLayoutParams($2_params);
var $3=new android.widget.LinearLayout(ctx);
$3.setOrientation(0);
var $3_params=new android.widget.FrameLayout.LayoutParams(-1,-2);
$3.setLayoutParams($3_params);
var $4=new android.widget.LinearLayout(ctx);
var $4_params=new android.widget.LinearLayout.LayoutParams(200,130);
$4_params.setMargins(0,0,0,0);
$4.setLayoutParams($4_params);
var $5=new android.widget.Button(ctx);
$5.setTextSize(12);
$5.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[1]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[1]),Entity.getY(人数[1]),Entity.getZ(人数[1]));
      } 
}}));
var $5_params=new android.widget.LinearLayout.LayoutParams(-1,130);
$5.setLayoutParams($5_params);
$4.addView($5);
$3.addView($4);
var $6=new android.widget.LinearLayout(ctx);
var $6_params=new android.widget.LinearLayout.LayoutParams(200,130);
$6.setLayoutParams($6_params);
var $7=new android.widget.Button(ctx);
$7.setTextSize(12);
$7.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[2]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[2]),Entity.getY(人数[2]),Entity.getZ(人数[2]));
      } 
}}));
var $7_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$7.setLayoutParams($7_params);
$6.addView($7);
$3.addView($6);
var $8=new android.widget.LinearLayout(ctx);
var $8_params=new android.widget.LinearLayout.LayoutParams(200,130);
$8.setLayoutParams($8_params);
var $9=new android.widget.Button(ctx);
$9.setTextSize(12);
$9.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[3]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[3]),Entity.getY(人数[3]),Entity.getZ(人数[3]));
      } 
}}));
var $9_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$9.setLayoutParams($9_params);
$8.addView($9);
$3.addView($8);
var $10=new android.widget.LinearLayout(ctx);
var $10_params=new android.widget.LinearLayout.LayoutParams(200,130);
$10.setLayoutParams($10_params);
var $11=new android.widget.Button(ctx);
$11.setTextSize(12);
$11.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[4]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[4]),Entity.getY(人数[4]),Entity.getZ(人数[4]));
      } 
}}));
var $11_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$11.setLayoutParams($11_params);
$10.addView($11);
$3.addView($10);
var $12=new android.widget.LinearLayout(ctx);
var $12_params=new android.widget.LinearLayout.LayoutParams(200,130);
$12_params.setMargins(-800,180,0,0);
$12.setLayoutParams($12_params);
var $13=new android.widget.Button(ctx);
$13.setTextSize(12);
$13.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[5]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[5]),Entity.getY(人数[2]),Entity.getZ(人数[5]));
      } 
}}));
var $13_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$13.setLayoutParams($13_params);
$12.addView($13);
$3.addView($12);
var $14=new android.widget.LinearLayout(ctx);
var $14_params=new android.widget.LinearLayout.LayoutParams(200,130);
$14_params.setMargins(0,180,0,0);
$14.setLayoutParams($14_params);
var $15=new android.widget.Button(ctx);
$15.setTextSize(12);
$15.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[6]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[6]),Entity.getY(人数[6]),Entity.getZ(人数[6]));
      } 
}}));
var $15_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$15.setLayoutParams($15_params);
$14.addView($15);
$3.addView($14);
var $16=new android.widget.LinearLayout(ctx);
var $16_params=new android.widget.LinearLayout.LayoutParams(200,130);
$16_params.setMargins(0,180,0,0);
$16.setLayoutParams($16_params);
var $17=new android.widget.Button(ctx);
$17.setTextSize(12);
$17.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[7]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[7]),Entity.getY(人数[7]),Entity.getZ(人数[7]));
      } 
}}));
var $17_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$17.setLayoutParams($17_params);
$16.addView($17);
$3.addView($16);
var $18=new android.widget.LinearLayout(ctx);
var $18_params=new android.widget.LinearLayout.LayoutParams(200,130);
$18_params.setMargins(0,180,0,0);
$18.setLayoutParams($18_params);
var $19=new android.widget.Button(ctx);
$19.setTextSize(12);
$19.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[8]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[8]),Entity.getY(人数[8]),Entity.getZ(人数[8]));
      } 
}}));
var $19_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$19.setLayoutParams($19_params);
$18.addView($19);
$3.addView($18);
var $20=new android.widget.LinearLayout(ctx);
var $20_params=new android.widget.LinearLayout.LayoutParams(200,130);
$20_params.setMargins(-800,360,0,0);
$20.setLayoutParams($20_params);
var $21=new android.widget.Button(ctx);
$21.setTextSize(12);
$21.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[9]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[9]),Entity.getY(人数[9]),Entity.getZ(人数[9]));
      } 
}}));
var $21_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$21.setLayoutParams($21_params);
$20.addView($21);
$3.addView($20);
var $22=new android.widget.LinearLayout(ctx);
var $22_params=new android.widget.LinearLayout.LayoutParams(200,130);
$22_params.setMargins(0,360,0,0);
$22.setLayoutParams($22_params);
var $23=new android.widget.Button(ctx);
$23.setTextSize(12);
$23.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[10]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[10]),Entity.getY(人数[10]),Entity.getZ(人数[10]));
      } 
}}));
var $23_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$23.setLayoutParams($23_params);
$22.addView($23);
$3.addView($22);
var $24=new android.widget.LinearLayout(ctx);
var $24_params=new android.widget.LinearLayout.LayoutParams(200,130);
$24_params.setMargins(0,360,0,0);
$24.setLayoutParams($24_params);
var $25=new android.widget.Button(ctx);
$25.setTextSize(12);
$25.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[11]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[11]),Entity.getY(人数[11]),Entity.getZ(人数[11]));
      } 
}}));
var $25_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$25.setLayoutParams($25_params);
$24.addView($25);
$3.addView($24);
var $26=new android.widget.LinearLayout(ctx);
var $26_params=new android.widget.LinearLayout.LayoutParams(200,130);
$26_params.setMargins(0,360,0,0);
$26.setLayoutParams($26_params);
var $27=new android.widget.Button(ctx);
$27.setTextSize(12);
$27.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[12]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[12]),Entity.getY(人数[12]),Entity.getZ(人数[12]));
      } 
}}));
var $27_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$27.setLayoutParams($27_params);
$26.addView($27);
$3.addView($26);
var $28=new android.widget.LinearLayout(ctx);
var $28_params=new android.widget.LinearLayout.LayoutParams(200,130);
$28_params.setMargins(-800,540,0,0);
$28.setLayoutParams($28_params);
var $29=new android.widget.Button(ctx);
$29.setTextSize(12);
$29.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[13]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[13]),Entity.getY(人数[13]),Entity.getZ(人数[13]));
      } 
}}));
var $29_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$29.setLayoutParams($29_params);
$28.addView($29);
$3.addView($28);
var $30=new android.widget.LinearLayout(ctx);
var $30_params=new android.widget.LinearLayout.LayoutParams(200,130);
$30_params.setMargins(0,540,0,0);
$30.setLayoutParams($30_params);
var $31=new android.widget.Button(ctx);
$31.setTextSize(12);
$31.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[14]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[14]),Entity.getY(人数[14]),Entity.getZ(人数[14]));
      } 
}}));
var $31_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$31.setLayoutParams($31_params);
$30.addView($31);
$3.addView($30);
var $32=new android.widget.LinearLayout(ctx);
var $32_params=new android.widget.LinearLayout.LayoutParams(200,130);
$32_params.setMargins(0,540,0,0);
$32.setLayoutParams($32_params);
var $33=new android.widget.Button(ctx);
$33.setTextSize(12);
$33.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[15]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[15]),Entity.getY(人数[15]),Entity.getZ(人数[15]));
      } 
}}));
var $33_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$33.setLayoutParams($33_params);
$32.addView($33);
$3.addView($32);
var $34=new android.widget.LinearLayout(ctx);
var $34_params=new android.widget.LinearLayout.LayoutParams(200,130);
$34_params.setMargins(0,540,0,0);
$34.setLayoutParams($34_params);
var $35=new android.widget.Button(ctx);
$35.setTextSize(12);
$35.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(人数[16]!=undefined){
      setPosition(Player.getEntity(),Entity.getX(人数[16]),Entity.getY(人数[16]),Entity.getZ(人数[16]));
      } 
}}));
  
if(人数[1]!=undefined){
$5.setText(mz1);
}else{$5.setText("-")};
if(人数[2]!=undefined){
$7.setText(mz2);
}else{$7.setText("-")};
if(人数[3]!=undefined){
$9.setText(mz3);
}else{$9.setText("-")};
if(人数[4]!=undefined){
$11.setText(mz4);
}else{$11.setText("-")};
if(人数[5]!=undefined){
$13.setText(mz5);
}else{$13.setText("-")};
if(人数[6]!=undefined){
$15.setText(mz6);
}else{$15.setText("-")};
if(人数[7]!=undefined){
$17.setText(mz7);
}else{$17.setText("-")};
if(人数[8]!=undefined){
$19.setText(mz8);
}else{$19.setText("-")};
if(人数[9]!=undefined){
$21.setText(mz9);
}else{$21.setText("-")};
if(人数[10]!=undefined){
$13.setText(mz10);
}else{$23.setText("-")};
if(人数[11]!=undefined){
$25.setText(mz11);
}else{$25.setText("-")};
if(人数[12]!=undefined){
$27.setText(mz12);
}else{$27.setText("-")};
if(人数[13]!=undefined){
$29.setText(mz13);
}else{$29.setText("-")};
if(人数[14]!=undefined){
$31.setText(mz14);
}else{$31.setText("-")};
if(人数[15]!=undefined){
$33.setText(mz15);
}else{$33.setText("-")};
if(人数[16]!=undefined){
$35.setText(mz16);
}else{$35.setText("-")};
  
var $35_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$35.setLayoutParams($35_params);
$34.addView($35);
$3.addView($34);
var $36=new android.widget.LinearLayout(ctx);
var $36_params=new android.widget.LinearLayout.LayoutParams(200,130);
$36_params.setMargins(0,0,0,0);
$36.setLayoutParams($36_params);
var $37=new android.widget.Button(ctx);
$37.setText("关闭");
var $37_params=new android.widget.LinearLayout.LayoutParams(-1,-1);
$37.setLayoutParams($37_params);
  $37.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
$.dismiss();
  $.setFocusable(true);
  }}));
  
  $36.addView($37);
$3.addView($36);
$2.addView($3);
$1.addView($2);
  
  function b(q){
  q.setBackgroundColor(android.graphics.Color.argb(0,0,0,0));
 q.setTextColor(android.graphics.Color.rgb(250,0,0));
  }
  b($5);b($7);b($9);b($11);b($13);b($15);b($17);b($19);b($21);b($23);b($25);b($27);b($29);b($31);b($33);b($35); b($37); 
  $=new android.widget.PopupWindow(ctx);
$.setFocusable(false);
$.setContentView($1);
$.setWidth(1000);
$.setHeight(350);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(1979711488));
  $.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
}catch(e){print(e)}}});
/*瞬移end*/

/*启动脚本begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 脚本=new java.lang.Runnable({run:function(){try{
  var 宽 = ctx.getScreenWidth();
  var 高 = ctx.getScreenHeight();
  var $=new android.widget.PopupWindow(ctx);
var $1=new android.widget.LinearLayout(ctx);
$1.setOrientation(1);
$1.setGravity(17);
var $2=new android.widget.TextView(ctx);
$2.setText("执行脚本");
var $2_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$2.setLayoutParams($2_params);
$1.addView($2);
var $3=new android.widget.EditText(ctx);
$3.setTextSize(15);
$3.setHint("输入需要导入的脚本名称不需要输入“.js”");

var 文件名 = []
var P1=new java.io.File("storage/emulated/0/tencent/QQfile_recv/").listFiles();
for(a=0;a<P1.length;a++){
 var P2=String(P1[a].getName());
  var re = /js/g;
  var str = re.test(P2);
  if(str){
  文件名.push(P2)
    }
};
var all = "可调用的脚本名称(请删除多余的内容只留下需要调用的脚本名，不需要加“.js”)：\n"+文件名.join("\n");

$3.setText(all)
var $3_params=new android.widget.LinearLayout.LayoutParams(宽*0.3,高*0.4);
$3.setLayoutParams($3_params);
$1.addView($3);
var $4=new android.widget.Button(ctx);
$4.setText("导入执行/关闭");
$4.setTextSize(10);
   $4.setBackgroundColor(android.graphics.Color.argb(0,0,0,0));
 $4.setTextColor(android.graphics.Color.rgb(250,0,0));
 $4.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 try{
   var 文件名 = String($3.getText())
   var 路径all = "storage/emulated/0/tencent/QQfile_recv/"+文件名+".js"
   function 读取数据(路径){
  var file=new java.io.File(路径);
   if(file.isFile()){
   var out=[];
   var line="";
   var ins=new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");
   var buff=new java.io.BufferedReader(ins);
   while((line=buff.readLine())!=null){
   out.push(line);
   };
   ins.close();
   return out.join("\n");
   }
   };
   var f=new java.io.File(路径all);
   eval(读取数据(路径all))
   if(!f.exists()){
    print("文件不存在");
  }else{
   print("以启动"+文件名+".js");
   $.dismiss()
   }
   }catch(e){
   print(e)
   }
}})); 
var $4_params=new android.widget.LinearLayout.LayoutParams(500,100);
$4.setLayoutParams($4_params);
$1.addView($4);
$.setFocusable(true);
$.setContentView($1);
$.setWidth(宽*0.3);
$.setHeight(高);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255,36,86,255)))
$.showAtLocation(ctx.getWindow().getDecorView(),0,0,0);
}catch(e){print(e)}}});
/*启动脚本end*/
/*控制面板begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 控制面板 = new java.lang.Runnable({run:function(){try{
var 宽 = ctx.getScreenWidth();
  var 高 = ctx.getScreenHeight();
var $1=new android.widget.LinearLayout(ctx);
$1.setGravity(17);
var $2=new android.widget.ScrollView(ctx);
var $2_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$2.setLayoutParams($2_params);

var $3=new android.widget.LinearLayout(ctx);
$3.setOrientation(1);
var $3_params=new android.widget.FrameLayout.LayoutParams(-2,-2);
$3.setLayoutParams($3_params);

var $5=new android.widget.Button(ctx);
$5.setText("瞬移");
$5.setTextSize(12);
var $5_params=new android.widget.LinearLayout.LayoutParams(220,140);
$5.setLayoutParams($5_params);
$3.addView($5);

var $6=new android.widget.Button(ctx);
$6.setText("满血");
$6.setTextSize(12);
var $6_params=new android.widget.LinearLayout.LayoutParams(220,140);
$6.setLayoutParams($6_params);
$3.addView($6);

var $7=new android.widget.Button(ctx);
$7.setText("防摔伤掉落虚空：关闭");
$7.setTextSize(12);
var $7_params=new android.widget.LinearLayout.LayoutParams(220,140);
$7.setLayoutParams($7_params);
$3.addView($7);

var $8=new android.widget.Button(ctx);
$8.setText("改创造");
$8.setTextSize(12);
var $8_params=new android.widget.LinearLayout.LayoutParams(220,140);
$8.setLayoutParams($8_params);
$3.addView($8);

var $9=new android.widget.Button(ctx);
$9.setText("改生存");
$9.setTextSize(12);
var $9_params=new android.widget.LinearLayout.LayoutParams(220,140);
$9.setLayoutParams($9_params);
$3.addView($9);
  
var $10=new android.widget.Button(ctx);
$10.setText("启动脚本");
$10.setTextSize(12);
var $10_params=new android.widget.LinearLayout.LayoutParams(220,140);
$10.setLayoutParams($10_params);
$3.addView($10);

var $11=new android.widget.Button(ctx);
$11.setText("执行自定义js代码");
$11.setTextSize(12);
var $11_params=new android.widget.LinearLayout.LayoutParams(220,140);
$11.setLayoutParams($11_params);
$3.addView($11);
  
$2.addView($3);
$1.addView($2);
 

  $5.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
ctx.runOnUiThread(gui)
}}));  
  $6.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Entity.addEffect(getPlayerEnt(), MobEffect.heal, 20, 100, true, false);
}}));
  $7.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(!防摔伤掉落虚空){
防摔伤掉落虚空=true
$7.setText("防摔伤掉落虚空：开启");
print("已开启防摔落掉落虚空")
return 0
}else{
防摔伤掉落虚空=false
$7.setText("防摔伤掉落虚空：关闭");
print("已关闭防摔落掉落虚空")
return 0
}
}}));  
  $8.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Level.setGameMode(1);
}}));  
  $9.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Level.setGameMode(0);
}}));  
  $10.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
ctx.runOnUiThread(脚本)
}}));  
 $11.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
ctx.runOnUiThread(执行js代码)
}}));  
  
  function bb(q){
  q.setBackgroundColor(android.graphics.Color.argb(0,0,0,0));
 q.setTextColor(android.graphics.Color.rgb(250,0,0));
  }
  bb($5);bb($9);bb($6);bb($7);bb($8);bb($10);bb($11);
      
  
  var $=new android.widget.PopupWindow(ctx);
$.setFocusable(true);
$.setContentView($1);
$.setWidth(宽*0.2);
$.setHeight(高*0.4);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(1476395008));
$.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT  | android.view.Gravity.TOP,0,0);
}catch(e){print(e)}}});
/*控制面板end*/

/*控制开关begin*/
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx);
button.setText("白熊控制");
  button.setTextSize(9);
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
  ctx.runOnUiThread(控制面板)
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(100);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,20);
}}));
/*控制开关end*/
}
/*激活码begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
  
  
$xwin=new android.widget.PopupWindow();
//位置②
var layout=new android.widget.LinearLayout(ctx);
//位置③
var button=new android.widget.Button(ctx);
button.setText("激活辅助");
  button.setTextSize(8);

//位置④
layout.addView(button);
//位置⑤
win.setContentView(layout);
win.setWidth(130);
win.setHeight(130);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
  var Build = new android.os.Build();
  var 验 = Build.SERIAL+Build.ID
   //yh=new android.widget.PopupWindow(ctx);
  var 高=ctx.getScreenHeight();
  var 宽=ctx.getScreenWidth();
  function 获取激活码(验证码){
  var 转换 = String(验证码)
  var 激活码1 = 转换.length;
  var 激活码2 = 转换.charAt(4);
  var 激活码3 = 转换.charAt(激活码1+2);
  var 激活码4 = 转换.charAt(激活码1-2);
  var j2=j3=j4=""
  var 验证=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M","1","0","2","9","3","8","4","7","5","6","f","gh","ok","hg","jkf","rg"]
  for(var i=0;i<验证.length;i++){
    if(激活码2==验证[i]) j2 = 验证[i+2]
    if(激活码3==验证[i]) j3 = 验证[i+3]
    if(激活码4==验证[i]) j4 = 验证[i+4]
  }
  var 数值 = (激活码1-4)*0.01+5
  var 激活码end = String(String(Math.floor(数值))+j2+j3+j4+验证[Math.floor(数值)]+激活码1*2+验证[Math.floor(激活码1*0.5)]);
  return 激活码end
}  
var $1=new android.widget.LinearLayout(ctx);
$1.setOrientation(1);
$1.setGravity(17);
var $2=new android.widget.TextView(ctx);
$2.setText("欢迎使用白熊辅助番外篇『本机验证码："+String(验)+"』");
$2.setTextSize(15)
  var $2_params=new android.widget.LinearLayout.LayoutParams(宽*0.5,高*0.4);
$2.setLayoutParams($2_params);
$1.addView($2);
var $3=new android.widget.EditText(ctx);
  $3.setHint("激活码......");
  $3.setText(验);
var $3_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$3.setLayoutParams($3_params);
$1.addView($3);
var $4=new android.widget.Button(ctx);
  $4.setText("确认");
  $4.setTextSize(12);
   $4.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
    var 激活码 = String($3.getText())    
     if(激活码 == 获取激活码(验)){
     print("激活成功");
    //var file=new java.io.File("storage/emulated/0/mctools/scripts/校验本地激活码.js");
//file.createNewFile();
       var 内容 =escape("$3.setText('"+激活码+"')")
      // 创建存档("storage/emulated/0/mctools/scripts/校验本地激活码.js",内容);
     萊墀螓憐()
       //yh.dismiss();
       win.dismiss();
     }else{
     print("密码不正确，无法使用番外篇");
     }
   }})); 
  var $4_params=new android.widget.LinearLayout.LayoutParams(宽*0.5,100);
$4.setLayoutParams($4_params);
$1.addView($4);
/*
yh.setFocusable(true);
yh.setContentView($1);
yh.setWidth(宽*0.5);
yh.setHeight(高*0.7);
yh.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(-14881025));
yh.showAtLocation(ctx.getWindow().getDecorView(),0,宽*0.25,高*0.5-高*0.35);
  button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
yh.showAtLocation(ctx.getWindow().getDecorView(),0,宽*0.25,高*0.5-高*0.35);
}});*/
    // eval(unescape(读取数据("storage/emulated/0/mctools/scripts/校验本地激活码.js")));
//if(jh==获取激活码(验)){yh.dismiss();}
}catch(e){print(e)}}}));
/*激活码end*/
/*循环begin*/
var xc=new java.lang.Thread(new java.lang.Runnable({
run: function(){
while(1){
  try{ 
  if(防摔伤掉落虚空){
  var bx=Math.floor(Player.getX());
var by=Math.floor(Player.getY())-6;
var bz=Math.floor(Player.getZ());
if(getTile(bx,by,bz)==0||getTile(bx,by,bz)==null){
   Player.setFlying(true);
   }
  }
  Entity.addEffect(Player.getEntity(),16,1000,5,false,false);
  Entity.addEffect(Player.getEntity(),3,2000,1,false,false);  
  xc.sleep(1000)
  }catch(e){print(e);}
}
}}))
xc.start()

 萊墀螓憐();
 //yh.dismiss();
       $xwin.dismiss()
/*循环end*/



}}))
layout.addView(白熊辅助番外)

var 网易熊房=new android.widget.Button(ctx)
网易熊房.setText("网易熊房")
网易熊房.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();

//反盒君魔改
//作者：xuxiqwq

//star已授权使用xuxiqwq
var View=android.view.View;
var String=java.lang.String;
var Integer=java.lang.Integer;

var LinearLayout=android.widget.LinearLayout;
var Runnable=java.lang.Runnable;
var Color=android.graphics.Color;
var MotionEvent=android.view.MotionEvent;
var Matrix=android.graphics.Matrix;
var Bitmap=android.graphics.Bitmap;
var ScrollView=android.widget.ScrollView;
var FrameLayout=android.widget.FrameLayout;
var Gravity=android.view.Gravity;
var RelativeLayout=android.widget.RelativeLayout;
var InputFilter=android.text.InputFilter;
var TextWatcher=android.text.TextWatcher;
var ColorDrawable=android.graphics.drawable.ColorDrawable;
var StringBuilder=java.lang.StringBuilder;

var Button=android.widget.Button;
var TextView=android.widget.TextView;
var EditText=android.widget.EditText;
var ImageView=android.widget.ImageView;
var ImageButton=android.widget.ImageButton;
var PopupWindow=android.widget.PopupWindow;
var SeekBar=android.widget.SeekBar;


var 爱吃萝卜的小兔叽="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";
var logo=android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(爱吃萝卜的小兔叽,0),0,android.util.Base64.decode(爱吃萝卜的小兔叽,0).length)

context=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

context.setTheme(android.R.style.Theme_Material_Light_NoActionBar);

//state

var buttonbg={t:-531890357,//e04bff4b
f:-520139957,//e0ff4b4b
s:-526475618//e09e9e9e
}



var Metrics = context.getResources().getDisplayMetrics();

var ScreenWidth=Metrics.widthPixels;
var ScreenHeight=Metrics.heightPixels;

function dip2px(dips){ 
return Math.ceil(dips * Metrics.density); 
}

function sp2px(sp){
return (sp*Metrics.scaledDensity+0.5);
}

function bitmapScale(bitmap,x,y){
var matrix = new Matrix();  
    matrix.postScale(x/bitmap.getWidth(),y/bitmap.getHeight());
    return Bitmap.createBitmap(bitmap, 0, 0,bitmap.getWidth(),bitmap.getHeight() , matrix,true);
}

function setClick(view,executeString,x){view.setOnClickListener(new View.OnClickListener(){onClick:function(v){
return(eval(executeString));//虽然不需要return
}});
}

function setTouch(view,executeString){view.setOnTouchListener(new View.OnTouchListener(){onTouch:function(v,event){
return(eval(executeString));
}});
}

function setDismiss(popwin,executeString){popwin.setOnDismissListener(new PopupWindow.OnDismissListener(){onDismiss:function(){
eval(executeString);
}});
}

function setSeekBarChange(seekbar,executeString,x){
seekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
onProgressChanged:function(seekbar,progress,fromUser){
eval(executeString);
},

onStartTrackingTouch:function(seekbar){
// 
},

onStopTrackingTouch:function(seekbar){
//
},

});
}

function addTextChanged(edit,executeString,x){
edit.addTextChangedListener(new TextWatcher(){

beforeTextChanged:function(str,start,count,after){
},

onTextChanged:function(str,start,before,count){
},

afterTextChanged:function(s){
eval(executeString);
},

});
}



//popwin
var $IconPopwin;
var $MemuPopwin;
var $EnchantPopwin;
//var $TpPopwin;
var $TpMemuPopwin;var $TpModeButtonPopwin;


function DrawIcon(showX,showY){
context.runOnUiThread(new Runnable({run:function(){

if($IconPopwin!=null){
$IconPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
return;
}
var view=new LinearLayout(context);
var iconbutton=new ImageButton(context);
iconbutton.setImageBitmap(bitmapScale(logo,dip2px(50),dip2px(50)));


view.addView(iconbutton);
iconbutton.setBackgroundColor(Color.argb(0,0,0,0));

var popwin=new PopupWindow(view,
LinearLayout.LayoutParams.WRAP_CONTENT,
LinearLayout.LayoutParams.WRAP_CONTENT
);
//show
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
//state
$IconPopwin=popwin;
setClick(iconbutton,"IconPopwinClick();");
setTouch(iconbutton,"IconPopwinMove(event);");
}}));
}


var MemuButtons=[
//text,rs:[raplace string <eval>],checktest,exe
{text:"隐蔽升空",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY()+5000,Player.getZ());Player.setFlying(true);"},
{text:"超级遁地",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY()-4990,Player.getZ());Player.setFlying(true);"},
{text:"默认飞行",
checktest:function(){return Player.canFly();},
exe:"Player.setCanFly(!Player.canFly());"},
{text:"z-穿墙",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY(),Player.getZ()-5);"},
{text:"z+穿墙",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY(),Player.getZ()+5);"},
{text:"x-穿墙",exe:"setPosition(Player.getEntity(),Player.getX()-5,Player.getY(),Player.getZ());"},
{text:"x+穿墙",exe:"setPosition(Player.getEntity(),Player.getX()+5,Player.getY(),Player.getZ());"}, 
{text:"y+穿墙",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY()+5,Player.getZ());"},
{text:"y-穿墙",exe:"setPosition(Player.getEntity(),Player.getX(),Player.getY()-5,Player.getZ());"},
{text:"打开望远镜",exe:
"Entity.addEffect(Player.getEntity(),2,100,1000000,false,false);"//白熊特效
},
{text:"添加药水效果",exe:
"Entity.addEffect(Player.getEntity(),3,1000000,1000000,false,false);"+
"Entity.addEffect(Player.getEntity(),8,1000000,5,false,false);"+
"Entity.addEffect(Player.getEntity(),16,1000000,1000000,false,false);"
},
{text:"究极神器:崩服蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,259)"},
{text:"添加隐身药水",exe:"Entity.setCarriedItem(getPlayerEnt(),373,1,8)"},
{text:"添加钻石镐",exe:"Entity.setCarriedItem(getPlayerEnt(),278,1,0)"},
{text:"添加潜影蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,54)"},
{text:"时运&锋利&效率&击退&耐久附魔",exe:"Player.enchant(Player.getSelectedSlotId(),Enchantment.FORTUNE,-98305);"+"Player.enchant(Player.getSelectedSlotId(),Enchantment.SHARPNESS,-98305);"+"Player.enchant(Player.getSelectedSlotId(),Enchantment.EFFICIENCY,-98305);"+"Player.enchant(Player.getSelectedSlotId(),Enchantment.KNOCKBACK,-98305);"+"Player.enchant(Player.getSelectedSlotId(),Enchantment.UNBREAKING,-98305);"},
{text:"SuperKB附魔",exe:"Player.enchant(Player.getSelectedSlotId(),Enchantment.KNOCKBACK,-98305);"+"Player.enchant(Player.getSelectedSlotId(),Enchantment.UNBREAKING,-98305);"},
{text:"添加钻石剑",exe:"Entity.setCarriedItem(getPlayerEnt(),276,1,0)"},
{text:"添加青金矿石（卡房）",exe:"Entity.setCarriedItem(getPlayerEnt(),21,64,0)"},
{text:"添加隐形基岩",exe:"Entity.setCarriedItem(getPlayerEnt(),95,64,0)"},
{text:"添加基岩",exe:"Entity.setCarriedItem(getPlayerEnt(),7,64,0)"},
{text:"添加刷怪笼",exe:"Entity.setCarriedItem(getPlayerEnt(),52,64,0)"},
{text:"添加岩浆桶",exe:"Entity.setCarriedItem(getPlayerEnt(),325,5,10)"},
{text:"添加钻石块",exe:"Entity.setCarriedItem(getPlayerEnt(),57,64,0)"},
{text:"添加卫道士蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,57)"},
{text:"获取苦力怕蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,33)"},
{text:"获取附魔苹果",exe:"Entity.setCarriedItem(getPlayerEnt(),466,64,0)"},
{text:"添加末影龙蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,53)"},
{text:"添加凋零蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,52)"},
{text:"添加闪电蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,93)"},
{text:"爆破屑运营",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,65)"},
{text:"添加龙息蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,79)"},
{text:"添加龙息蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),322,64,1)"},
{text:"添加凋灵头蛋（蓝）",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,91)"},
{text:"手持物品栏",exe:"Entity.setCarriedItem(getPlayerEnt(),456,64,0)"},
{text:"添加TNT蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,65)"},
{text:"添加火球蛋",exe:"Entity.setCarriedItem(getPlayerEnt(),383,64,85)"},
{text:"添加弩",exe:"Entity.setCarriedItem(getPlayerEnt(),471,64,0)"},
{text:"添加黑紫棒",exe:"Entity.setCarriedItem(getPlayerEnt(),166,64,0)"},
{text:"添加不死图腾",exe:"Entity.setCarriedItem(getPlayerEnt(),450,64,0)"},
//白熊这里醉了(›´\u3c9`‹ )
];

function MemuButtonBGDraw(count,bt){
if(MemuButtons[count].checktest()){bt.setBackgroundColor(buttonbg.t);}
else{bt.setBackgroundColor(buttonbg.f);}
}

function MemuButtonDraw(view){
for(var count=0;count<MemuButtons.length;count++){
var bt=new Button(context);
bt.setElevation(10);

bt.setAllCaps(false);
var btext=new String(MemuButtons[count].text);
/*
if(typeof(MemuButtons[count].rs)!="undefined")
for(var i=0;i<MemuButtons[count].rs.length;i++){
btext=btext.replace("%$"+i,MemuButtons[count].rs[i]());
}
*/
bt.setText(btext);

if(typeof(MemuButtons[count].checktest)!="undefined"){
MemuButtonBGDraw(count,bt);
setClick(bt,MemuButtons[count].exe+"MemuButtonBGDraw(x[0],x[1]);",[count,bt]);
}
else{
bt.setBackgroundColor(buttonbg.s);
setClick(bt,MemuButtons[count].exe,[bt,count]);
}

view.addView(bt,-1,-2);//WRAP_CONTENT,WRAP_FILL_PARENT暂且这么写
}
}

function DrawMemu(showX,showY){
//context.runOnUiThread(new Runnable({run:function(){

if($MemuPopwin!=null){
$MemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);//ScreenWidth-dip2px(220),dip2px(120));
return;}
var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113870013);//#8200b7ff

var xuxiqwq=new TextView(context);
xuxiqwq.setText("白熊Ice Bear ");
xuxiqwq.setText("白熊Ice Bear ");
view.addView(xuxiqwq,-2,-2);
//add buttons

////////////////
MemuButtonDraw(view);
////////////////

var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_CONTENT,WRAP_FILL_PARENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);
popwin.setWidth(dip2px(180));
popwin.setHeight(ScreenHeight/2);
popwin.setOutsideTouchable(true);
popwin.setElevation(10);
setDismiss(popwin,"MenuPopwinDismiss();");
popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
popwin.setFocusable(true);
$MemuPopwin=popwin;
//show
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);//ScreenWidth-dip2px(220),dip2px(120));

//}}));
}

//tool win//
var $ToolWinIsShow=false;

//be的id按顺序
var EnchantList=[
{id:0,name:"\u4fdd\u62a4"},
{id:1,name:"\u706b\u7130\u4fdd\u62a4"},
{id:2,name:"\u6389\u843d\u4fdd\u62a4"},
{id:3,name:"\u7206\u70b8\u4fdd\u62a4"},
{id:4,name:"\u5f39\u5c04\u7269\u4fdd\u62a4"},
{id:5,name:"\u8346\u68d8"},
{id:6,name:"\u6c34\u4e0b\u547c\u5438"},
{id:7,name:"\u6df1\u6d77\u63a2\u7d22\u8005"},
{id:8,name:"\u6c34\u4e0b\u901f\u6398"},
{id:9,name:"\u950b\u5229"},
{id:10,name:"\u4ea1\u7075\u6740\u624b"},
{id:11,name:"\u622a\u80a2\u6740\u624b"},
{id:12,name:"\u51fb\u9000"},
{id:13,name:"\u706b\u7130\u9644\u52a0"},
{id:14,name:"\u62a2\u593a"},
{id:15,name:"\u6548\u7387"},
{id:16,name:"\u7cbe\u51c6\u91c7\u96c6"},
{id:17,name:"\u8010\u4e45"},
{id:18,name:"\u65f6\u8fd0"},
{id:19,name:"\u529b\u91cf"},
{id:20,name:"\u51b2\u51fb"},
{id:21,name:"\u706b\u77e2"},
{id:22,name:"\u65e0\u9650"},
{id:23,name:"\u6d77\u4e4b\u7737\u987e"},
{id:24,name:"\u9975\u9493"},
{id:25,name:"\u51b0\u971c\u884c\u8005"},
{id:26,name:"\u7ecf\u9a8c\u4fee\u8865"},
{id:27,name:"\u7ed1\u5b9a\u8bc5\u5492"},
{id:28,name:"\u6d88\u5931\u8bc5\u5492"},
{id:29,name:"\u7a7f\u523a"},
{id:30,name:"\u6fc0\u6d41"},
{id:31,name:"\u5fe0\u8bda"},
{id:32,name:"\u5f15\u96f7"},
{id:33,name:"\u591a\u91cd\u5c04\u51fb"},
{id:34,name:"\u7a7f\u900f"},
{id:35,name:"\u5feb\u901f\u88c5\u586b"},

];

function DrawEnchant(){
$ToolWinIsShow=true;


//context.runOnUiThread(new Runnable({run:function(){

if($EnchantPopwin!=null){
$EnchantPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,ScreenWidth/4,ScreenHeight/4);
return;
}

var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113882113);//#8200b7ff
//text         id 0xa
//button    id 0x1
//SeekBar id 0x2
//edit         id 0x3
//params
var textParams=new RelativeLayout.LayoutParams(sp2px(10*5),-2);
textParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT,RelativeLayout.TRUE);
var buttonParams=new RelativeLayout.LayoutParams(-2,-2);
buttonParams.addRule(RelativeLayout.ALIGN_PARENT_RIGHT,RelativeLayout.TRUE);
var editParams=new RelativeLayout.LayoutParams(sp2px(15*5),-2);
editParams.addRule(RelativeLayout.LEFT_OF,0x1);
var sbParams=new RelativeLayout.LayoutParams(-1,-2);
sbParams.addRule(RelativeLayout.RIGHT_OF,0xa);
sbParams.addRule(RelativeLayout.LEFT_OF,0x3);

for(var i=0;i<EnchantList.length;i++){
var relative=new RelativeLayout(context);
var name=new TextView(context);
name.setId(0xa);
var button=new Button(context);
button.setId(0x1);
var sb=new SeekBar(context);
//sb.setId(0x2);
var level=new EditText(context);
level.setId(0x3);

//level.setInputType(InputType.TYPE_CLASS_NUMBER|InputType.TYPE_NUMBER_FLAG_SIGNED);//number
level.setInputType(4098);
level.setText("0");
level.setFocusable(true);
level.setFocusableInTouchMode(true);
level.setFilters([new InputFilter.LengthFilter(6)]);
addTextChanged(level,"EnchantEditChange(s,x);",[level,sb]);

sb.setProgress(32768);
sb.setMax(65535);
sb.setProgress(32768);

sb.setPadding(dip2px(20),0,dip2px(50),0);
setSeekBarChange(sb,"EnchantSeekChange(progress,fromUser,x);",[level]);
name.setText(EnchantList[i].name);
button.setText("\u9644\u9b54");
setClick(button,"EnchantHand("+i+",x[0].getProgress());",[sb]);
//button.setGravity(Gravity.RIGHT);
//name.setGravity(Gravity.LEFT);
//level.setGravity(Gravity.CENTER);
relative.addView(name,textParams);
relative.addView(level,editParams);
relative.addView(button,buttonParams);
relative.addView(sb,sbParams);
view.addView(relative,-1,-2);
}
//dividing line--------
var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_FILL_PARENT,WRAP_CONTENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);
popwin.setWidth(ScreenWidth/2);
popwin.setHeight(ScreenHeight/2);
popwin.setOutsideTouchable(true);
popwin.setElevation(10);
setDismiss(popwin,"EnchantPopwinDismiss();");
popwin.setFocusable(true);
popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
popwin.setFocusable(true);
$EnchantPopwin=popwin;
popwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,ScreenWidth/4,ScreenHeight/4);

//}}));
}

/*
function DrawTp(showX,showY){
//context.runOnUiThread(new Runnable({run:function(){

if($TpPopwin!=null){
$TpPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
return;

var view=new LinearLayout(context);
}
//}}));
}*/
//嘻嘻嘻(♡\u2d9︶\u2d9♡)

function TpPlayerRefresh(){
var view=$TpPlayersView;
view.removeAllViews();
var players=Server.getAllPlayers();
for(var i=0;i<players.length;i++){
var player=players[i];
var name=Player.getName(player);
var bt=new Button(context);
bt.setBackgroundColor(buttonbg.s);
bt.setAllCaps(false);
bt.setText(""+name);
setClick(bt,"TpModes[$TpMode].run(x[0]);",[player]);
view.addView(bt,-1,-2);
}

}


var TpModes=[
{id:0,name:"tp",run:function(player){
setPosition(Player.getEntity(),Entity.getX(player),Entity.getY(player),Entity.getZ(player));
}},

{id:1,name:"tpa",run:function(player){
setPosition(player,Player.getX(),Player.getY(),Player.getZ());
}},

];
var $TpMode=0;



function DrawTpMemu(){
//context.runOnUiThread(new Runnable({run:function(){
var showX=0;var showY=0;
if($TpMemuPopwin!=null){
TpPlayerRefresh();
$TpMemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);
$TpModeButtonPopwin.getContentView().findViewById(0x1).setText(TpModes[$TpMode].name);
$TpModeButtonPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX+dip2px(180),showY);

return;
}

var view=new LinearLayout(context);
view.setOrientation(LinearLayout.VERTICAL);
view.setBackgroundColor(-2113882113);//#8200b7ff

$TpPlayersView=new LinearLayout(context);
$TpPlayersView.setOrientation(LinearLayout.VERTICAL);
var bt=new Button(context);
bt.setText("刷新");
view.addView(bt,-1,-2);
setClick(bt,"TpPlayerRefresh();");

TpPlayerRefresh();

view.addView($TpPlayersView,-1,-2);

var scrollview=new ScrollView(context);
scrollview.addView(view,
-1,-2//WRAP_FILL_PARENT,WRAP_CONTENT
);
var popwin=new PopupWindow(scrollview,
-1,-1//WRAP_FILL_PARENT
);

popwin.setWidth(dip2px(180));
popwin.setHeight(dip2px(180*1.5));

$TpMemuPopwin=popwin;
setDismiss(popwin,"$TpModeButtonPopwin.dismiss();");
$TpMemuPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX,showY);

//Mode Button
var mview=new LinearLayout(context);
var modebutton=new Button(context);

modebutton.setText(TpModes[0].name);
modebutton.setBackgroundColor(buttonbg.s);
setClick(modebutton,"if($TpMode>=TpModes.length-1)$TpMode=0;else ++$TpMode;v.setText(TpModes[$TpMode].name);");
modebutton.setId(0x1);
modebutton.setAllCaps(false);
$TpMode=0;
mview.addView(modebutton,-1,-1);

var mpop=new PopupWindow(mview,dip2px(80),dip2px(40));
$TpModeButtonPopwin=mpop;
$TpModeButtonPopwin.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT| android.view.Gravity.TOP,showX+dip2px(180),showY);



//}}));
}

//state
var $orgX=null, $orgY=null,$offset=null, $offsetY=null;
var $IconPopwinX=null,$IconPopwinY=null;

function IconPopwinMove(event){
switch (event.getAction()) {
case MotionEvent.ACTION_DOWN:
$orgX =  event.getX();
$orgY = event.getY();
break;
case MotionEvent.ACTION_MOVE:
$offsetX =  event.getRawX()- $orgX;
$offsetY =  event.getRawY() - $orgY;
$IconPopwin.update($offsetX,$offsetY, -1, -1, true);

break;
case MotionEvent.ACTION_UP:
$IconPopwinX=event.getRawX()-event.getX();
$IconPopwinY=event.getRawY()-event.getY();
break;
}
return false;
}

function IconPopwinClick(){

$IconPopwin.dismiss();
DrawMemu($IconPopwinX,$IconPopwinY);
return false;
}

function MenuPopwinDismiss(){
if(!$ToolWinIsShow)
DrawIcon($IconPopwinX,$IconPopwinY);
}

function EnchantPopwinDismiss(){
$ToolWinIsShow=false;
DrawMemu($IconPopwinX,$IconPopwinY);
}

function EnchantHandItem(){
DrawEnchant();
$MemuPopwin.dismiss();
}

function EnchantSeekChange(progress,fromUser,x){
if(fromUser)
x[0].setText(""+(progress-32768));
}

function EnchantEditChange(s,x){
if(s.toString()==""||s.toString()=="-"){var progress=-32768;}else
var progress=parseInt(s.toString())+32768;
if(progress>65535){
x[0].setText("32767");

progress=65535;
x[0].setSelection(5);
}

x[1].setProgress(progress);
}

function EnchantHand(id,level){
///Player.getEnchantments(par1int);
Item.setEnchantType(getCarriedItem(),id,1);
Player.enchant(Player.getSelectedSlotId(),id,-98304+level);
}


MC={
getAllPlayers:function(){
var e=Entity.getAll();
var players=new Array();
for(var i=0;i<e.length;i++){
if(Player.isPlayer(e[i]))
players.push(e[i]);
}
print(e.length+","+e[0]+","+e[length-1]);
return players;
},

}



DrawIcon(ScreenWidth,0.5*ScreenHeight-dip2px(40));

/*
function newLevel(){
DrawIcon(ScreenWidth,0.5*ScreenHeight-dip2px(40));
}
function leaveGame(){
context.runOnUiThread(new Runnable({run:function(){
$IconPopwin.dismiss();
}}));
}*/

}}))
layout.addView(网易熊房)

var 综合辅助=new android.widget.Button(ctx)
综合辅助.setText("综合辅助")
综合辅助.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();
﻿//    by白熊

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("退")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX()+6,Player.getY(),Player.getZ())
Player.setFlying(false)
clientMessage("§a白§b熊：§19关注白熊代刷网http://youjing.tzdsb.com")
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(130);
win.setHeight(90);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,315,666,5087)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,330,200);
}}));

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("闪")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()+6,Player.getZ())
Player.setFlying(false)
clientMessage("§a白§b熊：§19关注白熊代刷网http://youjing.tzdsb.com")
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(130);
win.setHeight(90);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,315,666,5087)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,330,300);
}}));

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("⬆️")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()+10,Player.getZ())
Player.setFlying(true)
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(90);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(315,66,66,66)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,1999,400);
}}));

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("⬇️️")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()-3,Player.getZ())
Player.setFlying(true)
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(90);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(315,66,66,66)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,1999,520);
}}));

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("飞")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()+1,Player.getZ())
Player.setFlying(true)
clientMessage("§a白§b熊:§4已开启飞行")
}});
layout.addView(button);
win.setContentView(layout);
win.setWidth(100);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(315,66,66,66)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,18,250);
}}));

//     分割线


}}))
layout.addView(综合辅助)

var text8=new android.widget.Button(ctx)
text8.setText("附魔")
text8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
高级附魔();
}}));
layout.addView(text8)

var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,300))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,0,100,250)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

function 玩家管理按键(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
win.dismiss();
var 菜单布局1背景=new GD();
菜单布局1背景.setStroke(10,颜色(200,221,0,152));
菜单布局1背景.setCornerRadius(5);
layout.setBackground(菜单布局1背景);

var button=new android.widget.Button(ctx);
button.setText("玩家")
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){ 
玩家列表菜单();
 }}))
layout.addView(button);

win.setContentView(layout);
win.setWidth(110);
win.setHeight(100);
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,500,50);
}}));
}

function 玩家列表菜单(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

//Player.getName(uuid)
var 玩家列表=Server.getAllPlayers()
var 玩家0=玩家列表[0]
var 玩家1=玩家列表[1]
var 玩家2=玩家列表[2]
var 玩家3=玩家列表[3]
var 玩家4=玩家列表[4]
var 玩家5=玩家列表[5]
var 玩家6=玩家列表[6]
var 玩家7=玩家列表[7]
var 玩家8=玩家列表[8]
var 玩家9=玩家列表[9]
var 玩家10=玩家列表[10]
var 玩家11=玩家列表[11]

var 功能钮0=new android.widget.Button(ctx)
功能钮0.setText("选择功能配置")
功能钮0.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
玩家配置菜单();
menu.dismiss();
}}))
layout.addView(功能钮0)

var 玩家钮0=new android.widget.Button(ctx)
玩家钮0.setText(Player.getName(玩家0))
玩家钮0.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家0
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮0)

var 玩家钮1=new android.widget.Button(ctx)
玩家钮1.setText(Player.getName(玩家1))
玩家钮1.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家1
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮1)

var 玩家钮2=new android.widget.Button(ctx)
玩家钮2.setText(Player.getName(玩家2))
玩家钮2.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家2
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮2)

var 玩家钮3=new android.widget.Button(ctx)
玩家钮3.setText(Player.getName(玩家3))
玩家钮3.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家3
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮3)

var 玩家钮4=new android.widget.Button(ctx)
玩家钮4.setText(Player.getName(玩家4))
玩家钮4.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家4
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮4)

var 玩家钮5=new android.widget.Button(ctx)
玩家钮5.setText(Player.getName(玩家5))
玩家钮5.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家5
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮5)

var 玩家钮6=new android.widget.Button(ctx)
玩家钮6.setText(Player.getName(玩家6))
玩家钮6.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家6
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮6)

var 玩家钮7=new android.widget.Button(ctx)
玩家钮7.setText(Player.getName(玩家7))
玩家钮7.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家7
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮7)

var 玩家钮8=new android.widget.Button(ctx)
玩家钮8.setText(Player.getName(玩家8))
玩家钮8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家8
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮8)

var 玩家钮9=new android.widget.Button(ctx)
玩家钮9.setText(Player.getName(玩家9))
玩家钮9.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家9
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮9)

var 玩家钮10=new android.widget.Button(ctx)
玩家钮10.setText(Player.getName(玩家10))
玩家钮10.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家10
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮10)

var 玩家钮11=new android.widget.Button(ctx)
玩家钮11.setText(Player.getName(玩家11))
玩家钮11.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
当前锁定玩家=玩家11
if(长臂猿==true){
Entity.setCollisionSize(当前锁定玩家, 8, 7);
}
var x=Entity.getX(当前锁定玩家)
var y=Entity.getY(当前锁定玩家)
var z=Entity.getZ(当前锁定玩家)
传送玩家(x,y,z)
}}))
layout.addView(玩家钮11)




var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,300))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,0,100,250)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

function 玩家配置菜单(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var 回上页=new android.widget.Button(ctx)
回上页.setText("回上页")
回上页.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
玩家列表菜单();
menu.dismiss();
}}))
layout.addView(回上页)


var cht=new android.widget.CheckBox(ctx);
cht.setText("长臂猿")
cht.setChecked(长臂猿)
cht.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(长臂猿==false){
长臂猿=true
}else
if(长臂猿==true){
长臂猿=false
}
}});
layout.addView(cht)

var cht1=new android.widget.CheckBox(ctx);
cht1.setText("骑玩家")
cht1.setChecked(骑玩家)
cht1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(骑玩家==false){
骑玩家=true
}else
if(骑玩家==true){
骑玩家=false
}
}});
layout.addView(cht1)

var cht2=new android.widget.CheckBox(ctx);
cht2.setText("自瞄")
cht2.setChecked(自瞄)
cht2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(自瞄==false){
自瞄=true
}else
if(自瞄==true){
自瞄=false
}
}});
layout.addView(cht2)



var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,300))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,0,100,250)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

function 白熊添加物品(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
白熊添加物品()
}catch(err){print(err)}
}}))
function 白熊添加物品(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var 物品ID=new android.widget.EditText(ctx)
物品ID.setText("")
物品ID.setHint("白熊ID")
layout.addView(物品ID)

var 物品特殊值=new android.widget.EditText(ctx)
物品特殊值.setText("")
物品特殊值.setHint("白熊特殊值")
layout.addView(物品特殊值)

var 确认=new android.widget.Button(ctx)
确认.setText("确认")
确认.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
var 特殊值=物品特殊值.getText()
var ID=物品ID.getText()
//addItemInventory(ID,1,特殊值)
Entity.setCarriedItem(getPlayerEnt(),ID,64,特殊值)
clientMessage("已添加")
}}))
layout.addView(确认)

var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,350))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127,100,0,255)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,150),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function dip2px(ctx, dips){ 
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}


function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}}

function 娱乐窗口(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var text=new android.widget.Button(ctx)
text.setText("生存")
text.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Level.setGameMode(0)
}}));
layout.addView(text)

var text1=new android.widget.Button(ctx)
text1.setText("创造")
text1.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Level.setGameMode(1)
}}));
layout.addView(text1)

var text3=new android.widget.Button(ctx)
text3.setText("土x64")
text3.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
addItemInventory(3,64,0);
}}));
layout.addView(text3)

var text4=new android.widget.Button(ctx)
text4.setText("木x64")
text4.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
addItemInventory(5,64,0);
}}));
layout.addView(text4)

var text5=new android.widget.Button(ctx)
text5.setText("经验")
text5.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Player.addExp(6000)
}}));
layout.addView(text5)

var text6=new android.widget.Button(ctx)
text6.setText("白天")
text6.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Level.setTime(100);
}}));
layout.addView(text6)

var text7=new android.widget.Button(ctx)
text7.setText("黑夜")
text7.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Level.setTime(18000);
}}));
layout.addView(text7)

var text8=new android.widget.Button(ctx)
text8.setText("[荐]附魔")
text8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
高级附魔();
}}));
layout.addView(text8)

var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,300))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,0,100,250)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

function 注冊机(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
  var 对话框=new android.app.Dialog(ctx);
对话框.setCancelable(false);

  var 注册机布局=new 线性布局(ctx);
注册机布局.setOrientation(1);
var 标题=new 文本(ctx)
标题.setText("请找白熊获取密码\n入群可有几率获得");
标题.setTextSize(20);
var id=new 文本(ctx);
id.setText("你的ID:"+IMEI);
id.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){

}}))
var 输入=new 输入框(ctx);
var 宽=new 布局参数(-1,-2);
var copy=new 按钮(ctx);
copy.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
复制(String(IMEI));
load("复制成功");
}}))
copy.setText("复制ID");
var 确定=new 按钮(ctx);
确定.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
  if(Number(输入.getText())==密码){
对话框.dismiss()
load("密码验证通过")
解锁验证=true
創建文件(path+"/Android/.js/.Mc  Star 验证文件 』/")
保存("/storage/emulated/0/Android/.js/.Mc  Star 验证文件 』/"+密码+".txt","null")
}
else{
load("错误")};
}}))
确定.setText("确定");
  var 退出=new 按钮(ctx);
退出.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
对话框.dismiss()
}}))
退出.setText("取消");
id.setLayoutParams(宽);
输入.setLayoutParams(宽);
copy.setLayoutParams(宽);
确定.setLayoutParams(宽);
退出.setLayoutParams(宽);
注册机布局.addView(标题);
注册机布局.addView(id);
注册机布局.addView(输入);
注册机布局.addView(copy);
注册机布局.addView(确定);
注册机布局.addView(退出);
对话框.setContentView(注册机布局);
对话框.show();
}}));
}


function 飞(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
win.dismiss();
var 菜单布局1背景=new GD();
菜单布局1背景.setStroke(10,颜色(200,221,0,152));
菜单布局1背景.setCornerRadius(5);
layout.setBackground(菜单布局1背景);

var 按鈕=new android.widget.Button(ctx)
按鈕.setText("飞")
按鈕.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
按鈕.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
setVelY(getPlayerEnt(),0.5)
Player.setFlying(true)
}});
layout.addView(按鈕);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,18,250);
}}));
}




function 设(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
win.dismiss();
var 菜单布局1背景=new GD();
菜单布局1背景.setStroke(10,颜色(200,221,0,152));
菜单布局1背景.setCornerRadius(5);
layout.setBackground(菜单布局1背景);
var button=new android.widget.Button(ctx);
button.setText("设")
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg)
  { 
xxx=Player.getX()
yyy=Player.getY()
zzz=Player.getZ()
clientMessage("§aIce Bear:§4已设置传送点")
 }}))
layout.addView(button);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(100);
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,1600,50);
}}));
}


function 回(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var win=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
win.dismiss();
var 菜单布局1背景=new GD();
菜单布局1背景.setStroke(10,颜色(200,221,0,152));
菜单布局1背景.setCornerRadius(5);
layout.setBackground(菜单布局1背景);
var button=new android.widget.Button(ctx);
button.setText("回")
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg)
  { 
  当前锁定玩家=null
  try{
  if(xxx==null){
  clientMessage("§aIce Bear:§4传送失败")
  }
  else{
  setPosition(getPlayerEnt(),xxx,yyy,zzz)
clientMessage("§1Ice Bear:§2传送成功")
  }
  }catch(err){load("Ice Bear:请先设置传送点再进行传送");}
 }}))
layout.addView(button);
win.setContentView(layout);
win.setWidth(110);
win.setHeight(100);
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,1600,200);
}}));
}



//白熊出品//
