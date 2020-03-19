//MADE BY BARISCODE
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
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
                Block.setDestroyTime(i, 0)
            }
        },
        fastBreakDefault: function() {
            for (i = 0; i < 256; i++) {
                Block.setDestroyTime(i, defDestroyTime[i])
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
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2))
        }
    },
    Text: {
        replaceAll: function(_0x2ab3x14, _0x2ab3x15, _0x2ab3x16) {
            var _0x2ab3x17 = _0x2ab3x16;
            return _0x2ab3x17.replace(new RegExp(_0x2ab3x14, "g"), _0x2ab3x15)
        }
    },
    Player: {
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isOnLadder: function() {
            if (Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.001, getPlayerZ()))) {
                return true
            } else {
                return false
            }
        },
        isOnGround: function() {
            var _0x2ab3x18 = Entity.getY(getPlayerEnt());
            while (_0x2ab3x18 > 1) {
                _0x2ab3x18 -= 1
            };
            if ((Math.round(_0x2ab3x18 * 100) >= 61 && Math.round(_0x2ab3x18 * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(_0x2ab3x18 * 100) >= 11 && Math.round(_0x2ab3x18 * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x2ab3x19 = Entity.getX(getPlayerEnt());
            var _0x2ab3x1a = Entity.getZ(getPlayerEnt());
            var _0x2ab3x1b = Math.round(_0x2ab3x19 - 0.5);
            var _0x2ab3x1c = Math.round(_0x2ab3x1a - 0.5);
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
            if (Math.round(_0x2ab3x19 * 100) == 31) {
                _0x2ab3x19 -= 0.01
            };
            if (Math.round(_0x2ab3x1a * 100) == 31) {
                _0x2ab3x1a -= 0.01
            };
            if (Math.round(_0x2ab3x19 * 100) == 69) {
                _0x2ab3x19 += 0.01
            };
            if (Math.round(_0x2ab3x1a * 100) == 69) {
                _0x2ab3x1a += 0.01
            };
            if (Math.round(_0x2ab3x19 * 100) == 30) {
                _0x2ab3x1b--
            };
            if (Math.round(_0x2ab3x1a * 100) == 30) {
                _0x2ab3x1c--
            };
            if (Math.round(_0x2ab3x19 * 100) == 70) {
                _0x2ab3x1b++
            };
            if (Math.round(_0x2ab3x1a * 100) == 70) {
                _0x2ab3x1c++
            };
            if (getTile(_0x2ab3x1b, Entity.getY(getPlayerEnt()), _0x2ab3x1c) == 0 && getTile(_0x2ab3x1b, Entity.getY(getPlayerEnt()) - 1, _0x2ab3x1c) == 0) {
                return false
            };
            if (Block.getDestroyTime(getTile(_0x2ab3x1b, Entity.getY(getPlayerEnt()) - 1, _0x2ab3x1c)) <= 0.1 && Block.getDestroyTime(getTile(_0x2ab3x1b, Entity.getY(getPlayerEnt()), _0x2ab3x1c)) <= 0.1) {
                return false
            };
            if (Math.round(_0x2ab3x19 * 100) == 30 || Math.round(_0x2ab3x19 * 100) == 70) {
                return true
            };
            if (Math.round(_0x2ab3x1a * 100) == 30 || Math.round(_0x2ab3x1a * 100) == 70) {
                return true
            };
            return false
        }
    }
};
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLACK);
bg.setStroke(4, android.graphics.Color.RED);
bg.setCornerRadius(2);
var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.BLACK);
xbg.setStroke(4, android.graphics.Color.RED);
xbg.setCornerRadius(2);

function newLevel() {}
ModPE.langEdit("menu\.copyright", "OTTOMAN CLIENT BY BARISCODE");
var GUI;
var menu;
var exitUI;
var VERSION = "";
var NAME = "🇹🇷 OTTOMAN BY BARISCODE 🇹🇷";
var DEVELOPERS = "BarisCode";
var cBtn = "🇹🇷 OTTOMAN 🇹🇷";
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
    return Math.ceil(_0x2ab3x4d * ctx.getResources().getDisplayMetrics().density)
}

function showMenuBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x2ab3x4f = new LinearLayout(ctx);
                _0x2ab3x4f.setOrientation(1);
                var _0x2ab3x50 = new Button(ctx);
                _0x2ab3x50.setText(cBtn);
                _0x2ab3x50.setTextColor(android.graphics.Color.RED);
                _0x2ab3x50.setBackground(bg);
                _0x2ab3x50.getBackground().setAlpha(100);
                _0x2ab3x50.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x2ab3x51) {
                        mainMenu();
                        exit();
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss()
                        }
                    }
                }));
                _0x2ab3x4f.addView(_0x2ab3x50);
                GUI = new PopupWindow(_0x2ab3x4f, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 345, 0)
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show()
            }
        }
    }))
}
showMenuBtn();

function mainMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x2ab3x53 = new LinearLayout(ctx);
                var _0x2ab3x54 = new ScrollView(ctx);
                var _0x2ab3x55 = new LinearLayout(ctx);
                _0x2ab3x53.setOrientation(1);
                _0x2ab3x53.setBackground(bg);
                _0x2ab3x53.getBackground().setAlpha(100);
                _0x2ab3x55.setOrientation(1);
                _0x2ab3x54.addView(_0x2ab3x53);
                _0x2ab3x55.addView(_0x2ab3x54);
                var _0x2ab3x56 = new TextView(ctx);
                _0x2ab3x56.setTextSize(20);
                _0x2ab3x56.setText(NAME + " " + VERSION);
                _0x2ab3x56.setTextColor(android.graphics.Color.WHITE);
                _0x2ab3x56.setGravity(Gravity.CENTER);
                _0x2ab3x53.addView(_0x2ab3x56);
                var _0x2ab3x57 = new android.widget.TextView(ctx);
                _0x2ab3x57.setText("SELAMUN ALEYKUM ~ MADE BY BARISCODE");
                _0x2ab3x57.setTextSize(20);
                _0x2ab3x57.setTextColor(android.graphics.Color.WHITE);
                _0x2ab3x57.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
                _0x2ab3x57.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                _0x2ab3x57.setMarqueeRepeatLimit(-1);
                _0x2ab3x57.setSingleLine();
                _0x2ab3x57.setHorizontallyScrolling(true);
                _0x2ab3x57.setSelected(true);
                _0x2ab3x53.addView(_0x2ab3x57);
                var aim = new android.widget.CheckBox(ctx);
                aim.setText("🇹🇷Osmanlı Aimaura🇹🇷");
                aim.setTextColor(android.graphics.Color.WHITE);
                aim.setPadding(10, 1, 1, 1);
                aim.setTextSize(15);
                aim.setChecked(aimed);
                aim.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aimed) {
                            aimbot = true;
                            aimed = true
                        } else {
                            aimbot = false;
                            aimed = false
                        };
                        aim.setChecked(aimed)
                    }
                }));
                _0x2ab3x53.addView(aim);
                var grapples = new android.widget.CheckBox(ctx);
                grapples.setText("🇹🇷Osmanlı TPaura🇹🇷");
                grapples.setTextColor(android.graphics.Color.WHITE);
                grapples.setPadding(10, 3, 3, 3);
                grapples.setTextSize(15);
                grapples.setChecked(grappleed);
                grapples.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!grappleed) {
                            grappless = true;
                            grappleed = true
                        } else {
                            grappless = false;
                            grappleed = false
                        };
                        grapples.setChecked(grappleed)
                    }
                }));
                _0x2ab3x53.addView(grapples);
                var towers = new android.widget.CheckBox(ctx);
                towers.setText("🇹🇷Osmanlı Hitbox🇹🇷");
                towers.setTextColor(android.graphics.Color.WHITE);
                towers.setPadding(10, 1, 1, 1);
                towers.setTextSize(15);
                towers.setChecked(towered);
                towers.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!towerss) {
                            towered = true;
                            towerss = true
                        } else {
                            towered = false;
                            towerss = false
                        };
                        towers.setChecked(towered)
                    }
                }));
                _0x2ab3x53.addView(towers);
                var betterattack = new android.widget.CheckBox(ctx);
                betterattack.setText("🇹🇷Osmanlı BetterAttack🇹🇷");
                betterattack.setTextColor(android.graphics.Color.WHITE);
                betterattack.setPadding(10, 3, 3, 3);
                betterattack.setTextSize(15);
                betterattack.setChecked(betters);
                betterattack.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!betters) {
                            betterss = true;
                            betters = true;
                            ModPE.setFov(125)
                        } else {
                            ModPE.resetFov();
                            betterss = false;
                            betters = false
                        };
                        betterattack.setChecked(betters)
                    }
                }));
                _0x2ab3x53.addView(betterattack);
                var gmSwitchy = new android.widget.CheckBox(ctx);
                gmSwitchy.setText("🇹🇷Osmanlı High Jump🇹🇷");
                gmSwitchy.setTextColor(android.graphics.Color.WHITE);
                gmSwitchy.setPadding(10, 3, 3, 3);
                gmSwitchy.setTextSize(15);
                gmSwitchy.setChecked(gmSwitchd);
                gmSwitchy.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!gmSwitchd) {
                            gmSwitchd = true;
                            Entity.addEffect(Player.getEntity(), MobEffect.jump, 999999, 2, false, false)
                        } else {
                            gmSwitchd = false;
                            Entity.removeAllEffects(getPlayerEnt())
                        };
                        gmSwitchy.setChecked(gmSwitchd)
                    }
                }));
                _0x2ab3x53.addView(gmSwitchy);
                var _0x2ab3x58 = new android.widget.CheckBox(ctx);
                _0x2ab3x58.setText("🇹🇷Osmanlı Jesus🇹🇷");
                _0x2ab3x58.setChecked(jss);
                _0x2ab3x58.setTextColor(android.graphics.Color.WHITE);
                _0x2ab3x58.setPadding(10, 3, 3, 3);
                _0x2ab3x58.setTextSize(15);
                onCheckedChanged: function() {
                    if (!jss) {
                        jss = true;
                        jesus = true
                    } else {
                        jss = false;
                        jesus = false
                    };
                    _0x2ab3x58.setChecked(jss)
                }
                _0x2ab3x53.addView(_0x2ab3x58);
                var imine = new android.widget.CheckBox(ctx);
                imine.setText("🇹🇷Osmanlı Instant Break🇹🇷");
                imine.setTextColor(android.graphics.Color.WHITE);
                imine.setPadding(10, 1, 1, 1);
                imine.setTextSize(15);
                imine.setChecked(imined);
                imine.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!imined) {
                            Entity.addEffect(Player.getEntity(), MobEffect.digSpeed, 999999, 200, false, false);
                            iminss = true;
                            imined = true;
                            print("On")
                        } else {
                            iminss = false;
                            imined = false;
                            Entity.removeAllEffects(getPlayerEnt());
                            print("Off")
                        };
                        imine.setChecked(imined)
                    }
                }));
                _0x2ab3x53.addView(imine);
                var ndgs = new android.widget.CheckBox(ctx);
                ndgs.setText("🇹🇷Osmanlı NoDownGlide🇹🇷");
                ndgs.setTextColor(android.graphics.Color.WHITE);
                ndgs.setPadding(10, 3, 3, 3);
                ndgs.setTextSize(15);
                ndgs.setChecked(ndged);
                ndgs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ndgss) {
                            ndged = true;
                            ndgss = true
                        } else {
                            ndged = false;
                            ndgss = false
                        };
                        ndgs.setChecked(ndged)
                    }
                }));
                _0x2ab3x53.addView(ndgs);
                var glides1 = new android.widget.CheckBox(ctx);
                glides1.setText("🇹🇷Osmanlı Flight🇹🇷");
                glides1.setTextColor(android.graphics.Color.WHITE);
                glides1.setPadding(10, 3, 3, 3);
                glides1.setTextSize(16);
                glides1.setChecked(glideed1);
                glides1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!glideed1) {
                            glidess1 = true;
                            glideed1 = true
                        } else {
                            glidess1 = false;
                            glideed1 = false
                        };
                        glides1.setChecked(glideed1)
                    }
                }));
                _0x2ab3x53.addView(glides1);
                menu = new PopupWindow(_0x2ab3x55, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0)
            } catch (error) {
                Toast.makeText(ctx, "Error: " + error, 1).show()
            }
        }
    }))
}

