
var 是 = true
var 否 = false


//毁灭公爵0.8.0，作者:星宸

//额…你是想抄袭吗？或者是想获取源码

//如果想获取源码，请事先经过作者允许，抄袭至少也至少著名出自毁灭公爵吧

//最好不要篡改，我为了节约内存没有设置防篡改，如果你硬是要用盒子使用，就在存档对话框中输入指令"/启动"即可

//QQ放这了:1453837922

var 开发者选项 = 否
    //这个是开发者选项，改为"是"就是开发模式，方便作者开发;为"否"时，就是使用者模式

var VIP = 1
var SVIP = 1
var 等级 = 20
var 药等 = 5
var 时间 = 20 * 20
var 打印 = print
var 包名 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getPackageName();
var 启动设置 = 1
var 联机发言 = Server.sendChat
var 屏中提示 = ModPE.showTipMessage
var 发言 = clientMessage
var 飞行 = 1
var 能否飞行 = Player.setCanFly
var 去除所有药水 = Entity.removeAllEffects
var 添加药水 = Entity.addEffect
var 数量 = 1
var 爆炸 = explode
var 半径 = 20
var zha1 = 0
var zha2 = 0
var zha3 = 0
var 调数 = 7000
var 调时间 = Level.setTime
    //变量
if (开发者选项 == 否) {
    if (包名 != "net.zhuoweizhang.mcpelauncher" && 包名 != "net.zhuoweizhang.mcpelauncher.pro") {
        打印("使用炸妈盒子与葫芦侠导入将无法使用！")
        启动设置--
    } else {
        打印("毁灭是塑造的开始！！！")
    }
} else if (开发者选项 == 是) {
    打印("目前是开发者模式")
}
//包名查看
启动()
    //启动游戏

function 启动() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var win = new android.widget.PopupWindow();
            var base64 = "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";


            var byte = android.util.Base64.decode(base64, 0);
            var image = android.graphics.BitmapFactory.decodeByteArray(byte, 0, byte.length);
            var imageview = new android.widget.ImageView(ctx);
            imageview.setImageBitmap(image);

            imageview.setOnClickListener(new android.view.View.OnClickListener() {
                onClick: function(v) {
                    if (启动设置 > 0) {
                        毁灭公爵()
                    } else if (启动设置 < 1) {
                        打印("使用炸妈盒子与葫芦侠导入无法使用")
                    }
                }
            });
            win.setContentView(imageview);
            win.setWidth(80);
            win.setHeight(80);
            win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
            win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 450);
        }
    }));


    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
    }

    function 毁灭公爵() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)
            var ve = new android.widget.TextView(ctx)
            ve.setText("毁灭公爵v0.8.0")
            ve.setTextSize(16)
            layout.addView(ve)

            var ve = new android.widget.TextView(ctx)
            ve.setText("作者：星宸")
            ve.setTextSize(13)
            layout.addView(ve)

            var vb = new android.widget.Button(ctx)
            vb.setText("基本功能")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    辅助()
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("附魔")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    附魔()
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("联机功能")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    联()
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("玩家列表")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    列表()
                    发言("§c改功能没有完善")
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("药水效果")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    药水()
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("实体生成")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    实体()
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("炸房")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    ModPE.showTipMessage("§o§6已开启")
                    炸房()
                }
            }))
            layout.addView(vb)

            var gn = new android.widget.TextView(ctx)
            gn.setText("本js禁止抄袭")
            gn.setTextSize(12)
            layout.addView(gn)

            var vb = new android.widget.Button(ctx)
            vb.setText("开启会员")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    function shurumima() {
                        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {
                                window = new android.app.Dialog(ctx);
                                window.setTitle("请输入验证码");
                                var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                                textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
                                var layout = new android.widget.LinearLayout(ctx);
                                layout.setOrientation(1);
                                var qd = new android.widget.Button(ctx);
                                qd.setText("✔");
                                qd.setTextColor(getColor(0, 0, 0, 255));
                                qd.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function() {
                                        var 密码 = mm.getText().toString()
                                        if (密码 == "3837") {
                                            VIP--
                                            ModPE.showTipMessage("§o§4成功开启VIP权限")
                                            window.dismiss()
                                        } else if (密码 == "神马922") {
                                            VIP--
                                            SVIP--
                                            ModPE.showTipMessage("§o§c成功开启超级会员")
                                            window.dismiss()
                                        } else {
                                            print("错误")
                                            shurumima()
                                            window.dismiss()
                                        }
                                    }
                                }));
                                var mm = new android.widget.EditText(ctx);
                                mm.setHint("请输入验证码");
                                mm.setTextColor(getColor(0, 0, 0, 255));
                                layout.addView(mm);
                                layout.addView(qd);
                                window.setContentView(layout);
                                window.show();
                            }
                        }))
                    }

                    function dip2px(ctx, dips) {
                        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
                    }

                    function getColor(r, y, b, a) {
                        return android.graphics.Color.argb(a, r, y, b)
                    }
                    shurumima()

                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("关于js 抄袭？")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var of = 0;
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                    var ad = android.app.AlertDialog.Builder
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var d = new ad(ctx)
                                d.setNegativeButton("了解", new android.content.DialogInterface.OnClickListener() {
                                    onClick: function(dia, w) {}
                                })
                                d.setTitle("关于js 抄袭？")
                                d.setMessage("想必，在贴吧很多人都看到了夏日所发的帖子，大致内容就是这个js抄袭@43999喜洋洋的js，这个我也作出解释:首先夏日没有搞清楚，事前我已经问过@43999喜洋洋，而且他已经允许我迁用他的js里面的功能。         此js作者:星宸，他的QQ:1453837922   会员怎么获得:去神马审核群(311957683)询问作者即可")
                                d.show()
                            } catch (e) {
                                print(e)
                            }
                        }
                    }))

                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("退出游戏")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    退出()
                }
            }))
            layout.addView(vb)


            var gn = new android.widget.TextView(ctx)
            gn.setText("神马审核群：311957683")
            gn.setTextSize(12)
            layout.addView(gn)

            var gn = new android.widget.TextView(ctx)
            gn.setText("作者QQ:1453837922")
            gn.setTextSize(12)
            layout.addView(gn)

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


            var mlayout = makeMenu(ctx, layout)
            menu.setContentView(mlayout)
            menu.setWidth(dip2px(ctx, 150))
            menu.setHeight(dip2px(ctx, 350))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
        } catch (err) {
            print(err)
        }
    }
}

