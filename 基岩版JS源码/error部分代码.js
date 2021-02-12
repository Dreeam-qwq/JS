const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    Button = android.widget.Button,
    OnClickListener = android.view.View.OnClickListener,
    OnLongClickListener = android.view.View.OnLongClickListener,
    OnTouchListener = android.view.View.OnTouchListener,
    LinearLayout = android.widget.LinearLayout,
    RelativeLayout = android.widget.RelativeLayout,
    PopupWindow = android.widget.PopupWindow,
    ScrollView = android.widget.ScrollView,
    TextView = android.widget.TextView,
    CheckBox = android.widget.CheckBox,
    ToggleButton = android.widget.ToggleButton,
    Switch = android.widget.Switch,
    Toast = android.widget.Toast,
    ImageView = android.widget.ImageView,
    Runnable = java.lang.Runnable,
    View = android.view.View,
    Window = android.view.Window,
    TextWatcher = android.text.TextWatcher,
    Animation_Dialog = android.R.style.Animation_Dialog,
    Animation_InputMethod = android.R.style.Animation_InputMethod,
    Animation_Translucent = android.R.style.Animation_Translucent,
    LayoutParams = android.widget.LinearLayout.LayoutParams,
    ProgressBar = android.widget.ProgressBar,
    progressBarStyleHorizontal = android.R.attr.progressBarStyleHorizontal,
    ColorStateList = android.content.res.ColorStateList.valueOf,
    EditText = android.widget.EditText,
    ColorDrawable = android.graphics.drawable.ColorDrawable,
    Color = android.graphics.Color,
    parseColor = android.graphics.Color.parseColor,
    Gravity = android.view.Gravity,
    Uri = android.net.Uri,
    Dialog = android.app.Dialog,
    DialogInterface = android.content.DialogInterface,
    Intent = android.content.Intent,
    makeText = android.widget.Toast.makeText,
    TextUtils = android.text.TextUtils,
    length_long = android.widget.Toast.LENGTH_LONG,
    WRAP_CONTENT = RelativeLayout.LayoutParams.WRAP_CONTENT,
    GradientDrawable = android.graphics.drawable.GradientDrawable,
    BitmapDrawable = android.graphics.drawable.BitmapDrawable,
    BitmapFactory = android.graphics.BitmapFactory,
    fromHtml = android.text.Html.fromHtml,
    createFromFile = android.graphics.Typeface.createFromFile,
    Base64 = android.util.Base64,
    MotionEvent = android.view.MotionEvent,
    Animation_Toast = android.R.style.Animation_Toast,
    tabText = '       ',
    path = '/sdcard/games/com.mojang/',
    path2 = '/games/com.mojang/minecraftpe/';
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
var System = java.lang.System;
var Thread = java.lang.Thread;
var SystemClock = android.os.SystemClock;
var PendingIntent = android.app.PendingIntent;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var FileInputStream = java.io.FileInputStream;
var InputStreamReader = java.io.InputStreamReader;
var MediaPlayer = android.media.MediaPlayer();
var params = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT, 1);
var params2 = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT, 8);
var vibration = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
var intentURL = new Intent(ctx);
var lang = 'eng';
var fovBetterAttack = 100;
var HitboxSettingXZ = 25;
var HitboxSettingY = 10;
var CriticalsSettingY = 0.4;
var GlideSetting = 0.0;
var BounceFlyTimer = 5;
var playerDir = [0, 0, 0];
var lgjp = 2.5;
var time = 15;
var eatTime = 2.0;
var stanceauratime = 9;
var time3 = 0;
var jetpack2time = 3;
var antiafktime = 100;
var progress = 100;
var cx = 0;
var cy = 0;
var cz = 0;
var flyglidetime = 35;
var state = false;
var attackTick = 0;
var lastHealth = 0;
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 50;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;
var Zdiff;
var Xpos;
var Zpos;
var dx = 0;
var dy = 0;
var dx2 = 0;
var dy2 = 0;
var mPosX2 = 0;
var mPosY2 = 0;
var dx232 = 0;
var dy232 = 0;
var mPosX232 = 285 + 285;
var mPosY232 = 0;
var dx23 = 0;
var dy23 = 0;
var mPosX23 = 285;
var mPosY23 = 0;
var dxf = 0;
var dyf = 0;
var mPosXf = 0;
var mPosYf = 0;
var dxj = 0;
var dyj = 0;
var mPosXj = 0;
var mPosYj = 0;

function setRandom(_0x3502x86, _0x3502x87) {
    return Math.floor(Math.random() * (_0x3502x87 - _0x3502x86 + 1)) + _0x3502x86
}
var random_abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '_', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var Texts = {
    test: 'Test / Тест',
    settingsMenu: fromHtml('Client settings - <b>Error</b>'),
    settingsMenu2: fromHtml('Настройки чита - <b>Error</b>'),
    langs: 'Languages',
    langs2: 'Языки',
    english: 'English',
    english2: 'Английский',
    russian: 'Russian',
    russian2: 'Русский',
    exit: 'X',
    j: 'J',
    up: 'Up',
    down: 'Down',
    ok: 'Ok',
    ok2: 'Ок',
    next: 'Next',
    next2: 'Дальше',
    info: 'Information',
    info2: 'Информация',
    contacts: 'Contacts',
    contacts2: 'Контакты',
    update: 'This is the first version of the cheat, this is not here any updates :)',
    update2: 'Это первая версия чита, по этому здесь нет никаких обновлений :)',
    developer: fromHtml('Developer: <u>Real Virus325</u>'),
    assistant: fromHtml('Assistant: <u>DelayZero</u>'),
    assistant2: fromHtml('Assistant: <u>Autyn</u>'),
    realvirus325: '- Real Virus325',
    delayzero: '- DelayZero',
    autyn: '- Autyn',
    combatopen: 'Combat menu.',
    combat: '        Combat        ',
    hitaim: 'HitAim',
    hitaimV11X: fromHtml('HitAim <u><font color="#FF7D00"><b>1.1.X</b></font></u>'),
    hitbox: 'Hitbox',
    akb: 'AntiKnockBack',
    tpaura: 'TpAura',
    tpaura2: 'TpAura [2]',
    hitboost: 'HitBoost',
    betterattack: 'BetterAttack',
    criticals: 'Criticals',
    crosshair: 'CrossHair',
    crosshairtext: '※',
    derphit: 'DerpHit',
    stanceaura: 'StanceAura',
    limitedcamera: 'LimitedCamera',
    motionopen: 'Motion menu.',
    motion: '        Motion        ',
    autowalk: 'AutoWalk',
    visualroad: 'VisualRoad',
    glide: 'Glide',
    flyglide: 'FlyGlide',
    longjump: 'LongJump',
    longjump2: 'LongJump [2]',
    jesus: 'Jesus',
    jetpack: 'JetPack',
    jetpack2: 'JetPack [2]',
    safewalk: 'SafeWalk',
    spider: 'Spider',
    step: 'Step',
    nuker: 'Nuker',
    bunnyhop: 'BunnyHop',
    fastfall: 'FastFall',
    antiafk: 'Anti AFK',
    crouchfly: 'CrouchFly',
    antigravity: 'AntiGravity',
    bouncefly: 'BounceFly',
    playeropen: 'Player menu.',
    player: '        Player        ',
    airjump: 'AirJump',
    elevator: 'Elevator',
    pos: 'Set pos',
    destroy: 'Destroy',
    haste: 'Haste',
    fullbright: 'FullBright',
    fasteat: 'FastEat',
    tower: 'Tower',
    quicktower: 'QuickTower',
    taptp: 'TapTp',
    autodestroy: 'AutoDestroy',
    tapdestroy: 'TapDestroy',
    coordsGUI: 'Coordinate',
    othersopen: 'Others menu.',
    others: '        Others        ',
    yourcid: 'Your CID:',
    yourcid2: 'Ваш CID:',
    unbancid: 'Unban CID',
    unbancid2: 'Разбан по CID',
    restartMcpe: 'Restart',
    yourname: 'Your name:',
    yourname2: 'Ваш ник:',
    randomNickName: 'Random name',
    wm: fromHtml('<b>Error</b> client menu'),
    wm2: fromHtml('/<font color="green">help</font>, /<font color="green">help 2</font>'),
    nameToast: ' Error: ',
    bindText: ' [BIND] ',
    bindsTextForMenu: 'Binds',
    chatNameScript: '§8[§7Error§8]§e ',
    en: '<font color="green"><b>enabled</b></font> ',
    dis: '<font color="red"><b>disabled</b></font> ',
    clickMCPEbtn: '/click.m4a',
    warningErrorText: fromHtml('Please rename script to "<b>ErrorV1.js</b>" to continue playing.'),
    clientversion: fromHtml('Client version: <font color="green"><b><i>1</i></b></font>'),
    clientversion2: fromHtml('Версия чита: <font color="green"><b><i>1</i></b></font>'),
    totalmodulesModTick: fromHtml('Modules in modTick: <font color="green"><b><i>39</i></b></font>'),
    totalmodulesModTick2: fromHtml('Модулей в modTick: <font color="green"><b><i>39</i></b></font>'),
    totalmodulesAttackHook: fromHtml('Modules in attackHook: <font color="green"><b><i>8</i></b></font>'),
    totalmodulesAttackHook2: fromHtml('Модулей в attackHook: <font color="green"><b><i>8</i></b></font>'),
    totalmodulesUseItem: fromHtml('Modules in useItem: <font color="green"><b><i>5</i></b></font>'),
    totalmodulesUseItem2: fromHtml('Модулей в useItem: <font color="green"><b><i>5</i></b></font>'),
    totalmodulesall: fromHtml('Total modules: <font color="green"><b><i>???</i></b></font>'),
    totalmodulesall2: fromHtml('Всего модулей: <font color="green"><b><i>57</i></b></font>'),
    minecraftversion: fromHtml('Version of minecraft: <font color="green"><b><i>' + ModPE.getMinecraftVersion() + '</i></b></font>'),
    minecraftversion2: fromHtml('Версия майнкрафта: <font color="green"><b><i>' + ModPE.getMinecraftVersion() + '</i></b></font>')
};
var parseColors = {
    purple: '#8C35FA',
    dkpurple: '#ff6200ff'
};
var ScreenType = {
    start_screen: 'start_screen',
    hud: 'hud_screen',
    ingame: 'in_game_play_screen',
    survival_inv: 'survival_inventory_screen',
    creative_inv: 'creative_inventory_screen',
    pause_screen: 'pause_screen',
    options_screen: 'options_screen',
    exit_dialog: ' -  - gui.warning.exitGameWarning'
};
var bg0 = new GradientDrawable();
var bg_0 = new GradientDrawable();
bg_0.setStroke(2, parseColor(parseColors.dkpurple));
bg_0.setColor(Color.BLACK);
bg_0.setCornerRadius(2);
var bg_1 = new GradientDrawable();
bg_1.setStroke(2, parseColor(parseColors.purple));
bg_1.setColor(Color.BLACK);
bg_1.setCornerRadius(2);
var bg_2 = new GradientDrawable();
bg_2.setStroke(2, Color.BLACK);
bg_2.setColor(parseColor(parseColors.purple));
bg_2.setCornerRadius(2);
var bg_3 = new GradientDrawable();
bg_3.setColor(parseColor(parseColors.purple));
bg_3.setCornerRadius(2);
var bg_4 = new GradientDrawable();
bg_4.setColor(parseColor(parseColors.dkpurple));
bg_4.setCornerRadius(2);
var bg_5 = new GradientDrawable();
bg_5.setStroke(3, parseColor(parseColors.purple));
bg_5.setCornerRadius(2);
var bg_6 = new GradientDrawable();
bg_6.setStroke(2, parseColor(parseColors.dkpurple));
bg_6.setColor(Color.BLACK);
bg_6.setCornerRadius(2);
var bg_7 = new GradientDrawable();
bg_7.setColor(Color.TRANSPARENT);
bg_7.setCornerRadius(2);
var bg_8 = new GradientDrawable();
bg_8.setColor(parseColor(parseColors.purple));
bg_8.setAlpha(125);
bg_8.setCornerRadius(2);
var bg_9 = new GradientDrawable();
bg_9.setStroke(2, parseColor(parseColors.dkpurple));
bg_9.setColor(parseColor(parseColors.purple));
bg_9.setAlpha(125);
bg_9.setCornerRadius(2);
var bg_10 = new GradientDrawable();
bg_10.setStroke(2, parseColor(parseColors.dkpurple));
bg_10.setAlpha(125);
bg_10.setCornerRadius(2);
var buttonBackground = GradientDrawable();
buttonBackground.setStroke(3.5, parseColor(parseColors.purple));
buttonBackground.setColor(Color.BLACK);
buttonBackground.setCornerRadius(2);
var buttonBackground1 = GradientDrawable();
buttonBackground1.setStroke(3.5, parseColor(parseColors.dkpurple));
buttonBackground1.setColor(Color.BLACK);
buttonBackground1.setCornerRadius(2);
var buttonPressedBackground = GradientDrawable();
buttonPressedBackground.setStroke(3.5, Color.BLACK);
buttonPressedBackground.setColor(parseColor(parseColors.purple));
buttonPressedBackground.setCornerRadius(2);
var buttonPressedBackground1 = GradientDrawable();
buttonPressedBackground1.setStroke(3.5, Color.BLACK);
buttonPressedBackground1.setColor(parseColor(parseColors.dkpurple));
buttonPressedBackground1.setCornerRadius(2);
var buttonBackgroundActive = android.graphics.drawable.GradientDrawable();
buttonBackgroundActive.setColor(android.graphics.Color.parseColor('#6a9404c6'));
buttonBackgroundActive.setStroke(3, android.graphics.Color.parseColor('#9404c6'));
buttonBackgroundActive.setCornerRadius(2);
var buttonPressedBackgroundActive = android.graphics.drawable.GradientDrawable();
buttonPressedBackgroundActive.setColor(android.graphics.Color.parseColor('#969404c6'));
buttonPressedBackgroundActive.setStroke(3, android.graphics.Color.parseColor('#9404c6'));
buttonPressedBackgroundActive.setCornerRadius(2);
var Error = {};
Error.getMyScriptName = function () {
    var _0x3502x9f = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for (var _0x3502xa0 = 0; _0x3502xa0 < _0x3502x9f.size(); _0x3502xa0++) {
        var _0x3502xa1 = _0x3502x9f.get(_0x3502xa0);
        var _0x3502xa2 = _0x3502xa1.scope;
        if (org.mozilla.javascript.ScriptableObject.hasProperty(_0x3502xa2, 'ErrorV1')) {
            return _0x3502xa1.name
        }
    }
};
var file = {
    select: function (_0x3502xa4, _0x3502xa5) {
        return (new File(_0x3502xa4, _0x3502xa5))
    },
    exists: function (_0x3502xa6) {
        return _0x3502xa6.exists()
    },
    create: function (_0x3502xa6) {
        _0x3502xa6.createNewFile();
        return _0x3502xa6
    },
    del: function (_0x3502xa6) {
        _0x3502xa6.delete()
    },
    read: function (_0x3502xa6) {
        var _0x3502xa7 = (new BufferedReader(new FileReader(_0x3502xa6)));
        var _0x3502xa8 = new StringBuilder();
        var _0x3502xa9;
        while ((_0x3502xa9 = _0x3502xa7.readLine()) != null) {
            _0x3502xa8.append(_0x3502xa9);
            _0x3502xa8.append(`\
`)
        };
        return _0x3502xa8.toString()
    },
    readLine: function (_0x3502xa6, _0x3502xaa) {
        var _0x3502xab = new file.read(_0x3502xa6);
        var _0x3502xac = _0x3502xab.split(`\
`);
        return _0x3502xac[_0x3502xaa - 1]
    },
    readKey: function (_0x3502xa6, _0x3502xad, _0x3502xae) {
        var _0x3502xaf = 0;
        var _0x3502xb0 = new file.read(_0x3502xa6);
        var _0x3502xb1 = _0x3502xb0.split(`\
`);
        for (var _0x3502xa0 = 0; _0x3502xa0 < _0x3502xb1.length; _0x3502xa0++) {
            var _0x3502xb2 = _0x3502xb1[_0x3502xa0].split(_0x3502xae);
            if (_0x3502xb2[0] == _0x3502xad) {
                return _0x3502xb2[1];
                _0x3502xaf = 1;
                break
            };
            if (!_0x3502xaf) {
                return '[Unknown]'
            }
        }
    },
    write: function (_0x3502xa6, _0x3502xb3) {
        file.rewrite(_0x3502xa6, (new file.read(_0x3502xa6)) + _0x3502xb3)
    },
    rewrite: function (_0x3502xa6, _0x3502xb3) {
        var _0x3502xb4 = new FOS(_0x3502xa6);
        _0x3502xb4.write(new String(_0x3502xb3).getBytes())
    },
    writeKey: function (_0x3502xa6, _0x3502xad, _0x3502xb5, _0x3502xae) {
        var _0x3502xaf = 0;
        var _0x3502xb0 = new file.read(_0x3502xa6);
        var _0x3502xb1 = _0x3502xb0.split('');
        for (var _0x3502xa0 = 0; _0x3502xa0 < _0x3502xb1.length; _0x3502xa0++) {
            var _0x3502xb2 = _0x3502xb1[_0x3502xa0].split(_0x3502xae);
            if (_0x3502xb2[0] == _0x3502xad) {
                var _0x3502xb6 = _0x3502xb0.split(_0x3502xad + _0x3502xae + new file.readKey(_0x3502xa6, _0x3502xad));
                file.rewrite(_0x3502xa6, _0x3502xb6[0] + _0x3502xad + _0x3502xae + _0x3502xb5 + _0x3502xb6[1]);
                _0x3502xaf = 1;
                break
            }
        };
        if (!_0x3502xaf) {
            file.write(_0x3502xa6, _0x3502xad + _0x3502xae + _0x3502xb5)
        }
    },
    mPlay: function (_0x3502xb7) {
        MediaPlayer.setDataSource(_0x3502xb7);
        MediaPlayer.prepare();
        MediaPlayer.start()
    },
    mStop: function () {
        MediaPlayer.reset()
    }
};
var optionsmcpe = new File(android.os.Environment.getExternalStorageDirectory() + '/games/com.mojang/minecraftpe/options.txt');
var Options = {
    read: function () {
        var _0x3502xba = new BufferedReader(new FileReader(optionsmcpe));
        var _0x3502xbb = '';
        var _0x3502xbc;
        while ((_0x3502xbc = _0x3502xba.readLine()) != null) {
            _0x3502xbb += _0x3502xbc + `\
`
        };
        return _0x3502xbb
    },
    get: function (_0x3502xbd) {
        var _0x3502xbb = null;
        try {
            var _0x3502xbe = new BufferedReader(new FileReader(optionsmcpe));
            var _0x3502xbc;
            while ((_0x3502xbc = _0x3502xbe.readLine()) != null) {
                if (_0x3502xbc.split(':')[0] == _0x3502xbd) {
                    _0x3502xbb = _0x3502xbc.split(':')[1]
                }
            }
        } catch (e) {
            E(e)
        };
        return _0x3502xbb
    },
    set: function (_0x3502xbd, _0x3502xbf) {
        try {
            var _0x3502xb3 = this.read();
            _0x3502xb3 = _0x3502xb3.replace(this.get(_0x3502xbd), _0x3502xbf);
            new FOS(optionsmcpe).write(new String(_0x3502xb3).getBytes())
        } catch (e) {
            E(e)
        }
    },
    arr: function () {
        var _0x3502xc0 = [];
        try {
            var _0x3502xb3;
            var _0x3502xc1 = (_0x3502xb3 = this.read()).split(`\
`);
            for (var _0x3502xa0 = 0; _0x3502xa0 < _0x3502xc1.length - 1; _0x3502xa0++) {
                _0x3502xc0.push(_0x3502xc1[_0x3502xa0].split(':')[0])
            }
        } catch (e) {
            E(e)
        };
        return _0x3502xc0
    }
};

function getTextFromFile(_0x3502xc3) {
    var _0x3502xa7 = (new BufferedReader(new FileReader(_0x3502xc3)));
    var _0x3502xa8 = new StringBuilder();
    var _0x3502xa9;
    while ((_0x3502xa9 = _0x3502xa7.readLine()) != null) {
        _0x3502xa8.append(_0x3502xa9 + `\
`)
    };
    return _0x3502xa8.toString()
}
var cid = getTextFromFile(new File(sdcard + path2 + 'clientId.txt'));
var cidd = file.select(sdcard + path2, 'clientId.txt');
var path3 = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/games/com.mojang/minecraftpe',
    logPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + '/log_err';
if (!File(logPath).exists()) {
    File(logPath).mkdirs()
};
if (!File(path3).exists()) {
    File(path3).mkdirs()
};
path3 += '/_Real_Virus325_';
if (!File(path).exists()) {
    File(path3).mkdirs()
};
path3 += '/Error';
if (!File(path3).exists()) {
    File(path3).mkdirs()
};
var logerr = file.select(sdcard + '/log_err', 'log.txt');
var filee = new File(path3 + '/click.m4a');
if (!filee.exists()) {
    filee.createNewFile();
    var stream = new FOS(filee);
    stream.write(Base64.decode(B64.click, 0));
    stream.close();
    E('Created sound file.');
    file.create(logerr);
    file.write(logerr, 'Log > Created sound file')
};
var fontFile = new File(path3 + '/mcfont.ttf');
if (!fontFile.exists()) {
    fontFile.createNewFile();
    var fileOutputStream = new FOS(fontFile);
    fileOutputStream.write(Base64.decode(B64.font, 0));
    fileOutputStream.close();
    E('Created font file.');
    file.write(logerr, 'Log > Created font file')
};
var fontFile2 = new File(path3 + '/mcfont2.ttf');
if (!fontFile2.exists()) {
    fontFile2.createNewFile();
    var fileOutputStream = new FOS(fontFile2);
    fileOutputStream.write(Base64.decode(B64.font2, 0));
    fileOutputStream.close();
    E('Created font file №².');
    file.write(logerr, 'Log > Created font file №²')
};
var font = new createFromFile(path3 + '/mcfont.ttf');
var font2 = new createFromFile(path3 + '/mcfont2.ttf');

function pSound(_0x3502xd1) {
    try {
        MediaPlayer.stop();
        MediaPlayer.reset();
        MediaPlayer.setDataSource(path3 + _0x3502xd1);
        MediaPlayer.prepare();
        MediaPlayer.setLooping(false);
        MediaPlayer.start()
    } catch (e) {
        E(e + ' #' + e.lineNumber)
    }
}

function clickSound() {
    pSound(Texts.clickMCPEbtn)
}
var icon_cheat = Base64.decode(B64.icon, 0);
var setting_key = Base64.decode(B64.settingkey, 0);
var youtubeBtn = Base64.decode(B64.ytBtn, 0);
var youtubeBtnHover = Base64.decode(B64.ytBtnHover, 0);
var vkButton = Base64.decode(B64.vkBtn, 0);
var vkButtonHover = Base64.decode(B64.vkBtnHover, 0);
ModPE.langEdit('menu.copyright', '© Mojang AB: §5Error V1');
ModPE.langEdit('deathScreen.message', '§7You Dead');
ModPE.langEdit('progressScreen.generating', '§l§5» Error V1');

function E(_0x3502xb3, _0x3502xda) {
    try {
        ctx.runOnUiThread(new Runnable({
            run: function () {
                var _0x3502xdb = makeText(ctx, '' + _0x3502xb3, length_long);
                var _0x3502xdc = new LinearLayout(ctx);
                var _0x3502xdd = new TextView(ctx);
                if (_0x3502xda == null) {
                    _0x3502xb3 = fromHtml('' + _0x3502xb3)
                } else {
                    _0x3502xb3 = fromHtml(_0x3502xda + '' + _0x3502xb3)
                };
                _0x3502xdd.setText(_0x3502xb3);
                _0x3502xdd.setTypeface(Utils.font);
                _0x3502xdd.setGravity(Gravity.CENTER);
                _0x3502xdd.setTextSize(13);
                _0x3502xdd.setPadding(5, 5, 5, 5);
                _0x3502xdd.setTextColor(Color.WHITE);
                var _0x3502xde = new GradientDrawable();
                _0x3502xde.setColor(Color.BLACK);
                _0x3502xde.setStroke(3.5, parseColor(parseColors.purple));
                _0x3502xde.setCornerRadius(5);
                _0x3502xdc.addView(_0x3502xdd);
                _0x3502xdc.setBackground(_0x3502xde);
                _0x3502xdc.setPadding(5, 5, 5, 5);
                _0x3502xdc.getBackground().setAlpha(150);
                _0x3502xdb.setView(_0x3502xdc);
                _0x3502xdb.show()
            }
        }))
    } catch (e) {
        print(e + ' #' + e.lineNumber)
    }
}

