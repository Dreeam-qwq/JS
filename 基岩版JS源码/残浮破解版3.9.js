varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), wg = android.widget, app = android.app, wid = ctx.getWindowManager().getDefaultDisplay().getWidth(), hei = ctx.getWindowManager().getDefaultDisplay().getHeight(), gravity = android.view.Gravity, left = gravity.LEFT, top = gravity.TOP, right = gravity.RIGHT, bottom = gravity.BOTTOM, center = gravity.CENTER, mainView = ctx.getWindow().getDecorView(), view = android.view, grap = android.graphics, lang = java.lang, util = android.util, io = java.io, interface = android.content.DialogInterface, root = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(), iniPath = root + "/games/com.mojang", iniName = "-049592568.ini", shield = ["闪电侠", "超级跳跃", "末影使者", "点我使用展示功能", "跳跃信标", "entity"];
variVBORw0KG = "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\n"

varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function主要按钮() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var坐标x = 0,
        坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5,
        坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                var窗口 = newandroid.widget.PopupWindow();
                varlayout = newandroid.widget.RelativeLayout(ctx),
                    按钮 = newandroid.widget.ImageView(ctx);
                var群 = android.util.Base64.decode(iVBORw0KG, 0);

                按钮.setImageBitmap(newandroid.graphics.BitmapFactory.decodeByteArray(群, 0, 群.length));
                按钮.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 8, ctx.getWindowManager().getDefaultDisplay().getHeight() / 8));
                按钮.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (悬浮窗 == false && 解锁验证 == true) {
                            menu4();
                            悬浮窗 = true
                        }



                        if (悬浮窗 == false && 解锁验证 == false) {
                            注册机();
                        }


                    }
                }))




                按钮.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            窗口.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                layout.addView(按钮);
                窗口.setContentView(layout);
                窗口.setWidth(dip2px(ctx, 50));
                窗口.setHeight(dip2px(ctx, 50));
                窗口.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                窗口.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
            } catch (err) {
                print(err);
            }
        }
    }));
}

var屏幕高度 = ctx.getWindowManager().getDefaultDisplay().getHeight();
var屏幕宽度 = ctx.getWindowManager().getDefaultDisplay().getWidth();
varGD = android.graphics.drawable.GradientDrawable;
var颜色 = android.graphics.Color.argb;
var线性布局 = android.widget.LinearLayout;
var按钮 = android.widget.Button;
var文本 = android.widget.TextView;
var点击事件 = android.view.View.OnClickListener;
var布局参数 = android.widget.LinearLayout.LayoutParams;
var输入框 = android.widget.EditText;
var获取硬件 = ctx.getSystemService(android.content.Context.TELEPHONY_SERVICE);
varIMEI = 获取硬件.getDeviceId();
var随机数字 = Math.ceil(Math.random() * 88888 + 10000)
var密码 = IMEI / 3.1415926 * 100000000 + 2
varpath = newandroid.os.Environment.getExternalStorageDirectory().getAbsolutePath()
var解锁验证 = false
var当前锁定玩家 = null
var长臂猿 = false
var骑玩家 = false
var自瞄 = false
var免费 = true
varMv = false;
mv = 0;
ts = 0;
fk = 0;
bs = 0;
Nn = false;
sd = 0;
kp = 0;
煤 = false;
铁 = false;
金 = false;
钻 = false;
蓝 = false;
红 = false;
绿 = false;
英 = false;
刷 = false;
mn1 = 0;
mn2 = 0;
mn3 = 0;
mn4 = 0;
mn5 = 0;
mn6 = 0;
mn7 = 0;
mn8 = 0;
mn9 = 0;
mn10 = 0;
mn11 = 0;
mn12 = 0;
mn13 = 0;
mn14 = 0;
mn15 = 0;
mn16 = 0;
mn17 = 0;
mn18 = 0;
mn19 = 0;
sc = 0;
数量 = 1;
生命 = 10;
状态 = 0;
时间 = 10;
等级 = 1;
效 = 0;
效果 = "";
EXH = 233;
附 = 0;
附类 = "";
魔型 = 0;
yxx = 0;
yxxx = 0;
tm = 0;
vz = -1;
tips = 0;
hzb = 0;
zzb = 0;
Wy = 0;
Hy = 0;
var自瞄显示 = false
var脚下方块 = false
var飞行 = false
var回弹1 = false
varspeed = 10
varentity = null;
varentity2 = null;
varplay玩家 = null
var黑洞 = false
var长臂猿 = false
var背后自瞄 = false
var隔空显示 = false
var设回显示 = false
var药水 = false
varradarPic = grap.Bitmap.createBitmap(hei / 3, hei / 3, grap.Bitmap.Config.ARGB_8888),
    radarShow, radarWin, state = 0,
    lenZ = radarPic.getWidth(),
    lenX = radarPic.getHeight(),
    radius = lenZ / 30,
    speeding = false,
    running = false,
    players, flashing = false,
    home = null,
    getMessage, mode = false,
    da = false,
    d, 血量 = false; //暗杀原版代码@我的所有编写
varwin1 = newandroid.widget.PopupWindow(ctx),
    winsee = false,
    win2 = newandroid.widget.PopupWindow(),
    win3 = newandroid.widget.PopupWindow(),
    联机 = newandroid.widget.PopupWindow(ctx),
    传 = newandroid.widget.PopupWindow(ctx);
var悬浮窗 = false

functionload(文本) {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            android.widget.Toast.makeText(ctx, 彩字("" + 文本), 0).show()
        }
    }))
}

function彩字(text) {
    varcolors = [
        ["", "&nbsp;"],
        ["\n", "<br/>"],
        ["§l", "</b><b>"],
        ["§m", "</del><del>"],
        ["§n", "</ins><ins>"],
        ["§o", "</i><i>"],
        ["§r", "</font></b></del></ins></i>"],
        ["§0", "</font><fontcolor=#000000>"],
        ["§1", "</font><fontcolor=#0000AA>"],
        ["§2", "</font><fontcolor=#00AA00>"],
        ["§3", "</font><fontcolor=#00AAAA>"],
        ["§4", "</font><fontcolor=#AA0000>"],
        ["§5", "</font><fontcolor=#AA00AA>"],
        ["§6", "</font><fontcolor=#FFAA00>"],
        ["§7", "</font><fontcolor=#cccccc>"],
        ["§8", "</font><fontcolor=#555555>"],
        ["§9", "</font><fontcolor=#5555FF>"],
        ["§a", "</font><fontcolor=#55FF55>"],
        ["§b", "</font><fontcolor=#55FFFF>"],
        ["§c", "</font><fontcolor=#FF5555>"],
        ["§d", "</font><fontcolor=#FF55FF>"],
        ["§e", "</font><fontcolor=#FFFF55>"],
        ["§f", "</font><fontcolor=#FFFFFF>"],
        ["老婆", "</font><fontcolor=#66CCFF>"],
        ["下划线", "<u></u>"]
    ]
    for (vareincolors) {
        text = text.split(colors[e][0]).join(colors[e][1])
    };
    returnandroid.text.Html.fromHtml(text);
}

function创建文件(路径) {
    newjava.io.File(路径).mkdirs();
}
function存在文件(路径) {
    newjava.io.File(路径).exists();
}
function保存(路径, 数据) {
    try {
        var文件 = newjava.io.File(路径)
        var写入 = newjava.io.FileWriter(文件);
        写入.write(数据)
        写入.close();
    } catch (e) {
        print("写入:" + e)
    }
}
function复制(内容) {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                varcm = ctx.getSystemService(ctx.CLIPBOARD_SERVICE)
                cm.setText(内容)
            } catch (err) {
                print(err)
            }
        }
    }))
}


functiondip2px(ctx, dips) {
    returnMath.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function传送玩家(x, y, z) {
    setPosition(获取玩家实体(), x, y, z);
}

function获取玩家实体() {
    returngetPlayerEnt()
}

varThread = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                if (当前锁定玩家 == null) {} else
                if (骑玩家 == true) {
                    varx = Entity.getX(当前锁定玩家)
                    vary = Entity.getY(当前锁定玩家)
                    varz = Entity.getZ(当前锁定玩家)
                    传送玩家(x, y + 3, z)
                }
                if (自瞄 == true) {
                    crosshairAimAt(当前锁定玩家)
                }
            }
        }
    }));
Thread.start();

functioncrosshairAimAt(ent, pos) {
    if (ent != null) {
        varx = Entity.getX(ent) - getPlayerX();
        vary = Entity.getY(ent) - getPlayerY();
        varz = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && posinstanceofArray) {

            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63)
            y += 0.5;
        vara = 0.5 + Entity.getX(ent);
        varb = Entity.getY(ent);
        varc = 0.5 + Entity.getZ(ent);
        varlen = Math.sqrt(x * x + y * y + z * z);
        vary = y / len;
        varpitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        varyaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch);
        }
    }
}

function高级附魔(a, b) {
    var级别 = -32767;
    if (b = null) {
        级别 = b
    }
    if (a == null) {
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, 级别);;
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, 级别)
        Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, 级别);
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, 级别);
    }
    elseif(a == 1) {
        for (vari = 0; i <= 9; i++) {
            Player.enchant(i, Enchantment.FIRE_ASPECT, 级别);
            Player.enchant(i, Enchantment.FIRE_PROTECTION, 级别);
            Player.enchant(i, Enchantment.PROJECTILE_PROTECTION, 级别);
            Player.enchant(i, Enchantment.FORTUNE, 级别);
            Player.enchant(i, Enchantment.INFINITY, 级别);
            Player.enchant(i, Enchantment.KNOCKBACK, 级别);
            Player.enchant(i, Enchantment.SHARPNESS, 级别);
            Player.enchant(i, Enchantment.AQUA_AFFINITY, 级别);;
            Player.enchant(i, Enchantment.PUNCH, 级别);
            Player.enchant(i, Enchantment.FLAME, 级别);
            Player.enchant(i, Enchantment.BANE_OF_ARTHROPODS, 级别)
            Player.enchant(i, Enchantment.RESPIRATION, 级别);
            Player.enchant(i, Enchantment.SILK_TOUCH, 级别);
            Player.enchant(i, Enchantment.SMITE, 级别);
            Player.enchant(i, Enchantment.THORNS, 级别);
            Player.enchant(i, Enchantment.UNBREAKING, 级别);
            Player.enchant(i, Enchantment.FEATHER_FALLING, 级别);
            Player.enchant(i, Enchantment.BLAST_PROTECTION, 级别);
            Player.enchant(i, Enchantment.DEPTH_STRIDER, 级别);
            Player.enchant(i, Enchantment.EFFICIENCY, 级别);
            Player.enchant(i, Enchantment.LUCK_OF_THE_SEA, 级别);
            Player.enchant(i, Enchantment.LURE, 级别);
            Player.enchant(i, Enchantment.POWER, 级别);
            Player.enchant(i, Enchantment.PROTECTION, 级别);
        }
    }
}

//安徽
functionmenu4() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        var窗口4 = newandroid.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 30)); //3530
        窗口4.setFocusable(false)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)




        varlayout1 = newandroid.widget.LinearLayout(ctx)
        layout1.setOrientation(1)
        layout.addView(layout1)


        //娱乐.setTextSize(5)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4魔§3幻§2残§d浮|-"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(40)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [30, 30, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 3, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

            }
        }))
        layout1.addView(娱乐)




        varlayout2 = newandroid.widget.LinearLayout(ctx)
        layout2.setOrientation(0)
        layout.addView(layout2)



        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(5)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 3, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


            }
        }))
        layout2.addView(娱乐)


        varlayout3 = newandroid.widget.LinearLayout(ctx)
        layout3.setOrientation(0)
        layout.addView(layout3)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4生§3存|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                menu1();
                窗口4.dismiss();

            }
        }))
        layout3.addView(娱乐)



        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4移§3动|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

                menu2();
                窗口4.dismiss();



            }
        }))
        layout3.addView(娱乐)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4相§3关|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


                menu3();
                窗口4.dismiss();


            }
        }))
        layout3.addView(娱乐)




        varlayout4 = newandroid.widget.LinearLayout(ctx)
        layout4.setOrientation(0)
        layout.addView(layout4)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(5)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 5, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {




            }
        }))
        layout4.addView(娱乐)




        varlayout5 = newandroid.widget.LinearLayout(ctx)
        layout5.setOrientation(1)
        layout.addView(layout5)


        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4关§3闭"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#d2691e"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 4, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                if (悬浮窗 == true) {
                    窗口4.dismiss();
                    悬浮窗 = false
                } else {
                    print("异常,请再次点击启动修复功能")
                    悬浮窗 = true
                }



            }
        }))
        layout5.addView(娱乐)




        varlayout7 = newandroid.widget.LinearLayout(ctx)
        layout7.setOrientation(1)
        layout.addView(layout7)



        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字(""))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

            }
        }))
        layout7.addView(娱乐)




        varlayout11 = newandroid.widget.LinearLayout(ctx)
        layout11.setOrientation(1)
        layout.addView(layout11)

        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字(""))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 30, 30]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {




            }
        }))
        layout11.addView(娱乐)




        varmlayout = makeMenu(ctx, layout)
        窗口4.setContentView(mlayout)
        窗口4.setWidth(dip2px(ctx, 300))
        窗口4.setHeight(dip2px(ctx, 400)) //450
            //颜色
        窗口4.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
            //坐标
        窗口4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}
functionmenu1() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        var窗口1 = newandroid.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 30)); //3530
        窗口1.setFocusable(false)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)




        varlayout1 = newandroid.widget.LinearLayout(ctx)
        layout1.setOrientation(1)
        layout.addView(layout1)


        //娱乐.setTextSize(5)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4魔§3幻§2残§d浮|-"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(40)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [30, 30, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 3, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

            }
        }))
        layout1.addView(娱乐)




        varlayout2 = newandroid.widget.LinearLayout(ctx)
        layout2.setOrientation(0)
        layout.addView(layout2)



        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(5)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 3, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


            }
        }))
        layout2.addView(娱乐)


        varlayout3 = newandroid.widget.LinearLayout(ctx)
        layout3.setOrientation(0)
        layout.addView(layout3)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4生§3存|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#00ffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                menu1();
                窗口1.dismiss();

            }
        }))
        layout3.addView(娱乐)



        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4移§3动|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

                menu2();
                窗口1.dismiss();



            }
        }))
        layout3.addView(娱乐)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("-|§4相§3关|-"))

        //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(25)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 100));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


                menu3();
                窗口1.dismiss();


            }
        }))
        layout3.addView(娱乐)




        varlayout4 = newandroid.widget.LinearLayout(ctx)
        layout4.setOrientation(0)
        layout.addView(layout4)




        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("服务器")
        娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))
            //text3.setText(彩字("§4D§3C§2H§da§ac§bk§0x§6Observer"));
        娱乐.setTextSize(5)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 5, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {




            }
        }))
        layout4.addView(娱乐)




        varlayout5 = newandroid.widget.LinearLayout(ctx)
        layout5.setOrientation(1)
        layout.addView(layout5)


        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4关§3闭"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#d2691e"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx / 4, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                if (悬浮窗 == true) {
                    窗口1.dismiss();
                    悬浮窗 = false
                } else {
                    print("异常,请再次点击启动修复功能")
                    悬浮窗 = true
                }



            }
        }))
        layout5.addView(娱乐)



        varlayout6 = newandroid.widget.LinearLayout(ctx)
        layout6.setOrientation(1)
        layout.addView(layout6)


        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4添§3加§2物§d品"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

                item();


            }
        }))
        layout6.addView(娱乐)




        varlayout8 = newandroid.widget.LinearLayout(ctx)
        layout8.setOrientation(1)
        layout.addView(layout8)


        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4秒§3撸§2功§d能"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

                秒撸();


            }
        }))
        layout8.addView(娱乐)




        varlayout9 = newandroid.widget.LinearLayout(ctx)
        layout9.setOrientation(1)
        layout.addView(layout9)


        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4药§3水§2功§d能"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                if (药水 == false) {
                    print("已开启")
                    药水 = true
                    Entity.addEffect(Player.getEntity(), 16, 2147483647, 233333, false, false);
                    Entity.addEffect(Player.getEntity(), 1, 2147483647, 3, false, false);
                    Entity.addEffect(Player.getEntity(), 3, 2147483647, 233333, false, false);
                } else {
                    药水 = false
                    print("已关闭")
                    Entity.removeAllEffects(getPlayerEnt());
                    //药水功能
                }
            }
        }))
        layout9.addView(娱乐)




        varlayout10 = newandroid.widget.LinearLayout(ctx)
        layout10.setOrientation(1)
        layout.addView(layout10)

        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4飞§3行§2模§d式"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {



                Player.setCanFly(!Player.canFly());


            }
        }))
        layout10.addView(娱乐)




        varlayout11 = newandroid.widget.LinearLayout(ctx)
        layout11.setOrientation(1)
        layout.addView(layout11)

        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字("§4小§3地§2图"))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


                radar();
                windis();
                //getNames();

            }
        }))
        layout11.addView(娱乐)




        varlayout12 = newandroid.widget.LinearLayout(ctx)
        layout12.setOrientation(1)
        layout.addView(layout12)

        var娱乐 = newandroid.widget.Button(ctx)
            //娱乐.setText("花雨亭")
        娱乐.setText(彩字(""))
        娱乐.setTextSize(20)
        娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 30, 30]))
            //娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
            //娱乐.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        娱乐.setWidth(dip2px(ctx, 300));
        娱乐.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {




            }
        }))
        layout12.addView(娱乐)




        varmlayout = makeMenu(ctx, layout)
        窗口1.setContentView(mlayout)
        窗口1.setWidth(dip2px(ctx, 300))
        窗口1.setHeight(dip2px(ctx, 400)) //450
            //颜色
        窗口1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
            //坐标
        窗口1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}

function menu2(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var 窗口2=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx,30));//3530
窗口2.setFocusable(false)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var layout1=new android.widget.LinearLayout(ctx)
layout1.setOrientation(1)
layout.addView(layout1)


//娱乐.setTextSize(5)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4魔§3幻§2残§d浮|-"))
//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(40)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

}}))
layout1.addView(娱乐)




var layout2=new android.widget.LinearLayout(ctx)
layout2.setOrientation(0)
layout.addView(layout2)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout2.addView(娱乐)


var layout3=new android.widget.LinearLayout(ctx)
layout3.setOrientation(0)
layout.addView(layout3)




var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4生§3存|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu1();   
窗口2.dismiss();

}}))
layout3.addView(娱乐)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4移§3动|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#00ffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

menu2();   
窗口2.dismiss();  



}}))
layout3.addView(娱乐)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4相§3关|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   
menu3();   
窗口2.dismiss();


}}))
layout3.addView(娱乐)









