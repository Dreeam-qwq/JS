FontColor = function(text) {
    var colors = [
        [" ", " &nbsp;"],
        ["\n", "<br/>"],
        ["§l", "</b><b>"],
        ["§m", "</del><del>"],
        ["§n", "</ins><ins>"],
        ["§o", "</i><i>"],
        ["§r", "</font></b></del></ins></i>"],
        ["§0", "</font><font color=#000000>"],
        ["§1", "</font><font color=#0000AA>"],
        ["§2", "</font><font color=#00AA00>"],
        ["§3", "</font><font color=#00AAAA>"],
        ["§4", "</font><font color=#AA0000>"],
        ["§5", "</font><font color=#AA00AA>"],
        ["§6", "</font><font color=#FFAA00>"],
        ["§7", "</font><font color=#cccccc>"],
        ["§8", "</font><font color=#555555>"],
        ["§9", "</font><font color=#5555FF>"],
        ["§a", "</font><font color=#55FF55>"],
        ["§b", "</font><font color=#55FFFF>"],
        ["§c", "</font><font color=#FF5555>"],
        ["§d", "</font><font color=#FF55FF>"],
        ["§e", "</font><font color=#FFFF55>"],
        ["§f", "</font><font color=#FFFFFF>"]
    ];
    for (var e in colors) {
        text = text.split(colors[e][0]).join(colors[e][1]);
    };
    return android.text.Html.fromHtml(text);
}

function 彩字(text) {
    var colors = [
        [" ", " &nbsp;"],
        ["\n", "<br/>"],
        ["§l", "</b><b>"],
        ["§m", "</del><del>"],
        ["§n", "</ins><ins>"],
        ["§o", "</i><i>"],
        ["§r", "</font></b></del></ins></i>"],
        ["§0", "</font><font color=#000000>"],
        ["§1", "</font><font color=#0000AA>"],
        ["§2", "</font><font color=#00AA00>"],
        ["§3", "</font><font color=#00AAAA>"],
        ["§4", "</font><font color=#AA0000>"],
        ["§5", "</font><font color=#AA00AA>"],
        ["§6", "</font><font color=#FFAA00>"],
        ["§7", "</font><font color=#cccccc>"],
        ["§8", "</font><font color=#555555>"],
        ["§9", "</font><font color=#5555FF>"],
        ["§a", "</font><font color=#00AA00>"],
        ["§b", "</font><font color=#0000AA>"],
        ["§c", "</font><font color=#AA0000>"],
        ["§d", "</font><font color=#AA00AA>"],
        ["§e", "</font><font color=#FFAA00>"],
        ["§f", "</font><font color=#FFFFFF>"]
    ];
    for (var e in colors) {
        text = text.split(colors[e][0]).join(colors[e][1]);
    };
    return android.text.Html.fromHtml(text);
}

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    wg = android.widget,
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
    iniPath = root + "/games/com.mojang",
    iniName = "-049592568.ini",
    shield = ["闪电侠", "超级跳跃", "末影使者", "点我使用展示功能", "跳跃信标", "entity"];
var radarPic = grap.Bitmap.createBitmap(hei / 3, hei / 3, grap.Bitmap.Config.ARGB_8888),
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
    d;
var lie按钮, 显示lie按钮, 搭路按钮, 显示搭路按钮, 显示上下按钮, 上按钮, 下按钮, 显示冲按钮, 冲按钮, 显示跳按钮, 跳按钮, 显示挖床按钮, 挖按钮, 换按钮, 显示飞按钮, 飞按钮, 传按钮, 显示传按钮, 绑喵绕按钮, 显示绑喵绕, 漫步按钮, 显示漫按钮, 黑洞杀按钮, 显示黑洞杀按钮, 方框透视;
var zimiao, bang, rao, 喵 = false,
    长臂 = false,
    漫步, 显示界面 = 1,
    黑洞杀 = false,
    回弹 = false;
var win1 = new android.widget.PopupWindow(ctx),
    winsee = false,
    win2 = new android.widget.PopupWindow(),
    win3 = new android.widget.PopupWindow(),
    联机 = new android.widget.PopupWindow(ctx),
    传 = new android.widget.PopupWindow(ctx);
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLUE); //按钮内部颜色
bg.setStroke(1, android.graphics.Color.BLUE); //按钮边框
bg.setCornerRadius(28); //按钮圆角半径
bg.setAlpha(0); //不透明度0为全透明，255为不透明

var 作者QQ = "§b2323620251§r"
var JS作者 = "§4林十安§r"
var JS注释 = "§cJS永久免费！§r"
var JS版本 = "Res";
var 声明 = ("请仔细阅读以下内容:\n__-------------------------------------__\n1.使用此脚本代表你同意所有条款:\n2.禁止无权破解，二改，盗卖此脚本\n3.脚本中可能存在未授权的代码，已尽力联系作者，如有疏漏造成侵权，请与我联系\n4.请勿使用第三方未授权之魔改端，使用后造成任何损失本人一概不负责\n5.违约将会停用您对此脚本的授权\n6.所有相关条例之解释权归作者所有");
var 公告 = FontColor(
    "暗杀Find系列" + JS注释 + "\n当前JS版本" + JS版本 + "\n\n" + "§l§1|JS简介|§c#0§r\n暗杀Find " + JS版本 + " 暗杀Find系列js基于暗杀Find上添加功能，" + "是一个综合JS，各类功能都有。" + "使用本JS代表您已同意以下一点:" + "使用者自行承担使用本JS的后果。" + "Find X以上功能为" + JS作者 + "添加，" + "如有更好的建议，请加Q" + 作者QQ + "\n\n\n§l§1|更新内容|§c#1§r\nFind Max→Find Res\n" + "1.新增延迟测试\n" + "2.新增血量显示\n" + "3.真·创造之手界面优化\n" + "4.时间管理界面优化\n" + "5.血量管理界面优化\n" + "6.按钮动画优化\n" + "7.撸方块改为真·创造之手\n" + "8.去除多余的撸方块功能，改为获取创造之手\n" + "9.加快暗杀速度\n" + "10.随机传送调整\n" + "11.方框透视调整\n" + "12.真·创造之手移动至生存界面\n" + "13.时间管理移动至生存界面\n" + "14.修复已知BUG\n" + "\n\n\n§l§1|更新内容|§c#2§r\nFind XS→Find Max\n" + "1.增加撸方块功能\n" + "2.新增撸基岩功能\n" + "3.新增撸黑曜石\n" + "4.新增撸末地折跃门\n" + "5.新增撸末地传送门\n" + "6.新增撸末地石\n" + "7.新增秒撸刷怪笼\n" + "8.新增秒撸各类石头\n" + "9.新增秒撸各类木板\n" + "10.一键拿物品增加三种崩服蛋\n" + "11.增加回血功能\n" + "12.增加血量清零功能\n" + "13.增加时间管理功能(自娱)\n" + "14.删除音乐播放器\n" + "\n\n\n§l§1|更新内容|§c#3§r\nFind X→Find XS\n" + "1.增加无限闪杀(可能会比环杀快)\n" + "2.修复环绕暗杀BUG，改为无限环绕暗杀\n" + "3.修复背后暗杀BUG，改为无限背后暗杀\n" + "4.增加添加物品\n" + "5.增加虚空回弹\n" + "6.增加随机传送\n" + "7.修复音乐播放器\n" + "8.更改字体颜色为橙色\n" + "9.刷物改为一键拿物品\n" + "10.一键拿物品增加更多物品\n" + "11.更新物品表，方块表\n" + "12.增加药水表，附魔箭表\n" + "13.修复设家的BUG\n" + "14.去除动态效果\n" + "15.功能归类\n" + "16.修复一些小BUG\n" + "倒卖狗真*死全家！\n" + "\n\n\n§l§1|更新内容|§c#4§r\nFind W→Find X\n" + "1.增加远程联网下载源码\n" + "2.增加框架透视\n" + "3.新增音乐播放器\n" + "4.彩字高清显示\n" + "5.修复绑/绕的BUG\n" + "\n\n\n§l§1|更新内容|§c#5§r\nFind V→find W\n" + "1.增加自动长臂，" + "对10格范围内的所有玩家有效。\n" + "2.减慢按钮拖动速度（与微端速度一致)\n" + "3.增加虚空漫游，" + "循环设置y轴速度为0(如出现缓慢下掉，属于正常情况)\n" + "4.修改刷物界面，支持快速刷物\n" + "5.修改药水添加方式\n" + "6.增加定位坐标功能(无法记录坐标）\n" + "7.增加了黑洞杀(仅联机可用)\n" + "8.更改暗杀按钮样式（图形、可拖动)\n" + "9.增加了公告界面\n\n\n" + "本JS永久免费！");

var Thread = new java.lang.Thread(
    new java.lang.Runnable({
        run: function() {
            while (true) {}
        }

    }));
Thread.start();

function runThread(func) {
    var a = new java.lang.Thread(new java.lang.Runnable({
        run: func
    }));
    a.start();
    return a;
}
var win1 = new android.widget.PopupWindow(ctx),
    winsee = false,
    win2 = new android.widget.PopupWindow(),
    win3 = new android.widget.PopupWindow(),
    联机 = new android.widget.PopupWindow(ctx),
    传 = new android.widget.PopupWindow(ctx);
if (!running) {
    running = true;
    Ui(function() {
        var 提示界面 = 提示(new android.text.Html.fromHtml("<b>公告</b>"), 公告, "知道了", true, function() {
            Ui(function() {
                主要按钮();
                a1 = NewView("LL", -2, -2, "CC", 1, 2, "#FFAA00", 90);
                c1 = NewText("暗杀Find " + JS版本, "CC", null, "#FFAA00");
                a1.addView(c1);
                b1 = NewCDV(2, "#FFFFFF", null, a1, -2, -2, false, true, "RB", 0, 0);
                提示界面.dismiss();
                顶部提示("点击按钮打开菜单");
            });
        });

    });
}
var 屏幕高度 = ctx.getWindowManager().getDefaultDisplay().getHeight();
var 屏幕宽度 = ctx.getWindowManager().getDefaultDisplay().getWidth();

function text(txt) {
    print(txt);
}

function windis(界面) {
    Ui(function() {
        if (界面 == null) {
            win1.dismiss();
        } else {
            界面.dismiss();
        }
    });
}




var CPU显示 = true;
var 网速显示 = true;

function 网速测试() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var A = new android.widget.LinearLayout(ctx);
                A.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                A.setOrientation(1);
                stitle5 = new android.widget.TextView(ctx)
                stitle5.setTextSize(10)
                stitle6 = new android.widget.TextView(ctx)
                stitle6.setTextSize(10)
                var Thread = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            try {
                                while (true) {
                                    Thread.sleep(700) //700
                                    if (网速显示 == true) {
                                        var 网络测试网址 = "https://m.speedtest.cn/"
                                        time = new Date();
                                        var url = new java.net.URL(网络测试网址);
                                        var uoc = url.openConnection();
                                        uoc.setConnectTimeout(50000);
                                        uoc.setRequestMethod("GET");
                                        uoc.setUseCaches(false);
                                        uoc.connect();
                                        网速 = new Date() - time;
                                        stitle5.setText(彩字("§r§l延迟:§a" + 网速 + " ms"))
                                        if (网速 > 50 && 网速 < 100) {
                                            stitle5.setText(彩字("§r§l延迟:§6" + 网速 + " ms"))
                                        }
                                        if (网速 > 100 && 网速 < 200) {
                                            stitle5.setText(彩字("§r§l延迟:§4" + 网速 + " ms"))
                                        }
                                        if (网速 < 50) {
                                            stitle5.setText(彩字("§r§l延迟:§a" + 网速 + " ms"))
                                        }
                                        if (网速 < 600) {
                                            stitle5.setText(彩字("§r§l延迟:§c" + 网速 + " ms"))
                                        }
                                        if (网速 > 200) {
                                            网速显示 = false
                                            网速显示 = true
                                        }
                                        var connection = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
                                        var info = connection.getActiveNetworkInfo();
                                        if (info = null) {
                                            stitle5.setText("无法链接服务器")
                                        }
                                    } else {
                                        stitle5.setText("")
                                    }
                                }
                            } catch (e) {
                                print("网络错误");
                                网速显示 = false;
                                重置网速();
                            }
                        }
                    }));
                Thread.start();

                function 重置网速() {
                    网速显示 = true;
                }
                var Thread1 = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            try {
                                while (true) {
                                    Thread.sleep(800)
                                    if (CPU显示 == true) {
                                        var path = "/proc/meminfo";
                                        var file = new java.io.File(path);
                                        var fr = new java.io.FileReader(file);
                                        var br = new java.io.BufferedReader(fr);
                                        eval("var mem={" + br.readLine().replace("kB", ",") + br.readLine().replace("kB", ",") + br.readLine().replace("kB", ",") + "};");
                                        var 结果 = (java.lang.String.format("%.2f%%", 100 * (mem.MemTotal - mem.MemAvailable) / mem.MemTotal))
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
                                print("错误")
                            }
                        }
                    }));
                Thread1.start();



                A.addView(stitle5);
                A.addView(stitle6);
                UIReveal(stitle5, 0, 0, 0, 1400, 2000)
                UIReveal(stitle6, 0, 0, 0, 1400, 2000)

                Cdkview = new android.widget.PopupWindow();
                Cdkview.setBackgroundDrawable(roundBG("#00FFFFFF", 20));
                Cdkview.setFocusable(false);
                Cdkview.setTouchable(true);
                Cdkview.setContentView(A);
                Cdkview.setWidth(W() * 0.1);
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


function Err(a1, a2, a3, a4) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var ERR = new android.widget.LinearLayout(ctx);
                ERR.setGravity(android.view.Gravity.TOP | android.view.Gravity.CENTER);
                ERR.setOrientation(1);
                var B = new android.widget.LinearLayout(ctx);
                B.setGravity(android.vi1ew.Gravity.CENTER | android.view.Gravity.CENTER);
                B.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.44, H() * 0.4));
                B.setBackgroundDrawable(roundBG("#56a9a9a9", 10));
                var C = new android.widget.LinearLayout(ctx);
                C.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                C.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.44, H() * 0.038));
                C.setBackgroundDrawable(roundBG("#ffffffff", 10));
                var D = new android.widget.LinearLayout(ctx);
                D.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                D.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.44, H() * 0.05));
                D.setBackgroundDrawable(roundBG("#56a9a9a9", 10));

                var T3 = new android.widget.TextView(ctx)
                T3.setText("")
                T3.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                T3.setTextSize(20)
                T3.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                T3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {

                    }
                }))
                ERR.addView(T3)

                var T2 = new android.widget.TextView(ctx);
                T2.setText("出错了！\n错误信息：\n\n出错类型：" + a1 + "-" + a2 + "\n出错原因：" + a3 + "\n出错行数：" + a4)
                T2.setTextSize(14);
                T2.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                B.addView(T2)

                var T1 = new android.widget.TextView(ctx)
                T1.setText("关闭")
                T1.setTextColor(android.graphics.Color.parseColor("#f00f0f0f"));
                T1.setTextSize(16)
                T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                T1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {
                        Errview.dismiss()
                    }
                }))
                D.addView(T1)

                ERR.addView(B);
                ERR.addView(C);
                UIReveal(C, 0, 0, 0, 1400, 2000)
                ERR.addView(D);


                Errview = new android.widget.PopupWindow();
                Errview.setBackgroundDrawable(roundBG("#ffffffff", 20));
                Errview.setFocusable(false);
                Errview.setTouchable(true);
                Errview.setContentView(ERR);
                Errview.setWidth(W() * 0.5);
                Errview.setHeight(H() * 0.6);
                Errview.setAnimationStyle(android.R.style.Animation_Dialog);
                Errview.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
                //Cdkview.dismiss()
            } catch (e) {
                print(e)
            }
        }
    }));
};

function ER(er) {
    var error = er.name;
    var TA = "";
    var TB = "";
    if (error.equalsIgnoreCase("SyntaxError")) {
        TA = "语法错误";
    };
    if (error.equalsIgnoreCase("ReferenceError")) {
        TA = "参考错误";
    };
    if (error.equalsIgnoreCase("RangeError")) {
        TA = "范围非法";
    };
    if (error.equalsIgnoreCase("TypeError")) {
        TA = "类型错误";
    };
    if (error.equalsIgnoreCase("EvalError")) {
        TA = "非法调用";
    };
    if (error.equalsIgnoreCase("URIError")) {
        TA = "非法进制";
    };
    if (error.equalsIgnoreCase("InternalError")) {
        TA = "内部错误";
    };
    if (error.equalsIgnoreCase("undefined")) {
        TA = "未知";
    };
    Err(error, TA, er.message, er.stack);

};

function 第一次进入() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                vn1 = NewView("LL", W(), H(), "CC", 1, 2, null, 0, null);
                t1 = NewText("原作:digyth", "CC", 18, "#FFAA00");
                vn1.addView(t1);
                pl1 = NewCDV(1, "#ffffff", 0, vn1, -1, -1, false, true, "CC", 0, 0);
                UIFadein(vn1, 0, 100, 1000);
            } catch (err) {
                print(err)
            }
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    UIFadein(vn1, 100, 0, 1000);
                }
            }), 2000)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    t1.setText("");
                }
            }), 3000)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    t1.setText(FontColor("综合JS"));
                    UIFadein(vn1, 0, 100, 1000);
                }
            }), 3250)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    UIFadein(vn1, 100, 0, 1000);
                }
            }), 5250)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    t1.setText("");
                }
            }), 6250)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    t1.setText(FontColor("暗杀Find " + JS版本));
                    t1.setTextColor(android.graphics.Color.parseColor("#E53935"));
                    t1.setTextSize(28);
                    UIFadein(vn1, 0, 100, 1000);
                }
            }), 6500)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    UIFadein(vn1, 100, 0, 1000);
                }
            }), 8500)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    t1.setText("");
                }
            }), 9500)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    pl1.dismiss();
                }
            }), 10000)
        }
    }));
}

