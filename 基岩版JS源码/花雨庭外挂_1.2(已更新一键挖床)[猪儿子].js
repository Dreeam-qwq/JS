/*
qq群:820372853
作者qq:2733104006
作者在国际版xbox的id:er zi zhu
作者在网易我的世界的id:猪儿子zez
作者在多玩我的世界盒子的id:猪儿子zez
作者在bilibili的id:猪儿子zez

禁止盗用代码或修改版权
*/
/*猪儿子*/
var MCPE_MOD_LEAVE_GAME_HOOK = false;

var MCPE_LEVEL_DRONE_POINT = {
    x: 0,
    y: 0,
    z: 0
};
var MCPE_MOD_RUNTIME_ENVIRONMENT = "mcpe";
var 床y,
    床1x,
    床1z,
    床2x,
    床2z,
    床3x,
    床3z,
    床4x,
    床4z,
    床5x,
    床5z,
    床6x,
    床6z,
    床7x,
    床7z,
    床8x,
    床8z,
    传床 = 0;

function 重置js() {
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§e版本§61.2§e.欢迎在哔哩哔哩或多玩搜索§6[猪儿子zez]§b(如果你用钱买来这个js的,恭喜你被骗了)');
    床y = 4;
    床1x = 0;
    床1z = 0;
    床2x = 0;
    床2z = 0;
    床3x = 0;
    床3z = 0;
    床4x = 0;
    床4z = 0;
    床5x = 0;
    床5z = 0;
    床6x = 0;
    床6z = 0;
    床7x = 0;
    床7z = 0;
    床8x = 0;
    床8z = 0;
    传床 = 0;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b无');
}

function 停() {
    Entity.setVelX(Player.getEntity(), 0);
    Entity.setVelY(Player.getEntity(), 0);
    Entity.setVelZ(Player.getEntity(), 0);
}


/*进入存档时调用*/
function newLevel(hasLevel) {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "mcpe";
    重置js();
    if (ENABLE_MCPE_GUI && ENABLE_MCPE_GUI === true) {
        MCPE_GUI_INIT();
    }
}
var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function jMwpdijZsASvAiKSieUGqVaRyH() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 1, Player.getZ())
    Player.setFlying(true)

}
MCPE_GUI_buttons.push(['飞', jMwpdijZsASvAiKSieUGqVaRyH]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function YwLINcIXSdPApEkixHUCqtQQQy() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    if ((传床 == 0)) {
        MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e无配置,请先选择配置');
    }
    if ((传床 == 8)) {
        Entity.setPosition(Player.getEntity(), 床8x, 床y, 床8z);
        停();
        传床 = 1;
        MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e一键挖床已结束');
    }
    if ((传床 == 7)) {
        Entity.setPosition(Player.getEntity(), 床7x, 床y, 床7z);
        停();
        传床 = 8;
    }
    if ((传床 == 6)) {
        Entity.setPosition(Player.getEntity(), 床6x, 床y, 床6z);
        传床 = 7;
        停();
    }
    if ((传床 == 5)) {
        Entity.setPosition(Player.getEntity(), 床5x, 床y, 床5z);
        停();
        传床 = 6;
    }
    if ((传床 == 4)) {
        Entity.setPosition(Player.getEntity(), 床4x, 床y, 床4z);
        停();
        传床 = 5;
    }
    if ((传床 == 3)) {
        Entity.setPosition(Player.getEntity(), 床3x, 床y, 床3z);
        停();
        传床 = 4;
    }
    if ((传床 == 2)) {
        Entity.setPosition(Player.getEntity(), 床2x, 床y, 床2z);
        传床 = 3;
        停();
    }
    if ((传床 == 1)) {
        Entity.setPosition(Player.getEntity(), 床1x, 床y, 床1z);
        停();
        传床 = 2;
    }

}
MCPE_GUI_buttons.push(['一键挖床', YwLINcIXSdPApEkixHUCqtQQQy]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function GDSMuHnZCUYSnbSeMqtdCPQXfl() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    床y = 105;
    床1x = -29.5;
    床1z = 62.5;
    床2x = -62.5;
    床2z = 29.5;
    床3x = -62.5;
    床3z = -29.5;
    床4x = -29.5;
    床4z = -62.5;
    床5x = 29.5;
    床5z = -62.5;
    床6x = 62.5;
    床6z = -29.5;
    床7x = 62.5;
    床7z = 29.5;
    床8x = 29.5;
    床8z = 62.5;
    传床 = 1;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b易拉罐');

}
MCPE_GUI_buttons.push(['-易拉罐-', GDSMuHnZCUYSnbSeMqtdCPQXfl]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function sOyaTwqBuiCXhHdsPwNXaTjISS() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    床y = 62;
    床1x = 17.5;
    床1z = 57.5;
    床2x = -17.5;
    床2z = 57.5;
    床3x = -51.5;
    床3z = 57.5;
    床4x = -51.5;
    床4z = -57.5;
    床5x = -17.5;
    床5z = -57.5;
    床6x = 17.5;
    床6z = -57.5;
    床7x = 51.5;
    床7z = -57.5;
    床8x = 51.5;
    床8z = 57.5;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b女巫花园');

}
MCPE_GUI_buttons.push(['-女巫花园-', sOyaTwqBuiCXhHdsPwNXaTjISS]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function VJwIehqOsCUNtijleWoKQnwYMd() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    床y = 92;
    床1x = -43.5;
    床1z = 25.5;
    床2x = -43.5;
    床2z = -25.5;
    床3x = -25.5;
    床3z = -43.5;
    床4x = 25.5;
    床4z = -43.5;
    床5x = 43.5;
    床5z = -25.5;
    床6x = 43.5;
    床6z = 25.5;
    床7x = 25.5;
    床7z = 43.5;
    床8x = -25.5;
    床8z = 43.5;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b石坛');

}
MCPE_GUI_buttons.push(['-石坛-', VJwIehqOsCUNtijleWoKQnwYMd]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function YiqOGXfcGHZzzcJdIllRmJAcTo() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    床y = 65;
    床1x = -55.5;
    床1z = 28.5;
    床2x = -55.5;
    床2z = -28.5;
    床3x = -28.5;
    床3z = -55.5;
    床4x = 28.5;
    床4z = 63.5;
    床5x = 55.5;
    床5z = -28.5;
    床6x = 55.5;
    床6z = 28.5;
    床7x = 28.5;
    床7z = 55.5;
    床8x = 28.5;
    床8z = 56.5;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b石门之择');

}
MCPE_GUI_buttons.push(['-石门之择-', YiqOGXfcGHZzzcJdIllRmJAcTo]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function pEVdsSCQceWArKIjWHQywDRSGv() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    床y = 62;
    床1x = -19.5;
    床1z = 70.5;
    床2x = -70.5;
    床2z = 19.5;
    床3x = -70.5;
    床3z = -19.5;
    床4x = -19.5;
    床4z = -70.5;
    床5x = 19.5;
    床5z = -70.5;
    床6x = 70.5;
    床6z = -19.5;
    床7x = 70.5;
    床7z = 18.5;
    床8x = 19.5;
    床8z = 70.5;
    MCPE_GUI_SHOW_CLIENT_MESSAGE('§l§c[猪儿子]§r§e当前配置:§b海底世界');

}
MCPE_GUI_buttons.push(['-海底世界-', pEVdsSCQceWArKIjWHQywDRSGv]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function OJVyRYmzFcfwpkTIkHRhrBxFko() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    Entity.addEffect(Player.getEntity(), 3, 13333320, 255, false, false);
    Entity.addEffect(Player.getEntity(), 16, 13333320, 1, false, false);

}
MCPE_GUI_buttons.push(['药水', OJVyRYmzFcfwpkTIkHRhrBxFko]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];

