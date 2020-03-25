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
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(10, android.graphics.Color.rgb(260, 260, 260));
bg.setCornerRadius(5);
var br1 = new android.graphics.drawable.GradientDrawable();
br1.setColor(android.graphics.Color.WHITE);
br1.setStroke(7, android.graphics.Color.RED);
br1.setCornerRadius(0);
var Utils = {
    Block: {
        isLiquid: function(id) {
            if (id >= 8 && id <= 11) return true;
            return false;
        }
    },
    Player: {
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isOnGround: function() {
            var y = Entity.getY(getPlayerEnt());
            while (y > 1) y -= 1;
            if ((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            }
            if ((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isCollidedHorizontally: function() {
            var x = Entity.getX(getPlayerEnt());
            var z = Entity.getZ(getPlayerEnt());
            var blockX = Math.round(x - 0.5);
            var blockZ = Math.round(z - 0.5);
            while (x < 1) x += 1;
            while (z < 1) z += 1;
            while (x > 1) x -= 1;
            while (z > 1) z -= 1;
            if (Math.round(x * 100) == 31) x -= 0.01;
            if (Math.round(z * 100) == 31) z -= 0.01;
            if (Math.round(x * 100) == 69) x += 0.01;
            if (Math.round(z * 100) == 69) z += 0.01;
            if (Math.round(x * 100) == 30) blockX--;
            if (Math.round(z * 100) == 30) blockZ--;
            if (Math.round(x * 100) == 70) blockX++;
            if (Math.round(z * 100) == 70) blockZ++;
            if (getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;
            if (Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;
            if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
            if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
            return false;
        }
    }
};
var Utils = {
    Block: {
        isLiquid: function(id) {
            if (id >= 8 && id <= 11) return true;
            return false;
        }
    },
    Player: {
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isOnGround: function() {
            var y = Entity.getY(getPlayerEnt());
            while (y > 1) y -= 1;
            if ((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            }
            if ((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isCollidedHorizontally: function() {
            var x = Entity.getX(getPlayerEnt());
            var z = Entity.getZ(getPlayerEnt());
            var blockX = Math.round(x - 0.5);
            var blockZ = Math.round(z - 0.5);
            while (x < 1) x += 1;
            while (z < 1) z += 1;
            while (x > 1) x -= 1;
            while (z > 1) z -= 1;
            if (Math.round(x * 100) == 31) x -= 0.01;
            if (Math.round(z * 100) == 31) z -= 0.01;
            if (Math.round(x * 100) == 69) x += 0.01;
            if (Math.round(z * 100) == 69) z += 0.01;
            if (Math.round(x * 100) == 30) blockX--;
            if (Math.round(z * 100) == 30) blockZ--;
            if (Math.round(x * 100) == 70) blockX++;
            if (Math.round(z * 100) == 70) blockZ++;
            if (getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;
            if (Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;
            if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
            if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
            return false;
        }
    }
};
var GUI;
var menu;
var exitUI;
var p = getPlayerEnt();
var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerWalkSpeed = 0.3;
var gmSwitchs
var gmSwitched = false;
var aim;
var aimbot = false;
var aimed = false;
var grapples
var grappless = false;
var grappleed = false;
var taptps
var taptpss = false;
var taptped = false;
var snipers
var sniperss = false;
var sniperhh = true;
var snipered = false;
var antikbs
var antikbss = false;
var antikbed = false;
var ndglides
var ndglidess = false;
var ndglideed = false;
var aimbots
var aimbotss = false;
var aimboted = false;
var reachs
var reachss = false;
var reached = false;
var reachs
var reachss = false;
var reached = false;
var bhop = false;
var bhopl = false;
var bhoped = false;
var lhealths
var lhealthss = false;
var lhealthed = false;
var lhungers
var lhungerss = false;
var lhungered = false;
var lcords
var lcordss = false;
var lcorded = false;
var criticaltrailss
var criticaltrailsss = false;
var criticaltrailsed = false;
var glides
var glidess = false;
var glideed = false;
var glides1
var glidess1 = false;
var glideed1 = false;
var elevators4
var elevatoredddd = false;
var steps
var stepss = false;
var steped = false;
var cspeeds
var cspeedss = false;
var cspeeded = false;
var criticalss
var criticales = false;
var criticalsed = false;
var critTick = 0;
var criticalTick = 0;
var spam
var spamming = false;
var spammed = false;
var elevators = false;
var elevatored = false;
var tapjumps
var tapjumpss = false;
var tapjumped = false;
var antigravitys
var antigravityss = false;
var antigravityed = false;
var autowalks
var autowalkss = false;
var autowalked = false;
var derps
var derpss = false;
var derped = false;
var csteps
var cstepss = false;
var csteped = false;
var twerks
var twerkss = false;
var twerked = false;
var tCounter = 0;
var backfaces
var backfacess = false;
var backfaceed = false;
var elevators = false;
var elevatored = false;
var pvp
var pvps = false;
var pvped = false;
var time
var timess = false;
var timed = false;
var gmode
var gmodess = false;
var gmoded = false;
var nfall
var nfalls = false;
var nfalled = false;
var cderp
var cderps = false;
var cderped = false;
var swalk
var swalk1 = false;
var swalk2 = false;
var scaff
var scaff1 = false;
var scaff2 = false;
var air
var air1 = false;
var air2 = false;
var hb
var hb1 = false;
var hb2 = false;
var bhit
var bhit1 = false;
var bhit2 = false;
var tb
var tb1 = false;
var tb2 = false;
var arp
var arp1 = false;
var arp2 = false;
var ab
var ab1 = false;
var ab2 = false;
var js
var js1 = false;
var js2 = false;
var wscaff
var wscaff1 = false;
var wscaff2 = false;
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
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLACK);
bg.setStroke(4, android.graphics.Color.BLACK);
bg.setCornerRadius(2);
var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.WHITE);
xbg.setStroke(4, android.graphics.Color.WHITE);
xbg.setCornerRadius(2);
var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.BLACK);
bg2.setStroke(4, android.graphics.Color.BLUE);
bg2.setCornerRadius(2);
var rpg = new android.graphics.drawable.GradientDrawable();
rpg.setColor(android.graphics.Color.BLACK);
rpg.setStroke(4, android.graphics.Color.RED);
rpg.setCornerRadius(2);
var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.TRANSPARENT);
bg1.setStroke(4, android.graphics.Color.BLACK);
bg1.setCornerRadius(2);
var bg5 = new android.graphics.drawable.GradientDrawable();
bg5.setColor(android.graphics.Color.BLACK);
bg5.setStroke(4, android.graphics.Color.RED);
bg5.setCornerRadius(2);
var bg4 = new android.graphics.drawable.GradientDrawable();
bg4.setColor(android.graphics.Color.TRANSPARENT);
bg4.setStroke(4, android.graphics.Color.CYAN);
bg4.setCornerRadius(2);
var DKGRAY = new android.graphics.drawable.GradientDrawable();
DKGRAY.setColor(android.graphics.Color.BLACK);
DKGRAY.setStroke(4, android.graphics.Color.RED);
DKGRAY.setCornerRadius(2);
var bg8 = new android.graphics.drawable.GradientDrawable();
bg8.setColor(android.graphics.Color.TRANSPARENT);
bg8.setStroke(4, android.graphics.Color.CYAN);
bg8.setCornerRadius(2);
var GUI;
var GUIe
var menu;
var exitUI;
var VERSION = "V5";
var NAME = "FearLess";
var DEVELOPERS = "ItzMax/Dsfg12/ClashHack/CryPhonz";
var cBtn = "FearLess"

function dip2px(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function showMenuBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn = new Button(ctx);
                menuBtn.setText(cBtn);
                menuBtn.setTextColor(android.graphics.Color.BLUE);
                menuBtn.setBackground(bg);
                menuBtn.getBackground().setAlpha(100);
                menuBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        mainMenu();
                        exit();
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                }));
                layout.addView(menuBtn);
                GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 345, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showElevatorBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var elevatorUpBtn = new Button(ctx);
                elevatorUpBtn.setText("Up");
                elevatorUpBtn.setTextColor(Color.rgb(260, 260, 260));
                elevatorUpBtn.setBackground(bg);
                elevatorUpBtn.setPadding(10, 10, 10, 10);
                elevatorUpBtn.getBackground().setAlpha(150);
                elevatorUpBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0);
                    }
                }));
                layout.addView(elevatorUpBtn);
                var elevatorDownBtn = new Button(ctx);
                elevatorDownBtn.setText("Down");
                elevatorDownBtn.setTextColor(Color.rgb(260, 260, 260));
                elevatorDownBtn.setBackground(bg);
                elevatorDownBtn.setPadding(10, 10, 10, 10);
                elevatorDownBtn.getBackground().setAlpha(150);
                elevatorDownBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ());
                    }
                }));
                layout.addView(elevatorDownBtn);
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}
showMenuBtn();

function mainMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayout = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout.setBackground(bg);
                menuLayout.getBackground().setAlpha(100);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var name = new TextView(ctx);
                name.setTextSize(20);
                name.setText(NAME + " " + VERSION);
                name.setTextColor(android.graphics.Color.RED);
                name.setGravity(Gravity.CENTER);
                menuLayout.addView(name);
                var scrollText = new android.widget.TextView(ctx);
                scrollText.setText("FearLess V5 Hacked Client FearLess V5 Hacked Client");
                scrollText.setTextSize(18);
                scrollText.setTextColor(android.graphics.Color.RED);
                scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY));
                scrollText.getBackground().setAlpha(150);
                scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                scrollText.setMarqueeRepeatLimit(-1);
                scrollText.setSingleLine();
                scrollText.setHorizontallyScrolling(true);
                scrollText.setSelected(true);
                menuLayout.addView(scrollText);
                var category1Btn = new Button(ctx);
                category1Btn.setText("Combat");
                category1Btn.setTextColor(Color.RED);
                category1Btn.setBackground(bg5);
                category1Btn.getBackground().setAlpha(150);
                category1Btn.setGravity(Gravity.CENTER);
                category1Btn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        category1Menu();
                        if (menu != null && menu.isShowing()) {
                            menu.dismiss();
                        }
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                }));
                menuLayout.addView(category1Btn);

                function category1Menu() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var menuLayout = new LinearLayout(ctx);
                                var menuScroll = new ScrollView(ctx);
                                var menuLayout1 = new LinearLayout(ctx);
                                menuLayout.setOrientation(1);
                                menuLayout.setBackground(bg4);
                                menuLayout.getBackground().setAlpha(150);
                                menuLayout1.setOrientation(1);
                                menuScroll.addView(menuLayout);
                                menuLayout1.addView(menuScroll);
                                var category1t = new TextView(ctx);
                                category1t.setTextSize(20);
                                category1t.setText("Combat");
                                category1t.setTextColor(android.graphics.Color.RED);
                                category1t.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                                category1t.getBackground().setAlpha(150);
                                category1t.setGravity(Gravity.CENTER);
                                menuLayout.addView(category1t);
                                var space = new TextView(ctx);
                                space.setTextSize(20);
                                space.setText("            ");
                                space.setGravity(Gravity.CENTER);
                                menuLayout.addView(space);
                                var aim = new android.widget.Switch(ctx);
                                var aimbots = new Switch(ctx);
                                aimbots.setText("AimAura");
                                aimbots.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                aimbots.setPadding(10, 3, 3, 3);
                                aimbots.setTextSize(15);
                                aimbots.setChecked(aimboted);
                                aimbots.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!aimboted) {
                                            aimbotss = true;
                                            aimboted = true;
                                            print("On")
                                        } else {
                                            aimbotss = false;
                                            aimboted = false;
                                            print("Off")
                                        }
                                        aimbots.setChecked(aimboted);
                                    }
                                }));
                                menuLayout.addView(aimbots);
                                var pvp = new Switch(ctx);
                                pvp.setText("Better Hit");
                                pvp.setTextColor(android.graphics.Color.BLACK);
                                pvp.setPadding(10, 3, 3, 3);
                                pvp.setTextSize(15);
                                pvp.setChecked(pvped);
                                pvp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!pvped) {
                                            ModPE.setFov(120);
                                            pvps = true;
                                            pvped = true;
                                        } else {
                                            ModPE.resetFov();
                                            pvps = false;
                                            pvped = false;
                                        }
                                        pvp.setChecked(pvped);
                                    }
                                }));
                                menuLayout.addView(pvp);
                                var air = new Switch(ctx);
                                air.setText("Air Aura");
                                air.setTextColor(android.graphics.Color.BLACK);
                                air.setPadding(10, 3, 3, 3);
                                air.setTextSize(15);
                                air.setChecked(air2);
                                air.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!air2) {
                                            air1 = true;
                                            air2 = true;
                                        } else {
                                            air1 = false;
                                            air2 = false;
                                        }
                                        air.setChecked(air2);
                                    }
                                }));
                                menuLayout.addView(air);
                                var hb = new Switch(ctx);
                                hb.setText("HitBox (Better)");
                                hb.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                hb.setPadding(10, 3, 3, 3);
                                hb.setTextSize(15);
                                hb.setChecked(hb2);
                                hb.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!hb2) {
                                            hb1 = true;
                                            hb2 = true;
                                        } else {
                                            hb1 = false;
                                            hb2 = false;
                                        }
                                        hb.setChecked(hb2);
                                    }
                                }));
                                menuLayout.addView(hb);
                                var reachs = new Switch(ctx);
                                reachs.setText("SuperManMode");
                                reachs.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                reachs.setPadding(10, 3, 3, 3);
                                reachs.setTextSize(15);
                                reachs.setChecked(reached);
                                reachs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!reached) {
                                            reachss = true;
                                            reached = true;
                                            print("On")
                                            Level.setGameMode(0);
                                            Player.setCanFly(false);
                                            ModPE.setFov(100);
                                            ModPE.setGameSpeed(40);
                                        } else {
                                            reachss = false;
                                            reached = false;
                                            print("Off")
                                            Level.setGameMode(0);
                                            ModPE.resetFov();
                                            ModPE.setGameSpeed(20);
                                        }
                                        reachs.setChecked(reached);
                                    }
                                }));
                                menuLayout.addView(reachs);
                                var spam = new Switch(ctx);
                                spam.setText("Reach");
                                spam.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                spam.setPadding(10, 3, 3, 3);
                                spam.setTextSize(15);
                                spam.setChecked(spammed);
                                spam.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!spammed) {
                                            spamming = true;
                                            spammed = true;
                                            Level.setGameMode(1);
                                            Player.setCanFly(false);
                                            print("On")
                                        } else {
                                            spamming = false;
                                            spammed = false;
                                            Level.setGameMode(0);
                                            print("Off")
                                        }
                                        spam.setChecked(spammed);
                                    }
                                }));
                                menuLayout.addView(spam);
                                var snipers = new Switch(ctx);
                                snipers.setText("BowAimBot");
                                snipers.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                snipers.setPadding(10, 3, 3, 3);
                                snipers.setTextSize(15);
                                snipers.setChecked(snipered);
                                snipers.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!snipered) {
                                            sniperss = true;
                                            sniperhh = false;
                                            snipered = true;
                                            print("On")
                                        } else {
                                            sniperss = false;
                                            sniperhh = true;
                                            snipered = false;
                                            print("Off")
                                        }
                                        snipers.setChecked(snipered);
                                    }
                                }));
                                menuLayout.addView(snipers);
                                var grapples = new Switch(ctx);
                                grapples.setText("HitTp");
                                grapples.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                grapples.setPadding(10, 3, 3, 3);
                                grapples.setTextSize(15);
                                grapples.setChecked(grappleed);
                                grapples.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!grappleed) {
                                            grappless = true;
                                            grappleed = true;
                                            print("On")
                                        } else {
                                            grappless = false;
                                            grappleed = false;
                                            print("Off")
                                        }
                                        grapples.setChecked(grappleed);
                                    }
                                }));
                                menuLayout.addView(grapples);
                                var xCategory1Btn = new android.widget.Button(ctx);
                                xCategory1Btn.setText("Exit Combat");
                                xCategory1Btn.setTextColor(android.graphics.Color.RED);
                                xCategory1Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                                xCategory1Btn.setWidth(70);
                                xCategory1Btn.setHeight(50);
                                xCategory1Btn.setTextSize(12);
                                xCategory1Btn.setGravity(android.view.Gravity.CENTER);
                                xCategory1Btn.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        menu1.dismiss();
                                        mainMenu();
                                    }
                                }));
                                menuLayout.addView(xCategory1Btn);
                                menu1 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                                menu1.setAnimationStyle(android.R.style.Animation_InputMethod);
                                menu1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(ctx, "Template Error: " + error, 1).show();
                            }
                        }
                    }));
                }
                var category2Btn = new Button(ctx);
                category2Btn.setText("Motion");
                category2Btn.setTextColor(Color.RED);
                category2Btn.setBackground(bg5);
                category2Btn.getBackground().setAlpha(150);
                category2Btn.setGravity(Gravity.CENTER);
                category2Btn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        category2Menu();
                        if (menu != null && menu.isShowing()) {
                            menu.dismiss();
                        }
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                }));
                menuLayout.addView(category2Btn);

                function category2Menu() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var menuLayout = new LinearLayout(ctx);
                                var menuScroll = new ScrollView(ctx);
                                var menuLayout2 = new LinearLayout(ctx);
                                menuLayout.setOrientation(1);
                                menuLayout.setBackground(bg4);
                                menuLayout.getBackground().setAlpha(150);
                                menuLayout2.setOrientation(1);
                                menuScroll.addView(menuLayout);
                                menuLayout2.addView(menuScroll);
                                var category2t = new TextView(ctx);
                                category2t.setTextSize(20);
                                category2t.setText("Motion");
                                category2t.setTextColor(android.graphics.Color.RED);
                                category2t.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                category2t.getBackground().setAlpha(150);
                                category2t.setGravity(Gravity.CENTER);
                                menuLayout.addView(category2t);
                                var space = new TextView(ctx);
                                space.setTextSize(20);
                                space.setText("            ");
                                space.setGravity(Gravity.CENTER);
                                menuLayout.addView(space);
                                var backfaces = new Switch(ctx);
                                backfaces.setText("Derp");
                                backfaces.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                backfaces.setPadding(10, 3, 3, 3);
                                backfaces.setTextSize(15);
                                backfaces.setChecked(backfaceed);
                                backfaces.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!backfaceed) {
                                            backfacess = true;
                                            backfaceed = true;
                                            print("On")
                                        } else {
                                            backfacess = false;
                                            backfaceed = false;
                                            print("Off")
                                        }
                                        backfaces.setChecked(backfaceed);
                                    }
                                }));
                                menuLayout.addView(backfaces);
                                var cderp = new Switch(ctx);
                                cderp.setText("Spin Derp");
                                cderp.setTextColor(android.graphics.Color.BLACK);
                                cderp.setPadding(10, 3, 3, 3);
                                cderp.setTextSize(15);
                                cderp.setChecked(cderped);
                                cderp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!cderped) {
                                            cderps = true;
                                            cderped = true;
                                        } else {
                                            cderps = false;
                                            cderped = false;
                                        }
                                        cderp.setChecked(cderped);
                                    }
                                }));
                                menuLayout.addView(cderp);
                                var twerks = new Switch(ctx);
                                twerks.setText("Twerk");
                                twerks.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                twerks.setPadding(10, 3, 3, 3);
                                twerks.setTextSize(15);
                                twerks.setChecked(twerked);
                                twerks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!twerked) {
                                            twerkss = true;
                                            twerked = true;
                                            print("On")
                                        } else {
                                            twerkss = false;
                                            twerked = false;
                                            print("Off")
                                        }
                                        twerks.setChecked(twerked);
                                    }
                                }));
                                menuLayout.addView(twerks);
                                var autowalks = new Switch(ctx);
                                autowalks.setText("AutoWalk");
                                autowalks.setTextColor(android.graphics.Color.BLACK);
                                autowalks.setPadding(10, 3, 3, 3);
                                autowalks.setTextSize(15);
                                autowalks.setChecked(autowalked);
                                autowalks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!autowalked) {
                                            autowalkss = true;
                                            autowalked = true;
                                            print("On")
                                        } else {
                                            autowalkss = false;
                                            autowalked = false;
                                            print("Off")
                                        }
                                        autowalks.setChecked(autowalked);
                                    }
                                }));
                                menuLayout.addView(autowalks);
                                var criticalss = new Switch(ctx);
                                criticalss.setText("Speed");
                                criticalss.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                criticalss.setPadding(10, 3, 3, 3);
                                criticalss.setTextSize(15);
                                criticalss.setChecked(criticalsed);
                                criticalss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!criticalsed) {
                                            criticales = true;
                                            criticalsed = true;
                                            print("On")
                                            ModPE.setGameSpeed(40);
                                        } else {
                                            criticales = false;
                                            criticalsed = false;
                                            print("Off")
                                            ModPE.setGameSpeed(20);
                                        }
                                        criticalss.setChecked(criticalsed);
                                    }
                                }));
                                menuLayout.addView(criticalss);
                                var taptps = new Switch(ctx);
                                taptps.setText("TapTP");
                                taptps.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                taptps.setPadding(10, 3, 3, 3);
                                taptps.setTextSize(15);
                                taptps.setChecked(taptped);
                                taptps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!taptped) {
                                            taptpss = true;
                                            taptped = true;
                                            print("On")
                                        } else {
                                            taptpss = false;
                                            taptped = false;
                                            print("Off")
                                        }
                                        taptps.setChecked(taptped);
                                    }
                                }));
                                menuLayout.addView(taptps);
                                var tapjumps = new Switch(ctx);
                                tapjumps.setText("TapTower");
                                tapjumps.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                tapjumps.setPadding(10, 3, 3, 3);
                                tapjumps.setTextSize(15);
                                tapjumps.setChecked(tapjumped);
                                tapjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!tapjumped) {
                                            tapjumpss = true;
                                            tapjumped = true;
                                        } else {
                                            tapjumpss = false;
                                            tapjumped = false;
                                        }
                                        tapjumps.setChecked(tapjumped);
                                    }
                                }));
                                menuLayout.addView(tapjumps);
                                var steps = new Switch(ctx);
                                steps.setText("Step");
                                steps.setTextColor(android.graphics.Color.BLACK);
                                steps.setPadding(10, 3, 3, 3);
                                steps.setTextSize(16);
                                steps.setChecked(steped);
                                steps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!steped) {
                                            stepss = true;
                                            steped = true;
                                            print("On")
                                        } else {
                                            stepss = false;
                                            steped = false;
                                            print("Off")
                                        }
                                        steps.setChecked(steped);
                                    }
                                }));
                                menuLayout.addView(steps);
                                var js = new Switch(ctx);
                                js.setText("Dolphin");
                                js.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                js.setPadding(10, 3, 3, 3);
                                js.setTextSize(15);
                                js.setChecked(js2);
                                js.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!js2) {
                                            js1 = true;
                                            js2 = true;
                                        } else {
                                            js1 = false;
                                            js2 = false;
                                        }
                                        js.setChecked(js2);
                                    }
                                }));
                                menuLayout.addView(js);
                                var ndglides = new Switch(ctx);
                                ndglides.setText("NoDownGlide");
                                ndglides.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                ndglides.setPadding(10, 3, 3, 3);
                                ndglides.setTextSize(15);
                                ndglides.setChecked(ndglideed);
                                ndglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!ndglideed) {
                                            ndglidess = true;
                                            ndglideed = true;
                                            print("On")
                                        } else {
                                            ndglidess = false;
                                            ndglideed = false;
                                            print("Off")
                                        }
                                        ndglides.setChecked(ndglideed);
                                    }
                                }));
                                menuLayout.addView(ndglides);
                                var glides1 = new Switch(ctx);
                                glides1.setText("Glide");
                                glides1.setTextColor(android.graphics.Color.BLACK);
                                glides1.setPadding(10, 3, 3, 3);
                                glides1.setTextSize(16);
                                glides1.setChecked(glideed1);
                                glides1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!glideed1) {
                                            glidess1 = true;
                                            glideed1 = true;
                                        } else {
                                            glidess1 = false;
                                            glideed1 = false;
                                        }
                                        glides1.setChecked(glideed1);
                                    }
                                }));
                                menuLayout.addView(glides1);
                                var antigravitys = new Switch(ctx);
                                antigravitys.setText("UpGlide");
                                antigravitys.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                antigravitys.setPadding(10, 3, 3, 3);
                                antigravitys.setTextSize(15);
                                antigravitys.setChecked(antigravityed);
                                antigravitys.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!antigravityed) {
                                            antigravityss = true;
                                            antigravityed = true;
                                        } else {
                                            antigravityss = false;
                                            antigravityed = false;
                                        }
                                        antigravitys.setChecked(antigravityed);
                                    }
                                }));
                                menuLayout.addView(antigravitys);
                                var xCategory2Btn = new android.widget.Button(ctx);
                                xCategory2Btn.setText("Exit Motion");
                                xCategory2Btn.setTextColor(android.graphics.Color.RED);
                                xCategory2Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                                xCategory2Btn.setWidth(70);
                                xCategory2Btn.setHeight(50);
                                xCategory2Btn.setTextSize(12);
                                xCategory2Btn.setGravity(android.view.Gravity.CENTER);
                                xCategory2Btn.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        menu2.dismiss();
                                        mainMenu();
                                    }
                                }));
                                menuLayout.addView(xCategory2Btn);
                                menu2 = new PopupWindow(menuLayout2, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                                menu2.setAnimationStyle(android.R.style.Animation_InputMethod);
                                menu2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(ctx, "Template Error: " + error, 1).show();
                            }
                        }
                    }));
                }
                var category3Btn = new Button(ctx);
                category3Btn.setText("Player");
                category3Btn.setTextColor(Color.RED);
                category3Btn.setBackground(bg5);
                category3Btn.getBackground().setAlpha(150);
                category3Btn.setGravity(Gravity.CENTER);
                category3Btn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        category3Menu();
                        if (menu != null && menu.isShowing()) {
                            menu.dismiss();
                        }
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                }));
                menuLayout.addView(category3Btn);

                function category3Menu() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var menuLayout = new LinearLayout(ctx);
                                var menuScroll = new ScrollView(ctx);
                                var menuLayout3 = new LinearLayout(ctx);
                                menuLayout.setOrientation(1);
                                menuLayout.setBackground(bg4);
                                menuLayout.getBackground().setAlpha(150);
                                menuLayout3.setOrientation(1);
                                menuScroll.addView(menuLayout);
                                menuLayout3.addView(menuScroll);
                                var category3t = new TextView(ctx);
                                category3t.setTextSize(20);
                                category3t.setText("Player");
                                category3t.setTextColor(android.graphics.Color.RED);
                                category3t.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                category3t.getBackground().setAlpha(150);
                                category3t.setGravity(Gravity.CENTER);
                                menuLayout.addView(category3t);
                                var space = new TextView(ctx);
                                space.setTextSize(20);
                                space.setText("            ");
                                space.setGravity(Gravity.CENTER);
                                menuLayout.addView(space);
                                var elevators = new Switch(ctx);
                                elevators.setText("Elevator (When Off Crash)");
                                elevators.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                elevators.setPadding(10, 3, 3, 3);
                                elevators.setTextSize(15);
                                elevators.setChecked(elevatored);
                                elevators.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!elevatored) {
                                            showElevatorBtn();
                                            elevatored = true;
                                        } else {
                                            GUI.dismiss();
                                            elevatored = false;
                                        }
                                        elevators.setChecked(elevatored);
                                    }
                                }));
                                menuLayout.addView(elevators);
                                var bhit = new Switch(ctx);
                                bhit.setText("Stop Jump");
                                bhit.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                bhit.setPadding(10, 3, 3, 3);
                                bhit.setTextSize(15);
                                bhit.setChecked(bhit2);
                                bhit.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bhit2) {
                                            bhit1 = true;
                                            bhit2 = true;
                                        } else {
                                            bhit1 = false;
                                            bhit2 = false;
                                        }
                                        bhit.setChecked(bhit2);
                                    }
                                }));
                                menuLayout.addView(bhit);
                                var ab = new Switch(ctx);
                                ab.setText("Fast Hop");
                                ab.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                ab.setPadding(10, 3, 3, 3);
                                ab.setTextSize(15);
                                ab.setChecked(ab2);
                                ab.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!ab2) {
                                            ab1 = true;
                                            ab2 = true;
                                        } else {
                                            ModPE.setGameSpeed(20)
                                            ab1 = false;
                                            ab2 = false;
                                        }
                                        ab.setChecked(ab2);
                                    }
                                }));
                                menuLayout.addView(ab);
                                var bhop = new Switch(ctx);
                                bhop.setText("BunnyHop");
                                bhop.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                bhop.setPadding(10, 3, 3, 3);
                                bhop.setTextSize(15);
                                bhop.setChecked(bhoped);
                                bhop.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!bhoped) {
                                            bhopl = true;
                                            bhoped = true;
                                            print("On")
                                        } else {
                                            bhopl = false;
                                            bhoped = false;
                                            print("Off")
                                        }
                                        bhop.setChecked(bhoped);
                                    }
                                }));
                                menuLayout.addView(bhop);
                                var wscaff = new Switch(ctx);
                                wscaff.setText("Walk Scaffold");
                                wscaff.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                wscaff.setPadding(10, 3, 3, 3);
                                wscaff.setTextSize(15);
                                wscaff.setChecked(wscaff2);
                                wscaff.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!wscaff2) {
                                            wscaff1 = true;
                                            wscaff2 = true;
                                        } else {
                                            wscaff1 = false;
                                            wscaff2 = false;
                                        }
                                        wscaff.setChecked(wscaff2);
                                    }
                                }));
                                menuLayout.addView(wscaff);
                                var scaff = new Switch(ctx);
                                scaff.setText("Scaffold");
                                scaff.setTextColor(android.graphics.Color.BLACK);
                                scaff.setPadding(10, 3, 3, 3);
                                scaff.setTextSize(16);
                                scaff.setChecked(scaff2);
                                scaff.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!scaff2) {
                                            scaff1 = true;
                                            scaff2 = true;
                                        } else {
                                            scaff1 = false;
                                            scaff2 = false;
                                        }
                                        scaff.setChecked(scaff2);
                                    }
                                }));
                                menuLayout.addView(scaff);
                                var arp = new Switch(ctx);
                                arp.setText("ABoost");
                                arp.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                arp.setPadding(10, 3, 3, 3);
                                arp.setTextSize(15);
                                arp.setChecked(arp2);
                                arp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!arp2) {
                                            arp1 = true;
                                            arp2 = true;
                                            print("On")
                                        } else {
                                            arp1 = false;
                                            arp2 = false;
                                            print("Off")
                                        }
                                        arp.setChecked(arp2);
                                    }
                                }));
                                menuLayout.addView(arp);
                                var swalk = new Switch(ctx);
                                swalk.setText("Safe Walk");
                                swalk.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                swalk.setPadding(10, 3, 3, 3);
                                swalk.setTextSize(15);
                                swalk.setChecked(swalk2);
                                swalk.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!swalk2) {
                                            swalk1 = true;
                                            swalk2 = true;
                                            print("On")
                                        } else {
                                            swalk1 = false;
                                            swalk2 = false;
                                            print("Off")
                                        }
                                        swalk.setChecked(swalk2);
                                    }
                                }));
                                menuLayout.addView(swalk);
                                var nfall = new Switch(ctx);
                                nfall.setText("No Fall");
                                nfall.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                nfall.setPadding(10, 3, 3, 3);
                                nfall.setTextSize(15);
                                nfall.setChecked(nfalled);
                                nfall.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!nfalled) {
                                            nfalls = true;
                                            nfalled = true;
                                        } else {
                                            nfalls = false;
                                            nfalled = false;
                                        }
                                        nfall.setChecked(nfalled);
                                    }
                                }));
                                menuLayout.addView(nfall);
                                var lhealths = new Switch(ctx);
                                lhealths.setText("LiveHeath");
                                lhealths.setTextColor(android.graphics.Color.BLACK);
                                lhealths.setPadding(10, 3, 3, 3);
                                lhealths.setTextSize(15);
                                lhealths.setChecked(lhealthed);
                                lhealths.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!lhealthed) {
                                            lhealthss = true;
                                            lhealthed = true;
                                        } else {
                                            lhealthss = false;
                                            lhealthed = false;
                                        }
                                        lhealths.setChecked(lhealthed);
                                    }
                                }));
                                menuLayout.addView(lhealths);
                                var lcords = new Switch(ctx);
                                lcords.setText("LiveCords");
                                lcords.setTextColor(android.graphics.Color.BLACK);
                                lcords.setPadding(10, 3, 3, 3);
                                lcords.setTextSize(15);
                                lcords.setChecked(lcorded);
                                lcords.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!lcorded) {
                                            lcordss = true;
                                            lcorded = true;
                                        } else {
                                            lcordss = false;
                                            lcorded = false;
                                        }
                                        lcords.setChecked(lcorded);
                                    }
                                }));
                                menuLayout.addView(lcords);
                                var xCategory3Btn = new android.widget.Button(ctx);
                                xCategory3Btn.setText("Exit Player");
                                xCategory3Btn.setTextColor(android.graphics.Color.RED);
                                xCategory3Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                                xCategory3Btn.setWidth(70);
                                xCategory3Btn.setHeight(50);
                                xCategory3Btn.setTextSize(12);
                                xCategory3Btn.setGravity(android.view.Gravity.CENTER);
                                xCategory3Btn.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        menu3.dismiss();
                                        mainMenu();
                                    }
                                }));
                                menuLayout.addView(xCategory3Btn);
                                menu3 = new PopupWindow(menuLayout3, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                                menu3.setAnimationStyle(android.R.style.Animation_InputMethod);
                                menu3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(ctx, "Template Error: " + error, 1).show();
                            }
                        }
                    }));
                }
                var category4Btn = new Button(ctx);
                category4Btn.setText("World");
                category4Btn.setTextColor(Color.RED);
                category4Btn.setBackground(bg5);
                category4Btn.getBackground().setAlpha(150);
                category4Btn.setGravity(Gravity.CENTER);
                category4Btn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        category4Menu();
                        if (menu != null && menu.isShowing()) {
                            menu.dismiss();
                        }
                        if (GUI != null && GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                }));
                menuLayout.addView(category4Btn);

                function category4Menu() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var menuLayout = new LinearLayout(ctx);
                                var menuScroll = new ScrollView(ctx);
                                var menuLayout4 = new LinearLayout(ctx);
                                menuLayout.setOrientation(1);
                                menuLayout.setBackground(bg4);
                                menuLayout.getBackground().setAlpha(150);
                                menuLayout4.setOrientation(1);
                                menuScroll.addView(menuLayout);
                                menuLayout4.addView(menuScroll);
                                var category4t = new TextView(ctx);
                                category4t.setTextSize(20);
                                category4t.setText("World");
                                category4t.setTextColor(android.graphics.Color.RED);
                                category4t.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                category4t.getBackground().setAlpha(150);
                                category4t.setGravity(Gravity.CENTER);
                                menuLayout.addView(category4t);
                                var space = new TextView(ctx);
                                space.setTextSize(20);
                                space.setText("            ");
                                space.setGravity(Gravity.CENTER);
                                menuLayout.addView(space);
                                var time = new Switch(ctx);
                                time.setText("Change Time");
                                time.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                time.setPadding(10, 3, 3, 3);
                                time.setTextSize(15);
                                time.setChecked(timed);
                                time.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!timed) {
                                            Level.setTime(15000)
                                            timess = true;
                                            timed = true;
                                        } else {
                                            Level.setTime(0)
                                            timess = false;
                                            timed = false;
                                        }
                                        time.setChecked(timed);
                                    }
                                }));
                                menuLayout.addView(time);
                                var gmode = new Switch(ctx);
                                gmode.setText("GameMode");
                                gmode.setTextColor(android.graphics.Color.rgb(260, 260, 260));
                                gmode.setPadding(10, 3, 3, 3);
                                gmode.setTextSize(15);
                                gmode.setChecked(gmoded);
                                gmode.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                    onCheckedChanged: function() {
                                        if (!gmoded) {
                                            Level.setGameMode(1)
                                            gmodess = true;
                                            gmoded = true;
                                        } else {
                                            Level.setGameMode(0)
                                            gmodess = false;
                                            gmoded = false;
                                        }
                                        gmode.setChecked(gmoded);
                                    }
                                }));
                                menuLayout.addView(gmode);
                                var xCategory4Btn = new android.widget.Button(ctx);
                                xCategory4Btn.setText("Exit World");
                                xCategory4Btn.setTextColor(android.graphics.Color.RED);
                                xCategory4Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                                xCategory4Btn.setWidth(70);
                                xCategory4Btn.setHeight(50);
                                xCategory4Btn.setTextSize(12);
                                xCategory4Btn.setGravity(android.view.Gravity.CENTER);
                                xCategory4Btn.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        menu4.dismiss();
                                        mainMenu();
                                    }
                                }));
                                menuLayout.addView(xCategory4Btn);
                                menu4 = new PopupWindow(menuLayout4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                                menu4.setAnimationStyle(android.R.style.Animation_InputMethod);
                                menu4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(ctx, "Template Error: " + error, 1).show();
                            }
                        }
                    }));
                }
                var button = new android.widget.Button(ctx);
                button.setText('Devs');
                button.setTextColor(android.graphics.Color.RED);
                button.setBackground(bg5);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clientMessage("§8[§bMainDev§8] §bItzMax")
                        clientMessage("§8[§aCoDev§8] §aDsfg12")
                        clientMessage("§8[§4Dev§8] §4ClashHack")
                        clientMessage("§8[§dDev§8] §dCryPhonz MCPE")
                    }
                }));
                menuLayout.addView(button);
                var button = new android.widget.Button(ctx);
                button.setText('Exit FearLess');
                button.setTextColor(android.graphics.Color.RED);
                button.setBackground(bg5);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu.dismiss();
                    }
                }));
                menuLayout.addView(button);
                menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
            } catch (error) {
                Toast.makeText(ctx, "Error: " + error, 1).show();
            }
        }
    }));
}