if (readtext("/storage/emulated/0/第一次进入" + JS版本 + ".java") == "") {
    第一次进入();
    try {
        var FW = new java.io.FileWriter(new java.io.File(String("/storage/emulated/0/第一次进入" + JS版本 + ".java")));
        FW.write(JS版本);
        FW.close();
    } catch (e) {
        print("写入文件失败");
    }
}

function 漫() {
    Ui(function() {
        漫步按钮 = 拖动按钮("漫", W() / 8, H() - H() / 5, H() / 10, H() / 10, "if(漫步){漫步=false;showTip('虚空漫游已关闭');}else{漫步=true;虚空漫游();showTip('虚空漫游已开启');}", true);
    });
}

function 虚空漫游() {
    runThread(function() {
        try {
            while (漫步) {
                Entity.setVelY(getPlayerEnt(), 0);
                lang.Thread.sleep(1);
            }
        } catch (err) {
            print(err);
        }
    });
}

function 搭() {
    Ui(function() {
        搭路按钮 = 拖动按钮("搭", W() - W() / 8, H() - H() / 5, H() / 10, H() / 10, "if(da){da=false;clientMessage('自动搭路已关闭');}else{da=true;搭路();clientMessage('自动搭路已开启');}", true);
    });
}

function 吸按钮() {
    Ui(function() {
        黑洞杀按钮 = 拖动按钮("吸", W() - W() / 3, H() - H() / 5, H() / 10, H() / 10, "if(黑洞杀==true){黑洞杀=false;顶部提示('黑洞杀已关闭');}else{黑洞杀=true;黑洞吸();顶部提示('黑洞杀已开启');}", true);
    });
}

function 显血() {
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
    //小阳原创搭路算法

function 搭路() {
    runThread(
        function() {
            try {
                if (da) {
                    while (da) {
                        setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 20, 0);

                        setTile(Player.getX(), Player.getY() - 2, Player.getZ() + 1, 20, 0);

                        setTile(Player.getX(), Player.getY() - 2, Player.getZ() - 1, 20, 0);

                        setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ(), 20, 0);

                        setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ(), 20, 0);

                        setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);

                        setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() + 1, 20, 0);

                        setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);

                        setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() - 1, 20, 0);

                        lang.Thread.sleep(14);
                    }
                }
            } catch (err) {
                print(err);
            }
        }
    );
}



function 飞() {
    Ui(function() {
        飞按钮 = 拖动按钮("飞", W() * 0.2, H() / 5 * 3, H() / 10, H() / 10, function() {
            fly();
        })
    });
}


function 传送按钮() {
    Ui(function() {
        传按钮 = 拖动按钮("传", W() * 0.15, H() / 5 * 3, H() / 10, H() / 10, function() {
            传送();
        })
    });
}

function 冲() {
    Ui(function() {
        冲按钮 = 拖动按钮("冲", W() * 0.9, H() / 4 * 2, H() / 10, H() / 10, function() {
            冲刺(getPlayerEnt(), 3, 2, 3);
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

function 上() {
    Ui(function() {
        上按钮 = 拖动按钮("上", 0, H() - H() / 3, H() / 10, H() / 10, function() {
            Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 5, Player.getZ())
            Player.setFlying(false);
        })
    });
}

function 下() {
    Ui(function() {
        下按钮 = 拖动按钮("下", 0, H() - H() / 3 - 100, H() / 10, H() / 10, function() {
            Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() - 5, Player.getZ())
            Player.setFlying(false)
        })
    });
}

function 跳() {
    Ui(function() {
        跳按钮 = 拖动按钮("跳", 0, H() / 5, H() / 10, H() / 10, function() {
            Entity.setVelY(getPlayerEnt(), 0.5)
        });
    });
}

var 起床配置 = 0;
var 传床 = 0;

function 挖() {
    Ui(function() {
        挖按钮 = 拖动按钮("挖", W() / 6, H() - H() / 5, H() / 10, H() / 10, function() {
            一键挖床();
        });
    });
}

function 换() {
    Ui(function() {
        换按钮 = 拖动按钮("换", W() / 6 + 90, H() - H() / 5, H() / 10, H() / 10, function() {
            切换起床配置();
        });
    });
}


function 切换起床配置() {
    if ((起床配置 == 0)) {
        起床配置 = 1;
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§e下载完成");
        print("By TD")
    }
    if ((起床配置 == 6)) {
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§b当前配置为海底世界");
        print("当前配置为海底世界")
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
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§5当前配置为石门之泽");
        print("当前配置为石门之泽")
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
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§4当前配置为石坛");
        print("当前配置为石坛")
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
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§3当前配置为女巫花园");
        print("当前配置为女巫花园");
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
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§2当前配置为易拉罐");
        print("当前配置为易拉罐");
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
        MCPE_GUI_SHOW_CLIENT_MESSAGE("§1当前配置为水果派对");
        print("当前配置为水果派对");
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
    MCPE_GUI_SHOW_CLIENT_MESSAGE((~~(getPlayerX() * 100) / 100), (~~(getPlayerY() * 100) / 100), (~~(getPlayerZ() * 100) / 100));
}

function 重置js() {
    MCPE_GUI_SHOW_CLIENT_MESSAGE("已经帮你重置了");
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




function 一键挖床() {
    if ((传床 == 0)) {
        MCPE_GUI_SHOW_CLIENT_MESSAGE('⚠你还没有选择配置️，请先点换选择配置');
        print("未检测到配置")
    }
    if ((传床 == 8)) {
        Entity.setPosition(Player.getEntity(), 床8x, 床y, 床8z);
        停();
        传床 = 9;
    }
    if ((传床 == 7)) {
        Entity.setPosition(Player.getEntity(), 床7x, 床y, 床7z);
        停();
        传床 = 8;
    }
    if ((传床 == 6)) {
        Entity.setPosition(Player.getEntity(), 床6x, 床y, 床6z);
        停();
        传床 = 7;
    }
    if ((传床 == 5)) {
        Entity.setPosition(Player.getEntity(), 床5x, 床y, 床5z);
        停();
        传床 = 6;
        MCPE_GUI_SHOW_CLIENT_MESSAGE('');
    }
    if ((传床 == 4)) {
        Entity.setPosition(Player.getEntity(), 床4x, 床y, 床4z);
        停();
        传床 = 5;
    }
    if ((传床 == 3)) {
        Entity.setPosition(Player.getEntity(), 床3x, 床y, 床3z);
        停();
        传床 = 4;
    }
    if ((传床 == 2)) {
        Entity.setPosition(Player.getEntity(), 床2x, 床y, 床2z);
        停();
        传床 = 3;
    }
    if ((传床 == 1)) {
        Entity.setPosition(Player.getEntity(), 床1x, 床y, 床1z);
        停();
        传床 = 2;
    }
    if ((传床 == 9)) {
        传床 = 1;
        print("所有蛋糕已清除，本次挖床结束")
    }
}


function MCPE_GUI_SHOW_CLIENT_MESSAGE() {
    var msg_list = [];
    for (var i = 0; i < arguments.length; i++) {
        msg_list.push(arguments[i]);
    }
    clientMessage(msg_list);
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
            showTip(err, 1);
        }
    });
}

//自动进程1
runThread(function() {
    while (true) {
        if (喵 == false && bang == true) {
            // print("test");
            if (getNearestEntity(10) != null) {
                绑绕(getNearestEntity(10), false);
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

//自动进程2
runThread(function() {
    while (true) {
        if (喵 == false && rao == true) {
            if (getNearestEntity(10) != null) {
                绑绕(getNearestEntity(10), true);
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

//自动进程3
var Thread = new java.lang.Thread(
    new java.lang.Runnable({
        run: function() {
            while (true) {
                function 设置家() {
                    homes = {
                        设x: Player.getX(),
                        设y: Player.getY() + 1,
                        设z: Player.getZ()
                    };
                    return true;
                }

                function 回家() {
                    Entity.setPosition(Player.getEntity(), homes.设x, homes.设y, homes.设z);
                }
                Thread.sleep(200)
                var yy1 = Player.getY()
                var 速度 = (Math.sqrt((yy1 - yy2) * (yy1 - yy2)) * 4).toFixed(1);
                var yy2 = Player.getY()
                if (回弹 == true) {
                    if (速度 > 10) {
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


function 自瞄() {
        if (zimiao) {
            zimiao = false;
        } else {
            zimiao = true;
            try {
                runThread(function() {
                    while (zimiao) {
                        aimAtEnt(getNearestEntity(10));
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


function 拖动按钮(txt, 距离右侧, 距离底部, 宽度, 高度, command, 变色) {
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
                        按钮 = NewView("LL", 宽度, 高度, "CC", 0, 2, "#ffffff", 15);
                    var 按钮1 = NewText(txt, "CC", 14, "#FFAA00");
                    按钮.addView(按钮1);
                    //界面.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,0,25,15)));
                    var 背景 = new android.graphics.drawable.GradientDrawable();
                    背景.setCornerRadius(15);
                    背景.setColor(android.graphics.Color.WHITE);
                    背景.setAlpha(150);
                    按钮.setBackground(背景);

                    if (command && 变色) {
                        按钮颜色(按钮1, 按钮, command);
                    } else if (command) 按钮.setOnClickListener(new view.View.OnClickListener({
                        onClick: command
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
                    UIReveal(按钮, 0, 0, 0, 1400, 2000);
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

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function 绑喵绕() {
    var command;
    var 绑按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null),
        喵按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null),
        绕按钮 = NewView("LL", W() / 19, H() * 0.1, "CC", 0, 2, null, null)
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var 坐标x = W() / 4,
        坐标y = H() / 5 * 2,
        坐标x1, 坐标y1, 坐标x2, 坐标y2;
    绑喵绕按钮 = new android.widget.PopupWindow();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var 绑按钮1 = NewText("绑", "CC", 14, "#FFAA00"),
                    喵按钮1 = NewText("喵", "CC", 14, "#FFAA00"),
                    绕按钮1 = NewText("绕", "CC", 14, "#FFAA00");
                绑按钮.addView(绑按钮1);
                喵按钮.addView(喵按钮1);
                绕按钮.addView(绕按钮1);

                var layout = new android.widget.RelativeLayout(ctx),
                    界面 = NewView("LL", -2, H() * 0.1, "CC", 0, 2, "#ffffff", 15);
                界面.addView(绑按钮);
                界面.addView(喵按钮);
                界面.addView(绕按钮);
                var 绑颜色 = false;
                var 绕颜色 = false;
                var 喵颜色 = false
                绑按钮.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        eval("绑();绕颜色=false;绕按钮1.setTextColor(android.graphics.Color.parseColor('#FFAA00'));");
                        if (绑颜色) {
                            绑按钮1.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                            绑颜色 = false;
                        } else {
                            绑按钮1.setTextColor(android.graphics.Color.parseColor("#F44336"));
                            绑颜色 = true;
                        }
                    }
                }));
                绕按钮.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        eval("绕();绑颜色=false;绑按钮1.setTextColor(android.graphics.Color.parseColor('#FFAA00'));");
                        if (绕颜色) {
                            绕按钮1.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                            绕颜色 = false;
                        } else {
                            绕按钮1.setTextColor(android.graphics.Color.parseColor("#F44336"));
                            绕颜色 = true;
                        }
                    }
                }));
                喵按钮.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        自瞄();
                        if (喵颜色) {
                            喵按钮1.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                            喵颜色 = false;
                        } else {
                            喵按钮1.setTextColor(android.graphics.Color.parseColor("#F44336"));
                            喵颜色 = true;
                        }
                    }
                }));
                //界面.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,0,25,15)));
                var 背景 = new android.graphics.drawable.GradientDrawable();
                背景.setCornerRadius(15);
                背景.setColor(android.graphics.Color.WHITE);
                背景.setAlpha(150);
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
                UIReveal(界面, 0, 0, 0, 1400, 2000);
                绑喵绕按钮.setContentView(layout);
                绑喵绕按钮.setWidth(-2);
                绑喵绕按钮.setHeight(H() * 0.1);
                绑喵绕按钮.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                绑喵绕按钮.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);

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
                文字.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                颜色 = false;
            } else {
                文字.setTextColor(android.graphics.Color.parseColor("#F44336"));
                颜色 = true;
            }
        }
    }));
    return 颜色;
}




//随机传送
function 随机() {
    setPosition(getPlayerEnt(), getPlayerX() + 200, getPlayerY() + 20, getPlayerZ(Player.getPointedVecZ()) + 2000);
}


//撸方块
function 撸方块() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var use1 = new android.widget.Button(ctx)
        use1.setText("开启创造之手")
        use1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Block.setDestroyTime("1", "0");
                Block.setDestroyTime("2", "0");
                Block.setDestroyTime("3", "0");
                Block.setDestroyTime("4", "0");
                Block.setDestroyTime("5", "0");
                Block.setDestroyTime("6", "0");
                Block.setDestroyTime("7", "0");
                Block.setDestroyTime("8", "0");
                Block.setDestroyTime("9", "0");
                Block.setDestroyTime("10", "0");
                Block.setDestroyTime("11", "0");
                Block.setDestroyTime("12", "0");
                Block.setDestroyTime("13", "0");
                Block.setDestroyTime("14", "0");
                Block.setDestroyTime("15", "0");
                Block.setDestroyTime("16", "0");
                Block.setDestroyTime("17", "0");
                Block.setDestroyTime("18", "0");
                Block.setDestroyTime("19", "0");
                Block.setDestroyTime("20", "0");
                Block.setDestroyTime("21", "0");
                Block.setDestroyTime("22", "0");
                Block.setDestroyTime("23", "0");
                Block.setDestroyTime("24", "0");
                Block.setDestroyTime("25", "0");
                Block.setDestroyTime("26", "0");
                Block.setDestroyTime("27", "0");
                Block.setDestroyTime("28", "0");
                Block.setDestroyTime("29", "0");
                Block.setDestroyTime("30", "0");
                Block.setDestroyTime("31", "0");
                Block.setDestroyTime("32", "0");
                Block.setDestroyTime("33", "0");
                Block.setDestroyTime("34", "0");
                Block.setDestroyTime("35", "0");
                Block.setDestroyTime("36", "0");
                Block.setDestroyTime("37", "0");
                Block.setDestroyTime("38", "0");
                Block.setDestroyTime("39", "0");
                Block.setDestroyTime("40", "0");
                Block.setDestroyTime("41", "0");
                Block.setDestroyTime("42", "0");
                Block.setDestroyTime("43", "0");
                Block.setDestroyTime("44", "0");
                Block.setDestroyTime("45", "0");
                Block.setDestroyTime("46", "0");
                Block.setDestroyTime("47", "0");
                Block.setDestroyTime("48", "0");
                Block.setDestroyTime("49", "0");
                Block.setDestroyTime("50", "0");
                Block.setDestroyTime("51", "0");
                Block.setDestroyTime("52", "0");
                Block.setDestroyTime("53", "0");
                Block.setDestroyTime("54", "0");
                Block.setDestroyTime("55", "0");
                Block.setDestroyTime("56", "0");
                Block.setDestroyTime("57", "0");
                Block.setDestroyTime("58", "0");
                Block.setDestroyTime("59", "0");
                Block.setDestroyTime("60", "0");
                Block.setDestroyTime("61", "0");
                Block.setDestroyTime("62", "0");
                Block.setDestroyTime("63", "0");
                Block.setDestroyTime("64", "0");
                Block.setDestroyTime("65", "0");
                Block.setDestroyTime("66", "0");
                Block.setDestroyTime("67", "0");
                Block.setDestroyTime("68", "0");
                Block.setDestroyTime("69", "0");
                Block.setDestroyTime("70", "0");
                Block.setDestroyTime("71", "0");
                Block.setDestroyTime("72", "0");
                Block.setDestroyTime("73", "0");
                Block.setDestroyTime("74", "0");
                Block.setDestroyTime("75", "0");
                Block.setDestroyTime("76", "0");
                Block.setDestroyTime("77", "0");
                Block.setDestroyTime("78", "0");
                Block.setDestroyTime("79", "0");
                Block.setDestroyTime("80", "0");
                Block.setDestroyTime("81", "0");
                Block.setDestroyTime("82", "0");
                Block.setDestroyTime("83", "0");
                Block.setDestroyTime("84", "0");
                Block.setDestroyTime("85", "0");
                Block.setDestroyTime("86", "0");
                Block.setDestroyTime("87", "0");
                Block.setDestroyTime("88", "0");
                Block.setDestroyTime("89", "0");
                Block.setDestroyTime("90", "0");
                Block.setDestroyTime("91", "0");
                Block.setDestroyTime("92", "0");
                Block.setDestroyTime("93", "0");
                Block.setDestroyTime("94", "0");
                Block.setDestroyTime("95", "0");
                Block.setDestroyTime("96", "0");
                Block.setDestroyTime("97", "0");
                Block.setDestroyTime("98", "0");
                Block.setDestroyTime("99", "0");
                Block.setDestroyTime("100", "0");
                Block.setDestroyTime("101", "0");
                Block.setDestroyTime("102", "0");
                Block.setDestroyTime("103", "0");
                Block.setDestroyTime("104", "0");
                Block.setDestroyTime("105", "0");
                Block.setDestroyTime("106", "0");
                Block.setDestroyTime("107", "0");
                Block.setDestroyTime("108", "0");
                Block.setDestroyTime("109", "0");
                Block.setDestroyTime("110", "0");
                Block.setDestroyTime("111", "0");
                Block.setDestroyTime("112", "0");
                Block.setDestroyTime("113", "0");
                Block.setDestroyTime("114", "0");
                Block.setDestroyTime("115", "0");
                Block.setDestroyTime("116", "0");
                Block.setDestroyTime("117", "0");
                Block.setDestroyTime("118", "0");
                Block.setDestroyTime("119", "0");
                Block.setDestroyTime("120", "0");
                Block.setDestroyTime("121", "0");
                Block.setDestroyTime("122", "0");
                Block.setDestroyTime("123", "0");
                Block.setDestroyTime("124", "0");
                Block.setDestroyTime("125", "0");
                Block.setDestroyTime("126", "0");
                Block.setDestroyTime("127", "0");
                Block.setDestroyTime("128", "0");
                Block.setDestroyTime("129", "0");
                Block.setDestroyTime("130", "0");
                Block.setDestroyTime("131", "0");
                Block.setDestroyTime("132", "0");
                Block.setDestroyTime("133", "0");
                Block.setDestroyTime("134", "0");
                Block.setDestroyTime("135", "0");
                Block.setDestroyTime("136", "0");
                Block.setDestroyTime("137", "0");
                Block.setDestroyTime("138", "0");
                Block.setDestroyTime("139", "0");
                Block.setDestroyTime("140", "0");
                Block.setDestroyTime("141", "0");
                Block.setDestroyTime("142", "0");
                Block.setDestroyTime("143", "0");
                Block.setDestroyTime("144", "0");
                Block.setDestroyTime("145", "0");
                Block.setDestroyTime("146", "0");
                Block.setDestroyTime("147", "0");
                Block.setDestroyTime("148", "0");
                Block.setDestroyTime("149", "0");
                Block.setDestroyTime("150", "0");
                Block.setDestroyTime("151", "0");
                Block.setDestroyTime("152", "0");
                Block.setDestroyTime("153", "0");
                Block.setDestroyTime("154", "0");
                Block.setDestroyTime("155", "0");
                Block.setDestroyTime("156", "0");
                Block.setDestroyTime("157", "0");
                Block.setDestroyTime("158", "0");
                Block.setDestroyTime("159", "0");
                Block.setDestroyTime("160", "0");
                Block.setDestroyTime("161", "0");
                Block.setDestroyTime("162", "0");
                Block.setDestroyTime("163", "0");
                Block.setDestroyTime("164", "0");
                Block.setDestroyTime("165", "0");
                Block.setDestroyTime("166", "0");
                Block.setDestroyTime("167", "0");
                Block.setDestroyTime("168", "0");
                Block.setDestroyTime("169", "0");
                Block.setDestroyTime("170", "0");
                Block.setDestroyTime("171", "0");
                Block.setDestroyTime("172", "0");
                Block.setDestroyTime("173", "0");
                Block.setDestroyTime("174", "0");
                Block.setDestroyTime("175", "0");
                Block.setDestroyTime("176", "0");
                Block.setDestroyTime("177", "0");
                Block.setDestroyTime("178", "0");
                Block.setDestroyTime("179", "0");
                Block.setDestroyTime("180", "0");
                Block.setDestroyTime("181", "0");
                Block.setDestroyTime("182", "0");
                Block.setDestroyTime("183", "0");
                Block.setDestroyTime("184", "0");
                Block.setDestroyTime("185", "0");
                Block.setDestroyTime("186", "0");
                Block.setDestroyTime("187", "0");
                Block.setDestroyTime("188", "0");
                Block.setDestroyTime("189", "0");
                Block.setDestroyTime("190", "0");
                Block.setDestroyTime("191", "0");
                Block.setDestroyTime("192", "0");
                Block.setDestroyTime("193", "0");
                Block.setDestroyTime("194", "0");
                Block.setDestroyTime("195", "0");
                Block.setDestroyTime("196", "0");
                Block.setDestroyTime("197", "0");
                Block.setDestroyTime("198", "0");
                Block.setDestroyTime("199", "0");
                Block.setDestroyTime("200", "0");
                Block.setDestroyTime("201", "0");
                Block.setDestroyTime("202", "0");
                Block.setDestroyTime("203", "0");
                Block.setDestroyTime("204", "0");
                Block.setDestroyTime("205", "0");
                Block.setDestroyTime("206", "0");
                Block.setDestroyTime("207", "0");
                Block.setDestroyTime("208", "0");
                Block.setDestroyTime("209", "0");
                Block.setDestroyTime("210", "0");
                Block.setDestroyTime("211", "0");
                Block.setDestroyTime("212", "0");
                Block.setDestroyTime("213", "0");
                Block.setDestroyTime("214", "0");
                Block.setDestroyTime("215", "0");
                Block.setDestroyTime("216", "0");
                Block.setDestroyTime("217", "0");
                Block.setDestroyTime("218", "0");
                Block.setDestroyTime("219", "0");
                Block.setDestroyTime("220", "0");
                Block.setDestroyTime("221", "0");
                Block.setDestroyTime("222", "0");
                Block.setDestroyTime("223", "0");
                Block.setDestroyTime("224", "0");
                Block.setDestroyTime("225", "0");
                Block.setDestroyTime("226", "0");
                Block.setDestroyTime("227", "0");
                Block.setDestroyTime("228", "0");
                Block.setDestroyTime("229", "0");
                Block.setDestroyTime("230", "0");
                Block.setDestroyTime("231", "0");
                Block.setDestroyTime("232", "0");
                Block.setDestroyTime("233", "0");
                Block.setDestroyTime("234", "0");
                Block.setDestroyTime("235", "0");
                Block.setDestroyTime("236", "0");
                Block.setDestroyTime("237", "0");
                Block.setDestroyTime("238", "0");
                Block.setDestroyTime("239", "0");
                Block.setDestroyTime("240", "0");
                Block.setDestroyTime("241", "0");
                Block.setDestroyTime("242", "0");
                Block.setDestroyTime("243", "0");
                Block.setDestroyTime("244", "0");
                Block.setDestroyTime("245", "0");
                Block.setDestroyTime("246", "0");
                Block.setDestroyTime("247", "0");
                Block.setDestroyTime("248", "0");
                Block.setDestroyTime("249", "0");
                Block.setDestroyTime("250", "0");
                Block.setDestroyTime("251", "0");
                Block.setDestroyTime("252", "0");
                Block.setDestroyTime("253", "0");
                Block.setDestroyTime("254", "0");
                Block.setDestroyTime("255", "0");
                Block.setDestroyTime("256", "0");
                Block.setDestroyTime("257", "0");
                Block.setDestroyTime("258", "0");
                Block.setDestroyTime("259", "0");
                Block.setDestroyTime("260", "0");
                Block.setDestroyTime("261", "0");
                Block.setDestroyTime("262", "0");
                Block.setDestroyTime("263", "0");
                Block.setDestroyTime("264", "0");
                Block.setDestroyTime("265", "0");
                Block.setDestroyTime("266", "0");
                Block.setDestroyTime("267", "0");
                Block.setDestroyTime("268", "0");
                Block.setDestroyTime("269", "0");
                Block.setDestroyTime("270", "0");
                clientMessage("§6你已经获取创造之手！");
            }
        }))
        layout.addView(use1)



        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, -2))
            //menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255,195,100,0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 541), dip2px(ctx, 100))
    } catch (err) {
        print(err)
    }

    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
}


function useItem(x, y, z, itemId) {
    if (Twitter == true) {
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 1, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 2, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 3, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 1, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 2, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 3, Player.getPointedBlockZ(), false);
    }
}


