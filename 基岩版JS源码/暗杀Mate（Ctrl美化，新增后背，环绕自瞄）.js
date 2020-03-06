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
ctx.setTheme(android.support.v7.appcompat.R.style.Theme_AppCompat_Light);
ctx.setTheme(android.R.style.Theme_Material_Light);

var AIMMODE = true
var path = new android.os.Environment.getExternalStorageDirectory().getAbsolutePath()
var LF = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI;
LF.runOnUiThread(new java.lang.Runnable({
    run: function() {
        try {
            var 添加布局 = new android.widget.LinearLayout(LF);
            添加布局.setOrientation(1);
            var scroll2 = new android.widget.ScrollView(LF);
            scroll2.addView(添加布局);
            var txt = new android.widget.TextView(LF);
            var dialog = new android.app.Dialog(LF);
            dialog.setContentView(scroll2);
            dialog.setTitle("js公告");
            添加布局.addView(txt); //txt
            txt.setText(公告);
            txt.setTextColor(-850555880)
            var zuang = new android.widget.Button(LF);
            zuang.setOnClickListener(new android.view.View.OnClickListener() {
                onClick: function(viewarg) {
                    dialog.dismiss()
                }
            });
            zuang.setText("关闭");
            zuang.setTextColor(-108255255)
            添加布局.addView(zuang)
            dialog.show();
            print("digyth /n啥也没有")
        } catch (err) {
            print("Err: " + err);
        }
    }
}));
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
    mainWinow, initialX, initialY, gapX, gapY;
const enchId = {
        耐久: Enchantment.UNBREAKING,
        锋利: Enchantment.SHARPNESS,
        火焰附加: Enchantment.FIRE_ASPECT,
        击退: Enchantment.KNOCKBACK,
        力量: Enchantment.POWER,
        冲击: Enchantment.PUNCH,
        火矢: Enchantment.FLAME,
        无限: Enchantment.INFINITY,
        保护: Enchantment.PROTECTION,
        荆棘: Enchantment.THORNS,
        火焰保护: Enchantment.FIRE_PROTECTION,
        掉落保护: Enchantment.FEATHER_FALLING,
        爆炸保护: Enchantment.BLAST_PROTECTION,
        弹射物保护: Enchantment.PROJECTILE_PROTECTION,
        水下呼吸: Enchantment.RESPIRATION,
        深海探索者: Enchantment.AQUA_AFFINITY,
        水下速掘: Enchantment.DEPTH_STRIDER,
        亡灵杀手: Enchantment.SMITE,
        节肢杀手: Enchantment.BANE_OF_ARTHROPODS,
        抢夺: Enchantment.LOOTING,
        效率: Enchantment.EFFICIENCY,
        精准采集: Enchantment.SILK_TOUCH,
        时运: Enchantment.FORTUNE,
        海之眷顾: Enchantment.LUCK_OF_THE_SEA,
        钓饵: Enchantment.LURE
            //经验修补:26,
            //冰霜行者:25,
            //穿刺:29,
            //引雷:32,
            //忠诚:31,
    },
    corePosition = {};
//var permission=false,endTerm;

