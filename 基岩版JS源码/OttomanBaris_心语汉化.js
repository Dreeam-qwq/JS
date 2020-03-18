//汉化:我的丿心语QQ3298537709
//作者:BARISCODE
//功能:自瞄,长臂猿,高跳(药水效果),缩放视角,快速破坏(药水效果),飞行,滑行,传送光环
//MADE BY BARISCODE
//汉化:我的丿心语
var _0x22a2 = ["get", "currentMainActivity", "MainActivity", "minecraftpe", "mojang", "Button", "widget", "LinearLayout", "RelativeLayout", "PopupWindow", "ScrollView", "TextView", "CheckBox", "Switch", "Toast", "Runnable", "lang", "View", "view", "ColorDrawable", "drawable", "graphics", "Color", "Gravity", "Intent", "content", "Uri", "net", "setDestroyTime", "getVelX", "pow", "getVelZ", "sqrt", "g", "replace", "getX", "getY", "getZ", "isLiquid", "Block", "isLadder", "round", "getDestroyTime", "setColor", "setStroke", "setCornerRadius", "menu.copyright", "作者:BARISCODE;汉化:XinYu404", "langEdit", "", "἟9�἟7� OttomanBaris ἟9�἟7�", "BarisCode", "἟9�἟7� OttomanBaris ἟9�἟7�", "density", "getDisplayMetrics", "getResources", "ceil", "setOrientation", "setText", "setTextColor", "setBackground", "setAlpha", "getBackground", "isShowing", "dismiss", "setOnClickListener", "addView", "LayoutParams", "setBackgroundDrawable", "getDecorView", "getWindow", "CENTER", "TOP", "showAtLocation", "show", "An error occured: ", "makeText", "runOnUiThread", "setTextSize", " ", "setGravity", "作者:BARISCODE;汉化:XinYu404", "TruncateAt", "TextUtils", "text", "setEllipsize", "setMarqueeRepeatLimit", "setSingleLine", "setHorizontallyScrolling", "setSelected", "἟9�἟7�自瞄἟9�἟7�", "setPadding", "setChecked", "CompoundButton", "setOnCheckedChangeListener", "἟9�἟7�传送光环἟9�἟7�", "἟9�἟7�长臂猿἟9�἟7�", "἟9�἟7�缩放视角἟9�἟7�", "setFov", "resetFov", "἟9�἟7�高跳(药水效果)἟9�἟7�", "getEntity", "jump", "addEffect", "removeAllEffects", "἟9�἟7�水上漂἟9�἟7�", "἟9�἟7�快速破坏(药水效果)἟9�἟7�", "digSpeed", "On", "Off", "἟9�἟7�滑行(不向下)἟9�἟7�", "἟9�἟7�飞行἟9�἟7�", "getWidth", "getDefaultDisplay", "getWindowManager", "getHeight", "Error: ", "X", "RIGHT", "BOTTOM", "cos", "sin", "getHealth", "getAll", "getAllPlayers", "length", "getEntityTypeId", "asin", "PI", "atan2", "setRot", "isInWater", "Player", "setFlying", "setCollisionSize"];
var ctx = com[_0x22a2[4]][_0x22a2[3]][_0x22a2[2]][_0x22a2[1]][_0x22a2[0]]();
var Button = android[_0x22a2[6]][_0x22a2[5]];
var LinearLayout = android[_0x22a2[6]][_0x22a2[7]];
var RelativeLayout = android[_0x22a2[6]][_0x22a2[8]];
var PopupWindow = android[_0x22a2[6]][_0x22a2[9]];
var ScrollView = android[_0x22a2[6]][_0x22a2[10]];
var TextView = android[_0x22a2[6]][_0x22a2[11]];
var CheckBox = android[_0x22a2[6]][_0x22a2[12]];
var Switch = android[_0x22a2[6]][_0x22a2[13]];
var Toast = android[_0x22a2[6]][_0x22a2[14]];
var Runnable = java[_0x22a2[16]][_0x22a2[15]];
var View = android[_0x22a2[18]][_0x22a2[17]];
var ColorDrawable = android[_0x22a2[21]][_0x22a2[20]][_0x22a2[19]];
var Color = android[_0x22a2[21]][_0x22a2[22]];
var Gravity = android[_0x22a2[18]][_0x22a2[23]];
var Intent = android[_0x22a2[25]][_0x22a2[24]];
var Uri = android[_0x22a2[27]][_0x22a2[26]];
var Utils = {
    Block: {
        isLiquid: function(_0x2ab3x13) {
            if (_0x2ab3x13 >= 8 && _0x2ab3x13 <= 11) {
                return true
            };
            return false
        },
        fastBreak: function() {
            for (i = 0; i < 256; i++) {
                Block[_0x22a2[28]](i, 0)
            }
        },
        fastBreakDefault: function() {
            for (i = 0; i < 256; i++) {
                Block[_0x22a2[28]](i, defDestroyTime[i])
            }
        },
        isLadder: function(_0x2ab3x13) {
            if (_0x2ab3x13 == 65) {
                return true
            };
            return false
        }
    },
    Velocity: {
        calculateSpeed: function() {
            return Math[_0x22a2[32]](Math[_0x22a2[30]](Entity[_0x22a2[29]](getPlayerEnt()), 2) + Math[_0x22a2[30]](Entity[_0x22a2[31]](getPlayerEnt()), 2))
        }
    },
    Text: {
        replaceAll: function(_0x2ab3x14, _0x2ab3x15, _0x2ab3x16) {
            var _0x2ab3x17 = _0x2ab3x16;
            return _0x2ab3x17[_0x22a2[34]](new RegExp(_0x2ab3x14, _0x22a2[33]), _0x2ab3x15)
        }
    },
    Player: {
        isInWater: function() {
            if (Utils[_0x22a2[39]][_0x22a2[38]](getTile(Entity[_0x22a2[35]](getPlayerEnt()), Entity[_0x22a2[36]](getPlayerEnt()) - 1.65, Entity[_0x22a2[37]](getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isOnLadder: function() {
            if (Utils[_0x22a2[39]][_0x22a2[40]](getTile(getPlayerX(), getPlayerY() + 0.001, getPlayerZ()))) {
                return true
            } else {
                return false
            }
        },
        isOnGround: function() {
            var _0x2ab3x18 = Entity[_0x22a2[36]](getPlayerEnt());
            while (_0x2ab3x18 > 1) {
                _0x2ab3x18 -= 1
            };
            if ((Math[_0x22a2[41]](_0x2ab3x18 * 100) >= 61 && Math[_0x22a2[41]](_0x2ab3x18 * 100) <= 63) && getTile(Entity[_0x22a2[35]](getPlayerEnt()), Entity[_0x22a2[36]](getPlayerEnt()) - 1.65, Entity[_0x22a2[37]](getPlayerEnt())) != 0 && !Utils[_0x22a2[39]][_0x22a2[38]](getTile(Entity[_0x22a2[35]](getPlayerEnt()), Entity[_0x22a2[36]](getPlayerEnt()) - 1.65, Entity[_0x22a2[37]](getPlayerEnt())))) {
                return true
            };
            if ((Math[_0x22a2[41]](_0x2ab3x18 * 100) >= 11 && Math[_0x22a2[41]](_0x2ab3x18 * 100) <= 13) && getTile(Entity[_0x22a2[35]](getPlayerEnt()), Entity[_0x22a2[36]](getPlayerEnt()) - 1.65, Entity[_0x22a2[37]](getPlayerEnt())) != 0 && !Utils[_0x22a2[39]][_0x22a2[38]](getTile(Entity[_0x22a2[35]](getPlayerEnt()), Entity[_0x22a2[36]](getPlayerEnt()) - 1.65, Entity[_0x22a2[37]](getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x2ab3x19 = Entity[_0x22a2[35]](getPlayerEnt());
            var _0x2ab3x1a = Entity[_0x22a2[37]](getPlayerEnt());
            var _0x2ab3x1b = Math[_0x22a2[41]](_0x2ab3x19 - 0.5);
            var _0x2ab3x1c = Math[_0x22a2[41]](_0x2ab3x1a - 0.5);
            while (_0x2ab3x19 < 1) {
                _0x2ab3x19 += 1
            };
            while (_0x2ab3x1a < 1) {
                _0x2ab3x1a += 1
            };
            while (_0x2ab3x19 > 1) {
                _0x2ab3x19 -= 1
            };
            while (_0x2ab3x1a > 1) {
                _0x2ab3x1a -= 1
            };
            if (Math[_0x22a2[41]](_0x2ab3x19 * 100) == 31) {
                _0x2ab3x19 -= 0.01
            };
            if (Math[_0x22a2[41]](_0x2ab3x1a * 100) == 31) {
                _0x2ab3x1a -= 0.01
            };
            if (Math[_0x22a2[41]](_0x2ab3x19 * 100) == 69) {
                _0x2ab3x19 += 0.01
            };
            if (Math[_0x22a2[41]](_0x2ab3x1a * 100) == 69) {
                _0x2ab3x1a += 0.01
            };
            if (Math[_0x22a2[41]](_0x2ab3x19 * 100) == 30) {
                _0x2ab3x1b--
            };
            if (Math[_0x22a2[41]](_0x2ab3x1a * 100) == 30) {
                _0x2ab3x1c--
            };
            if (Math[_0x22a2[41]](_0x2ab3x19 * 100) == 70) {
                _0x2ab3x1b++
            };
            if (Math[_0x22a2[41]](_0x2ab3x1a * 100) == 70) {
                _0x2ab3x1c++
            };
            if (getTile(_0x2ab3x1b, Entity[_0x22a2[36]](getPlayerEnt()), _0x2ab3x1c) == 0 && getTile(_0x2ab3x1b, Entity[_0x22a2[36]](getPlayerEnt()) - 1, _0x2ab3x1c) == 0) {
                return false
            };
            if (Block[_0x22a2[42]](getTile(_0x2ab3x1b, Entity[_0x22a2[36]](getPlayerEnt()) - 1, _0x2ab3x1c)) <= 0.1 && Block[_0x22a2[42]](getTile(_0x2ab3x1b, Entity[_0x22a2[36]](getPlayerEnt()), _0x2ab3x1c)) <= 0.1) {
                return false
            };
            if (Math[_0x22a2[41]](_0x2ab3x19 * 100) == 30 || Math[_0x22a2[41]](_0x2ab3x19 * 100) == 70) {
                return true
            };
            if (Math[_0x22a2[41]](_0x2ab3x1a * 100) == 30 || Math[_0x22a2[41]](_0x2ab3x1a * 100) == 70) {
                return true
            };
            return false
        }
    }
};
var bg = new android[_0x22a2[21]][_0x22a2[20]].GradientDrawable();
bg[_0x22a2[43]](android[_0x22a2[21]][_0x22a2[22]].BLACK);
bg[_0x22a2[44]](4, android[_0x22a2[21]][_0x22a2[22]].RED);
bg[_0x22a2[45]](2);
var xbg = new android[_0x22a2[21]][_0x22a2[20]].GradientDrawable();
xbg[_0x22a2[43]](android[_0x22a2[21]][_0x22a2[22]].BLACK);
xbg[_0x22a2[44]](4, android[_0x22a2[21]][_0x22a2[22]].RED);
xbg[_0x22a2[45]](2);

function newLevel() {}
ModPE[_0x22a2[48]](_0x22a2[46], _0x22a2[47]);
var GUI;
var menu;
var exitUI;
var VERSION = _0x22a2[49];
var NAME = _0x22a2[50];
var DEVELOPERS = _0x22a2[51];
var cBtn = _0x22a2[52];
var grapples;
var grappless = false;
var grappleed = false;
var glides1;
var glidess1 = false;
var glideed1 = false;
var aim;
var aimbot = false;
var aimed = false;
var towers;
var towered = false;
var towerss = false;
var safe;
var safes = false;
var safed = false;
var ndgs;
var ndgss = false;
var ndged = false;
var invs;
var invss = false;
var inved = false;
var gmSwitchy;
var gmSwitched = false;
var gmSwicht;
var gmSwitchd = false;
var jesus = false;
var jss = false;
var betterattack;
var betterss = false;
var betters = false;
var imine;
var iminss = false;
var imined = false;
var steps;
var stepss = false;
var steped = false;
var time = 0;

function dip2px(_0x2ab3x4d) {
    return Math[_0x22a2[56]](_0x2ab3x4d * ctx[_0x22a2[55]]()[_0x22a2[54]]()[_0x22a2[53]])
}

function showMenuBtn() {
    ctx[_0x22a2[77]](new Runnable({
        run: function() {
            try {
                var _0x2ab3x4f = new LinearLayout(ctx);
                _0x2ab3x4f[_0x22a2[57]](1);
                var _0x2ab3x50 = new Button(ctx);
                _0x2ab3x50[_0x22a2[58]](cBtn);
                _0x2ab3x50[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].RED);
                _0x2ab3x50[_0x22a2[60]](bg);
                _0x2ab3x50[_0x22a2[62]]()[_0x22a2[61]](100);
                _0x2ab3x50[_0x22a2[65]](new View.OnClickListener({
                    onClick: function(_0x2ab3x51) {
                        mainMenu();
                        exit();
                        if (GUI != null && GUI[_0x22a2[63]]()) {
                            GUI[_0x22a2[64]]()
                        }
                    }
                }));
                _0x2ab3x4f[_0x22a2[66]](_0x2ab3x50);
                GUI = new PopupWindow(_0x2ab3x4f, RelativeLayout[_0x22a2[67]].WRAP_CONTENT, RelativeLayout[_0x22a2[67]].WRAP_CONTENT);
                GUI[_0x22a2[68]](new ColorDrawable(Color.BLACK));
                GUI[_0x22a2[73]](ctx[_0x22a2[70]]()[_0x22a2[69]](), Gravity[_0x22a2[71]] | Gravity[_0x22a2[72]], 345, 0)
            } catch (err) {
                Toast[_0x22a2[76]](ctx, _0x22a2[75] + err, 1)[_0x22a2[74]]()
            }
        }
    }))
}
showMenuBtn();

function mainMenu() {
    ctx[_0x22a2[77]](new Runnable({
        run: function() {
            try {
                var _0x2ab3x53 = new LinearLayout(ctx);
                var _0x2ab3x54 = new ScrollView(ctx);
                var _0x2ab3x55 = new LinearLayout(ctx);
                _0x2ab3x53[_0x22a2[57]](1);
                _0x2ab3x53[_0x22a2[60]](bg);
                _0x2ab3x53[_0x22a2[62]]()[_0x22a2[61]](100);
                _0x2ab3x55[_0x22a2[57]](1);
                _0x2ab3x54[_0x22a2[66]](_0x2ab3x53);
                _0x2ab3x55[_0x22a2[66]](_0x2ab3x54);
                var _0x2ab3x56 = new TextView(ctx);
                _0x2ab3x56[_0x22a2[78]](20);
                _0x2ab3x56[_0x22a2[58]](NAME + _0x22a2[79] + VERSION);
                _0x2ab3x56[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                _0x2ab3x56[_0x22a2[80]](Gravity.CENTER);
                _0x2ab3x53[_0x22a2[66]](_0x2ab3x56);
                var _0x2ab3x57 = new android[_0x22a2[6]].TextView(ctx);
                _0x2ab3x57[_0x22a2[58]](_0x22a2[81]);
                _0x2ab3x57[_0x22a2[78]](20);
                _0x2ab3x57[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                _0x2ab3x57[_0x22a2[68]](new android[_0x22a2[21]][_0x22a2[20]].ColorDrawable(android[_0x22a2[21]][_0x22a2[22]].RED));
                _0x2ab3x57[_0x22a2[85]](android[_0x22a2[84]][_0x22a2[83]][_0x22a2[82]].MARQUEE);
                _0x2ab3x57[_0x22a2[86]](-1);
                _0x2ab3x57[_0x22a2[87]]();
                _0x2ab3x57[_0x22a2[88]](true);
                _0x2ab3x57[_0x22a2[89]](true);
                _0x2ab3x53[_0x22a2[66]](_0x2ab3x57);
                var aim = new android[_0x22a2[6]].CheckBox(ctx);
                aim[_0x22a2[58]](_0x22a2[90]);
                aim[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                aim[_0x22a2[91]](10, 1, 1, 1);
                aim[_0x22a2[78]](15);
                aim[_0x22a2[92]](aimed);
                aim[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aimed) {
                            aimbot = true;
                            aimed = true
                        } else {
                            aimbot = false;
                            aimed = false
                        };
                        aim[_0x22a2[92]](aimed)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](aim);
                var grapples = new android[_0x22a2[6]].CheckBox(ctx);
                grapples[_0x22a2[58]](_0x22a2[95]);
                grapples[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                grapples[_0x22a2[91]](10, 3, 3, 3);
                grapples[_0x22a2[78]](15);
                grapples[_0x22a2[92]](grappleed);
                grapples[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!grappleed) {
                            grappless = true;
                            grappleed = true
                        } else {
                            grappless = false;
                            grappleed = false
                        };
                        grapples[_0x22a2[92]](grappleed)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](grapples);
                var towers = new android[_0x22a2[6]].CheckBox(ctx);
                towers[_0x22a2[58]](_0x22a2[96]);
                towers[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                towers[_0x22a2[91]](10, 1, 1, 1);
                towers[_0x22a2[78]](15);
                towers[_0x22a2[92]](towered);
                towers[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!towerss) {
                            towered = true;
                            towerss = true
                        } else {
                            towered = false;
                            towerss = false
                        };
                        towers[_0x22a2[92]](towered)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](towers);
                var betterattack = new android[_0x22a2[6]].CheckBox(ctx);
                betterattack[_0x22a2[58]](_0x22a2[97]);
                betterattack[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                betterattack[_0x22a2[91]](10, 3, 3, 3);
                betterattack[_0x22a2[78]](15);
                betterattack[_0x22a2[92]](betters);
                betterattack[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!betters) {
                            betterss = true;
                            betters = true;
                            ModPE[_0x22a2[98]](125)
                        } else {
                            ModPE[_0x22a2[99]]();
                            betterss = false;
                            betters = false
                        };
                        betterattack[_0x22a2[92]](betters)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](betterattack);
                var gmSwitchy = new android[_0x22a2[6]].CheckBox(ctx);
                gmSwitchy[_0x22a2[58]](_0x22a2[100]);
                gmSwitchy[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                gmSwitchy[_0x22a2[91]](10, 3, 3, 3);
                gmSwitchy[_0x22a2[78]](15);
                gmSwitchy[_0x22a2[92]](gmSwitchd);
                gmSwitchy[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!gmSwitchd) {
                            gmSwitchd = true;
                            Entity[_0x22a2[103]](Player[_0x22a2[101]](), MobEffect[_0x22a2[102]], 999999, 2, false, false)
                        } else {
                            gmSwitchd = false;
                            Entity[_0x22a2[104]](getPlayerEnt())
                        };
                        gmSwitchy[_0x22a2[92]](gmSwitchd)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](gmSwitchy);
                var _0x2ab3x58 = new android[_0x22a2[6]].CheckBox(ctx);
                _0x2ab3x58[_0x22a2[58]](_0x22a2[105]);
                _0x2ab3x58[_0x22a2[92]](jss);
                _0x2ab3x58[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                _0x2ab3x58[_0x22a2[91]](10, 3, 3, 3);
                _0x2ab3x58[_0x22a2[78]](15);
                onCheckedChanged: function() {
                    if (!jss) {
                        jss = true;
                        jesus = true
                    } else {
                        jss = false;
                        jesus = false
                    };
                    _0x2ab3x58[_0x22a2[92]](jss)
                }
                _0x2ab3x53[_0x22a2[66]](_0x2ab3x58);
                var imine = new android[_0x22a2[6]].CheckBox(ctx);
                imine[_0x22a2[58]](_0x22a2[106]);
                imine[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                imine[_0x22a2[91]](10, 1, 1, 1);
                imine[_0x22a2[78]](15);
                imine[_0x22a2[92]](imined);
                imine[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!imined) {
                            Entity[_0x22a2[103]](Player[_0x22a2[101]](), MobEffect[_0x22a2[107]], 999999, 200, false, false);
                            iminss = true;
                            imined = true;
                            print(_0x22a2[108])
                        } else {
                            iminss = false;
                            imined = false;
                            Entity[_0x22a2[104]](getPlayerEnt());
                            print(_0x22a2[109])
                        };
                        imine[_0x22a2[92]](imined)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](imine);
                var ndgs = new android[_0x22a2[6]].CheckBox(ctx);
                ndgs[_0x22a2[58]](_0x22a2[110]);
                ndgs[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                ndgs[_0x22a2[91]](10, 3, 3, 3);
                ndgs[_0x22a2[78]](15);
                ndgs[_0x22a2[92]](ndged);
                ndgs[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ndgss) {
                            ndged = true;
                            ndgss = true
                        } else {
                            ndged = false;
                            ndgss = false
                        };
                        ndgs[_0x22a2[92]](ndged)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](ndgs);
                var glides1 = new android[_0x22a2[6]].CheckBox(ctx);
                glides1[_0x22a2[58]](_0x22a2[111]);
                glides1[_0x22a2[59]](android[_0x22a2[21]][_0x22a2[22]].WHITE);
                glides1[_0x22a2[91]](10, 3, 3, 3);
                glides1[_0x22a2[78]](16);
                glides1[_0x22a2[92]](glideed1);
                glides1[_0x22a2[94]](new android[_0x22a2[6]][_0x22a2[93]].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!glideed1) {
                            glidess1 = true;
                            glideed1 = true
                        } else {
                            glidess1 = false;
                            glideed1 = false
                        };
                        glides1[_0x22a2[92]](glideed1)
                    }
                }));
                _0x2ab3x53[_0x22a2[66]](glides1);
                menu = new PopupWindow(_0x2ab3x55, ctx[_0x22a2[114]]()[_0x22a2[113]]()[_0x22a2[112]]() / 2, ctx[_0x22a2[114]]()[_0x22a2[113]]()[_0x22a2[115]]());
                menu[_0x22a2[73]](ctx[_0x22a2[70]]()[_0x22a2[69]](), Gravity[_0x22a2[71]] | Gravity[_0x22a2[72]], 0, 0)
            } catch (error) {
                Toast[_0x22a2[76]](ctx, _0x22a2[116] + error, 1)[_0x22a2[74]]()
            }
        }
    }))
}

function exit() {
    ctx[_0x22a2[77]](new Runnable({
        run: function() {
            try {
                var _0x2ab3x5a = new LinearLayout(ctx);
                var _0x2ab3x5b = new Button(ctx);
                _0x2ab3x5b[_0x22a2[58]](_0x22a2[117]);
                _0x2ab3x5b[_0x22a2[59]](Color.RED);
                _0x2ab3x5b[_0x22a2[78]](15);
                _0x2ab3x5b[_0x22a2[60]](xbg);
                _0x2ab3x5b[_0x22a2[62]]()[_0x22a2[61]](150);
                _0x2ab3x5b[_0x22a2[65]](new View.OnClickListener({
                    onClick: function(_0x2ab3x51) {
                        exitUI[_0x22a2[64]]();
                        menu[_0x22a2[64]]();
                        showMenuBtn()
                    }
                }));
                _0x2ab3x5a[_0x22a2[66]](_0x2ab3x5b);
                exitUI = new PopupWindow(_0x2ab3x5a, dip2px(40), dip2px(40));
                exitUI[_0x22a2[68]](new ColorDrawable(Color.BLACK));
                exitUI[_0x22a2[73]](ctx[_0x22a2[70]]()[_0x22a2[69]](), Gravity[_0x22a2[118]] | Gravity[_0x22a2[119]], 0, 0)
            } catch (exception) {
                Toast[_0x22a2[76]](ctx, exception, 1)[_0x22a2[74]]()
            }
        }
    }))
}

function toDirectionalVector(_0x2ab3x5d, _0x2ab3x5e, _0x2ab3x5f) {
    _0x2ab3x5d[0] = Math[_0x22a2[120]](_0x2ab3x5e) * Math[_0x22a2[120]](_0x2ab3x5f);
    _0x2ab3x5d[1] = Math[_0x22a2[121]](_0x2ab3x5f);
    _0x2ab3x5d[2] = Math[_0x22a2[121]](_0x2ab3x5e) * Math[_0x22a2[120]](_0x2ab3x5f)
}

function attackHook(_0x2ab3x61, _0x2ab3x62) {
    if (_0x2ab3x61 == Player[_0x22a2[101]]() && grappless && Entity[_0x22a2[122]](_0x2ab3x62) > 0) {
        setPosition(getPlayerEnt(), Entity[_0x22a2[35]](_0x2ab3x62), Entity[_0x22a2[36]](_0x2ab3x62) + 1, Entity[_0x22a2[37]](_0x2ab3x62))
    }
}

function getNearestEntity(_0x2ab3x64) {
    var _0x2ab3x65 = Entity[_0x22a2[123]]();
    var _0x2ab3x66 = Server[_0x22a2[124]]();
    var _0x2ab3x67 = _0x2ab3x64;
    var _0x2ab3x68 = null;
    for (var _0x2ab3x69 = 0; _0x2ab3x69 < _0x2ab3x65[_0x22a2[125]]; _0x2ab3x69++) {
        var _0x2ab3x19 = Entity[_0x22a2[35]](_0x2ab3x65[_0x2ab3x69]) - getPlayerX();
        var _0x2ab3x18 = Entity[_0x22a2[36]](_0x2ab3x65[_0x2ab3x69]) - getPlayerY();
        var _0x2ab3x1a = Entity[_0x22a2[37]](_0x2ab3x65[_0x2ab3x69]) - getPlayerZ();
        var _0x2ab3x6a = Math[_0x22a2[32]](Math[_0x22a2[30]](_0x2ab3x19, 2) + Math[_0x22a2[30]](_0x2ab3x18, 2) + Math[_0x22a2[30]](_0x2ab3x1a, 2));
        if (_0x2ab3x6a < _0x2ab3x67 && _0x2ab3x6a > 0 && Entity[_0x22a2[126]](_0x2ab3x65[_0x2ab3x69]) <= 63 && Entity[_0x22a2[122]](_0x2ab3x65[_0x2ab3x69]) >= 1) {
            _0x2ab3x67 = _0x2ab3x6a;
            _0x2ab3x68 = _0x2ab3x65[_0x2ab3x69]
        }
    };
    for (var _0x2ab3x69 = 0; _0x2ab3x69 < _0x2ab3x66[_0x22a2[125]]; _0x2ab3x69++) {
        var _0x2ab3x19 = Entity[_0x22a2[35]](_0x2ab3x66[_0x2ab3x69]) - getPlayerX();
        var _0x2ab3x18 = Entity[_0x22a2[36]](_0x2ab3x66[_0x2ab3x69]) - getPlayerY();
        var _0x2ab3x1a = Entity[_0x22a2[37]](_0x2ab3x66[_0x2ab3x69]) - getPlayerZ();
        var _0x2ab3x6a = Math[_0x22a2[32]](Math[_0x22a2[30]](_0x2ab3x19, 2) + Math[_0x22a2[30]](_0x2ab3x18, 2) + Math[_0x22a2[30]](_0x2ab3x1a, 2));
        if (_0x2ab3x6a < _0x2ab3x67 && _0x2ab3x6a > 0 && Entity[_0x22a2[122]](_0x2ab3x66[_0x2ab3x69]) >= 1) {
            _0x2ab3x67 = _0x2ab3x6a;
            _0x2ab3x68 = _0x2ab3x66[_0x2ab3x69]
        }
    };
    return _0x2ab3x68
}

function crosshairAimAt(_0x2ab3x68, _0x2ab3x6c) {
    if (_0x2ab3x68 != null) {
        var _0x2ab3x19 = Entity[_0x22a2[35]](_0x2ab3x68) - getPlayerX();
        var _0x2ab3x18 = Entity[_0x22a2[36]](_0x2ab3x68) - getPlayerY();
        var _0x2ab3x1a = Entity[_0x22a2[37]](_0x2ab3x68) - getPlayerZ();
        if (_0x2ab3x6c != null && _0x2ab3x6c instanceof Array) {
            _0x2ab3x19 = Entity[_0x22a2[35]](_0x2ab3x68) - _0x2ab3x6c[0];
            _0x2ab3x18 = Entity[_0x22a2[36]](_0x2ab3x68) - _0x2ab3x6c[1];
            _0x2ab3x1a = Entity[_0x22a2[37]](_0x2ab3x68) - _0x2ab3x6c[2]
        };
        if (Entity[_0x22a2[126]](_0x2ab3x68) != 63) {
            _0x2ab3x18 += 0.5
        };
        var _0x2ab3x6d = 0.5 + Entity[_0x22a2[35]](_0x2ab3x68);
        var _0x2ab3x6e = Entity[_0x22a2[36]](_0x2ab3x68);
        var _0x2ab3x6f = 0.5 + Entity[_0x22a2[37]](_0x2ab3x68);
        var _0x2ab3x70 = Math[_0x22a2[32]](_0x2ab3x19 * _0x2ab3x19 + _0x2ab3x18 * _0x2ab3x18 + _0x2ab3x1a * _0x2ab3x1a);
        var _0x2ab3x18 = _0x2ab3x18 / _0x2ab3x70;
        var _0x2ab3x5f = Math[_0x22a2[127]](_0x2ab3x18);
        _0x2ab3x5f = _0x2ab3x5f * 180.0 / Math[_0x22a2[128]];
        _0x2ab3x5f = -_0x2ab3x5f;
        var _0x2ab3x5e = -Math[_0x22a2[129]](_0x2ab3x6d - (Player[_0x22a2[35]]() + 0.5), _0x2ab3x6f - (Player[_0x22a2[37]]() + 0.5)) * (180 / Math[_0x22a2[128]]);
        if (_0x2ab3x5f < 89 && _0x2ab3x5f > -89) {
            Entity[_0x22a2[130]](Player[_0x22a2[101]](), _0x2ab3x5e, _0x2ab3x5f)
        }
    }
}

function modTick() {
    if (aimbot) {
        var _0x2ab3x68 = getNearestEntity(7);
        if (_0x2ab3x68 != null) {
            crosshairAimAt(_0x2ab3x68)
        }
    };
    if (safes) {
        var _0x2ab3x68 = getNearestEntity(100000);
        if (_0x2ab3x68 != null) {
            crosshairAimAt(_0x2ab3x68)
        }
    };
    if (ndgss) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (jesus == true) {
        if (Utils[_0x22a2[132]][_0x22a2[131]]()) {
            setVelY(getPlayerEnt(), -0.001)
        }
    };
    if (glidess1) {
        Player[_0x22a2[133]](1)
    };
    if (towered) {
        var _0x2ab3x68 = getNearestEntity(8);
        Entity[_0x22a2[134]](_0x2ab3x68, 10, 10)
    } else {
        Entity[_0x22a2[134]](_0x2ab3x68, 1, 2)
    };
    var _0x2ab3x72 = Player[_0x22a2[35]]();
    var _0x2ab3x73 = Player[_0x22a2[36]]();
    var _0x2ab3x74 = Player[_0x22a2[37]]();
    var _0x2ab3x19 = Player[_0x22a2[35]]();
    var _0x2ab3x18 = Player[_0x22a2[36]]();
    var _0x2ab3x1a = Player[_0x22a2[37]]()
}