function RRWKlnRqKoASlpHVmrOyXsvpQt() {
    MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    重置js();

}
MCPE_GUI_buttons.push(['重置js', RRWKlnRqKoASlpHVmrOyXsvpQt]);

var GUI;
var menu;
var exitUI;

function dip2px(dips) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
var MCPE_GUI_main_menu_btn;

function create_main_btn(ctx) {
    var layout = new android.widget.LinearLayout(ctx);
    layout.setOrientation(1);

    MCPE_GUI_main_menu_btn = new android.widget.Button(ctx);
    MCPE_GUI_main_menu_btn.setText("○猪儿子○");
    MCPE_GUI_main_menu_btn.setBackgroundColor(android.graphics.Color.argb(10, 0, 0, 0));
    MCPE_GUI_main_menu_btn.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg) {
            mainMenu();
            MCPE_GUI_main_menu_btn.setBackgroundColor(android.graphics.Color.TRANSPARENT);
        }
    }));
    layout.addView(MCPE_GUI_main_menu_btn);

    GUI = new android.widget.PopupWindow(layout, dip2px(100), android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

function MCPE_GUI_INIT() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                create_main_btn(ctx);
            } catch (err) {
                print("An error occured: " + err);
            }
        }
    }));
}

function mainMenu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);

                menuScroll.addView(menuLayout);

                var button = new android.widget.Button(ctx);
                button.setText("●猪儿子●️");
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (menu != null) {
                            menu.dismiss();
                            menu = null;
                        }
                        MCPE_GUI_main_menu_btn.setBackgroundColor(android.graphics.Color.argb(10, 0, 0, 0));
                    }
                }));
                menuLayout1.addView(button);
                menuLayout1.addView(menuScroll);

                for (var i = 0; i < MCPE_GUI_buttons.length; i++) {
                    var cust_button = new android.widget.Button(ctx);
                    cust_button.setText(MCPE_GUI_buttons[i][0]);
                    (function(index) {
                        cust_button.setOnClickListener(new android.view.View.OnClickListener({
                            onClick: function(viewarg) {
                                MCPE_GUI_buttons[index][1]();
                            }
                        }));
                    })(i);
                    menuLayout.addView(cust_button);
                }
                menu = new android.widget.PopupWindow(menuLayout1, dip2px(100), ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(-1439088327));
                menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print("An error occured: " + error);
            }
        }
    }));
}

function screenChangeHook(screenName) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (screenName === 'hud_screen' || screenName === 'in_game_play_screen') {
                if (!GUI) {
                    create_main_btn(ctx);
                }
            } else {
                if (GUI != null) {
                    GUI.dismiss();
                    GUI = null;
                }
                if (menu != null) {
                    menu.dismiss();
                    menu = null;
                }
            }
        }
    }));
}

function exit() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var xLayout = new android.widget.LinearLayout(ctx);

                var xButton = new android.widget.Button(ctx);
                xButton.setText("●猪儿子●");
                xButton.setTextColor(android.graphics.Color.WHITE);
                xButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        exitUI.dismiss();
                        menu.dismiss();
                    }
                }));
                xLayout.addView(xButton);

                exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (exception) {
                print(exception);
            }
        }
    }));
}


function MCPE_GUI_SHOW_CLIENT_MESSAGE() {
    var msg_list = [];
    for (var i = 0; i < arguments.length; i++) {
        msg_list.push(arguments[i]);
    }
    clientMessage(msg_list);
}