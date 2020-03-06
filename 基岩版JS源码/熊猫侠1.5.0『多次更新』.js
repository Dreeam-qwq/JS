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
                联机杀手()
            }
        });
        win.setContentView(imageview);
        win.setWidth(100);
        win.setHeight(100);
        win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)))
        win.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 400);
    }
}));


function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}


/*↓对应上面*/
function 联机杀手() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
        var layout = new android.widget.LinearLayout(ctx)
        try {
            var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30));
            menu.setFocusable(true)
            var layout = new android.widget.LinearLayout(ctx)
            layout.setOrientation(1)
            var ve = new android.widget.TextView(ctx)
            ve.setText("熊猫侠     ")
            ve.setTextSize(16)
            layout.addView(ve)

            var ve = new android.widget.TextView(ctx)
            ve.setText("by：爆炸迪莫   ")
            ve.setTextSize(10)
            layout.addView(ve)

            var ve = new android.widget.TextView(ctx)
            ve.setText("Ver：1.5.0  ")
            ve.setTextSize(10)
            layout.addView(ve)

            var vb = new android.widget.Button(ctx)
            vb.setText("飞")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Player.setCanFly(true);
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("不飞")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Player.setCanFly(false);
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("踢出碎梦者")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Server.sendChat("§X0167");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("快速爆♂基岩")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Block.setExplosionResistance(7, 0.05);
                    Block.setDestroyTime(7, 0.05);
                    print("已开启成功，退出游戏即可关闭");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("骂房主")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Server.sendChat("弱智房主死妈!房主傻逼废物鸡巴烂屄玩意！");
                }
            }))
            layout.addView(vb)

            var a8 = new android.widget.Button(ctx)
            a8.setText("自杀")
            a8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Player.setHealth("0");
                }
            }))
            layout.addView(a8)

            var vb = new android.widget.Button(ctx)
            vb.setText("搞基模式")
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
                    print("已为您开启搞基模式");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("十字破坏")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    var x, y, z;
                    x = Player.getX();
                    y = Player.getY();
                    z = Player.getZ();
                    for (var i = 1; i <= 20; i++) {
                        Level.destroyBlock(x, y + 10 - i, z);
                        Level.destroyBlock(x + 1, y + 10 - i, z);
                        Level.destroyBlock(x - 1, y + 10 - i, z);
                        Level.destroyBlock(x, y + 10 - i, z + 1);
                        Level.destroyBlock(x, y + 10 - i, z - 1)
                    }
                    print("已破坏范围内的地图");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("打人燃烧 容易闪退")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    function attackHook(gj, mod) {
                        js = mod
                        if (getCarriedltem == 0) {
                            X = Entity.getx(js);
                            Y = Entity.gety(js);
                            Z = Entity.getz(js);
                            Entity.setFireTicks(js, 20);
                            ptint("§4开启失败");
                        }
                    }
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("添加药剂")
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
                    ModPE.showTipMessage("添加成功");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("踢房主")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Server.sendChat("");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("获取鬼妈屁盒")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Server.sendChat("我是废物小学生！我日了哈士奇！我吃屎没擦嘴！我是死妈废物，我妈烂屄真好吃！");
                }
            }))
            layout.addView(vb)

            var a4 = new android.widget.Button(ctx)
            a4.setText("早上")
            a4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Level.setTime("900");
                }
            }))
            layout.addView(a4)

            var a5 = new android.widget.Button(ctx)
            a5.setText("中午")
            a5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Level.setTime("9000");
                }
            }))
            layout.addView(a5)

            var a6 = new android.widget.Button(ctx)
            a6.setText("晚上")
            a6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Level.setTime("18000");
                }
            }))
            layout.addView(a6)

            var vb = new android.widget.Button(ctx)
            vb.setText("快速爆♂黑曜石")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Block.setExplosionResistance(49, 0.05);
                    Block.setDestroyTime(49, 0.05);
                    print("已开启成功，退出游戏即可关闭");
                }
            }))
            layout.addView(vb)

            var vb = new android.widget.Button(ctx)
            vb.setText("设置重生点")
            vb.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(v) {
                    Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
                    print("已将重生点设置到你的脚下")
                }
            }))
            layout.addView(vb)

            //感谢小夏日君
            var vb = new android.widget.Button(ctx)
            vb.setText("开枪")
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
                                                            button.setText("ὒb񚰢);
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){

X = -Math.sin(java.lang.Math.toRadians(getYaw())) * Math.cos(java.lang.Math.toRadians(getPitch()));
Y = -Math.sin(java.lang.Math.toRadians(getPitch()));
Z = Math.cos(java.lang.Math.toRadians(getYaw())) * Math.cos(java.lang.Math.toRadians(getPitch()));
bullet = Level.spawnMob(Player.getX()+X*2.5,Player.getY()+Y*2.5,Player.getZ()+Z*2.5,80);
setVelX(bullet,X*1000);
setVelY(bullet,Y*1000);
setVelZ(bullet,Z*1000);
}});

//位置④
layout.addView(button);
//位置⑤
win.setContentView(layout);
win.setWidth(100);
win.setHeight(200);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,16,16)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,260,260);
}}));


}}))
layout.addView(vb)

//感谢小夏日君
var vb=new android.widget.Button(ctx)
vb.setText("切换模式 ")
vb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(Level.getGameMode()==0)
{
Level.setGameMode(1)
print("创造 ")
}
else if(Level.getGameMode()==1)
{
Level.setGameMode(0)
print("  生存 ")
}
}}))
layout.addView(vb)

//感谢小夏日君
var vb=new android.widget.Button(ctx)
vb.setText("获取方块 ")
vb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
  aa=0;
  bb=0;
  cc=1;
dd=0;
print("请点击您要获取的方块 ")  
}}))
layout.addView(vb)

//感谢小夏日君
var vb=new android.widget.Button(ctx)
vb.setText("清空背包 ")
vb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
         var count = 0
for(i = 9; i <= 44; i++) {
if(Player.getInventorySlot(i) !==0) {				
for(j = 1; j <= Player.getInventorySlotCount(i); j++) 
{
count++;
}
Player.clearInventorySlot(i);
}}

}}))
layout.addView(vb)

function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}


var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,150))
menu.setHeight(dip2px(ctx,350))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,255,0)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}

function useItem(x,y,z,tid,bid,s,td,bd){addItemInventory(bid,64, bd)}