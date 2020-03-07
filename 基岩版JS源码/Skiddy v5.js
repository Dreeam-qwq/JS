//感谢 @南风 大佬付出
//魔改:我的丿心语
//QQ:3298537709
//群:636967743
//禁止盗该
//如有错误，欢迎提出
//原开发者:KOIKOI
//新增了传送系统
//新增了快捷飞行

var xxx, yyy, zzz;
var ctx = com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get']();
var Button = android['widget']['Button'];
var LinearLayout = android['widget']['LinearLayout'];
var RelativeLayout = android['widget']['RelativeLayout'];
var PopupWindow = android['widget']['PopupWindow'];
var ScrollView = android['widget']['ScrollView'];
var TextView = android['widget']['TextView'];
var CheckBox = android['widget']['CheckBox'];
var Switch = android['widget']['Switch'];
var Toast = android['widget']['Toast'];
var Runnable = java['lang']['Runnable'];
var View = android['view']['View'];
var ColorDrawable = android['graphics']['drawable']['ColorDrawable'];
var Color = android['graphics']['Color'];
var Gravity = android['view']['Gravity'];
var Intent = android['content']['Intent'];
var Uri = android['net']['Uri'];
ModPE['langEdit']('menu.copyright', '§4Skiddy§6黑客端:§e81插件已加载，汉化:心语');
var bg = new android['graphics']['drawable'].GradientDrawable();
bg['setColor'](android['graphics']['Color'].RED);
bg['setStroke'](4, android['graphics']['Color']['rgb'](255, 0, 255));
bg['setCornerRadius'](2);
var ibg = new android['graphics']['drawable'].GradientDrawable();
ibg['setColor'](android['graphics']['Color'].BLACK);
ibg['setStroke'](5, android['graphics']['Color'].RED);
var mbg = new android['graphics']['drawable'].GradientDrawable();
mbg['setColor'](android['graphics']['Color'].BLACK);
mbg['setStroke'](4, android['graphics']['Color']['rgb'](255, 64, 0));
mbg['setCornerRadius'](2);
var fbg = new android['graphics']['drawable'].GradientDrawable();
fbg['setColor'](android['graphics']['Color'].BLACK);
fbg['setStroke'](5, android['graphics']['Color'].RED);
fbg['setCornerRadius'](3);
var xbg = new android['graphics']['drawable'].GradientDrawable();
xbg['setColor'](android['graphics']['Color'].MAGENTA);
xbg['setStroke'](4, android['graphics']['Color']['rgb'](255, 0, 255));
xbg['setCornerRadius'](2);
var nbg = new android['graphics']['drawable'].GradientDrawable();
nbg['setColor'](android['graphics']['Color'].BLACK);
nbg['setAlpha'](100);
var nnbg = new android['graphics']['drawable'].GradientDrawable();
nnbg['setColor'](android['graphics']['Color'].MAGENTA);
nnbg['setStroke'](4, android['graphics']['Color']['rgb'](0, 128, 128));
var iibg = new android['graphics']['drawable'].GradientDrawable();
iibg['setColor'](android['graphics']['Color'].BLACK);
iibg['setAlpha'](250);
iibg['setStroke'](2, android['graphics']['Color'].RED);
var abg = new android['graphics']['drawable'].GradientDrawable();
abg['setAlpha'](150);
abg['setColor'](android['graphics']['Color'].BLACK);
abg['setStroke'](4, android['graphics']['Color']['rgb'](255, 128, 0));
var gmbg = new android['graphics']['drawable'].GradientDrawable();
gmbg['setColor'](android['graphics']['Color'].RED);
gmbg['setStroke'](2, android['graphics']['Color']['rgb'](255, 0, 255));
gmbg['setCornerRadius'](2);
var jbg = new android['graphics']['drawable'].GradientDrawable();
jbg['setColor'](android['graphics']['Color'].RED);
jbg['setStroke'](10, android['graphics']['Color']['rgb'](255, 0, 255));
jbg['setCornerRadius'](4);
var destructbg = new android['graphics']['drawable'].GradientDrawable();
destructbg['setColor'](android['graphics']['Color'].RED);
destructbg['setStroke'](4, android['graphics']['Color']['rgb'](255, 0, 255));
var theme = nnbg;
var theme1 = mbg;
var module = nbg;
var Utils = {
    Block: {
        isLiquid: function(_0x2bf6x22) {
            if (_0x2bf6x22 >= 8 && _0x2bf6x22 <= 11) {
                return true
            };
            return false
        },
        fastBreak: function() {
            for (i = 0; i < 256; i++) {
                Block['setDestroyTime'](i, 0)
            }
        },
        isLadder: function(_0x2bf6x22) {
            if (_0x2bf6x22 == 65) {
                return true
            };
            return false
        }
    },
    Velocity: {
        calculateSpeed: function() {
            return Math['sqrt'](Math['pow'](Entity['getVelX'](getPlayerEnt()), 2) + Math['pow'](Entity['getVelZ'](getPlayerEnt()), 2))
        }
    },
    Text: {
        replaceAll: function(_0x2bf6x23, _0x2bf6x24, _0x2bf6x25) {
            var _0x2bf6x26 = _0x2bf6x25;
            return _0x2bf6x26['replace'](new RegExp(_0x2bf6x23, 'g'), _0x2bf6x24)
        }
    },
    Player: {
        isInWater: function() {
            if (Utils['Block']['isLiquid'](getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isOnLadder: function() {
            if (Utils['Block']['isLadder'](getTile(getPlayerX(), getPlayerY() + 0.001, getPlayerZ()))) {
                return true
            } else {
                return false
            }
        },
        isOnGround: function() {
            var _0x2bf6x27 = Entity['getY'](getPlayerEnt());
            while (_0x2bf6x27 > 1) {
                _0x2bf6x27 -= 1
            };
            if ((Math['round'](_0x2bf6x27 * 100) >= 61 && Math['round'](_0x2bf6x27 * 100) <= 63) && getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())) != 0 && !Utils['Block']['isLiquid'](getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())))) {
                return true
            };
            if ((Math['round'](_0x2bf6x27 * 100) >= 11 && Math['round'](_0x2bf6x27 * 100) <= 13) && getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())) != 0 && !Utils['Block']['isLiquid'](getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x2bf6x28 = Entity['getX'](getPlayerEnt());
            var _0x2bf6x29 = Entity['getZ'](getPlayerEnt());
            var _0x2bf6x2a = Math['round'](_0x2bf6x28 - 0.5);
            var _0x2bf6x2b = Math['round'](_0x2bf6x29 - 0.5);
            while (_0x2bf6x28 < 1) {
                _0x2bf6x28 += 1
            };
            while (_0x2bf6x29 < 1) {
                _0x2bf6x29 += 1
            };
            while (_0x2bf6x28 > 1) {
                _0x2bf6x28 -= 1
            };
            while (_0x2bf6x29 > 1) {
                _0x2bf6x29 -= 1
            };
            if (Math['round'](_0x2bf6x28 * 100) == 31) {
                _0x2bf6x28 -= 0.01
            };
            if (Math['round'](_0x2bf6x29 * 100) == 31) {
                _0x2bf6x29 -= 0.01
            };
            if (Math['round'](_0x2bf6x28 * 100) == 69) {
                _0x2bf6x28 += 0.01
            };
            if (Math['round'](_0x2bf6x29 * 100) == 69) {
                _0x2bf6x29 += 0.01
            };
            if (Math['round'](_0x2bf6x28 * 100) == 30) {
                _0x2bf6x2a--
            };
            if (Math['round'](_0x2bf6x29 * 100) == 30) {
                _0x2bf6x2b--
            };
            if (Math['round'](_0x2bf6x28 * 100) == 70) {
                _0x2bf6x2a++
            };
            if (Math['round'](_0x2bf6x29 * 100) == 70) {
                _0x2bf6x2b++
            };
            if (getTile(_0x2bf6x2a, Entity['getY'](getPlayerEnt()), _0x2bf6x2b) == 0 && getTile(_0x2bf6x2a, Entity['getY'](getPlayerEnt()) - 1, _0x2bf6x2b) == 0) {
                return false
            };
            if (Block['getDestroyTime'](getTile(_0x2bf6x2a, Entity['getY'](getPlayerEnt()) - 1, _0x2bf6x2b)) <= 0.1 && Block['getDestroyTime'](getTile(_0x2bf6x2a, Entity['getY'](getPlayerEnt()), _0x2bf6x2b)) <= 0.1) {
                return false
            };
            if (Math['round'](_0x2bf6x28 * 100) == 30 || Math['round'](_0x2bf6x28 * 100) == 70) {
                return true
            };
            if (Math['round'](_0x2bf6x29 * 100) == 30 || Math['round'](_0x2bf6x29 * 100) == 70) {
                return true
            };
            return false
        }
    }
};
var GUI;
var GUIj;
var GUIe;
var GUIr;
var GUIa;
var GUIg;
var GUIz;
var GUIs;
var GUIv;
var menu;
var menu1;
var menu2;
var menu3;
var menu4;
var exitUI;
var exitcombatUI;
var exitmotionUI;
var exitplayerUI;
var exitmiscUI;
var gmChange = Level['getGameMode']();
var clr = '§';
var fct = '§l§4[§r§6Skiddy§l§4§l]§r§6: ';
var team = new Array();
var leaveG = true;
var VERSION = 'V5';
var NAME = 'skiddy';
var DEVELOPERS = '心语汉化';
var MODULES = 'V5';
var isDev = false;
var canBeDev = false;
var bypasshitbox;
var bypasshitboxs = false;
var bypasshitboxed = false;
var inpvpfly;
var inpvpflys = false;
var inpvpflyed = false;
var mineplexspeed;
var mineplexspeeds = false;
var mineplexspeeded = false;
var mineplexfly;
var mineplexflys = false;
var mineplexflyed = false;
var hitbox;
var hitboxs = false;
var hitboxed = false;
var antikbs;
var antikbss = false;
var antikbed = false;
var attKbTick;
var kbTick;
var kbHealth;
var ndglides;
var ndglidess = false;
var ndglideed = false;
var aimbots;
var aimbotss = false;
var aimboted = false;
var reachs;
var reachss = false;
var reached = false;
var switchreachs;
var switchreached = false;
var sreached = false;
var switchaims;
var switchaimed = false;
var saimed = false;
var grapples;
var grappless = false;
var grappleed = false;
var autoswords;
var autoswordss = false;
var autosworded = false;
var steps;
var stepss = false;
var steped = false;
var csteps;
var cstepss = false;
var csteped = false;
var criticalss;
var criticales = false;
var criticalsed = false;
var critTick = 0;
var criticalTick = 0;
var tapjumps;
var tapjumpss = false;
var tapjumped = false;
var taptps;
var taptpss = false;
var taptped = false;
var speeds;
var speedss = false;
var speeded = false;
var brightblockss;
var brightblocksed = false;
var blockDataValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81, 82, 83, 85, 87, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255];
var zoomspeeds;
var zoomspeedss = false;
var zoomspeeded = false;
var jumpspeeds;
var jumpspeedss = false;
var jumpspeeded = false;
var upglides;
var upglidess = false;
var upglideed = false;
var bowaimbots;
var bowaimbotss = false;
var bowaimboted = false;
var criticaltrailss;
var criticaltrailsss = false;
var criticaltrailsed = false;
var highjumps;
var highjumpss = false;
var highjumped = false;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var derps;
var derpss = false;
var derped = false;
var twerks;
var twerkss = false;
var twerked = false;
var tCounter = 0;
var backfaces;
var backfacess = false;
var backfaceed = false;
var autowalks;
var autowalkss = false;
var autowalked = false;
var jetpacks;
var jetpackss = false;
var jetpacked = false;
var cspeeds;
var cspeedss = false;
var cspeeded = false;
var airjumps;
var airjumped = false;
var dolphins;
var dolphinss = false;
var dolphined = false;
var fallbacks;
var fallbackss = false;
var fallbacked = false;
var fallbackX = Player['getX']();
var fallbackY = Player['getY']();
var fallbackZ = Player['getZ']();
var timer = 0;
var solidliquids;
var solidliquidss = false;
var solidliquided = false;
var wallhacks;
var wallhackss = false;
var wallhacked = false;
var stealths;
var stealthss = false;
var stealthed = false;
var glides;
var glidess = false;
var glideed = false;
var glideSpeed = 0.3;
var aimassists;
var aimassistss = false;
var aimassisted = false;
var elevators;
var elevatored = false;
var snipers;
var sniperss = false;
var snipered = false;
var bypassglides;
var bypassglidess = false;
var bypassglideed = false;
var bgtick = 0;
var spams;
var spamss = false;
var spamed = false;
var spamTime = 0;
var spamDelay = 3500;
var ln = 0;
var spamText = 'Remember, no sentence when using !spam';
var hitjumps;
var hitjumpss = false;
var hitjumped = false;
var longhops;
var longhopss = false;
var longhoped = false;
var lhtick = 0;
var placetps;
var placetpss = false;
var placetped = false;
var autoclimbs;
var autoclimbss = false;
var autoclimbed = false;
var acspd = 0.4;
var sglides;
var sglidess = false;
var sglideed = false;
var dmgglides;
var dmgglidess = false;
var dmgglideed = false;
var follows;
var followss = false;
var followed = false;
var forcedestroys;
var forcedestroyss = false;
var forcedestroyed = false;
var fastbreaks;
var fastbreakss = false;
var fastbreaked = false;
var defDestroyTime = [null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0];
var nearwarnings;
var nearwarningss = false;
var nearwarninged = false;
var nwrange = 35;
var fullbrights;
var fullbrightss = false;
var fullbrighted = false;
var leetspeaks;
var leetspeakss = false;
var leetspeaked = false;
var regenerations;
var regenerationss = false;
var regenerationed = false;
var regenX = Player['getX']();
var regenZ = Player['getZ']();
var sregens;
var sregenss = false;
var sregend = false;
var sregened = false;
var lbsgspeeds;
var lbsgspeedss = false;
var lbsgspeeded = false;
var ctrlzooms;
var ctrlzoomed = false;
var zoomed = false;
var escapes;
var escapeed = false;
var frostwalkers;
var frostwalkerss = false;
var frostwalkered = false;
var viewchangers;
var viewchangered = false;
var firepunchs;
var firepunchss = false;
var firepunched = false;
var safewalks;
var safewalkss = false;
var safewalked = false;
var scaffoldwalks;
var scaffoldwalkss = false;
var scaffoldwalked = false;
var arrowdodges;
var arrowdodgess = false;
var arrowdodgeed = false;
var behindhits;
var behindhitss = false;
var behindhited = false;
var sidereachs;
var sidereached = false;
var bedbreakers;
var bedbreakerss = false;
var bedbreakered = false;
var fastfalls;
var fastfallss = false;
var fastfalled = false;
var ghosthands;
var ghosthandss = false;
var ghosthanded = false;
var godmode;
var godmodes = false;
var godmodeed = false;
//来自null
//绕过检测飞行
function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        var win = new android.widget.PopupWindow();
        var layout = new android.widget.LinearLayout(ctx);
        var button = new android.widget.Button(ctx);
        button.setText("飞")
        button.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(v) {
                Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 1, Player.getZ())
                Player.setFlying(true)
                clientMessage("§4飞行绕过检测已开启")
            }
        });
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(110);
        win.setHeight(100);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(128, 18, 3, 66)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 18, 250);
    }
}));
//来自null
//传送大法
function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        var win = new android.widget.PopupWindow();
        var layout = new android.widget.LinearLayout(ctx);
        var button = new android.widget.Button(ctx);
        button.setText("记")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg) {
                xxx = Player.getX()
                yyy = Player.getY()
                zzz = Player.getZ()
                clientMessage("§2传送点已设置 §1按'回'即可回来")
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(110);
        win.setHeight(100);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(128, 18, 3, 66)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 100, 100);
    }
}));

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        var win = new android.widget.PopupWindow();
        var layout = new android.widget.LinearLayout(ctx);
        var button = new android.widget.Button(ctx);
        button.setText("回")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg) {
                if (xxx == null) {
                    clientMessage("§4传送失败 §3您未设置传送点")
                } else {
                    setPosition(getPlayerEnt(), xxx, yyy, zzz)
                    clientMessage("§2传送完毕")
                }
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(110);
        win.setHeight(100);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(128, 18, 3, 66)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 1790, 100);
    }
}));
//结束
//分界线
var tos;

function showChangeLog() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var tosLayout = new android.widget.LinearLayout(ctx);
                var tosScroll = new android.widget.ScrollView(ctx);
                var tosLayout1 = new android.widget.LinearLayout(ctx);
                tosLayout.setOrientation(1);
                tosLayout1.setOrientation(1);
                tosScroll.addView(tosLayout);
                tosLayout1.addView(tosScroll);
                tosLayout.setBackground(bg);

                var tosInfo = new Button(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("新增内容");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new Button(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("新的UI界面");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("新增'跳'字按钮(空中跳跃)");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("新增快捷飞行");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("国际服:指令一定要用英文的'!'来书写哦");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("新增快捷传送功能");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("我们的QQ交流群:257822644");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var yesBtn = new android.widget.Button(ctx);
                yesBtn.setText("退出");
                yesBtn.setTextColor(android.graphics.Color.RED);
                yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                yesBtn.getBackground().setAlpha(150);
                yesBtn.setTextSize(15);
                yesBtn.setGravity(android.view.Gravity.CENTER);
                yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        tos.dismiss();
                    }
                }));
                tosLayout.addView(yesBtn);

                tos = new PopupWindow(tosLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                tos.setAnimationStyle(android.R.style.Animation_InputMethod);
                tos.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                tos.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
            } catch (error) {
                print("An error occured: " + error);
            }
        }
    }));
}
showChangeLog();


function dip2px(_0x2bf6x12e) {
    return Math['ceil'](_0x2bf6x12e * ctx['getResources']()['getDisplayMetrics']()['density'])
}

function showMenuBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x131 = new TextView(ctx);
                if (stealthss) {
                    _0x2bf6x131['setText'](' ')
                } else {
                    _0x2bf6x131['setText']('Skiddy')
                };
                _0x2bf6x131['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x131['setTextSize'](26)
                _0x2bf6x131['setBackground'](bg);
                if (stealthss) {
                    _0x2bf6x131['getBackground']()['setAlpha'](0)
                } else {
                    _0x2bf6x131['getBackground']()['setAlpha'](150)
                };
                _0x2bf6x131['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        mainMenu();
                        exit();
                        if (GUI != null && GUI['isShowing']()) {
                            GUI['dismiss']()
                        }
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x131);
                GUI = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUI['setAnimationStyle'](android['R']['style'].Animation_Dialog);
                GUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['TOP'], 20, 10)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}
showMenuBtn();

function showJumpBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x134 = new TextView(ctx);
                _0x2bf6x134['setText']('跳');
                _0x2bf6x134['setTextSize'](40);
                _0x2bf6x134['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x134['setBackground'](jbg);
                _0x2bf6x134['getBackground']()['setAlpha'](150);
                _0x2bf6x134['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        setVelY(getPlayerEnt(), 0.4)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x134);
                GUIj = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIj['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIj['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 110, 135)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showElevatorBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x136 = new Button(ctx);
                _0x2bf6x136['setText']('上');
                _0x2bf6x136['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x136['setBackground'](theme);
                _0x2bf6x136['setPadding'](10, 10, 10, 10);
                _0x2bf6x136['getBackground']()['setAlpha'](150);
                _0x2bf6x136['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        Entity['setPositionRelative'](getPlayerEnt(), 0, +2.53, 0)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x136);
                var _0x2bf6x137 = new Button(ctx);
                _0x2bf6x137['setText']('下');
                _0x2bf6x137['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x137['setBackground'](theme);
                _0x2bf6x137['setPadding'](10, 10, 10, 10);
                _0x2bf6x137['getBackground']()['setAlpha'](150);
                _0x2bf6x137['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        Entity['setPosition'](getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ())
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x137);
                GUIe = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIe['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIe['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['CENTER'], 0, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showEscapeBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x139 = new Button(ctx);
                _0x2bf6x139['setText']('冲刺');
                _0x2bf6x139['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x139['setBackground'](theme);
                _0x2bf6x139['getBackground']()['setAlpha'](150);
                _0x2bf6x139['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        var _0x2bf6x13a = [0, 0, 0];
                        toDirectionalVector(_0x2bf6x13a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
                        setVelX(getPlayerEnt(), 6 * _0x2bf6x13a[0]);
                        setVelZ(getPlayerEnt(), 6 * _0x2bf6x13a[2])
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x139);
                GUIs = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIs['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIs['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['CENTER'], 0, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showReachSwitch() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x13c = new android['widget'].ToggleButton(ctx);
                _0x2bf6x13c['setText']('假长臂猿');
                _0x2bf6x13c['setTextOn']('假长臂猿');
                _0x2bf6x13c['setTextOff']('假长臂猿');
                _0x2bf6x13c['setChecked'](sreached);
                _0x2bf6x13c['setTextSize'](18);
                _0x2bf6x13c['setBackground'](bg);
                _0x2bf6x13c['getBackground']()['setAlpha'](150);
                _0x2bf6x13c['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x13c['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        if (!sreached) {
                            sreached = true;
                            Level['setGameMode'](1);
                            Player['setCanFly'](false);
                            _0x2bf6x13c['setBackground'](abg)
                        } else {
                            sreached = false;
                            Level['setGameMode'](0);
                            _0x2bf6x13c['setBackground'](bg)
                        };
                        _0x2bf6x13c['setChecked'](sreached)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x13c);
                GUIr = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIr['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIr['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['TOP'], 100, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showAimSwitch() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x13e = new android['widget'].ToggleButton(ctx);
                _0x2bf6x13e['setText']('自瞄');
                _0x2bf6x13e['setTextOn']('自瞄');
                _0x2bf6x13e['setTextOff']('自瞄');
                _0x2bf6x13e['setChecked'](saimed);
                _0x2bf6x13e['setTextSize'](18);
                _0x2bf6x13e['setBackground'](bg);
                _0x2bf6x13e['getBackground']()['setAlpha'](150);
                _0x2bf6x13e['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x13e['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        if (!saimed) {
                            saimed = true;
                            aimbotss = true;
                            _0x2bf6x13e['setBackground'](abg)
                        } else {
                            saimed = false;
                            aimbotss = false;
                            _0x2bf6x13e['setBackground'](bg)
                        };
                        _0x2bf6x13e['setChecked'](saimed)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x13e);
                GUIa = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIa['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIa['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['TOP'], 150 * 3, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showF5Btn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x140 = 0;
                var _0x2bf6x141 = new Button(ctx);
                _0x2bf6x141['setText']('切换视角');
                _0x2bf6x141['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x141['setBackground'](theme);
                _0x2bf6x141['getBackground']()['setAlpha'](150);
                _0x2bf6x141['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        _0x2bf6x140++;
                        if (_0x2bf6x140 > 2) {
                            _0x2bf6x140 = 0
                        };
                        ModPE['setPlayerViewPerspective'](_0x2bf6x140)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x141);
                GUIv = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIv['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIv['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['BOTTOM'], 0, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showZoomSwitch() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x143 = new android['widget'].ToggleButton(ctx);
                _0x2bf6x143['setText']('放大');
                _0x2bf6x143['setTextOn']('放大');
                _0x2bf6x143['setTextOff']('放大');
                _0x2bf6x143['setChecked'](zoomed);
                _0x2bf6x143['setTextSize'](18);
                _0x2bf6x143['setBackground'](bg);
                _0x2bf6x143['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x143['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        if (!zoomed) {
                            zoomed = true;
                            ModPE['setFov'](20);
                            _0x2bf6x143['setBackground'](abg)
                        } else {
                            ModPE['resetFov']();
                            zoomed = false;
                            _0x2bf6x143['setBackground'](bg)
                        };
                        _0x2bf6x143['setChecked'](zoomed)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x143);
                GUIz = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIz['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIz['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['TOP'], 3, 100)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showRegenSwitch() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x130 = new LinearLayout(ctx);
                _0x2bf6x130['setOrientation'](1);
                var _0x2bf6x145 = new android['widget'].ToggleButton(ctx);
                _0x2bf6x145['setText']('定');
                _0x2bf6x145['setTextOn']('定');
                _0x2bf6x145['setTextOff']('定');
                _0x2bf6x145['setChecked'](sregened);
                _0x2bf6x145['setTextSize'](18);
                _0x2bf6x145['setBackground'](bg);
                _0x2bf6x145['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x145['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        if (!sregened) {
                            sregened = true;
                            sregenss = true;
                            _0x2bf6x145['setBackground'](abg)
                        } else {
                            sregened = false;
                            sregenss = false;
                            _0x2bf6x145['setBackground'](bg);
                            ModPE['setGameSpeed'](20);
                            Entity['setImmobile'](Player['getEntity'](), false)
                        };
                        _0x2bf6x145['setChecked'](sregened)
                    }
                }));
                _0x2bf6x130['addView'](_0x2bf6x145);
                GUIg = new PopupWindow(_0x2bf6x130, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIg['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIg['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['TOP'], 3, 230)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function mainMenu() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x147 = new LinearLayout(ctx);
                var _0x2bf6x148 = new ScrollView(ctx);
                var _0x2bf6x149 = new LinearLayout(ctx);
                _0x2bf6x147['setOrientation'](1);
                _0x2bf6x147['setBackground'](theme1);
                _0x2bf6x147['getBackground']()['setAlpha'](150);
                _0x2bf6x149['setOrientation'](1);
                _0x2bf6x148['addView'](_0x2bf6x147);
                _0x2bf6x149['addView'](_0x2bf6x148);
                var scrollText = new android.widget.TextView(ctx);

                scrollText.setText("制作者：Koikoi,由XinYu404汉化");

                scrollText.setTextSize(18);
                scrollText.setTextColor(android.graphics.Color.MAGENTA);

                scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
                scrollText.getBackground().setAlpha(150);

                scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

                scrollText.setMarqueeRepeatLimit(-1);

                scrollText.setSingleLine();

                scrollText.setHorizontallyScrolling(true);

                scrollText.setSelected(true);

                _0x2bf6x147['addView'](scrollText);
                var _0x2bf6x14a = new TextView(ctx);
                _0x2bf6x14a['setTextSize'](20);
                _0x2bf6x14a['setText'](NAME + ' ' + VERSION);
                _0x2bf6x14a['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x14a['setGravity'](Gravity.CENTER);
                _0x2bf6x147['addView'](_0x2bf6x14a);
                var _0x2bf6x14b = new TextView(ctx);
                _0x2bf6x14b['setTextSize'](15);
                _0x2bf6x14b['setText']('XinYu汉化 版本 ' + MODULES);
                _0x2bf6x14b['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                _0x2bf6x14b['setGravity'](Gravity.CENTER);
                _0x2bf6x147['addView'](_0x2bf6x14b);
                var _0x2bf6x14c = new TextView(ctx);
                _0x2bf6x14c['setText']('战斗');
                _0x2bf6x14c['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x14c['setTextSize'](24);
                _0x2bf6x14c['setBackground'](theme);
                _0x2bf6x14c['getBackground']()['setAlpha'](100);
                _0x2bf6x14c['setGravity'](Gravity.CENTER);
                _0x2bf6x14c['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        _0x2bf6x14d();
                        exitcombat();
                        if (menu != null && menu['isShowing']()) {
                            menu['dismiss']()
                        };
                        if (GUI != null && GUI['isShowing']()) {
                            GUI['dismiss']()
                        };
                        exitUI['dismiss']()
                    }
                }));
                _0x2bf6x147['addView'](_0x2bf6x14c);

                function _0x2bf6x14d() {
                    ctx['runOnUiThread'](new Runnable({
                        run: function() {
                            try {
                                var _0x2bf6x147 = new LinearLayout(ctx);
                                var _0x2bf6x148 = new ScrollView(ctx);
                                var _0x2bf6x149 = new LinearLayout(ctx);
                                _0x2bf6x147['setOrientation'](1);
                                _0x2bf6x147['setBackground'](theme);
                                _0x2bf6x147['getBackground']()['setAlpha'](120);
                                _0x2bf6x149['setOrientation'](1);
                                _0x2bf6x148['addView'](_0x2bf6x147);
                                _0x2bf6x149['addView'](_0x2bf6x148);
                                var _0x2bf6x14e = new TextView(ctx);
                                _0x2bf6x14e['setTextSize'](20);
                                _0x2bf6x14e['setText']('-| 战斗 |-');
                                _0x2bf6x14e['setTextColor'](android['graphics']['Color'].MAGENTA);
                                _0x2bf6x14e['setBackgroundDrawable'](new ColorDrawable(Color.BLACK));
                                _0x2bf6x14e['getBackground']()['setAlpha'](120);
                                _0x2bf6x14e['setGravity'](Gravity.CENTER);
                                _0x2bf6x147['addView'](_0x2bf6x14e);

                                var godmode = new Switch(ctx);
                                godmode['setText']('神模式');
                                godmode['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                godmode['setPadding'](10, 3, 3, 3);
                                godmode['setTextSize'](15);
                                godmode['setBackground'](module);
                                godmode['getBackground']()['setAlpha'](120);
                                godmode['setChecked'](godmodeed);
                                godmode['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!godmodeed) {
                                            godmodes = true;
                                            godmodeed = true
                                        } else {
                                            godmodes = false;
                                            godmodeed = false
                                        };
                                        godmode['setChecked'](godmodeed)
                                    }
                                }));
                                _0x2bf6x147['addView'](godmode);

                                var bypasshitbox = new Switch(ctx);
                                bypasshitbox['setText']('长臂猿[自动]');
                                bypasshitbox['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                bypasshitbox['setPadding'](10, 3, 3, 3);
                                bypasshitbox['setTextSize'](15);
                                bypasshitbox['setBackground'](module);
                                bypasshitbox['getBackground']()['setAlpha'](120);
                                bypasshitbox['setChecked'](bypasshitboxed);
                                bypasshitbox['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bypasshitboxed) {
                                            bypasshitboxs = true;
                                            bypasshitboxed = true;
                                            bypasshitbox['setBackground'](bg);
                                        } else {
                                            bypasshitboxs = false;
                                            bypasshitboxed = false
                                            bypasshitbox['setBackground'](module);
                                        };
                                        bypasshitbox['setChecked'](bypasshitboxed)
                                    }
                                }));
                                _0x2bf6x147['addView'](bypasshitbox);

                                var hitbox = new Switch(ctx);
                                hitbox['setText']('长臂猿[手动]');
                                hitbox['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                hitbox['setPadding'](10, 3, 3, 3);
                                hitbox['setTextSize'](15);
                                hitbox['setBackground'](module);
                                hitbox['getBackground']()['setAlpha'](120);
                                hitbox['setChecked'](hitboxed);
                                hitbox['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!hitboxed) {
                                            hitboxs = true;
                                            hitboxed = true;
                                            hitbox['setBackground'](bg);
                                        } else {
                                            hitboxs = false;
                                            hitboxed = false
                                            hitbox['setBackground'](module);
                                        };
                                        hitbox['setChecked'](hitboxed)
                                    }
                                }));
                                _0x2bf6x147['addView'](hitbox);

                                var aimbots = new Switch(ctx);
                                aimbots['setText']('自瞄');
                                aimbots['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                aimbots['setPadding'](10, 3, 3, 3);
                                aimbots['setTextSize'](15);
                                aimbots['setBackground'](module);
                                aimbots['getBackground']()['setAlpha'](120);
                                aimbots['setChecked'](aimboted);
                                aimbots['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!aimboted) {
                                            aimbotss = true;
                                            aimboted = true;
                                            aimbots['setBackground'](bg);
                                        } else {
                                            aimbotss = false;
                                            aimboted = false
                                            aimbots['setBackground'](module);
                                        };
                                        aimbots['setChecked'](aimboted)
                                    }
                                }));
                                _0x2bf6x147['addView'](aimbots);
                                var switchaims = new Switch(ctx);
                                switchaims['setText']('(T)-自瞄');
                                switchaims['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                switchaims['setPadding'](10, 3, 3, 3);
                                switchaims['setTextSize'](15);
                                switchaims['setBackground'](module);
                                switchaims['getBackground']()['setAlpha'](120);
                                switchaims['setChecked'](switchaimed);
                                switchaims['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!switchaimed) {
                                            showAimSwitch();
                                            switchaimed = true
                                            switchaims['setBackground'](bg);
                                        } else {
                                            if (GUIa != null && GUIa['isShowing']()) {
                                                GUIa['dismiss']()
                                            };
                                            switchaimed = false;
                                            aimbotss = false;
                                            saimed = false
                                            switchaims['setBackground'](module);
                                        };
                                        switchaims['setChecked'](switchaimed)
                                    }
                                }));
                                _0x2bf6x147['addView'](switchaims);
                                var aimassists = new Switch(ctx);
                                aimassists['setText']('生物自瞄');
                                aimassists['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                aimassists['setPadding'](10, 3, 3, 3);
                                aimassists['setTextSize'](15);
                                aimassists['setBackground'](module);
                                aimassists['getBackground']()['setAlpha'](120);
                                aimassists['setChecked'](aimassisted);
                                aimassists['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!aimassisted) {
                                            aimassistss = true;
                                            aimassisted = true
                                            fctoast('必须附近有生物才行哦')
                                            aimassists['setBackground'](bg);
                                        } else {
                                            aimassistss = false;
                                            aimassisted = false
                                            aimassists['setBackground'](module);
                                        };
                                        aimassists['setChecked'](aimassisted)
                                    }
                                }));
                                _0x2bf6x147['addView'](aimassists);
                                var reachs = new Switch(ctx);
                                reachs['setText']('攻击传送');
                                reachs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                reachs['setPadding'](10, 3, 3, 3);
                                reachs['setTextSize'](15);
                                reachs['setBackground'](module);
                                reachs['getBackground']()['setAlpha'](120);
                                reachs['setChecked'](reached);
                                reachs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!reached) {
                                            reachss = true;
                                            reached = true
                                            reachs['setBackground'](bg);
                                        } else {
                                            reachss = false;
                                            reached = false;
                                            Level['setGameMode'](0)
                                            reachs['setBackground'](module);
                                        };
                                        reachs['setChecked'](reached)
                                    }
                                }));
                                _0x2bf6x147['addView'](reachs);
                                var sidereachs = new Switch(ctx);
                                sidereachs['setText']('画面缩放');
                                sidereachs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                sidereachs['setPadding'](10, 3, 3, 3);
                                sidereachs['setTextSize'](15);
                                sidereachs['setBackground'](module);
                                sidereachs['getBackground']()['setAlpha'](120);
                                sidereachs['setChecked'](sidereached);
                                sidereachs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!sidereached) {
                                            ModPE['setFov'](115);
                                            sidereached = true;
                                            sidereachs['setBackground'](bg);
                                        } else {
                                            ModPE['resetFov']();
                                            sidereached = false;
                                            Level['setGameMode'](0)
                                            sidereachs['setBackground'](module);
                                        };
                                        sidereachs['setChecked'](sidereached)
                                    }
                                }));
                                _0x2bf6x147['addView'](sidereachs);
                                var switchreachs = new Switch(ctx);
                                switchreachs['setText']('(T)-伪 长臂猿');
                                switchreachs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                switchreachs['setPadding'](10, 3, 3, 3);
                                switchreachs['setTextSize'](15);
                                switchreachs['setBackground'](module);
                                switchreachs['getBackground']()['setAlpha'](120);
                                switchreachs['setChecked'](switchreached);
                                switchreachs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!switchreached) {
                                            showReachSwitch();
                                            switchreached = true
                                            fctoast('XinYu:由于相关原因，真正的长臂猿是reach，而不是hitbox，他是通过切换模式来改变距离的，所有服务器可能无效')
                                            switchreachs['setBackground'](bg);
                                        } else {
                                            if (GUIr != null && GUIr['isShowing']()) {
                                                GUIr['dismiss']()
                                            };
                                            switchreached = false;
                                            sreached = false
                                            switchreachs['setBackground'](module);
                                        };
                                        switchreachs['setChecked'](switchreached)
                                    }
                                }));
                                _0x2bf6x147['addView'](switchreachs);
                                var antikbs = new Switch(ctx);
                                antikbs['setText']('无击退');
                                antikbs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                antikbs['setPadding'](10, 3, 3, 3);
                                antikbs['setTextSize'](15);
                                antikbs['setBackground'](module);
                                antikbs['getBackground']()['setAlpha'](120);
                                antikbs['setChecked'](antikbed);
                                antikbs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!antikbed) {
                                            antikbss = true;
                                            antikbed = true
                                            antikbs['setBackground'](bg);
                                        } else {
                                            antikbss = false;
                                            antikbed = false
                                            antikbs['setBackground'](module);
                                        };
                                        antikbs['setChecked'](antikbed)
                                    }
                                }));
                                _0x2bf6x147['addView'](antikbs);
                                var grapples = new Switch(ctx);
                                grapples['setText']('瞬移光环');
                                grapples['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                grapples['setPadding'](10, 3, 3, 3);
                                grapples['setTextSize'](15);
                                grapples['setBackground'](module);
                                grapples['getBackground']()['setAlpha'](120);
                                grapples['setChecked'](grappleed);
                                grapples['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!grappleed) {
                                            grappless = true;
                                            grappleed = true
                                            grapples['setBackground'](bg);
                                        } else {
                                            grappless = false;
                                            grappleed = false
                                            grapples['setBackground'](module);
                                        };
                                        grapples['setChecked'](grappleed)
                                    }
                                }));
                                _0x2bf6x147['addView'](grapples);
                                var ghosthands = new Switch(ctx);
                                ghosthands['setText']('点击破坏');
                                ghosthands['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                ghosthands['setPadding'](10, 3, 3, 3);
                                ghosthands['setTextSize'](15);
                                ghosthands['setBackground'](module);
                                ghosthands['getBackground']()['setAlpha'](120);
                                ghosthands['setChecked'](ghosthanded);
                                ghosthands['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!ghosthanded) {
                                            ghosthandss = true;
                                            ghosthanded = true;
                                            fctoast('用手点击方块，然后破坏，注意方块不会消失哦')
                                            ghosthands['setBackground'](bg);
                                        } else {
                                            ghosthandss = false;
                                            ghosthanded = false
                                            ghosthands['setBackground'](module);
                                        };
                                        ghosthands['setChecked'](ghosthanded)
                                    }
                                }));
                                _0x2bf6x147['addView'](ghosthands);
                                var criticalss = new Switch(ctx);


                                criticalss['setText']('刀刀暴击');
                                criticalss['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                criticalss['setPadding'](10, 3, 3, 3);
                                criticalss['setTextSize'](15);
                                criticalss['setBackground'](module);
                                criticalss['getBackground']()['setAlpha'](120);
                                criticalss['setChecked'](criticalsed);
                                criticalss['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!criticalsed) {
                                            criticales = true;
                                            criticalsed = true
                                            criticalss['setBackground'](bg);
                                        } else {
                                            criticales = false;
                                            criticalsed = false
                                            criticalss['setBackground'](module);
                                        };
                                        criticalss['setChecked'](criticalsed)
                                    }
                                }));
                                _0x2bf6x147['addView'](criticalss);
                                var escapes = new Switch(ctx);
                                escapes['setText']('(T)-向前冲刺');
                                escapes['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                escapes['setPadding'](10, 3, 3, 3);
                                escapes['setTextSize'](15);
                                escapes['setBackground'](module);
                                escapes['getBackground']()['setAlpha'](120);
                                escapes['setChecked'](escapeed);
                                escapes['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!escapeed) {
                                            showEscapeBtn();
                                            escapeed = true
                                            escapes['setBackground'](bg);
                                        } else {
                                            GUIs['dismiss']();
                                            escapeed = false
                                            escapes['setBackground'](module);
                                        };
                                        escapes['setChecked'](escapeed)
                                    }
                                }));
                                _0x2bf6x147['addView'](escapes);
                                var arrowdodges = new Switch(ctx);
                                arrowdodges['setText']('自动躲箭');
                                arrowdodges['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                arrowdodges['setPadding'](10, 3, 3, 3);
                                arrowdodges['setTextSize'](15);
                                arrowdodges['setBackground'](module);
                                arrowdodges['getBackground']()['setAlpha'](120);
                                arrowdodges['setChecked'](arrowdodgeed);
                                arrowdodges['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!arrowdodgeed) {
                                            arrowdodgess = true;
                                            arrowdodgeed = true;
                                            fctoast('当有箭靠进你的时候，可以自动躲避')
                                            arrowdodges['setBackground'](bg);
                                        } else {
                                            arrowdodgess = false;
                                            arrowdodgeed = false
                                            arrowdodges['setBackground'](module);
                                        };
                                        arrowdodges['setChecked'](arrowdodgeed)
                                    }
                                }));
                                _0x2bf6x147['addView'](arrowdodges);
                                var behindhits = new Switch(ctx);
                                behindhits['setText']('快速攻击');
                                behindhits['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                behindhits['setPadding'](10, 3, 3, 3);
                                behindhits['setTextSize'](15);
                                behindhits['setBackground'](module);
                                behindhits['getBackground']()['setAlpha'](120);
                                behindhits['setChecked'](behindhited);
                                behindhits['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!behindhited) {
                                            behindhitss = true;
                                            behindhited = true
                                            behindhits['setBackground'](bg);
                                        } else {
                                            behindhitss = false;
                                            behindhited = false
                                            behindhits['setBackground'](module);
                                        };
                                        behindhits['setChecked'](behindhited)
                                    }
                                }));
                                _0x2bf6x147['addView'](behindhits);
                                var bowaimbots = new Switch(ctx);
                                bowaimbots['setText']('自瞄弓');
                                bowaimbots['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                bowaimbots['setPadding'](10, 3, 3, 3);
                                bowaimbots['setTextSize'](15);
                                bowaimbots['setBackground'](module);
                                bowaimbots['getBackground']()['setAlpha'](120);
                                bowaimbots['setChecked'](bowaimboted);
                                bowaimbots['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bowaimboted) {
                                            bowaimboted = true;
                                            bowaimbotss = true
                                            bowaimbots['setBackground'](bg);
                                        } else {
                                            bowaimboted = false;
                                            bowaimbotss = false
                                            bowaimbots['setBackground'](module);
                                        };
                                        bowaimbots['setChecked'](bowaimboted)
                                    }
                                }));
                                _0x2bf6x147['addView'](bowaimbots);
                                var snipers = new Switch(ctx);
                                snipers['setText']('自瞄弓[专业版]');
                                snipers['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                snipers['setPadding'](10, 3, 3, 3);
                                snipers['setTextSize'](15);
                                snipers['setBackground'](module);
                                snipers['getBackground']()['setAlpha'](120);
                                snipers['setChecked'](snipered);
                                snipers['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!snipered) {
                                            sniperss = true;
                                            snipered = true
                                            fctoast('拿起弓箭自动放大画面，进行射击')
                                            snipers['setBackground'](bg);
                                        } else {
                                            ModPE['resetFov']();
                                            sniperss = false;
                                            snipered = false
                                            snipers['setBackground'](module);
                                        };
                                        snipers['setChecked'](snipered)
                                    }
                                }));
                                _0x2bf6x147['addView'](snipers);
                                var autoswords = new Switch(ctx);
                                autoswords['setText']('自动切剑');
                                autoswords['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                autoswords['setPadding'](10, 3, 3, 3);
                                autoswords['setTextSize'](15);
                                autoswords['setBackground'](module);
                                autoswords['getBackground']()['setAlpha'](120);
                                autoswords['setChecked'](autosworded);
                                autoswords['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!autosworded) {
                                            autoswordss = true;
                                            autosworded = true
                                            autoswords['setBackground'](bg);
                                        } else {
                                            autoswordss = false;
                                            autosworded = false
                                            autoswords['setBackground'](module);
                                        };
                                        autoswords['setChecked'](autosworded)
                                    }
                                }));
                                _0x2bf6x147['addView'](autoswords);
                                menu1 = new PopupWindow(_0x2bf6x149, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 4, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']());
                                menu1['setAnimationStyle'](android['R']['style'].Animation_InputMethod);
                                menu1['showAtLocation'](ctx['getWindow']()['getDecorView'](), 1, 0, 0)
                            } catch (error) {
                                Toast['makeText'](ctx, 'Flqme Error: ' + error, 1)['show']()
                            }
                        }
                    }))
                }
                var _0x2bf6x14f = new TextView(ctx);
                _0x2bf6x14f['setText']('移动');
                _0x2bf6x14f['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x14f['setTextSize'](24);
                _0x2bf6x14f['setBackground'](theme);
                _0x2bf6x14f['getBackground']()['setAlpha'](100);
                _0x2bf6x14f['setGravity'](Gravity.CENTER);
                _0x2bf6x14f['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        _0x2bf6x150();
                        exitmotion();
                        if (menu != null && menu['isShowing']()) {
                            menu['dismiss']()
                        };
                        if (GUI != null && GUI['isShowing']()) {
                            GUI['dismiss']()
                        };
                        exitUI['dismiss']()
                    }
                }));
                _0x2bf6x147['addView'](_0x2bf6x14f);

                function _0x2bf6x150() {
                    ctx['runOnUiThread'](new Runnable({
                        run: function() {
                            try {
                                var _0x2bf6x147 = new LinearLayout(ctx);
                                var _0x2bf6x148 = new ScrollView(ctx);
                                var _0x2bf6x149 = new LinearLayout(ctx);
                                _0x2bf6x147['setOrientation'](1);
                                _0x2bf6x147['setBackground'](theme);
                                _0x2bf6x147['getBackground']()['setAlpha'](120);
                                _0x2bf6x149['setOrientation'](1);
                                _0x2bf6x148['addView'](_0x2bf6x147);
                                _0x2bf6x149['addView'](_0x2bf6x148);
                                var _0x2bf6x151 = new TextView(ctx);
                                _0x2bf6x151['setTextSize'](20);
                                _0x2bf6x151['setText']('-| 移动 |-');
                                _0x2bf6x151['setTextColor'](android['graphics']['Color'].MAGENTA);
                                _0x2bf6x151['setBackgroundDrawable'](new ColorDrawable(Color.BLACK));
                                _0x2bf6x151['getBackground']()['setAlpha'](120);
                                _0x2bf6x151['setGravity'](Gravity.CENTER);
                                _0x2bf6x147['addView'](_0x2bf6x151);

                                var inpvpfly = new Switch(ctx);
                                inpvpfly['setText']('Inpvp飞行');
                                inpvpfly['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                inpvpfly['setPadding'](10, 3, 3, 3);
                                inpvpfly['setTextSize'](15);
                                inpvpfly['setBackground'](module);
                                inpvpfly['getBackground']()['setAlpha'](120);
                                inpvpfly['setChecked'](inpvpflyed);
                                inpvpfly['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!inpvpflyed) {
                                            inpvpflys = true;
                                            inpvpflyed = true
                                        } else {
                                            inpvpflys = false;
                                            inpvpflyed = false
                                        };
                                        inpvpfly['setChecked'](inpvpflyed)
                                    }
                                }));
                                _0x2bf6x147['addView'](inpvpfly);

                                var mineplexspeed = new Switch(ctx);
                                mineplexspeed['setText']('速度增加');
                                mineplexspeed['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                mineplexspeed['setPadding'](10, 3, 3, 3);
                                mineplexspeed['setTextSize'](15);
                                mineplexspeed['setBackground'](module);
                                mineplexspeed['getBackground']()['setAlpha'](120);
                                mineplexspeed['setChecked'](mineplexspeeded);
                                mineplexspeed['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!mineplexspeeded) {
                                            mineplexspeeds = true;
                                            mineplexspeeded = true
                                            ModPE['setGameSpeed'](48)
                                            fctoast('XinYu:和Mineplex速度一样(如果反作弊更新后，就不可以了)')
                                        } else {
                                            mineplexspeeds = false;
                                            mineplexspeeded = false
                                            ModPE['setGameSpeed'](20)
                                        };
                                        mineplexspeed['setChecked'](mineplexspeeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](mineplexspeed);

                                var mineplexfly = new Switch(ctx);
                                mineplexfly['setText']('飞行[绕过检测]');
                                mineplexfly['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                mineplexfly['setPadding'](10, 3, 3, 3);
                                mineplexfly['setTextSize'](15);
                                mineplexfly['setBackground'](module);
                                mineplexfly['getBackground']()['setAlpha'](120);
                                mineplexfly['setChecked'](mineplexflyed);
                                mineplexfly['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!mineplexflyed) {
                                            mineplexflys = true;
                                            mineplexflyed = true
                                            fctoast('XinYu:和Mineplex飞行一样(这是高级版的飞行哦)')
                                        } else {
                                            mineplexflys = false;
                                            mineplexflyed = false
                                        };
                                        mineplexfly['setChecked'](mineplexflyed)
                                    }
                                }));
                                _0x2bf6x147['addView'](mineplexfly);

                                var glides = new Switch(ctx);
                                glides['setText']('滑行[缓慢下降]');
                                glides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                glides['setPadding'](10, 3, 3, 3);
                                glides['setTextSize'](15);
                                glides['setBackground'](module);
                                glides['getBackground']()['setAlpha'](120);
                                glides['setChecked'](glideed);
                                glides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!glideed) {
                                            glidess = true;
                                            glideed = true;
                                        } else {
                                            glidess = false;
                                            glideed = false
                                        };
                                        glides['setChecked'](glideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](glides);
                                var ndglides = new Switch(ctx);
                                ndglides['setText']('滑行[永不向下]');
                                ndglides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                ndglides['setPadding'](10, 3, 3, 3);
                                ndglides['setTextSize'](15);
                                ndglides['setBackground'](module);
                                ndglides['getBackground']()['setAlpha'](120);
                                ndglides['setChecked'](ndglideed);
                                ndglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!ndglideed) {
                                            ndglidess = true;
                                            ndglideed = true
                                        } else {
                                            ndglidess = false;
                                            ndglideed = false
                                        };
                                        ndglides['setChecked'](ndglideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](ndglides);
                                var bypassglides = new Switch(ctx);
                                bypassglides['setText']('滑行[绕过检测]');
                                bypassglides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                bypassglides['setPadding'](10, 3, 3, 3);
                                bypassglides['setTextSize'](15);
                                bypassglides['setBackground'](module);
                                bypassglides['getBackground']()['setAlpha'](120);
                                bypassglides['setChecked'](bypassglideed);
                                bypassglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bypassglideed) {
                                            bypassglidess = true;
                                            bypassglideed = true
                                        } else {
                                            bypassglidess = false;
                                            bypassglideed = false
                                        };
                                        bypassglides['setChecked'](bypassglideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](bypassglides);
                                var sglides = new Switch(ctx);
                                sglides['setText']('滑行[加速下降]');
                                sglides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                sglides['setPadding'](10, 3, 3, 3);
                                sglides['setTextSize'](15);
                                sglides['setBackground'](module);
                                sglides['getBackground']()['setAlpha'](120);
                                sglides['setChecked'](sglideed);
                                sglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!sglideed) {
                                            sglidess = true;
                                            sglideed = true
                                        } else {
                                            sglidess = false;
                                            sglideed = false
                                        };
                                        sglides['setChecked'](sglideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](sglides);
                                var dmgglides = new Switch(ctx);
                                dmgglides['setText']('滑行[缓慢下降]');
                                dmgglides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                dmgglides['setPadding'](10, 3, 3, 3);
                                dmgglides['setTextSize'](15);
                                dmgglides['setBackground'](module);
                                dmgglides['getBackground']()['setAlpha'](120);
                                dmgglides['setChecked'](dmgglideed);
                                dmgglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!dmgglideed) {
                                            dmgglidess = true;
                                            dmgglideed = true
                                        } else {
                                            dmgglidess = false;
                                            dmgglideed = false
                                        };
                                        dmgglides['setChecked'](dmgglideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](dmgglides);
                                var upglides = new Switch(ctx);
                                upglides['setText']('滑行[缓慢上升]');
                                upglides['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                upglides['setPadding'](10, 3, 3, 3);
                                upglides['setTextSize'](15);
                                upglides['setBackground'](module);
                                upglides['getBackground']()['setAlpha'](120);
                                upglides['setChecked'](upglideed);
                                upglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!upglideed) {
                                            upglidess = true;
                                            upglideed = true
                                        } else {
                                            upglidess = false;
                                            upglideed = false
                                        };
                                        upglides['setChecked'](upglideed)
                                    }
                                }));
                                _0x2bf6x147['addView'](upglides);
                                var airjumps = new Switch(ctx);
                                airjumps['setText']('空中跳跃');
                                airjumps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                airjumps['setPadding'](10, 3, 3, 3);
                                airjumps['setTextSize'](15);
                                airjumps['setBackground'](module);
                                airjumps['getBackground']()['setAlpha'](120);
                                airjumps['setChecked'](airjumped);
                                airjumps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!airjumped) {
                                            showJumpBtn();
                                            airjumped = true;
                                            fctoast('点击右下角的"跳"字即可')
                                        } else {
                                            GUIj['dismiss']();
                                            airjumped = false
                                        };
                                        airjumps['setChecked'](airjumped)
                                    }
                                }));
                                _0x2bf6x147['addView'](airjumps);
                                var highjumps = new Switch(ctx);
                                highjumps['setText']('高跳');
                                highjumps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                highjumps['setPadding'](10, 3, 3, 3);
                                highjumps['setTextSize'](15);
                                highjumps['setBackground'](module);
                                highjumps['getBackground']()['setAlpha'](120);
                                highjumps['setChecked'](highjumped);
                                highjumps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!highjumped) {
                                            highjumpss = true;
                                            highjumped = true
                                        } else {
                                            highjumpss = false;
                                            highjumped = false
                                        };
                                        highjumps['setChecked'](highjumped)
                                    }
                                }));
                                _0x2bf6x147['addView'](highjumps);
                                var hitjumps = new Switch(ctx);
                                hitjumps['setText']('攻击跳跃');
                                hitjumps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                hitjumps['setPadding'](10, 3, 3, 3);
                                hitjumps['setTextSize'](15);
                                hitjumps['setBackground'](module);
                                hitjumps['getBackground']()['setAlpha'](120);
                                hitjumps['setChecked'](hitjumped);
                                hitjumps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!hitjumped) {
                                            hitjumpss = true;
                                            hitjumped = true
                                        } else {
                                            hitjumpss = false;
                                            hitjumped = false
                                        };
                                        hitjumps['setChecked'](hitjumped)
                                    }
                                }));
                                _0x2bf6x147['addView'](hitjumps);
                                var tapjumps = new Switch(ctx);
                                tapjumps['setText']('点击跳跃');
                                tapjumps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                tapjumps['setPadding'](10, 3, 3, 3);
                                tapjumps['setTextSize'](15);
                                tapjumps['setBackground'](module);
                                tapjumps['getBackground']()['setAlpha'](120);
                                tapjumps['setChecked'](tapjumped);
                                tapjumps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!tapjumped) {
                                            tapjumpss = true;
                                            tapjumped = true
                                        } else {
                                            tapjumpss = false;
                                            tapjumped = false
                                        };
                                        tapjumps['setChecked'](tapjumped)
                                    }
                                }));
                                _0x2bf6x147['addView'](tapjumps);
                                var longhops = new Switch(ctx);
                                longhops['setText']('兔子跳');
                                longhops['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                longhops['setPadding'](10, 3, 3, 3);
                                longhops['setTextSize'](15);
                                longhops['setBackground'](module);
                                longhops['getBackground']()['setAlpha'](120);
                                longhops['setChecked'](longhoped);
                                longhops['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!longhoped) {
                                            longhopss = true;
                                            longhoped = true
                                        } else {
                                            longhopss = false;
                                            longhoped = false;
                                            lhtick = 0
                                        };
                                        longhops['setChecked'](longhoped)
                                    }
                                }));
                                _0x2bf6x147['addView'](longhops);
                                var speeds = new Switch(ctx);
                                speeds['setText']('变速齿轮');
                                speeds['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                speeds['setPadding'](10, 3, 3, 3);
                                speeds['setTextSize'](15);
                                speeds['setBackground'](module);
                                speeds['getBackground']()['setAlpha'](120);
                                speeds['setChecked'](speeded);
                                speeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!speeded) {
                                            speedss = true;
                                            speeded = true
                                        } else {
                                            speedss = false;
                                            speeded = false
                                        };
                                        speeds['setChecked'](speeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](speeds);
                                var zoomspeeds = new Switch(ctx);
                                zoomspeeds['setText']('疾跑速度');
                                zoomspeeds['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                zoomspeeds['setPadding'](10, 3, 3, 3);
                                zoomspeeds['setTextSize'](15);
                                zoomspeeds['setBackground'](module);
                                zoomspeeds['getBackground']()['setAlpha'](120);
                                zoomspeeds['setChecked'](zoomspeeded);
                                zoomspeeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!zoomspeeded) {
                                            zoomspeedss = true;
                                            zoomspeeded = true
                                        } else {
                                            zoomspeedss = false;
                                            zoomspeeded = false
                                        };
                                        zoomspeeds['setChecked'](zoomspeeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](zoomspeeds);
                                var jumpspeeds = new Switch(ctx);
                                jumpspeeds['setText']('持续跳[加速]');
                                jumpspeeds['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                jumpspeeds['setPadding'](10, 3, 3, 3);
                                jumpspeeds['setTextSize'](15);
                                jumpspeeds['setBackground'](module);
                                jumpspeeds['getBackground']()['setAlpha'](120);
                                jumpspeeds['setChecked'](jumpspeeded);
                                jumpspeeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!jumpspeeded) {
                                            jumpspeedss = true;
                                            jumpspeeded = true
                                        } else {
                                            jumpspeedss = false;
                                            jumpspeeded = false
                                        };
                                        jumpspeeds['setChecked'](jumpspeeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](jumpspeeds);
                                var cspeeds = new Switch(ctx);
                                cspeeds['setText']('潜行速度');
                                cspeeds['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                cspeeds['setPadding'](10, 3, 3, 3);
                                cspeeds['setTextSize'](15);
                                cspeeds['setBackground'](module);
                                cspeeds['getBackground']()['setAlpha'](120);
                                cspeeds['setChecked'](cspeeded);
                                cspeeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!cspeeded) {
                                            cspeedss = true;
                                            cspeeded = true
                                        } else {
                                            cspeedss = false;
                                            cspeeded = false
                                        };
                                        cspeeds['setChecked'](cspeeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](cspeeds);
                                var lbsgspeeds = new Switch(ctx);
                                lbsgspeeds['setText']('LB速度');
                                lbsgspeeds['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                lbsgspeeds['setPadding'](10, 3, 3, 3);
                                lbsgspeeds['setTextSize'](15);
                                lbsgspeeds['setBackground'](module);
                                lbsgspeeds['getBackground']()['setAlpha'](120);
                                lbsgspeeds['setChecked'](lbsgspeeded);
                                lbsgspeeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!lbsgspeeded) {
                                            lbsgspeedss = true;
                                            lbsgspeeded = true
                                        } else {
                                            lbsgspeedss = false;
                                            lbsgspeeded = false;
                                            ModPE['setGameSpeed'](20)
                                        };
                                        lbsgspeeds['setChecked'](lbsgspeeded)
                                    }
                                }));
                                _0x2bf6x147['addView'](lbsgspeeds);
                                var follows = new Switch(ctx);
                                follows['setText']('跟随玩家');
                                follows['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                follows['setPadding'](10, 3, 3, 3);
                                follows['setTextSize'](15);
                                follows['setBackground'](module);
                                follows['getBackground']()['setAlpha'](120);
                                follows['setChecked'](followed);
                                follows['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!followed) {
                                            followss = true;
                                            followed = true
                                        } else {
                                            followss = false;
                                            followed = false
                                        };
                                        follows['setChecked'](followed)
                                    }
                                }));
                                _0x2bf6x147['addView'](follows);
                                var autowalks = new Switch(ctx);
                                autowalks['setText']('自动行走');
                                autowalks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                autowalks['setPadding'](10, 3, 3, 3);
                                autowalks['setTextSize'](15);
                                autowalks['setBackground'](module);
                                autowalks['getBackground']()['setAlpha'](120);
                                autowalks['setChecked'](autowalked);
                                autowalks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!autowalked) {
                                            autowalkss = true;
                                            autowalked = true
                                        } else {
                                            autowalkss = false;
                                            autowalked = false
                                        };
                                        autowalks['setChecked'](autowalked)
                                    }
                                }));
                                _0x2bf6x147['addView'](autowalks);
                                var jetpacks = new Switch(ctx);
                                jetpacks['setText']('喷气背包');
                                jetpacks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                jetpacks['setPadding'](10, 3, 3, 3);
                                jetpacks['setTextSize'](15);
                                jetpacks['setBackground'](module);
                                jetpacks['getBackground']()['setAlpha'](120);
                                jetpacks['setChecked'](jetpacked);
                                jetpacks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!jetpacked) {
                                            jetpackss = true;
                                            jetpacked = true
                                            fctoast('XinYu:你的指针指向哪就飞向哪')
                                        } else {
                                            jetpackss = false;
                                            jetpacked = false
                                        };
                                        jetpacks['setChecked'](jetpacked)
                                    }
                                }));
                                _0x2bf6x147['addView'](jetpacks);
                                var steps = new Switch(ctx);
                                steps['setText']('爬墙[瞬移]');
                                steps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                steps['setPadding'](10, 3, 3, 3);
                                steps['setTextSize'](15);
                                steps['setBackground'](module);
                                steps['getBackground']()['setAlpha'](120);
                                steps['setChecked'](steped);
                                steps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!steped) {
                                            stepss = true;
                                            steped = true
                                        } else {
                                            stepss = false;
                                            steped = false
                                        };
                                        steps['setChecked'](steped)
                                    }
                                }));
                                _0x2bf6x147['addView'](steps);
                                var csteps = new Switch(ctx);
                                csteps['setText']('爬墙[平滑]');
                                csteps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                csteps['setPadding'](10, 3, 3, 3);
                                csteps['setTextSize'](15);
                                csteps['setBackground'](module);
                                csteps['getBackground']()['setAlpha'](120);
                                csteps['setChecked'](csteped);
                                csteps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!csteped) {
                                            cstepss = true;
                                            csteped = true
                                        } else {
                                            cstepss = false;
                                            csteped = false
                                        };
                                        csteps['setChecked'](csteped)
                                    }
                                }));
                                _0x2bf6x147['addView'](csteps);
                                menu2 = new PopupWindow(_0x2bf6x149, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 4, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']());
                                menu2['setAnimationStyle'](android['R']['style'].Animation_InputMethod);
                                menu2['showAtLocation'](ctx['getWindow']()['getDecorView'](), 1, 0, 0)
                            } catch (error) {
                                Toast['makeText'](ctx, 'Flqme Error: ' + error, 1)['show']()
                            }
                        }
                    }))
                }
                var _0x2bf6x152 = new TextView(ctx);
                _0x2bf6x152['setText']('玩家');
                _0x2bf6x152['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x152['setTextSize'](24);
                _0x2bf6x152['setBackground'](theme);
                _0x2bf6x152['getBackground']()['setAlpha'](100);
                _0x2bf6x152['setGravity'](Gravity.CENTER);
                _0x2bf6x152['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        _0x2bf6x153();
                        exitplayer();
                        if (menu != null && menu['isShowing']()) {
                            menu['dismiss']()
                        };
                        if (GUI != null && GUI['isShowing']()) {
                            GUI['dismiss']()
                        };
                        exitUI['dismiss']()
                    }
                }));
                _0x2bf6x147['addView'](_0x2bf6x152);

                function _0x2bf6x153() {
                    ctx['runOnUiThread'](new Runnable({
                        run: function() {
                            try {
                                var _0x2bf6x147 = new LinearLayout(ctx);
                                var _0x2bf6x148 = new ScrollView(ctx);
                                var _0x2bf6x149 = new LinearLayout(ctx);
                                _0x2bf6x147['setOrientation'](1);
                                _0x2bf6x147['setBackground'](theme);
                                _0x2bf6x147['getBackground']()['setAlpha'](120);
                                _0x2bf6x149['setOrientation'](1);
                                _0x2bf6x148['addView'](_0x2bf6x147);
                                _0x2bf6x149['addView'](_0x2bf6x148);
                                var _0x2bf6x154 = new TextView(ctx);
                                _0x2bf6x154['setTextSize'](20);
                                _0x2bf6x154['setText']('-| 玩家 |-');
                                _0x2bf6x154['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                _0x2bf6x154['setBackgroundDrawable'](new ColorDrawable(Color.BLACK));
                                _0x2bf6x154['getBackground']()['setAlpha'](150);
                                _0x2bf6x154['setGravity'](Gravity.CENTER);
                                _0x2bf6x147['addView'](_0x2bf6x154);
                                var _0x2bf6x155 = new Button(ctx);
                                _0x2bf6x155['setText']('游戏模式');
                                _0x2bf6x155['setTextColor'](Color['rgb'](255, 0, 255));
                                _0x2bf6x155['setTextSize'](18);
                                _0x2bf6x155['setBackground'](gmbg);
                                _0x2bf6x155['getBackground']()['setAlpha'](120);
                                _0x2bf6x155['setGravity'](Gravity.CENTER);
                                _0x2bf6x155['setOnClickListener'](new View.OnClickListener({
                                    onClick: function(_0x2bf6x132) {
                                        if (gmChange == 1) {
                                            gmChange = 0
                                        } else {
                                            gmChange = 1
                                        };
                                        Level['setGameMode'](gmChange)
                                    }
                                }));
                                _0x2bf6x147['addView'](_0x2bf6x155);
                                var nearwarnings = new Switch(ctx);
                                nearwarnings['setText']('玩家信息');
                                nearwarnings['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                nearwarnings['setPadding'](10, 3, 3, 3);
                                nearwarnings['setTextSize'](15);
                                nearwarnings['setBackground'](module);
                                nearwarnings['getBackground']()['setAlpha'](120);
                                nearwarnings['setChecked'](nearwarninged);
                                nearwarnings['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!nearwarninged) {
                                            nearwarningss = true;
                                            nearwarninged = true
                                            fctoast('XinYu:显示附近的玩家相关坐标等')
                                        } else {
                                            nearwarningss = false;
                                            nearwarninged = false
                                        };
                                        nearwarnings['setChecked'](nearwarninged)
                                    }
                                }));
                                _0x2bf6x147['addView'](nearwarnings);
                                var forcedestroys = new Switch(ctx);
                                forcedestroys['setText']('强制破坏');
                                forcedestroys['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                forcedestroys['setPadding'](10, 3, 3, 3);
                                forcedestroys['setTextSize'](15);
                                forcedestroys['setBackground'](module);
                                forcedestroys['getBackground']()['setAlpha'](120);
                                forcedestroys['setChecked'](forcedestroyed);
                                forcedestroys['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!forcedestroyed) {
                                            forcedestroyss = true;
                                            forcedestroyed = true
                                            fctoast('破坏后虽然方块还在，但你看不到，并且可以穿过去')
                                        } else {
                                            forcedestroyss = false;
                                            forcedestroyed = false
                                        };
                                        forcedestroys['setChecked'](forcedestroyed)
                                    }
                                }));
                                _0x2bf6x147['addView'](forcedestroys);
                                var bedbreakers = new Switch(ctx);
                                bedbreakers['setText']('自动挖床');
                                bedbreakers['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                bedbreakers['setPadding'](10, 3, 3, 3);
                                bedbreakers['setTextSize'](15);
                                bedbreakers['setBackground'](module);
                                bedbreakers['getBackground']()['setAlpha'](120);
                                bedbreakers['setChecked'](bedbreakered);
                                bedbreakers['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bedbreakered) {
                                            bedbreakerss = true;
                                            bedbreakered = true;
                                            fctoast('瞄准床即可自动破坏(多人游戏可能会闪退)')
                                        } else {
                                            bedbreakerss = false;
                                            bedbreakered = false
                                        };
                                        bedbreakers['setChecked'](bedbreakered)
                                    }
                                }));
                                _0x2bf6x147['addView'](bedbreakers);
                                var fastbreaks = new Switch(ctx);
                                fastbreaks['setText']('加速破坏');
                                fastbreaks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                fastbreaks['setPadding'](10, 3, 3, 3);
                                fastbreaks['setTextSize'](15);
                                fastbreaks['setBackground'](module);
                                fastbreaks['getBackground']()['setAlpha'](120);
                                fastbreaks['setChecked'](fastbreaked);
                                fastbreaks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!fastbreaked) {
                                            fastbreakss = true;
                                            fastbreaked = true
                                        } else {
                                            fastbreakss = false;
                                            fastbreaked = false;
                                            for (i = 0; i < 256; i++) {
                                                Block['setDestroyTime'](i, defDestroyTime[i])
                                            }
                                        };
                                        fastbreaks['setChecked'](fastbreaked)
                                    }
                                }));
                                _0x2bf6x147['addView'](fastbreaks);
                                var fullbrights = new Switch(ctx);
                                fullbrights['setText']('充足亮度');
                                fullbrights['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                fullbrights['setPadding'](10, 3, 3, 3);
                                fullbrights['setTextSize'](15);
                                fullbrights['setBackground'](module);
                                fullbrights['getBackground']()['setAlpha'](120);
                                fullbrights['setChecked'](fullbrighted);
                                fullbrights['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!fullbrighted) {
                                            fullbrightss = true;
                                            fullbrighted = true;
                                            fctoast('当你破坏一个区块的方块时(区块更新)会自动把方块变为白天时的亮度')
                                        } else {
                                            fullbrightss = false;
                                            fullbrighted = false;
                                            Block['setLightLevel'](0, 0)
                                        };
                                        fullbrights['setChecked'](fullbrighted)
                                    }
                                }));
                                _0x2bf6x147['addView'](fullbrights);
                                var taptps = new Switch(ctx);
                                taptps['setText']('点击传送');
                                taptps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                taptps['setPadding'](10, 3, 3, 3);
                                taptps['setTextSize'](15);
                                taptps['setBackground'](module);
                                taptps['getBackground']()['setAlpha'](120);
                                taptps['setChecked'](taptped);
                                taptps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!taptped) {
                                            taptpss = true;
                                            taptped = true
                                        } else {
                                            taptpss = false;
                                            taptped = false
                                        };
                                        taptps['setChecked'](taptped)
                                    }
                                }));
                                _0x2bf6x147['addView'](taptps);
                                var placetps = new Switch(ctx);
                                placetps['setText']('自动搭路');
                                placetps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                placetps['setPadding'](10, 3, 3, 3);
                                placetps['setTextSize'](15);
                                placetps['setBackground'](module);
                                placetps['getBackground']()['setAlpha'](120);
                                placetps['setChecked'](placetped);
                                placetps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!placetped) {
                                            placetpss = true;
                                            placetped = true
                                            fctoast('XinYu:点一下 移动一格')
                                        } else {
                                            placetpss = false;
                                            placetped = false
                                        };
                                        placetps['setChecked'](placetped)
                                    }
                                }));
                                _0x2bf6x147['addView'](placetps);
                                var elevators = new Switch(ctx);
                                elevators['setText']('(T)-上下瞬移');
                                elevators['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                elevators['setPadding'](10, 3, 3, 3);
                                elevators['setTextSize'](15);
                                elevators['setBackground'](module);
                                elevators['getBackground']()['setAlpha'](120);
                                elevators['setChecked'](elevatored);
                                elevators['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!elevatored) {
                                            showElevatorBtn();
                                            elevatored = true
                                        } else {
                                            GUIe['dismiss']();
                                            elevatored = false
                                        };
                                        elevators['setChecked'](elevatored)
                                    }
                                }));
                                _0x2bf6x147['addView'](elevators);
                                var ctrlzooms = new Switch(ctx);
                                ctrlzooms['setText']('(T)-放大画面');
                                ctrlzooms['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                ctrlzooms['setPadding'](10, 3, 3, 3);
                                ctrlzooms['setTextSize'](15);
                                ctrlzooms['setBackground'](module);
                                ctrlzooms['getBackground']()['setAlpha'](120);
                                ctrlzooms['setChecked'](ctrlzoomed);
                                ctrlzooms['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!ctrlzoomed) {
                                            showZoomSwitch();
                                            ctrlzoomed = true
                                        } else {
                                            GUIz['dismiss']();
                                            ctrlzoomed = false
                                        };
                                        ctrlzooms['setChecked'](ctrlzoomed)
                                    }
                                }));
                                _0x2bf6x147['addView'](ctrlzooms);
                                var viewchangers = new Switch(ctx);
                                viewchangers['setText']('(T)-切换视角');
                                viewchangers['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                viewchangers['setPadding'](10, 3, 3, 3);
                                viewchangers['setTextSize'](15);
                                viewchangers['setBackground'](module);
                                viewchangers['getBackground']()['setAlpha'](120);
                                viewchangers['setChecked'](viewchangered);
                                viewchangers['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!viewchangered) {
                                            showF5Btn();
                                            viewchangered = true
                                            fctoast('可能会闪退')
                                        } else {
                                            GUIv['dismiss']();
                                            viewchangered = false
                                        };
                                        viewchangers['setChecked'](viewchangered)
                                    }
                                }));
                                _0x2bf6x147['addView'](viewchangers);
                                var fallbacks = new Switch(ctx);
                                fallbacks['setText']('虚空回弹');
                                fallbacks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                fallbacks['setPadding'](10, 3, 3, 3);
                                fallbacks['setTextSize'](15);
                                fallbacks['setBackground'](module);
                                fallbacks['getBackground']()['setAlpha'](120);
                                fallbacks['setChecked'](fallbacked);
                                fallbacks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!fallbacked) {
                                            fallbackss = true;
                                            fallbacked = true
                                            fctoast('XinYu:当你掉入虚空时会自动回来')
                                        } else {
                                            fallbackss = false;
                                            fallbacked = false
                                        };
                                        fallbacks['setChecked'](fallbacked)
                                    }
                                }));
                                _0x2bf6x147['addView'](fallbacks);
                                var fastfalls = new Switch(ctx);
                                fastfalls['setText']('快速坠落');
                                fastfalls['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                fastfalls['setPadding'](10, 3, 3, 3);
                                fastfalls['setTextSize'](15);
                                fastfalls['setBackground'](module);
                                fastfalls['getBackground']()['setAlpha'](120);
                                fastfalls['setChecked'](fastfalled);
                                fastfalls['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!fastfalled) {
                                            fastfallss = true;
                                            fastfalled = true
                                            fctoast('XinYu:走到物体边缘时自动传送到下面且无伤害')
                                        } else {
                                            fastfallss = false;
                                            fastfalled = false
                                        };
                                        fastfalls['setChecked'](fastfalled)
                                    }
                                }));
                                _0x2bf6x147['addView'](fastfalls);
                                var regenerations = new Switch(ctx);
                                regenerations['setText']('快速回血');
                                regenerations['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                regenerations['setPadding'](10, 3, 3, 3);
                                regenerations['setTextSize'](15);
                                regenerations['setBackground'](module);
                                regenerations['getBackground']()['setAlpha'](120);
                                regenerations['setChecked'](regenerationed);
                                regenerations['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!regenerationed) {
                                            regenerationss = true;
                                            regenerationed = true;
                                            fctoast('吃东西不要动回血')
                                        } else {
                                            regenerationss = false;
                                            regenerationed = false
                                        };
                                        regenerations['setChecked'](regenerationed)
                                    }
                                }));
                                _0x2bf6x147['addView'](regenerations);
                                var sregens = new Switch(ctx);
                                sregens['setText']('(T)-冻结画面');
                                sregens['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                sregens['setPadding'](10, 3, 3, 3);
                                sregens['setTextSize'](15);
                                sregens['setBackground'](module);
                                sregens['getBackground']()['setAlpha'](120);
                                sregens['setChecked'](sregend);
                                sregens['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!sregend) {
                                            showRegenSwitch();
                                            sregend = true
                                        } else {
                                            GUIg['dismiss']();
                                            sregend = false
                                        };
                                        sregens['setChecked'](sregend)
                                    }
                                }));
                                _0x2bf6x147['addView'](sregens);
                                var dolphins = new Switch(ctx);
                                dolphins['setText']('水上漂[LB]');
                                dolphins['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                dolphins['setPadding'](10, 3, 3, 3);
                                dolphins['setTextSize'](15);
                                dolphins['setBackground'](module);
                                dolphins['getBackground']()['setAlpha'](120);
                                dolphins['setChecked'](dolphined);
                                dolphins['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!dolphined) {
                                            dolphinss = true;
                                            dolphined = true
                                            fctoast('XinYu:适用于LB等反作弊能力高的')
                                        } else {
                                            dolphinss = false;
                                            dolphined = false
                                        };
                                        dolphins['setChecked'](dolphined)
                                    }
                                }));
                                _0x2bf6x147['addView'](dolphins);
                                var solidliquids = new Switch(ctx);
                                solidliquids['setText']('水上漂');
                                solidliquids['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                solidliquids['setPadding'](10, 3, 3, 3);
                                solidliquids['setTextSize'](15);
                                solidliquids['setBackground'](module);
                                solidliquids['getBackground']()['setAlpha'](120);
                                solidliquids['setChecked'](solidliquided);
                                solidliquids['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!solidliquided) {
                                            solidliquidss = true;
                                            solidliquided = true
                                        } else {
                                            solidliquidss = false;
                                            solidliquided = false;
                                            Block['setShape'](8, 0, 0, 0, 1, 0.0, 1);
                                            Block['setShape'](9, 0, 0, 0, 1, 0.0, 1);
                                            Block['setShape'](10, 0, 0, 0, 1, 0.0, 1);
                                            Block['setShape'](11, 0, 0, 0, 1, 0.0, 1);
                                            Block['defineLiquidBlock'](8, 'Water', [
                                                ['still_water', 0],
                                                ['still_water', 0]
                                            ], 8);
                                            Block['defineLiquidBlock'](10, 'Lava', [
                                                ['still_lava', 0],
                                                ['still_lava', 0]
                                            ], 10)
                                        };
                                        solidliquids['setChecked'](solidliquided)
                                    }
                                }));
                                _0x2bf6x147['addView'](solidliquids);
                                var frostwalkers = new Switch(ctx);
                                frostwalkers['setText']('水上结冰');
                                frostwalkers['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                frostwalkers['setPadding'](10, 3, 3, 3);
                                frostwalkers['setTextSize'](15);
                                frostwalkers['setBackground'](module);
                                frostwalkers['getBackground']()['setAlpha'](120);
                                frostwalkers['setChecked'](frostwalkered);
                                frostwalkers['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!frostwalkered) {
                                            frostwalkerss = true;
                                            frostwalkered = true
                                        } else {
                                            frostwalkerss = false;
                                            frostwalkered = false
                                        };
                                        frostwalkers['setChecked'](frostwalkered)
                                    }
                                }));
                                _0x2bf6x147['addView'](frostwalkers);
                                var safewalks = new Switch(ctx);
                                safewalks['setText']('安全行走');
                                safewalks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                safewalks['setPadding'](10, 3, 3, 3);
                                safewalks['setTextSize'](15);
                                safewalks['setBackground'](module);
                                safewalks['getBackground']()['setAlpha'](120);
                                safewalks['setChecked'](safewalked);
                                safewalks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!safewalked) {
                                            safewalkss = true;
                                            safewalked = true
                                            fctoast('XinYu:走到一个方块的边缘不会掉下去')
                                        } else {
                                            safewalkss = false;
                                            safewalked = false
                                        };
                                        safewalks['setChecked'](safewalked)
                                    }
                                }));
                                _0x2bf6x147['addView'](safewalks);
                                var scaffoldwalks = new Switch(ctx);
                                scaffoldwalks['setText']('脚下方块');
                                scaffoldwalks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                scaffoldwalks['setPadding'](10, 3, 3, 3);
                                scaffoldwalks['setTextSize'](15);
                                scaffoldwalks['setBackground'](module);
                                scaffoldwalks['getBackground']()['setAlpha'](120);
                                scaffoldwalks['setChecked'](scaffoldwalked);
                                scaffoldwalks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!scaffoldwalked) {
                                            scaffoldwalkss = true;
                                            scaffoldwalked = true
                                            fctoast('XinYu:在你看来是方块，别人不一定，可能会被服务器检测飞行')
                                        } else {
                                            scaffoldwalkss = false;
                                            scaffoldwalked = false
                                        };
                                        scaffoldwalks['setChecked'](scaffoldwalked)
                                    }
                                }));
                                _0x2bf6x147['addView'](scaffoldwalks);
                                var autoclimbs = new Switch(ctx);
                                autoclimbs['setText']('自动攀缘');
                                autoclimbs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                autoclimbs['setPadding'](10, 3, 3, 3);
                                autoclimbs['setTextSize'](15);
                                autoclimbs['setBackground'](module);
                                autoclimbs['getBackground']()['setAlpha'](120);
                                autoclimbs['setChecked'](autoclimbed);
                                autoclimbs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!autoclimbed) {
                                            autoclimbss = true;
                                            autoclimbed = true
                                        } else {
                                            autoclimbss = false;
                                            autoclimbed = false
                                        };
                                        autoclimbs['setChecked'](autoclimbed)
                                    }
                                }));
                                _0x2bf6x147['addView'](autoclimbs);
                                var wallhacks = new Switch(ctx);
                                wallhacks['setText']('透视[穿墙]');
                                wallhacks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                wallhacks['setPadding'](10, 3, 3, 3);
                                wallhacks['setTextSize'](15);
                                wallhacks['setBackground'](module);
                                wallhacks['getBackground']()['setAlpha'](120);
                                wallhacks['setChecked'](wallhacked);
                                wallhacks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!wallhacked) {
                                            wallhackss = true;
                                            wallhacked = true
                                        } else {
                                            wallhackss = false;
                                            wallhacked = false;
                                            Entity['setCollisionSize'](Player['getEntity'](), 1, 2)
                                        };
                                        wallhacks['setChecked'](wallhacked)
                                    }
                                }));
                                _0x2bf6x147['addView'](wallhacks);
                                menu3 = new PopupWindow(_0x2bf6x149, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 4, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']());
                                menu3['setAnimationStyle'](android['R']['style'].Animation_InputMethod);
                                menu3['showAtLocation'](ctx['getWindow']()['getDecorView'](), 1, 0, 0)
                            } catch (error) {
                                Toast['makeText'](ctx, 'Flqme Error: ' + error, 1)['show']()
                            }
                        }
                    }))
                }
                var _0x2bf6x156 = new TextView(ctx);
                _0x2bf6x156['setText']('更多');
                _0x2bf6x156['setTextColor'](Color['rgb'](255, 0, 255));
                _0x2bf6x156['setTextSize'](24);
                _0x2bf6x156['setBackground'](theme);
                _0x2bf6x156['getBackground']()['setAlpha'](100);
                _0x2bf6x156['setGravity'](Gravity.CENTER);
                _0x2bf6x156['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        _0x2bf6x157();
                        exitmisc();
                        if (menu != null && menu['isShowing']()) {
                            menu['dismiss']()
                        };
                        if (GUI != null && GUI['isShowing']()) {
                            GUI['dismiss']()
                        };
                        exitUI['dismiss']()
                    }
                }));
                _0x2bf6x147['addView'](_0x2bf6x156);

                function _0x2bf6x157() {
                    ctx['runOnUiThread'](new Runnable({
                        run: function() {
                            try {
                                var _0x2bf6x147 = new LinearLayout(ctx);
                                var _0x2bf6x148 = new ScrollView(ctx);
                                var _0x2bf6x149 = new LinearLayout(ctx);
                                _0x2bf6x147['setOrientation'](1);
                                _0x2bf6x147['setBackground'](theme);
                                _0x2bf6x147['getBackground']()['setAlpha'](120);
                                _0x2bf6x149['setOrientation'](1);
                                _0x2bf6x148['addView'](_0x2bf6x147);
                                _0x2bf6x149['addView'](_0x2bf6x148);
                                var _0x2bf6x158 = new TextView(ctx);
                                _0x2bf6x158['setTextSize'](20);
                                _0x2bf6x158['setText']('-| 更多 |-');
                                _0x2bf6x158['setTextColor'](android['graphics']['Color'].MAGENTA);
                                _0x2bf6x158['setBackgroundDrawable'](new ColorDrawable(Color.BLACK));
                                _0x2bf6x158['getBackground']()['setAlpha'](120);
                                _0x2bf6x158['setGravity'](Gravity.CENTER);
                                _0x2bf6x147['addView'](_0x2bf6x158);
                                var _0x2bf6x159 = new Button(ctx);
                                _0x2bf6x159['setText']('退出客户端');
                                _0x2bf6x159['setTextColor'](Color['rgb'](255, 0, 255));
                                _0x2bf6x159['setTextSize'](25);
                                _0x2bf6x159['setBackground'](destructbg);
                                _0x2bf6x159['getBackground']()['setAlpha'](150);
                                _0x2bf6x159['setGravity'](Gravity.CENTER);
                                _0x2bf6x159['setOnClickListener'](new View.OnClickListener({
                                    onClick: function(_0x2bf6x132) {
                                        ccrash();
                                        fctoast('感谢使用Skiddy ~Koikoi ~心语')
                                    }
                                }));
                                _0x2bf6x147['addView'](_0x2bf6x159);
                                var spams = new Switch(ctx);
                                spams['setText']('开启刷屏');
                                spams['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                spams['setPadding'](10, 3, 3, 3);
                                spams['setTextSize'](15);
                                spams['setBackground'](module);
                                spams['getBackground']()['setAlpha'](120);
                                spams['setChecked'](spamed);
                                spams['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!spamed) {
                                            spamss = true;
                                            spamed = true;
                                            fctoast('在聊天框内发送!spam <text>来刷屏')
                                        } else {
                                            spamss = false;
                                            spamed = false
                                        };
                                        spams['setChecked'](spamed)
                                    }
                                }));
                                _0x2bf6x147['addView'](spams);
                                var leetspeaks = new Switch(ctx);
                                leetspeaks['setText']('特色英语');
                                leetspeaks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                leetspeaks['setPadding'](10, 3, 3, 3);
                                leetspeaks['setTextSize'](15);
                                leetspeaks['setBackground'](module);
                                leetspeaks['getBackground']()['setAlpha'](120);
                                leetspeaks['setChecked'](leetspeaked);
                                leetspeaks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!leetspeaked) {
                                            leetspeakss = true;
                                            leetspeaked = true
                                            fctoast('XinYu:可以把你发出的英文用各种符号拼接的方式，形成乱码')
                                        } else {
                                            leetspeakss = false;
                                            leetspeaked = false
                                        };
                                        leetspeaks['setChecked'](leetspeaked)
                                    }
                                }));
                                _0x2bf6x147['addView'](leetspeaks);
                                var criticaltrailss = new Switch(ctx);
                                criticaltrailss['setText']('临时粒子');
                                criticaltrailss['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                criticaltrailss['setPadding'](10, 3, 3, 3);
                                criticaltrailss['setTextSize'](15);
                                criticaltrailss['setBackground'](module);
                                criticaltrailss['getBackground']()['setAlpha'](120);
                                criticaltrailss['setChecked'](criticaltrailsed);
                                criticaltrailss['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!criticaltrailsed) {
                                            criticaltrailsss = true;
                                            criticaltrailsed = true;
                                            fctoast('XinYu:会很卡！')
                                        } else {
                                            criticaltrailsss = false;
                                            criticaltrailsed = false
                                        };
                                        criticaltrailss['setChecked'](criticaltrailsed)
                                    }
                                }));
                                _0x2bf6x147['addView'](criticaltrailss);
                                var firepunchs = new Switch(ctx);
                                firepunchs['setText']('火焰手');
                                firepunchs['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                firepunchs['setPadding'](10, 3, 3, 3);
                                firepunchs['setTextSize'](15);
                                firepunchs['setBackground'](module);
                                firepunchs['getBackground']()['setAlpha'](120);
                                firepunchs['setChecked'](firepunched);
                                firepunchs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!firepunched) {
                                            firepunchss = true;
                                            firepunched = true
                                        } else {
                                            firepunchss = false;
                                            firepunched = false
                                        };
                                        firepunchs['setChecked'](firepunched)
                                    }
                                }));
                                _0x2bf6x147['addView'](firepunchs);
                                var derps = new Switch(ctx);
                                derps['setText']('摇头[旋转]');
                                derps['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                derps['setPadding'](10, 3, 3, 3);
                                derps['setTextSize'](15);
                                derps['setBackground'](module);
                                derps['getBackground']()['setAlpha'](120);
                                derps['setChecked'](derped);
                                derps['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!derped) {
                                            derpss = true;
                                            derped = true
                                        } else {
                                            derpss = false;
                                            derped = false
                                        };
                                        derps['setChecked'](derped)
                                    }
                                }));
                                _0x2bf6x147['addView'](derps);
                                var twerks = new Switch(ctx);
                                twerks['setText']('疯狂潜行');
                                twerks['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                twerks['setPadding'](10, 3, 3, 3);
                                twerks['setTextSize'](15);
                                twerks['setBackground'](module);
                                twerks['getBackground']()['setAlpha'](120);
                                twerks['setChecked'](twerked);
                                twerks['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!twerked) {
                                            twerkss = true;
                                            twerked = true
                                        } else {
                                            twerkss = false;
                                            twerked = false
                                        };
                                        twerks['setChecked'](twerked)
                                    }
                                }));
                                _0x2bf6x147['addView'](twerks);
                                var backfaces = new Switch(ctx);
                                backfaces['setText']('摇头[上下]');
                                backfaces['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                backfaces['setPadding'](10, 3, 3, 3);
                                backfaces['setTextSize'](15);
                                backfaces['setBackground'](module);
                                backfaces['getBackground']()['setAlpha'](120);
                                backfaces['setChecked'](backfaceed);
                                backfaces['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!backfaceed) {
                                            backfacess = true;
                                            backfaceed = true
                                        } else {
                                            backfacess = false;
                                            backfaceed = false
                                        };
                                        backfaces['setChecked'](backfaceed)
                                    }
                                }));
                                _0x2bf6x147['addView'](backfaces);
                                var stealths = new Switch(ctx);
                                stealths['setText']('秘密飞行');
                                stealths['setTextColor'](android['graphics']['Color']['rgb'](255, 0, 255));
                                stealths['setPadding'](10, 3, 3, 3);
                                stealths['setTextSize'](15);
                                stealths['setBackground'](module);
                                stealths['getBackground']()['setAlpha'](120);
                                stealths['setChecked'](stealthed);
                                stealths['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!stealthed) {
                                            stealthss = true;
                                            stealthed = true
                                        } else {
                                            stealthss = false;
                                            stealthed = false
                                        };
                                        stealths['setChecked'](stealthed)
                                    }
                                }));
                                _0x2bf6x147['addView'](stealths);
                                menu4 = new PopupWindow(_0x2bf6x149, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 4, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']());
                                menu4['setAnimationStyle'](android['R']['style'].Animation_InputMethod);
                                menu4['showAtLocation'](ctx['getWindow']()['getDecorView'](), 1, 0, 0)
                            } catch (error) {
                                Toast['makeText'](ctx, 'Flqme Error: ' + error, 1)['show']()
                            }
                        }
                    }))
                }
                menu = new PopupWindow(_0x2bf6x149, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 5, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']() / 1);
                menu['setAnimationStyle'](android['R']['style'].Animation_InputMethod);
                menu['showAtLocation'](ctx['getWindow']()['getDecorView'](), 0, 0, 0)
            } catch (error) {
                Toast['makeText'](ctx, 'Flqme Error: ' + error, 1)['show']()
            }
        }
    }))
}

