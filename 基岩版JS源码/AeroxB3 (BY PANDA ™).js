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
var font = android['graphics']['Typeface']['SANS_SERIF'];
var watermarktext = '34 Modules';
var watermarktext2 = '8 Settings';
var watermarktext3 = '2 Settings';
var bg = new android['graphics']['drawable'].GradientDrawable();
bg['setColor'](android['graphics']['Color'].BLACK);
bg['setStroke'](4, android['graphics']['Color'].WHITE);
bg['setCornerRadius'](0);
var bg1 = new android['graphics']['drawable'].GradientDrawable();
bg1['setColor'](android['graphics']['Color'].BLACK);
bg1['setStroke'](4, android['graphics']['Color'].WHITE);
bg1['setCornerRadius'](0);
var bg2 = new android['graphics']['drawable'].GradientDrawable();
bg2['setColor'](android['graphics']['Color'].BLACK);
bg2['setStroke'](4, android['graphics']['Color'].WHITE);
bg2['setCornerRadius'](0);
var bg3 = new android['graphics']['drawable'].GradientDrawable();
bg3['setColor'](android['graphics']['Color'].BLACK);
bg3['setStroke'](4, android['graphics']['Color'].WHITE);
bg3['setCornerRadius'](0);
var bg4 = new android['graphics']['drawable'].GradientDrawable();
bg4['setColor'](android['graphics']['Color'].BLACK);
bg4['setStroke'](4, android['graphics']['Color'].WHITE);
bg4['setCornerRadius'](0);
var bg5 = new android['graphics']['drawable'].GradientDrawable();
bg5['setColor'](android['graphics']['Color'].BLACK);
bg5['setStroke'](4, android['graphics']['Color'].WHITE);
bg5['setCornerRadius'](0);
var bg6 = new android['graphics']['drawable'].GradientDrawable();
bg6['setColor'](android['graphics']['Color'].BLACK);
bg6['setStroke'](4, android['graphics']['Color'].WHITE);
bg6['setCornerRadius'](0);
var bg7 = new android['graphics']['drawable'].GradientDrawable();
bg7['setColor'](android['graphics']['Color'].BLACK);
bg7['setStroke'](4, android['graphics']['Color'].WHITE);
bg7['setCornerRadius'](0);
var bg8 = new android['graphics']['drawable'].GradientDrawable();
bg8['setColor'](android['graphics']['Color'].BLACK);
bg8['setStroke'](4, android['graphics']['Color'].WHITE);
bg8['setCornerRadius'](0);
var Utils = {
    Block: {
        isLiquid: function(_0x1ca6x20) {
            if (_0x1ca6x20 >= 8 && _0x1ca6x20 <= 11) {
                return true
            };
            return false
        },
        fastBreak: function() {
            for (i = 0; i < 256; i++) {
                Block['setDestroyTime'](i, 0)
            }
        },
        fastBreakDefault: function() {
            for (i = 0; i < 256; i++) {
                Block['setDestroyTime'](i, defDestroyTime[i])
            }
        },
        isLadder: function(_0x1ca6x20) {
            if (_0x1ca6x20 == 65) {
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
        replaceAll: function(_0x1ca6x21, _0x1ca6x22, _0x1ca6x23) {
            var _0x1ca6x24 = _0x1ca6x23;
            return _0x1ca6x24['replace'](new RegExp(_0x1ca6x21, 'g'), _0x1ca6x22)
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
            var _0x1ca6x25 = Entity['getY'](getPlayerEnt());
            while (_0x1ca6x25 > 1) {
                _0x1ca6x25 -= 1
            };
            if ((Math['round'](_0x1ca6x25 * 100) >= 61 && Math['round'](_0x1ca6x25 * 100) <= 63) && getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())) != 0 && !Utils['Block']['isLiquid'](getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())))) {
                return true
            };
            if ((Math['round'](_0x1ca6x25 * 100) >= 11 && Math['round'](_0x1ca6x25 * 100) <= 13) && getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())) != 0 && !Utils['Block']['isLiquid'](getTile(Entity['getX'](getPlayerEnt()), Entity['getY'](getPlayerEnt()) - 1.65, Entity['getZ'](getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x1ca6x26 = Entity['getX'](getPlayerEnt());
            var _0x1ca6x27 = Entity['getZ'](getPlayerEnt());
            var _0x1ca6x28 = Math['round'](_0x1ca6x26 - 0.5);
            var _0x1ca6x29 = Math['round'](_0x1ca6x27 - 0.5);
            while (_0x1ca6x26 < 1) {
                _0x1ca6x26 += 1
            };
            while (_0x1ca6x27 < 1) {
                _0x1ca6x27 += 1
            };
            while (_0x1ca6x26 > 1) {
                _0x1ca6x26 -= 1
            };
            while (_0x1ca6x27 > 1) {
                _0x1ca6x27 -= 1
            };
            if (Math['round'](_0x1ca6x26 * 100) == 31) {
                _0x1ca6x26 -= 0.01
            };
            if (Math['round'](_0x1ca6x27 * 100) == 31) {
                _0x1ca6x27 -= 0.01
            };
            if (Math['round'](_0x1ca6x26 * 100) == 69) {
                _0x1ca6x26 += 0.01
            };
            if (Math['round'](_0x1ca6x27 * 100) == 69) {
                _0x1ca6x27 += 0.01
            };
            if (Math['round'](_0x1ca6x26 * 100) == 30) {
                _0x1ca6x28--
            };
            if (Math['round'](_0x1ca6x27 * 100) == 30) {
                _0x1ca6x29--
            };
            if (Math['round'](_0x1ca6x26 * 100) == 70) {
                _0x1ca6x28++
            };
            if (Math['round'](_0x1ca6x27 * 100) == 70) {
                _0x1ca6x29++
            };
            if (getTile(_0x1ca6x28, Entity['getY'](getPlayerEnt()), _0x1ca6x29) == 0 && getTile(_0x1ca6x28, Entity['getY'](getPlayerEnt()) - 1, _0x1ca6x29) == 0) {
                return false
            };
            if (Block['getDestroyTime'](getTile(_0x1ca6x28, Entity['getY'](getPlayerEnt()) - 1, _0x1ca6x29)) <= 0.1 && Block['getDestroyTime'](getTile(_0x1ca6x28, Entity['getY'](getPlayerEnt()), _0x1ca6x29)) <= 0.1) {
                return false
            };
            if (Math['round'](_0x1ca6x26 * 100) == 30 || Math['round'](_0x1ca6x26 * 100) == 70) {
                return true
            };
            if (Math['round'](_0x1ca6x27 * 100) == 30 || Math['round'](_0x1ca6x27 * 100) == 70) {
                return true
            };
            return false
        }
    }
};
var GUI;
var menu;
var exitUI;
var GUI2;
var menu1;
var exitUI2;
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
var hittps;
var hittpss = false;
var hittped = false;
var autoswords;
var autoswordss = false;
var autosworded = false;
var autowalks;
var autowalkss = false;
var autowalked = false;
var jetpacks;
var jetpackss = false;
var jetpacked = false;
var cspeeds;
var cspeedss = false;
var cspeeded = false;
var derps;
var derpss = false;
var derped = false;
var twerks;
var twerkss = false;
var twerked = false;
var backfaces;
var backfacess = false;
var backfaceed = false;
var upglides;
var upglidess = false;
var upglideed = false;
var tapjumps;
var tapjumpss = false;
var tapjumped = false;
var taptps;
var taptpss = false;
var taptped = false;
var antiplayers;
var antiplayerss = false;
var antiplayered = false;
var reachs;
var reachss = false;
var reached = false;
var grapples;
var grappless = false;
var grappleed = false;
var nearwarnings;
var nearwarningss = false;
var nearwarninged = false;
var mglide;
var mglide1 = false;
var mglide2 = false;
var lbsgspeeds;
var lbsgspeedss = false;
var lbsgspeeded = false;
var criticaltrailss;
var criticaltrailsss = false;
var criticaltrailsed = false;
var bhop = false;
var bhopl = false;
var bhoped = false;
var js;
var js1 = false;
var js2 = false;
var hb;
var hb1 = false;
var hb2 = false;
var criticaltrailss9101;
var criticaltrailsss9101 = false;
var criticaltrailsed9101 = false;
var criticaltrailss9201;
var criticaltrailsss9201 = false;
var criticaltrailsed9201 = false;
var criticaltrailss9301;
var criticaltrailsss9301 = false;
var criticaltrailsed9301 = false;
var criticaltrailss9401;
var criticaltrailsss9401 = false;
var criticaltrailsed9401 = false;
var criticaltrailss9501;
var criticaltrailsss9501 = false;
var criticaltrailsed9501 = false;
var criticaltrailss9601;
var criticaltrailsss9601 = false;
var criticaltrailsed9601 = false;
var criticaltrailss9701;
var criticaltrailsss9701 = false;
var criticaltrailsed9701 = false;
var criticaltrailss9801;
var criticaltrailsss9801 = false;
var criticaltrailsed9801 = false;
var criticaltrailss9901;
var criticaltrailsss9901 = false;
var criticaltrailsed9901 = false;
var criticaltrailss99;
var criticaltrailsss99 = false;
var criticaltrailsed99 = false;
var criticaltrailss991;
var criticaltrailsss991 = false;
var criticaltrailsed991 = false;
var criticaltrailss01;
var criticaltrailsss01 = false;
var criticaltrailsed01 = false;
var dodges;
var dodgess = false;
var dodged = false;
var heart;
var hearts = false;
var hearted = false;
var gmSwitchs;
var gmSwitched = false;
var goglideed = false;
var goglide;
var goatglide = false;
var goglideed1 = false;
var goglide1;
var goatglide1 = false;
var goglideed2 = false;
var goglide2;
var goatglide2 = false;
var goglideed3 = false;
var goglide3;
var goatglide3 = false;
var goglideed4 = false;
var goglide4;
var goatglide4 = false;
var goglideed5 = false;
var goglide5;
var goatglide5 = false;
var goglideed6 = false;
var goglide6;
var goatglide6 = false;
var goglideed7 = false;
var goglide7;
var goatglide7 = false;
var goglideed76 = false;
var goglide76;
var goatglide76 = false;
var goglideed77 = false;
var goglide77;
var goatglide77 = false;
var lbsgspeeds1;
var lbsgspeedss1 = false;
var lbsgspeeded1 = false;
var lbsgspeeds2;
var lbsgspeedss2 = false;
var lbsgspeeded2 = false;
var criticaltrailss678;
var criticaltrailsss678 = false;
var criticaltrailsed678 = false;
var criticaltrailss4401;
var criticaltrailsss4401 = false;
var criticaltrailsed4401 = false;
var criticaltrailss440;
var criticaltrailsss440 = false;
var criticaltrailsed440 = false;
var criticaltrailss201;
var criticaltrailsss201 = false;
var criticaltrailsed201 = false;
var criticaltrailss202;
var criticaltrailsss202 = false;
var criticaltrailsed202 = false;
var bouncedelay = 9;
var bouncevel = 0.33;
var bouncespeed = 1.08;
var RenderLayer = 1;
var OpaqLayer = 0;
var view = 0;
var time = 2.0;
var tCounter = 0;

function dip2px(_0x1ca6xe3) {
    return Math['ceil'](_0x1ca6xe3 * ctx['getResources']()['getDisplayMetrics']()['density'])
}

function showMenuBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xe5 = new LinearLayout(ctx);
                _0x1ca6xe5['setOrientation'](1);
                var _0x1ca6xe6 = new Button(ctx);
                _0x1ca6xe6['setText']('ÆROX');
                _0x1ca6xe6['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xe6['setBackground'](bg1);
                _0x1ca6xe6['getBackground']()['setAlpha'](120);
                _0x1ca6xe6['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        mainMenu();
                        GUI['dismiss']();
                        exit()
                    }
                }));
                _0x1ca6xe5['addView'](_0x1ca6xe6);
                GUI = new PopupWindow(_0x1ca6xe5, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['TOP'], 256, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}
showMenuBtn();

function showElevatorBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xe5 = new LinearLayout(ctx);
                _0x1ca6xe5['setOrientation'](1);
                var _0x1ca6xe9 = new Button(ctx);
                _0x1ca6xe9['setText']('Up');
                _0x1ca6xe9['setTextColor'](Color.WHITE);
                _0x1ca6xe9['setBackground'](bg1);
                _0x1ca6xe9['setPadding'](10, 10, 10, 10);
                _0x1ca6xe9['getBackground']()['setAlpha'](120);
                _0x1ca6xe9['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        Entity['setPositionRelative'](getPlayerEnt(), 0, +2.53, 0)
                    }
                }));
                _0x1ca6xe5['addView'](_0x1ca6xe9);
                var _0x1ca6xea = new Button(ctx);
                _0x1ca6xea['setText']('Down');
                _0x1ca6xea['setTextColor'](Color.WHITE);
                _0x1ca6xea['setBackground'](bg1);
                _0x1ca6xea['setPadding'](10, 10, 10, 10);
                _0x1ca6xea['getBackground']()['setAlpha'](120);
                _0x1ca6xea['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        Entity['setPosition'](getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ())
                    }
                }));
                _0x1ca6xe5['addView'](_0x1ca6xea);
                GUIe = new PopupWindow(_0x1ca6xe5, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIe['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIe['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['CENTER'], 0, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function showMenuBtn3() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xe5 = new LinearLayout(ctx);
                _0x1ca6xe5['setOrientation'](1);
                var _0x1ca6xec = new Button(ctx);
                _0x1ca6xec['setText']('F5');
                _0x1ca6xec['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xec['setBackground'](bg1);
                _0x1ca6xec['getBackground']()['setAlpha'](120);
                _0x1ca6xec['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        view++;
                        if (view > 2) {
                            view = 0
                        };
                        ModPE['setPlayerViewPerspective'](view)
                    }
                }));
                _0x1ca6xe5['addView'](_0x1ca6xec);
                GUIa = new PopupWindow(_0x1ca6xe5, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUIa['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUIa['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['BOTTOM'], 0, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}

function settingsBtn() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xe5 = new LinearLayout(ctx);
                _0x1ca6xe5['setOrientation'](1);
                var _0x1ca6xee = new Button(ctx);
                _0x1ca6xee['setText']('Settings');
                _0x1ca6xee['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xee['setBackground'](bg1);
                _0x1ca6xee['getBackground']()['setAlpha'](120);
                _0x1ca6xee['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        settings();
                        GUI2['dismiss']();
                        exit1()
                    }
                }));
                _0x1ca6xe5['addView'](_0x1ca6xee);
                GUI2 = new PopupWindow(_0x1ca6xe5, RelativeLayout['LayoutParams'].WRAP_CONTENT, RelativeLayout['LayoutParams'].WRAP_CONTENT);
                GUI2['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                GUI2['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['LEFT'] | Gravity['TOP'], 256, 0)
            } catch (err) {
                Toast['makeText'](ctx, 'An error occured: ' + err, 1)['show']()
            }
        }
    }))
}
settingsBtn();

function xraysettings() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf0 = new LinearLayout(ctx);
                var _0x1ca6xf1 = new ScrollView(ctx);
                var _0x1ca6xf2 = new LinearLayout(ctx);
                _0x1ca6xf0['setOrientation'](1);
                _0x1ca6xf0['setBackground'](bg7);
                _0x1ca6xf0['getBackground']()['setAlpha'](120);
                _0x1ca6xf2['setOrientation'](1);
                _0x1ca6xf1['addView'](_0x1ca6xf0);
                _0x1ca6xf2['addView'](_0x1ca6xf1);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('   Xray Settings   ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](22);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText'](watermarktext3);
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var goglide77 = new CheckBox(ctx);
                goglide77['setText']('Chest');
                goglide77['setTextColor'](android['graphics']['Color'].WHITE);
                goglide77['setPadding'](10, 1, 1, 1);
                goglide77['setTextSize'](15);
                goglide77['setChecked'](goglideed77);
                goglide77['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed77) {
                            goglideed77 = true;
                            goatglide77 = true
                        } else {
                            goglideed77 = false;
                            goatglide77 = false
                        };
                        goglide77['setChecked'](goglideed77)
                    }
                }));
                _0x1ca6xf0['addView'](goglide77);
                var goglide76 = new CheckBox(ctx);
                goglide76['setText']('Ores');
                goglide76['setTextColor'](android['graphics']['Color'].WHITE);
                goglide76['setPadding'](10, 1, 1, 1);
                goglide76['setTextSize'](15);
                goglide76['setChecked'](goglideed76);
                goglide76['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed76) {
                            goglideed76 = true;
                            goatglide76 = true
                        } else {
                            goglideed76 = false;
                            goatglide76 = false
                        };
                        goglide76['setChecked'](goglideed76)
                    }
                }));
                _0x1ca6xf0['addView'](goglide76);
                menu3 = new android['widget'].PopupWindow(_0x1ca6xf2, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 2, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']() / 3);
                menu3['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['CENTER'] | Gravity['TOP'], 0, 0)
            } catch (error) {
                Toast['makeText'](ctx, 'Template Error: ' + error, 1)['show']()
            }
        }
    }))
}

function exit3() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf6 = new LinearLayout(ctx);
                var _0x1ca6xf7 = new Button(ctx);
                _0x1ca6xf7['setText']('X');
                _0x1ca6xf7['setTextColor'](Color.WHITE);
                _0x1ca6xf7['setTextSize'](15);
                _0x1ca6xf7['setBackground'](bg8);
                _0x1ca6xf7['getBackground']()['setAlpha'](150);
                _0x1ca6xf7['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        exitUIA['dismiss']();
                        menu3['dismiss']();
                        settingsBtn()
                    }
                }));
                _0x1ca6xf6['addView'](_0x1ca6xf7);
                exitUIA = new PopupWindow(_0x1ca6xf6, dip2px(40), dip2px(40));
                exitUIA['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitUIA['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function chanelog() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf0 = new LinearLayout(ctx);
                var _0x1ca6xf1 = new ScrollView(ctx);
                var _0x1ca6xf2 = new LinearLayout(ctx);
                _0x1ca6xf0['setOrientation'](1);
                _0x1ca6xf0['setBackground'](bg6);
                _0x1ca6xf0['getBackground']()['setAlpha'](120);
                _0x1ca6xf2['setOrientation'](1);
                _0x1ca6xf1['addView'](_0x1ca6xf0);
                _0x1ca6xf2['addView'](_0x1ca6xf1);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('   Changelog   ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](20);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('Whats Been Updated To Aerox B3');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](15);
                _0x1ca6xf4['setGravity'](Gravity.LEFT);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Xray');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Xray Settings Gui (Can Be Found If Settings Menu)');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Health');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Coords');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Removed Menu Animations On Opening To Reduce Lag');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Attack Hacks');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-F5 Button');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Elevator Buttons');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText']('-Small Bug Fixes');
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('   Close Changelog   ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](20);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        menu2['dismiss']()
                    }
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                menu2 = new android['widget'].PopupWindow(_0x1ca6xf2, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 2, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']() / 2);
                menu2['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['CENTER'] | Gravity['CENTER'], 0, 100)
            } catch (error) {
                Toast['makeText'](ctx, 'Template Error: ' + error, 1)['show']()
            }
        }
    }))
}
chanelog();

function settings() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf0 = new LinearLayout(ctx);
                var _0x1ca6xf1 = new ScrollView(ctx);
                var _0x1ca6xfa = new LinearLayout(ctx);
                _0x1ca6xf0['setOrientation'](1);
                _0x1ca6xf0['setBackground'](bg6);
                _0x1ca6xf0['getBackground']()['setAlpha'](120);
                _0x1ca6xfa['setOrientation'](1);
                _0x1ca6xf1['addView'](_0x1ca6xf0);
                _0x1ca6xfa['addView'](_0x1ca6xf1);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('   Settings   ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](22);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('Xray Settings');
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackground'](bg2);
                _0x1ca6xf3['getBackground']()['setAlpha'](120);
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        exit3();
                        exitUI['dismiss']();
                        xraysettings();
                        menu1['dismiss']()
                    }
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText'](watermarktext2);
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('  Glide Settings  ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](20);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var goglide = new CheckBox(ctx);
                goglide['setText']('No Down');
                goglide['setTextColor'](android['graphics']['Color'].WHITE);
                goglide['setPadding'](10, 1, 1, 1);
                goglide['setTextSize'](15);
                goglide['setChecked'](goglideed);
                goglide['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed) {
                            goglideed = true;
                            goatglide = true
                        } else {
                            goglideed = false;
                            goatglide = false
                        };
                        goglide['setChecked'](goglideed)
                    }
                }));
                _0x1ca6xf0['addView'](goglide);
                var goglide1 = new CheckBox(ctx);
                goglide1['setText']('Mineplex');
                goglide1['setTextColor'](android['graphics']['Color'].WHITE);
                goglide1['setPadding'](10, 1, 1, 1);
                goglide1['setTextSize'](15);
                goglide1['setChecked'](goglideed1);
                goglide1['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed1) {
                            goglideed1 = true;
                            goatglide1 = true
                        } else {
                            goglideed1 = false;
                            goatglide1 = false
                        };
                        goglide1['setChecked'](goglideed1)
                    }
                }));
                _0x1ca6xf0['addView'](goglide1);
                var goglide2 = new CheckBox(ctx);
                goglide2['setText']('Down');
                goglide2['setTextColor'](android['graphics']['Color'].WHITE);
                goglide2['setPadding'](10, 1, 1, 1);
                goglide2['setTextSize'](15);
                goglide2['setChecked'](goglideed2);
                goglide2['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed2) {
                            goglideed2 = true;
                            goatglide2 = true
                        } else {
                            goglideed2 = false;
                            goatglide2 = false
                        };
                        goglide2['setChecked'](goglideed2)
                    }
                }));
                _0x1ca6xf0['addView'](goglide2);
                var goglide3 = new CheckBox(ctx);
                goglide3['setText']('Up');
                goglide3['setTextColor'](android['graphics']['Color'].WHITE);
                goglide3['setPadding'](10, 1, 1, 1);
                goglide3['setTextSize'](15);
                goglide3['setChecked'](goglideed3);
                goglide3['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed3) {
                            goglideed3 = true;
                            goatglide3 = true
                        } else {
                            goglideed3 = false;
                            goatglide3 = false
                        };
                        goglide3['setChecked'](goglideed3)
                    }
                }));
                _0x1ca6xf0['addView'](goglide3);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('  Hop Settings  ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](20);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var goglide4 = new CheckBox(ctx);
                goglide4['setText']('Mini');
                goglide4['setTextColor'](android['graphics']['Color'].WHITE);
                goglide4['setPadding'](10, 1, 1, 1);
                goglide4['setTextSize'](15);
                goglide4['setChecked'](goglideed4);
                goglide4['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed4) {
                            goglideed4 = true;
                            goatglide4 = true
                        } else {
                            goglideed4 = false;
                            goatglide4 = false
                        };
                        goglide4['setChecked'](goglideed4)
                    }
                }));
                _0x1ca6xf0['addView'](goglide4);
                var goglide5 = new CheckBox(ctx);
                goglide5['setText']('Y Port');
                goglide5['setTextColor'](android['graphics']['Color'].WHITE);
                goglide5['setPadding'](10, 1, 1, 1);
                goglide5['setTextSize'](15);
                goglide5['setChecked'](goglideed5);
                goglide5['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed5) {
                            goglideed5 = true;
                            goatglide5 = true
                        } else {
                            goglideed5 = false;
                            goatglide5 = false
                        };
                        goglide5['setChecked'](goglideed5)
                    }
                }));
                _0x1ca6xf0['addView'](goglide5);
                var goglide6 = new CheckBox(ctx);
                goglide6['setText']('Water');
                goglide6['setTextColor'](android['graphics']['Color'].WHITE);
                goglide6['setPadding'](10, 1, 1, 1);
                goglide6['setTextSize'](15);
                goglide6['setChecked'](goglideed6);
                goglide6['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed6) {
                            goglideed6 = true;
                            goatglide6 = true
                        } else {
                            goglideed6 = false;
                            goatglide6 = false
                        };
                        goglide6['setChecked'](goglideed6)
                    }
                }));
                _0x1ca6xf0['addView'](goglide6);
                var goglide7 = new CheckBox(ctx);
                goglide7['setText']('Bunny');
                goglide7['setTextColor'](android['graphics']['Color'].WHITE);
                goglide7['setPadding'](10, 1, 1, 1);
                goglide7['setTextSize'](15);
                goglide7['setChecked'](goglideed7);
                goglide7['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!goglideed7) {
                            goglideed7 = true;
                            goatglide7 = true
                        } else {
                            goglideed7 = false;
                            goatglide7 = false
                        };
                        goglide7['setChecked'](goglideed7)
                    }
                }));
                _0x1ca6xf0['addView'](goglide7);
                menu1 = new android['widget'].PopupWindow(_0x1ca6xfa, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 2, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']() / 1);
                menu1['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['CENTER'] | Gravity['TOP'], 0, 0)
            } catch (error) {
                Toast['makeText'](ctx, 'Template Error: ' + error, 1)['show']()
            }
        }
    }))
}