if (!running) {
    running = true;
    showTip("作者digyth,美化Ctrl，部分功能仅租赁服有效\n★按住小青条可拖动菜单★", 1);
    Ui(function() {
        try {
            mainWin = new wg.PopupWindow(ctx);
            var lay1 = new wg.LinearLayout(ctx);
            lay1.setOrientation(1);
            addButton(lay1, "", null, null, {
                type: 0,
                hei: -2
            }, 14, slip).setBackgroundColor(getColorValue("青"));
            var lay = new wg.LinearLayout(ctx);
            lay.setOrientation(1);
            addCheckBox(lay, "模式", searchMode, 0, 5, mode).setBackgroundColor(getColorValue("红"));
            addButton(lay, "速掘", rapid, removeRapid, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "围绕", flash, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "背后", flash1, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "闪现", flasha, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "回家", goHome, setHome, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "冲刺", rush, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "上升", function() {
                showTip("按住上下轻轻移动可以一直飞", 1)
            }, null, 0, 7, raise).setBackgroundColor(getColorValue("红"));
            addButton(lay, "高跳", jump, removeJump, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "夜视", vision, removeVision, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "传送", tp, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "雷达", radar, getNames, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "偷家", steal, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "传送", tp, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "附魔", enchant, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "经验", exp, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "变速", speed, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "飞行", fly, null, 0, 8).setBackgroundColor(getColorValue("红"));
            addButton(lay, "执行", runCommand, null, 0, 8).setBackgroundColor(getColorValue("红"));
            mainWin.setWidth(wid / 15);
            mainWin.setHeight(hei / 3);
            lay1.addView(aveLayout(scroll(lay), 0, -2, -2, 0));
            mainWin.setContentView(lay1);
            mainWin.setBackgroundDrawable(getColorDrawable("transparent"));
            mainWin.showAtLocation(mainView, left | top, wid / 15 * 14, hei / 3);
        } catch (err) {
            print(err);
        }
    });
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
    Player.setFlying(!Player.isFlying());
    showTip(Player.isFlying ? "已开启飞行" : "已关闭飞行");
}

function rush() {
    try {
        var player = Player.getEntity();
        setVelX(player, 三角函数(true, false, [player, 0], Player.getX(), Player.getY(), Player.getZ(), 1.5));
        setVelY(player, 三角函数(true, false, [player, 1], Player.getX(), Player.getY(), Player.getZ(), 1.5));
        setVelZ(player, 三角函数(true, false, [player, 2], Player.getX(), Player.getY(), Player.getZ(), 1.5));
    } catch (err) {
        showTip(err, 1);
    }
}

function 三角函数(模式, 形状 /*true为横向圆，false为竖向圆或球形*/ , 内容, X, Y, Z, 半径, 返回坐标) {
    //算法作者digyth，使用时请勿删除此条注释//以下为两种模式的参数情况
    //视角计算模式：三角函数(true,形状,[实体,坐标轴],X,Y,Z,半径)
    //自定义模式：三角函数(false,形状,[弧,坐标轴],X,Y,Z,半径)
    //坐标轴：获取计算后的坐标,0为x，1为y，2为z,当形状是true的时候请勿填1，否则会出错
    //X,Y,Z：确定原点坐标
    //实体：用于确定视角从而计算弧度
    //弧：当形状为true时参数为横向角度值，形状为false时参数为[横向角度值,纵向角度值]
    var 弧度 = Math.PI / 180,
        ABC, Yaw, Pitch, 半径1 = 半径;
    if (模式 == true) {
        Yaw = Entity.getYaw(内容[0]), Pitch = Entity.getPitch(内容[0]);
    }
    if (模式 == false) {
        if (typeof(内容[0]) == "number") {
            Yaw = 内容[0]
        }
        if (typeof(内容[0]) == "object") {
            Yaw = 内容[0][0], Pitch = 内容[0][1]
        }
    }
    if (形状 == false) {
        半径1 = Math.abs(半径 * Math.cos(Pitch * 弧度));
    }
    if (内容[1] == 0) {
        ABC = 返回坐标 ? X : 0 - Math.sin(Yaw * 弧度) * 半径1;
        return ABC;
    }
    if (内容[1] == 1) {
        ABC = 返回坐标 ? Y : 0 - Math.sin(Pitch * 弧度) * 半径;
        return ABC;
    }
    if (内容[1] == 2) {
        ABC = 返回坐标 ? Z : 0 + Math.cos(Yaw * 弧度) * 半径1;
        return ABC;
    }
}


