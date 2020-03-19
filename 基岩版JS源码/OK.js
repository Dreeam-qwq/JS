//=========常见变量区
var k = false,
    kk = false,
    mw = false,
    sds = false;
kkkk = false;
var wjs = [];
var wj = [];
var 彩蛋嘿嘿嘿 = 0;
const sdcard = new android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
wp = [310, 311, 312, 313, 276, 261, 373, 438, 262];
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
//==============
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        try {
            var layout = new android.widget.LinearLayout(ctx);
            layout.setGravity(17);

            var tv1 = new android.widget.TextView(ctx);
            tv1.setText("移");
            var tv1_params = new android.widget.LinearLayout.LayoutParams(55, 55);
            tv1.setTextSize(20);
            tv1.setTextColor(android.graphics.Color.rgb(255, 255, 255));
            tv1.setBackgroundColor(android.graphics.Color.BLUE);
            tv1.setLayoutParams(tv1_params);
            layout.addView(tv1);

            var btn2 = new android.widget.Button(ctx);
            btn2.setText("秒");
            btn2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function() {
                    if (mw == false) {
                        btn2.setText("正");
                        mw = true;
                    } else {
                        btn2.setText("秒");
                        mw = false;
                    }
                }
            }));
            var btn2_params = new android.widget.LinearLayout.LayoutParams(70, 70);
            btn2.setLayoutParams(btn2_params);
            layout.addView(btn2);

            var btn3 = new android.widget.Button(ctx);
            btn3.setText("玩");
            btn3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function() {
                    wj = Server.getAllPlayers();
                    wjlb();
                }
            }));
            var btn3_params = new android.widget.LinearLayout.LayoutParams(70, 70);
            btn3.setLayoutParams(btn3_params);
            layout.addView(btn3);

            var btn4 = new android.widget.Button(ctx);
            btn4.setText("功");
            btn4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function() {
                    gnlb();
                }
            }));
            var btn4_params = new android.widget.LinearLayout.LayoutParams(70, 70);
            btn4.setLayoutParams(btn4_params);
            layout.addView(btn4);

            var win = new android.widget.PopupWindow(ctx);
            win.setFocusable(false);
            win.setContentView(layout);
            win.setWidth(265);
            win.setHeight(70);
            win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0));
            win.showAtLocation(ctx.getWindow().getDecorView(), 0, 1000, 620);


            var win2x = 50,
                win2y = 50
            var mX, mY

            tv1.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(v, e) {
                    switch (e.getAction()) {
                        case 0:
                            mX = e.getX();
                            mY = e.getY();
                            break;
                        case 1:
                            break;
                        case 2:
                            var delX = parseInt(e.getX() - mX) * 0.3;
                            var delY = parseInt(e.getY() - mY) * 0.3;
                            win2x += delX;
                            win2y += delY;
                            win.update(parseInt(win2x), parseInt(win2y), -1, -1);
                            break;
                    }
                    return true;
                }
            }));
        } catch (e) {
            print(e)
        }
    }
}));