function exit1() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf6 = new LinearLayout(ctx);
                var _0x1ca6xfc = new Button(ctx);
                _0x1ca6xfc['setText']('X');
                _0x1ca6xfc['setTextColor'](Color.WHITE);
                _0x1ca6xfc['setTextSize'](15);
                _0x1ca6xfc['setBackground'](bg3);
                _0x1ca6xfc['getBackground']()['setAlpha'](150);
                _0x1ca6xfc['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        exitUI['dismiss']();
                        menu1['dismiss']();
                        settingsBtn()
                    }
                }));
                _0x1ca6xf6['addView'](_0x1ca6xfc);
                exitUI = new PopupWindow(_0x1ca6xf6, dip2px(40), dip2px(40));
                exitUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function mainMenu() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf0 = new LinearLayout(ctx);
                var _0x1ca6xf1 = new ScrollView(ctx);
                var _0x1ca6xfe = new LinearLayout(ctx);
                _0x1ca6xf0['setOrientation'](1);
                _0x1ca6xf0['setBackground'](bg);
                _0x1ca6xf0['getBackground']()['setAlpha'](120);
                _0x1ca6xfe['setOrientation'](1);
                _0x1ca6xf1['addView'](_0x1ca6xf0);
                _0x1ca6xfe['addView'](_0x1ca6xf1);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('  ÆROX  ');
                _0x1ca6xf3['setTypeface'](font);
                _0x1ca6xf3['setTextSize'](28);
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackgroundDrawable'](new android['graphics']['drawable'].ColorDrawable(android['graphics']['Color'].TRANSPARENT));
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {}
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var _0x1ca6xf4 = new TextView(ctx);
                _0x1ca6xf4['setText'](watermarktext);
                _0x1ca6xf4['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf4['setTextSize'](14);
                _0x1ca6xf4['setGravity'](Gravity.CENTER);
                _0x1ca6xf0['addView'](_0x1ca6xf4);
                var _0x1ca6xf3 = new android['widget'].Button(ctx);
                _0x1ca6xf3['setText']('GameMode');
                _0x1ca6xf3['setTextColor'](android['graphics']['Color'].WHITE);
                _0x1ca6xf3['setBackground'](bg2);
                _0x1ca6xf3['getBackground']()['setAlpha'](120);
                _0x1ca6xf3['setOnClickListener'](new android['view']['View'].OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        if (!gmSwitched) {
                            Level['setGameMode'](1);
                            gmSwitched = true
                        } else {
                            Level['setGameMode'](0);
                            gmSwitched = false
                        }
                    }
                }));
                _0x1ca6xf0['addView'](_0x1ca6xf3);
                var antikbs = new Switch(ctx);
                antikbs['setText']('Velocity');
                antikbs['setTextColor'](android['graphics']['Color'].WHITE);
                antikbs['setPadding'](10, 3, 3, 3);
                antikbs['setTextSize'](15);
                antikbs['setChecked'](antikbed);
                antikbs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!antikbed) {
                            antikbss = true;
                            antikbed = true
                        } else {
                            antikbss = false;
                            antikbed = false
                        };
                        antikbs['setChecked'](antikbed)
                    }
                }));
                _0x1ca6xf0['addView'](antikbs);
                var aimbots = new Switch(ctx);
                aimbots['setText']('Aim Aura');
                aimbots['setTextColor'](android['graphics']['Color'].WHITE);
                aimbots['setPadding'](10, 3, 3, 3);
                aimbots['setTextSize'](15);
                aimbots['setChecked'](aimboted);
                aimbots['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aimboted) {
                            aimbotss = true;
                            aimboted = true
                        } else {
                            aimbotss = false;
                            aimboted = false
                        };
                        aimbots['setChecked'](aimboted)
                    }
                }));
                _0x1ca6xf0['addView'](aimbots);
                var reachs = new Switch(ctx);
                reachs['setText']('Reach');
                reachs['setTextColor'](android['graphics']['Color'].WHITE);
                reachs['setPadding'](10, 3, 3, 3);
                reachs['setTextSize'](15);
                reachs['setChecked'](reached);
                reachs['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!reached) {
                            reachss = true;
                            reached = true
                        } else {
                            reachss = false;
                            reached = false;
                            Level['setGameMode'](0)
                        };
                        reachs['setChecked'](reached)
                    }
                }));
                _0x1ca6xf0['addView'](reachs);
                var grapples = new Switch(ctx);
                grapples['setText']('Hit TP');
                grapples['setTextColor'](android['graphics']['Color'].WHITE);
                grapples['setPadding'](10, 3, 3, 3);
                grapples['setTextSize'](15);
                grapples['setChecked'](grappleed);
                grapples['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!grappleed) {
                            grappless = true;
                            grappleed = true
                        } else {
                            grappless = false;
                            grappleed = false
                        };
                        grapples['setChecked'](grappleed)
                    }
                }));
                _0x1ca6xf0['addView'](grapples);
                var autoswords = new Switch(ctx);
                autoswords['setText']('Auto Sword');
                autoswords['setTextColor'](android['graphics']['Color'].WHITE);
                autoswords['setPadding'](10, 3, 3, 3);
                autoswords['setTextSize'](15);
                autoswords['setChecked'](autosworded);
                autoswords['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!autosworded) {
                            autoswordss = true;
                            autosworded = true
                        } else {
                            autoswordss = false;
                            autosworded = false
                        };
                        autoswords['setChecked'](autosworded)
                    }
                }));
                _0x1ca6xf0['addView'](autoswords);
                var hb = new Switch(ctx);
                hb['setText']('Hitbox Expander');
                hb['setTextColor'](android['graphics']['Color'].WHITE);
                hb['setPadding'](10, 3, 3, 3);
                hb['setTextSize'](15);
                hb['setChecked'](hb2);
                hb['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!hb2) {
                            hb1 = true;
                            hb2 = true
                        } else {
                            hb1 = false;
                            hb2 = false
                        };
                        hb['setChecked'](hb2)
                    }
                }));
                _0x1ca6xf0['addView'](hb);
                var criticaltrailss201 = new Switch(ctx);
                criticaltrailss201['setText']('Boost Hit');
                criticaltrailss201['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss201['setPadding'](10, 3, 3, 3);
                criticaltrailss201['setTextSize'](15);
                criticaltrailss201['setChecked'](criticaltrailsed201);
                criticaltrailss201['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed201) {
                            criticaltrailsss201 = true;
                            criticaltrailsed201 = true
                        } else {
                            criticaltrailsss201 = false;
                            criticaltrailsed201 = false
                        };
                        criticaltrailss201['setChecked'](criticaltrailsed201)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss201);
                var criticaltrailss202 = new Switch(ctx);
                criticaltrailss202['setText']('Jump Hit');
                criticaltrailss202['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss202['setPadding'](10, 3, 3, 3);
                criticaltrailss202['setTextSize'](15);
                criticaltrailss202['setChecked'](criticaltrailsed202);
                criticaltrailss202['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed202) {
                            criticaltrailsss202 = true;
                            criticaltrailsed202 = true
                        } else {
                            criticaltrailsss202 = false;
                            criticaltrailsed202 = false
                        };
                        criticaltrailss202['setChecked'](criticaltrailsed202)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss202);
                var criticaltrailss = new Switch(ctx);
                criticaltrailss['setText']('Leet Boost');
                criticaltrailss['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss['setPadding'](10, 3, 3, 3);
                criticaltrailss['setTextSize'](15);
                criticaltrailss['setChecked'](criticaltrailsed);
                criticaltrailss['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed) {
                            criticaltrailsss = true;
                            criticaltrailsed = true
                        } else {
                            criticaltrailsss = false;
                            criticaltrailsed = false
                        };
                        criticaltrailss['setChecked'](criticaltrailsed)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss);
                var nearwarnings = new Switch(ctx);
                nearwarnings['setText']('Phase');
                nearwarnings['setTextColor'](android['graphics']['Color'].WHITE);
                nearwarnings['setPadding'](10, 3, 3, 3);
                nearwarnings['setTextSize'](15);
                nearwarnings['setChecked'](nearwarninged);
                nearwarnings['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!nearwarninged) {
                            nearwarningss = true;
                            nearwarninged = true
                        } else {
                            nearwarningss = false;
                            nearwarninged = false
                        };
                        nearwarnings['setChecked'](nearwarninged)
                    }
                }));
                _0x1ca6xf0['addView'](nearwarnings);
                var ndglides = new Switch(ctx);
                ndglides['setText']('Glide');
                ndglides['setTextColor'](android['graphics']['Color'].WHITE);
                ndglides['setPadding'](10, 3, 3, 3);
                ndglides['setTextSize'](15);
                ndglides['setChecked'](ndglideed);
                ndglides['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ndglideed) {
                            ndglidess = true;
                            ndglideed = true;
                            aero('Now Select A Setting')
                        } else {
                            ndglidess = false;
                            ndglideed = false
                        };
                        ndglides['setChecked'](ndglideed)
                    }
                }));
                _0x1ca6xf0['addView'](ndglides);
                var mglide = new Switch(ctx);
                mglide['setText']('Safe Walk');
                mglide['setTextColor'](android['graphics']['Color'].WHITE);
                mglide['setPadding'](10, 3, 3, 3);
                mglide['setTextSize'](15);
                mglide['setChecked'](mglide2);
                mglide['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!mglide2) {
                            mglide1 = true;
                            mglide2 = true
                        } else {
                            mglide1 = false;
                            mglide2 = false
                        };
                        mglide['setChecked'](mglide2)
                    }
                }));
                _0x1ca6xf0['addView'](mglide);
                var heart = new Switch(ctx);
                heart['setText']('Scaffold Walk');
                heart['setTextColor'](android['graphics']['Color'].WHITE);
                heart['setPadding'](10, 3, 3, 3);
                heart['setTextSize'](15);
                heart['setChecked'](hearted);
                heart['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!hearted) {
                            hearts = true;
                            hearted = true
                        } else {
                            hearts = false;
                            hearted = false
                        };
                        heart['setChecked'](hearted)
                    }
                }));
                _0x1ca6xf0['addView'](heart);
                var tapjumps = new Switch(ctx);
                tapjumps['setText']('Tap Tower');
                tapjumps['setTextColor'](android['graphics']['Color'].WHITE);
                tapjumps['setPadding'](10, 3, 3, 3);
                tapjumps['setTextSize'](15);
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
                _0x1ca6xf0['addView'](tapjumps);
                var taptps = new Switch(ctx);
                taptps['setText']('TapTP');
                taptps['setTextColor'](android['graphics']['Color'].WHITE);
                taptps['setPadding'](10, 3, 3, 3);
                taptps['setTextSize'](15);
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
                _0x1ca6xf0['addView'](taptps);
                var bhop = new Switch(ctx);
                bhop['setText']('Hop');
                bhop['setTextColor'](android['graphics']['Color'].WHITE);
                bhop['setPadding'](10, 3, 3, 3);
                bhop['setTextSize'](15);
                bhop['setChecked'](bhoped);
                bhop['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bhoped) {
                            bhopl = true;
                            bhoped = true;
                            aero('Now Select A Setting')
                        } else {
                            bhopl = false;
                            bhoped = false
                        };
                        bhop['setChecked'](bhoped)
                    }
                }));
                _0x1ca6xf0['addView'](bhop);
                var lbsgspeeds = new Switch(ctx);
                lbsgspeeds['setText']('Lbsg Speed');
                lbsgspeeds['setTextColor'](android['graphics']['Color'].WHITE);
                lbsgspeeds['setPadding'](10, 3, 3, 3);
                lbsgspeeds['setTextSize'](15);
                lbsgspeeds['setChecked'](lbsgspeeded);
                lbsgspeeds['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!lbsgspeeded) {
                            ModPE['setGameSpeed'](40);
                            lbsgspeedss = true;
                            lbsgspeeded = true
                        } else {
                            ModPE['setGameSpeed'](20);
                            lbsgspeedss = false;
                            lbsgspeeded = false
                        };
                        lbsgspeeds['setChecked'](lbsgspeeded)
                    }
                }));
                _0x1ca6xf0['addView'](lbsgspeeds);
                var criticaltrailss9101 = new Switch(ctx);
                criticaltrailss9101['setText']('Spider Climb');
                criticaltrailss9101['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9101['setPadding'](10, 3, 3, 3);
                criticaltrailss9101['setTextSize'](15);
                criticaltrailss9101['setChecked'](criticaltrailsed9101);
                criticaltrailss9101['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9101) {
                            criticaltrailsss9101 = true;
                            criticaltrailsed9101 = true
                        } else {
                            criticaltrailsss9101 = false;
                            criticaltrailsed9101 = false
                        };
                        criticaltrailss9101['setChecked'](criticaltrailsed9101)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9101);
                var criticaltrailss9201 = new Switch(ctx);
                criticaltrailss9201['setText']('Hover Aura');
                criticaltrailss9201['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9201['setPadding'](10, 3, 3, 3);
                criticaltrailss9201['setTextSize'](15);
                criticaltrailss9201['setChecked'](criticaltrailsed9201);
                criticaltrailss9201['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9201) {
                            criticaltrailsss9201 = true;
                            criticaltrailsed9201 = true;
                            aero('Code Originally Made By: Me (WolfHaxYT) And Hacker Laastad');
                            aero('Works On Players And Mobs')
                        } else {
                            criticaltrailsss9201 = false;
                            criticaltrailsed9201 = false
                        };
                        criticaltrailss9201['setChecked'](criticaltrailsed9201)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9201);
                var criticaltrailss9301 = new Switch(ctx);
                criticaltrailss9301['setText']('Wall AimBot');
                criticaltrailss9301['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9301['setPadding'](10, 3, 3, 3);
                criticaltrailss9301['setTextSize'](15);
                criticaltrailss9301['setChecked'](criticaltrailsed9301);
                criticaltrailss9301['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9301) {
                            criticaltrailsss9301 = true;
                            criticaltrailsed9301 = true
                        } else {
                            criticaltrailsss9301 = false;
                            criticaltrailsed9301 = false
                        };
                        criticaltrailss9301['setChecked'](criticaltrailsed9301)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9301);
                var criticaltrailss9401 = new Switch(ctx);
                criticaltrailss9401['setText']('Water AimBot');
                criticaltrailss9401['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9401['setPadding'](10, 3, 3, 3);
                criticaltrailss9401['setTextSize'](15);
                criticaltrailss9401['setChecked'](criticaltrailsed9401);
                criticaltrailss9401['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9401) {
                            criticaltrailsss9401 = true;
                            criticaltrailsed9401 = true
                        } else {
                            criticaltrailsss9401 = false;
                            criticaltrailsed9401 = false
                        };
                        criticaltrailss9401['setChecked'](criticaltrailsed9401)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9401);
                var criticaltrailss9501 = new Switch(ctx);
                criticaltrailss9501['setText']('Crouch Speeds');
                criticaltrailss9501['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9501['setPadding'](10, 3, 3, 3);
                criticaltrailss9501['setTextSize'](15);
                criticaltrailss9501['setChecked'](criticaltrailsed9501);
                criticaltrailss9501['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9501) {
                            criticaltrailsss9501 = true;
                            criticaltrailsed9501 = true
                        } else {
                            criticaltrailsss9501 = false;
                            criticaltrailsed9501 = false
                        };
                        criticaltrailss9501['setChecked'](criticaltrailsed9501)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9501);
                var dodges = new Switch(ctx);
                dodges['setText']('Bounce Fly');
                dodges['setTextColor'](android['graphics']['Color'].WHITE);
                dodges['setPadding'](10, 3, 3, 3);
                dodges['setTextSize'](15);
                dodges['setChecked'](dodged);
                dodges['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!dodged) {
                            dodgess = true;
                            dodged = true
                        } else {
                            dodgess = false;
                            dodged = false
                        };
                        dodges['setChecked'](dodged)
                    }
                }));
                _0x1ca6xf0['addView'](dodges);
                var criticaltrailss99 = new Switch(ctx);
                criticaltrailss99['setText']('Fast Swim');
                criticaltrailss99['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss99['setPadding'](10, 3, 3, 3);
                criticaltrailss99['setTextSize'](15);
                criticaltrailss99['setChecked'](criticaltrailsed99);
                criticaltrailss99['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed99) {
                            criticaltrailsss99 = true;
                            criticaltrailsed99 = true
                        } else {
                            criticaltrailsss99 = false;
                            criticaltrailsed99 = false
                        };
                        criticaltrailss99['setChecked'](criticaltrailsed99)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss99);
                var criticaltrailss01 = new Switch(ctx);
                criticaltrailss01['setText']('Water Slide');
                criticaltrailss01['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss01['setPadding'](10, 3, 3, 3);
                criticaltrailss01['setTextSize'](15);
                criticaltrailss01['setChecked'](criticaltrailsed01);
                criticaltrailss01['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed01) {
                            criticaltrailsss01 = true;
                            criticaltrailsed01 = true
                        } else {
                            criticaltrailsss01 = false;
                            criticaltrailsed01 = false
                        };
                        criticaltrailss01['setChecked'](criticaltrailsed01)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss01);
                var criticaltrailss4401 = new Switch(ctx);
                criticaltrailss4401['setText']('Health');
                criticaltrailss4401['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss4401['setPadding'](10, 3, 3, 3);
                criticaltrailss4401['setTextSize'](15);
                criticaltrailss4401['setChecked'](criticaltrailsed4401);
                criticaltrailss4401['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed4401) {
                            criticaltrailsss4401 = true;
                            criticaltrailsed4401 = true
                        } else {
                            criticaltrailsss4401 = false;
                            criticaltrailsed4401 = false
                        };
                        criticaltrailss4401['setChecked'](criticaltrailsed4401)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss4401);
                var criticaltrailss440 = new Switch(ctx);
                criticaltrailss440['setText']('Coords');
                criticaltrailss440['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss440['setPadding'](10, 3, 3, 3);
                criticaltrailss440['setTextSize'](15);
                criticaltrailss440['setChecked'](criticaltrailsed440);
                criticaltrailss440['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed440) {
                            criticaltrailsss440 = true;
                            criticaltrailsed440 = true
                        } else {
                            criticaltrailsss440 = false;
                            criticaltrailsed440 = false
                        };
                        criticaltrailss440['setChecked'](criticaltrailsed440)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss440);
                var criticaltrailss9601 = new Switch(ctx);
                criticaltrailss9601['setText']('Spammer');
                criticaltrailss9601['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9601['setPadding'](10, 3, 3, 3);
                criticaltrailss9601['setTextSize'](15);
                criticaltrailss9601['setChecked'](criticaltrailsed9601);
                criticaltrailss9601['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9601) {
                            criticaltrailsss9601 = true;
                            criticaltrailsed9601 = true
                        } else {
                            criticaltrailsss9601 = false;
                            criticaltrailsed9601 = false
                        };
                        criticaltrailss9601['setChecked'](criticaltrailsed9601)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9601);
                var criticaltrailss678 = new Switch(ctx);
                criticaltrailss678['setText']('Xray');
                criticaltrailss678['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss678['setPadding'](10, 3, 3, 3);
                criticaltrailss678['setTextSize'](15);
                criticaltrailss678['setChecked'](criticaltrailsed678);
                criticaltrailss678['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed678) {
                            criticaltrailsss678 = true;
                            criticaltrailsed678 = true;
                            aero('Now Select A Setting From Xray Settings');
                            aero('Xray May Be Laggy On Low End Devices')
                        } else {
                            criticaltrailsss678 = false;
                            criticaltrailsed678 = false
                        };
                        criticaltrailss678['setChecked'](criticaltrailsed678)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss678);
                var lbsgspeeds1 = new Switch(ctx);
                lbsgspeeds1['setText']('F5 Button');
                lbsgspeeds1['setTextColor'](android['graphics']['Color'].WHITE);
                lbsgspeeds1['setPadding'](10, 3, 3, 3);
                lbsgspeeds1['setTextSize'](15);
                lbsgspeeds1['setChecked'](lbsgspeeded1);
                lbsgspeeds1['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!lbsgspeeded1) {
                            showMenuBtn3();
                            lbsgspeedss1 = true;
                            lbsgspeeded1 = true
                        } else {
                            GUIa['dismiss']();
                            lbsgspeedss1 = false;
                            lbsgspeeded1 = false
                        };
                        lbsgspeeds1['setChecked'](lbsgspeeded1)
                    }
                }));
                _0x1ca6xf0['addView'](lbsgspeeds1);
                var lbsgspeeds2 = new Switch(ctx);
                lbsgspeeds2['setText']('Elevator');
                lbsgspeeds2['setTextColor'](android['graphics']['Color'].WHITE);
                lbsgspeeds2['setPadding'](10, 3, 3, 3);
                lbsgspeeds2['setTextSize'](15);
                lbsgspeeds2['setChecked'](lbsgspeeded2);
                lbsgspeeds2['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!lbsgspeeded2) {
                            showElevatorBtn();
                            lbsgspeedss2 = true;
                            lbsgspeeded2 = true
                        } else {
                            GUIe['dismiss']();
                            lbsgspeedss2 = false;
                            lbsgspeeded2 = false
                        };
                        lbsgspeeds2['setChecked'](lbsgspeeded2)
                    }
                }));
                _0x1ca6xf0['addView'](lbsgspeeds2);
                var criticaltrailss9701 = new Switch(ctx);
                criticaltrailss9701['setText']('Twerk');
                criticaltrailss9701['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9701['setPadding'](10, 3, 3, 3);
                criticaltrailss9701['setTextSize'](15);
                criticaltrailss9701['setChecked'](criticaltrailsed9701);
                criticaltrailss9701['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9701) {
                            criticaltrailsss9701 = true;
                            criticaltrailsed9701 = true;
                            aero('Twerk It Miley')
                        } else {
                            criticaltrailsss9701 = false;
                            criticaltrailsed9701 = false
                        };
                        criticaltrailss9701['setChecked'](criticaltrailsed9701)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9701);
                var criticaltrailss9801 = new Switch(ctx);
                criticaltrailss9801['setText']('Derp');
                criticaltrailss9801['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9801['setPadding'](10, 3, 3, 3);
                criticaltrailss9801['setTextSize'](15);
                criticaltrailss9801['setChecked'](criticaltrailsed9801);
                criticaltrailss9801['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9801) {
                            criticaltrailsss9801 = true;
                            criticaltrailsed9801 = true
                        } else {
                            criticaltrailsss9801 = false;
                            criticaltrailsed9801 = false
                        };
                        criticaltrailss9801['setChecked'](criticaltrailsed9801)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9801);
                var criticaltrailss9901 = new Switch(ctx);
                criticaltrailss9901['setText']('Back Faces');
                criticaltrailss9901['setTextColor'](android['graphics']['Color'].WHITE);
                criticaltrailss9901['setPadding'](10, 3, 3, 3);
                criticaltrailss9901['setTextSize'](15);
                criticaltrailss9901['setChecked'](criticaltrailsed9901);
                criticaltrailss9901['setOnCheckedChangeListener'](new android['widget']['CompoundButton'].OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9901) {
                            criticaltrailsss9901 = true;
                            criticaltrailsed9901 = true
                        } else {
                            criticaltrailsss9901 = false;
                            criticaltrailsed9901 = false
                        };
                        criticaltrailss9901['setChecked'](criticaltrailsed9901)
                    }
                }));
                _0x1ca6xf0['addView'](criticaltrailss9901);
                menu = new android['widget'].PopupWindow(_0x1ca6xfe, ctx['getWindowManager']()['getDefaultDisplay']()['getWidth']() / 2, ctx['getWindowManager']()['getDefaultDisplay']()['getHeight']() / 1);
                menu['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['CENTER'] | Gravity['TOP'], 0, 0)
            } catch (error) {
                Toast['makeText'](ctx, 'Template Error: ' + error, 1)['show']()
            }
        }
    }))
}