function exit() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var xLayout = new LinearLayout(ctx);
                var xButton = new Button(ctx);
                xButton.setText('X');
                xButton.setTextColor(Color.RED);
                xButton.setTextSize(15);
                xButton.setBackground(rpg);
                xButton.getBackground().setAlpha(150);
                xButton.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        exitUI.dismiss();
                        menu.dismiss();
                        showMenuBtn();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestclose", 30, 25);
                    }
                }));
                xLayout.addView(xButton);
                exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show();
            }
        }
    }));
}

function modTick() {
    var px = Player.getX();
    var py = Player.getY();
    var pz = Player.getZ();
    var x = Player.getX();
    var y = Player.getY();
    var z = Player.getZ();
}
var players = Server.getAllPlayers();
var small = 7;
var ent = null;
for (var i = 0; i < players.length; i++) {
    var x = Entity.getX(players[i]) - getPlayerX();
    var y = Entity.getY(players[i]) - getPlayerY();
    var z = Entity.getZ(players[i]) - getPlayerZ();
    var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
        small = dist;
        ent = players[i];
    }
}
if (ent != null) {
    py = getPlayerY / Math.sqrt(x * x + y * y + z * z);
    var yaw = (180 / Math.PI) * Math.atan2(px, pz);
    var pitch = Math.asin(py) * (180 / Math.PI);
    yw = -yw;
    pt = -pt;
    setRot(getPlayerEnt(), yw, pt);
}