function useItem(x, y, z, itemId) {
    if (Twitter == true) {
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 1, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 2, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() + 3, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 1, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 2, Player.getPointedBlockZ(), false);
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY() - 3, Player.getPointedBlockZ(), false);
    }
}




function 时间管理() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var op1 = new android.widget.Button(ctx)
        op1.setText("早上")
        op1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime("900");
            }
        }))
        layout.addView(op1)

        var op2 = new android.widget.Button(ctx)
        op2.setText("中午")
        op2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime("9000");
            }
        }))
        layout.addView(op2)

        var op3 = new android.widget.Button(ctx)
        op3.setText("晚上")
        op3.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime("18000");
            }
        }))
        layout.addView(op3)

        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, -2))
            //menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255,195,100,0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 541), dip2px(ctx, 100))
    } catch (err) {
        print(err)
    }

    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
}




function 血量管理() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)


        var op4 = new android.widget.Button(ctx)
        op4.setText("回血")
        op4.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setHealth(getPlayerEnt(), "20");
            }
        }))
        layout.addView(op4)


        var op5 = new android.widget.Button(ctx)
        op5.setText("血量清零")
        op5.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setHealth(getPlayerEnt(), "-1");
            }
        }))
        layout.addView(op5)

        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, -2))
            //menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255,195,100,0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 541), dip2px(ctx, 100))
    } catch (err) {
        print(err)
    }

    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
}