function 辅助() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("基本功能")
        ve.setTextSize(20)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("切换模式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                ModPE.showTipMessage("§o§2已切换模式")
                if (Level.getGameMode() == 0) {
                    Level.setGameMode(1)
                    new android.widget.Button(ctx).setText("改生存")
                } else if (Level.getGameMode() == 1) {
                    Level.setGameMode(0)
                    new android.widget.Button(ctx).setText("改创造")
                };
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("回血")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("9999");
                ModPE.showTipMessage("§o§9血已加满")
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("自杀")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("0");
                ModPE.showTipMessage("§o§9已清除您")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调时间")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                白天晚上()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("开启透视")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Block.setLightLevel(14, 20)
                Block.setLightLevel(15, 15)
                Block.setLightLevel(16, 15)
                Block.setLightLevel(21, 15)
                Block.setLightLevel(56, 15)
                Block.setLightLevel(73, 15)
                Block.setLightLevel(129, 15)
                Block.setLightLevel(153, 15)
                Block.setShape(14, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(15, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(16, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(21, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(56, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(73, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(129, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
                Block.setShape(153, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)

                Block.setShape(4, 0, 1, 1, 1, 1, 1)
                ModPE.showTipMessage("§o§3请在地面上放置一个原石")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("关闭透视")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Block.setShape(4, 0, 0, 0, 1, 1, 1)
                ModPE.showTipMessage("§o§3请破坏之前放置的原石")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("清空背包")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 格 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
                for (i in 格) {
                    Player.clearInventorySlot(格[i]);
                    i++;
                }
                ModPE.showTipMessage("§o§9已清空背包")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("添加药水")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.addEffect(getPlayerEnt(), 1, 99999 * 20, 5, false, false);
                Entity.addEffect(getPlayerEnt(), 8, 99999 * 20, 5, false, false);
                Entity.addEffect(getPlayerEnt(), 5, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 10, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 11, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 12, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 16, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 14, 99999 * 20, 255, false, false);
                ModPE.showTipMessage("§o§b开启全部正面药水");
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("添加经验")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.addExp(100000)
                ModPE.showTipMessage("§o§b已添加经验");
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("开/关飞行")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (飞行 > 0) {
                    能否飞行(是)
                    发言("§b已开启飞行§6，§2再次点击关闭飞行")
                    飞行--
                } else if (飞行 < 1) {
                    能否飞行(否)
                    发言("§b已关闭飞行§6，§2再次点击开启飞行")
                    飞行++
                }
            }
        }))
        layout.addView(vb)


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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 联() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("联机功能")
        ve.setTextSize(20)
        layout.addView(ve)


        var vb = new android.widget.Button(ctx)
        vb.setText("滑稽模式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setGameMode(1)
                Player.setHealth("9999");
                Player.clearInventorySlot(1);
                Player.clearInventorySlot(0);
                Player.clearInventorySlot(2);
                Player.clearInventorySlot(3);
                Player.clearInventorySlot(4);
                Player.clearInventorySlot(5);
                Player.clearInventorySlot(6);
                Player.clearInventorySlot(7);
                Player.clearInventorySlot(8);
                Entity.addEffect(getPlayerEnt(), 1, 99999 * 20, 5, false, false);
                Entity.addEffect(getPlayerEnt(), 8, 99999 * 20, 5, false, false);
                Entity.addEffect(getPlayerEnt(), 5, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 10, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 11, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 12, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 16, 99999 * 20, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 14, 99999 * 20, 255, false, false);
                Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 1, Player.getZ())
                Player.setFlying(true)
                for (a = 0; a < 35; a++) {
                    Player.clearInventorySlot(a)
                }
                addItemInventory(276, 1, 0);
                addItemInventory(261, 1, 0);
                addItemInventory(310, 1, 0);
                addItemInventory(311, 1, 0);
                addItemInventory(312, 1, 0);
                addItemInventory(313, 1, 0);
                addItemInventory(278, 1, 0);
                addItemInventory(21, 64, 0);
                addItemInventory(383, 64, 11);
                addItemInventory(10, 64, 0);
                addItemInventory(262, 64, 0);
                for (a = 0; a < 35; a++) {
                    Player.enchant(a, Enchantment.SHARPNESS, 32767)
                    Player.enchant(a, Enchantment.UNBREAKING, 32767)
                    Player.enchant(a, Enchantment.FIRE_ASPECT, 2560)
                    Player.enchant(a, Enchantment.KNOCKBACK, 2560)
                    Player.enchant(a, Enchantment.LOOTING, 32767)
                    Player.enchant(a, Enchantment.INFINITY, 32767)
                    Player.enchant(a, Enchantment.POWER, 32767)
                    Player.enchant(a, Enchantment.PUNCH, 2560)
                    Player.enchant(a, Enchantment.FLAME, 2560)
                    Player.enchant(a, Enchantment.PROTECTION, 32767)
                    Player.enchant(a, Enchantment.THORNS, 32767)
                    Player.enchant(a, Enchantment.FORTUNE, 32767)
                    Player.enchant(a, Enchantment.EFFICIENCY, 32767)
                }
                ModPE.showTipMessage("§o§3已开启滑稽模式");
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("快速毁基岩")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Block.setExplosionResistance(7, 0.05);
                Block.setDestroyTime(7, 0.05);
                ModPE.showTipMessage("§4已开启成功，退出游戏即可关闭");
            }
        }))
        layout.addView(vb)

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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 附魔() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("附魔")
        ve.setTextSize(20)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                等级++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                等级--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级+10")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                等级加()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级-10")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                等级减()
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("附魔等级为  " + 等级)
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("附魔")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                附魔s()
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("~~~~~~下面是快速附魔")
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("附魔32767")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                附魔32767()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("附魔100")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                附魔100()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("附魔10")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                附魔10()
            }
        }))
        layout.addView(vb)


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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 实体() {
    发言("§8已设置生成位置为玩家坐标")
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("实体生成")
        ve.setTextSize(20)
        layout.addView(ve)
        var x = Player.getX()
        var y = Player.getY()
        var z = Player.getZ()
        var 生成 = Level.spawnMob
        var 玩家横 = 0
        var 玩家竖 = 0
        var 玩家纵 = 0


        var vb = new android.widget.Button(ctx)
        vb.setText("X+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                x++
                玩家横++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("X-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                x--
                玩家横--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Y+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                y++
                玩家竖++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Y-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                y--
                玩家竖--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Z+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                z++
                玩家纵++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Z-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                z--
                玩家纵--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("查看生成坐标")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                屏中提示("生成的坐标 : " + "X:" + 玩家横 + " Y:" + 玩家竖 + " Z" + 玩家纵)
                发言("生成的坐标 : " + "X:" + 玩家横 + " Y:" + 玩家竖 + " Z" + 玩家纵)
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("PS:都是以玩家位置为基础坐标(0就是基础坐标)")
        ve.setTextSize(7)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("鸡")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 10)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("牛")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 11)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("猪")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 12)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("羊")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 13)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("狼")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 14)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("村民")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 15)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("哞菇")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 16)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("鱿鱼")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 17)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("兔子")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 18)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("蝙蝠")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 19)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("铁傀儡")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 20)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("雪傀儡")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 21)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("豹猫")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 22)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("马")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 23)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("驴")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 24)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("骡")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 25)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("骷髅马")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 26)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("僵尸马")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 27)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("僵尸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 32)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爬行者")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 33)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("骷髅")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 34)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("蜘蛛")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 35)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("僵尸猪人")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 36)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("史莱姆")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 37)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("末影人")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 38)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("蠢虫")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 39)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("洞穴蜘蛛")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 40)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("恶魂")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 41)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("岩浆怪")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 42)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("烈焰人")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 43)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("村民僵尸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 44)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("女巫")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 45)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("流浪者")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 46)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("剥皮者")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 47)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("凋零骷髅")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 48)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("药水")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 86)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("TNT")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 65)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("附魔之瓶")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 68)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("经验球")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 69)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("末影珍珠")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 87)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("箭矢")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 80)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("雪球")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 81)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("鸡蛋")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 82)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("船")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 90)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("漏斗矿车")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 96)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("TNT矿车")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 97)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("运输矿车")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 98)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("闪电")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 93)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("火球_恶魂")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 85)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("火球_烈焰人")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                生成(x, y, z, 94)
            }
        }))
        layout.addView(vb)



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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


