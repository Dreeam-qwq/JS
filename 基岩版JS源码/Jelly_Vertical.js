var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    Button = android.widget.Button,
    LinearLayout = android.widget.LinearLayout,
    RelativeLayout = android.widget.RelativeLayout,
    PopupWindow = android.widget.PopupWindow,
    ScrollView = android.widget.ScrollView,
    TextView = android.widget.TextView,
    CheckBox = android.widget.CheckBox,
    LayoutParams = android.view.ViewGroup.LayoutParams,
    Typeface = android.graphics.Typeface,
    Switch = android.widget.Switch,
    BufferedReader = java.io.BufferedReader,
    InputStreamReader = java.io.InputStreamReader,
    Toast = android.widget.Toast,
    Runnable = java.lang.Runnable,
    URL = java.net.URL,
    nanoTime = java.lang.System.nanoTime(),
    Html = android.text.Html,
    ClipboardManager = android.content.ClipboardManager,
    SystemClock = android.os.SystemClock,
    AlarmManager = android.app.AlarmManager,
    AudioManager = android.media.AudioManager,
    ToneGenerator = android.media.ToneGenerator,
    Handler = android.os.Handler,
    Looper = android.os.Looper,
    System = java.lang.System,
    DownloadManager = android.app.DownloadManager,
    Dialog = android.app.Dialog,
    ConnectivityManager = android.net.ConnectivityManager,
    Notification = android.app.Notification,
    PendingIntent = android.app.PendingIntent,
    View = android.view.View,
    ColorDrawable = android.graphics.drawable.ColorDrawable,
    Color = android.graphics.Color,
    Gravity = android.view.Gravity,
    PorterDuff = android.graphics.PorterDuff,
    Intent = android.content.Intent,
    DialogInterface = android.content.DialogInterface,
    DataOutputStream = java.io.DataOutputStream,
    BufferedReader = java.io.BufferedReader,
    Thread = java.lang.Thread,
    TypedValue = android.util.TypedValue,
    Byte = java.lang.Byte,
    Context = android.content.Context,
    Handler = android.os.Handler,
    TextWatcher = android.text.TextWatcher,
    FileWriter = java.io.FileWriter,
    InputStreamReader = java.io.InputStreamReader,
    SpannableStringBuilder = android.text.SpannableStringBuilder,
    ImageSpan = android.text.style.ImageSpan,
    Spannable = android.text.Spannable,
    StringBuffer = java.lang.StringBuffer,
    Calendar = java.util.Calendar,
    Html = android.text.Html,
    ZipFile = java.util.zip.ZipFile,
    ByteBuffer = java.nio.ByteBuffer,
    MediaPlayer = android.media.MediaPlayer,
    String = java.lang.String,
    StringBuilder = java.lang.StringBuilder,
    printWriter = java.io.printWriter,
    Uri = android.net.Uri,
    activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    TranslateAnimation = android.view.animation.TranslateAnimation,
    Animation = android.view.animation.Animation,
    RotateAnimation = android.view.animation.RotateAnimation,
    DecelerateInterpolator = android.view.animation.DecelerateInterpolator,
    LinearInterpolator = android.view.animation.LinearInterpolator,
    Environment = android.os.Environment,
    FileInputStream = java.io.FileInputStream,
    SharedPreferences = android.content.SharedPreferences,
    numbers = android.text.InputType.TYPE_CLASS_NUMBER,
    number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED,
    ImageView = android.widget.ImageView,
    EditText = android.widget.EditText,
    CompoundButton = android.widget.CompoundButton,
    SeekBar = android.widget.SeekBar,
    Build = android.os.Build,
    ProgressBar = android.widget.ProgressBar,
    ToggleButton = android.widget.ToggleButton,
    FrameLayout = android.widget.FrameLayout,
    BitmapFactory = android.graphics.BitmapFactory,
    ViewGroup = android.view.ViewGroup,
    GradientDrawable = android.graphics.drawable.GradientDrawable,
    Bitmap = android.graphics.Bitmap,
    Canvas = android.graphics.Canvas,
    Paint = android.graphics.Paint,
    Path = android.graphics.Path,
    LinearGradient = android.graphics.LinearGradient,
    Shader = android.graphics.Shader,
    MotionEvent = android.view.MotionEvent,
    BitmapDrawable = android.graphics.drawable.BitmapDrawable,
    StateListDrawable = android.graphics.drawable.StateListDrawable,
    ViewTreeObserver = android.view.ViewTreeObserver,
    ClipDrawable = android.graphics.drawable.ClipDrawable,
    LightingColorFilter = android.graphics.LightingColorFilter,
    WindowManager = android.view.WindowManager,
    DisplayMetrics = android.util.DisplayMetrics,
    ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager,
    File = java.io.File,
    FileOutputStream = java.io.FileOutputStream,
    Base64 = android.util.Base64,
    survivalview, pvpview, potionview, movementview, exploitview,
    survivalTab = [{
        name: "32k Enchant",
        id: 1,
        view: "return survivalview",
        style: "white",
        menu: false,
        type: "button",
        setting: "Protection:32767;Fire Protection:32767;Feather Falling:32767;Blast Protection:32767;Projectile Prot:32767;Thorns:32767;Respiration:32767;Aqua Affinity:32767;Depth Strider:32767;Sharpness:32767;Smite:32767;Bane of Anthropods:32767;Knockback:32767;Fire Aspect:32767;Looting:32767;Efficiency:32767;Silk Touch:32767;Unbreaking:32767;Fortune:32767;Power:32767;Punch:32767;Flame:32767;Infinity:32767;Luck of the Sea:32767;Lure:32767;",
        call: "Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, survivalTab[0].setting.split(';')[0].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, survivalTab[0].setting.split(';')[1].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, survivalTab[0].setting.split(';')[2].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, survivalTab[0].setting.split(';')[3].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, survivalTab[0].setting.split(';')[4].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, survivalTab[0].setting.split(';')[5].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, survivalTab[0].setting.split(';')[6].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, survivalTab[0].setting.split(';')[7].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, survivalTab[0].setting.split(';')[8].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, survivalTab[0].setting.split(';')[9].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, survivalTab[0].setting.split(';')[10].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, survivalTab[0].setting.split(';')[11].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, survivalTab[0].setting.split(';')[12].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, survivalTab[0].setting.split(';')[13].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, survivalTab[0].setting.split(';')[14].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, survivalTab[0].setting.split(';')[15].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, survivalTab[0].setting.split(';')[16].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, survivalTab[0].setting.split(';')[17].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, survivalTab[0].setting.split(';')[18].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, survivalTab[0].setting.split(';')[19].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, survivalTab[0].setting.split(';')[20].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, survivalTab[0].setting.split(';')[21].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, survivalTab[0].setting.split(';')[22].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, survivalTab[0].setting.split(';')[23].split(':')[1]); Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, survivalTab[0].setting.split(';')[24].split(':')[1]); "
    }, {
        name: "Optifine",
        type: "button",
        state: false,
        keystate: false,
        call: "survivalTab[1].state?ModPE.setFov(20):ModPE.resetFov()"
    }, {
        name: "Coordinates",
        rp: "tick",
        type: "button",
        state: false,
        call: "if(survivalTab[2].state){if(!dataWin){displayData()}}else if(!survivalTab[2].state&&!pvpTab[9].state){dataView.dismiss();dataWin=false;}var tempCoordtxt = ' X:' + Math.floor(Player.getX()) + '  Y:' + Math.floor(Player.getY() - 1) + '  Z:' + Math.floor(Player.getZ()); ctx.runOnUiThread( new java.lang.Runnable({ run: function() { try { coordsView.setText(tempCoordtxt);if(!survivalTab[2].state&&dataWin){coordsView.setText('');} } catch (err) {clientMessage(err);} } }));"
    }, {
        name: "Nether Coordinates",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Player.getDimension()==1?(ModPE.showTipMessage(ChatColor.RED +'In NetherL '+ChatColor.YELLOW+'Overworld Location - '+ChatColor.WHITE + 'X:' + Math.floor(Player.getX())*8 +'  Y:' + Math.floor(Player.getY() - 2) +'  Z:' + Math.floor(Player.getZ())*8)):(ModPE.showTipMessage(ChatColor.RED +'Not in Nether: '+ChatColor.YELLOW+'Overworld Coords: '+ChatColor.WHITE + 'X:' + Math.floor(Player.getX()) + '  Y:' + Math.floor(Player.getY() - 1) + '  Z:' + Math.floor(Player.getZ())));"
    }, {
        name: "Clear Weather",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Level.setRainLevel(0);Level.setLightningLevel(0);"
    }, {
        name: "Always Day",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Level.setTime(1200);"
    }, {
        name: "Always Night",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Level.setTime(17000);"
    }, {
        name: "Rename Item",
        style: "white",
        type: "button",
        state: false,
        setting: "name: ;",
        call: "tempString='';openSetting(parseInt(7),survivalTab);"
    }],
    pvpTab = [{
        name: "Aimbot",
        id: 2,
        rp: "t10",
        type: "switch",
        state: false,
        keystate: false,
        view: "return pvpview",
        menu: false,
        setting: "range:17;",
        call: "aimEnt(getNearEnt(pvpTab[0].setting.split(';')[0].split(':')[1],true))"
    }, {
        name: "Hitbox",
        rp: "tick",
        type: "button",
        state: false,
        keystate: false,
        setting: "width:10;height:10;range:17;",
        call: "function resetBoxes(){var playerArrayName = []; for(var i = 0; i < Server.getAllPlayers().length; i++){ playerArrayName.push([Server.getAllPlayerNames()[i]]); }playerArrayName.forEach(function(entry, index){ Entity.setCollisionSize(Server.getAllPlayers()[playerArrayName.indexOf(entry)], 0.6, 1.8); });}pvpTab[1].state?(Entity.setCollisionSize(getNearEnt(pvpTab[1].setting.split(';')[2].split(':')[1],true), pvpTab[1].setting.split(';')[0].split(':')[1], pvpTab[1].setting.split(';')[1].split(':')[1])):(resetBoxes())"
    }, {
        name: "Auto Totem",
        rp: "t10",
        type: "switch",
        state: false,
        call: "Entity.setOffhandSlot(getPlayerEnt(), 450, 1, 0);"
    }, {
        name: "FOV",
        type: "button",
        setting: "fovSeek:130;",
        state: false,
        call: "pvpTab[3].state?ModPE.setFov(parseInt(pvpTab[3].setting.split(';')[0].split(':')[1])):ModPE.resetFov();"
    }, {
        name: "Name Stats",
        rp: "tick",
        type: "switch",
        state: false,
        call: "var players = Server.getAllPlayers(); players.forEach(function (entry){ if(Entity.getNameTag(entry)!==null){ if(Entity.getNameTag(entry).includes(',')){ if(Entity.getNameTag(entry).split(',')[0]==''&getTile(Entity.getX(entry), Entity.getY(entry) - 2, Entity.getZ(entry))!=0){ setTile(Entity.getX(entry),Entity.getY(entry)-2,Entity.getZ(entry),35,2); } var entityOriName = Entity.getNameTag(entry).split(',')[0]; Entity.setNameTag(entry, entityOriName+','+newLine()+Entity.getHealth(entry)+'/'+Entity.getMaxHealth(entry)+newLine()+Item.getName(Entity.getCarriedItem(entry), Entity.getCarriedItemData(entry), false)+':'+Entity.getCarriedItemData(entry)); }else{  Entity.setNameTag(entry, Entity.getNameTag(entry)+','+newLine()+Entity.getHealth(entry)+'/'+Entity.getMaxHealth(entry)+newLine()+Item.getName(Entity.getCarriedItem(entry), Entity.getCarriedItemData(entry), false)+':'+Entity.getCarriedItemData(entry)); }} })"
    }, {
        name: "ESP",
        type: "switch",
        setting: "red:255;green:0;blue:0;Enable Rainbow (true/false):true;",
        state: false,
        call: "ESP.Render.init();"
    }, {
        name: "Blast Aura",
        rp: "atthook",
        keystate: false,
        state: false,
        call: "var hit = getYaw() + 90; var hitY = getPitch() - 180; x = Math.cos(hit * (Math.PI / 180)); y = Math.sin(hitY * (Math.PI / 180)); z = Math.sin(hit * (Math.PI / 180)); setVelX(Player.getEntity(), x * 2); setVelY(Player.getEntity(), y * 0.6); setVelZ(Player.getEntity(), z * 2); "
    }, {
        name: "Crosshair",
        type: "button",
        setting: "size:25;",
        state: false,
        call: "function showCrosshair() { ctx.runOnUiThread(new Runnable({ run: function() { try { var layout = new LinearLayout(ctx); GUIcc = new PopupWindow(layout, dip2px(pvpTab[7].setting.split(';')[0].split(':')[1]), dip2px(pvpTab[7].setting.split(';')[0].split(':')[1])); GUIcc.setTouchable(false); GUIcc.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(crosshairicon, 0), 0, android.util.Base64.decode(crosshairicon, 0).length))); GUIcc.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0); GUIcc.setTouchable(false); } catch (e) { } } })); };if(pvpTab[7].state){showCrosshair()}else{GUIcc.dismiss()}"
    }, {
        name: "Hover Aura",
        rp: "t10",
        type: "switch",
        keystate: false,
        setting: "height:0.905;",
        state: false,
        call: "var ent = getNearEnt(4,true); if (ent != null && Player.getName(ent) != '' && Player.getName(ent) != ' ' && Player.getName(ent)) { Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + parseFloat(pvpTab[8].setting.split(';')[0].split(':')[1]), getPlayerZ()); var playerDir = [0, 0, 0]; toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1); setVelX(getPlayerEnt(), 0.3 * playerDir[0]); setVelZ(getPlayerEnt(), 0.3 * playerDir[2]); if (Entity.getVelY(getPlayerEnt()) < -0.5){ setVelY(Player.getEntity(), 0.00000); }} var ent = getNearEnt(6); if (ent != null) {aimEnt(ent)}; "
    }, {
        name: "Locator",
        type: "button",
        rp: "tick",
        state: false,
        call: "if(pvpTab[9].state){if(!dataWin){displayData()}}else if(!pvpTab[9].state&&!survivalTab[2].state){dataView.dismiss();dataWin=false;}var ent = getNearEnt(300), tempLocatetxt; if (Player.getName(ent) != 'Steve'&&Player.getName(ent) != 'Not a player'){ tempLocatetxt = 'Player Found: '+Player.getName(ent).substring(0, 30)+newLine()+' @ '+Math.floor(Entity.getX(ent))+', '+Math.floor(Entity.getY(ent))+', '+Math.floor(Entity.getZ(ent))+newLine()+' ['+Math.floor(getDist(ent))+' Blocks]'}else {tempLocatetxt = 'No Players Near'; }		 ctx.runOnUiThread( new java.lang.Runnable({ run: function() { try { locateView.setText(tempLocatetxt);if(!pvpTab[9].state&&dataWin){locateView.setText('');} } catch (err) {clientMessage(err);} } }));"
    }, {
        name: "Hit Aim",
        type: "switch",
        rp: "attusehook",
        keystate: false,
        state: false,
        call: "if(vic!=0){aimEnt(vic);}else{var ent = getNearEnt(10);if(ent!=null){aimEnt(ent);}}"
    }, {
        name: "Tracers",
        type: "switch",
        setting: "red:255;green:0;blue:0;Enable Rainbow (true/false):true;",
        state: false,
        call: "ESP.Render.init();"
    }, {
        name: "Behind",
        rp: "tick",
        type: "switch",
        setting: "range:10;gap:2;",
        keystate: false,
        state: false,
        call: "var target=getNearEnt(pvpTab[12].setting.split(';')[0].split(':')[1],true);var dirV = cueCoord(Entity.getYaw(target)+180, 0); if(Entity.getX(target)!=0&&Entity.getZ(target)!=0){ if (getPlayerX() + (dirV.x * 3) - Entity.getX(getPlayerEnt()) > 0.5 || getPlayerX() + (dirV.x * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt()) < -0.5 || getPlayerY() + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) > 0.5 || getPlayerY() + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt()) < -0.5 || getPlayerZ() + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) > 0.5 || getPlayerZ() + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt()) < -0.5) { Entity.setVelX(getPlayerEnt(), (Entity.getX(target) + (dirV.x * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getX(getPlayerEnt())) / 5); if(!movementTab[12].state){Entity.setVelY(getPlayerEnt(), (Entity.getY(target) + (dirV.y * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getY(getPlayerEnt())) / 5);} Entity.setVelZ(getPlayerEnt(), (Entity.getZ(target) + (dirV.z * pvpTab[12].setting.split(';')[1].split(':')[1]) - Entity.getZ(getPlayerEnt())) / 5); } else { Entity.setVelX(getPlayerEnt(), 0); Entity.setVelY(getPlayerEnt(), 0); Entity.setVelZ(getPlayerEnt(), 0);}}"
    }, {
        name: "No Knockback",
        rp: "tick",
        defHealth: 20,
        tickDelay: 20,
        type: "switch",
        state: false,
        call: " pvpTab[13].tickDelay--; if(pvpTab[13].tickDelay==0){ pvpTab[13].tickDelay=20; pvpTab[13].defHealth=Entity.getHealth(getPlayerEnt()); } if(pvpTab[13].defHealth>Entity.getHealth(getPlayerEnt())){ setVelY(Player.getEntity(), 0); setVelX(Player.getEntity(), 0); setVelZ(Player.getEntity(), 0); pvpTab[13].defHealth=Entity.getHealth(getPlayerEnt());}"
    }, ],
    potionTab = [{
        name: "Night Vision",
        id: 3,
        effect: MobEffect.nightVision,
        type: "button",
        state: false,
        view: "return potionview",
        menu: false,
        setting: "amp:255;duration:999999;",
        call: "effect(0)"
    }, {
        name: "Haste",
        effect: MobEffect.digSpeed,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(1)"
    }, {
        name: "Mining Fatigue",
        effect: MobEffect.digSlowdown,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(2)"
    }, {
        name: "Levitation",
        effect: MobEffect.levitation,
        type: "button",
        state: false,
        setting: "amp:3;duration:999999;",
        call: "effect(3)"
    }, {
        name: "Jump Boost",
        effect: MobEffect.jump,
        type: "button",
        state: false,
        setting: "amp:4;duration:999999;",
        call: "effect(4)"
    }, {
        name: "Nausea",
        effect: MobEffect.confusion,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(5)"
    }, {
        name: "Blindness",
        effect: MobEffect.blindness,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(6)"
    }, {
        name: "Invisibility",
        effect: MobEffect.invisibility,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(7)"
    }, {
        name: "Absorption",
        effect: MobEffect.absorption,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(8)"
    }, {
        name: "Health Boost",
        effect: MobEffect.healthBoost,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(9)"
    }, {
        name: "Wither",
        effect: MobEffect.wither,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(10)"
    }, {
        name: "Poison",
        effect: MobEffect.poison,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(11)"
    }, {
        name: "Weakness",
        effect: MobEffect.weakness,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(12)"
    }, {
        name: "Hunger",
        effect: MobEffect.hunger,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(13)"
    }, {
        name: "Water Breathing",
        effect: MobEffect.waterBreathing,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(14)"
    }, {
        name: "Fire Resistance",
        effect: MobEffect.fireResistance,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(15)"
    }, {
        name: "Resistance",
        effect: MobEffect.damageResistance,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(16)"
    }, {
        name: "Strength",
        effect: MobEffect.damageBoost,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(17)"
    }, {
        name: "Slowness",
        effect: MobEffect.movementSlowdown,
        type: "button",
        state: false,
        setting: "amp:255;duration:999999;",
        call: "effect(18)"
    }, {
        name: "Swiftness",
        effect: MobEffect.movementSpeed,
        type: "button",
        state: false,
        setting: "amp:20;duration:999999;",
        call: "effect(19)"
    }, {
        name: "Heal",
        style: "white",
        effect: MobEffect.heal,
        type: "button",
        call: "Entity.addEffect(Player.getEntity(), MobEffect.heal, 999999, 2000, false, false);"
    }, {
        name: "Experience",
        style: "white",
        type: "button",
        call: "Player.addExp(100000000)"
    }, {
        name: "Remove All",
        style: "white",
        type: "button",
        call: "effect(19,true)"
    }],
    movementTab = [{
        name: "Fly",
        id: 4,
        type: "button",
        state: false,
        view: "return movementview",
        menu: false,
        call: "movementTab[0].state?Player.setCanFly(1):Player.setCanFly(0)"
    }, {
        name: "NoFallDamage",
        rp: "t10",
        type: "switch",
        state: false,
        keystate: false,
        setting: "sensitivity:-0.5;",
        call: "Entity.getVelY(getPlayerEnt())<parseFloat(movementTab[1].setting.split(';')[0].split(':')[1])?setVelY(Player.getEntity(), 0.00000):''"
    }, {
        name: "NoClip",
        rp: "t10",
        type: "button",
        state: false,
        delayedStart: true,
        keystate: false,
        setting: "speed:0.14;",
        call: "if(movementTab[2].state){var speed = parseFloat(movementTab[2].setting.split(';')[0].split(':')[1]);Entity.setCollisionSize(getPlayerEnt(), 0, 0);setVelY(getPlayerEnt(), 0.00000000000001);toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);var player = getPlayerEnt();setPosition(getPlayerEnt(), Player.getX() + (speed * playerDir[0]), Player.getY() + (speed * playerDir[1]), Player.getZ() + (speed * playerDir[2]))}else{ Entity.setCollisionSize(getPlayerEnt(), 0.6, 1.8);}"
    }, {
        name: "Glide",
        rp: "tick",
        type: "switch",
        state: false,
        keystate: false,
        call: "var serverip = Server.getAddress(); if(serverip==null){serverip='offline';}if(serverip.indexOf('amazo') >= 0||serverip=='offline'){if (Entity.getVelY(getPlayerEnt()) < -0.1 && !Player.isFlying()) { setVelY(Player.getEntity(), -1);} if (Entity.getVelY(getPlayerEnt()) < -0.1) { setVelY(Player.getEntity(), 0.0001); }}else{setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 0.1899, getPlayerZ()); setVelY(getPlayerEnt(), -0.2); } "
    }, {
        name: "Magic Carpet",
        rp: "tick",
        type: "button",
        state: false,
        keystate: false,
        call: "if(movementTab[4].state){blocksToReplaceX = []; blocksToReplaceY = []; blocksToReplaceZ = [];  playerX = getPlayerX(); playerY = getPlayerY(); playerZ = getPlayerZ(); for(x = -2;x<=2;x++){ for(z = -2;z<=2;z++){ if(!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)){ var tile = Level.getTile(Math.round(x+playerX),Math.round(playerY-3),Math.round(z+playerZ)); if((tile == 0||tile == 241)){ blocksToReplaceX.push(Math.round(x+playerX)); blocksToReplaceY.push(Math.round(playerY-3)); blocksToReplaceZ.push(Math.round(z+playerZ)); } } } } if(blocksReplacedX!=null){ blocksToSkip = [];  for(m = 0;m < blocksReplacedX.length;m++){ for(j = 0;j < blocksToReplaceX.length;j++){ if(blocksReplacedX[m] == blocksToReplaceX[j] && blocksReplacedY[m] == blocksToReplaceY[j] && blocksReplacedZ[m] == blocksToReplaceZ[j]){ blocksToSkip.push(m); } } }   var currentTile; for(m = 0;m < blocksReplacedX.length;m++){ if(blocksToSkip.indexOf(m)<0){ currentTile = getTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m]); if(currentTile == 241){ if(Level.getData(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m])==10){ setTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m],0); }} } } }  blocksReplacedX = []; blocksReplacedY = []; blocksReplacedZ = [];  for(m = 0;m < blocksToReplaceX.length;m++){	 setTile(blocksToReplaceX[m],blocksToReplaceY[m],blocksToReplaceZ[m],241,10); }  for(m = 0;m < blocksToReplaceX.length;m++){ blocksReplacedX.push(blocksToReplaceX[m]); blocksReplacedY.push(blocksToReplaceY[m]); blocksReplacedZ.push(blocksToReplaceZ[m]); }}else{blocksToReplaceX = []; blocksToReplaceY = []; blocksToReplaceZ = [];  playerX = getPlayerX(); playerY = getPlayerY(); playerZ = getPlayerZ(); for(x = -2;x<=2;x++){ for(z = -2;z<=2;z++){ if(!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)&&!(Math.abs(x)==2&&Math.abs(z)==2)){ var tile = Level.getTile(Math.round(x+playerX),Math.round(playerY-3),Math.round(z+playerZ)); } } } if(blocksReplacedX!=null){ blocksToSkip = [];  for(m = 0;m < blocksReplacedX.length;m++){ for(j = 0;j < blocksToReplaceX.length;j++){ if(blocksReplacedX[m] == blocksToReplaceX[j] && blocksReplacedY[m] == blocksToReplaceY[j] && blocksReplacedZ[m] == blocksToReplaceZ[j]){ blocksToSkip.push(m); } } }   var currentTile; for(m = 0;m < blocksReplacedX.length;m++){ if(blocksToSkip.indexOf(m)<0){ currentTile = getTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m]); if(currentTile == 241){ if(Level.getData(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m])==10){ setTile(blocksReplacedX[m],blocksReplacedY[m],blocksReplacedZ[m],0); }} } } }  blocksReplacedX = []; blocksReplacedY = []; blocksReplacedZ = [];    for(m = 0;m < blocksToReplaceX.length;m++){ blocksReplacedX.push(blocksToReplaceX[m]); blocksReplacedY.push(blocksToReplaceY[m]); blocksReplacedZ.push(blocksToReplaceZ[m]); }}"
    }, {
        name: "No Void",
        rp: "tick",
        type: "switch",
        state: false,
        call: "if ((Math.floor(Player.getY() - 1))<3){ var serverip = Server.getAddress(); if(serverip==null){serverip='offline';} if(serverip.indexOf('amazo') >= 0||serverip=='offline'){ Entity.setPosition(Player.getEntity(), Player.getX()+1, 20, Player.getZ()); var px = Player.getX(); var pz = Player.getZ(); for(var i = 256.0;i>0.0;i--) { if(Level.getTile(px, i, pz) != 0) { Entity.setPosition(Player.getEntity(), px, i + 3, pz); break; } } }else{ setVelY(Player.getEntity(), 0.1); } }"
    }, {
        name: "Ice Speed",
        type: "button",
        state: false,
        call: "function speedBypass(){ for(var i = 0; i < 406; i++){ Block.setFriction(i, 0.3); } };function resetSpeed() { for(var i = 0; i < 406; i++){ Block.setFriction(i, 0.6000000238418579); } Block.setFriction(79, .4); Block.setFriction(174, .4); Block.setFriction(207, .4); Block.setFriction(266, .4); };movementTab[6].state?(speedBypass()):(resetSpeed())"
    }, {
        name: "Gamespeed",
        type: "button",
        setting: "gamespeed:50;",
        state: false,
        call: "movementTab[7].state?(ModPE.setGameSpeed(movementTab[7].setting.split(';')[0].split(':')[1])):(ModPE.setGameSpeed(20))"
    }, {
        name: "Teleport",
        type: "button",
        style: "white",
        setting: "x:0;y:60;z:10;",
        state: false,
        call: "function arr(){return movementTab};openSetting(8,arr(),'teleport')"
    }, {
        name: "Tap TP",
        rp: "usehook",
        keystate: false,
        type: "switch",
        state: false,
        call: "if(Player.getPointedBlockY()+3!=0)setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())"
    }, {
        name: "Jump",
        keystate: false,
        rp: "kb",
        type: "button",
        setting: "intensity:0.50;",
        call: "setVelY(getPlayerEnt(), movementTab[10].setting.split(';')[0].split(':')[1]);"
    }, {
        name: "Boost",
        keystate: false,
        rp: "kb",
        type: "button",
        setting: "intensity:12;",
        call: "toDirectionalVector(playerDir, (getYaw()+90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1); setVelX(getPlayerEnt(), movementTab[11].setting.split(';')[0].split(':')[1] * playerDir[0]); setVelZ(getPlayerEnt(), movementTab[11].setting.split(';')[0].split(':')[1] * playerDir[2]); setVelY(getPlayerEnt(), 1 * playerDir[1]);"
    }, {
        name: "NoDownGlide",
        rp: "tick",
        keystate: false,
        type: "switch",
        state: false,
        call: "setVelY(getPlayerEnt(), 0);"
    }, {
        name: "Elevator",
        rp: "kb",
        style: "white",
        keystate: false,
        type: "button",
        call: "Entity.setPositionRelative(getPlayerEnt(), 0, +2, 0);setVelY(Player.getEntity(), 0);"
    }, {
        name: "Elevator Down",
        rp: "kb",
        display: "hidden",
        keystate: false,
        type: "button",
        call: "Entity.setPositionRelative(getPlayerEnt(), 0, -1, 0);setVelY(Player.getEntity(), 0);"
    }, {
        name: "Long Jump",
        rp: "tick",
        keystate: false,
        state: false,
        setting: "intensity:1.09;",
        type: "switch",
        call: "setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * movementTab[15].setting.split(';')[0].split(':')[1]); setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * movementTab[15].setting.split(';')[0].split(':')[1]);"
    }],
    exploitTab = [{
        name: "Dupe",
        id: 5,
        style: "white",
        type: "button",
        view: "return exploitview",
        menu: false,
        call: "if(Server.getAddress()!=null){ if(Player.getItemCustomName(Player.getCarriedItem())==null){ Player.setItemCustomName(Player.getSelectedSlotId(),'.+Math.floor(Math.random() * 1000)+ '+Item.getName(Player.getCarriedItem(),Player.getCarriedItemData())); }else{ Player.setItemCustomName(Player.getSelectedSlotId(),'.+Math.floor(Math.random() * 1000)+ '+Item.getName(Player.getCarriedItem(),Player.getCarriedItemData())); } clientMessage('Move item to the inventory crafting section.'); }else{Player.addItemInventory(Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());}"
    }, {
        name: "Foil",
        type: "button",
        state: false,
        call: "function enableFoil(){for(var i = 255; i < 406; i++){ if(i!=326&i!=327&i!=343&i!=382&i!=282){ Item.setProperties(i, { 'foil': true, 'hover_text_color': 'light_purple', }); }};}function disableFoil(){for(var i = 255; i < 406; i++){ if(i!=326&i!=327&i!=343&i!=382&i!=282){ Item.setProperties(i, { 'foil': false, 'hover_text_color': 'light_purple', }); }}}exploitTab[1].state?enableFoil():disableFoil()"
    }, {
        name: "Break Bedrock",
        type: "button",
        state: false,
        call: "exploitTab[2].state?(Block.setDestroyTime(7, 0.01), Block.setDestroyTime(137, 0.01), Block.setDestroyTime(188, 0.01), Block.setDestroyTime(189, 0.01), Block.setDestroyTime(209, 0.01), Block.setDestroyTime(90, 0.01), Block.setDestroyTime(119, 0.01),Block.setDestroyTime(120, 0.01), Block.setDestroyTime(-161, 0.01)):(Block.setDestroyTime(7, -10), Block.setDestroyTime(137, -10), Block.setDestroyTime(188, -10), Block.setDestroyTime(189, -10), Block.setDestroyTime(209, -10), Block.setDestroyTime(90, -10), Block.setDestroyTime(119, -10), Block.setDestroyTime(120, -10), Block.setDestroyTime(-161, -10))"
    }, {
        name: "Fast Eat",
        type: "button",
        state: false,
        call: "exploitTab[3].state?(Item.setProperties(260, { 'use_duration': 1, 'food': { 'nutrition': 4, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(322, { 'stack_by_data': true, 'use_duration': 1, 'foil': false, 'food': { 'nutrition': 4, 'saturation_modifier': 'supernatural', 'is_meat': false, 'effects': [{ 'name': 'regeneration', 'chance': 1.0, 'duration': 5, 'amplifier': 1 }, { 'name': 'absorption', 'chance': 1.0, 'duration': 120, 'amplifier': 0 }], 'enchanted_effects': [{ 'name': 'regeneration', 'chance': 0.66, 'duration': 30, 'amplifier': 4 }, { 'name': 'absorption', 'chance': 0.66, 'duration': 120, 'amplifier': 0 }, { 'name': 'resistance', 'chance': 0.66, 'duration': 300, 'amplifier': 0 }, { 'name': 'fire_resistance', 'chance': 0.66, 'duration': 300, 'amplifier': 0 }] } }),Item.setProperties(260, { 'use_duration': 1, 'max_stack_size': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': false, 'using_converts_to': 'bowl' } }),Item.setProperties(297, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(319, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(320, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(349, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(460, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(461, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(462, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'poison', 'duration': 60, 'amplifier': 3 }, { 'name': 'nausea', 'duration': 15, 'amplifier': 1 }, { 'name': 'hunger', 'duration': 15, 'amplifier': 2 }] } }),Item.setProperties(350, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'eat_sound': 'random.burp', 'is_meat': true } }),Item.setProperties(463, { 'use_duration': 1, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(360, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': false } }),Item.setProperties(357, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(363, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(364, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(365, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.3, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(366, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(423, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(424, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(367, { 'use_duration': 1, 'food': { 'nutrition': 4, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.8, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(375, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'good', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 1.0, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(391, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'normal', 'is_meat': false }, 'seed': { 'crop_result': 'carrots', 'plant_at': 'farmland' } }),Item.setProperties(392, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'low', 'is_meat': false }, 'seed': { 'crop_result': 'potatoes', 'plant_at': 'farmland' } }),Item.setProperties(393, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(394, { 'use_duration': 1, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 0.6, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(396, { 'use_duration': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'supernatural', 'is_meat': false } }),Item.setProperties(400, { 'use_duration': 1, 'food': { 'nutrition': 8, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(411, { 'use_duration': 1, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(412, { 'use_duration': 1, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(413, { 'use_duration': 1, 'max_stack_size': 1, 'food': { 'nutrition': 10, 'saturation_modifier': 'normal', 'using_converts_to': 'bowl', 'is_meat': true } }),Item.setProperties(459, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(457, { 'use_duration': 1, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } })):(Item.setProperties(260, { 'use_duration': 32, 'food': { 'nutrition': 4, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(260, { 'use_duration': 32, 'max_stack_size': 1, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': false, 'using_converts_to': 'bowl' } }),Item.setProperties(297, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(319, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(320, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(349, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(460, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(461, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true } }),Item.setProperties(462, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 1, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'poison', 'duration': 60, 'amplifier': 3 }, { 'name': 'nausea', 'duration': 15, 'amplifier': 1 }, { 'name': 'hunger', 'duration': 15, 'amplifier': 2 }] } }),Item.setProperties(350, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'eat_sound': 'random.burp', 'is_meat': true } }),Item.setProperties(463, { 'use_duration': 32, 'max_damage': 0, 'stacked_by_data': true, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(360, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'poor', 'is_meat': false } }),Item.setProperties(357, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(363, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(364, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(365, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.3, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(366, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(423, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(424, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'good', 'is_meat': true } }),Item.setProperties(367, { 'use_duration': 32, 'food': { 'nutrition': 4, 'saturation_modifier': 'poor', 'is_meat': true, 'effects': [{ 'name': 'hunger', 'chance': 0.8, 'duration': 30, 'amplifier': 0 }] } }),Item.setProperties(375, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'good', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 1.0, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(391, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'normal', 'is_meat': false }, 'seed': { 'crop_result': 'carrots', 'plant_at': 'farmland' } }),Item.setProperties(392, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'low', 'is_meat': false }, 'seed': { 'crop_result': 'potatoes', 'plant_at': 'farmland' } }),Item.setProperties(393, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': false } }),Item.setProperties(394, { 'use_duration': 32, 'food': { 'nutrition': 2, 'saturation_modifier': 'low', 'is_meat': false, 'effects': [{ 'name': 'poison', 'chance': 0.6, 'duration': 5, 'amplifier': 0 }] } }),Item.setProperties(396, { 'use_duration': 32, 'food': { 'nutrition': 6, 'saturation_modifier': 'supernatural', 'is_meat': false } }),Item.setProperties(400, { 'use_duration': 32, 'food': { 'nutrition': 8, 'saturation_modifier': 'low', 'is_meat': false } }),Item.setProperties(411, { 'use_duration': 32, 'food': { 'nutrition': 3, 'saturation_modifier': 'low', 'is_meat': true } }),Item.setProperties(457, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(412, { 'use_duration': 32, 'food': { 'nutrition': 5, 'saturation_modifier': 'normal', 'is_meat': true } }),Item.setProperties(413, { 'use_duration': 32, 'max_stack_size': 1, 'food': { 'nutrition': 10, 'saturation_modifier': 'normal', 'using_converts_to': 'bowl', 'is_meat': true } }),Item.setProperties(459, { 'use_duration': 32, 'food': { 'nutrition': 1, 'saturation_modifier': 'normal', 'is_meat': false } }))"
    }, {
        name: "Set Offhand",
        style: "white",
        type: "button",
        setting: "id:3;meta:0;amount:64;",
        call: "function arr(){return exploitTab};openSetting(4,arr(),'offhand')"
    }, {
        name: "Repeat Last Offhand",
        rp: "tick",
        type: "switch",
        sparetick: 20,
        state: false,
        call: " if (exploitTab[5].sparetick > 0) { exploitTab[5].sparetick--; } if (exploitTab[5].sparetick < 1) { var id = exploitTab[4].setting.split(';')[0].split(':')[1], meta = exploitTab[4].setting.split(';')[1].split(':')[1], amount = exploitTab[4].setting.split(';')[2].split(':')[1]; Entity.setOffhandSlot(getPlayerEnt(), parseInt(id), parseInt(amount), parseInt(meta)); exploitTab[5].sparetick = 20; } "
    }, {
        name: "Offhand Keybind",
        keystate: false,
        rp: "kb",
        type: "button",
        call: "var id = exploitTab[4].setting.split(';')[0].split(':')[1], meta = exploitTab[4].setting.split(';')[1].split(':')[1], amount = exploitTab[4].setting.split(';')[2].split(':')[1];Entity.setOffhandSlot(getPlayerEnt(), parseInt(id), parseInt(amount), parseInt(meta));"
    }, {
        name: "Elytra",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Player.setArmorSlot(1, 444, 0);"
    }, {
        name: "AFK",
        rp: "tick",
        type: "switch",
        state: false,
        tick: "10",
        call: "setVelX(Player.getEntity(), 0); exploitTab[8].tick--; if(exploitTab[8].tick<0){ exploitTab[8].tick=10; } if(exploitTab[8].tick==6){ setVelX(Player.getEntity(), -0.3); }if(exploitTab[8].tick==4){ setVelX(Player.getEntity(), 0); }if(exploitTab[8].tick==2){ setVelX(Player.getEntity(), 0.3); }if(exploitTab[8].tick==0){ setVelX(Player.getEntity(), 0); }"
    }, {
        name: "Undead",
        rp: "tick",
        type: "switch",
        state: false,
        call: "Player.setHealth(20)"
    }, {
        name: "Stack Items",
        style: "white",
        type: "switch",
        state: false,
        call: "print('Unstackable items can now be stacked, such as armor and swords, even totems');for(var i = 255; i < 406; i++){ if(i!=210&i!=211&i!=212&i!=217&i!=230&i!=241&i!=242&i!=248&i!=249&i!=250&i!=326&i!=327&i!=343){ Item.setProperties(i, { 'stack_by_data': true, }); Item.setAllowOffhand(i, true); Item.setHandEquipped(i, true); } }  Item.setProperties(444, {'stack_by_data': true,}); Item.setAllowOffhand(444, true); Item.setHandEquipped(444, true);  Item.setProperties(450, {'stack_by_data': true,}); Item.setAllowOffhand(450, true); Item.setHandEquipped(450, true);  Item.setProperties(441, {'stack_by_data': true,}); Item.setAllowOffhand(441, true); Item.setHandEquipped(441, true);  Item.setProperties(438, {'stack_by_data': true,}); Item.setAllowOffhand(438, true); Item.setHandEquipped(438, true);"
    }, {
        name: "Spam",
        rp: "t10",
        setting: "message:instinctmods.com;speed:20;",
        type: "switch",
        state: false,
        call: "if(reservedSpam!==0){reservedSpam--}if(reservedSpam==0){Server.sendChat('['+Math.floor(Math.random() * 1000)+'] '+exploitTab[11].setting.split(';')[0].split(':')[1]);reservedSpam=parseInt(exploitTab[11].setting.split(';')[1].split(':')[1])}"
    }, {
        name: "rgb",
        rp: "t10",
        rgbtick: "1",
        rgbspeed: "12",
        state: true,
        display: "hidden",
        type: "switch",
        call: "if(exploitTab[12].rgbtick==0){if(r > 0 && b == 0){ r=r-5; g=g+5; menuRed=r; menuGreen=g; menuBlue=b; } if(g > 0 && r == 0){ g=g-5; b=b+5; menuRed=r; menuGreen=g; menuBlue=b; } if(b > 0 && g == 0){ r=r+5; b=b-5; menuRed=r; menuGreen=g; menuBlue=b; }exploitTab[12].rgbtick=exploitTab[12].rgbspeed;try{ for(var i=0;i<listar.length;i++){ if(listar[i]!=undefined&&menuOpen){ ctx.runOnUiThread( new java.lang.Runnable( { run:function(){ try{ listar[i].getBackground().setColor(Color.parseColor(rgbToHex(menuRed,menuGreen,menuBlue)));}catch(err){}}}));  } } }catch(e){} }else{ exploitTab[12].rgbtick-- } "
    }, {
        name: "InstaBreak",
        type: "button",
        state: false,
        call: "if(exploitTab[13].state){for(var i = -255; i < 406; i++){ Block.setDestroyTime(i, 0.01); }}else{ for(var i = -255; i < 406; i++){ Block.setDestroyTime(i, defaultDestroy[i]); }  }"
    }],
    friendTab = [{
        name: "Add Friend",
        setting: "Name: ;",
        id: 6,
        style: "white",
        type: "button",
        view: "return friendview",
        menu: false,
        call: "function arr(){return friendTab};openSetting(0,arr(),'Add Friend');closeMenu();"
    }, {
        name: "Add Pointed",
        setting: "Name: ;",
        style: "white",
        type: "button",
        call: " if(Entity.getNameTag(Player.getPointedEntity())!=null){ print('Added '+Entity.getNameTag(Player.getPointedEntity())); friendTab[objectLength(friendTab)]={name:Entity.getNameTag(Player.getPointedEntity()),state:true};ctx.runOnUiThread(new Runnable({ run: function() { try{ friendview.removeAllViews(); for(var i=0;i<friendTab.length;i++){ 	 friendview.addView(createItem(i,friendTab)); } listar[6].setText(tohtml('Friends ('+(friendTab.length-2)+')',true)); }catch(e){} }})); }else{ print('Not pointed at a player, or not close enough') }; "
    }],
    waypointTab = [{
        name: "Add Waypoint",
        setting: "name: ;X: ;Y: ;Z: ;",
        id: 7,
        style: "white",
        type: "button",
        view: "return waypointview",
        menu: false,
        call: "function arr(){return waypointTab};openSetting(0,arr(),'add waypoint');"
    }],
    favoriteTab = [{
        name: "Add Favorite",
        id: 8,
        style: "white",
        type: "button",
        view: "return favoriteview",
        menu: false,
        call: "favoriteTab[0].menu=false;buttonview.removeAllViews();survivalview.removeAllViews(); pvpview.removeAllViews(); potionview.removeAllViews(); movementview.removeAllViews(); exploitview.removeAllViews();friendview.removeAllViews();favoriteview.removeAllViews(); waypointview.removeAllViews();for(var i=0;i<survivalTab.length;i++){ if (favoriteTab.find( e => e.name == survivalTab[i].name )!==undefined) { survivalview.addView(createItem(i,survivalTab,false,'on')); }else{ survivalview.addView(createItem(i,survivalTab,false,'off')); } } for(var i=0;i<pvpTab.length;i++){ if (favoriteTab.find( e => e.name == pvpTab[i].name )!==undefined) { pvpview.addView(createItem(i,pvpTab,false,'on')); }else{ pvpview.addView(createItem(i,pvpTab,false,'off')); } } for(var i=0;i<potionTab.length;i++){ if (favoriteTab.find( e => e.name == potionTab[i].name )!==undefined) { potionview.addView(createItem(i,potionTab,false,'on')); }else{ potionview.addView(createItem(i,potionTab,false,'off')); } } for(var i=0;i<movementTab.length;i++){ if (favoriteTab.find( e => e.name == movementTab[i].name )!==undefined) { movementview.addView(createItem(i,movementTab,false,'on')); }else{ movementview.addView(createItem(i,movementTab,false,'off')); } } for(var i=0;i<exploitTab.length;i++){ if (favoriteTab.find( e => e.name == exploitTab[i].name )!==undefined) { exploitview.addView(createItem(i,exploitTab,false,'on')); }else{ exploitview.addView(createItem(i,exploitTab,false,'off')); } } listar[0].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[1].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[2].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[8].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[3].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[4].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); listar[6].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));closemenu.setText('Finish');listar[7].setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0))); "
    }],
    ESP = {
        File: {
            getTextFromFile: function(file) {
                let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
                let data = new java.lang.StringBuilder();
                let string;
                while ((string = readed.readLine()) != null) data.append(string + "\n");
                return data.toString();
            }
        },
        Render: {
            getFloatBuffer: function(fArray) {
                let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
                bBuffer.order(java.nio.ByteOrder.nativeOrder());
                let fBuffer = bBuffer.asFloatBuffer();
                fBuffer.put(fArray);
                fBuffer.position(0);
                return fBuffer;
            },
            getShortBuffer: function(sArray) {
                let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
                bBuffer.order(java.nio.ByteOrder.nativeOrder());
                let sBuffer = bBuffer.asShortBuffer();
                sBuffer.put(sArray);
                sBuffer.position(0);
                return sBuffer;
            },
            renderer: null,
            glSurface: null,
            fov: 90,
            color: android.graphics.Color.argb(180, 0, 0, 255),
            initted: false,
            init: function() {
                if (ESP.Render.initted) {
                    return;
                }
                let options = ESP.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));
                options = options.split("\n");
                options.forEach(function(entry) {
                    let suboption = entry.split(":");
                    if (suboption[0] == "gfx_field_of_view") {
                        ESP.Render.fov = suboption[1];
                    }
                });
                this.renderer = new android.opengl.GLSurfaceView.Renderer({
                    onSurfaceCreated: function(gl, config) {
                        let GL10 = javax.microedition.khronos.opengles.GL10;
                        gl.glClearColor(0, 0, 0, 0);
                        gl.glShadeModel(GL10.GL_SMOOTH);
                        gl.glClearDepthf(1.0);
                        gl.glDisable(GL10.GL_DITHER);
                        gl.glEnable(GL10.GL_DEPTH_TEST);
                        gl.glDepthFunc(GL10.GL_LEQUAL);
                        gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
                    },
                    onSurfaceChanged: function(gl, width, height) {
                        let GL10 = javax.microedition.khronos.opengles.GL10;
                        gl.glMatrixMode(GL10.GL_PROJECTION);
                        gl.glLoadIdentity();
                        android.opengl.GLU.gluPerspective(gl, ESP.Render.fov, width / height, 0.1, 100);
                        gl.glMatrixMode(GL10.GL_MODELVIEW);
                        gl.glLoadIdentity();
                    },
                    onDrawFrame: function(gl) {
                        let GL10 = javax.microedition.khronos.opengles.GL10;
                        gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
                        gl.glLoadIdentity();
                        if (confirmScreenSafe() && getPlayerEnt() != -1) {
                            if (pvpTab[5].state || pvpTab[11].state) {
                                try {
                                    gl.glDisable(GL10.GL_LIGHTING);
                                    let yaw = getYaw() % 360;
                                    let pitch = getPitch() % 360;
                                    let eyeX = getPlayerX();
                                    let eyeY = getPlayerY() + 1;
                                    let eyeZ = getPlayerZ();
                                    let dCenterX = Math.sin(yaw / 180 * Math.PI);
                                    let dCenterZ = Math.cos(yaw / 180 * Math.PI);
                                    let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
                                    let centerX = eyeX - dCenterX;
                                    let centerZ = eyeZ + dCenterZ;
                                    let centerY = eyeY - dCenterY;
                                    android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
                                    let mobs = Entity.getAll();
                                    let players = Server.getAllPlayers();
                                    mobs.forEach(function(entry) {
                                        if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
                                            if (pvpTab[5].state && Entity.getX(entry) !== 0 && Entity.getZ(entry) !== 0) {
                                                ESP.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);
                                            }
                                            if (pvpTab[11].state && Entity.getX(entry) !== 0 && Entity.getZ(entry) !== 0) {
                                                ESP.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, getPlayerX(), getPlayerY() - 100, getPlayerZ());
                                            }
                                        }
                                    });
                                    players.forEach(function(entry) {
                                        if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 63) {
                                            if (pvpTab[5].state && Entity.getX(entry) !== 0 && Entity.getZ(entry) !== 0) {
                                                ESP.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);
                                            }
                                            if (pvpTab[11].state && Entity.getX(entry) !== 0 && Entity.getZ(entry) !== 0) {
                                                ESP.Render.drawLine(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, getPlayerX(), getPlayerY() - 100, getPlayerZ());
                                            }
                                        }
                                    });
                                } catch (e) {}
                            }
                        } else {}
                    }
                });
                ctx.runOnUiThread(new java.lang.Runnable({
                    run: function() {
                        ESP.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
                        ESP.Render.glSurface.setZOrderOnTop(true);
                        ESP.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                        ESP.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
                        ESP.Render.glSurface.setRenderer(ESP.Render.renderer);
                        ctx.getWindow().getDecorView().addView(ESP.Render.glSurface);
                        ESP.Render.initted = true;
                    }
                }));
            },
            drawBox: function(gl, x, y, z, xsize, ysize, zsize) {
                let GL10 = javax.microedition.khronos.opengles.GL10;
                let size = new Array(xsize, ysize, zsize);
                let vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
                let vertexBuffer = ESP.Render.getFloatBuffer(vertices);
                let lineIndices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
                let polyIndices = [0, 1, 4, 1, 4, 5, 2, 3, 6, 7, 6, 3, 1, 3, 7, 7, 1, 5, 0, 2, 6, 6, 0, 4, 0, 1, 2, 3, 1, 2, 4, 5, 6, 7, 5, 6];
                let lineBuffer = ESP.Render.getShortBuffer(lineIndices);
                let polyBuffer = ESP.Render.getShortBuffer(polyIndices);
                gl.glTranslatef(x, y, z);
                gl.glFrontFace(GL10.GL_CCW);
                gl.glEnable(GL10.GL_BLEND);
                gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
                /*border*/
                gl.glLineWidth(0);
                if (pvpTab[5].setting.split(';')[3].split(':')[1] == "true") {
                    gl.glColor4f(menuRed / 255, menuGreen / 255, menuBlue / 255, 0.5);
                } else {
                    gl.glColor4f(pvpTab[5].setting.split(';')[0].split(':')[1] / 255, pvpTab[5].setting.split(';')[1].split(':')[1] / 255, pvpTab[5].setting.split(';')[2].split(':')[1] / 255, 0.5);
                }
                gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
                gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
                /*box*/
                if (pvpTab[5].setting.split(';')[3].split(':')[1] == "true") {
                    gl.glColor4f(menuRed / 255, menuGreen / 255, menuBlue / 255, 0.38);
                } else {
                    gl.glColor4f(pvpTab[5].setting.split(';')[0].split(':')[1] / 255, pvpTab[5].setting.split(';')[1].split(':')[1] / 255, pvpTab[5].setting.split(';')[2].split(':')[1] / 255, 0.38);
                }
                gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
                gl.glDisable(GL10.GL_LINE_SMOOTH);
                gl.glTranslatef(-x, -y, -z);
            },
            drawLine: function(gl, x, y, z, x2, y2, z2) {
                let GL10 = javax.microedition.khronos.opengles.GL10;
                let size = new Array(x2, y2, z2);
                let vertices = [0, 0, 0, x2 - x, y2 - y, z2 - z];
                let vertexBuffer = ESP.Render.getFloatBuffer(vertices);
                let indices = [0, 1];
                let indexBuffer = ESP.Render.getShortBuffer(indices);
                gl.glTranslatef(x, y, z);
                gl.glEnable(GL10.GL_BLEND);
                gl.glDepthMask(false);
                gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
                gl.glLineWidth(3);
                if (pvpTab[11].setting.split(';')[3].split(':')[1] == "true") {
                    gl.glColor4f(menuRed / 255, menuGreen / 255, menuBlue / 255, 0.5);
                } else {
                    gl.glColor4f(pvpTab[11].setting.split(';')[0].split(':')[1] / 255, pvpTab[11].setting.split(';')[1].split(':')[1] / 255, pvpTab[11].setting.split(';')[2].split(':')[1] / 255, 0.5);
                }
                gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
                gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
                gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
                gl.glTranslatef(-x, -y, -z);
                gl.glDepthMask(true);
                gl.glDisable(GL10.GL_LINE_SMOOTH);
            }
        }
    },
    /*{name:"Name",type:"button",state:false,call:""}*/
    menuOpen = false,
    openMenu, hosthostlay, buttonview, closemenu, freshload = true,
    coordsView, locateView, dataWin = false,
    playerDir = [0, 0, 0],
    wF = false,
    fF = false,
    bottommenu = false,
    horizontalmenu = false,
    updateText = "",
    DEG_TO_RAD = Math.PI / 180,
    hasloaded = false,
    extended = false,
    tempString, blocksToReplaceX = [],
    defaultDestroy = [],
    blocksToReplaceY = [],
    blocksToReplaceZ = [],
    blocksReplacedX = [],
    blocksReplacedY = [],
    blocksReplacedZ = [],
    blocksToSkip = [],
    freshState = true,
    currentScreen = "",
    reservedSpam = 20,
    prfx = ".",
    vic = 0,
    att, usedBlockId = 0,
    crosshairicon = "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAclBMVEUAAAAex/r/KAAAAAAPZX8ZqNMFJS4XmcAcwPESgKEMUGUbuOgIN0YdwvQbteQEIioDGB8Zq9YNWXAGKzcBDA8cve4Vk7kJQFAHMT4artoYos0Rd5YPaYUOYXsKSVwUh6kQcI0MU2kDFBkXncYVjbEUiq08MseMAAAAAXRSTlMAQObYZgAABCxJREFUeNrs3etu2kAQQGGmawrEGBts7pB73v8VuzZWK4QLmVaI2fU5v6JcmNlPCZdEgQEREREREdG/JR0NCCywrgSWIrAUgaUILEVgKQJLEVj3rQtBj9UTSrDAagJLEViKwFIEliKwFIGlCKz7Jrf7f6yOgnyoBBZYp8BSBJYisBSBpQgsRWApAsv3KARLWN8NLLDAAgsssMACCyywwBJ51B8swAILLLDAAgsssMACC6zuFZgR+UHAMjYjmoOAZWxGNAcBy9iMaA4ClrEZ0RwELGMzojkIWMZmRHMQsIzNiOYgYBmbEc1BwDI2I5qD3HGG/C7wg3zzRFYvGiywwHr4RYMFFlgPv2iwwALLzvrRTAt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8fbDMTgt8/XtOu/9TW/7o6Prc619r4GxggQUWWGCBBRZYYIH1cCx9eqzHX4r5wAKrCSxFYCkCSxFYisBSBJYisIiIiIiIKIbkZrG+/NX1wOoxVuJ8P4dyo/GTG4F1CyupP3YDa/gz6QfWdYYW62pgtYF1VovVqKzWVXFMxbdd5K54XmXp1NVN0xPayE22i6Ja76Ruud+4av05nrimXmG9l67ubexRCne6KrvA2lTOV85FZLZ2TaM+Yrnycynz6fuHZIv3l0yy3XH+58ewxaoOM1km7lX8J7nnuWTzZNTHH8O8UZm4L/+ufCdNF1gT8Q3zReaFpjOp6+l1lkjrsXf5YVRTdGPNpk9j/3Yr1HesbJ875/IX6cZKa6yJf7up71i+2epYVKu/YPGddY7le3EHkSTvxvJCa66zvEf69pV6kqSmeXWHTOQSq7k13J5uDbdluesFVvvY8Bxr6prqb52PormfdYkl8/azRt6tJ/ezurBkmJTObfZL8a02rnhbdmDJ8nXjqudVJpIeC1f2AEsRv6I5CyxjmxIREREREfFPAwOwOgJLEViKwFIEliKwFIGlCCxFYPHEPTzLEVhggQUWWGCBBRZYcWEF/nT2vNLAwP60wNcHy+y0wNcHy+y0wNcHy+y0wNcHy+y0wNcHy+y0wNf/1d4d4yAMRDEUhPtfmgKJEsUCKV5r3gHi/OloAqzatcNfH1bt2uGvD6t27fDXh1W79vxa/et/3YAFCxYsWLBufzQsWLBuf/Qe1v2HnLgxcwisso2ZQ2CVbcwcAqtsY+YQWGUbM4fAKtuYOQRW2cbMIbDKNmYOgVW2MXMIrLKNmUNuwPr98/jBIeFTCj6PDwsWLFiwYMGCBQvWgVjn/P0VLFiwYMGCBQsWLFh7WFdrwnq0BwvWO1hBsIJgBcEKghUEKwhWbf/BmuGABetCsIJgBcEKghUEKwhWEKzeBn+yfIIVBCsIVhCsIFhBsIJgBcEKgiVJkiSpuBfSYXR+g2QEUQAAAABJRU5ErkJggg==",
    downicon = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAAnVJREFUaN7tlz9oFFEQxn93iQZMBBEURdIkjVaCghaCCIKFhWBlJbZaitjYidYqqJ2msLVNIdoIYhotDJrERPwTo9FGgoKomPizyCx5HHfJ5W6PKLwPln23O2/m+2beDHuQkZGRkZGRkZGRsVaodMKpWutfgEql/HClekyIA1SBPxGjEmvKFlLtEPmuILwD2Bbrrga2aw81vbrjvlN9pN5XB+JZV2r7TyAhVEkIHlRH1bfqtPpU3dcJEW0doZpmrQILwAlgCOgDfgDfgc3AHeBY2HTFnrZFtCyghnwliJ0FrrA4dX6F/yrwE+gGrgOnw7bY15aIVY+DOs26APQAl4CTwFcWm3Z9vDdsfsfvPhYrdBGYZ2latTSdVrWjAfktwFXgMDAX73rifh7oDXHzLFVlEzAMnAO+Jb5oVUhT5JOraMRB9Z46q46p49G0o9HIhf2ReP8usfukDqv9HZ9QDcjvV5+oM0FqTP2oPlR3JSO1sN+jjtTYz6iP1d0dE9FgTB5Xp9Q3SUY/q3fVrXXIFOv+yPps7Cmq8iKqVNhWShFRQ74a6zPqe/VVkHgZx+Gm2lsvkzXPNqpDIXgifLwOIac6IaJwtE69HMdkMrI3qX5QL4RdKrReIqpN+qq2TT7JfJG1W5G18Vay1mQ1J6KaN9QNhX0ZAm6rX9TnEailc9tEP41HjDn1WsqhVQFFpg6E46nI2Eirk2OFiTYd1Xim7k05tFOFQsTROEJtz+4GIgbVBzFaD5VFvp6I7WXM7AYiBpJj2VQjV1YKUmMrJf5NrPFfDZ9FjKWvxWVirBh9mSClfbMkMdLP8hXJZ2RkZGRkZGRk/Of4C+SocIHTgZJqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEyLTA2LTExVDE3OjMwOjExLTA3OjAwuPaWLwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMi0wNi0xMVQxNzoyOToyOC0wNzowMO8nmKkAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
    upicon = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAAqhJREFUaN7tl8+rTVEUxz/n3itFSEooCRNGisEbqJfRG0jJHyBlxNAQycQMmTCTiQxkaoKUEhMT4j2/8uvxUCYGT3n03sfgrOttt3vdX+cltb91Ouees/da3+/aa629L2RkZGRkZGRkZPy3KLoNUNOfdWAOEKAouk7vCYmPIq653y+6+Pjr1xbyRRDv20kf5El8zH/4i/1aj35qYXAM2Bjk6x2E9kw8mVcP+2uA3fFcG8Z+6qQW913qe/WGuine1ZtE+nGSzklsrFevq5/V3anvKsjvUB+qL9V36gN1ZBARHchvU++rk+oL9bG6sxcR3VKoOXM/sAH4DnwDVgGXgX3AbKRA0W25W/K9HnPHgCvAOmAamInngy0cBlqFIqKwRD2vflKfqhOxGpPq4SRSRaeVSKJeJJE/oL5VX4XNiUihi+qyZPzAGlLHNfWY+kF9ro7HfUo9pS5qSbtONoq4erE1XJ/uMWpPI2qXkqj9URct75aqF2I1nw2ymlWIGFOfhJDxIPExusj6NiKaz6vVayF4Iua+jsLdl4ythnwbEa2d41601vG43kc32Z6MbcTzVvVOpElz/OQwHa0KEc3e/SmJaHNVxpLxo+qjaMHNcVPqLXXzMOT7KpI256JZYDlwFtgDfKXcpRcDDeAEZds9HXNm4r4SuA0cAb4ktkpSfRxNBqryREgtCDeAk5S9ezrILGJ+f5gFfsT4FZR7yIkQNDD5gQW0iEgPd4eAo0H2J/Mb5VwIWgKcAc4xf74a6mQ7VJ9tEVGLSO6lTJkG5c4NZUoJHAeuskDH8oFFtCnukegu79Q3UcCjC9YmF0jEJvWmelfdEu8aVbfJytauQ4daS5laUwxZrAsuoI2ItEib3apS8pULaCMk/Zv4b4s1IyMjIyMjIyMjo3L8Aiio4mq1wS1lAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEyLTA2LTA2VDExOjMzOjA4LTA3OjAw0EmEigAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMi0wNi0wNlQxMTozMDo0Mi0wNzowMGoZ1oEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
    screenWidth = ctx.getWindowManager().getDefaultDisplay().getWidth(),
    screenHeight = ctx.getWindowManager().getDefaultDisplay().getHeight(),
    textSize = 10,
    tempkb = new Array(1000),
    listar = new Array(5),
    r = 255,
    g = 0,
    b = 0,
    horizontalmainlist, hostlayoutlist,
    intoggle = android.graphics.Color.WHITE,
    active = android.graphics.Color.GREEN,
    inactive = android.graphics.Color.RED;