var layout4=new android.widget.LinearLayout(ctx)
layout4.setOrientation(0)
layout.addView(layout4)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout4.addView(娱乐)








var layout5=new android.widget.LinearLayout(ctx)
layout5.setOrientation(1)
layout.addView(layout5)


var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字("§4关§3闭"))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#d2691e"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(悬浮窗==true){
窗口2.dismiss();
悬浮窗=false
}else{
print("异常,请再次点击启动修复功能")
悬浮窗=true
}


}}))
layout5.addView(娱乐)



var layout6=new android.widget.LinearLayout(ctx)
layout6.setOrientation(1)
layout.addView(layout6)

//狗屎狗屎

var 自瞄=new android.widget.Button(ctx)
//自瞄.setText("多功能自瞄")
自瞄.setText(彩字("§4多§3功§2能§d自§2瞄"))
自瞄.setTextSize(20)
自瞄.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  

自瞄.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(自瞄显示==false){
自瞄显示=true
bang();
//网速测试();
}else{
自瞄显示=false
aimview.dismiss()}
}}))
layout6.addView(自瞄)




var layout7=new android.widget.LinearLayout(ctx)
layout7.setOrientation(1)
layout.addView(layout7)





var s111=new android.widget.Button(ctx)
s111.setText("全屏吸人")
s111.setText(彩字("§4全§3屏§2吸§d人"))
s111.setTextSize(20)
s111.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
s111.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示黑洞){黑洞按键.dismiss();显示黑洞=false;}else{黑洞杀2();显示黑洞=true;}
}}))
layout7.addView(s111)



var layout8=new android.widget.LinearLayout(ctx)
layout8.setOrientation(1)
layout.addView(layout8)





var 踏空=new android.widget.Button(ctx)
//踏空.setText("玩家管理")
踏空.setText(彩字("§4玩§3家§2管§d理"))
踏空.setTextSize(20)
踏空.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
踏空.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示玩家管理){玩家管理按键.dismiss();显示玩家管理=false;}else{玩家管理9();显示玩家管理=true;}
}}))
layout8.addView(踏空)







var layout9=new android.widget.LinearLayout(ctx)
layout9.setOrientation(1)
layout.addView(layout9)





var 设1=new android.widget.Button(ctx)
//设1.setText("设回传送")
设1.setText(彩字("§4设§3回§2传§d送"))
设1.setTextSize(20)
设1.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
设1.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(设回显示==false){
设回显示=true
设回();
}else{
设回显示=false
setview.dismiss()}
}}))
layout9.addView(设1)








var layout10=new android.widget.LinearLayout(ctx)
layout10.setOrientation(1)
layout.addView(layout10)





var 踏空=new android.widget.Button(ctx)
//踏空.setText("踏空按键")
踏空.setText(彩字("§4踏§3空§2按§d键"))
踏空.setTextSize(20)
踏空.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  

踏空.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示踏空){踏空按键.dismiss();显示踏空=false;}else{踏空3();显示踏空=true;}
}}))
layout10.addView(踏空)










var layout11=new android.widget.LinearLayout(ctx)
layout11.setOrientation(1)
layout.addView(layout11)



var 近穿=new android.widget.Button(ctx)
//近穿.setText("近传按键")
近穿.setText(彩字("§4近§3穿§2按§d键"))
近穿.setTextSize(20)
近穿.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
近穿.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示近穿){近穿按键.dismiss();显示近穿=false;}else{近穿7();显示近穿=true;}
}}))
layout11.addView(近穿)




var layout12=new android.widget.LinearLayout(ctx)
layout12.setOrientation(1)
layout.addView(layout12)

var 远传=new android.widget.Button(ctx)
//远传.setText("远传按键")
远传.setText(彩字("§4远§3传§2按§d键"))
远传.setTextSize(20)
远传.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
远传.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示远传){远传按键.dismiss();显示远传=false;}else{远传8();显示远传=true;}
}}))
layout12.addView(远传)











var layout14=new android.widget.LinearLayout(ctx)
layout14.setOrientation(1)
layout.addView(layout14)

var 遁地=new android.widget.Button(ctx)
//遁地.setText("遁地按键")
遁地.setText(彩字("§4遁§3地§2按§d键"))
遁地.setTextSize(20)
遁地.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
遁地.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示遁地){遁地按键.dismiss();显示遁地=false;}else{遁地5();显示遁地=true;}
}}))
layout14.addView(遁地)


var layout15=new android.widget.LinearLayout(ctx)
layout15.setOrientation(1)
layout.addView(layout15)




var 上天=new android.widget.Button(ctx)
//上天.setText("上天按键")
上天.setText(彩字("§4上§3天§2按§d键"))
上天.setTextSize(20)
上天.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
上天.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(显示上天){上天按键.dismiss();显示上天=false;}else{上天6();显示上天=true;}
}}))
layout15.addView(上天)


var layout16=new android.widget.LinearLayout(ctx)
layout16.setOrientation(1)
layout.addView(layout16)




var 回弹=new android.widget.Button(ctx)
//回弹.setText("虚空回弹")
回弹.setText(彩字("§4虚§3空§2回§d弹"))
回弹.setTextSize(20)
回弹.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
回弹.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(回弹1==false){
print("已开启")
                    回弹1=true
                    }else{
                        回弹1=false
print("已关闭")
                        }
}}))
layout16.addView(回弹)








var layout18=new android.widget.LinearLayout(ctx)
layout18.setOrientation(1)
layout.addView(layout18)

var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字(""))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,30,30]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){




}}))
layout18.addView(娱乐)









var mlayout=makeMenu(ctx,layout)
窗口2.setContentView(mlayout)
窗口2.setWidth(dip2px(ctx,300))
窗口2.setHeight(dip2px(ctx,400))//450
//颜色
窗口2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
//坐标
窗口2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
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

");




function menu3(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var 窗口3=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx,30));//3530
窗口3.setFocusable(false)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)








var layout1=new android.widget.LinearLayout(ctx)
layout1.setOrientation(1)
layout.addView(layout1)


//娱乐.setTextSize(5)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4魔§3幻§2残§d浮|-"))
//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(40)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

}}))
layout1.addView(娱乐)




var layout2=new android.widget.LinearLayout(ctx)
layout2.setOrientation(0)
layout.addView(layout2)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout2.addView(娱乐)


var layout3=new android.widget.LinearLayout(ctx)
layout3.setOrientation(0)
layout.addView(layout3)




var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4生§3存|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu1();   
窗口3.dismiss();

}}))
layout3.addView(娱乐)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4移§3动|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

menu2();   
窗口3.dismiss();  



}}))
layout3.addView(娱乐)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4相§3关|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#00ffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   
menu3();   
窗口3.dismiss();


}}))
layout3.addView(娱乐)









var layout4=new android.widget.LinearLayout(ctx)
layout4.setOrientation(0)
layout.addView(layout4)




var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout4.addView(娱乐)








var layout5=new android.widget.LinearLayout(ctx)
layout5.setOrientation(1)
layout.addView(layout5)


var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字("§4关§3闭"))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#d2691e"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(悬浮窗==true){
窗口3.dismiss();
悬浮窗=false
}else{
print("异常,请再次点击启动修复功能")
悬浮窗=true
}


}}))
layout5.addView(娱乐)



var layout6=new android.widget.LinearLayout(ctx)
layout6.setOrientation(1)
layout.addView(layout6)


var 连线=new android.widget.Button(ctx)
//连线.setText("透视连线")
连线.setText(彩字("§4透§3视§2连§d线"))
连线.setTextSize(20)
连线.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
连线.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(CATGLSCode.tracers_set!=true){
catStartGLSurface();
CATGLSCode.tracers_set=true;
}else{
CATGLSCode.tracers_set=false;}
}}))
layout6.addView(连线)




var layout7=new android.widget.LinearLayout(ctx)
layout7.setOrientation(1)
layout.addView(layout7)






var 描边=new android.widget.Button(ctx)
//描边.setText("透视描边")
描边.setText(彩字("§4透§3视§2描§d边"))
描边.setTextSize(20)
描边.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
描边.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(CATGLSCode.playerESP_set!=true){
catStartGLSurface();
CATGLSCode.playerESP_set=true;
}else{
CATGLSCode.playerESP_set=false;}
}}))
layout7.addView(描边)






var layout8=new android.widget.LinearLayout(ctx)
layout8.setOrientation(1)
layout.addView(layout8)







var 长臂=new android.widget.Button(ctx)
//长臂.setText("长臂猿")
长臂.setText(彩字("§4长§3臂§2猿"))
长臂.setTextSize(20)
长臂.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
长臂.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(长臂猿==false){
长臂猿=true
print("已开启，部分服务器无效")
}else{
print("已关闭")
长臂猿=false
}
}}))
layout8.addView(长臂)





var layout9=new android.widget.LinearLayout(ctx)
layout9.setOrientation(1)
layout.addView(layout9)






var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("相-关")
娱乐.setText(彩字("§4显§3示§2血§d量"))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,150));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

if(血量==false){
 血量=true
  血量显示();                                                                                
print("已开启") 
     }else{
print("已关闭")
 血量=false
关闭显血();                   
}


}}))
layout9.addView(娱乐)





var layout10=new android.widget.LinearLayout(ctx)
layout10.setOrientation(1)
layout.addView(layout10)



var g8=new android.widget.Button(ctx)
//g8.setText("粒子功能")
g8.setText(彩字("§4粒§3子§2功§d能"))
g8.setTextSize(20)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

粒子效果();

}}))
layout10.addView(g8)











var layout11=new android.widget.LinearLayout(ctx)
layout11.setOrientation(1)
layout.addView(layout11)



var g8=new android.widget.Button(ctx)
//g8.setText("复制崩房代码")
g8.setText(彩字("§4崩§3服§2代§d码"))
g8.setTextSize(20)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


var ctx,clip;
ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable( { run: function() { 
clip=ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
clientMessage("刚刚你复制的内容：\n"+clip.getText().toString());//返回复制的内容
clip.setText("                                           ");
clientMessage("现在你复制的内容：\n"+clip.getText().toString());//返回复制的内容
}}));



}}))
layout11.addView(g8)





var layout12=new android.widget.LinearLayout(ctx)
layout12.setOrientation(1)
layout.addView(layout12)

var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字(""))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,30,30]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){




}}))
layout12.addView(娱乐)







var mlayout=makeMenu(ctx,layout)
窗口3.setContentView(mlayout)
窗口3.setWidth(dip2px(ctx,300))
窗口3.setHeight(dip2px(ctx,400))//450
//颜色
窗口3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
//坐标
窗口3.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
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

function menu3(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var 窗口3=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx,30));//3530
窗口3.setFocusable(false)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)








var layout1=new android.widget.LinearLayout(ctx)
layout1.setOrientation(1)
layout.addView(layout1)


//娱乐.setTextSize(5)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4魔§3幻§2残§d浮|-"))
//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(40)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

}}))
layout1.addView(娱乐)




var layout2=new android.widget.LinearLayout(ctx)
layout2.setOrientation(0)
layout.addView(layout2)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout2.addView(娱乐)


var layout3=new android.widget.LinearLayout(ctx)
layout3.setOrientation(0)
layout.addView(layout3)




var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4生§3存|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu1();   
窗口3.dismiss();

}}))
layout3.addView(娱乐)



var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4移§3动|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

menu2();   
窗口3.dismiss();  



}}))
layout3.addView(娱乐)





var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("-|§4相§3关|-"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(25)
娱乐.setBackgroundDrawable(roundRect([hexColor("#00ffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,100));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   
menu3();   
窗口3.dismiss();


}}))
layout3.addView(娱乐)









var layout4=new android.widget.LinearLayout(ctx)
layout4.setOrientation(0)
layout.addView(layout4)




var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("服务器")
娱乐.setText(彩字("――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"))

//text3.setText(彩字("§4D§3C§2H§da§ac§bk §0x §6Observer"));
娱乐.setTextSize(5)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/3,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

   


}}))
layout4.addView(娱乐)








var layout5=new android.widget.LinearLayout(ctx)
layout5.setOrientation(1)
layout.addView(layout5)


var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字("§4关§3闭"))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#d2691e"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx/2,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(悬浮窗==true){
窗口3.dismiss();
悬浮窗=false
}else{
print("异常,请再次点击启动修复功能")
悬浮窗=true
}


}}))
layout5.addView(娱乐)



var layout6=new android.widget.LinearLayout(ctx)
layout6.setOrientation(1)
layout.addView(layout6)


var 连线=new android.widget.Button(ctx)
//连线.setText("透视连线")
连线.setText(彩字("§4透§3视§2连§d线"))
连线.setTextSize(20)
连线.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
连线.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(CATGLSCode.tracers_set!=true){
catStartGLSurface();
CATGLSCode.tracers_set=true;
}else{
CATGLSCode.tracers_set=false;}
}}))
layout6.addView(连线)




var layout7=new android.widget.LinearLayout(ctx)
layout7.setOrientation(1)
layout.addView(layout7)






var 描边=new android.widget.Button(ctx)
//描边.setText("透视描边")
描边.setText(彩字("§4透§3视§2描§d边"))
描边.setTextSize(20)
描边.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
描边.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(CATGLSCode.playerESP_set!=true){
catStartGLSurface();
CATGLSCode.playerESP_set=true;
}else{
CATGLSCode.playerESP_set=false;}
}}))
layout7.addView(描边)






var layout8=new android.widget.LinearLayout(ctx)
layout8.setOrientation(1)
layout.addView(layout8)







var 长臂=new android.widget.Button(ctx)
//长臂.setText("长臂猿")
长臂.setText(彩字("§4长§3臂§2猿"))
长臂.setTextSize(20)
长臂.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
长臂.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(长臂猿==false){
长臂猿=true
print("已开启，部分服务器无效")
}else{
print("已关闭")
长臂猿=false
}
}}))
layout8.addView(长臂)





var layout9=new android.widget.LinearLayout(ctx)
layout9.setOrientation(1)
layout.addView(layout9)






var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("相-关")
娱乐.setText(彩字("§4显§3示§2血§d量"))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,150));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

if(血量==false){
 血量=true
  血量显示();                                                                                
print("已开启") 
     }else{
print("已关闭")
 血量=false
关闭显血();                   
}


}}))
layout9.addView(娱乐)





var layout10=new android.widget.LinearLayout(ctx)
layout10.setOrientation(1)
layout.addView(layout10)



var g8=new android.widget.Button(ctx)
//g8.setText("粒子功能")
g8.setText(彩字("§4粒§3子§2功§d能"))
g8.setTextSize(20)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

粒子效果();

}}))
layout10.addView(g8)











var layout11=new android.widget.LinearLayout(ctx)
layout11.setOrientation(1)
layout.addView(layout11)



var g8=new android.widget.Button(ctx)
//g8.setText("复制崩房代码")
g8.setText(彩字("§4崩§3服§2代§d码"))
g8.setTextSize(20)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


var ctx,clip;
ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable( { run: function() { 
clip=ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
clientMessage("刚刚你复制的内容：\n"+clip.getText().toString());//返回复制的内容
clip.setText("                                           ");
clientMessage("现在你复制的内容：\n"+clip.getText().toString());//返回复制的内容
}}));



}}))
layout11.addView(g8)





var layout12=new android.widget.LinearLayout(ctx)
layout12.setOrientation(1)
layout.addView(layout12)

var 娱乐=new android.widget.Button(ctx)
//娱乐.setText("花雨亭")
娱乐.setText(彩字(""))
娱乐.setTextSize(20)
娱乐.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,30,30]))
//娱乐.setTextColor(android.graphics.Color.parseColor("#000000"));
//娱乐.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
娱乐.setWidth(dip2px(ctx,300));
娱乐.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){




}}))
layout12.addView(娱乐)







var mlayout=makeMenu(ctx,layout)
窗口3.setContentView(mlayout)
窗口3.setWidth(dip2px(ctx,300))
窗口3.setHeight(dip2px(ctx,400))//450
//颜色
窗口3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
//坐标
窗口3.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
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


");




///////////按键算法///////////////

var显示黑洞, 显示冲刺, 显示搭路, 显示踏空, 显示远传, 显示近穿, 显示上天, 显示遁地, 显示玩家管理
var黑洞按键, 踏空按键, 冲刺按键, 远传按键, 近穿按键, 遁地按键, 上天按键, 玩家管理按键

function黑洞杀2() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            黑洞按键 = 移动按键2("❌", H() * 0.1, H() * 0.1, "if(黑洞==false){黑洞=true}else{黑洞=false}", true)
        }
    }));
}

function踏空3() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            踏空按键 = 移动按键3("踏", H() * 0.1, H() * 0.1, "Entity.setVelY(getPlayerEnt(),0.4);", false)
        }
    }));
}

function冲刺4() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            冲刺按键 = 移动按键4("冲", H() * 0.1, H() * 0.1, "冲刺(getPlayerEnt(),3,2,3);", false)
        }
    }));
}

function搭路199() {
    var搭路按键 = 移动按键199("搭", H() * 0.1, H() * 0.1, "if(脚下方块==false){脚下方块=true}else{脚下方块=false}", true)
}


function遁地5() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            遁地按键 = 移动按键5("遁", H() * 0.1, H() * 0.1, "Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY()-1,Player.getZ())", false)
        }
    }));
}


function上天6() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            上天按键 = 移动按键6("上", H() * 0.1, H() * 0.1, "Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY()+1,Player.getZ())", false)
        }
    }));
}


function近穿7() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {


            近穿按键 = 移动按键7("近", H() * 0.1, H() * 0.1, "p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180;y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180;x=Math.sin(p)*Math.cos(y);y=Math.sin(p)*Math.sin(y);z=Math.sin(p);Entity.setPosition(getPlayerEnt(),Player.getX()+x*1,Player.getY()+z*0.03,Player.getZ()+y*1)", false)
        }
    }));
}


function远传8() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {


            远传按键 = 移动按键8("远", H() * 0.1, H() * 0.1, "p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180;y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180;x=Math.sin(p)*Math.cos(y);y=Math.sin(p)*Math.sin(y);z=Math.sin(p);Entity.setPosition(getPlayerEnt(),Player.getX()+x*10,Player.getY()+z*0.03,Player.getZ()+y*10)", false)
        }
    }));
}



function玩家管理9() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            玩家管理按键 = 移动按键9("管", H() * 0.1, H() * 0.1, "玩家列表菜单();", false)
        }
    }));
}




//1




