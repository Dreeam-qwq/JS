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
var font = android.graphics.Typeface.SANS_SERIF;
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.WHITE);
bg.setStroke(4, android.graphics.Color.BLACK);
bg.setCornerRadius(30);
var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.WHITE);
bg1.setStroke(4, android.graphics.Color.BLACK);
bg1.setCornerRadius(20);
var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.WHITE);
bg2.setStroke(4, android.graphics.Color.BLACK);
bg2.setCornerRadius(2);
var bg3 = new android.graphics.drawable.GradientDrawable();
bg3.setColor(android.graphics.Color.WHITE);
bg3.setStroke(4, android.graphics.Color.BLACK);
bg3.setCornerRadius(20);
var Utils = {
    Block: {
        isLiquid: function(_0x17fdx18) {
            if (_0x17fdx18 >= 8 && _0x17fdx18 <= 11) {
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
        isLadder: function(_0x17fdx18) {
            if (_0x17fdx18 == 65) {
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
        replaceAll: function(_0x17fdx19, _0x17fdx1a, _0x17fdx1b) {
            var _0x17fdx1c = _0x17fdx1b;
            return _0x17fdx1c.replace(new RegExp(_0x17fdx19, "g"), _0x17fdx1a)
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
            var _0x17fdx1d = Entity.getY(getPlayerEnt());
            while (_0x17fdx1d > 1) {
                _0x17fdx1d -= 1
            };
            if ((Math.round(_0x17fdx1d * 100) >= 61 && Math.round(_0x17fdx1d * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(_0x17fdx1d * 100) >= 11 && Math.round(_0x17fdx1d * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x17fdx1e = Entity.getX(getPlayerEnt());
            var _0x17fdx1f = Entity.getZ(getPlayerEnt());
            var _0x17fdx20 = Math.round(_0x17fdx1e - 0.5);
            var _0x17fdx21 = Math.round(_0x17fdx1f - 0.5);
            while (_0x17fdx1e < 1) {
                _0x17fdx1e += 1
            };
            while (_0x17fdx1f < 1) {
                _0x17fdx1f += 1
            };
            while (_0x17fdx1e > 1) {
                _0x17fdx1e -= 1
            };
            while (_0x17fdx1f > 1) {
                _0x17fdx1f -= 1
            };
            if (Math.round(_0x17fdx1e * 100) == 31) {
                _0x17fdx1e -= 0.01
            };
            if (Math.round(_0x17fdx1f * 100) == 31) {
                _0x17fdx1f -= 0.01
            };
            if (Math.round(_0x17fdx1e * 100) == 69) {
                _0x17fdx1e += 0.01
            };
            if (Math.round(_0x17fdx1f * 100) == 69) {
                _0x17fdx1f += 0.01
            };
            if (Math.round(_0x17fdx1e * 100) == 30) {
                _0x17fdx20--
            };
            if (Math.round(_0x17fdx1f * 100) == 30) {
                _0x17fdx21--
            };
            if (Math.round(_0x17fdx1e * 100) == 70) {
                _0x17fdx20++
            };
            if (Math.round(_0x17fdx1f * 100) == 70) {
                _0x17fdx21++
            };
            if (getTile(_0x17fdx20, Entity.getY(getPlayerEnt()), _0x17fdx21) == 0 && getTile(_0x17fdx20, Entity.getY(getPlayerEnt()) - 1, _0x17fdx21) == 0) {
                return false
            };
            if (Block.getDestroyTime(getTile(_0x17fdx20, Entity.getY(getPlayerEnt()) - 1, _0x17fdx21)) <= 0.1 && Block.getDestroyTime(getTile(_0x17fdx20, Entity.getY(getPlayerEnt()), _0x17fdx21)) <= 0.1) {
                return false
            };
            if (Math.round(_0x17fdx1e * 100) == 30 || Math.round(_0x17fdx1e * 100) == 70) {
                return true
            };
            if (Math.round(_0x17fdx1f * 100) == 30 || Math.round(_0x17fdx1f * 100) == 70) {
                return true
            };
            return false
        }
    }
};
var GUI;
var menu;
var exitUI;
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
var bowaimbots;
var bowaimbotss = false;
var bowaimboted = false;
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
var bouncedelay = 9;
var bouncevel = 0.33;
var bouncespeed = 1.08;
var time = 2.0;
var tCounter = 0;
var moving = false;
var dx = 0;
var dy = 0;
var mPosX = 0;
var mPosY = 0;

function dip2px(_0x17fdxaa) {
    return Math.ceil(_0x17fdxaa * ctx.getResources().getDisplayMetrics().density)
}

function showMenuBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x17fdxac = new LinearLayout(ctx);
                _0x17fdxac.setOrientation(1);
                var _0x17fdxad = new Button(ctx);
                _0x17fdxad.setText("Aerox");
                _0x17fdxad.setTextColor(android.graphics.Color.BLACK);
                _0x17fdxad.setBackground(bg1);
                _0x17fdxad.getBackground().setAlpha(120);
                _0x17fdxad.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x17fdxae) {
                        mainMenu();
                        GUI.dismiss();
                        exit()
                    }
                }));
                _0x17fdxad.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(_0x17fdxaf, _0x17fdxb0) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x17fdxb0.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - _0x17fdxb0.getRawX();
                                    dy = mPosY - _0x17fdxb0.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (_0x17fdxb0.getRawX() + dx);
                                    mPosY = (_0x17fdxb0.getRawY() + dy);
                                    GUI.update(mPosX, mPosY, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                    ;
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break
                            }
                        } catch (e) {
                            print("Error: " + e)
                        };
                        return true
                    }
                }));
                _0x17fdxad.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(_0x17fdxb1, _0x17fdxb2) {
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60);
                        moving = true;
                        return true
                    }
                }));
                _0x17fdxac.addView(_0x17fdxad);
                GUI = new PopupWindow(_0x17fdxac, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 256, 0)
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
                var _0x17fdxb4 = new LinearLayout(ctx);
                var _0x17fdxb5 = new ScrollView(ctx);
                var _0x17fdxb6 = new LinearLayout(ctx);
                _0x17fdxb4.setOrientation(1);
                _0x17fdxb4.setBackground(bg);
                _0x17fdxb4.getBackground().setAlpha(120);
                _0x17fdxb6.setOrientation(1);
                _0x17fdxb5.addView(_0x17fdxb4);
                _0x17fdxb6.addView(_0x17fdxb5);
                var _0x17fdxb7 = new android.widget.Button(ctx);
                _0x17fdxb7.setText("  Aerox  ");
                _0x17fdxb7.setTypeface(font);
                _0x17fdxb7.setTextSize(29);
                _0x17fdxb7.setTextColor(android.graphics.Color.BLACK);
                _0x17fdxb7.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                _0x17fdxb7.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x17fdxae) {}
                }));
                _0x17fdxb4.addView(_0x17fdxb7);
                var _0x17fdxb7 = new android.widget.Button(ctx);
                _0x17fdxb7.setText("GameMode");
                _0x17fdxb7.setTextColor(android.graphics.Color.BLACK);
                _0x17fdxb7.setBackground(bg2);
                _0x17fdxb7.getBackground().setAlpha(120);
                _0x17fdxb7.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x17fdxae) {
                        if (!gmSwitched) {
                            Level.setGameMode(1);
                            gmSwitched = true
                        } else {
                            Level.setGameMode(0);
                            gmSwitched = false
                        }
                    }
                }));
                _0x17fdxb4.addView(_0x17fdxb7);
                var antikbs = new Switch(ctx);
                antikbs.setText("Velocity");
                antikbs.setTextColor(android.graphics.Color.BLACK);
                antikbs.setPadding(10, 3, 3, 3);
                antikbs.setTextSize(15);
                antikbs.setChecked(antikbed);
                antikbs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!antikbed) {
                            antikbss = true;
                            antikbed = true
                        } else {
                            antikbss = false;
                            antikbed = false
                        };
                        antikbs.setChecked(antikbed)
                    }
                }));
                _0x17fdxb4.addView(antikbs);
                var aimbots = new Switch(ctx);
                aimbots.setText("Aim Aura");
                aimbots.setTextColor(android.graphics.Color.BLACK);
                aimbots.setPadding(10, 3, 3, 3);
                aimbots.setTextSize(15);
                aimbots.setChecked(aimboted);
                aimbots.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aimboted) {
                            aimbotss = true;
                            aimboted = true
                        } else {
                            aimbotss = false;
                            aimboted = false
                        };
                        aimbots.setChecked(aimboted)
                    }
                }));
                _0x17fdxb4.addView(aimbots);
                var bowaimbots = new Switch(ctx);
                bowaimbots.setText("Bow Aimbot");
                bowaimbots.setTextColor(android.graphics.Color.BLACK);
                bowaimbots.setPadding(10, 3, 3, 3);
                bowaimbots.setTextSize(15);
                bowaimbots.setChecked(bowaimboted);
                bowaimbots.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bowaimboted) {
                            bowaimboted = true;
                            bowaimbotss = true
                        } else {
                            bowaimboted = false;
                            bowaimbotss = false
                        };
                        bowaimbots.setChecked(bowaimboted)
                    }
                }));
                _0x17fdxb4.addView(bowaimbots);
                var reachs = new Switch(ctx);
                reachs.setText("Reach");
                reachs.setTextColor(android.graphics.Color.BLACK);
                reachs.setPadding(10, 3, 3, 3);
                reachs.setTextSize(15);
                reachs.setChecked(reached);
                reachs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!reached) {
                            reachss = true;
                            reached = true
                        } else {
                            reachss = false;
                            reached = false;
                            Level.setGameMode(0)
                        };
                        reachs.setChecked(reached)
                    }
                }));
                _0x17fdxb4.addView(reachs);
                var grapples = new Switch(ctx);
                grapples.setText("Hit TP");
                grapples.setTextColor(android.graphics.Color.BLACK);
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
                _0x17fdxb4.addView(grapples);
                var autoswords = new Switch(ctx);
                autoswords.setText("Auto Sword");
                autoswords.setTextColor(android.graphics.Color.BLACK);
                autoswords.setPadding(10, 3, 3, 3);
                autoswords.setTextSize(15);
                autoswords.setChecked(autosworded);
                autoswords.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!autosworded) {
                            autoswordss = true;
                            autosworded = true
                        } else {
                            autoswordss = false;
                            autosworded = false
                        };
                        autoswords.setChecked(autosworded)
                    }
                }));
                _0x17fdxb4.addView(autoswords);
                var hb = new Switch(ctx);
                hb.setText("Hitbox Expander");
                hb.setTextColor(android.graphics.Color.BLACK);
                hb.setPadding(10, 3, 3, 3);
                hb.setTextSize(15);
                hb.setChecked(hb2);
                hb.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!hb2) {
                            hb1 = true;
                            hb2 = true
                        } else {
                            hb1 = false;
                            hb2 = false
                        };
                        hb.setChecked(hb2)
                    }
                }));
                _0x17fdxb4.addView(hb);
                var criticaltrailss = new Switch(ctx);
                criticaltrailss.setText("Leet Boost");
                criticaltrailss.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss.setPadding(10, 3, 3, 3);
                criticaltrailss.setTextSize(15);
                criticaltrailss.setChecked(criticaltrailsed);
                criticaltrailss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed) {
                            criticaltrailsss = true;
                            criticaltrailsed = true
                        } else {
                            criticaltrailsss = false;
                            criticaltrailsed = false
                        };
                        criticaltrailss.setChecked(criticaltrailsed)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss);
                var nearwarnings = new Switch(ctx);
                nearwarnings.setText("Phase");
                nearwarnings.setTextColor(android.graphics.Color.BLACK);
                nearwarnings.setPadding(10, 3, 3, 3);
                nearwarnings.setTextSize(15);
                nearwarnings.setChecked(nearwarninged);
                nearwarnings.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!nearwarninged) {
                            nearwarningss = true;
                            nearwarninged = true
                        } else {
                            nearwarningss = false;
                            nearwarninged = false
                        };
                        nearwarnings.setChecked(nearwarninged)
                    }
                }));
                _0x17fdxb4.addView(nearwarnings);
                var js = new Switch(ctx);
                js.setText("Water Hop");
                js.setTextColor(android.graphics.Color.BLACK);
                js.setPadding(10, 3, 3, 3);
                js.setTextSize(15);
                js.setChecked(js2);
                js.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!js2) {
                            js1 = true;
                            js2 = true
                        } else {
                            js1 = false;
                            js2 = false
                        };
                        js.setChecked(js2)
                    }
                }));
                _0x17fdxb4.addView(js);
                var ndglides = new Switch(ctx);
                ndglides.setText("No Down Glide");
                ndglides.setTextColor(android.graphics.Color.BLACK);
                ndglides.setPadding(10, 3, 3, 3);
                ndglides.setTextSize(15);
                ndglides.setChecked(ndglideed);
                ndglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ndglideed) {
                            ndglidess = true;
                            ndglideed = true
                        } else {
                            ndglidess = false;
                            ndglideed = false
                        };
                        ndglides.setChecked(ndglideed)
                    }
                }));
                _0x17fdxb4.addView(ndglides);
                var mglide = new Switch(ctx);
                mglide.setText("Mineplex Glide");
                mglide.setTextColor(android.graphics.Color.BLACK);
                mglide.setPadding(10, 3, 3, 3);
                mglide.setTextSize(15);
                mglide.setChecked(mglide2);
                mglide.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!mglide2) {
                            mglide1 = true;
                            mglide2 = true
                        } else {
                            mglide1 = false;
                            mglide2 = false
                        };
                        mglide.setChecked(mglide2)
                    }
                }));
                _0x17fdxb4.addView(mglide);
                var heart = new Switch(ctx);
                heart.setText("Scaffold Walk");
                heart.setTextColor(android.graphics.Color.BLACK);
                heart.setPadding(10, 3, 3, 3);
                heart.setTextSize(15);
                heart.setChecked(hearted);
                heart.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!hearted) {
                            hearts = true;
                            hearted = true
                        } else {
                            hearts = false;
                            hearted = false
                        };
                        heart.setChecked(hearted)
                    }
                }));
                _0x17fdxb4.addView(heart);
                var tapjumps = new Switch(ctx);
                tapjumps.setText("Tap Tower");
                tapjumps.setTextColor(android.graphics.Color.BLACK);
                tapjumps.setPadding(10, 3, 3, 3);
                tapjumps.setTextSize(15);
                tapjumps.setChecked(tapjumped);
                tapjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!tapjumped) {
                            tapjumpss = true;
                            tapjumped = true
                        } else {
                            tapjumpss = false;
                            tapjumped = false
                        };
                        tapjumps.setChecked(tapjumped)
                    }
                }));
                _0x17fdxb4.addView(tapjumps);
                var taptps = new Switch(ctx);
                taptps.setText("TapTP");
                taptps.setTextColor(android.graphics.Color.BLACK);
                taptps.setPadding(10, 3, 3, 3);
                taptps.setTextSize(15);
                taptps.setChecked(taptped);
                taptps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!taptped) {
                            taptpss = true;
                            taptped = true
                        } else {
                            taptpss = false;
                            taptped = false
                        };
                        taptps.setChecked(taptped)
                    }
                }));
                _0x17fdxb4.addView(taptps);
                var bhop = new Switch(ctx);
                bhop.setText("Bunny Hop");
                bhop.setTextColor(android.graphics.Color.BLACK);
                bhop.setPadding(10, 3, 3, 3);
                bhop.setTextSize(15);
                bhop.setChecked(bhoped);
                bhop.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bhoped) {
                            bhopl = true;
                            bhoped = true
                        } else {
                            bhopl = false;
                            bhoped = false
                        };
                        bhop.setChecked(bhoped)
                    }
                }));
                _0x17fdxb4.addView(bhop);
                var lbsgspeeds = new Switch(ctx);
                lbsgspeeds.setText("Lbsg Speed");
                lbsgspeeds.setTextColor(android.graphics.Color.BLACK);
                lbsgspeeds.setPadding(10, 3, 3, 3);
                lbsgspeeds.setTextSize(15);
                lbsgspeeds.setChecked(lbsgspeeded);
                lbsgspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!lbsgspeeded) {
                            ModPE.setGameSpeed(40);
                            lbsgspeedss = true;
                            lbsgspeeded = true
                        } else {
                            ModPE.setGameSpeed(20);
                            lbsgspeedss = false;
                            lbsgspeeded = false
                        };
                        lbsgspeeds.setChecked(lbsgspeeded)
                    }
                }));
                _0x17fdxb4.addView(lbsgspeeds);
                var criticaltrailss9101 = new Switch(ctx);
                criticaltrailss9101.setText("Spider Climb");
                criticaltrailss9101.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9101.setPadding(10, 3, 3, 3);
                criticaltrailss9101.setTextSize(15);
                criticaltrailss9101.setChecked(criticaltrailsed9101);
                criticaltrailss9101.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9101) {
                            criticaltrailsss9101 = true;
                            criticaltrailsed9101 = true
                        } else {
                            criticaltrailsss9101 = false;
                            criticaltrailsed9101 = false
                        };
                        criticaltrailss9101.setChecked(criticaltrailsed9101)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9101);
                var criticaltrailss9201 = new Switch(ctx);
                criticaltrailss9201.setText("Hover Aura");
                criticaltrailss9201.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9201.setPadding(10, 3, 3, 3);
                criticaltrailss9201.setTextSize(15);
                criticaltrailss9201.setChecked(criticaltrailsed9201);
                criticaltrailss9201.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9201) {
                            criticaltrailsss9201 = true;
                            criticaltrailsed9201 = true;
                            aero("Code Originally Made By: Me \(WolfHaxYT\) And Hacker Laastad");
                            aero("Works On Players And Mobs")
                        } else {
                            criticaltrailsss9201 = false;
                            criticaltrailsed9201 = false
                        };
                        criticaltrailss9201.setChecked(criticaltrailsed9201)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9201);
                var criticaltrailss9301 = new Switch(ctx);
                criticaltrailss9301.setText("Wall AimBot");
                criticaltrailss9301.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9301.setPadding(10, 3, 3, 3);
                criticaltrailss9301.setTextSize(15);
                criticaltrailss9301.setChecked(criticaltrailsed9301);
                criticaltrailss9301.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9301) {
                            criticaltrailsss9301 = true;
                            criticaltrailsed9301 = true
                        } else {
                            criticaltrailsss9301 = false;
                            criticaltrailsed9301 = false
                        };
                        criticaltrailss9301.setChecked(criticaltrailsed9301)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9301);
                var criticaltrailss9401 = new Switch(ctx);
                criticaltrailss9401.setText("Water AimBot");
                criticaltrailss9401.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9401.setPadding(10, 3, 3, 3);
                criticaltrailss9401.setTextSize(15);
                criticaltrailss9401.setChecked(criticaltrailsed9401);
                criticaltrailss9401.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9401) {
                            criticaltrailsss9401 = true;
                            criticaltrailsed9401 = true
                        } else {
                            criticaltrailsss9401 = false;
                            criticaltrailsed9401 = false
                        };
                        criticaltrailss9401.setChecked(criticaltrailsed9401)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9401);
                var criticaltrailss9501 = new Switch(ctx);
                criticaltrailss9501.setText("Crouch Speeds");
                criticaltrailss9501.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9501.setPadding(10, 3, 3, 3);
                criticaltrailss9501.setTextSize(15);
                criticaltrailss9501.setChecked(criticaltrailsed9501);
                criticaltrailss9501.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9501) {
                            criticaltrailsss9501 = true;
                            criticaltrailsed9501 = true
                        } else {
                            criticaltrailsss9501 = false;
                            criticaltrailsed9501 = false
                        };
                        criticaltrailss9501.setChecked(criticaltrailsed9501)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9501);
                var dodges = new Switch(ctx);
                dodges.setText("Bounce Fly");
                dodges.setTextColor(android.graphics.Color.BLACK);
                dodges.setPadding(10, 3, 3, 3);
                dodges.setTextSize(15);
                dodges.setChecked(dodged);
                dodges.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!dodged) {
                            dodgess = true;
                            dodged = true
                        } else {
                            dodgess = false;
                            dodged = false
                        };
                        dodges.setChecked(dodged)
                    }
                }));
                _0x17fdxb4.addView(dodges);
                var criticaltrailss99 = new Switch(ctx);
                criticaltrailss99.setText("Fast Swim");
                criticaltrailss99.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss99.setPadding(10, 3, 3, 3);
                criticaltrailss99.setTextSize(15);
                criticaltrailss99.setChecked(criticaltrailsed99);
                criticaltrailss99.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed99) {
                            criticaltrailsss99 = true;
                            criticaltrailsed99 = true
                        } else {
                            criticaltrailsss99 = false;
                            criticaltrailsed99 = false
                        };
                        criticaltrailss99.setChecked(criticaltrailsed99)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss99);
                var criticaltrailss01 = new Switch(ctx);
                criticaltrailss01.setText("Water Slide");
                criticaltrailss01.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss01.setPadding(10, 3, 3, 3);
                criticaltrailss01.setTextSize(15);
                criticaltrailss01.setChecked(criticaltrailsed01);
                criticaltrailss01.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed01) {
                            criticaltrailsss01 = true;
                            criticaltrailsed01 = true
                        } else {
                            criticaltrailsss01 = false;
                            criticaltrailsed01 = false
                        };
                        criticaltrailss01.setChecked(criticaltrailsed01)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss01);
                var criticaltrailss9601 = new Switch(ctx);
                criticaltrailss9601.setText("Spammer");
                criticaltrailss9601.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9601.setPadding(10, 3, 3, 3);
                criticaltrailss9601.setTextSize(15);
                criticaltrailss9601.setChecked(criticaltrailsed9601);
                criticaltrailss9601.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9601) {
                            criticaltrailsss9601 = true;
                            criticaltrailsed9601 = true
                        } else {
                            criticaltrailsss9601 = false;
                            criticaltrailsed9601 = false
                        };
                        criticaltrailss9601.setChecked(criticaltrailsed9601)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9601);
                var criticaltrailss9701 = new Switch(ctx);
                criticaltrailss9701.setText("Twerk");
                criticaltrailss9701.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9701.setPadding(10, 3, 3, 3);
                criticaltrailss9701.setTextSize(15);
                criticaltrailss9701.setChecked(criticaltrailsed9701);
                criticaltrailss9701.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9701) {
                            criticaltrailsss9701 = true;
                            criticaltrailsed9701 = true
                        } else {
                            criticaltrailsss9701 = false;
                            criticaltrailsed9701 = false
                        };
                        criticaltrailss9701.setChecked(criticaltrailsed9701)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9701);
                var criticaltrailss9801 = new Switch(ctx);
                criticaltrailss9801.setText("Derp");
                criticaltrailss9801.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9801.setPadding(10, 3, 3, 3);
                criticaltrailss9801.setTextSize(15);
                criticaltrailss9801.setChecked(criticaltrailsed9801);
                criticaltrailss9801.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9801) {
                            criticaltrailsss9801 = true;
                            criticaltrailsed9801 = true
                        } else {
                            criticaltrailsss9801 = false;
                            criticaltrailsed9801 = false
                        };
                        criticaltrailss9801.setChecked(criticaltrailsed9801)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9801);
                var criticaltrailss9901 = new Switch(ctx);
                criticaltrailss9901.setText("Back Faces");
                criticaltrailss9901.setTextColor(android.graphics.Color.BLACK);
                criticaltrailss9901.setPadding(10, 3, 3, 3);
                criticaltrailss9901.setTextSize(15);
                criticaltrailss9901.setChecked(criticaltrailsed9901);
                criticaltrailss9901.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed9901) {
                            criticaltrailsss9901 = true;
                            criticaltrailsed9901 = true
                        } else {
                            criticaltrailsss9901 = false;
                            criticaltrailsed9901 = false
                        };
                        criticaltrailss9901.setChecked(criticaltrailsed9901)
                    }
                }));
                _0x17fdxb4.addView(criticaltrailss9901);
                menu = new android.widget.PopupWindow(_0x17fdxb6, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1);
                menu.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0)
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show()
            }
        }
    }))
}