function gnlb() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var tv1 = new android.widget.TextView(ctx)
        tv1.setText("功能列表")
        tv1.setTextColor(android.graphics.Color.rgb(255, 255, 255));
        tv1.setTextSize(25)
        layout.addView(tv1)

        var jgm = new android.widget.Button(ctx)
        jgm.setText("改名与伪造")
        jgm.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gmcd();
            }
        }))
        layout.addView(jgm)

        var btn1 = new android.widget.Button(ctx);
        btn1.setText("开启手持物附魔");
        btn1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function() {
                if (k == false) {
                    btn1.setText("关闭手持物附魔");
                    k = true;
                } else {
                    btn1.setText("开启手持物附魔");
                    k = false;
                }
            }
        }));
        layout.addView(btn1);

        var sdss = new android.widget.Button(ctx)
        sdss.setText("开启商店杀")
        if (sds) sdss.setText("关闭商店杀");
        sdss.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (sds) {
                    sds = false;
                    sdss.setText("开启商店杀")
                } else {
                    sds = true;
                    sdss.setText("关闭商店杀")
                }
            }
        }))
        layout.addView(sdss);

        var zxdm = new android.widget.Button(ctx)
        zxdm.setText("执行函数")
        zxdm.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gm(2);
            }
        }))
        layout.addView(zxdm);

        var fmzb = new android.widget.Button(ctx)
        fmzb.setText("全套装备")
        fmzb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                zbqt();
            }
        }))
        layout.addView(fmzb);

        var tjwp = new android.widget.Button(ctx)
        tjwp.setText("添加物品")
        tjwp.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                tmi();
            }
        }))
        layout.addView(tjwp);

        var fly = new android.widget.Button(ctx)
        fly.setText("开启飞行")
        if (Player.canFly()) fly.setText("关闭飞行");
        fly.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (Player.canFly()) {
                    Player.setCanFly(false);
                    if (Player.isFlying) Player.setFlying(false);
                    t("翅膀断了！");
                    fly.setText("开启飞行")
                } else {
                    Player.setCanFly(true);
                    t("长翅膀了！");
                    fly.setText("关闭飞行")
                }
            }
        }))
        layout.addView(fly)

        var zzxx = new android.widget.Button(ctx)
        zzxx.setText("关于")
        zzxx.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gy();
            }
        }))
        layout.addView(zzxx);

        var jcgx = new android.widget.Button(ctx)
        jcgx.setText("检查更新")
        jcgx.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                dkwy("http://pan.baidu.com/share/link?shareid=145984721&uk=489685208");
            }
        }))
        layout.addView(jcgx);

        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(300)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function gmcd() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var gmtv = new android.widget.TextView(ctx)
        gmtv.setText("改名与伪造")
        gmtv.setTextSize(20)
        gmtv.setTextColor(android.graphics.Color.rgb(90, 255, 255));
        layout.addView(gmtv)
        var gmtv1 = new android.widget.TextView(ctx)
        gmtv1.setText("然而改名并没有什么卵用")
        gmtv1.setTextSize(15)
        gmtv1.setTextColor(android.graphics.Color.rgb(90, 255, 255));
        layout.addView(gmtv1)


        var jgm = new android.widget.Button(ctx)
        jgm.setText("改名(无卵用)")
        jgm.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gm(0);
            }
        }))
        layout.addView(jgm)

        var jgm1 = new android.widget.Button(ctx)
        jgm1.setText("改名通过改写文件")
        jgm1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gm(1);
                t("退出游戏后再进才有效果，中途进设置无效");
            }
        }))
        layout.addView(jgm1)

        var gmwzy = new android.widget.Button(ctx)
        gmwzy.setText("伪造消息")
        gmwzy.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gm2(0);
            }
        }))
        layout.addView(gmwzy)

        var gmwzn = new android.widget.Button(ctx)
        gmwzn.setText("伪造消息并改名")
        gmwzn.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                gm2(1);
            }
        }))
        layout.addView(gmwzn)

        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(300)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 300, 0)
    } catch (err) {
        print(err)
    }
}

function wjlb() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var wjlbt = new android.widget.TextView(ctx)
        wjlbt.setText("玩家列表")
        wjlbt.setTextSize(25)
        layout.addView(wjlbt)
        for (m in wj) {
            addbutton(ctx, layout, m, Entity.getNameTag(wj[m]), 20);
        }
        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 200))
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


function tcsan() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var alertd = new android.app.AlertDialog.Builder(ctx);
                alertd.setItems(new java.lang.String("手持附魔,秒挖,玩家列表,功能列表").split(","), new android.content.DialogInterface.OnClickListener() {
                    onClick: function(dia, w) {
                        switch (w) {
                            case 0:

                                break;
                            case 1:

                                break;
                            case 2:

                                break;
                            case 3:

                                break;
                        }
                    }
                });
                alertd.setNegativeButton("返回", new android.content.DialogInterface.OnClickListener() {
                    onClick: function(dia, w) {

                    }
                });
                alertd.setTitle("按钮");
                alertd.show();
            } catch (e) {
                t(e);
            }
        }
    }));

}