function exit() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x15c = new LinearLayout(ctx);
                var _0x2bf6x15d = new Button(ctx);
                _0x2bf6x15d['setText']('X');
                _0x2bf6x15d['setTextColor'](Color['rgb'](255, 128, 0));
                _0x2bf6x15d['setTextSize'](15);
                _0x2bf6x15d['setBackground'](xbg);
                _0x2bf6x15d['getBackground']()['setAlpha'](150);
                _0x2bf6x15d['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        exitUI['dismiss']();
                        menu['dismiss']();
                        showMenuBtn()
                    }
                }));
                _0x2bf6x15c['addView'](_0x2bf6x15d);
                exitUI = new PopupWindow(_0x2bf6x15c, dip2px(40), dip2px(40));
                exitUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitUI['setAnimationStyle'](android['R']['style'].Animation_Translucent);
                exitUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function exitcombat() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x15c = new LinearLayout(ctx);
                var _0x2bf6x15d = new Button(ctx);
                _0x2bf6x15d['setText']('X');
                _0x2bf6x15d['setTextColor'](Color['rgb'](255, 128, 0));
                _0x2bf6x15d['setTextSize'](15);
                _0x2bf6x15d['setBackground'](xbg);
                _0x2bf6x15d['getBackground']()['setAlpha'](150);
                _0x2bf6x15d['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        exitcombatUI['dismiss']();
                        menu1['dismiss']();
                        mainMenu();
                        exit()
                    }
                }));
                _0x2bf6x15c['addView'](_0x2bf6x15d);
                exitcombatUI = new PopupWindow(_0x2bf6x15c, dip2px(40), dip2px(40));
                exitcombatUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitcombatUI['setAnimationStyle'](android['R']['style'].Animation_Translucent);
                exitcombatUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function exitmotion() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x15c = new LinearLayout(ctx);
                var _0x2bf6x15d = new Button(ctx);
                _0x2bf6x15d['setText']('X');
                _0x2bf6x15d['setTextColor'](Color['rgb'](255, 128, 0));
                _0x2bf6x15d['setTextSize'](15);
                _0x2bf6x15d['setBackground'](xbg);
                _0x2bf6x15d['getBackground']()['setAlpha'](150);
                _0x2bf6x15d['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        exitmotionUI['dismiss']();
                        menu2['dismiss']();
                        mainMenu();
                        exit()
                    }
                }));
                _0x2bf6x15c['addView'](_0x2bf6x15d);
                exitmotionUI = new PopupWindow(_0x2bf6x15c, dip2px(40), dip2px(40));
                exitmotionUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitmotionUI['setAnimationStyle'](android['R']['style'].Animation_Translucent);
                exitmotionUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function exitplayer() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x15c = new LinearLayout(ctx);
                var _0x2bf6x15d = new Button(ctx);
                _0x2bf6x15d['setText']('X');
                _0x2bf6x15d['setTextColor'](Color['rgb'](255, 128, 0));
                _0x2bf6x15d['setTextSize'](15);
                _0x2bf6x15d['setBackground'](xbg);
                _0x2bf6x15d['getBackground']()['setAlpha'](150);
                _0x2bf6x15d['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        exitplayerUI['dismiss']();
                        menu3['dismiss']();
                        mainMenu();
                        exit()
                    }
                }));
                _0x2bf6x15c['addView'](_0x2bf6x15d);
                exitplayerUI = new PopupWindow(_0x2bf6x15c, dip2px(40), dip2px(40));
                exitplayerUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitplayerUI['setAnimationStyle'](android['R']['style'].Animation_Translucent);
                exitplayerUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function exitmisc() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x2bf6x15c = new LinearLayout(ctx);
                var _0x2bf6x15d = new Button(ctx);
                _0x2bf6x15d['setText']('X');
                _0x2bf6x15d['setTextColor'](Color['rgb'](255, 128, 0));
                _0x2bf6x15d['setTextSize'](15);
                _0x2bf6x15d['setBackground'](xbg);
                _0x2bf6x15d['getBackground']()['setAlpha'](150);
                _0x2bf6x15d['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x2bf6x132) {
                        exitmiscUI['dismiss']();
                        menu4['dismiss']();
                        mainMenu();
                        exit()
                    }
                }));
                _0x2bf6x15c['addView'](_0x2bf6x15d);
                exitmiscUI = new PopupWindow(_0x2bf6x15c, dip2px(40), dip2px(40));
                exitmiscUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitmiscUI['setAnimationStyle'](android['R']['style'].Animation_Translucent);
                exitmiscUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function getNearestEntity(_0x2bf6x163) {
    var _0x2bf6x164 = Server['getAllPlayers']();
    var _0x2bf6x165 = _0x2bf6x163;
    var _0x2bf6x166 = null;
    for (var _0x2bf6x167 = 0; _0x2bf6x167 < _0x2bf6x164['length']; _0x2bf6x167++) {
        var _0x2bf6x28 = Entity['getX'](_0x2bf6x164[_0x2bf6x167]) - getPlayerX();
        var _0x2bf6x27 = Entity['getY'](_0x2bf6x164[_0x2bf6x167]) - getPlayerY();
        var _0x2bf6x29 = Entity['getZ'](_0x2bf6x164[_0x2bf6x167]) - getPlayerZ();
        var _0x2bf6x168 = Math['sqrt'](Math['pow'](_0x2bf6x28, 2) + Math['pow'](_0x2bf6x27, 2) + Math['pow'](_0x2bf6x29, 2));
        if (_0x2bf6x168 < _0x2bf6x165 && _0x2bf6x168 > 0 && Entity['getHealth'](_0x2bf6x164[_0x2bf6x167]) >= 1 && isNotTeam(_0x2bf6x166)) {
            _0x2bf6x165 = _0x2bf6x168;
            _0x2bf6x166 = _0x2bf6x164[_0x2bf6x167]
        }
    };
    if (isNotTeam(_0x2bf6x166)) {
        return _0x2bf6x166
    }
}