function getNearestEntity(maxrange) {
    var mobs = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = maxrange;
    var ent = null;
    for (var i = 0; i < mobs.length; i++) {
        var x = Entity.getX(mobs[i]) - getPlayerX();
        var y = Entity.getY(mobs[i]) - getPlayerY();
        var z = Entity.getZ(mobs[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
            small = dist;
            ent = mobs[i];
        }
    }
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i];
        }
    }
    return ent;
}

function crosshairAimAt(ent, pos) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && pos instanceof Array) {
            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
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
}

function modTick() {
    if (aimbot) {
        var ent = getNearestEntity(7)
        if (ent != null) crosshairAimAt(ent);
    }
}

function toDirectionalVector(vector, yaw, pitch) {
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function attackHook(att, vic) {
    if (att == Player.getEntity() && grappless && Entity.getHealth(vic) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(vic), Entity.getY(vic) + 1, Entity.getZ(vic));
    }
}

function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
    if (tapjumpss) {
        setVelY(getPlayerEnt(), 0.4);
    }
    if (taptpss && getTile(x, y + 1, z) == 0 && getTile(x, y + 2, z) == 0) {
        Entity.setPosition(Player.getEntity(), x + 0.5, y + 2.63, z + 0.5);
    }
}

function getNearestEntity(maxrange) {
    var mobs = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = maxrange;
    var ent = null;
    for (var i = 0; i < mobs.length; i++) {
        var x = Entity.getX(mobs[i]) - getPlayerX();
        var y = Entity.getY(mobs[i]) - getPlayerY();
        var z = Entity.getZ(mobs[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
            small = dist;
            ent = mobs[i];
        }
    }
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i];
        }
    }
    return ent;
}