function 药水() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("药水效果")
        ve.setTextSize(20)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("时间+10秒")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                时间加()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("时间-10秒")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                时间减()
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("药水时间为  " + 时间 / 20 + "秒")
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                药等++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("等级-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                药等--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("高/低等级")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (药等 <= 255) {
                    药等高()
                } else if (药等 > 255) {
                    药等低()
                }
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("药水等级为  " + 药等)
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("速度")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 1, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("跳跃")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 8, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("力量")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 5, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("生命回复")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 10, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("抗性提升")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 11, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("防火")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 12, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("夜视")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 16, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("隐身")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 14, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("急迫")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 3, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("水下呼吸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 13, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("瞬间治疗")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 6, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("生命提升")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 21, 时间, 药等, 否, 否);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("伤害吸收")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 22, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("缓慢")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 2, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("挖掘疲劳")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 4, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("瞬间伤害")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 7, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("反胃")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 9, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("失明")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 15, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("饥饿")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 17, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("虚弱")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 18, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("中毒")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 19, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("凋零")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加药水(getPlayerEnt(), 20, 时间, 药等, 否, 否)
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("有一些药水进房间无效")
        ve.setTextSize(9)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("清除药水")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                去除所有药水(getPlayerEnt())
                发言("§d已去除所有药水效果")
                屏中提示("§d已去除所有药水效果")
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("~~~~~下面是2分钟药水")
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("浩克模式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.addEffect(getPlayerEnt(), 1, 3600, 2, false, false);
                Entity.addEffect(getPlayerEnt(), 8, 3600, 5, false, false);
                Entity.addEffect(getPlayerEnt(), 5, 3600, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 10, 3600, 255, false, false);
                Entity.addEffect(getPlayerEnt(), 11, 3600, 5, false, false);
            }
        }))
        layout.addView(vb)


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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 外进() {
    var texta = readData("minecraftpe/.external_server.txt")
    if (texta != "" && texta != null) {
        saveData("minecraftpe/external_servers.txt", texta)
        print("请重启程序")
    } else {
        print("读取错误")
    }
}