function flash1() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(false);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("选择自瞄对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "←兼容模式（必须勾选）", function() {}, 0, 14, true);
                invalidate();
                for (var i in players) {
                    addButton(lay, Player.getName(players[i]), eval("function(){startFlash(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                    var AIMMODE = true
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

function flash() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(false);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("选择自瞄对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "←兼容模式（必须勾选）", function() {}, 0, 14, true);
                invalidate();
                for (var i in players) {
                    addButton(lay, Player.getName(players[i]), eval("function(){startFlash1(" + String(players[i]) + "," + String(check.isChecked()) + ");}"), null, {
                        wid: -1
                    }, 15);
                    var AIMMODE = false
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

function startFlash(player, flashMode) {
    showTip("自瞄开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    if (房间 = 2) {
                        flashing = false;
                        goHome();
                        break;
                    }
                    showTip("目标退出游戏或死亡");
                }
                var yaw;
                if (AIMMODE = true) {
                    yaw = Entity.getYaw(player) - 180;
                } else {
                    yaw = Entity.getYaw(player) - 180;
                }
                var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
                    pointY = Entity.getY(player) + 0.5,
                    pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Player.setFlying(false);
                lang.Thread.sleep(1);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}

function startFlash1(player, flashMode) {
    showTip("自瞄开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    if (房间 = 2) {
                        flashing = false;
                        goHome();
                        break;
                    }
                    showTip("目标退出游戏或死亡");
                }
                var yaw;
                if (AIMMODE = true) {
                    yaw = Math.random() * 360 - 180;
                } else {
                    yaw = Math.random() * 360 - 180;
                }
                var pointX = Entity.getX(player) - Math.sin(yaw * Math.PI / 180) * 2,
                    pointY = Entity.getY(player) + 0.5,
                    pointZ = Entity.getZ(player) + Math.cos(yaw * Math.PI / 180) * 2;
                Entity.setRot(Player.getEntity(), yaw + 180, 30);
                Entity.setPosition(Player.getEntity(), pointX, pointY, pointZ);
                Player.setFlying(true);
                lang.Thread.sleep(150);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}


function tp() {
    Ui(function() {
        try {
            var dialog = new app.AlertDialog.Builder(ctx);
            dialog.setTitle("清选择传送到的位置");
            var lay = new wg.LinearLayout(ctx);
            lay.setOrientation(1);
            invalidate();
            for (var i in players) {
                addButton(lay, Player.getName(players[i]), eval("function(){Entity.setPosition(Player.getEntity(),Entity.getX(" + players[i] + "),Entity.getY(" + players[i] + "),Entity.getZ(" + players[i] + "));}"), null, {
                    wid: -1
                }, 15);
            }
            dialog.setView(scroll(lay));
            dialog.setNegativeButton("取消", null);
            dialog.show();
        } catch (err) {
            showTip(err);
        }
    });
}

function slip(v, e) {
    try {
        switch (e.getAction()) {
            case 0:
                var ls = [0, 0];
                mainWin.getContentView().getLocationOnScreen(ls);
                initialX = e.getRawX(), initialY = e.getRawY()
                gapX = initialX - ls[0];
                gapY = initialY - ls[1];
                break;
            case 2:
                var newX = e.getRawX() - gapX,
                    newY = e.getRawY() - gapY;
                mainWin.update(initialX + newX, initialY + newY, mainWin.getWidth(), mainWin.getHeight());
                break;
        }
    } catch (err) {
        showTip(err);
    }
    return false;
}

function rapid() {
    Entity.addEffect(Player.getEntity(), 3, 3276799, 255);
    showTip("已开启速掘，长按解除效果");
}

function vision() {
    Entity.addEffect(Player.getEntity(), 16, 3276799, 1);
    showTip("已开启夜视，长按解除效果");
}

function raise(v, e) {
    Entity.setVelY(Player.getEntity(), 0.2);
    return false;
}

function speed() {
    if (speeding) {
        ModPE.setGameSpeed(20);
        showTip("已恢复，再次点击加速");
    } else {
        ModPE.setGameSpeed(100);
        showTip("已加速，再次点击恢复");
    }
    speeding = !speeding;
}

function jump() {
    Entity.addEffect(Player.getEntity(), 8, 3276799, 20);
    showTip("已开启高跳，长按解除效果");
}

function removeRapid() {
    Entity.removeEffect(Player.getEntity(), 3);
    return true;
}

function removeVision() {
    Entity.removeEffect(Player.getEntity(), 16);
    return true;
}

function removeJump() {
    Entity.removeEffect(Player.getEntity(), 8);
    return true;
}

function searchMode(v, c) {
    mode = c;
}

function exp() {
    showDialog("增加经验值", "请输入要增加的经验值", "", {
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

function steal() {
    Ui(function() {
        try {
            var dialog = new app.AlertDialog.Builder(ctx);
            dialog.setTitle("清选择队伍");
            var lay = new wg.LinearLayout(ctx);
            lay.setOrientation(1);
            for (var i in corePosition) {
                addButton(lay, i, eval("function(){Entity.setPosition(Player.getEntity()," + corePosition[i].x + "," + corePosition[i].y + "," + corePosition[i].z + ")}"), null, {
                    wid: -1
                }, 15);
            }
            dialog.setView(scroll(lay));
            dialog.setNegativeButton("取消", null);
            dialog.show();
        } catch (err) {
            showTip(err);
        }
    });
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

function flasha() {
    try {
        if (flashing) {
            flashing = false;
            Player.setFlying(true);
        } else {
            Ui(function() {
                var dialog = new app.AlertDialog.Builder(ctx);
                dialog.setTitle("清选择突袭对象");
                var lay = new wg.LinearLayout(ctx);
                lay.setOrientation(1);
                var check = addCheckBox(lay, "(勾选/不勾选)随机闪现/背后闪现", null, 0, 14, true);
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

function startFlash(player, flashMode) {
    showTip("闪现开始，如需停止请再次点击按钮", 1);
    runThread(function() {
        try {
            flashing = true;
            while (flashing) {
                invalidate();
                if (players.indexOf(player) == -1) {
                    flashing = false;
                    Player.setFlying(true);
                    showTip("目标已死亡，自动结束闪现");
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
                Entity.setVelY(Player.getEntity(), 0);
                lang.Thread.sleep(300);
            }
        } catch (err) {
            showTip(err, 1);
        }
    });
}

function setHome() {
    home = {
        x: Player.getX(),
        y: Player.getY() + 1,
        z: Player.getZ()
    };
    showTip("设置家成功");
    return true;
}

function goHome() {
    home ? Entity.setPosition(Player.getEntity(), home.x, home.y, home.z) : showTip("请先长按设置此处为家");
}

function enchant() {
    Ui(function() {
        try {
            var dialog = new app.AlertDialog.Builder(ctx);
            dialog.setTitle("高级附魔");
            var lay = new wg.LinearLayout(ctx);
            lay.setOrientation(1);
            var lay2 = new wg.LinearLayout(ctx);
            lay2.setOrientation(1);
            var txt = new wg.TextView(ctx);
            txt.setText("请将要附魔的物品拿在手上");
            txt.setTextSize(15);
            txt.setTextColor(getColor("green"));
            txt.setGravity(center);
            lay2.addView(txt);
            addButton(lay2, "一键神装", function() {
                oneKey();
                dialog.dismiss();
            }, null, {
                wid: -1
            })
            var txt = new wg.TextView(ctx);
            txt.setText("等级:32767");
            lay2.addView(txt);
            var bar = new wg.SeekBar(ctx);
            bar.setMax(32766);
            bar.setProgress(32766);
            bar.setOnSeekBarChangeListener(new wg.SeekBar.OnSeekBarChangeListener({
                onProgressChanged: function(v) {
                    txt.setText("等级:" + (Number(v.getProgress()) + 1));
                }
            }));
            lay2.addView(bar);
            lay.addView(lay2);
            var lay1 = new wg.LinearLayout(ctx);
            lay1.setOrientation(1);
            for (var i in enchId) addButton(lay1, i, function(v) {
                try {
                    Player.enchant(Player.getSelectedSlotId(), enchId[String(v.getText())], Number(bar.getProgress()) + 1);
                } catch (err) {
                    showTip(err);
                }
                dialog.dismiss();
                showTip("已附魔" + v.getText());
            }, null, {
                wid: -1
            });
            lay.addView(scroll(lay1));
            dialog.setView(lay);
            dialog = dialog.show();
        } catch (err) {
            showTip(err, 1)
        }
    });
}

function oneKey() {
    Ui(function() {
        var dialog = new app.AlertDialog.Builder(ctx);
        dialog.setTitle("一剑神装");
        var scroll = new wg.ScrollView(ctx);
        var lay = new wg.LinearLayout(ctx);
        lay.setOrientation(1);
        addButton(lay, "神剑", function() {
            var slot = Player.getSelectedSlotId();
            Entity.setCarriedItem(Player.getEntity(), 276, 1);
            Player.enchant(slot, enchId.锋利, 32767);
            Player.enchant(slot, enchId.耐久, 32767);
            Player.enchant(slot, enchId.击退, 32767);
            Player.enchant(slot, enchId.火焰附加, 32767);
            dialog.dismiss();
            showTip("神装制作完成");
        }, null, {
            wid: -1
        });
        addButton(lay, "神弓", function() {
            var slot = Player.getSelectedSlotId();
            Entity.setCarriedItem(Player.getEntity(), 261, 1);
            Player.enchant(slot, enchId.力量, 32767);
            Player.enchant(slot, enchId.耐久, 32767);
            Player.enchant(slot, enchId.冲击, 32767);
            Player.enchant(slot, enchId.无限, 1);
            dialog.dismiss();
            showTip("神装制作完成");
        }, null, {
            wid: -1
        });
        addButton(lay, "神甲", function() {
            var slot = Player.getSelectedSlotId();
            Entity.setCarriedItem(Player.getEntity(), 311, 1);
            Player.enchant(slot, enchId.保护, 32767);
            Player.enchant(slot, enchId.耐久, 32767);
            Player.enchant(slot, enchId.荆棘, 32767);
            dialog.dismiss();
            showTip("神装制作完成");
        }, null, {
            wid: -1
        });
        addButton(lay, "箭", function() {
            var slot = Player.getSelectedSlotId();
            Entity.setCarriedItem(Player.getEntity(), 262, 1);
            dialog.dismiss();
            showTip("箭添加完成");
        }, null, {
            wid: -1
        });
        scroll.addView(lay);
        dialog.setView(scroll);
        dialog.setMessage("请选择神装类型");
        dialog = dialog.show();
    });
}

function radar() {
    try {
        if (radarWin) {
            if (radarWin.isShowing()) {
                state = 2;
                radarWin.dismiss();
            } else if (state == 3) {
                radarWin.showAtLocation(mainView, left | top, 0, hei / 7);
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
                radarWin.showAtLocation(mainView, left | top, 0, hei / 7);
                state = 1;
                scan();
            });
            showTip("雷达已开启，再次点击关闭，长按显示所有人名称与距离", 1);
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

function addButton(parent, text, command, longCommand, ave, size, touchCommand) {
    try {
        var button = new wg.Button(ctx);
        button.setText(text ? text : "");
        if (size) button.setTextSize(1, size);
        if (command) button.setOnClickListener(new view.View.OnClickListener({
            onClick: command
        }));
        if (longCommand) button.setOnLongClickListener(new view.View.OnLongClickListener({
            onLongClick: longCommand
        }));
        if (touchCommand) button.setOnTouchListener(new view.View.OnTouchListener({
            onTouch: touchCommand
        }));
        aveLayout(button, typeof(ave) == "number" ? ave : ave.type, ave.wid, ave.hei, ave.wei);
        parent.addView(button);
        return button;
    } catch (err) {
        print(err)
    }
}