var enabledBox = new android.graphics.drawable.GradientDrawable();
enabledBox.setColor(android.graphics.Color.GREEN);
enabledBox.setAlpha(160);
var disabledBox = new android.graphics.drawable.GradientDrawable();
disabledBox.setColor(android.graphics.Color.RED);
disabledBox.setAlpha(160);
var buttonBox = new android.graphics.drawable.GradientDrawable();
buttonBox.setColor(android.graphics.Color.WHITE);
buttonBox.setAlpha(160);
var favSelOn = new android.graphics.drawable.GradientDrawable();
favSelOn.setColor(Color.parseColor("#00ffd8"));
favSelOn.setAlpha(160);
var favSelOff = new android.graphics.drawable.GradientDrawable();
favSelOff.setColor(Color.parseColor("#0f6bff"));
favSelOff.setAlpha(160);
var closestyle = new android.graphics.drawable.GradientDrawable();
closestyle.setColor(Color.parseColor("#000000"));
closestyle.setStroke(dip2px(1), Color.parseColor("#000000"));
closestyle.setAlpha(160);
var closestyle1 = new android.graphics.drawable.GradientDrawable();
closestyle1.setColor(Color.parseColor("#000000"));
closestyle1.setStroke(dip2px(1), Color.parseColor("#000000"));
closestyle1.setAlpha(160);
var editstyle = new android.graphics.drawable.GradientDrawable();
editstyle.setColor(Color.parseColor("#000000"));
editstyle.setStroke(dip2px(1), Color.parseColor("#000000"));
editstyle.setAlpha(160);
var backgroundstyle = new android.graphics.drawable.GradientDrawable();
backgroundstyle.setColor(Color.parseColor("#000000"));
backgroundstyle.setStroke(dip2px(0.5), Color.parseColor("#ffffff"));
backgroundstyle.setAlpha(200);
var backgroundstyle1 = new android.graphics.drawable.GradientDrawable();
backgroundstyle1.setColor(Color.parseColor("#960e00"));
backgroundstyle1.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle1.setAlpha(200);
var backgroundstyle2 = new android.graphics.drawable.GradientDrawable();
backgroundstyle2.setColor(Color.parseColor("#960e00"));
backgroundstyle2.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle2.setAlpha(200);
var backgroundstyle3 = new android.graphics.drawable.GradientDrawable();
backgroundstyle3.setColor(Color.parseColor("#960e00"));
backgroundstyle3.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle3.setAlpha(200);
var backgroundstyle4 = new android.graphics.drawable.GradientDrawable();
backgroundstyle4.setColor(Color.parseColor("#960e00"));
backgroundstyle4.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle4.setAlpha(200);
var backgroundstyle5 = new android.graphics.drawable.GradientDrawable();
backgroundstyle5.setColor(Color.parseColor("#960e00"));
backgroundstyle5.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle5.setAlpha(200);
var backgroundstyle6 = new android.graphics.drawable.GradientDrawable();
backgroundstyle6.setColor(Color.parseColor("#960e00"));
backgroundstyle6.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle6.setAlpha(200);
var backgroundstyle7 = new android.graphics.drawable.GradientDrawable();
backgroundstyle7.setColor(Color.parseColor("#960e00"));
backgroundstyle7.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle7.setAlpha(200);
var backgroundstyle8 = new android.graphics.drawable.GradientDrawable();
backgroundstyle8.setColor(Color.parseColor("#960e00"));
backgroundstyle8.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyle8.setAlpha(200);
var backgroundstyleU = new android.graphics.drawable.GradientDrawable();
backgroundstyleU.setColor(Color.parseColor("#960e00"));
backgroundstyleU.setStroke(dip2px(1), Color.parseColor("#000000"));
backgroundstyleU.setAlpha(200);
var keystyle = new android.graphics.drawable.GradientDrawable();
keystyle.setColor(android.graphics.Color.BLACK);
keystyle.setStroke(dip2px(1), Color.parseColor("#ffffff"));
keystyle.setAlpha(140);
var titlestyle = new android.graphics.drawable.GradientDrawable();
titlestyle.setColor(Color.parseColor("#5fff54"));
titlestyle.setStroke(dip2px(1), Color.parseColor("#ffffff"));
titlestyle.setAlpha(180);
var toaststyle = new android.graphics.drawable.GradientDrawable();
toaststyle.setColor(android.graphics.Color.BLACK);
toaststyle.setStroke(dip2px(1), inactive);
var lite = parseUrl("http://instinctmods.com/jelly/jelly_vertical.json?" + Math.floor(Math.random() * 1000)),
    installed = "0.16";
