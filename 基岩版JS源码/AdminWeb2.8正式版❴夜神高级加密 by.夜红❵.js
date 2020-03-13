/*本js由黄金龙角与chkkvjjc共同制作*/
/*感谢Frm提供建议及帮助*/
/*使用者造成的任何后果本JS作者概不承担*/
/*本js完全免费且人人都可以使用，请勿被人骗钱*/
/*任何使用本js进行二改，圈钱行为默认傻逼*/
/*欢迎加入MC前端开发qq群:673850643*/
//禁止无权破解，修改此js
//js加密支持by.夜红本尊
//夜红QQ号2967584405


var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var searcher;

var View=android.view.View;
var String=java.lang.String;
var Integer=java.lang.Integer;
var GD=android.graphics.drawable.GradientDrawable;
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
var CompoundButton=android.widget.CompoundButton;
var WebView=android.webkit.WebView;
var WebViewClient=android.webkit.WebViewClient;
var WebChromeClient=android.webkit.WebChromeClient;
var curspeed;
var ent = getNearestEntity(6);


var tpopx =100;
var tpopy =100;
var mX,mY;
var gui;
var downa=false;
	
var AutoAim=false
var Longarm=false
var Magic=false
var AutoTP=false
var Flick=false



varbase64="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"
                var logo = android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(base64, 0), 0, android.util.Base64.decode(base64, 0).length)


                ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); ctx.setTheme(android.R.style.Theme_Material_Light_NoActionBar);




                var Metrics = ctx.getResources().getDisplayMetrics();

                var ScreenWidth = Metrics.widthPixels;
                var ScreenHeight = Metrics.heightPixels;

                var DogWalls = new android.app.AlertDialog.Builder(ctx)

                var 使用声明 = "©使用声明©\n如您使用本JS说明您已同意以下几点：\n1.JS作者保留对本JS的所有解释权\n2.使用者造成的任何后果本JS作者概不承担\n3.本JS仅用于JS技术学习交流\n以下为二改倒卖AdminWeb的FW名单\n欢迎大家开举报器举报\nFW最猛枕边人qq：2269963357\nFW39031860taptap账号：39031860@Social"
                var 标题 = "请认准AdminWeb正版群号：673850643"
                var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                var GUI;



                /*挂狗墙*/
                ctx.runOnUiThread(new java.lang.Runnable({
                    run: function() {
                        try {




                            var layout2 = new android.widget.LinearLayout(ctx);
                            layout2.setOrientation(1);
                            layout2.setBackgroundColor(android.graphics.Color.parseColor("#6693fffe"));


                            var Title = new android.widget.TextView(ctx);
                            Title.setText("请认准AdminWeb正版群号：673850643");

                            Title.setTextSize(19);
                            layout2.addView(Title);


                            var scroll2 = new android.widget.ScrollView(ctx);
                            scroll2.addView(layout2);
                            var txt = new android.widget.TextView(ctx);
                            var dialog = new android.app.Dialog(ctx);

                            dialog.setContentView(scroll2);
                            dialog.setTitle(标题);
                            layout2.addView(txt);
                            txt.setText(使用声明);


                            var DogWall = new android.widget.Button(ctx);
                            DogWall.setOnClickListener(new android.view.View.OnClickListener() {
                                onClick: function(viewarg) {
                                    dialog.dismiss()
                                }
                            });

                            DogWall.setText("我知道了");
                            layout2.addView(DogWall)
                            dialog.show();
                        } catch (err) {
                            print("Err: " + err);
                        }




                    }
                }));


                //自动进程
                var thread = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            while (true) {
                                if (AutoAim == true) {
                                    var ent = getNearestEntity(8);
                                    AimAt(ent);
                                    //每ms毫秒执行的的内容
                                    thread.sleep(10)
                                }
                            }
                        }
                    }))
                thread.start()



                //自动进程2
                var thread = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            while (true) {
                                if (Longarm == true) {
                                    var ent = getNearestEntity(6);
                                    Entity.setCollisionSize(ent, 6, 8);
                                    //每ms毫秒执行的的内容
                                    thread.sleep(300)
                                }
                            }
                        }
                    }))
                thread.start()



                //自动进程3
                var thread = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            while (true) {
                                if (AutoTP == true) {
                                    var ent = getNearestEntity(8);
                                    setPosition(ent, Player.getX(), Player.getY() - 0.5, Player.getZ());
                                    //每ms毫秒执行的的内容
                                    thread.sleep(10)
                                }
                            }
                        }
                    }))
                thread.start()




                //自动进程4
                var thread = new java.lang.Thread(
                    new java.lang.Runnable({
                        run: function() {
                            while (true) {
                                if (Flick == true) {
                                    setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 20);
                                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ(), 20);
                                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() - 1, 20);
                                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() - 1, 20);
                                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ(), 20);
                                    setTile(Player.getX(), Player.getY() - 2, Player.getZ() + 1, 20);
                                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() + 1, 20);
                                    setTile(Player.getX() - 1, Player.getY() - 2, Player.getZ() + 1, 20);
                                    setTile(Player.getX() + 1, Player.getY() - 2, Player.getZ() - 1, 20);
                                    //每ms毫秒执行的的内容
                                    thread.sleep(50)
                                }
                            }
                        }
                    }))
                thread.start()




                /*主菜单GUI*/
                function dip2px(dips) {
                    return Math.ceil(dips * Metrics.density);
                }

                function sp2px(sp) {
                    return (sp * Metrics.scaledDensity + 0.5);
                }

                function bitmapScale(bitmap, x, y) {
                    var matrix = new Matrix();
                    matrix.postScale(x / bitmap.getWidth(), y / bitmap.getHeight());
                    return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
                }

                function setClick(view, executeString, x) {
                    view.setOnClickListener(new View.OnClickListener() {
                        onClick: function(v) {
                            return (eval(executeString));
                        }
                    });
                }

                function setTouch(view, executeString) {
                    view.setOnTouchListener(new View.OnTouchListener() {
                        onTouch: function(v, event) {
                            return (eval(executeString));
                        }
                    });
                }

                function setDismiss(popwin, executeString) {
                    popwin.setOnDismissListener(new PopupWindow.OnDismissListener() {
                        onDismiss: function() {
                            eval(executeString);
                        }
                    });
                }

                function setSeekBarChange(seekbar, executeString, x) {
                    seekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
                        onProgressChanged: function(seekbar, progress, fromUser) {
                            eval(executeString);
                        },

                        onStartTrackingTouch: function(seekbar) {

                        },

                        onStopTrackingTouch: function(seekbar) {

                        },

                    });
                }

                function addTextChanged(edit, executeString, x) {
                    edit.addTextChangedListener(new TextWatcher() {

                        beforeTextChanged: function(str, start, count, after) {},

                        onTextChanged: function(str, start, before, count) {},

                        afterTextChanged: function(s) {
                            eval(executeString);
                        },

                    });
                }




                var $IconPopwin;
                var $MemuPopwin;
                var $EnchantPopwin;

                var $TpMemuPopwin;
                var $TpModeButtonPopwin;




                function DrawIcon(showX, showY) {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {

                            if ($IconPopwin != null) {
                                $IconPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY);
                                return;
                            }
                            var view = new LinearLayout(ctx);
                            var iconbutton = new ImageButton(ctx);
                            iconbutton.setImageBitmap(bitmapScale(logo, dip2px(60), dip2px(60)));


                            view.addView(iconbutton);
                            iconbutton.setBackgroundColor(Color.argb(0, 0, 0, 0));

                            var popwin = new PopupWindow(view,
                                LinearLayout.LayoutParams.WRAP_CONTENT,
                                LinearLayout.LayoutParams.WRAP_CONTENT
                            );

                            popwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY);

                            $IconPopwin = popwin;
                            setClick(iconbutton, "IconPopwinClick();");
                            setTouch(iconbutton, "IconPopwinMove(event);");
                        }
                    }));
                }




                var i = Entity.getHealth(Player.getEntity());
                var t = 0;
                var hx = Player.getX();
                var hy = Player.getY();
                var hz = Player.getZ();

                function random(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min
                }


                /*主菜单*/
                var MemuButtons = [

                    {
                        text: "服务器信息",
                        exe: "print(Server.getAddress()+Server.getPort());"
                    }, {
                        text: "调用其它JS",
                        exe: "fileSelect();"
                    }, {
                        text: "我要上网",
                        exe: "searcher.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP,0,0)"
                    }, {
                        text: "高级附魔",
                        exe: "EnchantHandItem();"
                    },


                    {
                        text: "坐标TP",
                        exe: "AdminWebTP();"
                    }, {
                        text: "PVP功能",
                        exe: "PVP();"
                    }, {
                        text: "自定义物品",
                        exe: "give();"
                    },

                    {
                        text: "一键拿物品",
                        exe: "give2();"
                    },



                    {
                        text: "飞行防踢",
                        exe: "setPosition(Player.getEntity(),Player.getX(),Player.getY()+1,Player.getZ());Player.setFlying(true);"
                    },

                    {
                        text: "飞行开关",
                        checktest: function() {
                            return Player.canFly();
                        },
                        exe: "Player.setCanFly(!Player.canFly());"
                    },




                    {
                        text: "tp玩家",
                        checktest: function() {
                            return !(($TpMemuPopwin == null || !$TpMemuPopwin.isShowing()));
                        },
                        exe: "if($TpMemuPopwin==null||!$TpMemuPopwin.isShowing()){DrawTpMemu();}else{$TpMemuPopwin.dismiss();}"
                    },

                    {
                        text: "随机闪现",
                        exe: "setPosition(Player.getEntity(),Player.getX()+random(-10,10),Player.getY()+1,Player.getZ()+random(-10,10))"
                    },

                    {
                        text: "矿物透视",
                        exe: "Block.setLightLevel(14,15);" +
                            "Block.setLightLevel(15,15);" +
                            "Block.setLightLevel(16,15);" +
                            "Block.setLightLevel(21,15);" +
                            "Block.setLightLevel(56,15);" +
                            "Block.setLightLevel(73,15);" +
                            "Block.setLightLevel(129,15);" +
                            "Block.setShape(14,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(15,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(16,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(21,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(56,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(73,0.001,0.001,0.001,0.999,0.999,0.999);" +
                            "Block.setShape(129,0.001,0.001,0.001,0.999,0.999,0.999);"
                    },


                    {
                        text: "飞天",
                        exe: "setPosition(Player.getEntity(),Player.getX(),Player.getY()+12,Player.getZ());Entity.setHealth(Player.getEntity(),20);"
                    }, {
                        text: "遁地",
                        exe: "setPosition(Player.getEntity(),Player.getX(),Player.getY()-12,Player.getZ());Entity.setHealth(Player.getEntity(),20);"
                    },


                    {
                        text: "一键升级",
                        exe: "Player.addExp(32767);Entity.setHealth(Player.getEntity(),20);"
                    }, {
                        text: "一键爆炸",
                        exe: "{setPosition(Player.getEntity(),Player.getX(),Player.getY()+5,Player.getZ());explode(Player.getX(),Player.getY()-8,Player.getZ(),20);Entity.setHealth(Player.getEntity(),20);}"
                    },

                    {
                        text: "清除药效",
                        exe: "Entity.removeAllEffects(Player.getEntity());Entity.setHealth(Player.getEntity(),20);"
                    }, {
                        text: "一键夜视",
                        exe: "Entity.addEffect(Player.getEntity(),3,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),16,2147483647,255,false,false);"
                    },


                    {
                        text: "全部药效",
                        exe: "Entity.addEffect(Player.getEntity(),1,2147483647,2,false,false);" +
                            "Entity.addEffect(Player.getEntity(),3,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),5,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),10,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),11,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),12,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),13,2147483647,255,false,false);" +
                            "Entity.addEffect(Player.getEntity(),16,2147483647,255,false,false);"
                    },


                    {
                        text: "我要抽奖",
                        exe: "Entity.setCarriedItem(Player.getEntity(),random(1,520),64,random(0,15));"
                    },

                    {
                        text: "获取脚下方块",
                        exe: "Entity.setCarriedItem(Player.getEntity(),getTile(Player.getX(),Player.getY()-2,Player.getZ()),64,0);"
                    }, {
                        text: "合作伙伴",
                        exe: "thanks();"
                    }
                ]


                function MemuButtonBGDraw(count, bt) {
                    if (MemuButtons[count].checktest()) {
                        bt.setBackgroundColor(android.graphics.Color.parseColor("#66c4fff9"));
                    } else {
                        bt.setBackgroundColor(android.graphics.Color.parseColor("#66ffb6a2"));
                    }
                }

                function MemuButtonDraw(view) {
                    for (var count = 0; count < MemuButtons.length; count++) {
                        var bt = new Button(ctx);
                        bt.setElevation(10);

                        bt.setAllCaps(false);
                        var btext = new String(MemuButtons[count].text);

                        bt.setText(btext);

                        if (typeof(MemuButtons[count].checktest) != "undefined") {
                            MemuButtonBGDraw(count, bt);
                            setClick(bt, MemuButtons[count].exe + "MemuButtonBGDraw(x[0],x[1]);", [count, bt]);
                        } else {
                            bt.setBackgroundColor(android.graphics.Color.parseColor("#33ffffff"));
                            setClick(bt, MemuButtons[count].exe, [bt, count]);
                        }

                        view.addView(bt, -1, -2);
                    }
                }




                function additem() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                    var layout = new android.widget.LinearLayout(ctx)
                    try {
                        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
                        menu.setFocusable(true)
                        var layout = new android.widget.LinearLayout(ctx)
                        layout.setOrientation(1)

                        var mlayout = makeMenu(ctx, layout)
                        menu.setContentView(mlayout)
                        menu.setWidth(dip2px(ctx, 150))
                        menu.setHeight(dip2px(ctx, 350))
                        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
                        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
                    } catch (err) {
                        print(err)


                    }
                }




                function DrawMemu(showX, showY) {


                    if ($MemuPopwin != null) {
                        $MemuPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY); //ScreenWidth-dip2px(220),dip2px(120));
                        return;
                    }
                    var view = new LinearLayout(ctx);
                    view.setOrientation(LinearLayout.VERTICAL);
                    view.setBackgroundColor(android.graphics.Color.parseColor("#66edff75"));




                    var HJLJ = new TextView(ctx);
                    HJLJ.setText("  © AdminWeb Version:2.0 Made by HJLJ, please do not resell ©  ");
                    view.addView(HJLJ, -2, -2);
                    HJLJ.setMarqueeRepeatLimit(java.lang.Integer.MAX_VALUE);
                    HJLJ.setFocusable(true);
                    HJLJ.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                    HJLJ.setSingleLine();
                    HJLJ.setFocusableInTouchMode(true);
                    HJLJ.setHorizontallyScrolling(true);




                    MemuButtonDraw(view);


                    var scrollview = new ScrollView(ctx);
                    scrollview.addView(view, -1, -2);
                    var popwin = new PopupWindow(scrollview, -1, -1);
                    popwin.setWidth(dip2px(180));
                    popwin.setHeight(ScreenHeight / 2);
                    popwin.setOutsideTouchable(true);
                    popwin.setElevation(10);
                    setDismiss(popwin, "MenuPopwinDismiss();");
                    popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                    popwin.setFocusable(true);
                    $MemuPopwin = popwin;
                    //show
                    popwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY); //ScreenWidth-dip2px(220),dip2px(120));

                    //}}));
                }


                var $ToolWinIsShow = false;


                var EnchantList = [{
                        id: 0,
                        name: "保护"
                    }, {
                        id: 1,
                        name: "火焰保护"
                    }, {
                        id: 2,
                        name: "掉落保护"
                    }, {
                        id: 3,
                        name: "爆炸保护"
                    }, {
                        id: 4,
                        name: "弹射物保护"
                    }, {
                        id: 5,
                        name: "荆棘"
                    }, {
                        id: 6,
                        name: "水下呼吸"
                    }, {
                        id: 7,
                        name: "深海探索者"
                    }, {
                        id: 8,
                        name: "水下速掘"
                    }, {
                        id: 9,
                        name: "锋利"
                    }, {
                        id: 10,
                        name: "亡灵杀手"
                    }, {
                        id: 11,
                        name: "截肢杀手"
                    }, {
                        id: 12,
                        name: "击退"
                    }, {
                        id: 13,
                        name: "火焰附加"
                    }, {
                        id: 14,
                        name: "抢夺"
                    }, {
                        id: 15,
                        name: "效率"
                    }, {
                        id: 16,
                        name: "精准采集"
                    }, {
                        id: 17,
                        name: "耐久"
                    }, {
                        id: 18,
                        name: "时运"
                    }, {
                        id: 19,
                        name: "力量"
                    }, {
                        id: 20,
                        name: "冲击"
                    }, {
                        id: 21,
                        name: "火矢"
                    }, {
                        id: 22,
                        name: "无限"
                    }, {
                        id: 23,
                        name: "海之眷顾"
                    }, {
                        id: 24,
                        name: "饵钓"
                    }, {
                        id: 25,
                        name: "冰霜行者"
                    }, {
                        id: 26,
                        name: "经验修补"
                    }, {
                        id: 27,
                        name: "绑定诅咒"
                    }, {
                        id: 28,
                        name: "消失诅咒"
                    }, {
                        id: 29,
                        name: "穿刺"
                    }, {
                        id: 30,
                        name: "激流"
                    }, {
                        id: 31,
                        name: "忠诚"
                    }, {
                        id: 32,
                        name: "引雷"
                    }, {
                        id: 33,
                        name: "多重射击"
                    }, {
                        id: 34,
                        name: "穿透"
                    }, {
                        id: 35,
                        name: "快速装填"
                    },

                ];

                function DrawEnchant() {
                    $ToolWinIsShow = true;



                    if ($EnchantPopwin != null) {
                        $EnchantPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ScreenWidth / 4, ScreenHeight / 4);
                        return;
                    }

                    var view = new LinearLayout(ctx);
                    view.setOrientation(LinearLayout.VERTICAL);
                    view.setBackgroundColor(android.graphics.Color.parseColor("#3393fffe")); //#8200b7ff

                    var textParams = new RelativeLayout.LayoutParams(sp2px(10 * 5), -2);
                    textParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT, RelativeLayout.TRUE);
                    var buttonParams = new RelativeLayout.LayoutParams(-2, -2);
                    buttonParams.addRule(RelativeLayout.ALIGN_PARENT_RIGHT, RelativeLayout.TRUE);
                    var editParams = new RelativeLayout.LayoutParams(sp2px(15 * 5), -2);
                    editParams.addRule(RelativeLayout.LEFT_OF, 0x1);
                    var sbParams = new RelativeLayout.LayoutParams(-1, -2);
                    sbParams.addRule(RelativeLayout.RIGHT_OF, 0xa);
                    sbParams.addRule(RelativeLayout.LEFT_OF, 0x3);

                    for (var i = 0; i < EnchantList.length; i++) {
                        var relative = new RelativeLayout(ctx);
                        var name = new TextView(ctx);
                        name.setId(0xa);
                        var button = new Button(ctx);
                        button.setId(0x1);
                        var sb = new SeekBar(ctx);

                        var level = new EditText(ctx);
                        level.setId(0x3);


                        level.setInputType(4098);
                        level.setText("0");
                        level.setFocusable(true);
                        level.setFocusableInTouchMode(true);
                        level.setFilters([new InputFilter.LengthFilter(6)]);
                        addTextChanged(level, "EnchantEditChange(s,x);", [level, sb]);

                        sb.setProgress(32768);
                        sb.setMax(65535);
                        sb.setProgress(32768);

                        sb.setPadding(dip2px(20), 0, dip2px(50), 0);
                        setSeekBarChange(sb, "EnchantSeekChange(progress,fromUser,x);", [level]);
                        name.setText(EnchantList[i].name);
                        button.setText("附魔");
                        setClick(button, "EnchantHand(" + i + ",x[0].getProgress());", [sb]);

                        relative.addView(name, textParams);
                        relative.addView(level, editParams);
                        relative.addView(button, buttonParams);
                        relative.addView(sb, sbParams);
                        view.addView(relative, -1, -2);
                    }

                    var scrollview = new ScrollView(ctx);
                    scrollview.addView(view, -1, -2);
                    var popwin = new PopupWindow(scrollview, -1, -1);
                    popwin.setWidth(ScreenWidth / 2);
                    popwin.setHeight(ScreenHeight / 2);
                    popwin.setOutsideTouchable(true);
                    popwin.setElevation(10);
                    setDismiss(popwin, "EnchantPopwinDismiss();");
                    popwin.setFocusable(true);
                    popwin.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                    popwin.setFocusable(true);
                    $EnchantPopwin = popwin;
                    popwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ScreenWidth / 4, ScreenHeight / 4);

                }




                function TpPlayerRefresh() {
                    var view = $TpPlayersView;
                    view.removeAllViews();
                    var players = Server.getAllPlayers();
                    for (var i = 0; i < players.length; i++) {
                        var player = players[i];
                        var name = Player.getName(player);
                        var bt = new Button(ctx);
                        bt.setBackgroundColor(android.graphics.Color.parseColor("#33ffffff"));
                        bt.setAllCaps(false);
                        bt.setText("" + name);
                        setClick(bt, "TpModes[$TpMode].run(x[0]);", [player]);
                        view.addView(bt, -1, -2);
                    }

                }


                var TpModes = [{
                        id: 0,
                        name: "tp",
                        run: function(player) {
                            setPosition(Player.getEntity(), Entity.getX(player), Entity.getY(player), Entity.getZ(player));
                        }
                    },

                    {
                        id: 1,
                        name: "tpa",
                        run: function(player) {
                            setPosition(player, Player.getX(), Player.getY(), Player.getZ());
                        }
                    },

                ];
                var $TpMode = 0;



                function DrawTpMemu() {

                    var showX = 0;
                    var showY = 0;
                    if ($TpMemuPopwin != null) {
                        TpPlayerRefresh();
                        $TpMemuPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY);
                        $TpModeButtonPopwin.getContentView().findViewById(0x1).setText(TpModes[$TpMode].name);
                        $TpModeButtonPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX + dip2px(180), showY);

                        return;
                    }

                    var view = new LinearLayout(ctx);
                    view.setOrientation(LinearLayout.VERTICAL);

                    $TpPlayersView = new LinearLayout(ctx);
                    $TpPlayersView.setOrientation(LinearLayout.VERTICAL);
                    var bt = new Button(ctx);
                    bt.setText("刷新");
                    view.addView(bt, -1, -2);
                    setClick(bt, "TpPlayerRefresh();");

                    TpPlayerRefresh();

                    view.addView($TpPlayersView, -1, -2);

                    var scrollview = new ScrollView(ctx);
                    scrollview.addView(view, -1, -2);
                    var popwin = new PopupWindow(scrollview, -1, -1);

                    popwin.setWidth(dip2px(180));
                    popwin.setHeight(dip2px(180 * 1.5));

                    $TpMemuPopwin = popwin;
                    setDismiss(popwin, "$TpModeButtonPopwin.dismiss();");
                    $TpMemuPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX, showY);


                    var mview = new LinearLayout(ctx);
                    var modebutton = new Button(ctx);

                    modebutton.setText(TpModes[0].name);
                    modebutton.setBackgroundColor(android.graphics.Color.parseColor("#33ffffff"));
                    setClick(modebutton, "if($TpMode>=TpModes.length-1)$TpMode=0;else ++$TpMode;v.setText(TpModes[$TpMode].name);");
                    modebutton.setId(0x1);
                    modebutton.setAllCaps(false);
                    $TpMode = 0;
                    mview.addView(modebutton, -1, -1);

                    var mpop = new PopupWindow(mview, dip2px(80), dip2px(40));
                    $TpModeButtonPopwin = mpop;
                    $TpModeButtonPopwin.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, showX + dip2px(180), showY);


                }


                var $orgX = null, $orgY = null, $offset = null, $offsetY = null;
                var $IconPopwinX = null, $IconPopwinY = null;

                function IconPopwinMove(event) {
                    switch (event.getAction()) {
                        case MotionEvent.ACTION_DOWN:
                            $orgX = event.getX();
                            $orgY = event.getY();
                            break;
                        case MotionEvent.ACTION_MOVE:
                            $offsetX = event.getRawX() - $orgX;
                            $offsetY = event.getRawY() - $orgY;
                            $IconPopwin.update($offsetX, $offsetY, -1, -1, true);

                            break;
                        case MotionEvent.ACTION_UP:
                            $IconPopwinX = event.getRawX() - event.getX();
                            $IconPopwinY = event.getRawY() - event.getY();
                            break;
                    }
                    return false;
                }

                function IconPopwinClick() {

                    $IconPopwin.dismiss();
                    DrawMemu($IconPopwinX, $IconPopwinY);
                    return false;
                }

                function MenuPopwinDismiss() {
                    if (!$ToolWinIsShow)
                        DrawIcon($IconPopwinX, $IconPopwinY);
                }

                function EnchantPopwinDismiss() {
                    $ToolWinIsShow = false;
                    DrawMemu($IconPopwinX, $IconPopwinY);
                }

                function EnchantHandItem() {
                    DrawEnchant();
                    $MemuPopwin.dismiss();
                }

                function EnchantSeekChange(progress, fromUser, x) {
                    if (fromUser)
                        x[0].setText("" + (progress - 32768));
                }

                function EnchantEditChange(s, x) {
                    if (s.toString() == "" || s.toString() == "-") {
                        var progress = -32768;
                    } else
                        var progress = parseInt(s.toString()) + 32768;
                    if (progress > 65535) {
                        x[0].setText("32767");

                        progress = 65535;
                        x[0].setSelection(5);
                    }

                    x[1].setProgress(progress);
                }

                function EnchantHand(id, level) {
                    Item.setEnchantType(getCarriedItem(), id, 1);
                    Player.enchant(Player.getSelectedSlotId(), id, -98304 + level);
                }


                /*AdminWebTP*/
                function AdminWebTP() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            window = new android.app.Dialog(ctx);
                            window.setTitle("AdminWebTP");

                            var layout = new android.widget.LinearLayout(ctx);
                            layout.setOrientation(1);

                            var text = new android.widget.TextView(ctx);
                            text.setText("   化繁为简，一键TP   ");
                            text.setMarqueeRepeatLimit(java.lang.Integer.MAX_VALUE);
                            text.setFocusable(true);
                            text.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                            text.setSingleLine();
                            text.setFocusableInTouchMode(true);
                            text.setHorizontallyScrolling(true);
                            text.setTextColor(getColor(255, 255, 255, 255));

                            var buttonh = new android.widget.Button(ctx);
                            buttonh.setText("回出生点");
                            buttonh.setTextColor(getColor(255, 150, 0, 255));
                            buttonh.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    setPosition(Player.getEntity(), hx, hy + 2, hz);
                                    clientMessage("传送成功");
                                    window.dismiss();
                                }
                            }));

                            var button = new android.widget.Button(ctx);
                            button.setText("开始TP");
                            button.setTextColor(getColor(255, 150, 0, 255));
                            button.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    setPosition(Player.getEntity(), editTextX.getText().toString(), editTextY.getText().toString(), editTextZ.getText().toString());
                                    clientMessage("传送成功");
                                    window.dismiss();
                                }
                            }));


                            var editTextX = new android.widget.EditText(ctx);
                            editTextX.setHint("请输入X坐标");
                            editTextX.setTextColor(getColor(255, 150, 0, 255));
                            var editTextY = new android.widget.EditText(ctx);
                            editTextY.setHint("请输入Y坐标");
                            editTextY.setTextColor(getColor(255, 150, 0, 255));
                            var editTextZ = new android.widget.EditText(ctx);
                            editTextZ.setHint("请输入z坐标");
                            editTextZ.setTextColor(getColor(255, 150, 0, 255));
                            layout.addView(text);
                            layout.addView(buttonh);
                            layout.addView(editTextX);
                            layout.addView(editTextY);
                            layout.addView(editTextZ);
                            layout.addView(button);
                            window.setContentView(layout);
                            window.show();
                        }
                    }))
                }

                function getColor(r, y, b, a) {
                    return android.graphics.Color.argb(a, r, y, b)
                }




                /*give*/
                function give() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            window = new android.app.Dialog(ctx);
                            window.setTitle("AdminWebTP");

                            var layout3 = new android.widget.LinearLayout(ctx);
                            layout3.setOrientation(1);

                            var text = new android.widget.TextView(ctx);
                            text.setText("   化繁为简，一键获取   ");
                            text.setMarqueeRepeatLimit(java.lang.Integer.MAX_VALUE);
                            text.setFocusable(true);
                            text.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                            text.setSingleLine();
                            text.setFocusableInTouchMode(true);
                            text.setHorizontallyScrolling(true);
                            text.setTextColor(getColor(255, 255, 255, 255));

                            var buttonid = new android.widget.Button(ctx);
                            buttonid.setText("查看物品ID");
                            buttonid.setTextColor(getColor(255, 150, 0, 255));
                            buttonid.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {
                                    webview.loadUrl("https://minecraft-zh.gamepedia.com/基岩版数据值");
                                    searcher.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                                    window.dismiss();



                                }
                            }));




                            var button = new android.widget.Button(ctx);
                            button.setText("获取物品");
                            button.setTextColor(getColor(255, 150, 0, 255));
                            button.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), editTextID.getText().toString(), 64, editTextDATA.getText().toString());
                                    clientMessage("获取成功");
                                    window.dismiss();



                                }
                            }));
                            var editTextID = new android.widget.EditText(ctx);
                            editTextID.setHint("请输入物品ID");
                            editTextID.setTextColor(getColor(255, 150, 0, 255));
                            var editTextDATA = new android.widget.EditText(ctx);
                            editTextDATA.setHint("请输入特殊值");
                            editTextDATA.setTextColor(getColor(255, 150, 0, 255));

                            layout3.addView(text);
                            layout3.addView(buttonid);
                            layout3.addView(editTextID);
                            layout3.addView(editTextDATA);

                            layout3.addView(button);
                            window.setContentView(layout3);
                            window.show();
                        }
                    }))
                }

                function getColor(r, y, b, a) {
                    return android.graphics.Color.argb(a, r, y, b)
                }




                /*give2*/
                function give2() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            window = new android.app.Dialog(ctx);
                            window.setTitle("AdminWebTP");

                            var layout6 = new android.widget.LinearLayout(ctx);
                            layout6.setOrientation(LinearLayout.VERTICAL);



                            var scroll = new android.widget.ScrollView(ctx);
                            scroll.addView(layout6);



                            var text = new android.widget.TextView(ctx);
                            text.setText("   化繁为简，一键获取   ");
                            text.setMarqueeRepeatLimit(java.lang.Integer.MAX_VALUE);
                            text.setFocusable(true);
                            text.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                            text.setSingleLine();
                            text.setFocusableInTouchMode(true);
                            text.setHorizontallyScrolling(true);
                            text.setTextColor(getColor(255, 255, 255, 255));




                            var button1 = new android.widget.Button(ctx);
                            button1.setText("附魔苹果");
                            button1.setTextColor(getColor(255, 150, 0, 255));
                            button1.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 466, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button2 = new android.widget.Button(ctx);
                            button2.setText("隐身药水");
                            button2.setTextColor(getColor(255, 150, 0, 255));
                            button2.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 373, 64, 8);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));




                            var button3 = new android.widget.Button(ctx);
                            button3.setText("钻石块");
                            button3.setTextColor(getColor(255, 150, 0, 255));
                            button3.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 57, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button4 = new android.widget.Button(ctx);
                            button4.setText("TNT蛋");
                            button4.setTextColor(getColor(255, 150, 0, 255));
                            button4.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 65);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button5 = new android.widget.Button(ctx);
                            button5.setText("末影龙蛋");
                            button5.setTextColor(getColor(255, 150, 0, 255));
                            button5.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 53);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button6 = new android.widget.Button(ctx);
                            button6.setText("凋零蛋");
                            button6.setTextColor(getColor(255, 150, 0, 255));
                            button6.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 52);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button19 = new android.widget.Button(ctx);
                            button19.setText("闪电蛋");
                            button19.setTextColor(getColor(255, 150, 0, 255));
                            button19.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 93);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button20 = new android.widget.Button(ctx);
                            button20.setText("末影火球蛋");
                            button20.setTextColor(getColor(255, 150, 0, 255));
                            button20.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 79);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button7 = new android.widget.Button(ctx);
                            button7.setText("基岩");
                            button7.setTextColor(getColor(255, 150, 0, 255));
                            button7.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 7, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));


                            var button8 = new android.widget.Button(ctx);
                            button8.setText("折跃门方块");
                            button8.setTextColor(getColor(255, 150, 0, 255));
                            button8.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 209, 64, 0);
                                    clientMessage("获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button9 = new android.widget.Button(ctx);
                            button9.setText("下界反应核");
                            button9.setTextColor(getColor(255, 150, 0, 255));
                            button9.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 247, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));



                            var button10 = new android.widget.Button(ctx);
                            button10.setText("发光黑曜石");
                            button10.setTextColor(getColor(255, 150, 0, 255));
                            button10.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 246, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button11 = new android.widget.Button(ctx);
                            button11.setText("NPC蛋码1");
                            button11.setTextColor(getColor(255, 150, 0, 255));
                            button11.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 258);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button12 = new android.widget.Button(ctx);
                            button12.setText("NPC蛋码2");
                            button12.setTextColor(getColor(255, 150, 0, 255));
                            button12.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 259);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button13 = new android.widget.Button(ctx);
                            button13.setText("NPC蛋码3");
                            button13.setTextColor(getColor(255, 150, 0, 255));
                            button13.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 383, 64, 352);
                                    clientMessage("获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button14 = new android.widget.Button(ctx);
                            button14.setText("钻石剑");
                            button14.setTextColor(getColor(255, 150, 0, 255));
                            button14.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 276, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button22 = new android.widget.Button(ctx);
                            button22.setText("钻石镐");
                            button22.setTextColor(getColor(255, 150, 0, 255));
                            button22.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 278, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button26 = new android.widget.Button(ctx);
                            button26.setText("弩");
                            button26.setTextColor(getColor(255, 150, 0, 255));
                            button26.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 471, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button15 = new android.widget.Button(ctx);
                            button15.setText("钻石帽子");
                            button15.setTextColor(getColor(255, 150, 0, 255));
                            button15.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 310, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button16 = new android.widget.Button(ctx);
                            button16.setText("钻石胸甲");
                            button16.setTextColor(getColor(255, 150, 0, 255));
                            button16.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 311, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button17 = new android.widget.Button(ctx);
                            button17.setText("钻石护腿");
                            button17.setTextColor(getColor(255, 150, 0, 255));
                            button17.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 312, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button18 = new android.widget.Button(ctx);
                            button18.setText("钻石靴子");
                            button18.setTextColor(getColor(255, 150, 0, 255));
                            button18.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 313, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button21 = new android.widget.Button(ctx);
                            button21.setText("不死图腾");
                            button21.setTextColor(getColor(255, 150, 0, 255));
                            button21.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 450, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            var button23 = new android.widget.Button(ctx);
                            button23.setText("鞘翅");
                            button23.setTextColor(getColor(255, 150, 0, 255));
                            button23.setOnClickListener(new android.view.View.OnClickListener({
                                onClick: function() {

                                    Entity.setCarriedItem(Player.getEntity(), 444, 64, 0);
                                    clientMessage("§b获取成功");
                                    window.dismiss();
                                }
                            }));

                            layout6.addView(text);
                            layout6.addView(button1);
                            layout6.addView(button2);
                            layout6.addView(button3);
                            layout6.addView(button4);
                            layout6.addView(button5);
                            layout6.addView(button6);
                            layout6.addView(button19);
                            layout6.addView(button20);
                            layout6.addView(button7);
                            layout6.addView(button8);
                            layout6.addView(button9);
                            layout6.addView(button10);
                            layout6.addView(button11);
                            layout6.addView(button12);
                            layout6.addView(button13);
                            layout6.addView(button14);
                            layout6.addView(button22);
                            layout6.addView(button26);
                            layout6.addView(button15);
                            layout6.addView(button16);
                            layout6.addView(button17);
                            layout6.addView(button18);
                            layout6.addView(button21);
                            layout6.addView(button23);
                            window.setContentView(scroll);
                            window.show();
                        }
                    }))
                }

                function getColor(r, y, b, a) {
                    return android.graphics.Color.argb(a, r, y, b)
                }

                function fileSelect() {
                    ctx.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            var dialog;
                            var path = "/sdcard/";
                            //创建listview并设置列表
                            var listview = new android.widget.ListView(ctx);
                            var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1);
                            update(path);
                            listview.setAdapter(adapter);
                            //设置列表点击事件
                            listview.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener() {
                                    onItemClick: function(a, b, c, d) {
                                        var item = a.getItemAtPosition(c).toString();
                                        if (item.split(" ")[0].equals("🗂️")) {
                                            //若点击文件夹
                                            var dirname = "";
                                            for (i = 1; i < item.split(" ").length; i++)
                                                dirname += item.split(" ")[i];
                                            update(path + dirname + "/");
                                        } else if (item.split(" ")[0].equals("📃")) {
                                            //若点击文件
                                            var filename = "";
                                            for (i = 1; i < item.split(" ").length; i++)
                                                filename += item.split(" ")[i];
                                            filename = path + filename;
                                            runJs(filename);
                                            //这就是输出文件的路径
                                            dialog.dismiss();
                                        } else {
                                            //若点击返回上一级
                                            var newpath = "/";
                                            for (i = 1; i < path.split("/").length - 2; i++)
                                                newpath += path.split("/")[i] + "/";
                                            update(newpath);
                                        }
                                    }
                                })
                                //创建dialog
                            var builder = new android.app.AlertDialog.Builder(ctx);
                            builder.setTitle("选择文件");
                            builder.setView(listview);
                            dialog = builder.create();
                            dialog.show();

                            function update(p) {
                                //更新文件列表
                                path = p;
                                adapter.clear();
                                file = new java.io.File(path);
                                files = orderByName(file.listFiles());
                                if (path != "/sdcard/")
                                    adapter.add(" ...  返回上一级");
                                for (i in files) {
                                    if (files[i].isDirectory())
                                        adapter.add("🗂️ " + files[i].toString().split("/")[files[i].toString().split("/").length - 1]);
                                    else
                                        adapter.add("📃 " + files[i].toString().split("/")[files[i].toString().split("/").length - 1]);
                                }
                            }
                        }
                    });
                }

                function orderByName(files) {
                    //文件列表排序(按名称)
                    var fileList = java.util.Arrays.asList(files);
                    java.util.Collections.sort(fileList, new java.util.Comparator() {
                        compare: function(o1, o2) {
                            if (o1.isDirectory() && o2.isFile())
                                return -1;
                            if (o1.isFile() && o2.isDirectory())
                                return 1;
                            return o1.getName().compareTo(o2.getName());
                        }
                    });
                    return files;
                }

                function runJs(path) {
                    ctx.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                var reader = new java.io.FileReader(path);
                                var buffer = new java.io.BufferedReader(reader);
                                var str = "";
                                var code = "";
                                while ((str = buffer.readLine()) != null) {
                                    var strr = str.split(" ");
                                    for (i in strr) {
                                        if (strr[i].equals("const")) strr[i] = "var";
                                    }
                                    code += strr.join(" ") + "\n";
                                }
                                reader.close();
                                buffer.close();
                                eval(code);
                            } catch (err) {
                                print(err);
                            }
                        }
                    });
                }




                MC = {
                    getAllPlayers: function() {
                        var e = Entity.getAll();
                        var players = new Array();
                        for (var i = 0; i < e.length; i++) {
                            if (Player.isPlayer(e[i]))
                                players.push(e[i]);
                        }
                        print(e.length + "," + e[0] + "," + e[length - 1]);
                        return players;
                    },

                }



                //PVP功能
                function PVP() {

                    try {
                        clientMessage("§b长按可改变按钮位置哦")
                        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                        ctx.runOnUiThread(new java.lang.Runnable({
                            run: function() {

                                //踏空
                                var win1 = new android.widget.PopupWindow();
                                var layout1 = new android.widget.LinearLayout(ctx);
                                win1.dismiss();


                                var GUI1 = new GD();
                                GUI1.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                                GUI1.setCornerRadius(5);
                                layout1.setBackground(GUI1);

                                var text = new android.widget.Button(ctx)
                                text.setText("踏")
                                text.setTextColor(getColor(247, 255, 38, 255));
                                text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                                text.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        Entity.setVelY(getPlayerEnt(), 0.43)
                                    }
                                });


                                text.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                                    onLongClick: function(v, t) {
                                        downa = true;
                                        var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                        vibrator.vibrate(40);
                                        return true
                                    }
                                });
                                text.setOnTouchListener(new android.view.View.OnTouchListener() {
                                    onTouch: function(v, e) {
                                        if (!downa) {
                                            mX = e.getX();
                                            mY = e.getY()
                                        }
                                        if (downa) {
                                            var a = e.getAction();
                                            if (a == 2) {
                                                var delX = parseInt(e.getX() - mX) * -1 / 10;
                                                var delY = parseInt(e.getY() - mY) * -1 / 10;
                                                tpopx = tpopx + delX;
                                                tpopy = tpopy - delY;
                                                win1.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                            }
                                            if (a == 1) downa = false;
                                        }
                                        return false;
                                    }
                                });




                                layout1.addView(text);
                                win1.setContentView(layout1);
                                win1.setWidth(140);
                                win1.setHeight(111);
                                win1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                                win1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 145, 830);
                            }
                        }));


                        //冲刺
                        var win2 = new android.widget.PopupWindow();
                        var layout2 = new android.widget.LinearLayout(ctx);
                        win2.dismiss();
                        var GUI2 = new GD();
                        GUI2.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI2.setCornerRadius(5);
                        layout2.setBackground(GUI2);

                        var text = new android.widget.Button(ctx)
                        text.setText("冲刺")
                        text.setTextColor(getColor(247, 255, 38, 255));
                        text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        text.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                sprint();
                            }
                        });

                        text.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        text.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win2.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout2.addView(text);
                        win2.setContentView(layout2);
                        win2.setWidth(160);
                        win2.setHeight(120);
                        win2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1900, 570);

                        //设点
                        var win3 = new android.widget.PopupWindow();
                        var layout3 = new android.widget.LinearLayout(ctx);
                        win3.dismiss();
                        var GUI3 = new GD();
                        GUI3.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI3.setCornerRadius(5);
                        layout3.setBackground(GUI3);
                        var button = new android.widget.Button(ctx);
                        button.setText("设点")
                        button.setTextColor(getColor(247, 255, 38, 255));
                        button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        button.setOnClickListener(new android.view.View.OnClickListener({
                            onClick: function(viewarg) {
                                xtp = Player.getX()
                                ytp = Player.getY()
                                ztp = Player.getZ()
                                clientMessage("§e已设置传送点")
                            }
                        }));


                        button.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        button.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win3.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout3.addView(button);
                        win3.setContentView(layout3);
                        win3.setWidth(160);
                        win3.setHeight(120);
                        win3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 320, 100);

                        //回点
                        var win4 = new android.widget.PopupWindow();
                        var layout4 = new android.widget.LinearLayout(ctx);
                        win4.dismiss();
                        var GUI4 = new GD();
                        GUI4.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI4.setCornerRadius(5);
                        layout4.setBackground(GUI4);
                        var button = new android.widget.Button(ctx);
                        button.setText("回点")
                        button.setTextColor(getColor(247, 255, 38, 255));
                        button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        button.setOnClickListener(new android.view.View.OnClickListener({
                            onClick: function(viewarg) {

                                try {
                                    if (xtp == null) {
                                        clientMessage("§b你还没有设置传送点哦")
                                    } else {
                                        setPosition(getPlayerEnt(), xtp, ytp, ztp)
                                        clientMessage("§e传送成功")
                                    }
                                } catch (err) {
                                    print("err");
                                }
                            }
                        }));

                        button.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        button.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win4.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });

                        layout4.addView(button);
                        win4.setContentView(layout4);
                        win4.setWidth(160);
                        win4.setHeight(120);
                        win4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 500, 100);


                        //腾跃
                        var win5 = new android.widget.PopupWindow();
                        var layout5 = new android.widget.LinearLayout(ctx);
                        win5.dismiss();
                        var GUI5 = new GD();
                        GUI5.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI5.setCornerRadius(5);
                        layout5.setBackground(GUI5);

                        var text = new android.widget.Button(ctx)
                        text.setText("跃")
                        text.setTextColor(getColor(247, 255, 38, 255));
                        text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        text.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                Entity.setVelY(getPlayerEnt(), 1)

                            }
                        });


                        text.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        text.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win5.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });



                        layout5.addView(text);
                        win5.setContentView(layout5);
                        win5.setWidth(140);
                        win5.setHeight(111);
                        win5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 145, 260);

                        //后撤
                        var win6 = new android.widget.PopupWindow();
                        var layout6 = new android.widget.LinearLayout(ctx);
                        win6.dismiss();
                        var GUI6 = new GD();
                        GUI6.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI6.setCornerRadius(5);
                        layout6.setBackground(GUI6);

                        var text = new android.widget.Button(ctx)
                        text.setText("后撤")
                        text.setTextColor(getColor(247, 255, 38, 255));
                        text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        text.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                stepback();
                            }
                        });


                        text.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        text.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win6.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout6.addView(text);
                        win6.setContentView(layout6);
                        win6.setWidth(160);
                        win6.setHeight(120);
                        win6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1900, 430);

                        //自瞄
                        var win7 = new android.widget.PopupWindow();
                        var layout7 = new android.widget.LinearLayout(ctx);
                        win7.dismiss();
                        var GUI7 = new GD();
                        GUI7.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI7.setCornerRadius(5);
                        layout7.setBackground(GUI7);
                        var kaiguan1 = new android.widget.Switch(ctx);
                        kaiguan1.setChecked(AutoAim);
                        kaiguan1.setText("自瞄");
                        kaiguan1.setTextColor(getColor(247, 255, 38, 255));
                        kaiguan1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        kaiguan1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
                            onCheckedChanged: function(v, checked) {

                                if (AutoAim == false) {
                                    AutoAim = true;
                                    clientMessage("§a自瞄已部署")
                                } else
                                if (AutoAim == true) {
                                    AutoAim = false;
                                    clientMessage("§c自瞄已关闭")
                                };



                            }
                        });


                        kaiguan1.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        kaiguan1.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win7.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout7.addView(kaiguan1);
                        win7.setContentView(layout7);
                        win7.setWidth(200);
                        win7.setHeight(120);
                        win7.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win7.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1160, 100);

                        //长臂猿
                        var win8 = new android.widget.PopupWindow();
                        var layout8 = new android.widget.LinearLayout(ctx);
                        win8.dismiss();
                        var GUI8 = new GD();
                        GUI8.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI8.setCornerRadius(5);
                        layout8.setBackground(GUI8);
                        var kaiguan2 = new android.widget.Switch(ctx);
                        kaiguan2.setChecked(Longarm);
                        kaiguan2.setText("长臂");
                        kaiguan2.setTextColor(getColor(247, 255, 38, 255));
                        kaiguan2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        kaiguan2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
                            onCheckedChanged: function(v, checked) {

                                if (Longarm == false) {
                                    Longarm = true;
                                    clientMessage("§a长臂模式开启")
                                } else
                                if (Longarm == true) {
                                    Longarm = false;
                                    Entity.setCollisionSize(ent, 0.6, 1.8);
                                    clientMessage("§c长臂模式关闭")
                                };



                            }
                        });


                        kaiguan2.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        kaiguan2.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win8.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout8.addView(kaiguan2);
                        win8.setContentView(layout8);
                        win8.setWidth(200);
                        win8.setHeight(120);
                        win8.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win8.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1390, 100);



                        //幻术
                        var win9 = new android.widget.PopupWindow();
                        var layout9 = new android.widget.LinearLayout(ctx);
                        win9.dismiss();
                        var GUI9 = new GD();
                        GUI9.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI9.setCornerRadius(5);
                        layout9.setBackground(GUI9);
                        var kaiguan3 = new android.widget.Switch(ctx);
                        kaiguan3.setChecked(Magic);
                        kaiguan3.setText("幻术");
                        kaiguan3.setTextColor(getColor(247, 255, 38, 255));
                        kaiguan3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        kaiguan3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
                            onCheckedChanged: function(v, checked) {

                                if (Magic == false) {
                                    Magic = true;
                                    Entity.setCollisionSize(Player.getEntity(), 0.01, 0.03);
                                    clientMessage("§a你施放了幻术，提高了闪避率");
                                } else
                                if (Magic == true) {
                                    Magic = false;
                                    Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
                                    clientMessage("§c已停止施放幻术")
                                };



                            }
                        });


                        kaiguan3.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        kaiguan3.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win9.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout9.addView(kaiguan3);
                        win9.setContentView(layout9);
                        win9.setWidth(200);
                        win9.setHeight(120);
                        win9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1620, 100);



                        //黑洞
                        var win10 = new android.widget.PopupWindow();
                        var layout10 = new android.widget.LinearLayout(ctx);
                        win10.dismiss();
                        var GUI10 = new GD();
                        GUI10.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI10.setCornerRadius(5);
                        layout10.setBackground(GUI10);
                        var kaiguan6 = new android.widget.Switch(ctx);
                        kaiguan6.setChecked(AutoTP);
                        kaiguan6.setText("黑洞");
                        kaiguan6.setTextColor(getColor(247, 255, 38, 255));
                        kaiguan6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        kaiguan6.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
                            onCheckedChanged: function(v, checked) {

                                if (AutoTP == false) {
                                    AutoTP = true;

                                    clientMessage("§d黑洞已开启，正在吸取玩家");
                                } else
                                if (AutoTP == true) {
                                    AutoTP = false;

                                    clientMessage("§e黑洞已关闭")
                                };



                            }
                        });


                        kaiguan6.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        kaiguan6.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win10.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout10.addView(kaiguan6);
                        win10.setContentView(layout10);
                        win10.setWidth(200);
                        win10.setHeight(120);
                        win10.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win10.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 930, 100);




                        //搭路
                        var win12 = new android.widget.PopupWindow();
                        var layout12 = new android.widget.LinearLayout(ctx);
                        win12.dismiss();
                        var GUI12 = new GD();
                        GUI12.setStroke(10, android.graphics.Color.argb(200, 221, 0, 100));
                        GUI12.setCornerRadius(5);
                        layout12.setBackground(GUI12);
                        var kaiguan8 = new android.widget.Switch(ctx);
                        kaiguan8.setChecked(Flick);
                        kaiguan8.setText("搭路");
                        kaiguan8.setTextColor(getColor(247, 255, 38, 255));
                        kaiguan8.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        kaiguan8.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
                            onCheckedChanged: function(v, checked) {

                                if (Flick == false) {
                                    Flick = true;

                                    clientMessage("§d搭路模式启动，你可以遨游天空了");
                                } else
                                if (Flick == true) {
                                    Flick = false;

                                    clientMessage("§e搭路模式已关闭")
                                };



                            }
                        });


                        kaiguan8.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                            onLongClick: function(v, t) {
                                downa = true;
                                var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
                                vibrator.vibrate(40);
                                return true
                            }
                        });
                        kaiguan8.setOnTouchListener(new android.view.View.OnTouchListener() {
                            onTouch: function(v, e) {
                                if (!downa) {
                                    mX = e.getX();
                                    mY = e.getY()
                                }
                                if (downa) {
                                    var a = e.getAction();
                                    if (a == 2) {
                                        var delX = parseInt(e.getX() - mX) * -1 / 10;
                                        var delY = parseInt(e.getY() - mY) * -1 / 10;
                                        tpopx = tpopx + delX;
                                        tpopy = tpopy - delY;
                                        win12.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
                                    }
                                    if (a == 1) downa = false;
                                }
                                return false;
                            }
                        });


                        layout12.addView(kaiguan8);
                        win12.setContentView(layout12);
                        win12.setWidth(200);
                        win12.setHeight(120);
                        win12.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
                        win12.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 700, 100);




                    } catch (err) {
                        print("err");
                    }
                }


                function sprint() {
                    var xaw = (getYaw() % 360) * Math.PI / 180;
                    xv = -Math.sin(xaw)
                    zv = Math.cos(xaw)
                    setVelX(getPlayerEnt(), xv);
                    setVelY(getPlayerEnt(), 0.3);
                    setVelZ(getPlayerEnt(), zv);
                }


                function stepback() {
                    var xaw = (getYaw() % 360) * Math.PI / 180;
                    xv = -Math.sin(xaw)
                    zv = Math.cos(xaw)
                    setVelX(getPlayerEnt(), -xv);
                    setVelY(getPlayerEnt(), 0.3);
                    setVelZ(getPlayerEnt(), -zv);
                }

                function thanks() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                /*在此添加android组件*/

                                var textView = new android.widget.TextView(ctx);
                                textView.setText("      特别鸣谢合作伙伴      " + "\n" + "     段子  " + "  QQ：1415988060    " + "\n" + "     黑XXWIN  " + "  QQ：2049801840    ")
                                textView.setMarqueeRepeatLimit(java.lang.Integer.MAX_VALUE);
                                textView.setFocusable(true);
                                textView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                                textView.setSingleLine();
                                textView.setFocusableInTouchMode(true);
                                textView.setHorizontallyScrolling(true);

                                var dialog = new android.app.AlertDialog.Builder(ctx)
                                dialog.setView(textView)
                                dialog.show()

                            } catch (err) {
                                print(err)
                            }
                        }
                    }));
                }



                /*上网*/

                var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); ctx.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        webview = new WebView(ctx);
                        urltext = new EditText(ctx);
                        urltext.setLines(1);
                        urltext.setHint("输入URL...");
                        urltext.setInputType(android.text.InputType.TYPE_TEXT_VARIATION_URI)
                        urltext.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
                        layout = new LinearLayout(ctx);
                        layout.setOrientation(LinearLayout.VERTICAL);
                        layout.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.FILL_PARENT));
                        layout.setBackgroundColor(android.graphics.Color.parseColor("#ffffff"));
                        layout2 = new LinearLayout(ctx);
                        layout2.setOrientation(LinearLayout.HORIZONTAL);
                        button = new Button(ctx);
                        button.setText("转到");
                        button.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                webview.loadUrl(urltext.getText().toString().contains("https://") || urltext.getText().toString().contains("http://") ? urltext.getText().toString() : "http://" + urltext.getText().toString());
                            }
                        });
                        button2 = new Button(ctx);
                        button2.setText("上一页");
                        button2.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                webview.goBack();
                            }
                        });

                        button3 = new Button(ctx);
                        button3.setText("关闭");
                        button3.setOnClickListener(new android.view.View.OnClickListener() {
                            onClick: function(v) {
                                searcher.dismiss();
                            }
                        });

                        layout2.addView(button3);
                        layout2.addView(button2);
                        layout2.addView(button);
                        layout2.addView(urltext);
                        layout.addView(layout2);
                        layout.addView(webview);
                        var width = ctx.getResources().getDisplayMetrics().widthPixels;
                        var height = ctx.getResources().getDisplayMetrics().heightPixels;
                        searcher = new PopupWindow(layout);
                        searcher.setWidth(width);
                        searcher.setHeight(height);
                        searcher.setFocusable(true);
                        webview.getSettings().setJavaScriptEnabled(true)
                        webview.setWebViewClient(new WebViewClient);
                        webview.setWebChromeClient(new WebChromeClient());
                        searcher.setContentView(layout);
                        webview.loadUrl("https://minecraft-zh.gamepedia.com/基岩版数据值");
                    }
                });




                function getNearestEntity(maxrange) {

                    var players = Server.getAllPlayers();
                    var compare = maxrange;
                    var ent = null;
                    for (var i = 0; i < players.length; i++) {
                        var x = Entity.getX(players[i]) - getPlayerX();
                        var y = Entity.getY(players[i]) - getPlayerY();
                        var z = Entity.getZ(players[i]) - getPlayerZ();
                        var entnametag = Entity.getNameTag(players[i]);
                        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
                        if (dist < compare && dist > 0 && Entity.getHealth(players[i]) >= 1) {

                            compare = dist;
                            ent = players[i];

                        }
                    }
                    return ent;
                };




                function AimAt(ent, pos) {
                    if (ent != null) {
                        var x = Entity.getX(ent) - getPlayerX();
                        var y = Entity.getY(ent) - getPlayerY();
                        var z = Entity.getZ(ent) - getPlayerZ();
                        if (pos != null && pos instanceof Array) {

                            x = Entity.getX(ent) - pos[0];
                            y = Entity.getY(ent) - pos[1];
                            z = Entity.getZ(ent) - pos[2];
                        }
                        if (Entity.getEntityTypeId(ent) != 63)
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
                        if (pitch < 89 && pitch > -89) {
                            Entity.setRot(Player.getEntity(), yaw, pitch);
                        }
                    }
                };



                DrawIcon(ScreenWidth, 0.5 * ScreenHeight - dip2px(40));
                ";