//1
function秒撸() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        varmenu = newandroid.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 30)); //3530
        menu.setFocusable(true)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)


        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3基§2岩"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("7", "0");


            }
        }))
        layout.addView(g8)


        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3黑§2耀§d石"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("49", "0");


            }
        }))
        layout.addView(g8)

        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3末§2地§d石"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("121", "0");


            }
        }))
        layout.addView(g8)


        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3石§2头"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("1", "0");


            }
        }))
        layout.addView(g8)

        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3末§2地§d传§a送§b门"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("119", "0");


            }
        }))
        layout.addView(g8)


        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3折§2妖§d门"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("209", "0");


            }
        }))
        layout.addView(g8)

        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3木§2板"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("5", "0");
            }
        }))
        layout.addView(g8)



        varg8 = newandroid.widget.Button(ctx)
            //g8.setText("隐形基岩")
        g8.setText(彩字("§4撸§3刷§2怪§d笼"))
        g8.setTextSize(15)
        g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"), hexColor("#ffffff")], [0, 0, 0, 0]))
        g8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("52", "0");


            }
        }))
        layout.addView(g8)




        varmlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 250)) //450
            //颜色
        menu.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
            //坐标
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 320), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}




//1




//玩家管理算法


function玩家管理按键() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            varwin = newandroid.widget.PopupWindow();
            varlayout = newandroid.widget.LinearLayout(ctx);
            win.dismiss();
            var菜单布局1背景 = newGD();
            菜单布局1背景.setStroke(10, 颜色(255, 255, 255, 255));
            菜单布局1背景.setCornerRadius(5);
            layout.setBackground(菜单布局1背景);

            //暗杀系统开始




            //分割线

            varbutton = newandroid.widget.Button(ctx);
            button.setText("玩家")
            button.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 255, 255, 255)))
            button.setOnClickListener(newandroid.view.View.OnClickListener({
                onClick: function(viewarg) {
                    玩家列表菜单();
                }
            }))
            layout.addView(button);

            win.setContentView(layout);
            win.setWidth(50);
            win.setHeight(50);
            win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 500, 50);
        }
    }));
}

function玩家列表菜单() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        varmenu = newandroid.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        //Player.getName(uuid)

        //暗杀已终结
        var玩家列表 = Server.getAllPlayers()
        var玩家0 = 玩家列表[0]
        var玩家1 = 玩家列表[1]
        var玩家2 = 玩家列表[2]
        var玩家3 = 玩家列表[3]
        var玩家4 = 玩家列表[4]
        var玩家5 = 玩家列表[5]
        var玩家6 = 玩家列表[6]
        var玩家7 = 玩家列表[7]
        var玩家8 = 玩家列表[8]
        var玩家9 = 玩家列表[9]
        var玩家10 = 玩家列表[10]
        var玩家11 = 玩家列表[11]

        var功能钮0 = newandroid.widget.Button(ctx)
        功能钮0.setText("选择功能配置")
        功能钮0.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                玩家配置菜单();
                menu.dismiss();
            }
        }))
        layout.addView(功能钮0)

        var玩家钮0 = newandroid.widget.Button(ctx)
        玩家钮0.setText(Player.getName(玩家0))
        玩家钮0.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家0
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮0)

        var玩家钮1 = newandroid.widget.Button(ctx)
        玩家钮1.setText(Player.getName(玩家1))
        玩家钮1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家1
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮1)

        var玩家钮2 = newandroid.widget.Button(ctx)
        玩家钮2.setText(Player.getName(玩家2))
        玩家钮2.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家2
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮2)

        var玩家钮3 = newandroid.widget.Button(ctx)
        玩家钮3.setText(Player.getName(玩家3))
        玩家钮3.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家3
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮3)

        var玩家钮4 = newandroid.widget.Button(ctx)
        玩家钮4.setText(Player.getName(玩家4))
        玩家钮4.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家4
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮4)

        var玩家钮5 = newandroid.widget.Button(ctx)
        玩家钮5.setText(Player.getName(玩家5))
        玩家钮5.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家5
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮5)

        var玩家钮6 = newandroid.widget.Button(ctx)
        玩家钮6.setText(Player.getName(玩家6))
        玩家钮6.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家6
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮6)

        var玩家钮7 = newandroid.widget.Button(ctx)
        玩家钮7.setText(Player.getName(玩家7))
        玩家钮7.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家7
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮7)

        var玩家钮8 = newandroid.widget.Button(ctx)
        玩家钮8.setText(Player.getName(玩家8))
        玩家钮8.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家8
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮8)

        var玩家钮9 = newandroid.widget.Button(ctx)
        玩家钮9.setText(Player.getName(玩家9))
        玩家钮9.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家9
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮9)

        var玩家钮10 = newandroid.widget.Button(ctx)
        玩家钮10.setText(Player.getName(玩家10))
        玩家钮10.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家10
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮10)

        var玩家钮11 = newandroid.widget.Button(ctx)
        玩家钮11.setText(Player.getName(玩家11))
        玩家钮11.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                当前锁定玩家 = 玩家11
                if (长臂猿 == true) {
                    Entity.setCollisionSize(当前锁定玩家, 8, 7);
                }
                varx = Entity.getX(当前锁定玩家)
                vary = Entity.getY(当前锁定玩家)
                varz = Entity.getZ(当前锁定玩家)
                传送玩家(x, y, z)
            }
        }))
        layout.addView(玩家钮11)




        varmlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 150))
        menu.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 255, 255, 255)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}

function玩家配置菜单() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        varmenu = newandroid.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var回上页 = newandroid.widget.Button(ctx)
        回上页.setText("回上页")
        回上页.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                玩家列表菜单();
                menu.dismiss();
            }
        }))
        layout.addView(回上页)


        varcht = newandroid.widget.CheckBox(ctx);
        cht.setText("长臂猿")
        cht.setChecked(长臂猿)
        cht.setOnCheckedChangeListener(newandroid.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                if (长臂猿 == false) {
                    长臂猿 = true
                } else
                if (长臂猿 == true) {
                    长臂猿 = false
                }
            }
        });
        layout.addView(cht)

        varcht1 = newandroid.widget.CheckBox(ctx);
        cht1.setText("骑玩家")
        cht1.setChecked(骑玩家)
        cht1.setOnCheckedChangeListener(newandroid.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                if (骑玩家 == false) {
                    骑玩家 = true
                } else
                if (骑玩家 == true) {
                    骑玩家 = false
                }
            }
        });
        layout.addView(cht1)

        varcht2 = newandroid.widget.CheckBox(ctx);
        cht2.setText("自瞄")
        cht2.setChecked(自瞄)
        cht2.setOnCheckedChangeListener(newandroid.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                if (自瞄 == false) {
                    自瞄 = true
                } else
                if (自瞄 == true) {
                    自瞄 = false
                }
            }
        });
        layout.addView(cht2)



        varmlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 300))
        menu.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60, 0, 100, 250)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}




//注册机算法




function注册机UI() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            var对话框 = newandroid.app.Dialog(ctx);
            对话框.setCancelable(false);

            var注册机布局 = new线性布局(ctx);
            注册机布局.setOrientation(1);
            var标题 = new文本(ctx)
            标题.setText("作者残浮QQ");
            标题.setTextColor(android.graphics.Color.parseColor("#FFFF00F9"));

            标题.setTextSize(20);
            varid = new文本(ctx);
            id.setText("你的ID:" + IMEI);
            id.setTextColor(android.graphics.Color.parseColor("#FFFF00F9"));

            id.setOnClickListener(newandroid.view.View.OnClickListener({
                onClick: function(view) {

                }
            }))
            var输入 = new输入框(ctx);
            var宽 = new布局参数(-1, -2);
            varcopy = new按钮(ctx);
            copy.setOnClickListener(newandroid.view.View.OnClickListener({
                onClick: function(view) {
                    复制(String(IMEI));
                    load("复制成功");
                }
            }))
            copy.setText("复制ID");
            copy.setTextColor(android.graphics.Color.parseColor("#FFFF00F9"));

            var确定 = new按钮(ctx);
            确定.setOnClickListener(newandroid.view.View.OnClickListener({
                onClick: function(view) {
                    if (Number(输入.getText()) == 密码) {
                        对话框.dismiss()
                        load("密码验证通过")
                        解锁验证 = true
                        创建文件(path + "/.McStar验证文件』/")
                        保存("/storage/emulated/0/.McStar验证文件』/" + 密码 + ".txt", "null")

                        购买();

                    } else {

                        load("错误")
                    };
                }
            }))
            确定.setText("确定");
            确定.setTextColor(android.graphics.Color.parseColor("#FFFF00F9"));

            var退出 = new按钮(ctx);
            退出.setOnClickListener(newandroid.view.View.OnClickListener({
                onClick: function(view) {
                    对话框.dismiss()
                }
            }))
            退出.setText("取消");
            退出.setTextColor(android.graphics.Color.parseColor("#FFFF00F9"));

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
        }
    }));
}



function 注册机(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu88=new android.widget.PopupWindow(layout, dip2px(ctx,10), dip2px(ctx,10));//3530
menu88.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)







var layout1=new android.widget.LinearLayout(ctx)
layout1.setOrientation(0)
layout.addView(layout1)





var id=new 文本(ctx);
//id.setText("账号:"+IMEI);
id.setText("账号:"+IMEI+"[长按复制]");
id.setTextSize(15);
id.setWidth(dip2px(ctx,250));
id.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
复制(String(IMEI));
load("复制成功");
}}))
layout1.addView(id)



var copy1=new 按钮(ctx);
copy1.setText("购买");
copy1.setTextSize(10);
copy1.setBackgroundDrawable(roundRect([hexColor("#87cefa"),hexColor("#ffffff")],[30,30,30,30]))
copy1.setWidth(dip2px(ctx,50));
copy1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
购买();
}}))
layout1.addView(copy1)

var layout2=new android.widget.LinearLayout(ctx)
layout2.setOrientation(1)
layout.addView(layout2)



var 输入=new android.widget.EditText(ctx)
输入.setText("")
输入.setHint("输入密码")
输入.setTextSize(15)
//y.setLayoutParams(new android.widget.LinearLayout.LayoutParams(170,140));
layout2.addView(输入)




var layout3=new android.widget.LinearLayout(ctx)
layout3.setOrientation(1)
layout.addView(layout3)

var 确定=new 按钮(ctx);
确定.setText("-|登录|-");
确定.setBackgroundDrawable(roundRect([hexColor("#ffc0cb"),hexColor("#ffffff")],[30,30,30,30]))
确定.setOnClickListener(new android.view.View.OnClickListener({onClick:function(view){
  if(Number(输入.getText())==密码){
menu88.dismiss()
load("密码验证通过")
解锁验证=true
}else{
load("错误")};
}}))
layout3.addView(确定)




















var mlayout=makeMenu(ctx,layout)
menu88.setContentView(mlayout)
menu88.setWidth(dip2px(ctx,300))
menu88.setHeight(dip2px(ctx,150))//450
//menu88.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(430,260,370,410)))
//g8.setText(彩字("§4钻§3石§2剑"))
menu88.setBackgroundDrawable(roundBG("#ffffff",30));
menu88.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,150),dip2px(ctx,100))
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


");


//狗屎

function购买() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        varmenu88 = newandroid.widget.PopupWindow(layout, dip2px(ctx, 10), dip2px(ctx, 10)); //3530
        menu88.setFocusable(true)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)


        varlayout1 = newandroid.widget.LinearLayout(ctx)
        layout1.setOrientation(1)
        layout.addView(layout1)


        varcopy1 = new按钮(ctx);
        copy1.setText("找残浮购买");
        copy1.setTextSize(20);
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout1.addView(copy1)

        varlayout2 = newandroid.widget.LinearLayout(ctx)
        layout2.setOrientation(1)
        layout.addView(layout2)


        varcopy1 = new按钮(ctx);
        copy1.setText("残浮QQ:");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout2.addView(copy1)




        varcopy1 = new按钮(ctx);
        copy1.setText("3516933973");
        copy1.setTextSize(15);
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        //copy1.setWidth(dip2px(ctx,150));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout2.addView(copy1)


        varlayout4 = newandroid.widget.LinearLayout(ctx)
        layout4.setOrientation(1)
        layout.addView(layout4)

        varcopy1 = new按钮(ctx);
        copy1.setText("内部群:");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout4.addView(copy1)


        varlayout5 = newandroid.widget.LinearLayout(ctx)
        layout5.setOrientation(1)
        layout.addView(layout5)

        varcopy1 = new按钮(ctx);
        copy1.setText("766280548");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,150));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout5.addView(copy1)


        varlayout6 = newandroid.widget.LinearLayout(ctx)
        layout6.setOrientation(1)
        layout.addView(layout6)

        varcopy1 = new按钮(ctx);
        copy1.setText("————————————");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout6.addView(copy1)

        varlayout7 = newandroid.widget.LinearLayout(ctx)
        layout7.setOrientation(1)
        layout.addView(layout7)

        varcopy1 = new按钮(ctx);
        copy1.setText("【购买规格】");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout7.addView(copy1)

        varlayout8 = newandroid.widget.LinearLayout(ctx)
        layout8.setOrientation(1)
        layout.addView(layout8)


        varcopy1 = new按钮(ctx);
        copy1.setText("[单买]");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout8.addView(copy1)


        varlayout9 = newandroid.widget.LinearLayout(ctx)
        layout9.setOrientation(1)
        layout.addView(layout9)

        varcopy1 = new按钮(ctx);
        copy1.setText("授权=20元");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,150));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout9.addView(copy1)




        varlayout10 = newandroid.widget.LinearLayout(ctx)
        layout10.setOrientation(1)
        layout.addView(layout10)


        varcopy1 = new按钮(ctx);
        copy1.setText("进内部=15元");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout10.addView(copy1)

        varlayout11 = newandroid.widget.LinearLayout(ctx)
        layout11.setOrientation(1)
        layout.addView(layout11)

        varcopy1 = new按钮(ctx);
        copy1.setText("残浮3.9.0=10元");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout11.addView(copy1)




        varlayout12 = newandroid.widget.LinearLayout(ctx)
        layout12.setOrientation(1)
        layout.addView(layout12)


        varcopy1 = new按钮(ctx);
        copy1.setText("————————————");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(15);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout12.addView(copy1)



        varlayout13 = newandroid.widget.LinearLayout(ctx)
        layout13.setOrientation(1)
        layout.addView(layout13)

        varcopy1 = new按钮(ctx);
        copy1.setText("[套餐]");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout13.addView(copy1)


        varlayout14 = newandroid.widget.LinearLayout(ctx)
        layout14.setOrientation(1)
        layout.addView(layout14)

        varcopy1 = new按钮(ctx);
        copy1.setText("①授权+进内部=25");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout14.addView(copy1)



        varlayout15 = newandroid.widget.LinearLayout(ctx)
        layout15.setOrientation(1)
        layout.addView(layout15)

        varcopy1 = new按钮(ctx);
        copy1.setText("②进内部+残浮3.9.0=20");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
        copy1.setTextSize(10);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {}
        }))
        layout15.addView(copy1)



        varlayout16 = newandroid.widget.LinearLayout(ctx)
        layout16.setOrientation(1)
        layout.addView(layout16)

        varcopy1 = new按钮(ctx);
        copy1.setText("关闭");
        copy1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#00FFFF")));
        copy1.setTextSize(20);
        //copy1.setWidth(dip2px(ctx,50));
        copy1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(view) {
                menu88.dismiss();
            }
        }))
        layout16.addView(copy1)

        varmlayout = makeMenu(ctx, layout)
        menu88.setContentView(mlayout)
        menu88.setWidth(dip2px(ctx, 400))
        menu88.setHeight(dip2px(ctx, 400)) //450
            //menu88.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(430,260,370,410)))
            //g8.setText(彩字("§4钻§3石§2剑"))
        menu88.setBackgroundDrawable(roundBG("#ffffff", 30));
        menu88.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 100))
    } catch (err) {
        print(err)
    }
}


functionmakeMenu(ctx, layout) {
    varmlayout = newandroid.widget.RelativeLayout(ctx)
    varsvParams = newandroid.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    varscrollview = newandroid.widget.ScrollView(ctx)
    varpad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    returnmlayout
}




//////////喷气背包算法///////////////
varjetpackss = false;
varjetpacked = false;

if (jetpackss) {
    var_0x2bf6x192 = getYaw() + 90;
    var_0x2bf6x193 = getPitch() - 180;
    _0x2bf6x28 = Math['cos'](_0x2bf6x192 * (Math['PI'] / 180));
    _0x2bf6x27 = Math['sin'](_0x2bf6x193 * (Math['PI'] / 180));
    _0x2bf6x29 = Math['sin'](_0x2bf6x192 * (Math['PI'] / 180));
    setVelX(Player['getEntity'](), _0x2bf6x28 * 1);
    setVelY(Player['getEntity'](), _0x2bf6x27 * 1);
    setVelZ(Player['getEntity'](), _0x2bf6x29 * 1)
};



//==//==//冲刺的算法//==//==//
function冲刺(实体, x, y, z) {
    vara = getYaw() * Math.PI / 180;
    varb = getPitch() * Math.PI / 180;
    xx = -Math.sin(a) * Math.cos(b);
    yy = -Math.sin(b);
    zz = Math.cos(a) * Math.cos(b);
    setVelX(实体, xx * x);
    setVelY(实体, yy * y);
    setVelZ(实体, zz * z);
}




//走搭算法

var走搭 = false

varThread = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                Thread.sleep(300)
                if (走搭 == true) {
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() - 1, 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ(), 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ(), 20, 0);
                }

            }
        }
    }));
Thread.start();

functionrush() {
    if (走搭 == true) {
        走搭 = false
        print("已经为你关闭了")
    } else {
        走搭 = true
        print("已经为你开启了")
    }
}

//添加物品算法

function item(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var h3=new android.widget.TextView(ctx)
h3.setText("            添加物品")
h3.setTextSize(20)
h3.setTextColor(android.graphics.Color.parseColor("#fc030303"));
h3.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
menu.dismiss();




}}))
layout.addView(h3)

 var f1= new android.widget.TextView(ctx);
f1.setText("【残浮QQ】★3516933973★------------------【官方1群】★687378609★");
f1.setTextSize(18);
f1.setTextColor(android.graphics.Color.parseColor("#000000"));
f1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")))
f1.getBackground().setAlpha(150);
f1.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
f1.setMarqueeRepeatLimit(-1);
f1.setSingleLine();
f1.setHorizontallyScrolling(true);
f1.setSelected(true);
layout.addView(f1)



var 菜单顶=new android.widget.LinearLayout(ctx)
菜单顶.setOrientation(0)
layout.addView(菜单顶)

var 物品ID=new android.widget.EditText(ctx)
物品ID.setText("")
物品ID.setHint("物品ID")
菜单顶.addView(物品ID)