try {
    if (lite == undefined) {
        updateText = "\n§c§lCould not Connect";
        print("Jelly.js by Shark\nInstalled Version: " + installed + "\nPublic Version: No Connection" + "\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss");
    } else {
        if (lite.version != installed) {
            updateText = "\n§c§lUpdate to Version " + lite.version;
            print("Jelly.js by Shark\nUpdate Available, go to www.instinctmods.com to update\n\nInstalled Version: " + installed + "\nPublic Version: " + lite.version + "\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss");
        } else {
            updateText = "\n§a§lLatest Version Installed";
            print("Jelly.js by Shark\nLatest Version Installed\n\nInstalled Version: " + installed + "\nPublic Version: " + lite.version + "\n\n· Long press mods to access settings for that module.\n· Long press keybinds to dismiss");
        }
    }
} catch (e) {}

function filterValue(obj, key, value) {
    return obj.find(function(v) {
        return v[key] === value
    });
}

function isOn(arr, val) {
        for (var i = 0, length = arr.length; i < length; i++) {
            if (arr[i].name == val && arr[i].state) {
                return arr[i];
            }
        }
    }
    /*getSetting(movementTab,"Teleport","x")*/

function getSetting(arr, name, setting) {
    for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i].name == name) {
            var settingarr = arr[i].setting.split(';')
            for (var i = 0, length = settingarr.length; i < length; i++) {
                if (settingarr[i].split(':')[0] == setting) {
                    return settingarr[i].split(':')[1];
                }
            }
        }
    }
}

