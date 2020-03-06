//暗杀Pro 0.5
//2019-8-24


/*
读者你好:

 盗用js名单:
       名字        盗用度     作者                 用途
   WeHack 2.9    0.01%    FloatDust        第一次进入的展示(没盗闪闪发光的那个东西)
   MaxEnchant     97%     FloatDust        附魔，调用库
   暗杀            100%      digyth           。。。。
   Skiddy          0.01%    不知道             自瞄算法
   Star3.0         0.01%      五芒星           拖动按钮

*/
print("小阳抄袭狗死妈")
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
var 搭路按钮, 显示搭路按钮, 显示上下按钮, 上按钮, 下按钮, 显示冲按钮, 冲按钮, 显示跳按钮, 跳按钮, 显示挖床按钮, 挖按钮, 换按钮, 显示飞按钮, 飞按钮, 传按钮, 显示传按钮, 绑喵绕按钮, 显示绑喵绕, 漫步按钮, 显示漫按钮, 黑洞杀按钮, 显示黑洞杀按钮;
var zimiao, bang, rao, 喵 = false,
    长臂 = false,
    漫步, 显示界面 = 1,
    黑洞杀 = false;

var win1 = new android.widget.PopupWindow(ctx),
    winsee = false,
    win2 = new android.widget.PopupWindow(),
    win3 = new android.widget.PopupWindow(),
    联机 = new android.widget.PopupWindow(ctx),
    传 = new android.widget.PopupWindow(ctx);
if (!running) {
    running = true;
    Ui(function() {
        var 提示界面 = 提示("公告", "作者小阳，我的妈妈死了，我爸也也因为婚外情染上艾滋病了，现在我是一个抄袭废物。", "知道了", true, function() {
            Ui(function() {
                主要按钮();
                a1 = NewView("LL", -2, -2, "CC", 1, 2, "#CC83FF", 90);
                c1 = NewText("小阳死妈", "CC", null, "#ff46e8ff");
                a1.addView(c1);
                b1 = NewCDV(2, "#FFFFFF", null, a1, -2, -2, false, true, "RB", 0, 0);
                提示界面.dismiss();
                顶部提示("我是死妈的小阳祝您游戏愉快！");
            });
        });

    });
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




function 第一次进入() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                vn1 = NewView("LL", W(), H(), "CC", 1, 2, null, 0, null);
                t1 = NewText("大家好，我是小阳，我的母亲在我一岁的时候就死了", "CC", 18, "#000000");
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
                    t1.setText("傻逼小阳吃屎二改");
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
                    t1.setText("小阳傻逼");
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

if (readtext("/storage/emulated/0第一次进入.txt") == "") {
    第一次进入();
    try {
        var FW = new java.io.FileWriter(new java.io.File(String("/storage/emulated/0第一次进入.txt")));
        FW.write("a");
        FW.close();
    } catch (e) {
        print("小阳死妈");
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
        黑洞杀按钮 = 拖动按钮("吸", W() - W() / 3, H() - H() / 5, H() / 10, H() / 10, "if(黑洞杀==true){黑洞杀=false;clientMessage('黑洞杀已关闭');}else{黑洞杀=true;黑洞吸();clientMessage('黑洞杀已开启');}", true);
    });
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

                        lang.Thread.sleep(10);
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
                }
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
        } catch (err) {
            showTip(err, 1);
        }
    });
}




function 绑() {
    if (bang) {
        bang = false;
        喵 = false;
    } else {
        rao = false;
        bang = true;
        runThread(function() {
            while (喵 == false) {
                if (bang == false) {
                    break;
                } else {
                    // print("test");
                    if (getNearestEntity(10) != null) {
                        绑绕(getNearestEntity(10), false);
                    }
                }
                lang.Thread.sleep(50);
            }
        });
    }
}

function 绕() {
    if (rao) {
        rao = false;
        喵 = false;
    } else {
        bang = false;
        rao = true;
        runThread(function() {

            while (喵 == false) {
                if (rao == false) {
                    break;
                } else {
                    //  print("v");
                    if (getNearestEntity(10) != null) {
                        绑绕(getNearestEntity(10), true);
                    }
                }
                lang.Thread.sleep(50);
            }
        });
    }
}

