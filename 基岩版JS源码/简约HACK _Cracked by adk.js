//Cracked by adk
//加密方式>注释混淆 | 多层eval加密
//2020.7.11 13:14
//P0wered by Breeze Studio

//更新日期：2020. 春节期间

//ctx线程
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var GD=android.graphics.drawable.GradientDrawable;
var 颜色=android.graphics.Color.argb;
var 线性布局=android.widget.LinearLayout;
var wg = android.widget;
var app = android.app;
var wid = ctx.getWindowManager().getDefaultDisplay().getWidth();
var hei = ctx.getWindowManager().getDefaultDisplay().getHeight();
var gravity = android.view.Gravity;
var left = gravity.LEFT;
var top = gravity.TOP;
var right = gravity.RIGHT;
var bottom = gravity.BOTTOM,
    center = gravity.CENTER,
    mainView = ctx.getWindow().getDecorView(),
    view = android.view,
    grap = android.graphics,
    lang = java.lang,
    util = android.util,
    io = java.io;
        
        
var 躲弓箭=false;
var 强制夜视=false;
var 长臂猿=false;


function getNearEnt(maxrange) {
try{
var name = Player.getName(getPlayerEnt());
var mobs = Server.getAllPlayers();
var players = Server.getAllPlayers();
var small = maxrange;
var ent = null;
for (var i = 0; i < mobs.length; i++) {
var x = Entity.getX(mobs[i]) - getPlayerX();
var y = Entity.getY(mobs[i]) - getPlayerY();
var z = Entity.getZ(mobs[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
small = dist;
ent = mobs[i];
}
}
for (var i = 0; i < players.length; i++) {
var x = Entity.getX(players[i]) - getPlayerX();
var y = Entity.getY(players[i]) - getPlayerY();
var z = Entity.getZ(players[i]) - getPlayerZ();
var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
if (dist < small && dist >= 0.1 && Entity.getHealth(players[i]) >= 1) {
small = dist;
ent = players[i];
}
}
if(name!==Player.getName(ent)){
return ent;
}else{return null}
}catch(e){return null;print(e);}
};

function roundBG(hex, round, f, s) {
return roundRect(hexColor(hex), round, f, s)
}
//进制颜色
function hexColor(c) {
return android.graphics.Color.parseColor(c);
}

//高
function H() {
var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
return metrics.heightPixels;
};


//宽
function W() {
var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
return metrics.widthPixels;
};


//UI线程
function Ui(command) {
ctx.runOnUiThread(new java.lang.Runnable({
run: command
}));
}

function dip2px(ctx, dips) {
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

//线程
function runThread(func) {
var a = new java.lang.Thread(new java.lang.Runnable({
run: func
}));
a.start();
return a;
}

function thread(func) {
var a = new java.lang.Thread(new java.lang.Runnable({
run: func
}));
return a;
}
//显示对话
function showTip(text, show) {
Ui(function() {
var toast = wg.Toast.makeText(ctx, String(text), show ? show : 0);
toast.show();
});
}

//圆角矩形背景 By:鄢主晴伊未授权
function roundRect(arr, arr2, f, s) {
if (!(arr instanceof Array)) arr = [arr, arr, arr];
if (!(arr2 instanceof Array)) arr2 = [arr2, arr2, arr2, arr2];
if (arr2 == null) arr2 = [10, 10, 10, 10];
var jb = null,
type = null;
if (f == "上下" || f == null) {
jb = android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
} else if (f == "左右") {
jb = android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
} else if (f == "右上") {
jb = android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
} else if (f == "右下") {
jb = android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
}
var dra = new android.graphics.drawable.GradientDrawable(jb, arr);
if (s == 0 || s == null) {
type = android.graphics.drawable.GradientDrawable.LINEAR_GRADIENT;
} else if (s == 1) {
type = android.graphics.drawable.GradientDrawable.RADIAL_GRADIENT;
} else if (s == 2) {
type = android.graphics.drawable.GradientDrawable.SWEEP_GRADIENT;
}
dra.setGradientType(type);
dra.setCornerRadii([arr2[0], arr2[0], arr2[1], arr2[1], arr2[2], arr2[2], arr2[3], arr2[3]]);
return dra;
}

/*#旋转*/
function UIRotate(view, A, B, x, y, time, type) {
var anim = android.view.animation;
var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
var dh = new anim.RotateAnimation(A, B, tp, x * 0.01, tp, y * 0.01);
dh.setDuration(time);
dh.setFillAfter(true);
if (view != null) view.startAnimation(dh);
return dh;
}
//JS的主要按钮
function 主要按钮() {
var 图标LOGO = "iVBORw0KGgoAAAANSUhEUgAAAMcAAADICAYAAABcU/UTAAAABHNCSVQICAgIfAhkiAAAIABJREFU\neJztvUlzXdd5Nvqs3a2zTwOQIAmREtRQpGKLliW5kyNbFcVVcZKqJOV8A9/8gcw8SjTRT1AGtke+\nf+B+lQwySGXipJI70OdyYkfWlWNFkmWJJkgTFNiC6E6z23UHez8L79k4HSSCOhD3U3WIA2DjdFzv\nWm/zvM+rUKPGHGB1dbXxxBNPrFy/fl23220EQYA4ju/rawiCAADs86r7+uw1aozB1tbW+X/+53/+\nwcWLF88pVSzLXq8Hz/NgjAEAZFl2qK+h0WggyzIMBgMYY+Ad6rPVqDEjer2evnz58rl33333wmAw\nQJqm6Pf7CIIAeZ7DGGN39kN8DfB9H47jIM/z2jhqzAfiOEar1YLnedYYXNe13wOHf3Lw+cIwRJZl\ntXHUmB/keY4kSRBFEYDCGLIsQ5qmMMZYIzksaK0Rx7F9zto4aswNtNbwPA++70MpZW8AoJSC1vpQ\nn98YY08nx3Fq46gxf2AAztPCGAPHceyJctjP6/s+ANTGUWN+kCQJ4jhGkiRwHAdJksDziiXqui5c\n1z3U56fbppRCv9+Hc6jPVqPGDDDGNBzHeTQIAq2Uguu61r3xfR95ntsb44E0Te2pwhtjFF6TJIm9\nxXFsr4/juIgpyjRxFEXWfUuSBFmWwff9+uSo8emj3++fStP0u8aYU45T7Neu68JxHCilrHvF39H9\nSdPUPgazW/J7+ZX3HcexRpGmqTXCNE2tgRC1cdT41BGG4S2t9T8CeNnzvIUkSWCMgVIKWZYhSZJ9\nC5enBe9XUb0e2DMA1jFoXOPctdo4anzquHz5MjzPw87ODgAgiiJrEDQCBuRc3MCegTCrxVNglLEA\nhYsm3aksy+B5HoIgQJZl+1LFtXHUuKdYXV1tnDlzZqXb7erd3V3EcYwgCOxN8qX4/WAweDRJklfT\nNF155JFHbOHPdV1rJJ7nIY5juK5rjYbxBVCcFNXFXT094jjGzs4OsiyD67rWiBzHGXLRiNo4atxT\nnDlzZuXy5cs/ePvtt89dunQJcRzb1CgXL7NRYRii2+0iiiIdBMHK5z73OX369GlkWQbHceD7PgaD\nAZRSSNMUjuNYF4jFwiiKhrJMxKj7r7/+Oi5evIh+vw/P86xB0XVjZoyojaPGPUWSJPrWrVvn3nrr\nrQu//OUvEccxPM9DFEW2yEfj0FpjZ2cHcRzj5MmTePnll/Hiiy+i0WjYx2MgTneIyLIMvV4P/X7f\n7vp0twAMFQ+JDz74AKurq4iiCI1GY597VkVtHDXuKeg+MQ5oNBrWx6eLxFPAcRybVnUcBzs7O3bB\nMig3xkBrDdd1kaapdauYzuWtilHG0el0bCqX2S1+HRWU13WOGvcUNAy6OnEco9/vI89zGzT7vo8k\nSexpIGsW/X4fQHEK0NCAYnenK8TfA7B1DP4972dZZo3AcRwMBgP0+30YYyyxkKdSv98fmd2qjaNG\njTGojaNGjTGojaNGjTGojaNGjTGojaNGjTGojaNGjTGojaNGjTGoi4A17inIpcrzHDdv3oTjOFhY\nWMDOzo7lSpE2ztqD53nY2NiwhT9gr2WVxblqldxxnKH+DdYzgKJ6zr4Q1jxY6GMdhJV6+XdV1MZR\nYyqMMY1bt26thGE4tYl7Z2fnfL/f151OB6dPn0YURQiCAGmaQmttaeMsBPq+D8/z0Gq10G63bbWb\nXCcu8GqRjvyrIAhs1bzKypU96PxevKep77s2jhoTYYxpXL9+/cXf/OY3r/Z6vZVJCiBpmqLb7eo8\nz1cef/xxLC0tIU1T283H3V52+0VRBNd1EYYhlpeXkaYptre3reFQDYQ9GOJ1QSmFZrM5xK5lpZzU\n9irtvWpk/P0o1MZRYxpWPvroo1ffeOONl9944w0t3R4uQoJcpS984Qv4oz/6Izz55JPwPG+o+65q\nHHSzgiDA7u4u0jTF5ubmPrdIukwUeGs2m2g2m3Acx/6s2uMxyjiqREPSXepOwBoHQhzHutvtrnz0\n0Uc6iqKhnm0JpRTu3LmDLMvw6KOP4tixY3j44YcBYJ8RjYNSCnfv3kUURbYxicbAhc6YgSdDEAT7\n2LjSrZJfqyeHNJ5RqI2jxkSQ/Ke1tqRAKWxAKKUQBIHtr5BMWdLW5bUEH4s/p4AbXSTGJ/JnvJbM\nXonq4/FUIPu2enJU4xKJ2jhqTAUbk+g2yQUnkSTJ0H1micjUHXWC0CWSWSfKcrItlsxdGsSoDBNj\nGv4eGD4xRrlNEqNOj7rOUWMi2G/BhVs9MeTPKLrGU0JexxNhnCoIpXf498w+8XlJcSe9ncbJv5kl\n+yRPiaoBjUJtHDUmgm4VT4Vq7zZ3a5k5omslG4ik1A6AfYuUBsV0L7v1ZN95lmVoNBpoNBr2mlGL\ne1QKl69FBt/sBmQcw9NOa43BYFC7VTUmgxkkYHyPNsFFxv5vXlM1FIlqRql64zXVegezYNLNG1XH\nqJ5QdNPyPMfu7i601jbVTCFpFglr46gxEUEQ7BN3lotSLkgZONMY6JJNkvKcFiDzxGFaFyiMgwbC\na0ZVuquuXRzH9j30+324rgut9ZASIguQtXHUmAgpqSPpGsB+H54uF+MDWZADhrVoiXGpYRlPALAG\nJ1O50yre1Z9xcpMxBs1m055IND4G/XmeF73vn+SDq/FggHpP3W7X9l5XTw5jDHZ3d5FlGfr9vo0T\n6LIAGLmzS1Qr4FzI/Fs+FouC8gSTWapxaDab8H0fu7u7APaMhQIPWush8bjaOB5ArK6uNpaWllbS\nNNVylJgUYKMg2+bm5vkoivTx48fR6XQmGgdQuDvHjh2zFXAphMA6g0T15GA1XZ42dNWknhUXNhVL\nZNKAqD5XFEU4ceIEgGHV9jiOEYbh0HtwXbcemPmgQXKlbt26tULin+QykZJx9+5dpGmqwzBc6fV6\nemNjY6JbxZ8/8cQTeO6553Dy5Mmhwls1oB/lUjHly4UrjYNUE77Oa9eu4erVq4iiCGEYThV3u379\nuhWJ4zBOFjfDMBxSY6zHnj2AiKJo5caNG6+++eabL7/33nuamaRer4djx47hzp07aLfbCMMQ6+vr\ncBwHX//61/HlL38Zf/zHf2zdmiqRzxgD3/fR7Xbhui5838f29rZNv1LOswppHA899JDlXnFwJQ2O\n2Srf95FlGa5cuYJf/vKXeP3113H9+nWb9iWqKWOlFL773e9Gzz777P85c+bMD27fvv09x3HQbDZ/\n1Ov1/sTzvP/70UcfvShfW20cDxiSJNEAVi5duqTX19ftYkzTFHfu3IHrutja2gJQuCFpmuLWrVt4\n6KGHcOrUqamPf/LkSURRhI2NDRvglnq4U/82TVNrSMDwWIGqCNvx48dx/fp1rK6uYn19HZ1OZ+ha\nYO9kY3yS5/nauXPnfrizs/PzJ5988relCuMtAO8BuFV9PbVxPOCQ9QA2/8iZFRRNG6UqeL/BDBbj\nBa01ms0m2u02Op2OTSVL45BFSqVUlOf51aWlpS0AW+Kht0Y9X20cDyCq7hAXXZXGIScqfZJJrrMw\ncmeBXPjkXwVBgEajgTAM7TX8WjWOg6I2jgcM0i+v9mZwEVULa+MKbFWMIhZWff9PglG1DRq0TPvK\nAL82jhoHglzo1Z1WLkD5/SdZ3Pfq5BhnGLyNMuBP8vpr43gAMcpFYmVY9kyMYr9OAg1sVDHuXhhI\ntX+EVXO6WKMasGRQflDUxvGAQaZTq6fEOMxCBx+He3Vq8HWMosvL+9Xfs3L+cWKmmrJew0LGHCLD\nM7PPXl2YxCd1y0Y9jhy9zIyafK3V+7VbVWMq2u024jhGHMe4ffs2gL1qNRdaGIbwPA83b96EMWbs\ngJhqAMw6Aykm/Dvu3qSUVKknNEbWXIgqh4rDbsIwhO/7aLfb9j1praeefmmaWl7VLKiN4wjDGNMA\nsHL9+nXNhTIJcRyj1+ud7/V6emFhAcvLy+j1enbXbTQadiil4zg4duwYPM9Ds9kExRXK55Wvwd6X\nrazkP8l+CxkbyD4OIggCO0hGunuSSsLbxsYG8jxHq9UCAMzy/o8fPz79QxWojeNoY+U3v/nND/7n\nf/7nXBiGUwt15e6rt7e3V86fP4+zZ8/ascZaF3pt3OkB2H6Hp556CidOnEC32x16rOp9GoBSys7/\nG3U9MNzkxJ6P999/H1evXkW320UYhkMnBk8NpqLjOEar1cJLL71k+WBTTo5oZWVlzfO8aJYPFqiN\n40hjd3dXv//+++f+/d///cK4ccESVB88f/48XnrpJTz11FPWlWq1Wtjd3R1ixZJkSILe3bt3Jz5+\nmqa2KKe1tqIMwB4xcZSMDuklP/3pT/Ff//VfuHnzJhYXF4fIhnwMtrCeOXMGf/InfxJ94xvfWFNK\nRfKEGQVjzFq73X5tY2NjbdbPtzaOI4wgCNDr9XDt2jUAmGoc5DctLy/j5MmTeOihhwDATno9fvz4\nyAXW7Xaxvb1tpXmI6k7NBicqGFJ1hJAdgtUmKKUKzapLly7h2rVrOHXqlOVlkXQIAGEYYnt7G3Ec\nw3GctbNnz77iuu4QYXAMosuXL6+dPXt2OsmrRG0cRxjUiR3Fdh2FPM/t7G7yp/gVwD6auDQUujfE\nqEr4uAzVpH5uXptlGRYWFixfqtPpAIDV2GUn4sLCAjzPo8hC1O/3L3Y6nXdn+gAOiNo4jjCkKscs\ntQiqawB7wS3jA4nqwifJjyfPqNrIpHRplVbCukM1zcpe9TAM0Wq1bC83eVNKFcJxrVYLjLFm3Rg+\nDmrjOOLwfd+yUeUpMArGGLvr+r6/73dSZpMLliOL2YTEaw/SwCS5WrxOGgWr3HTL+DhyXMBgMECj\n0UC320UURVhaWrLGclioi4BHHEyfznJyOI6DRqOBfr9vA13ZPTeKZkFDke2xEjQEBva8RgqyEUzp\nArDGABSnWBzH9jU5jmMzYzSMVqtlTwoayUFcyo+D+uQ4wojj2AqosWFpEjj8hRkpYG83n0bcYzA9\nruJcpZJrrffVJ2RqVz63ZP1WTx55gjQaDeR5buWC2Dt+WKiN4wiD7axU5Wg0GhOv397etlXrUYNe\nRlHO+Tt5Le9Xf05NKBYUqXVV7QthRx9nd/BUYj87+zTYKsvXEMfxUKWdJ85hoTaOIwzSQFjIm+Za\ntVqtoRoG3R+eCFVpHDkMRv4cGD30pd1u27pINdAm5GKn8UjJUb4fnghM41Y5Ux+HZXtQ1MZxhMFd\nkyMCprlV3W7XukfVBSyzR6Oo4VWd21Gp2mqMIac50a3iz2iYPDl4X6oYSqOQNRK6VfeS8TsKtXEc\nYbTbbRuUMtMzCTdu3ECr1UKv1xtSNAcwtoYhFyaD/3ExR6/XG6qQ8zGlqqAUdCaoVsJYiIsf2JMT\ndRzHalQxJqnqVN1r1MYxZzDGNKIoWkmSRFeDTckrAoBer3e+3+/rXq9nxRAmodls2kC5yocqn9t+\nlUW/qqwnIU8OpRRarRZ837cMWdlHIRm7dNeyLLOjyuTU1zAM0W637fOSlkI3jHFWNR19r1Ebxxxh\ndXW1ce3atRc3NjZe7ff7K1KVjwuHPrnWGp1OR/u+v/LMM8/g5MmTVlJnHPr9PrIsw+nTp6G1Rp7n\n6Pf7doHyRJBCasyCpWk6VIwb5YKxyHj37l3cunULg8GANA8r1lw1DioXbmxs4OGHH8YTTzyBJElw\n7NgxazSU7GGsVJIQo6WlpbVWqzUzkfCgqBUP5wjGmPM//vGPf/Sv//qvLx8/flxLmofnedZAZF3g\nS1/6Ev7gD/5gSJ92HNI0tRkuAHaXZhFR/r10Wyh9M63ISKbs6uoqfvzjH+Ptt99GEARot9tWDpSZ\nJmBvtrjWGsvLy1hYWIiee+65NcdxosFgYI2WmwJHNiul0Ol01o4fP/7aYDD42UH4UgdBfXLMEa5f\nv66vX7++cunSJd1sNjEYDIamr9KNYXzRbDYBFEqBDGYnganTNE2xtbWFXq+HXq9nXRdJI+HPAFhD\nnJYqppHduXMHH374Id566y0AQKfTsY8lm5poHI1GA8vLy/jrv/7rtaeeeuoVz/MuAhhZw2CGzvO8\naGNj40BEwoOiNo45wtLSkpXZ7/V6tsGIxkG3hSfK8ePHYYxBp9OZKXNDH52xhAzi5QwN2WchqeuT\nKOESeZ5jMBgMVbmlGJvs+JNFvyiKojzPD41IeFDUxjGHkHMi6PcbU2jRkgYu+xySJLEuyCTQXyd9\nhFwrLl6Cz0djkLHPLAjDEMeOHbNC0p1Ox44Vk+rrvN9oNLC4uHjoRMKDojaOOYOcF1FNzXIxj/ob\nqqRPgkzL8ibrF7JAJwNyXjcNNFjWNfj6ZVWeQXaVg8WM1GHSQQ6K2jjmCFwc1UUiXQ9mbxgHcIdn\nwD4J0gikW8OFK42rym+aBYw5eEowU0X3rVrZrhIf+Tfzgto45gi7u7s2rpALhWlTukDVscWS+j0J\nzD7RGLhgJUFQPl617jEL+DrpAjKNK3lQssbClC5drfrkqDESXEzS7ZFGsbOzA2C/SDIAy2maBBmQ\ny1OEblOVfiLrGbME/FKcgc/B7kNK6lRPDvn8h00HOSjqfo45A0duDQYDG2h3u11LN2fRjgE4pW5m\nCZhl74Xcvblz0zh5wrDwFkWz1dlonHxMqWHL1zsYDKwRSj0s2Uw1L6hPjjmDrD3Qh0+SxFbFWSHv\n9XoAYBm5s7gjkjgoDYXgoEhWxeXkVTkzr0pM5Pc8CRj/sHbCKrh8DbyG17PQ98DFHOQL6Wqz8j1C\nFEWR1npNKXVoBaGDgu9ZKaU5qniGBXzecRwNFEZCV0MaAuVz0jRFq9UaWuDTdl7Jd6JbJjlTrGXI\nxU2WrHz94zhWBHvOKQDBAJ1uXbUHXfZ2zBMO3TiMMY3bt2+/eOnSpVdd112ZdO20dCHTilUG6vHj\nx3/7yCOP/C2AWSRa7guiKFq5fPnyD3q93jn2Koz6z5fvI8sy7fv+yle/+lU7T487PIPawWBgXaiF\nhQU89NBDdvHNMn2JLg9ZsKMkcphFYuGu3+/j+vXrAPZilGoRj9km13Vx8+ZNnDlzBl/72tcAwCYR\ngiAYosYznVueLtHy8vKa67qHxpU6KA7dOLa3t1fefPPNV//t3/7t5Z2dnYknxzTjkF1gzMN3Oh08\n//zz+g//8A/PG2Pm4vQwxjQuX758/ic/+cmF1dXVczToqhZsea29eZ6HCxcu4K/+6q9sYY7vk/QN\nmR5NkgSnTp1CkiS4efPmTPQRujGNRmNo0iuAoQUuNWo//PBD/Md//Afeffddm4ni76RxUwb01KlT\nePLJJ6Ovfe1ra57nRXzOcY1TJU197dSpU691u92ZRdcOG4duHGma6uvXr6/893//t6Zw8TjMmq2Q\nO+rS0hLa7fbKV77ylb9BcXLMw+mx0u/3/+bixYsrv/rVryyfSRqHdHG4aIIgwLPPPosXXnhhSNSA\nfy+bhYBCpC2KIvT7fSs4MAl8DFLLSUDkAqf7JBuOgKJJ6r333sPrr79uG6tkwxLfD2nlX/rSl/DC\nCy+sffWrX30FwMU4jq2A9TgEQRABmIvNjTh04+AHNq1ABUz3mVl9lZmWsm9Z+76/AuBQYpqPAe15\n3kqWZZo7MXftalpUUr/p0sgYIIqiIdYsjcV1XQqbWVdllhkUUq9KvgZCVsOly9Xv94fqIHS9pLHL\n7JTWOgqC4KJSai54Uh8H9yUglwzMSZgloCTviE0796Nd8mMgyvN8Lcuyc3meaxb1qnUD2eRDVQ02\nLrEjTmaIZGMQABtrMPU6za2Si1s+bpUIyK+kjVMxnTdq4PK18zGBoqGK2al5yjx9HNyXOgd92epx\nfZACE7BHyJNMUekbz9F/xprW+odZlq0xGJWztUdpOvH1s+jH3zHBJzNF1UC6eiqNu8mAW/KoeFow\n7qEh0wiku8Zr5SnBn9FDkOMKjjLmqs4hF9Aobk+z2bTcIkk9yPM8UkqtlX7r3IALkWlRtqeOcq1k\nvh/YS6tKAp9cxPw7AEN91ZNARq90gWTcIIt4NDi+9qpbPGpDk6+LMchRxlwZRzVfX91ZJaeIO17p\nftzyff8f7969e+tTeeEV9Pv9UwC+63neKaYvZR+DNBC5EcgThX8zivskUa0ZTAJPWvkZyscnpDKJ\nFD0Yt2kRUsrzs4C5M45RgSK/Mo1ZVezL8/xUkiTfPX78+OsAJjdS3weEYXjL87x/zLLs5SiKFmSm\nqrq7ypiDAgJ0rcYV26oxg6xQTwKTA1WCIcHTShqvvPGzp4FNSjB8FjBXxlGlTFfBY1ryg0g5IMVi\nHqCUGly5cuWqMSYCYBmqwGjqhey0GyWVQ+Ni/CEXn9zNZymiVmMO0lPkaVI9ySYVGGXsU417jjrm\nyjgI+sL8Wq0S073if4LWei0Mwx9qreemgATsKZdL374aL8hF2Gg0rMy/bEutNhuNc1tmSeVWXalR\nsUGVOSv5UZIsyNNQamDR/Z23rr6Pg7kyjnGUaWC44V9mWIS/rOM4Pjft9DDGROvr6/e8Md+UwytR\n1louX758HoDO8xy9Xg/9ft8OkKzGHDQOzrWT3YByJ5ZBujwFDtLCChSf82AwGHoNDL593x/Sv+Jn\nHQQBms3mEAlRCiWQvQBMTykfFczVu6ge+5LGoFRBwGNvg+ww297eXrl58+b30zSdaBnlf+Ca4zg/\nXF9fv9psNmdSsODCv3jx4tgi4+XLlx+Nouhv0jRdCcMQu7u7utPprJw9e3aoZjDJONI0xeLiog3e\n6e7I+ATYk8mUnxM/v0ngZxbHMba3t7GzszNURAQKF5DsXBrFzs4OBoMBlpeXbR0D2Ds55PPmeY6F\nhYWo3W7PXfbwoJgr4+BiePjhh/H444+DbFbJJJUK3eQI3bhxQ//whz88R86PTHlKN6Z8nHNpmp67\ncOFC9J3vfOe3Fy5cmEpYjKJo5cMPP/zBG2+8ce69994DsDc3gtmoLMt0EAQrjuPojY0NnDx5Ei+/\n/DJOnz6N3d3doTTtOFCZ/OrVq0MuJF0fOcyFn0Gr1cLy8vK+qvcoUAbn2rVr+Pu//3u88847OHny\npK1t8LMjQ9bzPPR6PSwvL+PP//zPo06ns+Y4ztgFn6YpR5attdvt1y5fvjxXbu5BMVfGIeUeO53O\nUB+AJOHxPv8jb926hfX1ddy5c2eog64a/JY7nfY871xpVHjsscemUk6UUlopde6dd9658Otf/xpA\nsQtTDZyxRBRFVkLn2WefxbFjx/D000/b7NO0mCCOY3S7XfR6PXS7XZvJIueJ8YuU9gf21EFmCciT\nJMGtW7fwwQcf4K233sLi4uIQ90sWLbXWVnZTKbX25S9/+ZUsy8ZuJIwxfN+PtNZrp06dmhue1MfB\nXBmHdBck+5O/A4aZnGSp5nlu+68ld6hqHNKP52McpFBF1wfYc1Ek34uLjA1IFEiWhj0JfD+8yfZR\nmfKtujKSQj4JzHbRUOXwG/n58nfMkPm+j6Wlpch13Yue5x1ZrtRBMVfGwUXGRUjeEP/zSLSjCAFd\nLKZAScir9hsAe43/wHD25yAZFe6i0oilCDPdnWqxjMYxS6AqFUXYtiqzWTTIqss4C+TGwQA7DEPr\nVjHlLLNQn6Xs00ExV8Yhg2+Ci0DSqmkUsr5BTk/Vrarm4blIZ2kMqoJGywUm5+rJRSRT0MDs2Ru+\nNs7aYA1C0jv4fqq9EbNA/k01iJYp8jzP7YlBw2R89SBhroyjuuMyc8WvXPzMVklRYi6sSTEHfyZo\nJ2i32zO/PrmzAtinFigDWsY4PPlmUQ2s1j5ohHweFuNm5VJVQSOVnw2NUZ5SPCF4wnI2eH1yfMqQ\nhTPudFw0MiPDhUhXp0parLpVBF036kId5D9cKnXwsaRqBhcvBaDJVJ0VfOyqphSNWQ7HBPbPx5jl\n9TMmolyO7N2WqWW+LxoL21wfJMyVcfA/aVyAyZlzciyvXFASo3bVKg9pWoBcBf9GcpPk62RaV7qB\n8nmnLeBqYVOOGxgMBraHhW5llV81S52Dk5fCMLStsjR6GgQTInyvNPIH7eS4L/0c3EWl+yFjAnlC\ncHeU/jUD7X6/b/lTbMIB9nrLZY0DGJ5IRIMjbZvPMQuYOZIZr+ruSsUO6j9xLDCwXxxt3I2vuUoz\nkURLOX211WrBcRz0er2ZT47NzU37+TiOgzAMrbSPHJEsTwvXdYeGWD4ouG+dgDIvD4ympbPgx8Xs\n+77tkya9ghksqbHEhTvu9ODzDgYDNBoNa1izcJEA2DiD8QOwd8oxuJfuFVOkVSOdFnPIHXwUc7b6\newq8tVqtmYxDKYVOp2MX+87Ojv1MlVJD8jtaa7tByVTvg4T7Yhzsga7u1FXXh0GfrCEwuGVxTf5H\nMViVgTkhq+mEpD1wkc3qKgwGA7uDDwYD+14YZyil0Gw24TgOut2uJUoCs/c58PFFNX8oucD3zeq5\nzDJJ1u44sEOPNZkwDNFqteznBWDIpQOGVQkfNNwX4yDxbtqH3O/3rREkSWL9YqAwsH6/bzM3rAMw\n/uAJIzlH0nUDCuPo9XrWz9Zaz5Stovwm3bKtrS37XDJ43tjYgDHGDp6hwR4kvuH7kworNAJmxiTZ\nTyYkpp0eNCrZN9Pv963LS0YCjYifEz/rBw2HbhxxHFsto2m7dJZlWFhYQBiG++IQ9ldzcXBH4xDI\nVqs1VD2uMnoZaDJ9G4Yhtre3da/XO2+Mwe7urjU2ObW13W6j1+udD8NQ93o9O6oYwFC/ted56Ha7\ndpFy1JcMcqedHDQoGgdPPxoh+VVSUIFF0Vken6+32+1y4OY+oic/W6ltFQRBFMfxGoAjTSQ8KA69\nI2UwGJwnaW/atNPyKNcfffTRypUrVzTlYLgYqv3T3LHDMEQYhkPZIl4DDBcSPc9Ds9lEq9VCGIZR\no9FYa7VaEbNAFE+Tqhrdblc3Go0VAPrYsWP2hNNaW+p3nueWdRtFEU6cOIFnnnkGp06dGmpPnQQZ\nl0iiJb/n65cu5+rqKj744APQcGdB+RqjPM/XXNeNaBg8mXkqMh5ZWlo4GypqAAAfbklEQVRae/75\n5197/PHHf6bmSFfqsHHoJ4fWeu2pp57625MnT+qlpaWx13HX3tnZOf8v//Iv33/vvffOra6uAhgO\n3qXiSJoW438///nP4/Of/zyWl5dHUr1lqpN++dWrV/GLX/xCX7ly5Ryfn5kwJgK01oiiCN1uF888\n8wz+7u/+Dl/84hftY8lUJ+ks9P+5Q+/u7tr4Zprb4/s+FhcX0W63rTFJAx8MBraXggH0xYsX8Q//\n8A+4ffv21IGWrluMIHvuuefwZ3/2Z2vPP//8KygZyfLU5AkfBAF2d3eR53m0sLAwV4Jr9wOHbhzl\nBzqzCmEURQjDMJIBKV0HzrKmkXS7XURRhDRN0el00Gq1hubOVV0r+s5MD7MgBuzfqSXrN8synDx5\nEru7u/YxqQwoi3UyYNZa486dO+j3+1ZZcNrJ0e/3rWGUn539nUxo8LmZddrc3EQURVNT047jYHt7\nG1tbWwiC4MiLrh025qoICBTTjZjSBYZZuHLH5s8YH3AgPOMTWbCTO600uOpipdHR7+/3+9Ba27HE\nNDqZFJDGJMmN3OWZTaoG5KNS2aSi87FkrCSDel7Hk7PKEhgHWWStMR1zZxw1Ph6q1foanxy1cRxh\nVLNyB6XD1JiM+tP8DKA+NQ4HtXEcIVRjpFE1nRr3DrVxHFFUaeu1cdx71DHHEYY0DJnFq3FvUBvH\nEYc8MerT495ibrca2TI7az+EbGSqkg6lALKsHcjvSc1gvULWVaSuk3x9UoVRgvUN2cNSbQPm38mY\ngXR8SU9nH7lSRd96v9+31+7u7mJ5eRnAHmlx3I0F0jAMozRNHziu1EFRnxwHwM7ODnZ2diy9REpo\nVqWDjDF2EhIw266ulMLq6iouXbqEnZ2dITIgDQMojKLT6bBoGf3pn/7pWq/Xi6ZV4NvtNtI0xfLy\n8tqZM2deA3CkRdcOG7VxHADkSpE+zwYrSSPhAm40GlhYWECz2QSw1w05Cf1+H++++y7+6Z/+Cevr\n60NkSmBP1JmnSrPZxLe//e2173znO68opS5Oo9+zZ97zvGhjY+OB40odFLVxHACklsgmLDllim6Z\nMcaqefDEmKUlt9VqYTAY4ObNm9jY2MCxY8csLQaA5YRRprOkx0QnTpyoOVKHgNo4DgDZRDWuB1z2\nR1TdnGmtpnSjeOp0Oh3LBSOfKssy2wT2oAke3G/UxnFATEsI0DiqVHn+7STICVBSkpO9IjQONj7R\nYGojORzUxnEAjMo2AcN1Bi7mqqbtLNI5nuchDEMrbkCJU4pH93o9q7lF163G4aE2jgNiEoVD9n9U\njUGOW5702HKMG3s48jy3aivNZtOmkKUsao17j7mrc1A/Sar9yRpGVW1c9lSMUkqUvRCyT4ILmD3a\neZ5bVRGpINLv94ekMKXaCNOr7BOpamTJ1zILpB4WP4der4fBYGAVXKRUJx+3PkEOB3N3csidk2Jq\nUkVQdutxd+V1RLV3nPcpXkaROLazVscdqFJlhPUMNl9xNh5fE1Or/F5KBlUF5maVBZWiCo1GA1pr\nKyIRhuGQNnBNODxczJ1xcFFSDofgYmSXn+/70Frv05PliVCd6yG5R9XKOw2PdYpqjzjTtVJuh0VA\nKeQm23OlIqI8+SaBRkkVQ74nqX5encNXu1WHh7kzDrbJyoqzdFek3I0Mgnu9HhYXF+3j8O9l+pSU\nEGaB2FNOA5C6UHSL+FyU4WRrrhzMyVOB17AeIYt+0mDHge9Vuoqsq7D4R2rLLKrtNT4Z5s44KL0p\nMz5yMI10X7igqU0rRZbpbnCn599S+5U78mAwsJkfKdDG2IK7MuMW6smyP5z0ker8cMYuBI1tElhc\n5Oy+xcXFIXeQzycNR05+rXFvMZfGwZ1Rug5KFdNk+XvGJhQXADDSOPiV4shcyHSBqNEUBIHNAAGw\nogh8DVEUodlsDrlX0n2qvtZRxMlZXCsOjaEyCg1GupXy1HhQpTrvB+bOOEo6xNrTTz99bnl5Wcu0\nZRRFtgYgqRxaa6yurmJ7e9uqg7MQJ+Uz+fMgCLC9vY2lpSVcuHBhqGjHwhpVAYFCzvTEiRNYW1uz\nRprnOcIwtLFHVYWEMRFjiFnAhf7CCy/g7t27NpXLv3dd12auyulP0ZNPPrnm+37Nrj0EzF2qwxjT\nuH379ouXLl16VSm1ImkS3N1lUL61taV/9atfrbz99tv6ypUrNp6QC15muLjoT58+jdOnT+PUqVPw\nPA+7u7s2BjGmkAdtt9twXRcbGxvodDp488030el0cPPmTSilsLi4aHVlGftIijxdQXmqTILv+3jp\npZeiF154Ya3T6USMaxgLcYOgm7m9vb322GOPvXb69OkHSonwfmHuTg6l1MCY1Z+dPPnc9wA1LBse\ny3x+YTC9Xu/87WvXvv//fnTt3JXfflDEJKZMd9KdQZnBMkvFYkYM5C6efuo8zj66Asc1SJIlAMUp\nkxmv1K0qxKbPn38Gly9fxo0bN/DWW2+h1+shDMMhxcNZZPqrfRzV+2EY4itf+crac8899wqAi1Kz\nFxhZz4gA1OzaQ8LcGQcAKHV2ZpXEnTt3YJSKACHNL4yjeMByPgbKEQT53jzzJEmANCuFqk1pHFk5\nQao8BdwiO9Vut+3AmFHGcbD3uN84yhMvAnBRa12zbD9lzKVxHAwBctdDpjw4QQvIcyAvlc2ZkkU5\nk8IJkGYZTJoCykFmFNIcyE2GKElFbaNsKkpTKMcgSDXSJLLBP+foSbeNsc00TGprZTasxnzgM/U/\nMYoYaIyxkZWkc/AapRQU1L606ygquqSnyIE0jCmqA3SqqAbmVUNh8F3TQeYDR9444gBI4SGDiyR3\nkecKeT6symHyMqXqpMiRFSeJAozjIlcOjPJhHAMHpTEYAygXDjK4yoHrKLjOfoo63Sn5/SSMOjWq\nP6vpIPODI28cEqN2e7nYbLNSPjyaIDc8CYbpJdNu8hRi7DHt9U26PytBscb9wWfDOFQOKFMG1HsF\nQBeFy2TgwMBAqQhKRYBKilsJo1zkcGDK6x0DGKNgTAZjMiiTQJlkn3EA2GckkzAqWyWLg7LJqcan\nj8+GcYxAEWvwdBgeLyAr145TGA7pJcWiNftOIGCvAs/bQbNVo3pB5NeD0NtrHD6OvHG0A8DHAJ7p\nw8124AJAaQwo15lTfm1qg3T3LvLcQcOJEXg52k0PmfFxdxBBB8U02CQaIGy24bscSulCKWP7PLrd\n7hBXirP6JEtXyurIAB7A0EnBrzRUOVmpxqeLuTSOVbPaOBOdWdG6LALGuwAC7MYx2m0WxopFubm5\ncz6JUs1xYACscdhFiL3JqSQZkuEbRRFcvyATpvkwN0q6S+yrIF2F8YUcKiNPIxnT8DqZ+iWqAb4x\nRjuOY4d4ArATb6XRcCSZ7/uR1rouBB4C5s44Vs1qo31NvfjB+luvItpacRwFpAMoKPQdwPN9OABy\nA3gK2Ni8o2//7lcrjXQDp8KoPDHKlGpeLEy3NI4sH2ChY+BoFy3s4u6Nq7hsIjh6qegETPZqFlpr\nJINdGGPQaYXY3t7GwsICzp07B2CPQUuKCHWs5PTXKIrstFnZuTfu5MiyDDdu3Fj5xS9+8f12ux1t\nb2/DGIMwDO1zkD1M415eXv7t5z73ub/FAUbL1ZgNc5c3vLl18/x7b/ziRz/76X++fPfGZQ0AgSq4\nUnFQcIwMqeyq6AbcuruJzc1NW/yDKXu4K24VVLFQM6eBPM/RzYqvqSrm8MVZpR88Klplm42CPPj0\nF59Fs9m0bhTbWZVSdsKsJC5ubm7adlvyo6qQsQ3nHrIllr8H9mYW0vCAgov1zW9+872//Mu//L86\nnU5dUb/HmLuTw+1levvG71Z+++u39Ecfvg0AaDgFmzbRftGplxXfu6rYwRvaRSsM0Qq90jjKCjlK\npcAy+DCqIAMOjMHm5hau37xdLGC0Cxo8GmWzUfE4Ji80an0POHbsGL758h/izJkzCMPQtq7K3m4a\nBwBsb2/beYJUD6meHMD+9DPlQCU9n4kEPjb7TsIwxGOPPVbHKIeEuTMOAHAqravkQMWmbEYqF3uW\nFRRvz9XWHSqMg1kfdhMWu26al5Kczl6s4LouPMXBm4FtoMqyDK5XfJ9nRS9Hr9ezzUhsp5WVcRl0\n8zp2Ela7AolqYZGGUHC74iG3jPf5mZCdXFfUDwdzZxwBYjQ8A+3kaHo5XFfBzxNEaQTH+FCOguOU\nqdlSJFznKYLMgVcaA0xculVFLcOhf5UGcFWM3HUQ5BGavoO84cJRhSvjO01EUQRf68LFCQq/vtdN\n0WwWvyONnG4UW2lJp6frxHhjWh951TBkz4lsg2UmjPwr3q/22te4d5g740AQAOVCsaoippS/cehz\nl6IHWTGPW9YhipOjVBExpVulmDEq3JRErFFjDNKsWNRGNwvZnTLYDfy9wJoqg+Q/saciSRIbwLOH\ng01TFIqgju6oOoY0Dp6W7HJsNBq2+y9JEhvP8BqSFGvjOBzMn3GgYMPCUXAaPgZRhCQdQDc1NtAs\nFp1bqv5FXRjHRaY85I6PNC01ncr1p0yZDSrdsCjbhuM04LgLABSi1EeU+si8BjytEXsGiZMhz7uA\nC6RpDmMytHQHSPc6C9lHLsXX2M8tUrJDAg2zNDzJ00W2wSql0Gq1hmZ2ULonz3Ob8q1xbzGXxgHs\n6ca6rgtfFX3fJikWoSq5UI7o8MuyDJgixsGdlsNgZHtrkiQwrlPu/qULg73uPi50DpehlhVPq1Hy\nn8Qs1BIAVviBp0y1gUqekIzDWLepce8xf8YRBDC+j0QppACU4yCHg0GaIvR8KJXDMQkckwFODs8t\n+FTGZMidYqErZoVKQccMTIsaZFDITHEzcAC1JxqXCs2qPM+R5Vm5U2d2B2fV2xpuqWU7jl81ioYy\n6vdKKWu0spgIYMg4syyzJwZ7zmvjOBzMn3Fgf9VYmXIxBuWUozwb2tHHFdksf6T8mqZ7iof03wHY\n73vldTbgRbFLK9+xRkCDkFQRWU3n65FicrOybqvERsZTjGsIaTQ1Dg9zZxwBAOWUJ4HJAGOQqRTK\nVzC9W3DKndtJEiQZkJsEWagBx0Xm8KQo3paqrB2TdxH4IRyvDRPlSPIcgyRFggy+1lBZAmWKImOW\npnBQSvN4QK720r9U/5A0dbpnNCxmkdg5OG5mh9wIgiCA1hrGGCscTReLGTEmCPg40xqsanx83Bfj\nMKurjejMmRWtEw0AMUa7AQFi9Hai83maaXKR4jiGyiIEgY88M4VbxVjBye1iTJIEYRgOPV7VOFwx\n44KBte/7iMvd2fH2xKaVUnCdknlbujPsH2esQYOgwZB8SKPh65TxiDxFqj+T16Vpin6/P9SOK6VI\nXdflcBu9ubl5noXISSCp0RgTra+vr509e7bmY03AoRuHWV1tXFfqxbU3fv6qr7ZXACBXxdPmFfaK\na/qIk1jfvvbrlbbbw8NLHgaDFNkAaDQcuK2iQqycUv3QLSravQzY7ffQT0sJ0PJtGTXcfNRwUqQ7\nA6QI0Gq18NTnn0Kz2cRANYuF3Sh2ac8vAvRGWVzc3uyi3W6j3+/jo48+sm4Od/Usy6C1tosWKBbw\nzs4Oer2eFYCbFnMwhbu0tIR2uz2yQMhioNYa7XYbm5ubKz//+c+/3263pw7MpOEuLCysPfLII68Z\nY2pJnwk4dG7V1s2b59/4xX/+6K03/r+XN+9c0gCQqVIArToBId1Bp9NBvL2O7e1tdPyCopH2N4up\nrGlRVMtNsVPDLwpzNzZ3sLm5ie3dYgTxOOPQKsZgAHiNY/jCF76AL3/zf0UXPn9hzeksRb3eAAiK\nxRM0HCRxjNBrADC4dWNTax2s/O+//390r9fD5ubmHjkxSexilUTELMusQrtM705yq5iyXVxcRKvV\nGoo3yKmikJxk+C4tLe0pqUzAYDBAGIZ4+umno29961v/5/d+7/e+12g0asLiGBz6ydEIXR31dlb+\n82eva3f7gzILVLoRDl2GMrhOdqG1xsNLPk6fPo0TrRxpmgENwHFiZJkL1w2RqJL75LeQphp3ujE2\nt/q4uQW4LqC8FEoBmSnbwUsj8VB87+Up3MYCvvilr6y98I1vvAI3uBjHwJ63V1DkERc1SWTB+f9+\n++3vAzj3/vvv23iAhTkZfM8C6VrJoJ76uMvLywjDcKjizmscx0Gn07Gs3CtXruCdd96x0qGzPHe/\n39df//rXVzQlHWuMxH0NyPcyMXvfD/98fwtqUfGeLSvDtalUeUPR1Vf8TA0dk8YYKKgIWXxReZM1\nokxkoOBGsgOQLgpTu3yOae+/es2o985btaJerXlIwW26bpM/n7kjYc81Dt844hguYrhI4GeFxmxq\nSqqE2ZvaVLBge/DzDK7x4eRdFBWOFDA9qNyBawK4xkVqGoAxyFUOo3JkSiFTQOYAcPdOpLx8Hqe0\nliQvKh65GyB2/JKJNXuNgALUpJAw7phlYQL7CYfVzUBeV00NA3uZqaFajDCQWWKOWQ25xn0+OWzV\n1wzn/Sftnjw5Zqky88QAfXgMNxMpRyHPq48xO92bsQMXmfzK3097/9XHq6J6clRVTaZ+VjO+jxrT\ncR+MI4Yq6tLIoJBDIS0XbV7qg+Sq2NFNudgSuEiVhwQpUjhQ5YJ0sgzG8HqDDAa5AjLl7J0cThFj\nKKUA5ZSGBQAKuRMgRw6jPKRwkcAZm1YefgeinGiGW2n5s3GsWwn+fhzFRO7skxa93P0PchLURnEw\nzF0REJgsmWmMgcFsO+S4RWV/fzB520+8Y496XfLvq+neqhvGr9XY5SCLvnarZsehG0cAlLFDjoHb\nQK5yJHkZc6gyNkBxEhg3B9wAkesj9gLEnosUKZQpqNs67hWngKq4ZArFDUBuFByjyotYkS6bnhwf\nuXFg4CI1DuAcbIFUF3X16yfZveXJUb1mlMGMSlwcNFtWYzI+tZNjKL8PuhL7XYVxC2P/4+1Pau0t\nmtGvYX/8Mf01V+8f1K2ZdF3199X7owzi45xcNWbDoRvHLoAsiaADB3HegDIGjiqHvOQFq9Qpi7S5\n6cFNInhxCJ1FcFMPaZQizxy4vg+YEK6j4aOchRdvwAMQmi5CA4R50S+e5yWV3VFFbKIKLlKUJ/B8\nD8YMkKILx+2Vr3Ay4ngX7Y62/KadnR2EYQitta15yJTuOEzKKLFCLqfQArDTpeQsckm2ZPbsIKJy\ntTHNhkM3jna7Dd93sbu7u0frxnCPN1Txnx1FgNaZ/Y9nmjQ1e30LxhSdewBsl13RGVdMHwAA45hy\nsdB9K56v0WgCQGFsrgvP98oq33T0+0X1naxccrqY1uWQzUmYtijl8E/HcTAYDKzxAcPcK/kzNlrV\n1PV7C28wGJwvK6X3bErQqjGNpShaWdBdDfjnjXK0MQYq75dlubIijqx0F/LSpQI8z4fnN+G4DRgv\nhKtC5KpRvtpCEidzisGXbmsByWAA4yZwgptwo4JKnrlh8WBO4bC5pZH0eqVAg3KQJgbxIJ8pkxvH\nMeK0h52dHURRNCSwIOcPftLZGsYY29NBVi/5VCQwkppfJUDOOnewxuzwrl69+oMkSc5prdccx/nh\nlStXro67mOso4D27sEoVwqC4n62tPboex3/T8wYraRrrfre7cuLECWx175QnR+k/W+4TtaL2aNlb\nW1uIk0IozZQnhVHFwsxLIar+7i76/T601jh79nEc2ymIgqnTLHbWMuA2KOy9h+JECfwWHn74kcgP\ngjVj8qnDJj3Pi5qN5trp06fPGWM02bKyDnHQyU6jwB717e1tOySUvfQ0BtmLTiMF9s/+qPHJ4f3k\nJz8597vf/e4CgHOe550zxoxdLIlb7Ix+VliFV7oJKftTdRNpHMP3oB3XW/HiOzqOY3RvXUYcx1ho\nUypHoajtlRKZqmDbJqb4ereb4dbWTRig3BVLImFWBJ9OULhcvTyD53l49OyzePbFp6KFxfNrjoso\nN2FZDGSvQ7GAUteByQyU6+Gh02fWHnls5bX19Y21aR/SxsbG2vHjC6/9xV/8Be7evbvC3ZyVcSm0\nNgkz0Ev022+/vfLrX/9ar6+vD/V20Ah93x/qFtza2sJgUBNrDwPeO++8gzfffBMAdJ7n5yZdHJeL\nNMhpHMViZ3NRP1cF87NRNAOZ7vVCsrJdsE2Pt9sjMyymLNoZt1DauLO5hVu3dtHrA55X3PIcQA5k\nGaD8wmvaTYHlZY0XXjwTffvb3/75Y49/6bUkza/up4TE4t/yjXtOtLGRztTTcPbs2cHq6urPvvWt\nb32v2+1asl4cx9bPl/c/Lowx5zc2Nr7/05/+9Nz6+jqazeaQXhXjChqilAOi4FuNewdve3sbd+7c\nscHvJEwzjsQpGn5gSp+8u1sGmS20Wi342Y2hjElmZTo1AAMnaKBQXIsRp7vYiYDAAA5cpGkGR3mI\noqK+7nkOelmOZtYGwlO3ji+f/9+9rPWzpRNLW/f6QwIKA8Eh69GWsUTU7/fR7/ctlyvLihNSulqS\nz8XkBXvKa9wbeGzBlNTrccjL7BKvy00+9PMkS+zvB4MBEEV259va2kInzIZODjY7GZQxBSJB/y7o\n574POOWu6LmB7SUPwxCmFFjrdnun7mxufvdzn3vydQCHYhz3A3Ec21Og0+mg3W7bAF0phUajgUaj\nYXtIpATQvYh5agzDo1jAvdh1pAIg1fgYUC4uLsJRSVEJR1F/cErxtUyVWavy76E0PD+Aow0yx0Wq\nmsjcDIlRMNpHYjKY2EXmNoGgA3hN7foLKzGOfn+C67ro9XpWYZGZKRoIU8qkrPP+LP9/bLmdhQdW\n44B1DjuTouzgo3o5O/psT7UQI5BM1mmUqGr+Ps9LanbpRgRBowhG7Wizz3Z1WM4AIUX9k4CnDQP6\nGpNxIOOw7tQYtypX5fGu9q7jLpXnOTLHK84NU7Bwq7kbZYpbZnLkKPo9HHgwbgCDQsxNmbyYCJsX\nxUTkKbI8gcHkAtxRAYt6AIbiinux20tqfZ36nY65YuVyYchF4DgOVEnNUGa4qYgnDa/5rEDGER+X\nfTsKLBbWRcPZcE/dKutCVdwq/jyHX9DNVTmksvSzHFOcIqnJAOQFl7ysmud5ijwrRAYaJoLKc8BJ\n4ZYiDR4SFLNgj75+UxAEIxcvN4tPuqDlyV8H8NNxIONgNVblxVdjU7llMdAtgkSn1JZSaVIG+4X2\n7bRnk4YkZ+iRjJeiyOlnbul2ALZKHPenFrrnHsxWVd0n2Rn4ScHkS532nY4DGceoHgYAtvnI9j2b\nSmxCEQDllVmqIluVlylc7ocOAM9x4PsutPbRMMUumroB0tRBM0uQ5wq5q+C6CgPlwHcB16RwTbJH\nazmioDg1eVpMcMzSHz4L+Hi1WzUbDmQcrAAH5QZWLQI6ZR2CJ0dQiqJp7c9UPeYCcF0XWms0nULD\nNvOKuRnHUFC2M6cohvUM0Gq10GyGkQ4ba8B46stRAOVAwzAEp+MyS3WQZqZxIAes0WhEruuuATjS\nn9dhY8g4ZEONzIezIutmGZ599lk8/PDDNgcvZ9axUEV2Kenc169fx7uXLsGolhU94/NwB6OSRxzH\neOaZZ/BHv//7UavTWsuTLHIcDwYZeruwk1XZ+9DpdHD27Nm1oLHyGqCn8qTmGcaY6Jvf/OZvl5eX\nsbW1ZT8/flbuJ0w6xHGMdruNM2fOrJ05c+a1y5cvH+nP67BxoJPj5MmTeOSRR/DEE09Yl0nOkpDT\nVY0xthmIMpkbm9vWOPj30jja7TYajQaeeOIJfP33f3/tsUdWXsnz9GLBA46BOLBUbkpnAsDx48c/\nE7O4tdZrjz322N+ePHmymKIr3uu9AB/Hdd2o2+3WWrlTcOBsldYai4uL1gB4VMuTgAzSZrOJbrdr\nZ2gnsSn6OfKCSFhcT9cBuHN7C4uLAIyHxc5SdOzYyYtKTRZc+yyhNO5annNOcCDj6Ha7GAwGNmsl\nJ6rKZh/qw5JuTX4Qpxbx5JCiAmzwseOE62xKjU8ZB0pZWBoIYGMRGSyygCddJcYSjUYDJncm3hq6\nBdcJoOABqCnYNT5dHNitkvwnWY8gYU5rbQlunufZRh3peo1SzijaWHvgpFQg/e1Rzz7VONo4kHEw\nK8X5eMMkwb2aRjUFufc3fnlzoVQOwIDqhI7jIgg0PC+A74dwnOaPAH3rnr/jGjVmxIHcKsYLbK5h\nMYmzIcIw3FMMKWMGjiVmy+e4myQpFt1t2fcAnDqMN12jxiwYMg66ONX6hqx78HvOplNKDdUelFLW\nrapORpWniRwbxjiF7aBFYK/OATjy/Rk1ji4O5FYNBoOh4Y9AkZniIBV+pYvF7zkCbJriX40a84Qh\n45AUhaoMZ0EDKdyjZrM5JBHDwZOSC+S6rh3dxd+l6XjiXG00NeYNM50cXLhBECCKIty9e7eQxun1\nhuob0h2jm7S7u4soiqC1RhzvBfK1xmuNecdE46ju5js7O7h06RK2t7cBwPKnKI0p07VAEYwnSYIb\nN25gMBjAcXIU3piddiHiGQeFPGgqbkebZVvjaGOfcVTZn/L+YDDAtWvXsL6+bsWOKaAs07myLwPA\nEDFxVIN/7VLVmEeMPTm4YGksMqPExS6v4+KvZqdYIPR9H1keQTkGxckhbuWosuJW9qC7dadajU8X\nU2MOueBlgY/pWgD2BJHCcFJTSaaIJerTo8Y8Y18/BzEqWB7XPSaNRF7DUwPgJFR3SJ1HlRq7Jgey\nvOxUM15xy1wcZNJrjRr3GnWvZI0aY1AbR40aY1AbR40aY1AbR40aY1AbR40aY1AbR40aNWrUOBj+\nf0gutW5Tol3tAAAAAElFTkSuQmCC\n"
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 坐标x = 0,
坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 2.0,
坐标x1, 坐标y1, 坐标x2, 坐标y2;
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try {
var 窗口 = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx),
按钮 = new android.widget.ImageView(ctx);
var 图标 = android.util.Base64.decode(图标LOGO, 0);
按钮.setImageBitmap(new android.graphics.BitmapFactory.decodeByteArray(图标, 0, 图标.length));
if (H() > W()) {
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.1, W() * 0.1));
} else {
按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
}
按钮.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v) {
Ui(function() {
anniu();
UIRotate(按钮 , 0, 360, 50, 50, 360);
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
坐标x2 = parseInt(e.getX() - 坐标x1) * -1 / 3;
坐标y2 = parseInt(e.getY() - 坐标y1) * -1 / 3;
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
print(err);
}
}
}));
}
主要按钮();
//显示菜单
function anniu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout,dip2px(ctx, 65), dip2px(ctx, 20));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var op1 = new android.widget.Button(ctx)
        op1.setText("长臂猿");
        op1.setBackgroundDrawable(roundBG("#FFFFFF",[15,15,15,0]));
        op1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
            菜单.dismiss();
            anniu();
              if(长臂猿==false){
//长臂猿=true
print("已开启，部分服务器无效")
}else{
print("已关闭")
//长臂猿=false;
            }}
        }))
        layout.addView(op1)

        var op2 = new android.widget.Button(ctx)
        op2.setText("自动躲弓箭");
        op2.setBackgroundDrawable(roundBG("#FFFFFF",[15,15,15,0]));
        op2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
            菜单.dismiss();
            anniu();
                if(躲弓箭==false){
                躲弓箭=true;
                print("自动躲弓箭已开启");
                }else{
                躲弓箭=false;
                print("自动躲弓箭已关闭");
                }
            }
        }))
        layout.addView(op2)