function nearArrow(_0x2bf6x16a) {
    var _0x2bf6x16b = Entity['getAll']();
    var _0x2bf6x165 = _0x2bf6x16a;
    var _0x2bf6x166 = null;
    for (var _0x2bf6x167 = 0; _0x2bf6x167 < _0x2bf6x16b['length']; _0x2bf6x167++) {
        var _0x2bf6x28 = Entity['getX'](_0x2bf6x16b[_0x2bf6x167]) - getPlayerX();
        var _0x2bf6x27 = Entity['getY'](_0x2bf6x16b[_0x2bf6x167]) - getPlayerY();
        var _0x2bf6x29 = Entity['getZ'](_0x2bf6x16b[_0x2bf6x167]) - getPlayerZ();
        var _0x2bf6x168 = Math['sqrt'](Math['pow'](_0x2bf6x28, 2) + Math['pow'](_0x2bf6x27, 2) + Math['pow'](_0x2bf6x29, 2));
        if (_0x2bf6x168 < _0x2bf6x165 && _0x2bf6x168 > 0) {
            _0x2bf6x165 = _0x2bf6x168;
            _0x2bf6x166 = _0x2bf6x16b[_0x2bf6x167]
        }
    };
    return _0x2bf6x166
}

function removeColors(_0x2bf6x25) {
    var _0x2bf6x16d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'k', 'l', 'm', 'n', 'o', 'r'];
    if (_0x2bf6x25 != null) {
        _0x2bf6x16d['forEach'](function(_0x2bf6x16e) {
            _0x2bf6x25 = _0x2bf6x25['replace'](new RegExp('§' + _0x2bf6x16e, 'g'), '')
        });
        return _0x2bf6x25
    } else {
        return ''
    }
}