function exit() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x2ab3x5a = new LinearLayout(ctx);
                var _0x2ab3x5b = new Button(ctx);
                _0x2ab3x5b.setText("X");
                _0x2ab3x5b.setTextColor(Color.RED);
                _0x2ab3x5b.setTextSize(15);
                _0x2ab3x5b.setBackground(xbg);
                _0x2ab3x5b.getBackground().setAlpha(150);
                _0x2ab3x5b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x2ab3x51) {
                        exitUI.dismiss();
                        menu.dismiss();
                        showMenuBtn()
                    }
                }));
                _0x2ab3x5a.addView(_0x2ab3x5b);
                exitUI = new PopupWindow(_0x2ab3x5a, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function toDirectionalVector(_0x2ab3x5d, _0x2ab3x5e, _0x2ab3x5f) {
    _0x2ab3x5d[0] = Math.cos(_0x2ab3x5e) * Math.cos(_0x2ab3x5f);
    _0x2ab3x5d[1] = Math.sin(_0x2ab3x5f);
    _0x2ab3x5d[2] = Math.sin(_0x2ab3x5e) * Math.cos(_0x2ab3x5f)
}

function attackHook(_0x2ab3x61, _0x2ab3x62) {
    if (_0x2ab3x61 == Player.getEntity() && grappless && Entity.getHealth(_0x2ab3x62) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(_0x2ab3x62), Entity.getY(_0x2ab3x62) + 1, Entity.getZ(_0x2ab3x62))
    }
}