var 物品特殊值=new android.widget.EditText(ctx)
物品特殊值.setText("0")
物品特殊值.setHint("特殊值")
菜单顶.addView(物品特殊值)



var 确认=new android.widget.Button(ctx)
确认.setText("添加")
确认.setTextColor(android.graphics.Color.parseColor("#ff000000"));
确认.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#ff1bffe0")))
确认.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
var 特殊值=物品特殊值.getText()
var ID=物品ID.getText()
//addItemInventory(ID,1,特殊值)
Entity.setCarriedItem(getPlayerEnt(),ID,1,特殊值)
}}))
确认.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick:function(v){
var 特殊值=物品特殊值.getText()
var ID=物品ID.getText()
Entity.setCarriedItem(getPlayerEnt(),ID,64,特殊值)
return true
}}))
菜单顶.addView(确认)

























var g8=new android.widget.Button(ctx)
//g8.setText("↓常用↓")
g8.setText(彩字("§4↓§3常§2用§d↓"))
g8.setTextSize(15)
g8.setTextColor(android.graphics.Color.parseColor("#DC143C"));
//按钮背景颜色
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){



}}))
layout.addView(g8)





var g8=new android.widget.Button(ctx)
//g8.setText("附魔金苹果")
g8.setText(彩字("§4附§3魔§2金§d苹§a果"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),466,64,0)

}}))
layout.addView(g8)


var g8=new android.widget.Button(ctx)
//g8.setText("钻石剑")
g8.setText(彩字("§4钻§3石§2剑"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),276,64,0)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("钻石稿")
g8.setText(彩字("§4钻§3石§2稿"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),278,64,0)


}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("钻石头盔")
g8.setText(彩字("§4钻§3石§2头§d盔"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),310,64,0)


}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("钻石胸甲")
g8.setText(彩字("§4钻§3石§2胸§d甲"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),311,64,0)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("钻石裤子")
g8.setText(彩字("§4钻§3石§2裤§d子"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),312,64,0)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("钻石鞋子")
g8.setText(彩字("§4钻§3石§2鞋§d子"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),313,64,0)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("定位地图")
g8.setText(彩字("§4定§3位§2地§d图"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),395,64,2)



}}))
layout.addView(g8)






var g8=new android.widget.Button(ctx)
//g8.setText("纸")
g8.setText(彩字("§4纸"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


Entity.setCarriedItem(getPlayerEnt(),339,64,0)
}}))
layout.addView(g8)






var g8=new android.widget.Button(ctx)
//g8.setText("木头")
g8.setText(彩字("§4木§3头"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30])) 
 g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),17,64,0)


}}))
layout.addView(g8)







var g8=new android.widget.Button(ctx)
//g8.setText("钻石")
g8.setText(彩字("§4钻§3石"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),264,64,0)

}}))
layout.addView(g8)












var g8=new android.widget.Button(ctx)
//g8.setText("↓特殊物品↓")
g8.setText(彩字("§4↓§3特§2殊§d物§a品§b↓"))
g8.setTextSize(15)
g8.setTextColor(android.graphics.Color.parseColor("#DC143C"));
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30]))
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){



}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("折妖门方块")
g8.setText(彩字("§4折§3妖§2门§d方§a块"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),209,64,0)


}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("命令方块")
g8.setText(彩字("§4命§3令§2方§d块"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),137,64,0)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("更新方块")
g8.setText(彩字("§4更§3新§2方§d块"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),255,64,0)


}}))
layout.addView(g8)








var g8=new android.widget.Button(ctx)
//g8.setText("NPC蛋1")
g8.setText(彩字("§4N§3P§2C§d蛋§a1"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,257)

}}))
layout.addView(g8)


var g8=new android.widget.Button(ctx)
//g8.setText("NPC蛋2")
g8.setText(彩字("§4N§3P§2C§d蛋§a2"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,258)

}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("NPC蛋3")
g8.setText(彩字("§4N§3P§2C§d蛋§a3"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,259)

}}))
layout.addView(g8)

var g8=new android.widget.Button(ctx)
//g8.setText("NPC蛋4")
g8.setText(彩字("§4N§3P§2C§d蛋§a4"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,352)

}}))
layout.addView(g8)


var g8=new android.widget.Button(ctx)
//g8.setText("隐形基岩")
g8.setText(彩字("§4隐§3行§2基§d岩"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),95,64,0)


}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("基岩")
g8.setText(彩字("§4基§3岩"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),7,64,0)


}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("下界反应盒")
g8.setText(彩字("§4下§3界§2反§d应§a盒"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


Entity.setCarriedItem(getPlayerEnt(),247,64,0)
}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("发光的黑曜石")
g8.setText(彩字("§4发§3光§2黑§d耀§a石"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30])) 
 g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
Entity.setCarriedItem(getPlayerEnt(),246,64,0)


}}))
layout.addView(g8)



//物品大全

var g8=new android.widget.Button(ctx)
//g8.setText("末影水晶蛋")
g8.setText(彩字("§4末§3影§2水§d晶§a蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30])) 
 g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,71)

}}))
layout.addView(g8)





var g8=new android.widget.Button(ctx)
//g8.setText("末影龙蛋")
g8.setText(彩字("§4末§3影§2龙§d蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,53)


}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
g8.setText("凋零蛋")
g8.setText(彩字("§4凋§3零§2蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,52)

}}))
layout.addView(g8)


var g8=new android.widget.Button(ctx)
g8.setText("闪电蛋")
g8.setText(彩字("§4闪§3电§2蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,93)

}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("tnt蛋")
g8.setText(彩字("§4T§3N§2T§d蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30])) 
 g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


Entity.setCarriedItem(getPlayerEnt(),383,64,65)
}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
//g8.setText("龙息蛋")
g8.setText(彩字("§4龙§3息§2蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[30,30,30,30])) 
 g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){


Entity.setCarriedItem(getPlayerEnt(),383,64,79)
}}))
layout.addView(g8)



var g8=new android.widget.Button(ctx)
g8.setText(彩字("§4凋§3零§2头§d蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,91)

}}))
layout.addView(g8)




var g8=new android.widget.Button(ctx)
//g8.setText("火球蛋")
g8.setText(彩字("§4火§3球§2蛋"))
g8.setTextSize(15)
g8.setBackgroundDrawable(roundRect([hexColor("#ffffff"),hexColor("#ffffff")],[0,0,0,0]))  
g8.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){

Entity.setCarriedItem(getPlayerEnt(),383,64,85)

}}))
layout.addView(g8)


var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,240))
menu.setHeight(dip2px(ctx,400))
menu.setBackgroundDrawable(roundBG("#eeffffff",30));
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,320),dip2px(ctx,-100))
}catch(err){
ER(err)
}
}


");




////////////////粒子功能////////////
function粒子效果(e) {
    varax = Player.getX();
    varay = Player.getY();
    varaz = Player.getZ();
    varex = Entity.getX(e);
    varey = Entity.getY(e);
    varez = Entity.getZ(e);
    vark = (ay - ey) / (ax - ex)
    varb = ay - k * ax
    varm = (ax - ex) / (az - ez)
    varn = ax - m * az
    if (az > ez) {
        varaaa = az - ez
        for (vari = aaa; i >= 0; i = i - 0.4) {
            Level.addParticle(ParticleType.angryVillager, m * ez + m * i + n, k * m * ez + k * m * i + k * n + b - 1.5, ez + i, 0, 0, 0, 2);
        }

    }
    if (az < ez) {
        varbbb = ez - az
        for (vari = bbb; i > 0; i = i - 0.4) {
            Level.addParticle(ParticleType.angryVillager, m * az + m * i + n, k * m * az + k * m * i + k * n + b - 1.5, az + i, 0, 0, 0, 2);
        }
    }
}




////////////////////////////连线算法//////////////////////
////////////////////////////////////////////////////=/分享/=////////////////////////////////////////////
//function分享文本(文本,标题){
//varsendIntent=newandroid.content.Intent();
//sendIntent.setAction(android.content.Intent.ACTION_SEND);
//sendIntent.putExtra(android.content.Intent.EXTRA_TEXT,文本);
//sendIntent.setType("text/plain");
//ctx.startActivity(android.content.Intent.createChooser(sendIntent,标题));
//};


varcatRenderer = null;
varCATGLSCode = {
    fov: 75, //勿改
    fovs: 75, //更新视角-当值变化时
    tracers_set: 0x0,
    playerESP_set: 0x0,
    initted: false,
    renderer: null,
    glSurface: null,
    w: 0,
    h: 0,
    ctx: null,
    catGLStartThread: null,
    getFloatBuffer: function(fArray) {
        varbBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
        bBuffer.order(java.nio.ByteOrder.nativeOrder());
        varfBuffer = bBuffer.asFloatBuffer();
        fBuffer.put(fArray);
        fBuffer.position(0);
        returnfBuffer;
    },
    getShortBuffer: function(sArray) {
        varbBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
        bBuffer.order(java.nio.ByteOrder.nativeOrder());
        varsBuffer = bBuffer.asShortBuffer();
        sBuffer.put(sArray);
        sBuffer.position(0);
        returnsBuffer;
    },
    drawBox: function(gl, x, y, z, xsize, ysize, zsize, a, r, g, b) {
        varGL10 = javax.microedition.khronos.opengles.GL10;
        varsize = newArray(xsize, ysize, zsize);
        varvertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
        varvertexBuffer = CATGLSCode.getFloatBuffer(vertices);
        varindices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
        varindexBuffer = CATGLSCode.getShortBuffer(indices);
        gl.glTranslatef(x, y, z);
        gl.glFrontFace(GL10.GL_CCW);
        gl.glEnable(GL10.GL_BLEND);
        gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        gl.glLineWidth(4);
        gl.glColor4f(r, g, b, a);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        gl.glTranslatef(-x, -y, -z);
    },
    drawLine: function(gl, x, y, z, x2, y2, z2, a, r, g, b) {
        varGL10 = javax.microedition.khronos.opengles.GL10;
        varsize = newArray(x2, y2, z2);
        varvertices = [0, 0, 0, x2 - x, y2 - y, z2 - z];
        varvertexBuffer = CATGLSCode.getFloatBuffer(vertices);
        varindices = [0, 1];
        varindexBuffer = CATGLSCode.getShortBuffer(indices);
        gl.glTranslatef(x, y, z);
        gl.glEnable(GL10.GL_BLEND);
        gl.glDepthMask(false);
        gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        gl.glLineWidth(4);
        gl.glColor4f(r, g, b, a);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        gl.glTranslatef(-x, -y, -z);
        gl.glDepthMask(true);
    },
    playerESP: function(gl) {
        varplayerme = getPlayerEnt();
        if (CATGLSCode.tracers_set & 0x6) {
            varmobs = Entity.getAll();
            mobs.forEach(function(entry) {
                varx = Entity.getX(entry);
                vary = Entity.getY(entry);
                varz = Entity.getZ(entry);
                if (Entity.getEntityTypeId(entry) != EntityType.PLAYER) {
                    switch (Entity.getEntityTypeId(entry)) {
                        caseEntityType.ZOMBIE_VILLAGER:
                            caseEntityType.ZOMBIE:
                            caseEntityType.SPIDER:
                            caseEntityType.SLIME:
                            caseEntityType.PIG_ZOMBIE:
                            caseEntityType.LAVA_SLIME:
                            caseEntityType.CAVE_SPIDER:
                            caseEntityType.GHAST:
                            caseEntityType.CREEPER:
                            if (CATGLSCode.playerESP_set & 0x2)
                                CATGLSCode.drawBox(gl, x - 0.5, y + 1, z - 0.5, 1, 1, 1,
                                    0.7, 1, 0.5, 0.1);
                        break;
                        caseEntityType.ARROW:
                            caseEntityType.BAT:
                            caseEntityType.BLAZE:
                            caseEntityType.EGG:
                            caseEntityType.EXPERIENCE_POTION:
                            caseEntityType.SMALL_FIREBALL:
                            caseEntityType.SNOWBALL:
                            caseEntityType.THROWN_POTION:
                            if (CATGLSCode.playerESP_set & 0x4)
                                CATGLSCode.drawBox(gl, x - 0.15, y + 1, z - 0.15, 0.3, 0.3, 0.3,
                                    0.5, 1, 0.1, 0.1);
                        break;
                        case64:
                            caseEntityType.EXPERIENCE_ORB:
                            if (CATGLSCode.playerESP_set & 0x4)
                                CATGLSCode.drawBox(gl, x - 0.15, y + 1, z - 0.15, 0.3, 0.3, 0.3,
                                    0.8, 1, 0, 0.8);
                        break;
                        default: if (CATGLSCode.playerESP_set & 0x2)
                                CATGLSCode.drawBox(gl, x - 0.5, y + 1, z - 0.5, 1, 1, 1,
                                    0.4, 1, 0.8, 0);
                        break;
                    }
                }
            });
        }


        if (CATGLSCode.playerESP_set & 0x1) {
            varplayers = Server.getAllPlayers();
            players.forEach(function(entry) {
                varx = Entity.getX(entry);
                vary = Entity.getY(entry);
                varz = Entity.getZ(entry);
                if (entry != playerme) {
                    CATGLSCode.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1,
                        0.5, 1, 0.2, 0.5);
                }
            });
        }
    },
    tracers: function(gl) {
        varplayerme = getPlayerEnt();
        varpx = getPlayerX();
        varpy = getPlayerY();
        varpz = getPlayerZ();
        if (CATGLSCode.tracers_set & 0x6) {
            varall = Entity.getAll();
            all.forEach(function(entry) {
                varx = Entity.getX(entry);
                vary = Entity.getY(entry);
                varz = Entity.getZ(entry);
                if (entry != playerme) {
                    if (Entity.getEntityTypeId(entry) == 64) {
                        if (CATGLSCode.tracers_set & 0x4) CATGLSCode.drawLine(gl, px, py + 0.8, pz, x, y + 1, z,
                            0.8, 1, 0, 0.8);
                    } else
                    if (Entity.getEntityTypeId(entry) != EntityType.PLAYER) {
                        switch (Entity.getEntityTypeId(entry)) {
                            caseEntityType.ZOMBIE_VILLAGER:
                                caseEntityType.ZOMBIE:
                                caseEntityType.SPIDER:
                                caseEntityType.SLIME:
                                caseEntityType.PIG_ZOMBIE:
                                caseEntityType.LAVA_SLIME:
                                caseEntityType.CAVE_SPIDER:
                                caseEntityType.GHAST:
                                if (CATGLSCode.tracers_set & 0x2) CATGLSCode.drawLine(gl, px, py + 0.8, pz, x, y + 1, z,
                                    0.5, 1, 0.1, 0.1);
                            break;
                            caseEntityType.ARROW:
                                caseEntityType.BAT:
                                caseEntityType.BLAZE:
                                caseEntityType.EGG:
                                caseEntityType.EXPERIENCE_POTION:
                                caseEntityType.EXPERIENCE_ORB:
                                caseEntityType.SMALL_FIREBALL:
                                caseEntityType.SNOWBALL:
                                caseEntityType.THROWN_POTION:
                                if (CATGLSCode.tracers_set & 0x4) CATGLSCode.drawLine(gl, px, py + 0.8, pz, x, y + 1, z,
                                    0.7, 1, 0.5, 0.1);
                            break;
                            default: if (CATGLSCode.tracers_set & 0x2) CATGLSCode.drawLine(gl, px, py + 0.8, pz, x, y + 1, z,
                                    0.4, 1, 0.8, 0);
                            break;
                        }
                    }
                }
            });
        }

        if (CATGLSCode.tracers_set & 0x1) {
            varplayers = Server.getAllPlayers();
            players.forEach(function(entry) {
                if (entry != playerme) {
                    varx = Entity.getX(entry);
                    vary = Entity.getY(entry);
                    varz = Entity.getZ(entry);
                    CATGLSCode.drawLine(gl, px, py + 0.8, pz, x, y + 1, z,
                        0.5, 0, 1, 1);
                }
            });
        }
    }
}

functioncatSetGLView() {
    CATGLSCode.ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    catRenderer = newandroid.opengl.GLSurfaceView.Renderer({
        onSurfaceCreated: function(gl, config) {
            varGL10 = javax.microedition.khronos.opengles.GL10;
            gl.glClearColor(0, 0, 0, 0);
            gl.glShadeModel(GL10.GL_SMOOTH);
            gl.glClearDepthf(1.0);
            gl.glEnable(GL10.GL_DEPTH_TEST);
            gl.glDepthFunc(GL10.GL_LEQUAL);
            gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
        },
        onSurfaceChanged: function(gl, width, height) {
            varGL10 = javax.microedition.khronos.opengles.GL10;
            gl.glMatrixMode(GL10.GL_PROJECTION);
            gl.glLoadIdentity();
            android.opengl.GLU.gluPerspective(gl, CATGLSCode.fov, (CATGLSCode.w = width) / (CATGLSCode.h = height), 0.1, 100);
            gl.glMatrixMode(GL10.GL_MODELVIEW);
            gl.glLoadIdentity();
        },
        onDrawFrame: function(gl) {
            if (CATGLSCode.playerESP_set || CATGLSCode.tracers_set) {
                varGL10 = javax.microedition.khronos.opengles.GL10;
                gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
                gl.glLoadIdentity();
                gl.glDisable(GL10.GL_LIGHTING);
                if (CATGLSCode.fovs != CATGLSCode.fov) {
                    CATGLSCode.fov = CATGLSCode.fovs;
                    try {
                        varGL10 = javax.microedition.khronos.opengles.GL10;
                        gl.glMatrixMode(GL10.GL_PROJECTION);
                        gl.glLoadIdentity();
                        android.opengl.GLU.gluPerspective(gl, CATGLSCode.fov, CATGLSCode.w / CATGLSCode.h, 0.1, 100);
                        gl.glMatrixMode(GL10.GL_MODELVIEW);
                        gl.glLoadIdentity();
                    } catch (e) {}
                }
                try {
                    varplayerme = getPlayerEnt();
                    varyaw = getYaw(playerme) 60;
                    varpitch = getPitch(playerme) 60;
                    vareyeX = getPlayerX();
                    vareyeY = getPlayerY() + 1;
                    vareyeZ = getPlayerZ();
                    vardCenterX = Math.sin(yaw / 180 * Math.PI);
                    vardCenterZ = Math.cos(yaw / 180 * Math.PI);
                    vardCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
                    varcenterX = eyeX - dCenterX;
                    varcenterZ = eyeZ + dCenterZ;
                    varcenterY = eyeY - dCenterY;
                    android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
                    if (CATGLSCode.initted) {
                        try {
                            if (CATGLSCode.playerESP_set) {
                                CATGLSCode.playerESP(gl);
                            }
                            if (CATGLSCode.tracers_set) {
                                CATGLSCode.tracers(gl);
                            }
                        } catch (e) {
                            print(e);
                        }
                    }
                } catch (e) {
                    clientMessage("Error:" + e);
                }
            }
        }
    });
    CATGLSCode.ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            CATGLSCode.glSurface = newandroid.opengl.GLSurfaceView(CATGLSCode.ctx);
            CATGLSCode.glSurface.setZOrderOnTop(true);
            CATGLSCode.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
            CATGLSCode.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
            CATGLSCode.glSurface.setRenderer(catRenderer);
            CATGLSCode.glSurface.setRenderMode(0);

            CATGLSCode.ctx.getWindow().getDecorView().addView(CATGLSCode.glSurface);
            CATGLSCode.initted = true;
            //print(CATGLSCode.initted);
        }
    }));
}
catSetGLView();
functioncatStartGLSurface() {
    if (CATGLSCode.catGLStartThread == null) {
        CATGLSCode.catGLStartThread = newjava.lang.Thread(newjava.lang.Runnable({
            run: function() {
                while (true) {
                    try {
                        /*这里放代码*/
                        CATGLSCode.glSurface.requestRender();
                        //print(CATGLSCode.glSurface);
                    } catch (e) {
                        print(e.lineNumber + ":" + e);
                    };
                    //线程暂停，参数毫秒，可以不要这段
                    //catjennie:如果不要这段可能会卡死
                    CATGLSCode.catGLStartThread.sleep(50);
                }
            }
        }));
        CATGLSCode.catGLStartThread.start();
    }
}