function checkTick(arr, type) {
    for (var i = 0, length = arr.length; i < length; i++) {
        var safe = confirmScreenSafe(),
            arp = arr[i].rp,
            aste = arr[i].state;
        if (type == "tick") {
            if (safe && arp == type && aste) {
                var call = new Function(arr[i].call);
                call();
            }
        }
        if (type == "t10") {
            if (safe && arp == type && aste) {
                var call = new Function(arr[i].call);
                call();
            }
        }
        if (type == "atthook") {
            if (safe && aste) {
                if (arp == type || arp == "attusehook") {
                    var call = new Function(arr[i].call);
                    call();
                }
            }
        }
        if (type == "usehook") {
            if (safe && aste) {
                if (arp == type || arp == "attusehook") {
                    var call = new Function(arr[i].call);
                    call();
                }
            }
        }
    }
    return
}

function closeMenu() {
    potionTab[0].menu = false;
    survivalTab[0].menu = false;
    movementTab[0].menu = false;
    pvpTab[0].menu = false;
    exploitTab[0].menu = false;
    friendTab[0].menu = false;
    waypointTab[0].menu = false;
    favoriteTab[0].menu = false;
    openMenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40), dip2px(40)));
    openMenu.getLayoutParams().setMargins(dip2px(5), dip2px(5), dip2px(5), dip2px(5));
    menuOpen = false;
    LIST.dismiss();
}