function saveData(a, b, t) {
    var f = new java.io.File(String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/" + a))
    try {
        var FW = new java.io.FileWriter(f);
        FW.write(b);
        FW.close();
    } catch (e) {
        print("写入错误" + e)
    }
}

function readData(a) {
    var path = new java.io.File(String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/" + a))
    var file = new java.io.File(path);
    if (file.isFile() && file.exists()) {
        var outputstr = "";
        var read = new java.io.InputStreamReader(new java.io.FileInputStream(file), "UTF-8");
        var bufferedReader = new java.io.BufferedReader(read);
        var lineTxt = null;
        while ((lineTxt = bufferedReader.readLine()) != null) {
            outputstr = outputstr + lineTxt;
        }
        read.close();
        return outputstr;
    }
}

function 附魔32767() {
    var dj = 32767,
        sz = Player.getSelectedSlotId()

    Player.enchant(sz, Enchantment.PROTECTION, dj);
    Player.enchant(sz, Enchantment.THORNS, dj);
    Player.enchant(sz, Enchantment.UNBREAKING, dj);
    Player.enchant(sz, Enchantment.RESPIRATION, dj);
    Player.enchant(sz, Enchantment.SHARPNESS, dj);
    Player.enchant(sz, Enchantment.KNOCKBACK, dj);
    Player.enchant(sz, Enchantment.FIRE_ASPECT, dj);
    Player.enchant(sz, Enchantment.EFFICIENCY, dj);
    Player.enchant(sz, Enchantment.FORTUNE, dj);
    Player.enchant(sz, Enchantment.POWER, dj);
    Player.enchant(sz, Enchantment.PUNCH, dj);
    Player.enchant(sz, Enchantment.FLAME, dj);
    Player.enchant(sz, Enchantment.INFINITY, dj);
    Player.enchant(sz, Enchantment.LUCK_OF_THE_SEA, dj);
    Player.enchant(sz, Enchantment.LURE, dj);
}

function 附魔100() {
    var dj = 100,
        sz = Player.getSelectedSlotId()

    Player.enchant(sz, Enchantment.PROTECTION, dj);
    Player.enchant(sz, Enchantment.THORNS, dj);
    Player.enchant(sz, Enchantment.UNBREAKING, dj);
    Player.enchant(sz, Enchantment.RESPIRATION, dj);
    Player.enchant(sz, Enchantment.SHARPNESS, dj);
    Player.enchant(sz, Enchantment.KNOCKBACK, dj);
    Player.enchant(sz, Enchantment.FIRE_ASPECT, dj);
    Player.enchant(sz, Enchantment.EFFICIENCY, dj);
    Player.enchant(sz, Enchantment.FORTUNE, dj);
    Player.enchant(sz, Enchantment.POWER, dj);
    Player.enchant(sz, Enchantment.PUNCH, dj);
    Player.enchant(sz, Enchantment.FLAME, dj);
    Player.enchant(sz, Enchantment.INFINITY, dj);
    Player.enchant(sz, Enchantment.LUCK_OF_THE_SEA, dj);
    Player.enchant(sz, Enchantment.LURE, dj);
}

function 附魔10() {
    var dj = 10,
        sz = Player.getSelectedSlotId()

    Player.enchant(sz, Enchantment.PROTECTION, dj);
    Player.enchant(sz, Enchantment.THORNS, dj);
    Player.enchant(sz, Enchantment.UNBREAKING, dj);
    Player.enchant(sz, Enchantment.RESPIRATION, dj);
    Player.enchant(sz, Enchantment.SHARPNESS, dj);
    Player.enchant(sz, Enchantment.KNOCKBACK, dj);
    Player.enchant(sz, Enchantment.FIRE_ASPECT, dj);
    Player.enchant(sz, Enchantment.EFFICIENCY, dj);
    Player.enchant(sz, Enchantment.FORTUNE, dj);
    Player.enchant(sz, Enchantment.POWER, dj);
    Player.enchant(sz, Enchantment.PUNCH, dj);
    Player.enchant(sz, Enchantment.FLAME, dj);
    Player.enchant(sz, Enchantment.INFINITY, dj);
    Player.enchant(sz, Enchantment.LUCK_OF_THE_SEA, dj);
    Player.enchant(sz, Enchantment.LURE, dj);
}

function 附魔s() {
    var sz = Player.getSelectedSlotId()

    Player.enchant(sz, Enchantment.PROTECTION, 等级);
    Player.enchant(sz, Enchantment.THORNS, 等级);
    Player.enchant(sz, Enchantment.UNBREAKING, 等级);
    Player.enchant(sz, Enchantment.RESPIRATION, 等级);
    Player.enchant(sz, Enchantment.SHARPNESS, 等级);
    Player.enchant(sz, Enchantment.KNOCKBACK, 等级);
    Player.enchant(sz, Enchantment.FIRE_ASPECT, 等级);
    Player.enchant(sz, Enchantment.EFFICIENCY, 等级);
    Player.enchant(sz, Enchantment.FORTUNE, 等级);
    Player.enchant(sz, Enchantment.POWER, 等级);
    Player.enchant(sz, Enchantment.PUNCH, 等级);
    Player.enchant(sz, Enchantment.FLAME, 等级);
    Player.enchant(sz, Enchantment.INFINITY, 等级);
    Player.enchant(sz, Enchantment.LUCK_OF_THE_SEA, 等级);
    Player.enchant(sz, Enchantment.LURE, 等级);
}

function zha() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("爆炸")
        ve.setTextSize(20)
        layout.addView(ve)
        var XX = Player.getX()
        var Y = Player.getY()
        var Z = Player.getZ()


        var vb = new android.widget.Button(ctx)
        vb.setText("半径+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                半径++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("半径-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                半径--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("半径+10")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                半径加()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("半径-10")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                半径减()
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("爆炸半径为:  " + 半径)
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("9999")
                if (半径 > 200) {
                    if (半径 < 256) {
                        if (VIP > 0) {
                            非VIP()
                            发言("§e半径超过200低于256的爆炸，需要VIP权限才能使用")
                        } else {
                            爆炸(XX, Y, Z, 半径)
                        }
                    } else if (半径 > 255) {
                        if (SVIP > 0) {
                            非SVIP()
                            发言("§b半径超过255的爆炸，需要SVIP权限才能使用")
                        } else {
                            爆炸(XX, Y, Z, 半径)
                        }
                    }
                } else {
                    爆炸(XX, Y, Z, 半径)
                }
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸定位")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (SVIP < 1) {
                    定位()
                } else {
                    非SVIP()
                }
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("下面是快速爆炸")
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸r50")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("9999")
                爆炸(XX, Y, Z, 50)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸r100")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("9999")
                爆炸(XX, Y, Z, 100)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸r200")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHealth("9999")
                爆炸(XX, Y, Z, 200)
            }
        }))
        layout.addView(vb)


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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 炸房() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("炸房")
        ve.setTextSize(20)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("外进")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (VIP > 0) {
                    非VIP()
                } else {
                    外进()
                }
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                zha()
            }
        }))
        layout.addView(vb)


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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