function 自瞄() {
        if (zimiao) {
            zimiao = false;
            showTip("自瞄已关闭");
        } else {
            zimiao = true;
            showTip("自瞄已开启");
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
                    var 按钮1 = NewText(txt, "CC", 14, "#000000");
                    按钮.addView(按钮1);
                    //界面.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,0,25,15)));
                    var 背景 = new android.graphics.drawable.GradientDrawable();
                    背景.setCornerRadius(15);
                    背景.setColor(android.graphics.Color.WHITE);
                    背景.setAlpha(180);
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
                var 绑按钮1 = NewText("绑", "CC", 14, "#000000"),
                    喵按钮1 = NewText("喵", "CC", 14, "#000000"),
                    绕按钮1 = NewText("绕", "CC", 14, "#000000");
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
                        eval("绑();绕颜色=false;绕按钮1.setTextColor(android.graphics.Color.parseColor('#000000'));");
                        if (绑颜色) {
                            绑按钮1.setTextColor(android.graphics.Color.parseColor("#000000"));
                            绑颜色 = false;
                        } else {
                            绑按钮1.setTextColor(android.graphics.Color.parseColor("#F44336"));
                            绑颜色 = true;
                        }
                    }
                }));
                绕按钮.setOnClickListener(new view.View.OnClickListener({
                    onClick: function() {
                        eval("绕();绑颜色=false;绑按钮1.setTextColor(android.graphics.Color.parseColor('#000000'));");
                        if (绕颜色) {
                            绕按钮1.setTextColor(android.graphics.Color.parseColor("#000000"));
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
                            喵按钮1.setTextColor(android.graphics.Color.parseColor("#000000"));
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
                背景.setAlpha(210);
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
                文字.setTextColor(android.graphics.Color.parseColor("#000000"));
                颜色 = false;
            } else {
                文字.setTextColor(android.graphics.Color.parseColor("#F44336"));
                颜色 = true;
            }
        }
    }));
    return 颜色;
}