function isNotTeam(_0x2bf6x166) {
    var _0x2bf6x170 = true;
    for (i = 0; i < team['length']; i++) {
        var _0x2bf6x171 = removeColors(Entity['getNameTag'](_0x2bf6x166));
        if (_0x2bf6x171 == team[i]) {
            _0x2bf6x170 = false
        }
    };
    return _0x2bf6x170
}

function aimAtEnt(_0x2bf6x166, _0x2bf6x173) {
    if (_0x2bf6x166 != null) {
        var _0x2bf6x174 = Entity['getX'](_0x2bf6x166) - getPlayerX();
        var _0x2bf6x175 = Entity['getY'](_0x2bf6x166) - getPlayerY();
        var _0x2bf6x176 = Entity['getZ'](_0x2bf6x166) - getPlayerZ();
        if (_0x2bf6x173 != null && posinstanceofArray) {
            _0x2bf6x174 = Entity['getX'](_0x2bf6x166) - _0x2bf6x173[0];
            _0x2bf6x175 = Entity['getY'](_0x2bf6x166) - _0x2bf6x173[1];
            _0x2bf6x176 = Entity['getZ'](_0x2bf6x166) - _0x2bf6x173[2]
        };
        var _0x2bf6x177 = '63';
        if (Entity['getEntityTypeId'](_0x2bf6x166) != _0x2bf6x177) {
            _0x2bf6x175 += 0.5
        };
        var _0x2bf6x178 = Entity['getX'](_0x2bf6x166) + 0.5;
        var _0x2bf6x179 = Entity['getY'](_0x2bf6x166);
        var _0x2bf6x17a = Entity['getZ'](_0x2bf6x166) + 0.5;
        var _0x2bf6x17b = Math['sqrt'](_0x2bf6x174 * _0x2bf6x174 + _0x2bf6x175 * _0x2bf6x175 + _0x2bf6x176 * _0x2bf6x176);
        var _0x2bf6x175 = _0x2bf6x175 / _0x2bf6x17b;
        var _0x2bf6x17c = Math['asin'](_0x2bf6x175);
        _0x2bf6x17c = _0x2bf6x17c * 180.0 / Math['PI'];
        _0x2bf6x17c = -_0x2bf6x17c;
        var _0x2bf6x17d = -Math['atan2'](_0x2bf6x178 - (Player['getX']() + 0.5), _0x2bf6x17a - (Player['getZ']() + 0.5)) * (180 / Math['PI']);
        if (_0x2bf6x17c < 89 && _0x2bf6x17c > -89) {
            Entity['setRot'](Player['getEntity'](), _0x2bf6x17d, _0x2bf6x17c)
        }
    }
}