function wjcz(m) {
    var layout = new android.widget.LinearLayout(ctx) 
    try {
        var Layout = new android.widget.LinearLayout(ctx);
        var xm = new android.widget.Button(ctx);
        var gs = new android.widget.Button(ctx);
        var sj = new android.widget.Button(ctx);
        var qx = new android.widget.Button(ctx);
        var qd = new android.widget.Button(ctx);
        gs.setText("跟踪")
        sj.setText("视角")
        qx.setText("骑行")
        xm.setText("下落")
        qd.setText("伪造")
        Layout.setOrientation(android.widget.LinearLayout.VERTICAL);
        Layout.addView(gs);
        Layout.addView(sj);
        Layout.addView(qx);
        Layout.addView(xm);
        Layout.addView(qd);
        var Dialog = new android.app.Dialog(ctx);
        Dialog.setContentView(Layout);
        Dialog.setTitle("你想对" + Entity.getNameTag(wj[m]) + "做什么？");

        qd.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                wzxx(Entity.getNameTag(wj[m]));
            }
        });
        gs.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                Entity.setPosition(getPlayerEnt(), Entity.getX(wj[m]), Entity.getY(wj[m]), Entity.getZ(wj[m]));
            }
        });
        sj.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                ModPE.setCamera(wj[m]);
            }
        });
        qx.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                if (wj[m] == getPlayerEnt()) {
                    clientMessage("你不能骑自己");
                } else {
                    Entity.rideAnimal(getPlayerEnt(), wj[m]);
                }
            }
        });
        xm.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                if (kkkk == false) {
                    kkkk = true;
                    print("开");
                } else {
                    kkkk = false;
                    print("关");
                }
                wjid = wj[m];
            }
        });
        Dialog.show();
    } catch (err) {  
        print2("错误: " + err + ".")
    }
}

function wzxx(m) {
    var dialog = new android.app.AlertDialog.Builder(ctx)
    dialog.setTitle("伪造他发送什么？")
    dialog.setPositiveButton("确定", new android.content.DialogInterface.OnClickListener() {
        onClick: function(dia, w) {

        }
    })
    dialog.setItems(new java.lang.String("自定义,预设1,预设2,预设3,预设4,预设5,预设6").split(","), new android.content.DialogInterface.OnClickListener() {
        onClick: function(dia, w) {
            switch (w) {
                case 0:
                    zdywz(m);
                    break;
                case 1:
                    fswz(m, "房主我孙子，是个没jj和屁眼的智障小学生!");
                    break;
                case 2:
                    fswz(m, "孙子，你爷爷我开挂了，有本事就踢了爷爷，傻逼孙子!");
                    break;
                case 3:
                    fswz(m, "房主乖孙子！来叫声爷爷！");
                    break;
                case 4:
                    fswz(m, "§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n§4▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n");
                    break;
                case 5:
                    fswz(m, " ");
                    break;
                case 6:
                    fswz(m, " ");
                    break;
            }
        }
    })
    dialog.show()
}

function zdywz(m) {
    var va = android.text.InputType.TYPE_CLASS_TEXT;
    var layout = new android.widget.LinearLayout(ctx) 
    try {
        var layouty = new android.widget.LinearLayout(ctx);
        var srwz = new android.widget.EditText(ctx);
        var tz = new android.widget.Button(ctx);
        tz.setText("确定")
        srwz.setHint("输入伪造信息！");
        srwz.setInputType(va);
        layouty.setOrientation(android.widget.LinearLayout.VERTICAL);
        layouty.addView(srwz);
        layouty.addView(tz);
        var wzDialog = new android.app.Dialog(ctx);
        wzDialog.setContentView(layouty);
        wzDialog.setTitle("想要伪造发送什么？");
        tz.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                fswz(m, srwz.getText());
                wzDialog.dismiss();
            }
        });
        wzDialog.show();
    } catch (err) {
        print(err)
    }
}