//暗杀js函数
//暗杀js函数 
function 传送() {
    var lay = new android.widget.ScrollView(ctx);
    var lay1 = new android.widget.LinearLayout(ctx);
    lay.addView(lay1);
    lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(40, 1, 1, 1)));
    lay1.addView(NewText("tp玩家菜单", "CC", 15, "#000000"));
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
    clientMessage("抄袭狗小阳提醒您已开启飞行");
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
                Entity.setCollisionSize(players[i], 30, 30);
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
                    var 最远选择距离2 = 10;
                    for (var x = 0; x < players['length']; x++) {
                        var X距离 = Entity.getX(players[x]) - getPlayerX();
                        var Y距离 = Entity.getY(players[x]) - getPlayerY();
                        var Z距离 = Entity.getZ(players[x]) - getPlayerZ();
                        var 距离 = Math.sqrt(Math.pow(X距离, 2) + Math.pow(Y距离, 2) + Math.pow(Z距离, 2));
                        if (距离 < 最远选择距离2 && 距离 > 0 && Entity.getHealth(players[x]) >= 1) {
                            Entity.setCollisionSize(players[x], 8, 7);
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

function flash(flashmode, text) {
    try {
        if (flashing) {
            flashing = false;
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("                 ⚔ 请选择暗杀对象 ⚔");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, text, function() {}, 0, 15, flashmode);
                invalidate();
                for (var i in players) {
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

function startFlash(player, flashMode, miao) {
    print(flashMode);
    showTip(" ➡暗杀开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1 || Entity.getY(player) == 0) {
                    flashing = false;
                    goHome();
                    showTip(" ➡暗杀目标已死亡，暗杀任务已结束");
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
                Entity.setVelY(getPlayerEnt(), 0);
                //    clientMessage(Entity.getY(player));
                lang.Thread.sleep(wttime);
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

function showTip(text, show) {
    Ui(function() {
        var toast = wg.Toast.makeText(ctx, String(text), show ? show : 0);
        toast.show();
    });
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
        check.setTextColor(android.graphics.Color.parseColor("#000000"));
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
                button.setTextColor(android.graphics.Color.parseColor("#000000"));
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
    var File = new java.io.File("/storage/emulated/0/Ehack/下载/");
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
                clientMessage("抄袭狗提示：正在加载中...");
                eval(readtext(path));
            } catch (e) {
                showTip("加载失败");
            }
        }
    }

    function File_Selected(path) {

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
        var 标题 = NewText("定位坐标", "LT", 17, "#000000");
        var 编辑框栏 = NewView("LL", -1, -2, "CC", 0, 2, "#ffffff", 0);
        var X坐标 = new android.widget.EditText(ctx);
        X坐标.setText(getPlayerX().toFixed(0));
        X坐标.setTextSize(14);
        X坐标.setTextColor(android.graphics.Color.parseColor("#000000"));
        X坐标.setHint("X坐标");
        编辑框栏.addView(X坐标);
        var Y坐标 = new android.widget.EditText(ctx);
        Y坐标.setText(getPlayerY().toFixed(0));
        Y坐标.setTextSize(14);
        Y坐标.setTextColor(android.graphics.Color.parseColor("#000000"));
        Y坐标.setHint("Y坐标");
        编辑框栏.addView(Y坐标);
        var Z坐标 = new android.widget.EditText(ctx);
        Z坐标.setText(getPlayerZ().toFixed(0));
        Z坐标.setTextSize(14);
        Z坐标.setTextColor(android.graphics.Color.parseColor("#000000"));
        Z坐标.setHint("Z坐标");
        编辑框栏.addView(Z坐标);
        var 定位按钮栏 = NewView("LL", -1, -2, "CC", 1, 2, "#ffffff", 0);
        var 定位 = NewView("LL", width / 6, height / 6 * 4.8 * 0.11, "CC", 1, 1, "#EEEEEE", 15, function() {
            X坐标.setText(getPlayerX().toFixed(0));
            Y坐标.setText(getPlayerY().toFixed(0));
            Z坐标.setText(getPlayerZ().toFixed(0));
        });
        var 定位文字 = NewText("定位", "CC", 14, "#000000");
        定位.addView(定位文字);
        定位按钮栏.addView(定位);
        定位按钮栏.addView(空格);
        var 传送 = NewView("LL", width / 6, height / 6 * 4.8 * 0.11, "CC", 1, 1, "#EEEEEE", 15, function() {
            var X = X坐标.getText();
            var Y = Y坐标.getText();
            var Z = Z坐标.getText();
            setPosition(getPlayerEnt(), X, Y, Z);
        });
        var 传送文字 = NewText("传送", "CC", 14, "#000000");
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
            var 标题 = NewText("物品添加", "CL", 17, "#000000");
            var 空格 = NewView("LL", width / 6 * 3.7, height / 6 * 4.0 * 0.02, "CC", 0, 2, null, null);
            var 顶栏 = NewView("LL", width / 6 * 3.7, height / 6 * 4.8 * 0.15, "LC", 0, 2, "#ffffff", 20);
            var 按钮栏1 = NewView("SV", width / 6 * 3.7, height / 6 * 4.8 * 0.65, -1, null, null, 2, "#ffffff", 0);
            var 按钮栏 = NewView("LL", -2, -2, "CC", 1, 2, "#ffffff", 0);

            var 编辑框栏 = NewView("LL", -1, -2, "CC", 0, 2, "#ffffff", 0);
            var 物品ID = new android.widget.EditText(ctx);
            物品ID.setText("");
            物品ID.setHint("物品ID");
            编辑框栏.addView(物品ID);
            var 物品特殊值 = new android.widget.EditText(ctx);
            物品特殊值.setText("");
            物品特殊值.setHint("物品特殊值");
            编辑框栏.addView(物品特殊值);
            var 确认 = NewView("LL", width / 12, height / 6 * 4.8 * 0.11, "CC", 1, 1, "#EEEEEE", 15, function() {
                var 特殊值 = 物品特殊值.getText();
                var ID = 物品ID.getText();
                添加物品(ID, 特殊值, 界面);
            });
            var 按钮文字 = NewText("确认", "CC", 14, "#000000");
            确认.addView(按钮文字);
            编辑框栏.addView(确认);
            按钮栏.addView(编辑框栏);

            NewButton(按钮栏, "看ID", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {

                var a1 = NewView("LL", W() / 3, H(), "CC", 1, 2, "#CC83FF", 0);
                var a2 = NewView("LL", W() / 3, H() * 0.9, "CC", 1, 2, "#CC83FF", 0, 0);
                a1.addView(a2);
                var b1 = NewCDV(0, "#FFFFFF", null, a1, W() / 3, H(), true, true, "LC", 0, 15);
                b1.setFocusable(false);
                var 浏览器 = new android.webkit.WebView(ctx);
                var 设置 = 浏览器.getSettings();
                设置.setUseWideViewPort(true);
                设置.setLoadWithOverviewMode(true);
                浏览器.setWebChromeClient(new android.webkit.WebChromeClient());
                浏览器.setWebViewClient(new android.webkit.WebViewClient());
                浏览器.loadUrl("http://www.zyyapp.com/");
                a2.addView(浏览器);
                var bt = addButton(a1, "关闭", function() {
                    b1.dismiss();
                }, null, {
                    wid: -1
                }, 15);
            });
            NewButton(按钮栏, "钻石剑", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(276, 0, 界面)
            });
            NewButton(按钮栏, "附魔金苹果", width / 6 * 3.5, height / 6 * 4.8 * 0.11, function() {
                添加物品(466, 0, 界面)
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
        var 标题 = NewText("药水添加", "LT", 17, "#000000");
        var 副标题 = NewText("-目前只有三种药效添加了有效，别的效果加了也没用", "CC", 14, "#000000");
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
        var 内容 = NewText(内容文字, "LT", 15, "#000000");
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
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                lay = NewView("LL", W() / 10 * 3.5, H() * 0.08, "CC", 0, 1, "#ffffff", 15);
                界面 = NewCDV(2, null, null, lay, W() / 10 * 4, H() * 0.08, false, true, "CT", 0, H() * 0.02)
                文字 = NewText(text, "LC", 14, "#000000");
                lay.addView(文字);
                UIMove(lay, 0, 0, -100, 0, 300, null);
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
    //其他UI函数

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
    var 按钮文字 = NewText(text, "CC", 14, "#000000");
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

//视图动画，原作者 鄢主晴伊，授权你妈逼吃屎的狗。
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
                var text10 = NewText("——常用——", "CC", 17, "#000000");
                view10.addView(text10);
                lay4.addView(view10);

                if (显示界面 == 1) {
                    text10.setText("— | 常用 | —");
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
                button1.setTextColor(android.graphics.Color.parseColor("#2196F3"));
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
                button2.setTextColor(android.graphics.Color.parseColor("#2196F3"));
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
                button3.setTextColor(android.graphics.Color.parseColor("#2196F3"));
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
                addButton(lay1, "背后暗杀", function() {
                    flash(false, "背后暗杀");
                }, null, 0, 15, true);
                addButton(lay1, "环绕暗杀", function() {
                    flash(true, "环绕暗杀");
                }, null, 0, 15, true);
                addButton(lay1, "长臂猿", function() {
                    长臂猿();
                }, null, 0, 15, true);
                addButton(lay1, "回家", goHome, setHome, 0, 15, true);
                addButton(lay1, "加载", File_Select, null, 0, 15, true);
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
                addButton(lay1, "黑洞杀", function() {
                    if (显示黑洞杀按钮 == true) {
                        显示黑洞杀按钮 = false;
                        黑洞杀按钮.dismiss();
                    } else {
                        显示黑洞杀按钮 = true;
                        吸按钮();
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
                addButton(lay111, "经验", exp, null, 0, 15, true);
                addButton(lay111, "雷达", function() {
                    radar();
                    windis();
                }, getNames, 0, 15, true);
                addButton(lay111, "刷物", function() {
                    刷物();
                }, null, 0, 15, true);
                addButton(lay111, "变速", function() {
                    speed();
                }, null, 0, 15, true);
                addButton(lay111, "虚空漫游", function() {
                    if (显示漫按钮) {
                        漫步按钮.dismiss();
                        显示漫按钮 = false;
                    } else {
                        漫();
                        显示漫按钮 = true;
                    }
                }, null, 0, 15, true);
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

    var 暗杀 = "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";
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
                    按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(W() * 0.12, W() * 0.12));
                } else {
                    按钮.setLayoutParams(new android.widget.LinearLayout.LayoutParams(H() * 0.12, H() * 0.12));
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