var 物品ID一览表 = "末影水晶, id: 426, 特殊值: 0\n隐身药水, id: 373, 特殊值: 8\n金苹果, id: 322, 特殊值: 1\n附魔金苹果, id: 344, 特殊值: 1\n末影箱, id: 130, 特殊值: 0\n铁锹, id: 256, 特殊值: 0\n铁镐, id: 257, 特殊值: 0\n铁斧, id: 258, 特殊值: 0\n钓鱼竿, id: 346, 特殊值: 0\n真·崩服蛋, id: 383, 特殊值: 257~259\n注：崩服蛋特殊值在不同地图可能不同\n鸡生物蛋，id: 383，特殊值: 10 \n牛生物蛋，id: 383，特殊值: 11\n猪生物蛋，id: 383，特殊值: 12\n羊生物蛋，id: 383，特殊值: 13\n狼生物蛋，id: 383，特殊值: 14\n村民生物蛋，id: 383，特殊值: 15\n哞菇生物蛋，id: 383，特殊值: 16\n鱿鱼生物蛋，id: 383，特殊值: 17\n兔子生物蛋，id: 383，特殊值: 18\n蝙蝠生物蛋，id: 383，特殊值: 19\n豹猫生物蛋，id， 383，特殊值: 22\n马生物蛋，id: 383，特殊值: 23\n驴生物蛋，id: 383，特殊值: 24\n骡子生物蛋，id: 383，特殊值: 25\n骷髅马生物蛋，id: 383，特殊值: 26\n僵尸马生物蛋，id: 383，特殊值: 27\n北极熊生物蛋，id: 383，特殊值: 28\n羊驼生物蛋，id: 383，特殊值: 29\n鹦鹉生物蛋，id: 383，特殊值: 30\n僵尸生物蛋，id: 383，特殊值: 32\n苦力怕生物蛋，id: 383，特殊值: 33\n骷髅生物蛋，id: 383，特殊值: 34\n蜘蛛生物蛋，id: 383，特殊值: 35\n猪人生物蛋，id: 383，特殊值: 36\n史莱姆生物蛋，id: 383，特殊值: 37\n末影人生物蛋，id: 383，特殊值: 38\n蠹虫生物蛋，id: 383，特殊值: 39\n洞穴蜘蛛生物蛋，id: 383，特殊值: 40\n恶魂生物蛋，id: 383:，特殊值: 41\n岩浆怪生物蛋，id:  383:，特殊值: 42\n烈焰人生物蛋，id: 383，特殊值: 43\n僵尸村民生物蛋，id: 383，特殊值: 44\n女巫生物蛋，id: 383，特殊值: 45\n流浪者生物蛋，id: 383，特殊值: 46\n尸壳生物蛋，id: 383，特殊值: 47\n凋零骷髅生物蛋，id: 383，特殊值: 48\n守卫者生物蛋，id: 383，特殊值: 49\n远古守卫者生物蛋，id: 383，特殊值: 50\n潜影贝生物蛋，id: 383，特殊值: 54\n末影螨生物蛋，id: 383，特殊值: 55\n卫道士生物蛋，id: 383，特殊值: 57\n唤魔者生物蛋，id: 383，特殊值: 104\n恼鬼生物蛋，id: 38\n末影珍珠, id: 368, 特殊值: 0\n末影之眼, id: 381, 特殊值: 0\n打火石, id: 259, 特殊值: 0\n红苹果, id: 260, 特殊值: 0\n弓, id: 261, 特殊值: 0\n箭, id: 262, 特殊值: 0\n煤炭, id: 263, 特殊值: 0\n木炭, id: 263, 特殊值: 1\n钻石, id: 264, 特殊值: 0\n铁锭, id: 265, 特殊值: 0\n金锭, id: 266, 特殊值: 0\n铁剑, id: 267, 特殊值: 0\n木剑, id: 268, 特殊值: 0\n木锹, id: 269, 特殊值: 0\n木镐, id: 270, 特殊值: 0\n木斧, id: 271, 特殊值: 0\n石剑, id: 272, 特殊值: 0\n石锹, id: 273, 特殊值: 0\n石镐, id: 274, 特殊值: 0\n石斧, id: 275, 特殊值: 0\n钻石剑, id: 276, 特殊值: 0\n钻石锹, id: 277, 特殊值: 0\n钻石镐, id: 278, 特殊值: 0\n钻石斧, id: 279, 特殊值: 0\n木棍, id: 280, 特殊值: 0\n碗, id: 281, 特殊值: 0\n蘑菇汤, id: 282, 特殊值: 0\n金剑, id: 283, 特殊值: 0\n金铲, id: 284, 特殊值: 0\n金镐, id: 285, 特殊值: 0\n金斧, id: 286, 特殊值: 0\n线, id: 287, 特殊值: 0\n羽毛, id: 288, 特殊值: 0\n火药, id: 289, 特殊值: 0\n木锄, id: 290, 特殊值: 0\n石锄, id: 291, 特殊值: 0\n铁锄, id: 292, 特殊值: 0\n钻石锄, id: 293, 特殊值: 0\n金锄, id: 294, 特殊值: 0\n小麦种子, id: 295, 特殊值: 0\n小麦, id: 296, 特殊值: 0\n面包, id: 297, 特殊值: 0\n皮革帽子, id: 298, 特殊值: 0\n皮革外套, id: 299, 特殊值: 0\n皮革裤子, id: 300, 特殊值: 0\n皮革靴子, id: 301, 特殊值: 0\n锁链头盔, id: 302, 特殊值: 0\n锁链胸甲, id: 303, 特殊值: 0\n锁链护腿, id: 304, 特殊值: 0\n锁链靴子, id: 305, 特殊值: 0\n铁头盔, id: 306, 特殊值: 0\n铁胸甲, id: 307, 特殊值: 0\n铁护腿, id: 308, 特殊值: 0\n铁靴子, id: 309, 特殊值: 0\n钻石头盔, id: 310, 特殊值: 0\n钻石胸甲, id: 311, 特殊值: 0\n钻石护腿, id: 312, 特殊值: 0\n钻石靴子, id: 313, 特殊值: 0\n金头盔, id: 314, 特殊值: 0\n金胸甲, id: 315, 特殊值: 0\n金护腿, id: 316, 特殊值: 0\n金靴子, id: 317, 特殊值: 0\n燧石, id: 318, 特殊值: 0\n生猪排, id: 319, 特殊值: 0\n熟猪排, id: 320, 特殊值: 0\n画, id: 321, 特殊值: 0\n告示牌, id: 323, 特殊值: 0\n木门, id: 324, 特殊值: 0\n桶, id: 325, 特殊值: 0\n牛奶桶, id: 325, 特殊值: 1\n水桶, id: 325, 特殊值: 8\n岩浆桶, id: 325, 特殊值: 10\n矿车, id: 328, 特殊值: 0\n鞍, id: 329, 特殊值: 0\n铁门, id: 330, 特殊值: 0\n红石, id: 331, 特殊值: 0\n雪球, id: 332, 特殊值: 0\n皮革, id: 334, 特殊值: 0\n红砖, id: 336, 特殊值: 0\n粘土, id: 337, 特殊值: 0\n甘蔗, id: 338, 特殊值: 0\n纸, id: 339, 特殊值: 0\n书, id: 340, 特殊值: 0\n粘液球, id: 341, 特殊值: 0\n蛋, id: 344, 特殊值: 0\n指南针, id: 345, 特殊值: 0\n钟, id: 347, 特殊值: 0\n萤石粉, id: 348, 特殊值: 0\n墨囊（染料）, id: 351, 特殊值: 0\n玫瑰红（染料）, id: 351, 特殊值: 1\n仙人掌绿（染料）, id: 351, 特殊值: 2\n可可豆（染料）, id: 351, 特殊值: 3\n青金石（染料）, id: 351, 特殊值: 4\n紫色染料, id: 351, 特殊值: 5\n青色染料, id: 351, 特殊值: 6\n淡灰色染料, id: 351, 特殊值: 7\n灰色染料, id: 351, 特殊值: 8\n粉红色染料, id: 351, 特殊值: 9\n黄绿色染料, id: 351, 特殊值: 10\n蒲公英黄（染料）, id: 351, 特殊值: 11\n淡蓝色染料, id: 351, 特殊值: 12\n品红色染料, id: 351, 特殊值: 13\n橙色染料, id: 351, 特殊值: 14\n骨粉, id: 351, 特殊值: 15\n骨头, id: 352, 特殊值: 0\n糖, id: 353, 特殊值: 0\n蛋糕, id: 354, 特殊值: 0\n床, id: 355, 特殊值: 0\n饼干, id: 357, 特殊值: 0\n剪刀, id: 359, 特殊值: 0\n西瓜片, id: 360, 特殊值: 0\n南瓜种子, id: 261, 特殊值: 0\n西瓜种子, id: 362, 特殊值: 0\n生牛肉, id: 363, 特殊值: 0\n牛排, id: 364, 特殊值: 0\n生鸡肉, id: 365, 特殊值: 0\n熟鸡肉, id: 366, 特殊值: 0\n绿宝石, id: 388, 特殊值: 0\n胡萝卜, id: 391, 特殊值: 0\n马铃薯, id: 392, 特殊值: 0\n烤马铃薯, id: 393, 特殊值: 0\n南瓜派, id: 400, 特殊值: 0\n地狱砖, id: 405, 特殊值: 0\n地狱石英, id: 406, 特殊值: 0\n甜菜, id: 457, 特殊值: 0\n甜菜种子, id: 458, 特殊值: 0\n甜菜汤, id: 459, 特殊值: 0\n弩, id:471,特殊值:0\n隐身药水,id:373,特殊值:8\n附魔苹果,id:466,特殊值:0\n鞘翅,id:444,特殊值:0\n复活图腾,id:450,特殊值:0\n海龟壳,id:469,特殊值:0\n三叉戟,id:455,特殊值:0\n栓绳,id:420,特殊值:0\n唱片,id:500-511,特殊值:0\n烟花,id:401,特殊值:0\n脚手架,id:-165,特殊值:0\n唱片机,id:84,特殊值:0\n音符盒,id:25,特殊值:0\n地图,id:395,特殊值:0\n定位地图,id:395,特殊值:2\n头颅模型,id:397,特殊值:0-5\n书与笔,id:386,特殊值:0\nTNT蛋,id:383,特殊值:65\n凋零蛋,id:383,特殊值:52\n末影龙蛋,id:383,特殊值:53\n龙息蛋,id:383,特殊值:79\n末影水晶蛋, id: 383, 特殊值: 71\n闪电蛋,id:383,特殊值:93\n凋零头颅蛋,id:383,特殊值:89\n凋零头颅(蓝)蛋, id: 383, 特殊值: 91\n大火焰弹,id:383,特殊值: 85\n小火焰弹,id:383,特殊值:94\n铁傀儡蛋,id:383,特殊值:20\n雪傀儡蛋,id:383,特殊值:21\n屏障, id:166,特殊值:0\n手持物品栏,id:456,特殊值:0\n"
var 方块ID一览表 = "空气, id: 0, 特殊值: 0\n铁砧, id: 145, 特殊值: 0\n石头, id: 1, 特殊值: 0\n花岗岩, id: 1, 特殊值: 1\n光滑的花岗岩, id: 1, 特殊值: 2\n闪长岩, id: 1, 特殊值: 3\n光滑的闪长岩, id: 1, 特殊值: 4\n安山岩, id: 1, 特殊值: 5\n光滑的安山岩, id: 1, 特殊值: 6\n草方块, id: 2, 特殊值: 0\n泥土, id: 3, 特殊值: 0\n圆石, id: 4, 特殊值: 0\n木板, id: 5, 特殊值: 0\n松木板, id: 5, 特殊值: 1\n桦木板, id: 5, 特殊值: 2\n丛林木板, id: 5, 特殊值: 3\n金合欢木板, id: 5, 特殊值: 4\n黑橡木木板, id: 5, 特殊值: 5\n树苗, id: 6, 特殊值: 0\n松树苗, id: 6, 特殊值: 1\n桦树苗, id: 6, 特殊值: 2\n丛林树苗, id: 6, 特殊值: 3\n金合欢树苗, id: 6, 特殊值: 4\n黑橡树苗, id: 6, 特殊值: 5\n基岩, id: 7, 特殊值: 0\n水, id: 8, 特殊值: 0\n静止的水, id: 9, 特殊值: 0\n岩浆, id: 10, 特殊值: 0\n静止的岩浆, id: 11, 特殊值: 0\n沙子, id: 12, 特殊值: 0\n红沙, id: 12, 特殊值: 1\n砂砾, id: 13, 特殊值: 0\n金矿石, id: 14, 特殊值: 0\n铁矿石, id: 15, 特殊值: 0\n煤矿石, id: 16, 特殊值: 0\n木头, id: 17, 特殊值: 0\n松木, id: 17, 特殊值: 1\n桦木, id: 17, 特殊值: 2\n丛林木, id: 17, 特殊值: 3\n树叶, id: 18, 特殊值: 0\n松树叶, id: 18, 特殊值: 1\n桦树叶, id: 18, 特殊值: 2\n丛林树叶, id: 18, 特殊值: 3\n海绵, id: 19, 特殊值: 0\n玻璃, id: 20, 特殊值: 0\n青金石矿石, id: 21, 特殊值: 0\n青金石块, id: 22, 特殊值: 0\n沙石, id: 24, 特殊值: 0\n錾制沙石, id: 24, 特殊值: 1\n平滑沙石, id: 24, 特殊值: 2\n动力铁轨, id: 27, 特殊值: 0\n蜘蛛网, id: 30, 特殊值: 0\n草, id: 31, 特殊值: 1\n灌木, id: 31, 特殊值: 2\n枯死的灌木, id: 32, 特殊值: 0\n白色羊毛, id: 35, 特殊值: 0\n橙色羊毛, id: 35, 特殊值: 1\n品红色羊毛, id: 35, 特殊值: 2\n淡蓝色羊毛, id: 35, 特殊值: 3\n黄色羊毛, id: 35, 特殊值: 4\n黄绿色羊毛, id: 35, 特殊值: 5\n粉红色羊毛, id: 35, 特殊值: 6\n灰色羊毛, id: 35, 特殊值: 7\n淡灰色羊毛, id: 35, 特殊值: 8\n青色羊毛, id: 35, 特殊值: 9\n紫色羊毛, id: 35, 特殊值: 10\n蓝色羊毛, id: 35, 特殊值: 11\n棕色羊毛, id: 35, 特殊值: 12\n绿色羊毛, id: 35, 特殊值: 13\n红色羊毛, id: 35, 特殊值: 14\n黑色羊毛, id: 35, 特殊值: 15\n蒲公英, id: 37, 特殊值: 0\n罂粟, id: 38, 特殊值: 0\n蓝色的兰花, id: 38, 特殊值: 1\n露西球, id: 38, 特殊值: 2\n矢车菊, id: 38, 特殊值: 3\n红郁金香, id: 38, 特殊值: 4\n橙郁金香, id: 38, 特殊值: 5\n白郁金香, id: 38, 特殊值: 6\n粉郁金香, id: 38, 特殊值: 7\n雏菊, id: 38, 特殊值: 8\n棕色蘑菇, id: 39, 特殊值: 0\n红色蘑菇, id: 40, 特殊值: 0\n金块, id: 41, 特殊值: 0\n铁块, id: 42, 特殊值: 0\n石台阶, id: 44, 特殊值: 0\n沙石台阶, id: 44, 特殊值: 1\n圆石台阶, id: 44, 特殊值: 3\n砖台阶, id: 44, 特殊值: 4\n石砖台阶, id: 44, 特殊值: 5\n石英台阶, id: 44, 特殊值: 7\n砖块, id: 45, 特殊值: 0\nTNT, id: 46, 特殊值: 0\n书架, id: 47, 特殊值: 0\n苔石, id: 48, 特殊值: 0\n黑曜石, id: 49, 特殊值: 0\n火把, id: 50, 特殊值: 0\n火, id: 51, 特殊值: 0\n刷怪笼, id: 52, 特殊值: 0\n木楼梯, id: 53, 特殊值: 0\n箱子, id: 54, 特殊值: 0\n钻石矿石, id: 56, 特殊值: 0\n钻石块, id: 57, 特殊值: 0\n工作台, id: 58, 特殊值: 0\n耕地, id: 60, 特殊值: 0\n熔炉, id: 61, 特殊值: 0\n梯子, id: 65, 特殊值: 0\n铁轨, id: 66, 特殊值: 0\n石楼梯, id: 67, 特殊值: 0\n红石矿石, id: 73, 特殊值: 0\n雪, id: 78, 特殊值: 0\n冰, id: 79, 特殊值: 0\n雪块, id: 80, 特殊值: 0\n仙人掌, id: 81, 特殊值: 0\n粘土块, id: 82, 特殊值: 0\n木栅栏, id: 85, 特殊值: 0\n南瓜, id: 86, 特殊值: 0\n地狱岩, id: 87, 特殊值: 0\n萤石, id: 89, 特殊值: 0\n南瓜灯, id: 91, 特殊值: 0\n隐形基岩, id: 95, 特殊值: 0\n活板门, id: 96, 特殊值: 0\n石砖, id: 98, 特殊值: 0\n苔石砖, id: 98, 特殊值: 1\n裂石砖, id: 98, 特殊值: 2\n回形石砖, id: 98, 特殊值: 3\n棕色蘑菇方块, id: 99, 特殊值: 14\n红色蘑菇方块, id: 100, 特殊值: 14\n蘑菇方块, id: 99, 特殊值: 0\n蘑菇茎, id: 99, 特殊值: 15\n铁栅栏, id: 101, 特殊值: 0\n玻璃板, id: 102, 特殊值: 0\n西瓜, id: 103, 特殊值: 0\n南瓜梗, id: 104, 特殊值: 0\n西瓜梗, id: 105, 特殊值: 0\n藤蔓, id: 106, 特殊值: 0\n栅栏门, id: 107, 特殊值: 0\n砖楼梯, id: 108, 特殊值: 0\n石砖楼梯, id: 109, 特殊值: 0\n菌丝, id: 110, 特殊值: 0\n莲叶, id: 111, 特殊值: 0\n地狱砖, id: 112, 特殊值: 0\n地狱砖楼梯, id: 114, 特殊值: 0\n地狱传送门, id: 90, 特殊值: 0\n末地折跃门, id: 209, 特殊值: 0\n末地传送门方块, id: 119, 特殊值: 0\n末地传送门, id: 120, 特殊值: 0\n末地石, id: 121, 特殊值: 0\n可可梗, id: 127, 特殊值: 0\n沙石楼梯, id: 128, 特殊值: 0\n绿宝石矿石, id: 129, 特殊值: 0\n绿宝石块, id: 133, 特殊值: 0\n松木楼梯, id: 134, 特殊值: 0\n桦木楼梯, id: 135, 特殊值: 0\n丛林楼梯, id: 136, 特殊值: 0\n圆石墙, id: 139, 特殊值: 0\n苔石墙, id: 139, 特殊值: 1\n石英方块, id: 155, 特殊值: 0\n錾石英方块, id: 155, 特殊值: 1\n柱石英方块, id: 155, 特殊值: 2\n石英楼梯, id: 156, 特殊值: 0\n木台阶, id: 158, 特殊值: 0\n松木台阶, id: 158, 特殊值: 1\n桦木台阶, id: 158, 特殊值: 2\n丛林木台阶, id: 158, 特殊值: 3\n金合欢木台阶, id: 158, 特殊值: 4\n黑橡木台阶, id: 158, 特殊值: 5\n白色粘土, id: 159, 特殊值: 0\n橙色粘土, id: 159, 特殊值: 1\n品红色粘土, id: 159, 特殊值: 2\n淡蓝色粘土, id: 159, 特殊值: 3\n黄色粘土, id: 159, 特殊值: 4\n黄绿色粘土, id: 159, 特殊值: 5\n粉红色粘土, id: 159, 特殊值: 6\n灰色粘土, id: 159, 特殊值: 7\n淡灰色粘土, id: 159, 特殊值: 8\n青色粘土, id: 159, 特殊值: 9\n紫色粘土, id: 159, 特殊值: 10\n蓝色粘土, id: 159, 特殊值: 11\n棕色粘土, id: 159, 特殊值: 12\n绿色粘土, id: 159, 特殊值: 13\n红色粘土, id: 159, 特殊值: 14\n黑色粘土, id: 159, 特殊值: 15\n金合欢树叶, id: 161, 特殊值: 0\n黑橡木叶, id: 161, 特殊值: 1\n金合欢木, id: 162, 特殊值: 0\n黑橡木, id: 162, 特殊值: 1\n金合欢木楼梯, id: 163, 特殊值: 0\n黑橡木楼梯, id: 164, 特殊值: 0\n干草块, id: 170, 特殊值: 0\n白色地毯, id: 171, 特殊值: 0\n橙色地毯, id: 171, 特殊值: 1\n品红色地毯, id: 171, 特殊值: 2\n淡蓝色地毯, id: 171, 特殊值: 3\n黄色地毯, id: 171, 特殊值: 4\n黄绿色地毯, id: 171, 特殊值: 5\n粉红色地毯, id: 171, 特殊值: 6\n灰色地毯, id: 171, 特殊值: 7\n淡灰色地毯, id: 171, 特殊值: 8\n青色地毯, id: 171, 特殊值: 9\n紫色地毯, id: 171, 特殊值: 10\n蓝色地毯, id: 171, 特殊值: 11\n棕色地毯, id: 171, 特殊值: 12\n绿色地毯, id: 171, 特殊值: 13\n红色地毯, id: 171, 特殊值: 14\n黑色地毯, id: 171, 特殊值: 15\n硬化粘土, id: 172, 特殊值: 0\n煤炭块, id: 173, 特殊值: 0\n浮冰（不知和冰有何区别）, id: 174, 特殊值: 0\n太阳花, id: 175, 特殊值: 0\n丁香花, id: 175, 特殊值: 1\n高草, id: 175, 特殊值: 2\n高大灌木, id: 175, 特殊值: 3\n玫瑰丛, id: 175, 特殊值: 4\n芍药, id: 175, 特殊值: 5\n灰化土, id: 243, 特殊值: 0\n切石机, id: 245, 特殊值: 0\n发光的黑曜石, id: 246, 特殊值: 0\n下界反应核, id: 247, 特殊值: 0\n更新方块1, id: 248, 特殊值: 0\n更新方块2, id: 249, 特殊值: 0"
var 药水ID一览表 = "水瓶, id: 373, 特殊值: 0\n平凡的药水, id: 373, 特殊值: 1\n长久平凡的药水, id: 373, 特殊值: 2\n浓稠的药水, id: 373, 特殊值: 3\n粗制的药水, id: 373, 特殊值: 4\n夜视药水(3:00), id: 373, 特殊值: 5\n夜视药水(8:00), id: 373, 特殊值: 6\n隐身药水(3:00), id: 373, 特殊值: 7\n隐身药水(8:00), id: 373, 特殊值: 8\n跳跃药水(3:00), id: 373, 特殊值: 9\n跳跃药水(8:00), id: 373, 特殊值: 10\n跳跃Ⅱ药水(1:30), id: 373, 特殊值: 11\n抗火药水(3:00), id: 373, 特殊值: 12\n抗火药水(8:00), id: 373, 特殊值: 13\n迅捷药水(3:00), id: 373, 特殊值: 14\n迅捷药水(8:00), id: 373, 特殊值: 15\n迅捷Ⅱ药水(1:30), id: 373, 特殊值: 16\n迟缓药水(1:30), id: 373, 特殊值: 17\n迟缓药水(4:00), id: 373, 特殊值: 18\n水肺药水(3:00), id: 373, 特殊值: 19\n水肺药水(8:00), id: 373, 特殊值: 20\n瞬间治疗药水, id: 373, 特殊值: 21\n瞬间治疗Ⅱ药水, id: 373, 特殊值: 22\n瞬间伤害药水, id: 373, 特殊值: 23\n瞬间伤害Ⅱ药水, id: 373, 特殊值: 24\n剧毒药水(0:45), id: 373, 特殊值: 25\n剧毒药水(3:00), id: 373, 特殊值: 26\n剧毒Ⅱ药水(0:22), id: 373, 特殊值: 27\n生命恢复药水(0;45), id: 373, 特殊值: 28\n生命恢复药水(2:00), id: 373, 特殊值: 29\n生命恢复Ⅱ药水(0:22), id: 373, 特殊值: 30\n力量药水(3:00), id: 373, 特殊值: 31\n力量药水(8:00), id: 373, 特殊值: 32\n力量Ⅱ药水(1:30), id: 373, 特殊值: 33\n虚弱药水(1:30), id: 373, 特殊值: 34\n虚弱药水(4:00), id: 373, 特殊值: 35\n凋零药水(0:40), id: 373, 特殊值: 36\n注:添加喷溅型药水只要将物品ID改为438即可，特殊值不变\n喷溅型药水相对于普通药水的药效持续时间有所减少，此处不作详细说明\n滞留型药水的ID为441，其余不知，请自行探索\n数据来自多玩盒子"
var 附魔箭 = "瞬间伤害箭, id: 24, 特殊值: 24\n瞬间伤害Ⅱ箭, id: 262, 特殊值: 25\n凋零箭，id: 262, 特殊值: 37\n瞬间治疗箭, id: 262, 特殊值: 22\n瞬间治疗Ⅱ箭, id: 262, 特殊值: 23\n剧毒箭(0:05), id: 262, 特殊值: 26\n剧毒箭(0:15), id: 262, 特殊值: 27\n剧毒Ⅱ箭(0;02), id: 262, 特殊值: 28\n隐身箭(0:23), id: 262, 特殊值: 8\n隐身箭(1:00), id: 262, 特殊值: 9\n生命恢复箭(0:05), id: 262, 特殊值: 29\n生命恢复箭(0:33), id: 262, 特殊值: 30\n生命恢复Ⅱ箭(0:02), id: 262, 特殊值: 31\n迟缓箭(0:11), id: 262, 特殊值: 18\n迟缓箭(0:30), id: 262, 特殊值: 19\n防火箭(0:22), id: 262, 特殊值: 13\n防火箭(1:00), id: 262, 特殊值: 14\n夜视箭(0:22), id: 262, 特殊值: 6\n夜视箭(1:00), id: 262, 特殊值: 7\n迅捷箭(0:22), id: 262, 特殊值: 15\n迅捷箭(1:00), id: 262, 特殊值: 16\n迅捷Ⅱ箭(0:11), id: 262, 特殊值: 17\n力量箭(0:22), id: 262, 特殊值: 32\n力量箭(1:00), id: 262, 特殊值: 33\n力量Ⅱ箭(0:12), id: 262, 特殊值: 34\n水下呼吸箭(0:22), id: 262, 特殊值: 20\n水下呼吸箭(1:00), id: 262, 特殊值: 21\n虚弱箭(0:11), id: 262, 特殊值: 35\n虚弱箭(0:30), id: 262, 特殊值:    36\n跳跃箭(0:33), id: 262, 特殊值: 10\n跳跃箭(1:00), id: 262, 特殊值: 11\n跳跃Ⅱ箭(0:11), id: 262, 特殊值: 12"