function exit() {
    ctx['runOnUiThread'](new Runnable({
        run: function() {
            try {
                var _0x1ca6xf6 = new LinearLayout(ctx);
                var _0x1ca6x100 = new Button(ctx);
                _0x1ca6x100['setText']('X');
                _0x1ca6x100['setTextColor'](Color.WHITE);
                _0x1ca6x100['setTextSize'](15);
                _0x1ca6x100['setBackground'](bg3);
                _0x1ca6x100['getBackground']()['setAlpha'](150);
                _0x1ca6x100['setOnClickListener'](new View.OnClickListener({
                    onClick: function(_0x1ca6xe7) {
                        exitUI['dismiss']();
                        menu['dismiss']();
                        showMenuBtn()
                    }
                }));
                _0x1ca6xf6['addView'](_0x1ca6x100);
                exitUI = new PopupWindow(_0x1ca6xf6, dip2px(40), dip2px(40));
                exitUI['setBackgroundDrawable'](new ColorDrawable(Color.TRANSPARENT));
                exitUI['showAtLocation'](ctx['getWindow']()['getDecorView'](), Gravity['RIGHT'] | Gravity['BOTTOM'], 0, 0)
            } catch (exception) {
                Toast['makeText'](ctx, exception, 1)['show']()
            }
        }
    }))
}