function gm(w) {
    var va = android.text.InputType.TYPE_CLASS_TEXT;
    try {
        var layouty = new android.widget.LinearLayout(ctx);
        var srwz = new android.widget.EditText(ctx);
        var tz1 = new android.widget.Button(ctx);
        tz1.setText("随机生成")
        var tz = new android.widget.Button(ctx);
        tz.setText("确定")
        srwz.setHint("输入想改的名！");
        if (w == 2) {
            tz.setText("执行")
            srwz.setHint("输入想执行的代码！");
        }
        srwz.setInputType(va);
        layouty.setOrientation(android.widget.LinearLayout.VERTICAL);
        layouty.addView(srwz);
        if (w != 2) layouty.addView(tz1);
        layouty.addView(tz);
        var wzDialog = new android.app.Dialog(ctx);
        wzDialog.setContentView(layouty);
        wzDialog.setTitle("你想改成什么？");
        if (w == 2) wzDialog.setTitle("你想执行什么？");
        tz.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                if (w == 0) {
                    Entity.setNameTag(getPlayerEnt(), srwz.getText());
                }
                if (w == 1) {
                    gwj(srwz.getText());
                }
                if (w == 2) {
                    try {
                        eval("" + srwz.getText());
                    } catch (e) {
                        print("执行失败\n" + e)
                    };
                }
                wzDialog.dismiss()
            }
        });
        tz1.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                srwz.setText(sjzm());
            }
        });
        wzDialog.show();
    } catch (err) {
        print(err)
    }
}

function gm2(ww) {
    var va = android.text.InputType.TYPE_CLASS_TEXT;
    var va1 = android.text.InputType.TYPE_CLASS_TEXT;
    try {
        var layouty = new android.widget.LinearLayout(ctx);
        var srwz = new android.widget.EditText(ctx);
        var srwz2 = new android.widget.EditText(ctx);
        var tz = new android.widget.Button(ctx);
        tz.setText("确定")
        srwz.setHint("输入想改的名！");
        srwz.setText("§4系统");
        srwz.setInputType(va);
        srwz2.setHint("输入伪造内容！");
        srwz2.setInputType(va1);
        layouty.setOrientation(android.widget.LinearLayout.VERTICAL);
        layouty.addView(srwz);
        layouty.addView(srwz2);
        layouty.addView(tz);
        var wzDialog = new android.app.Dialog(ctx);
        wzDialog.setContentView(layouty);
        wzDialog.setTitle("你想伪造什么信息？");
        tz.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                if (ww == 0) {
                    fswz(srwz.getText(), srwz2.getText());
                }
                if (ww == 1) {
                    fswz(srwz.getText(), srwz2.getText());
                    Entity.setNameTag(getPlayerEnt(), srwz.getText());
                }
                wzDialog.dismiss()
            }
        });
        wzDialog.show();
    } catch (err) {
        print(err)
    }
}

function fswz(m, S) {
    var ming = Entity.getNameTag(getPlayerEnt());
    Entity.setNameTag(getPlayerEnt(), m);
    Server.sendChat(S);
    Entity.setNameTag(getPlayerEnt(), ming)
}

function tmi() {
    var va = android.text.InputType.TYPE_CLASS_NUMBER;
    try {
        var layouty = new android.widget.LinearLayout(ctx);
        var tz = new android.widget.Button(ctx);
        tz.setText("添加")
        var srid = new android.widget.EditText(ctx);
        var srsl = new android.widget.EditText(ctx);
        var srts = new android.widget.EditText(ctx);
        srid.setHint("输入想添加物品ID！");
        srid.setInputType(va);
        srsl.setHint("输入想添加物品的数量！");
        srsl.setInputType(va);
        srts.setHint("输入想添加物品的特殊值！");
        srts.setInputType(va);
        layouty.setOrientation(android.widget.LinearLayout.VERTICAL);
        layouty.addView(srid);
        layouty.addView(srsl);
        layouty.addView(srts);
        layouty.addView(tz);
        var wzDialog = new android.app.Dialog(ctx);
        wzDialog.setContentView(layouty);
        wzDialog.setTitle("添加物品到你的背包");
        tz.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                Player.addItemInventory(srid.getText(), srsl.getText(), srts.getText());
                wzDialog.dismiss()
            }
        });
        wzDialog.show();
    } catch (err) {
        print(err)
    }
}