//加物函数
function 加物() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                添加物()
            } catch (err) {
                print(err)
            }
        }
    }))

    function 添加物() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)
            var 物品ID = new android.widget.EditText(ctx)
            物品ID.setText("")
            物品ID.setHint("物品ID")
            layout.addView(物品ID)

            var 物品特殊值 = new android.widget.EditText(ctx)
            物品特殊值.setText("")
            物品特殊值.setHint("物品特殊值")
            layout.addView(物品特殊值)

            var 物品数量 = new android.widget.EditText(ctx)
            物品数量.setText("")
            物品数量.setHint("物品数量")
            layout.addView(物品数量)

            var 确认 = new android.widget.Button(ctx)
            确认.setText("确认")
            确认.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var 特殊值 = 物品特殊值.getText()
                    var ID = 物品ID.getText()
                    var 数量 = 物品数量.getText()
                    Entity.setCarriedItem(getPlayerEnt(), ID, 数量, 特殊值)
                    clientMessage("§b已添加")

                }
            }))
            layout.addView(确认)
            var sa = new android.widget.Button(ctx)
            sa.setText("物品ID一览表")
            sa.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    var GUI;
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var layout2 = new android.widget.LinearLayout(ctx);
                                layout2.setOrientation(1);
                                var scroll2 = new android.widget.ScrollView(ctx);
                                scroll2.addView(layout2);
                                var txt = new android.widget.TextView(ctx);
                                var dialog = new android.app.Dialog(ctx);
                                dialog.setContentView(scroll2);
                                dialog.setTitle("重要说明,请看完");
                                layout2.addView(txt); //txt
                                txt.setText(物品ID一览表);
                                var zuang = new android.widget.Button(ctx);
                                zuang.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(viewarg) {
                                        dialog.dismiss()
                                    }
                                });
                                zuang.setText("知道了");
                                layout2.addView(zuang)
                                dialog.show();
                            } catch (err) {
                                print("Err: " + err);
                            }
                        }
                    }));
                }
            }))
            layout.addView(sa)

            var vb = new android.widget.Button(ctx)
            vb.setText("方块ID一览表")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    var GUI;
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var layout2 = new android.widget.LinearLayout(ctx);
                                layout2.setOrientation(1);
                                var scroll2 = new android.widget.ScrollView(ctx);
                                scroll2.addView(layout2);
                                var txt = new android.widget.TextView(ctx);
                                var dialog = new android.app.Dialog(ctx);
                                dialog.setContentView(scroll2);
                                dialog.setTitle("重要说明,请看完");
                                layout2.addView(txt); //txt
                                txt.setText(方块ID一览表);
                                var zuang = new android.widget.Button(ctx);
                                zuang.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(viewarg) {
                                        dialog.dismiss()
                                    }
                                });
                                zuang.setText("知道了");
                                layout2.addView(zuang)
                                dialog.show();
                            } catch (err) {
                                print("Err: " + err);
                            }
                        }
                    }));
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("药水ID一览表")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    var GUI;
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var layout2 = new android.widget.LinearLayout(ctx);
                                layout2.setOrientation(1);
                                var scroll2 = new android.widget.ScrollView(ctx);
                                scroll2.addView(layout2);
                                var txt = new android.widget.TextView(ctx);
                                var dialog = new android.app.Dialog(ctx);
                                dialog.setContentView(scroll2);
                                dialog.setTitle("重要说明,请看完");
                                layout2.addView(txt); //txt
                                txt.setText(药水ID一览表);
                                var zuang = new android.widget.Button(ctx);
                                zuang.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(viewarg) {
                                        dialog.dismiss()
                                    }
                                });
                                zuang.setText("知道了");
                                zuang.setBackground(bg)
                                layout2.addView(zuang)
                                dialog.show();
                            } catch (err) {
                                print("Err: " + err);
                            }
                        }
                    }));
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("附魔箭ID一览表")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    var GUI;
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var layout2 = new android.widget.LinearLayout(ctx);
                                layout2.setOrientation(1);
                                var scroll2 = new android.widget.ScrollView(ctx);
                                scroll2.addView(layout2);
                                var txt = new android.widget.TextView(ctx);
                                var dialog = new android.app.Dialog(ctx);
                                dialog.setContentView(scroll2);
                                dialog.setTitle("重要说明,请看完");
                                layout2.addView(txt); //txt
                                txt.setText(附魔箭);
                                var zuang = new android.widget.Button(ctx);
                                zuang.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(viewarg) {
                                        dialog.dismiss()
                                    }
                                });
                                zuang.setText("知道了");
                                zuang.setBackground(bg)
                                layout2.addView(zuang)
                                dialog.show();
                            } catch (err) {
                                print("Err: " + err);
                            }
                        }
                    }));
                }
            }))
            layout.addView(vb)

            var mlayout = makeMenu(ctx, layout)
            menu.setContentView(mlayout)
            menu.setWidth(dip2px(ctx, 200))
            menu.setHeight(dip2px(ctx, 200))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 195, 100, 0)))
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 10), dip2px(ctx, 10))
        } catch (err) {
            print(err)
        }
    }


    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
}

var die = false;
var id = new Array(),
    data = new Array(),
    count = new Array();
var id_a = new Array(),
    data_a = new Array();
var enable_script_var = 1;

function deathHook(attacker, entity) {
    if (entity != getPlayerEnt()) return;
    id = [];
    data = [];
    count = [];
    id_a = [];
    data_a = [];

    die = true

    for (i = 0; i < 36; i++) {
        id.push(Player.getInventorySlot(i));
        data.push(Player.getInventorySlotData(i));
        count.push(Player.getInventorySlotCount(i));
        Player.clearInventorySlot(i);
    }

    for (j = 0; j < 4; j++) {
        id_a.push(Player.getArmorSlot(j));
        data_a.push(Player.getArmorSlotDamage(j));
    }
}




//暗杀js函数
//暗杀js函数 
function 传送() {
    var lay = new android.widget.ScrollView(ctx);
    var lay1 = new android.widget.LinearLayout(ctx);
    lay.addView(lay1);
    lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(40, 1, 1, 1)));
    lay1.addView(NewText("tp玩家菜单", "CC", 15, "#FFAA00"));
    传.setWidth(W() / 4);
    lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() / 4, H() * 0.5));
    传.setHeight(H() * 0.5);
    lay1.setOrientation(1);
    传.setFocusable(true);
    lay1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    传.setContentView(scroll(lay, true));
    传.setBackgroundDrawable(getColorDrawable("transparent"));
    传.showAtLocation(mainView, left | top, W() / 4 + 50, H() * 0.05);

    invalidate();
    for (var i in players) {
        addButton(lay1, Player.getName(players[i]), function() {
            var pointX = Entity.getX(players[i]),
                pointY = Entity.getY(players[i]),
                pointZ = Entity.getZ(players[i]);
            Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
        }, null, 0, 15, "传");
    }
}


function runCommand(txt) {
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
        showTip(err, 1);
    }
}

function fly() {
    Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 2, Player.getZ());
    Player.setFlying(true);
    clientMessage("飞行成功");
}

function speed() {
    if (speeding) {
        ModPE.setGameSpeed(20);
        showTip(" ➡已恢复，再次点击加速");
    } else {
        ModPE.setGameSpeed(100);
        showTip(" ➡已加速，再次点击恢复");
    }
    speeding = !speeding;
}

function searchMode(v, c) {
    mode = c;
}