function exit() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x17fdxb9 = new LinearLayout(ctx);
                var _0x17fdxba = new Button(ctx);
                _0x17fdxba.setText("X");
                _0x17fdxba.setTextColor(Color.BLACK);
                _0x17fdxba.setTextSize(15);
                _0x17fdxba.setBackground(bg3);
                _0x17fdxba.getBackground().setAlpha(150);
                _0x17fdxba.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x17fdxae) {
                        exitUI.dismiss();
                        menu.dismiss();
                        showMenuBtn()
                    }
                }));
                _0x17fdxb9.addView(_0x17fdxba);
                exitUI = new PopupWindow(_0x17fdxb9, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function toDirectionalVector(_0x17fdxbc, _0x17fdxbd, _0x17fdxbe) {
    _0x17fdxbc[0] = Math.cos(_0x17fdxbd) * Math.cos(_0x17fdxbe);
    _0x17fdxbc[1] = Math.sin(_0x17fdxbe);
    _0x17fdxbc[2] = Math.sin(_0x17fdxbd) * Math.cos(_0x17fdxbe)
}

function attackHook(_0x17fdxc0, _0x17fdxc1) {
    if (_0x17fdxc0 == Player.getEntity() && grappless && Entity.getHealth(_0x17fdxc1) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(_0x17fdxc1), Entity.getY(_0x17fdxc1) + 2, Entity.getZ(_0x17fdxc1))
    }
}