var 不是玩家 = "Not a player",
    p1, p2, p3, p4, p5, p6, p7, p8, 控制玩家

try {
    function entityAddedHook(实体) {

        if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p1 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p2 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p3 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p4 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p5 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p6 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p7 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p8 = 实体;
            clientMessage("§o§b<[毁灭公爵]>§6" + Entity.getNameTag(实体) + "§2加入房间");
        }

    }

    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
    }

    function 列表() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)

            var 标题 = new android.widget.TextView(ctx)
            标题.setText("房间列表")
            标题.setTextSize(25)
            标题.setTextColor(android.graphics.Color.WHITE)
            layout.addView(标题)

            var 按钮1 = new android.widget.Button(ctx)
            按钮1.setText("玩家1(" + Entity.getNameTag(p1) + ")")
            按钮1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p1;
                    if (p1 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮1)
            var 按钮2 = new android.widget.Button(ctx)
            按钮2.setText("玩家2(" + Entity.getNameTag(p2) + ")")
            按钮2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p2;
                    if (p2 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮2)
            var 按钮3 = new android.widget.Button(ctx)
            按钮3.setText("玩家3(" + Entity.getNameTag(p3) + ")")
            按钮3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p3;
                    if (p3 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮3)
            var 按钮4 = new android.widget.Button(ctx)
            按钮4.setText("玩家4(" + Entity.getNameTag(p4) + ")")
            按钮4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p4;
                    if (p4 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮4)
            var 按钮5 = new android.widget.Button(ctx)
            按钮5.setText("玩家5(" + Entity.getNameTag(p5) + ")")
            按钮5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p5;
                    if (p5 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮5)
            var 按钮6 = new android.widget.Button(ctx)
            按钮6.setText("玩家6(" + Entity.getNameTag(p6) + ")")
            按钮6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    控制玩家 = p6;
                    if (p6 != null) {
                        clientMessage("已选定该玩家");
                    } else {
                        clientMessage("找不到该玩家");
                    }
                }
            }))
            layout.addView(按钮6)

            var mlayout = makeMenu(ctx, layout)
            menu.setContentView(mlayout)
            menu.setWidth(dip2px(ctx, 130))
            menu.setHeight(dip2px(ctx, 720))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
        } catch (err) {
            print(err)
        }
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
} catch (e) {
    print(e)
}