var op3 = new android.widget.Button(ctx)
op3.setText("强制夜视");
op3.setBackgroundDrawable(roundBG("#FFFFFF",[15,15,15,0]));
op3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v) {
菜单.dismiss();
anniu();
if(强制夜视==false){
强制夜视=true;
print("强制夜视已开启");
}else{
强制夜视=false;
print("强制夜视已关闭");
}
}
}))
layout.addView(op3)

var mlayout = makeMenu(ctx, layout);
菜单 = new android.widget.PopupWindow();
菜单.setBackgroundDrawable(roundBG("#FFFFFF",[15,15,15,0]));
菜单.setFocusable(true);
菜单.setTouchable(true);
菜单.setContentView(mlayout);
菜单.setWidth(W()*0.2);
菜单.setHeight(H());
菜单.setAnimationStyle(android.R.style.Animation_Dialog);
菜单.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP,0,0);
} catch (err) {
print(err)
}
return mlayout;
function makeMenu(ctx, layout) {
var mlayout = new android.widget.RelativeLayout(ctx)
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview = new android.widget.ScrollView(ctx)
var pad = dip2px(ctx, 2)
scrollview.setPadding(pad, pad, pad, pad)
scrollview.setLayoutParams(svParams)
scrollview.addView(layout)
mlayout.addView(scrollview)
return mlayout;
}
}

var Thread1=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(true){
if(躲弓箭==true){
if(Entity.setPosition(getPlayerEnt(), Player.getX()+0.5, Player.getY(), Player.getZ())){
Entity.setPosition(getPlayerEnt(), Player.getX()+1, Player.getY(), Player.getZ()+2);
Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY(), Player.getZ());
}else if(Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY(), Player.getZ()+0.5)){
Entity.setPosition(getPlayerEnt(), Player.getX()+2, Player.getY(), Player.getZ()+1);
Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY(), Player.getZ());
}
}
}
}}));
Thread1.start();
var Thread2=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(true){
if(强制夜视==true){
Level.setTime("900");
}
}
}}));
Thread2.start();
var Thread3=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(true){
	if(长臂猿==true){
	play玩家=getNearEnt(5)
      Entity.setCollisionSize(play玩家, 7.9, 6.9);
			}else{
				play玩家 = null;
			}
}}}));
Thread3.start();
function 功能关闭() {
强制夜视=false;
躲弓箭=false;
长臂猿=false;
}
function leaveGame() {
功能关闭();
}