function showTestButton(_0x3502xe0, pos) {
    if (_0x3502xe0 != null) {
        var _0x3502xe2 = Entity.getX(_0x3502xe0) - getPlayerX();
        var _0x3502xe3 = Entity.getY(_0x3502xe0) - getPlayerY();
        var _0x3502xe4 = Entity.getZ(_0x3502xe0) - getPlayerZ();
        if (pos != null && pos instanceof Array) {
            _0x3502xe2 = Entity.getX(_0x3502xe0) - pos[0];
            _0x3502xe3 = Entity.getY(_0x3502xe0) - pos[1];
            _0x3502xe4 = Entity.getZ(_0x3502xe0) - pos[2]
        };
        if (Entity.getEntityTypeId(_0x3502xe0) != 63) {
            _0x3502xe3 += 0.5
        };
        var _0x3502xe5 = 0.5 + Entity.getX(_0x3502xe0);
        var _0x3502xe6 = Entity.getY(_0x3502xe0);
        var _0x3502xe7 = 0.5 + Entity.getZ(_0x3502xe0);
        var _0x3502xe8 = Math.sqrt(_0x3502xe2 * _0x3502xe2 + _0x3502xe3 * _0x3502xe3 + _0x3502xe4 * _0x3502xe4);
        var _0x3502xe3 = _0x3502xe3 / _0x3502xe8;
        var _0x3502xe9 = Math.asin(_0x3502xe3);
        _0x3502xe9 = _0x3502xe9 * 180.0 / Math.PI;
        _0x3502xe9 = -_0x3502xe9;
        var _0x3502xea = -Math.atan2(_0x3502xe5 - (Player.getX() + 0.5), _0x3502xe7 - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (_0x3502xe9 < 89 && _0x3502xe9 > -89) {
            Entity.setRot(Player.getEntity(), _0x3502xea, _0x3502xe9)
        }
    }
}

function toDirectionalVector(_0x3502xec, _0x3502xea, _0x3502xe9) {
    _0x3502xec[0] = Math.cos(_0x3502xea) * Math.cos(_0x3502xe9);
    _0x3502xec[1] = Math.sin(_0x3502xe9);
    _0x3502xec[2] = Math.sin(_0x3502xea) * Math.cos(_0x3502xe9)
}
var previousVisualRoadPart = [];
var visualRoadTimer = 0;

function visualRoad() {
    visualRoadTimer++;
    if (visualRoadTimer >= 5) {
        visualRoadTimer = 0;
        var _0x3502xe2 = Math.floor(getPlayerX());
        var _0x3502xe3 = Math.floor(getPlayerY());
        var _0x3502xe4 = Math.floor(getPlayerZ());
        for (var _0x3502xa0 = 0; _0x3502xa0 < previousVisualRoadPart.length; _0x3502xa0++) {
            Level.setTile(previousVisualRoadPart[_0x3502xa0][0], previousVisualRoadPart[_0x3502xa0][1], previousVisualRoadPart[_0x3502xa0][2], 0)
        };
        previousVisualRoadPart = [];
        for (var _0x3502xf0 = _0x3502xe2 - 1; _0x3502xf0 <= _0x3502xe2 + 1; _0x3502xf0++) {
            for (var _0x3502xf1 = _0x3502xe4 - 1; _0x3502xf1 <= _0x3502xe4 + 1; _0x3502xf1++) {
                if (Level.getTile(_0x3502xf0, _0x3502xe3 - 2, _0x3502xf1) == 0) {
                    Level.setTile(_0x3502xf0, _0x3502xe3 - 2, _0x3502xf1, 20);
                    previousVisualRoadPart.push([_0x3502xf0, _0x3502xe3 - 2, _0x3502xf1])
                }
            }
        }
    }
}

function Nuker() {
    time3++;
    if (time3 >= 1) {
        time3 = 0;
        for (var _0x3502xf0 = getPlayerX() - 2; _0x3502xf0 <= getPlayerX() + 2; _0x3502xf0++) {
            for (var _0x3502xf1 = getPlayerZ() - 2; _0x3502xf1 <= getPlayerZ() + 2; _0x3502xf1++) {
                for (var _0x3502xf3 = getPlayerY() - 2; _0x3502xf3 <= getPlayerY() + 2; _0x3502xf3++) {
                    Level.destroyBlock(_0x3502xf0, _0x3502xf3, _0x3502xf1)
                }
            }
        }
    }
}
var Launcher = {
    isBlockLauncher: function () {
        return (ctx.getPackageName() == 'net.zhuoweizhang.mcpelauncher' || ctx.getPackageName() == 'net.zhuoweizhang.mcpelauncher.pro')
    },
    isToolbox: function () {
        return ctx.getPackageName() == 'io.mrarm.mctoolbox'
    },
    isMcpeMaster: function () {
        return ctx.getPackageName() == 'com.mcbox.pesdkb.mcpelauncher'
    },
    isBLFree: function () {
        return ctx.getPackageName() == 'net.zhuoweizhang.mcpelauncher'
    },
    isTempest: function () {
        return ctx.getPackageName() == 'com.tempest.minecraftpe'
    }
};
var Utils = {
    font: android.os.Build.VERSION.SDK_INT >= 17 ? android.graphics.Typeface.create('sans-serif-light', android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
    font2: android.os.Build.VERSION.SDK_INT >= 17 ? android.graphics.Typeface.create('sans-serif', android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
    font3: android.os.Build.VERSION.SDK_INT >= 17 ? android.graphics.Typeface.create('sans-serif-condensed', android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
    font4: android.os.Build.VERSION.SDK_INT >= 17 ? android.graphics.Typeface.create('sans-serif-thin', android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
    font5: android.os.Build.VERSION.SDK_INT >= 17 ? android.graphics.Typeface.create('sans-serif-medium', android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
    Render: {
        getFloatBuffer: function (_0x3502xf6) {
            let _0x3502xf7 = java.nio.ByteBuffer.allocateDirect(_0x3502xf6.length * 4);
            _0x3502xf7.order(java.nio.ByteOrder.nativeOrder());
            let _0x3502xf8 = _0x3502xf7.asFloatBuffer();
            _0x3502xf8.put(_0x3502xf6);
            _0x3502xf8.position(0);
            return _0x3502xf8
        },
        getShortBuffer: function (_0x3502xf9) {
            let _0x3502xf7 = java.nio.ByteBuffer.allocateDirect(_0x3502xf9.length * 2);
            _0x3502xf7.order(java.nio.ByteOrder.nativeOrder());
            let _0x3502xfa = _0x3502xf7.asShortBuffer();
            _0x3502xfa.put(_0x3502xf9);
            _0x3502xfa.position(0);
            return _0x3502xfa
        },
        renderer: null,
        glSurface: null,
        fov: 90,
        color: Color.argb(100, 90, 90, 90),
        initted: false,
        init: function () {
            if (Utils.Render.initted) {
                return
            };
            let _0x3502xfb = getTextFromFile(new File(android.os.Environment.getExternalStorageDirectory() + '/games/com.mojang/minecraftpe/', 'options.txt'));
            _0x3502xfb = _0x3502xfb.split(`\
`);
            _0x3502xfb.forEach(function (_0x3502xfc) {
                let _0x3502xfd = _0x3502xfc.split(':');
                if (_0x3502xfd[0] == 'gfx_field_of_view') {
                    Utils.Render.fov = _0x3502xfd[1]
                }
            });
            this.renderer = new android.opengl.GLSurfaceView.Renderer({
                onSurfaceCreated: function (_0x3502xfe, _0x3502xff) {
                    let _0x3502x100 = javax.microedition.khronos.opengles.GL10;
                    _0x3502xfe.glClearColor(0, 0, 0, 0);
                    _0x3502xfe.glShadeModel(_0x3502x100.GL_SMOOTH);
                    _0x3502xfe.glClearDepthf(1.0);
                    _0x3502xfe.glDisable(_0x3502x100.GL_DITHER);
                    _0x3502xfe.glEnable(_0x3502x100.GL_DEPTH_TEST);
                    _0x3502xfe.glDepthFunc(_0x3502x100.GL_LEQUAL);
                    _0x3502xfe.glHint(_0x3502x100.GL_PERSPECTIVE_CORRECTION_HINT, _0x3502x100.GL_NICEST)
                },
                onSurfaceChanged: function (_0x3502xfe, _0x3502x101, _0x3502x102) {
                    let _0x3502x100 = javax.microedition.khronos.opengles.GL10;
                    _0x3502xfe.glMatrixMode(_0x3502x100.GL_PROJECTION);
                    _0x3502xfe.glLoadIdentity();
                    android.opengl.GLU.gluPerspective(_0x3502xfe, Utils.Render.fov, _0x3502x101 / _0x3502x102, 0.1, 100);
                    _0x3502xfe.glMatrixMode(_0x3502x100.GL_MODELVIEW);
                    _0x3502xfe.glLoadIdentity()
                },
                onDrawFrame: function (_0x3502xfe) {
                    let _0x3502x100 = javax.microedition.khronos.opengles.GL10;
                    _0x3502xfe.glClear(_0x3502x100.GL_COLOR_BUFFER_BIT | _0x3502x100.GL_DEPTH_BUFFER_BIT);
                    _0x3502xfe.glLoadIdentity();
                    if (playeresp == true && getPlayerEnt() != -1) {
                        try {
                            _0x3502xfe.glDisable(_0x3502x100.GL_LIGHTING);
                            let _0x3502xea = getYaw() % 360;
                            let _0x3502xe9 = getPitch() % 360;
                            let _0x3502x103 = getPlayerX();
                            let _0x3502x104 = getPlayerY() + 1;
                            let _0x3502x105 = getPlayerZ();
                            let _0x3502x106 = Math.sin(_0x3502xea / 180 * Math.PI);
                            let _0x3502x107 = Math.cos(_0x3502xea / 180 * Math.PI);
                            let _0x3502x108 = Math.sqrt(_0x3502x106 * _0x3502x106 + _0x3502x107 * _0x3502x107) * Math.tan((_0x3502xe9 - 180) / 180 * Math.PI);
                            let _0x3502x109 = _0x3502x103 - _0x3502x106;
                            let _0x3502x10a = _0x3502x105 + _0x3502x107;
                            let _0x3502x10b = _0x3502x104 - _0x3502x108;
                            android.opengl.GLU.gluLookAt(_0x3502xfe, _0x3502x103, _0x3502x104, _0x3502x105, _0x3502x109, _0x3502x10b, _0x3502x10a, 0, 1.0, 0);
                            let _0x3502x10c = Entity.getAll();
                            let _0x3502x10d = Server.getAllPlayers();
                            _0x3502x10c.forEach(function (_0x3502xfc) {
                                if (_0x3502xfc != getPlayerEnt() && Entity.getEntityTypeId(_0x3502xfc) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(_0x3502xfe, Entity.getX(_0x3502xfc) - 0.5, Entity.getY(_0x3502xfc) - 0.5, Entity.getZ(_0x3502xfc) - 0.5, 1, 2, 1)
                                }
                            });
                            _0x3502x10d.forEach(function (_0x3502xfc) {
                                if (_0x3502xfc != getPlayerEnt() && Entity.getEntityTypeId(_0x3502xfc) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(_0x3502xfe, Entity.getX(_0x3502xfc) - 0.5, Entity.getY(_0x3502xfc) - 0.5, Entity.getZ(_0x3502xfc) - 0.5, 1, 2, 1)
                                }
                            })
                        } catch (e) {
                            clientMessage('RenderProblem: ' + e)
                        }
                    } else {}
                }
            });
            ctx.runOnUiThread(new jRunnable({
                run: function () {
                    Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
                    Utils.Render.glSurface.setZOrderOnTop(true);
                    Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                    Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
                    Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
                    Utils.Render.glSurface.setRenderMode(1);
                    ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);
                    Utils.Render.initted = true
                }
            }))
        },
        drawBox: function (_0x3502xfe, _0x3502xe2, _0x3502xe3, _0x3502xe4, _0x3502x10e, _0x3502x10f, _0x3502x110) {
            let _0x3502x100 = javax.microedition.khronos.opengles.GL10;
            let _0x3502x111 = new Array(_0x3502x10e, _0x3502x10f, _0x3502x110);
            let _0x3502x112 = [0, 0, 0, _0x3502x111[0], 0, 0, 0, 0, _0x3502x111[2], _0x3502x111[0], 0, _0x3502x111[2], 0, _0x3502x111[1], 0, _0x3502x111[0], _0x3502x111[1], 0, 0, _0x3502x111[1], _0x3502x111[2], _0x3502x111[0], _0x3502x111[1], _0x3502x111[2]];
            let _0x3502x113 = Utils.Render.getFloatBuffer(_0x3502x112);
            let _0x3502x114 = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
            let _0x3502x115 = [0, 1, 4, 1, 4, 5, 2, 3, 6, 7, 6, 3, 1, 3, 7, 7, 1, 5, 0, 2, 6, 6, 0, 4, 0, 1, 2, 3, 1, 2, 4, 5, 6, 7, 5, 6];
            let _0x3502x116 = Utils.Render.getShortBuffer(_0x3502x114);
            let _0x3502x117 = Utils.Render.getShortBuffer(_0x3502x115);
            _0x3502xfe.glTranslatef(_0x3502xe2, _0x3502xe3, _0x3502xe4);
            _0x3502xfe.glFrontFace(_0x3502x100.GL_CCW);
            _0x3502xfe.glEnable(_0x3502x100.GL_BLEND);
            _0x3502xfe.glBlendFunc(_0x3502x100.GL_SRC_ALPHA, _0x3502x100.GL_ONE_MINUS_SRC_ALPHA);
            _0x3502xfe.glLineWidth(4);
            _0x3502xfe.glColor4f(Color.red(Utils.Render.color) / 255, Color.green(Utils.Render.color) / 255, Color.blue(Utils.Render.color) / 255, 0.7);
            _0x3502xfe.glEnableClientState(_0x3502x100.GL_VERTEX_ARRAY);
            _0x3502xfe.glVertexPointer(3, _0x3502x100.GL_FLOAT, 0, _0x3502x113);
            _0x3502xfe.glDrawElements(_0x3502x100.GL_LINES, _0x3502x114.length, _0x3502x100.GL_UNSIGNED_SHORT, _0x3502x116);
            _0x3502xfe.glColor4f(Color.red(Utils.Render.color) / 255, Color.green(Utils.Render.color) / 255, Color.blue(Utils.Render.color) / 255, 0.2);
            _0x3502xfe.glDrawElements(_0x3502x100.GL_TRIANGLES, _0x3502x115.length, _0x3502x100.GL_UNSIGNED_SHORT, _0x3502x117);
            _0x3502xfe.glDisable(_0x3502x100.GL_LINE_SMOOTH);
            _0x3502xfe.glTranslatef(-_0x3502xe2, -_0x3502xe3, -_0x3502xe4)
        },
        drawLine: function (_0x3502xfe, _0x3502xe2, _0x3502xe3, _0x3502xe4, _0x3502x118, _0x3502x119, _0x3502x11a) {
            if (!tracers1) {
                return
            };
            let _0x3502x100 = javax.microedition.khronos.opengles.GL10;
            let _0x3502x111 = new Array(_0x3502x118, _0x3502x119, _0x3502x11a);
            let _0x3502x112 = [0, 0, 0, _0x3502x118 - _0x3502xe2, _0x3502x119 - _0x3502xe3, _0x3502x11a - _0x3502xe4];
            let _0x3502x113 = Utils.Render.getFloatBuffer(_0x3502x112);
            let _0x3502x11b = [0, 1];
            let _0x3502x11c = Utils.Render.getShortBuffer(_0x3502x11b);
            _0x3502xfe.glTranslatef(_0x3502xe2, _0x3502xe3, _0x3502xe4);
            _0x3502xfe.glEnable(_0x3502x100.GL_BLEND);
            _0x3502xfe.glDepthMask(false);
            _0x3502xfe.glBlendFunc(_0x3502x100.GL_SRC_ALPHA, _0x3502x100.GL_ONE_MINUS_SRC_ALPHA);
            _0x3502xfe.glLineWidth(4);
            _0x3502xfe.glColor4f(Color.red(Utils.Render.color) / 255, Color.green(Utils.Render.color) / 255, Color.blue(Utils.Render.color) / 255, 0.7);
            _0x3502xfe.glEnableClientState(_0x3502x100.GL_VERTEX_ARRAY);
            _0x3502xfe.glVertexPointer(3, _0x3502x100.GL_FLOAT, 0, _0x3502x113);
            _0x3502xfe.glDrawElements(_0x3502x100.GL_LINES, _0x3502x11b.length, _0x3502x100.GL_UNSIGNED_SHORT, _0x3502x11c);
            _0x3502xfe.glTranslatef(-_0x3502xe2, -_0x3502xe3, -_0x3502xe4);
            _0x3502xfe.glDepthMask(true);
            _0x3502xfe.glDisable(_0x3502x100.GL_LINE_SMOOTH)
        }
    },
    Block: {
        isLiquid: function (_0x3502x11d) {
            if (_0x3502x11d >= 8 && _0x3502x11d <= 11) {
                return true
            };
            return false
        },
        isLadder: function (_0x3502x11d) {
            if (_0x3502x11d = 65) {
                return true
            };
            return false
        },
        isWeb: function (_0x3502x11d) {
            if (_0x3502x11d = 30) {
                return true
            };
            return false
        },
        isIce: function (_0x3502x11d) {
            if (_0x3502x11d = 79 && _0x3502x11d = 174) {
                return true
            };
            return false
        }
    },
    Player: {
        isFall: function () {
            var _0x3502x11e = -0.07840000092983246;
            if (!Utils.Player.onGround() && Entity.getVelY(Player.getEntity()) < _0x3502x11e) {
                return true
            };
            return false
        },
        isInWater: function () {
            if (Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 0.1, getPlayerZ()))) {
                return true
            };
            return false
        },
        isAtEdge: function () {
            if (getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0 || getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 || getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 || getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0) {
                return true
            };
            return false
        },
        isOnWater: function () {
            if (Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()))) {
                return true
            };
            return false
        },
        isOnIce: function () {
            if (Utils.Block.isIce(getTile(getPlayerX(), getPlayerY() - 0.1, getPlayerZ()))) {
                return true
            };
            return false
        },
        isInWeb: function () {
            if (Utils.Block.isWeb(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ()))) {
                return true
            };
            return false
        },
        isOnLadder: function () {
            if (Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ()))) {
                return true
            };
            return false
        },
        onGround: function () {
            var _0x3502xe3 = getPlayerY();
            while (_0x3502xe3 > 1) {
                _0x3502xe3 -= 1
            };
            if (Math.round(_0x3502xe3 * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
                return true
            };
            if (Math.round(_0x3502xe3 * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
                return true
            };
            return false
        },
        isMoving: function () {
            moving = Player.getX();
            if (moving != 0) {
                moving--
            };
            if (moving == 0) {
                if (Player.getX != moving) {
                    moving = 10
                }
            }
        },
        overGround: function () {
            var _0x3502xe3 = getPlayerY();
            while (_0x3502xe3 > 2) {
                _0x3502xe3 -= 2
            };
            if (Math.round(_0x3502xe3 * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) {
                return true
            };
            if (Math.round(_0x3502xe3 * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) {
                return true
            };
            return false
        },
        isCollidedHorizontally: function () {
            var _0x3502xe2 = getPlayerX();
            var _0x3502xe4 = getPlayerZ();
            var _0x3502x11f = Math.round(_0x3502xe2 - 0.5);
            var _0x3502x120 = Math.round(_0x3502xe4 - 0.5);
            while (_0x3502xe2 < 1) {
                _0x3502xe2 += 1
            };
            while (_0x3502xe4 < 1) {
                _0x3502xe4 += 1
            };
            while (_0x3502xe2 > 1) {
                _0x3502xe2 -= 1
            };
            while (_0x3502xe4 > 1) {
                _0x3502xe4 -= 1
            };
            if (Math.round(_0x3502xe2 * 100) == 31) {
                _0x3502xe2 -= 0.01
            };
            if (Math.round(_0x3502xe4 * 100) == 31) {
                _0x3502xe4 -= 0.01
            };
            if (Math.round(_0x3502xe2 * 100) == 69) {
                _0x3502xe2 += 0.01
            };
            if (Math.round(_0x3502xe4 * 100) == 69) {
                _0x3502xe4 += 0.01
            };
            if (Math.round(_0x3502xe2 * 100) == 30) {
                _0x3502x11f--
            };
            if (Math.round(_0x3502xe4 * 100) == 30) {
                _0x3502x120--
            };
            if (Math.round(_0x3502xe2 * 100) == 70) {
                _0x3502x11f++
            };
            if (Math.round(_0x3502xe4 * 100) == 70) {
                _0x3502x120++
            };
            if (getTile(_0x3502x11f, getPlayerY(), _0x3502x120) == 0 && getTile(_0x3502x11f, getPlayerY() - 1, _0x3502x120) == 0) {
                return false
            };
            if (Block.getDestroyTime(getTile(_0x3502x11f, getPlayerY() - 1, _0x3502x120)) <= 0.1 && Block.getDestroyTime(getTile(_0x3502x11f, getPlayerY(), _0x3502x120)) <= 0.1) {
                return false
            };
            if (Math.round(_0x3502xe2 * 100) == 30 || Math.round(_0x3502xe2 * 100) == 70) {
                return true
            };
            if (Math.round(_0x3502xe4 * 100) == 30 || Math.round(_0x3502xe4 * 100) == 70) {
                return true
            };
            return false
        },
        Entity: {
            getAll: function () {
                return Utils.Entity.allEntitys
            },
            allEntitys: new Array(),
            aimAt: function (_0x3502xe2, _0x3502xe3, _0x3502xe4) {
                var _0x3502x121 = 1;
                var _0x3502x122 = _0x3502xe2 - getPlayerX();
                var _0x3502x123 = _0x3502xe3 - getPlayerY();
                var _0x3502x124 = _0x3502xe4 - getPlayerZ();
                var _0x3502x125 = (Math.atan2(_0x3502x124, _0x3502x122) * 180 / Math.PI) - 90;
                var _0x3502x119 = Math.sqrt(_0x3502x122 * _0x3502x122 + _0x3502x124 * _0x3502x124);
                var _0x3502x126 = 0.007;
                var _0x3502x127 = (_0x3502x121 * _0x3502x121 * _0x3502x121 * _0x3502x121 - _0x3502x126 * (_0x3502x126 * (_0x3502x119 * _0x3502x119) + 2 * _0x3502x123 * (_0x3502x121 * _0x3502x121)));
                var _0x3502xe9 = -(180 / Math.PI) * (Math.atan((_0x3502x121 * _0x3502x121 - Math.sqrt(_0x3502x127)) / (_0x3502x126 * _0x3502x119)));
                if (_0x3502xe9 < 89 && _0x3502xe9 > -89) {
                    oldYaw = newYaw;
                    newYaw = _0x3502x125;
                    var _0x3502x128 = Math.sqrt(Math.pow(_0x3502x122, 2) + Math.pow(_0x3502x123, 2) + Math.pow(_0x3502x124, 2));
                    yaw = _0x3502x125 + (newYaw - oldYaw) * (_0x3502x128 * _0x3502x128 / _0x3502x128) / (120 / 45);
                    Entity.setRot(getPlayerEnt(), yaw, _0x3502xe9)
                }
            },
            isOnGround: function (_0x3502xe0) {
                for (i = 0; i < _0x3502xe0.length; i++) {
                    var _0x3502xe3 = Entity.getY(_0x3502xe0[i]);
                    while (_0x3502xe3 > 1) {
                        _0x3502xe3 -= 1
                    };
                    if (Math.round(_0x3502xe3 * 100) == 62 && getTile(Entity.getX(_0x3502xe0[i]), Entity.getY(_0x3502xe0[i]) - 1.65, Entity.getZ(_0x3502xe0[i])) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(_0x3502xe0[i]), Entity.getY(_0x3502xe0[i]) - 1.65, Entity.getZ(_0x3502xe0[i])))) {
                        return true
                    };
                    if (Math.round(_0x3502xe3 * 100) == 12 && getTile(Entity.getX(_0x3502xe0[i]), Entity.getY(_0x3502xe0[i]) - 1.65, Entity.getZ(_0x3502xe0[i])) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(_0x3502xe0[i]), Entity.getY(_0x3502xe0[i]) - 1.65, Entity.getZ(_0x3502xe0[i])))) {
                        return true
                    };
                    return false
                }
            }
        }
    }
};
var guibtn = false;
var moving = false;
var combatMenuV = false;
var motionMenuV = false;
var playerMenuV = false;
var othersMenuV = false;
var combatMenuB = false;
var motionMenuB = false;
var playerMenuB = false;
var othersMenuB = false;
var clickButtonYouTubeRV = false;
var clickButtonVkRV = false;
var clickButtonVkDZ = false;
var clickButtonVkA = false;
var hitaim = false;
var hitaimbind = false;
var hitaimBbind = false;
var hitbox = false;
var hitboxbind = false;
var hitboxBbind = false;
var akb = false;
var akbbind = false;
var akbBbind = false;
var tpaura = false;
var tpaura2 = false;
var criticals = false;
var hitboost = false;
var betterattack = false;
var crosshair = false;
var derphit = false;
var stanceaura = false;
var limitedcamera = false;
var autowalk = false;
var visualroad = false;
var visualroadbind = false;
var visualroadBbind = false;
var glide = false;
var glidebind = false;
var glideBbind = false;
var flyglide = false;
var flyglidehelper = false;
var flyglidebind = false;
var flyglideBbind = false;
var longjump = false;
var longjump2 = false;
var jesus = false;
var jetpack = false;
var jetpackbind = false;
var jetpackBbind = false;
var jetpack2 = false;
var jetpack2bind = false;
var jetpack2Bbind = false;
var safewalk = false;
var spider = false;
var step = false;
var bunnyhop = false;
var fastfall = false;
var fastfallbind = false;
var fastfallBbind = false;
var antiafk = false;
var crouchfly = false;
var antigravity = false;
var antigravitybind = false;
var antigravityBbind = false;
var bouncefly = false;
var bounceflybind = false;
var bounceflyBbind = false;
var airjump = false;
var elevator = false;
var pos = false;
var destroy = false;
var haste = false;
var fullbright = false;
var fasteat = false;
var eat = false;
var tower = false;
var quicktower = false;
var taptp = false;
var nuker = false;
var nukerbind = false;
var nukerBbind = false;
var autodestroy = false;
var autodestroybind = false;
var autodestroyBbind = false;
var tapdestroy = false;
var coordsGUI = false;