function crosshairAimAt(ent, pos) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && pos instanceof Array) {
            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
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
}

function bowAimAt(ent) {
    var velocity = 1;
    var posX = Entity.getX(ent) - Player.getX();
    var posY = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
    var posZ = Entity.getZ(ent) - Player.getZ();
    var yaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
    var y2 = Math.sqrt(posX * posX + posZ * posZ);
    var g = 0.007;
    var tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
    var pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));
    if (pitch < 89 && pitch > -89) {
        setRot(Player.getEntity(), yaw, pitch);
    }
}

function entityHurtHook(att, vic, hearts) {
    if (antikbss || (vic != p)) {
        return;
        Entity.setImmobile(getPlayerEnt, true);
        this.attackTick = 2;
    }
}

function modTick() {
    if (bhopl) {
        if (Utils.Player.isOnGround()) {
            setVelY(getPlayerEnt(), 0.4)
            setVelY(getPlayerEnt(), 0.4);
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1);
        }
    }
    if (sniperss && getCarriedItem() == 261) {
        var ent = getNearestEntity(55);
        if (ent != null) {
            bowAimAt(ent);
        } else {
            sniperhh = true;
        }
    }
    if (sniperhh) {}
    if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
        if (this.tick > 0) {
            tick--;
        } else {
            Entity.setImmobile(getPlayerEnt(), false);
        } if (this.health > Entity.getHealth(getPlayerEnt())) {
            Entity.setImmobile(getPlayerEnt(), true);
            this.tick = 1;
        }
        this.tick = 0;
        this.health = Entity.getHealth(getPlayerEnt());
    }
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001);
    }
    if (hb1) {
        ent = getNearestEntity(18);
        Entity.setCollisionSize(ent, 18, 18);
    }
    if (aimbotss) {
        var ent = getNearestEntity(6)
        if (ent != null) crosshairAimAt(ent);
    }
}
if (reachss) {
    if (Level.getGameMode() == 0) {
        Level.setGameMode(0);
        Player.setCanFly(false);
        ModPE.setFov(100);
        ModPE.setGameSpeed(40);
        ModPE.resetFov();
        ModPE.setGameSpeed(20);
    }
}
if (reachss) {
    if (Level.getGameMode() == 0) {
        Level.setGameMode(0);
        Player.setCanFly(false);
        ModPE.setFov(100);
        ModPE.setGameSpeed(40);
        ModPE.resetFov();
        ModPE.setGameSpeed(20);
    }
}
if (cspeedss) {
    if (Entity.isSneaking(Player.getEntity()) == true) {
        setVelY(getPlayerEnt(), -100.0);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.7);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.7);
    }
}
if (criticales && critTick < 22) {
    critTick++;
    if (critTick == 13) {
        Entity.setPositionRelative(getPlayerEnt(), 0, 2, 0);
    }
    if (critTick == 12) {
        criticalTick = 12;
        ModPE.setGameSpeed(40);
        ModPE.setGameSpeed(20);
    }
    if (criticalTick > 0) {
        criticalTick--;
        setVelY(getPlayerEnt(), -0.2);
    }
}
if (spamming) {
    Server.sendChat("§4TEST | NUKE ")
    Level.setGameMode(0);
    Level.setGameMode(1);
    Player.setCanFly(false);
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (backfacess) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        if (pitch <= 189) {
                            Entity.setRot(player, yaw, 192)
                        }
                    }
                    if (twerkss) {
                        tCounter++
                        if (tCounter == 6) {
                            Entity.setSneaking(Player.getEntity(), 1);
                        }
                        if (tCounter == 11) {
                            Entity.setSneaking(Player.getEntity(), 0);
                            tCounter = 1;
                        }
                    }
                    if (glidess1) {
                        setVelY(getPlayerEnt(), -0.15);
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.06);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.06);
                    }
                    if (stepss && Utils.Player.isCollidedHorizontally()) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0);
                    }
                    if (autowalkss) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.1 * playerDir[0]);
                        setVelZ(getPlayerEnt(), 0.1 * playerDir[2]);
                    }
                    if (glidess) {
                        setVelY(getPlayerEnt(), -0.25);
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.06);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.06);
                    }
                    if (lhealthss) {
                        ModPE.showTipMessage("\n" + "§aYour Health Is: §4" + Entity.getHealth(getPlayerEnt()));
                    }
                    if (tb1) {
                        ent = getNearestEntity(75);
                        Entity.setCollisionSize(ent, 12, 12);
                    }
                    if (antigravityss) {
                        setVelY(getPlayerEnt(), 0.0600000009);
                    }
                    if (criticaltrailsss == true && Entity.isSneaking(Player.getEntity()) == true) {
                        setVelY(getPlayerEnt(), -0.004)
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
                        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
                        setVelZ(getPlayerEnt(), 0.6 * playerDir[2]);
                    }
                    if (lcordss) {
                        ModPE.showTipMessage("§a> Your Coordinates are:\nx: " + Math.floor(Player.getX()) + " y: " + Math.floor(Player.getY() - 1) + " z: " + Math.floor(Player.getZ()));
                    }
                    if (js1 && Utils.Player.isInWater()) {
                        setVelY(getPlayerEnt(), 0.1);
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.0);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.0);
                    }
                    if (ab1) {
                        if (Utils.Player.isOnGround()) {
                            setVelY(getPlayerEnt(), 0.4)
                            setVelY(getPlayerEnt(), 0.4);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1);
                            ModPE.setGameSpeed(30)
                        }
                    }
                    if (arp1) {
                        if (getTile(getPlayerX(), getPlayerY() - 2.5, getPlayerZ()) == 0) {
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.07);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.07);
                        }
                    }
                    if (swalk1) {
                        Entity.setSneaking(getPlayerEnt(), true);
                    }
                    if (air1) {
                        var ent = getNearestEntity(10);
                        if (ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
                            setVelY(getPlayerEnt(), 0.2);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.7)
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.7)
                        }
                    }
                    if (bhit1) {
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.6);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.6);
                    }
                    if (scaff1) {
                        Entity.setSneaking(getPlayerEnt(), true);
                    }
                    if (pvp) {
                        ModPE.setFov(120)
                    }
                    if (time) {
                        Level.setTime(0)
                    }
                    if (nfall) {
                        if (Utils.Player.isFall()) {
                            setVelY(getPlayerEnt(), -300);
                        }
                    }
                    if (wscaff1) {
                        if (!Player.getCarriedItem() == 0) {
                            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), Player.getCarriedItem(), 0);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.55);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.55);
                        }
                    }
                    if (cderp) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        Entity.setRot(player, yaw - 2, pitch)
                    }
                    if (derpss) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        Entity.setRot(player, yaw + 30, pitch)
                    }
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