function exp() {
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

function 长臂猿() {
    try {
        runThread(function() {
            invalidate();
            showTip("已开启长臂猿");
            for (var i in players) {
                Entity.setCollisionSize(players[i], 8, 7);
            }

        });
    } catch (err) {

    }
}


function 自动长臂() {
    if (长臂) {
        runThread(function() {
            try {
                while (长臂) {
                    invalidate();
                    var 最远选择距离2 = 15;
                    for (var x = 0; x < players['length']; x++) {
                        var X距离 = Entity.getX(players[x]) - getPlayerX();
                        var Y距离 = Entity.getY(players[x]) - getPlayerY();
                        var Z距离 = Entity.getZ(players[x]) - getPlayerZ();
                        var 距离 = Math.sqrt(Math.pow(X距离, 2) + Math.pow(Y距离, 2) + Math.pow(Z距离, 2));
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

function flash() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(true);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("选择环杀对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "环绕暗杀", function() {}, 0, 14, true);
                invalidate();
                for (var i in players) {
                    addButton(lay, Player.getName(players[i]), eval("function(){startFlash(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                }
                dialog.setView(scroll(lay));
                dialog.setNegativeButton("关闭窗口", null);
                dialog.show();
            });
        }
    } catch (err) {
        showTip(err, 1);
    }
}

function startFlash(player, flashMode) {
    showTip("环绕暗杀现在开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    flashing = false;
                    Player.setFlying(true);
                    showTip("目标已死亡，自动结束环杀");
                    break;
                }
                var yaw;
                if (flashMode) {
                    yaw = Math.random() * 360 - 180;
                    wttime = 300;
                } else {
                    yaw = Entity.getYaw(player) - 180;
                    wttime = 1;
                }
                var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
                    pointY = Entity.getY(player) + 0.5,
                    pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Player.setFlying(true);
                lang.Thread.sleep(300);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}



function flash1() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(true);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("选择背杀对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "背后暗杀", function() {}, 0, 14, true);
                invalidate();
                for (var i in players) {
                    addButton(lay, Player.getName(players[i]), eval("function(){wxbhFlash1(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                }
                dialog.setView(scroll(lay));
                dialog.setNegativeButton("关闭窗口", null);
                dialog.show();
            });
        }
    } catch (err) {
        showTip(err, 1);
    }
}

function wxbhFlash1(player, flashMode) {
    showTip("背后暗杀现在开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    flashing = false;
                    Player.setFlying(true);
                    showTip("目标已死亡，自动结束背杀");
                    break;
                }
                var yaw;
                if (flashMode) {
                    yaw = Entity.getYaw(player) - 180;
                } else {
                    yaw = Entity.getYaw(player) - 180;
                }
                var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
                    pointY = Entity.getY(player) + 0.5,
                    pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Player.setFlying(true);
                lang.Thread.sleep(300);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}


function ssflash() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(true);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("选择闪杀对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "无限闪杀", function() {}, 0, 14, true);
                invalidate();
                for (var i in players) {
                    addButton(lay, Player.getName(players[i]), eval("function(){wxshFlash(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                }
                dialog.setView(scroll(lay));
                dialog.setNegativeButton("关闭窗口", null);
                dialog.show();
            });
        }
    } catch (err) {
        showTip(err, 1);
    }
}

function wxshFlash(player, flashMode) {
    showTip("无限闪杀开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    flashing = false;
                    Player.setFlying(true);
                    showTip("目标已死亡，自动结束闪杀");
                    break;
                }
                var yaw;
                if (flashMode) {
                    yaw = Math.random() * 360 - 180;
                } else {
                    yaw = Entity.getYaw(player) - 180;
                }
                var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
                    pointY = Entity.getY(player) + 0.5,
                    pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Player.setFlying(true);
                lang.Thread.sleep(300);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}

function 黑洞吸() {
    if (黑洞杀 == true) {
        runThread(function() {
            while (黑洞杀) {
                invalidate();
                var 最远选择距离2 = 15;
                for (var x = 0; x < players['length']; x++) {
                    var X距离 = Entity.getX(players[x]) - getPlayerX();
                    var Y距离 = Entity.getY(players[x]) - getPlayerY();
                    var Z距离 = Entity.getZ(players[x]) - getPlayerZ();
                    var 距离 = Math.sqrt(Math.pow(X距离, 2) + Math.pow(Y距离, 2) + Math.pow(Z距离, 2));
                    if (距离 < 最远选择距离2 && 距离 > 0 && Entity.getHealth(players[x]) >= 1) {
                        setPosition(players[x], Player.getX(), Player.getY() - 0.5, Player.getZ());
                    }
                }
                lang.Thread.sleep(10);
            }
        });
    }
}

function setHome() {
    home = {
        x: Player.getX(),
        y: Player.getY() + 1,
        z: Player.getZ()
    };
    showTip(" ➡设置家成功");
    return true;
}

function goHome() {
    home ? Entity.setPosition(Player.getEntity(), home.x, home.y, home.z) : showTip(" ➡请先长按设置此处为家");
}

function enchant() {
    ctx.runOnUiThread(new java.lang.Runnable({
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

function radar() {
    try {
        if (radarWin) {
            if (radarWin.isShowing()) {
                state = 2;
                radarWin.dismiss();
            } else if (state == 3) {
                radarWin.showAtLocation(mainView, right | top, 0, hei / 7);
                state = 1;
                scan();
            }
        } else {
            Ui(function() {
                radarWin = new wg.PopupWindow(ctx);
                radarShow = new wg.ImageView(ctx);
                radarShow.setImageBitmap(radarPic);
                radarWin.setContentView(radarShow);
                radarWin.setWidth(radarPic.getWidth());
                radarWin.setHeight(radarPic.getHeight());
                radarWin.setBackgroundDrawable(getColorDrawable("dkgray"));
                radarWin.showAtLocation(mainView, right | top, 0, hei / 7);
                state = 1;
                scan();
            });
            showTip(" ➡雷达已开启，再次点击关闭，长按显示所有人名称与距离", 1);
        }
    } catch (err) {
        print(err);
    }
}

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

function print(text, size) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var toast = android.widget.Toast.makeText(ctx, " ", android.widget.Toast.LENGTH_LONG);
                var layout = new android.widget.LinearLayout(ctx);
                var textView = new android.widget.TextView(ctx);
                textView.setText(atHfHt("</font><font color=#ffffffff>" + text.replace(/\n/g, "<br>") + "</font>"));
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

function showTip(text, size) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var toast = android.widget.Toast.makeText(ctx, " ", android.widget.Toast.LENGTH_LONG);
                var layout = new android.widget.LinearLayout(ctx);
                var textView = new android.widget.TextView(ctx);
                textView.setText(atHfHt("</font><font color=#ffffffff>" + text.replace(/\n/g, "<br>") + "</font>"));
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

function getNames() {
    var arr = [],
        x = Player.getX(),
        y = Player.getY(),
        z = Player.getZ();
    invalidate();
    for (var i in players) arr.push(Player.getName(players[i]) + "--" + Math.round(gougu(x - Entity.getX(players[i]), y - Entity.getY(players[i]), z - Entity.getZ(players[i]))));
    showDialog("所有玩家名", "若在游戏房间外使用，则列表不会正确显示", arr.join("\n"), {
        txt: "关闭"
    });
    return true;
}

function showDialog(title, message, text, negative, positive, neutral, uncancel) {
    Ui(function() {
        try {
            var dialog = new app.AlertDialog.Builder(ctx);
            dialog.setTitle(title);
            var scroll = new wg.ScrollView(ctx);
            if (typeof(text) == "string") {
                getMessage = new wg.EditText(ctx);
                getMessage.setText(text);
                scroll.addView(getMessage);
            } else if (typeof(text) == "object") {
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
    return true;
}

function addCheckBox(parent, text, command, ave, size, checked) {
    try {
        var check = new wg.CheckBox(ctx);
        check.setText(text ? text : "");
        check.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
        check.setChecked(checked ? checked : false);
        if (size) check.setTextSize(size);
        if (command) check.setOnCheckedChangeListener(new wg.CompoundButton.OnCheckedChangeListener({
            onCheckedChanged: command
        }));
        aveLayout(check, typeof(ave) == "number" ? ave : ave.type, ave.wid, ave.hei);
        parent.addView(check);
        return check;
    } catch (err) {
        print(err)
    }
}

function aveLayout(view, ave, width, height, weight) {
    switch (ave) {
        case 1:
            view.setLayoutParams(new wg.RelativeLayout.LayoutParams(width ? width : -2, height ? height : -2, weight ? weight : 1));
            return view;
        default:
            view.setLayoutParams(new wg.LinearLayout.LayoutParams(width ? width : -2, height ? height : -2, weight ? weight : 1));
            return view;
    }
}

function Ui(command) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: command
    }));
}

function getColorDrawable(color) {
    return new grap.drawable.ColorDrawable(getColor(color));
}

function getColor(color) {
    return eval("grap.Color." + color.toUpperCase());
}

function scan() {
    runThread(function() {
        abc: while (1) {
            try {
                if (state == 1) {
                    var x = Player.getX(),
                        z = Player.getZ();
                    invalidate();
                    if (players.length > 0) {
                        var scaleX = null,
                            scaleZ = null;
                        for (var i in players) {
                            if (state == 2) break abc;
                            var ls = Math.abs(x - Entity.getX(players[i]));
                            if (scaleX == null || ls > scaleX) {
                                scaleX = ls;
                            }
                            ls = Math.abs(z - Entity.getZ(players[i]));
                            if (scaleZ == null || ls > scaleZ) {
                                scaleZ = ls;
                            }
                        }
                        var distX = scaleX * 10 / 9,
                            distZ = scaleZ * 10 / 9,
                            baseX = x - distX,
                            baseZ = z - distZ,
                            ratioX = lenX / 2 / distX,
                            ratioZ = lenZ / 2 / distZ;
                        for (var i in players) {
                            if (state == 2) break abc;
                            var name = Player.getName(players[i]),
                                color = name.length > 3 && name.substr(0, 1) == "§" && getColorValue(name.substr(3, 1)) ? getColorValue(name.substr(3, 1)) : grap.Color.WHITE,
                                actX = lenX - Math.abs(Entity.getX(players[i]) - baseX) * ratioX,
                                actZ = Math.abs(Entity.getZ(players[i]) - baseZ) * ratioZ;
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

function draw(x, y, color) {
    var canvas = new grap.Canvas(radarPic);
    var paint = getPaint({
        color: color,
        dither: true
    });
    canvas.drawCircle(x, y, radius, paint);
}

function drawPoint(player, x, y, color) {
    var ratio = Math.PI / 180,
        yaw = Entity.getYaw(player);
    var x0 = radius * 1.3 * Math.cos(yaw * ratio),
        y0 = radius * 1.3 * Math.sin(yaw * ratio),
        x1 = x0 + radius * Math.cos((yaw - 90) * ratio),
        y1 = y0 + radius * Math.sin((yaw - 90) * ratio),
        x2 = x0 + radius * Math.cos((yaw + 90) * ratio),
        y2 = y0 + radius * Math.sin((yaw + 90) * ratio),
        x3 = x0 * 2,
        y3 = y0 * 2;
    var canvas = new grap.Canvas(radarPic);
    var paint = getPaint({
        color: color,
        dither: true,
        style: grap.Paint.Style.FILL
    });
    var path = new grap.Path();
    path.moveTo(x + x3, y + y3);
    path.lineTo(x + x1, y + y1);
    path.lineTo(x + x2, y + y2);
    path.close();
    canvas.drawPath(path, paint);
}

function gougu() {
    if (arguments.length <= 3) {
        var result = 0;
        for (var i in arguments) {
            result += arguments[i] * arguments[i];
        }
        return Math.sqrt(result);
    } else {
        return null;
    }
}

function scroll(view, horizontal) {
    var scrollView = horizontal ? new wg.HorizontalScrollView(ctx) : new wg.ScrollView(ctx);
    scrollView.addView(view);
    return scrollView;
}

function getColorValue(str) {
    switch (str) {
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
            return grap.Color.rgb(160, 32, 240);
        case "灰":
            return grap.Color.GRAY;
        case "白":
            return grap.Color.WHITE;
        case "黑":
            return grap.Color.BLACK;
        case "橙":
            return grap.Color.rgb(255, 165, 0);
        default:
            return null;
    }
}

function getPaint(fields) {
    var paint = new grap.Paint();
    if (fields.color) paint.setColor(fields.color);
    if (fields.dither) paint.setDither(fields.dither);
    if (fields.antiAlias) paint.setAntiAlias(fields.antiAlias);
    if (fields.shader) paint.setShader(fields.shader);
    if (fields.width) paint.setStrokeWidth(fields.width);
    if (fields.style) paint.setStyle(fields.style);
    return paint;
}

function addButton(parent, text, command, longCommand, ave, size, fs) {
    Ui(function() {
        try {
            var button = new wg.Button(ctx);
            if (fs == true) {
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(20, 2, 2, 2)));
                button.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                aveLayout(button, typeof(ave) == "number" ? ave : ave.type, W() / 3, H() * 0.1);
                button.setTextSize(14);
            } else {
                if (fs == "传") {
                    button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50, 0, 25, 15)));
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
            if (command) button.setOnClickListener(new view.View.OnClickListener({
                onClick: command
            }));
            if (longCommand) button.setOnLongClickListener(new view.View.OnLongClickListener({
                onLongClick: longCommand
            }));
            parent.addView(button);
            return button;
        } catch (err) {
            print(err)
        }
    });
}

//文件读取函数
function readtext(re) {
    if (new java.io.File(re).exists()) {
        var bu = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(re)));
        var data = '';
        var vv = bu.readLine();
        while (vv != 'END' && vv != null) {
            data += vv + '\n';
            vv = bu.readLine()
        }
        return String(data)
    } else {
        return ''
    }
}


//文件选择器
function File_Select(Default_Path) {
    var File = new java.io.File("/storage/emulated/0/");
    var File_Folder = File.getAbsolutePath().toString();
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    if (File.exists() && File.isDirectory()) {
        UI(File_Folder_List(File));
    } else {
        print("无法打开路径" + Default_Path);
    }

    function File_Folder_List(file) {
        var arr = new Array();
        var list = file.listFiles();
        if (list == null) {
            arr[0] = "/...";
        } else {
            for (var i = 0; i < list.length; i++) {
                arr[i] = list[i].getName().toString();
            }
            arr.sort();
            arr.unshift("/...");
        }
        return arr;
    }

    function File_Folder_Selected(path) {
        var file = new java.io.File(path);
        if (!file.exists()) {
            print("路径不存在！" + path);
        } else if (file.isDirectory()) {
            UI(File_Folder_List(file));
        } else if (file.isFile()) {
            try {
                clientMessage("正在导入中......");
                eval(readtext(path));
            } catch (e) {
                clientMessage("导入失败：" + e);
            }
        }
    }


    function UI(data) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var dialog = new android.app.AlertDialog.Builder(ctx);
                    dialog.setTitle("请选择文件");
                    dialog.setItems(data, new android.content.DialogInterface.OnClickListener() {
                        onClick: function(dialog, which) {
                            if (which == 0) {
                                var pathtemp = File_Folder.split("/");
                                var result = "";
                                for (var i = 0; i < pathtemp.length; i++) {
                                    if (i != pathtemp.length - 1 && pathtemp[i] != "" && pathtemp[i] != " ") {
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
                    print("无法打开选择器UI: " + err);
                }
            }
        }));
    }
}



function 定位坐标() {
    if (W() > H()) {
        height = H(), width = W();
    } else {
        height = W(), width = H();
    }
    var layou = NewView("LL", width / 6 * 3.7, height / 6 * 4.8, "CT", 1, 2, "#FAFAFA", 20);
    var layou1 = NewView("LL", width, height, "CC", 1, 2, "#FAFAFA", 20);
    var layou2 = NewView("LL", width / 6 * 3.7, height / 6 * 4.9, "CC", 1, 1, "#ffffff", 16);
    var 界面 = NewCDV(2, "#ffffff", 15, layou1, width, height, true, true, "CC", 0, 0);

    Ui(function() {
        var 空格 = NewView("LL", width / 6 * 3.7, height / 6 * 4.0 * 0.05, "CC", 0, 2, null, null);
        var 标题 = NewText("定位坐标", "LT", 17, "#FFAA00");
        var 编辑框栏 = NewView("LL", -1, -2, "CC", 0, 2, "#ffffff", 0);
        var X坐标 = new android.widget.EditText(ctx);
        X坐标.setText(getPlayerX().toFixed(0));
        X坐标.setTextSize(14);
        X坐标.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
        X坐标.setHint("X坐标");
        编辑框栏.addView(X坐标);
        var Y坐标 = new android.widget.EditText(ctx);
        Y坐标.setText(getPlayerY().toFixed(0));
        Y坐标.setTextSize(14);
        Y坐标.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
        Y坐标.setHint("Y坐标");
        编辑框栏.addView(Y坐标);
        var Z坐标 = new android.widget.EditText(ctx);
        Z坐标.setText(getPlayerZ().toFixed(0));
        Z坐标.setTextSize(14);
        Z坐标.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
        Z坐标.setHint("Z坐标");
        编辑框栏.addView(Z坐标);
        var 定位按钮栏 = NewView("LL", -1, -2, "CC", 1, 2, "#ffffff", 0);
        var 定位 = NewView("LL", width / 6, height / 6 * 4.8 * 0.11, "CC", 1, 1, "#EEEEEE", 15, function() {
            X坐标.setText(getPlayerX().toFixed(0));
            Y坐标.setText(getPlayerY().toFixed(0));
            Z坐标.setText(getPlayerZ().toFixed(0));
        });
        var 定位文字 = NewText("定位", "CC", 14, "#FFAA00");
        定位.addView(定位文字);
        定位按钮栏.addView(定位);
        定位按钮栏.addView(空格);
        var 传送 = NewView("LL", width / 6, height / 6 * 4.8 * 0.11, "CC", 1, 1, "#EEEEEE", 15, function() {
            var X = X坐标.getText();
            var Y = Y坐标.getText();
            var Z = Z坐标.getText();
            setPosition(getPlayerEnt(), X, Y, Z);
        });
        var 传送文字 = NewText("传送", "CC", 14, "#FFAA00");
        传送.addView(传送文字);
        定位按钮栏.addView(传送);

        var 顶栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.15, "LC", 0, 2, "#ffffff", 20);
        var 按钮栏1 = NewView("SV", width / 6 * 3.7, height / 6 * 4.8 * 0.3, -1, null, null, 2, "#ffffff", 0);
        var 按钮栏 = NewView("LL", -2, -2, "CC", 1, 2, "#ffffff", 0);
        按钮栏1.addView(按钮栏);
        var 按钮 = NewView("LL", width / 6 * 3.5, height / 6 * 4.8 * 0.13, "CC", 1, 2, "#FAFAFA", 15, function() {
            界面.dismiss();
        });
        var 按钮文字 = NewText("取消", "CC", 16, "#E53935");
        layou1.addView(layou2);
        layou2.addView(layou);
        顶栏.addView(标题);
        layou.addView(顶栏);
        layou.addView(编辑框栏);
        layou.addView(定位按钮栏);
        layou.addView(按钮栏1);
        按钮.addView(按钮文字);
        layou.addView(按钮);
    });
}


//添加物品函数
function 添加物品(id, 特殊值, 界面) {
    Entity.setCarriedItem(getPlayerEnt(), id, 64, 特殊值);
    clientMessage("已添加");
    界面.dismiss();
}



function 刷物() {
    try {
        if (W() > H()) {
            height = H(), width = W();
        } else {
            height = W(), width = H();
        }
        var layou = NewView("LL", width / 6 * 3.7, height / 6 * 4.8, "CC", 1, 2, "#FAFAFA", 20);
        var layou1 = NewView("LL", width, height, "CC", 1, 2, "#FAFAFA", 20);
        var layou2 = NewView("LL", width / 6 * 4, height / 6 * 4.9, "CC", 1, 1, "#ffffff", 16);
        var 界面 = NewCDV(2, "#ffffff", 15, layou1, width, height, true, true, "CC", 0, 0);
        Ui(function() {
            var 标题 = NewText("一键拿物品", "CL", 17, "#FFAA00");
            var 空格 = NewView("LL", width / 6 * 3.7, height / 6 * 4.0 * 0.02, "CC", 0, 2, null, null);
            var 顶栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.15, "LC", 0, 2, "#ffffff", 20);
            var 按钮栏1 = NewView("SV", width / 6 * 3.7, height / 6 * 4.8 * 0.65, -1, null, null, 2, "#ffffff", 0);
            var 按钮栏 = NewView("LL", -2, -2, "CC", 1, 2, "#ffffff", 0);

            var 编辑框栏 = NewView("LL", -1, -2, "CC", 0, 2, "#ffffff", 0);
            NewButton(按钮栏, "钻石剑", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(276, 0, 界面)
            });
            NewButton(按钮栏, "钻石镐", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(278, 0, 界面)
            });
            NewButton(按钮栏, "青金石矿石", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(21, 0, 界面)
            });
            NewButton(按钮栏, "附魔金苹果", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(466, 0, 界面)
            });
            NewButton(按钮栏, "钻石头盔", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(310, 0, 界面)
            });
            NewButton(按钮栏, "钻石护甲", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(311, 0, 界面)
            });
            NewButton(按钮栏, "钻石护腿", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(312, 0, 界面)
            });
            NewButton(按钮栏, "钻石靴子", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(313, 0, 界面)
            });
            NewButton(按钮栏, "三叉戟", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(455, 0, 界面)
            });
            NewButton(按钮栏, "复活图腾", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(450, 0, 界面)
            });
            NewButton(按钮栏, "末影水晶", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(426, 0, 界面)
            });
            NewButton(按钮栏, "末影水晶蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 71, 界面)
            });
            NewButton(按钮栏, "末影珍珠", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(368, 0, 界面)
            });
            NewButton(按钮栏, "弓", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(261, 0, 界面)
            });
            NewButton(按钮栏, "箭", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(262, 0, 界面)
            });
            NewButton(按钮栏, "伤害箭", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(262, 25, 界面)
            });
            NewButton(按钮栏, "隐形基岩", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(95, 0, 界面)
            });
            NewButton(按钮栏, "基岩", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(7, 0, 界面)
            });
            NewButton(按钮栏, "地狱传送门方块", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(90, 0, 界面)
            });
            NewButton(按钮栏, "末地传送门方块", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(119, 0, 界面)
            });
            NewButton(按钮栏, "末地折跃门方块", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(209, 0, 界面)
            });
            NewButton(按钮栏, "下界反应核", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(247, 0, 界面)
            });
            NewButton(按钮栏, "发光的黑曜石", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(246, 0, 界面)
            });
            NewButton(按钮栏, "闪电蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 93, 界面)
            });
            NewButton(按钮栏, "崩服蛋1", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 257, 界面)
            });
            NewButton(按钮栏, "崩服蛋2", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 258, 界面)
            });
            NewButton(按钮栏, "崩服蛋3", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 259, 界面)
            });
            NewButton(按钮栏, "凋零炸弹", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 89, 界面)
            });
            NewButton(按钮栏, "蓝凋零炸弹", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 91, 界面)
            });
            NewButton(按钮栏, "手持物品栏", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(456, 0, 界面)
            });
            NewButton(按钮栏, "火焰炸弹", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 85, 界面)
            });
            NewButton(按钮栏, "隐身药水", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(373, 8, 界面)
            });
            NewButton(按钮栏, "伤害药水", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(441, 24, 界面)
            });
            NewButton(按钮栏, "TNT", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(46, 0, 界面)
            });
            NewButton(按钮栏, "打火石", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(259, 0, 界面)
            });
            NewButton(按钮栏, "NPC蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 51, 界面)
            });
            NewButton(按钮栏, "TNT蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 65, 界面)
            });
            NewButton(按钮栏, "凋零蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 52, 界面)
            });
            NewButton(按钮栏, "末影龙蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 53, 界面)
            });
            NewButton(按钮栏, "龙息蛋", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(383, 79, 界面)
            });




            var 按钮 = NewView("LL", width / 6 * 3.5, height / 6 * 4.8 * 0.13, "CC", 1, 2, "#FAFAFA", 15, function() {
                界面.dismiss();
            });
            var 按钮文字 = NewText("取消", "CC", 16, "#E53935");
            layou1.addView(layou2);
            layou2.addView(layou);
            顶栏.addView(标题);

            layou.addView(顶栏);
            按钮栏1.addView(按钮栏);
            layou.addView(按钮栏1);
            按钮.addView(按钮文字);
            layou.addView(空格);
            layou.addView(按钮);

        });
    } catch (err) {
        print(err);
    }
}



function 药水() {
    if (W() > H()) {
        height = H(), width = W();
    } else {
        height = W(), width = H();
    }
    var layou = NewView("LL", width / 6 * 3.7, height / 6 * 4.8, "CT", 1, 2, "#FAFAFA", 20);
    var layou1 = NewView("LL", width, height, "CC", 1, 2, "#FAFAFA", 20);
    var layou2 = NewView("LL", width / 6 * 4, height / 6 * 4.9, "CC", 1, 1, "#ffffff", 16);
    var 界面 = NewCDV(2, "#ffffff", 15, layou1, width, height, false, true, "CC", 0, 0);

    Ui(function() {
        var 标题 = NewText("药水添加", "LT", 17, "#FFAA00");
        var 副标题 = NewText("-目前只有三种药效添加了有效，别的效果加了也没用", "CC", 14, "#FFAA00");
        var 空格 = NewView("LL", width / 6 * 3.7, height / 6 * 4.0 * 0.05, "CC", 0, 2, null, null);
        var 顶栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.15, "LC", 0, 2, "#ffffff", 20);
        var 副标题栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.15, "LT", 0, 2, "#ffffff", 20);
        var 按钮栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.5, "CT", 1, 2, "#ffffff", 0);
        NewButton(按钮栏, "清除所有效果", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
            界面.dismiss();
            Entity.removeEffect(Player.getEntity(), 8);
            Entity.removeEffect(Player.getEntity(), 3);
            Entity.removeEffect(Player.getEntity(), 16);
        });
        NewButton(按钮栏, "跳跃提升", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
            界面.dismiss();
            Entity.addEffect(Player.getEntity(), 8, 3276799, 4);
        });
        NewButton(按钮栏, "急迫", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
            界面.dismiss();
            Entity.addEffect(Player.getEntity(), 3, 3276799, 255);
        });
        NewButton(按钮栏, "夜视", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
            界面.dismiss();
            Entity.addEffect(Player.getEntity(), 16, 3276799, 1);
        });

        var 按钮 = NewView("LL", width / 6 * 3.5, height / 6 * 4.8 * 0.13, "CC", 1, 2, "#FAFAFA", 15, function() {
            界面.dismiss();
        });
        var 按钮文字 = NewText("取消", "CC", 16, "#E53935");
        layou1.addView(layou2);
        layou2.addView(layou);
        顶栏.addView(标题);
        layou.addView(顶栏);
        layou.addView(副标题栏);
        副标题栏.addView(副标题);
        layou.addView(按钮栏);
        按钮.addView(按钮文字);
        layou.addView(空格);
        layou.addView(按钮);

    });
}