//附魔算法




functionenchant() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                A1();
                Entity.addEffect(getPlayerEnt(), 5, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 10, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 11, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 3, 2400, 9, false, false);


            } catch (err) {
                print(err)
            }
        }
    }));
}




functionH() {
    varmetrics = newandroid.util.DisplayMetrics();
    ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
    returnmetrics.heightPixels;
}

functionW() {
    varmetrics = newandroid.util.DisplayMetrics();
    ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
    returnmetrics.widthPixels;
}

functionNewView(type, sizeW, sizeH, gravity, ori, cm, color, cr, clickrun) {
    if (type == "LL") {
        var_L1 = newandroid.widget.LinearLayout(ctx);
    }
    elseif(type == "SV") {
        var_L1 = newandroid.widget.ScrollView(ctx);
    };
    _L1.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(sizeW, sizeH));
    if (gravity == "LT") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
    }
    elseif(gravity == "LC") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
    }
    elseif(gravity == "LB") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
    }
    elseif(gravity == "CT") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
    }
    elseif(gravity == "CC") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    }
    elseif(gravity == "CB") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
    }
    elseif(gravity == "RT") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
    }
    elseif(gravity == "RC") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
    }
    elseif(gravity == "RB") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
    };
    if (ori != null) {
        _L1.setOrientation(ori);
    };
    if (cm == 0) {
        _L1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
    }
    elseif(cm == 1) {
        _L1.setBackgroundDrawable(roundBG(color, cr));
    }
    elseif(cm == 2) {};
    if (clickrun != null) {
        _L1.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                try {
                    clickrun(v);
                } catch (e) {
                    print(e)
                };
            }
        }));
    };

    return_L1;
};

functionNewCDV(cm, color, cr, view, sizeW, sizeH, fa, ta, gravity, pyx, pyy) {
    var_Cdkview1 = newandroid.widget.PopupWindow();
    if (cm == 0) {
        _Cdkview1.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
    }
    elseif(cm == 1) {
        _Cdkview1.setBackgroundDrawable(roundBG(color, cr));
    }
    elseif(cm == 2) {};
    _Cdkview1.setAnimationStyle(android.R.style.Animation_Dialog);
    _Cdkview1.setContentView(view);
    _Cdkview1.setWidth(sizeW);
    _Cdkview1.setHeight(sizeH);
    _Cdkview1.setFocusable(fa);
    _Cdkview1.setTouchable(ta);
    if (gravity == "LT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, pyx, pyy);
    }
    elseif(gravity == "LC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, pyx, pyy);
    }
    elseif(gravity == "LB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, pyx, pyy);
    }
    elseif(gravity == "CT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, pyx, pyy);
    }
    elseif(gravity == "CC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, pyx, pyy);
    }
    elseif(gravity == "CB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, pyx, pyy);
    }
    elseif(gravity == "RT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, pyx, pyy);
    }
    elseif(gravity == "RC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, pyx, pyy);
    }
    elseif(gravity == "RB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, pyx, pyy);
    };
    return_Cdkview1;
};

functionNewText(text, gravity, size, color) {
    var_T1 = newandroid.widget.TextView(ctx);
    if (gravity == "LT") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
    }
    elseif(gravity == "LC") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
    }
    elseif(gravity == "LB") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
    }
    elseif(gravity == "CT") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
    }
    elseif(gravity == "CC") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    }
    elseif(gravity == "CB") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
    }
    elseif(gravity == "RT") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
    }
    elseif(gravity == "RC") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
    }
    elseif(gravity == "RB") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
    };
    _T1.setText(text);
    if (size != null) {
        _T1.setTextSize(size);
    };
    if (color != null) {
        _T1.setTextColor(android.graphics.Color.parseColor(color));
    };
    return_T1;
};

functionNewPB(mode, max, pro) {
    if (mode == 1) {
        var_PB1 = newandroid.widget.ProgressBar(ctx);
        return_PB1;
    }
    elseif(mode == 2) {
        var_PB2 = newandroid.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
        _PB2.setMax(max);
        _PB2.setProgress(pro);
    };
};

functionCheckFiles(path) {
    varml = newjava.io.File(path);
    if (!ml.exists()) {
        returnfalse;
    } else {
        returntrue;
    };
};

functionReadData(path) {
    varfile = newjava.io.File(path);
    if (file.isFile()) {
        varout = [];
        varline = "";
        varins = newjava.io.InputStreamReader(newjava.io.FileInputStream(file), "UTF-8");
        varbuff = newjava.io.BufferedReader(ins);
        while ((line = buff.readLine()) != null) {
            out.push(line);
        };
        ins.close();
        returnout.join("\n");
    };
};

functionInputData(path, data) {
    varfoss = newjava.io.FileOutputStream(path);
    foss.write(java.lang.String(data).getBytes());
    foss.close();
};

//圆角矩形背景By:鄢主晴伊未授权
functionroundRect(arr, arr2, f, s) {
    if (!(arrinstanceofArray)) arr = [arr, arr, arr];
    if (!(arr2instanceofArray)) arr2 = [arr2, arr2, arr2, arr2];
    if (arr2 == null) arr2 = [10, 10, 10, 10];
    varjb = null, type = null;
    if (f == "上下" || f == null) {
        jb = android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
    }
    elseif(f == "左右") {
        jb = android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
    }
    elseif(f == "右上") {
        jb = android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
    }
    elseif(f == "右下") {
        jb = android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
    }
    vardra = newandroid.graphics.drawable.GradientDrawable(jb, arr);
    if (s == 0 || s == null) {
        type = android.graphics.drawable.GradientDrawable.LINEAR_GRADIENT;
    }
    elseif(s == 1) {
        type = android.graphics.drawable.GradientDrawable.RADIAL_GRADIENT;
    }
    elseif(s == 2) {
        type = android.graphics.drawable.GradientDrawable.SWEEP_GRADIENT;
    }
    dra.setGradientType(type);
    dra.setCornerRadii([arr2[0], arr2[0], arr2[1], arr2[1], arr2[2], arr2[2], arr2[3], arr2[3]]);
    returndra;
}

//再次封装上面这条
functionroundBG(hex, round, f, s) {
    returnroundRect(hexColor(hex), round, f, s)
}

//进制颜色
functionhexColor(c) {
    returnandroid.graphics.Color.parseColor(c);
}

//视图动画，原作者鄢主晴伊，已授权，保留原有形式
/*#移动*/
functionUIMove(view, x1, x2, y1, y2, time, type) {
        varanim = android.view.animation;
        vartp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
        vardh = newanim.TranslateAnimation(tp, x1 * 0.01, tp, x2 * 0.01, tp, y1 * 0.01, tp, y2 * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        returndh;
    }
    /*#旋转*/
functionUIRotate(view, A, B, x, y, time, type) {
        varanim = android.view.animation;
        vartp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
        vardh = newanim.RotateAnimation(A, B, tp, x * 0.01, tp, y * 0.01);
        dh.setDuration(time);
        dh.setFillAfter(true);
        if (view != null) view.startAnimation(dh);
        returndh;
    }
    /*#收缩*/
functionUIShrink(view, x1, x2, y1, y2, x, y, time, type) {
        varanim = android.view.animation;
        vartp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
        vardh = newanim.ScaleAnimation(x1 * 0.01, x2 * 0.01, y1 * 0.01, y2 * 0.01, tp, x * 0.01, tp, y * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        returndh;
    }
    /*淡入*/
functionUIFadein(view, A, B, time) {
        vardh = newandroid.view.animation.AlphaAnimation(A * 0.01, B * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        returndh;
    }
    /*缩放*/
functionUIZoom(view, In, out, time, type) {
        returnUIShrink(view, In, out, In, out, 50, 50, time, type);
    }
    /*水平*/
functionUILevel(view, In, out, time, type) {
        returnUIMove(view, In, out, 0, 0, time, type);
    }
    /*垂直*/
functionUIPlumb(view, In, out, time, type) {
    returnUIMove(view, 0, 0, In, out, time, type);
}




functionA1() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                av1 = NewView("LL", W() * 0.05 + 200, H() * 0.35, "RC", 1, 2, null, null, null);
                av2 = NewView("LL", W() * 0.05 + 200, H() * 0.35, "CT", 1, 1, "#ffffff", 20, null);
                av3 = NewView("LL", W() * 0.05 + 200, H() * 0.05, "CC", 1, 0, "#ffffff", 0, null);

                av3s = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#ffffff", 0, null);
                av4 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#ffffff", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(newjava.lang.Runnable({
                            run: function() {
                                try {
                                    newandroid.os.Handler().postDelayed(newjava.lang.Runnable({
                                        run: function() {
                                            ac1.dismiss();
                                        }
                                    }), 300)
                                } catch (err) {
                                    print(err)
                                }
                            }
                        }));
                        for (a = 0; a < 9; a++) {
                            Player.enchant(a, Enchantment.SHARPNESS, -98305);
                            Player.enchant(a, Enchantment.POWER, -98305);
                            Player.enchant(a, Enchantment.FLAME, -98305);
                            Player.enchant(a, Enchantment.INFINITY, -98305);
                            Player.enchant(a, Enchantment.PROTECTION, -98305);
                            Player.enchant(a, Enchantment.THORNS, -98305);
                        };
                    }
                );
                av5 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#ffffff", 0, null);
                av6 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#ffffff", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(newjava.lang.Runnable({
                            run: function() {
                                try {
                                    newandroid.os.Handler().postDelayed(newjava.lang.Runnable({
                                        run: function() {
                                            ac1.dismiss();
                                        }
                                    }), 300)
                                } catch (err) {
                                    print(err)
                                }
                            }
                        }));
                        for (a = 0; a < 9; a++) {
                            Player.enchant(a, Enchantment.KNOCKBACK, -98305);
                            Player.enchant(a, Enchantment.FIRE_ASPECT, -98305);
                            Player.enchant(a, Enchantment.PUNCH, -98305);
                            Player.enchant(a, Enchantment.FLAME, -98305);
                            Player.enchant(a, Enchantment.INFINITY, -98305);
                            Player.enchant(a, Enchantment.PROTECTION, -98305);
                        };
                    }
                );
                av7 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#ffffff", 0, null);
                av8 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#ffffff", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(newjava.lang.Runnable({
                            run: function() {
                                try {
                                    newandroid.os.Handler().postDelayed(newjava.lang.Runnable({
                                        run: function() {
                                            ac1.dismiss();
                                        }
                                    }), 300)
                                } catch (err) {
                                    print(err)
                                }
                            }
                        }));
                        for (a = 0; a < 9; a++) {
                            Player.enchant(a, Enchantment.EFFICIENCY, -98305);
                            Player.enchant(a, Enchantment.FORTUNE, -98305);
                            Player.enchant(a, Enchantment.UNBREAKING, -98305);
                        };
                    }
                );
                av9 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#ffffff", 0, null);
                av10 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#ffffff", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(newjava.lang.Runnable({
                            run: function() {
                                try {
                                    newandroid.os.Handler().postDelayed(newjava.lang.Runnable({
                                        run: function() {
                                            ac1.dismiss();
                                        }
                                    }), 300)
                                } catch (err) {
                                    print(err)
                                }
                            }
                        }));
                        for (a = 0; a < 9; a++) {
                            Player.enchant(a, Enchantment.FIRE_ASPECT, -98305);
                        };
                    }
                );
                av11 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#ffffff", 0, null);

                cv1 = NewText("附魔菜单", "CC", 10, "#000000");
                cv2 = NewText("锋利｜力量｜荆棘", "CC", 11, "#000000");
                cv3 = NewText("击退｜冲击｜保护", "CC", 11, "#000000");
                cv4 = NewText("效率|时运|耐久", "CC", 11, "#000000");
                cv5 = NewText("火焰附加", "CC", 11, "#000000");

                av3.addView(cv1);
                av4.addView(cv2);
                av6.addView(cv3);
                av8.addView(cv4);
                av10.addView(cv5);


                av1.addView(av2);
                av2.addView(av3);
                av2.addView(av3s);
                av2.addView(av4);
                av2.addView(av5);
                av2.addView(av6);
                av2.addView(av7);
                av2.addView(av8);
                av2.addView(av9);
                av2.addView(av10);
                av2.addView(av11);

                ac1 = NewCDV(2, null, 0, av1, W() * 0.05 + 200, H() * 0.35, true, true, "RC", 0, 0);

                UIZoom(av1, 0, 100, 300);
            } catch (err) {
                print(err)
            }
        }
    }));
};




////////传送算法////////




function坐标传送() {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    varlayout = newandroid.widget.LinearLayout(ctx)
    try {
        varmenu = newandroid.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 30)); //75//100
        menu.setFocusable(true)
        varlayout = newandroid.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        //var菜单布局1背景=newGD();
        //菜单布局1背景.setColor(hexColor("#ffffff"));
        //菜单布局1背景.setCornerRadius(30);
        //layout.setBackground(菜单布局1背景);

        varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

        varlayout1 = newandroid.widget.LinearLayout(ctx)
        layout1.setOrientation(1)
        layout.addView(layout1)


        varlayout2 = newandroid.widget.LinearLayout(ctx)
        layout2.setOrientation(0)
        layout.addView(layout2)

        varlayout3 = newandroid.widget.LinearLayout(ctx)
        layout3.setOrientation(1)
        layout.addView(layout3)

        varlayout4 = newandroid.widget.LinearLayout(ctx)
        layout4.setOrientation(1)
        layout.addView(layout4)



        varlayout5 = newandroid.widget.LinearLayout(ctx)
        layout5.setOrientation(1)
        layout.addView(layout5)




        varlayout6 = newandroid.widget.LinearLayout(ctx)
        layout6.setOrientation(1)
        layout.addView(layout6)

        varlayout7 = newandroid.widget.LinearLayout(ctx)
        layout7.setOrientation(1)
        layout.addView(layout7)




        var功能 = newandroid.widget.TextView(ctx)
            //功能.setText("PositioningCoordinates")
        功能.setText(彩字("§4O§3P§2P§dO§aR§bE§4N§3O"))
        功能.setTextSize(18)
        功能.setTextColor(android.graphics.Color.parseColor("#000000"));
        功能.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
        功能.setMarqueeRepeatLimit(-1);
        功能.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        功能.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {

            }
        }))
        layout1.addView(功能)

        varx = newandroid.widget.EditText(ctx)
        x.setText("" + Math.round(Player.getX()) + "")
        x.setHint("x轴")
            //x.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(170,40));
        x.setTextSize(15)
        layout2.addView(x)

        //170//40

        vary = newandroid.widget.EditText(ctx)
        y.setText("" + Math.round(Player.getY()) + "")
        y.setHint("y轴")
        y.setTextSize(15)
            //y.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(170,140));
        layout2.addView(y)

        varz = newandroid.widget.EditText(ctx)
        z.setText("" + Math.round(Player.getZ()) + "")
        z.setHint("z轴")
        z.setTextSize(15)
            //z.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(170,140));
        layout2.addView(z)



        var确认 = newandroid.widget.Button(ctx)
            //确认.setText("确认")
        确认.setText(彩字("§4确§3认"))
        确认.setTextSize(20)
            //确认.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(210,(hei/10)));
        确认.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], [30, 30, 30, 30]))
        确认.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {
                varx轴 = parseInt(x.getText())
                vary轴 = parseInt(y.getText())
                varz轴 = parseInt(z.getText())
                setPosition(Player.getEntity(), x轴, y轴, z轴)
                clientMessage("已传送x:" + x轴 + "y:" + y轴 + "z:" + z轴)
            }
        }))
        layout3.addView(确认)




        var的 = newandroid.widget.Button(ctx)
            //的.setText("记录坐标")
        的.setText(彩字("§4记§3录§2坐§d标"))
        的.setTextSize(20)
            //确认.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(210,(hei/10)));
        的.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], [30, 30, 30, 30]))
        的.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


                xxxx = Player.getX()
                yyyy = Player.getY()
                zzzz = Player.getZ()
                clientMessage("已经帮你设置好记录点了")

            }
        }))
        layout4.addView(的)




        //var的=newandroid.widget.Button(ctx)
        //的.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#b4f7f7f7")));
        //的.setText("记录坐标")
        //的.setTextColor(android.graphics.Color.parseColor("#000000"));
        //的.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(dip2px(ctx,210),(hei/9)));
        //的.setTextSize(20)
        //的.setOnClickListener(newandroid.view.View.OnClickListener({
        //onClick:function(v){
        //xxxx=Player.getX()
        //yyyy=Player.getY()
        //zzzz=Player.getZ()
        //clientMessage("已经帮你设置好记录点了")
        //}}))
        //layout4.addView(的)




        var的 = newandroid.widget.Button(ctx)
            //的.setText("返回记录点")
        的.setText(彩字("§4返§3回§2记§d录§a点"))
        的.setTextSize(20)
            //确认.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(210,(hei/10)));
        的.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], [30, 30, 30, 30]))
        的.setOnClickListener(newandroid.view.View.OnClickListener({
            onClick: function(v) {


                try {
                    if (xxxx == null) {
                        clientMessage("你还没有设置记录点哦")
                    } else {
                        setPosition(getPlayerEnt(), xxxx, yyyy, zzzz)
                        clientMessage("传送成功,传送到了记录点x:" + xxxx + "y:" + yyyy + "z:" + zzzz)
                    }
                } catch (err) {
                    load("你还没有设置记录点哦");
                }

            }
        }))
        layout5.addView(的)




        //var的=newandroid.widget.Button(ctx)
        //的.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#b4f7f7f7")));
        //的.setText("返回记录点")
        //的.setTextColor(android.graphics.Color.parseColor("#000000"));
        //的.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(dip2px(ctx,210),(hei/9)));
        //的.setTextSize(20)
        //的.setOnClickListener(newandroid.view.View.OnClickListener({
        //onClick:function(v){
        //try{
        //if(xxxx==null){
        //clientMessage("你还没有设置记录点哦")
        //}
        //else{
        //setPosition(getPlayerEnt(),xxxx,yyyy,zzzz)
        //clientMessage("传送成功,传送到了记录点x:"+xxxx+"y:"+yyyy+"z:"+zzzz)
        //}
        //}catch(err){load("你还没有设置记录点哦");}
        //}}))
        //layout5.addView(的)




        varmlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 240))
        menu.setHeight(dip2px(ctx, 250))
        menu.setBackgroundDrawable(roundBG("#eeffffff", 30));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 320), dip2px(ctx, -100))
    } catch (err) {
        ER(err)
    }
}