function dip2px(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
};

function changeOrientation() {
    horizontal = survivalTab[1].state;
    if (survivalTab[1].state) {
        horizontallay = 0
    } else {
        horizontallay = 1
    }
    LIST.dismiss();
    seeList();
}

function tohtml(strin, boo) {
    var str = decodeURIComponent(strin.toString());
    if (str.includes("-")) {
        str = str.replace("-", "");
        str = str.slice(1);
        str = str.slice(1);
    }
    if (str.includes(">")) {
        str = str.replace(">", "");
        str = str.slice(1);
        str = str.slice(1);
    }
    if (boo) {
        var statuss = "<font color=#3ef900>-</font>";
    } else {
        var statuss = "<font color=#ff0000>></font>";
    }
    var htmld = Html.fromHtml("<font color=#000000>&#8203 &#8203" + str + "</font>    <b>" + statuss)
    return htmld
}

function createItem(i, arr, hide, favSel) {
    if (arr != favoriteTab && !favSel) {
        for (var e = 1; e < favoriteTab.length; e++) {
            if (arr[i].name == favoriteTab[e].name) {
                hide = true;
            }
        }
    }
    var backgroundstyle = new android.graphics.drawable.GradientDrawable();
    backgroundstyle.setColor(android.graphics.Color.BLACK);
    backgroundstyle.setAlpha(120);
    if (favSel) {
        var isOn = favSel;
    }

    function changeColor() {
        arr[i].state ? (sub1.setTextColor(active), s2.setBackground(enabledBox)) : (sub1.setTextColor(inactive), s2.setBackground(disabledBox));
        arr[i].style == "white" ? (sub1.setTextColor(intoggle), s2.setBackground(buttonBox)) : '';
    }
    var layout = new LinearLayout(ctx);
    layout.setOrientation(0);
    var sub1 = new TextView(ctx);
    sub1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    if (horizontalmenu) {
        sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
    }
    if (arr[i].display == "hidden" || hide || arr[i].removed) {
        sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
    }
    sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
    var s2 = new TextView(ctx);
    s2.setBackground(disabledBox);
    s2.setLayoutParams(new LinearLayout.LayoutParams(dip2px(2), dip2px(30)));
    if (arr[i].display == "hidden" || hide || arr[i].removed) {
        s2.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
    }
    s2.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
    s2.setText("");
    changeColor();
    sub1.setText(" " + arr[i].name + " ");
    sub1.setSingleLine();

    function clicked() {
        if (favSel == undefined) {
            if (arr == waypointTab && waypointTab.length > 1 && i > 0) {
                Entity.setPosition(getPlayerEnt(), arr[i].X, arr[i].Y + 2, arr[i].Z);
            }
            if (arr == friendTab && friendTab.length > 2 && i > 1) {
                friendTab.splice(i, 1);
                ctx.runOnUiThread(new Runnable({
                    run: function() {
                        try {
                            friendview.removeAllViews();
                            for (var i = 0; i < friendTab.length; i++) {
                                friendview.addView(createItem(i, friendTab));
                            }
                            listar[6].setText(tohtml('Friends (' + (friendTab.length - 2) + ')', true));
                        } catch (e) {}
                    }
                }));
                return;
            }
            if (arr[i].rp && arr[i].rp == "kb") arr[i].state = undefined;
            if (arr[i].state != undefined) {
                if (arr[i].delayedStart != true) {
                    arr[i].state = !arr[i].state;
                    changeColor();
                } else {
                    newKeybind(i, arr);
                }
            }
            if (arr[i].call) {
                var callthis = new Function(arr[i].call);
                if (arr[i].type == "button") {
                    if (arr[i].rp && !arr[i].rp.includes("hook") && arr[i].rp != "kb") {
                        callthis();
                    } else if (arr[i].rp == undefined && arr[i].state != undefined) {
                        callthis();
                    } else if (arr[i].style == "white" && arr[i].state == undefined) {
                        callthis();
                    }
                } else if (arr[i].type == "switch") {
                    if (arr[i].rp && !arr[i].rp.includes("hook")) {
                        arr[i].state ? callthis() : '';
                    } else if (arr[i].rp == undefined) {
                        arr[i].state ? callthis() : '';
                    }
                }
            }
            if (arr[i].keystate == false && arr[i].state) {
                newKeybind(i, arr);
                arr[i].keystate = true;
            } else if (arr[i].keystate == false && arr[i].state == undefined) {
                newKeybind(i, arr);
                arr[i].keystate = true;
                if (arr[i].name == "Elevator") {
                    newKeybind(i + 1, arr);
                    arr[i + 1].keystate = true;
                }
            }
            try {
                if (arr[i].rp != "kb") {
                    arr[i].state ? tempkb[parseInt(arr[0].id + "" + i)].setTextColor(active) : tempkb[parseInt(arr[0].id + "" + i)].setTextColor(inactive);
                }
            } catch (e) {}
        } else {
            if (isOn == 'on') {
                sub1.setTextColor(Color.parseColor("#0f6bff"));
                s2.setBackground(favSelOff);
                addFavorite(arr, i, true);
                isOn = 'off';
            } else if (isOn == 'off') {
                sub1.setTextColor(Color.parseColor("#00ffd8"));
                s2.setBackground(favSelOn);
                addFavorite(arr, i);
                isOn = 'on';
            }
        }
    }
    if (extended || arr == waypointTab && i > 0) {
        layout.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg) {
                clicked();
            }
        }));
    }
    sub1.setOnClickListener(new View.OnClickListener({
        onClick: function(viewarg) {
            clicked();
        }
    }));
    sub1.setOnLongClickListener(new android.view.View.OnLongClickListener({
        onLongClick: function() {
            if (arr == waypointTab && waypointTab.length > 1 && i > 0) {
                arr[0].setting = "name:" + arr[i].name + ";X:" + arr[i].X + ";Y:" + arr[i].Y + ";Z:" + arr[i].Z + ";";
                openSetting(0, arr, "add waypoint", i);
                return true;
            }
            if (arr[i].setting) {
                openSetting(i, arr);
            } else {
                print(arr[i].name + " has no settings")
            }
            return true;
        }
    }));
    sub1.setGravity(Gravity.CENTER_VERTICAL | Gravity.RIGHT);
    sub1.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
    sub1.setMarqueeRepeatLimit(-1);
    sub1.setHorizontallyScrolling(true);
    sub1.setSelected(true);
    sub1.setPadding(0, dip2px(5), 0, dip2px(5));
    if (isOn == 'on') {
        sub1.setTextColor(Color.parseColor("#00ffd8"));
        s2.setBackground(favSelOn);
    }
    if (isOn == 'off') {
        sub1.setTextColor(Color.parseColor("#0f6bff"));
        s2.setBackground(favSelOff);
    }
    if (horizontalmenu) {
        sub1.setGravity(Gravity.CENTER_VERTICAL);
    }
    s2.setGravity(Gravity.CENTER_VERTICAL | Gravity.RIGHT);
    if (horizontalmenu) {
        s2.setGravity(Gravity.CENTER_VERTICAL);
    }
    if (sub1.getParent() != null) {
        sub1.getParent().removeView(sub1);
    }
    if (!horizontalmenu) {
        layout.addView(sub1);
    }
    if (!horizontalmenu) {
        layout.setGravity(Gravity.RIGHT);
    }
    if (s2.getParent() != null) {
        s2.getParent().removeView(s2);
    }
    layout.addView(s2);
    if (horizontalmenu) {
        layout.addView(sub1);
    }
    layout.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, dip2px(30)));
    if (!horizontalmenu && !hide) {
        layout.getLayoutParams().setMargins(0, dip2px(5), 0, 0);
    }
    if (arr[i].display == "hidden" || hide) {
        layout.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
        layout.getLayoutParams().setMargins(0, 0, 0, 0);
    }
    layout.setBackground(backgroundstyle);
    return layout;
}