function 提示(标题文字, 内容文字, 按钮text, 背景开关, command) {
    if (W() > H()) {
        height = H(), width = W();
    } else {
        height = W(), width = H();
    }
    var layou = NewView("LL", width / 6 * 3.7, height / 6 * 4.7, "CC", 1, 2, "#", 20);
    var layou1 = NewView("LL", width, height, "CC", 1, 2, "", 20);
    if (背景开关 == true) {
        layou1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100, 1, 1, 1)));
    }
    var layou2 = NewView("LL", width / 6 * 4, height / 6 * 4.7, "CC", 1, 1, "#ffffff", 15);
    var 界面 = NewCDV(2, "#ffffff", 15, layou1, width, height, false, true, "CC", 0, 0);

    Ui(function() {
        var 标题 = NewText(标题文字, "CC", 18, "#E53935");
        var 顶栏 = NewView("LL", width / 6 * 3.4, height / 6 * 4.7 * 0.15, "LC", 0, 2, "#ffffff", 20);
        var 文字栏 = NewView("SV", width / 6 * 3.5, height / 6 * 4.7 * 0.65, null, null, 2, "#ffffff", 0);
        var 内容 = NewText(内容文字, "LT", 15, "#FFAA00");
        var 空格 = NewView("LL", width / 6 * 3.1, height / 6 * 4.7 * 0.02, "CC", 0, 2, null, null);
        var 按钮 = NewView("LL", width / 6 * 3.1, height / 6 * 4.7 * 0.13, "CC", 1, 1, "#EEEEEE", 15);
        var 按钮文字 = NewText(按钮text, "CC", 16, "#1E88E5");
        if (command) 按钮.setOnClickListener(new view.View.OnClickListener({
            onClick: command
        }));
        layou1.addView(layou2);
        layou2.addView(layou);
        顶栏.addView(标题);
        layou.addView(顶栏);
        文字栏.addView(内容);
        layou.addView(文字栏);
        按钮.addView(按钮文字);
        layou.addView(空格);
        layou.addView(按钮);

    });
    return 界面;
}

function 顶部提示(text) {
    var lay = NewView("LL", W() / 10 * 3.5, H() * 0.08, "CC", 0, 1, "#ffffff", 20);
    var 界面 = NewCDV(2, null, null, lay, W() / 10 * 4, H() * 0.08, false, true, "CT", 0, H() * 0.02)
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var 文字 = NewText("暗杀Find Res•" + text, "LC", 14, "#FFAA00");
            lay.addView(文字);
            UIMove(lay, 0, 0, -100, 0, 300, null);
            UIReveal(文字, 0, 0, 0, 1400, 2000)
            UIReveal(lay, 0, 0, 0, 1400, 2000)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    UIMove(lay, 0, 0, 0, -100, 300, null)
                }
            }), 1500)
        }
    }));
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    界面.dismiss();
                }
            }), 1800)
        }
    }));
}



/*
LiteUi Function
By FloatDust
小阳侵权抄袭
*/

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


function NewButton(view, text, W, H, command) {
    var 按钮 = NewView("LL", W, H, "CC", 1, 1, "#E0E0E0", 15, command);
    var 按钮文字 = NewText(text, "CC", 14, "#FFAA00");
    var 空格 = NewView("LL", width / 6 * 3.3, height / 6 * 4.5 * 0.02, "CC", 0, 2, null, null);
    按钮.addView(按钮文字);
    view.addView(按钮);
    view.addView(空格);
}

function NewView(type, sizeW, sizeH, gravity, ori, cm, color, cr, clickrun) {
    if (type == "LL") {
        var _L1 = new android.widget.LinearLayout(ctx);
    } else if (type == "SV") {
        var _L1 = new android.widget.ScrollView(ctx);
    };
    _L1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(sizeW, sizeH));
    if (gravity == "LT") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
    } else if (gravity == "LC") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
    } else if (gravity == "LB") {
        _L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
    } else if (gravity == "CT") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
    } else if (gravity == "CC") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    } else if (gravity == "CB") {
        _L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
    } else if (gravity == "RT") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
    } else if (gravity == "RC") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
    } else if (gravity == "RB") {
        _L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
    };
    if (ori != null) {
        _L1.setOrientation(ori);
    };
    if (cm == 0) {
        _L1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
    } else if (cm == 1) {
        _L1.setBackgroundDrawable(roundBG(color, cr));
    } else if (cm == 2) {

    };
    if (clickrun != null) {
        _L1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                try {
                    clickrun(v);
                } catch (e) {
                    print(e)
                };
            }
        }));
    };

    return _L1;
};

function NewCDV(cm, color, cr, view, sizeW, sizeH, fa, ta, gravity, pyx, pyy) {
    var _Cdkview1 = new android.widget.PopupWindow();
    if (cm == 0) {
        _Cdkview1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(color)));
    } else if (cm == 1) {
        _Cdkview1.setBackgroundDrawable(roundBG(color, cr));
    } else if (cm == 2) {};
    _Cdkview1.setAnimationStyle(android.R.style.Animation_Dialog);
    _Cdkview1.setContentView(view);
    _Cdkview1.setWidth(sizeW);
    _Cdkview1.setHeight(sizeH);
    _Cdkview1.setFocusable(fa);
    _Cdkview1.setTouchable(ta);
    if (gravity == "LT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, pyx, pyy);
    } else if (gravity == "LC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, pyx, pyy);
    } else if (gravity == "LB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, pyx, pyy);
    } else if (gravity == "CT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, pyx, pyy);
    } else if (gravity == "CC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, pyx, pyy);
    } else if (gravity == "CB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, pyx, pyy);
    } else if (gravity == "RT") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, pyx, pyy);
    } else if (gravity == "RC") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, pyx, pyy);
    } else if (gravity == "RB") {
        _Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, pyx, pyy);
    };
    return _Cdkview1;
};

function NewText(text, gravity, size, color) {
    var _T1 = new android.widget.TextView(ctx);
    if (gravity == "LT") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
    } else if (gravity == "LC") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
    } else if (gravity == "LB") {
        _T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
    } else if (gravity == "CT") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
    } else if (gravity == "CC") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
    } else if (gravity == "CB") {
        _T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
    } else if (gravity == "RT") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
    } else if (gravity == "RC") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
    } else if (gravity == "RB") {
        _T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
    };
    _T1.setText(text);
    if (size != null) {
        _T1.setTextSize(size);
    };
    if (color != null) {
        _T1.setTextColor(android.graphics.Color.parseColor(color));
    };
    return _T1;
};

function NewPB(mode, max, pro) {
    if (mode == 1) {
        var _PB1 = new android.widget.ProgressBar(ctx);
        return _PB1;
    } else if (mode == 2) {
        var _PB2 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
        _PB2.setMax(max);
        _PB2.setProgress(pro);
    };
};

function CheckFiles(path) {
    var ml = new java.io.File(path);
    if (!ml.exists()) {
        return false;
    } else {
        return true;
    };
};


function ReadData(path) {
    var file = new java.io.File(path);
    if (file.isFile()) {
        var out = [];
        var line = "";
        var ins = new java.io.InputStreamReader(new java.io.FileInputStream(file), "UTF-8");
        var buff = new java.io.BufferedReader(ins);
        while ((line = buff.readLine()) != null) {
            out.push(line);
        };
        ins.close();
        return out.join("\n");
    };
};

function InputData(path, data) {
    var foss = new java.io.FileOutputStream(path);
    foss.write(java.lang.String(data).getBytes());
    foss.close();
};

//圆角矩形背景   By:鄢主晴伊  未授权
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

//再次封装上面这条
function roundBG(hex, round, f, s) {
    return roundRect(hexColor(hex), round, f, s)
}

//进制颜色
function hexColor(c) {
    return android.graphics.Color.parseColor(c);
}