//////革命////////////




/*显示血量算法*/


var血量 = false


function显血() {
    runThread(
        function() {
            try {
                if (da) {
                    while (da) {
                        血量显示();
                        lang.Thread.sleep(10);
                    }
                }
            } catch (err) {
                print(err);
            }
        }
    );
}



functionleaveGame() {
    out();
}

varbtn
varbotton = false
varbotton1 = false
varopenwindow = null
varopenwindow1 = null
varblood
varpointent = -1
vartime = -1
vartypeblood = newArray()
typeblood[10] = 4
typeblood[11] = 10
typeblood[12] = 10
typeblood[13] = 8
typeblood[14] = 10
typeblood[15] = 20
typeblood[16] = 10
typeblood[18] = 3
typeblood[32] = 20
typeblood[33] = 20
typeblood[34] = 20
typeblood[35] = 16
typeblood[36] = 20
typeblood[37] = 10
typeblood[38] = 40
typeblood[39] = 8

typeblood[17] = 10
typeblood[19] = 6
typeblood[20] = 100
typeblood[21] = 10
typeblood[22] = 10
typeblood[40] = 12
typeblood[41] = 10
typeblood[42] = 10
typeblood[43] = 20
typeblood[44] = 20
typeblood[45] = 26
typeblood[63] = 20

typeblood[46] = 20
typeblood[47] = 20
typeblood[23] = 10
typeblood[26] = 10
typeblood[27] = 10
typeblood[25] = 10
typeblood[24] = 10

typeblood[55] = 8
typeblood[54] = 30
typeblood[28] = 30

typeblood[49] = 30
typeblood[50] = 80

typeblood[104] = 24
typeblood[57] = 24
typeblood[29] = 15
typeblood[105] = 14

varlockent = -1
varenable_script_var = 1;

function血量显示() {
    if (enable_script_var == 0) {
        return;
    }

    if (botton && !botton1) {
        botton1 = true
    }
    if (botton1 && !botton) {
        botton1 = false
        varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(newjava.lang.Runnable({
            run: function() {
                try {
                    if (openwindow1) {
                        openwindow1.dismiss();
                        openwindow1 = null;
                    }
                } catch (err) {
                    print(err);
                }
            }
        }))
    }
    if (Player.getPointedEntity() != -1)
        lockent = -1

    vartypeId = Entity.getEntityTypeId(Player.getPointedEntity());
    if ((Player.getPointedEntity() != -1 && (typeId < 64 || typeId >= 104) && (pointent != Player.getPointedEntity() | blood != Entity.getHealth(Player.getPointedEntity()))) | (lockent != -1 && Entity.getHealth(lockent) != blood && Player.getPointedEntity() == -1)) {
        if (lockent == -1)
            blood = Entity.getHealth(Player.getPointedEntity())
        else
            blood = Entity.getHealth(lockent)
        pointent = Player.getPointedEntity()
        time = -1
        varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(newjava.lang.Runnable({
            run: function() {
                try {
                    varbmp = android.graphics.Bitmap.createBitmap(dip2px(ctx, 180), dip2px(ctx, 25), android.graphics.Bitmap.Config.ARGB_8888);
                    varpa = newandroid.graphics.Paint()
                    pa.setStyle(android.graphics.Paint.Style.STROKE)
                    varcv = newandroid.graphics.Canvas();
                    cv.setBitmap(bmp);
                    pa.setColor(android.graphics.Color.WHITE)
                    pa.setStrokeWidth(dip2px(ctx, 4))
                    cv.drawRect(0, 0, dip2px(ctx, 180), dip2px(ctx, 25), pa)
                    pa.setStyle(android.graphics.Paint.Style.FILL)
                    pa.setColor(android.graphics.Color.RED)
                    if (lockent == -1)
                        cv.drawRect(dip2px(ctx, 5), dip2px(ctx, 5), dip2px(ctx, 5 / 1 + blood / typeblood[Entity.getEntityTypeId(pointent)] * 170), dip2px(ctx, 20), pa)
                    else
                        cv.drawRect(dip2px(ctx, 5), dip2px(ctx, 5), dip2px(ctx, 5 / 1 + Entity.getHealth(lockent) / typeblood[Entity.getEntityTypeId(lockent)] * 170), dip2px(ctx, 20), pa)
                    varbv = newandroid.widget.ImageView(ctx)
                    bv.setImageBitmap(bmp)
                    varlay = newandroid.widget.RelativeLayout(ctx)
                    lay.addView(bv)
                    vart = newandroid.widget.TextView(ctx)
                    vartextParams = newandroid.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)

                    t.setTextSize(16)

                    vartotal = typeblood[Entity.getEntityTypeId(pointent)]
                    if (total != null && total != org.mozilla.javascript.Undefined) {
                        if (lockent == -1)
                            t.setText("" + blood + "/" + typeblood[Entity.getEntityTypeId(pointent)])
                        else
                            t.setText("" + Entity.getHealth(lockent) + "/" + typeblood[Entity.getEntityTypeId(lockent)])
                        t.setLayoutParams(textParams)
                        lay.addView(t)

                        if (openwindow != null)
                            openwindow.dismiss()
                        openwindow = null
                        openwindow = newandroid.widget.PopupWindow(lay, dip2px(ctx, 180), dip2px(ctx, 25));
                        openwindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, dip2px(ctx, 380), ctx.getWindowManager().getDefaultDisplay().getHeight() * 0.2);
                        botton = true
                    }
                } catch (err) {
                    java.lang.System.out.println(err);
                }
            }
        }));
    }
    if (Player.getPointedEntity() == -1 && (pointent != -1 | lockent != -1) && time == -1) {
        time = 40
        if (pointent != -1)
            lockent = pointent
        pointent = -1;
    }
    if (time == 0) {
        botton = false
        lockent = -1
        pointent = -1
        time = -1
        varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(newjava.lang.Runnable({
            run: function() {
                try {
                    if (openwindow != null) openwindow.dismiss();
                    openwindow = null
                } catch (err) {
                    print(err);
                }
            }
        }))
    }
    if (time > 0)
        time--
}

functiondip2px(ctx, dips) {
    returnMath.ceil(aaaa * dips);
}

varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
varaaaa = ctx.getResources().getDisplayMetrics().density
function关闭显血() {
    if (openwindow != null) {
        varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(newjava.lang.Runnable({
            run: function() {
                try {
                    openwindow.dismiss()
                    botton = false
                    openwindow = null
                    pointent = -1
                    time = -1
                    if (openwindow1) {

                        openwindow1.dismiss()
                        openwindow1 = null
                    }

                } catch (err) {
                    print(err);
                }
            }
        }))
    }
}

functionenable_script_func() {
    enable_script_var = 1;
}

functiondisable_script_func() {}




/////////绑定围绕等特殊算法/////////////

function取剪() {
    varcm;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                cm = ctx.getSystemService(ctx.CLIPBOARD_SERVICE).getText()
            } catch (err) {
                print("出错，再试试！" + err)
            }
        }
    }))
    returncm;
}

varsj = 0
varzm = false
varxc = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                ctx.runOnUiThread(newjava.lang.Runnable({
                    run: function() {
                        if (zm == true) {
                            aimEnt(getNearEnt(6))
                        }
                    }
                }));
                xc.sleep(100)
            }
        }
    }))
xc.start()


functiongetNearEnt(maxrange) {
    try {

        varname = Player.getName(getPlayerEnt());
        varmobs = Server.getAllPlayers();
        varplayers = Server.getAllPlayers();
        varsmall = maxrange;
        varent = null;
        for (vari = 0; i < mobs.length; i++) {
            varx = Entity.getX(mobs[i]) - getPlayerX();
            vary = Entity.getY(mobs[i]) - getPlayerY();
            varz = Entity.getZ(mobs[i]) - getPlayerZ();
            vardist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
            if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
                small = dist;
                ent = mobs[i];
            }
        }
        for (vari = 0; i < players.length; i++) {
            varx = Entity.getX(players[i]) - getPlayerX();
            vary = Entity.getY(players[i]) - getPlayerY();
            varz = Entity.getZ(players[i]) - getPlayerZ();
            vardist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
            if (dist < small && dist >= 0.1 && Entity.getHealth(players[i]) >= 1) {
                small = dist;
                ent = players[i];
            }
        }
        if (name !== Player.getName(ent)) {
            returnent;
        } else {
            returnnull
        }
    } catch (e) {
        returnnull;
        print(e);
    }
};
functionaimEnt(ent, pos) {
    if (ent != null) {
        varx = Entity.getX(ent) - getPlayerX();
        vary = Entity.getY(ent) - getPlayerY();
        varz = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && posinstanceofArray) {
            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
        vara = 0.5 + Entity.getX(ent);
        varb = Entity.getY(ent);
        varc = 0.5 + Entity.getZ(ent);
        varlen = Math.sqrt(x * x + y * y + z * z);
        vary = y / len;
        varpitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        varyaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch - 2);
        }
    }
};




varThread = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                Thread.sleep(100);
                if (脚下方块 == true) {
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 20, 0);
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() - 1, 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ(), 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ(), 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);
                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);
                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);
                }

            }
        }
    }));
Thread.start();

varThread = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                Thread.sleep(280)
                if (飞行 == true) {
                    Entity.setVelY(getPlayerEnt(), 0.4);
                }
            }
        }
    }));
Thread.start();



varThread = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                function设置家() {
                    homes = {
                        设x: Player.getX(),
                        设y: Player.getY() + 1,
                        设z: Player.getZ()
                    };
                    returntrue;
                }

                function回家() {
                    Entity.setPosition(Player.getEntity(), homes.设x, homes.设y, homes.设z);
                }
                Thread.sleep(200)
                varyy1 = Player.getY()
                var速度 = (Math.sqrt((yy1 - yy2) * (yy1 - yy2)) * 4).toFixed(1);
                varyy2 = Player.getY()
                if (回弹1 == true) {
                    if (速度 > speed) {
                        回家();
                    }
                    if (速度 == 0) {
                        设置家();
                    }
                }
            }
        }

    }));
Thread.start();




//////黑洞////////
varThread1 = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                if (黑洞 == true) {
                    entity = getNearEnt(8)
                    if (entity && entity != -1) {
                        if (Entity.getHealth(entity) > 0) {
                            varplayer = getPlayerEnt();
                            Entity.setCollisionSize(entity, 8, 7);
                            setPosition((entity), Player.getX(), Player.getY() - 0.5, Player.getZ());
                        } else {
                            entity = null;
                        }
                    }
                }
            }
        }
    }));
Thread1.start();

///////背后自瞄////////
varplayerb = null

varThread2 = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                if (背后自瞄 == true) {
                    if (getNearEnt(4) != null) {
                        playerb = getNearEnt(4)
                        yaw = Entity.getYaw(playerb) - 180;
                        varpointX = Entity.getX(playerb) - Math.sin(yaw * Math.PI / 180) * 2, pointY = Entity.getY(playerb) + 0.5, pointZ = Entity.getZ(playerb) + Math.cos(yaw * Math.PI / 180) * 2;
                        Entity.setRot(Player.getEntity(), yaw + 180, 30);
                        Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                    }
                }
                Thread2.sleep(1)
            }
        }
    }));
Thread2.start();




//////////长臂猿///////////
varThread3 = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                if (长臂猿 == true) {
                    play玩家 = getNearEnt(6)
                    Entity.setCollisionSize(play玩家, 8, 7);
                } else {
                    play玩家 = null;
                }
            }
        }
    }));
Thread3.start();



////////环绕自瞄//////////
var环绕自瞄 = false
varplayerC = null

varThread4 = newjava.lang.Thread(
    newjava.lang.Runnable({
        run: function() {
            while (true) {
                if (环绕自瞄 == true) {
                    if (getNearEnt(5) != null) {
                        playerC = getNearEnt(5)
                        yaw = Math.random() * 360 - 180;
                        varpointX = Entity.getX(playerC) - Math.sin(yaw * Math.PI / 180) * 2, pointY = Entity.getY(playerC) + 0.5, pointZ = Entity.getZ(playerC) + Math.cos(yaw * Math.PI / 180) * 2;
                        Entity.setRot(Player.getEntity(), yaw + 180, 30);
                        Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                    }
                }
                Thread4.sleep(110)
            }
        }
    }));
Thread4.start();




functiontoast(str) {
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            android.widget.Toast.makeText(ctx, str, 0).show()
        }
    }))
}




functionbang() {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                varB1 = newandroid.widget.LinearLayout(ctx);
                B1.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.3, H() * 0.1));
                B1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B1.setOrientation(0);
                varB2 = newandroid.widget.LinearLayout(ctx);
                B2.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                B2.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B2.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                B2.setOrientation(1);
                varB3 = newandroid.widget.LinearLayout(ctx);
                B3.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                B3.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B3.setBackgroundDrawable(roundBG("#afffffff", 0));
                B3.setOrientation(1);
                varB4 = newandroid.widget.LinearLayout(ctx);
                B4.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                B4.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B4.setBackgroundDrawable(roundBG("#afffffff", [0, 15, 15, 0]));
                B4.setOrientation(1);




                varn1 = newandroid.widget.TextView(ctx)
                n1.setText("绑")
                n1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                n1.setTextSize(15)
                n1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                n1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (环绕自瞄 == true) {
                            环绕自瞄 = false
                            B4.setBackgroundDrawable(roundBG("#afffffff", [0, 15, 15, 0]));
                        }


                        if (背后自瞄 == false) {
                            背后自瞄 = true
                            B2.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], [15, 0, 0, 15]))
                        } else {
                            背后自瞄 = false
                            B2.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                        }
                    }
                }))
                varn2 = newandroid.widget.TextView(ctx)
                n2.setText("瞄")
                n2.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                n2.setTextSize(15)
                n2.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                n2.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (zm == false) {
                            zm = true
                            B3.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 0))
                        } else {
                            zm = false
                            B3.setBackgroundDrawable(roundBG("#afffffff", 0));
                        }
                    }
                }))
                n2.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            aimview.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                varn3 = newandroid.widget.TextView(ctx)
                n3.setText("绕")
                n3.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                n3.setTextSize(15)
                n3.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                n3.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (背后自瞄 == true) {
                            背后自瞄 = false
                            B2.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                        }


                        if (环绕自瞄 == false) {
                            环绕自瞄 = true
                            B4.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], [0, 15, 15, 0]))
                        } else {
                            环绕自瞄 = false
                            B4.setBackgroundDrawable(roundBG("#afffffff", [0, 15, 15, 0]));
                        }
                    }
                }))




                B1.addView(B2);
                B1.addView(B3);
                B1.addView(B4);
                B2.addView(n1);
                B3.addView(n2);
                B4.addView(n3);
                aimview = newandroid.widget.PopupWindow();
                aimview.setAnimationStyle(android.R.style.Animation_Dialog);
                aimview.setContentView(B1);
                aimview.setWidth(H() * 0.3);
                aimview.setHeight(H() * 0.1);
                aimview.setFocusable(false);
                aimview.setTouchable(true);
                aimview.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
}




///////设回///////


functionsetHome() {
    homes = {
        x: Player.getX(),
        y: Player.getY() + 1,
        z: Player.getZ()
    };
    print("设置家成功");
    家 = 1;
    returntrue;
}


functiongoHome() {
    if (家 == 1) {
        Entity.setPosition(Player.getEntity(), homes.x, homes.y, homes.z);
    } else {
        print("你还没有设置家");
    }
}




////////////设回算法//////////

function设回() {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                varB1 = newandroid.widget.LinearLayout(ctx);
                B1.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.2, H() * 0.1));
                B1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B1.setOrientation(0);
                varB2 = newandroid.widget.LinearLayout(ctx);
                B2.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                B2.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B2.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                B2.setOrientation(1);
                varB3 = newandroid.widget.LinearLayout(ctx);
                B3.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                B3.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B3.setBackgroundDrawable(roundBG("#afffffff", [0, 15, 15, 0]));
                B3.setOrientation(1);


                varn1 = newandroid.widget.TextView(ctx)
                n1.setText("回")
                n1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                n1.setTextSize(15)
                n1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                n1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        goHome();
                    }
                }))
                varn2 = newandroid.widget.TextView(ctx)
                n2.setText("设")
                n2.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                n2.setTextSize(15)
                n2.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                n2.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        setHome();
                    }
                }))
                n2.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            setview.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));


                B1.addView(B2);
                B1.addView(B3);
                B2.addView(n1);
                B3.addView(n2);
                setview = newandroid.widget.PopupWindow();
                setview.setAnimationStyle(android.R.style.Animation_Dialog);
                setview.setContentView(B1);
                setview.setWidth(H() * 0.2);
                setview.setHeight(H() * 0.1);
                setview.setFocusable(false);
                setview.setTouchable(true);
                setview.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
}