function bowAimAt(_0x2bf6x166) {
    var _0x2bf6x17f = 1;
    var _0x2bf6x180 = Entity['getX'](_0x2bf6x166) - Player['getX']();
    var _0x2bf6x181 = Entity['getEntityTypeId'](_0x2bf6x166) == EntityType['PLAYER'] ? Entity['getY'](_0x2bf6x166) - Player['getY']() : Entity['getY'](_0x2bf6x166) + 1 - Player['getY']();
    var _0x2bf6x182 = Entity['getZ'](_0x2bf6x166) - Player['getZ']();
    var _0x2bf6x17d = (Math['atan2'](_0x2bf6x182, _0x2bf6x180) * 180 / Math['PI']) - 90;
    var _0x2bf6x183 = Math['sqrt'](_0x2bf6x180 * _0x2bf6x180 + _0x2bf6x182 * _0x2bf6x182);
    var _0x2bf6x184 = 0.007;
    var _0x2bf6x185 = (_0x2bf6x17f * _0x2bf6x17f * _0x2bf6x17f * _0x2bf6x17f - _0x2bf6x184 * (_0x2bf6x184 * (_0x2bf6x183 * _0x2bf6x183) + 2 * _0x2bf6x181 * (_0x2bf6x17f * _0x2bf6x17f)));
    var _0x2bf6x17c = -(180 / Math['PI']) * (Math['atan']((_0x2bf6x17f * _0x2bf6x17f - Math['sqrt'](_0x2bf6x185)) / (_0x2bf6x184 * _0x2bf6x183)));
    if (_0x2bf6x17c < 89 && _0x2bf6x17c > -89) {
        setRot(Player['getEntity'](), _0x2bf6x17d, _0x2bf6x17c)
    }
}

function entityHurtHook(_0x2bf6x187, _0x2bf6x188, _0x2bf6x189) {
    if (antikbss) {
        return;
        Entity['setImmobile'](getPlayerEnt, true);
        kbTick = 1
    }
}

function toDirectionalVector(_0x2bf6x18b, _0x2bf6x18c, _0x2bf6x18d) {
    _0x2bf6x18b[0] = Math['cos'](_0x2bf6x18c) * Math['cos'](_0x2bf6x18d);
    _0x2bf6x18b[1] = Math['sin'](_0x2bf6x18d);
    _0x2bf6x18b[2] = Math['sin'](_0x2bf6x18c) * Math['cos'](_0x2bf6x18d)
}

function attackHook(_0x2bf6x187, _0x2bf6x188) {
    if (_0x2bf6x187 == Player['getEntity']() && grappless && Entity['getHealth'](_0x2bf6x188) > 0) {
        setPosition(getPlayerEnt(), Entity['getX'](_0x2bf6x188), Entity['getY'](_0x2bf6x188), Entity['getZ'](_0x2bf6x188))
    };
    if (_0x2bf6x187 == Player['getEntity']() && criticales && Entity['getHealth'](_0x2bf6x188) > 0) {
        if (critTick >= 13) {
            critTick = 0
        }
    };
    if (_0x2bf6x187 == Player.getEntity() && bypasshitboxs && Entity.getHealth(_0x2bf6x188) > 0) {
        Entity.setCollisionSize(_0x2bf6x188, 10, 30);
    }
    if (_0x2bf6x187 == Player['getEntity']() && hitjumpss && Utils['Player']['isOnGround']()) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (_0x2bf6x187 == Player['getEntity']() && firepunchss) {
        var _0x2bf6x18f = Entity['getX'](_0x2bf6x188);
        var _0x2bf6x190 = Entity['getY'](_0x2bf6x188);
        var _0x2bf6x191 = Entity['getZ'](_0x2bf6x188);
        Level['addParticle'](ParticleType['lava'], _0x2bf6x18f - 0.2, _0x2bf6x190 + 1, _0x2bf6x191, 0, 0, 0, 180);
        Level['addParticle'](ParticleType['flame'], _0x2bf6x18f - 0.2, _0x2bf6x190 + 1, _0x2bf6x191, 0, 0, 0, 400);
        Entity['setFireTicks'](_0x2bf6x188, 999)
    };
    if (_0x2bf6x187 == Player['getEntity']() && behindhitss) {
        var _0x2bf6x192 = getYaw() + 90;
        var _0x2bf6x193 = getPitch() - 180;
        x = Math['cos'](_0x2bf6x192 * (Math['PI'] / 180));
        y = Math['sin'](_0x2bf6x193 * (Math['PI'] / 180));
        z = Math['sin'](_0x2bf6x192 * (Math['PI'] / 180));
        setVelX(Player['getEntity'](), x * 1);
        setVelY(Player['getEntity'](), y * 1);
        setVelZ(Player['getEntity'](), z * 1)
    }
}

function destroyBlock(_0x2bf6x28, _0x2bf6x27, _0x2bf6x29, _0x2bf6x195) {
    if (forcedestroyss && getTile(_0x2bf6x28, _0x2bf6x27, _0x2bf6x29) != 0) {
        Level['setTile'](_0x2bf6x28, _0x2bf6x27, _0x2bf6x29, 0, 0)
    }
}

function useItem(_0x2bf6x28, _0x2bf6x27, _0x2bf6x29, _0x2bf6x197, _0x2bf6x198, _0x2bf6x195, _0x2bf6x199, _0x2bf6x19a) {
    if (tapjumpss) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (taptpss && getTile(_0x2bf6x28, _0x2bf6x27 + 1, _0x2bf6x29) == 0 && getTile(_0x2bf6x28, _0x2bf6x27 + 2, _0x2bf6x29) == 0) {
        Entity['setPosition'](Player['getEntity'](), _0x2bf6x28 + 0.5, _0x2bf6x27 + 2.63, _0x2bf6x29 + 0.5)
    };
    if (placetpss) {
        if (_0x2bf6x195 == BlockFace['NORTH']) {
            Entity['setPositionRelative'](getPlayerEnt(), 0, 0, -1)
        } else {
            if (_0x2bf6x195 == BlockFace['SOUTH']) {
                Entity['setPositionRelative'](getPlayerEnt(), 0, 0, 1)
            } else {
                if (_0x2bf6x195 == BlockFace['WEST']) {
                    Entity['setPositionRelative'](getPlayerEnt(), -1, 0, 0)
                } else {
                    if (_0x2bf6x195 == BlockFace['EAST']) {
                        Entity['setPositionRelative'](getPlayerEnt(), 1, 0, 0)
                    } else {
                        if (_0x2bf6x195 == BlockFace['UP']) {
                            Entity['setPositionRelative'](getPlayerEnt(), 0, 1, 0)
                        }
                    }
                }
            }
        }
    };
    if (ghosthandss && Player['getCarriedItem']() == 0) {
        Level['setTile'](_0x2bf6x28, _0x2bf6x27, _0x2bf6x29, 0, 0);
        Level['setTile'](_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29, 0, 0)
    }
}