function chatHook(_0x3502xb3) {
    if (_0x3502xb3 == '/help') {
        preventDefault();
        if (lang == 'eng') {
            clientMessage(' ');
            clientMessage('§7--- Help page 1 of 2 (/help <page>) ---');
            clientMessage('§eCommands:');
            clientMessage('§e/fov <fov: int>');
            clientMessage('§e/resetFov');
            clientMessage('§e/setName <setname: string>');
            clientMessage(' ')
        } else {
            clientMessage(' ');
            clientMessage('§7--- Страница справки 1 из 2 (/help <страница> ---');
            clientMessage('§eКоманды:');
            clientMessage('§e/fov <fov: int>');
            clientMessage('§e/resetFov');
            clientMessage('§e/setName <setname: string>');
            clientMessage(' ')
        }
    };
    if (_0x3502xb3 == '/help 2') {
        preventDefault();
        if (lang == 'eng') {
            clientMessage(' ');
            clientMessage('§7--- Help page 2 of 2 (/help <page>) ---');
            clientMessage('§e§oCombat settings');
            clientMessage('§e/setHitbox <setting: int> - function setting - Hitbox.');
            clientMessage('§e/setBetterAttack <setting: int> - function setting - BetterAttack.');
            clientMessage('§e/setCriticals <setting: int> - function setting - Criticals');
            clientMessage(' ');
            clientMessage('§e§oPlayer settings');
            clientMessage(' ');
            clientMessage('§e§oMotion settings');
            clientMessage('§e/setGlide <setting: int> - function setting - Glide');
            clientMessage(' ')
        } else {
            clientMessage(' ');
            clientMessage('§7--- Страница справки 2 из 2 (/help <страница>) ---');
            clientMessage('§e§oНастройки Combat');
            clientMessage('§e/setHitbox <setting: int> Настройка функции - Hitbox.');
            clientMessage('§e/setBetterAttack <setting: int> - Настройка функции - BetterAttack.');
            clientMessage('§e/setCriticals <setting: int> настройка функции - Criticals');
            clientMessage(' ');
            clientMessage('§e§oНастройки Player');
            clientMessage(' ');
            clientMessage('§e§oНастройки Motion');
            clientMessage('§e/setGlide <setting: int> - настройка функции - Glide');
            clientMessage(' ')
        }
    };
    if (_0x3502xb3 == '/resetFov') {
        preventDefault();
        if (lang == 'eng') {
            ModPE.resetFov();
            clientMessage(Texts.chatNameScript + 'Your FOV is the default game.')
        } else {
            clientMessage(Texts.chatNameScript + 'Ваш FOV установлен по умолчанию игры.')
        }
    }
}

function procCmd(_0x3502x180) {
    var _0x3502x181 = _0x3502x180.split(' ');
    if (_0x3502x181[0] == 'fov') {
        preventDefault();
        ModPE.setFov(_0x3502x181[1]);
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'Your FOV has been successfully changed to - ' + _0x3502x181[1] + '.')
        } else {
            clientMessage(Texts.chatNameScript + 'Ваш FOV успешно изменен на - ' + _0x3502x181[1] + '.')
        }
    };
    if (_0x3502x181[0] == 'setName') {
        Options.set('mp_username', _0x3502x181[1], ModPE.restart())
    };
    if (_0x3502x181[0] == 'setHitbox') {
        preventDefault();
        HitboxSettingXZ = _0x3502x181[1];
        HitboxSettingY = _0x3502x181[2];
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'Setting up the Hitbox function is complete, and now its attack radius is - ' + _0x3502x181[1] + ', ' + _0x3502x181[2] + '.')
        } else {
            clientMessage(Texts.chatNameScript + 'Настройка функции Hitbox завершена, и теперь ее радиус атаки - ' + _0x3502x181[1] + ', ' + _0x3502x181[2] + '.')
        }
    };
    if (_0x3502x181[0] == 'setBetterAttack') {
        preventDefault();
        fovBetterAttack = _0x3502x181[1];
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'Setting up BetterAttack completed, and now its FOV - ' + _0x3502x181[1] + '.')
        } else {
            clientMessage(Texts.chatNameScript + 'Настройка функции BetterAttack завершена, и теперь ее FOV - ' + _0x3502x181[1] + '.')
        }
    };
    if (_0x3502x181[0] == 'setCriticals') {
        preventDefault();
        CriticalsSettingY = _0x3502x181[1];
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'Setting up the Criticals function is complete, and now after the attack you will be raised to - ' + _0x3502x181[1] + '.')
        } else {
            clientMessage(Texts.chatNameScript + 'Настройка функции Criticals завершена, и теперь после атаки вас будет поднимать на - ' + _0x3502x181[1] + '.')
        }
    };
    if (_0x3502x181[0] == 'setGlide') {
        preventDefault();
        GlideSetting = _0x3502x181[1];
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'The Glide function setting is complete, and now when you turn on the function, you will be raised/lowered to - ' + _0x3502x181[1] + '.')
        } else {
            clientMessage(Texts.chatNameScript + 'Настройка функции Glide завершена, и теперь при включении функции, вас будет поднимать/опускать на - ' + _0x3502x181[1] + '.')
        }
    }
}
var _0xf94c = ['density', 'getDisplayMetrics', 'getResources', 'ceil', 'setOrientation', 'j', 'setText', 'font', 'setTypeface', 'setBackgroundDrawable', 'setTextColor', 'setBackground', 'setTextSize', 'setOnClickListener', 'getRawX', 'getRawY', 'ACTION_DOWN', 'update', 'ACTION_MOVE', 'ACTION_UP', 'ACTION_CANCEL', 'getAction', 'setOnTouchListener', 'setOnLongClickListener', 'addView', 'getDecorView', 'getWindow', 'RIGHT', 'TOP', 'showAtLocation', ' #', 'lineNumber', 'runOnUiThread', 'up', 'setPadding', 'setPositionRelative', ' ', 'down', 'CENTER', 'crosshairtext', 'length', 'decodeByteArray', 'setImageBitmap', 'dismiss', 'setAnimationStyle', 'LEFT', 'settingkey', 'decode', 'setTouchable'];

function dip2px(_0x3502x184) {
    return Math[_0xf94c[3]](_0x3502x184 * ctx[_0xf94c[2]]()[_0xf94c[1]]()[_0xf94c[0]])
}
showMenuBtn();