/*#揭露*/
function UIReveal(view, x, y, startr, endr, time) {
    var globallayoutlinstener = new android.view.ViewTreeObserver.OnGlobalLayoutListener() {
        onGlobalLayout: function() {
            var anim = new android.view.ViewAnimationUtils.createCircularReveal(view, x, y, startr, endr);
            anim.setDuration(time);
            anim.start();
            view.getViewTreeObserver().removeOnGlobalLayoutListener(globallayoutlinstener);
        }
    };
    view.setVisibility(android.view.View.VISIBLE);
    view.getViewTreeObserver().addOnGlobalLayoutListener(globallayoutlinstener);
    return globallayoutlinstener;
};
/*#移动*/
function UIMove(view, x1, x2, y1, y2, time, type) {
        var anim = android.view.animation;
        var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
        var dh = new anim.TranslateAnimation(tp, x1 * 0.01, tp, x2 * 0.01, tp, y1 * 0.01, tp, y2 * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        return dh;
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
    /*#收缩*/
function UIShrink(view, x1, x2, y1, y2, x, y, time, type) {
        var anim = android.view.animation;
        var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF : type == 1 ? anim.Animation.RELATIVE_TO_PARENT : anim.Animation.ABSOLUTE);
        var dh = new anim.ScaleAnimation(x1 * 0.01, x2 * 0.01, y1 * 0.01, y2 * 0.01, tp, x * 0.01, tp, y * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        return dh;
    }
    /*淡入*/
function UIFadein(view, A, B, time) {
        var dh = new android.view.animation.AlphaAnimation(A * 0.01, B * 0.01);
        dh.setDuration(time);
        if (view != null) view.startAnimation(dh);
        return dh;
    }
    /*缩放*/
function UIZoom(view, In, out, time, type) {
        return UIShrink(view, In, out, In, out, 50, 50, time, type);
    }
    /*水平*/
function UILevel(view, In, out, time, type) {
        return UIMove(view, In, out, 0, 0, time, type);
    }
    /*垂直*/
function UIPlumb(view, In, out, time, type) {
    return UIMove(view, 0, 0, In, out, time, type);
}

function FontColor(text) {
    var colors = [
        [" ", " &nbsp;"],
        ["\n", "<br/>"],
        ["§l", "</b><b>"],
        ["§m", "</del><del>"],
        ["§n", "</ins><ins>"],
        ["§o", "</i><i>"],
        ["§r", "</font></b></del></ins></i>"],
        ["§0", "</font><font color=#000000>"],
        ["§1", "</font><font color=#0000AA>"],
        ["§2", "</font><font color=#00AA00>"],
        ["§3", "</font><font color=#00AAAA>"],
        ["§4", "</font><font color=#AA0000>"],
        ["§5", "</font><font color=#AA00AA>"],
        ["§6", "</font><font color=#FFAA00>"],
        ["§7", "</font><font color=#cccccc>"],
        ["§8", "</font><font color=#555555>"],
        ["§9", "</font><font color=#5555FF>"],
        ["§a", "</font><font color=#55FF55>"],
        ["§b", "</font><font color=#55FFFF>"],
        ["§c", "</font><font color=#FF5555>"],
        ["§d", "</font><font color=#FF55FF>"],
        ["§e", "</font><font color=#FFFF55>"],
        ["§f", "</font><font color=#FFFFFF>"]
    ];
    for (var e in colors) {
        text = text.split(colors[e][0]).join(colors[e][1]);
    };
    return android.text.Html.fromHtml(text);
}



function A1() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                av1 = NewView("LL", W() * 0.05 + 200, H() * 0.35, "RC", 1, 2, null, null, null);
                av2 = NewView("LL", W() * 0.05 + 200, H() * 0.35, "CT", 1, 1, "#CC83FF", 20, null);
                av3 = NewView("LL", W() * 0.05 + 200, H() * 0.05, "CC", 1, 0, "#A525FF", 0, null);

                av3s = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#CC83FF", 0, null);
                av4 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#E9C9FF", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {
                                try {
                                    new android.os.Handler().postDelayed(new java.lang.Runnable({
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
                av5 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#CC83FF", 0, null);
                av6 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#E9C9FF", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {
                                try {
                                    new android.os.Handler().postDelayed(new java.lang.Runnable({
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
                av7 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#CC83FF", 0, null);
                av8 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#E9C9FF", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {
                                try {
                                    new android.os.Handler().postDelayed(new java.lang.Runnable({
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
                av9 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#CC83FF", 0, null);
                av10 = NewView("LL", W() * 0.04 + 200, H() * 0.05, "CC", 1, 1, "#E9C9FF", 20,
                    function(v) {
                        UIZoom(av1, 100, 0, 300);
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {
                                try {
                                    new android.os.Handler().postDelayed(new java.lang.Runnable({
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
                av11 = NewView("LL", W() * 0.04 + 200, H() * 0.02, "CC", 1, 0, "#CC83FF", 0, null);

                cv1 = NewText("附魔菜单", "CC", 10, "#FFFFFF");
                cv2 = NewText("锋利｜力量｜荆棘", "CC", 11, "#FFFFFF");
                cv3 = NewText("击退｜冲击｜保护", "CC", 11, "#FFFFFF");
                cv4 = NewText("效率|时运|耐久", "CC", 11, "#FFFFFF");
                cv5 = NewText("火焰附加", "CC", 11, "#FFFFFF");

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

                ac1 = NewCDV(2, null, 0, av1, W() * 0.05 + 200, H() * 0.35, true, true, "RT", W() / 3, H() * 0.05);

                UIZoom(av1, 0, 100, 300);
            } catch (err) {
                print(err)
            }
        }
    }));
};




//卡死人的东西。。
function 主要按钮() {


    function anniu() {
        try {
            Ui(function() {
                // bb.dismiss();          
                var lay = new android.widget.ScrollView(ctx);
                var lay1 = new android.widget.LinearLayout(ctx);
                var lay3 = new android.widget.LinearLayout(ctx);
                var lay4 = new android.widget.LinearLayout(ctx);
                var lay5 = new android.widget.LinearLayout(ctx);
                var lay11 = new android.widget.ScrollView(ctx);
                var lay12 = new android.widget.ScrollView(ctx);
                var lay111 = new android.widget.LinearLayout(ctx);
                var lay122 = new android.widget.LinearLayout(ctx);


                lay11.addView(lay111);
                lay12.addView(lay122);
                lay111.setOrientation(1);
                lay122.setOrientation(1);


                lay5.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() / 3, H() * 0.1));
                var kg1 = new android.widget.LinearLayout(ctx);
                lay3.addView(lay4);
                kg1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() / 3, H() * 0.02));
                lay4.addView(kg1);
                var view10 = NewView("LL", W() / 3, -2, "CC", 0, 2, null, 0, function() {
                    windis();
                    windis(联机);
                })
                var text10 = NewText(FontColor("§e——常用——"), "CC", 17, "#FFAA00");
                view10.addView(text10);
                lay4.addView(view10);

                if (显示界面 == 1) {
                    text10.setText(FontColor("— | 常用 | —"));
                    lay.setVisibility(lay.VISIBLE);
                    lay11.setVisibility(lay11.GONE);
                    lay12.setVisibility(lay12.GONE);
                }
                if (显示界面 == 2) {
                    text10.setText("— | 生存 | —");
                    lay11.setVisibility(lay11.VISIBLE);
                    lay.setVisibility(lay.GONE);
                    lay12.setVisibility(lay12.GONE);
                }
                if (显示界面 == 3) {
                    text10.setText("— | 按钮 | —");
                    lay12.setVisibility(lay12.VISIBLE);
                    lay11.setVisibility(lay11.GONE);
                    lay.setVisibility(lay.GONE);
                }

                //三个按钮
                var button1 = new wg.Button(ctx);
                var button2 = new wg.Button(ctx);
                var button3 = new wg.Button(ctx);
                button1.setLayoutParams(new wg.LinearLayout.LayoutParams(-2, -2, 1));
                button2.setLayoutParams(new wg.LinearLayout.LayoutParams(-2, -2, 1));
                button3.setLayoutParams(new wg.LinearLayout.LayoutParams(-2, -2, 1));

                button1.setText("常用");
                button1.setTextSize(14);
                button1.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                button1.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        lay.setVisibility(lay.VISIBLE);
                        显示界面 = 1;
                        UIFadein(lay, 10, 100, 200);
                        lay11.setVisibility(lay11.GONE);
                        lay12.setVisibility(lay12.GONE);
                        text10.setText("— | 常用 | —");
                    }
                }));

                button2.setText("生存");
                button2.setTextSize(14);
                button2.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                button2.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        lay11.setVisibility(lay11.VISIBLE);
                        显示界面 = 2;
                        UIFadein(lay11, 10, 100, 200);
                        lay.setVisibility(lay.GONE);
                        lay12.setVisibility(lay12.GONE);
                        text10.setText("— | 生存 | —");
                    }
                }));
                button3.setText("按钮");
                button3.setTextSize(14);
                button3.setTextColor(android.graphics.Color.parseColor("#FFAA00"));
                button3.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        lay12.setVisibility(lay12.VISIBLE);
                        显示界面 = 3;
                        UIFadein(lay12, 10, 100, 200);
                        lay.setVisibility(lay.GONE);
                        lay11.setVisibility(lay11.GONE);
                        text10.setText("— | 按钮 | —");
                    }
                }));
                button1.setBackgroundDrawable(getColorDrawable("transparent"));
                button2.setBackgroundDrawable(getColorDrawable("transparent"));
                button3.setBackgroundDrawable(getColorDrawable("transparent"));

                lay5.addView(button1);
                lay5.addView(button2);
                lay5.addView(button3);
                lay4.addView(lay5);

                lay3.addView(lay);
                lay3.addView(lay11);
                lay3.addView(lay12);
                lay.addView(lay1);
                addButton(lay1, "联/租模式", function() {
                    if (mode) {
                        mode = false;
                        showTip("关闭联/租模式");
                    } else {
                        mode = true;
                        showTip("开启联/租模式");
                    }
                }, null, 0, 15, true);
                addButton(lay1, "方框透视", function() {
                    if (方框透视) {
                        out();
                        方框透视 = false;
                        顶部提示(FontColor("§3方框透视关闭"));
                    } else {
                        start1();
                        顶部提示(FontColor("§3方框透视开启，再次点击关闭"));
                        方框透视 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay1, "血量显示", function() {
                    if (血量) {
                        关闭显血();
                        血量 = false;
                    } else {
                        血量显示();
                        血量 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay1, "延迟测试", function() {
                    网速测试();
                }, null, 0, 15, true);
                addButton(lay1, "背后暗杀", function() {
                    flash1(false, "背后暗杀");
                }, null, 0, 15, true);
                addButton(lay1, "环绕暗杀", function() {
                    flash(false, "环绕暗杀");
                }, null, 0, 15, true);
                addButton(lay1, "无限闪杀", function() {
                    ssflash(false, "无限闪杀");
                }, null, 0, 15, true);
                addButton(lay1, "回家", goHome, setHome, 0, 15, true);
                addButton(lay1, "长臂猿", function() {
                    长臂猿();
                }, null, 0, 15, true);
                addButton(lay1, "自动长臂", function() {
                    if (长臂 == true) {
                        长臂 = false;
                        showTip("已关闭自动长臂");
                    } else {
                        长臂 = true;
                        自动长臂();
                        showTip("已开启自动长臂");
                    }
                }, null, 0, 15, true);
                addButton(lay1, "虚空回弹", function() {
                    if (回弹 == true) {
                        回弹 = false;
                        showTip("已关闭虚空回弹");
                    } else {
                        回弹 = true;
                        showTip("已开启虚空回弹");
                    }
                }, null, 0, 15, true);
                addButton(lay111, "附魔", function() {
                    enchant();
                }, null, 0, 15, true);
                addButton(lay111, "药水效果", function() {
                    药水();
                }, null, 0, 15, true);
                addButton(lay111, "定位坐标", function() {
                    定位坐标();
                }, null, 0, 15, true);
                addButton(lay111, "随机传送", function() {
                    随机();
                }, null, 0, 15, true);
                addButton(lay111, "真·创造之手", function() {
                    撸方块();
                }, null, 0, 15, true);
                addButton(lay111, "时间管理", function() {
                    时间管理();
                }, null, 0, 15, true);
                addButton(lay111, "血量管理", function() {
                    血量管理();
                }, null, 0, 15, true);
                addButton(lay111, "经验", exp, null, 0, 15, true);
                addButton(lay111, "雷达", function() {
                    radar();
                    windis();
                }, getNames, 0, 15, true);
                addButton(lay111, "一键拿物品", function() {
                    刷物();
                }, null, 0, 15, true);
                addButton(lay111, "添加物品", function() {
                    加物();
                }, null, 0, 15, true);
                addButton(lay111, "变速", function() {
                    speed();
                }, null, 0, 15, true);
                addButton(lay111, "加载", File_Select, null, 0, 15, true);
                addButton(lay122, "tp玩家", function() {
                    if (显示传按钮) {
                        传按钮.dismiss();
                        显示传按钮 = false;
                    } else {
                        传送按钮();
                        显示传按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "绑喵绕", function() {
                    if (!显示绑喵绕) {
                        绑喵绕();
                        显示绑喵绕 = true;
                    } else if (显示绑喵绕) {
                        绑喵绕按钮.dismiss();
                        显示绑喵绕 = false;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "搭路", function() {
                    if (显示搭路按钮) {
                        搭路按钮.dismiss();
                        显示搭路按钮 = false;
                    } else {
                        搭();
                        显示搭路按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "上下瞬移", function() {
                    if (显示上下按钮) {
                        上按钮.dismiss();
                        下按钮.dismiss();
                        显示上下按钮 = false;
                    } else {
                        上();
                        下();
                        显示上下按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "空中跳跃", function() {
                    if (显示跳按钮) {
                        跳按钮.dismiss();
                        显示跳按钮 = false;
                    } else {
                        跳();
                        显示跳按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "冲刺", function() {
                    if (显示冲按钮) {
                        冲按钮.dismiss();
                        显示冲按钮 = false;
                    } else {
                        冲();
                        显示冲按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "稳定飞行", function() {
                    if (显示飞按钮) {
                        飞按钮.dismiss();
                        显示飞按钮 = false;
                    } else {
                        飞();
                        显示飞按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "挖床", function() {
                    if (显示挖床按钮) {
                        挖按钮.dismiss();
                        换按钮.dismiss();
                        显示挖床按钮 = false;
                    } else {
                        换();
                        挖();
                        显示挖床按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "虚空漫游", function() {
                    if (显示漫按钮) {
                        漫步按钮.dismiss();
                        显示漫按钮 = false;
                    } else {
                        漫();
                        显示漫按钮 = true;
                    }
                }, null, 0, 15, true);
                addButton(lay122, "黑洞杀", function() {
                    if (显示黑洞杀按钮 == true) {
                        显示黑洞杀按钮 = false;
                        黑洞杀按钮.dismiss();
                    } else {
                        显示黑洞杀按钮 = true;
                        吸按钮();
                    }
                }, null, 0, 15, true);

                UIFadein(lay3, 10, 100, 200);

                lay4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(10, 1, 1, 1)));
                win1.setWidth(W() / 3);
                lay3.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() / 3, H()));
                win1.setHeight(H());
                lay1.setOrientation(1);
                lay3.setOrientation(1);
                lay4.setOrientation(1);
                // win1.setFocusable(true);
                lay1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
                lay4.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                lay5.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
                win1.setContentView(scroll(lay3, true));
                win1.setBackgroundDrawable(getColorDrawable("transparent"));
                win1.showAtLocation(mainView, right | top, 0, 0);
            });
        } catch (err) {
            print(err);
        }
    }

    var 暗杀 = "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"
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var 坐标x = 0,
        坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.5,
        坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var 窗口 = new android.widget.PopupWindow();
                var layout = new android.widget.RelativeLayout(ctx),
                    按钮 = new android.widget.ImageView(ctx);
                var 图标 = android.util.Base64.decode(暗杀, 0);

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
                print(err);
            }
        }
    }));
}



function next() {
    oo++
    if (oo > name.length || oo == name.length)
        oo = 0
    gl = ll[oo]
    start()
}

function shang() {
    oo--
    if (oo < 0)
        oo = ll.length - 1
    gl = ll[oo]
    start()
}

function modTick() {
    if (player.isPlaying()) {
        ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                pppppp.setProgress(player.getCurrentPosition())
            }
        }));
    }
}

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

/**
 *这是一个补丁, 你可以直接用来透视所有实体,
 *如果你要修改, 请看完所有注释!了解以下变量用法,
 *注意!我不再解答这些魔改后出错的问题!(对于改了我
 *东西而不知道怎么用来问我的..我真**)也是因为我
 *不再维修这个JS了
 */

var GLU = android.opengl.GLU;
var GLSurfaceView = android.opengl.GLSurfaceView;
var GL10 = javax.microedition.khronos.opengles.GL10;
var EGLConfig = javax.microedition.khronos.egl.EGLConfig;
var Runnable = java.lang.Runnable;
var ByteBuffer = java.nio.ByteBuffer;
var ByteOrder = java.nio.ByteOrder;
var FloatBuffer = java.nio.FloatBuffer;


/*
 * 修改请保留此注释!
 * Copyright (c) 2019 8 7 Frms.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License Version 2.0,
 * with full text available at http://www.apache.org/licenses/LICENSE-2.0.html
 *
 * This software is provided "as is". Use at your own risk.
 * My QQ number: 3505826836
 *
 *如果你有好的建议or帮助, 欢迎加Q
 *同时我也定制JS的GUI及动画, 你可以加Q, 届时免费提供动画演示
 *亦可购买动画, 同时也定制非MODPE类算法(e.g. 服务器交互,加密,openGL ES等)
 */


// 其实StrictMath.java有相应方法, 写就简单写一下
var UNIT_R2P = Math.PI / 180; // ≈ \u3c0÷180
invalidate();
// 缓冲变量, 私有
var _1;
var _x, _y, _z;

/**绘制,
 * 3维,右手定则,上y+右x+前z+,
 *具体参考 : {link :《opengl坐标系统及绘图流程理解》 https://blog.csdn.net/ly20056402006/article/details/44747971?utm_source=app}
 *每三个数组为一个顶点,每个顶点可以相同,绘制时,从第一个顶点绘制到最后的顶点,然后再绘制到第一个顶点,实现收尾相接.
 *如果要绘制复杂图形(如圆)需要较多的顶点,比较吃内存。
 */
/**
 * 绘制的点是收尾相连的(自动连), 以先后顺序连点成线的
 */
var mArray = [
    0.5, -0.5, 0.5, //1
    -0.5, -0.5, 0.5, //2
    -0.5, -0.5, -0.5, //3

    -0.5, 1, -0.5, //4
    -0.5, 1, 0.5, //5
    0.5, 1, 0.5, //6

    0.5, 1, -0.5, //7
    0.5, -0.5, -0.5, //8 end
    0.5, -0.5, 0.5, //1

    0.5, 1, 0.5, //6
    0.5, 1, -0.5, //7
    -0.5, 1, -0.5, //4

    -0.5, -0.5, -0.5, //3
    0.5, -0.5, -0.5, //8
    0.5, -0.5, 0.5, //1

    0.5, 1, 0.5, //6
    -0.5, 1, 0.5, //5
    -0.5, -0.5, 0.5 //2
    // by Frms
];



var inGame = false;
var mThread;

// 引擎启动。
// 确保进入游戏时(后)启动。
function start() {
    inGame = true;
    var a;
    ctx.runOnUiThread(new Runnable({
        run: function() {
            // 启用openGL 3D引擎绘制数组
            a = new GLSurfaceView(ctx);
            a.setZOrderOnTop(true); //顶层设定
            a.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT); //透明设置
            a.setEGLConfigChooser(8, 8, 8, 8, 16, 0);

            a.setRenderer(new GLSurfaceView.Renderer() {
                // 帧绘制区域
                onDrawFrame: function(gl) {
                    // 清除上一次绘制的画
                    gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
                    gl.glLoadIdentity();
                    if (inGame) {
                        Draw(gl);
                    }
                },
                // 屏幕改变时调用
                onSurfaceChanged: function(gl, w, h) {

                    gl.glViewport(0, 0, w, h);
                    gl.glMatrixMode(GL10.GL_PROJECTION);
                    gl.glLoadIdentity();
                    // 识图设定, 参数二是视角(眼睛可看到的角度,比如), 需要自行设定(默认69/66/65/75(cs 1.6视野))			 
                    GLU.gluPerspective(gl, 75.0, w / h, 1.0, 150.0 /*最远看清的距离*/ );
                    gl.glMatrixMode(GL10.GL_MODELVIEW);
                    gl.glLoadIdentity();
                },
                onSurfaceCreated: function(gl, c) {}
            });
            a.setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY
                //GLSurfaceView.RENDERMODE_CONTINUOUSLY
                // 时时调用, 比较吃内存, 如使用,请安全删除mThread线程(一定要!)
            );
            // 顶层添加控件
            ctx.getWindow().getDecorView().addView(a);

            mThread = new java.lang.Thread(new Runnable({
                run: function() {
                    while (inGame) {
                        // 画布刷新
                        a.requestRender();
                        mThread.sleep(50);
                    }
                }
            }));
            mThread.start();
        }
    }));
}

// 绘制
function Draw(gl) {
    // 打开流
    gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);

    var player = getPlayerEnt();
    // 这个函数适合放在进入游戏界面的时候执行一次即可。
    // 不然吃内存↑

    // 以下设置摄像机观察方向
    var yaw = getYaw(player) % 360;
    var pitch = getPitch(player) % 360;

    // 摄像机位置
    var cX = getPlayerX();
    var cY = getPlayerY() + 1;
    var cZ = getPlayerZ();

    // 看的位置(目的中心坐标)
    var sX = Math.sin(yaw * UNIT_R2P);
    var sZ = Math.cos(yaw * UNIT_R2P);
    var sY = Math.sqrt(sX * sX + sZ * sZ) * Math.tan((pitch - 180) * UNIT_R2P);

    var centerX = cX - sX;
    var centerZ = cZ + sZ;
    var centerY = cY - sY;

    GLU.gluLookAt(gl, cX, cY, cZ, centerX, centerY, centerZ, 0, 1, 0);
    invalidate();
    for (var i = 0; 方框透视 == true; i++) // var v in e
    {
        _1 = players[i];
        if (_1 == null) return;

        // 偏差, 构造盒子时,会出现偏差, 比如pS = 1时,偏0.5个单位(openGL), 因为mc绘制方块以右下角为原点,而此openGL以mArray中心为原点。
        _x = Entity.getX(_1);
        _y = Entity.getY(_1); // 绘制高的一倍
        _z = Entity.getZ(_1);

        // 用的画笔的颜色(argb)值在[0, 1]
        gl.glColor4f(1.0, 0.0, 0.0, 1.0);
        // 线的宽度
        gl.glLineWidth(2);
        // 要把以后画的物体移动到的位置
        gl.glTranslatef(_x, _y, _z);
        // 绘制
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, getCache(_x, _y, _z, 1));
        gl.glDrawArrays(GL10.GL_LINE_LOOP, 0, mArray.length / 3 /*这是个常量, 如果不想改动,可以直接设置以减少运行内存*/ );

        gl.glTranslatef(-_x, -_y, -_z);
    }
    gl.glDisableClientState(GL10.GL_VERTEX_ARRAY);
    gl.glFinish();
}

/**
 *@param 0,1,2 > 实体位置参数
 *@param 体积比率( 实体 : 玩家 )
 *这是真的耗内存(哭), 不好优化(懒)
 */
function getCache(x, y, z, pS) {

    var a = [];
    if (pS != 1) {
        for (var i in mArray) {
            a.push(mArray[i] * pS);
        }
    } else {
        a = mArray;
    }
    return getBuffer(a);
}

// 确保退出游戏调用此方法
function out() {
    inGame = false;
    方框透视 == false;
    if (mThread != null) {
        try {
            mThread.stop(); // 已过时, by Frms
            //    		mThread.interrupt();
        } catch (e) {}
    }
}

function getBuffer(array) {
    var vbb = ByteBuffer.allocateDirect(array.length * 4);
    vbb.order(ByteOrder.nativeOrder());
    var vertexBuffer = vbb.asFloatBuffer();
    vertexBuffer.put(array);
    vertexBuffer.position(0);
    return vertexBuffer;
}


/*操作部分*/
function leaveGame() {
    out();
}


function 血量显示() {
    if (enable_script_var == 0) {
        return;
    }

    if (botton && !botton1) {
        botton1 = true
    }
    if (botton1 && !botton) {
        botton1 = false
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(new java.lang.Runnable({
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

    var typeId = Entity.getEntityTypeId(Player.getPointedEntity());
    if ((Player.getPointedEntity() != -1 && (typeId < 64 || typeId >= 104) && (pointent != Player.getPointedEntity() | blood != Entity.getHealth(Player.getPointedEntity()))) | (lockent != -1 && Entity.getHealth(lockent) != blood && Player.getPointedEntity() == -1)) {
        if (lockent == -1)
            blood = Entity.getHealth(Player.getPointedEntity())
        else
            blood = Entity.getHealth(lockent)
        pointent = Player.getPointedEntity()
        time = -1
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var bmp = android.graphics.Bitmap.createBitmap(dip2px(ctx, 180), dip2px(ctx, 25), android.graphics.Bitmap.Config.ARGB_8888);
                    var pa = new android.graphics.Paint()
                    pa.setStyle(android.graphics.Paint.Style.STROKE)
                    var cv = new android.graphics.Canvas();
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
                    var bv = new android.widget.ImageView(ctx)
                    bv.setImageBitmap(bmp)
                    var lay = new android.widget.RelativeLayout(ctx)
                    lay.addView(bv)
                    var t = new android.widget.TextView(ctx)
                    var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)

                    t.setTextSize(16)

                    var total = typeblood[Entity.getEntityTypeId(pointent)]
                    if (total != null && total != org.mozilla.javascript.Undefined) {
                        if (lockent == -1)
                            t.setText(" " + blood + "/" + typeblood[Entity.getEntityTypeId(pointent)])
                        else
                            t.setText(" " + Entity.getHealth(lockent) + "/" + typeblood[Entity.getEntityTypeId(lockent)])
                        t.setLayoutParams(textParams)
                        lay.addView(t)

                        if (openwindow != null)
                            openwindow.dismiss()
                        openwindow = null
                        openwindow = new android.widget.PopupWindow(lay, dip2px(ctx, 180), dip2px(ctx, 25));
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
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(new java.lang.Runnable({
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

function dip2px(ctx, dips) {
    return Math.ceil(aaaa * dips);
}

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var aaaa = ctx.getResources().getDisplayMetrics().density

function 关闭显血() {
    if (openwindow != null) {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(new java.lang.Runnable({
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

function enable_script_func() {
    enable_script_var = 1;
}

function disable_script_func() {}