function 非VIP() {
    var of = 0;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var ad = android.app.AlertDialog.Builder
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var d = new ad(ctx)
                d.setNegativeButton("了解", new android.content.DialogInterface.OnClickListener() {
                    onClick: function(dia, w) {}
                })
                d.setTitle("非VIP用户")
                d.setMessage("您是非VIP用户，而该功能需要VIP才能使用，请加群311957683向作者获取VIP")
                d.show()
            } catch (e) {
                print(e)
            }
        }
    }))
}

function 非SVIP() {
    var of = 0;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var ad = android.app.AlertDialog.Builder
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var d = new ad(ctx)
                d.setNegativeButton("了解", new android.content.DialogInterface.OnClickListener() {
                    onClick: function(dia, w) {}
                })
                d.setTitle("非SVIP用户")
                d.setMessage("您是非SVIP用户，而该功能需要SVIP才能使用，请加群311957683向作者获取VIP")
                d.show()
            } catch (e) {
                print(e)
            }
        }
    }))
}


function 定位() {
    发言("§8设置最初的爆炸位置为玩家坐标")
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("爆炸定位")
        ve.setTextSize(20)
        layout.addView(ve)
        var XX = Player.getX()
        var Y = Player.getY()
        var Z = Player.getZ()


        var vb = new android.widget.Button(ctx)
        vb.setText("X+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                XX++
                zha1++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("X-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                XX--
                zha1--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Y+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Y++
                zha2++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Y-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Y--
                zha2--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Z+1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Z++
                zha3++
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("Z-1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Z--
                zha3--
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("查看爆炸坐标")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                屏中提示("爆炸的坐标 : " + "X:" + zha1 + " Y:" + zha2 + " Z" + zha3)
                发言("爆炸的坐标 : " + "X:" + zha1 + " Y:" + zha2 + " Z" + zha3)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("爆炸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                爆炸(XX, Y, Z, 半径)
            }
        }))
        layout.addView(vb)



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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}