function gy() {
    var va = android.text.InputType.TYPE_CLASS_TEXT;
    try {
        var layouty = new android.widget.LinearLayout(ctx);
        var tz = new android.widget.Button(ctx);
        tz.setText("确定")
        var tv1 = new android.widget.TextView(ctx)
        tv1.setText("作者贴吧id:@q932610964,也可加入QQ群:114331913一起交流！点击蓝字复制群号！\n\n\n");
        tv1.setTextSize(15);
        tv1.setTextColor(android.graphics.Color.rgb(25, 55, 255));
        tv1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function() {
                var copy = ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
                copy.setText("114331913");
                t("已复制");
            }
        }));
        layouty.addView(tv1)

        var tv2 = new android.widget.TextView(ctx)
        tv2.setText("作者QQ:看我的贴吧ID啊！。。还不知道\u3c0_\u3c0，好吧ヽ( ￣\u434￣;)ノ，告诉你，932610964,点击复制作者QQ号");
        tv2.setTextSize(15);
        tv2.setTextColor(android.graphics.Color.rgb(25, 255, 55));
        tv2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function() {
                var copy = ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
                copy.setText("932610964");
                彩蛋嘿嘿嘿++;
                t("已复制");
            }
        }));
        layouty.addView(tv2)


        layouty.setOrientation(android.widget.LinearLayout.VERTICAL);
        layouty.addView(tz);
        var wzDialog = new android.app.Dialog(ctx);
        wzDialog.setContentView(layouty);
        wzDialog.setTitle("关于");
        tz.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(p1) {
                if (彩蛋嘿嘿嘿 == 10) {
                    t("触发彩蛋");
                    openURL("https://www.maomiav.info");
                }
                彩蛋嘿嘿嘿 = 0;
                wzDialog.dismiss();
            }
        });
        wzDialog.show();
    } catch (err) {
        print(err)
    }
}


function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function makeMenu1(ctx, menu1, layout) {
    var mlayout = new android.widget.RelativeLayout(ctx)
    var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    var scrollview = new android.widget.ScrollView(ctx)
    var pad = dip2px(ctx, 5)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    return mlayout
}

function makeMenu(ctx, layout) {
    var mlayout = new android.widget.RelativeLayout(ctx)
    var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    var scrollview = new android.widget.ScrollView(ctx)
    var pad = dip2px(ctx, 2)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    return mlayout
}

function addbutton(ctx, layout, m, S, s) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var button = new android.widget.TextView(ctx)
                button.setText(S)
                button.setTextSize(s);
                button.setTextColor(android.graphics.Color.rgb(255, 255, 255));
                button.setOnClickListener(new android.view.View.OnClickListener({  
                    onClick: function(viewarg) {
                        kkkk = false;
                        wjcz(m);
                    }
                }));
                layout.addView(button);
            } catch (err) {
                print(err)
            }
        }
    }))
}

function useItem(x, y, z, a, b, s, d) {
    if (mw == true) {
        preventDefault();
        Level.destroyBlock(x, y, z, false);
    }
    if (b == 7 && sds) {
        preventDefault();
        sdph();
    }
}

function zbqt() {
    for (m in wp) {
        if (m != 6 && m != 7) Player.addItemInventory(wp[m], 1, 0);
        if (m == 6) Player.addItemInventory(wp[m], 64, 8);
        if (m == 7) Player.addItemInventory(wp[m], 64, 24);
    }
    for (var i = 0; i < 45; i++) {
        fm(i)
    }
}

function fm(s) {
    Player.enchant(s, Enchantment.THORNS, 6666)

    Player.enchant(s, Enchantment.SHARPNESS, 6666)

    Player.enchant(s, Enchantment.KNOCKBACK, 6666)

    Player.enchant(s, Enchantment.PUNCH, 6666)

    Player.enchant(s, Enchantment.PROTECTION, 6666)

    Player.enchant(s, Enchantment.UNBREAKING, 6666)

    Player.enchant(s, Enchantment.EFFICIENCY, 6666)

    Player.enchant(s, Enchantment.INFINITY, 6666)

    Player.enchant(s, Enchantment.BLAST_PROTECTION, 6666)

    Player.enchant(s, Enchantment.POWER, 6666)

    Player.enchant(s, Enchantment.FIRE_ASPECT, 6666)

    Player.enchant(s, Enchantment.POWER, 6666)

    Player.enchant(s, Enchantment.PROJECTILE_PROTECTION, 6666)



}