function showJumpBtn() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                var _0x3502x187 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                _0x3502x187[_0xf94c[4]](1);
                var _0x3502x188 = new Button(ctx);
                _0x3502x188[_0xf94c[6]](Texts[_0xf94c[5]]);
                _0x3502x188[_0xf94c[8]](Utils[_0xf94c[7]]);
                _0x3502x188[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                _0x3502x188[_0xf94c[10]](Color.WHITE);
                _0x3502x188[_0xf94c[11]](bg_1);
                _0x3502x188[_0xf94c[12]](13);
                _0x3502x188[_0xf94c[13]](new OnClickListener({
                    onClick: function (_0x3502x189) {
                        setVelY(getPlayerEnt(), 0.4)
                    }
                }));
                _0x3502x188[_0xf94c[22]](new OnTouchListener({
                    onTouch: function (_0x3502x18a, _0x3502x18b) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x18b[_0xf94c[21]]()) {
                            case MotionEvent[_0xf94c[16]]:
                                dx = mPosX - _0x3502x18b[_0xf94c[14]]();
                                dy = mPosY - _0x3502x18b[_0xf94c[15]]();
                                break;
                            case MotionEvent[_0xf94c[18]]:
                                mPosX = (_0x3502x18b[_0xf94c[14]]() + dx);
                                mPosY = (_0x3502x18b[_0xf94c[15]]() + dy);
                                GUIe[_0xf94c[17]](mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent[_0xf94c[19]]:
                                ;;
                            case MotionEvent[_0xf94c[20]]:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x188[_0xf94c[23]](new OnLongClickListener({
                    onLongClick: function (_0x3502x18c, _0x3502x18d) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x186[_0xf94c[24]](_0x3502x188);
                GUIe = new PopupWindow(_0x3502x186, dip2px(60), dip2px(40));
                GUIe[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                GUIe[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[27]] | Gravity[_0xf94c[28]], 270, 400)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showElevatorBtn() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                var _0x3502x187 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                _0x3502x187[_0xf94c[4]](1);
                var _0x3502x18f = new Button(ctx);
                _0x3502x18f[_0xf94c[6]](Texts[_0xf94c[33]]);
                _0x3502x18f[_0xf94c[8]](Utils[_0xf94c[7]]);
                _0x3502x18f[_0xf94c[10]](Color.WHITE);
                _0x3502x18f[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                _0x3502x18f[_0xf94c[11]](bg_1);
                _0x3502x18f[_0xf94c[34]](10, 10, 10, 10);
                _0x3502x18f[_0xf94c[13]](new OnClickListener({
                    onClick: function (_0x3502x189) {
                        Entity[_0xf94c[35]](getPlayerEnt(), 0, 2.8, 0);
                        setVelY(getPlayerEnt(), -0.0)
                    }
                }));
                _0x3502x18f[_0xf94c[22]](new OnTouchListener({
                    onTouch: function (_0x3502x18a, _0x3502x18b) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x18b[_0xf94c[21]]()) {
                            case MotionEvent[_0xf94c[16]]:
                                dx = mPosX - _0x3502x18b[_0xf94c[14]]();
                                dy = mPosY - _0x3502x18b[_0xf94c[15]]();
                                break;
                            case MotionEvent[_0xf94c[18]]:
                                mPosX = (_0x3502x18b[_0xf94c[14]]() + dx);
                                mPosY = (_0x3502x18b[_0xf94c[15]]() + dy);
                                GUIr[_0xf94c[17]](mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent[_0xf94c[19]]:
                                ;;
                            case MotionEvent[_0xf94c[20]]:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x18f[_0xf94c[23]](new OnLongClickListener({
                    onLongClick: function (_0x3502x18c, _0x3502x18d) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x186[_0xf94c[24]](_0x3502x18f);
                var _0x3502x190 = new TextView(ctx);
                _0x3502x190[_0xf94c[12]](2);
                _0x3502x190[_0xf94c[6]](_0xf94c[36]);
                _0x3502x186[_0xf94c[24]](_0x3502x190);
                var _0x3502x18f = new Button(ctx);
                _0x3502x18f[_0xf94c[6]](Texts[_0xf94c[37]]);
                _0x3502x18f[_0xf94c[8]](Utils[_0xf94c[7]]);
                _0x3502x18f[_0xf94c[10]](Color.WHITE);
                _0x3502x18f[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                _0x3502x18f[_0xf94c[11]](bg_1);
                _0x3502x18f[_0xf94c[34]](10, 10, 10, 10);
                _0x3502x18f[_0xf94c[13]](new OnClickListener({
                    onClick: function (_0x3502x189) {
                        Entity[_0xf94c[35]](getPlayerEnt(), 0, -2.8, 0);
                        setVelY(getPlayerEnt(), -0.0)
                    }
                }));
                _0x3502x18f[_0xf94c[22]](new OnTouchListener({
                    onTouch: function (_0x3502x18a, _0x3502x18b) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x18b[_0xf94c[21]]()) {
                            case MotionEvent[_0xf94c[16]]:
                                dx = mPosX - _0x3502x18b[_0xf94c[14]]();
                                dy = mPosY - _0x3502x18b[_0xf94c[15]]();
                                break;
                            case MotionEvent[_0xf94c[18]]:
                                mPosX = (_0x3502x18b[_0xf94c[14]]() + dx);
                                mPosY = (_0x3502x18b[_0xf94c[15]]() + dy);
                                GUIr[_0xf94c[17]](mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent[_0xf94c[19]]:
                                ;;
                            case MotionEvent[_0xf94c[20]]:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x18f[_0xf94c[23]](new OnLongClickListener({
                    onLongClick: function (_0x3502x18c, _0x3502x18d) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x186[_0xf94c[24]](_0x3502x18f);
                GUIr = new PopupWindow(_0x3502x186, WRAP_CONTENT, WRAP_CONTENT);
                GUIr[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                GUIr[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[27]] | Gravity[_0xf94c[38]], 0, 0)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showCrossHair() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                var _0x3502x187 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                _0x3502x187[_0xf94c[4]](1);
                var _0x3502x192 = TextView(ctx);
                _0x3502x192[_0xf94c[6]](Texts[_0xf94c[39]]);
                _0x3502x192[_0xf94c[12]](25);
                _0x3502x192[_0xf94c[10]](Color.GREEN);
                _0x3502x186[_0xf94c[24]](_0x3502x192);
                GUIt = new PopupWindow(_0x3502x186, WRAP_CONTENT, WRAP_CONTENT);
                GUIt[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                GUIt[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[38]] | Gravity[_0xf94c[38]], 0, 0)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showMenuBtn() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                var _0x3502x188 = new ImageView(ctx);
                _0x3502x188[_0xf94c[42]](BitmapFactory[_0xf94c[41]](icon_cheat, 0, icon_cheat[_0xf94c[40]]));
                _0x3502x188[_0xf94c[13]](new OnClickListener({
                    onClick: function (_0x3502x189) {
                        if (!guibtn) {
                            clickSound();
                            showAllMenu();
                            showSettingsBtnBg();
                            showSettingsBtn();
                            guibtn = true
                        } else {
                            clickSound();
                            if (allMenu != null) {
                                allMenu[_0xf94c[43]]();
                                allMenu = null
                            };
                            if (GUIw != null) {
                                GUIw[_0xf94c[43]]();
                                GUIw = null
                            };
                            if (GUIq != null) {
                                GUIq[_0xf94c[43]]();
                                GUIq = null
                            };
                            guibtn = false
                        }
                    }
                }));
                _0x3502x188[_0xf94c[22]](new OnTouchListener({
                    onTouch: function (_0x3502x18a, _0x3502x18b) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x18b[_0xf94c[21]]()) {
                            case MotionEvent[_0xf94c[16]]:
                                dx = mPosX - _0x3502x18b[_0xf94c[14]]();
                                dy = mPosY - _0x3502x18b[_0xf94c[15]]();
                                break;
                            case MotionEvent[_0xf94c[18]]:
                                mPosX = (_0x3502x18b[_0xf94c[14]]() + dx);
                                mPosY = (_0x3502x18b[_0xf94c[15]]() + dy);
                                GUI[_0xf94c[17]](mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent[_0xf94c[19]]:
                                ;;
                            case MotionEvent[_0xf94c[20]]:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x188[_0xf94c[23]](new OnLongClickListener({
                    onLongClick: function (_0x3502x18c, _0x3502x18d) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x186[_0xf94c[24]](_0x3502x188);
                GUI = new PopupWindow(_0x3502x186, dip2px(50), dip2px(50));
                GUI[_0xf94c[44]](Animation_InputMethod);
                GUI[_0xf94c[9]](new ColorDrawable(Color.TRANSPARENT));
                GUI[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[27]] | Gravity[_0xf94c[28]], 0, 120)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showSettingsBtnBg() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                var _0x3502x195 = new Button(ctx);
                _0x3502x195[_0xf94c[12]](10);
                _0x3502x195[_0xf94c[6]](_0xf94c[36]);
                _0x3502x195[_0xf94c[11]](buttonBackground);
                _0x3502x195[_0xf94c[13]](new OnClickListener({
                    onClick: function (_0x3502x189) {
                        clickSound();
                        showSettingsMenu();
                        if (GUIw != null) {
                            GUIw[_0xf94c[43]]();
                            GUIw = null
                        };
                        if (GUIq != null) {
                            GUIq[_0xf94c[43]]();
                            GUIq = null
                        }
                    }
                }));
                _0x3502x186[_0xf94c[24]](_0x3502x195);
                GUIw = new PopupWindow(_0x3502x186, dip2px(40), dip2px(40));
                GUIw[_0xf94c[44]](Animation_InputMethod);
                GUIw[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[45]] | Gravity[_0xf94c[38]], 0, 0)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showSettingsBtn() {
    ctx[_0xf94c[32]](new Runnable({
        run: function () {
            try {
                var _0x3502x186 = new LinearLayout(ctx);
                _0x3502x186[_0xf94c[4]](1);
                var _0x3502x197 = new Button(ctx);
                _0x3502x197[_0xf94c[12]](10);
                _0x3502x197[_0xf94c[6]](_0xf94c[36]);
                _0x3502x197[_0xf94c[34]](5, 5, 5, 5);
                _0x3502x197[_0xf94c[9]](new BitmapDrawable(setting_key));
                _0x3502x186[_0xf94c[24]](_0x3502x197);
                GUIq = new PopupWindow(_0x3502x186, dip2px(40), dip2px(40));
                GUIq[_0xf94c[44]](Animation_InputMethod);
                GUIq[_0xf94c[9]](new BitmapDrawable(BitmapFactory[_0xf94c[41]](Base64[_0xf94c[47]](B64[_0xf94c[46]], 0), 0, Base64[_0xf94c[47]](B64[_0xf94c[46]], 0)[_0xf94c[40]])));
                GUIq[_0xf94c[48]](false);
                _0x3502x186[_0xf94c[34]](5, 5, 5, 5);
                GUIq[_0xf94c[29]](ctx[_0xf94c[26]]()[_0xf94c[25]](), Gravity[_0xf94c[45]] | Gravity[_0xf94c[38]], 0, 0)
            } catch (e) {
                E(e + _0xf94c[30] + e[_0xf94c[31]])
            }
        }
    }))
}

function showSettingsMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x199 = new LinearLayout(ctx);
                var _0x3502x19a = new ScrollView(ctx);
                var _0x3502x19b = new LinearLayout(ctx);
                var _0x3502x19c = new LinearLayout(ctx);
                var _0x3502x19d = new LinearLayout(ctx);
                var _0x3502x19e = new LinearLayout(ctx);
                var _0x3502x19f = new LinearLayout(ctx);
                var _0x3502x1a0 = new LinearLayout(ctx);
                _0x3502x199.setOrientation(1);
                _0x3502x19b.setOrientation(1);
                _0x3502x19a.addView(_0x3502x199);
                _0x3502x19b.addView(_0x3502x19a);
                var _0x3502x1a1 = new Button(ctx);
                _0x3502x1a1.setTextSize(18);
                if (lang == 'eng') {
                    _0x3502x1a1.setText(Texts.settingsMenu)
                } else {
                    _0x3502x1a1.setText(Texts.settingsMenu2)
                };
                _0x3502x1a1.setAllCaps(false);
                _0x3502x1a1.setLayoutParams(params);
                _0x3502x1a1.setTypeface(Utils.font);
                _0x3502x1a1.setBackground(bg_3);
                _0x3502x1a1.setTextColor(Color.BLACK);
                _0x3502x1a1.setGravity(Gravity.LEFT);
                _0x3502x19c.addView(_0x3502x1a1);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x19c.addView(_0x3502x1a2);
                var _0x3502x1a3 = new Button(ctx);
                _0x3502x1a3.setTextSize(17);
                _0x3502x1a3.setText(Texts.exit);
                _0x3502x1a3.setBackground(bg_1);
                _0x3502x1a3.setTextColor(parseColor(parseColors.purple));
                _0x3502x1a3.setLayoutParams(new LinearLayout.LayoutParams(80, WRAP_CONTENT));
                _0x3502x1a3.setGravity(Gravity.CENTER);
                _0x3502x1a3.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        if (settings != null) {
                            settings.dismiss();
                            settings = null
                        };
                        showSettingsBtnBg();
                        showSettingsBtn()
                    }
                }));
                _0x3502x19c.addView(_0x3502x1a3);
                _0x3502x199.addView(_0x3502x19c);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1a5 = new TextView(ctx);
                _0x3502x1a5.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1a5.setText(' ' + Texts.langs)
                } else {
                    _0x3502x1a5.setText(' ' + Texts.langs2)
                };
                _0x3502x1a5.setBackground(bg_4);
                _0x3502x1a5.setTextColor(Color.WHITE);
                _0x3502x1a5.setTypeface(Utils.font);
                _0x3502x199.addView(_0x3502x1a5);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1a6 = new Button(ctx);
                if (lang == 'eng') {
                    _0x3502x1a6.setText(Texts.english)
                } else {
                    _0x3502x1a6.setText(Texts.english2)
                };
                _0x3502x1a6.setLayoutParams(params);
                _0x3502x1a6.setBackground(buttonBackground1);
                _0x3502x1a6.setTextColor(Color.WHITE);
                _0x3502x1a6.setTypeface(Utils.font);
                _0x3502x1a6.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        lang = 'eng';
                        if (settings != null) {
                            settings.dismiss();
                            settings = null
                        };
                        showSettingsBtnBg();
                        showSettingsBtn();
                        clickSound()
                    }
                }));
                _0x3502x19d.addView(_0x3502x1a6);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x19d.addView(_0x3502x1a2);
                var _0x3502x1a7 = new Button(ctx);
                if (lang == 'eng') {
                    _0x3502x1a7.setText(Texts.russian)
                } else {
                    _0x3502x1a7.setText(Texts.russian2)
                };
                _0x3502x1a7.setLayoutParams(params);
                _0x3502x1a7.setBackground(buttonBackground1);
                _0x3502x1a7.setTextColor(Color.WHITE);
                _0x3502x1a7.setTypeface(Utils.font);
                _0x3502x1a7.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        lang = 'rus';
                        if (settings != null) {
                            settings.dismiss();
                            settings = null
                        };
                        showSettingsBtnBg();
                        showSettingsBtn();
                        clickSound()
                    }
                }));
                _0x3502x19d.addView(_0x3502x1a7);
                _0x3502x199.addView(_0x3502x19d);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1a8 = new TextView(ctx);
                _0x3502x1a8.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1a8.setText(' ' + Texts.contacts)
                } else {
                    _0x3502x1a8.setText(' ' + Texts.contacts2)
                };
                _0x3502x1a8.setBackground(bg_4);
                _0x3502x1a8.setTextColor(Color.WHITE);
                _0x3502x1a8.setTypeface(Utils.font);
                _0x3502x199.addView(_0x3502x1a8);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1a9 = new Button(ctx);
                _0x3502x1a9.setText(' ');
                _0x3502x1a9.setAllCaps(false);
                _0x3502x1a9.setTextColor(Color.RED);
                _0x3502x1a9.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.ytBtn, 0), 0, Base64.decode(B64.ytBtn, 0).length)));
                _0x3502x1a9.setLayoutParams(new LinearLayout.LayoutParams(80, 80));
                _0x3502x1a9.setTextSize(15);
                _0x3502x1a9.setGravity(Gravity.CENTER);
                _0x3502x1a9.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://www.youtube.com/channel/UCB2zb67jjHi5KtZrA80gzsA'));
                        ctx.startActivity(intentURL)
                    }
                }));
                _0x3502x19e.addView(_0x3502x1a9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(5);
                _0x3502x1a2.setText(' ');
                _0x3502x19e.addView(_0x3502x1a2);
                var _0x3502x1aa = new Button(ctx);
                _0x3502x1aa.setText(' ');
                _0x3502x1aa.setAllCaps(false);
                _0x3502x1aa.setTextColor(Color.RED);
                _0x3502x1aa.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.vkBtn, 0), 0, Base64.decode(B64.vkBtn, 0).length)));
                _0x3502x1aa.setLayoutParams(new LinearLayout.LayoutParams(80, 80));
                _0x3502x1aa.setTextSize(15);
                _0x3502x1aa.setGravity(Gravity.CENTER);
                _0x3502x1aa.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://vk.com/random8284'));
                        ctx.startActivity(intentURL)
                    }
                }));
                _0x3502x19e.addView(_0x3502x1aa);
                var _0x3502x1ab = new TextView(ctx);
                _0x3502x1ab.setTextSize(12);
                _0x3502x1ab.setText(' ' + Texts.realvirus325);
                _0x3502x1ab.setTypeface(Utils.font);
                _0x3502x1ab.setLayoutParams(params);
                _0x3502x1ab.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1ab.setTextColor(Color.WHITE);
                _0x3502x19e.addView(_0x3502x1ab);
                _0x3502x199.addView(_0x3502x19e);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1ac = new Button(ctx);
                _0x3502x1ac.setText(' ');
                _0x3502x1ac.setAllCaps(false);
                _0x3502x1ac.setTextColor(Color.RED);
                _0x3502x1ac.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.vkBtn, 0), 0, Base64.decode(B64.vkBtn, 0).length)));
                _0x3502x1ac.setLayoutParams(new LinearLayout.LayoutParams(80, 80));
                _0x3502x1ac.setTextSize(15);
                _0x3502x1ac.setGravity(Gravity.CENTER);
                _0x3502x1ac.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://vk.com/dividebyzero'));
                        ctx.startActivity(intentURL)
                    }
                }));
                _0x3502x19f.addView(_0x3502x1ac);
                var _0x3502x1ad = new TextView(ctx);
                _0x3502x1ad.setTextSize(12);
                _0x3502x1ad.setText(' ' + Texts.delayzero);
                _0x3502x1ad.setTypeface(Utils.font);
                _0x3502x1ad.setLayoutParams(params);
                _0x3502x1ad.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1ad.setTextColor(Color.WHITE);
                _0x3502x19f.addView(_0x3502x1ad);
                _0x3502x199.addView(_0x3502x19f);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1ae = new Button(ctx);
                _0x3502x1ae.setText(' ');
                _0x3502x1ae.setAllCaps(false);
                _0x3502x1ae.setTextColor(Color.RED);
                _0x3502x1ae.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.vkBtn, 0), 0, Base64.decode(B64.vkBtn, 0).length)));
                _0x3502x1ae.setLayoutParams(new LinearLayout.LayoutParams(80, 80));
                _0x3502x1ae.setTextSize(15);
                _0x3502x1ae.setGravity(Gravity.CENTER);
                _0x3502x1ae.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://vk.com/club171149716'));
                        ctx.startActivity(intentURL)
                    }
                }));
                _0x3502x1a0.addView(_0x3502x1ae);
                var _0x3502x1af = new TextView(ctx);
                _0x3502x1af.setTextSize(12);
                _0x3502x1af.setText(' ' + Texts.autyn);
                _0x3502x1af.setTypeface(Utils.font);
                _0x3502x1af.setLayoutParams(params);
                _0x3502x1af.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1af.setTextColor(Color.WHITE);
                _0x3502x1a0.addView(_0x3502x1af);
                _0x3502x199.addView(_0x3502x1a0);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1b0 = new TextView(ctx);
                _0x3502x1b0.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b0.setText(' ' + Texts.info)
                } else {
                    _0x3502x1b0.setText(' ' + Texts.info2)
                };
                _0x3502x1b0.setBackground(bg_4);
                _0x3502x1b0.setTextColor(Color.WHITE);
                _0x3502x1b0.setTypeface(Utils.font);
                _0x3502x199.addView(_0x3502x1b0);
                var _0x3502x1b1 = new TextView(ctx);
                _0x3502x1b1.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b1.setText(Texts.clientversion)
                } else {
                    _0x3502x1b1.setText(Texts.clientversion2)
                };
                _0x3502x1b1.setTypeface(Utils.font);
                _0x3502x1b1.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b1.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b1);
                var _0x3502x1b2 = new TextView(ctx);
                _0x3502x1b2.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b2.setText(Texts.totalmodulesModTick)
                } else {
                    _0x3502x1b2.setText(Texts.totalmodulesModTick2)
                };
                _0x3502x1b2.setTypeface(Utils.font);
                _0x3502x1b2.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b2.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b2);
                var _0x3502x1b3 = new TextView(ctx);
                _0x3502x1b3.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b3.setText(Texts.totalmodulesAttackHook)
                } else {
                    _0x3502x1b3.setText(Texts.totalmodulesAttackHook2)
                };
                _0x3502x1b3.setTypeface(Utils.font);
                _0x3502x1b3.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b3.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b3);
                var _0x3502x1b4 = new TextView(ctx);
                _0x3502x1b4.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b4.setText(Texts.totalmodulesUseItem)
                } else {
                    _0x3502x1b4.setText(Texts.totalmodulesUseItem2)
                };
                _0x3502x1b4.setTypeface(Utils.font);
                _0x3502x1b4.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b4.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b4);
                var _0x3502x1b5 = new TextView(ctx);
                _0x3502x1b5.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b5.setText(Texts.totalmodulesall)
                } else {
                    _0x3502x1b5.setText(Texts.totalmodulesall2)
                };
                _0x3502x1b5.setTypeface(Utils.font);
                _0x3502x1b5.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b5.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b5);
                var _0x3502x1b6 = new TextView(ctx);
                _0x3502x1b6.setTextSize(12);
                if (lang == 'eng') {
                    _0x3502x1b6.setText(Texts.minecraftversion)
                } else {
                    _0x3502x1b6.setText(Texts.minecraftversion2)
                };
                _0x3502x1b6.setTypeface(Utils.font);
                _0x3502x1b6.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1b6.setTextColor(Color.WHITE);
                _0x3502x199.addView(_0x3502x1b6);
                settings = new PopupWindow(_0x3502x19b, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                settings.setAnimationStyle(Animation_Dialog);
                settings.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                settings.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showBackgroundMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x199 = new LinearLayout(ctx);
                var _0x3502x19a = new ScrollView(ctx);
                var _0x3502x19b = new LinearLayout(ctx);
                var _0x3502x19c = new LinearLayout(ctx);
                _0x3502x199.setOrientation(1);
                _0x3502x19b.setOrientation(1);
                _0x3502x19a.addView(_0x3502x199);
                _0x3502x19b.addView(_0x3502x19a);
                bgblack = new PopupWindow(_0x3502x19b, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                bgblack.setAnimationStyle(Animation_Dialog);
                bgblack.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                bgblack.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function Information() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x199 = new LinearLayout(ctx);
                var _0x3502x19a = new ScrollView(ctx);
                var _0x3502x19b = new LinearLayout(ctx);
                var _0x3502x19c = new LinearLayout(ctx);
                _0x3502x199.setOrientation(1);
                _0x3502x19b.setOrientation(1);
                _0x3502x19a.addView(_0x3502x199);
                _0x3502x19b.addView(_0x3502x19a);
                var _0x3502x1b9 = new Button(ctx);
                _0x3502x1b9.setTextSize(15);
                if (lang == 'eng') {
                    _0x3502x1b9.setText(Texts.info)
                } else {
                    _0x3502x1b9.setText(Texts.info2)
                };
                _0x3502x1b9.setAllCaps(false);
                _0x3502x1b9.setTypeface(Utils.font);
                _0x3502x1b9.setTextColor(parseColor(parseColors.purple));
                _0x3502x1b9.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                _0x3502x1b9.setGravity(Gravity.CENTER);
                _0x3502x199.addView(_0x3502x1b9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1ba = new Button(ctx);
                if (lang == 'eng') {
                    _0x3502x1ba.setText(Texts.ok)
                } else {
                    _0x3502x1ba.setText(Texts.ok2)
                };
                _0x3502x1ba.setAllCaps(false);
                _0x3502x1ba.setTextColor(Color.RED);
                _0x3502x1ba.setBackground(bg_1);
                _0x3502x1ba.setTextSize(15);
                _0x3502x1ba.setGravity(Gravity.CENTER);
                _0x3502x1ba.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        if (bgblack != null) {
                            bgblack.dismiss();
                            bgblack = null
                        };
                        if (Information != null) {
                            Information.dismiss();
                            Information = null
                        };
                        showMenuBtn()
                    }
                }));
                var _0x3502x1bb = new Button(ctx);
                _0x3502x1bb.setText(Texts.ok);
                _0x3502x1bb.setAllCaps(false);
                _0x3502x1bb.setTextColor(Color.RED);
                _0x3502x1bb.setBackground(bg_1);
                _0x3502x1bb.setLayoutParams(params);
                _0x3502x1bb.setTextSize(15);
                _0x3502x1bb.setGravity(Gravity.CENTER);
                _0x3502x1bb.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        bgblack.dismiss();
                        Information.dismiss();
                        showMenuBtn()
                    }
                }));
                _0x3502x19c.addView(_0x3502x1bb);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x19c.addView(_0x3502x1a2);
                var _0x3502x1bc = new Button(ctx);
                if (lang == 'eng') {
                    _0x3502x1bc.setText(Texts.next)
                } else {
                    _0x3502x1bc.setText(Texts.next2)
                };
                _0x3502x1bc.setAllCaps(false);
                _0x3502x1bc.setTextColor(Color.GREEN);
                _0x3502x1bc.setBackground(bg_1);
                _0x3502x1bc.setLayoutParams(params);
                _0x3502x1bc.setTextSize(15);
                _0x3502x1bc.setGravity(Gravity.CENTER);
                _0x3502x1bc.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        _0x3502x199.removeView(_0x3502x1c0);
                        _0x3502x199.removeView(_0x3502x19c);
                        _0x3502x199.addView(_0x3502x1ba);
                        _0x3502x199.addView(_0x3502x1bd);
                        _0x3502x199.addView(_0x3502x1be);
                        _0x3502x199.addView(_0x3502x1bf)
                    }
                }));
                _0x3502x19c.addView(_0x3502x1bc);
                _0x3502x199.addView(_0x3502x19c);
                var _0x3502x1bd = new TextView(ctx);
                _0x3502x1bd.setTextSize(15);
                _0x3502x1bd.setText(Texts.developer);
                _0x3502x1bd.setTypeface(Utils.font);
                _0x3502x1bd.setTextColor(parseColor(parseColors.purple));
                _0x3502x1bd.setGravity(Gravity.CENTER);
                _0x3502x1bd.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://www.youtube.com/channel/UCB2zb67jjHi5KtZrA80gzsA'));
                        ctx.startActivity(intentURL)
                    }
                }));
                var _0x3502x1be = new TextView(ctx);
                _0x3502x1be.setTextSize(15);
                _0x3502x1be.setText(Texts.assistant);
                _0x3502x1be.setTypeface(Utils.font);
                _0x3502x1be.setTextColor(parseColor(parseColors.purple));
                _0x3502x1be.setGravity(Gravity.CENTER);
                _0x3502x1be.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://vk.com/id156616979'));
                        ctx.startActivity(intentURL)
                    }
                }));
                var _0x3502x1bf = new TextView(ctx);
                _0x3502x1bf.setTextSize(15);
                _0x3502x1bf.setText(Texts.assistant2);
                _0x3502x1bf.setTypeface(Utils.font);
                _0x3502x1bf.setTextColor(parseColor(parseColors.purple));
                _0x3502x1bf.setGravity(Gravity.CENTER);
                _0x3502x1bf.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        intentURL.setAction(Intent.ACTION_VIEW);
                        intentURL.setData(Uri.parse('https://vk.com/id307221826'));
                        ctx.startActivity(intentURL)
                    }
                }));
                var _0x3502x1c0 = new TextView(ctx);
                _0x3502x1c0.setTextSize(15);
                if (lang == 'eng') {
                    _0x3502x1c0.setText(Texts.update)
                } else {
                    _0x3502x1c0.setText(Texts.update2)
                };
                _0x3502x1c0.setTypeface(Utils.font);
                _0x3502x1c0.setTextColor(parseColor(parseColors.purple));
                _0x3502x1c0.setGravity(Gravity.CENTER);
                _0x3502x199.addView(_0x3502x1c0);
                Information = new PopupWindow(_0x3502x19b, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                Information.setAnimationStyle(Animation_Dialog);
                _0x3502x199.setPadding(10, 10, 10, 10);
                Information.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showAllMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x199 = new LinearLayout(ctx);
                var _0x3502x19b = new LinearLayout(ctx);
                _0x3502x199.setOrientation(1);
                _0x3502x19b.setOrientation(1);
                _0x3502x199.setBackground(bg_5);
                var _0x3502x1c2 = new TextView(ctx);
                _0x3502x1c2.setTextSize(9);
                _0x3502x1c2.setText(Texts.wm);
                _0x3502x1c2.setGravity(Gravity.CENTER);
                _0x3502x1c2.setTextColor(parseColor(parseColors.purple));
                _0x3502x1c2.setTypeface(Utils.font);
                _0x3502x199.addView(_0x3502x1c2);
                var _0x3502x1c3 = new TextView(ctx);
                _0x3502x1c3.setText(Texts.combat);
                _0x3502x1c3.setTypeface(Utils.font);
                _0x3502x1c3.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1c3.setTextSize(13);
                _0x3502x1c3.setTextColor(Color.WHITE);
                _0x3502x1c3.setBackground(bg_0);
                _0x3502x1c3.setBackground(combatMenuV ? bg_9 : bg_10);
                _0x3502x1c3.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1c3.setGravity(Gravity.CENTER);
                _0x3502x1c3.setHorizontallyScrolling(true);
                _0x3502x1c3.setSelected(true);
                _0x3502x1c3.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!combatMenuV) {
                            combatMenuV = true;
                            clickSound();
                            showCombatMenu();
                            _0x3502x1c3.setBackground(bg_9)
                        } else {
                            combatMenuV = false;
                            clickSound();
                            if (combatMenu != null) {
                                combatMenu.dismiss();
                                combatMenu = null
                            };
                            _0x3502x1c3.setBackground(bg_10)
                        }
                    }
                }));
                _0x3502x1c3.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                allMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1c3.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x199.addView(_0x3502x1c3);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1c8 = new TextView(ctx);
                _0x3502x1c8.setText(Texts.motion);
                _0x3502x1c8.setTypeface(Utils.font);
                _0x3502x1c8.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1c8.setTextSize(13);
                _0x3502x1c8.setTextColor(Color.WHITE);
                _0x3502x1c8.setBackground(bg_0);
                _0x3502x1c8.setBackground(motionMenuV ? bg_9 : bg_10);
                _0x3502x1c8.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1c8.setGravity(Gravity.CENTER);
                _0x3502x1c8.setHorizontallyScrolling(true);
                _0x3502x1c8.setSelected(true);
                _0x3502x1c8.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!motionMenuV) {
                            motionMenuV = true;
                            clickSound();
                            showMotionMenu();
                            _0x3502x1c8.setBackground(bg_9)
                        } else {
                            motionMenuV = false;
                            clickSound();
                            if (motionMenu != null) {
                                motionMenu.dismiss();
                                motionMenu = null
                            };
                            _0x3502x1c8.setBackground(bg_10)
                        }
                    }
                }));
                _0x3502x1c8.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                allMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1c8.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x199.addView(_0x3502x1c8);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1c9 = new TextView(ctx);
                _0x3502x1c9.setText(Texts.player);
                _0x3502x1c9.setTypeface(Utils.font);
                _0x3502x1c9.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1c9.setTextSize(13);
                _0x3502x1c9.setTextColor(Color.WHITE);
                _0x3502x1c9.setBackground(bg_0);
                _0x3502x1c9.setBackground(playerMenuV ? bg_9 : bg_10);
                _0x3502x1c9.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1c9.setGravity(Gravity.CENTER);
                _0x3502x1c9.setHorizontallyScrolling(true);
                _0x3502x1c9.setSelected(true);
                _0x3502x1c9.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!playerMenuV) {
                            playerMenuV = true;
                            clickSound();
                            showPlayerMenu();
                            _0x3502x1c9.setBackground(bg_9)
                        } else {
                            playerMenuV = false;
                            clickSound();
                            if (playerMenu != null) {
                                playerMenu.dismiss();
                                playerMenu = null
                            };
                            _0x3502x1c9.setBackground(bg_10)
                        }
                    }
                }));
                _0x3502x1c9.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                allMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1c9.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x199.addView(_0x3502x1c9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x199.addView(_0x3502x1a2);
                var _0x3502x1ca = new TextView(ctx);
                _0x3502x1ca.setText(Texts.others);
                _0x3502x1ca.setTypeface(Utils.font);
                _0x3502x1ca.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x1ca.setTextSize(13);
                _0x3502x1ca.setTextColor(Color.WHITE);
                _0x3502x1ca.setBackground(bg_0);
                _0x3502x1ca.setBackground(othersMenuV ? bg_9 : bg_10);
                _0x3502x1ca.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1ca.setGravity(Gravity.CENTER);
                _0x3502x1ca.setHorizontallyScrolling(true);
                _0x3502x1ca.setSelected(true);
                _0x3502x1ca.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!othersMenuV) {
                            othersMenuV = true;
                            clickSound();
                            showOthersMenu();
                            _0x3502x1ca.setBackground(bg_9)
                        } else {
                            othersMenuV = false;
                            clickSound();
                            if (othersMenu != null) {
                                othersMenu.dismiss();
                                othersMenu = null
                            };
                            _0x3502x1ca.setBackground(bg_10)
                        }
                    }
                }));
                _0x3502x1ca.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                allMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1ca.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x199.addView(_0x3502x1ca);
                var _0x3502x1cb = new TextView(ctx);
                _0x3502x1cb.setTextSize(8);
                _0x3502x1cb.setText(Texts.wm2);
                _0x3502x1cb.setGravity(Gravity.LEFT);
                _0x3502x1cb.setTextColor(Color.WHITE);
                _0x3502x1cb.setTypeface(Utils.font);
                _0x3502x199.addView(_0x3502x1cb);
                allMenu = new PopupWindow(_0x3502x199, WRAP_CONTENT, WRAP_CONTENT);
                allMenu.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                allMenu.setAnimationStyle(Animation_Dialog);
                _0x3502x199.setPadding(10, 10, 10, 10);
                allMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showCombatMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x1cd = new LinearLayout(ctx);
                var _0x3502x1ce = new ScrollView(ctx);
                var _0x3502x1cf = new LinearLayout(ctx);
                _0x3502x1cd.setOrientation(1);
                _0x3502x1cf.setOrientation(1);
                _0x3502x1ce.addView(_0x3502x1cd);
                _0x3502x1cf.addView(_0x3502x1ce);
                _0x3502x1ce.setBackground(bg_5);
                var _0x3502x1d0 = new TextView(ctx);
                _0x3502x1d0.setText(Texts.combatopen);
                _0x3502x1d0.setTypeface(Utils.font);
                _0x3502x1d0.setTextSize(12);
                _0x3502x1d0.setTextColor(Color.WHITE);
                _0x3502x1d0.setBackground(bg_0);
                _0x3502x1d0.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1d0.setGravity(Gravity.CENTER);
                _0x3502x1d0.setHorizontallyScrolling(true);
                _0x3502x1d0.setSelected(true);
                _0x3502x1d0.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                combatMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1d0.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d0);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d1 = new TextView(ctx);
                _0x3502x1d1.setText(Texts.hitaimV11X);
                _0x3502x1d1.setTextSize(8);
                _0x3502x1d1.setTypeface(font);
                _0x3502x1d1.setTextColor(Color.WHITE);
                _0x3502x1d1.setBackground(hitaim ? bg_8 : bg_7);
                _0x3502x1d1.setGravity(Gravity.LEFT);
                _0x3502x1d1.setPadding(10, 10, 10, 10);
                _0x3502x1d1.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitaim) {
                            hitaim = true;
                            clickSound();
                            E(Texts.nameToast + Texts.hitaim + ' ' + Texts.en);
                            _0x3502x1d1.setBackground(bg_8)
                        } else {
                            hitaim = false;
                            clickSound();
                            E(Texts.nameToast + Texts.hitaim + ' ' + Texts.dis);
                            _0x3502x1d1.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d1);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d2 = new TextView(ctx);
                _0x3502x1d2.setText(Texts.hitbox);
                _0x3502x1d2.setTextSize(8);
                _0x3502x1d2.setTypeface(font);
                _0x3502x1d2.setTextColor(Color.WHITE);
                _0x3502x1d2.setBackground(hitbox ? bg_8 : bg_7);
                _0x3502x1d2.setGravity(Gravity.LEFT);
                _0x3502x1d2.setPadding(10, 10, 10, 10);
                _0x3502x1d2.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitbox) {
                            hitbox = true;
                            clickSound();
                            E(Texts.nameToast + Texts.hitbox + ' ' + Texts.en);
                            _0x3502x1d2.setBackground(bg_8)
                        } else {
                            hitbox = false;
                            clickSound();
                            E(Texts.nameToast + Texts.hitbox + ' ' + Texts.dis);
                            _0x3502x1d2.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d2);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d3 = new TextView(ctx);
                _0x3502x1d3.setText(Texts.akb);
                _0x3502x1d3.setTextSize(8);
                _0x3502x1d3.setTypeface(font);
                _0x3502x1d3.setTextColor(Color.WHITE);
                _0x3502x1d3.setBackground(akb ? bg_8 : bg_7);
                _0x3502x1d3.setGravity(Gravity.LEFT);
                _0x3502x1d3.setPadding(10, 10, 10, 10);
                _0x3502x1d3.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!akb) {
                            akb = true;
                            clickSound();
                            E(Texts.nameToast + Texts.akb + ' ' + Texts.en);
                            _0x3502x1d3.setBackground(bg_8)
                        } else {
                            akb = false;
                            clickSound();
                            E(Texts.nameToast + Texts.akb + ' ' + Texts.dis);
                            _0x3502x1d3.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d3);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d4 = new TextView(ctx);
                _0x3502x1d4.setText(Texts.tpaura);
                _0x3502x1d4.setTextSize(8);
                _0x3502x1d4.setTypeface(font);
                _0x3502x1d4.setTextColor(Color.WHITE);
                _0x3502x1d4.setBackground(tpaura ? bg_8 : bg_7);
                _0x3502x1d4.setGravity(Gravity.LEFT);
                _0x3502x1d4.setPadding(10, 10, 10, 10);
                _0x3502x1d4.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!tpaura) {
                            tpaura = true;
                            clickSound();
                            E(Texts.nameToast + Texts.tpaura + ' ' + Texts.en);
                            _0x3502x1d4.setBackground(bg_8)
                        } else {
                            tpaura = false;
                            clickSound();
                            E(Texts.nameToast + Texts.tpaura + ' ' + Texts.dis);
                            _0x3502x1d4.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d4);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d5 = new TextView(ctx);
                _0x3502x1d5.setText(Texts.tpaura2);
                _0x3502x1d5.setTextSize(8);
                _0x3502x1d5.setTypeface(font);
                _0x3502x1d5.setTextColor(Color.WHITE);
                _0x3502x1d5.setBackground(tpaura2 ? bg_8 : bg_7);
                _0x3502x1d5.setGravity(Gravity.LEFT);
                _0x3502x1d5.setPadding(10, 10, 10, 10);
                _0x3502x1d5.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!tpaura2) {
                            tpaura2 = true;
                            clickSound();
                            E(Texts.nameToast + Texts.tpaura2 + ' ' + Texts.en);
                            _0x3502x1d5.setBackground(bg_8)
                        } else {
                            tpaura2 = false;
                            clickSound();
                            E(Texts.nameToast + Texts.tpaura2 + ' ' + Texts.dis);
                            _0x3502x1d5.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d5);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d6 = new TextView(ctx);
                _0x3502x1d6.setText(Texts.criticals);
                _0x3502x1d6.setTextSize(8);
                _0x3502x1d6.setTypeface(font);
                _0x3502x1d6.setTextColor(Color.WHITE);
                _0x3502x1d6.setBackground(criticals ? bg_8 : bg_7);
                _0x3502x1d6.setGravity(Gravity.LEFT);
                _0x3502x1d6.setPadding(10, 10, 10, 10);
                _0x3502x1d6.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!criticals) {
                            criticals = true;
                            clickSound();
                            E(Texts.nameToast + Texts.criticals + ' ' + Texts.en);
                            _0x3502x1d6.setBackground(bg_8)
                        } else {
                            criticals = false;
                            clickSound();
                            E(Texts.nameToast + Texts.criticals + ' ' + Texts.dis);
                            _0x3502x1d6.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d6);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d7 = new TextView(ctx);
                _0x3502x1d7.setText(Texts.hitboost);
                _0x3502x1d7.setTextSize(8);
                _0x3502x1d7.setTypeface(font);
                _0x3502x1d7.setTextColor(Color.WHITE);
                _0x3502x1d7.setBackground(hitboost ? bg_8 : bg_7);
                _0x3502x1d7.setGravity(Gravity.LEFT);
                _0x3502x1d7.setPadding(10, 10, 10, 10);
                _0x3502x1d7.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitboost) {
                            hitboost = true;
                            clickSound();
                            E(Texts.nameToast + Texts.hitboost + ' ' + Texts.en);
                            _0x3502x1d7.setBackground(bg_8)
                        } else {
                            hitboost = false;
                            clickSound();
                            E(Texts.nameToast + Texts.hitboost + ' ' + Texts.dis);
                            _0x3502x1d7.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d7);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d8 = new TextView(ctx);
                _0x3502x1d8.setText(Texts.betterattack);
                _0x3502x1d8.setTextSize(8);
                _0x3502x1d8.setTypeface(font);
                _0x3502x1d8.setTextColor(Color.WHITE);
                _0x3502x1d8.setBackground(betterattack ? bg_8 : bg_7);
                _0x3502x1d8.setGravity(Gravity.LEFT);
                _0x3502x1d8.setPadding(10, 10, 10, 10);
                _0x3502x1d8.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!betterattack) {
                            betterattack = true;
                            clickSound();
                            E(Texts.nameToast + Texts.betterattack + ' ' + Texts.en);
                            _0x3502x1d8.setBackground(bg_8);
                            ModPE.setFov(fovBetterAttack)
                        } else {
                            betterattack = false;
                            clickSound();
                            E(Texts.nameToast + Texts.betterattack + ' ' + Texts.dis);
                            _0x3502x1d8.setBackground(bg_7);
                            ModPE.resetFov()
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d8);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1d9 = new TextView(ctx);
                _0x3502x1d9.setText(Texts.crosshair);
                _0x3502x1d9.setTextSize(8);
                _0x3502x1d9.setTypeface(font);
                _0x3502x1d9.setTextColor(Color.WHITE);
                _0x3502x1d9.setBackground(crosshair ? bg_8 : bg_7);
                _0x3502x1d9.setGravity(Gravity.LEFT);
                _0x3502x1d9.setPadding(10, 10, 10, 10);
                _0x3502x1d9.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!crosshair) {
                            crosshair = true;
                            clickSound();
                            E(Texts.nameToast + Texts.crosshair + ' ' + Texts.en);
                            _0x3502x1d9.setBackground(bg_8);
                            showCrossHair()
                        } else {
                            crosshair = false;
                            clickSound();
                            E(Texts.nameToast + Texts.crosshair + ' ' + Texts.dis);
                            _0x3502x1d9.setBackground(bg_7);
                            if (GUIt != null) {
                                GUIt.dismiss();
                                GUIt = null
                            }
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1d9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1da = new TextView(ctx);
                _0x3502x1da.setText(Texts.derphit);
                _0x3502x1da.setTextSize(8);
                _0x3502x1da.setTypeface(font);
                _0x3502x1da.setTextColor(Color.WHITE);
                _0x3502x1da.setBackground(derphit ? bg_8 : bg_7);
                _0x3502x1da.setGravity(Gravity.LEFT);
                _0x3502x1da.setPadding(10, 10, 10, 10);
                _0x3502x1da.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!derphit) {
                            derphit = true;
                            clickSound();
                            E(Texts.nameToast + Texts.derphit + ' ' + Texts.en);
                            _0x3502x1da.setBackground(bg_8)
                        } else {
                            derphit = false;
                            clickSound();
                            E(Texts.nameToast + Texts.derphit + ' ' + Texts.dis);
                            _0x3502x1da.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1da);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1db = new TextView(ctx);
                _0x3502x1db.setText(Texts.stanceaura);
                _0x3502x1db.setTextSize(8);
                _0x3502x1db.setTypeface(font);
                _0x3502x1db.setTextColor(Color.WHITE);
                _0x3502x1db.setBackground(stanceaura ? bg_8 : bg_7);
                _0x3502x1db.setGravity(Gravity.LEFT);
                _0x3502x1db.setPadding(10, 10, 10, 10);
                _0x3502x1db.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!stanceaura) {
                            stanceaura = true;
                            clickSound();
                            E(Texts.nameToast + Texts.stanceaura + ' ' + Texts.en);
                            _0x3502x1db.setBackground(bg_8)
                        } else {
                            stanceaura = false;
                            clickSound();
                            E(Texts.nameToast + Texts.stanceaura + ' ' + Texts.dis);
                            _0x3502x1db.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1db);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1dc = new TextView(ctx);
                _0x3502x1dc.setText(Texts.limitedcamera);
                _0x3502x1dc.setTextSize(8);
                _0x3502x1dc.setTypeface(font);
                _0x3502x1dc.setTextColor(Color.WHITE);
                _0x3502x1dc.setBackground(limitedcamera ? bg_8 : bg_7);
                _0x3502x1dc.setGravity(Gravity.LEFT);
                _0x3502x1dc.setPadding(10, 10, 10, 10);
                _0x3502x1dc.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!limitedcamera) {
                            limitedcamera = true;
                            clickSound();
                            E(Texts.nameToast + Texts.limitedcamera + ' ' + Texts.en);
                            _0x3502x1dc.setBackground(bg_8)
                        } else {
                            limitedcamera = false;
                            clickSound();
                            E(Texts.nameToast + Texts.limitedcamera + ' ' + Texts.dis);
                            _0x3502x1dc.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1dc);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1dd = new TextView(ctx);
                _0x3502x1dd.setText(Texts.bindsTextForMenu);
                _0x3502x1dd.setTextSize(12);
                _0x3502x1dd.setTypeface(Utils.font);
                _0x3502x1dd.setTextColor(Color.WHITE);
                _0x3502x1dd.setBackground(bg_0);
                _0x3502x1dd.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1dd.setGravity(Gravity.CENTER);
                _0x3502x1dd.setHorizontallyScrolling(true);
                _0x3502x1dd.setSelected(true);
                _0x3502x1cd.addView(_0x3502x1dd);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1de = new TextView(ctx);
                _0x3502x1de.setText(Texts.hitaimV11X);
                _0x3502x1de.setTextSize(8);
                _0x3502x1de.setTypeface(font);
                _0x3502x1de.setTextColor(Color.WHITE);
                _0x3502x1de.setBackground(hitaimBbind ? bg_8 : bg_7);
                _0x3502x1de.setGravity(Gravity.LEFT);
                _0x3502x1de.setPadding(10, 10, 10, 10);
                _0x3502x1de.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitaimBbind) {
                            hitaimBbind = true;
                            showHitAimBindBtn();
                            clickSound();
                            _0x3502x1de.setBackground(bg_8)
                        } else {
                            hitaimBbind = false;
                            hitaimBindBtn.dismiss();
                            clickSound();
                            _0x3502x1de.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1de);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1df = new TextView(ctx);
                _0x3502x1df.setText(Texts.hitbox);
                _0x3502x1df.setTextSize(8);
                _0x3502x1df.setTypeface(font);
                _0x3502x1df.setTextColor(Color.WHITE);
                _0x3502x1df.setBackground(hitboxBbind ? bg_8 : bg_7);
                _0x3502x1df.setGravity(Gravity.LEFT);
                _0x3502x1df.setPadding(10, 10, 10, 10);
                _0x3502x1df.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitboxBbind) {
                            hitboxBbind = true;
                            showHitboxBindBtn();
                            clickSound();
                            _0x3502x1df.setBackground(bg_8)
                        } else {
                            hitboxBbind = false;
                            hitboxBindBtn.dismiss();
                            clickSound();
                            _0x3502x1df.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1df);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                var _0x3502x1e0 = new TextView(ctx);
                _0x3502x1e0.setText(Texts.akb);
                _0x3502x1e0.setTextSize(8);
                _0x3502x1e0.setTypeface(font);
                _0x3502x1e0.setTextColor(Color.WHITE);
                _0x3502x1e0.setBackground(akbBbind ? bg_8 : bg_7);
                _0x3502x1e0.setGravity(Gravity.LEFT);
                _0x3502x1e0.setPadding(10, 10, 10, 10);
                _0x3502x1e0.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!akbBbind) {
                            akbBbind = true;
                            showAkbBindBtn();
                            clickSound();
                            _0x3502x1e0.setBackground(bg_8)
                        } else {
                            akbBbind = false;
                            akbBindBtn.dismiss();
                            clickSound();
                            _0x3502x1e0.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1cd.addView(_0x3502x1e0);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1cd.addView(_0x3502x1a2);
                combatMenu = new PopupWindow(_0x3502x1cf, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3);
                combatMenu.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                combatMenu.setAnimationStyle(Animation_Translucent);
                _0x3502x1cd.setPadding(10, 10, 10, 10);
                combatMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showMotionMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x1e2 = new LinearLayout(ctx);
                var _0x3502x1e3 = new ScrollView(ctx);
                var _0x3502x1e4 = new LinearLayout(ctx);
                _0x3502x1e2.setOrientation(1);
                _0x3502x1e4.setOrientation(1);
                _0x3502x1e3.addView(_0x3502x1e2);
                _0x3502x1e4.addView(_0x3502x1e3);
                _0x3502x1e3.setBackground(bg_5);
                var _0x3502x1e5 = new TextView(ctx);
                _0x3502x1e5.setText(Texts.motionopen);
                _0x3502x1e5.setTypeface(Utils.font);
                _0x3502x1e5.setTextSize(12);
                _0x3502x1e5.setTextColor(Color.WHITE);
                _0x3502x1e5.setBackground(bg_0);
                _0x3502x1e5.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1e5.setGravity(Gravity.CENTER);
                _0x3502x1e5.setHorizontallyScrolling(true);
                _0x3502x1e5.setSelected(true);
                _0x3502x1e5.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                motionMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x1e5.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1e5);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1e6 = new TextView(ctx);
                _0x3502x1e6.setText(Texts.autowalk);
                _0x3502x1e6.setTextSize(8);
                _0x3502x1e6.setTypeface(font);
                _0x3502x1e6.setTextColor(Color.WHITE);
                _0x3502x1e6.setBackground(autowalk ? bg_8 : bg_7);
                _0x3502x1e6.setGravity(Gravity.LEFT);
                _0x3502x1e6.setPadding(10, 10, 10, 10);
                _0x3502x1e6.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!autowalk) {
                            autowalk = true;
                            clickSound();
                            E(Texts.nameToast + Texts.autowalk + ' ' + Texts.en);
                            _0x3502x1e6.setBackground(bg_8)
                        } else {
                            autowalk = false;
                            clickSound();
                            E(Texts.nameToast + Texts.autowalk + ' ' + Texts.dis);
                            _0x3502x1e6.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1e6);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1e7 = new TextView(ctx);
                _0x3502x1e7.setText(Texts.visualroad);
                _0x3502x1e7.setTextSize(8);
                _0x3502x1e7.setTypeface(font);
                _0x3502x1e7.setTextColor(Color.WHITE);
                _0x3502x1e7.setBackground(visualroad ? bg_8 : bg_7);
                _0x3502x1e7.setGravity(Gravity.LEFT);
                _0x3502x1e7.setPadding(10, 10, 10, 10);
                _0x3502x1e7.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!visualroad) {
                            visualroad = true;
                            clickSound();
                            E(Texts.nameToast + Texts.visualroad + ' ' + Texts.en);
                            _0x3502x1e7.setBackground(bg_8)
                        } else {
                            visualroad = false;
                            clickSound();
                            E(Texts.nameToast + Texts.visualroad + ' ' + Texts.dis);
                            _0x3502x1e7.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1e7);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1e8 = new TextView(ctx);
                _0x3502x1e8.setText(Texts.glide);
                _0x3502x1e8.setTextSize(8);
                _0x3502x1e8.setTypeface(font);
                _0x3502x1e8.setTextColor(Color.WHITE);
                _0x3502x1e8.setBackground(glide ? bg_8 : bg_7);
                _0x3502x1e8.setGravity(Gravity.LEFT);
                _0x3502x1e8.setPadding(10, 10, 10, 10);
                _0x3502x1e8.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!glide) {
                            glide = true;
                            clickSound();
                            E(Texts.nameToast + Texts.glide + ' ' + Texts.en);
                            _0x3502x1e8.setBackground(bg_8)
                        } else {
                            glide = false;
                            clickSound();
                            E(Texts.nameToast + Texts.glide + ' ' + Texts.dis);
                            _0x3502x1e8.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1e8);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1e9 = new TextView(ctx);
                _0x3502x1e9.setText(Texts.flyglide);
                _0x3502x1e9.setTextSize(8);
                _0x3502x1e9.setTypeface(font);
                _0x3502x1e9.setTextColor(Color.WHITE);
                _0x3502x1e9.setBackground(flyglide ? bg_8 : bg_7);
                _0x3502x1e9.setGravity(Gravity.LEFT);
                _0x3502x1e9.setPadding(10, 10, 10, 10);
                _0x3502x1e9.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!flyglide) {
                            flyglide = true;
                            flyglidehelper = true;
                            clickSound();
                            E(Texts.nameToast + Texts.flyglide + ' ' + Texts.en);
                            _0x3502x1e9.setBackground(bg_8)
                        } else {
                            flyglide = false;
                            flyglidehelper = false;
                            clickSound();
                            E(Texts.nameToast + Texts.flyglide + ' ' + Texts.dis);
                            _0x3502x1e9.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1e9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ea = new TextView(ctx);
                _0x3502x1ea.setText(Texts.longjump);
                _0x3502x1ea.setTextSize(8);
                _0x3502x1ea.setTypeface(font);
                _0x3502x1ea.setTextColor(Color.WHITE);
                _0x3502x1ea.setBackground(longjump ? bg_8 : bg_7);
                _0x3502x1ea.setGravity(Gravity.LEFT);
                _0x3502x1ea.setPadding(10, 10, 10, 10);
                _0x3502x1ea.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!longjump) {
                            longjump = true;
                            clickSound();
                            E(Texts.nameToast + Texts.longjump + ' ' + Texts.en);
                            _0x3502x1ea.setBackground(bg_8)
                        } else {
                            longjump = false;
                            clickSound();
                            E(Texts.nameToast + Texts.longjump + ' ' + Texts.dis);
                            _0x3502x1ea.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ea);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1eb = new TextView(ctx);
                _0x3502x1eb.setText(Texts.longjump2);
                _0x3502x1eb.setTextSize(8);
                _0x3502x1eb.setTypeface(font);
                _0x3502x1eb.setTextColor(Color.WHITE);
                _0x3502x1eb.setBackground(longjump2 ? bg_8 : bg_7);
                _0x3502x1eb.setGravity(Gravity.LEFT);
                _0x3502x1eb.setPadding(10, 10, 10, 10);
                _0x3502x1eb.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!longjump2) {
                            longjump2 = true;
                            clickSound();
                            E(Texts.nameToast + Texts.longjump2 + ' ' + Texts.en);
                            _0x3502x1eb.setBackground(bg_8);
                            showLongJumpBtn()
                        } else {
                            longjump2 = false;
                            clickSound();
                            E(Texts.nameToast + Texts.longjump2 + ' ' + Texts.dis);
                            _0x3502x1eb.setBackground(bg_7);
                            longJumpBtn.dismiss()
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1eb);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ec = new TextView(ctx);
                _0x3502x1ec.setText(Texts.jesus);
                _0x3502x1ec.setTextSize(8);
                _0x3502x1ec.setTypeface(font);
                _0x3502x1ec.setTextColor(Color.WHITE);
                _0x3502x1ec.setBackground(jesus ? bg_8 : bg_7);
                _0x3502x1ec.setGravity(Gravity.LEFT);
                _0x3502x1ec.setPadding(10, 10, 10, 10);
                _0x3502x1ec.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jesus) {
                            jesus = true;
                            clickSound();
                            E(Texts.nameToast + Texts.jesus + ' ' + Texts.en);
                            _0x3502x1ec.setBackground(bg_8)
                        } else {
                            jesus = false;
                            clickSound();
                            E(Texts.nameToast + Texts.jesus + ' ' + Texts.dis);
                            _0x3502x1ec.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ec);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ed = new TextView(ctx);
                _0x3502x1ed.setText(Texts.jetpack);
                _0x3502x1ed.setTextSize(8);
                _0x3502x1ed.setTypeface(font);
                _0x3502x1ed.setTextColor(Color.WHITE);
                _0x3502x1ed.setBackground(jetpack ? bg_8 : bg_7);
                _0x3502x1ed.setGravity(Gravity.LEFT);
                _0x3502x1ed.setPadding(10, 10, 10, 10);
                _0x3502x1ed.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpack) {
                            jetpack = true;
                            clickSound();
                            E(Texts.nameToast + Texts.jetpack + ' ' + Texts.en);
                            _0x3502x1ed.setBackground(bg_8)
                        } else {
                            jetpack = false;
                            clickSound();
                            E(Texts.nameToast + Texts.jetpack + ' ' + Texts.dis);
                            _0x3502x1ed.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ed);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ee = new TextView(ctx);
                _0x3502x1ee.setText(Texts.jetpack2);
                _0x3502x1ee.setTextSize(8);
                _0x3502x1ee.setTypeface(font);
                _0x3502x1ee.setTextColor(Color.WHITE);
                _0x3502x1ee.setBackground(jetpack2 ? bg_8 : bg_7);
                _0x3502x1ee.setGravity(Gravity.LEFT);
                _0x3502x1ee.setPadding(10, 10, 10, 10);
                _0x3502x1ee.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpack2) {
                            jetpack2 = true;
                            clickSound();
                            E(Texts.nameToast + Texts.jetpack2 + ' ' + Texts.en);
                            _0x3502x1ee.setBackground(bg_8)
                        } else {
                            jetpack2 = false;
                            clickSound();
                            E(Texts.nameToast + Texts.jetpack2 + ' ' + Texts.dis);
                            _0x3502x1ee.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ee);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ef = new TextView(ctx);
                _0x3502x1ef.setText(Texts.safewalk);
                _0x3502x1ef.setTextSize(8);
                _0x3502x1ef.setTypeface(font);
                _0x3502x1ef.setTextColor(Color.WHITE);
                _0x3502x1ef.setBackground(safewalk ? bg_8 : bg_7);
                _0x3502x1ef.setGravity(Gravity.LEFT);
                _0x3502x1ef.setPadding(10, 10, 10, 10);
                _0x3502x1ef.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!safewalk) {
                            safewalk = true;
                            clickSound();
                            E(Texts.nameToast + Texts.safewalk + ' ' + Texts.en);
                            _0x3502x1ef.setBackground(bg_8)
                        } else {
                            safewalk = false;
                            clickSound();
                            E(Texts.nameToast + Texts.safewalk + ' ' + Texts.dis);
                            _0x3502x1ef.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ef);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f0 = new TextView(ctx);
                _0x3502x1f0.setText(Texts.spider);
                _0x3502x1f0.setTextSize(8);
                _0x3502x1f0.setTypeface(font);
                _0x3502x1f0.setTextColor(Color.WHITE);
                _0x3502x1f0.setBackground(spider ? bg_8 : bg_7);
                _0x3502x1f0.setGravity(Gravity.LEFT);
                _0x3502x1f0.setPadding(10, 10, 10, 10);
                _0x3502x1f0.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!spider) {
                            spider = true;
                            clickSound();
                            E(Texts.nameToast + Texts.haste + ' ' + Texts.en);
                            _0x3502x1f0.setBackground(bg_8)
                        } else {
                            spider = false;
                            clickSound();
                            E(Texts.nameToast + Texts.spider + ' ' + Texts.dis);
                            _0x3502x1f0.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f0);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f1 = new TextView(ctx);
                _0x3502x1f1.setText(Texts.step);
                _0x3502x1f1.setTextSize(8);
                _0x3502x1f1.setTypeface(font);
                _0x3502x1f1.setTextColor(Color.WHITE);
                _0x3502x1f1.setBackground(step ? bg_8 : bg_7);
                _0x3502x1f1.setGravity(Gravity.LEFT);
                _0x3502x1f1.setPadding(10, 10, 10, 10);
                _0x3502x1f1.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!step) {
                            step = true;
                            clickSound();
                            E(Texts.nameToast + Texts.step + ' ' + Texts.en);
                            _0x3502x1f1.setBackground(bg_8)
                        } else {
                            step = false;
                            clickSound();
                            E(Texts.nameToast + Texts.step + ' ' + Texts.dis);
                            _0x3502x1f1.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f1);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f2 = new TextView(ctx);
                _0x3502x1f2.setText(Texts.bunnyhop);
                _0x3502x1f2.setTextSize(8);
                _0x3502x1f2.setTypeface(font);
                _0x3502x1f2.setTextColor(Color.WHITE);
                _0x3502x1f2.setBackground(bunnyhop ? bg_8 : bg_7);
                _0x3502x1f2.setGravity(Gravity.LEFT);
                _0x3502x1f2.setPadding(10, 10, 10, 10);
                _0x3502x1f2.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!bunnyhop) {
                            bunnyhop = true;
                            clickSound();
                            E(Texts.nameToast + Texts.bunnyhop + ' ' + Texts.en);
                            _0x3502x1f2.setBackground(bg_8)
                        } else {
                            bunnyhop = false;
                            clickSound();
                            E(Texts.nameToast + Texts.bunnyhop + ' ' + Texts.dis);
                            _0x3502x1f2.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f2);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f3 = new TextView(ctx);
                _0x3502x1f3.setText(Texts.fastfall);
                _0x3502x1f3.setTextSize(8);
                _0x3502x1f3.setTypeface(font);
                _0x3502x1f3.setTextColor(Color.WHITE);
                _0x3502x1f3.setBackground(fastfall ? bg_8 : bg_7);
                _0x3502x1f3.setGravity(Gravity.LEFT);
                _0x3502x1f3.setPadding(10, 10, 10, 10);
                _0x3502x1f3.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!fastfall) {
                            fastfall = true;
                            clickSound();
                            E(Texts.nameToast + Texts.fastfall + ' ' + Texts.en);
                            _0x3502x1f3.setBackground(bg_8)
                        } else {
                            fastfall = false;
                            clickSound();
                            E(Texts.nameToast + Texts.fastfall + ' ' + Texts.dis);
                            _0x3502x1f3.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f3);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f4 = new TextView(ctx);
                _0x3502x1f4.setText(Texts.antiafk);
                _0x3502x1f4.setTextSize(8);
                _0x3502x1f4.setTypeface(font);
                _0x3502x1f4.setTextColor(Color.WHITE);
                _0x3502x1f4.setBackground(antiafk ? bg_8 : bg_7);
                _0x3502x1f4.setGravity(Gravity.LEFT);
                _0x3502x1f4.setPadding(10, 10, 10, 10);
                _0x3502x1f4.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!antiafk) {
                            antiafk = true;
                            clickSound();
                            E(Texts.nameToast + Texts.antiafk + ' ' + Texts.en);
                            _0x3502x1f4.setBackground(bg_8)
                        } else {
                            antiafk = false;
                            clickSound();
                            E(Texts.nameToast + Texts.antiafk + ' ' + Texts.dis);
                            _0x3502x1f4.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f4);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f5 = new TextView(ctx);
                _0x3502x1f5.setText(Texts.crouchfly);
                _0x3502x1f5.setTextSize(8);
                _0x3502x1f5.setTypeface(font);
                _0x3502x1f5.setTextColor(Color.WHITE);
                _0x3502x1f5.setBackground(crouchfly ? bg_8 : bg_7);
                _0x3502x1f5.setGravity(Gravity.LEFT);
                _0x3502x1f5.setPadding(10, 10, 10, 10);
                _0x3502x1f5.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!crouchfly) {
                            crouchfly = true;
                            clickSound();
                            E(Texts.nameToast + Texts.crouchfly + ' ' + Texts.en);
                            _0x3502x1f5.setBackground(bg_8)
                        } else {
                            crouchfly = false;
                            clickSound();
                            E(Texts.nameToast + Texts.crouchfly + ' ' + Texts.dis);
                            _0x3502x1f5.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f5);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f6 = new TextView(ctx);
                _0x3502x1f6.setText(Texts.antigravity);
                _0x3502x1f6.setTextSize(8);
                _0x3502x1f6.setTypeface(font);
                _0x3502x1f6.setTextColor(Color.WHITE);
                _0x3502x1f6.setBackground(antigravity ? bg_8 : bg_7);
                _0x3502x1f6.setGravity(Gravity.LEFT);
                _0x3502x1f6.setPadding(10, 10, 10, 10);
                _0x3502x1f6.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!antigravity) {
                            antigravity = true;
                            clickSound();
                            E(Texts.nameToast + Texts.antigravity + ' ' + Texts.en);
                            _0x3502x1f6.setBackground(bg_8)
                        } else {
                            antigravity = false;
                            clickSound();
                            E(Texts.nameToast + Texts.antigravity + ' ' + Texts.dis);
                            _0x3502x1f6.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f6);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f7 = new TextView(ctx);
                _0x3502x1f7.setText(Texts.bouncefly);
                _0x3502x1f7.setTextSize(8);
                _0x3502x1f7.setTypeface(font);
                _0x3502x1f7.setTextColor(Color.WHITE);
                _0x3502x1f7.setBackground(bouncefly ? bg_8 : bg_7);
                _0x3502x1f7.setGravity(Gravity.LEFT);
                _0x3502x1f7.setPadding(10, 10, 10, 10);
                _0x3502x1f7.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!bouncefly) {
                            bouncefly = true;
                            clickSound();
                            E(Texts.nameToast + Texts.bouncefly + ' ' + Texts.en);
                            _0x3502x1f7.setBackground(bg_8)
                        } else {
                            bouncefly = false;
                            clickSound();
                            E(Texts.nameToast + Texts.bouncefly + ' ' + Texts.dis);
                            _0x3502x1f7.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f7);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f8 = new TextView(ctx);
                _0x3502x1f8.setText(Texts.bindsTextForMenu);
                _0x3502x1f8.setTextSize(12);
                _0x3502x1f8.setTypeface(Utils.font);
                _0x3502x1f8.setTextColor(Color.WHITE);
                _0x3502x1f8.setBackground(bg_0);
                _0x3502x1f8.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x1f8.setGravity(Gravity.CENTER);
                _0x3502x1f8.setHorizontallyScrolling(true);
                _0x3502x1f8.setSelected(true);
                _0x3502x1e2.addView(_0x3502x1f8);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1f9 = new TextView(ctx);
                _0x3502x1f9.setText(Texts.visualroad);
                _0x3502x1f9.setTextSize(8);
                _0x3502x1f9.setTypeface(font);
                _0x3502x1f9.setTextColor(Color.WHITE);
                _0x3502x1f9.setBackground(visualroadBbind ? bg_8 : bg_7);
                _0x3502x1f9.setGravity(Gravity.LEFT);
                _0x3502x1f9.setPadding(10, 10, 10, 10);
                _0x3502x1f9.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!visualroadBbind) {
                            visualroadBbind = true;
                            showVisualRoadBindBtn();
                            clickSound();
                            _0x3502x1f9.setBackground(bg_8)
                        } else {
                            visualroadBbind = false;
                            visualroadBindBtn.dismiss();
                            clickSound();
                            _0x3502x1f9.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1f9);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1fa = new TextView(ctx);
                _0x3502x1fa.setText(Texts.glide);
                _0x3502x1fa.setTextSize(8);
                _0x3502x1fa.setTypeface(font);
                _0x3502x1fa.setTextColor(Color.WHITE);
                _0x3502x1fa.setBackground(glideBbind ? bg_8 : bg_7);
                _0x3502x1fa.setGravity(Gravity.LEFT);
                _0x3502x1fa.setPadding(10, 10, 10, 10);
                _0x3502x1fa.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!glideBbind) {
                            glideBbind = true;
                            showGlideBindBtn();
                            clickSound();
                            _0x3502x1fa.setBackground(bg_8)
                        } else {
                            glideBbind = false;
                            glideBindBtn.dismiss();
                            clickSound();
                            _0x3502x1fa.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1fa);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1fb = new TextView(ctx);
                _0x3502x1fb.setText(Texts.flyglide);
                _0x3502x1fb.setTextSize(8);
                _0x3502x1fb.setTypeface(font);
                _0x3502x1fb.setTextColor(Color.WHITE);
                _0x3502x1fb.setBackground(flyglideBbind ? bg_8 : bg_7);
                _0x3502x1fb.setGravity(Gravity.LEFT);
                _0x3502x1fb.setPadding(10, 10, 10, 10);
                _0x3502x1fb.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!flyglideBbind) {
                            flyglideBbind = true;
                            showFlyGlideBindBtn();
                            clickSound();
                            _0x3502x1fb.setBackground(bg_8)
                        } else {
                            flyglideBbind = false;
                            flyglideBindBtn.dismiss();
                            clickSound();
                            _0x3502x1fb.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1fb);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1fc = new TextView(ctx);
                _0x3502x1fc.setText(Texts.jetpack);
                _0x3502x1fc.setTextSize(8);
                _0x3502x1fc.setTypeface(font);
                _0x3502x1fc.setTextColor(Color.WHITE);
                _0x3502x1fc.setBackground(jetpackBbind ? bg_8 : bg_7);
                _0x3502x1fc.setGravity(Gravity.LEFT);
                _0x3502x1fc.setPadding(10, 10, 10, 10);
                _0x3502x1fc.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpackBbind) {
                            jetpackBbind = true;
                            showJetPackBindBtn();
                            clickSound();
                            _0x3502x1fc.setBackground(bg_8)
                        } else {
                            jetpackBbind = false;
                            jetpackBindBtn.dismiss();
                            clickSound();
                            _0x3502x1fc.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1fc);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1fd = new TextView(ctx);
                _0x3502x1fd.setText(Texts.jetpack2);
                _0x3502x1fd.setTextSize(8);
                _0x3502x1fd.setTypeface(font);
                _0x3502x1fd.setTextColor(Color.WHITE);
                _0x3502x1fd.setBackground(jetpack2Bbind ? bg_8 : bg_7);
                _0x3502x1fd.setGravity(Gravity.LEFT);
                _0x3502x1fd.setPadding(10, 10, 10, 10);
                _0x3502x1fd.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpack2Bbind) {
                            jetpack2Bbind = true;
                            showJetPack2BindBtn();
                            clickSound();
                            _0x3502x1fd.setBackground(bg_8)
                        } else {
                            jetpack2Bbind = false;
                            jetpack2BindBtn.dismiss();
                            clickSound();
                            _0x3502x1fd.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1fd);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1fe = new TextView(ctx);
                _0x3502x1fe.setText(Texts.fastfall);
                _0x3502x1fe.setTextSize(8);
                _0x3502x1fe.setTypeface(font);
                _0x3502x1fe.setTextColor(Color.WHITE);
                _0x3502x1fe.setBackground(fastfallBbind ? bg_8 : bg_7);
                _0x3502x1fe.setGravity(Gravity.LEFT);
                _0x3502x1fe.setPadding(10, 10, 10, 10);
                _0x3502x1fe.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!fastfallBbind) {
                            fastfallBbind = true;
                            showFastFallBindBtn();
                            clickSound();
                            _0x3502x1fe.setBackground(bg_8)
                        } else {
                            fastfallBbind = false;
                            fastfallBindBtn.dismiss();
                            clickSound();
                            _0x3502x1fe.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1fe);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x1ff = new TextView(ctx);
                _0x3502x1ff.setText(Texts.antigravity);
                _0x3502x1ff.setTextSize(8);
                _0x3502x1ff.setTypeface(font);
                _0x3502x1ff.setTextColor(Color.WHITE);
                _0x3502x1ff.setBackground(antigravityBbind ? bg_8 : bg_7);
                _0x3502x1ff.setGravity(Gravity.LEFT);
                _0x3502x1ff.setPadding(10, 10, 10, 10);
                _0x3502x1ff.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!antigravityBbind) {
                            antigravityBbind = true;
                            showAntiGravityBindBtn();
                            clickSound();
                            _0x3502x1ff.setBackground(bg_8)
                        } else {
                            antigravityBbin = false;
                            antigravityBindBtn.dismiss();
                            clickSound();
                            _0x3502x1ff.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x1ff);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                var _0x3502x200 = new TextView(ctx);
                _0x3502x200.setText(Texts.bouncefly);
                _0x3502x200.setTextSize(8);
                _0x3502x200.setTypeface(font);
                _0x3502x200.setTextColor(Color.WHITE);
                _0x3502x200.setBackground(bounceflyBbind ? bg_8 : bg_7);
                _0x3502x200.setGravity(Gravity.LEFT);
                _0x3502x200.setPadding(10, 10, 10, 10);
                _0x3502x200.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!bounceflyBbind) {
                            bounceflyBbind = true;
                            showBounceFlyBindBtn();
                            clickSound();
                            _0x3502x200.setBackground(bg_8)
                        } else {
                            bounceflyBbind = false;
                            bounceflyBindBtn.dismiss();
                            clickSound();
                            _0x3502x200.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x1e2.addView(_0x3502x200);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x1e2.addView(_0x3502x1a2);
                motionMenu = new PopupWindow(_0x3502x1e4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3);
                motionMenu.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                motionMenu.setAnimationStyle(Animation_Translucent);
                _0x3502x1e2.setPadding(10, 10, 10, 10);
                motionMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showPlayerMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x202 = new LinearLayout(ctx);
                var _0x3502x203 = new ScrollView(ctx);
                var _0x3502x204 = new LinearLayout(ctx);
                _0x3502x202.setOrientation(1);
                _0x3502x204.setOrientation(1);
                _0x3502x203.addView(_0x3502x202);
                _0x3502x204.addView(_0x3502x203);
                _0x3502x203.setBackground(bg_5);
                var _0x3502x205 = new TextView(ctx);
                _0x3502x205.setText(Texts.playeropen);
                _0x3502x205.setTypeface(Utils.font);
                _0x3502x205.setTextSize(12);
                _0x3502x205.setTextColor(Color.WHITE);
                _0x3502x205.setBackground(bg_0);
                _0x3502x205.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x205.setGravity(Gravity.CENTER);
                _0x3502x205.setHorizontallyScrolling(true);
                _0x3502x205.setSelected(true);
                _0x3502x205.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                playerMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x205.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x202.addView(_0x3502x205);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x206 = new TextView(ctx);
                _0x3502x206.setText(Texts.airjump);
                _0x3502x206.setTextSize(8);
                _0x3502x206.setTypeface(font);
                _0x3502x206.setTextColor(Color.WHITE);
                _0x3502x206.setBackground(airjump ? bg_8 : bg_7);
                _0x3502x206.setGravity(Gravity.LEFT);
                _0x3502x206.setPadding(10, 10, 10, 10);
                _0x3502x206.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!airjump) {
                            airjump = true;
                            showJumpBtn();
                            clickSound();
                            E(Texts.nameToast + Texts.airjump + ' ' + Texts.en);
                            _0x3502x206.setBackground(bg_8)
                        } else {
                            airjump = false;
                            GUIe.dismiss();
                            clickSound();
                            E(Texts.nameToast + Texts.airjump + ' ' + Texts.dis);
                            _0x3502x206.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x206);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x207 = new TextView(ctx);
                _0x3502x207.setText(Texts.elevator);
                _0x3502x207.setTextSize(8);
                _0x3502x207.setTypeface(font);
                _0x3502x207.setTextColor(Color.WHITE);
                _0x3502x207.setBackground(elevator ? bg_8 : bg_7);
                _0x3502x207.setGravity(Gravity.LEFT);
                _0x3502x207.setPadding(10, 10, 10, 10);
                _0x3502x207.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!elevator) {
                            elevator = true;
                            showElevatorBtn();
                            clickSound();
                            E(Texts.nameToast + Texts.elevator + ' ' + Texts.en);
                            _0x3502x207.setBackground(bg_8)
                        } else {
                            elevator = false;
                            GUIr.dismiss();
                            clickSound();
                            E(Texts.nameToast + Texts.elevator + ' ' + Texts.dis);
                            _0x3502x207.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x207);
                var _0x3502x208 = new ProgressBar(ctx, null, progressBarStyleHorizontal);
                _0x3502x208.setMax(100);
                _0x3502x208.setProgressTintList(ColorStateList(parseColor(parseColors.purple)));
                _0x3502x208.setProgress(progress);
                _0x3502x202.addView(_0x3502x208);
                var _0x3502x209 = new TextView(ctx);
                _0x3502x209.setText(Texts.pos);
                _0x3502x209.setTextSize(8);
                _0x3502x209.setTypeface(font);
                _0x3502x209.setLayoutParams(params);
                _0x3502x209.setTextColor(Color.WHITE);
                _0x3502x209.setBackground(pos ? bg_8 : bg_7);
                _0x3502x209.setGravity(Gravity.LEFT);
                _0x3502x209.setPadding(10, 10, 10, 10);
                _0x3502x209.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!pos) {
                            pos = true;
                            clickSound();
                            E(Texts.nameToast + Texts.pos + ' ' + Texts.en);
                            _0x3502x209.setBackground(bg_8)
                        } else {
                            pos = false;
                            clickSound();
                            E(Texts.nameToast + Texts.pos + ' ' + Texts.dis);
                            _0x3502x209.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x209);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x20a = new TextView(ctx);
                _0x3502x20a.setText(Texts.destroy);
                _0x3502x20a.setTextSize(8);
                _0x3502x20a.setTypeface(font);
                _0x3502x20a.setLayoutParams(params);
                _0x3502x20a.setTextColor(Color.WHITE);
                _0x3502x20a.setBackground(destroy ? bg_8 : bg_7);
                _0x3502x20a.setGravity(Gravity.LEFT);
                _0x3502x20a.setPadding(10, 10, 10, 10);
                _0x3502x20a.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!destroy) {
                            destroy = true;
                            clickSound();
                            E(Texts.nameToast + Texts.destroy + ' ' + Texts.en);
                            _0x3502x20a.setBackground(bg_8)
                        } else {
                            destroy = false;
                            clickSound();
                            E(Texts.nameToast + Texts.destroy + ' ' + Texts.dis);
                            _0x3502x20a.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20a);
                var _0x3502x208 = new ProgressBar(ctx, null, progressBarStyleHorizontal);
                _0x3502x208.setMax(100);
                _0x3502x208.setProgressTintList(ColorStateList(parseColor(parseColors.purple)));
                _0x3502x208.setProgress(progress);
                _0x3502x202.addView(_0x3502x208);
                var _0x3502x20b = new TextView(ctx);
                _0x3502x20b.setText(Texts.haste);
                _0x3502x20b.setTextSize(8);
                _0x3502x20b.setTypeface(font);
                _0x3502x20b.setTextColor(Color.WHITE);
                _0x3502x20b.setBackground(haste ? bg_8 : bg_7);
                _0x3502x20b.setGravity(Gravity.LEFT);
                _0x3502x20b.setPadding(10, 10, 10, 10);
                _0x3502x20b.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!haste) {
                            haste = true;
                            clickSound();
                            E(Texts.nameToast + Texts.haste + ' ' + Texts.en);
                            _0x3502x20b.setBackground(bg_8)
                        } else {
                            haste = false;
                            Entity.removeEffect(Player.getEntity(), 3);
                            clickSound();
                            E(Texts.nameToast + Texts.haste + ' ' + Texts.dis);
                            _0x3502x20b.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20b);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x20c = new TextView(ctx);
                _0x3502x20c.setText(Texts.fullbright);
                _0x3502x20c.setTextSize(8);
                _0x3502x20c.setTypeface(font);
                _0x3502x20c.setTextColor(Color.WHITE);
                _0x3502x20c.setBackground(fullbright ? bg_8 : bg_7);
                _0x3502x20c.setGravity(Gravity.LEFT);
                _0x3502x20c.setPadding(10, 10, 10, 10);
                _0x3502x20c.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!fullbright) {
                            fullbright = true;
                            clickSound();
                            E(Texts.nameToast + Texts.fullbright + ' ' + Texts.en);
                            _0x3502x20c.setBackground(bg_8)
                        } else {
                            fullbright = false;
                            Entity.removeEffect(Player.getEntity(), 16);
                            clickSound();
                            E(Texts.nameToast + Texts.fullbright + ' ' + Texts.dis);
                            _0x3502x20c.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20c);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x20d = new TextView(ctx);
                _0x3502x20d.setText(Texts.fasteat);
                _0x3502x20d.setTextSize(8);
                _0x3502x20d.setTypeface(font);
                _0x3502x20d.setTextColor(Color.WHITE);
                _0x3502x20d.setBackground(fasteat ? bg_8 : bg_7);
                _0x3502x20d.setGravity(Gravity.LEFT);
                _0x3502x20d.setPadding(10, 10, 10, 10);
                _0x3502x20d.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!fasteat) {
                            fasteat = true;
                            eat = true;
                            clickSound();
                            E(Texts.nameToast + Texts.fasteat + ' ' + Texts.en);
                            _0x3502x20d.setBackground(bg_8)
                        } else {
                            fasteat = false;
                            eat = false;
                            clickSound();
                            E(Texts.nameToast + Texts.fasteat + ' ' + Texts.dis);
                            _0x3502x20d.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20d);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x20e = new TextView(ctx);
                _0x3502x20e.setText(Texts.tower);
                _0x3502x20e.setTextSize(8);
                _0x3502x20e.setTypeface(font);
                _0x3502x20e.setTextColor(Color.WHITE);
                _0x3502x20e.setBackground(tower ? bg_8 : bg_7);
                _0x3502x20e.setGravity(Gravity.LEFT);
                _0x3502x20e.setPadding(10, 10, 10, 10);
                _0x3502x20e.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!tower) {
                            tower = true;
                            clickSound();
                            E(Texts.nameToast + Texts.tower + ' ' + Texts.en);
                            _0x3502x20e.setBackground(bg_8)
                        } else {
                            tower = false;
                            clickSound();
                            E(Texts.nameToast + Texts.tower + ' ' + Texts.dis);
                            _0x3502x20e.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20e);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x20f = new TextView(ctx);
                _0x3502x20f.setText(Texts.quicktower);
                _0x3502x20f.setTextSize(8);
                _0x3502x20f.setTypeface(font);
                _0x3502x20f.setTextColor(Color.WHITE);
                _0x3502x20f.setBackground(quicktower ? bg_8 : bg_7);
                _0x3502x20f.setGravity(Gravity.LEFT);
                _0x3502x20f.setPadding(10, 10, 10, 10);
                _0x3502x20f.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!quicktower) {
                            quicktower = true;
                            clickSound();
                            E(Texts.nameToast + Texts.quicktower + ' ' + Texts.en);
                            _0x3502x20f.setBackground(bg_8)
                        } else {
                            quicktower = false;
                            clickSound();
                            E(Texts.nameToast + Texts.quicktower + ' ' + Texts.dis);
                            _0x3502x20f.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x20f);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x210 = new TextView(ctx);
                _0x3502x210.setText(Texts.taptp);
                _0x3502x210.setTextSize(8);
                _0x3502x210.setTypeface(font);
                _0x3502x210.setTextColor(Color.WHITE);
                _0x3502x210.setBackground(taptp ? bg_8 : bg_7);
                _0x3502x210.setGravity(Gravity.LEFT);
                _0x3502x210.setPadding(10, 10, 10, 10);
                _0x3502x210.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!taptp) {
                            taptp = true;
                            clickSound();
                            E(Texts.nameToast + Texts.taptp + ' ' + Texts.en);
                            _0x3502x210.setBackground(bg_8)
                        } else {
                            taptp = false;
                            clickSound();
                            E(Texts.nameToast + Texts.taptp + ' ' + Texts.dis);
                            _0x3502x210.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x210);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x211 = new TextView(ctx);
                _0x3502x211.setText(Texts.autodestroy);
                _0x3502x211.setTextSize(8);
                _0x3502x211.setTypeface(font);
                _0x3502x211.setTextColor(Color.WHITE);
                _0x3502x211.setBackground(autodestroy ? bg_8 : bg_7);
                _0x3502x211.setGravity(Gravity.LEFT);
                _0x3502x211.setPadding(10, 10, 10, 10);
                _0x3502x211.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!autodestroy) {
                            autodestroy = true;
                            clickSound();
                            E(Texts.nameToast + Texts.autodestroy + ' ' + Texts.en);
                            _0x3502x211.setBackground(bg_8)
                        } else {
                            autodestroy = false;
                            clickSound();
                            E(Texts.nameToast + Texts.autodestroy + ' ' + Texts.dis);
                            _0x3502x211.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x211);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x212 = new TextView(ctx);
                _0x3502x212.setText(Texts.tapdestroy);
                _0x3502x212.setTextSize(8);
                _0x3502x212.setTypeface(font);
                _0x3502x212.setTextColor(Color.WHITE);
                _0x3502x212.setBackground(tapdestroy ? bg_8 : bg_7);
                _0x3502x212.setGravity(Gravity.LEFT);
                _0x3502x212.setPadding(10, 10, 10, 10);
                _0x3502x212.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!tapdestroy) {
                            tapdestroy = true;
                            clickSound();
                            E(Texts.nameToast + Texts.tapdestroy + ' ' + Texts.en);
                            _0x3502x212.setBackground(bg_8)
                        } else {
                            tapdestroy = false;
                            clickSound();
                            E(Texts.nameToast + Texts.tapdestroy + ' ' + Texts.dis);
                            _0x3502x212.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x212);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x213 = new TextView(ctx);
                _0x3502x213.setText(Texts.nuker);
                _0x3502x213.setTextSize(8);
                _0x3502x213.setTypeface(font);
                _0x3502x213.setTextColor(Color.WHITE);
                _0x3502x213.setBackground(nuker ? bg_8 : bg_7);
                _0x3502x213.setGravity(Gravity.LEFT);
                _0x3502x213.setPadding(10, 10, 10, 10);
                _0x3502x213.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!nuker) {
                            nuker = true;
                            clickSound();
                            E(Texts.nameToast + Texts.nuker + ' ' + Texts.en);
                            _0x3502x213.setBackground(bg_8)
                        } else {
                            nuker = false;
                            clickSound();
                            E(Texts.nameToast + Texts.nuker + ' ' + Texts.dis);
                            _0x3502x213.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x213);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x214 = new TextView(ctx);
                _0x3502x214.setText(Texts.coordsGUI);
                _0x3502x214.setTextSize(8);
                _0x3502x214.setTypeface(font);
                _0x3502x214.setTextColor(Color.WHITE);
                _0x3502x214.setBackground(coordsGUI ? bg_8 : bg_7);
                _0x3502x214.setGravity(Gravity.LEFT);
                _0x3502x214.setPadding(10, 10, 10, 10);
                _0x3502x214.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!coordsGUI) {
                            coordsGUI = true;
                            showCoordinateGUI();
                            clickSound();
                            E(Texts.nameToast + Texts.coordsGUI + ' ' + Texts.en);
                            _0x3502x214.setBackground(bg_8)
                        } else {
                            coordsGUI = false;
                            coords_txt_menu.dismiss();
                            clickSound();
                            E(Texts.nameToast + Texts.coordsGUI + ' ' + Texts.dis);
                            _0x3502x214.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x214);
                var _0x3502x215 = new TextView(ctx);
                _0x3502x215.setText(Texts.bindsTextForMenu);
                _0x3502x215.setTextSize(12);
                _0x3502x215.setTypeface(Utils.font);
                _0x3502x215.setTextColor(Color.WHITE);
                _0x3502x215.setBackground(bg_0);
                _0x3502x215.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x215.setGravity(Gravity.CENTER);
                _0x3502x215.setHorizontallyScrolling(true);
                _0x3502x215.setSelected(true);
                _0x3502x202.addView(_0x3502x215);
                var _0x3502x216 = new TextView(ctx);
                _0x3502x216.setText(Texts.autodestroy);
                _0x3502x216.setTextSize(8);
                _0x3502x216.setTypeface(font);
                _0x3502x216.setTextColor(Color.WHITE);
                _0x3502x216.setBackground(autodestroyBbind ? bg_8 : bg_7);
                _0x3502x216.setGravity(Gravity.LEFT);
                _0x3502x216.setPadding(10, 10, 10, 10);
                _0x3502x216.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!autodestroyBbind) {
                            autodestroyBbind = true;
                            showAutoDestroyBindBtn();
                            clickSound();
                            _0x3502x216.setBackground(bg_8)
                        } else {
                            autodestroyBbind = false;
                            autodestroyBindBtn.dismiss();
                            clickSound();
                            _0x3502x216.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x216);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                var _0x3502x217 = new TextView(ctx);
                _0x3502x217.setText(Texts.nuker);
                _0x3502x217.setTextSize(8);
                _0x3502x217.setTypeface(font);
                _0x3502x217.setTextColor(Color.WHITE);
                _0x3502x217.setBackground(nukerBbind ? bg_8 : bg_7);
                _0x3502x217.setGravity(Gravity.LEFT);
                _0x3502x217.setPadding(10, 10, 10, 10);
                _0x3502x217.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!nukerBbind) {
                            nukerBbind = true;
                            showNukerBindBtn();
                            clickSound();
                            _0x3502x217.setBackground(bg_8)
                        } else {
                            nukerBbind = false;
                            nukerBindBtn.dismiss();
                            clickSound();
                            _0x3502x217.setBackground(bg_7)
                        }
                    }
                }));
                _0x3502x202.addView(_0x3502x217);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x202.addView(_0x3502x1a2);
                playerMenu = new PopupWindow(_0x3502x204, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3);
                playerMenu.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                playerMenu.setAnimationStyle(Animation_Translucent);
                _0x3502x202.setPadding(10, 10, 10, 10);
                playerMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showOthersMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x219 = new LinearLayout(ctx);
                var _0x3502x21a = new ScrollView(ctx);
                var _0x3502x21b = new LinearLayout(ctx);
                _0x3502x219.setOrientation(1);
                _0x3502x21b.setOrientation(1);
                _0x3502x21a.addView(_0x3502x219);
                _0x3502x21b.addView(_0x3502x21a);
                _0x3502x21a.setBackground(bg_5);
                var _0x3502x21c = new TextView(ctx);
                _0x3502x21c.setText(Texts.othersopen);
                _0x3502x21c.setTypeface(Utils.font);
                _0x3502x21c.setTextSize(12);
                _0x3502x21c.setTextColor(Color.WHITE);
                _0x3502x21c.setBackground(bg_0);
                _0x3502x21c.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x21c.setGravity(Gravity.CENTER);
                _0x3502x21c.setHorizontallyScrolling(true);
                _0x3502x21c.setSelected(true);
                _0x3502x21c.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                othersMenu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x21c.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x219.addView(_0x3502x21c);
                var _0x3502x21d = new TextView(ctx);
                if (lang == 'eng') {
                    _0x3502x21d.setText(Texts.yourcid)
                } else {
                    _0x3502x21d.setText(Texts.yourcid2)
                };
                _0x3502x21d.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x21d.setPadding(3, 3, 3, 3);
                _0x3502x21d.setTextSize(10);
                _0x3502x21d.setGravity(Gravity.CENTER);
                _0x3502x21d.setTextColor(Color.WHITE);
                _0x3502x219.addView(_0x3502x21d);
                var _0x3502x21e = new TextView(ctx);
                _0x3502x21e.setText(fromHtml('<b>' + cid + '</b>'));
                _0x3502x21e.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x21e.setPadding(3, 3, 3, 3);
                _0x3502x21e.setTextSize(7);
                _0x3502x21e.setGravity(Gravity.CENTER);
                _0x3502x21e.setTextColor(Color.WHITE);
                _0x3502x219.addView(_0x3502x21e);
                var _0x3502x21f = new TextView(ctx);
                if (lang == 'eng') {
                    _0x3502x21f.setText(Texts.unbancid)
                } else {
                    _0x3502x21f.setText(Texts.unbancid2)
                };
                _0x3502x21f.setTypeface(Utils.font);
                _0x3502x21f.setTextSize(12);
                _0x3502x21f.setTextColor(Color.WHITE);
                _0x3502x21f.setBackground(bg_0);
                _0x3502x21f.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x21f.setGravity(Gravity.CENTER);
                _0x3502x21f.setHorizontallyScrolling(true);
                _0x3502x21f.setSelected(true);
                _0x3502x21f.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        file.del(cidd);
                        clickSound();
                        ModPE.restart()
                    }
                }));
                _0x3502x219.addView(_0x3502x21f);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x219.addView(_0x3502x1a2);
                var _0x3502x220 = new TextView(ctx);
                _0x3502x220.setText(Texts.restartMcpe);
                _0x3502x220.setTextSize(12);
                _0x3502x220.setTypeface(Utils.font);
                _0x3502x220.setTextColor(Color.WHITE);
                _0x3502x220.setBackground(bg_0);
                _0x3502x220.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x220.setGravity(Gravity.CENTER);
                _0x3502x220.setHorizontallyScrolling(true);
                _0x3502x220.setSelected(true);
                _0x3502x220.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        ModPE.restart()
                    }
                }));
                _0x3502x219.addView(_0x3502x220);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(1);
                _0x3502x1a2.setText(' ');
                _0x3502x219.addView(_0x3502x1a2);
                var _0x3502x221 = new TextView(ctx);
                if (lang == 'eng') {
                    _0x3502x221.setText(Texts.yourname)
                } else {
                    _0x3502x221.setText(Texts.yourname2)
                };
                _0x3502x221.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x221.setTextSize(10);
                _0x3502x221.setGravity(Gravity.CENTER);
                _0x3502x221.setTextColor(Color.WHITE);
                _0x3502x219.addView(_0x3502x221);
                var _0x3502x222 = new TextView(ctx);
                if (lang == 'eng') {
                    _0x3502x222.setText(fromHtml('<b>The code is in the process of <i><font color="#FF7D00">CREATING</font></i>.</b>'))
                } else {
                    _0x3502x222.setText(fromHtml('<b>Код находится в процессе <i><font color="#FF7D00">СОЗДАНИЯ</font></i>.</b>'))
                };
                _0x3502x222.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x222.setTextSize(6.5);
                _0x3502x222.setGravity(Gravity.CENTER);
                _0x3502x222.setTextColor(Color.WHITE);
                _0x3502x219.addView(_0x3502x222);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x219.addView(_0x3502x1a2);
                var _0x3502x223 = new TextView(ctx);
                _0x3502x223.setText(Texts.randomNickName);
                _0x3502x223.setTextSize(12);
                _0x3502x223.setTypeface(Utils.font);
                _0x3502x223.setTextColor(Color.WHITE);
                _0x3502x223.setBackground(bg_0);
                _0x3502x223.setEllipsize(TextUtils.TruncateAt.MARQUEE);
                _0x3502x223.setGravity(Gravity.CENTER);
                _0x3502x223.setHorizontallyScrolling(true);
                _0x3502x223.setSelected(true);
                _0x3502x223.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        Options.set('mp_username', random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)] + random_abc[setRandom(0, 35)]);
                        ModPE.restart()
                    }
                }));
                _0x3502x219.addView(_0x3502x223);
                var _0x3502x1a2 = new TextView(ctx);
                _0x3502x1a2.setTextSize(2);
                _0x3502x1a2.setText(' ');
                _0x3502x219.addView(_0x3502x1a2);
                var _0x3502x224 = new TextView(ctx);
                _0x3502x224.setText(fromHtml('<b>IP: <i><font color="#FF7D00"><u>' + Server.getAddress() + '</u></font></i></b>'));
                _0x3502x224.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x224.setTextSize(11);
                _0x3502x224.setPadding(3, 3, 3, 3);
                _0x3502x224.setGravity(Gravity.CENTER);
                _0x3502x224.setTextColor(Color.WHITE);
                _0x3502x224.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        vibration.vibrate(20);
                        if (lang == 'eng') {
                            E('<b>The code is in the process of <i><font color="#FF7D00">CREATING</font></i>.</b>')
                        } else {
                            E('<b>Код находится в процессе <i><font color="#FF7D00">СОЗДАНИЯ</font></i>.</b>')
                        }
                    }
                }));
                _0x3502x219.addView(_0x3502x224);
                var _0x3502x225 = new TextView(ctx);
                _0x3502x225.setText(fromHtml('<b>Port: <i><font color="#FF7D00"><u>' + Server.getPort() + '</u></font></i></b>'));
                _0x3502x225.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
                _0x3502x225.setTextSize(11);
                _0x3502x225.setPadding(3, 3, 3, 3);
                _0x3502x225.setGravity(Gravity.CENTER);
                _0x3502x225.setTextColor(Color.WHITE);
                _0x3502x225.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        vibration.vibrate(20);
                        if (lang == 'eng') {
                            E('<b>The code is in the process of <i><font color="#FF7D00">CREATING</font></i>.</b>')
                        } else {
                            E('<b>Код находится в процессе <i><font color="#FF7D00">СОЗДАНИЯ</font></i>.</b>')
                        }
                    }
                }));
                _0x3502x219.addView(_0x3502x225);
                othersMenu = new PopupWindow(_0x3502x21b, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3);
                othersMenu.setBackgroundDrawable(new BitmapDrawable(BitmapFactory.decodeByteArray(Base64.decode(B64.BGblack, 0), 0, Base64.decode(B64.BGblack, 0).length)));
                othersMenu.setAnimationStyle(Animation_Translucent);
                _0x3502x219.setPadding(10, 10, 10, 10);
                othersMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showHitAimBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('HA');
                _0x3502x228.setTextOn('HA');
                _0x3502x228.setTextOff('HA');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(10);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(hitaimbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitaimbind) {
                            _0x3502x228.setText('HA');
                            E(Texts.nameToast + Texts.hitaim + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            hitaimbind = true;
                            hitaim = true
                        } else {
                            _0x3502x228.setText('HA');
                            E(Texts.nameToast + Texts.hitaim + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            hitaimbind = false;
                            hitaim = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                hitaimBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                hitaimBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                hitaimBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                hitaimBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showHitboxBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('H');
                _0x3502x228.setTextOn('H');
                _0x3502x228.setTextOff('H');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(hitboxbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!hitboxbind) {
                            _0x3502x228.setText('H');
                            E(Texts.nameToast + Texts.hitbox + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            hitboxbind = true;
                            hitbox = true
                        } else {
                            _0x3502x228.setText('H');
                            E(Texts.nameToast + Texts.hitbox + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            hitboxbind = false;
                            hitbox = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                hitboxBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                hitboxBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                hitboxBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                hitboxBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showAkbBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('A');
                _0x3502x228.setTextOn('A');
                _0x3502x228.setTextOff('A');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(akbbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!akbbind) {
                            _0x3502x228.setText('A');
                            E(Texts.nameToast + Texts.akb + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            akbbind = true;
                            akb = true
                        } else {
                            _0x3502x228.setText('A');
                            E(Texts.nameToast + Texts.akb + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            akbbind = false;
                            akb = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                akbBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                akbBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                akbBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                akbBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showVisualRoadBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('V');
                _0x3502x228.setTextOn('V');
                _0x3502x228.setTextOff('V');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(visualroadbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!visualroadbind) {
                            _0x3502x228.setText('V');
                            E(Texts.nameToast + Texts.visualroad + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            visualroadbind = true;
                            visualroad = true
                        } else {
                            _0x3502x228.setText('V');
                            E(Texts.nameToast + Texts.visualroad + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            visualroadbind = false;
                            visualroad = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                visualroadBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                visualroadBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                visualroadBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                visualroadBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showGlideBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('G');
                _0x3502x228.setTextOn('G');
                _0x3502x228.setTextOff('G');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(glidebind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!glidebind) {
                            _0x3502x228.setText('G');
                            E(Texts.nameToast + Texts.glide + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            glidebind = true;
                            glide = true
                        } else {
                            _0x3502x228.setText('G');
                            E(Texts.nameToast + Texts.glide + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            glidebind = false;
                            glide = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                glideBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                glideBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                glideBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                glideBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showFlyGlideBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('FG');
                _0x3502x228.setTextOn('FG');
                _0x3502x228.setTextOff('FG');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(10);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(flyglidebind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!flyglidebind) {
                            _0x3502x228.setText('FG');
                            E(Texts.nameToast + Texts.flyglide + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            flyglidebind = true;
                            flyglidehelper = true;
                            flyglide = true
                        } else {
                            _0x3502x228.setText('FG');
                            E(Texts.nameToast + Texts.flyglide + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            flyglidebind = false;
                            flyglidehelper = false;
                            flyglide = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                flyglideBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                flyglideBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                flyglideBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                flyglideBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showLongJumpBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                var _0x3502x228 = new Button(ctx);
                _0x3502x228.setText('L');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        clickSound();
                        _0x3502x228.setBackground(bg_1);
                        var _0x3502x22f = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
                        var _0x3502x230 = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
                        var _0x3502x231 = Math.sin(_0x3502x22f) * Math.cos(_0x3502x230);
                        var _0x3502x232 = Math.cos(_0x3502x22f);
                        var _0x3502x233 = Math.sin(_0x3502x22f) * Math.sin(_0x3502x230);
                        setVelX(getPlayerEnt(), _0x3502x231 * 6);
                        setVelY(getPlayerEnt(), 1);
                        setVelZ(getPlayerEnt(), _0x3502x233 * 6)
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                longJumpBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                longJumpBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                longJumpBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                longJumpBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 200, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showJetPackBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('J');
                _0x3502x228.setTextOn('J');
                _0x3502x228.setTextOff('J');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(jetpackbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpackbind) {
                            _0x3502x228.setText('J');
                            E(Texts.nameToast + Texts.jetpack + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            jetpackbind = true;
                            jetpack = true
                        } else {
                            _0x3502x228.setText('J');
                            E(Texts.nameToast + Texts.jetpack + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            jetpackbind = false;
                            jetpack = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                jetpackBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                jetpackBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                jetpackBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                jetpackBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showJetPack2BindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('J2');
                _0x3502x228.setTextOn('J2');
                _0x3502x228.setTextOff('J2');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(10);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(jetpack2bind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!jetpack2bind) {
                            _0x3502x228.setText('J2');
                            E(Texts.nameToast + Texts.jetpack2 + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            jetpack2bind = true;
                            jetpack2 = true
                        } else {
                            _0x3502x228.setText('J2');
                            E(Texts.nameToast + Texts.jetpack2 + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            jetpack2bind = false;
                            jetpack2 = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                jetpack2BindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                jetpack2BindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                jetpack2BindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                jetpack2BindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showFastFallBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('F');
                _0x3502x228.setTextOn('F');
                _0x3502x228.setTextOff('F');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(fastfallbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!fastfallbind) {
                            _0x3502x228.setText('F');
                            E(Texts.nameToast + Texts.fastfall + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            fastfallbind = true;
                            fastfall = true
                        } else {
                            _0x3502x228.setText('F');
                            E(Texts.nameToast + Texts.fastfall + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            fastfallbind = false;
                            fastfall = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                fastfallBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                fastfallBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                fastfallBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                fastfallBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showAntiGravityBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('AG');
                _0x3502x228.setTextOn('AG');
                _0x3502x228.setTextOff('AG');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(10);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(antigravitybind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!antigravitybind) {
                            _0x3502x228.setText('AG');
                            E(Texts.nameToast + Texts.antigravity + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            antigravitybind = true;
                            antigravity = true
                        } else {
                            _0x3502x228.setText('AG');
                            E(Texts.nameToast + Texts.antigravity + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            antigravitybind = false;
                            antigravity = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                antigravityBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                antigravityBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                antigravityBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                antigravityBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showBounceFlyBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('B');
                _0x3502x228.setTextOn('B');
                _0x3502x228.setTextOff('B');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(bounceflybind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!bounceflybind) {
                            _0x3502x228.setText('B');
                            E(Texts.nameToast + Texts.bouncefly + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            bounceflybind = true;
                            bouncefly = true
                        } else {
                            _0x3502x228.setText('B');
                            E(Texts.nameToast + Texts.bouncefly + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            bounceflybind = false;
                            bouncefly = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                bounceflyBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                bounceflyBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                bounceflyBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                bounceflyBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showAutoDestroyBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('AD');
                _0x3502x228.setTextOn('AD');
                _0x3502x228.setTextOff('AD');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(10);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(autodestroybind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!autodestroybind) {
                            _0x3502x228.setText('AD');
                            E(Texts.nameToast + Texts.autodestroy + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            autodestroybind = true;
                            autodestroy = true
                        } else {
                            _0x3502x228.setText('AD');
                            E(Texts.nameToast + Texts.autodestroy + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            autodestroybind = false;
                            autodestroy = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                autodestroyBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                autodestroyBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                autodestroyBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                autodestroyBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showNukerBindBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x227 = new LinearLayout(ctx);
                _0x3502x227.setOrientation(1);
                var _0x3502x228 = new ToggleButton(ctx);
                _0x3502x228.setText('N');
                _0x3502x228.setTextOn('N');
                _0x3502x228.setTextOff('N');
                _0x3502x228.setTypeface(font);
                _0x3502x228.setTextSize(13);
                _0x3502x228.setTextColor(Color.WHITE);
                _0x3502x228.setPadding(5, 5, 5, 5);
                _0x3502x228.setBackground(nukerbind ? bg_2 : bg_1);
                _0x3502x228.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        if (!nukerbind) {
                            _0x3502x228.setText('N');
                            E(Texts.nameToast + Texts.nuker + Texts.bindText + Texts.en);
                            _0x3502x228.setBackground(bg_2);
                            clickSound();
                            nukerbind = true;
                            nuker = true
                        } else {
                            _0x3502x228.setText('N');
                            E(Texts.nameToast + Texts.nuker + Texts.bindText + Texts.dis);
                            _0x3502x228.setBackground(bg_1);
                            clickSound();
                            nukerbind = false;
                            nuker = false
                        }
                    }
                }));
                _0x3502x228.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                nukerBindBtn.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x3502x228.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x227.addView(_0x3502x228);
                nukerBindBtn = new PopupWindow(_0x3502x227, dip2px(35), dip2px(35));
                nukerBindBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                nukerBindBtn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 150)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function showCoordinateGUI() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var _0x3502x23c = new LinearLayout(ctx);
                _0x3502x23c.setOrientation(1);
                coords_txt_view = new TextView(ctx);
                coords_txt_view.setText(' null ');
                coords_txt_view.setPadding(3, 3, 3, 3);
                coords_txt_view.setTextColor(Color.WHITE);
                coords_txt_view.setBackground(bg_1);
                coords_txt_view.setOnClickListener(new OnClickListener({
                    onClick: function (_0x3502x1a4) {
                        coords_txt_view.setBackground(bg_1)
                    }
                }));
                coords_txt_view.setOnTouchListener(new OnTouchListener({
                    onTouch: function (_0x3502x1c4, _0x3502x1c5) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x3502x1c5.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - _0x3502x1c5.getRawX();
                                dy = mPosY - _0x3502x1c5.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = (_0x3502x1c5.getRawX() + dx);
                                mPosY = (_0x3502x1c5.getRawY() + dy);
                                coords_txt_menu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = false;
                                break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                coords_txt_view.setOnLongClickListener(new OnLongClickListener({
                    onLongClick: function (_0x3502x1c6, _0x3502x1c7) {
                        moving = true;
                        return true
                    }
                }));
                _0x3502x23c.addView(coords_txt_view);
                coords_txt_menu = new PopupWindow(_0x3502x23c, WRAP_CONTENT, WRAP_CONTENT);
                coords_txt_menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                coords_txt_menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.TOP | Gravity.LEFT, 0, 0)
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }))
}

function entityHurtHook(_0x3502x23e, _0x3502x23f, _0x3502x240) {
    if (akb || (_0x3502x23f != getPlayerEnt())) {
        return;
        Entity.setImmobile(getPlayerEnt, true);
        this.attackTick = 1
    }
}

function modTick() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                if (coordsGUI == true) {
                    coords_txt_view.setText('X:' + Math.floor(Player.getX()) + ', Y:' + Math.floor(Player.getY() + 1) + ', Z:' + Math.floor(Player.getZ()));
                    coords_txt_view.setGravity(Gravity.CENTER)
                }
            } catch (e) {
                E(e + ' #' + e.lineNumber)
            }
        }
    }));
    if (hitbox == true) {
        Entity.setCollisionSize(Player.getPointedEntity(), HitboxSettingXZ, HitboxSettingY)
    } else {
        Entity.setCollisionSize(Player.getPointedEntity(), 1, 2)
    };
    if (akb || Entity.getHealth(getPlayerEnt()) <= 0) {
        if (this.tick > 0) {
            tick--
        } else {
            Entity.setImmobile(getPlayerEnt(), false)
        };
        if (this.lastHealth > Entity.getHealth(getPlayerEnt())) {
            Entity.setImmobile(getPlayerEnt(), true);
            this.attackTick = 1
        };
        this.attackTick = 0;
        this.lastHealth = Entity.getHealth(getPlayerEnt())
    };
    if (limitedcamera == true) {
        var _0x3502x242 = getPlayerEnt();
        var _0x3502x230 = Math.floor(Entity.getYaw(_0x3502x242));
        var _0x3502x22f = Math.floor(Entity.getPitch(_0x3502x242));
        if (_0x3502x22f <= 2) {
            Entity.setRot(_0x3502x242, _0x3502x230, 1)
        }
    };
    if (glide == true) {
        setVelY(getPlayerEnt(), GlideSetting)
    };
    if (longjump) {
        var _0x3502x230 = Entity.getYaw(getPlayerEnt());
        if (Entity.getVelY(getPlayerEnt()) > 0.32) {
            setVelX(getPlayerEnt(), -lgjp * Math.sin(_0x3502x230 / 180 * Math.PI));
            if (Entity.getVelY(getPlayerEnt()) > 0.32) {
                setVelZ(getPlayerEnt(), lgjp * Math.cos(_0x3502x230 / 180 * Math.PI))
            }
        }
    };
    if (haste == true) {
        Entity.addEffect(getPlayerEnt(), 3, 999999 * 20, 100, true, false)
    };
    if (fullbright == true) {
        Entity.addEffect(getPlayerEnt(), 16, 999999 * 20, 100, true, false)
    };
    if (eat) {
        fastEatOn(256)
    } else {
        fastEatOff(256)
    };
    if (safewalk == true) {
        Entity.setSneaking(getPlayerEnt(), true)
    };
    if (bunnyhop == true) {
        if (Utils.Player.onGround()) {
            setVelY(getPlayerEnt(), 0.4)
        }
    };
    if (fastfall == true) {
        if (Entity.getVelY(getPlayerEnt()) < -0.05) {
            setVelY(getPlayerEnt(), -100)
        }
    };
    if (nuker == true) {
        Nuker()
    };
    if (visualroad == true) {
        visualRoad()
    };
    if (flyglide == true) {
        setVelY(getPlayerEnt(), -0.1)
    };
    if (flyglidehelper == true) {
        flyglidetime--;
        if (flyglidetime == 0) {
            Entity.setPositionRelative(getPlayerEnt(), 0, 4, 0);
            flyglidetime = 35
        }
    };
    if (autodestroy == true) {
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ())
    };
    if (jetpack2 == true) {
        var _0x3502x243 = getYaw() + 90;
        var _0x3502x244 = getPitch() - 180;
        x = Math.cos(_0x3502x243 * (Math.PI / 180));
        y = Math.sin(_0x3502x244 * (Math.PI / 180));
        z = Math.sin(_0x3502x243 * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 0.3);
        setVelY(Player.getEntity(), y * 0.3);
        setVelZ(Player.getEntity(), z * 0.3);
        if (jetpack2time !== 0) {
            jetpack2time--
        };
        if (jetpack2time == 0) {
            jetpack2time = 3;
            setVelY(getPlayerEnt(), +0.20)
        }
    };
    if (jetpack == true) {
        var _0x3502x243 = getYaw() + 90;
        var _0x3502x244 = getPitch() - 180;
        x = Math.cos(_0x3502x243 * (Math.PI / 180));
        y = Math.sin(_0x3502x244 * (Math.PI / 180));
        z = Math.sin(_0x3502x243 * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1)
    };
    if (jesus == true) {
        if (Utils.Player.isOnWater()) {
            setVelY(getPlayerEnt(), 0.2)
        };
        if (Utils.Player.isOnWater()) {
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.08)
        };
        if (Utils.Player.isOnWater()) {
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.08)
        }
    };
    if (destroy == true) {
        Level.destroyBlock(cx, cy, cz)
    };
    if (antiafk == true) {
        antiafktime--;
        if (antiafktime == 0) {
            setVelY(getPlayerEnt(), +0.4);
            antiafktime = 100
        }
    };
    if (autowalk == true) {
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.2 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.2 * playerDir[2])
    };
    if (spider && Utils.Player.isCollidedHorizontally()) {
        setVelY(getPlayerEnt(), 0.50)
    };
    if (step && Utils.Player.isCollidedHorizontally()) {
        Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0)
    };
    if (crouchfly == true) {
        if (Entity.isSneaking(Player.getEntity()) == true) {
            toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
            setVelX(getPlayerEnt(), 0.8 * playerDir[0]);
            setVelZ(getPlayerEnt(), 0.8 * playerDir[2]);
            setVelY(getPlayerEnt(), 0.0)
        }
    };
    if (antigravity == true) {
        setVelY(getPlayerEnt(), +0.4)
    };
    if (bouncefly == true) {
        BounceFlyTimer--;
        if (BounceFlyTimer == 0) {
            BounceFlyTimer = 5;
            setVelY(getPlayerEnt(), +0.18)
        }
    }
}

function attackHook(_0x3502x23e, _0x3502x23f) {
    if (hitaim && _0x3502x23e == getPlayerEnt()) {
        showTestButton(_0x3502x23f)
    };
    if (tpaura == true) {
        setPosition(getPlayerEnt(), Entity.getX(_0x3502x23f), Entity.getY(_0x3502x23f) + 2, Entity.getZ(_0x3502x23f))
    };
    if (tpaura2 == true) {
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
        setVelX(getPlayerEnt(), 0.4 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.4 * playerDir[2]);
        Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
        Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
        Entity.setCollisionSize(_0x3502x23f, 4, 30)
    };
    if (criticals == true) {
        if (Utils.Player.onGround()) {
            setVelY(getPlayerEnt(), CriticalsSettingY)
        }
    };
    if (hitboost == true) {
        var _0x3502x22f = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
        var _0x3502x230 = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
        var _0x3502x231 = Math.sin(_0x3502x22f) * Math.cos(_0x3502x230);
        var _0x3502x232 = Math.cos(_0x3502x22f);
        var _0x3502x233 = Math.sin(_0x3502x22f) * Math.sin(_0x3502x230);
        setVelX(getPlayerEnt(), _0x3502x231 * 1.5);
        setVelY(getPlayerEnt(), _0x3502x232 * 1.5);
        setVelZ(getPlayerEnt(), _0x3502x233 * 1.5)
    };
    if (_0x3502x23e == Player.getEntity() && derphit) {
        var _0x3502x242 = getPlayerEnt();
        var _0x3502x230 = Math.floor(Entity.getYaw(_0x3502x242));
        var _0x3502x22f = Math.floor(Entity.getPitch(_0x3502x242));
        Entity.setRot(_0x3502x242, _0x3502x230 + 50, _0x3502x22f)
    };
    if (stanceaura == true) {
        var _0x3502x243 = getYaw() - 90;
        var _0x3502x244 = getPitch() - 180;
        x = Math.cos(_0x3502x243 * (DEG_TO_RAD));
        y = Math.sin(_0x3502x244 * (DEG_TO_RAD));
        z = Math.sin(_0x3502x243 * (DEG_TO_RAD));
        setVelX(Player.getEntity(), x * 0.5);
        setVelY(Player.getEntity(), y * 0.5);
        setVelZ(Player.getEntity(), z * 0.5);
        if (stanceauratime !== 0) {
            stanceauratime--
        };
        if (stanceauratime == 0) {
            stanceauratime = 9;
            var playerDir = [0, 0, 0];
            toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
            setVelX(getPlayerEnt(), playerDir[0]);
            setVelY(getPlayerEnt(), 0.45);
            setVelZ(getPlayerEnt(), playerDir[2]);
            setVelY(getPlayerEnt(), -0.3)
        }
    }
}

function useItem(_0x3502x247, _0x3502x248, _0x3502x249, _0x3502x24a, _0x3502x24b, _0x3502x24c, _0x3502x24d, _0x3502x24e, _0x3502x24f) {
    if (tower == true) {
        setVelY(getPlayerEnt(), 0.6)
    };
    if (quicktower == true) {
        Entity.setPositionRelative(getPlayerEnt(), 0, +1.5, 0);
        setVelY(getPlayerEnt(), 0.0)
    };
    if (taptp == true) {
        setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
    };
    if (pos == true) {
        cx = Player.getPointedBlockX();
        cy = Player.getPointedBlockY();
        cz = Player.getPointedBlockZ();
        if (lang == 'eng') {
            clientMessage(Texts.chatNameScript + 'The point is successfully set. Coordinate system: ' + cx + ', ' + cy + ', ' + cz)
        } else {
            clientMessage(Texts.chatNameScript + 'Точка успешно установлена. Координаты: ' + cx + ', ' + cy + ', ' + cz)
        }
    };
    if (tapdestroy == true) {
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ())
    }
}

function fastEatOn(_0x3502x251) {
    Item.setProperties(4 + _0x3502x251, {
        "name": 'apple',
        "id": 4,
        "icon": 'apple',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(66 + _0x3502x251, {
        "name": 'golden_apple',
        "id": 66,
        "icon": 'apple_golden',
        "category": 'Miscellaneous',
        "stack_by_data": true,
        "use_animation": 'eat',
        "use_duration": eatTime,
        "foil": false,
        "hover_text_color": 'aqua',
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'supernatural',
            "is_meat": false,
            "effects": [{
                "name": 'regeneration',
                "chance": 1.0,
                "duration": 5,
                "amplifier": 1
            }, {
                "name": 'absorption',
                "chance": 1.0,
                "duration": 120,
                "amplifier": 0
            }],
            "enchanted_effects": [{
                "name": 'regeneration',
                "chance": 0.66,
                "duration": 30,
                "amplifier": 4
            }, {
                "name": 'absorption',
                "chance": 0.66,
                "duration": 120,
                "amplifier": 0
            }, {
                "name": 'resistance',
                "chance": 0.66,
                "duration": 300,
                "amplifier": 0
            }, {
                "name": 'fire_resistance',
                "chance": 0.66,
                "duration": 300,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(210 + _0x3502x251, {
        "name": 'appleEnchanted',
        "id": 210,
        "icon": 'apple_golden',
        "category": 'Miscellaneous',
        "hand_equipped": false,
        "stack_by_data": true,
        "use_animation": 'eat',
        "use_duration": eatTime,
        "foil": true,
        "hover_text_color": 'light_purple',
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'supernatural',
            "is_meat": false,
            "effects": [{
                "name": 'regeneration',
                "chance": 1.0,
                "duration": 30,
                "amplifier": 4
            }, {
                "name": 'absorption',
                "chance": 1.0,
                "duration": 120,
                "amplifier": 0
            }, {
                "name": 'resistance',
                "chance": 1.0,
                "duration": 300,
                "amplifier": 0
            }, {
                "name": 'fire_resistance',
                "chance": 1.0,
                "duration": 300,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(26 + _0x3502x251, {
        "name": 'mushroom_stew',
        "id": 26,
        "icon": 'mushroom_stew',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_stack_size": 1,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "is_meat": false,
            "using_converts_to": 'item.bowl'
        }
    });
    Item.setProperties(41 + _0x3502x251, {
        "name": 'bread',
        "id": 41,
        "icon": 'bread',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(63 + _0x3502x251, {
        "name": 'porkchop',
        "id": 63,
        "icon": 'porkchop_raw',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(64 + _0x3502x251, {
        "name": 'porkchop_cooked',
        "id": 64,
        "icon": 'porkchop_cooked',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(93 + _0x3502x251, {
        "name": 'fish',
        "id": 93,
        "icon": 'fish',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(204 + _0x3502x251, {
        "name": 'salmon',
        "id": 204,
        "icon": 'salmon',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(205 + _0x3502x251, {
        "name": 'clownfish',
        "id": 205,
        "icon": 'clownfish',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(206 + _0x3502x251, {
        "name": 'pufferfish',
        "id": 206,
        "icon": 'pufferfish',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'poor',
            "is_meat": true,
            "effects": [{
                "name": 'poison',
                "duration": 60,
                "amplifier": 3
            }, {
                "name": 'nausea',
                "duration": 15,
                "amplifier": 1
            }, {
                "name": 'hunger',
                "duration": 15,
                "amplifier": 2
            }]
        }
    });
    Item.setProperties(94 + _0x3502x251, {
        "name": 'cooked_fish',
        "id": 94,
        "icon": 'cooked_fish',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "eat_sound": 'random.burp',
            "is_meat": true
        }
    });
    Item.setProperties(207 + _0x3502x251, {
        "name": 'cooked_salmon',
        "id": 207,
        "icon": 'cooked_salmon',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(101 + _0x3502x251, {
        "name": 'cookie',
        "id": 101,
        "icon": 'cookie',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": false
        }
    });
    Item.setProperties(104 + _0x3502x251, {
        "name": 'melon',
        "id": 104,
        "icon": 'melon',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(107 + _0x3502x251, {
        "name": 'beef',
        "id": 107,
        "icon": 'beef_raw',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(108 + _0x3502x251, {
        "name": 'steak',
        "id": 108,
        "icon": 'beef_cooked',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(109 + _0x3502x251, {
        "name": 'chicken',
        "id": 109,
        "icon": 'chicken_raw',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": true,
            "effects": [{
                "name": 'hunger',
                "chance": 0.3,
                "duration": 30,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(110 + _0x3502x251, {
        "name": 'cooked_chicken',
        "id": 110,
        "icon": 'chicken_cooked',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "is_meat": true
        }
    });
    Item.setProperties(167 + _0x3502x251, {
        "name": 'muttonRaw',
        "id": 167,
        "icon": 'mutton_raw',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(168 + _0x3502x251, {
        "name": 'muttonCooked',
        "id": 168,
        "icon": 'mutton_cooked',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(111 + _0x3502x251, {
        "name": 'rotten_flesh',
        "id": 111,
        "icon": 'rotten_flesh',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'poor',
            "is_meat": true,
            "effects": [{
                "name": 'hunger',
                "chance": 0.3,
                "duration": 30,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(119 + _0x3502x251, {
        "name": 'spider_eye',
        "id": 119,
        "icon": 'spider_eye',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'good',
            "is_meat": false,
            "effects": [{
                "name": 'poison',
                "chance": 1.0,
                "duration": 5,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(135 + _0x3502x251, {
        "name": 'carrot',
        "id": 135,
        "icon": 'carrot',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'normal',
            "is_meat": false
        },
        "seed": {
            "crop_result": 'carrots',
            "plant_at": 'farmland'
        }
    });
    Item.setProperties(136 + _0x3502x251, {
        "name": 'potato',
        "id": 136,
        "icon": 'potato',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'low',
            "is_meat": false
        },
        "seed": {
            "crop_result": 'potatoes',
            "plant_at": 'farmland'
        }
    });
    Item.setProperties(137 + _0x3502x251, {
        "name": 'baked_potato',
        "id": 137,
        "icon": 'potato_baked',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(138 + _0x3502x251, {
        "name": 'poisonous_potato',
        "id": 138,
        "icon": 'potato_poisonous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": false,
            "effects": [{
                "name": 'poison',
                "chance": 0.6,
                "duration": 5,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(140 + _0x3502x251, {
        "name": 'golden_carrot',
        "id": 140,
        "icon": 'carrot_golden',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'supernatural',
            "is_meat": false
        }
    });
    Item.setProperties(144 + _0x3502x251, {
        "name": 'pumpkin_pie',
        "id": 144,
        "icon": 'pumpkin_pie',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(155 + _0x3502x251, {
        "name": 'rabbit',
        "id": 155,
        "icon": 'rabbit',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(156 + _0x3502x251, {
        "name": 'cooked_rabbit',
        "id": 156,
        "icon": 'rabbit_cooked',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": true
        }
    });
    Item.setProperties(157 + _0x3502x251, {
        "name": 'rabbit_stew',
        "id": 157,
        "icon": 'rabbit_stew',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_stack_size": 1,
        "food": {
            "nutrition": 10,
            "saturation_modifier": 'normal',
            "using_converts_to": 'bowl',
            "is_meat": true
        }
    });
    Item.setProperties(201 + _0x3502x251, {
        "name": 'beetroot',
        "id": 201,
        "icon": 'beetroot',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(203 + _0x3502x251, {
        "name": 'beetroot_soup',
        "id": 203,
        "icon": 'beetroot_soup',
        "use_animation": 'eat',
        "use_duration": eatTime,
        "max_stack_size": 1,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "using_converts_to": 'bowl',
            "is_meat": false
        }
    })
}

function fastEatOff(_0x3502x251) {
    Item.setProperties(4 + _0x3502x251, {
        "name": 'apple',
        "id": 4,
        "icon": 'apple',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(66 + _0x3502x251, {
        "name": 'golden_apple',
        "id": 66,
        "icon": 'apple_golden',
        "category": 'Miscellaneous',
        "stack_by_data": true,
        "use_animation": 'eat',
        "use_duration": 32,
        "foil": false,
        "hover_text_color": 'aqua',
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'supernatural',
            "is_meat": false,
            "effects": [{
                "name": 'regeneration',
                "chance": 1.0,
                "duration": 5,
                "amplifier": 1
            }, {
                "name": 'absorption',
                "chance": 1.0,
                "duration": 120,
                "amplifier": 0
            }],
            "enchanted_effects": [{
                "name": 'regeneration',
                "chance": 0.66,
                "duration": 30,
                "amplifier": 4
            }, {
                "name": 'absorption',
                "chance": 0.66,
                "duration": 120,
                "amplifier": 0
            }, {
                "name": 'resistance',
                "chance": 0.66,
                "duration": 300,
                "amplifier": 0
            }, {
                "name": 'fire_resistance',
                "chance": 0.66,
                "duration": 300,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(210 + _0x3502x251, {
        "name": 'appleEnchanted',
        "id": 210,
        "icon": 'apple_golden',
        "category": 'Miscellaneous',
        "hand_equipped": false,
        "stack_by_data": true,
        "use_animation": 'eat',
        "use_duration": 32,
        "foil": true,
        "hover_text_color": 'light_purple',
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'supernatural',
            "is_meat": false,
            "effects": [{
                "name": 'regeneration',
                "chance": 1.0,
                "duration": 30,
                "amplifier": 4
            }, {
                "name": 'absorption',
                "chance": 1.0,
                "duration": 120,
                "amplifier": 0
            }, {
                "name": 'resistance',
                "chance": 1.0,
                "duration": 300,
                "amplifier": 0
            }, {
                "name": 'fire_resistance',
                "chance": 1.0,
                "duration": 300,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(26 + _0x3502x251, {
        "name": 'mushroom_stew',
        "id": 26,
        "icon": 'mushroom_stew',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_stack_size": 1,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "is_meat": false,
            "using_converts_to": 'item.bowl'
        }
    });
    Item.setProperties(41 + _0x3502x251, {
        "name": 'bread',
        "id": 41,
        "icon": 'bread',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(63 + _0x3502x251, {
        "name": 'porkchop',
        "id": 63,
        "icon": 'porkchop_raw',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(64 + _0x3502x251, {
        "name": 'porkchop_cooked',
        "id": 64,
        "icon": 'porkchop_cooked',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(93 + _0x3502x251, {
        "name": 'fish',
        "id": 93,
        "icon": 'fish',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(204 + _0x3502x251, {
        "name": 'salmon',
        "id": 204,
        "icon": 'salmon',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(205 + _0x3502x251, {
        "name": 'clownfish',
        "id": 205,
        "icon": 'clownfish',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'poor',
            "is_meat": true
        }
    });
    Item.setProperties(206 + _0x3502x251, {
        "name": 'pufferfish',
        "id": 206,
        "icon": 'pufferfish',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'poor',
            "is_meat": true,
            "effects": [{
                "name": 'poison',
                "duration": 60,
                "amplifier": 3
            }, {
                "name": 'nausea',
                "duration": 15,
                "amplifier": 1
            }, {
                "name": 'hunger',
                "duration": 15,
                "amplifier": 2
            }]
        }
    });
    Item.setProperties(94 + _0x3502x251, {
        "name": 'cooked_fish',
        "id": 94,
        "icon": 'cooked_fish',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "eat_sound": 'random.burp',
            "is_meat": true
        }
    });
    Item.setProperties(207 + _0x3502x251, {
        "name": 'cooked_salmon',
        "id": 207,
        "icon": 'cooked_salmon',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_damage": 0,
        "stacked_by_data": true,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(101 + _0x3502x251, {
        "name": 'cookie',
        "id": 101,
        "icon": 'cookie',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'poor',
            "is_meat": false
        }
    });
    Item.setProperties(104 + _0x3502x251, {
        "name": 'melon',
        "id": 104,
        "icon": 'melon',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(107 + _0x3502x251, {
        "name": 'beef',
        "id": 107,
        "icon": 'beef_raw',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(108 + _0x3502x251, {
        "name": 'steak',
        "id": 108,
        "icon": 'beef_cooked',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(109 + _0x3502x251, {
        "name": 'chicken',
        "id": 109,
        "icon": 'chicken_raw',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": true,
            "effects": [{
                "name": 'hunger',
                "chance": 0.3,
                "duration": 30,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(110 + _0x3502x251, {
        "name": 'cooked_chicken',
        "id": 110,
        "icon": 'chicken_cooked',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "is_meat": true
        }
    });
    Item.setProperties(167 + _0x3502x251, {
        "name": 'muttonRaw',
        "id": 167,
        "icon": 'mutton_raw',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(168 + _0x3502x251, {
        "name": 'muttonCooked',
        "id": 168,
        "icon": 'mutton_cooked',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'good',
            "is_meat": true
        }
    });
    Item.setProperties(111 + _0x3502x251, {
        "name": 'rotten_flesh',
        "id": 111,
        "icon": 'rotten_flesh',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 4,
            "saturation_modifier": 'poor',
            "is_meat": true,
            "effects": [{
                "name": 'hunger',
                "chance": 0.3,
                "duration": 30,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(119 + _0x3502x251, {
        "name": 'spider_eye',
        "id": 119,
        "icon": 'spider_eye',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'good',
            "is_meat": false,
            "effects": [{
                "name": 'poison',
                "chance": 1.0,
                "duration": 5,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(135 + _0x3502x251, {
        "name": 'carrot',
        "id": 135,
        "icon": 'carrot',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'normal',
            "is_meat": false
        },
        "seed": {
            "crop_result": 'carrots',
            "plant_at": 'farmland'
        }
    });
    Item.setProperties(136 + _0x3502x251, {
        "name": 'potato',
        "id": 136,
        "icon": 'potato',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'low',
            "is_meat": false
        },
        "seed": {
            "crop_result": 'potatoes',
            "plant_at": 'farmland'
        }
    });
    Item.setProperties(137 + _0x3502x251, {
        "name": 'baked_potato',
        "id": 137,
        "icon": 'potato_baked',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(138 + _0x3502x251, {
        "name": 'poisonous_potato',
        "id": 138,
        "icon": 'potato_poisonous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 2,
            "saturation_modifier": 'low',
            "is_meat": false,
            "effects": [{
                "name": 'poison',
                "chance": 0.6,
                "duration": 5,
                "amplifier": 0
            }]
        }
    });
    Item.setProperties(140 + _0x3502x251, {
        "name": 'golden_carrot',
        "id": 140,
        "icon": 'carrot_golden',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'supernatural',
            "is_meat": false
        }
    });
    Item.setProperties(144 + _0x3502x251, {
        "name": 'pumpkin_pie',
        "id": 144,
        "icon": 'pumpkin_pie',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 8,
            "saturation_modifier": 'low',
            "is_meat": false
        }
    });
    Item.setProperties(155 + _0x3502x251, {
        "name": 'rabbit',
        "id": 155,
        "icon": 'rabbit',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 3,
            "saturation_modifier": 'low',
            "is_meat": true
        }
    });
    Item.setProperties(156 + _0x3502x251, {
        "name": 'cooked_rabbit',
        "id": 156,
        "icon": 'rabbit_cooked',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 5,
            "saturation_modifier": 'normal',
            "is_meat": true
        }
    });
    Item.setProperties(157 + _0x3502x251, {
        "name": 'rabbit_stew',
        "id": 157,
        "icon": 'rabbit_stew',
        "category": 'Miscellaneous',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_stack_size": 1,
        "food": {
            "nutrition": 10,
            "saturation_modifier": 'normal',
            "using_converts_to": 'bowl',
            "is_meat": true
        }
    });
    Item.setProperties(201 + _0x3502x251, {
        "name": 'beetroot',
        "id": 201,
        "icon": 'beetroot',
        "use_animation": 'eat',
        "use_duration": 32,
        "food": {
            "nutrition": 1,
            "saturation_modifier": 'normal',
            "is_meat": false
        }
    });
    Item.setProperties(203 + _0x3502x251, {
        "name": 'beetroot_soup',
        "id": 203,
        "icon": 'beetroot_soup',
        "use_animation": 'eat',
        "use_duration": 32,
        "max_stack_size": 1,
        "food": {
            "nutrition": 6,
            "saturation_modifier": 'normal',
            "using_converts_to": 'bowl',
            "is_meat": false
        }
    })
}