//////////////附魔窗口算法
function附魔窗口() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                varA = newandroid.widget.LinearLayout(ctx);
                A.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                A.setOrientation(1);
                varB = newandroid.widget.ScrollView(ctx);
                B.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(W() * 0.5, H() * 0.5));
                B.setBackgroundDrawable(roundBG("#ffffffff", 20));
                varB2 = newandroid.widget.LinearLayout(ctx);
                B2.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(-2, -2));
                B2.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B2.setOrientation(1);
                varB3 = newandroid.widget.LinearLayout(ctx);
                B3.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(W() * 0.5, H() * 0.1));
                B3.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                B3.setBackgroundDrawable(roundBG("#E0E0E0", 15));
                varB4 = newandroid.widget.LinearLayout(ctx);
                B4.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(W() / 6 * 3.3, H() / 6 * 4.5 * 0.02));
                B4.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                varT2 = newandroid.widget.TextView(ctx);
                T2.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                T2.setText("")
                T2.setTextSize(15);
                varT3 = newandroid.widget.TextView(ctx);
                T3.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                T3.setText("快捷附魔")
                T3.setTextSize(19);
                varT4 = newandroid.widget.TextView(ctx);
                T4.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                T4.setText("")
                T4.setTextSize(15);
                附魔等级 = newandroid.widget.EditText(ctx)
                附魔等级.setText("0")
                附魔等级.setBackgroundDrawable(null);
                附魔等级.setHint("输入-32767到32767间的值")
                附魔等级.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                //NewButton(B2,"快捷附魔",W()*0.5,H()*0.1,"");
                A.addView(T2);
                A.addView(T3);
                A.addView(T4);
                A.addView(B);
                B.addView(B2);
                B2.addView(B3);
                B2.addView(B4);
                B3.addView(附魔等级);

                UIReveal(B2, 0, 0, 0, 1400, 2000)

                NewButton(B2, "快捷附魔", W() * 0.5, H() * 0.1, "快捷满级();");
                NewButton(B2, "锋利", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.SHARPNESS,Number(附魔等级.getText())-65536)");
                NewButton(B2, "耐久", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.UNBREAKING,Number(附魔等级.getText())-65536)");
                NewButton(B2, "击退", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.KNOCKBACK,Number(附魔等级.getText())-65536)");
                NewButton(B2, "抢夺", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.LOOTING,Number(附魔等级.getText())-65536)");
                NewButton(B2, "火焰附加", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.FIRE_ASPECT,Number(附魔等级.getText())-65536)");
                NewButton(B2, "亡灵**", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.SMITE,Number(附魔等级.getText())-65536)");
                NewButton(B2, "截肢**", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.BANE_OF_ARTHROPODS,Number(附魔等级.getText())-65536)");
                NewButton(B2, "无限", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.INFINITY,Number(附魔等级.getText())-65536)");
                NewButton(B2, "力量", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.POWER,Number(附魔等级.getText())-65536)");
                NewButton(B2, "冲击", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.PUNCH,Number(附魔等级.getText())-65536)");
                NewButton(B2, "火矢", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.FLAME,Number(附魔等级.getText())-65536)");
                NewButton(B2, "荆棘", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.THORNS,Number(附魔等级.getText())-65536)");
                NewButton(B2, "时运", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.FORTUNE,Number(附魔等级.getText())-65536)");
                NewButton(B2, "效率", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.EFFICIENCY,Number(附魔等级.getText())-65536)");
                NewButton(B2, "水下速掘", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.DEPTH_STRIDER,Number(附魔等级.getText())-65536)");
                NewButton(B2, "精准采集", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.SILK_TOUCH,Number(附魔等级.getText())-65536)");
                NewButton(B2, "保护", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.PROTECTION,Number(附魔等级.getText())-65536)");
                NewButton(B2, "火焰保护", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.FIRE_PROTECTION,Number(附魔等级.getText())-65536)");
                NewButton(B2, "掉落保护", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.FEATHER_FALLING,Number(附魔等级.getText())-65536)");
                NewButton(B2, "**保护", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.BLAST_PROTECTION,Number(附魔等级.getText())-65536)");
                NewButton(B2, "水下呼吸", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.RESPIRATION,Number(附魔等级.getText())-65536)");
                NewButton(B2, "深海探索者", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.AQUA_AFFINITY,Number(附魔等级.getText())-65536)");
                NewButton(B2, "弹射物保护", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.PROTECTION,Number(附魔等级.getText())-65536)");
                NewButton(B2, "海之眷顾", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.LUCK_OF_THE_SEA,Number(附魔等级.getText())-65536)");
                NewButton(B2, "钓饵", W() * 0.5, H() * 0.1, "Player.enchant(Player.getSelectedSlotId(),Enchantment.LURE,Number(附魔等级.getText())-65536)");

                Cdkview = newandroid.widget.PopupWindow();
                Cdkview.setBackgroundDrawable(roundBG("#ffffffff", 20));
                Cdkview.setFocusable(true);
                Cdkview.setTouchable(true);
                Cdkview.setContentView(A);
                Cdkview.setWidth(W() * 0.6);
                Cdkview.setHeight(H() * 0.7);
                Cdkview.setAnimationStyle(android.R.style.Animation_Dialog);
                Cdkview.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
                //Cdkview.dismiss()
            } catch (e) {
                ER(e)
            }
        }
    }));
}


function快捷满级() {
    /*锋利*/
    Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, Number(附魔等级.getText()) - 65536)
        /*耐久*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, Number(附魔等级.getText()) - 65536)
        /*火焰附加*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, Number(附魔等级.getText()) - 65536)
        /*击退*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, Number(附魔等级.getText()) - 65536)
        /*抢夺*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, Number(附魔等级.getText()) - 65536)
        /*无限*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, Number(附魔等级.getText()) - 65536)
        /*力量*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, Number(附魔等级.getText()) - 65536)
        /*冲击*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, Number(附魔等级.getText()) - 65536)
        /*火失*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, Number(附魔等级.getText()) - 65536)
        /*弹射物保护*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, Number(附魔等级.getText()) - 65536)
        /*荆棘*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, Number(附魔等级.getText()) - 65536)
        /*时运*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, Number(附魔等级.getText()) - 65536)
        /*效率*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, Number(附魔等级.getText()) - 65536)
        /*保护*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, Number(附魔等级.getText()) - 65536)
        /*火焰保护*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, Number(附魔等级.getText()) - 65536)
        /*掉落保护*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, Number(附魔等级.getText()) - 65536)
        /***保护*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, Number(附魔等级.getText()) - 65536)
        /*水下呼吸*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, Number(附魔等级.getText()) - 65536)
        /*深海探索者*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, Number(附魔等级.getText()) - 65536)
        /*水下速掘*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, Number(附魔等级.getText()) - 65536)
        /*亡灵***/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, Number(附魔等级.getText()) - 65536)
        /*节肢***/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, Number(附魔等级.getText()) - 65536)
        /*精准采集*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, Number(附魔等级.getText()) - 65536)
        /*海之眷顾:*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, Number(附魔等级.getText()) - 65536)
        /*钓饵*/
        Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, Number(附魔等级.getText()) - 65536)
}



functionNewButton(view, text, sizeW, sizeH, command) {
    varA = newandroid.widget.LinearLayout(ctx);
    A.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(sizeW, sizeH));
    A.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    A.setBackgroundDrawable(roundBG("#E0E0E0", 15));
    A.setOrientation(1);
    A.setOnClickListener(newandroid.view.View.OnClickListener({
        onClick: function(v) {
            try {
                eval(command);
            } catch (e) {
                print(e)
            };
        }
    }));
    varT1 = newandroid.widget.TextView(ctx);
    T1.setText(text)
    T1.setTextSize(14);
    T1.setTextColor(android.graphics.Color.parseColor("#000000"));
    T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    varB = newandroid.widget.LinearLayout(ctx);
    B.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(W() / 6 * 3.3, H() / 6 * 4.5 * 0.02));
    B.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    B.setOrientation(0);
    A.addView(T1);
    view.addView(A)
    view.addView(B);
}

varCPU显示 = true
var网速显示 = true
function网速测试() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                varA = newandroid.widget.LinearLayout(ctx);
                A.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                A.setOrientation(1);
                stitle5 = newandroid.widget.TextView(ctx)
                stitle5.setTextSize(18)

                stitle6 = newandroid.widget.TextView(ctx)
                stitle6.setTextSize(18)




                varThread = newjava.lang.Thread(
                    newjava.lang.Runnable({
                        run: function() {
                            try {
                                while (true) {
                                    Thread.sleep(700)
                                    if (网速显示 == true) {
                                        var网络测试网址 = "http://www.baidu.com/"
                                        time = newDate();
                                        varurl = newjava.net.URL(网络测试网址);
                                        varuoc = url.openConnection();
                                        uoc.setConnectTimeout(50000);
                                        uoc.setRequestMethod("GET");
                                        uoc.setUseCaches(false);
                                        uoc.connect();
                                        网速 = newDate() - time;
                                        stitle5.setText(彩字("§r§l延迟:§a" + 网速 + "ms"))
                                        if (网速 > 50 && 网速 < 100) {
                                            stitle5.setText(彩字("§r§l延迟:§6" + 网速 + "ms"))
                                        }
                                        if (网速 > 100 && 网速 < 200) {
                                            stitle5.setText(彩字("§r§l延迟:§4" + 网速 + "ms"))
                                        }
                                        if (网速 < 50) {
                                            stitle5.setText(彩字("§r§l延迟:§a" + 网速 + "ms"))
                                        }
                                        if (网速 > 200) {
                                            网速显示 = false
                                            网速显示 = true
                                        }
                                        varconnection = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
                                        varinfo = connection.getActiveNetworkInfo();
                                        if (info = null) {
                                            stitle5.setText("无法链接服务器")
                                        }
                                    } else {
                                        stitle5.setText("")
                                    }
                                }
                            } catch (e) {
                                print(e)
                            }
                        }
                    }));
                Thread.start();

                varThread1 = newjava.lang.Thread(
                    newjava.lang.Runnable({
                        run: function() {
                            try {
                                while (true) {
                                    Thread.sleep(1000)
                                    if (CPU显示 == true) {
                                        varpath = "/proc/meminfo";
                                        varfile = newjava.io.File(path);
                                        varfr = newjava.io.FileReader(file);
                                        varbr = newjava.io.BufferedReader(fr);
                                        eval("varmem={" + br.readLine().replace("kB", ",") + br.readLine().replace("kB", ",") + br.readLine().replace("kB", ",") + "};");
                                        var结果 = (java.lang.String.format("%.2f%%", 100 * (mem.MemTotal - mem.MemAvailable) / mem.MemTotal))

                                        stitle6.setText(彩字("§r§lCPU:§b" + 结果))

                                        if (结果 > 10) {
                                            CPU显示 = false
                                            CPU显示 = true
                                        }
                                    } else {
                                        stitle6.setText("")
                                    }
                                }
                            } catch (e) {
                                print(e)
                            }
                        }
                    }));
                Thread1.start();



                A.addView(stitle5);
                A.addView(stitle6);

                Cdkview = newandroid.widget.PopupWindow();
                Cdkview.setBackgroundDrawable(roundBG("#DC143C", 20));
                Cdkview.setFocusable(false);
                Cdkview.setTouchable(true);
                Cdkview.setContentView(A);
                Cdkview.setWidth(W() * 0.2);
                Cdkview.setHeight(H() * 0.1);
                Cdkview.setAnimationStyle(android.R.style.Animation_Dialog);
                Cdkview.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
                //Cdkview.dismiss()
            } catch (e) {
                ER(e)
            }
        }
    }));
}




/////////////移动按键////////////////

function移动按键(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮 = newandroid.widget.PopupWindow();
                移动按钮.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮.setContentView(Ab);
                移动按钮.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮.setWidth(sizeW);
                移动按钮.setHeight(sizeH);
                移动按钮.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮;
}




/////////////移动按键////////////////

function移动按键1(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮1.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮1 = newandroid.widget.PopupWindow();
                移动按钮1.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮1.setContentView(Ab);
                移动按钮1.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮1.setWidth(sizeW);
                移动按钮1.setHeight(sizeH);
                移动按钮1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮1;
}




/////////////移动按键////////////////

function移动按键2(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮2.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮2 = newandroid.widget.PopupWindow();
                移动按钮2.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮2.setContentView(Ab);
                移动按钮2.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮2.setWidth(sizeW);
                移动按钮2.setHeight(sizeH);
                移动按钮2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮2;
}




/////////////移动按键////////////////

function移动按键3(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮3.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮3 = newandroid.widget.PopupWindow();
                移动按钮3.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮3.setContentView(Ab);
                移动按钮3.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮3.setWidth(sizeW);
                移动按钮3.setHeight(sizeH);
                移动按钮3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮3;
}




/////////////移动按键////////////////

function移动按键4(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮4.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮4 = newandroid.widget.PopupWindow();
                移动按钮4.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮4.setContentView(Ab);
                移动按钮4.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮4.setWidth(sizeW);
                移动按钮4.setHeight(sizeH);
                移动按钮4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮4;
}




/////////////移动按键////////////////

function移动按键5(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮5.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮5 = newandroid.widget.PopupWindow();
                移动按钮5.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮5.setContentView(Ab);
                移动按钮5.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮5.setWidth(sizeW);
                移动按钮5.setHeight(sizeH);
                移动按钮5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮5;
}




/////////////移动按键////////////////

function移动按键6(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮6.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮6 = newandroid.widget.PopupWindow();
                移动按钮6.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮6.setContentView(Ab);
                移动按钮6.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮6.setWidth(sizeW);
                移动按钮6.setHeight(sizeH);
                移动按钮6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮6;
}




/////////////移动按键////////////////

function移动按键7(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮7.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮7 = newandroid.widget.PopupWindow();
                移动按钮7.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮7.setContentView(Ab);
                移动按钮7.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮7.setWidth(sizeW);
                移动按钮7.setHeight(sizeH);
                移动按钮7.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮7;
}




/////////////移动按键////////////////

function移动按键8(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮8.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮8 = newandroid.widget.PopupWindow();
                移动按钮8.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮8.setContentView(Ab);
                移动按钮8.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮8.setWidth(sizeW);
                移动按钮8.setHeight(sizeH);
                移动按钮8.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮8;
}




/////////////移动按键////////////////

function移动按键9(text, sizeW, sizeH, command, 颜色) {
    var坐标x = 0, 坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5, 坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                Ab = newandroid.widget.LinearLayout(ctx);
                Ab.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                Ab.setOrientation(1);
                varBb = newandroid.widget.LinearLayout(ctx);
                Bb.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(H() * 0.1, H() * 0.1));
                Bb.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                Bb.setBackgroundDrawable(roundBG("#afffffff", [15, 0, 0, 15]));
                Bb.setOrientation(1);
                var移动color = false
                tt1 = newandroid.widget.TextView(ctx)
                tt1.setText(text)
                tt1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                tt1.setTextSize(15)
                tt1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                tt1.setOnClickListener(newandroid.view.View.OnClickListener({
                    onClick: function(v) {
                        if (颜色 == true) {
                            eval(command);
                            if (移动color == false) {
                                移动color = true
                                Bb.setBackgroundDrawable(roundRect([hexColor("#DAFFCE"), hexColor("#BBFFEA")], 15))
                            } else {
                                移动color = false
                                Bb.setBackgroundDrawable(roundBG("#afffffff", 15));
                            }
                        } else {
                            eval(command)
                        }
                    }
                }))
                tt1.setOnTouchListener(newandroid.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case0: 坐标x1 = e.getX();
                            坐标y1 = e.getY();
                            break;
                            case2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                            坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                            坐标x = 坐标x + 坐标x2;
                            坐标y = 坐标y + 坐标y2;
                            移动按钮9.update(坐标x, 坐标y, -1, -1);
                            break;
                        }
                        returnfalse;
                    }
                }));
                Ab.addView(Bb);
                Bb.addView(tt1);
                移动按钮9 = newandroid.widget.PopupWindow();
                移动按钮9.setAnimationStyle(android.R.style.Animation_Dialog);
                移动按钮9.setContentView(Ab);
                移动按钮9.setBackgroundDrawable(roundBG("#ffffffff", 15));
                移动按钮9.setWidth(sizeW);
                移动按钮9.setHeight(sizeH);
                移动按钮9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 坐标x, 坐标y);
            } catch (e) {
                ER(e)
            }
        }
    }));
    return移动按钮9;
}




//通知栏("⚡残浮官方系➖➖➖➖➖➖➖列强势回归⚡",jst1,"")

//START();




///////////抄袭代码/////////




//暗杀js函数
//暗杀js函数
function传送() {
    varlay = newandroid.widget.ScrollView(ctx);
    varlay1 = newandroid.widget.LinearLayout(ctx);
    lay.addView(lay1);

    lay.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(40, 1, 1, 1)));
    lay1.addView(NewText("tp玩家菜单", "CC", 15, "#000000"));
    传.setWidth(W() / 4);
    lay.setLayoutParams(newandroid.widget.LinearLayout.LayoutParams(W() / 4, H() * 0.5));
    传.setHeight(H() * 0.5);
    lay1.setOrientation(1);
    传.setFocusable(true);
    lay1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    传.setContentView(scroll(lay, true));
    传.setBackgroundDrawable(getColorDrawable("transparent"));
    传.showAtLocation(mainView, left | top, W() / 4 + 50, H() * 0.05);

    invalidate();
    for (variinplayers) {
        addButton(lay1, Player.getName(players[i]), function() {
            varpointX = Entity.getX(players[i]), pointY = Entity.getY(players[i]), pointZ = Entity.getZ(players[i]);
            Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
        }, null, 0, 15, "传");
    }
}


functionrunCommand(txt) {
    try {
        showDialog("JS命令执行", "请输入JS命令", "", {
            txt: "执行",
            command: function() {
                try {
                    eval(String(getMessage.getText()));
                } catch (err) {
                    showTip(err);
                }
            }
        }, {
            txt: "关闭"
        }, null, true);
    } catch (err) {
        showTip(err);
    }
}
functioninvalidate() {
    try {
        if (mode) {
            players = Array.slice.call(Server.getAllPlayers());
            players.shift();
        } else {
            varls = [];
            for (vari = 0; i <= 10000; i++)
                if (Entity.getEntityTypeId(i) == 63)
                    ls.push(i);
            players = ls;
        }
        vararr = []
        for (variinplayers)
            if (shield.indexOf(Player.getName(players[i])) > -1) arr.unshift(i);
        for (variinarr) players.splice(arr[i], 1);
    } catch (err) {
        showTip(err, 1);
    }
}

functionfly() {
    Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 2, Player.getZ());
    Player.setFlying(true);
    clientMessage("已开启飞行");
}

functionspeed() {
    if (speeding) {
        ModPE.setGameSpeed(20);
        showTip("➡已恢复，再次点击加速");
    } else {
        ModPE.setGameSpeed(100);
        showTip("➡已加速，再次点击恢复");
    }
    speeding = !speeding;
}

functionsearchMode(v, c) {
    mode = c;
}

functionexp() {
    showDialog("增加经验值", "请输入要增加的经验值", "9999999", {
        txt: "确定",
        command: function() {
            try {
                Player.addExp(Number(getMessage.getText()));
            } catch (err) {
                showTip(err);
            }
        }
    }, {
        txt: "取消"
    }, null, true);
}