function toDirectionalVector(_0x1ca6x102, _0x1ca6x103, _0x1ca6x104) {
    _0x1ca6x102[0] = Math['cos'](_0x1ca6x103) * Math['cos'](_0x1ca6x104);
    _0x1ca6x102[1] = Math['sin'](_0x1ca6x104);
    _0x1ca6x102[2] = Math['sin'](_0x1ca6x103) * Math['cos'](_0x1ca6x104)
}

function attackHook(_0x1ca6x106, _0x1ca6x107) {
    if (_0x1ca6x106 == Player['getEntity']() && grappless && Entity['getHealth'](_0x1ca6x107) > 0) {
        setPosition(getPlayerEnt(), Entity['getX'](_0x1ca6x107), Entity['getY'](_0x1ca6x107) + 2, Entity['getZ'](_0x1ca6x107))
    };
    if (_0x1ca6x106 == Player['getEntity']() && criticaltrailsss202) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (_0x1ca6x106 == Player['getEntity']() && criticaltrailsss201 && Entity['getHealth'](_0x1ca6x107) > 0) {
        if (Utils['Player']['isOnGround']()) {
            var _0x1ca6x108 = getYaw() + 90
        };
        var _0x1ca6x109 = getPitch() - 180;
        x = Math['cos'](_0x1ca6x108 * (Math['PI'] / 180));
        y = Math['sin'](_0x1ca6x109 * (Math['PI'] / 180));
        z = Math['sin'](_0x1ca6x108 * (Math['PI'] / 180));
        setVelX(Player['getEntity'](), x * 1);
        setVelZ(Player['getEntity'](), z * 1)
    };
    if (_0x1ca6x106 == Player['getEntity']() && criticaltrailsss201 && Entity['getHealth'](_0x1ca6x107) > 0) {
        if (Utils['Player']['isOnGround']()) {
            var _0x1ca6x108 = getYaw() + 90
        };
        var _0x1ca6x109 = getPitch() - 180;
        x = Math['cos'](_0x1ca6x108 * (Math['PI'] / 180));
        y = Math['sin'](_0x1ca6x109 * (Math['PI'] / 180));
        z = Math['sin'](_0x1ca6x108 * (Math['PI'] / 180));
        setVelX(Player['getEntity'](), x * 2);
        setVelZ(Player['getEntity'](), z * 2)
    }
}

function useItem(_0x1ca6x26, _0x1ca6x25, _0x1ca6x27, _0x1ca6x10b, _0x1ca6x10c, _0x1ca6x10d, _0x1ca6x10e, _0x1ca6x10f) {
    if (tapjumpss) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (taptpss && getTile(_0x1ca6x26, _0x1ca6x25 + 1, _0x1ca6x27) == 0 && getTile(_0x1ca6x26, _0x1ca6x25 + 2, _0x1ca6x27) == 0) {
        Entity['setPosition'](Player['getEntity'](), _0x1ca6x26 + 0.5, _0x1ca6x25 + 2.63, _0x1ca6x27 + 0.5)
    }
}

function getNearestEntity(_0x1ca6x111) {
    var _0x1ca6x112 = Entity['getAll']();
    var _0x1ca6x113 = Server['getAllPlayers']();
    var _0x1ca6x114 = _0x1ca6x111;
    var _0x1ca6x115 = null;
    for (var _0x1ca6x116 = 0; _0x1ca6x116 < _0x1ca6x112['length']; _0x1ca6x116++) {
        var _0x1ca6x26 = Entity['getX'](_0x1ca6x112[_0x1ca6x116]) - getPlayerX();
        var _0x1ca6x25 = Entity['getY'](_0x1ca6x112[_0x1ca6x116]) - getPlayerY();
        var _0x1ca6x27 = Entity['getZ'](_0x1ca6x112[_0x1ca6x116]) - getPlayerZ();
        var _0x1ca6x117 = Math['sqrt'](Math['pow'](_0x1ca6x26, 2) + Math['pow'](_0x1ca6x25, 2) + Math['pow'](_0x1ca6x27, 2));
        if (_0x1ca6x117 < _0x1ca6x114 && _0x1ca6x117 > 0 && Entity['getEntityTypeId'](_0x1ca6x112[_0x1ca6x116]) <= 63 && Entity['getHealth'](_0x1ca6x112[_0x1ca6x116]) >= 1) {
            _0x1ca6x114 = _0x1ca6x117;
            _0x1ca6x115 = _0x1ca6x112[_0x1ca6x116]
        }
    };
    for (var _0x1ca6x116 = 0; _0x1ca6x116 < _0x1ca6x113['length']; _0x1ca6x116++) {
        var _0x1ca6x26 = Entity['getX'](_0x1ca6x113[_0x1ca6x116]) - getPlayerX();
        var _0x1ca6x25 = Entity['getY'](_0x1ca6x113[_0x1ca6x116]) - getPlayerY();
        var _0x1ca6x27 = Entity['getZ'](_0x1ca6x113[_0x1ca6x116]) - getPlayerZ();
        var _0x1ca6x117 = Math['sqrt'](Math['pow'](_0x1ca6x26, 2) + Math['pow'](_0x1ca6x25, 2) + Math['pow'](_0x1ca6x27, 2));
        if (_0x1ca6x117 < _0x1ca6x114 && _0x1ca6x117 > 0 && Entity['getHealth'](_0x1ca6x113[_0x1ca6x116]) >= 1) {
            _0x1ca6x114 = _0x1ca6x117;
            _0x1ca6x115 = _0x1ca6x113[_0x1ca6x116]
        }
    };
    return _0x1ca6x115
}

function crosshairAimAt(_0x1ca6x115, _0x1ca6x119) {
    if (_0x1ca6x115 != null) {
        var _0x1ca6x26 = Entity['getX'](_0x1ca6x115) - getPlayerX();
        var _0x1ca6x25 = Entity['getY'](_0x1ca6x115) - getPlayerY();
        var _0x1ca6x27 = Entity['getZ'](_0x1ca6x115) - getPlayerZ();
        if (_0x1ca6x119 != null && _0x1ca6x119 instanceof Array) {
            _0x1ca6x26 = Entity['getX'](_0x1ca6x115) - _0x1ca6x119[0];
            _0x1ca6x25 = Entity['getY'](_0x1ca6x115) - _0x1ca6x119[1];
            _0x1ca6x27 = Entity['getZ'](_0x1ca6x115) - _0x1ca6x119[2]
        };
        if (Entity['getEntityTypeId'](_0x1ca6x115) != 63) {
            _0x1ca6x25 += 0.5
        };
        var _0x1ca6x11a = 0.5 + Entity['getX'](_0x1ca6x115);
        var _0x1ca6x11b = Entity['getY'](_0x1ca6x115);
        var _0x1ca6x11c = 0.5 + Entity['getZ'](_0x1ca6x115);
        var _0x1ca6x11d = Math['sqrt'](_0x1ca6x26 * _0x1ca6x26 + _0x1ca6x25 * _0x1ca6x25 + _0x1ca6x27 * _0x1ca6x27);
        var _0x1ca6x25 = _0x1ca6x25 / _0x1ca6x11d;
        var _0x1ca6x104 = Math['asin'](_0x1ca6x25);
        _0x1ca6x104 = _0x1ca6x104 * 180.0 / Math['PI'];
        _0x1ca6x104 = -_0x1ca6x104;
        var _0x1ca6x103 = -Math['atan2'](_0x1ca6x11a - (Player['getX']() + 0.5), _0x1ca6x11c - (Player['getZ']() + 0.5)) * (180 / Math['PI']);
        if (_0x1ca6x104 < 89 && _0x1ca6x104 > -89) {
            Entity['setRot'](Player['getEntity'](), _0x1ca6x103, _0x1ca6x104)
        }
    }
}