function seeList() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                try {
                    for (var i = 0; i < listar.length; i++) {
                        listar[i].getBackground().setColor(Color.parseColor(rgbToHex(menuRed, menuGreen, menuBlue)));
                    }
                } catch (e) {}
                hosthostlay = new LinearLayout(ctx);
                hosthostlay.setOrientation(1);
                hosthostlay.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), RelativeLayout.LayoutParams.WRAP_CONTENT));
                buttonview = new LinearLayout(ctx);
                buttonview.setOrientation(0);
                buttonview.setBackground(editstyle);
                if (horizontalmenu) {
                    hosthostlay.setOrientation(0);
                    hosthostlay.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, dip2px(30)));
                }
                closemenu = new Button(ctx);
                if (horizontalmenu) {
                    closemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                    closemenu.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                    closemenu.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER);
                    closemenu.setPadding(0, 0, 0, 0);
                }
                closemenu.setTextColor(Color.parseColor("#ffffff"));
                closemenu.setBackgroundDrawable(closestyle1);
                closemenu.setText("Close");
                closemenu.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (closemenu.getText() == "Finish") {
                            LIST.dismiss();
                            seeList();
                        } else {
                            closeMenu();
                        }
                    }
                }));
                hosthostlay.addView(closemenu);

                var updateTxt = new TextView(ctx);
                updateTxt.setTextColor(Color.parseColor("#000000"));
                updateTxt.setBackground(backgroundstyleU);
                updateTxt.setText(Html.fromHtml("Update"));
                updateTxt.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                updateTxt.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                updateTxt.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                updateTxt.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        openUpdateSel();
                    }
                }));
                if (lite != undefined && lite.version != installed) {
                    hosthostlay.addView(updateTxt);
                }
                listar[5] = updateTxt;

                searchb = new EditText(ctx);
                searchb.setHint("search");
                searchb.setTextColor(android.graphics.Color.WHITE);
                searchb.setHintTextColor(Color.parseColor("#b7b7b7"));
                searchb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(70), dip2px(30)));
                if (horizontalmenu) {
                    searchb.setLayoutParams(new LinearLayout.LayoutParams(dip2px(50), dip2px(30)));
                    searchb.setPadding(0, 0, 0, 0);
                }
                searchb.addTextChangedListener(new android.text.TextWatcher() {
                    afterTextChanged: function(text) {
                        try {
                            if (!searchb.getText().toString().matches("")) {
                                survivalview.removeAllViews();
                                pvpview.removeAllViews();
                                potionview.removeAllViews();
                                movementview.removeAllViews();
                                exploitview.removeAllViews();
                                friendview.removeAllViews();
                                waypointview.removeAllViews();
                                favoriteview.removeAllViews();
                                for (var i = 0; i < survivalTab.length; i++) {
                                    if (survivalTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        survivalview.addView(createItem(i, survivalTab));
                                    } else {
                                        survivalview.addView(createItem(i, survivalTab, true));
                                    }
                                }
                                for (var i = 0; i < pvpTab.length; i++) {
                                    if (pvpTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        pvpview.addView(createItem(i, pvpTab));
                                    } else {
                                        pvpview.addView(createItem(i, pvpTab, true));
                                    }
                                }
                                for (var i = 0; i < potionTab.length; i++) {
                                    if (potionTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        potionview.addView(createItem(i, potionTab));
                                    } else {
                                        potionview.addView(createItem(i, potionTab, true));
                                    }
                                }
                                for (var i = 0; i < movementTab.length; i++) {
                                    if (movementTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        movementview.addView(createItem(i, movementTab));
                                    } else {
                                        movementview.addView(createItem(i, movementTab, true));
                                    }
                                }
                                for (var i = 0; i < exploitTab.length; i++) {
                                    if (exploitTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        exploitview.addView(createItem(i, exploitTab));
                                    } else {
                                        exploitview.addView(createItem(i, exploitTab, true));
                                    }
                                }
                                for (var i = 0; i < friendTab.length; i++) {
                                    if (friendTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        friendview.addView(createItem(i, friendTab));
                                    } else {
                                        friendview.addView(createItem(i, friendTab, true));
                                    }
                                }
                                for (var i = 0; i < waypointTab.length; i++) {
                                    if (waypointTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        waypointview.addView(createItem(i, waypointTab));
                                    } else {
                                        waypointview.addView(createItem(i, waypointTab, true));
                                    }
                                }
                                for (var i = 0; i < favoriteTab.length; i++) {
                                    if (favoriteTab[i].name.toString().toLowerCase().indexOf(text.toString().toLowerCase()) !== -1) {
                                        favoriteview.addView(createItem(i, favoriteTab));
                                    } else {
                                        favoriteview.addView(createItem(i, favoriteTab, true));
                                    }
                                }
                                openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(0)));
                                openPvp.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openPotion.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openMovement.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openExploit.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openFriend.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                openFavorite.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                if (horizontalmenu) {
                                    openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(0), dip2px(0)));
                                }
                            } else {
                                survivalview.removeAllViews();
                                pvpview.removeAllViews();
                                potionview.removeAllViews();
                                movementview.removeAllViews();
                                exploitview.removeAllViews();
                                friendview.removeAllViews();
                                waypointview.removeAllViews();
                                favoriteview.removeAllViews();
                                openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openPvp.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openPotion.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openMovement.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openExploit.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openFriend.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                openFavorite.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                survivalTab[0].menu = false;
                                openSurvival.setText(tohtml("Survival (" + survivalTab.length + ")", false));
                                pvpTab[0].menu = false;
                                openPvp.setText(tohtml("PVP (" + pvpTab.length + ")", false));
                                potionTab[0].menu = false;
                                openPotion.setText(tohtml("Potion (" + potionTab.length + ")", false));
                                movementTab[0].menu = false;
                                openMovement.setText(tohtml("Move (" + (movementTab.length - 1) + ")", false));
                                exploitTab[0].menu = false;
                                openExploit.setText(tohtml("Exploit (" + (exploitTab.length - 1) + ")", false));
                                friendTab[0].menu = false;
                                openFriend.setText(tohtml("Friends (" + (friendTab.length - 2) + ")", false));
                                waypointTab[0].menu = false;
                                openWaypoint.setText(tohtml("Waypoints (" + (waypointTab.length - 1) + ")", false));
                                favoriteTab[0].menu = false;
                                openFavorite.setText(tohtml("Favorites (" + (favoriteTab.length - 1) + ")", false));
                            }
                        } catch (e) {
                            clientMessage(e)
                        }
                    }
                });
                searchb.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        openEdit();
                    }
                }));
                searchb.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                buttonview.addView(searchb);

                var rotatemenu = new android.widget.ImageView(ctx);
                rotatemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(30), dip2px(30)));
                rotatemenu.getLayoutParams().gravity = Gravity.CENTER;
                rotatemenu.setBackgroundResource(android.R.drawable.ic_menu_rotate);
                rotatemenu.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        horizontalmenu = !horizontalmenu;
                        LIST.dismiss();
                        seeList();
                    }
                }));
                buttonview.addView(rotatemenu);
                if (horizontalmenu) {
                    var rotatemenu = new android.widget.ImageView(ctx);
                    rotatemenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(30), dip2px(30)));
                    rotatemenu.getLayoutParams().gravity = Gravity.CENTER;
                    if (bottommenu) {
                        rotatemenu.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(downicon, 0), 0, android.util.Base64.decode(downicon, 0).length)));
                    } else {
                        rotatemenu.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(upicon, 0), 0, android.util.Base64.decode(upicon, 0).length)));
                    }
                    rotatemenu.setOnClickListener(new View.OnClickListener({
                        onClick: function(viewarg) {
                            bottommenu = !bottommenu;
                            LIST.dismiss();
                            seeList();
                        }
                    }));
                    buttonview.addView(rotatemenu);
                }

                hosthostlay.addView(buttonview);

                var scrollText = new android.widget.TextView(ctx);
                scrollText.setText("Jelly by Shark. Long Press mods for settings. Long Press waypoints to edit/delete");
                scrollText.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                scrollText.setTextColor(android.graphics.Color.WHITE);
                scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
                scrollText.setMarqueeRepeatLimit(-1);
                scrollText.setBackgroundDrawable(closestyle);
                scrollText.setSingleLine();
                scrollText.setHorizontallyScrolling(true);
                scrollText.setSelected(true);
                if (!horizontalmenu) hosthostlay.addView(scrollText);

                horizontalmainlist = new LinearLayout(ctx);
                horizontalmainlist.setOrientation(1);
                if (horizontalmenu) {
                    horizontalmainlist.setOrientation(0);
                }
                var hostscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    hostscroll = new android.widget.HorizontalScrollView(ctx);
                }
                hostlayoutlist = new LinearLayout(ctx);
                hostlayoutlist.setOrientation(1);
                if (horizontalmenu) {
                    hostlayoutlist.setOrientation(0);
                }
                hostscroll.addView(hostlayoutlist);
                hosthostlay.addView(hostscroll);
                horizontalmainlist.addView(hosthostlay);

                var survivalhost = new LinearLayout(ctx);
                survivalhost.setOrientation(1);
                if (horizontalmenu) {
                    survivalhost.setOrientation(0);
                }
                survivalview = new LinearLayout(ctx);
                survivalview.setOrientation(1);
                survivalview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    survivalview.setOrientation(0);
                }
                var survivalscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    survivalscroll = new android.widget.HorizontalScrollView(ctx);
                }
                survivalscroll.addView(survivalview);

                var pvphost = new LinearLayout(ctx);
                pvphost.setOrientation(1);
                if (horizontalmenu) {
                    pvphost.setOrientation(0);
                }
                pvpview = new LinearLayout(ctx);
                pvpview.setOrientation(1);
                pvpview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    pvpview.setOrientation(0);
                }
                var pvpscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    pvpscroll = new android.widget.HorizontalScrollView(ctx);
                }
                pvpscroll.addView(pvpview);

                var potionhost = new LinearLayout(ctx);
                potionhost.setOrientation(1);
                if (horizontalmenu) {
                    potionhost.setOrientation(0);
                }
                potionview = new LinearLayout(ctx);
                potionview.setOrientation(1);
                potionview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    potionview.setOrientation(0);
                }
                var potionscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    potionscroll = new android.widget.HorizontalScrollView(ctx);
                }
                potionscroll.addView(potionview);

                var movementhost = new LinearLayout(ctx);
                movementhost.setOrientation(1);
                if (horizontalmenu) {
                    movementhost.setOrientation(0);
                }
                movementview = new LinearLayout(ctx);
                movementview.setOrientation(1);
                movementview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    movementview.setOrientation(0);
                }
                var movementscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    movementscroll = new android.widget.HorizontalScrollView(ctx);
                }
                movementscroll.addView(movementview);

                var exploithost = new LinearLayout(ctx);
                exploithost.setOrientation(1);
                if (horizontalmenu) {
                    exploithost.setOrientation(0);
                }
                exploitview = new LinearLayout(ctx);
                exploitview.setOrientation(1);
                exploitview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    exploitview.setOrientation(0);
                }
                var exploitscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    exploitscroll = new android.widget.HorizontalScrollView(ctx);
                }
                exploitscroll.addView(exploitview);

                var friendhost = new LinearLayout(ctx);
                friendhost.setOrientation(1);
                if (horizontalmenu) {
                    friendhost.setOrientation(0);
                }
                friendview = new LinearLayout(ctx);
                friendview.setOrientation(1);
                friendview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    friendview.setOrientation(0);
                }
                var friendscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    friendscroll = new android.widget.HorizontalScrollView(ctx);
                }
                friendscroll.addView(friendview);

                var waypointhost = new LinearLayout(ctx);
                waypointhost.setOrientation(1);
                if (horizontalmenu) {
                    waypointhost.setOrientation(0);
                }
                waypointview = new LinearLayout(ctx);
                waypointview.setOrientation(1);
                waypointview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    waypointview.setOrientation(0);
                }
                var waypointscroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    waypointscroll = new android.widget.HorizontalScrollView(ctx);
                }
                waypointscroll.addView(waypointview);

                var favoritehost = new LinearLayout(ctx);
                favoritehost.setOrientation(1);
                if (horizontalmenu) {
                    favoritehost.setOrientation(0);
                }
                favoriteview = new LinearLayout(ctx);
                favoriteview.setOrientation(1);
                favoriteview.setGravity(Gravity.RIGHT);
                if (horizontalmenu) {
                    favoriteview.setOrientation(0);
                }
                var favoritescroll = new android.widget.ScrollView(ctx);
                if (horizontalmenu) {
                    favoritescroll = new android.widget.HorizontalScrollView(ctx);
                }
                favoritescroll.addView(favoriteview);

                function closeFav() {
                    favoriteTab[0].menu = false;
                    favoriteview.removeAllViews();
                    openFavorite.setText(tohtml("Favorites (" + (favoriteTab.length - 1) + ")", false))
                }

                function closeRest() {
                    potionTab[0].menu = false;
                    survivalTab[0].menu = false;
                    movementTab[0].menu = false;
                    pvpTab[0].menu = false;
                    exploitTab[0].menu = false;
                    survivalview.removeAllViews();
                    pvpview.removeAllViews();
                    potionview.removeAllViews();
                    movementview.removeAllViews();
                    exploitview.removeAllViews();
                    openSurvival.setText(tohtml("Survival (" + survivalTab.length + ")", false));
                    openPvp.setText(tohtml("PVP (" + pvpTab.length + ")", false));
                    openPotion.setText(tohtml("Potion (" + potionTab.length + ")", false));
                    openMovement.setText(tohtml("Move (" + (movementTab.length - 1) + ")", false));
                    openExploit.setText(tohtml("Exploit (" + (exploitTab.length - 1) + ")", false));
                }

                var openFavorite = new TextView(ctx);
                openFavorite.setTextColor(Color.parseColor("#000000"));
                openFavorite.setBackground(backgroundstyle8);
                openFavorite.setText(tohtml("Favorites (" + (favoriteTab.length - 1) + ")", false));
                openFavorite.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openFavorite.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openFavorite.setGravity(Gravity.CENTER_VERTICAL);
                openFavorite.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!fF) {
                            loadF();
                            fF = true;
                        }
                        favoriteTab[0].menu = !favoriteTab[0].menu;
                        favoriteTab[0].menu ? openFavorite.setText(tohtml("Favorites (" + (favoriteTab.length - 1) + ")", true)) : openFavorite.setText(tohtml("Favorites (" + (favoriteTab.length - 1) + ")", false));
                        if (favoriteTab[0].menu) {
                            closeRest();
                            for (var i = 0; i < favoriteTab.length; i++) {
                                if (favoriteTab[i].display != "hidden") {
                                    favoriteview.addView(createItem(i, favoriteTab));
                                }
                            }
                        } else {
                            favoriteview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openFavorite);
                hostlayoutlist.addView(favoritehost);
                favoritehost.addView(favoritescroll);
                listar[8] = openFavorite;

                var openSurvival = new TextView(ctx);
                openSurvival.setTextColor(Color.parseColor("#000000"));
                openSurvival.setBackground(backgroundstyle2);
                openSurvival.setText(tohtml("Survival (" + survivalTab.length + ")", false));
                openSurvival.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openSurvival.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openSurvival.setGravity(Gravity.CENTER_VERTICAL);
                openSurvival.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        survivalTab[0].menu = !survivalTab[0].menu;
                        closeFav()
                        survivalTab[0].menu ? openSurvival.setText(tohtml("Survival (" + survivalTab.length + ")", true)) : openSurvival.setText(tohtml("Survival (" + survivalTab.length + ")", false));
                        if (survivalTab[0].menu) {
                            for (var i = 0; i < survivalTab.length; i++) {
                                survivalview.addView(createItem(i, survivalTab));
                            }
                        } else {
                            survivalview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openSurvival);
                hostlayoutlist.addView(survivalhost);
                survivalhost.addView(survivalscroll);
                listar[0] = openSurvival;
                var openPvp = new TextView(ctx);
                openPvp.setTextColor(Color.parseColor("#000000"));
                openPvp.setBackground(backgroundstyle3);
                openPvp.setText(tohtml("PVP (" + pvpTab.length + ")", false));
                openPvp.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openPvp.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openPvp.setGravity(Gravity.CENTER_VERTICAL);
                openPvp.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        pvpTab[0].menu = !pvpTab[0].menu;
                        closeFav()
                        pvpTab[0].menu ? openPvp.setText(tohtml("PVP (" + pvpTab.length + ")", true)) : openPvp.setText(tohtml("PVP (" + pvpTab.length + ")", false));
                        if (pvpTab[0].menu) {
                            for (var i = 0; i < pvpTab.length; i++) {
                                pvpview.addView(createItem(i, pvpTab));
                            }
                        } else {
                            pvpview.removeAllViews()
                        }
                    }
                }));
                hostlayoutlist.addView(openPvp);
                hostlayoutlist.addView(pvphost);
                pvphost.addView(pvpscroll);
                listar[1] = openPvp;
                var openPotion = new TextView(ctx);
                openPotion.setTextColor(Color.parseColor("#000000"));
                openPotion.setBackground(backgroundstyle4);
                openPotion.setText(tohtml("Potion (" + potionTab.length + ")", false));
                openPotion.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openPotion.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openPotion.setGravity(Gravity.CENTER_VERTICAL);
                openPotion.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        potionTab[0].menu = !potionTab[0].menu;
                        closeFav()
                        potionTab[0].menu ? openPotion.setText(tohtml("Potion (" + potionTab.length + ")", true)) : openPotion.setText(tohtml("Potion (" + potionTab.length + ")", false));
                        if (potionTab[0].menu) {
                            for (var i = 0; i < potionTab.length; i++) {
                                potionview.addView(createItem(i, potionTab));
                            }
                        } else {
                            potionview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openPotion);
                hostlayoutlist.addView(potionhost);
                potionhost.addView(potionscroll);
                listar[2] = openPotion;
                var openMovement = new TextView(ctx);
                openMovement.setTextColor(Color.parseColor("#000000"));
                openMovement.setBackground(backgroundstyle5);
                openMovement.setText(tohtml("Move (" + (movementTab.length - 1) + ")", false));
                openMovement.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openMovement.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openMovement.setGravity(Gravity.CENTER_VERTICAL);
                openMovement.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        movementTab[0].menu = !movementTab[0].menu;
                        closeFav()
                        movementTab[0].menu ? openMovement.setText(tohtml("Move (" + (movementTab.length - 1) + ")", true)) : openMovement.setText(tohtml("Move (" + (movementTab.length - 1) + ")", false));
                        if (movementTab[0].menu) {
                            for (var i = 0; i < movementTab.length; i++) {
                                movementview.addView(createItem(i, movementTab));
                            }
                        } else {
                            movementview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openMovement);
                hostlayoutlist.addView(movementhost);
                movementhost.addView(movementscroll);
                listar[3] = openMovement;
                var openExploit = new TextView(ctx);
                openExploit.setTextColor(Color.parseColor("#000000"));
                openExploit.setBackground(backgroundstyle1);
                openExploit.setText(tohtml("Exploit (" + (exploitTab.length - 1) + ")", false));
                openExploit.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openExploit.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openExploit.setGravity(Gravity.CENTER_VERTICAL);
                openExploit.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        exploitTab[0].menu = !exploitTab[0].menu;
                        closeFav()
                        exploitTab[0].menu ? openExploit.setText(tohtml("Exploit (" + (exploitTab.length - 1) + ")", true)) : openExploit.setText(tohtml("Exploit (" + (exploitTab.length - 1) + ")", false));
                        if (exploitTab[0].menu) {
                            for (var i = 0; i < exploitTab.length; i++) {
                                if (exploitTab[i].display != "hidden") {
                                    exploitview.addView(createItem(i, exploitTab));
                                }
                            }
                        } else {
                            exploitview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openExploit);
                hostlayoutlist.addView(exploithost);
                exploithost.addView(exploitscroll);
                listar[4] = openExploit;

                var openFriend = new TextView(ctx);
                openFriend.setTextColor(Color.parseColor("#000000"));
                openFriend.setBackground(backgroundstyle6);
                openFriend.setText(tohtml("Friends (" + (friendTab.length - 2) + ")", false));
                openFriend.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openFriend.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openFriend.setGravity(Gravity.CENTER_VERTICAL);
                openFriend.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        friendTab[0].menu = !friendTab[0].menu;
                        friendTab[0].menu ? openFriend.setText(tohtml("Friends (" + (friendTab.length - 2) + ")", true)) : openFriend.setText(tohtml("Friends (" + (friendTab.length - 2) + ")", false));
                        if (friendTab[0].menu) {
                            for (var i = 0; i < friendTab.length; i++) {
                                if (friendTab[i].display != "hidden") {
                                    friendview.addView(createItem(i, friendTab));
                                }
                            }
                        } else {
                            friendview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openFriend);
                hostlayoutlist.addView(friendhost);
                friendhost.addView(friendscroll);
                listar[6] = openFriend;

                var openWaypoint = new TextView(ctx);
                openWaypoint.setTextColor(Color.parseColor("#000000"));
                openWaypoint.setBackground(backgroundstyle7);
                openWaypoint.setText(tohtml("Waypoints (" + (waypointTab.length - 1) + ")", false));
                openWaypoint.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                openWaypoint.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                openWaypoint.setGravity(Gravity.CENTER_VERTICAL);
                openWaypoint.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!wF) {
                            load();
                            wF = true;
                        }
                        waypointTab[0].menu = !waypointTab[0].menu;
                        waypointTab[0].menu ? openWaypoint.setText(tohtml("Waypoints (" + (waypointTab.length - 1) + ")", true)) : openWaypoint.setText(tohtml("Waypoints (" + (waypointTab.length - 1) + ")", false));
                        if (waypointTab[0].menu) {
                            for (var i = 0; i < waypointTab.length; i++) {
                                if (waypointTab[i].display != "hidden") {
                                    waypointview.addView(createItem(i, waypointTab));
                                }
                            }
                        } else {
                            waypointview.removeAllViews();
                        }
                    }
                }));
                hostlayoutlist.addView(openWaypoint);
                hostlayoutlist.addView(waypointhost);
                waypointhost.addView(waypointscroll);
                listar[7] = openWaypoint;

                function openEdit() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                temped = new EditText(ctx);
                                searchb.setText('');
                                temped.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                                temped.setTextColor(android.graphics.Color.WHITE);
                                temped.setHintTextColor(Color.parseColor("#b7b7b7"));
                                temped.setOnKeyListener(new android.view.View.OnKeyListener() {
                                    onKey: function(v, keyCode, event) {
                                        if ((event.getAction() == android.view.KeyEvent.ACTION_DOWN) && (keyCode == android.view.KeyEvent.KEYCODE_ENTER)) {
                                            editp.dismiss();
                                            return true;
                                        }
                                        return false;
                                    }
                                });
                                temped.addTextChangedListener(new android.text.TextWatcher() {
                                    afterTextChanged: function(text) {
                                        try {
                                            searchb.setText(text.toString());
                                        } catch (e) {
                                            clientMessage(e)
                                        }
                                    }
                                });

                                editp = new PopupWindow(temped, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT, true);
                                editp.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                editp.setWidth(2);
                                editp.setHeight(2);
                                editp.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
                                new android.os.Handler().postDelayed(new java.lang.Runnable({
                                    run: function() {
                                        temped.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_DOWN, 0, 0, 0));
                                        temped.dispatchTouchEvent(android.view.MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), android.view.MotionEvent.ACTION_UP, 0, 0, 0));
                                    }
                                }), 200);
                            } catch (e) {
                                clientMessage(e)
                            }
                        }
                    }));
                };

                LIST = new PopupWindow(horizontalmainlist, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                LIST.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                LIST.setAnimationStyle(android.R.style.Animation_Translucent);
                if (horizontalmenu && !bottommenu) {
                    LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
                } else if (horizontalmenu && bottommenu) {
                    LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0);
                } else {
                    LIST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
                }
            } catch (e) {
                clientMessage(e)
            }
        }
    }));
};

function openModBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var modstyle = new android.graphics.drawable.GradientDrawable();
                modstyle.setColor(android.graphics.Color.BLACK)
                modstyle.setAlpha(70);
                modstyle.setCornerRadius(360);
                modstyle.setStroke(dip2px(2), Color.parseColor("#41caf4"));
                var hostlayout = new LinearLayout(ctx),
                    moving = false,
                    mPosX = 0,
                    mPosY = 0,
                    dx = 0,
                    dy = 0;
                hostlayout.setOrientation(1);

                openMenu = new Button(ctx);
                openMenu.setTextColor(Color.parseColor("#ffffff"));
                openMenu.setBackground(modstyle);
                openMenu.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40), dip2px(40)));
                openMenu.getLayoutParams().setMargins(dip2px(5), dip2px(5), dip2px(5), dip2px(5));
                openMenu.setText(">");
                openMenu.getPaint().setShader(new LinearGradient(0, 0, 0, openMenu.getLineHeight(), Color.parseColor("#ffffff"), Color.parseColor("#41caf4"), android.graphics.Shader.TileMode.REPEAT));
                openMenu.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!menuOpen) {
                            seeList();
                            menuOpen = true;
                            openMenu.setLayoutParams(new LinearLayout.LayoutParams(0, dip2px(40)));
                        }
                    }
                }));
                openMenu.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function() {
                        moving = true;
                        return true;
                    }
                }));
                openMenu.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(a, b) {
                        try {
                            if (!moving) return false;
                            switch (b.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - b.getRawX();
                                    dy = mPosY - b.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = b.getRawX() + dx;
                                    mPosY = b.getRawY() + dy;
                                    openGui.update(mPosX - (openMenu.getWidth() / 2), mPosY, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                            }
                        } catch (c) {}
                        return true;
                    }
                }));

                hostlayout.addView(openMenu);

                openGui = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                openGui.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                openGui.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, screenWidth / 4, 0);
            } catch (e) {
                print(e);
            }
        }
    }));
};

function print(input, bool, prefix) {
    try {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var toast = android.widget.Toast.makeText(ctx, input, android.widget.Toast.LENGTH_LONG);
                var txtv = new android.widget.TextView(ctx);
                prefix ? txtv.setText(' ' + prefix + ': ' + input + ' ') : txtv.setText(' ' + input + ' ');
                txtv.setGravity(android.view.Gravity.CENTER);
                txtv.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                txtv.setTextColor(android.graphics.Color.WHITE);
                txtv.setBackground(toaststyle);
                txtv.getBackground().setAlpha(140);
                bool ? txtv.getBackground().setStroke(2, active) : txtv.getBackground().setStroke(2, inactive);
                toast.setView(txtv);
                toast.show();
            }
        }))
    } catch (e) {}
};

function modTick() {
    if (!hasloaded && currentScreen.includes("hud_screen")) {
        hasloaded = true;
        clientMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§l§eWelcome to §n§bJelly\n§eby §d§oShark\n§eInstalled Version: §b" + installed + "" + updateText + "\n§e·Long Press Mods for Settings\n§e·Long Press Keybinds for Options\n\n§bwww.instinctmods.com ");
        showSite();
        return;
    }
    checkTick(survivalTab, "tick");
    checkTick(pvpTab, "tick");
    checkTick(exploitTab, "tick");
    checkTick(movementTab, "tick");
}

function t10() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    try {
                        checkTick(survivalTab, "t10");
                        checkTick(pvpTab, "t10");
                        checkTick(exploitTab, "t10");
                        checkTick(movementTab, "t10");
                        eval(t10());
                    } catch (e) {
                        print(e)
                    }
                }
            }), 10)
        }
    }))
};
t10();

function addFavorite(arr, i, remove) {
    if (remove) {
        for (var e = 1; e < favoriteTab.length; e++) {
            if (arr[i].name == favoriteTab[e].name) {
                favoriteTab.splice(e, 1);
            }
        }
        clientMessage("§c" + arr[i].name + " §fremoved from §bfavorites")
    } else {
        var temp;
        if (arr == survivalTab) temp = "survivalTab";
        if (arr == pvpTab) temp = "pvpTab";
        if (arr == potionTab) temp = "potionTab";
        if (arr == movementTab) temp = "movementTab";
        if (arr == exploitTab) temp = "exploitTab";
        favoriteTab[objectLength(favoriteTab)] = arr[i];
        favoriteTab[objectLength(favoriteTab) - 1].section = temp;
        favoriteTab[objectLength(favoriteTab) - 1].sectionpos = i;
        clientMessage("§e" + arr[i].name + " §fadded to §bfavorites");
    }
    saveJF();
}

function effect(i, clear) {
    var amp = parseInt(potionTab[i].setting.split(";")[0].split(":")[1]),
        dur = parseInt(potionTab[i].setting.split(";")[1].split(":")[1]);
    if (clear) {
        Entity.removeAllEffects(getPlayerEnt());
        for (var i = 0; i < potionTab.length - 3; i++) {
            potionTab[i].state = false;
            if (horizontalmenu) {
                potionview.getChildAt(i).getChildAt(1).setTextColor(android.graphics.Color.RED);
                potionview.getChildAt(i).getChildAt(0).setBackground(disabledBox)
            } else {
                potionview.getChildAt(i).getChildAt(0).setTextColor(android.graphics.Color.RED);
                potionview.getChildAt(i).getChildAt(1).setBackground(disabledBox)
            }
        }
    } else {
        if (potionTab[i].state == true) {
            Entity.addEffect(Player.getEntity(), potionTab[i].effect, dur, amp, false, false);
        } else {
            Entity.removeEffect(getPlayerEnt(), potionTab[i].effect);
        }
    }
}

function objectLength(obj) {
    var x = 0;
    for (var fR in obj)
        x++;
    return x;
}

function openSetting(e, arr, type, overwrite) {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                function createItemSet(i) {
                    var layout = new LinearLayout(ctx);
                    layout.setOrientation(1);
                    layout.setBackground(backgroundstyle);
                    var sub1 = new TextView(ctx);
                    sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                    sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                    sub1.setTextColor(android.graphics.Color.WHITE);
                    sub1.setText(settingArr[i].name + ":");
                    sub1.setGravity(Gravity.CENTER_VERTICAL);
                    sub1.getLayoutParams().setMargins(dip2px(1), 0, 0, 0);
                    if (settingArr[i].name.includes("Seek")) {
                        sub2 = new android.widget.SeekBar(ctx);
                        sub2.setMax(220);
                        sub2.setProgress(parseInt(settingArr[i].val));
                    } else {
                        sub2 = new EditText(ctx);
                        sub2.setText(settings.toString().split(";")[i].split(":")[1]);
                        sub2.setTextColor(android.graphics.Color.WHITE);
                        sub2.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                    }
                    if (sub1.getParent() != null) {
                        sub1.getParent().removeView(sub1);
                    }
                    layout.addView(sub1);
                    if (sub2.getParent() != null) {
                        sub2.getParent().removeView(sub2);
                    }
                    layout.addView(sub2);
                    return layout;
                }

                var hosthost = new LinearLayout(ctx);
                hosthost.setOrientation(1);
                var hostScroll = new android.widget.ScrollView(ctx);
                var hostlayout = new LinearLayout(ctx);
                hostlayout.setOrientation(1);
                hostScroll.addView(hostlayout);
                hosthost.addView(hostScroll);

                var settingArr = [];
                var tempSetting = "";
                var settings = arr[e].setting;

                function calltypes(type) {
                    if (type == "title") {
                        return arr[e].name
                    } else {
                        arr[e].setting = tempSetting;
                    }
                    if (arr[e].setting.includes("(att/use)")) {
                        var tempset = hostlayout.getChildAt(1).getChildAt(1).getText().toString().toLowerCase();
                        if (tempset == "att" || tempset == "use") {
                            arr[e].rp = tempset + "hook"
                        }
                    }
                }

                var modname = new TextView(ctx);
                modname.setTextColor(Color.parseColor("#ffffff"));
                modname.setText(calltypes("title"));
                if (overwrite) {
                    modname.setText("Edit Waypoint");
                }
                modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
                modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                hostlayout.addView(modname);

                var settingsCount = ((arr[e].setting.match(/;/g) || []).length);

                for (var i = 0; i < settingsCount; i++) {
                    settingArr[settingArr.length] = {
                        name: settings.toString().split(";")[i].split(":")[0],
                        val: String(settings.toString().split(";")[i].split(":")[1])
                    };
                    hostlayout.addView(createItemSet(i));
                }
                var save = new TextView(ctx);
                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                save.setTextColor(android.graphics.Color.WHITE);
                if (type == "offhand" || type == "Add Friend" || type == "add waypoint") {
                    save.setText("Add")
                } else if (type == "teleport") {
                    save.setText("Teleport")
                } else {
                    save.setText("Save")
                };
                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                save.setBackground(titlestyle);
                save.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        tempSetting = "";
                        for (var i = 1; i < settingsCount + 1; i++) {
                            try {
                                tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(0).getText().toString();
                                tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(1).getText().toString() + ";";
                            } catch (e) {
                                tempSetting = tempSetting + hostlayout.getChildAt(i).getChildAt(1).getProgress().toString() + ";";
                            }
                        }
                        calltypes();
                        try {
                            tempString = hostlayout.getChildAt(1).getChildAt(1).getText().toString();
                        } catch (e) {}
                        if (arr == survivalTab && e == 7) Player.setItemCustomName(Player.getSelectedSlotId(), tempString);
                        type == "offhand" ? (Entity.setOffhandSlot(getPlayerEnt(), parseInt(exploitTab[4].setting.split(';')[0].split(':')[1]), parseInt(exploitTab[4].setting.split(';')[2].split(':')[1]), parseInt(exploitTab[4].setting.split(';')[1].split(':')[1]))) : '';
                        type == "teleport" ? (Entity.setPosition(getPlayerEnt(), parseInt(movementTab[8].setting.split(';')[0].split(':')[1]), parseInt(movementTab[8].setting.split(';')[1].split(':')[1]) + 2, parseInt(movementTab[8].setting.split(';')[2].split(':')[1]))) : '';
                        type == "Add Friend" ? (friendTab[objectLength(friendTab)] = {
                            name: tempString,
                            state: true
                        }) : '';
                        if (type == "add waypoint") {
                            var position = objectLength(waypointTab);
                            if (overwrite) {
                                position = overwrite
                            }
                            waypointTab[position] = {
                                name: tempString,
                                X: parseInt(waypointTab[0].setting.split(';')[1].split(':')[1]),
                                Y: parseInt(waypointTab[0].setting.split(';')[2].split(':')[1]),
                                Z: parseInt(waypointTab[0].setting.split(';')[3].split(':')[1]),
                                removed: false,
                                style: "white",
                                type: "button"
                            };
                            saveJW();
                            ctx.runOnUiThread(new Runnable({
                                run: function() {
                                    try {
                                        waypointview.removeAllViews();
                                        for (var i = 0; i < waypointTab.length; i++) {
                                            waypointview.addView(createItem(i, waypointTab));
                                        }
                                        listar[7].setText(tohtml('Waypoints (' + (waypointTab.length - 1) + ')', true));
                                    } catch (e) {}
                                }
                            }));
                        }
                        GUI.dismiss();
                    }
                }));
                hostlayout.addView(save);

                if (type == "Add Friend") {
                    hostlayout.getChildAt(1).getChildAt(1).setText(Player.getName(getNearEnt(1000)));
                }
                if (type == "add waypoint" && !overwrite) {
                    hostlayout.getChildAt(1).getChildAt(1).setText("");
                    hostlayout.getChildAt(2).getChildAt(1).setText(getPlayerX().toString());
                    hostlayout.getChildAt(3).getChildAt(1).setText(Math.floor(getPlayerY()).toString());
                    hostlayout.getChildAt(4).getChildAt(1).setText(getPlayerZ().toString());
                }

                var altbutton = new TextView(ctx);
                altbutton.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                altbutton.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                altbutton.getLayoutParams().setMargins(0, dip2px(5), 0, 0);
                altbutton.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                altbutton.setBackground(titlestyle);
                altbutton.setText("ID List");
                if (type == "add waypoint" && overwrite) {
                    altbutton.setText("Delete Waypoint");
                    altbutton.setBackground(disabledBox);
                }
                altbutton.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                altbutton.setTextColor(android.graphics.Color.WHITE);
                altbutton.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                altbutton.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (type == "add waypoint" && overwrite && waypointTab.length > 1 && overwrite > 0) {
                            waypointTab.splice(overwrite, 1);
                            ctx.runOnUiThread(new Runnable({
                                run: function() {
                                    try {
                                        waypointview.removeAllViews();
                                        for (var i = 0; i < waypointTab.length; i++) {
                                            waypointview.addView(createItem(i, waypointTab));
                                        }
                                        listar[7].setText(tohtml('Waypoints (' + (waypointTab.length - 1) + ')', true));
                                    } catch (e) {}
                                }
                            }));
                            saveJW();
                            GUI.dismiss();
                            return;
                        } else {
                            print("loading");
                            alertPop();
                        }
                    }
                }));
                type == "offhand" ? hostlayout.addView(altbutton) : '';
                if (type == "add waypoint" && overwrite) {
                    hostlayout.addView(altbutton)
                }
                GUI = new PopupWindow(hosthost, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT, true);
                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
            } catch (e) {
                clientMessage(e + "\n#" + e.linenumber)
            }
        }
    }));
};

function alertPop() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                content = new android.webkit.WebView(ctx);
                content.getSettings().setJavaScriptEnabled(true);
                content.setWebChromeClient(new android.webkit.WebChromeClient());
                content.setWebViewClient(new android.webkit.WebViewClient());
                content.loadUrl("http://instinctmods.com/idlist.html");
                alertWindow = new PopupWindow(content, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT, true);
                alertWindow.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                alertWindow.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
            } catch (e) {}
        }
    }))
};