function 白天晚上() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var ve = new android.widget.TextView(ctx)
        ve.setText("时间调整")
        ve.setTextSize(20)
        layout.addView(ve)


        var vb = new android.widget.Button(ctx)
        vb.setText("调数+25")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调数加()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调数-25")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调数减()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调数+250")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调数加加()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调数-250")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调数减减()
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("调时间数量为:  " + 调数)
        ve.setTextSize(13)
        layout.addView(ve)

        var vb = new android.widget.Button(ctx)
        vb.setText("调时间")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调时间(调数)
            }
        }))
        layout.addView(vb)

        var ve = new android.widget.TextView(ctx)
        ve.setText("调数为13000是晚上")
        ve.setTextSize(13)
        layout.addView(ve)

        var ve = new android.widget.TextView(ctx)
        ve.setText("调数为7000是正午")
        ve.setTextSize(13)
        layout.addView(ve)



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


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 0, 0)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}




function 时间减() {
    zz = 0
    while (zz < 200) {
        时间--
        zz++
    }
}

function 时间加() {
    ss = 0
    while (ss < 200) {
        时间++
        ss++
    }
}

function 药等高() {
    vv = 0
    while (vv < 254) {
        药等++
        vv++
    }
}

function 药等低() {
    hh = 0
    while (hh < 254) {
        药等--
        hh++
    }
}

function 等级加() {
    yy = 0
    while (yy < 10) {
        等级++
        yy++
    }
}

function 等级减() {
    ll = 0
    while (ll < 10) {
        等级--
        ll++
    }
}

function 半径加() {
    ui = 0
    while (ui < 10) {
        半径++
        ui++
    }
}

function 半径减() {
    ty = 0
    while (ty < 10) {
        半径--
        ty++
    }
}

function 调数加() {
    ty = 0
    while (ty < 25) {
        调数++
        ty++
    }
}

function 调数减() {
    ty = 0
    while (ty < 25) {
        调数--
        ty++
    }
}

function 调数加加() {
    ty = 0
    while (ty < 250) {
        调数++
        ty++
    }
}

function 调数减减() {
    ty = 0
    while (ty < 250) {
        调数--
        ty++
    }
}

function procCmd(启动) {
        启动设置++
        打印("毁灭是塑造的开始！！！")
    }