function getNearestEntity(_0x2ab3x64) {
    var _0x2ab3x65 = Entity.getAll();
    var _0x2ab3x66 = Server.getAllPlayers();
    var _0x2ab3x67 = _0x2ab3x64;
    var _0x2ab3x68 = null;
    for (var _0x2ab3x69 = 0; _0x2ab3x69 < _0x2ab3x65.length; _0x2ab3x69++) {
        var _0x2ab3x19 = Entity.getX(_0x2ab3x65[_0x2ab3x69]) - getPlayerX();
        var _0x2ab3x18 = Entity.getY(_0x2ab3x65[_0x2ab3x69]) - getPlayerY();
        var _0x2ab3x1a = Entity.getZ(_0x2ab3x65[_0x2ab3x69]) - getPlayerZ();
        var _0x2ab3x6a = Math.sqrt(Math.pow(_0x2ab3x19, 2) + Math.pow(_0x2ab3x18, 2) + Math.pow(_0x2ab3x1a, 2));
        if (_0x2ab3x6a < _0x2ab3x67 && _0x2ab3x6a > 0 && Entity.getEntityTypeId(_0x2ab3x65[_0x2ab3x69]) <= 63 && Entity.getHealth(_0x2ab3x65[_0x2ab3x69]) >= 1) {
            _0x2ab3x67 = _0x2ab3x6a;
            _0x2ab3x68 = _0x2ab3x65[_0x2ab3x69]
        }
    };
    for (var _0x2ab3x69 = 0; _0x2ab3x69 < _0x2ab3x66.length; _0x2ab3x69++) {
        var _0x2ab3x19 = Entity.getX(_0x2ab3x66[_0x2ab3x69]) - getPlayerX();
        var _0x2ab3x18 = Entity.getY(_0x2ab3x66[_0x2ab3x69]) - getPlayerY();
        var _0x2ab3x1a = Entity.getZ(_0x2ab3x66[_0x2ab3x69]) - getPlayerZ();
        var _0x2ab3x6a = Math.sqrt(Math.pow(_0x2ab3x19, 2) + Math.pow(_0x2ab3x18, 2) + Math.pow(_0x2ab3x1a, 2));
        if (_0x2ab3x6a < _0x2ab3x67 && _0x2ab3x6a > 0 && Entity.getHealth(_0x2ab3x66[_0x2ab3x69]) >= 1) {
            _0x2ab3x67 = _0x2ab3x6a;
            _0x2ab3x68 = _0x2ab3x66[_0x2ab3x69]
        }
    };
    return _0x2ab3x68
}