function modTick() {
    timer++;
    var _0x2bf6x19c = Player['getX']();
    var _0x2bf6x19d = Player['getY']();
    var _0x2bf6x19e = Player['getZ']();
    var _0x2bf6x28 = Player['getX']();
    var _0x2bf6x27 = Player['getY']();
    var _0x2bf6x29 = Player['getZ']();
    if (antikbss || Entity['getHealth'](getPlayerEnt()) <= 0) {
        if (kbTick >= 1) {
            kbTick--
        } else {
            Entity['setImmobile'](getPlayerEnt(), false)
        };
        if (kbHealth > Entity['getHealth'](getPlayerEnt())) {
            Entity['setImmobile'](getPlayerEnt(), true);
            kbTick = 1
        };
        kbTick = 0;
        kbHealth = Entity['getHealth'](getPlayerEnt())
    };
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (reachss) {
        if (Level['getGameMode']() == 0) {
            Level['setGameMode'](1);
            Player['setCanFly'](false)
        }
    };
    if (stepss && Utils['Player']['isCollidedHorizontally']()) {
        Entity['setPositionRelative'](getPlayerEnt(), 0, 1.6, 0)
    };
    if (cstepss && Utils['Player']['isCollidedHorizontally']()) {
        setVelY(Player['getEntity'](), 0.6)
    };
    if (speedss && Utils['Player']['isOnGround']()) {
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.5);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.5)
    };
    if (zoomspeedss) {
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.1);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.1)
    };
    if (upglidess) {
        setVelY(getPlayerEnt(), 0.3)
    };
    if (criticaltrailsss) {
        Level['addParticle'](ParticleType['crit'], getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10)
    };
    if (highjumpss) {
        if (Entity['getVelY'](getPlayerEnt()) < -0.1) {
            setVelY(getPlayerEnt(), -0.5)
        };
        if (Entity['getVelY'](getPlayerEnt()) < 0.35 && Entity['getVelY'](getPlayerEnt()) > 0.2 && can == 1 && canGetHP == 1) {
            setVelY(getPlayerEnt(), 0.6);
            can = 2;
            HP = Entity['getHealth'](getPlayerEnt());
            canGetHP = 0
        };
        if (Entity['getVelY'](getPlayerEnt()) > gravity && can == 2) {
            Player['setHealth'](HP);
            canGetHP = 1;
            can = 0

        };
        if (Entity['getVelY'](getPlayerEnt()) == gravity && can == 0) {
            Player['setHealth'](HP);
            canGetHP = 1;
            can = 1
        }
    };
    if (isDev == false && Entity['getNameTag'](getPlayerEnt()) == 'FirePro9978' || Entity['getNameTag'](getPlayerEnt()) == 'NNeBBuRR') {
        canBeDev = true
    };
    if (autowalkss) {
        var _0x2bf6x13a = [0, 0, 0];
        toDirectionalVector(_0x2bf6x13a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        setVelX(getPlayerEnt(), 0.4 * _0x2bf6x13a[0]);
        setVelZ(getPlayerEnt(), 0.4 * _0x2bf6x13a[2])
    };
    if (jetpackss) {
        var _0x2bf6x192 = getYaw() + 90;
        var _0x2bf6x193 = getPitch() - 180;
        _0x2bf6x28 = Math['cos'](_0x2bf6x192 * (Math['PI'] / 180));
        _0x2bf6x27 = Math['sin'](_0x2bf6x193 * (Math['PI'] / 180));
        _0x2bf6x29 = Math['sin'](_0x2bf6x192 * (Math['PI'] / 180));
        setVelX(Player['getEntity'](), _0x2bf6x28 * 1);
        setVelY(Player['getEntity'](), _0x2bf6x27 * 1);
        setVelZ(Player['getEntity'](), _0x2bf6x29 * 1)
    };
    if (cspeedss) {
        if (Entity['isSneaking'](Player['getEntity']()) == true) {
            setVelY(getPlayerEnt(), -100.0);
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.7);
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.7)
        }
    };
    if (team[0] == null) {
        team['push']('XinYu404');
    };
    if (dolphinss && Utils['Player']['isInWater']()) {
        setVelY(getPlayerEnt(), 0.1)
    };
    if (solidliquidss) {
        Block['setShape'](8, null, null, null, null, null, null);
        Block['setShape'](9, null, null, null, null, null, null);
        Block['setShape'](10, null, null, null, null, null, null);
        Block['setShape'](11, null, null, null, null, null, null);
        Block['defineBlock'](8, 'Water', [
            ['still_water', 0]
        ], 8, true, 4);
        Block['defineBlock'](9, 'Stationary Water', [
            ['still_water', 0]
        ], 9, true, 4);
        Block['defineBlock'](10, 'Lava', [
            ['still_lava', 0]
        ], 10, true, 4);
        Block['defineBlock'](11, 'Stationary Lava', [
            ['still_lava', 0]
        ], 11, true, 4)
    };
    if (wallhackss) {
        Entity['setCollisionSize'](Player['getEntity'](), 0, 0)
    };
    if (glidess) {
        setVelY(getPlayerEnt(), -glideSpeed)
    };
    if (dmgglidess) {
        setPosition(getPlayerEnt(), _0x2bf6x19c, _0x2bf6x19d + 0.19, _0x2bf6x19e);
        setVelY(getPlayerEnt(), -0.3)
    };
    if (criticales && critTick < 22) {
        critTick++;
        if (critTick == 13) {
            Entity['setPositionRelative'](getPlayerEnt(), 0, 2, 0)
        };
        if (critTick == 12) {
            criticalTick = 12
        };
        if (criticalTick > 0) {
            criticalTick--;
            setVelY(getPlayerEnt(), -0.2)
        }
    };
    if (hitboxs) {
        ent = getNearestEntity(7);
        Entity.setCollisionSize(ent, 7.3, 10);
    }
    if (mineplexflys) {
        Player['setCanFly'](true);
        Player['setFlying'](true)
    };
    if (mineplexflys) {
        setVelY(getPlayerEnt(), -0.007);
    }
    if (inpvpflys) {
        setPosition(getPlayerEnt(), _0x2bf6x19c, _0x2bf6x19d + 0.19, _0x2bf6x19e);
        setVelY(getPlayerEnt(), -0.2)
    };
    if (autoswordss) {
        var _0x2bf6x19f = 0;
        var _0x2bf6x1a0 = Player['getInventorySlot'](_0x2bf6x19f);
        if (_0x2bf6x1a0 == 276 || _0x2bf6x1a0 == 268 || _0x2bf6x1a0 == 283 || _0x2bf6x1a0 == 267 || _0x2bf6x1a0 == 272) {
            var _0x2bf6x1a1 = _0x2bf6x19f
        } else {
            _0x2bf6x19f++
        };
        if (_0x2bf6x19f = 27) {
            _0x2bf6x19f = 0
        };
        var _0x2bf6x166 = getNearestEntity(7);
        if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
            Player['setSelectedSlotId'](_0x2bf6x1a1)
        }
    };
    if (jumpspeedss && Utils['Player']['isOnGround']()) {
        setVelY(getPlayerEnt(), 0.2);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.7);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.7)
    };
    if (bypassglidess) {
        bgtick++;
        if (Entity['getVelY'](getPlayerEnt()) < 1) {
            setVelY(Player['getEntity'](), -0.2);
            if (bgtick == 8) {
                setVelY(getPlayerEnt(), -0.5);
                setVelX(getPlayerEnt(), 0);
                setVelZ(getPlayerEnt(), 0);
                bgtick = 0
            }
        }
    };
    if (longhopss && Utils['Player']['isOnGround']()) {
        lhtick++;
        if (lhtick >= 8) {
            lhtick = 0
        };
        if (Utils['Velocity']['calculateSpeed']() >= 0.106 && lhtick == 0) {
            var _0x2bf6x13a = [0, 0, 0];
            toDirectionalVector(_0x2bf6x13a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
            setVelX(getPlayerEnt(), _0x2bf6x13a[0]);
            setVelY(getPlayerEnt(), 0.45);
            setVelZ(getPlayerEnt(), _0x2bf6x13a[2])
        } else {
            if (Utils['Velocity']['calculateSpeed']() <= 0.105 && lhtick == 0) {
                setVelX(getPlayerEnt(), 0);
                setVelZ(getPlayerEnt(), 0)
            }
        }
    };
    if (autoclimbss && Utils['Player']['isOnLadder']()) {
        setVelY(getPlayerEnt(), acspd)
    };
    if (sglidess) {
        Entity['setVelY'](getPlayerEnt(), -0.500);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.2);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.2)
    };
    if (fastbreakss) {
        Utils['Block']['fastBreak']()
    };
    if (fullbrightss) {
        Block['setLightLevel'](0, 15)
    };
    if (timer % 5 == 0 && Utils['Player']['isOnGround']()) {
        fallbackX = Player['getX']();
        fallbackY = Player['getY']();
        fallbackZ = Player['getZ']()
    };
    if (timer % 2 == 0 && Utils['Player']['isOnGround']()) {
        regenX = Player['getX']();
        regenZ = Player['getX']()
    };
    if (fallbackss) {
        var _0x2bf6x1a2 = Player['getX']();
        var _0x2bf6x1a3 = Player['getY']();
        var _0x2bf6x1a4 = Player['getZ']();
        if (fallbackY - 2 > _0x2bf6x1a3) {
            Entity['setPosition'](Player['getEntity'](), fallbackX, fallbackY, fallbackZ)
        }
    };
    if (fastfallss) {
        if (!Utils['Player']['isOnGround']() && Entity['getVelY'](getPlayerEnt()) <= -0.07840000092983246 || fallbackY - 2 > _0x2bf6x27) {
            setVelY(getPlayerEnt(), -100)
        }
    };
    if (regenerationss) {
        var _0x2bf6x1a2 = Player['getX']();
        var _0x2bf6x1a4 = Player['getZ']();
        if (Entity['getHealth'](getPlayerEnt()) != 20 && Player['getHunger']() == 20 && regenX == _0x2bf6x1a2 || regenZ == _0x2bf6x1a4) {
            ModPE['setGameSpeed'](120)
        } else {
            if (Entity['getHealth'](getPlayerEnt()) == 20 && regenX != _0x2bf6x1a2 || regenZ != _0x2bf6x1a4) {
                ModPE['setGameSpeed'](20)
            }
        }
    };
    if (sregenss) {
        ModPE['setGameSpeed'](120);
        Entity['setImmobile'](Player['getEntity'](), true)
    };
    if (lbsgspeedss) {
        ModPE['setGameSpeed'](30)
    };
    if (frostwalkerss) {
        var _0x2bf6x28 = Player['getX']();
        var _0x2bf6x27 = Player['getY']();
        var _0x2bf6x29 = Player['getZ']();
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29) == 8) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29, 79, 0)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29) == 9) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29, 79, 0)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29) == 10) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29, 4, 0)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29) == 11) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29, 4, 0)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29) == 8) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29, 79, 0);
            setPosition(getPlayerEnt(), _0x2bf6x28, _0x2bf6x27 + 1, _0x2bf6x29)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29) == 9) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29, 79, 0);
            setPosition(getPlayerEnt(), _0x2bf6x28, _0x2bf6x27 + 1, _0x2bf6x29)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29) == 10) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29, 4, 0);
            setPosition(getPlayerEnt(), _0x2bf6x28, _0x2bf6x27 + 1, _0x2bf6x29)
        };
        if (getTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29) == 11) {
            setTile(_0x2bf6x28, _0x2bf6x27 - 1, _0x2bf6x29, 4, 0);
            setPosition(getPlayerEnt(), _0x2bf6x28, _0x2bf6x27 + 1, _0x2bf6x29)
        }
    };
    if (safewalkss) {
        Entity['setSneaking'](Player['getEntity'](), true)
    };
    if (scaffoldwalkss) {
        var _0x2bf6x28 = Player['getX']();
        var _0x2bf6x27 = Player['getY']();
        var _0x2bf6x29 = Player['getZ']();
        setTile(_0x2bf6x28, _0x2bf6x27 - 2, _0x2bf6x29, 87, 0)
    };
    if (arrowdodgess) {
        var _0x2bf6x1a5 = nearArrow(5);
        if (_0x2bf6x1a5 != null && Entity['getEntityTypeId'](_0x2bf6x1a5) == EntityType['ARROW']) {
            setPosition(getPlayerEnt(), _0x2bf6x28 + 0.5, _0x2bf6x27, _0x2bf6x29)
        }
    };
    if (bedbreakerss) {
        if (Player['getPointedBlockId']() == 26) {
            Level['destroyBlock'](Player['getPointedBlockX'](), Player['getPointedBlockY'](), Player['getPointedBlockZ'](), true)
        }
    };
    if (godmodes) {
        Player.setHealth(20);
    }
}