function modTick() {
    if (aimbotss) {
        var _0x1ca6x115 = getNearestEntity(7);
        if (_0x1ca6x115 != null) {
            crosshairAimAt(_0x1ca6x115)
        }
    };

    function _0x1ca6x11f(_0x1ca6x115) {
        var _0x1ca6x120 = 1;
        var _0x1ca6x121 = Entity['getX'](_0x1ca6x115) - Player['getX']();
        var _0x1ca6x122 = Entity['getEntityTypeId'](_0x1ca6x115) == EntityType['PLAYER'] ? Entity['getY'](_0x1ca6x115) - Player['getY']() : Entity['getY'](_0x1ca6x115) + 1 - Player['getY']();
        var _0x1ca6x123 = Entity['getZ'](_0x1ca6x115) - Player['getZ']();
        var _0x1ca6x103 = (Math['atan2'](_0x1ca6x123, _0x1ca6x121) * 180 / Math['PI']) - 90;
        var _0x1ca6x124 = Math['sqrt'](_0x1ca6x121 * _0x1ca6x121 + _0x1ca6x123 * _0x1ca6x123);
        var _0x1ca6x125 = 0.007;
        var _0x1ca6x126 = (_0x1ca6x120 * _0x1ca6x120 * _0x1ca6x120 * _0x1ca6x120 - _0x1ca6x125 * (_0x1ca6x125 * (_0x1ca6x124 * _0x1ca6x124) + 2 * _0x1ca6x122 * (_0x1ca6x120 * _0x1ca6x120)));
        var _0x1ca6x104 = -(180 / Math['PI']) * (Math['atan']((_0x1ca6x120 * _0x1ca6x120 - Math['sqrt'](_0x1ca6x126)) / (_0x1ca6x125 * _0x1ca6x124)));
        if (_0x1ca6x104 < 89 && _0x1ca6x104 > -89) {
            setRot(Player['getEntity'](), _0x1ca6x103, _0x1ca6x104)
        }
    }
    var _0x1ca6x127 = Player['getX']();
    var _0x1ca6x128 = Player['getY']();
    var _0x1ca6x129 = Player['getZ']();
    var _0x1ca6x26 = Player['getX']();
    var _0x1ca6x25 = Player['getY']();
    var _0x1ca6x27 = Player['getZ']();
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
    if (goglideed) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (goglideed1) {
        setVelY(getPlayerEnt(), -0.001)
    };
    if (mglide1) {
        Entity['setSneaking'](getPlayerEnt(), true)
    };
    if (criticaltrailsss == true && Entity['isSneaking'](Player['getEntity']()) == true) {
        setVelY(getPlayerEnt(), -0.004);
        var _0x1ca6x12a = [0, 0, 0];
        toDirectionalVector(_0x1ca6x12a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * _0x1ca6x12a[0]);
        setVelZ(getPlayerEnt(), 0.6 * _0x1ca6x12a[2])
    };
    if (criticaltrailsss9601) {
        Server['sendChat']('Aerox')
    };
    if (hb1) {
        _0x1ca6x115 = getNearestEntity(10);
        Entity['setCollisionSize'](_0x1ca6x115, 15, 15)
    } else {
        _0x1ca6x115 = getNearestEntity(10);
        Entity['setCollisionSize'](_0x1ca6x115, 1, 2)
    };
    if (nearwarningss) {
        Entity['setCollisionSize'](Player['getEntity'](), 0, 0)
    } else {
        Entity['setCollisionSize'](Player['getEntity'](), 0.6, 1.8)
    };
    if (criticaltrailsss678) {
        XrayOn()
    } else {
        XrayOff()
    };
    if (goglideed2) {
        setVelY(getPlayerEnt(), -0.15);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.06);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.06)
    };
    if (goglideed3) {
        setVelY(getPlayerEnt(), 0.0600000009)
    };
    if (criticaltrailsss4401) {
        ModPE['showTipMessage']('
' + '§l§f' + Entity['getHealth'](getPlayerEnt()))
    };
    if (criticaltrailsss440) {
        ModPE['showTipMessage']('§l§f
X: ' + Math['floor'](Player['getX']()) + ' Y: ' + Math['floor'](Player['getY']() - 1) + ' Z: ' + Math['floor'](Player['getZ']()))
    };
    if (goglideed77) {
        Block['setLightLevel'](54, 15);
        Block['setRenderLayer'](54, OpaqLayer);
        Block['setShape'](15, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed77) {
            Block['setLightLevel'](54, 0.1);
            Block['setRenderLayer'](54, RenderLayer);
            Block['setShape'](54, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](16, 15);
        Block['setRenderLayer'](16, OpaqLayer);
        Block['setShape'](16, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](16, 0.1);
            Block['setRenderLayer'](16, RenderLayer);
            Block['setShape'](16, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](73, 12);
        Block['setLightLevel'](74, 12);
        Block['setRenderLayer'](73, OpaqLayer);
        Block['setRenderLayer'](74, OpaqLayer);
        Block['setShape'](73, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999);
        Block['setShape'](74, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](73, 0.1);
            Block['setLightLevel'](74, 10);
            Block['setRenderLayer'](73, RenderLayer);
            Block['setRenderLayer'](74, RenderLayer);
            Block['setShape'](73, 0, 0, 0, 1, 1, 1);
            Block['setShape'](74, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](129, 12);
        Block['setRenderLayer'](129, OpaqLayer);
        Block['setShape'](129, 0.000001, 0, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](129, 0.1);
            Block['setRenderLayer'](129, RenderLayer);
            Block['setShape'](129, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](15, 15);
        Block['setRenderLayer'](15, OpaqLayer);
        Block['setShape'](15, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](15, 0.1);
            Block['setRenderLayer'](15, RenderLayer);
            Block['setShape'](15, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](14, 15);
        Block['setRenderLayer'](14, OpaqLayer);
        Block['setShape'](14, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](14, 0.1);
            Block['setRenderLayer'](14, RenderLayer);
            Block['setShape'](14, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](56, 15);
        Block['setRenderLayer'](56, OpaqLayer);
        Block['setShape'](56, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](56, 0.1);
            Block['setRenderLayer'](56, RenderLayer);
            Block['setShape'](56, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed76) {
        Block['setLightLevel'](21, 15);
        Block['setRenderLayer'](21, OpaqLayer);
        Block['setShape'](21, 0.000001, 0.000001, 0.000001, 0.99999, 0.99999, 0.99999)
    } else {
        if (!goglideed76) {
            Block['setLightLevel'](21, 0.1);
            Block['setRenderLayer'](21, RenderLayer);
            Block['setShape'](21, 0, 0, 0, 1, 1, 1)
        }
    };
    if (goglideed4) {
        if (Utils['Player']['isOnGround']()) {
            setVelY(getPlayerEnt(), 0.2)
        };
        if (Utils['Player']['isOnGround']()) {
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.4)
        };
        if (Utils['Player']['isOnGround']()) {
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.4)
        }
    };
    if (goglideed5) {
        if (Utils['Player']['isOnGround']()) {
            setVelY(getPlayerEnt(), 0.09)
        };
        if (Utils['Player']['isOnGround']()) {
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.4)
        };
        if (Utils['Player']['isOnGround']()) {
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.4)
        }
    };
    if (hearts) {
        if (!Player['getCarriedItem']() == 0) {
            Level['setTile'](getPlayerX(), getPlayerY() - 2, getPlayerZ(), Player['getCarriedItem'](), 50);
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 0.55);
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 0.55)
        }
    };
    if (criticaltrailsss9201) {
        var _0x1ca6x115 = getNearestEntity(60);
        setVelY(getPlayerEnt(), -0.001);
        setPosition(getPlayerEnt(), Entity['getX'](_0x1ca6x115), Entity['getY'](_0x1ca6x115), Entity['getZ'](_0x1ca6x115));
        Entity['setPosition'](getPlayerEnt(), getPlayerX(), getPlayerY() + 4.05, getPlayerZ())
    };
    if (criticaltrailsss9101 && Utils['Player']['isCollidedHorizontally']()) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (criticaltrailsss9301 && Utils['Player']['isCollidedHorizontally']()) {
        var _0x1ca6x115 = getNearestEntity(10);
        if (_0x1ca6x115 != null) {
            crosshairAimAt(_0x1ca6x115)
        }
    };
    if (criticaltrailsss01 && Utils['Player']['isInWater']()) {
        setVelY(getPlayerEnt(), 0.001);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.3)
    };
    if (criticaltrailsss99 && Utils['Player']['isInWater']()) {
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.3)
    };
    if (criticaltrailsss9401 && Utils['Player']['isInWater']()) {
        setVelY(getPlayerEnt(), 0.1);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.3);
        var _0x1ca6x115 = getNearestEntity(10);
        if (_0x1ca6x115 != null) {
            crosshairAimAt(_0x1ca6x115)
        }
    };
    if (goglideed6 && Utils['Player']['isInWater']()) {
        setVelY(getPlayerEnt(), 0.3);
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.3)
    };
    if (goglideed7) {
        if (Utils['Player']['isOnGround']()) {
            setVelY(getPlayerEnt(), 0.3);
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.3);
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.2)
        }
    };
    if (dodgess) {
        setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.08);
        setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.08);
        if (time !== 0) {
            time--
        };
        if (time == 0) {
            time = 9;
            setVelY(getPlayerEnt(), 0.33)
        }
    };
    if (reachss) {
        Level['setGameMode'](1);
        Player['setCanFly'](0);
        Player['isFlying'](0)
    };
    if (criticaltrailsss201) {
        var _0x1ca6x115 = getNearestEntity(10);
        if (_0x1ca6x115 != null) {
            crosshairAimAt(_0x1ca6x115)
        }
    };
    if (criticaltrailsss202) {
        var _0x1ca6x115 = getNearestEntity(10);
        if (_0x1ca6x115 != null) {
            crosshairAimAt(_0x1ca6x115)
        }
    };
    if (autowalkss) {
        var _0x1ca6x12a = [0, 0, 0];
        toDirectionalVector(_0x1ca6x12a, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        setVelX(getPlayerEnt(), 0.4 * _0x1ca6x12a[0]);
        setVelZ(getPlayerEnt(), 0.4 * _0x1ca6x12a[2])
    };
    if (criticaltrailsss9501) {
        if (Entity['isSneaking'](Player['getEntity']()) == true) {
            setVelY(getPlayerEnt(), -100.0);
            setVelX(getPlayerEnt(), Entity['getVelX'](getPlayerEnt()) * 1.7);
            setVelZ(getPlayerEnt(), Entity['getVelZ'](getPlayerEnt()) * 1.7)
        }
    }
}
if (autoswordss) {
    var slotId = 0;
    var getInvSword = Player['getInventorySlot'](slotId);
    if (getInvSword != 276 || getInvSword != 268 || getInvSword != 283 || getInvSword != 267 || getInvSword != 272) {
        slotId++
    } else {
        var invSword = slotId
    };
    if (slotId = 27) {
        slotId = 0
    };
    var nearPlayer = getNearestEntity(7);
    if (nearPlayer != null) {
        Player['setSelectedSlotId'](invSword)
    }
};