function长臂猿() {
    try {
        runThread(function() {
            invalidate();
            showTip("已开启长臂猿");
            for (variinplayers) {
                Entity.setCollisionSize(players[i], 8, 7);
            }

        });
    } catch (err) {

    }
}


function自动长臂() {
    if (长臂) {
        runThread(function() {
            try {
                while (长臂) {
                    invalidate();
                    var最远选择距离2 = 15;
                    for (varx = 0; x < players['length']; x++) {
                        varX距离 = Entity.getX(players[x]) - getPlayerX();
                        varY距离 = Entity.getY(players[x]) - getPlayerY();
                        varZ距离 = Entity.getZ(players[x]) - getPlayerZ();
                        var距离 = Math.sqrt(Math.pow(X距离, 2) + Math.pow(Y距离, 2) + Math.pow(Z距离, 2));
                        if (距离 < 最远选择距离2 && 距离 > 0 && Entity.getHealth(players[x]) >= 1) {
                            Entity.setCollisionSize(players[x], 20, 10);
                        }
                    }
                    lang.Thread.sleep(100);
                }

            } catch (err) {
                print(err);
            }
        });
    }
}

functionflash(flashmode, text) {
    try {
        if (flashing) {
            flashing = false;
            goHome();
        } else {
            Ui(function() {
                vardialog = newapp.AlertDialog.Builder(ctx);
                dialog.setTitle("⚔请选择暗杀对象⚔");
                varlay = newwg.LinearLayout(ctx);
                lay.setOrientation(1);
                varcheck = addCheckBox(lay, text, function() {}, 0, 15, flashmode);
                invalidate();
                for (variinplayers) {
                    addButton(lay, Player.getName(players[i]), eval("function(){startFlash(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                }
                dialog.setView(scroll(lay));
                dialog.setNegativeButton("取消", null);
                dialog.show();
            });
        }
    } catch (err) {
        showTip(err, 1);
    }
}

functionstartFlash(player, flashMode, miao) {
    print(flashMode);
    showTip("➡暗杀开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1 || Entity.getY(player) == 0) {
                    flashing = false;
                    goHome();
                    showTip("➡暗杀目标已死亡，暗杀任务已结束");
                    break;
                }
                varyaw;
                if (flashMode) {
                    yaw = Math.random() * 360 - 180;
                    wttime = 300;
                } else {
                    yaw = Entity.getYaw(player) - 180;
                    wttime = 1;
                }
                varpointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2, pointY = Entity.getY(player) + 0.5, pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Entity.setVelY(getPlayerEnt(), 0);
                clientMessage(Entity.getY(player));
                lang.Thread.sleep(wttime);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}


functionsetHome() {
    home = {
        x: Player.getX(),
        y: Player.getY() + 1,
        z: Player.getZ()
    };
    showTip("➡设置家成功");
    returntrue;
}

functiongoHome() {
    home ? Entity.setPosition(Player.getEntity(), home.x, home.y, home.z) : showTip("➡请先长按设置此处为家");
}

functionenchant() {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                A1();
                Entity.addEffect(getPlayerEnt(), 5, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 10, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 11, 2400, 4, false, false);
                Entity.addEffect(getPlayerEnt(), 3, 2400, 9, false, false);


            } catch (err) {
                print(err)
            }
        }
    }));
}




functiontext(txt) {
    print(txt);
}
functionwindis(界面) {
    Ui(function() {
        if (界面 == null) {
            win1.dismiss();
        } else {
            界面.dismiss();
        }
    });
}




functionradar() {
    try {
        if (radarWin) {
            if (radarWin.isShowing()) {
                state = 2;
                radarWin.dismiss();
            }
            elseif(state == 3) {
                radarWin.showAtLocation(mainView, right | top, 0, hei / 7);
                state = 1;
                scan();
            }
        } else {
            Ui(function() {
                radarWin = newwg.PopupWindow(ctx);
                radarShow = newwg.ImageView(ctx);
                radarShow.setImageBitmap(radarPic);
                radarWin.setContentView(radarShow);
                radarWin.setWidth(radarPic.getWidth());
                radarWin.setHeight(radarPic.getHeight());
                radarWin.setBackgroundDrawable(getColorDrawable("dkgray"));
                radarWin.showAtLocation(mainView, right | top, 0, hei / 7);
                state = 1;
                scan();
            });
            showTip("➡雷达已开启，再次点击关闭，长按显示所有人名称与距离", 1);
        }
    } catch (err) {
        print(err);
    }
}

functionrunThread(func) {
    vara = newjava.lang.Thread(newjava.lang.Runnable({
        run: func
    }));
    a.start();
    returna;
}

functionthread(func) {
    vara = newjava.lang.Thread(newjava.lang.Runnable({
        run: func
    }));
    returna;
}

functionprint(text, size) {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                vartoast = android.widget.Toast.makeText(ctx, "", android.widget.Toast.LENGTH_LONG);
                varlayout = newandroid.widget.LinearLayout(ctx);
                vartextView = newandroid.widget.TextView(ctx);
                textView.setText(atHfHt("</font><fontcolor=#ffffffff>" + text.replace(/\n/g, "<br>") + "</font>"));
                textView.setPadding(10, 10, 10, 10);
                if (size != null) textView.setTextSize(size);
                textView.setTypeface(android.graphics.Typeface.MONOSPACE);
                layout.addView(textView);
                layout.setBackgroundDrawable(roundBG("#eeffffff", 20));
                toast.setView(layout);
                toast.show();
            } catch (e) {
                android.widget.Toast.makeText(ctx, "" + text + "", 6).show();
            }
        }
    }));
}

functionshowTip(text, size) {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: function() {
            try {
                vartoast = android.widget.Toast.makeText(ctx, "", android.widget.Toast.LENGTH_LONG);
                varlayout = newandroid.widget.LinearLayout(ctx);
                vartextView = newandroid.widget.TextView(ctx);
                textView.setText(atHfHt("</font><fontcolor=#ffffffff>" + text.replace(/\n/g, "<br>") + "</font>"));
                textView.setPadding(10, 10, 10, 10);
                if (size != null) textView.setTextSize(size);
                textView.setTypeface(android.graphics.Typeface.MONOSPACE);
                layout.addView(textView);
                layout.setBackgroundDrawable(roundBG("#eeffffff", 20));
                toast.setView(layout);
                toast.show();
            } catch (e) {
                android.widget.Toast.makeText(ctx, "" + text + "", 6).show();
            }
        }
    }));
}

functiongetNames() {
    vararr = [], x = Player.getX(), y = Player.getY(), z = Player.getZ();
    invalidate();
    for (variinplayers) arr.push(Player.getName(players[i]) + "--" + Math.round(gougu(x - Entity.getX(players[i]), y - Entity.getY(players[i]), z - Entity.getZ(players[i]))));
    showDialog("所有玩家名", "若在游戏房间外使用，则列表不会正确显示", arr.join("\n"), {
        txt: "关闭"
    });
    returntrue;
}

functionshowDialog(title, message, text, negative, positive, neutral, uncancel) {
    Ui(function() {
        try {
            vardialog = newapp.AlertDialog.Builder(ctx);
            dialog.setTitle(title);
            varscroll = newwg.ScrollView(ctx);
            if (typeof(text) == "string") {
                getMessage = newwg.EditText(ctx);
                getMessage.setText(text);
                scroll.addView(getMessage);
            }
            elseif(typeof(text) == "object") {
                scroll.addView(text);
            }
            dialog.setView(scroll);
            if (negative) dialog.setNegativeButton(negative.txt ? negative.txt : "", negative.command ? negative.command : null);
            if (positive) dialog.setPositiveButton(positive.txt ? positive.txt : "", positive.command ? positive.command : null);
            if (neutral) dialog.setNeutralButton(neutral.txt ? neutral.txt : "", neutral.command ? neutral.command : null);
            dialog.setMessage(message);
            dialog.setCancelable(uncancel ? false : true);
            dialog.show();
        } catch (err) {
            showTip(err, 1)
        }
    });
    returntrue;
}

functionaddCheckBox(parent, text, command, ave, size, checked) {
    try {
        varcheck = newwg.CheckBox(ctx);
        check.setText(text ? text : "");
        check.setTextColor(android.graphics.Color.parseColor("#000000"));
        check.setChecked(checked ? checked : false);
        if (size) check.setTextSize(size);
        if (command) check.setOnCheckedChangeListener(newwg.CompoundButton.OnCheckedChangeListener({
            onCheckedChanged: command
        }));
        aveLayout(check, typeof(ave) == "number" ? ave : ave.type, ave.wid, ave.hei);
        parent.addView(check);
        returncheck;
    } catch (err) {
        print(err)
    }
}

functionaveLayout(view, ave, width, height, weight) {
    switch (ave) {
        case1: view.setLayoutParams(newwg.RelativeLayout.LayoutParams(width ? width : -2, height ? height : -2, weight ? weight : 1));
        returnview;
        default: view.setLayoutParams(newwg.LinearLayout.LayoutParams(width ? width : -2, height ? height : -2, weight ? weight : 1));
        returnview;
    }
}

functionUi(command) {
    ctx.runOnUiThread(newjava.lang.Runnable({
        run: command
    }));
}

functiongetColorDrawable(color) {
    returnnewgrap.drawable.ColorDrawable(getColor(color));
}

functiongetColor(color) {
    returneval("grap.Color." + color.toUpperCase());
}

functionscan() {
    runThread(function() {
        abc: while (1) {
            try {
                if (state == 1) {
                    varx = Player.getX(), z = Player.getZ();
                    invalidate();
                    if (players.length > 0) {
                        varscaleX = null, scaleZ = null;
                        for (variinplayers) {
                            if (state == 2) breakabc;
                            varls = Math.abs(x - Entity.getX(players[i]));
                            if (scaleX == null || ls > scaleX) {
                                scaleX = ls;
                            }
                            ls = Math.abs(z - Entity.getZ(players[i]));
                            if (scaleZ == null || ls > scaleZ) {
                                scaleZ = ls;
                            }
                        }
                        vardistX = scaleX * 10 / 9, distZ = scaleZ * 10 / 9, baseX = x - distX, baseZ = z - distZ, ratioX = lenX / 2 / distX, ratioZ = lenZ / 2 / distZ;
                        for (variinplayers) {
                            if (state == 2) breakabc;
                            varname = Player.getName(players[i]), color = name.length > 3 && name.substr(0, 1) == "§" && getColorValue(name.substr(3, 1)) ? getColorValue(name.substr(3, 1)) : grap.Color.WHITE, actX = lenX - Math.abs(Entity.getX(players[i]) - baseX) * ratioX, actZ = Math.abs(Entity.getZ(players[i]) - baseZ) * ratioZ;
                            draw(actZ, actX, color);
                            drawPoint(players[i], actZ, actX, color);
                        }
                    }
                    draw(lenZ / 2, lenX / 2, grap.Color.MAGENTA);
                    drawPoint(Player.getEntity(), lenZ / 2, lenX / 2, grap.Color.MAGENTA);
                    Ui(function() {
                        radarShow.setImageBitmap(radarPic);
                        radarPic = grap.Bitmap.createBitmap(lenZ, lenX, grap.Bitmap.Config.ARGB_8888);
                    });
                } else {
                    break;
                }
                java.lang.Thread.sleep(1000);
            } catch (err) {
                showTip(err, 1);
                break;
            }
        }
        state = 3;
        Ui(function() {
            if (radarWin.isShowing()) radarWin.dismiss();
        });
    });
}

functiondraw(x, y, color) {
    varcanvas = newgrap.Canvas(radarPic);
    varpaint = getPaint({
        color: color,
        dither: true
    });
    canvas.drawCircle(x, y, radius, paint);
}

functiondrawPoint(player, x, y, color) {
    varratio = Math.PI / 180, yaw = Entity.getYaw(player);
    varx0 = radius * 1.3 * Math.cos(yaw * ratio), y0 = radius * 1.3 * Math.sin(yaw * ratio), x1 = x0 + radius * Math.cos((yaw - 90) * ratio), y1 = y0 + radius * Math.sin((yaw - 90) * ratio), x2 = x0 + radius * Math.cos((yaw + 90) * ratio), y2 = y0 + radius * Math.sin((yaw + 90) * ratio), x3 = x0 * 2, y3 = y0 * 2;
    varcanvas = newgrap.Canvas(radarPic);
    varpaint = getPaint({
        color: color,
        dither: true,
        style: grap.Paint.Style.FILL
    });
    varpath = newgrap.Path();
    path.moveTo(x + x3, y + y3);
    path.lineTo(x + x1, y + y1);
    path.lineTo(x + x2, y + y2);
    path.close();
    canvas.drawPath(path, paint);
}

functiongougu() {
    if (arguments.length <= 3) {
        varresult = 0;
        for (variinarguments) {
            result += arguments[i] * arguments[i];
        }
        returnMath.sqrt(result);
    } else {
        returnnull;
    }
}

functionscroll(view, horizontal) {
    varscrollView = horizontal ? newwg.HorizontalScrollView(ctx) : newwg.ScrollView(ctx);
    scrollView.addView(view);
    returnscrollView;
}

functiongetColorValue(str) {
    switch (str) {
        case "红":
            returngrap.Color.RED;
        case "黄":
            returngrap.Color.YELLOW;
        case "蓝":
            returngrap.Color.BLUE;
        case "绿":
            returngrap.Color.GREEN;
        case "青":
            returngrap.Color.CYAN;
        case "紫":
            returngrap.Color.rgb(160, 32, 240);
        case "灰":
            returngrap.Color.GRAY;
        case "白":
            returngrap.Color.WHITE;
        case "黑":
            returngrap.Color.BLACK;
        case "橙":
            returngrap.Color.rgb(255, 165, 0);
        default:
            returnnull;
    }
}

functiongetPaint(fields) {
    varpaint = newgrap.Paint();
    if (fields.color) paint.setColor(fields.color);
    if (fields.dither) paint.setDither(fields.dither);
    if (fields.antiAlias) paint.setAntiAlias(fields.antiAlias);
    if (fields.shader) paint.setShader(fields.shader);
    if (fields.width) paint.setStrokeWidth(fields.width);
    if (fields.style) paint.setStyle(fields.style);
    returnpaint;
}

functionaddButton(parent, text, command, longCommand, ave, size, fs) {
    Ui(function() {
        try {
            varbutton = newwg.Button(ctx);
            if (fs == true) {
                button.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(20, 2, 2, 2)));
                button.setTextColor(android.graphics.Color.parseColor("#000000"));
                aveLayout(button, typeof(ave) == "number" ? ave : ave.type, W() / 3, H() * 0.1);
                button.setTextSize(14);
            } else {
                if (fs == "传") {
                    button.setBackgroundDrawable(newandroid.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50, 0, 25, 15)));
                    button.setTextColor(android.graphics.Color.parseColor("#ffffff"));
                    aveLayout(button, typeof(ave) == "number" ? ave : ave.type, W() / 4, H() * 0.11);
                    button.setTextSize(1, 13);
                } else {
                    button.setBackgroundDrawable(roundBG("#ff14d9ff", 10));
                    button.setTextColor(android.graphics.Color.parseColor("#ffffff"));
                    aveLayout(button, typeof(ave) == "number" ? ave : ave.type, ave.wid, ave.hei);
                    if (size) button.setTextSize(1, size);
                }
            }
            button.setText(text ? text : "");
            if (command) button.setOnClickListener(newview.View.OnClickListener({
                onClick: command
            }));
            if (longCommand) button.setOnLongClickListener(newview.View.OnLongClickListener({
                onLongClick: longCommand
            }));
            parent.addView(button);
            returnbutton;
        } catch (err) {
            print(err)
        }
    });
}

//文件读取函数
functionreadtext(re) {
    if (newjava.io.File(re).exists()) {
        varbu = newjava.io.BufferedReader(newjava.io.InputStreamReader(newjava.io.FileInputStream(re)));
        vardata = '';
        varvv = bu.readLine();
        while (vv != 'END' && vv != null) {
            data += vv + '\n';
            vv = bu.readLine()
        }
        returnString(data)
    } else {
        return ''
    }
}


//文件选择器
functionFile_Select(Default_Path) {
    varFile = newjava.io.File("/storage/emulated/0/");
    varFile_Folder = File.getAbsolutePath().toString();
    varctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    if (File.exists() && File.isDirectory()) {
        UI(File_Folder_List(File));
    } else {
        print("无法打开路径" + Default_Path);
    }

    functionFile_Folder_List(file) {
        vararr = newArray();
        varlist = file.listFiles();
        if (list == null) {
            arr[0] = "/...";
        } else {
            for (vari = 0; i < list.length; i++) {
                arr[i] = list[i].getName().toString();
            }
            arr.sort();
            arr.unshift("/...");
        }
        returnarr;
    }
    functionFile_Folder_Selected(path) {
        varfile = newjava.io.File(path);
        if (!file.exists()) {
            print("路径不存在！" + path);
        }
        elseif(file.isDirectory()) {
            UI(File_Folder_List(file));
        }
        elseif(file.isFile()) {
            try {
                clientMessage("正在导入中......");
                eval(readtext(path));
            } catch (e) {
                clientMessage("导入失败：" + e);
            }
        }
    }


    functionUI(data) {
        ctx.runOnUiThread(newjava.lang.Runnable({
            run: function() {
                try {
                    vardialog = newandroid.app.AlertDialog.Builder(ctx);
                    dialog.setTitle("请选择文件");
                    dialog.setItems(data, newandroid.content.DialogInterface.OnClickListener() {
                        onClick: function(dialog, which) {
                            if (which == 0) {
                                varpathtemp = File_Folder.split("/");
                                varresult = "";
                                for (vari = 0; i < pathtemp.length; i++) {
                                    if (i != pathtemp.length - 1 && pathtemp[i] != "" && pathtemp[i] != "") {
                                        result += "/" + pathtemp[i];
                                    }
                                }
                                result += "/";
                                if (File_Folder == "/") {
                                    showTip("已在根目录，无法返回");
                                } else {
                                    dialog.cancel();
                                    File_Folder = result;
                                    File_Folder_Selected(File_Folder);
                                }
                            } else {
                                dialog.cancel();
                                File_Folder += "/" + data[which];
                                File_Folder_Selected(File_Folder);
                            }
                        }
                    });
                    dialog.setNegativeButton("取消选择", null);
                    dialog.show();
                } catch (err) {
                    print("无法打开选择器UI:" + err);
                }
            }
        }));
    }
}




主要按钮();




IMEI = "林飞破解，密码为520"
密码 = "520";

print("密码" + 密码)