function chatHook(_0x2bf6x25) {
    var _0x2bf6x1a7 = _0x2bf6x25['split'](' ');
    var fct = '§l§4[§r§6Skiddy§l§4§l]§r§6: ';
    if (_0x2bf6x25['charAt'](0) == '!') {
        preventDefault();
        com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get']()['updateTextboxText']('')
    };
    if (_0x2bf6x1a7[0] == '!') {
        clientMessage(fct + '命令不正确，请使用 !help <page>');
        preventDefault()
    };
    if (_0x2bf6x1a7[0] == '!help') {
        if (_0x2bf6x1a7[1] == '1' || _0x2bf6x1a7[1] == null) {
            clientMessage(fct + '帮助页码: 1/5');
            clientMessage(fct + '可用命令: ');
            clientMessage(fct + '!help > 查看可用的命令 > : !help <page>');
            clientMessage(fct + '!glidespeed > 使用滑动模块设置滑行速度 > 使用: !glidespeed <number> or default');
            clientMessage(fct + '!setfov > 用指定的数字设置FOV > 使用: !setfov <number or default>');
            clientMessage(fct + '!setspeed > 用指定的数字设置游戏速度 > 使用: !setspeed <number or default>');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == '2') {
            clientMessage(fct + '帮助页码: 2/5');
            clientMessage(fct + '可用命令: ');
            clientMessage(fct + '!gamemode > 将您的游戏设置为指定的游戏 > 使用: !gamemode <number> or gamemode');
            clientMessage(fct + '!vclip > 输入数字给传送到新高度 > 使用: !vclip <number, can use - like -3>');
            clientMessage(fct + '!team > 添加或删除给定名称上的队友(可以不会自瞄他) > 使用: !team <add or remove> <nametag>');
            clientMessage(fct + '!teamlist > 在聊天中展示你的队友 > 使用: !teamlist');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == '3') {
            clientMessage(fct + '帮助页码: 3/5');
            clientMessage(fct + '可用命令: ');
            clientMessage(fct + '!spam > 设置单词来使用刷屏 > 使用: !spam <word>');
            clientMessage(fct + '!spamdelay > 设置使用刷屏时的发送延迟 > 使用: !spamdelay <seconds>');
            clientMessage(fct + '!acspeed > 设定自动爬墙速度 > 使用: !acspeed <speed>');
            clientMessage(fct + '!nwrange > 设置玩家提示信息范围 > 使用: !nwrange <range>');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == '4') {
            clientMessage(fct + '帮助页码: 4/5');
            clientMessage(fct + '可用命令: ');
            clientMessage(fct + '!freeze > 定住自己(你仍然可以看到发生了什么) > 使用: !freeze <on/off>');
            clientMessage(fct + '!info > 提供客户及其开发人员的信息 > 使用: !info');
            clientMessage(fct + '!tp > 设置坐标来传送自己 > 使用: !tp <x> <y> <z>');
            clientMessage(fct + '!theme > 改变主题 > 使用: !theme <flqme/infqrno>');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == '5') {
            clientMessage(fct + '帮助页码: 5/5');
            clientMessage(fct + '可用命令: ');
            clientMessage(fct + '!search > 搜索给定文本(百度) > 使用: !search <text>');
            clientMessage(fct + '!fe > 强迫附魔手中的物品 > 使用: !fe <sword/bow/tool/armor>');
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!glidespeed') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '把数字放在!glidespeed后面. 例如: !glidespeed 5 将把滑行速度设置为0.5');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null && _0x2bf6x1a7[1] != 'default') {
            glideSpeed = _0x2bf6x1a7[1] * 0.1;
            clientMessage(fct + '滑行速度被设定为: ' + _0x2bf6x1a7[1] * 0.1);
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == 'default') {
            glideSpeed = 0.3;
            clientMessage(fct + '滑行速度设置为默认');
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!setfov') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '把一个数字放在!setfov后面. 例如: !setfov 15 将会把视角变为15');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null && _0x2bf6x1a7[1] != 'default') {
            ModPE['setFov'](_0x2bf6x1a7[1]);
            clientMessage(fct + '视角设置为: ' + _0x2bf6x1a7[1]);
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == 'default') {
            ModPE['resetFov']();
            clientMessage(fct + '视角设置为默认');
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!setspeed') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '把一个数字放在!setspeed后面. 例如: !setspeed 50 将会把游戏速度设置为50');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null && _0x2bf6x1a7[1] != 'default') {
            ModPE['setGameSpeed'](_0x2bf6x1a7[1]);
            clientMessage(fct + '游戏速度设置为: ' + _0x2bf6x1a7[1]);
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == 'default') {
            ModPE['setGameSpeed'](20);
            clientMessage(fct + '游戏速度已设置为默认');
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!gamemode') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '使用模式切换指令!gamemode. 例如: !gamemode creative 或者 !gamemode 1 将会把你的模式设置为创造');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            var _0x2bf6x1a8;
            if (_0x2bf6x1a7[1] == '1') {
                _0x2bf6x1a8 = 1
            } else {
                if (_0x2bf6x1a7[1] == 'creative') {
                    _0x2bf6x1a8 = 1
                } else {
                    if (_0x2bf6x1a7[1] == '0') {
                        _0x2bf6x1a8 = 0
                    } else {
                        if (_0x2bf6x1a7[1] == 'survival') {
                            _0x2bf6x1a8 = 0
                        } else {
                            if (_0x2bf6x1a7[1] == '2') {
                                _0x2bf6x1a8 = 2
                            } else {
                                if (_0x2bf6x1a7[1] == 'adventure') {
                                    _0x2bf6x1a8 = 2
                                } else {
                                    if (_0x2bf6x1a7[1] == '3') {
                                        _0x2bf6x1a8 = 3
                                    } else {
                                        if (_0x2bf6x1a7[1] == 'spectator') {
                                            _0x2bf6x1a8 = 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            Level['setGameMode'](_0x2bf6x1a8);
            clientMessage(fct + '游戏模式设置为: ' + _0x2bf6x1a7[1]);
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!vclip') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '放一个数字在!vclip后面. 例如: !vclip -5 将传送你-5个坐标');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            preventDefault();
            if (_0x2bf6x25['charAt'](8) == '-') {
                var _0x2bf6x1a9 = Utils['Text']['replaceAll']('-', '', _0x2bf6x1a7[1]);
                Entity['setPosition'](getPlayerEnt(), getPlayerX(), getPlayerY() - _0x2bf6x1a9, getPlayerZ());
                clientMessage(fct + 'Teleported ' + _0x2bf6x1a7[1] + ' blocks')
            } else {
                if (_0x2bf6x25['charAt'](8) != '-') {
                    Entity['setPositionRelative'](getPlayerEnt(), 0, +_0x2bf6x1a7[1], 0);
                    clientMessage(fct + 'Teleported ' + _0x2bf6x1a7[1] + ' blocks')
                }
            }
        }
    };
    if (_0x2bf6x1a7[0] == '!team') {
        if (_0x2bf6x1a7[1] == null || _0x2bf6x1a7[2] == null) {
            clientMessage(fct + '输入玩家名称在!team后面即可');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null && _0x2bf6x1a7[2] != null) {
            if (_0x2bf6x1a7[1] == 'add') {
                team['push'](_0x2bf6x1a7[2]);
                clientMessage(fct + 'Added ' + _0x2bf6x1a7[2] + ' 你的队友')
            };
            preventDefault()
        };
        if (_0x2bf6x1a7[1] == 'remove' && _0x2bf6x1a7[2] != 'XinYu404') {
            for (i = 0; i < team['length']; i++) {
                if (team[i] == _0x2bf6x1a7[2]) {
                    team['splice'](i, 1);
                    clientMessage(fct + 'Removed ' + _0x2bf6x1a7[2] + ' 你的队友')
                }
            };
            if (_0x2bf6x1a7[2] == 'XinYu404') {
                clientMessage(fct + '你不能删除XinYu404队友')
            };
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!teamlist') {
        clientMessage(fct + '队伍玩家列表: ' + team);
        preventDefault()
    };
    if (_0x2bf6x1a7[0] == '!spam') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '放入本文在!spam后面(自动绕过检测). 例如: !spam void 将会一直刷void这条消息');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            spamText = _0x2bf6x1a7[1];
            clientMessage(fct + '刷屏消息设置为: ' + _0x2bf6x1a7[1]);
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!spamdelay') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '放一个数字在!spamdelay后面. 例如: !spamdelay 3.5 将会是刷屏速度设置为3.5秒');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            spamDelay = _0x2bf6x1a7[1] * 1000;
            if (_0x2bf6x1a7[1] == 1) {
                clientMessage(fct + '刷屏速度设置为: 1秒');
                preventDefault()
            } else {
                clientMessage(fct + '刷屏速度设置为: ' + _0x2bf6x1a7[1] + ' 秒');
                preventDefault()
            }
        }
    };
    if (_0x2bf6x1a7[0] == '!acspeed') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '放一个数字在!acspeed后面. 例如: !acspeed 5 将自动爬行速度设置为5');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            acspd = _0x2bf6x1a7[1] * 0.1;
            clientMessage(fct + '自动爬行速度设置为: ' + _0x2bf6x1a7[1] * 0.1);
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!devMode') {
        if (canBeDev == true && Entity['getNameTag'](getPlayerEnt()) == 'FirePro9978' || Entity['getNameTag'](getPlayerEnt()) == 'NNeBBuRR') {
            isDev = true;
            preventDefault();
            fctoast('开发模式启用！')
        } else {
            ccrash();
            fctoast('您正在尝试访问开发模式。崩溃的客户端...');
            preventDefault()
        }
    };
    if (_0x2bf6x1a7[0] == '!nwrange') {
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '放一个数字在!nwrange后面. 例如: !nwrange 10 将会把玩家信息显示范围设置为10');
            preventDefault()
        };
        if (_0x2bf6x1a7[1] != null) {
            nwrange = _0x2bf6x1a7[1];
            clientMessage(fct + '玩家信息范围设置为: ' + _0x2bf6x1a7[1]);
            preventDefault()
        }
    };
    if (leetspeakss) {
        if (_0x2bf6x25['charAt'](0) != '!' && _0x2bf6x25['charAt'](0) != '/') {
            Server['sendChat'](' ' + convertToLeet(_0x2bf6x25))
        };
        preventDefault();
        com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get']()['updateTextboxText']('')
    };
    if (_0x2bf6x1a7[0] == '!freeze') {
        if (_0x2bf6x1a7[1] == 'on') {
            Entity['setImmobile'](getPlayerEnt(), true);
            clientMessage(fct + '你现在都冻结了！')
        };
        if (_0x2bf6x1a7[1] == 'off') {
            Entity['setImmobile'](getPlayerEnt(), false);
            clientMessage(fct + '你现在可以移动了！')
        };
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '在!freeze后面放入on或者off来开启. 例如: !freeze on 将会让你不能动!freeze off则相反')
        }
    };
    if (_0x2bf6x1a7[0] == '!info') {
        clientMessage(fct + 'FlqmeClient: Alpha 6');
        clientMessage(fct + 'Flqme made by FirePro9978');
        clientMessage(fct + 'Translator:XinYu404');
        clientMessage(fct + 'Code Developers: NNeBBuRR, Hacker Lastaad, ArceusMatt, JohnMacroCraft');
        clientMessage(fct + 'Testers: MadMinerYT, AmayMask, Affann, iTzPurple, Smasher565, QuinnMakkinje, ImBannable, RealMCPvPER, KaosUlt, DinosaurusRex02');
        clientMessage(fct + 'Special Thanks to GodSoft029, Peacestorm, Apric0cks, NSITF MCPE, Pokey, SoloTroll and Purple xKai');
        clientMessage(fct + 'Contact us: Kik @FirePro9978, Email: coolpro9978@gmail.com');
        clientMessage(fct + 'Other Recommended Clients: Charged, GravePE, Nuke, Crimson, CyberZ, PokeyHack, Storm, NEB, SmashHaxPE, Flame, DragOP, Cloud, Xive, Hydom, Quvon, Vertex');
        fctoast('BehindHit and Escape idea was from Hacker Lastaad');
        fctoast('FallBack and CrouchSpeed Code was from NNeBBuRR')
    };
    if (_0x2bf6x1a7[0] == '!tp') {
        if (_0x2bf6x1a7[1] == null || _0x2bf6x1a7[2] == null || _0x2bf6x1a7[3] == null) {
            clientMessage(fct + '把坐标位置放在!tp后面. 例如: !tp 1 2 3 将会把你传送到x:1 y:2 z:3')
        };
        if (_0x2bf6x1a7[1] != null || _0x2bf6x1a7[2] != null || _0x2bf6x1a7[3] != null) {
            setPosition(getPlayerEnt(), _0x2bf6x1a7[1], _0x2bf6x1a7[2], _0x2bf6x1a7[3]);
            clientMessage(fct + '成功地传送到: X: ' + _0x2bf6x1a7[1] + ' Y: ' + _0x2bf6x1a7[2] + ' Z: ' + _0x2bf6x1a7[3])
        }
    };
    if (_0x2bf6x1a7[0] == '!theme') {
        if (_0x2bf6x1a7[1] == 'flqme') {
            theme = nbg;
            theme1 = mbg;
            module = nnbg;
            clientMessage(fct + '成功地改变为Floqme主题！')
        };
        if (_0x2bf6x1a7[1] == 'infqrno') {
            theme = iibg;
            theme1 = fbg;
            module = ibg;
            clientMessage(fct + '成功地改变为Infqrno主题！')
        };
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '主题:Floqme，Infqrno')
        }
    };
    if (_0x2bf6x1a7[0] == '!search') {
        var _0x2bf6x1aa = _0x2bf6x1a7[1];
        ctx['runOnUiThread'](new java['lang'].Runnable({
            run: function() {
                var _0x2bf6x1ab = new android['webkit'].WebView(ctx);
                var _0x2bf6x1ac = _0x2bf6x1ab['getSettings']();
                _0x2bf6x1ac['setJavaScriptEnabled'](true);
                _0x2bf6x1ab['setWebChromeClient'](new android['webkit'].WebChromeClient());
                _0x2bf6x1ab['setWebViewClient'](new android['webkit'].WebViewClient());
                _0x2bf6x1ab['loadUrl']('https://www.baidu.com/s?word=' + _0x2bf6x1aa);
                new android['app']['AlertDialog'].Builder(ctx)['setView'](_0x2bf6x1ab)['show']()
            }
        }))
    };
    if (_0x2bf6x1a7[0] == '!fe') {
        if (_0x2bf6x1a7[1] == 'sword') {
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.UNBREAKING, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.SHARPNESS, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.KNOCKBACK, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.FIRE_ASPECT, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.LOOTING, 32767);
            clientMessage(fct + '成功地附魔了剑')
        };
        if (_0x2bf6x1a7[1] == 'bow') {
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.UNBREAKING, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.POWER, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.INFINITY, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.FLAME, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.PUNCH, 32767);
            clientMessage(fct + '成功地附魔了弓')
        };
        if (_0x2bf6x1a7[1] == 'tool') {
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.UNBREAKING, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.FORTUNE, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.EFFICIENCY, 32767);
            clientMessage(fct + '成功地附魔了工具')
        };
        if (_0x2bf6x1a7[1] == 'armor') {
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.UNBREAKING, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.PROTECTION, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.FIRE_PROTECTION, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.PROJECTILE_PROTECTION, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.BLAST_PROTECTION, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.THORNS, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.DEPTH_STRIDER, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.AQUA_AFFINITY, 32767);
            Player['enchant'](Player['getSelectedSlotId'](), Enchantment.FEATHER_FALLING, 32767);
            clientMessage(fct + '成功地附魔了盔甲')
        };
        if (_0x2bf6x1a7[1] == null) {
            clientMessage(fct + '[超强附魔(32767)]sword(剑)  bow(弓)  tool(工具) armor(盔甲)放在!fe后面. 例如: !fe sword 将会得到一把很强的剑')
        }
    }
}

function ccrash() {
    c1()
}

function c1() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    c2()
                }
            }), 500)
        }
    }))
}

function c2() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    crash()
                }
            }), 1000)
        }
    }))
}

function fctoast(_0x2bf6x25, _0x2bf6x1b1) {
    try {
        var ctx = com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get']();
        ctx['runOnUiThread'](new java['lang'].Runnable({
            run: function() {
                var _0x2bf6x1b2 = android['widget']['Toast']['makeText'](com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get'](), '' + _0x2bf6x25, android['widget']['Toast'].LENGTH_LONG);
                var _0x2bf6x130 = new android['widget'].LinearLayout(ctx);
                var _0x2bf6x1b3 = new android['widget'].TextView(ctx);
                if (_0x2bf6x1b1 == null) {
                    _0x2bf6x25 = 'Skiddy黑客端: ' + _0x2bf6x25
                } else {
                    _0x2bf6x25 = _0x2bf6x1b1 + ': ' + _0x2bf6x25
                };
                _0x2bf6x1b3['setText'](_0x2bf6x25);
                _0x2bf6x1b3['setGravity'](android['view']['Gravity'].CENTER);
                _0x2bf6x1b3['setTextSize'](15);
                _0x2bf6x1b3['setPadding'](10, 10, 10, 10);
                _0x2bf6x1b3['setTextColor'](android['graphics']['Color']['rgb'](255, 128, 0));
                var _0x2bf6x1b4 = new android['graphics']['drawable'].GradientDrawable();
                _0x2bf6x1b4['setColor'](android['graphics']['Color'].BLACK);
                _0x2bf6x1b4['setStroke'](5, android['graphics']['Color']['rgb'](255, 128, 0));
                _0x2bf6x130['addView'](_0x2bf6x1b3);
                _0x2bf6x130['setBackground'](_0x2bf6x1b4);
                _0x2bf6x130['getBackground']()['setAlpha'](150);
                _0x2bf6x1b2['setView'](_0x2bf6x130);
                _0x2bf6x1b2['show']()
            }
        }))
    } catch (e) {
        print(e)
    }
}

function convertToLeet(_0x2bf6x25) {
    var _0x2bf6x26 = _0x2bf6x25['toUpperCase']();
    var _0x2bf6x1b6 = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var _0x2bf6x1b7 = new Array('4', '8', '(', '|}', '3', '|=', 'G', '|-|', '1', '_|', '|<', '|_', '|^|', 'N', '0', '|)', 'Q', 'R', '5', '7', '|_|', 'V', 'W', 'X', 'Y', 'Z');
    for (i = 0; i < _0x2bf6x1b6['length']; i++) {
        _0x2bf6x26 = Utils['Text']['replaceAll'](_0x2bf6x1b6[i], _0x2bf6x1b7[i], _0x2bf6x26)
    };
    return _0x2bf6x26
}

function rptask() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    if (aimbotss) {
                        if (Level['getGameMode']() == 1) {
                            _0x2bf6x166 = getNearestEntity(9)
                        } else {
                            _0x2bf6x166 = getNearestEntity(7)
                        };
                        if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                            aimAtEnt(_0x2bf6x166)
                        }
                    };
                    if (aimassistss) {
                        var _0x2bf6x166 = Player['getPointedEntity']();
                        if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                            aimAtEnt(_0x2bf6x166)
                        }
                    };
                    if (backfacess) {
                        var _0x2bf6x1b9 = getPlayerEnt();
                        var _0x2bf6x18c = Math['floor'](Entity['getYaw'](_0x2bf6x1b9));
                        var _0x2bf6x18d = Math['floor'](Entity['getPitch'](_0x2bf6x1b9));
                        if (_0x2bf6x18d <= 189) {
                            Entity['setRot'](_0x2bf6x1b9, _0x2bf6x18c, 192)
                        }
                    };
                    if (twerkss) {
                        tCounter++;
                        if (tCounter == 6) {
                            Entity['setSneaking'](Player['getEntity'](), 1)
                        };
                        if (tCounter == 11) {
                            Entity['setSneaking'](Player['getEntity'](), 0);
                            tCounter = 1
                        }
                    };
                    if (derpss) {
                        var _0x2bf6x1b9 = getPlayerEnt();
                        var _0x2bf6x18c = Math['floor'](Entity['getYaw'](_0x2bf6x1b9));
                        var _0x2bf6x18d = Math['floor'](Entity['getPitch'](_0x2bf6x1b9));
                        Entity['setRot'](_0x2bf6x1b9, _0x2bf6x18c + 30, _0x2bf6x18d)
                    };
                    if (followss) {
                        var _0x2bf6x166 = getNearestEntity(15);
                        if (Utils['Player']['isOnGround']() && getPlayerY() - Entity['getY'](_0x2bf6x166) < -0.8) {
                            setVelY(getPlayerEnt(), 0.4)
                        };
                        if (isDev == true) {
                            var _0x2bf6x1ba = getPlayerX();
                            var _0x2bf6x1bb = getPlayerZ();
                            var _0x2bf6x1bc = Entity['getX'](_0x2bf6x166);
                            var _0x2bf6x1bd = Entity['getZ'](_0x2bf6x166);
                            var _0x2bf6x168 = Math['sqrt'](Math['pow'](_0x2bf6x1ba - _0x2bf6x1bc, 2) + Math['pow'](_0x2bf6x1bb - _0x2bf6x1bd, 2));
                            if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                                setVelX(getPlayerEnt(), -Math['max'](-0.25, Math['min'](0.25, ((_0x2bf6x1ba - _0x2bf6x1bc) / _0x2bf6x168) / 4)));
                                setVelZ(getPlayerEnt(), -Math['max'](-0.25, Math['min'](0.25, ((_0x2bf6x1bb - _0x2bf6x1bd) / _0x2bf6x168) / 4)))
                            }
                        } else {
                            var _0x2bf6x13a = [0, 0, 0];
                            toDirectionalVector(_0x2bf6x13a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
                            if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                                setVelX(getPlayerEnt(), 0.3 * _0x2bf6x13a[0]);
                                setVelZ(getPlayerEnt(), 0.3 * _0x2bf6x13a[2]);
                                aimAtEnt(_0x2bf6x166)
                            }
                        }
                    };
                    if (sniperss) {
                        var _0x2bf6x166 = getNearestEntity(100);
                        if (_0x2bf6x166 != null && Player['getCarriedItem']() == 261 && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                            bowAimAt(_0x2bf6x166);
                            ModPE['setFov'](13)
                        } else {
                            ModPE['resetFov']()
                        }
                    };
                    if (bowaimbotss && getCarriedItem() == 261) {
                        var _0x2bf6x166 = getNearestEntity(100);
                        if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                            bowAimAt(_0x2bf6x166)
                        }
                    };
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}
rptask();

function rptask2() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    if (nearwarningss) {
                        var _0x2bf6x166 = getNearestEntity(nwrange);
                        if (_0x2bf6x166 != null && Player['getName'](_0x2bf6x166) != '' && Player['getName'](_0x2bf6x166) != ' ' && Player['getName'](_0x2bf6x166) != '  ' && isNotTeam(_0x2bf6x166)) {
                            var _0x2bf6x14a = removeColors(Entity['getNameTag'](_0x2bf6x166));
                            fctoast('
' + _0x2bf6x14a + '
' + 'x: ' + Math['floor'](Entity['getX'](_0x2bf6x166)) + '
' + ' y: ' + Math['floor'](Entity['getY'](_0x2bf6x166)) + '
' + ' z: ' + Math['floor'](Entity['getZ'](_0x2bf6x166)), '附近信息')
                        }
                    };
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask2())
                }
            }), 2500)
        }
    }))
}
rptask2();

function rptask3() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    if (spamss) {
                        var _0x2bf6x1c0 = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                        spamTime++;
                        ln++;
                        if (ln == 27) {
                            ln = 0
                        };
                        Server['sendChat'](_0x2bf6x1c0[ln] + '=' + spamTime + ' ' + spamText + ' ' + spamTime + '=' + _0x2bf6x1c0[ln])
                    };
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask3())
                }
            }), spamDelay)
        }
    }))
}
rptask3();

function leaveGame() {
    isDev = false;
    canBeDev = false;
    if (leaveG) {
        leaveG = false;
        fctoast('感谢你的使用! ~Koikoi~心语', 'Skiddy脚本 ')
    };
    fctoast('检测到玩家离开服务器')
}