function rptask() {
    ctx['runOnUiThread'](new java['lang'].Runnable({
        run: function() {
            new android['os'].Handler()['postDelayed'](new java['lang'].Runnable({
                run: function() {
                    if (criticaltrailsss9901) {
                        var _0x1ca6x130 = getPlayerEnt();
                        var _0x1ca6x103 = Math['floor'](Entity['getYaw'](_0x1ca6x130));
                        var _0x1ca6x104 = Math['floor'](Entity['getPitch'](_0x1ca6x130));
                        if (_0x1ca6x104 <= 189) {
                            Entity['setRot'](_0x1ca6x130, _0x1ca6x103, 192)
                        }
                    };
                    if (criticaltrailsss9701) {
                        tCounter++;
                        if (tCounter == 6) {
                            Entity['setSneaking'](Player['getEntity'](), 1)
                        };
                        if (tCounter == 11) {
                            Entity['setSneaking'](Player['getEntity'](), 0);
                            tCounter = 1
                        }
                    };
                    if (criticaltrailsss9801) {
                        var _0x1ca6x130 = getPlayerEnt();
                        var _0x1ca6x103 = Math['floor'](Entity['getYaw'](_0x1ca6x130));
                        var _0x1ca6x104 = Math['floor'](Entity['getPitch'](_0x1ca6x130));
                        Entity['setRot'](_0x1ca6x130, _0x1ca6x103 + 30, _0x1ca6x104)
                    };
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 1000 / 75)
        }
    }))
}
rptask();

function XrayOn() {
    Block['setRenderLayer'](1, RenderLayer);
    Block['setRenderLayer'](2, RenderLayer);
    Block['setRenderLayer'](3, RenderLayer);
    Block['setRenderLayer'](4, RenderLayer);
    Block['setRenderLayer'](5, RenderLayer);
    Block['setRenderLayer'](6, RenderLayer);
    Block['setRenderLayer'](7, RenderLayer);
    Block['setRenderLayer'](8, RenderLayer);
    Block['setRenderLayer'](9, RenderLayer);
    Block['setRenderLayer'](10, RenderLayer);
    Block['setRenderLayer'](11, RenderLayer);
    Block['setRenderLayer'](12, RenderLayer);
    Block['setRenderLayer'](13, RenderLayer);
    Block['setRenderLayer'](17, RenderLayer);
    Block['setRenderLayer'](18, RenderLayer);
    Block['setRenderLayer'](19, RenderLayer);
    Block['setRenderLayer'](20, RenderLayer);
    Block['setRenderLayer'](22, RenderLayer);
    Block['setRenderLayer'](23, RenderLayer);
    Block['setRenderLayer'](24, RenderLayer);
    Block['setRenderLayer'](25, RenderLayer);
    Block['setRenderLayer'](26, RenderLayer);
    Block['setRenderLayer'](27, RenderLayer);
    Block['setRenderLayer'](28, RenderLayer);
    Block['setRenderLayer'](29, RenderLayer);
    Block['setRenderLayer'](30, RenderLayer);
    Block['setRenderLayer'](31, RenderLayer);
    Block['setRenderLayer'](32, RenderLayer);
    Block['setRenderLayer'](33, RenderLayer);
    Block['setRenderLayer'](34, RenderLayer);
    Block['setRenderLayer'](35, RenderLayer);
    Block['setRenderLayer'](36, RenderLayer);
    Block['setRenderLayer'](37, RenderLayer);
    Block['setRenderLayer'](38, RenderLayer);
    Block['setRenderLayer'](39, RenderLayer);
    Block['setRenderLayer'](40, RenderLayer);
    Block['setRenderLayer'](41, RenderLayer);
    Block['setRenderLayer'](42, RenderLayer);
    Block['setRenderLayer'](43, RenderLayer);
    Block['setRenderLayer'](44, RenderLayer);
    Block['setRenderLayer'](45, RenderLayer);
    Block['setRenderLayer'](46, RenderLayer);
    Block['setRenderLayer'](47, RenderLayer);
    Block['setRenderLayer'](48, RenderLayer);
    Block['setRenderLayer'](49, RenderLayer);
    Block['setRenderLayer'](50, RenderLayer);
    Block['setRenderLayer'](51, RenderLayer);
    Block['setRenderLayer'](52, RenderLayer);
    Block['setRenderLayer'](53, RenderLayer);
    Block['setRenderLayer'](54, RenderLayer);
    Block['setRenderLayer'](55, RenderLayer);
    Block['setRenderLayer'](57, RenderLayer);
    Block['setRenderLayer'](58, RenderLayer);
    Block['setRenderLayer'](59, RenderLayer);
    Block['setRenderLayer'](60, RenderLayer);
    Block['setRenderLayer'](61, RenderLayer);
    Block['setRenderLayer'](62, RenderLayer);
    Block['setRenderLayer'](63, RenderLayer);
    Block['setRenderLayer'](64, RenderLayer);
    Block['setRenderLayer'](65, RenderLayer);
    Block['setRenderLayer'](66, RenderLayer);
    Block['setRenderLayer'](67, RenderLayer);
    Block['setRenderLayer'](68, RenderLayer);
    Block['setRenderLayer'](69, RenderLayer);
    Block['setRenderLayer'](70, RenderLayer);
    Block['setRenderLayer'](71, RenderLayer);
    Block['setRenderLayer'](72, RenderLayer);
    Block['setRenderLayer'](75, RenderLayer);
    Block['setRenderLayer'](76, RenderLayer);
    Block['setRenderLayer'](77, RenderLayer);
    Block['setRenderLayer'](78, RenderLayer);
    Block['setRenderLayer'](79, RenderLayer);
    Block['setRenderLayer'](80, RenderLayer);
    Block['setRenderLayer'](81, RenderLayer);
    Block['setRenderLayer'](82, RenderLayer);
    Block['setRenderLayer'](83, RenderLayer);
    Block['setRenderLayer'](84, RenderLayer);
    Block['setRenderLayer'](85, RenderLayer);
    Block['setRenderLayer'](86, RenderLayer);
    Block['setRenderLayer'](87, RenderLayer);
    Block['setRenderLayer'](88, RenderLayer);
    Block['setRenderLayer'](89, RenderLayer);
    Block['setRenderLayer'](90, RenderLayer);
    Block['setRenderLayer'](91, RenderLayer);
    Block['setRenderLayer'](92, RenderLayer);
    Block['setRenderLayer'](93, RenderLayer);
    Block['setRenderLayer'](94, RenderLayer);
    Block['setRenderLayer'](95, RenderLayer);
    Block['setRenderLayer'](96, RenderLayer);
    Block['setRenderLayer'](97, RenderLayer);
    Block['setRenderLayer'](98, RenderLayer);
    Block['setRenderLayer'](99, RenderLayer);
    Block['setRenderLayer'](100, RenderLayer);
    Block['setRenderLayer'](101, RenderLayer);
    Block['setRenderLayer'](102, RenderLayer);
    Block['setRenderLayer'](103, RenderLayer);
    Block['setRenderLayer'](104, RenderLayer);
    Block['setRenderLayer'](105, RenderLayer);
    Block['setRenderLayer'](106, RenderLayer);
    Block['setRenderLayer'](107, RenderLayer);
    Block['setRenderLayer'](108, RenderLayer);
    Block['setRenderLayer'](109, RenderLayer);
    Block['setRenderLayer'](110, RenderLayer);
    Block['setRenderLayer'](111, RenderLayer);
    Block['setRenderLayer'](112, RenderLayer);
    Block['setRenderLayer'](113, RenderLayer);
    Block['setRenderLayer'](114, RenderLayer);
    Block['setRenderLayer'](115, RenderLayer);
    Block['setRenderLayer'](117, RenderLayer);
    Block['setRenderLayer'](118, RenderLayer);
    Block['setRenderLayer'](119, RenderLayer);
    Block['setRenderLayer'](120, RenderLayer);
    Block['setRenderLayer'](121, RenderLayer);
    Block['setRenderLayer'](122, RenderLayer);
    Block['setRenderLayer'](123, RenderLayer);
    Block['setRenderLayer'](124, RenderLayer);
    Block['setRenderLayer'](125, RenderLayer);
    Block['setRenderLayer'](126, RenderLayer);
    Block['setRenderLayer'](127, RenderLayer);
    Block['setRenderLayer'](128, RenderLayer);
    Block['setRenderLayer'](130, RenderLayer);
    Block['setRenderLayer'](131, RenderLayer);
    Block['setRenderLayer'](132, RenderLayer);
    Block['setRenderLayer'](133, RenderLayer);
    Block['setRenderLayer'](134, RenderLayer);
    Block['setRenderLayer'](135, RenderLayer);
    Block['setRenderLayer'](136, RenderLayer);
    Block['setRenderLayer'](137, RenderLayer);
    Block['setRenderLayer'](138, RenderLayer);
    Block['setRenderLayer'](139, RenderLayer);
    Block['setRenderLayer'](140, RenderLayer);
    Block['setRenderLayer'](141, RenderLayer);
    Block['setRenderLayer'](142, RenderLayer);
    Block['setRenderLayer'](143, RenderLayer);
    Block['setRenderLayer'](144, RenderLayer);
    Block['setRenderLayer'](145, RenderLayer);
    Block['setRenderLayer'](146, RenderLayer);
    Block['setRenderLayer'](147, RenderLayer);
    Block['setRenderLayer'](148, RenderLayer);
    Block['setRenderLayer'](149, RenderLayer);
    Block['setRenderLayer'](150, RenderLayer);
    Block['setRenderLayer'](151, RenderLayer);
    Block['setRenderLayer'](152, RenderLayer);
    Block['setRenderLayer'](153, RenderLayer);
    Block['setRenderLayer'](154, RenderLayer);
    Block['setRenderLayer'](155, RenderLayer);
    Block['setRenderLayer'](156, RenderLayer);
    Block['setRenderLayer'](157, RenderLayer);
    Block['setRenderLayer'](158, RenderLayer);
    Block['setRenderLayer'](159, RenderLayer);
    Block['setRenderLayer'](160, RenderLayer);
    Block['setRenderLayer'](161, RenderLayer);
    Block['setRenderLayer'](162, RenderLayer);
    Block['setRenderLayer'](163, RenderLayer);
    Block['setRenderLayer'](164, RenderLayer);
    Block['setRenderLayer'](165, RenderLayer);
    Block['setRenderLayer'](166, RenderLayer);
    Block['setRenderLayer'](167, RenderLayer);
    Block['setRenderLayer'](168, RenderLayer);
    Block['setRenderLayer'](169, RenderLayer);
    Block['setRenderLayer'](170, RenderLayer);
    Block['setRenderLayer'](171, RenderLayer);
    Block['setRenderLayer'](172, RenderLayer);
    Block['setRenderLayer'](173, RenderLayer);
    Block['setRenderLayer'](174, RenderLayer);
    Block['setRenderLayer'](175, RenderLayer);
    Block['setRenderLayer'](176, RenderLayer);
    Block['setRenderLayer'](177, RenderLayer);
    Block['setRenderLayer'](178, RenderLayer);
    Block['setRenderLayer'](179, RenderLayer);
    Block['setRenderLayer'](180, RenderLayer);
    Block['setRenderLayer'](181, RenderLayer);
    Block['setRenderLayer'](182, RenderLayer);
    Block['setRenderLayer'](183, RenderLayer);
    Block['setRenderLayer'](184, RenderLayer);
    Block['setRenderLayer'](185, RenderLayer);
    Block['setRenderLayer'](186, RenderLayer);
    Block['setRenderLayer'](187, RenderLayer);
    Block['setRenderLayer'](188, RenderLayer);
    Block['setRenderLayer'](189, RenderLayer);
    Block['setRenderLayer'](190, RenderLayer);
    Block['setRenderLayer'](191, RenderLayer);
    Block['setRenderLayer'](192, RenderLayer);
    Block['setRenderLayer'](193, RenderLayer);
    Block['setRenderLayer'](194, RenderLayer);
    Block['setRenderLayer'](195, RenderLayer);
    Block['setRenderLayer'](196, RenderLayer);
    Block['setRenderLayer'](197, RenderLayer);
    Block['setRenderLayer'](198, RenderLayer);
    Block['setRenderLayer'](199, RenderLayer);
    Block['setRenderLayer'](200, RenderLayer);
    Block['setRenderLayer'](201, RenderLayer);
    Block['setRenderLayer'](202, RenderLayer);
    Block['setRenderLayer'](203, RenderLayer);
    Block['setRenderLayer'](204, RenderLayer);
    Block['setRenderLayer'](205, RenderLayer);
    Block['setRenderLayer'](206, RenderLayer);
    Block['setRenderLayer'](207, RenderLayer);
    Block['setRenderLayer'](208, RenderLayer);
    Block['setRenderLayer'](209, RenderLayer);
    Block['setRenderLayer'](210, RenderLayer);
    Block['setRenderLayer'](211, RenderLayer);
    Block['setRenderLayer'](212, RenderLayer);
    Block['setRenderLayer'](213, RenderLayer);
    Block['setRenderLayer'](214, RenderLayer);
    Block['setRenderLayer'](215, RenderLayer);
    Block['setRenderLayer'](217, RenderLayer);
    Block['setRenderLayer'](218, RenderLayer);
    Block['setRenderLayer'](219, RenderLayer);
    Block['setRenderLayer'](220, RenderLayer);
    Block['setRenderLayer'](221, RenderLayer);
    Block['setRenderLayer'](222, RenderLayer);
    Block['setRenderLayer'](223, RenderLayer);
    Block['setRenderLayer'](224, RenderLayer);
    Block['setRenderLayer'](225, RenderLayer);
    Block['setRenderLayer'](226, RenderLayer);
    Block['setRenderLayer'](227, RenderLayer);
    Block['setRenderLayer'](228, RenderLayer);
    Block['setRenderLayer'](229, RenderLayer);
    Block['setRenderLayer'](230, RenderLayer);
    Block['setRenderLayer'](231, RenderLayer);
    Block['setRenderLayer'](232, RenderLayer);
    Block['setRenderLayer'](233, RenderLayer);
    Block['setRenderLayer'](234, RenderLayer);
    Block['setRenderLayer'](235, RenderLayer);
    Block['setRenderLayer'](236, RenderLayer);
    Block['setRenderLayer'](237, RenderLayer);
    Block['setRenderLayer'](238, RenderLayer);
    Block['setRenderLayer'](239, RenderLayer);
    Block['setRenderLayer'](240, RenderLayer);
    Block['setRenderLayer'](241, RenderLayer);
    Block['setRenderLayer'](242, RenderLayer);
    Block['setRenderLayer'](243, RenderLayer);
    Block['setRenderLayer'](244, RenderLayer);
    Block['setRenderLayer'](245, RenderLayer);
    Block['setRenderLayer'](246, RenderLayer);
    Block['setRenderLayer'](247, RenderLayer);
    Block['setRenderLayer'](248, RenderLayer);
    Block['setRenderLayer'](249, RenderLayer);
    Block['setRenderLayer'](250, RenderLayer);
    Block['setRenderLayer'](251, RenderLayer);
    Block['setRenderLayer'](252, RenderLayer);
    Block['setRenderLayer'](253, RenderLayer);
    Block['setRenderLayer'](254, RenderLayer);
    Block['setRenderLayer'](255, RenderLayer)
}

function XrayOff() {
    Block['setRenderLayer'](1, OpaqLayer);
    Block['setRenderLayer'](2, OpaqLayer);
    Block['setRenderLayer'](3, OpaqLayer);
    Block['setRenderLayer'](4, OpaqLayer);
    Block['setRenderLayer'](5, OpaqLayer);
    Block['setRenderLayer'](6, OpaqLayer);
    Block['setRenderLayer'](7, OpaqLayer);
    Block['setRenderLayer'](8, OpaqLayer);
    Block['setRenderLayer'](9, OpaqLayer);
    Block['setRenderLayer'](10, OpaqLayer);
    Block['setRenderLayer'](11, OpaqLayer);
    Block['setRenderLayer'](12, OpaqLayer);
    Block['setRenderLayer'](13, OpaqLayer);
    Block['setRenderLayer'](14, OpaqLayer);
    Block['setRenderLayer'](15, OpaqLayer);
    Block['setRenderLayer'](17, OpaqLayer);
    Block['setRenderLayer'](18, OpaqLayer);
    Block['setRenderLayer'](19, OpaqLayer);
    Block['setRenderLayer'](20, OpaqLayer);
    Block['setRenderLayer'](21, OpaqLayer);
    Block['setRenderLayer'](22, OpaqLayer);
    Block['setRenderLayer'](23, OpaqLayer);
    Block['setRenderLayer'](24, OpaqLayer);
    Block['setRenderLayer'](25, OpaqLayer);
    Block['setRenderLayer'](26, OpaqLayer);
    Block['setRenderLayer'](27, OpaqLayer);
    Block['setRenderLayer'](28, OpaqLayer);
    Block['setRenderLayer'](29, OpaqLayer);
    Block['setRenderLayer'](30, OpaqLayer);
    Block['setRenderLayer'](31, OpaqLayer);
    Block['setRenderLayer'](32, OpaqLayer);
    Block['setRenderLayer'](33, OpaqLayer);
    Block['setRenderLayer'](34, OpaqLayer);
    Block['setRenderLayer'](35, OpaqLayer);
    Block['setRenderLayer'](36, OpaqLayer);
    Block['setRenderLayer'](37, OpaqLayer);
    Block['setRenderLayer'](38, OpaqLayer);
    Block['setRenderLayer'](39, OpaqLayer);
    Block['setRenderLayer'](40, OpaqLayer);
    Block['setRenderLayer'](41, OpaqLayer);
    Block['setRenderLayer'](42, OpaqLayer);
    Block['setRenderLayer'](43, OpaqLayer);
    Block['setRenderLayer'](44, OpaqLayer);
    Block['setRenderLayer'](45, OpaqLayer);
    Block['setRenderLayer'](46, OpaqLayer);
    Block['setRenderLayer'](47, OpaqLayer);
    Block['setRenderLayer'](48, OpaqLayer);
    Block['setRenderLayer'](49, OpaqLayer);
    Block['setRenderLayer'](50, OpaqLayer);
    Block['setRenderLayer'](51, OpaqLayer);
    Block['setRenderLayer'](52, OpaqLayer);
    Block['setRenderLayer'](53, OpaqLayer);
    Block['setRenderLayer'](54, OpaqLayer);
    Block['setRenderLayer'](55, OpaqLayer);
    Block['setRenderLayer'](56, OpaqLayer);
    Block['setRenderLayer'](57, OpaqLayer);
    Block['setRenderLayer'](58, OpaqLayer);
    Block['setRenderLayer'](59, OpaqLayer);
    Block['setRenderLayer'](60, OpaqLayer);
    Block['setRenderLayer'](61, OpaqLayer);
    Block['setRenderLayer'](62, OpaqLayer);
    Block['setRenderLayer'](63, OpaqLayer);
    Block['setRenderLayer'](64, OpaqLayer);
    Block['setRenderLayer'](65, OpaqLayer);
    Block['setRenderLayer'](66, OpaqLayer);
    Block['setRenderLayer'](67, OpaqLayer);
    Block['setRenderLayer'](68, OpaqLayer);
    Block['setRenderLayer'](69, OpaqLayer);
    Block['setRenderLayer'](70, OpaqLayer);
    Block['setRenderLayer'](71, OpaqLayer);
    Block['setRenderLayer'](72, OpaqLayer);
    Block['setRenderLayer'](73, OpaqLayer);
    Block['setRenderLayer'](74, OpaqLayer);
    Block['setRenderLayer'](75, OpaqLayer);
    Block['setRenderLayer'](76, OpaqLayer);
    Block['setRenderLayer'](77, OpaqLayer);
    Block['setRenderLayer'](78, OpaqLayer);
    Block['setRenderLayer'](79, OpaqLayer);
    Block['setRenderLayer'](80, OpaqLayer);
    Block['setRenderLayer'](81, OpaqLayer);
    Block['setRenderLayer'](82, OpaqLayer);
    Block['setRenderLayer'](83, OpaqLayer);
    Block['setRenderLayer'](84, OpaqLayer);
    Block['setRenderLayer'](85, OpaqLayer);
    Block['setRenderLayer'](86, OpaqLayer);
    Block['setRenderLayer'](87, OpaqLayer);
    Block['setRenderLayer'](88, OpaqLayer);
    Block['setRenderLayer'](89, OpaqLayer);
    Block['setRenderLayer'](90, OpaqLayer);
    Block['setRenderLayer'](91, OpaqLayer);
    Block['setRenderLayer'](92, OpaqLayer);
    Block['setRenderLayer'](93, OpaqLayer);
    Block['setRenderLayer'](94, OpaqLayer);
    Block['setRenderLayer'](95, OpaqLayer);
    Block['setRenderLayer'](96, OpaqLayer);
    Block['setRenderLayer'](97, OpaqLayer);
    Block['setRenderLayer'](98, OpaqLayer);
    Block['setRenderLayer'](99, OpaqLayer);
    Block['setRenderLayer'](100, OpaqLayer);
    Block['setRenderLayer'](101, OpaqLayer);
    Block['setRenderLayer'](102, OpaqLayer);
    Block['setRenderLayer'](103, OpaqLayer);
    Block['setRenderLayer'](104, OpaqLayer);
    Block['setRenderLayer'](105, OpaqLayer);
    Block['setRenderLayer'](106, OpaqLayer);
    Block['setRenderLayer'](107, OpaqLayer);
    Block['setRenderLayer'](108, OpaqLayer);
    Block['setRenderLayer'](109, OpaqLayer);
    Block['setRenderLayer'](110, OpaqLayer);
    Block['setRenderLayer'](111, OpaqLayer);
    Block['setRenderLayer'](112, OpaqLayer);
    Block['setRenderLayer'](113, OpaqLayer);
    Block['setRenderLayer'](114, OpaqLayer);
    Block['setRenderLayer'](115, OpaqLayer);
    Block['setRenderLayer'](117, OpaqLayer);
    Block['setRenderLayer'](118, OpaqLayer);
    Block['setRenderLayer'](119, OpaqLayer);
    Block['setRenderLayer'](120, OpaqLayer);
    Block['setRenderLayer'](121, OpaqLayer);
    Block['setRenderLayer'](122, OpaqLayer);
    Block['setRenderLayer'](123, OpaqLayer);
    Block['setRenderLayer'](124, OpaqLayer);
    Block['setRenderLayer'](125, OpaqLayer);
    Block['setRenderLayer'](126, OpaqLayer);
    Block['setRenderLayer'](127, OpaqLayer);
    Block['setRenderLayer'](128, OpaqLayer);
    Block['setRenderLayer'](129, OpaqLayer);
    Block['setRenderLayer'](130, OpaqLayer);
    Block['setRenderLayer'](131, OpaqLayer);
    Block['setRenderLayer'](132, OpaqLayer);
    Block['setRenderLayer'](133, OpaqLayer);
    Block['setRenderLayer'](134, OpaqLayer);
    Block['setRenderLayer'](135, OpaqLayer);
    Block['setRenderLayer'](136, OpaqLayer);
    Block['setRenderLayer'](137, OpaqLayer);
    Block['setRenderLayer'](138, OpaqLayer);
    Block['setRenderLayer'](139, OpaqLayer);
    Block['setRenderLayer'](140, OpaqLayer);
    Block['setRenderLayer'](141, OpaqLayer);
    Block['setRenderLayer'](142, OpaqLayer);
    Block['setRenderLayer'](143, OpaqLayer);
    Block['setRenderLayer'](144, OpaqLayer);
    Block['setRenderLayer'](145, OpaqLayer);
    Block['setRenderLayer'](146, OpaqLayer);
    Block['setRenderLayer'](147, OpaqLayer);
    Block['setRenderLayer'](148, OpaqLayer);
    Block['setRenderLayer'](149, OpaqLayer);
    Block['setRenderLayer'](150, OpaqLayer);
    Block['setRenderLayer'](151, OpaqLayer);
    Block['setRenderLayer'](152, OpaqLayer);
    Block['setRenderLayer'](153, OpaqLayer);
    Block['setRenderLayer'](154, OpaqLayer);
    Block['setRenderLayer'](155, OpaqLayer);
    Block['setRenderLayer'](156, OpaqLayer);
    Block['setRenderLayer'](157, OpaqLayer);
    Block['setRenderLayer'](158, OpaqLayer);
    Block['setRenderLayer'](159, OpaqLayer);
    Block['setRenderLayer'](160, OpaqLayer);
    Block['setRenderLayer'](161, OpaqLayer);
    Block['setRenderLayer'](162, OpaqLayer);
    Block['setRenderLayer'](163, OpaqLayer);
    Block['setRenderLayer'](164, OpaqLayer);
    Block['setRenderLayer'](165, OpaqLayer);
    Block['setRenderLayer'](166, OpaqLayer);
    Block['setRenderLayer'](167, OpaqLayer);
    Block['setRenderLayer'](168, OpaqLayer);
    Block['setRenderLayer'](169, OpaqLayer);
    Block['setRenderLayer'](170, OpaqLayer);
    Block['setRenderLayer'](171, OpaqLayer);
    Block['setRenderLayer'](172, OpaqLayer);
    Block['setRenderLayer'](173, OpaqLayer);
    Block['setRenderLayer'](174, OpaqLayer);
    Block['setRenderLayer'](175, OpaqLayer);
    Block['setRenderLayer'](176, OpaqLayer);
    Block['setRenderLayer'](177, OpaqLayer);
    Block['setRenderLayer'](178, OpaqLayer);
    Block['setRenderLayer'](179, OpaqLayer);
    Block['setRenderLayer'](180, OpaqLayer);
    Block['setRenderLayer'](181, OpaqLayer);
    Block['setRenderLayer'](182, OpaqLayer);
    Block['setRenderLayer'](183, OpaqLayer);
    Block['setRenderLayer'](184, OpaqLayer);
    Block['setRenderLayer'](185, OpaqLayer);
    Block['setRenderLayer'](186, OpaqLayer);
    Block['setRenderLayer'](187, OpaqLayer);
    Block['setRenderLayer'](188, OpaqLayer);
    Block['setRenderLayer'](189, OpaqLayer);
    Block['setRenderLayer'](190, OpaqLayer);
    Block['setRenderLayer'](191, OpaqLayer);
    Block['setRenderLayer'](192, OpaqLayer);
    Block['setRenderLayer'](193, OpaqLayer);
    Block['setRenderLayer'](194, OpaqLayer);
    Block['setRenderLayer'](195, OpaqLayer);
    Block['setRenderLayer'](196, OpaqLayer);
    Block['setRenderLayer'](197, OpaqLayer);
    Block['setRenderLayer'](198, OpaqLayer);
    Block['setRenderLayer'](199, OpaqLayer);
    Block['setRenderLayer'](200, OpaqLayer);
    Block['setRenderLayer'](201, OpaqLayer);
    Block['setRenderLayer'](202, OpaqLayer);
    Block['setRenderLayer'](203, OpaqLayer);
    Block['setRenderLayer'](204, OpaqLayer);
    Block['setRenderLayer'](205, OpaqLayer);
    Block['setRenderLayer'](206, OpaqLayer);
    Block['setRenderLayer'](207, OpaqLayer);
    Block['setRenderLayer'](208, OpaqLayer);
    Block['setRenderLayer'](209, OpaqLayer);
    Block['setRenderLayer'](210, OpaqLayer);
    Block['setRenderLayer'](211, OpaqLayer);
    Block['setRenderLayer'](212, OpaqLayer);
    Block['setRenderLayer'](213, OpaqLayer);
    Block['setRenderLayer'](214, OpaqLayer);
    Block['setRenderLayer'](215, OpaqLayer);
    Block['setRenderLayer'](217, OpaqLayer);
    Block['setRenderLayer'](218, OpaqLayer);
    Block['setRenderLayer'](219, OpaqLayer);
    Block['setRenderLayer'](220, OpaqLayer);
    Block['setRenderLayer'](221, OpaqLayer);
    Block['setRenderLayer'](222, OpaqLayer);
    Block['setRenderLayer'](223, OpaqLayer);
    Block['setRenderLayer'](224, OpaqLayer);
    Block['setRenderLayer'](225, OpaqLayer);
    Block['setRenderLayer'](226, OpaqLayer);
    Block['setRenderLayer'](227, OpaqLayer);
    Block['setRenderLayer'](228, OpaqLayer);
    Block['setRenderLayer'](229, OpaqLayer);
    Block['setRenderLayer'](230, OpaqLayer);
    Block['setRenderLayer'](231, OpaqLayer);
    Block['setRenderLayer'](232, OpaqLayer);
    Block['setRenderLayer'](233, OpaqLayer);
    Block['setRenderLayer'](234, OpaqLayer);
    Block['setRenderLayer'](235, OpaqLayer);
    Block['setRenderLayer'](236, OpaqLayer);
    Block['setRenderLayer'](237, OpaqLayer);
    Block['setRenderLayer'](238, OpaqLayer);
    Block['setRenderLayer'](239, OpaqLayer);
    Block['setRenderLayer'](240, OpaqLayer);
    Block['setRenderLayer'](241, OpaqLayer);
    Block['setRenderLayer'](242, OpaqLayer);
    Block['setRenderLayer'](243, OpaqLayer);
    Block['setRenderLayer'](244, OpaqLayer);
    Block['setRenderLayer'](245, OpaqLayer);
    Block['setRenderLayer'](246, OpaqLayer);
    Block['setRenderLayer'](247, OpaqLayer);
    Block['setRenderLayer'](248, OpaqLayer);
    Block['setRenderLayer'](249, OpaqLayer);
    Block['setRenderLayer'](250, OpaqLayer);
    Block['setRenderLayer'](251, OpaqLayer);
    Block['setRenderLayer'](252, OpaqLayer);
    Block['setRenderLayer'](253, OpaqLayer);
    Block['setRenderLayer'](254, OpaqLayer);
    Block['setRenderLayer'](255, OpaqLayer)
}

function aero(_0x1ca6x23, _0x1ca6x134) {
    try {
        var ctx = com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get']();
        ctx['runOnUiThread'](new java['lang'].Runnable({
            run: function() {
                var _0x1ca6x135 = android['widget']['Toast']['makeText'](com['mojang']['minecraftpe']['MainActivity']['currentMainActivity']['get'](), '' + _0x1ca6x23, android['widget']['Toast'].LENGTH_LONG);
                var _0x1ca6xe5 = new android['widget'].LinearLayout(ctx);
                var _0x1ca6x136 = new android['widget'].TextView(ctx);
                if (_0x1ca6x134 == null) {
                    _0x1ca6x23 = '' + _0x1ca6x23
                } else {
                    _0x1ca6x23 = _0x1ca6x134 + ': ' + _0x1ca6x23
                };
                _0x1ca6x136['setText'](_0x1ca6x23);
                _0x1ca6x136['setGravity'](android['view']['Gravity'].CENTER);
                _0x1ca6x136['setTextSize'](15);
                _0x1ca6x136['setPadding'](10, 10, 10, 10);
                _0x1ca6x136['setTextColor'](android['graphics']['Color'].BLACK);
                var _0x1ca6x137 = new android['graphics']['drawable'].GradientDrawable();
                _0x1ca6x137['setColor'](android['graphics']['Color'].WHITE);
                _0x1ca6x137['setStroke'](5, android['graphics']['Color'].BLACK);
                _0x1ca6xe5['addView'](_0x1ca6x136);
                _0x1ca6xe5['setBackground'](_0x1ca6x137);
                _0x1ca6xe5['getBackground']()['setAlpha'](150);
                _0x1ca6x135['setView'](_0x1ca6xe5);
                _0x1ca6x135['show']()
            }
        }))
    } catch (e) {
        print(e)
    }
}