function crosshairAimAt(_0x2ab3x68, _0x2ab3x6c) {
    if (_0x2ab3x68 != null) {
        var _0x2ab3x19 = Entity.getX(_0x2ab3x68) - getPlayerX();
        var _0x2ab3x18 = Entity.getY(_0x2ab3x68) - getPlayerY();
        var _0x2ab3x1a = Entity.getZ(_0x2ab3x68) - getPlayerZ();
        if (_0x2ab3x6c != null && _0x2ab3x6c instanceof Array) {
            _0x2ab3x19 = Entity.getX(_0x2ab3x68) - _0x2ab3x6c[0];
            _0x2ab3x18 = Entity.getY(_0x2ab3x68) - _0x2ab3x6c[1];
            _0x2ab3x1a = Entity.getZ(_0x2ab3x68) - _0x2ab3x6c[2]
        };
        if (Entity.getEntityTypeId(_0x2ab3x68) != 63) {
            _0x2ab3x18 += 0.5
        };
        var _0x2ab3x6d = 0.5 + Entity.getX(_0x2ab3x68);
        var _0x2ab3x6e = Entity.getY(_0x2ab3x68);
        var _0x2ab3x6f = 0.5 + Entity.getZ(_0x2ab3x68);
        var _0x2ab3x70 = Math.sqrt(_0x2ab3x19 * _0x2ab3x19 + _0x2ab3x18 * _0x2ab3x18 + _0x2ab3x1a * _0x2ab3x1a);
        var _0x2ab3x18 = _0x2ab3x18 / _0x2ab3x70;
        var _0x2ab3x5f = Math.asin(_0x2ab3x18);
        _0x2ab3x5f = _0x2ab3x5f * 180.0 / Math.PI;
        _0x2ab3x5f = -_0x2ab3x5f;
        var _0x2ab3x5e = -Math.atan2(_0x2ab3x6d - (Player.getX() + 0.5), _0x2ab3x6f - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (_0x2ab3x5f < 89 && _0x2ab3x5f > -89) {
            Entity.setRot(Player.getEntity(), _0x2ab3x5e, _0x2ab3x5f)
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
        if (Utils.Player.isInWater()) {
            setVelY(getPlayerEnt(), -0.001)
        }
    };
    if (glidess1) {
        Player.setFlying(1)
    };
    if (towered) {
        var _0x2ab3x68 = getNearestEntity(8);
        Entity.setCollisionSize(_0x2ab3x68, 10, 10)
    } else {
        Entity.setCollisionSize(_0x2ab3x68, 1, 2)
    };
    var _0x2ab3x72 = Player.getX();
    var _0x2ab3x73 = Player.getY();
    var _0x2ab3x74 = Player.getZ();
    var _0x2ab3x19 = Player.getX();
    var _0x2ab3x18 = Player.getY();
    var _0x2ab3x1a = Player.getZ()
}