function useItem(_0x17fdx1e, _0x17fdx1d, _0x17fdx1f, _0x17fdxc3, _0x17fdxc4, _0x17fdxc5, _0x17fdxc6, _0x17fdxc7) {
    if (tapjumpss) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (taptpss && getTile(_0x17fdx1e, _0x17fdx1d + 1, _0x17fdx1f) == 0 && getTile(_0x17fdx1e, _0x17fdx1d + 2, _0x17fdx1f) == 0) {
        Entity.setPosition(Player.getEntity(), _0x17fdx1e + 0.5, _0x17fdx1d + 2.63, _0x17fdx1f + 0.5)
    }
}

function getNearestEntity(_0x17fdxc9) {
    var _0x17fdxca = Entity.getAll();
    var _0x17fdxcb = Server.getAllPlayers();
    var _0x17fdxcc = _0x17fdxc9;
    var ent = null;
    for (var _0x17fdxce = 0; _0x17fdxce < _0x17fdxca.length; _0x17fdxce++) {
        var _0x17fdx1e = Entity.getX(_0x17fdxca[_0x17fdxce]) - getPlayerX();
        var _0x17fdx1d = Entity.getY(_0x17fdxca[_0x17fdxce]) - getPlayerY();
        var _0x17fdx1f = Entity.getZ(_0x17fdxca[_0x17fdxce]) - getPlayerZ();
        var _0x17fdxcf = Math.sqrt(Math.pow(_0x17fdx1e, 2) + Math.pow(_0x17fdx1d, 2) + Math.pow(_0x17fdx1f, 2));
        if (_0x17fdxcf < _0x17fdxcc && _0x17fdxcf > 0 && Entity.getEntityTypeId(_0x17fdxca[_0x17fdxce]) <= 63 && Entity.getHealth(_0x17fdxca[_0x17fdxce]) >= 1) {
            _0x17fdxcc = _0x17fdxcf;
            ent = _0x17fdxca[_0x17fdxce]
        }
    };
    for (var _0x17fdxce = 0; _0x17fdxce < _0x17fdxcb.length; _0x17fdxce++) {
        var _0x17fdx1e = Entity.getX(_0x17fdxcb[_0x17fdxce]) - getPlayerX();
        var _0x17fdx1d = Entity.getY(_0x17fdxcb[_0x17fdxce]) - getPlayerY();
        var _0x17fdx1f = Entity.getZ(_0x17fdxcb[_0x17fdxce]) - getPlayerZ();
        var _0x17fdxcf = Math.sqrt(Math.pow(_0x17fdx1e, 2) + Math.pow(_0x17fdx1d, 2) + Math.pow(_0x17fdx1f, 2));
        if (_0x17fdxcf < _0x17fdxcc && _0x17fdxcf > 0 && Entity.getHealth(_0x17fdxcb[_0x17fdxce]) >= 1) {
            _0x17fdxcc = _0x17fdxcf;
            ent = _0x17fdxcb[_0x17fdxce]
        }
    };
    return ent
}