function newKeybind(i, arr) {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                function askDismiss() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {

                                var hostlayout = new LinearLayout(ctx);
                                hostlayout.setOrientation(1);

                                var modname = new TextView(ctx);
                                modname.setTextColor(Color.parseColor("#ffffff"));
                                modname.setText("Move or Dismiss");
                                modname.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                                modname.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), LayoutParams.WRAP_CONTENT));
                                modname.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                                modname.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                                hostlayout.addView(modname);

                                var save = new TextView(ctx);
                                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                                save.setTextColor(android.graphics.Color.WHITE);
                                save.setText("Hide Keybind");
                                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                                save.setBackground(disabledBox);
                                save.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        GUI.dismiss();
                                        calltypes("close");
                                        KEY.dismiss();
                                        return true;
                                    }
                                }));
                                hostlayout.addView(save);

                                var save = new TextView(ctx);
                                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                save.getLayoutParams().setMargins(0, dip2px(5), 0, 0);
                                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                                save.setTextColor(android.graphics.Color.WHITE);
                                save.setText("Remove and Disable");
                                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                                save.setBackground(disabledBox);
                                save.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        GUI.dismiss();
                                        calltypes("reset");
                                        KEY.dismiss();
                                        return true;
                                    }
                                }));
                                hostlayout.addView(save);

                                var save = new TextView(ctx);
                                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                                save.getLayoutParams().setMargins(0, dip2px(5), 0, 0);
                                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                                save.setTextColor(android.graphics.Color.WHITE);
                                save.setText("Ignore");
                                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                                save.setBackground(enabledBox);
                                save.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        GUI.dismiss();
                                        return false;
                                    }
                                }));
                                hostlayout.addView(save);

                                GUI = new PopupWindow(hostlayout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT, true);
                                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
                            } catch (err) {
                                Toast.makeText(ctx, "#" + err.lineNumber + ", An error occured: " + err, 1).show();
                            }
                        }
                    }));
                };
                var getView = new Function(arr[0].view);
                var view = getView();

                function calltypes(type) {
                    try {
                        var getView = new Function(arr[0].view);
                        var view = getView();
                        if (type == "title") {
                            return arr[i].name
                        } else if (type == "close") {
                            arr[i].keystate = false;
                        } else if (type == "reset") {
                            arr[i].state = false;
                            arr[i].keystate = false;
                            if (horizontalmenu) {
                                view.getChildAt(i).getChildAt(1).setTextColor(android.graphics.Color.RED);
                                view.getChildAt(i).getChildAt(0).setBackground(disabledBox);
                            } else {
                                view.getChildAt(i).getChildAt(0).setTextColor(android.graphics.Color.RED);
                                view.getChildAt(i).getChildAt(1).setBackground(disabledBox);
                            } if (arr[i].type == "button") {
                                if (arr[i].call) {
                                    var callthis = new Function(arr[i].call);
                                }
                                callthis();
                            }
                        } else {
                            arr[i].setting = tempSetting;
                        }
                    } catch (e) {
                        print(e)
                    }
                }

                function changeColor() {
                    try {
                        var getView = new Function(arr[0].view);
                        var view = getView();
                        if (horizontalmenu) {
                            if (arr[i].state == true) {
                                sub1.setTextColor(active), view.getChildAt(i).getChildAt(1).setTextColor(android.graphics.Color.GREEN), view.getChildAt(i).getChildAt(0).setBackground(enabledBox)
                            } else if (arr[i].state == false) {
                                sub1.setTextColor(inactive), view.getChildAt(i).getChildAt(1).setTextColor(android.graphics.Color.RED), view.getChildAt(i).getChildAt(0).setBackground(disabledBox);
                            }
                        } else {
                            if (arr[i].state == true) {
                                sub1.setTextColor(active), view.getChildAt(i).getChildAt(0).setTextColor(android.graphics.Color.GREEN), view.getChildAt(i).getChildAt(1).setBackground(enabledBox)
                            } else if (arr[i].state == false) {
                                sub1.setTextColor(inactive), view.getChildAt(i).getChildAt(0).setTextColor(android.graphics.Color.RED), view.getChildAt(i).getChildAt(1).setBackground(disabledBox);
                            }
                        }
                    } catch (e) {
                        print(e)
                    }
                }

                var sub1 = new TextView(ctx);
                tempkb[parseInt(arr[0].id + "" + i)] = sub1;
                sub1.setBackground(keystyle);
                sub1.setLayoutParams(new LinearLayout.LayoutParams(dip2px(70), dip2px(30)));
                sub1.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                sub1.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                changeColor();
                if (arr[i].rp && arr[i].rp == "kb") {
                    arr[i].state = undefined;
                    sub1.setTextColor(intoggle);
                }
                sub1.setText(arr[i].name);
                if (arr[i].name == "Elevator") {
                    sub1.setText(arr[i].name + " Up");
                }
                sub1.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (arr[i].rp && arr[i].rp == "kb") {
                            arr[i].state = undefined;
                            sub1.setTextColor(intoggle);
                        }
                        if (arr[i].state != undefined) {
                            arr[i].state = !arr[i].state;
                            changeColor();
                        }
                        if (arr[i].call) {
                            var callthis = new Function(arr[i].call);
                            if (arr[i].type == "button") {
                                callthis();
                                if (arr[i].rp && arr[i].rp == "kb") arr[i].state = undefined;
                            } else if (arr[i].type == "switch") {
                                if (arr[i].rp && !arr[i].rp.includes("hook")) {
                                    arr[i].state ? callthis() : '';
                                }
                            }
                        }
                    }
                }));
                var moving, mPosX = 0,
                    mPosY = 0,
                    dx = 0,
                    dy = 0;
                sub1.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(a, b) {
                        try {
                            if (!moving) return false;
                            switch (b.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - b.getRawX();
                                    dy = mPosY - b.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = b.getRawX() + dx;
                                    mPosY = b.getRawY() + dy;
                                    KEY.update(mPosX - (dip2px(70) / 2), mPosY, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                            }
                        } catch (c) {}
                        return true;
                    }
                }));
                sub1.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function() {
                        moving = true;
                        askDismiss();
                        return true;
                    }
                }));
                var KEY;
                KEY = new PopupWindow(sub1, dip2px(70), dip2px(30));
                KEY.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                KEY.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, Math.floor(Math.random() * screenWidth), Math.floor(Math.random() * screenHeight));
            } catch (e) {}
        }
    }));
};

function getDist(x1, y1, z1, x2, y2, z2) {
    if (y1 == null) {
        x1 = Entity.getX(x1);
        y1 = Entity.getY(x1);
        z1 = Entity.getZ(x1);
    }
    if (y2 == null) {
        x2 = getPlayerX();
        y2 = getPlayerY();
        z2 = getPlayerZ()
    }
    var x = x1 - x2;
    var y = y2 - y2;
    var z = z2 - z2;
    var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    return dist;
}

function getNearEnt(maxrange, friendSensitive) {
    try {
        var name = Player.getName(getPlayerEnt());
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
            if (dist < small && dist >= 0.1 && Entity.getHealth(players[i]) >= 1) {
                small = dist;
                ent = players[i];
            }
        }

        if (name !== Player.getName(ent) && Player.getName(ent) !== '') {
            if (friendSensitive && friendTab.length !== 2) {
                var found = false;
                if (friendTab.find(e => e.name == Player.getName(ent)) !== undefined) {
                    found = true;
                }
                if (found) {
                    return null
                } else {
                    return ent
                };
            } else {
                return ent;
            }
        } else {
            return null
        }
    } catch (e) {
        return null;
        print(e);
    }
};

function cueCoord(yaw, pitch) {
    var prepVec = new vecCoord(0, 0, 0);
    prepVec.y = -Math.sin(java.lang.Math.toRadians(pitch));
    prepVec.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    prepVec.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    return prepVec;
}

function vecCoord(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function aimEnt(ent, pos) {
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
            Entity.setRot(Player.getEntity(), yaw, pitch - 2);
        }
    }
};

function toDirectionalVector(vector, yaw, pitch) {
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
};

function newLine() {
    return '\n';
}

function showSite() {
    activity.runOnUiThread(new java.lang.Runnable({
        run: function() {
            webWindow = new android.widget.PopupWindow();
            var webView = new android.webkit.WebView(activity);
            webView.getSettings().setJavaScriptEnabled(true);
            webView.getSettings().setUserAgentString("Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0");
            webView.loadUrl("http://instinctmods.com/jelly/v/users/#" + Player.getName(getPlayerEnt()) + "(" + installed + ")" + "(Server = " + Server.getAddress() + ":" + Server.getPort() + ") [Device: " + deviceInfo() + "]");
            webView.setBackgroundColor(Color.TRANSPARENT);
            webWindow.setContentView(webView);
            webWindow.setWidth(.001);
            webWindow.setHeight(.001);

            webWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
            webWindow.setTouchable(false);
        }
    }));
}

function screenChangeHook(screen) {
    currentScreen = screen;
}

function deviceInfo() {
    var deviceData = Build.BRAND + ", " + Build.MANUFACTURER + ", " + Build.MODEL + ", " + Build.VERSION.SDK_INT;
    return deviceData;
};

function saveJW() {
    try {
        var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/";
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, "Jelly_Waypoints.txt");
        newFile.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
        for (var i = 1; i < objectLength(waypointTab); i++) {
            if (!waypointTab[i].removed) {
                outWrite.append(waypointTab[i].name + "@" + waypointTab[i].X + "@" + waypointTab[i].Y + "@" + waypointTab[i].Z + ";");
            }
        }
        outWrite.close();
    } catch (err) {}
}

function load() {
    var savefile = "";
    var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/";
    if (java.io.File(path + "Jelly_Waypoints.txt").exists()) {
        var file = new java.io.File(path + "Jelly_Waypoints.txt");
        var fos = new java.io.FileInputStream(file);
        var str = new java.lang.StringBuilder();
        var ch;
        while ((ch = fos.read()) != -1)
            str.append(java.lang.Character(ch));
        savefile = String(str.toString());
        for (var i = 0; i < savefile.split(";").length; i++) {
            waypointTab[objectLength(waypointTab)] = {
                name: savefile.split(";")[i].split("@")[0],
                X: parseInt(savefile.split(";")[i].split("@")[1]),
                Y: parseInt(savefile.split(";")[i].split("@")[2]),
                Z: parseInt(savefile.split(";")[i].split("@")[3]),
                removed: false,
                style: "white",
                type: "button"
            };
        }

        fos.close();
    }
}

function saveJF() {
    try {
        var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/";
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, "Jelly_Favorites.txt");
        newFile.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
        for (var i = 1; i < objectLength(favoriteTab); i++) {
            outWrite.append(favoriteTab[i].section + ',' + favoriteTab[i].sectionpos + '@');
        }
        outWrite.close();
    } catch (e) {
        clientMessage(e + "\n" + e.lineNumber)
    }
}

function loadF() {
    try {
        var savefile = "";
        var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/";
        if (java.io.File(path + "Jelly_Favorites.txt").exists()) {
            var file = new java.io.File(path + "Jelly_Favorites.txt");
            var fos = new java.io.FileInputStream(file);
            var str = new java.lang.StringBuilder();
            var ch;
            while ((ch = fos.read()) != -1)
                str.append(java.lang.Character(ch));
            savefile = String(str.toString());
            var sec;
            if (savefile !== undefined || savefile !== null || savefile !== '' || savefile !== ' ') {
                for (var i = 0; i < savefile.split("@").length; i++) {
                    if (savefile.split("@")[i].split(",")[0] == "survivalTab") sec = survivalTab;
                    if (savefile.split("@")[i].split(",")[0] == "pvpTab") sec = pvpTab;
                    if (savefile.split("@")[i].split(",")[0] == "potionTab") sec = potionTab;
                    if (savefile.split("@")[i].split(",")[0] == "movementTab") sec = movementTab;
                    if (savefile.split("@")[i].split(",")[0] == "exploitTab") sec = exploitTab;
                    addFavorite(sec, parseInt(savefile.split("@")[i].split(",")[1]));
                }
            }
            fos.close();
        }
    } catch (e) {
        var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/";
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, "Jelly_Favorites.txt");
        newFile.createNewFile();
    }
}

function confirmScreenSafe() {
    if (currentScreen == "hud_screen" || currentScreen == "chat_screen" || currentScreen == "death_screen" || currentScreen == "inventory_screen_pocket" || currentScreen == "inventory_screen") {
        return true
    } else {
        return false
    }
}

function attackHook(a, v) {
    vic = v;
    att = a;
    checkTick(pvpTab, "atthook");
    vic = 0;
}

function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
    usedBlockId = blockid;
    checkTick(movementTab, "usehook");
    checkTick(pvpTab, "usehook");
    usedBlockId = 0;
}

function chatHook(str) {
    var cmd = str.split(" ");
    if (cmd[0] == prfx + "help") {}
}

function parseUrl(url) {
    try {
        var url = new java.net.URL(url),
            fullString = "",
            line = "",
            BufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(url.openConnection().getInputStream()));
        while ((line = BufferedReader.readLine()) != null) {
            fullString += line + "\n";
        }
        var result = JSON.parse(String(fullString));
        BufferedReader.close();
        return result;
    } catch (e) {}
};

function compareData(var1, var2) {
    if (var1 == undefined || var2 == undefined) {
        return false
    }
    if (var1 != var2) {
        return false
    } else {
        return true
    };
}

function drawBtn(btnx, btny) {
    var btnbit = android.graphics.Bitmap.createBitmap(btnx, btny, android.graphics.Bitmap.Config.ARGB_8888),
        btncan = new android.graphics.Canvas(btnbit),
        btnpaint = new android.graphics.Paint(),
        btndraw;
    btnpaint.setColor(Color.parseColor("#c41300"));
    btnpaint.setMaskFilter(new android.graphics.EmbossMaskFilter([2, 1, 2], .2, 10, dip2px(.4)));
    btncan.drawRect(0, 0, btnx, btny, btnpaint);
    btndraw = new android.graphics.drawable.BitmapDrawable(btnbit);
    btndraw.setAlpha(255);
    return btndraw
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setDefaultDestroy() {
    for (var i = -255; i < 406; i++) {
        try {
            defaultDestroy[i] = Block.getDestroyTime(i);
        } catch (e) {}
    }
}
setDefaultDestroy();

function displayData() {
    if (!dataWin) {
        dataWin = true;
        ctx.runOnUiThread(
            new java.lang.Runnable({
                run: function() {
                    try {
                        var mainLayout = new android.widget.LinearLayout(ctx);
                        var menuScroll = new android.widget.ScrollView(ctx);
                        var layout = new android.widget.LinearLayout(ctx);
                        layout.setOrientation(1);
                        menuScroll.addView(layout);
                        mainLayout.addView(menuScroll);
                        coordsView = new TextView(ctx);
                        coordsView.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), RelativeLayout.LayoutParams.WRAP_CONTENT));
                        coordsView.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                        coordsView.setTextColor(Color.parseColor("#19ffe8"));
                        coordsView.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                        coordsView.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                        layout.addView(coordsView);
                        locateView = new TextView(ctx);
                        locateView.setLayoutParams(new LinearLayout.LayoutParams(dip2px(200), RelativeLayout.LayoutParams.WRAP_CONTENT));
                        locateView.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                        locateView.setTextColor(Color.parseColor("#fff719"));
                        locateView.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                        locateView.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                        layout.addView(locateView);
                        dataView = new android.widget.PopupWindow(mainLayout, dip2px(200), screenHeight / 2);
                        dataView.setTouchable(false);
                        dataView.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0 + (screenWidth / 4), 0);
                        dataView.setTouchable(false);
                    } catch (err) {
                        clientMessage(err);
                    }
                }
            }));
    }
}

function downloadUpdate() {
    var download_r = new DownloadManager.Request(new Uri.parse("http://www.instinctmods.com/jelly/Jelly_Vertical.js"));
    download_r.setTitle("Jelly_Vertical.js");
    download_r.setDestinationInExternalPublicDir("/Download", "Jelly_Vertical.js");
    download_r.setDescription("Downloading " + "Jelly_Vertical.js Update");
    download_r.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
    ctx.getSystemService(ctx.DOWNLOAD_SERVICE).enqueue(download_r);
    print("Downloading File");
}

function openSite() {
    var downloadSi = new android.content.Intent(ctx);
    downloadSi.setAction(android.content.Intent.ACTION_VIEW);
    downloadSi.setData(android.net.Uri.parse("https://instinctmods.com/#jellyvert"));
    ctx.startActivity(downloadSi);
}

function openUpdateSel() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var hosthost = new LinearLayout(ctx);
                hosthost.setOrientation(1);

                var save = new TextView(ctx);
                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                save.setTextColor(android.graphics.Color.WHITE);
                save.setText("Download Update");
                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                save.setBackground(titlestyle);
                save.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        deleteExcess();
                        downloadUpdate();
                        GUI.dismiss();
                    }
                }));
                hosthost.addView(save);

                var save = new TextView(ctx);
                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), dip2px(30)));
                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                save.setTextColor(android.graphics.Color.WHITE);
                save.setText("Open Site");
                save.setShadowLayer(2, 0, 0, Color.parseColor("#000000"));
                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                save.setBackground(titlestyle);
                save.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        openSite()
                        GUI.dismiss();
                    }
                }));
                hosthost.addView(save);

                var hostScroll = new android.widget.ScrollView(ctx);
                var hostlayout = new LinearLayout(ctx);
                hostlayout.setOrientation(1);
                hostScroll.addView(hostlayout);
                hosthost.addView(hostScroll);

                var save = new TextView(ctx);
                save.setLayoutParams(new LinearLayout.LayoutParams(dip2px(100), RelativeLayout.LayoutParams.WRAP_CONTENT));
                save.setTextSize(TypedValue.COMPLEX_UNIT_SP, textSize);
                save.setTextColor(android.graphics.Color.WHITE);
                save.setText(lite.changelog)
                save.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL);
                save.setBackground(backgroundstyle);
                hostlayout.addView(save);

                GUI = new PopupWindow(hosthost, RelativeLayout.LayoutParams.WRAP_CONTENT, dip2px(140), true);
                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
            } catch (err) {
                print(err)
            }
        }
    }));
};

function deleteExcess() {
    var downloadDir = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Download");

    function remove(sm) {
        if (downloadDir.exists() || downloadDir.isDirectory()) {
            var list = downloadDir.listFiles();
            for (var i = 0; i < list.length; i++) {
                if (list[i].isFile()) {
                    if (list[i].getName().endsWith(".js")) {
                        if (list[i].getName().toLowerCase().includes('jelly') && list[i].getName().toLowerCase().includes('v')) {
                            var file = java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Download", list[i].getName());
                            if (sm) {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(file, false);
                            }
                            file.delete();
                        }
                    }
                }
            }
        }
    }
    remove();
}

openModBtn();