function modTick() {
        var allplayer = Server.getAllPlayers();
        if (wjs.length < allplayer.length) {
            for (var i = 0; i < allplayer.length; i++) {
                if (allplayer[i] != wjs[i]) {
                    ts("§6" + Entity.getNameTag(allplayer[i]) + "加入游戏！");
                    break;
                }
            }
            wjs = allplayer;
        }

        if (k == true) {
            fm(Player.getSelectedSlotId());
        }

        if (kkkk == true) {
            wjxl(wjid);
        }
    }
    /**/
    //此处代码从jside中获得，但时间太久，实在记不得是谁的了！

function openURL(URLL) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var menu1 = new android.widget.PopupWindow(layout)
                menu1.setFocusable(true)
                layout.setOrientation(1)
                var layout = new android.widget.LinearLayout(ctx);
                var webview = new android.webkit.WebView(ctx);
                webview.getSettings().setJavaScriptEnabled(true);
                webview.loadUrl(URLL);
                var abc = new android.webkit.WebViewClient();
                webview.setWebViewClient(abc);
                layout.addView(webview);
                var mlayout = makeMenu1(ctx, menu1, layout)
                menu1.setContentView(mlayout)
                menu1.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth())
                menu1.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
                menu1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
                menu1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0)
            } catch (err) {
                clientMessage("错误: " + err + ".")
            }
        }
    }))
}


function gwj(S) {
    var wenj = ""
    var iO = java.io.BufferedReader(new java.io.FileReader(sdcard + "/games/com.mojang/minecraftpe/options.txt"));
    var zfc = iO.readLine();
    while (zfc) {
        wenj += zfc + "\n";
        zfc = iO.readLine();
    }
    new java.io.FileOutputStream(sdcard + "/games/com.mojang/minecraftpe/options.txt").write(new java.lang.String("" + wenj.replace(/mp_username:.*/g, "mp_username:" + S)).getBytes());
}

function sj(a, b) {
    var result = Math.floor(Math.random() * (b + 1 - a) + a);
    return result;
}

function deathHook(p, e) {
    if (e == getPlayerEnt()) {
        for (var i = 0; i < 45; i++) {
            Player.clearInventorySlot(i);
        }
    }
}

function dkwy(uri) {
    ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(uri)))
}

function t(str) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            android.widget.Toast.makeText(ctx, str, 0).show();
        }
    }))
}

function wjxl(id) {
    var x = Entity.getX(id) - 1;
    var y = Entity.getY(id) - 4;
    var z = Entity.getZ(id) - 1;
    for (var xx = 1; xx < 4; xx++) {
        for (var yy = 1; yy < 3; yy++) {
            for (var zz = 1; zz < 4; zz++) {
                destory(x + xx, y + yy, z + zz);
            }
        }
    }
}

function getq(x, y, z, r) {
    result = [
        [],
        [],
        []
    ]
    for (var i = -r; i <= r; i++) {
        for (var j = -r; j <= r; j++) {
            for (var k = -r; k <= r; k++) {
                if (i * i + j * j + k * k < r * r) {
                    result[0].push(x + i);
                    result[1].push(y + j);
                    result[2].push(z + k);
                }
            }
        }
    }
    return result;
}

function pdjy(x, y, z) {
    if (getTile(x, y, z) == 7) {
        return true
    } else {
        return false;
    }
}

function sdph() {
    var zb = getq(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()), Entity.getZ(getPlayerEnt()), 5)
    for (m in zb[0]) {
        if (pdjy(zb[0][m], zb[1][m], zb[2][m])) destory(zb[0][m], zb[1][m], zb[2][m]);
    }
}

function destory(x, y, z) {
    if (getTile(x, y, z) != 0 && getTile(x, y, z) != 95) {
        Level.destroyBlock(x, y, z, false);
    }
}

function sjzm() {
    var aph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    result = "" + aph[sj(26, 51)] + aph[sj(0, 25)] + aph[sj(0, 25)] + aph[sj(0, 25)] + aph[sj(0, 25)]
    return result;
}

function ts(String) {
    clientMessage(String);
}

function 初始化() {
    wj = [];
    wjs = [];
}

function leaveGame() {
    初始化();
}