function crosshairAimAt(ent, _0x17fdxd1) {
    if (ent != null) {
        var _0x17fdx1e = Entity.getX(ent) - getPlayerX();
        var _0x17fdx1d = Entity.getY(ent) - getPlayerY();
        var _0x17fdx1f = Entity.getZ(ent) - getPlayerZ();
        if (_0x17fdxd1 != null && _0x17fdxd1 instanceof Array) {
            _0x17fdx1e = Entity.getX(ent) - _0x17fdxd1[0];
            _0x17fdx1d = Entity.getY(ent) - _0x17fdxd1[1];
            _0x17fdx1f = Entity.getZ(ent) - _0x17fdxd1[2]
        };
        if (Entity.getEntityTypeId(ent) != 63) {
            _0x17fdx1d += 0.5
        };
        var _0x17fdxd2 = 0.5 + Entity.getX(ent);
        var _0x17fdxd3 = Entity.getY(ent);
        var _0x17fdxd4 = 0.5 + Entity.getZ(ent);
        var _0x17fdxd5 = Math.sqrt(_0x17fdx1e * _0x17fdx1e + _0x17fdx1d * _0x17fdx1d + _0x17fdx1f * _0x17fdx1f);
        var _0x17fdx1d = _0x17fdx1d / _0x17fdxd5;
        var _0x17fdxbe = Math.asin(_0x17fdx1d);
        _0x17fdxbe = _0x17fdxbe * 180.0 / Math.PI;
        _0x17fdxbe = -_0x17fdxbe;
        var _0x17fdxbd = -Math.atan2(_0x17fdxd2 - (Player.getX() + 0.5), _0x17fdxd4 - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (_0x17fdxbe < 89 && _0x17fdxbe > -89) {
            Entity.setRot(Player.getEntity(), _0x17fdxbd, _0x17fdxbe)
        }
    }
}

function modTick() {
    if (aimbotss) {
        var ent = getNearestEntity(7);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };

    function _0x17fdxd7(ent) {
        var _0x17fdxd8 = 1;
        var _0x17fdxd9 = Entity.getX(ent) - Player.getX();
        var _0x17fdxda = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
        var _0x17fdxdb = Entity.getZ(ent) - Player.getZ();
        var _0x17fdxbd = (Math.atan2(_0x17fdxdb, _0x17fdxd9) * 180 / Math.PI) - 90;
        var _0x17fdxdc = Math.sqrt(_0x17fdxd9 * _0x17fdxd9 + _0x17fdxdb * _0x17fdxdb);
        var _0x17fdxdd = 0.007;
        var _0x17fdxde = (_0x17fdxd8 * _0x17fdxd8 * _0x17fdxd8 * _0x17fdxd8 - _0x17fdxdd * (_0x17fdxdd * (_0x17fdxdc * _0x17fdxdc) + 2 * _0x17fdxda * (_0x17fdxd8 * _0x17fdxd8)));
        var _0x17fdxbe = -(180 / Math.PI) * (Math.atan((_0x17fdxd8 * _0x17fdxd8 - Math.sqrt(_0x17fdxde)) / (_0x17fdxdd * _0x17fdxdc)));
        if (_0x17fdxbe < 89 && _0x17fdxbe > -89) {
            setRot(Player.getEntity(), _0x17fdxbd, _0x17fdxbe)
        }
    }
    var _0x17fdxdf = Player.getX();
    var _0x17fdxe0 = Player.getY();
    var _0x17fdxe1 = Player.getZ();
    var _0x17fdx1e = Player.getX();
    var _0x17fdx1d = Player.getY();
    var _0x17fdx1f = Player.getZ();
    if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
        if (kbTick >= 1) {
            kbTick--
        } else {
            Entity.setImmobile(getPlayerEnt(), false)
        };
        if (kbHealth > Entity.getHealth(getPlayerEnt())) {
            Entity.setImmobile(getPlayerEnt(), true);
            kbTick = 1
        };
        kbTick = 0;
        kbHealth = Entity.getHealth(getPlayerEnt())
    };
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (mglide1) {
        setVelY(getPlayerEnt(), -0.001)
    };
    if (criticaltrailsss == true && Entity.isSneaking(Player.getEntity()) == true) {
        setVelY(getPlayerEnt(), -0.004);
        var _0x17fdxe2 = [0, 0, 0];
        toDirectionalVector(_0x17fdxe2, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * _0x17fdxe2[0]);
        setVelZ(getPlayerEnt(), 0.6 * _0x17fdxe2[2])
    };
    if (criticaltrailsss9601) {
        Server.sendChat("Aerox")
    };
    if (hb1) {
        ent = getNearestEntity(10);
        Entity.setCollisionSize(ent, 15, 15)
    } else {
        ent = getNearestEntity(10);
        Entity.setCollisionSize(ent, 1, 2)
    };
    if (nearwarningss) {
        Entity.setCollisionSize(Player.getEntity(), 0, 0)
    } else {
        Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8)
    };
    if (hearts) {
        setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 24);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.55);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.55)
    };
    if (criticaltrailsss9201) {
        var ent = getNearestEntity(60);
        setVelY(getPlayerEnt(), -0.001);
        setPosition(getPlayerEnt(), Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent));
        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 4.05, getPlayerZ())
    };
    if (criticaltrailsss9101 && Utils.Player.isCollidedHorizontally()) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (criticaltrailsss9301 && Utils.Player.isCollidedHorizontally()) {
        var ent = getNearestEntity(10);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };
    if (criticaltrailsss01 && Utils.Player.isInWater()) {
        setVelY(getPlayerEnt(), 0.001);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3)
    };
    if (criticaltrailsss99 && Utils.Player.isInWater()) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3)
    };
    if (criticaltrailsss9401 && Utils.Player.isInWater()) {
        setVelY(getPlayerEnt(), 0.1);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3);
        var ent = getNearestEntity(10);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };
    if (js1 && Utils.Player.isInWater()) {
        setVelY(getPlayerEnt(), 0.3);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3)
    };
    if (bhopl) {
        if (Utils.Player.isOnGround()) {
            setVelY(getPlayerEnt(), 0.3);
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.2)
        }
    };
    if (dodgess) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.08);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.08);
        if (time !== 0) {
            time--
        };
        if (time == 0) {
            time = 9;
            setVelY(getPlayerEnt(), 0.33)
        }
    };
    if (reachss) {
        Level.setGameMode(1);
        Player.setCanFly(0);
        Player.isFlying(0)
    };
    if (autowalkss) {
        var _0x17fdxe2 = [0, 0, 0];
        toDirectionalVector(_0x17fdxe2, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.4 * _0x17fdxe2[0]);
        setVelZ(getPlayerEnt(), 0.4 * _0x17fdxe2[2])
    };
    if (criticaltrailsss9501) {
        if (Entity.isSneaking(Player.getEntity()) == true) {
            setVelY(getPlayerEnt(), -100.0);
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.7);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.7)
        }
    }
}
if (bowaimbotss && getCarriedItem() == 261) {
    var ent = getNearestEntity(100);
    if (ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent) != "  " && isNotTeam(ent)) {
        bowAimAt(ent)
    }
};
if (autoswordss) {
    var slotId = 0;
    var getInvSword = Player.getInventorySlot(slotId);
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
        Player.setSelectedSlotId(invSword)
    }
};

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (criticaltrailsss9901) {
                        var _0x17fdxe8 = getPlayerEnt();
                        var _0x17fdxbd = Math.floor(Entity.getYaw(_0x17fdxe8));
                        var _0x17fdxbe = Math.floor(Entity.getPitch(_0x17fdxe8));
                        if (_0x17fdxbe <= 189) {
                            Entity.setRot(_0x17fdxe8, _0x17fdxbd, 192)
                        }
                    };
                    if (criticaltrailsss9701) {
                        tCounter++;
                        if (tCounter == 6) {
                            Entity.setSneaking(Player.getEntity(), 1)
                        };
                        if (tCounter == 11) {
                            Entity.setSneaking(Player.getEntity(), 0);
                            tCounter = 1
                        }
                    };
                    if (criticaltrailsss9801) {
                        var _0x17fdxe8 = getPlayerEnt();
                        var _0x17fdxbd = Math.floor(Entity.getYaw(_0x17fdxe8));
                        var _0x17fdxbe = Math.floor(Entity.getPitch(_0x17fdxe8));
                        Entity.setRot(_0x17fdxe8, _0x17fdxbd + 30, _0x17fdxbe)
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

function aero(_0x17fdx1b, _0x17fdxea) {
    try {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var _0x17fdxeb = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + _0x17fdx1b, android.widget.Toast.LENGTH_LONG);
                var _0x17fdxac = new android.widget.LinearLayout(ctx);
                var _0x17fdxec = new android.widget.TextView(ctx);
                if (_0x17fdxea == null) {
                    _0x17fdx1b = "" + _0x17fdx1b
                } else {
                    _0x17fdx1b = _0x17fdxea + ": " + _0x17fdx1b
                };
                _0x17fdxec.setText(_0x17fdx1b);
                _0x17fdxec.setGravity(android.view.Gravity.CENTER);
                _0x17fdxec.setTextSize(15);
                _0x17fdxec.setPadding(10, 10, 10, 10);
                _0x17fdxec.setTextColor(android.graphics.Color.BLACK);
                var _0x17fdxed = new android.graphics.drawable.GradientDrawable();
                _0x17fdxed.setColor(android.graphics.Color.WHITE);
                _0x17fdxed.setStroke(5, android.graphics.Color.BLACK);
                _0x17fdxac.addView(_0x17fdxec);
                _0x17fdxac.setBackground(_0x17fdxed);
                _0x17fdxac.getBackground().setAlpha(150);
                _0x17fdxeb.setView(_0x17fdxac);
                _0x17fdxeb.show()
            }
        }))
    } catch (e) {
        print(e)
    }
}