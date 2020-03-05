var openWindow = null
var openWindow2 = null
var openWindow3 = null
var openWindow4 = null
var openWindow5 = null
var openWindow6 = null
var editor = ""
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var a, b, c, d, e, f
var px1, py1, pz1, px2, py2, pz2, px3, py3, pz3, px11, py11, pz11, px21, py21, pz21, pz31, pz31, pz31
var SDpx = 0,
    SDpz = 0,
    SDX = 0,
    SDZ = 0,
    SDs = 0,
    SD = 0,
    SDt = 600,
    speed1 = 0.6
var pe, px, py, pz
var day = 0
var exx1, exy1, exz1, exd1
var superminerlight1 = 0,
    superminerlight2 = false,
    superminersee1 = 0,
    superminersee2 = false,
    superminersearch1 = 0,
    superminersearch2 = false,
    xikuang = 0,
    xikuang2 = false,
    tunkuang = 0,
    tunkuang2 = false,
    minerbutton = new Array()
var inputore = [
        ["石头", 1, 0, 0, 1, 0, 1, 1],
        ["花岗岩", 1, 1, 0, 1, 0, 1, 1],
        ["闪长岩", 1, 3, 0, 1, 0, 1, 1],
        ["安山岩", 1, 5, 0, 1, 0, 1, 1],
        ["泥土", 3, 0, 0, 1, 0, 1, 1],
        ["砾石", 13, 0, 0, 1, 0, 1, 1],
        ["金矿", 14, 0, 1, 0, 1, 1, 0],
        ["铁矿石", 15, 0, 1, 0, 1, 1, 0],
        ["煤矿", 16, 0, 1, 0, 1, 1, 0],
        ["青金石矿", 21, 0, 1, 0, 1, 1, 0],
        ["钻石矿", 56, 0, 1, 0, 1, 1, 0],
        ["红石矿", 73, 0, 1, 0, 1, 1, 0],
        ["发光的红石矿", 74, 0, 1, 0, 1, 1, 0],
        ["绿宝石矿", 129, 0, 1, 0, 1, 1, 0]
    ],
    outputore = [
        ["石头", 1, 0],
        ["花岗岩", 1, 1],
        ["闪长岩", 1, 3],
        ["安山岩", 1, 5],
        ["泥土", 3, 0],
        ["砾石", 13, 0],
        ["金锭", 266, 0],
        ["铁锭", 265, 0],
        ["煤", 263, 0],
        ["青金石", 351, 4],
        ["钻石", 264, 0],
        ["红石粉", 331, 0],
        ["红石粉", 331, 0],
        ["绿宝石", 388, 0]
    ]
var event1 = 1,
    event2 = 0,
    event3 = 0,
    event32 = false,
    event4 = 0,
    event5 = 0,
    event6 = 0,
    event7 = 0,
    event72 = false,
    event8 = 0
var ex, ey, ez, set = 0
var tiejianshuangji = 1
var go = -1,
    mode = -1
var blockid1 = 0,
    data1 = 0,
    blockid2 = 0,
    data2 = 0,
    blockid3 = 0,
    data3 = 0
var r1, r2, r3, a1, b1, c1
var copy1 = new Array(),
    copy2 = new Array()
var ax1, ax2, ax3, ay1, ay2, ay3, az1, az2, az3, ap, ap2, ap3
var giveitem = 0,
    giveitem2 = 0,
    givemount = 64
var sc1 = 1,
    sc2 = 1,
    pointset = 2
var ecopyd = 0,
    ecopytimes = 0,
    ecopy1, ecopy2, ecopytimes2 = 1,
    copyx1, copyy1, copyz1, copybufugai = 0,
    copybufugai2 = false,
    esetsupermode = 0
var superecopy1, superecopy2, superecopy3, superecopyx, superecopyy, superecopyz, superecopyd1, superecopyd2, superecopyd3
var cptf = 0,
    cpto = 0
var t = -1,
    T, offfire = 0
var i1 = 0,
    i2 = 0
var pl = 0,
    escape = 0
var h1 = 0,
    h2 = 0,
    h3, d1 = 0
var gd1, zmax1, zmin1, zt1, zt2, zdq1, zcx1, exmode = 1,
    exmode2 = 0
var blockid11, data11, blockid21, data21, blockid31, data31
var k1, k2, k3, k4
var mode2, dk = 0,
    dktimes = 1,
    mode3 = -1
var quick1 = 0,
    quick2 = 0,
    quick3 = 0
var duobianxingjiaodu = 0,
    duobianxingbianshu, duobianxingpointX, duobianxingpointZ
var newerL = 0,
    newerL1 = 0,
    newerL2 = 0,
    newerL3 = 0,
    newerL4 = 0,
    newer = new Array()
var fire2 = 1,
    fire3 = 1,
    fire4 = 5,
    eventweapon = 0,
    entityweapon = new Array(),
    weaponvx = new Array(),
    weaponvy = new Array(),
    weaponvz = new Array(),
    entityweaponid = 80,
    weaponexplode1 = 0,
    weaponexplode2 = 0,
    weaponexplode3 = 0,
    weaponexplode4 = 0,
    weaponexplode5 = 0,
    weaponexplode6 = 0,
    weaponv = 6,
    weaponyk = 0,
    weapontp = 0,
    weaponfly = 0,
    weaponfkd = 1,
    tw = -1,
    tws = -1
var eventagain = 0,
    eventmpitem = 0,
    website, test = 0,
    firstplay, yidongguangyuan = 0,
    yidongguangyuan2, xiaochufangkuai = 0,
    flymode = 0,
    flymode2 = 0,
    killitem, Mainmode = 0
var newerD0, newerE0, newerD1, newerE1, newerD2, newerE2
var block = [
    ["石头", 1, 0],
    ["花岗岩", 1, 1],
    ["光滑的花岗岩", 1, 2],
    ["闪长岩", 1, 3],
    ["光滑的闪长岩", 1, 4],
    ["安山岩", 1, 5],
    ["光滑的安山岩", 1, 6],
    ["草方块", 2, 0],
    ["泥土", 3, 0],
    ["鹅卵石", 4, 0],
    ["橡木板", 5, 0],
    ["云杉木板", 5, 1],
    ["桦木板", 5, 2],
    ["丛林木板", 5, 3],
    ["基岩", 7, 0],
    ["沙子", 12, 0],
    ["砾石", 13, 0],
    ["橡木", 17, 0],
    ["云杉木", 17, 1],
    ["桦木", 17, 2],
    ["丛林木", 17, 3],
    ["金合欢木", 17, 4],
    ["黑森林木", 17, 5],
    ["树叶", 18, 0],
    ["松树叶", 18, 1],
    ["桦树叶", 18, 2],
    ["丛林树叶", 18, 3],
    ["金合欢树叶", 161, 0],
    ["黑橡树叶", 161, 1],
    ["玻璃", 20, 0],
    ["青金石块", 22, 0],
    ["沙石", 24, 0],
    ["条纹沙石", 24, 1],
    ["平滑沙石", 24, 2],
    ["白色羊毛", 35, 0],
    ["橙色羊毛", 35, 1],
    ["紫红羊毛", 35, 2],
    ["淡蓝色羊毛", 35, 3],
    ["黄色羊毛", 35, 4],
    ["浅绿色羊毛", 35, 5],
    ["粉红色羊毛", 35, 6],
    ["灰色羊毛", 35, 7],
    ["浅灰色羊毛", 35, 8],
    ["青色羊毛", 35, 9],
    ["紫色羊毛", 35, 10],
    ["蓝色羊毛", 35, 11],
    ["棕色羊毛", 35, 12],
    ["深绿色羊毛", 35, 13],
    ["红色羊毛", 35, 14],
    ["黑色羊毛", 35, 15],
    ["黄金块", 41, 0],
    ["铁块", 42, 0],
    ["双石台阶", 43, 0],
    ["双沙石台阶", 43, 1],
    ["双木台阶", 43, 2],
    ["双鹅卵石台阶", 43, 3],
    ["双红砖台阶", 43, 4],
    ["双石台阶", 44, 0],
    ["沙石台阶", 44, 1],
    ["木制台阶", 44, 2],
    ["鹅软石台阶", 44, 3],
    ["红砖台阶", 44, 4],
    ["石砖台阶", 44, 5],
    ["石台阶", 44, 6],
    ["石英台阶", 44, 7],
    ["砖块", 45, 0],
    ["TNT", 46, 0],
    ["书架", 47, 0],
    ["苔石", 48, 0],
    ["黑曜石", 49, 0],
    ["刷怪笼", 52, 0],
    ["橡木楼梯", 53, 0],
    ["箱子", 54, 0],
    ["工作台", 58, 0],
    ["耕地", 60, 0],
    ["鹅卵石楼梯", 67, 0],
    ["雪", 78, 0],
    ["雪块", 79, 0],
    ["冰块", 80, 0],
    ["地狱岩", 87, 0],
    ["隐形基岩", 95, 0],
    ["玻璃", 102, 0],
    ["石楼梯砖", 109, 0],
    ["地狱楼梯砖", 114, 0],
    ["沙石楼梯", 128, 0],
    ["云杉楼梯", 134, 0],
    ["桦树楼梯", 135, 0],
    ["丛林楼梯", 136, 0],
    ["石英楼梯", 156, 0],
    ["橡木板", 158, 0],
    ["云杉板", 158, 1],
    ["白桦板", 158, 2],
    ["丛林板", 158, 3],
    ["白色地毯", 171, 0],
    ["橙色地毯", 171, 1],
    ["品红色地毯", 171, 2],
    ["淡蓝色地毯", 171, 3],
    ["黄色地毯", 171, 4],
    ["黄绿色地毯", 171, 5],
    ["粉红色地毯", 171, 6],
    ["灰色地毯", 171, 7],
    ["淡灰色地毯", 171, 8],
    ["青色地毯", 171, 9],
    ["紫色地毯", 171, 10],
    ["蓝色地毯", 171, 11],
    ["棕色地毯", 171, 12],
    ["绿色地毯", 171, 13],
    ["红色地毯", 171, 14],
    ["黑色地毯", 171, 15],
    ["故障土", 253, 0],
    ["故障叶", 254, 0],
    ["故障石", 255, 0]
]
var tools = [
    ["打火石", 259, 0],
    ["弓", 261, 0],
    ["箭", 262, 0],
    ["剪刀", 359, 0],
    ["工作台", 58, 0],
    ["切石机", 245, 0],
    ["箱子", 54, 0],
    ["熔炉", 61, 0],
    ["燃烧的炉", 61, 4],
    ["钻石剑", 276, 0],
    ["钻石铲", 277, 0],
    ["钻石镐", 278, 0],
    ["钻石锄头", 293, 0],
    ["钻石斧", 279, 0],
    ["黄金剑", 283, 0],
    ["金铲", 284, 0],
    ["金镐", 285, 0],
    ["金锄", 294, 0],
    ["金斧", 286, 0],
    ["铁剑", 267, 0],
    ["铁铲", 256, 0],
    ["铁镐", 257, 0],
    ["铁锄", 292, 0],
    ["铁斧", 258, 0],
    ["石剑", 272, 0],
    ["石铲", 273, 0],
    ["石镐", 274, 0],
    ["石锄", 291, 0],
    ["石斧", 275, 0],
    ["木剑", 268, 0],
    ["木铲", 269, 0],
    ["木镐", 270, 0],
    ["木锄", 290, 0],
    ["木斧", 271, 0],
    ["皮革头盔", 298, 0],
    ["皮革胸甲", 299, 0],
    ["皮革护腿", 300, 0],
    ["皮革靴子", 301, 0],
    ["锁链头盔", 302, 0],
    ["锁链胸甲", 303, 0],
    ["锁链护腿", 304, 0],
    ["锁链靴子", 305, 0],
    ["铁头盔", 306, 0],
    ["铁胸甲", 307, 0],
    ["铁护腿", 308, 0],
    ["铁靴子", 309, 0],
    ["钻石头盔", 310, 0],
    ["钻石胸甲", 311, 0],
    ["钻石护腿", 312, 0],
    ["钻石靴子", 313, 0],
    ["金头盔", 314, 0],
    ["金胸甲", 315, 0],
    ["金护腿", 316, 0],
    ["金靴子", 317, 0]
]
var food = [
    ["南瓜", 86, 0],
    ["苹果", 260, 0],
    ["绿色野菌汤", 282, 0],
    ["面包", 297, 0],
    ["生猪肉", 319, 0],
    ["熟猪排", 320, 0],
    ["蛋糕", 354, 0],
    ["西瓜(块)", 360, 0],
    ["牛肉", 363, 0],
    ["牛排", 364, 0],
    ["生鸡肉", 365, 0],
    ["熟鸡肉", 366, 0],
    ["胡萝卜", 391, 0],
    ["土豆", 392, 0],
    ["焗马铃薯", 393, 0],
    ["南瓜馅饼", 400, 0],
    ["甜菜", 457, 0],
    ["甜菜根汤", 459, 0]
]
var dyes = [
    ["墨袋", 351, 0],
    ["红玫瑰", 351, 1],
    ["仙人掌绿", 351, 2],
    ["可可豆", 351, 3],
    ["青金石", 351, 4],
    ["紫色", 351, 5],
    ["青色", 351, 6],
    ["灰色", 351, 7],
    ["灰色", 351, 8],
    ["粉红色", 351, 9],
    ["石灰", 351, 10],
    ["蒲公英黄", 351, 11],
    ["蓝色", 351, 12],
    ["品红", 351, 13],
    ["橙色", 351, 14],
    ["骨头", 351, 15]
]
var oreitems = [
    ["金矿", 14, 0],
    ["铁矿石", 15, 0],
    ["煤矿", 16, 0],
    ["青金石矿", 21, 0],
    ["钻石矿", 56, 0],
    ["红石矿", 73, 0],
    ["发光的红石矿", 74, 0],
    ["粘土块", 82, 0],
    ["绿宝石矿", 129, 0],
    ["绿宝石块", 133, 0],
    ["煤块", 173, 0],
    ["煤炭", 263, 0],
    ["木炭", 263, 1],
    ["钻石", 264, 0],
    ["铁锭", 265, 0],
    ["金锭", 266, 0],
    ["燧石", 318, 0],
    ["萤石粉", 348, 0],
    ["红石粉", 331, 0],
    ["绿宝石", 388, 0],
    ["青金石", 351, 4]
]
var spawn = [
    ["鸡", 383, 10],
    ["牛", 383, 11],
    ["猪", 383, 12],
    ["羊", 383, 13],
    ["狼", 383, 14],
    ["村民", 383, 15],
    ["蘑菇牛", 383, 16],
    ["僵尸", 383, 32],
    ["苦力怕", 383, 33],
    ["骷髅弓手", 383, 34],
    ["蜘蛛", 383, 35],
    ["僵尸猪人", 383, 36],
    ["史莱姆", 383, 37],
    ["末影人", 383, 38],
    ["蠹虫", 383, 39]
]
var crop = [
    ["橡树树苗", 6, 0],
    ["云杉树苗", 6, 1],
    ["桦树苗", 6, 2],
    ["丛林树苗", 6, 3],
    ["合金欢树苗", 6, 4],
    ["黑森林苗", 6, 5],
    ["褐色蘑菇", 39, 0],
    ["红色蘑菇", 40, 0],
    ["小麦", 296, 0],
    ["小麦种子", 295, 0],
    ["糖", 353, 0],
    ["南瓜", 361, 0],
    ["西瓜种子", 362, 0],
    ["甜菜种子", 458, 0]
]
var miscellaneous = [
    ["水", 8, 0],
    ["静止的水", 9, 0],
    ["熔岩", 10, 0],
    ["静止的熔岩", 11, 0],
    ["床(方块)", 26, 0],
    ["电轨", 27, 0],
    ["蜘蛛网", 30, 0],
    ["灌木", 31, 0],
    ["草", 31, 1],
    ["死灌木", 32, 0],
    ["火把", 50, 0],
    ["火", 51, 0],
    ["梯子", 65, 0],
    ["轨道", 66, 0],
    ["无字木牌(方块)", 68, 0],
    ["无字木牌", 63, 15],
    ["篱笆", 85, 0],
    ["天窗", 96, 0],
    ["西瓜杆", 105, 0],
    ["篱笆门", 107, 0],
    ["下界反应核", 247, 0],
    ["木棍", 280, 0],
    ["碗", 281, 0],
    ["蜘蛛丝", 287, 0],
    ["羽毛", 288, 0],
    ["火药", 289, 0],
    ["告示牌", 323, 0],
    ["木门", 324, 0],
    ["桶", 325, 0],
    ["牛奶桶", 325, 1],
    ["一桶水", 325, 8],
    ["熔岩桶", 325, 10],
    ["矿车", 328, 0],
    ["鞍", 329, 0],
    ["门", 330, 0],
    ["雪球", 332, 0],
    ["红砖", 336, 0],
    ["粘土粉末", 337, 0],
    ["纸", 339, 0],
    ["书", 340, 0],
    ["史莱姆球", 341, 0],
    ["鸡蛋", 344, 0],
    ["皮革", 334, 0],
    ["指南针", 345, 0],
    ["时钟", 347, 0],
    ["骨头", 352, 0],
    ["床", 355, 0],
    ["剪刀", 359, 0],
    ["地狱砖", 405, 0],
    ["地狱石英", 406, 0],
    ["摄像机", 456, 0]
]
var cat = [
    [newer, "自定义物品"],
    [block, "方块"],
    [oreitems, "矿物"],
    [tools, "工具&装备"],
    [food, "食物"],
    [spawn, "生物蛋"],
    [crop, "农作物"],
    [dyes, "染色物质"],
    [miscellaneous, "杂项"]
]
var life = [
    ["鸡", 10, "关"],
    ["牛", 11, "关"],
    ["猪", 12, "关"],
    ["羊", 13, "关"],
    ["狼", 14, "关"],
    ["村民", 15, "关"],
    ["蘑菇牛", 16, "关"],
    ["僵尸", 32, "关"],
    ["苦力怕", 33, "关"],
    ["骷髅弓手", 34, "关"],
    ["蜘蛛", 35, "关"],
    ["僵尸猪人", 36, "关"],
    ["史莱姆", 37, "关"],
    ["末影人", 38, "关"],
    ["蠹虫", 39, "关"],
    ["玩家", 63, "关"],
    ["掉落的方块", 64, "关"],
    ["点燃的TNT", 65, "关"],
    ["下落的方块", 66, "关"],
    ["弓箭", 80, "关"],
    ["雪球", 81, "关"],
    ["鸡蛋", 82, "关"],
    ["画", 83, "关"],
    ["矿车", 84, "关"]
]
var life2 = new Array(),
    lifeall = new Array,
    banplayer2 = new Array(),
    banplayer3 = new Array(),
    lifeL, banallst = 0
var touchmaze = new Array()
var catchwindow = [1, 0]
var mathfloor = -1

function newLevel() {
    window()
    newerL = ModPE.readData("newerL")
    lifeL = ModPE.readData("lifeL")
    firstplay = ModPE.readData("firstplay")
    if (firstplay != 1) {
        speed1 = 0.6
        ModPE.saveData("speed1", speed1)
        event1 = 1
        ModPE.saveData("event1", event1)
        weaponv = 30
        ModPE.saveData("weaponv", weaponv)
        fire2 = 1
        ModPE.saveData("fire2", fire2)
        fire3 = 5
        ModPE.saveData("fire3", fire3)
        fire4 = 1
        ModPE.saveData("fire4", fire4)
        pointset = 2
        ModPE.saveData("pointset", pointset)
        tiejianshuangji = 1
        ModPE.saveData("tiejianshuangji", tiejianshuangji)
        entityweaponid = 80
        ModPE.saveData("entityweaponid", entityweaponid)
        firstplay++
        ModPE.saveData("firstplay", firstplay)
        SDpx = 0, SDpz = 0, SDX = 0, SDZ = 0, SDs = 0, SD = 0, SDt = 600, speed1 = 0.6
        fire2 = 1, fire3 = 1, fire4 = 5, eventweapon = 0, entityweapon = new Array(), weaponvx = new Array(), weaponvy = new Array(), weaponvz = new Array(), entityweaponid = 80, weaponexplode1 = 0, weaponexplode2 = 0, weaponexplode3 = 0, weaponexplode4 = 0, weaponexplode5 = 0, weaponexplode6 = 0, weaponv = 6, weaponyk = 0, weapontp = 0, weaponfly = 0, weaponfkd = 1, tw = -1, tws = -1
        clientMessage("欢迎使用创世神,请阅读帮助以便后期使用")
        clientMessage("建筑党请谨慎开夜视,恢复正常亮度有点麻烦")
    }
    for (var i = 0; i < newerL; i++) {
        cat[0][0][i] = new Array()
        cat[0][0][i][0] = ModPE.readData("newerA" + i)
        cat[0][0][i][1] = ModPE.readData("newerB" + i)
        cat[0][0][i][2] = ModPE.readData("newerC" + i)
    }
    for (var i = 0; i < lifeL; i++) {
        life[i] = new Array()
        life[i][0] = ModPE.readData("lifeA" + i)
        life[i][1] = ModPE.readData("lifeB" + i)
        life[i][2] = ModPE.readData("lifeC" + i)
    }
    for (i in life) {
        life2[i] = new Array()
    }
    entityweapon = new Array()
    weaponvx = new Array()
    weaponvy = new Array()
    weaponvz = new Array()
    dktimes = 1
    tw = -1
    tws - 1
    pointset = ModPE.readData("pointset")
    dk = ModPE.readData("dk")
    sc1 = ModPE.readData("sc1")
    sc2 = ModPE.readData("sc2")
    quick1 = ModPE.readData("quick1")
    quick2 = ModPE.readData("quick2")
    event1 = ModPE.readData("event1")
    event2 = ModPE.readData("event2")
    event3 = ModPE.readData("event3")
    event4 = ModPE.readData("event4")
    event6 = ModPE.readData("event6")
    event7 = ModPE.readData("event7")
    event8 = ModPE.readData("event8")
    speed1 = ModPE.readData("speed1")
    eventmpitem = ModPE.readData("eventmpitem")
    Mainmode = ModPE.readData("Mainmode")
    banallst = ModPE.readData("banallst")
    exmode = ModPE.readData("exmode")
    tiejianshuangji = ModPE.readData("tiejianshuangji")
    copybufugai = ModPE.readData("copybufugai")
    esetsupermode = ModPE.readData("esetsupermode")
    newerL1 = ModPE.readData("newerL1")
    newerL2 = ModPE.readData("newerL2")
    newerL3 = ModPE.readData("newerL3")
    newerL4 = ModPE.readData("newerL4")
    day = ModPE.readData("day")
    fire2 = ModPE.readData("fire2")
    fire3 = ModPE.readData("fire3")
    fire4 = ModPE.readData("fire4")
    xikuang = ModPE.readData("xikuang")
    tunkuang = ModPE.readData("tunkuang")
    superminerlight1 = ModPE.readData("superminerlight1")
    superminersee1 = ModPE.readData("superminersee1")
    superminersearch1 = ModPE.readData("superminersearch1")
    flymode = ModPE.readData("flymode")
    flymode2 = ModPE.readData("flymode2")
    killitem = ModPE.readData("killitem")
    weaponfkd = ModPE.readData("weaponfkd")
    eventweapon = ModPE.readData("eventweapon")
    entityweaponid = ModPE.readData("entityweaponid")
    weaponexplode1 = ModPE.readData("weaponexplode1")
    weaponexplode2 = ModPE.readData("weaponexplode2")
    weaponexplode3 = ModPE.readData("weaponexplode3")
    weaponexplode4 = ModPE.readData("weaponexplode4")
    weaponexplode5 = ModPE.readData("weaponexplode5")
    weaponexplode6 = ModPE.readData("weaponexplode6")
    weaponyk = ModPE.readData("weaponyk")
    weapontp = ModPE.readData("weapontp")
    weaponv = ModPE.readData("weaponv")
    weaponfly = ModPE.readData("weaponfly")
    eventagain = ModPE.readData("eventagain")
    if (sc1 != 1 && sc1 != 2) {
        sc1 = 1
    }
    if (sc2 != 1 && sc2 != 2 && sc2 != 3) {
        sc2 = 1
    }
    if (event4 == 1) {
        Block.setLightLevel(0, 8)
        Block.setLightLevel(0, 9)
        Block.setLightLevel(0, 14)
    }
    if (superminerlight1 == 1) {
        for (i in inputore) {
            if (inputore[i][5] == 1) {
                Block.setLightLevel(13, inputore[i][1])
            }
        }
    }
    if (copybufugai == 1) {
        copybufugai2 = true
    } else {
        copybufugai2 = false
    }
    if (event3 == 1) {
        event32 = true
    } else {
        event32 = false
    }
    if (event7 == 1) {
        event72 = true
    } else {
        event72 = false
    }
    if (xikuang == 1) {
        xikuang2 = true
    } else {
        xikuang2 = false
    }
    if (tunkuang == 1) {
        tunkuang2 = true
    } else {
        tunkuang2 = false
    }
    if (superminerlight1 == 1) {
        superminerlight2 = true
    } else {
        superminerlight2 = false
    }
    if (superminersee1 == 1) {
        superminersee2 = true
    } else {
        superminersee2 = false
    }
    if (superminersearch1 == 1) {
        superminersearch2 = true
    } else {
        superminersearch2 = false
    }
    if (Level.getGameMode() == 0 && flymode2 == 0) {
        Player.setCanFly(false)
        Player.setFlying(false)
    } else {
        Player.setCanFly(true)
    }
    if (eventweapon == 1 && openWindow2 == null) {
        superweapon()
    }
    if (eventagain == 1 && openWindow3 == null) {
        again()
    }
    if (eventmpitem == 1 && openWindow5 == null) {
        mpitem()
    }
    if (flymode >= 1 && openWindow6 == null) {
        flyingmode()
    }
}

function leaveGame() {
    dismissmenu()
    px1 = 0
    py1 = 0
    pz1 = 0
    px2 = 0
    py2 = 0
    pz2 = 0
    px3 = 0
    py3 = 0
    pz3 = 0
    t = -1
    test = 0
    tset = -1
    quick3 = 0
    yidongguangyuan = 0
    life2 = new Array()
    banplayer2 = new Array()
    newerL = cat[0][0].length
    ModPE.saveData("newerL", newerL)
    for (var i = 0; i < newerL; i++) {
        ModPE.saveData("newerA" + i, cat[0][0][i][0])
        ModPE.saveData("newerB" + i, cat[0][0][i][1])
        ModPE.saveData("newerC" + i, cat[0][0][i][2])
    }
    lifeL = life.length
    ModPE.saveData("lifeL", lifeL)
    for (var i = 0; i < lifeL; i++) {
        ModPE.saveData("lifeA" + i, life[i][0])
        ModPE.saveData("lifeB" + i, life[i][1])
        ModPE.saveData("lifeC" + i, life[i][2])
    }
    ModPE.saveData("pointset", pointset)
    ModPE.saveData("dk", dk)
    ModPE.saveData("sc1", sc1)
    ModPE.saveData("sc2", sc2)
    ModPE.saveData("quick1", quick1)
    ModPE.saveData("quick2", quick2)
    ModPE.saveData("event1", event1)
    ModPE.saveData("event2", event2)
    ModPE.saveData("event3", event3)
    ModPE.saveData("event4", event4)
    ModPE.saveData("event6", event6)
    ModPE.saveData("event7", event7)
    ModPE.saveData("event8", event8)
    ModPE.saveData("speed1", speed1)
    ModPE.saveData("eventmpitem", eventmpitem)
    ModPE.saveData("Mainmode", Mainmode)
    ModPE.saveData("banallst", banallst)
    ModPE.saveData("exmode", exmode)
    ModPE.saveData("tiejianshuangji", tiejianshuangji)
    ModPE.saveData("copybufugai", copybufugai)
    ModPE.saveData("esetsupermode", esetsupermode)
    ModPE.saveData("newerL1", newerL1)
    ModPE.saveData("newerL2", newerL2)
    ModPE.saveData("newerL3", newerL3)
    ModPE.saveData("newerL4", newerL4)
    ModPE.saveData("day", day)
    ModPE.saveData("fire2", fire2)
    ModPE.saveData("fire3", fire3)
    ModPE.saveData("fire4", fire4)
    ModPE.saveData("xikuang", xikuang)
    ModPE.saveData("tunkuang", tunkuang)
    ModPE.saveData("superminerlight1", superminerlight1)
    ModPE.saveData("superminersee1", superminersee1)
    ModPE.saveData("superminersee1", superminersee1)
    ModPE.saveData("flymode", flymode)
    ModPE.saveData("flymode2", flymode2)
    ModPE.saveData("killitem", killitem)
    ModPE.saveData("weaponfkd", weaponfkd)
    ModPE.saveData("eventweapon", eventweapon)
    ModPE.saveData("entityweaponid", entityweaponid)
    ModPE.saveData("weaponexplode1", weaponexplode1)
    ModPE.saveData("weaponexplode2", weaponexplode2)
    ModPE.saveData("weaponexplode3", weaponexplode3)
    ModPE.saveData("weaponexplode4", weaponexplode4)
    ModPE.saveData("weaponexplode5", weaponexplode5)
    ModPE.saveData("weaponexplode6", weaponexplode6)
    ModPE.saveData("weaponyk", weaponyk)
    ModPE.saveData("weapontp", weapontp)
    ModPE.saveData("weaponfly", weaponfly)
    ModPE.saveData("weaponv", weaponv)
    ModPE.saveData("eventagain", eventagain)
    if (newerL3 - 1 > 0 && newerL4 - 1 > 0) {
        for (var i = newerL3 - 1; i <= newerL4 - 1; i++) {
            Player.addItemCreativeInv(cat[0][0][i][1], 1, cat[0][0][i][2])
        }
    }
}

function levelEventHook(player, eventType, x, y, z, data) {
    if (event1 == 1) {
        if (eventType == 2001 && data == 2) {
            ex = x, ey = y, ez = z
            set = 1
        }
    }
}

function entityAddedHook(entity) {
    if (banplayer2.length > 0) {} else {
        banplayer2 = new Array()
        pe = Player.getEntity()
    }
    for (i in life) {
        if (Entity.getEntityTypeId(entity) == life[i][1]) {
            for (var iii = 0; iii <= life.length; iii++) {
                life2[iii] = new Array()
            }
            life2[i][life2[i].length] = entity
            if (life[i][2] == "开") {
                for (ii in life2[i]) {
                    Entity.remove(life2[i][ii])
                }
            }
        }
    }
    if (Player.isPlayer(entity)) {
        banplayer2[banplayer2.length] = entity
    } else {
        lifeall[lifeall.length] = entity
    }
    if (banallst == 1) {
        for (i in lifeall) {
            if (lifeall[i] == entity) {
                Entity.remove(entity)
            }
        }
    }
}

function entityRemovedHook(entity) {
    for (var i = 0; i < entityweapon.length; i++) {
        if (entity == entityweapon[i]) {
            entityweapon.splice(i, 1)
            weaponvx.splice(i, 1)
            weaponvy.splice(i, 1)
            weaponvz.splice(i, 1)
        }
    }
    if (yidongguangyuan == 2 && entity == yidongguangyuan2) {
        yidongguangyuan2 = Level.spawnMob(px - 1 * Math.sin((getYaw()) / 180 * Math.PI) * 5, py - 1 * Math.sin((getPitch()) / 180 * Math.PI) * 5 + 2, pz + Math.cos((getYaw()) / 180 * Math.PI) * 5, 81)
    }
    for (i in life) {
        if (Entity.getEntityTypeId(entity) == life[i][1]) {
            for (ii in life2[i]) {
                if (entity == life2[i][ii]) {
                    life2[i].splice(ii, 1)
                }
            }
        }
    }
    for (i in banplayer2) {
        if (entity == banplayer2[i]) {
            banplayer2.splice(i, 1)
        }
    }
}

function attackHook(attacker, victim) {
    if (event3 == 1) {
        preventDefault()
    }
    if (event6 == 1) {
        Entity.setHealth(victim, 1)
        Entity.setFireTicks(victim, 10)
        if (Player.isPlayer(victim)) {
            Entity.setHealth(victim, 0)
        }
    }
    if (Player.getCarriedItem() == killitem) {
        Entity.setHealth(victim, 1)
        Entity.setFireTicks(victim, 10)
        if (Player.isPlayer(victim)) {
            Entity.setHealth(victim, 0)
        }
    }
    if (event7 == 1) {
        clientMessage("此实体ID为:" + Entity.getEntityTypeId(victim) + "剩余生命值:" + Entity.getHealth(victim))
        if (Player.getName(victim) != "Not a player") {
            banplayer2[banplayer2.length] = victim
        }
        for (i in banplayer2)
            if (victim == banplayer2[i]) {
                banplayer2.splice(i, 1)
            }
    }
}

function procCmd(cmd) {
    var Data = cmd.split(" ")
    if (Data[0] == "GUI") {
        window()
        if (eventweapon == 1 && openWindow2 == null) {
            superweapon()
        }
        if (eventagain == 1 && openWindow3 == null) {
            again()
        }
        if (eventmpitem == 1 && openWindow5 == null) {
            mpitem()
        }
        if (flymode >= 1 && openWindow6 == null) {
            flyingmode()
        }
        clientMessage("已恢复GUI")
    }
}

function useItem(x, y, z, ii, bi, side, iit2, bit2) {
    if (pointset == 1) {
        if (ii == 267) {
            px1 = x, py1 = y, pz1 = z
            clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
            if (tiejianshuangji == 1) {
                clientMessage("方块id :" + bi + " 特殊值id :" + bit2)
            }
        }
        if (mode3 != -1) {
            if (dk == 1) {
                px1 = x
                py1 = y
                pz1 = z
                blockid1 = ii
                data1 = iit2
                mode = mode3
                mode3 = -1
            }
        }
        if (dk == 2) {
            px1 = x
            py1 = y
            pz1 = z
            blockid1 = ii
            data1 = iit2
            mode = mode2
        }
        t = -1
    }
    if (pointset == 2) {
        if (ii == 267) {
            if (dktimes == 1) {
                px1 = x, py1 = y, pz1 = z
                clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
                dktimes++
            } else if (dktimes == 2) {
                px2 = x, py2 = y, pz2 = z
                clientMessage("设置点2 x :" + px2 + " y :" + py2 + " z :" + pz2)
                dktimes--
                if (tiejianshuangji == 1) {
                    clientMessage("方块id :" + bi + " 特殊值id :" + bit2)
                }
            }
        }
        if (mode3 != -1) {
            if (dk == 1) {
                if (dktimes == 1) {
                    px1 = x
                    py1 = y
                    pz1 = z
                    dktimes++
                    clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
                } else if (dktimes == 2) {
                    px2 = x
                    py2 = y
                    pz2 = z
                    blockid1 = ii
                    data1 = iit2
                    mode = mode3
                    mode3 = -1
                    dktimes = 1
                    clientMessage("设置点2 x :" + px2 + " y :" + py2 + " z :" + pz2)
                }
            }
        }
        if (dk == 2) {
            if (dktimes == 1) {
                px1 = x
                py1 = y
                pz1 = z
                dktimes++
                clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
            } else if (dktimes == 2) {
                px2 = x
                py2 = y
                pz2 = z
                blockid1 = ii
                data1 = iit2
                mode = mode2
                dktimes = 1
                clientMessage("设置点2 x :" + px2 + " y :" + py2 + " z :" + pz2)
            }
        }
        t = -1
    }
    if (pointset == 3) {
        if (mode3 != -1) {
            if (dk == 1) {
                if (dktimes == 1) {
                    px1 = x
                    py1 = y
                    pz1 = z
                    dktimes++
                    clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
                } else if (dktimes == 2) {
                    px2 = x
                    py2 = y
                    pz2 = z
                    dktimes++
                    clientMessage("设置点2 x :" + px2 + " y :" + py2 + " z :" + pz2)
                } else if (dktimes == 3) {
                    px3 = x
                    py3 = y
                    pz3 = z
                    blockid1 = ii
                    data1 = iit2
                    mode = mode3
                    mode3 = -1
                    dktimes = 1
                    clientMessage("设置点3 x :" + px3 + " y :" + py3 + " z :" + pz3)
                }
            }
        }
        if (dk == 2) {
            if (dktimes == 1) {
                px1 = x
                py1 = y
                pz1 = z
                dktimes++
                clientMessage("设置点1 x:" + px1 + " y:" + py1 + " z:" + pz1)
            } else if (dktimes == 2) {
                px2 = x
                py2 = y
                pz2 = z
                dktimes++
                clientMessage("设置点2 x:" + px2 + " y:" + py2 + " z:" + pz2)
            } else if (dktimes == 3) {
                px3 = x
                py3 = y
                pz3 = z
                blockid1 = ii
                data1 = iit2
                mode = mode2
                dktimes = 1
                clientMessage("设置点3 x :" + px3 + " y :" + py3 + " z :" + pz3)
            }
        }
        t = -1
    }
    if (quick3 > 0) {
        for (var xq = 1; xq <= quick3; xq++)
            if (quick2 == 1) {
                if (quick1 == 1) {
                    setTile(x, y - xq, z, ii, iit2)
                }
                if (quick1 == 2) {
                    setTile(x - xq, y, z, ii, iit2)
                }
                if (quick1 == 3) {
                    setTile(x, y, z - xq, ii, iit2)
                }
            }
        if (quick2 == 2) {
            if (quick1 == 1) {
                setTile(x, y + xq, z, ii, iit2)
            }
            if (quick1 == 2) {
                setTile(x + xq, y, z, ii, iit2)
            }
            if (quick1 == 3) {
                setTile(x, y, z + xq, ii, iit2)
            }
        }
    }
    if (event8 == 1 && ii == 323) {
        switch (side) {
            case 0:
                y -= 1
                break
            case 1:
                y += 1;
                setTile(x, y, z, 63)
                break;
            case 2:
                z -= 1;
                setTile(x, y, z, 68, 2)
                break
            case 3:
                z += 1;
                setTile(x, y, z, 68, 3)
                break
            case 4:
                x -= 1;
                setTile(x, y, z, 68, 4)
                break
            case 5:
                x += 1;
                setTile(x, y, z, 68, 5)
                break
        }
    }
}

function openMenu() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 85), dip2px(ctx, 35))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var title = new android.widget.TextView(ctx)
        title.setTextSize(28)
        title.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        title.setText("创世神")
        title.setLayoutParams(textParams)
        layout.addView(title)
        var stitle = new android.widget.TextView(ctx)
        stitle.setTextSize(14)
        stitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        stitle.setText("by " + editor)
        stitle.setLayoutParams(textParams)
        layout.addView(stitle)
        var button = new android.widget.Button(ctx)
        button.setText("基本几何")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                geometrymenu()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("自定义几何")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                Fmenu()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("复制粘贴")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                copythat()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("编辑世界")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                bjsj()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("编辑实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                bjst()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("特殊功能")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                particular()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("快速放置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                moremenu1()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("超级矿工")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminer()
            }
        }))
        layout.addView(button)
        var buttondk = new android.widget.Button(ctx)
        if (dk == 0) {
            buttondk.setText("定点生成")
        } else if (dk == 1) {
            buttondk.setText("点击生成")
        } else if (dk == 2) {
            buttondk.setText("批量生成")
        }
        buttondk.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (dk > 0) {
                    px1 = null
                    py1 = null
                    pz1 = null
                    px2 = null
                    py2 = null
                    pz2 = null
                    px3 = null
                    py3 = null
                    pz3 = null
                }
                dktimes = 1
                if (dk == 0) {
                    dk++
                    buttondk.setText("点击生成")
                } else if (dk == 1) {
                    dk++
                    buttondk.setText("批量生成")
                } else if (dk == 2) {
                    dk = 0
                    buttondk.setText("定点生成")
                }
            }
        }))
        layout.addView(buttondk)
        var buttonmpitem = new android.widget.Button(ctx)
        if (eventmpitem == 0) {
            buttonmpitem.setText("添加物品(关)")
        } else if (eventmpitem == 1) {
            buttonmpitem.setText("添加物品(开)")
        }
        buttonmpitem.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (eventmpitem == 0) {
                    eventmpitem++
                    mpitem()
                    buttonmpitem.setText("添加物品(开)")
                } else if (eventmpitem == 1) {
                    eventmpitem--
                    dismissmpitem()
                    buttonmpitem.setText("添加物品(关)")
                }
            }
        }))
        layout.addView(buttonmpitem)
        var buttonsuperweapon = new android.widget.Button(ctx)
        if (eventweapon == 0) {
            buttonsuperweapon.setText("超级武器(关)")
        } else if (eventweapon == 1) {
            buttonsuperweapon.setText("超级武器(开)")
        }
        buttonsuperweapon.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (eventweapon == 1) {
                    dismisssuperweapon()
                    eventweapon--
                    buttonsuperweapon.setText("超级武器(关)")
                } else if (eventweapon == 0) {
                    entityweapon = new Array()
                    weaponvx = new Array()
                    weaponvy = new Array()
                    weaponvz = new Array()
                    superweapon()
                    eventweapon++
                    buttonsuperweapon.setText("超级武器(开)")
                }
            }
        }))
        layout.addView(buttonsuperweapon)
        var buttonagain = new android.widget.Button(ctx)
        if (eventagain == 0) {
            buttonagain.setText("再次生成(关)")
        } else if (eventagain == 1) {
            buttonagain.setText("再次生成(开)")
        }
        buttonagain.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (eventagain == 1) {
                    dismissagain()
                    eventagain--
                    buttonagain.setText("再次生成(关)")
                } else if (eventagain == 0) {
                    again()
                    eventagain++
                    buttonagain.setText("再次生成(开)")
                }
            }
        }))
        layout.addView(buttonagain)
        var button = new android.widget.Button(ctx)
        button.setText("定时生成(循环)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputdssc()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("更多帮助")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputhelp()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("更多链接")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304881()
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function geometrymenu() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonpointset = new android.widget.Button(ctx)
        if (pointset == 1) {
            buttonpointset.setText("定点模式(一)")
        } else if (pointset == 2) {
            buttonpointset.setText("定点模式(二)")
        }
        buttonpointset.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (pointset == 1) {
                    pointset++
                    buttonpointset.setText("定点模式(二)")
                } else if (pointset == 2) {
                    pointset--
                    buttonpointset.setText("定点模式(一)")
                }
            }
        }))
        layout.addView(buttonpointset)
        var buttonpointsetsc1 = new android.widget.Button(ctx)
        if (sc1 == 1) {
            buttonpointsetsc1.setText("空心")
        } else if (sc1 == 2) {
            buttonpointsetsc1.setText("实心")
        }
        buttonpointsetsc1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (sc1 == 1) {
                    sc1++
                    buttonpointsetsc1.setText("实心")
                } else if (sc1 == 2) {
                    sc1--
                    buttonpointsetsc1.setText("空心")
                }
            }
        }))
        layout.addView(buttonpointsetsc1)
        var buttonpointsetsc2 = new android.widget.Button(ctx)
        if (sc2 == 1) {
            buttonpointsetsc2.setText("Y")
        } else if (sc2 == 2) {
            buttonpointsetsc2.setText("X")
        } else if (sc2 == 3) {
            buttonpointsetsc2.setText("Z")
        }
        buttonpointsetsc2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (sc2 == 1) {
                    sc2++
                    buttonpointsetsc2.setText("X")
                } else if (sc2 == 2) {
                    sc2++
                    buttonpointsetsc2.setText("Z")
                } else if (sc2 == 3) {
                    sc2 = 1
                    buttonpointsetsc2.setText("Y")
                }
            }
        }))
        layout.addView(buttonpointsetsc2)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("一点菜单")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("球体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(1)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆柱")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrh1(2)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆锥")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrh2(3)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆台")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrhc(4)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("四棱柱")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrh1(5)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("四棱锥")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrh2(6)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("四棱台")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrhc(7)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆环")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrr(9)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(17)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("椭圆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputabc(41)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("椭球")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputabc(42)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("正三角形")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(44)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("半圆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh3(46)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("1/4圆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh3(47)
            }
        }))
        layout.addView(button)
        var twopointtitle = new android.widget.TextView(ctx)
        twopointtitle.setTextSize(18)
        twopointtitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        twopointtitle.setText("两点菜单")
        twopointtitle.setLayoutParams(textParams)
        layout.addView(twopointtitle)
        var button = new android.widget.Button(ctx)
        button.setText("长方体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh(8)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("长方体(框架)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh(45)
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function superweaponmenu() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonpointset = new android.widget.Button(ctx)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("超级武器")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var buttonsuperweapon = new android.widget.Button(ctx)
        if (eventweapon == 0) {
            buttonsuperweapon.setText("超级武器(关)")
        } else if (eventweapon == 1) {
            buttonsuperweapon.setText("超级武器(开)")
        }
        buttonsuperweapon.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (eventweapon == 1) {
                    dismisssuperweapon()
                    eventweapon--
                    buttonsuperweapon.setText("超级武器(关)")
                } else if (eventweapon == 0) {
                    entityweapon = new Array()
                    weaponvx = new Array()
                    weaponvy = new Array()
                    weaponvz = new Array()
                    superweapon()
                    eventweapon++
                    buttonsuperweapon.setText("超级武器(开)")
                }
            }
        }))
        layout.addView(buttonsuperweapon)
        if (test == 1) {
            var button = new android.widget.Button(ctx)
            button.setText("机枪")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    weapon(1)
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("小型武器")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    weapon(2)
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("大型武器")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    weapon(3)
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("死亡圣器")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    weapon(4)
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("决战兵器")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    weapon(5)
                }
            }))
            layout.addView(button)
        }
        var button = new android.widget.Button(ctx)
        button.setText("武器设置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputweaponset()
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function weapon(numweapon) {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonpointset = new android.widget.Button(ctx)
        var onepointtitle1 = new android.widget.TextView(ctx)
        if (numweapon == 1) {
            onepointtitle1.setTextSize(18)
            onepointtitle1.setText("机枪")
            onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
            onepointtitle1.setLayoutParams(textParams)
            layout.addView(onepointtitle1)
        }
        if (numweapon == 2) {
            onepointtitle1.setTextSize(18)
            onepointtitle1.setText("小型武器")
            onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
            onepointtitle1.setLayoutParams(textParams)
            layout.addView(onepointtitle1)
        }
        if (numweapon == 3) {
            onepointtitle1.setTextSize(18)
            onepointtitle1.setText("大型武器")
            onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
            onepointtitle1.setLayoutParams(textParams)
            layout.addView(onepointtitle1)
        }
        if (numweapon == 4) {
            onepointtitle1.setTextSize(18)
            onepointtitle1.setText("死亡圣器")
            onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
            onepointtitle1.setLayoutParams(textParams)
            layout.addView(onepointtitle1)
        }
        if (numweapon == 5) {
            onepointtitle1.setTextSize(18)
            onepointtitle1.setText("决战兵器")
            onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
            onepointtitle1.setLayoutParams(textParams)
            layout.addView(onepointtitle1)
        }
        if (numweapon == 1) {
            var button = new android.widget.Button(ctx)
            button.setText("手枪")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("M4A1")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 10
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("狙击枪")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("机关枪")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 50
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("火箭筒")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
        }
        if (numweapon == 2) {
            var button = new android.widget.Button(ctx)
            button.setText("TNT迫击炮")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 5
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("白磷弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 5
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("地对空导弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("干冰弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("熔岩弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
        }
        if (numweapon == 3) {
            var button = new android.widget.Button(ctx)
            button.setText("核弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("生化弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("中子弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("反物质弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("生化弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("洲际导弹")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
        }
        if (numweapon == 4) {
            var button = new android.widget.Button(ctx)
            button.setText("黑暗雷破")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("人道毁灭")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("终末的倒计时")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("末界之门")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("伪神的降临")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("HIM的降临")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    clientMessage("启动器函数如果修复了,将会添加此功能")
                }
            }))
            layout.addView(button)
        }
        if (numweapon == 5) {
            var button = new android.widget.Button(ctx)
            button.setText("神之恩惠")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("神之祝福")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("圣战!")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("传说?!")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
            var button = new android.widget.Button(ctx)
            button.setText("创世神的降临")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    fire2 = 1
                }
            }))
            layout.addView(button)
        }
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function changeitem() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("添加物品")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("(更改/添加)物品")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputchangeitemid()
            }
        }))
        layout.addView(button)
        for (i in cat)
            makebutton1(ctx, layout, i)
        var button = new android.widget.Button(ctx)
        button.setText("一键添加")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (newerL1 > 0 && newerL2 > 0 && newerL1 <= newerL2) {
                    for (var i = newerL1 - 1; i <= newerL2 - 1; i++)
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(pe, cat[0][0][i][1], 64, cat[0][0][i][2])
                        }
                    if (Level.getGameMode() == 0) {
                        Player.addItemInventory(cat[0][0][i][1], 64, cat[0][0][i][2])
                    }
                } else {
                    clientMessage("请设置需要从自定义物品一键添加的物品!")
                }
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("一键装X")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                var zhuangB = [
                    ["钻石剑", 276, 0],
                    ["钻石铲", 277, 0],
                    ["钻石镐", 278, 0],
                    ["钻石锄头", 293, 0],
                    ["钻石斧", 279, 0],
                    ["指南针", 345, 0],
                    ["时钟", 347, 0],
                    ["牛排", 364, 0],
                    ["工作台", 58, 0],
                    ["熔炉", 61, 0],
                    ["燃烧的炉", 61, 4],
                    ["床", 355, 0],
                    ["火把", 50, 0],
                    ["橡木板", 5, 0],
                    ["木头", 17, 0],
                    ["木头", 17, 1],
                    ["木头", 17, 2],
                    ["弓", 261, 0],
                    ["箭", 262, 0],
                    ["剪刀", 359, 0],
                    ["打火石", 259, 0],
                    ["TNT", 46, 0],
                    ["铁剑", 267, 0]
                ]
                Player.setArmorSlot(0, 310, 0)
                Player.setArmorSlot(1, 311, 0)
                Player.setArmorSlot(2, 312, 0)
                Player.setArmorSlot(3, 313, 0)
                for (i in zhuangB) {
                    if (Level.getGameMode() == 1) {
                        Entity.setCarriedItem(pe, zhuangB[i][1], 64, zhuangB[i][2])
                    }
                    if (Level.getGameMode() == 0) {
                        Player.addItemInventory(zhuangB[i][1], 64, zhuangB[i][2])
                    }
                }
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("批量删除自定义物品")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputchangeitemdelete()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("自定义物品顺序对调")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputchangeitemchange()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("一键添加-设置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputchangeitemset()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("添加自定义物品到创造")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputchangeitemaddcreative()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("清空背包")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                for (var i2 = 0; i2 <= 44; i2++)
                    Player.clearInventorySlot(i2)
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebutton1(ctx, layout, numbutton1) {
    var button = new android.widget.Button(ctx)
    button.setText(String(cat[numbutton1][1]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            changeitem2(numbutton1)
        }
    }))
    layout.addView(button)
}

function makebuttontianjia(ctx, layout, numitem3, makebutton2) {
    var button = new android.widget.Button(ctx)
    button.setText(String(cat[numitem3][0][makebutton2]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            if (Level.getGameMode() == 1) {
                Entity.setCarriedItem(pe, cat[numitem3][0][makebutton2][1], 64, cat[numitem3][0][makebutton2][2])
            }
            if (Level.getGameMode() == 0) {
                Player.addItemInventory(cat[numitem3][0][makebutton2][1], 64, cat[numitem3][0][makebutton2][2])
            }
        }
    }))
    button.setOnLongClickListener(new android.view.View.OnLongClickListener({
        onLongClick: function(v, mp) {
            changeitemdelete(ctx, layout, numitem3, makebutton2, button)
            return true
        }
    }))
    layout.addView(button)
}

function changeitemdelete(ctx, layout, numitem3, makebutton2, button) {
    toast("已移除")
    cat[numitem3][0].splice(makebutton2, 1)
    layout.removeView(button)
}

function changeitem2(numitem2) {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText(String(cat[numitem2][1]))
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        if (numitem2 == 0) {
            var button = new android.widget.Button(ctx)
            button.setText("添加物品到ID表")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    inputchangeitemadd()
                }
            }))
            layout.addView(button)
        }
        for (i in cat[numitem2][0])
            makebuttontianjia(ctx, layout, numitem2, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function bjsj() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("编辑世界")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("坐标&传送")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputtp()
            }
        }))
        layout.addView(button)
        var buttonmode = new android.widget.Button(ctx)
        if (Level.getGameMode() == 0) {
            buttonmode.setText("生存模式")
        } else if (Level.getGameMode() == 1) {
            buttonmode.setText("创造模式")
        }
        buttonmode.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (Level.getGameMode() == 0) {
                    Level.setGameMode(1)
                    buttonmode.setText("创造模式")
                    clientMessage("GameMode:creative")
                } else if (Level.getGameMode() == 1) {
                    Level.setGameMode(0)
                    buttonmode.setText("生存模式")
                    clientMessage("GameMode:survival")
                    if (flymode2 == 1) {
                        Player.setCanFly(true)
                    }
                }
            }
        }))
        layout.addView(buttonmode)
        var button = new android.widget.Button(ctx)
        button.setText("玩家生命")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputhealth()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("行走速度")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputspeed()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("游戏变速")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputgamespeed()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("调整时间")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputtime()
            }
        }))
        layout.addView(button)
        var buttonfly2 = new android.widget.Button(ctx)
        if (flymode2 == 0) {
            buttonfly2.setText("生存飞行(关)")
        } else if (flymode2 == 1) {
            buttonfly2.setText("生存飞行(开)")
        }
        buttonfly2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (flymode2 == 0) {
                    flymode2++
                    Player.setCanFly(true)
                    buttonfly2.setText("生存飞行(开)")
                } else if (flymode2 == 1) {
                    flymode2--
                    if (Level.getGameMode() == 0) {
                        Player.setCanFly(false)
                        Player.setFlying(false)
                    }
                    buttonfly2.setText("生存飞行(关)")
                }
            }
        }))
        layout.addView(buttonfly2)
        var button5 = new android.widget.Button(ctx)
        if (event4 == 0) {
            button5.setText("夜视(关)")
        } else if (event4 == 1) {
            button5.setText("夜视(开)")
        }
        button5.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event4 == 0) {
                    event4++
                    Block.setLightLevel(0, 8)
                    Block.setLightLevel(0, 9)
                    Block.setLightLevel(0, 14)
                    button5.setText("夜视(开)")
                    toast("已开启夜视")
                } else if (event4 == 1) {
                    event4--
                    Block.setLightLevel(0, 0)
                    Block.setLightLevel(8, 0)
                    Block.setLightLevel(9, 0)
                    button5.setText("夜视(关)")
                    toast("已关闭夜视")
                }
            }
        }))
        layout.addView(button5)
        var button = new android.widget.Button(ctx)
        button.setText("设置视角")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputsight()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("定点爆炸")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputexplode()
            }
        }))
        layout.addView(button)
        var button7 = new android.widget.Button(ctx)
        if (event6 == 0) {
            button7.setText("一击必杀(关)")
        } else if (event6 == 1) {
            button7.setText("一击必杀(开)")
        }
        button7.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event6 == 0) {
                    event6++
                    button7.setText("一击必杀(开)")
                    toast("已开启一击必杀")
                } else if (event6 == 1) {
                    event6--
                    button7.setText("一击必杀(关)")
                    toast("已关闭一击必杀")
                }
            }
        }))
        layout.addView(button7)
        var button = new android.widget.Button(ctx)
        button.setText("指定物品必杀")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputkillitem()
            }
        }))
        layout.addView(button)
        var button1 = new android.widget.Button(ctx)
        if (event1 == 0) {
            button1.setText("草地保护(关)")
        } else if (event1 == 1) {
            button1.setText("草地保护(开)")
        }
        button1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event1 == 0) {
                    event1++
                    button1.setText("草地保护(开)")
                    toast("已开启草地保护")
                } else if (event1 == 1) {
                    event1--
                    button1.setText("草地保护(关)")
                    toast("已关闭草地保护")
                }
            }
        }))
        layout.addView(button1)
        var button2 = new android.widget.Button(ctx)
        if (event2 == 0) {
            button2.setText("禁止破坏方块(关)")
        } else if (event2 == 1) {
            button2.setText("禁止破坏方块(开)")
        }
        button2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event2 == 0) {
                    event2++
                    button2.setText("禁止破坏方块(开)")
                    toast("已开启禁止破坏方块")
                } else if (event2 == 1) {
                    event2--
                    button2.setText("禁止破坏方块(关)")
                    toast("已关闭禁止破坏方块")
                }
            }
        }))
        layout.addView(button2)
        var button = new android.widget.Button(ctx)
        button.setText("设置重生点")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                Level.setSpawn(px, py - 1, pz)
                clientMessage("当前位置已设置为重生点")
            }
        }))
        layout.addView(button)
        var button6 = new android.widget.Button(ctx)
        if (event5 == 0) {
            button6.setText("潜行(关)")
        } else if (event5 == 1) {
            button6.setText("潜行(开)")
        }
        button6.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event5 == 0) {
                    event5++
                    Entity.setSneaking(pe, true)
                    button6.setText("潜行(开)")
                    toast("已开启潜行")
                } else if (event5 == 1) {
                    event5--
                    Entity.setSneaking(pe, false)
                    button6.setText("潜行(关)")
                    toast("已关闭潜行")
                }
            }
        }))
        layout.addView(button6)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function bjst() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("编辑实体")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var buttonjianceshiti = new android.widget.CheckBox(ctx)
        buttonjianceshiti.setText("检测实体")
        buttonjianceshiti.setChecked(event72)
        buttonjianceshiti.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                event72 = isChecked
                if (event72) {
                    event7 = 1
                }
                if (!event72) {
                    event7 = 0
                }
            }
        })
        layout.addView(buttonjianceshiti)
        var buttonjinzhigongji = new android.widget.CheckBox(ctx)
        buttonjinzhigongji.setText("禁止攻击")
        buttonjinzhigongji.setChecked(event32)
        buttonjinzhigongji.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                event32 = isChecked
                if (event32) {
                    event3 = 1
                }
                if (!event32) {
                    event3 = 0
                }
            }
        })
        layout.addView(buttonjinzhigongji)
        var button = new android.widget.Button(ctx)
        button.setText("生成实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputspawnmob()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("移除实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ycst()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("禁止生成实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                banst()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("管理玩家")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                player2()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("管理实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                toast("敬请期待")
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("实体ID表")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                stid()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("ID表初始化")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                life = [
                    ["鸡", 10, "关"],
                    ["牛", 11, "关"],
                    ["猪", 12, "关"],
                    ["羊", 13, "关"],
                    ["狼", 14, "关"],
                    ["村民", 15, "关"],
                    ["蘑菇牛", 16, "关"],
                    ["僵尸", 32, "关"],
                    ["苦力怕", 33, "关"],
                    ["骷髅弓手", 34, "关"],
                    ["蜘蛛", 35, "关"],
                    ["僵尸猪人", 36, "关"],
                    ["史莱姆", 37, "关"],
                    ["末影人", 38, "关"],
                    ["蠹虫", 39, "关"],
                    ["玩家", 63, "关"],
                    ["掉落的方块", 64, "关"],
                    ["点燃的TNT", 65, "关"],
                    ["下落的方块", 66, "关"],
                    ["弓箭", 80, "关"],
                    ["雪球", 81, "关"],
                    ["鸡蛋", 82, "关"],
                    ["画", 83, "关"],
                    ["矿车", 84, "关"]
                ]
                toast("完成")
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function stid() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("实体id表")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("添加实体到id表")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputstadd()
            }
        }))
        layout.addView(button)
        for (i in life)
            makebutton3(ctx, layout, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebutton3(ctx, layout, numbutton1) {
    var button = new android.widget.Button(ctx)
    button.setText(String(life[numbutton1][0] + "," + life[numbutton1][1]) + ",删除")
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            stdelete(ctx, layout, numbutton1, button)
        }
    }))
    layout.addView(button)
}

function stdelete(ctx, layout, numitem2, button) {
    toast("已从实体ID表移除了" + life[numitem2][0])
    life.splice(numitem2, 1)
    life2.splice(numitem2, 1)
    layout.removeView(button)
}

function ycst() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("移除实体")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("移除所有实体")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                for (i in lifeall)
                    Entity.remove(lifeall[i])
                toast("完成")
            }
        }))
        layout.addView(button)
        for (i in life)
            makebutton4(ctx, layout, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebutton4(ctx, layout, numbutton1) {
    var button = new android.widget.Button(ctx)
    button.setText(String(life[numbutton1][0] + "," + life[numbutton1][1]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            stremove(numbutton1)
        }
    }))
    layout.addView(button)
}

function stremove(numitem2) {
    for (i in life2[numitem2])
        Entity.remove(life2[numitem2][i])
    toast("完成")
}

function banst() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("禁止生成实体")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        if (banallst == 0) {
            button.setText("禁止所有实体生成(关)")
        } else if (banallst == 1) {
            button.setText("禁止所有实体生成(开)")
        }
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (banallst == 0) {
                    button.setText("禁止所有实体生成(开)")
                    banallst++
                    for (i in lifeall)
                        Entity.remove(lifeall[i])
                } else if (banallst == 1) {
                    button.setText("禁止所有实体生成(关)")
                    banallst--
                }
            }
        }))
        layout.addView(button)
        for (i in life)
            makebutton5(ctx, layout, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebutton5(ctx, layout, numbutton1) {
    var button = new android.widget.Button(ctx)
    button.setText(String(life[numbutton1]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            stban(numbutton1, button, ctx, layout)
        }
    }))
    layout.addView(button)
}

function stban(numitem2, button, ctx, layout) {
    if (life[numitem2][2] == "开") {
        life[numitem2][2] = "关"
    } else if (life[numitem2][2] == "关") {
        life[numitem2][2] = "开"
    }
    for (i in life2)
        Entity.remove(life2[numitem2][i])
    button.setText(String(life[numitem2]))
    toast("完成")
}

function player2() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("管理玩家")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("显示玩家相关")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                banplayer3 = new Array()
                banplayer3 = " "
                for (i in banplayer2) {
                    banplayer3 += String(Player.getName(banplayer2[i]) + ",")
                }
                clientMessage("当前在线玩家:" + String(banplayer3))
                clientMessage("总共在线人数:" + banplayer2.length)
                clientMessage("如果发现没有自动添加玩家,请开启检测实体攻击玩家以添加")
            }
        }))
        layout.addView(button)
        for (i in banplayer2)
            makebutton6(ctx, layout, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebutton6(ctx, layout, numbutton1) {
    var button = new android.widget.Button(ctx)
    button.setText(Player.getName(banplayer2[numbutton1]))
    if (banplayer2[numbutton1] == pe) {
        button.setText("主机:" + Player.getName(banplayer2[numbutton1]))
    }
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            stplayer(numbutton1)
        }
    }))
    layout.addView(button)
}

function stplayer(numitem2) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("设置为主机")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                pe = banplayer2[numitem2]
                toast("已设为主机")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("tp到此人身边")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                setPosition(pe, Entity.getX(banplayer2[numitem2]), Entity.getY(banplayer2[numitem2]) + 2, Entity.getZ(banplayer2[numitem2]))
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("ban(关)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                toast("敬请期待")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("设置生命值")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                toast("敬请期待")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("燃烧")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                toast("敬请期待")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("远程爆炸")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                toast("敬请期待")
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle(Player.getName(banplayer2[numitem2])).setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                    toast("完成")
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function Fmenu() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonpointset = new android.widget.Button(ctx)
        if (pointset == 1) {
            buttonpointset.setText("定点模式(一)")
        } else if (pointset == 2) {
            buttonpointset.setText("定点模式(二)")
        }
        buttonpointset.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (pointset == 1) {
                    pointset++
                    buttonpointset.setText("定点模式(二)")
                } else if (pointset == 2) {
                    pointset--
                    buttonpointset.setText("定点模式(一)")
                }
            }
        }))
        layout.addView(buttonpointset)
        var buttonpointsetsc1 = new android.widget.Button(ctx)
        if (sc1 == 1) {
            buttonpointsetsc1.setText("空心")
        } else if (sc1 == 2) {
            buttonpointsetsc1.setText("实心")
        }
        buttonpointsetsc1.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (sc1 == 1) {
                    sc1++
                    buttonpointsetsc1.setText("实心")
                } else if (sc1 == 2) {
                    sc1--
                    buttonpointsetsc1.setText("空心")
                }
            }
        }))
        layout.addView(buttonpointsetsc1)
        var buttonpointsetsc2 = new android.widget.Button(ctx)
        if (sc2 == 1) {
            buttonpointsetsc2.setText("Y")
        } else if (sc2 == 2) {
            buttonpointsetsc2.setText("X")
        } else if (sc2 == 3) {
            buttonpointsetsc2.setText("Z")
        }
        buttonpointsetsc2.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (sc2 == 1) {
                    sc2++
                    buttonpointsetsc2.setText("X")
                } else if (sc2 == 2) {
                    sc2++
                    buttonpointsetsc2.setText("Z")
                } else if (sc2 == 3) {
                    sc2 = 1
                    buttonpointsetsc2.setText("Y")
                }
            }
        }))
        layout.addView(buttonpointsetsc2)
        var onepointtitle = new android.widget.TextView(ctx)
        onepointtitle.setTextSize(18)
        onepointtitle.setText("一点菜单")
        onepointtitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle.setLayoutParams(textParams)
        layout.addView(onepointtitle)
        var button = new android.widget.Button(ctx)
        button.setText("超平坦")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputcpt(16)
                clientMessage("<MP434088>提示:仅对旧版地图有效")
                clientMessage("新版自带超平坦了,无限地图改的话会卡死")
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("太极图")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh2(15)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("正十二芒星")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(51)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("正多边形")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(53)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("小行星带")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputabc(38)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("星云")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputabc(48)
            }
        }))
        layout.addView(button)
        var twopointtitle = new android.widget.TextView(ctx)
        twopointtitle.setTextSize(18)
        twopointtitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        twopointtitle.setText("两点菜单")
        twopointtitle.setLayoutParams(textParams)
        layout.addView(twopointtitle)
        var button = new android.widget.Button(ctx)
        button.setText("迷宫")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputm()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("连线")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh(14)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粒子流")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(43)
            }
        }))
        layout.addView(button)
        var onepointtitle = new android.widget.TextView(ctx)
        onepointtitle.setTextSize(18)
        onepointtitle.setText("未完成")
        onepointtitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle.setLayoutParams(textParams)
        layout.addView(onepointtitle)
        var button = new android.widget.Button(ctx)
        button.setText("地形编辑")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (exmode == 0) {
                    inputdxbj1()
                }
                if (exmode == 1) {
                    inputdxbj2()
                }
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆柱")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(12)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("圆环")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputrr(18)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("椭圆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputh(13)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("椭球")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputr(39)
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function copythat() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonpointset = new android.widget.Button(ctx)
        if (pointset == 1) {
            buttonpointset.setText("定点模式(一)")
        } else if (pointset == 2) {
            buttonpointset.setText("定点模式(二)")
        }
        buttonpointset.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (pointset == 1) {
                    pointset++
                    buttonpointset.setText("定点模式(二)")
                } else if (pointset == 2) {
                    pointset--
                    buttonpointset.setText("定点模式(一)")
                }
            }
        }))
        layout.addView(buttonpointset)
        var buttoncopybufugai = new android.widget.CheckBox(ctx)
        buttoncopybufugai.setText("粘贴不覆盖方块")
        buttoncopybufugai.setChecked(copybufugai2)
        buttoncopybufugai.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                copybufugai2 = isChecked
                if (copybufugai2) {
                    copybufugai = 1
                } else if (!copybufugai2) {
                    copybufugai = 0
                }
            }
        })
        layout.addView(buttoncopybufugai)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("两点菜单")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("替换方块")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputre()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("复制")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                mode = 30
                clientMessage("x:" + Math.abs(px2 - px1) + "y:" + Math.abs(py2 - py1) + "z:" + Math.abs(pz2 - pz1))
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 31
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("工程计划")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (esetsupermode == 0) {
                    inputeset()
                }
                if (esetsupermode == 1) {
                    inputeset2()
                }
                mode = 30
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴Y~90")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 32
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴Y~180")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 33
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴Y~270")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 34
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴X~90")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 34
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴X~180")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 36
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("粘贴X~270")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (px2 - px1 >= 0) {
                    px2 = px1 + copyx1
                }
                if (px2 - px1 < 0) {
                    px2 = px1 - copyx1
                }
                if (py2 - py1 >= 0) {
                    py2 = py1 + copyy1
                }
                if (py2 - py1 < 0) {
                    py2 = py1 - copyy1
                }
                if (pz2 - pz1 >= 0) {
                    pz2 = pz1 + copyz1
                }
                if (pz2 - pz1 < 0) {
                    pz2 = pz1 - copyz1
                }
                mode = 37
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function superid() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function superminer() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var buttonxikuang = new android.widget.CheckBox(ctx)
        buttonxikuang.setText("自动吸矿")
        buttonxikuang.setChecked(xikuang2)
        buttonxikuang.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                xikuang2 = isChecked
                if (xikuang2) {
                    xikuang = 1
                } else if (!xikuang2) {
                    xikuang = 0
                }
            }
        })
        layout.addView(buttonxikuang)
        var buttontunkuang = new android.widget.CheckBox(ctx)
        buttontunkuang.setText("自动吞矿")
        buttontunkuang.setChecked(tunkuang2)
        buttontunkuang.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                tunkuang2 = isChecked
                if (tunkuang2) {
                    tunkuang = 1
                } else if (!tunkuang2) {
                    tunkuang = 0
                }
            }
        })
        layout.addView(buttontunkuang)
        var buttonsuperminersearch = new android.widget.CheckBox(ctx)
        buttonsuperminersearch.setText("矿物追踪")
        buttonsuperminersearch.setChecked(superminersearch2)
        buttonsuperminersearch.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                superminersearch2 = isChecked
                if (superminersearch2) {
                    superminersearch1 = 1
                } else if (!superminersearch2) {
                    superminersearch1 = 0
                }
            }
        })
        layout.addView(buttonsuperminersearch)
        var buttonsuperminerlight = new android.widget.CheckBox(ctx)
        buttonsuperminerlight.setText("矿物发光")
        buttonsuperminerlight.setChecked(superminerlight2)
        buttonsuperminerlight.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                superminerlight2 = isChecked
                if (superminerlight2) {
                    superminerlight1 = 1
                } else if (!superminerlight2) {
                    superminerlight1 = 0
                }
            }
        })
        layout.addView(buttonsuperminerlight)
        var buttonsuperminersee = new android.widget.CheckBox(ctx)
        buttonsuperminersee.setText("矿物透视")
        buttonsuperminersee.setChecked(superminersee2)
        buttonsuperminersee.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
            onCheckedChanged: function(v, isChecked) {
                superminersee2 = isChecked
                if (superminersee2) {
                    superminersee1 = 1
                } else if (!superminersee2) {
                    superminersee1 = 0
                }
            }
        })
        layout.addView(buttonsuperminersee)
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("超级矿工")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        var button = new android.widget.Button(ctx)
        button.setText("自动吸矿-设置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminermenu(0)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("自动吞矿-设置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminermenu(1)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("矿物追踪-设置(未完成)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminermenu(2)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("矿物发光-设置(未完成)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminermenu(3)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("矿物透视-设置(未完成)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminermenu(4)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("矿物ID表")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                superminerid()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("ID表初始化")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputore = [
                    ["石头", 1, 0, 0, 1, 0, 1, 1],
                    ["花岗岩", 1, 1, 0, 1, 0, 1, 1],
                    ["闪长岩", 1, 3, 0, 1, 0, 1, 1],
                    ["安山岩", 1, 5, 0, 1, 0, 1, 1],
                    ["泥土", 3, 0, 0, 1, 0, 1, 1],
                    ["砾石", 13, 0, 0, 1, 0, 1, 1],
                    ["金矿", 14, 0, 1, 0, 1, 1, 1],
                    ["铁矿石", 15, 0, 1, 0, 1, 1, 1],
                    ["煤矿", 16, 0, 1, 0, 1, 1, 1],
                    ["青金石矿", 21, 0, 1, 0, 1, 1, 1],
                    ["钻石矿", 56, 0, 1, 0, 1, 1, 1],
                    ["红石矿", 73, 0, 1, 0, 1, 1, 1],
                    ["发光的红石矿", 74, 0, 1, 0, 1, 1, 1],
                    ["绿宝石矿", 129, 0, 1, 0, 1, 1, 1]
                ], outputore = [
                    ["石头", 1, 0],
                    ["花岗岩", 1, 1],
                    ["闪长岩", 1, 3],
                    ["安山岩", 1, 5],
                    ["泥土", 3, 0],
                    ["砾石", 13, 0],
                    ["金锭", 266, 0],
                    ["铁锭", 265, 0],
                    ["煤", 263, 0],
                    ["青金石", 351, 4],
                    ["钻石", 264, 0],
                    ["红石粉", 331, 0],
                    ["红石粉", 331, 0],
                    ["绿宝石", 388, 0]
                ]
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function superminermenu(numminer) {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        minerbutton = new Array()
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        if (numminer == 0) {
            onepointtitle1.setText("自动吸矿")
        }
        if (numminer == 1) {
            onepointtitle1.setText("自动吞矿")
        }
        if (numminer == 2) {
            onepointtitle1.setText("矿物追踪")
        }
        if (numminer == 3) {
            onepointtitle1.setText("矿物发光")
        }
        if (numminer == 4) {
            onepointtitle1.setText("矿物透视")
        }
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        for (i in inputore) {
            if (inputore[i][numminer + 3] == 1) {
                minerbutton[i] = true
            } else {
                minerbutton[i] = false
            }
            makebuttonminer(ctx, layout, numminer, i)
        }
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebuttonminer(ctx, layout, numbutton1, numbutton2) {
    var buttonxikuang = new android.widget.CheckBox(ctx)
    buttonxikuang.setText(String(inputore[numbutton2][0]) + "," + String(inputore[numbutton2][1]) + "," + String(inputore[numbutton2][2]))
    buttonxikuang.setChecked(minerbutton[numbutton2])
    buttonxikuang.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
        onCheckedChanged: function(v, isChecked) {
            minerbutton[numbutton2] = isChecked
            if (minerbutton[numbutton2]) {
                inputore[numbutton2][numbutton1 + 3] = 1
            } else if (!minerbutton[numbutton2]) {
                inputore[numbutton2][numbutton1 + 3] = 0
            }
        }
    })
    layout.addView(buttonxikuang)
}

function superminerid() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        minerbutton = new Array()
        var onepointtitle1 = new android.widget.TextView(ctx)
        onepointtitle1.setTextSize(18)
        onepointtitle1.setText("矿物ID表")
        onepointtitle1.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle1.setLayoutParams(textParams)
        layout.addView(onepointtitle1)
        for (i in inputore)
            makebuttonminer2(ctx, layout, i)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function makebuttonminer2(ctx, layout, numbutton2) {
    var button = new android.widget.Button(ctx)
    button.setText(String(inputore[numbutton2][0]) + "," + String(inputore[numbutton2][1]) + "," + String(inputore[numbutton2][2]) + "," + String(outputore[numbutton2][0]) + "," + String(outputore[numbutton2][1]) + "," + String(outputore[numbutton2][2]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            minerdelete(ctx, layout, button, numbutton2)
        }
    }))
    layout.addView(button)
}

function minerdelete(ctx, layout, button, numbutton2) {
    toast("已移除")
    inputore.splice(numbutton2, 1)
    outputore.splice(numbutton2, 1)
    layout.removeView(button)
}

function moremenu1() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        quick11 = new android.widget.EditText(ctx)
        quick11.setHint("方向1:1为Y轴,2为X轴,3为Z轴")
        quick11.setText(quick1 > 0 ? String(quick1) : null)
        quick11.setInputType(number)
        mpLayout.addView(quick11)
        quick21 = new android.widget.EditText(ctx)
        quick21.setHint("方向2:1为负,2为正")
        quick21.setText(quick2 > 0 ? String(quick2) : null)
        quick21.setInputType(number)
        mpLayout.addView(quick21)
        quick31 = new android.widget.EditText(ctx)
        quick31.setHint("长度;0为关闭,0可以不填")
        quick31.setText(quick3 > 0 ? String(quick3) : null)
        quick31.setInputType(number)
        mpLayout.addView(quick31)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    quick1 = parseInt(quick11.getText())
                    quick2 = parseInt(quick21.getText())
                    quick3 = parseInt(quick31.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputcpt() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        blockid11 = new android.widget.EditText(ctx)
        blockid11.setHint("方块id 例:155")
        blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
        blockid11.setInputType(number)
        mpLayout.addView(blockid11)
        data11 = new android.widget.EditText(ctx)
        data11.setHint("特殊值 例:1(0可不填)")
        data11.setText(data1 > 0 ? String(data1) : null)
        data11.setInputType(number)
        mpLayout.addView(data11)
        cptf11 = new android.widget.EditText(ctx)
        cptf11.setHint("层数 例:4")
        cptf11.setText(cptf > 0 ? String(cptf) : null)
        cptf11.setInputType(number)
        mpLayout.addView(cptf11)
        cpto11 = new android.widget.EditText(ctx)
        cpto11.setHint("完整超平坦(放置空气) 输入1开启")
        cpto11.setText(null)
        cpto11.setInputType(number)
        mpLayout.addView(cpto11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    blockid1 = parseInt(blockid11.getText())
                    data1 = parseInt(data11.getText())
                    cptf = parseInt(cptf11.getText())
                    cpto = parseInt(cpto11.getText())
                    if (cptf >= 128) {
                        cptf = 127
                    }
                    mode = 16
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputabc(numabc) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        if (numabc == 38) {
            if (sc2 != 2) {
                a11 = new android.widget.EditText(ctx)
                a11.setHint("X轴长度")
                a11.setText(a1 > 0 ? String(a1) : null)
                a11.setInputType(number)
                mpLayout.addView(a11)
            }
            if (sc2 != 1) {
                b11 = new android.widget.EditText(ctx)
                b11.setHint("Y轴长度")
                b11.setText(b1 > 0 ? String(b1) : null)
                b11.setInputType(number)
                mpLayout.addView(b11)
            }
            if (sc2 != 3) {
                c11 = new android.widget.EditText(ctx)
                c11.setHint("Z轴长度")
                c11.setText(c1 > 0 ? String(c1) : null)
                c11.setInputType(number)
                mpLayout.addView(c11)
            }
            r21 = new android.widget.EditText(ctx)
            r21.setHint("大小")
            r21.setText(r2 > 0 ? String(r2) : null)
            r21.setInputType(number)
            mpLayout.addView(r21)
        }
        if (numabc == 41) {
            if (sc2 != 2) {
                a11 = new android.widget.EditText(ctx)
                a11.setHint("X轴长度")
                a11.setText(a1 > 0 ? String(a1) : null)
                a11.setInputType(number)
                mpLayout.addView(a11)
            }
            if (sc2 != 1) {
                b11 = new android.widget.EditText(ctx)
                b11.setHint("Y轴长度")
                b11.setText(b1 > 0 ? String(b1) : null)
                b11.setInputType(number)
                mpLayout.addView(b11)
            }
            if (sc2 != 3) {
                c11 = new android.widget.EditText(ctx)
                c11.setHint("Z轴长度")
                c11.setText(c1 > 0 ? String(c1) : null)
                c11.setInputType(number)
                mpLayout.addView(c11)
            }
        }
        if (numabc == 42) {
            a11 = new android.widget.EditText(ctx)
            a11.setHint("X轴长度")
            a11.setText(a1 > 0 ? String(a1) : null)
            a11.setInputType(number)
            mpLayout.addView(a11)
            b11 = new android.widget.EditText(ctx)
            b11.setHint("Y轴长度")
            b11.setText(b1 > 0 ? String(b1) : null)
            b11.setInputType(number)
            mpLayout.addView(b11)
            c11 = new android.widget.EditText(ctx)
            c11.setHint("Z轴长度")
            c11.setText(c1 > 0 ? String(c1) : null)
            c11.setInputType(number)
            mpLayout.addView(c11)
        }
        if (numabc == 48) {
            a11 = new android.widget.EditText(ctx)
            a11.setHint("X轴长度")
            a11.setText(a1 > 0 ? String(a1) : null)
            a11.setInputType(number)
            mpLayout.addView(a11)
            b11 = new android.widget.EditText(ctx)
            b11.setHint("Y轴长度")
            b11.setText(b1 > 0 ? String(b1) : null)
            b11.setInputType(number)
            mpLayout.addView(b11)
            c11 = new android.widget.EditText(ctx)
            c11.setHint("Z轴长度")
            c11.setText(c1 > 0 ? String(c1) : null)
            c11.setInputType(number)
            mpLayout.addView(c11)
            r21 = new android.widget.EditText(ctx)
            r21.setHint("大小")
            r21.setText(r2 > 0 ? String(r2) : null)
            r21.setInputType(number)
            mpLayout.addView(r21)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    if (numabc == 38) {
                        if (sc2 != 2) {
                            a1 = parseInt(a11.getText())
                        }
                        if (sc2 != 1) {
                            b1 = parseInt(b11.getText())
                        }
                        if (sc2 != 3) {
                            c1 = parseInt(c11.getText())
                        }
                        r2 = parseInt(r21.getText())
                        if (dk != 1) {
                            mode = 38
                        } else {
                            mode2 = 38
                            mode3 = 38
                        }
                    }
                    if (numabc == 41) {
                        if (sc2 != 2) {
                            a1 = parseInt(a11.getText())
                        }
                        if (sc2 != 1) {
                            b1 = parseInt(b11.getText())
                        }
                        if (sc2 != 3) {
                            c1 = parseInt(c11.getText())
                        }
                        mode = 41
                    }
                    if (numabc == 42) {
                        a1 = parseInt(a11.getText())
                        b1 = parseInt(b11.getText())
                        c1 = parseInt(c11.getText())
                        mode = 42
                    }
                    if (numabc == 48) {
                        a1 = parseInt(a11.getText())
                        b1 = parseInt(b11.getText())
                        c1 = parseInt(c11.getText())
                        r2 = parseInt(r21.getText())
                        mode = 48
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputr(numr) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        if (numr == 44) {
            ap1 = new android.widget.EditText(ctx)
            ap1.setHint("方向(1上2下3左4右)")
            ap1.setText(ap > 0 ? String(ap) : null)
            ap1.setInputType(number)
            mpLayout.addView(ap1)
        }
        if (numr == 53) {
            duobianxingjiaodu1 = new android.widget.EditText(ctx)
            duobianxingjiaodu1.setHint("初始角度(与横轴的夹角)")
            duobianxingjiaodu1.setText(duobianxingjiaodu > 0 ? String(duobianxingjiaodu) : null)
            duobianxingjiaodu1.setInputType(number)
            mpLayout.addView(duobianxingjiaodu1)
            duobianxingbianshu1 = new android.widget.EditText(ctx)
            duobianxingbianshu1.setHint("边数")
            duobianxingbianshu1.setText(duobianxingbianshu > 0 ? String(duobianxingbianshu) : null)
            duobianxingbianshu1.setInputType(number)
            mpLayout.addView(duobianxingbianshu1)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    if (numr == 1) {
                        if (dk != 1) {
                            mode = 1
                        } else {
                            mode2 = 1
                            mode3 = 1
                        }
                        mode = 1
                    }
                    if (numr == 12) {
                        if (dk != 1) {
                            mode = 12
                        } else {
                            mode2 = 12
                            mode3 = 12
                        }
                    }
                    if (numr == 17) {
                        if (dk != 1) {
                            mode = 17
                        } else {
                            mode2 = 17
                            mode3 = 17
                        }
                    }
                    if (numr == 43) {
                        if (dk != 1) {
                            mode = 43
                        } else {
                            mode2 = 43
                            mode3 = 43
                        }
                    }
                    if (numr == 44) {
                        ap = parseInt(ap1.getText())
                        if (dk != 1) {
                            mode = 44
                        } else {
                            mode2 = 44
                            mode3 = 44
                        }
                    }
                    if (numr == 51) {
                        if (dk != 1) {
                            mode = 51
                        } else {
                            mode2 = 51
                            mode3 = 51
                        }
                    }
                    if (numr == 53) {
                        duobianxingjiaodu = parseInt(duobianxingjiaodu1.getText())
                        duobianxingbianshu = parseInt(duobianxingbianshu1.getText())
                        if (dk != 1) {
                            mode = 53
                        } else {
                            mode2 = 53
                            mode3 = 53
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputrh1(numrh1) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        h11 = new android.widget.EditText(ctx)
        h11.setHint("高")
        h11.setText(h1 > 0 ? String(h1) : null)
        h11.setInputType(number)
        mpLayout.addView(h11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    h1 = parseInt(h11.getText())
                    if (numrh1 == 2) {
                        if (dk != 1) {
                            mode = 2
                        } else {
                            mode2 = 2
                            mode3 = 2
                        }
                    }
                    if (numrh1 == 5) {
                        if (dk != 1) {
                            mode = 5
                        } else {
                            mode2 = 5
                            mode3 = 5
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputrh2(numrh2) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        h11 = new android.widget.EditText(ctx)
        h11.setHint("高")
        h11.setText(h1 > 0 ? String(h1) : null)
        h11.setInputType(number)
        mpLayout.addView(h11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    h1 = parseInt(h11.getText())
                    r2 = 0
                    d1 = (r1 - r2) / h1
                    if (numrh2 == 3) {
                        if (dk != 1) {
                            mode = 3
                        } else {
                            mode2 = 3
                            mode3 = 3
                        }
                    }
                    if (numrh2 == 6) {
                        if (dk != 1) {
                            mode = 6
                        } else {
                            mode2 = 6
                            mode3 = 6
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputrhc(numrhc) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("下底半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        r21 = new android.widget.EditText(ctx)
        r21.setHint("上底半径")
        r21.setText(r2 > 0 ? String(r2) : null)
        r21.setInputType(number)
        mpLayout.addView(r21)
        h11 = new android.widget.EditText(ctx)
        h11.setHint("高")
        h11.setText(h1 > 0 ? String(h1) : null)
        h11.setInputType(number)
        mpLayout.addView(h11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    r2 = parseInt(r21.getText())
                    h1 = parseInt(h11.getText())
                    d1 = (r1 - r2) / h1
                    if (numrhc == 4) {
                        if (dk != 1) {
                            mode = 4
                        } else {
                            mode2 = 4
                            mode3 = 4
                        }
                    }
                    if (numrhc == 7) {
                        if (dk != 1) {
                            mode = 7
                        } else {
                            mode2 = 7
                            mode3 = 7
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputh(numh) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    if (numh == 8) {
                        if (dk != 1) {
                            mode = 8
                        } else {
                            mode2 = 8
                            mode3 = 8
                        }
                    }
                    if (numh == 13) {
                        if (dk != 1) {
                            mode = 13
                        } else {
                            mode2 = 13
                            mode3 = 13
                        }
                    }
                    if (numh == 14) {
                        if (dk != 1) {
                            mode = 14
                        } else {
                            mode2 = 14
                            mode3 = 14
                        }
                    }
                    if (numh == 45) {
                        if (dk != 1) {
                            mode = 45
                        } else {
                            mode2 = 45
                            mode3 = 45
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputh2(numh2) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        blockid11 = new android.widget.EditText(ctx)
        blockid11.setHint("方块id1")
        blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
        blockid11.setInputType(number)
        mpLayout.addView(blockid11)
        data11 = new android.widget.EditText(ctx)
        data11.setHint("特殊值id1")
        data11.setText(data1 > 0 ? String(data1) : null)
        data11.setInputType(number)
        mpLayout.addView(data11)
        blockid21 = new android.widget.EditText(ctx)
        blockid21.setHint("方块id2")
        blockid21.setText(blockid2 > 0 ? String(blockid2) : null)
        blockid21.setInputType(number)
        mpLayout.addView(blockid21)
        data21 = new android.widget.EditText(ctx)
        data21.setHint("特殊值id2")
        data21.setText(data2 > 0 ? String(data2) : null)
        data21.setInputType(number)
        mpLayout.addView(data21)
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        if (numh2 == 15) {
            ap1 = new android.widget.EditText(ctx)
            ap1.setHint("界限(1横轴 2纵轴)")
            ap1.setText(ap > 0 ? String(ap) : null)
            ap1.setInputType(number)
            mpLayout.addView(ap1)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    blockid2 = parseInt(blockid21.getText())
                    data2 = parseInt(data21.getText())
                    r1 = parseInt(r11.getText())
                    if (numh2 == 15) {
                        ap = parseInt(ap1.getText())
                        if (parseInt(ap1.getText() != 1)) {
                            ap = getRandom(0, 2)
                        } else if (parseInt(ap1.getText() != 2)) {
                            ap = getRandom(0, 2)
                        }
                        if (dk != 1) {
                            mode = 15
                        } else {
                            mode2 = 15
                            mode3 = 15
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputh3(numh3) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        if (numh3 == 46) {
            ap21 = new android.widget.EditText(ctx)
            ap21.setHint("方向(1负2正)")
            ap21.setText(ap2 > 0 ? String(ap2) : null)
            ap21.setInputType(number)
            mpLayout.addView(ap21)
        }
        if (numh3 == 47) {
            ap31 = new android.widget.EditText(ctx)
            ap31.setHint("象限(1,2,3,4)")
            ap31.setText(ap3 > 0 ? String(ap3) : null)
            ap31.setInputType(number)
            mpLayout.addView(ap31)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    if (numh3 == 46) {
                        ap2 = parseInt(ap21.getText())
                        if (dk != 1) {
                            mode = 46
                        } else {
                            mode2 = 46
                            mode3 = 46
                        }
                    }
                    if (numh3 == 47) {
                        ap3 = parseInt(ap31.getText())
                        if (dk != 1) {
                            mode = 47
                        } else {
                            mode2 = 47
                            mode3 = 47
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputre(numre) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        blockid21 = new android.widget.EditText(ctx)
        blockid21.setHint("被替换的方块id")
        blockid21.setText(blockid2 > 0 ? String(blockid2) : null)
        blockid21.setInputType(number)
        mpLayout.addView(blockid21)
        data21 = new android.widget.EditText(ctx)
        data21.setHint("特殊值id")
        data21.setText(data2 > 0 ? String(data2) : null)
        data21.setInputType(number)
        mpLayout.addView(data21)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("生成方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    blockid2 = parseInt(blockid21.getText())
                    data2 = parseInt(data21.getText())
                    if (blockid2 > 0) {} else {
                        blockid2 = 0
                    }
                    if (dk != 1) {
                        mode = 10
                    } else {
                        mode2 = 10
                        mode3 = 10
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputm(numm) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("迷宫方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("迷宫特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        blockid21 = new android.widget.EditText(ctx)
        blockid21.setHint("下底方块id")
        blockid21.setText(blockid2 > 0 ? String(blockid2) : null)
        blockid21.setInputType(number)
        mpLayout.addView(blockid21)
        data21 = new android.widget.EditText(ctx)
        data21.setHint("下底特殊值id")
        data21.setText(data2 > 0 ? String(data2) : null)
        data21.setInputType(number)
        mpLayout.addView(data21)
        blockid31 = new android.widget.EditText(ctx)
        blockid31.setHint("上底方块id")
        blockid31.setText(blockid3 > 0 ? String(blockid3) : null)
        blockid31.setInputType(number)
        mpLayout.addView(blockid31)
        data31 = new android.widget.EditText(ctx)
        data31.setHint("上底特殊值id")
        data31.setText(data3 > 0 ? String(data3) : null)
        data31.setInputType(number)
        mpLayout.addView(data31)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    blockid2 = parseInt(blockid21.getText())
                    data2 = parseInt(data21.getText())
                    blockid2 = parseInt(blockid21.getText())
                    data2 = parseInt(data21.getText())
                    blockid3 = parseInt(blockid31.getText())
                    data3 = parseInt(data31.getText())
                    if (dk != 1) {
                        mode = 11
                    } else {
                        mode2 = 11
                        mode3 = 11
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputrr(numrr) {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        if (dk == 0) {
            blockid11 = new android.widget.EditText(ctx)
            blockid11.setHint("方块id")
            blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
            blockid11.setInputType(number)
            mpLayout.addView(blockid11)
            data11 = new android.widget.EditText(ctx)
            data11.setHint("特殊值id")
            data11.setText(data1 > 0 ? String(data1) : null)
            data11.setInputType(number)
            mpLayout.addView(data11)
        }
        r11 = new android.widget.EditText(ctx)
        r11.setHint("半径")
        r11.setText(r1 > 0 ? String(r1) : null)
        r11.setInputType(number)
        mpLayout.addView(r11)
        r21 = new android.widget.EditText(ctx)
        r21.setHint("大小")
        r21.setText(r2 > 0 ? String(r2) : null)
        r21.setInputType(number)
        mpLayout.addView(r21)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (dk == 0) {
                        blockid1 = parseInt(blockid11.getText())
                        data1 = parseInt(data11.getText())
                    }
                    r1 = parseInt(r11.getText())
                    r2 = parseInt(r21.getText())
                    if (numrr == 9) {
                        if (dk != 1) {
                            mode = 9
                        } else {
                            mode2 = 9
                            mode3 = 9
                        }
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputpoint() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        px11 = new android.widget.EditText(ctx)
        px11.setHint("x1")
        px11.setText(String(px1) != "undefined" ? String(px1) : null)
        mpLayout.addView(px11)
        py11 = new android.widget.EditText(ctx)
        py11.setHint("y1")
        py11.setText(String(py1) != "undefined" ? String(py1) : null)
        mpLayout.addView(py11)
        pz11 = new android.widget.EditText(ctx)
        pz11.setHint("z1")
        pz11.setText(String(pz1) != "undefined" ? String(pz1) : null)
        mpLayout.addView(pz11)
        px21 = new android.widget.EditText(ctx)
        px21.setHint("x2")
        px21.setText(String(px2) != "undefined" ? String(px2) : null)
        mpLayout.addView(px21)
        py21 = new android.widget.EditText(ctx)
        py21.setHint("y2")
        py21.setText(String(py2) != "undefined" ? String(py2) : null)
        mpLayout.addView(py21)
        pz21 = new android.widget.EditText(ctx)
        pz21.setHint("z2")
        pz21.setText(String(pz2) != "undefined" ? String(pz2) : null)
        mpLayout.addView(pz21)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    px1 = parseInt(px11.getText())
                    py1 = parseInt(py11.getText())
                    pz1 = parseInt(pz11.getText())
                    px2 = parseInt(px21.getText())
                    py2 = parseInt(py21.getText())
                    pz2 = parseInt(pz21.getText())
                    clientMessage("x:" + px1 + " y:" + py1 + " z:" + pz1)
                    clientMessage("x:" + px2 + " y:" + py2 + " z:" + pz2)
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputspeed() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        speed11 = new android.widget.EditText(ctx)
        speed11.setHint("请输入参数(建议:0.6~1.2)")
        speed11.setText(speed1 > 0 ? String(speed1) : null)
        mpLayout.addView(speed11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    speed1 = speed11.getText()
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputgamespeed() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        gamespeed1 = new android.widget.EditText(ctx)
        gamespeed1.setHint("请输入游戏速度的倍数")
        gamespeed1.setText(gamespeed1 > 0 ? String(gamespeed1) : null)
        mpLayout.addView(gamespeed1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    ModPE.setGameSpeed(gamespeed1.getText() * 20)
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputtime() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("白天")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                day = 0
                Level.setNightMode(false)
                Level.setTime(4300)
                clientMessage("当前时间:白天")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("黑夜")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                day = 0
                Level.setNightMode(false)
                Level.setTime(13200)
                clientMessage("当前时间:黑夜")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("永昼")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                Level.setNightMode(false)
                Level.setTime(4300)
                day = 1
                clientMessage("当前时间:永昼")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("永夜")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                day = 2
                Level.setTime(13200)
                Level.setNightMode(true)
                clientMessage("当前时间:永夜")
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304881() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("创世神相关")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304882()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("作者更多作品")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304883()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("JS函数表&启动器")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304884()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("关于作者")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304885()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("轻松赚钱")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp4304886()
            }
        }))
        mpLayout.addView(button)
        giveitem1 = new android.widget.TextView(ctx)
        giveitem1.setTextSize(20)
        giveitem1.setText("所有js链接通用,直接看创世神js的链接就好了,不要再问我链接问题了")
        mpLayout.addView(giveitem1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("更多链接").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304882() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("创世神历史版本:(从1.0开始)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(1)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("教你如何快速建造一个迷宫")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(3)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("教你如何快速探索地牢（其实是要塞）")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(4)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【图文解说】JS科研")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(5)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【图文解说】创世神的各种奇葩用法")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(6)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【建议区】创世神的新功能&BUG反馈")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(23)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神第一期")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(19)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神第二期")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(26)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神第三期")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(27)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神第四期")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(30)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神特辑-超级武器")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(31)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【视频】创世神 VS HIM")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(32)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】创世神v1.0(纯属纪念)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(2)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】创世神v0.2(纯属纪念)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(17)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304883() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("【网盘】通用下载链接")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(41)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("[教程]程序语言思维")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(7)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【教程】程序语言思维")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(8)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】MP4的小型JS发布帖")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(9)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】MP4的大型JS发布帖")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(10)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】末影人JS")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(18)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】大灾变JS系列")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(11)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】HIMv0.3(无GUI)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(12)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】HIMv0.5(有GUI)")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(25)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】基本命令v0.5")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(13)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】超能力v0.3")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(14)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【JS】绝对武力v0.2")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(28)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304884() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("【JS函数表】for启动器版本1.6.7")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(15)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("【转载】启动器v1.7.7-for-MCPE")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(16)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304885() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("MP4的最新动态")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(20)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("MP4的帖子大集合")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(22)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("MP4的秘密基地")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(21)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("MP4的个人贴吧")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(24)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function tomp4304886() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("帮助（必看）")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputtuiguanghelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("点击开始赚钱")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tomp430488(29)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputsight() {
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("原始视野")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ModPE.resetFov()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("放大视野")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ModPE.setFov(20)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("缩小视野")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ModPE.setFov(105)
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("倒置视野")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ModPE.setFov(980)
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputspawnmob() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        pxx1 = new android.widget.EditText(ctx)
        pxx1.setHint("X:")
        pxx1.setText(String(parseInt(px)))
        pxx1.setInputType(number)
        mpLayout.addView(pxx1)
        pyy1 = new android.widget.EditText(ctx)
        pyy1.setHint("Y:")
        pyy1.setText(String(parseInt(py)))
        pyy1.setInputType(number)
        mpLayout.addView(pyy1)
        pzz1 = new android.widget.EditText(ctx)
        pzz1.setHint("Z:")
        pzz1.setText(String(parseInt(pz)))
        pzz1.setInputType(number)
        mpLayout.addView(pzz1)
        id1 = new android.widget.EditText(ctx)
        id1.setHint("实体id:")
        id1.setText(id1 > 0 ? String(id1) : null)
        id1.setInputType(number)
        mpLayout.addView(id1)
        shuliang1 = new android.widget.EditText(ctx)
        shuliang1.setHint("数量:")
        shuliang1.setText(shuliang1 > 0 ? String(shuliang1) : null)
        shuliang1.setInputType(number)
        mpLayout.addView(shuliang1)
        for (i in life) {
            makebuttonspawnmob(ctx, mpLayout, i, id1)
        }
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    for (var i = 0; i < parseInt(shuliang1.getText()); i++)
                        Level.spawnMob(parseInt(pxx1.getText()), parseInt(pyy1.getText()), parseInt(pzz1.getText()), parseInt(id1.getText()))
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function makebuttonspawnmob(ctx, mpLayout, numbutton1, id1) {
    var button = new android.widget.Button(ctx)
    button.setText(String(life[numbutton1][0]))
    button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(mp) {
            id1.setText(String(life[numbutton1][1]))
        }
    }))
    mpLayout.addView(button)
}

function inputhealth() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        health1 = new android.widget.EditText(ctx)
        health1.setHint("请输入数值(0为自杀)")
        health1.setText(String(Entity.getHealth(pe)))
        health1.setInputType(number)
        mpLayout.addView(health1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    Player.setHealth(parseInt(health1.getText()))
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputweaponset() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        giveitem41 = new android.widget.TextView(ctx)
        giveitem41.setTextSize(20)
        giveitem41.setText("连发次数")
        mpLayout.addView(giveitem41)
        fire21 = new android.widget.EditText(ctx)
        fire21.setHint("连发次数")
        fire21.setText(fire2 > 0 ? String(fire2) : null)
        fire21.setInputType(number)
        mpLayout.addView(fire21)
        var button = new android.widget.Button(ctx)
        giveitem31 = new android.widget.TextView(ctx)
        giveitem31.setTextSize(20)
        giveitem31.setText("发射速度")
        mpLayout.addView(giveitem31)
        weaponv1 = new android.widget.EditText(ctx)
        weaponv1.setHint("发射速度")
        weaponv1.setText(weaponv > 0 ? String(weaponv) : null)
        mpLayout.addView(weaponv1)
        var button = new android.widget.Button(ctx)
        giveitem51 = new android.widget.TextView(ctx)
        giveitem51.setTextSize(20)
        giveitem51.setText("每次发射间隔")
        mpLayout.addView(giveitem51)
        fire31 = new android.widget.EditText(ctx)
        fire31.setHint("每次发射间隔(单位:0.05秒)")
        fire31.setText(fire3 > 0 ? String(fire3) : null)
        mpLayout.addView(fire31)
        var button = new android.widget.Button(ctx)
        giveitem111 = new android.widget.TextView(ctx)
        giveitem111.setTextSize(20)
        giveitem111.setText("散弹数量")
        mpLayout.addView(giveitem111)
        fire41 = new android.widget.EditText(ctx)
        fire41.setHint("散弹数量")
        fire41.setText(fire4 > 0 ? String(fire4) : null)
        mpLayout.addView(fire41)
        var button = new android.widget.Button(ctx)
        giveitem61 = new android.widget.TextView(ctx)
        giveitem61.setTextSize(20)
        giveitem61.setText("爆炸范围")
        mpLayout.addView(giveitem61)
        weaponexplode11 = new android.widget.EditText(ctx)
        weaponexplode11.setHint("爆炸范围")
        weaponexplode11.setText(weaponexplode1 > 0 ? String(weaponexplode1) : null)
        mpLayout.addView(weaponexplode11)
        var button = new android.widget.Button(ctx)
        giveitem71 = new android.widget.TextView(ctx)
        giveitem71.setTextSize(20)
        giveitem71.setText("燃烧范围")
        mpLayout.addView(giveitem71)
        weaponexplode21 = new android.widget.EditText(ctx)
        weaponexplode21.setHint("燃烧范围")
        weaponexplode21.setText(weaponexplode2 > 0 ? String(weaponexplode2) : null)
        mpLayout.addView(weaponexplode21)
        var button = new android.widget.Button(ctx)
        giveitem81 = new android.widget.TextView(ctx)
        giveitem81.setTextSize(20)
        giveitem81.setText("冻结范围")
        mpLayout.addView(giveitem81)
        weaponexplode31 = new android.widget.EditText(ctx)
        weaponexplode31.setHint("冻结范围")
        weaponexplode31.setText(weaponexplode3 > 0 ? String(weaponexplode3) : null)
        mpLayout.addView(weaponexplode31)
        var button = new android.widget.Button(ctx)
        giveitem91 = new android.widget.TextView(ctx)
        giveitem91.setTextSize(20)
        giveitem91.setText("熔岩范围")
        mpLayout.addView(giveitem91)
        weaponexplode41 = new android.widget.EditText(ctx)
        weaponexplode41.setHint("熔岩范围")
        weaponexplode41.setText(weaponexplode4 > 0 ? String(weaponexplode4) : null)
        mpLayout.addView(weaponexplode41)
        var button = new android.widget.Button(ctx)
        giveitem101 = new android.widget.TextView(ctx)
        giveitem101.setTextSize(20)
        giveitem101.setText("水弹范围")
        mpLayout.addView(giveitem101)
        weaponexplode51 = new android.widget.EditText(ctx)
        weaponexplode51.setHint("水弹范围")
        weaponexplode51.setText(weaponexplode5 > 0 ? String(weaponexplode5) : null)
        mpLayout.addView(weaponexplode51)
        var button = new android.widget.Button(ctx)
        giveitem131 = new android.widget.TextView(ctx)
        giveitem131.setTextSize(20)
        giveitem131.setText("虚空弹范围")
        mpLayout.addView(giveitem131)
        weaponexplode61 = new android.widget.EditText(ctx)
        weaponexplode61.setHint("虚空弹范围")
        weaponexplode61.setText(weaponexplode6 > 0 ? String(weaponexplode6) : null)
        mpLayout.addView(weaponexplode61)
        var buttonyk = new android.widget.Button(ctx)
        if (weaponyk == 0) {
            buttonyk.setText("遥控(关)")
        } else if (weaponyk == 1) {
            buttonyk.setText("遥控(开)")
        }
        buttonyk.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (weaponyk == 0) {
                    weaponyk++
                    buttonyk.setText("遥控(开)")
                } else if (weaponyk == 1) {
                    weaponyk--
                    buttonyk.setText("遥控(关)")
                }
            }
        }))
        mpLayout.addView(buttonyk)
        var buttontp = new android.widget.Button(ctx)
        if (weapontp == 0) {
            buttontp.setText("传送(关)")
        } else if (weapontp == 1) {
            buttontp.setText("传送(开)")
        }
        buttontp.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (weapontp == 0) {
                    weapontp++
                    buttontp.setText("传送(开)")
                } else if (weapontp == 1) {
                    weapontp--
                    buttontp.setText("传送(关)")
                }
            }
        }))
        mpLayout.addView(buttontp)
        var buttonfly = new android.widget.Button(ctx)
        if (weaponfly == 0) {
            buttonfly.setText("飞天(关)")
        } else if (weaponfly == 1) {
            buttonfly.setText("飞天(开)")
        }
        buttonfly.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (weaponfly == 0) {
                    weaponfly++
                    buttonfly.setText("飞天(开)")
                } else if (weaponfly == 1) {
                    weaponfly--
                    buttonfly.setText("飞天(关)")
                }
            }
        }))
        mpLayout.addView(buttonfly)
        var button = new android.widget.Button(ctx)
        button.setText("发射")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                tw = 0
                tws = 0
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("弹药类型(非生物)")
        mpLayout.addView(giveitem11)
        var button = new android.widget.Button(ctx)
        button.setText("点燃的TNT")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 65
                entityweaponid1.setText("65")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("弓箭")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 80
                entityweaponid1.setText("80")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("雪球")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 81
                entityweaponid1.setText("81")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("鸡蛋")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 82
                entityweaponid1.setText("82")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("矿车")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 84
                entityweaponid1.setText("84")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        giveitem121 = new android.widget.TextView(ctx)
        giveitem121.setTextSize(20)
        giveitem121.setText("弹药类型(生物)")
        mpLayout.addView(giveitem121)
        var button = new android.widget.Button(ctx)
        button.setText("牛")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 11
                entityweaponid1.setText("11")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("猪")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 12
                entityweaponid1.setText("12")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("羊")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 13
                entityweaponid1.setText("13")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("狼")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 14
                entityweaponid1.setText("14")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("村民")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 15
                entityweaponid1.setText("15")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("蘑菇牛")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 16
                entityweaponid1.setText("16")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("僵尸")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 32
                entityweaponid1.setText("32")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("苦力怕")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 33
                entityweaponid1.setText("33")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("骷髅弓手")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 34
                entityweaponid1.setText("34")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("蜘蛛")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 35
                entityweaponid1.setText("35")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("僵尸猪人")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 36
                entityweaponid1.setText("36")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("史莱姆")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 37
                entityweaponid1.setText("37")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("末影人")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 38
                entityweaponid1.setText("38")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("蠹虫")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                entityweaponid = 39
                entityweaponid1.setText("39")
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        giveitem21 = new android.widget.TextView(ctx)
        giveitem21.setTextSize(20)
        giveitem21.setText("自定义武器id")
        mpLayout.addView(giveitem21)
        entityweaponid1 = new android.widget.EditText(ctx)
        entityweaponid1.setHint("自定义武器id")
        entityweaponid1.setText(entityweaponid > 0 ? String(entityweaponid) : null)
        entityweaponid1.setInputType(number)
        mpLayout.addView(entityweaponid1)
        var buttonweaponfkd = new android.widget.Button(ctx)
        if (weaponfkd == 0) {
            buttonweaponfkd.setText("完全模式")
        } else if (weaponfkd == 1) {
            buttonweaponfkd.setText("防卡顿模式")
        }
        buttonweaponfkd.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (weaponfkd == 0) {
                    weaponfkd++
                    buttonweaponfkd.setText("防卡顿模式")
                } else if (weaponfkd == 1) {
                    weaponfkd--
                    entityweapon = new Array()
                    weaponvx = new Array()
                    weaponvy = new Array()
                    weaponvz = new Array()
                    buttonweaponfkd.setText("完全模式")
                }
            }
        }))
        mpLayout.addView(buttonweaponfkd)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    entityweaponid = parseInt(entityweaponid1.getText())
                    fire2 = parseInt(fire21.getText())
                    fire3 = parseInt(fire31.getText())
                    fire4 = parseInt(fire41.getText())
                    weaponv = parseInt(weaponv1.getText())
                    weaponexplode1 = parseInt(weaponexplode11.getText())
                    weaponexplode2 = parseInt(weaponexplode21.getText())
                    weaponexplode3 = parseInt(weaponexplode31.getText())
                    weaponexplode4 = parseInt(weaponexplode41.getText())
                    weaponexplode5 = parseInt(weaponexplode51.getText())
                    weaponexplode6 = parseInt(weaponexplode61.getText())
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputexplode() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        px11 = new android.widget.EditText(ctx)
        px11.setHint("X:")
        px11.setText(String(parseInt(px)))
        px11.setInputType(number)
        mpLayout.addView(px11)
        py11 = new android.widget.EditText(ctx)
        py11.setHint("Y:")
        py11.setText(String(parseInt(py)))
        py11.setInputType(number)
        mpLayout.addView(py11)
        pz11 = new android.widget.EditText(ctx)
        pz11.setHint("Z:")
        pz11.setText(String(parseInt(pz)))
        pz11.setInputType(number)
        mpLayout.addView(pz11)
        explode11 = new android.widget.EditText(ctx)
        explode11.setHint("爆炸半径")
        explode11.setText(null)
        explode11.setInputType(number)
        mpLayout.addView(explode11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    exx1 = parseInt(px11.getText())
                    exy1 = parseInt(py11.getText())
                    exz1 = parseInt(pz11.getText())
                    exd1 = parseInt(explode11.getText())
                    mode = 35
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputeset() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        ecopy11 = new android.widget.EditText(ctx)
        ecopy11.setHint("方向1:1为负 2为正")
        ecopy11.setText(ecopy1 > 0 ? String(ecopy1) : null)
        ecopy11.setInputType(number)
        mpLayout.addView(ecopy11)
        ecopy21 = new android.widget.EditText(ctx)
        ecopy21.setHint("方向2:1为Y 2为X 3为Z")
        ecopy21.setText(ecopy2 > 0 ? String(ecopy2) : null)
        ecopy21.setInputType(number)
        mpLayout.addView(ecopy21)
        ecopytimes1 = new android.widget.EditText(ctx)
        ecopytimes1.setHint("粘贴次数")
        ecopytimes1.setText(ecopytimes > 0 ? String(ecopytimes) : null)
        ecopytimes1.setInputType(number)
        mpLayout.addView(ecopytimes1)
        ecopyd1 = new android.widget.EditText(ctx)
        ecopyd1.setHint("间隔(0可不填)")
        ecopyd1.setText(ecopyd > 0 ? String(ecopyd) : null)
        ecopyd1.setInputType(number)
        mpLayout.addView(ecopyd1)
        var button = new android.widget.Button(ctx)
        button.setText("进入超级模式")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                esetsupermode = 1
                inputeset2()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (px2 - px1 >= 0) {
                        px2 = px1 + copyx1
                    }
                    if (px2 - px1 < 0) {
                        px2 = px1 - copyx1
                    }
                    if (py2 - py1 >= 0) {
                        py2 = py1 + copyy1
                    }
                    if (py2 - py1 < 0) {
                        py2 = py1 - copyy1
                    }
                    if (pz2 - pz1 >= 0) {
                        pz2 = pz1 + copyz1
                    }
                    if (pz2 - pz1 < 0) {
                        pz2 = pz1 - copyz1
                    }
                    ecopy1 = parseInt(ecopy11.getText())
                    ecopy2 = parseInt(ecopy21.getText())
                    ecopytimes = parseInt(ecopytimes1.getText())
                    ecopyd = parseInt(ecopyd1.getText())
                    if (ecopyd >= 0) {} else {
                        ecopyd = 0
                    }
                    ecopytimes2 = 1
                    mode = 49
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputeset2() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        superecopy11 = new android.widget.EditText(ctx)
        superecopy11.setHint("方向1:1为负 2为正")
        superecopy11.setText(superecopy1 > 0 ? String(superecopy1) : null)
        superecopy11.setInputType(number)
        mpLayout.addView(superecopy11)
        superecopyx1 = new android.widget.EditText(ctx)
        superecopyx1.setHint("X轴粘贴次数")
        superecopyx1.setText(superecopyx > 0 ? String(superecopyx) : null)
        superecopyx1.setInputType(number)
        mpLayout.addView(superecopyx1)
        superecopyd11 = new android.widget.EditText(ctx)
        superecopyd11.setHint("间隔1(0可不填)")
        superecopyd11.setText(superecopyd1 > 0 ? String(superecopyd1) : null)
        superecopyd11.setInputType(number)
        mpLayout.addView(superecopyd11)
        superecopy21 = new android.widget.EditText(ctx)
        superecopy21.setHint("方向2:1为负 2为正")
        superecopy21.setText(superecopy2 > 0 ? String(superecopy2) : null)
        superecopy21.setInputType(number)
        mpLayout.addView(superecopy21)
        superecopyy1 = new android.widget.EditText(ctx)
        superecopyy1.setHint("Y轴粘贴次数")
        superecopyy1.setText(superecopyy > 0 ? String(superecopyy) : null)
        superecopyy1.setInputType(number)
        mpLayout.addView(superecopyy1)
        superecopyd21 = new android.widget.EditText(ctx)
        superecopyd21.setHint("间隔2(0可不填)")
        superecopyd21.setText(superecopyd2 > 0 ? String(superecopyd2) : null)
        superecopyd21.setInputType(number)
        mpLayout.addView(superecopyd21)
        superecopy31 = new android.widget.EditText(ctx)
        superecopy31.setHint("方向3:1为负 2为正")
        superecopy31.setText(superecopy3 > 0 ? String(superecopy3) : null)
        superecopy31.setInputType(number)
        mpLayout.addView(superecopy31)
        superecopyz1 = new android.widget.EditText(ctx)
        superecopyz1.setHint("Z轴粘贴次数")
        superecopyz1.setText(superecopyz > 0 ? String(superecopyz) : null)
        superecopyz1.setInputType(number)
        mpLayout.addView(superecopyz1)
        superecopyd31 = new android.widget.EditText(ctx)
        superecopyd31.setHint("间隔3(0可不填)")
        superecopyd31.setText(superecopyd3 > 0 ? String(superecopyd3) : null)
        superecopyd31.setInputType(number)
        mpLayout.addView(superecopyd31)
        var button = new android.widget.Button(ctx)
        button.setText("进入普通模式")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputeset()
                esetsupermode = 0
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    superecopyd1 = parseInt(superecopyd11.getText())
                    superecopyd2 = parseInt(superecopyd21.getText())
                    superecopyd3 = parseInt(superecopyd31.getText())
                    superecopyx = parseInt(superecopyx1.getText())
                    superecopyy = parseInt(superecopyy1.getText())
                    superecopyz = parseInt(superecopyz1.getText())
                    superecopy1 = parseInt(superecopy11.getText())
                    superecopy2 = parseInt(superecopy21.getText())
                    superecopy3 = parseInt(superecopy31.getText())
                    if (px2 - px1 >= 0) {
                        px2 = px1 + copyx1
                    }
                    if (px2 - px1 < 0) {
                        px2 = px1 - copyx1
                    }
                    if (py2 - py1 >= 0) {
                        py2 = py1 + copyy1
                    }
                    if (py2 - py1 < 0) {
                        py2 = py1 - copyy1
                    }
                    if (pz2 - pz1 >= 0) {
                        pz2 = pz1 + copyz1
                    }
                    if (pz2 - pz1 < 0) {
                        pz2 = pz1 - copyz1
                    }
                    if (superecopy1 == 1) {
                        superecopy1 = -1
                    }
                    if (superecopy1 == 2) {
                        superecopy1 = 1
                    }
                    if (superecopy2 == 1) {
                        superecopy2 = -1
                    }
                    if (superecopy2 == 2) {
                        superecopy2 = 1
                    }
                    if (superecopy3 == 1) {
                        superecopy3 = -1
                    }
                    if (superecopy3 == 2) {
                        superecopy3 = 1
                    }
                    if (superecopyd1 >= 0) {} else {
                        superecopyd1 = 0
                    }
                    if (superecopyd2 >= 0) {} else {
                        superecopyd2 = 0
                    }
                    if (superecopyd3 >= 0) {} else {
                        superecopyd3 = 0
                    }
                    mode = 52
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputstadd() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newername1 = new android.widget.EditText(ctx)
        newername1.setHint("实体名称")
        newername1.setText(null)
        mpLayout.addView(newername1)
        newerid1 = new android.widget.EditText(ctx)
        newerid1.setHint("实体id")
        newerid1.setText(null)
        newerid1.setInputType(number)
        mpLayout.addView(newerid1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("添加实体到ID表").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    life[life.length] = new Array()
                    life2[life2.length] = new Array()
                    life[life.length - 1][0] = String(newername1.getText())
                    life[life.length - 1][1] = String(newerid1.getText())
                    life[life.length - 1][2] = "关"
                    if (String(newername1.getText()) == "undefined") {
                        life[life.length - 1][0] = "未命名"
                    }
                    if (parseInt(newerid1.getText()) >= 0) {} else {
                        life[life.length - 1][1] = 0
                    }
                    life2[life.length] = new Array()
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemadd() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newername1 = new android.widget.EditText(ctx)
        newername1.setHint("物品名称")
        newername1.setText(null)
        mpLayout.addView(newername1)
        newerid1 = new android.widget.EditText(ctx)
        newerid1.setHint("物品id")
        newerid1.setText(null)
        newerid1.setInputType(number)
        mpLayout.addView(newerid1)
        newerdata1 = new android.widget.EditText(ctx)
        newerdata1.setHint("特殊值id")
        newerdata1.setText(null)
        newerdata1.setInputType(number)
        mpLayout.addView(newerdata1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("添加自定义物品").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    if (cat[0][0].length > 0) {} else {
                        cat[0][0] = new Array()
                    }
                    cat[0][0][cat[0][0].length] = new Array()
                    cat[0][0][cat[0][0].length - 1][0] = String(newername1.getText())
                    if (parseInt(newerid1.getText()) >= 0) {
                        cat[0][0][cat[0][0].length - 1][1] = parseInt(newerid1.getText())
                    } else {
                        cat[0][0][cat[0][0].length - 1][1] = 0
                    }
                    if (parseInt(newerdata1.getText()) >= 0) {
                        cat[0][0][cat[0][0].length - 1][2] = parseInt(newerdata1.getText())
                    } else {
                        cat[0][0][cat[0][0].length - 1][2] = 0
                    }
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemdelete() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newernumber1 = new android.widget.EditText(ctx)
        newernumber1.setHint("从第几个开始？")
        newernumber1.setText(null)
        mpLayout.addView(newernumber1)
        newernumber2 = new android.widget.EditText(ctx)
        newernumber2.setHint("到第几个？")
        newernumber2.setText(null)
        newernumber2.setInputType(number)
        mpLayout.addView(newernumber2)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("删除自定义物品").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    newer.splice(parseInt(newernumber1.getText()) - 1, parseInt(newernumber2.getText()) - parseInt(newernumber1.getText()) + 1)
                    for (var i = parseInt(newernumber1.getText()) - 1; i <= parseInt(newernumber2.getText() - 1); i++)
                        ModPE.removeData("newerA" + i)
                    ModPE.removeData("newerB" + i)
                    ModPE.removeData("newerC" + i)
                    cat[0][0].splice(parseInt(newernumber1.getText()) - 1, i <= parseInt(newernumber2.getText() - parseInt(newernumber1.getText()) + 1))
                    newerL = newerL - parseInt(newernumber2.getText())
                    ModPE.saveData("newerL", newerL)
                    toast("其实长按按钮也可以删除物品~")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemaddcreative() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newernumber1 = new android.widget.EditText(ctx)
        newernumber1.setHint("从第几个开始？")
        newernumber1.setText(parseInt(newerL3) > 0 ? String(parseInt(newerL3)) : null)
        mpLayout.addView(newernumber1)
        newernumber2 = new android.widget.EditText(ctx)
        newernumber2.setHint("到第几个？")
        newernumber2.setText(parseInt(newerL4) > 0 ? String(parseInt(newerL4)) : null)
        newernumber2.setInputType(number)
        mpLayout.addView(newernumber2)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("添加物品到创造").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    newerL3 = parseInt(newernumber1.getText())
                    newerL4 = parseInt(newernumber2.getText())
                    if (newerL3 - 1 >= cat[0][0].length) {
                        newerL3 = cat[0][0].length
                    }
                    if (newerL4 - 1 >= cat[0][0].length) {
                        newerL4 = cat[0][0].length
                    }
                    if (newerL3 - 1 <= cat[0][0].length && newerL4 - 1 <= cat[0][0].length) {
                        for (var i = newerL3 - 1; i <= newerL4 - 1; i++)
                            Player.addItemCreativeInv(cat[0][0][i][1], 1, cat[0][0][i][2])
                        toast("完成")
                    }
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemchange() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newernumber1 = new android.widget.EditText(ctx)
        newernumber1.setHint("第几个？")
        newernumber1.setText(null)
        mpLayout.addView(newernumber1)
        newernumber2 = new android.widget.EditText(ctx)
        newernumber2.setHint("还有第几个？")
        newernumber2.setText(null)
        newernumber2.setInputType(number)
        mpLayout.addView(newernumber2)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("自定义物品-更改位置").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    newerE0 = cat[0][0][parseInt(newernumber1.getText()) - 1][0]
                    newerD0 = cat[0][0][parseInt(newernumber2.getText()) - 1][0]
                    newerE1 = cat[0][0][parseInt(newernumber1.getText()) - 1][1]
                    newerD1 = cat[0][0][parseInt(newernumber2.getText()) - 1][1]
                    newerE2 = cat[0][0][parseInt(newernumber1.getText()) - 1][2]
                    newerD2 = cat[0][0][parseInt(newernumber2.getText()) - 1][2]
                    cat[0][0][parseInt(newernumber2.getText()) - 1][0] = newerE0
                    cat[0][0][parseInt(newernumber1.getText()) - 1][0] = newerD0
                    cat[0][0][parseInt(newernumber2.getText()) - 1][1] = newerE1
                    cat[0][0][parseInt(newernumber1.getText()) - 1][1] = newerD1
                    cat[0][0][parseInt(newernumber2.getText()) - 1][2] = newerE2
                    cat[0][0][parseInt(newernumber1.getText()) - 1][2] = newerD2
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemset() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        newernumber1 = new android.widget.EditText(ctx)
        newernumber1.setHint("从第几个开始？")
        newernumber1.setText(parseInt(newerL1) > 0 ? String(parseInt(newerL1)) : null)
        mpLayout.addView(newernumber1)
        newernumber2 = new android.widget.EditText(ctx)
        newernumber2.setHint("到第几个？")
        newernumber2.setText(parseInt(newerL2) > 0 ? String(parseInt(newerL2)) : null)
        newernumber2.setInputType(number)
        mpLayout.addView(newernumber2)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("自定义物品-一键添加设置").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    newerL1 = newernumber1.getText()
                    newerL2 = newernumber2.getText()
                    if (newerL1 - 1 >= cat[0][0].length) {
                        newerL1 = cat[0][0].length
                    }
                    if (newerL2 - 1 >= cat[0][0].length) {
                        newerL2 = cat[0][0].length
                    }
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputkillitem() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        killitem1 = new android.widget.EditText(ctx)
        killitem1.setHint("方块id")
        killitem1.setText(killitem > 0 ? String(killitem) : null)
        mpLayout.addView(killitem1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("指定物品秒杀").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    killitem = killitem1.getText()
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputdxbj1() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("山脉")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                exmode2 = 1
                zmax1 = parseInt(Math.abs(py2 - py1) - 5) - getRandom(-1, Math.abs((Math.abs(py2 - py1) - 1)) / 8)
                zdq1 = getRandom(2, 5)
                zcx1 = 1
                exmode2 = 2
                inputdxbj3()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("盆地")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                exmode2 = 1
                zmax1 = parseInt(Math.abs(py2 - py1) - 5)
                zdq1 = getRandom(2, 5)
                zcx1 = 2
                inputdxbj3()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("平原")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                zmax1 = parseInt(Math.abs(py2 - py1) - 5) - getRandom(-1, Math.abs((Math.abs(py2 - py1) - 1)) / 8)
                zdq1 = getRandom(2, 5)
                zcx1 = getRandom(0, 2)
                inputdxbj3()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("专家模式")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                exmode = 1
                inputdxbj2()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("简单模式").setNegativeButton("确认", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputdxbj2() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        blockid11 = new android.widget.EditText(ctx)
        blockid11.setHint("方块id")
        blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
        blockid11.setInputType(number)
        mpLayout.addView(blockid11)
        data11 = new android.widget.EditText(ctx)
        data11.setHint("特殊值id")
        data11.setText(data1 > 0 ? String(data1) : null)
        data11.setInputType(number)
        mpLayout.addView(data11)
        zmax11 = new android.widget.EditText(ctx)
        zmax11.setHint("峰值")
        zmax11.setText(zmax1 > 0 ? String(zmax1) : null)
        zmax11.setInputType(number)
        mpLayout.addView(zmax11)
        zt11 = new android.widget.EditText(ctx)
        zt11.setHint("X轴周期")
        zt11.setText(zt1 > 0 ? String(zt1) : null)
        zt11.setInputType(number)
        mpLayout.addView(zt11)
        zt21 = new android.widget.EditText(ctx)
        zt21.setHint("Z轴周期")
        zt21.setText(zt2 > 0 ? String(zt2) : null)
        zt21.setInputType(number)
        mpLayout.addView(zt21)
        zdq11 = new android.widget.EditText(ctx)
        zdq11.setHint("陡峭程度")
        zdq11.setText(zdq1 > 0 ? String(zdq1) : null)
        zdq11.setInputType(number)
        mpLayout.addView(zdq11)
        zcx11 = new android.widget.EditText(ctx)
        zcx11.setHint("函数模式(1为正弦,2为余弦)")
        zcx11.setText(zcx1 > 0 ? String(zcx1) : null)
        zcx11.setInputType(number)
        mpLayout.addView(zcx11)
        exmode21 = new android.widget.EditText(ctx)
        exmode21.setHint("随机模式(1为开启,不填关闭)")
        exmode21.setText(zcx1 > 0 ? String(zcx1) : null)
        exmode21.setInputType(number)
        mpLayout.addView(exmode21)
        var button = new android.widget.Button(ctx)
        button.setText("简单模式")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputdxbj1()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("专家模式").setNegativeButton("确认", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    blockid1 = parseInt(blockid11.getText())
                    data1 = parseInt(data11.getText())
                    zmax1 = parseInt(zmax11.getText())
                    zt1 = parseInt(zt11.getText())
                    zt2 = parseInt(zt21.getText())
                    zdq1 = parseInt(zdq11.getText())
                    zcx1 = parseInt(zcx11.getText())
                    exmode2 = parseInt(exmode21.getText())
                    if (zcx1 != 1 && zcx1 != 2) {
                        zcx1 = 1
                    }
                    mode = 50
                    toast("完成")
                    inputdxbj1()
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputdxbj3() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        blockid11 = new android.widget.EditText(ctx)
        blockid11.setHint("方块id")
        blockid11.setText(blockid1 > 0 ? String(blockid1) : null)
        blockid11.setInputType(number)
        mpLayout.addView(blockid11)
        data11 = new android.widget.EditText(ctx)
        data11.setHint("特殊值id")
        data11.setText(data1 > 0 ? String(data1) : null)
        data11.setInputType(number)
        mpLayout.addView(data11)
        var button = new android.widget.Button(ctx)
        button.setText("重新选择")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputdxbj1()
                inputDialog.dismiss()
            }
        }))
        mpLayout.addView(button)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("专家模式").setNegativeButton("确认", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    blockid1 = parseInt(blockid11.getText())
                    data1 = parseInt(data11.getText())
                    if (zcx1 != 1 && zcx1 != 2) {
                        zcx1 = 1
                    }
                    mode = 50
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputtp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        xx1 = new android.widget.EditText(ctx)
        xx1.setHint("x")
        xx1.setText(String(parseInt(Player.getX())))
        xx1.setInputType(number)
        mpLayout.addView(xx1)
        yy1 = new android.widget.EditText(ctx)
        yy1.setHint("y")
        yy1.setText(String(parseInt(Player.getY())))
        yy1.setInputType(number)
        mpLayout.addView(yy1)
        zz1 = new android.widget.EditText(ctx)
        zz1.setHint("z")
        zz1.setText(String(parseInt(Player.getZ())))
        zz1.setInputType(number)
        mpLayout.addView(zz1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    setPosition(pe, parseInt(xx1.getText()), parseInt(yy1.getText()) + 1, parseInt(zz1.getText()))
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputdssc() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        T1 = new android.widget.EditText(ctx)
        T1.setHint("周期(单位:秒)")
        T1.setText(T > 0 ? String(T) : null)
        T1.setInputType(number)
        mpLayout.addView(T1)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    T = parseInt(T1.getText())
                    t = 0
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputchangeitemid() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.EditText(ctx)
        giveitem11.setHint("方块id")
        giveitem11.setText(String(Player.getCarriedItem()))
        giveitem11.setInputType(number)
        mpLayout.addView(giveitem11)
        giveitem21 = new android.widget.EditText(ctx)
        giveitem21.setHint("特殊值")
        giveitem21.setText(String(Player.getCarriedItemData()))
        giveitem21.setInputType(number)
        mpLayout.addView(giveitem21)
        giveitem31 = new android.widget.EditText(ctx)
        giveitem31.setHint("数量")
        giveitem31.setText(givemount > 0 ? String(givemount) : null)
        giveitem31.setInputType(number)
        mpLayout.addView(giveitem31)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("请输入参数").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    giveitem2 = parseInt(giveitem21.getText())
                    givemount = parseInt(giveitem31.getText())
                    if (Level.getGameMode() == 1) {
                        Entity.setCarriedItem(pe, giveitem, givemount, giveitem2)
                    }
                    if (Level.getGameMode() == 0) {
                        Player.addItemInventory(giveitem, givemount, giveitem2)
                    }
                    toast("完成")
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        button.setText("基本用法")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputjbyf()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("方块&特殊值ID")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputfctszhelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("生成模式")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputscmshelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("夜视恢复亮度")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputyshfhelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("复制粘贴")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputfzzthelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("工程计划")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputgcjhhelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("一键添加")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputyjtjhelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("快速放置")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputksfzhelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("定时生成")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputdsschelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("永久保存数据")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputbchshelp()
            }
        }))
        mpLayout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("关于作者")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputshow()
            }
        }))
        mpLayout.addView(button)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("作者:MP430488\n本JS所有算法均为本人原创\n引用请@MP430488,否则视为侵权!")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("使用说明").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputjbyf() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("默认模式为定点生成模式,不喜欢输入id的吧友请切换成点击生成模式,定点生成模式请用铁剑定点,保存函数会自动保存你的个人喜好\n\n一般像迷宫等长方体需要两个不同的点,就选把定点模式改成（二）\n\n记得两个点高度也要不一样\n\n此模式（定点生成模式）需要知道方块id和特殊值id\n\n不懂用的新手请看其他生成模式的帮助\n\n特别提示,复制粘贴的功能（不包括替换方块,替换方块支持点击模式）,仍然是用铁剑定点,因为这些功能只需要坐标,不需要数据,不过你可以在任何生成模式使用铁剑定点,所以无需担忧")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputyjtjhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("这个功能可以一键添加自定义物品栏的东西\n\n可以是一部分也可以是全部\n\n一键添加-设置那里可以改,到底要添加哪一段的物品\n\n所有数据都会自动保存,无需重复设置")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputfctszhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("什么是方块id和特殊值id?\n\n方块id比如说你物品栏的方块就有id,如动态水的id为8,静态水的id为9\n\n特殊值id一般是如羊毛,树叶,砖等方块才需要用到的\n\n一般他们的方块id相同,但是特殊值id不同\n\n大多数方块的特殊值id都是0\n\n你可以去添加物品那里查看方块所对应的方块id（第一个是名字,第二个是id,第三个是特殊值id）\n\n不喜欢输入方块id的\n\n可以去用点击生成模式\n\n详情请看帮助")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputyshfhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("建筑党建议不要开夜视,不然渣机想要恢复所有区块都是正常亮度可能有点麻烦\n\n亮度恢复正常最快的方法\n\n白天黑夜切换一次就好\n\n如果你是创造并且没有修改器\n\n切换成生存,退出游戏就好\n\n然后重进就可以改了\n\n如果你是建筑党,你可以再恢复完亮度之后,开永昼\n\n方法二,把空气替换成特殊的某种方块,然后再替换回来\n\n方法三:大面积放水,你可以用基本几何的功能来生成大面积水,然后替换成空气")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputscmshelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("定点模式:需要先用铁剑定点,然后在选择几何体生成（需要知道方块id）\n\n点击模式:先选择几何体,然后在用方块点击即可（生成的几何体是你手中的方块）（一次性）（生成完之后需要重新选几何体）\n\n批量生成:先选择几何体,然后在用方块点击即可（生成的几何体是你手中的方块）（永久性）（生成完之后可以不重新选几何体,继续定点就可以生成你选择的几何体）")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputfzzthelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        var button = new android.widget.Button(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("复制粘贴都需要定两个点,定完点按复制\n\n粘贴时你定的两个点的相对距离可以和复制时不一样\n\n你只需要把点1弄对了就行\n\n至于点2相对位置对了就行,距离可以和你复制时不一样,会自动更正\n\n至于那些有角度的粘贴\n\n理论上是在那个坐标轴上向右旋转指定的度数粘贴~")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputdsschelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("首先你需要在任意生成模式,生成一个几何体\n\n然后点击定时生成即可\n\n重新定点就会停下来~~")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputgcjhhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("这个功能主要是用于\n\n在同一个方向生成N个一模一样的几何体\n\n先定好点再去输入数据\n\n（在你按了工程计划那一瞬间,就自动执行复制了）\n\n如果你要在其他地方粘贴\n\n另外定两个点就可以了")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputksfzhelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("这个功能的主要用途是\n\n在同一个方向放置N个一样的方块\n\n开了之后直接用点击方块就行了\n\n生成的是手中的方块\n\n还有用完了记得关（长度调成0）（重进游戏自动关闭）")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputbchshelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("想要使保存的数据在更新版本的时候不丢失的话\n\n你只需要把js的名称修改,比如作者就是把版本号去掉,如:创世神(GUI)\n\n简单的说,只要名字一样就行了,这样子保存的数据就不会丢失了,也不需要每次更新都要重新设置自己要设置的东西了")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputtuiguanghelp() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("你还在为QB，装备，人物，话费发愁吗？\n\n只要你下载这些链接的应用，就可以轻松赚钱\n\n当然如果你是用流量的我不建议你用流量下载，找个有wifi的地方尽情地刷吧")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function inputshow() {
    var number = android.text.InputType.TYPE_CLASS_NUMBER
    var mpLayout = new android.widget.LinearLayout(ctx)
    try {
        mpLayout.setOrientation(1)
        var sv = new android.widget.ScrollView(ctx)
        giveitem11 = new android.widget.TextView(ctx)
        giveitem11.setTextSize(20)
        giveitem11.setText("如有建议和疑问,请在百度贴吧手机版上私信MP430488,以方便作者尽快改进\n\n作者在部分自己觉得有用的功能上启用了保存函数,如果你觉得还有哪些地方有必要用保存函数,请联系作者以方便改进\n\n如果还是看不懂帮助,作者在百度贴吧的帖有图文介绍,可以去看看\n\n版权声明:本js所涉及的所有算法均为本人原创\n\n如需转载本js\n\n请@MP430488\n\n如需引用本js的部分算法\n\n请注明那一部分的算法为MP430488原创\n\n否则一律视为侵权\n\n本人将有权追究其法律责任\n\n其引起的后果均由侵权者承担!\n\n另外ICE POLE 欢迎各位加入\n\n百度群号1:24390310\n\nMP4的秘密基地\n\n百度群号:45215262\n\n更多关于本工作室的资讯\n\n请到icepole吧查看~")
        mpLayout.addView(giveitem11)
        sv.addView(mpLayout)
        var inputDialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("帮助").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() {
                onClick: function(mp) {
                    giveitem = parseInt(giveitem11.getText())
                    inputDialog.dismiss()
                }
            })
            .create()
        inputDialog.setCanceledOnTouchOutside(false)
    } catch (err) {
        clientMessage("Error" + err)
    }
    inputDialog.show()
}

function particular() {
    var layout = new android.widget.LinearLayout(ctx)
    try {
        var menu = new android.widget.PopupWindow(layout, dip2px(ctx, 75), dip2px(ctx, 30))
        menu.setFocusable(true)
        var layout = new android.widget.LinearLayout(ctx)
        layout.setOrientation(1)
        var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
        textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
        var onepointtitle = new android.widget.TextView(ctx)
        onepointtitle.setTextSize(18)
        onepointtitle.setText("特殊菜单")
        onepointtitle.setTextColor(android.graphics.Color.rgb(255, 255, 255))
        onepointtitle.setLayoutParams(textParams)
        layout.addView(onepointtitle)
        var button = new android.widget.Button(ctx)
        button.setText("设置点一")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                px1 = parseInt(px)
                py1 = parseInt(py - 2)
                pz1 = parseInt(pz)
                clientMessage("设置点1 x :" + px1 + " y :" + py1 + " z :" + pz1)
                if (pointset == 1) {
                    dktimes = 1
                } else if (pointset == 2) {
                    dktimes = 2
                }
                t = -1
            }
        }))
        layout.addView(button)
        if (pointset == 2) {
            var button = new android.widget.Button(ctx)
            button.setText("设置点二")
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(mp) {
                    px2 = parseInt(px)
                    py2 = parseInt(py - 2)
                    pz2 = parseInt(pz)
                    clientMessage("设置点2 x :" + px2 + " y :" + py2 + " z :" + pz2)
                    dktimes = 1
                    if (dk == 1) {
                        blockid1 = Player.getCarriedItem()
                        data1 = Player.getCarriedItemData()
                        mode = mode3
                        mode3 = -1
                    }
                    if (dk == 2) {
                        blockid1 = Player.getCarriedItem()
                        data1 = Player.getCarriedItemData()
                        mode = mode2
                    }
                    t = -1
                }
            }))
            layout.addView(button)
        }
        var button = new android.widget.Button(ctx)
        button.setText("输入定点坐标")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                inputpoint()
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("逃出方块")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                escape = 1
            }
        }))
        layout.addView(button)
        var buttonxq = new android.widget.Button(ctx)
        if (xiaochufangkuai == 0) {
            buttonxq.setText("自动消除身边方块(关)")
        } else if (xiaochufangkuai == 1) {
            buttonxq.setText("自动消除身边方块(开)")
        }
        buttonxq.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (xiaochufangkuai == 0) {
                    xiaochufangkuai++
                    buttonxq.setText("自动消除身边方块(开)")
                } else if (xiaochufangkuai == 1) {
                    xiaochufangkuai--
                    buttonxq.setText("自动消除身边方块(关)")
                }
            }
        }))
        layout.addView(buttonxq)
        var buttonpl = new android.widget.Button(ctx)
        if (pl == 0) {
            buttonpl.setText("铺路(关)")
        } else if (pl == 1) {
            buttonpl.setText("铺路(开)")
        }
        buttonpl.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (pl == 0) {
                    pl++
                    clientMessage("已开启铺路")
                    buttonpl.setText("铺路(开)")
                } else if (pl == 1) {
                    pl = 0
                    clientMessage("已关闭铺路")
                    buttonpl.setText("铺路(关)")
                }
            }
        }))
        layout.addView(buttonpl)
        var button = new android.widget.Button(ctx)
        button.setText("灭火")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                offfire = 1
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("截屏")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                ModPE.takeScreenshot(true)
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("脚下生成方块")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                setTile(px, py - 2, pz, Player.getCarriedItem(), Player.getCarriedItemData())
                clientMessage("x:" + parseInt(px) + " y:" + parseInt(py - 2) + " z:" + parseInt(pz))
            }
        }))
        layout.addView(button)
        var buttonfly = new android.widget.Button(ctx)
        if (flymode == 0) {
            buttonfly.setText("飞行器(关)")
        } else if (flymode >= 1) {
            buttonfly.setText("飞行器(开)")
        }
        buttonfly.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (flymode == 0) {
                    flymode++
                    flyingmode()
                    buttonfly.setText("飞行器(开)")
                } else if (flymode >= 1) {
                    flymode = 0
                    dismissflyingmode()
                    buttonfly.setText("飞行器(关)")
                }
            }
        }))
        layout.addView(buttonfly)
        var button9 = new android.widget.Button(ctx)
        if (event8 == 0) {
            button9.setText("无字木牌(关)")
        } else if (event8 == 1) {
            button9.setText("无字木牌(开)")
        }
        button9.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (event8 == 0) {
                    event8++
                    button9.setText("无字木牌(开)")
                } else if (event8 == 1) {
                    event8--
                    button9.setText("无字木牌(关)")
                }
            }
        }))
        layout.addView(button9)
        var buttontiejianshuangji = new android.widget.Button(ctx)
        if (tiejianshuangji == 0) {
            buttontiejianshuangji.setText("铁剑双击方块显示ID(关)")
        } else if (tiejianshuangji == 1) {
            buttontiejianshuangji.setText("铁剑双击方块显示ID(开)")
        }
        buttontiejianshuangji.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (tiejianshuangji == 0) {
                    tiejianshuangji++
                    buttontiejianshuangji.setText("铁剑双击方块显示ID(开)")
                } else if (tiejianshuangji == 1) {
                    tiejianshuangji--
                    buttontiejianshuangji.setText("铁剑双击方块显示ID(关)")
                }
            }
        }))
        layout.addView(buttontiejianshuangji)
        var buttonyidongguangyuan = new android.widget.Button(ctx)
        if (yidongguangyuan == 0) {
            buttonyidongguangyuan.setText("移动光源(关)")
        } else if (yidongguangyuan >= 2) {
            buttonyidongguangyuan.setText("移动光源(开)")
        }
        buttonyidongguangyuan.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                if (yidongguangyuan == 0) {
                    yidongguangyuan = 1
                    buttonyidongguangyuan.setText("移动光源(开)")
                } else if (yidongguangyuan >= 2) {
                    yidongguangyuan = 0
                    buttonyidongguangyuan.setText("移动光源(关)")
                }
            }
        }))
        layout.addView(buttonyidongguangyuan)
        var button = new android.widget.Button(ctx)
        button.setText("清除定点坐标")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                px1 = 0
                py1 = 0
                pz1 = 0
                px2 = 0
                py2 = 0
                pz2 = 0
                t = -1
                toast("已清除定点")
            }
        }))
        layout.addView(button)
        var button = new android.widget.Button(ctx)
        button.setText("隐藏GUI")
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(mp) {
                dismissmenu()
                toast("已隐藏GUI~")
                clientMessage("输入/GUI 恢复GUI")
            }
        }))
        layout.addView(button)
        var mlayout = makeMenu(ctx, menu, layout)
        menu.setContentView(mlayout)
        menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25)
        menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth() * 0.25, 0)
    } catch (err) {
        clientMessage("Error" + err)
    }
}

function solidyhY() {
    for (var x1 = -r1; x1 <= r1; x1++) {
        if (x1 * x1 == r1 * r1) {
            for (var x2 = -r2; x2 <= r2; x2++) {
                for (var y2 = -r2; y2 <= r2; y2++) {
                    if (x2 * x2 + y2 * y2 <= r2 * r2 && x2 * x2 + y2 * y2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - x2
                        for (var x3 = -r3; x3 <= r3; x3++) {
                            for (var z3 = -r3; z3 <= r3; z3++) {
                                if (x3 * x3 + z3 * z3 <= r3 * r3 && x3 * x3 + z3 * z3 >= (r3 - r2 - 1) * (r3 - r2 - 1)) {
                                    setTile(px1 + x3, py1 + y2, pz1 + z3, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function hollowyhY() {
    for (var x1 = -r1; x1 <= r1; x1++) {
        if (x1 * x1 == r1 * r1) {
            for (var x2 = -r2; x2 <= r2; x2++) {
                for (var y2 = -r2; y2 <= r2; y2++) {
                    if (x2 * x2 + y2 * y2 <= r2 * r2 && x2 * x2 + y2 * y2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - x2
                        for (var x3 = -r3; x3 <= r3; x3++) {
                            for (var z3 = -r3; z3 <= r3; z3++) {
                                if (x3 * x3 + z3 * z3 <= r3 * r3 && x3 * x3 + z3 * z3 >= (r3 - 1) * (r3 - 1)) {
                                    setTile(px1 + x3, py1 + y2, pz1 + z3, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function solidyhX() {
    for (var z1 = -r1; z1 <= r1; z1++) {
        if (z1 * z1 == r1 * r1) {
            for (var z2 = -r2; z2 <= r2; z2++) {
                for (var x2 = -r2; x2 <= r2; x2++) {
                    if (z2 * z2 + x2 * x2 <= r2 * r2 && z2 * z2 + x2 * x2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - z2
                        for (var y3 = -r3; y3 <= r3; y3++) {
                            for (var z3 = -r3; z3 <= r3; z3++) {
                                if (y3 * y3 + z3 * z3 <= r3 * r3 && y3 * y3 + z3 * z3 >= (r3 - r2 - 1) * (r3 - r2 - 1)) {
                                    setTile(px1 + x2, py1 + y3, pz1 + z3, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function hollowyhX() {
    for (var z1 = -r1; z1 <= r1; z1++) {
        if (z1 * z1 == r1 * r1) {
            for (var z2 = -r2; z2 <= r2; z2++) {
                for (var x2 = -r2; x2 <= r2; x2++) {
                    if (z2 * z2 + x2 * x2 <= r2 * r2 && z2 * z2 + x2 * x2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - z2
                        for (var y3 = -r3; y3 <= r3; y3++) {
                            for (var z3 = -r3; z3 <= r3; z3++) {
                                if (y3 * y3 + z3 * z3 <= r3 * r3 && y3 * y3 + z3 * z3 >= (r3 - 1) * (r3 - 1)) {
                                    setTile(px1 + x2, py1 + y3, pz1 + z3, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function solidyhZ() {
    for (var y1 = -r1; y1 <= r1; y1++) {
        if (y1 * y1 == r1 * r1) {
            for (var z2 = -r2; z2 <= r2; z2++) {
                for (var x2 = -r2; x2 <= r2; x2++) {
                    if (z2 * z2 + x2 * x2 <= r2 * r2 && z2 * z2 + x2 * x2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - x2
                        for (var y3 = -r3; y3 <= r3; y3++) {
                            for (var x3 = -r3; x3 <= r3; x3++) {
                                if (y3 * y3 + x3 * x3 <= r3 * r3 && y3 * y3 + x3 * x3 >= (r3 - r2 - 1) * (r3 - r2 - 1)) {
                                    setTile(px1 + x3, py1 + y3, pz1 + z2, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function hollowyhZ() {
    for (var y1 = -r1; y1 <= r1; y1++) {
        if (y1 * y1 == r1 * r1) {
            for (var z2 = -r2; z2 <= r2; z2++) {
                for (var x2 = -r2; x2 <= r2; x2++) {
                    if (z2 * z2 + x2 * x2 <= r2 * r2 && z2 * z2 + x2 * x2 >= (r2 - 1) * (r2 - 1)) {
                        r3 = r1 - x2
                        for (var y3 = -r3; y3 <= r3; y3++) {
                            for (var x3 = -r3; x3 <= r3; x3++) {
                                if (y3 * y3 + x3 * x3 <= r3 * r3 && y3 * y3 + x3 * x3 >= (r3 - 1) * (r3 - 1)) {
                                    setTile(px1 + x3, py1 + y3, pz1 + z2, blockid1, data1)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function solidroundY() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollowroundY() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solidroundX() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollowroundX() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solidroundZ() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollowroundZ() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solidcubic() {
    for (var x1 = 0; a + x1 <= b; x1++)
        for (var y1 = 0; c + y1 <= d; y1++)
            for (var z1 = 0; e + z1 <= f; z1++)
                setTile(a + x1, c + y1, e + z1, blockid1, data1)
}

function hollowcubic() {
    for (var x1 = 0; a + x1 <= b; x1++) {
        for (var z1 = 0; e + z1 <= f; z1++) {
            setTile(a + x1, c, e + z1, blockid1, data1)
            setTile(a + x1, d, e + z1, blockid1, data1)
        }
    }
    for (var x1 = 0; a + x1 <= b; x1++) {
        for (var y1 = 0; c + y1 <= d; y1++) {
            setTile(a + x1, c + y1, e, blockid1, data1)
            setTile(a + x1, c + y1, f, blockid1, data1)
        }
    }
    for (var y1 = 0; c + y1 <= d; y1++) {
        for (var z1 = 0; e + z1 <= f; z1++) {
            setTile(a, c + y1, e + z1, blockid1, data1)
            setTile(b, c + y1, e + z1, blockid1, data1)
        }
    }
}

function l1() {
    for (var x1 = 0; a + x1 <= b; x1++) {
        setTile(a + x1, c, e, blockid1, data1)
        setTile(a + x1, d, e, blockid1, data1)
        setTile(a + x1, c, f, blockid1, data1)
        setTile(a + x1, d, f, blockid1, data1)
    }
    for (var y1 = 0; c + y1 <= d; y1++) {
        setTile(a, c + y1, e, blockid1, data1)
        setTile(a, c + y1, f, blockid1, data1)
        setTile(b, c + y1, e, blockid1, data1)
        setTile(b, c + y1, f, blockid1, data1)
    }
    for (var z1 = 0; e + z1 <= f; z1++) {
        setTile(a, c, e + z1, blockid1, data1)
        setTile(b, c, e + z1, blockid1, data1)
        setTile(a, d, e + z1, blockid1, data1)
        setTile(b, d, e + z1, blockid1, data1)
    }
}

function solidsphere() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + y1 * y1 + z1 * z1 <= r1 * r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowsphere() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + y1 * y1 + z1 * z1 <= r1 * r1 && x1 * x1 + y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidc1Y() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + z1 * z1 <= r1 * r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidc1X() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (y1 * y1 + z1 * z1 <= r1 * r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidc1Z() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = 0; z1 <= r1; z1++)
                if (x1 * x1 + y1 * y1 <= r1 * r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowc1Y() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowc1X() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowc1Z() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = 0; z1 <= r1; z1++)
                if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidc2(callsc2) {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + z1 * z1 <= (r1 - y1 * d1) * (r1 - y1 * d1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowc2(call) {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (x1 * x1 + z1 * z1 <= (r1 - y1 * d1) * (r1 - y1 * d1) && x1 * x1 + z1 * z1 >= (r1 - y1 * d1 - 1) * (r1 - y1 * d1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidl1Y() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(x1) <= r1 || Math.abs(z1) <= r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidl1X() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(y1) <= r1 || Math.abs(z1) <= r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidl1Z() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = 0; z1 <= r1; z1++)
                if (Math.abs(x1) <= r1 || Math.abs(y1) <= r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowl1Y() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(x1) == r1 || Math.abs(z1) == r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowl1X() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(y1) == r1 || Math.abs(z1) == r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowl1Z() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= h1; y1++)
            for (var z1 = 0; z1 <= r1; z1++)
                if (Math.abs(x1) == r1 || Math.abs(y1) == r1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function solidl2(callsl2) {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(x1) <= r1 - (y1 * d1) && Math.abs(z1) <= r1 - (y1 * d1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowl2(callhl2) {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= h1; y1++)
            for (var z1 = -r1; z1 <= r1; z1++)
                if (Math.abs(x1) <= parseInt(r1 - (y1 * d1)) && Math.abs(z1) == parseInt(r1 - (y1 * d1)) || Math.abs(x1) == parseInt(r1 - (y1 * d1)) && Math.abs(z1) <= parseInt(r1 - (y1 * d1))) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function forcopy() {
    copy1 = new Array()
    copy2 = new Array()
    for (var x1 = 0; a + x1 <= b; x1++) {
        for (var y1 = 0; c + y1 <= d; y1++) {
            for (var z1 = 0; e + z1 <= f; z1++) {
                copy1[i1] = Level.getTile(a + x1, c + y1, e + z1)
                copy2[i1] = Level.getData(a + x1, c + y1, e + z1)
                i1++
            }
        }
    }
    i1 = 0
}

function eset() {
    px11 = px1
    py11 = py1
    pz11 = pz1
    px21 = px2
    py21 = py2
    pz21 = pz2
    if (copybufugai == 1) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    if (getTile(a + x1, c + y1, e + z1) == 0) {
                        setTile(a + x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    setTile(a + x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
    a1 = a
    b1 = b
    c1 = c
    d1 = d
    e1 = e
    f1 = f
    if (ecopy1 == 1) {
        if (ecopy2 == 2) {
            a = a1 - b1 + a1 - 1 - ecopyd
            b = a1 - 1 - ecopyd
        }
        if (ecopy2 == 1) {
            c = c1 - d1 + c1 - 1 - ecopyd
            d = c1 - 1 - ecopyd
        }
        if (ecopy2 == 3) {
            e = e1 - f1 + e1 - 1 - ecopyd
            f = e1 - 1 - ecopyd
        }
    }
    if (ecopy1 == 2) {
        if (ecopy2 == 2) {
            a = b1 + 1 + ecopyd
            b = b1 + b1 - a1 + 1 + ecopyd
        }
        if (ecopy2 == 1) {
            c = d1 + 1 + ecopyd
            d = d1 + d1 - c1 + 1 + ecopyd
        }
        if (ecopy2 == 3) {
            e = f1 + 1 + ecopyd
            f = f1 + f1 - e1 + 1 + ecopyd
        }
    }
    if (ecopytimes2 <= ecopytimes) {
        ecopytimes2++
        eset()
    } else {
        px1 = px11
        py1 = py11
        pz1 = pz11
        px2 = px21
        py2 = py21
        pz2 = pz21
    }
}

function eset2() {
    for (var ix = 0; ix <= superecopyx; ix++) {
        for (var iy = 0; iy <= superecopyy; iy++) {
            for (var iz = 0; iz <= superecopyz; iz++) {
                if (copybufugai == 1) {
                    for (var x1 = 0; a + x1 <= b; x1++) {
                        for (var y1 = 0; c + y1 <= d; y1++) {
                            for (var z1 = 0; e + z1 <= f; z1++) {
                                if (getTile(a + x1, c + y1, e + z1) == 0) {
                                    setTile(a + x1 + ix * (superecopyd1 + b - a + 1) * superecopy1, c + y1 + iy * (superecopyd2 + d - c + 1) * superecopy2, e + z1 + iz * (superecopyd3 + f - e + 1) * superecopy3, copy1[i1], copy2[i1])
                                }
                                i1++
                            }
                        }
                    }
                } else {
                    for (var x1 = 0; a + x1 <= b; x1++) {
                        for (var y1 = 0; c + y1 <= d; y1++) {
                            for (var z1 = 0; e + z1 <= f; z1++) {
                                setTile(a + x1 + ix * (superecopyd1 + b - a + 1) * superecopy1, c + y1 + iy * (superecopyd2 + d - c + 1) * superecopy2, e + z1 + iz * (superecopyd3 + f - e + 1) * superecopy3, copy1[i1], copy2[i1])
                                i1++
                            }
                        }
                    }
                }
                i1 = 0
            }
        }
    }
    if (superecopy1 == 1) {
        superecopy1 = 2
    } else if (superecopy1 == -1) {
        superecopy1 = 1
    }
    if (superecopy2 == 1) {
        superecopy2 = 2
    } else if (superecopy2 == -1) {
        superecopy2 = 1
    }
    if (superecopy3 == 1) {
        superecopy3 = 2
    } else if (superecopy3 == -1) {
        superecopy3 = 1
    }
}

function setcopy() {
    if (copybufugai == 1) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    if (getTile(a + x1, c + y1, e + z1) == 0) {
                        setTile(a + x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    setTile(a + x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function setcopyX180() {
    if (copybufugai == 1) {
        for (var x1 = 0; b - x1 >= a; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; b - x1 >= e; z1++) {
                    if (getTile(b - x1, c + y1, b - z1) == 0) {
                        setTile(b - x1, c + y1, b - z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; b - x1 >= a; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; f - z1 >= e; z1++) {
                    setTile(b - x1, c + y1, b - z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function setcopyX270() {
    if (copybufugai == 1) {
        for (var x1 = 0; b - x1 >= a; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    if (getTile(b - x1, c + y1, e + z1) == 0) {
                        setTile(b - x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    }
                }
            }
        }
        i1++
    } else {
        for (var x1 = 0; b - x1 >= a; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    setTile(b - x1, c + y1, e + z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function setcopyY90() {
    if (copybufugai == 1) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; d - y1 >= c; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    if (getTile(a + x1, d - y1, e + z1) == 0) {
                        setTile(a + x1, d - y1, e + z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; d - y1 >= c; y1++) {
                for (var z1 = 0; e + z1 <= f; z1++) {
                    setTile(a + x1, d - y1, e + z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function setcopyY180() {
    if (copybufugai == 1) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; d - y1 >= c; y1++) {
                for (var z1 = 0; f - z1 >= e; z1++) {
                    if (getTile(a + x1, d - y1, f - z1) == 0) {
                        setTile(a + x1, d - y1, f - z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; d - y1 >= c; y1++) {
                for (var z1 = 0; f - z1 >= e; z1++) {
                    setTile(a + x1, d - y1, f - z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function setcopyY270() {
    if (copybufugai == 1) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; f - z1 >= e; z1++) {
                    if (getTile(a + x1, c + y1, f - z1) == 0) {
                        setTile(a + x1, c + y1, f - z1, copy1[i1], copy2[i1])
                    }
                    i1++
                }
            }
        }
    } else {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var y1 = 0; c + y1 <= d; y1++) {
                for (var z1 = 0; f - z1 >= e; z1++) {
                    setTile(a + x1, c + y1, f - z1, copy1[i1], copy2[i1])
                    i1++
                }
            }
        }
    }
    i1 = 0
}

function reset() {
    for (var x1 = 0; a + x1 <= b; x1++)
        for (var y1 = 0; c + y1 <= d; y1++)
            for (var z1 = 0; e + z1 <= f; z1++)
                if (Level.getTile(a + x1, c + y1, e + z1) == blockid2 && Level.getData(a + x1, c + y1, e + z1) == data2) {
                    setTile(a + x1, c + y1, e + z1, blockid1, data1)
                }
}

function MCing() {
    for (var x1 = 0; a + x1 <= b; x1++) {
        for (var y1 = 0; c + y1 <= d; y1++) {
            for (var z1 = 0; e + z1 <= f; z1++) {
                setTile(a + x1, c + y1, e + z1, blockid1, data1)
            }
        }
    }
    for (var x1 = 1; a + x1 <= b - 1; x1 = x1 + 2) {
        for (var z1 = 1; e + z1 <= f - 1; z1 = z1 + 2) {
            switch (getRandom(4, 10)) {
                case 5:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1, c + y1, e + z1 + 1, 0)
                    }
                    break
                case 6:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1 + 1, c + y1, e + z1, 0)
                    }
                    break
                case 7:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1 - 1, c + y1, e + z1, 0)
                    }
                    break
                case 8:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1, c + y1, e + z1 - 1, 0)
                    }
                    break
                case 9:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1, c + y1, e + z1 + 1, 0)
                        setTile(a + x1, c + y1, e + z1 - 1, 0)
                    }
                    break
                case 10:
                    for (var y1 = 0; c + y1 <= d; y1++) {
                        setTile(a + x1, c + y1, e + z1, 0)
                        setTile(a + x1 + 1, c + y1, e + z1, 0)
                        setTile(a + x1 - 1, c + y1, e + z1, 0)
                    }
                    break
            }
        }
    }
    for (var x1 = 0; a + x1 <= b; x1++) {
        for (var y1 = 0; c + y1 <= d; y1++) {
            setTile(a + x1, c + y1, e, blockid1, data1)
            setTile(a + x1, c + y1, f, blockid1, data1)
        }
    }
    for (var y1 = 0; c + y1 <= d; y1++) {
        for (var z1 = 0; e + z1 <= f; z1++) {
            setTile(a, c + y1, e + z1, blockid1, data1)
            setTile(b, c + y1, e + z1, blockid1, data1)
        }
    }
    if (blockid2 != null) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var z1 = 0; e + z1 <= f; z1++) {
                setTile(a + x1, c - 1, e + z1, blockid2, data2)
            }
        }
    }
    if (blockid3 != null) {
        for (var x1 = 0; a + x1 <= b; x1++) {
            for (var z1 = 0; e + z1 <= f; z1++) {
                setTile(a + x1, d + 1, e + z1, blockid3, data3)
            }
        }
    }
}

function hollowl31Y() {
    ax1 = px1 + r1
    ay1 = py1
    az1 = pz1
    ax2 = px1 - r1 / 2
    ay2 = py1
    az2 = parseInt(pz1 - r1 * Math.pow(3, 1 / 2) / 2)
    ax3 = px1 - r1 / 2
    ay3 = py1
    az3 = parseInt(pz1 + r1 * Math.pow(3, 1 / 2) / 2)
    k2 = (ax2 - ax1) / (az2 - az1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (z1 - az1) && x1 - ax1 >= k2 * (z1 - az1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax1) / (az3 - az1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (z1 - az1) && x1 - ax1 >= k2 * (z1 - az1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax2) / (az3 - az2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax2 == parseInt(k2 * (z1 - az2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl32Y() {
    ax1 = px1 - r1
    ay1 = py1
    az1 = pz1
    ax2 = px1 + r1 / 2
    ay2 = py1
    az2 = parseInt(pz1 - r1 * Math.pow(3, 1 / 2) / 2)
    ax3 = px1 + r1 / 2
    ay3 = py1
    az3 = parseInt(pz1 + r1 * Math.pow(3, 1 / 2) / 2)
    k2 = (ax2 - ax1) / (az2 - az1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (z1 - az1 - 1) && x1 - ax1 >= k2 * (z1 - az1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax1) / (az3 - az1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (z1 - az1 + 1) && x1 - ax1 >= k2 * (z1 - az1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax2) / (az3 - az2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax2 == parseInt(k2 * (z1 - az2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl33Y() {
    ax1 = px1
    ay1 = py1
    az1 = pz1 - r1
    ax2 = parseInt(px1 - r1 * Math.pow(3, 1 / 2) / 2)
    ay2 = py1
    az2 = pz1 + r1 / 2
    ax3 = parseInt(px1 + r1 * Math.pow(3, 1 / 2) / 2)
    ay3 = py1
    az3 = pz1 + r1 / 2
    k2 = (az2 - az1) / (ax2 - ax1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (x1 - ax1 - 1) && z1 - az1 >= k2 * (x1 - ax1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az1) / (ax3 - ax1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (x1 - ax1 + 1) && z1 - az1 >= k2 * (x1 - ax1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az2) / (ax3 - ax2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az2 == parseInt(k2 * (x1 - ax2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl34Y() {
    ax1 = px1
    ay1 = py1
    az1 = pz1 + r1
    ax2 = parseInt(px1 - r1 * Math.pow(3, 1 / 2) / 2)
    ay2 = py1
    az2 = pz1 - r1 / 2
    ax3 = parseInt(px1 + r1 * Math.pow(3, 1 / 2) / 2)
    ay3 = py1
    az3 = pz1 - r1 / 2
    k2 = (az2 - az1) / (ax2 - ax1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (x1 - ax1) && z1 - az1 >= k2 * (x1 - ax1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az1) / (ax3 - ax1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (x1 - ax1) && z1 - az1 >= k2 * (x1 - ax1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az2) / (ax3 - ax2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az2 == parseInt(k2 * (x1 - ax2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl31X() {
    ax1 = px1
    ay1 = py1 + r1
    az1 = pz1
    ax2 = px1
    ay2 = py1 - r1 / 2
    az2 = parseInt(pz1 - r1 * Math.pow(3, 1 / 2) / 2)
    ax3 = px1
    ay3 = py1 - r1 / 2
    az3 = parseInt(pz1 + r1 * Math.pow(3, 1 / 2) / 2)
    k2 = (ay2 - ay1) / (az2 - az1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (z1 - az1) && y1 - ay1 >= k2 * (z1 - az1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay1) / (az3 - az1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (z1 - az1) && y1 - ay1 >= k2 * (z1 - az1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay2) / (az3 - az2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay2 == parseInt(k2 * (z1 - az2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl32X() {
    ax1 = px1
    ay1 = py1 - r1
    az1 = pz1
    ax2 = px1
    ay2 = py1 + r1 / 2
    az2 = parseInt(pz1 - r1 * Math.pow(3, 1 / 2) / 2)
    ax3 = px1
    ay3 = py1 + r1 / 2
    az3 = parseInt(pz1 + r1 * Math.pow(3, 1 / 2) / 2)
    k2 = (ay2 - ay1) / (az2 - az1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (z1 - az1 - 1) && y1 - ay1 >= k2 * (z1 - az1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay1) / (az3 - az1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (z1 - az1 + 1) && y1 - ay1 >= k2 * (z1 - az1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay2) / (az3 - az2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay2 == parseInt(k2 * (z1 - az2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl33X() {
    ax1 = px1
    ay1 = py1
    az1 = pz1 - r1
    ax2 = px1
    ay2 = parseInt(py1 - r1 * Math.pow(3, 1 / 2) / 2)
    az2 = pz1 + r1 / 2
    ax3 = px1
    ay3 = parseInt(py1 + r1 * Math.pow(3, 1 / 2) / 2)
    az3 = pz1 + r1 / 2
    k2 = (az2 - az1) / (ay2 - ay1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (y1 - ay1 - 1) && z1 - az1 >= k2 * (y1 - ay1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az1) / (ay3 - ay1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (y1 - ay1 + 1) && z1 - az1 >= k2 * (y1 - ay1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az2) / (ay3 - ay2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az2 == parseInt(k2 * (y1 - ay2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl34X() {
    ax1 = px1
    ay1 = py1
    az1 = pz1 + r1
    ax2 = px1
    ay2 = parseInt(py1 - r1 * Math.pow(3, 1 / 2) / 2)
    az2 = pz1 - r1 / 2
    ax3 = px1
    ay3 = parseInt(py1 + r1 * Math.pow(3, 1 / 2) / 2)
    az3 = pz1 - r1 / 2
    k2 = (az2 - az1) / (ay2 - ay1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (y1 - ay1) && z1 - az1 >= k2 * (y1 - ay1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az1) / (ay3 - ay1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az1 <= k2 * (y1 - ay1) && z1 - az1 >= k2 * (y1 - ay1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (az3 - az2) / (ay3 - ay2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (z1 - az2 == parseInt(k2 * (y1 - ay2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl31Z() {
    ax1 = px1
    ay1 = py1 + r1
    az1 = pz1
    ax2 = parseInt(px1 - r1 * Math.pow(3, 1 / 2) / 2)
    ay2 = py1 - r1 / 2
    az2 = pz1
    ax3 = parseInt(px1 + r1 * Math.pow(3, 1 / 2) / 2)
    ay3 = py1 - r1 / 2
    az3 = pz1
    k2 = (ay2 - ay1) / (ax2 - ax1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (x1 - ax1) && y1 - ay1 >= k2 * (x1 - ax1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay1) / (ax3 - ax1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (x1 - ax1) && y1 - ay1 >= k2 * (x1 - ax1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay2) / (ax3 - ax2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay2 == parseInt(k2 * (x1 - ax2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl32Z() {
    ax1 = px1
    ay1 = py1 - r1
    az1 = pz1
    ax2 = parseInt(px1 - r1 * Math.pow(3, 1 / 2) / 2)
    ay2 = py1 + r1 / 2
    az2 = pz1
    ax3 = parseInt(px1 + r1 * Math.pow(3, 1 / 2) / 2)
    ay3 = py1 + r1 / 2
    az3 = pz1
    k2 = (ay2 - ay1) / (ax2 - ax1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (x1 - ax1 - 1) && y1 - ay1 >= k2 * (x1 - ax1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay1) / (ax3 - ax1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay1 <= k2 * (x1 - ax1 + 1) && y1 - ay1 >= k2 * (x1 - ax1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ay3 - ay2) / (ax3 - ax2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (y1 - ay2 == parseInt(k2 * (x1 - ax2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl33Z() {
    ax1 = px1 - r1
    ay1 = py1
    az1 = pz1
    ax2 = px1 + r1 / 2
    ay2 = parseInt(py1 - r1 * Math.pow(3, 1 / 2) / 2)
    az2 = pz1
    ax3 = px1 + r1 / 2
    ay3 = parseInt(py1 + r1 * Math.pow(3, 1 / 2) / 2)
    az3 = pz1
    k2 = (ax2 - ax1) / (ay2 - ay1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (y1 - ay1 - 1) && x1 - ax1 >= k2 * (y1 - ay1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax1) / (ay3 - ay1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (y1 - ay1 + 1) && x1 - ax1 >= k2 * (y1 - ay1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax2) / (ay3 - ay2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax2 == parseInt(k2 * (y1 - ay2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowl34Z() {
    ax1 = px1 + r1
    ay1 = py1
    az1 = pz1
    ax2 = px1 - r1 / 2
    ay2 = parseInt(py1 - r1 * Math.pow(3, 1 / 2) / 2)
    az2 = pz1
    ax3 = px1 - r1 / 2
    ay3 = parseInt(py1 + r1 * Math.pow(3, 1 / 2) / 2)
    az3 = pz1
    k2 = (ax2 - ax1) / (ay2 - ay1)
    a = Math.min(ax1, ax2), b = Math.max(ax1, ax2)
    c = Math.min(ay1, ay2), d = Math.max(ay1, ay2)
    e = Math.min(az1, az2), f = Math.max(az1, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (y1 - ay1) && x1 - ax1 >= k2 * (y1 - ay1 - 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax1) / (ay3 - ay1)
    a = Math.min(ax1, ax3), b = Math.max(ax1, ax3)
    c = Math.min(ay1, ay3), d = Math.max(ay1, ay3)
    e = Math.min(az1, az3), f = Math.max(az1, az3)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax1 <= k2 * (y1 - ay1) && x1 - ax1 >= k2 * (y1 - ay1 + 1)) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
    k2 = (ax3 - ax2) / (ay3 - ay2)
    a = Math.min(ax3, ax2), b = Math.max(ax3, ax2)
    c = Math.min(ay3, ay2), d = Math.max(ay3, ay2)
    e = Math.min(az3, az2), f = Math.max(az3, az2)
    for (var x1 = a; x1 <= b; x1++) {
        for (var y1 = c; y1 <= d; y1++) {
            for (var z1 = e; z1 <= f; z1++) {
                if (x1 - ax2 == parseInt(k2 * (y1 - ay2))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
            }
        }
    }
}

function hollowliumangxingY() {
    hollowl31Y()
    hollowl32Y()
    hollowl33Y()
    hollowl34Y()
}

function hollowliumangxingX() {
    hollowl31X()
    hollowl32X()
    hollowl33X()
    hollowl34X()
}

function hollowliumangxingZ() {
    hollowl31Z()
    hollowl32Z()
    hollowl33Z()
    hollowl34Z()
}

function forline() {
    k1 = (px2 - px1) / (py2 - py1)
    k2 = (px2 - px1) / (pz2 - pz1)
    for (var x1 = a; x1 <= b; x1++)
        for (var y1 = c; y1 <= d; y1++)
            for (var z1 = e; z1 <= f; z1++)
                if (x1 - px1 == parseInt(k1 * (y1 - py1)) && x1 - px1 == parseInt(k2 * (z1 - pz1)) && parseInt(k1 * (y1 - py1)) == parseInt(k2 * (z1 - pz1))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
}

function forline1() {
    k1 = (px2 - px1) / (py2 - py1)
    k2 = (px2 - px1) / (pz2 - pz1)
    for (var x1 = a; x1 <= b; x1++)
        for (var y1 = c; y1 <= d; y1++)
            for (var z1 = e; z1 <= f; z1++)
                if (x1 - px1 == parseInt(k1 * (y1 - py1)) && x1 - px1 == parseInt(k2 * (z1 - pz1)) && parseInt(k1 * (y1 - py1)) == parseInt(k2 * (z1 - pz1))) {
                    for (var i1 = 0; i1 <= r1; i1++)
                        setTile(x1 + getRandom(-r1 - 1, r1), y1 + getRandom(-r1 - 1, r1), z1 + getRandom(-r1 - 1, r1), blockid1, data1)
                }
}

function roundstarY() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r2 - 1) * (r2 - 1)) {
                for (var i1 = 0; i1 <= r2; i1++)
                    setTile(px1 + x1 + getRandom(-r2 - 1, r2), py1 + getRandom(-r2 - 1, r2), pz1 + z1 + getRandom(-r2 - 1, r2), blockid1, data1)
            }
}

function roundstarX() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r2 - 1) * (r2 - 1)) {
                for (var i1 = 0; i1 <= r2; i1++)
                    setTile(px1 + getRandom(-r2 - 1, r2), py1 + y1 + getRandom(-r2 - 1, r2), pz1 + z1 + getRandom(-r2 - 1, r2), blockid1, data1)
            }
}

function roundstarZ() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r2 - 1) * (r2 - 1)) {
                for (var i1 = 0; i1 <= r2; i1++)
                    setTile(px1 + x1 + getRandom(-r2 - 1, r2), py1 + y1 + getRandom(-r2 - 1, r2), pz1 + getRandom(-r2 - 1, r2), blockid1, data1)
            }
}

function spherestar() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var y1 = -b1; y1 <= b1; y1++)
            for (var z1 = -c1; z1 <= c1; z1++)
                if (x1 * x1 * b1 * b1 * c1 * c1 + y1 * y1 * a1 * a1 * c1 * c1 + z1 * z1 * a1 * a1 * b1 * b1 <= a1 * a1 * b1 * b1 * c1 * c1 && x1 * x1 * b1 * b1 * c1 * c1 + y1 * y1 * a1 * a1 * c1 * c1 + z1 * z1 * a1 * a1 * b1 * b1 >= (a1 - 1) * (a1 - 1) * (b1 - 1) * (b1 - 1) * (c1 - 1) * (c1 - 1)) {
                    for (var i1 = 0; i1 <= r2; i1++)
                        setTile(px1 + x1 + getRandom(-r2 - 1, r2), py1 + y1 + getRandom(-r2 - 1, r2), pz1 + z1 + getRandom(-r2 - 1, r2), blockid1, data1)
                }
}

function forcpt() {
    d = cptf - 1
    for (var x1 = 0; x1 <= 256; x1++)
        for (var y1 = -128; y1 <= d; y1++)
            for (var z1 = 0; z1 <= 256; z1++)
                setTile(x1, y1, z1, blockid1, data1)
    if (cpto == 1) {
        c = cptf
        if (c <= 64) {
            for (var x1 = 0; x1 <= 256; x1++)
                for (var y1 = -128; c + y1 <= 128; y1++)
                    for (var z1 = 0; z1 <= 256; z1++)
                        setTile(x1, c + y1, z1, 0)
            setTile(128, 64, 128, 1)
        }
        if (c > 64) {
            for (var x1 = 0; x1 <= 256; x1++) {
                for (var y1 = -128; c + y1 <= 128; y1++) {
                    for (var z1 = 0; z1 <= 256; z1++) {
                        setTile(x1, c + y1, z1, 0)
                    }
                }
            }
        }
    }
}

function solidc3() {
    k1 = (px2 - px1) / (py2 - py1)
    k2 = (px2 - px1) / (pz2 - pz1)
    k3 = (py2 - py1) / (pz2 - pz1)
    for (var x1 = a; x1 <= b; x1++)
        for (var y1 = c; y1 <= d; y1++)
            for (var z1 = e; z1 <= f; z1++)
                if (x1 - px1 == parseInt(k1 * (y1 - py1)) && x1 - px1 == parseInt(k2 * (z1 - pz1)) && parseInt(k1 * (y1 - py1)) == parseInt(k2 * (z1 - pz1))) {
                    for (var y2 = -r1; y2 <= r1; y2++)
                        for (var z2 = -r1; z2 <= r1; z2++)
                            if (y2 * y2 + z2 * z2 <= r1 * r1) {
                                setTile(x1 + Math.sin(Math.atan(-1 * k3)), y1 + y2 + Math.sin(Math.atan(-1 * k1)), z1 + z2 + Math.sin(Math.atan(-1 * k2)), blockid1, data1)
                            }
                }
}

function hollowc3() {
    k1 = (px2 - px1) / (py2 - py1)
    k2 = (px2 - px1) / (pz2 - pz1)
    k3 = (py2 - py1) / (pz2 - pz1)
    for (var x1 = a; x1 <= b; x1++)
        for (var y1 = c; y1 <= d; y1++)
            for (var z1 = e; z1 <= f; z1++)
                if (x1 - px1 == parseInt(k1 * (y1 - py1)) && x1 - px1 == parseInt(k2 * (z1 - pz1)) && parseInt(k1 * (y1 - py1)) == parseInt(k2 * (z1 - pz1))) {
                    for (var y2 = -r1; y2 <= r1; y2++)
                        for (var z2 = -r1; z2 <= r1; z2++)
                            if (y2 * y2 + z2 * z2 <= r1 * r1 && y2 * y2 + z2 * z2 >= (r1 - 1) * (r1 - 1)) {
                                setTile(x1 + Math.sin(Math.atan(-1 * k3)), y1 + y2 + Math.sin(Math.atan(-1 * k1)), z1 + z2 + Math.sin(Math.atan(-1 * k2)), blockid1, data1)
                            }
                }
}

function solidc4Y() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var z1 = -c1; z1 <= c1; z1++)
            if (x1 * x1 * c1 * c1 + z1 * z1 * a1 * a1 <= a1 * a1 * c1 * c1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollowc4Y() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var z1 = -c1; z1 <= c1; z1++)
            if (x1 * x1 * c1 * c1 + z1 * z1 * a1 * a1 <= a1 * a1 * c1 * c1 && x1 * x1 * c1 * c1 + z1 * z1 * a1 * a1 >= (a1 - 1) * (a1 - 1) * (c1 - 1) * (c1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solidc4X() {
    for (var y1 = -b1; y1 <= b1; y1++)
        for (var z1 = -c1; z1 <= c1; z1++)
            if (y1 * y1 * c1 * c1 + z1 * z1 * b1 * b1 <= b1 * b1 * c1 * c1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollowc4X() {
    for (var y1 = -b1; y1 <= b1; y1++)
        for (var z1 = -c1; z1 <= c1; z1++)
            if (y1 * y1 * c1 * c1 + z1 * z1 * b1 * b1 <= b1 * b1 * c1 * c1 && y1 * y1 * c1 * c1 + z1 * z1 * b1 * b1 >= (b1 - 1) * (b1 - 1) * (c1 - 1) * (c1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solidc4Z() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var y1 = -b1; z1 <= b1; y1++)
            if (x1 * x1 * b1 * b1 + y1 * y1 * a1 * a1 <= a1 * a1 * b1 * b1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollowc4Z() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var y1 = -b1; y1 <= b1; y1++)
            if (x1 * x1 * b1 * b1 + y1 * y1 * a1 * a1 <= a1 * a1 * b1 * b1 && x1 * x1 * b1 * b1 + y1 * y1 * a1 * a1 <= (a1 - 1) * (a1 - 1) * (b1 - 1) * (b1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solidc5() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var y1 = -b1; y1 <= b1; y1++)
            for (var z1 = -c1; z1 <= c1; z1++)
                if (x1 * x1 * b1 * b1 * c1 * c1 + y1 * y1 * a1 * a1 * c1 * c1 + z1 * z1 * a1 * a1 * b1 * b1 <= a1 * a1 * b1 * b1 * c1 * c1) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function hollowc5() {
    for (var x1 = -a1; x1 <= a1; x1++)
        for (var y1 = -b1; y1 <= b1; y1++)
            for (var z1 = -c1; z1 <= c1; z1++)
                if (x1 * x1 * b1 * b1 * c1 * c1 + y1 * y1 * a1 * a1 * c1 * c1 + z1 * z1 * a1 * a1 * b1 * b1 <= a1 * a1 * b1 * b1 * c1 * c1 && x1 * x1 * b1 * b1 * c1 * c1 + y1 * y1 * a1 * a1 * c1 * c1 + z1 * z1 * a1 * a1 * b1 * b1 >= (a1 - 1) * (a1 - 1) * (b1 - 1) * (b1 - 1) * (c1 - 1) * (c1 - 1)) {
                    setTile(px1 + x1, py1 + y1, pz1 + z1, blockid1, data1)
                }
}

function universeY1() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1, py1, pz1 + z1 - (r1 / 2), blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1, py1, pz1 + z1 + (r1 / 2), blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1 + x1, py1, pz1 + z1 - (r1 / 2), blockid2, data2)
                setTile(px1 + x1, py1, pz1 + z1 + (r1 / 2), blockid1, data1)
            }
}

function universeY2() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1 - (r1 / 2), py1, pz1 + z1, blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1 + (r1 / 2), py1, pz1 + z1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1 + x1 - (r1 / 2), py1, pz1 + z1, blockid2, data2)
                setTile(px1 + x1 + (r1 / 2), py1, pz1 + z1, blockid1, data1)
            }
}

function universeX1() {
    for (var y1 = -r1; y1 <= 0; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
    for (var y1 = 0; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid2, data2)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1, py1 + y1, pz1 + z1 - (r1 / 2), blockid1, data1)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1, py1 + y1, pz1 + z1 + (r1 / 2), blockid2, data2)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1, py1 + y1, pz1 + z1 - (r1 / 2), blockid1, data1)
                setTile(px1, py1 + y1, pz1 + z1 + (r1 / 2), blockid2, data2)
            }
}

function universeX2() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid2, data2)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1, py1 + y1 - (r1 / 2), pz1 + z1, blockid1, data1)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1, py1 + y1 + (r1 / 2), pz1 + z1, blockid2, data2)
            }
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1, py1 + y1 - (r1 / 2), pz1 + z1, blockid2, data2)
                setTile(px1, py1 + y1 + (r1 / 2), pz1 + z1, blockid1, data1)
            }
}

function universeZ1() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1 - (r1 / 2), py1 + y1, pz1, blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1 + (r1 / 2), py1 + y1, pz1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1 + x1 - (r1 / 2), py1 + y1, pz1, blockid2, data2)
                setTile(px1 + x1 + (r1 / 2), py1 + y1, pz1, blockid1, data1)
            }
}

function universeZ2() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1, py1 + y1 - (r1 / 2), pz1, blockid1, data1)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 2) * (r1 / 2)) {
                setTile(px1 + x1, py1 + y1 + (r1 / 2), pz1, blockid2, data2)
            }
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= (r1 / 8) * (r1 / 8)) {
                setTile(px1 + x1, py1 + y1 - (r1 / 2), pz1, blockid2, data2)
                setTile(px1 + x1, py1 + y1 + (r1 / 2), pz1, blockid1, data1)
            }
}

function solidhalfsphereY1() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solidhalfsphereY2() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solidhalfsphereX1() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solidhalfsphereX2() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solidhalfsphereZ1() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solidhalfsphereZ2() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollowhalfsphereY1() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollowhalfsphereY2() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollowhalfsphereX1() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollowhalfsphereX2() {
    for (var y1 = -r1; y1 <= r1; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollowhalfsphereZ1() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollowhalfsphereZ2() {
    for (var x1 = -r1; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solid4sphereY1() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereY2() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereY3() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereY4() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereX1() {
    for (var y1 = 0; y1 <= r1; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereX2() {
    for (var y1 = 0; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereX3() {
    for (var y1 = -r1; y1 <= 0; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereX4() {
    for (var y1 = -r1; y1 <= 0; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function solid4sphereZ1() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solid4sphereZ2() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solid4sphereZ3() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function solid4sphereZ4() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollow4sphereY1() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereY2() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereY3() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereY4() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (x1 * x1 + z1 * z1 <= r1 * r1 && x1 * x1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereX1() {
    for (var y1 = 0; y1 <= r1; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereX2() {
    for (var y1 = 0; y1 <= r1; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereX3() {
    for (var y1 = -r1; y1 <= 0; y1++)
        for (var z1 = -r1; z1 <= 0; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereX4() {
    for (var y1 = -r1; y1 <= 0; y1++)
        for (var z1 = 0; z1 <= r1; z1++)
            if (y1 * y1 + z1 * z1 <= r1 * r1 && y1 * y1 + z1 * z1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1, py1 + y1, pz1 + z1, blockid1, data1)
            }
}

function hollow4sphereZ1() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollow4sphereZ2() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var y1 = 0; y1 <= r1; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollow4sphereZ3() {
    for (var x1 = -r1; x1 <= 0; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollow4sphereZ4() {
    for (var x1 = 0; x1 <= r1; x1++)
        for (var y1 = -r1; y1 <= 0; y1++)
            if (x1 * x1 + y1 * y1 <= r1 * r1 && x1 * x1 + y1 * y1 >= (r1 - 1) * (r1 - 1)) {
                setTile(px1 + x1, py1 + y1, pz1, blockid1, data1)
            }
}

function hollowduobianxingY() {
    px11 = px1
    py11 = py1
    pz11 = pz1
    px21 = px2
    py21 = py2
    pz21 = pz2
    py2 = py1
    duobianxingpointX = new Array()
    duobianxingpointZ = new Array()
    for (var i = 1; i <= duobianxingbianshu; i++)
        duobianxingpointX[duobianxingpointX.length] = Math.sin((duobianxingbianshu - 2) * 180 / duobianxingbianshu * Math.PI / 360 * i) * r1
    duobianxingpointZ[duobianxingpointZ.length] = Math.cos((duobianxingbianshu - 2) * 180 / duobianxingbianshu * Math.PI / 360 * i) * r1
    for (var i = 0; i <= duobianxingpointX.length; i++)
        px1 = px11 + duobianxingpointX[i]
    pz1 = pz11 + duobianxingpointZ[i]
    px2 = px21 + duobianxingpointX[i + 1]
    pz2 = pz21 + duobianxingpointZ[i + 1]
    a = Math.min(px1, px2), b = Math.max(px1, px2)
    c = Math.min(py1, py2), d = Math.max(py1, py2)
    e = Math.min(pz1, pz2), f = Math.max(pz1, pz2)
    k1 = (px2 - px1) / (py2 - py1)
    k2 = (px2 - px1) / (pz2 - pz1)
    for (var x1 = a; x1 <= b; x1++)
        for (var y1 = c; y1 <= d; y1++)
            for (var z1 = e; z1 <= f; z1++)
                if (x1 - px1 == parseInt(k1 * (y1 - py1)) && x1 - px1 == parseInt(k2 * (z1 - pz1)) && parseInt(k1 * (y1 - py1)) == parseInt(k2 * (z1 - pz1))) {
                    setTile(x1, y1, z1, blockid1, data1)
                }
    duobianxingpointX = new Array()
    duobianxingpointZ = new Array()
    px1 = px11
    py1 = py11
    pz1 = pz11
    px2 = px21
    py2 = py21
    pz2 = pz21
}

function dxbj() {
    if (exmode == 0) {
        if (exmode2 != 1) {
            zt1 = parseInt(Math.abs(px2 - px1) * 2)
            zt2 = parseInt(Math.abs(pz2 - pz1) * 2)
        }
        if (exmode2 == 1) {
            zt1 = 8
            zt2 = 8
        }
    }
    if (zcx1 == 1) {
        for (var i1 = 0; i1 <= b - a; i1++)
            for (var i2 = 0; i2 <= f - e; i2++) {
                {
                    if (exmode2 == 1) {
                        if (i1 / 8 == parseInt(i1 / 8)) {
                            zmax1 = parseInt(Math.abs(py2 - py1) - 5) - getRandom(-1, Math.abs((Math.abs(d - c) - 1)) / 8)
                        }
                    }
                    h1 = Math.sin(Math.PI * 2 * i1 / zt1) * zmax1 + getRandom(zdq1 - 1, zdq1)
                    h2 = Math.sin(Math.PI * 2 * i2 / zt2) * zmax1 + getRandom(zdq1 - 1, zdq1)
                    h3 = Math.min(h1, h2)
                    for (var y1 = c; y1 <= c + h3; y1++) {
                        setTile(a + i1, y1, e + i2, blockid1, data1)
                    }
                }
            }
    }
    if (zcx1 == 2) {
        for (var i1 = 0; i1 <= b - a; i1++)
            for (var i2 = 0; i2 <= f - e; i2++) {
                {
                    if (exmode2 == 1) {
                        if (i1 / 8 == parseInt(i1 / 8)) {
                            zmax1 = parseInt(Math.abs(py2 - py1) - 5) - getRandom(-1, Math.abs((Math.abs(d - c) - 1)) / 8)
                        }
                    }
                    h1 = Math.cos(Math.PI * 2 * i1 / zt1) * zmax1 + getRandom(zdq1 - 1, zdq1)
                    h2 = Math.cos(Math.PI * 2 * i2 / zt2) * zmax1 + getRandom(zdq1 - 1, zdq1)
                    h3 = Math.min(h1, h2)
                    for (var y1 = c; y1 <= c + h3; y1++) {
                        setTile(a + i1, y1, e + i2, blockid1, data1)
                    }
                }
            }
    }
    exmode2 = 0
}

function modTick() {
    px = parseInt(Player.getX())
    py = parseInt(Player.getY())
    pz = parseInt(Player.getZ())
    if (xiaochufangkuai == 1) {
        for (var xx1 = -1; xx1 <= 1; xx1++)
            for (var yy1 = -1; yy1 <= 1; yy1++)
                for (var zz1 = -1; zz1 <= 1; zz1++) {
                    {
                        {
                            setTile(px + xx1, py + yy1, pz + zz1, 0)
                        }
                    }
                }
    }
    if (mode != -1) {
        go++
        if (go >= 1) {
            action()
        }
    }
    if (pl == 1 && getCarriedItem() <= 255) {
        setTile(parseInt(px), parseInt(py) - 2, parseInt(pz), Player.getCarriedItem(), Player.getCarriedItemData())
    }
    if (yidongguangyuan == 1) {
        yidongguangyuan2 = Level.spawnMob(px - 1 * Math.sin((getYaw()) / 180 * Math.PI) * 5, py - 1 * Math.sin((getPitch()) / 180 * Math.PI) * 8 + 2, pz + Math.cos((getYaw()) / 180 * Math.PI) * 8, 81)
        Entity.setFireTicks(yidongguangyuan2, 10000)
        yidongguangyuan++
    }
    if (yidongguangyuan >= 2) {
        yidongguangyuan++
        setPosition(yidongguangyuan2, px - 1 * Math.sin(getYaw() / 180 * Math.PI) * 5, py - 1 * Math.sin((getPitch()) / 180 * Math.PI) * 5 + 1, pz + Math.cos((getYaw() + 20) / 180 * Math.PI) * 5)
        Entity.setVelY(yidongguangyuan2, 0)
    }
    if (yidongguangyuan >= 100) {
        Entity.remove(yidongguangyuan2)
        yidongguangyuan = 1
    }
    if (escape == 1) {
        if (Level.getTile(px, py - 1, pz) != 0) {
            setPosition(pe, px, py + 2, pz)
        }
        if (Level.getTile(px, py - 1, pz) == 0) {
            escape = 0
            toast("成功逃出方块")
        }
    }
    if (set == 1) {
        set = 0
        setTile(ex, ey, ez, 2)
    }
    if (speed1 != 0.6) {
        if (SDs == 1) {
            if (SD == 1) {
                SDpx = px
                SDpz = pz
                SD++
            } else {
                SD++
            }
            if (SD == 3) {
                SDX = (px - SDpx) * speed1
                SDZ = (pz - SDpz) * speed1
                setVelX(pe, SDX)
                setVelZ(pe, SDZ)
                SD = 1
            }
        }
        if (SDt == 0) {
            SDs = 0
            SDt = 600
        } else {
            SDt--
            SDs = 1
        }
    }
    if (day == 1) {
        Level.setTime(4300)
    }
    if (day == 2) {
        Level.setTime(13200)
    }
    if (t >= 0) {
        t++
        if (t / 20 == T) {
            t = 0
            mode = mode2
        }
    }
    if (flymode == 2) {
        setVelX(pe, -1 * Math.sin(getYaw() / 180 * Math.PI) * 0.4)
        setVelZ(pe, Math.cos(getYaw() / 180 * Math.PI) * 0.4)
        setVelY(pe, -1 * Math.sin((getPitch()) / 180 * Math.PI) * 0.6)
    }
    if (eventweapon == 1) {
        if (weaponfkd == 1) {
            superweaponaction1()
        }
        if (weaponfkd == 0) {
            superweaponaction0()
        }
    }
    if (xikuang == 1) {
        superxikuang()
    }
    if (tunkuang == 1) {
        supertunkuang()
    }
    if (offfire == 1) {
        offfire++
    }
    if (offfire == 2) {
        for (var x1 = -80; x1 <= 80; x1++)
            for (var y1 = -40; y1 <= 40; y1++)
                for (var z1 = -80; z1 <= 80; z1++)
                    if (getTile(px + x1, py + y1, pz + z1) == 51) {
                        setTile(px + x1, py + y1, pz + z1, 0)
                    }
        offfire = 0
    }
}

function destroyBlock(x, y, z) {
    if (event2 == 1) {
        preventDefault()
    }
}

function toast(str) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            android.widget.Toast.makeText(ctx, str, 0).show()
        }
    }))
}

function dip2px(ctx, dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density)
}

function makeMenu(ctx, menu, layout) {
    var mlayout = new android.widget.RelativeLayout(ctx)
    var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
    var scrollview = new android.widget.ScrollView(ctx)
    var pad = dip2px(ctx, 5)
    scrollview.setPadding(pad, pad, pad, pad)
    scrollview.setLayoutParams(svParams)
    scrollview.addView(layout)
    mlayout.addView(scrollview)
    return mlayout
}

function dismissmenu() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (openWindow != null) openWindow.dismiss();
            openWindow = null
            if (openWindow2 != null) openWindow2.dismiss();
            openWindow2 = null
            if (openWindow3 != null) openWindow3.dismiss();
            openWindow3 = null
            if (openWindow4 != null) openWindow4.dismiss();
            openWindow4 = null
            if (openWindow5 != null) openWindow5.dismiss();
            openWindow5 = null
            if (openWindow6 != null) openWindow6.dismiss();
            openWindow6 = null
        }
    }))
}

function dismisssuperweapon() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (openWindow2 != null) openWindow2.dismiss();
            openWindow2 = null
            if (openWindow4 != null) openWindow4.dismiss();
            openWindow4 = null
        }
    }))
}

function dismissagain() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (openWindow3 != null) openWindow3.dismiss();
            openWindow3 = null
        }
    }))
}

function dismissmpitem() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (openWindow5 != null) openWindow5.dismiss();
            openWindow5 = null
        }
    }))
}

function dismissflyingmode() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            if (openWindow6 != null) openWindow6.dismiss();
            openWindow6 = null
        }
    }))
}

function window() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var MP = new android.widget.Button(ctx)
                MP.setText("MP")
                MP.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                MP.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openMenu()
                    }
                })
                layout.addView(MP)
                openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 55), dip2px(ctx, 38))
                openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 200, 0)
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function superweapon() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var F = new android.widget.Button(ctx)
                F.setText("⊙")
                F.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                F.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        tw = 0
                        tws = 0
                    }
                })
                layout.addView(F)
                openWindow2 = new android.widget.PopupWindow(layout, dip2px(ctx, 40), dip2px(ctx, 40))
                openWindow2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 280)
                superweapon2()
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function superweapon2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var F2 = new android.widget.Button(ctx)
                F2.setText("F")
                F2.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                F2.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        superweaponmenu()
                    }
                })
                layout.addView(F2)
                openWindow4 = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35))
                openWindow4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, 0, 350)
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function flyingmode() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var flybutton = new android.widget.Button(ctx)
                flybutton.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                if (flymode == 2) {
                    flybutton.setText("on")
                } else {
                    flybutton.setText("off")
                }
                flybutton.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        if (flymode == 1) {
                            flybutton.setText("on")
                            flymode = 2
                        } else {
                            flybutton.setText("off")
                            flymode = 1
                        }
                    }
                })
                layout.addView(flybutton)
                openWindow6 = new android.widget.PopupWindow(layout, dip2px(ctx, 50), dip2px(ctx, 40))
                openWindow6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 490)
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function mpitem() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var mpi = new android.widget.Button(ctx)
                mpi.setText("☆")
                mpi.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                mpi.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        changeitem()
                    }
                })
                layout.addView(mpi)
                openWindow5 = new android.widget.PopupWindow(layout, dip2px(ctx, 40), dip2px(ctx, 40))
                openWindow5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0)
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function again() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx)
                var A = new android.widget.Button(ctx)
                A.setText("▲")
                A.setBackgroundColor(android.graphics.Color.argb(50, 255, 255, 255))
                A.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        if (dk != 0) {
                            blockid1 = Player.getCarriedItem()
                            data1 = Player.getCarriedItemData()
                        }
                        mode = mode2
                    }
                })
                layout.addView(A)
                openWindow3 = new android.widget.PopupWindow(layout, dip2px(ctx, 40), dip2px(ctx, 40))
                openWindow3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 400)
            } catch (err) {
                clientMessage("Error" + err)
            }
        }
    }))
}

function superweaponaction1() {
    if (tw >= 0 && tws < fire2) {
        tw++
        if (tw >= fire3) {
            weaponvx = -1 * Math.sin(getYaw() / 180 * Math.PI) * weaponv / 10
            weaponvy = -1 * Math.sin((getPitch()) / 180 * Math.PI) * weaponv / 10
            weaponvz = Math.cos(getYaw() / 180 * Math.PI) * weaponv / 10
            entityweapon = Level.spawnMob(px + weaponvx * 2.2, py + weaponvy * 2.2, pz + weaponvz * 2.2, entityweaponid)
            setVelX(entityweapon, weaponvx * weaponv / 10)
            setVelZ(entityweapon, weaponvz * weaponv / 10)
            setVelY(entityweapon, weaponvy * weaponv / 10)
            tw = 0
            tws++
            if (fire4 > 1) {
                for (var i = 0; i < fire4 - 1; i++) {
                    weaponvx = -1 * Math.sin((getYaw() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    weaponvy = -1 * Math.sin((getPitch() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    weaponvz = Math.cos((getYaw() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    entityweapon = Level.spawnMob(px + weaponvx * 2, py + weaponvy * 2, pz + weaponvz * 2, entityweaponid)
                    setVelX(entityweapon, weaponvx)
                    setVelZ(entityweapon, weaponvz)
                    setVelY(entityweapon, weaponvy)
                }
            }
        }
        if (weaponfly == 1) {
            rideAnimal(pe, entityweapon)
        }
        if (tws >= fire2) {
            tw = -1
            tws - 1
        }
    }
    if (weaponyk == 1) {
        setVelX(entityweapon, -1 * Math.sin(getYaw() / 180 * Math.PI) * weaponv / 10)
        setVelZ(entityweapon, Math.cos(getYaw() / 180 * Math.PI) * weaponv / 10)
        setVelY(entityweapon, -1 * Math.sin((getPitch()) / 180 * Math.PI) * weaponv / 10)
    }
    for (var weaponi1 = -0.5; weaponi1 <= 0.5; weaponi1++)
        for (var weaponi2 = -0.5; weaponi2 <= 0.5; weaponi2++)
            for (var weaponi3 = -0.5; weaponi3 <= 0.5; weaponi3++)
                if (getTile(parseInt(Entity.getX(entityweapon) + weaponi1), parseInt(Entity.getY(entityweapon) + weaponi2), parseInt(Entity.getZ(entityweapon) + weaponi3)) != 0) {
                    if (weaponexplode1 > 0) {
                        explode(Entity.getX(entityweapon), Entity.getY(entityweapon), Entity.getZ(entityweapon), weaponexplode1)
                    }
                    if (weaponexplode2 > 0) {
                        for (var x1 = -weaponexplode2; x1 <= weaponexplode2; x1++)
                            for (var y1 = -weaponexplode2; y1 <= weaponexplode2; y1++)
                                for (var z1 = -weaponexplode2; z1 <= weaponexplode2; z1++)
                                    if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode2 * weaponexplode2 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1) != 0 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1 + 1, Entity.getZ(entityweapon) + z1) == 0) {
                                        setTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1 + 1, Entity.getZ(entityweapon) + z1, 51)
                                    }
                    }
                    if (weaponexplode3 > 0) {
                        for (var x1 = -weaponexplode3; x1 <= weaponexplode3; x1++)
                            for (var y1 = -weaponexplode3; y1 <= weaponexplode3; y1++)
                                for (var z1 = -weaponexplode3; z1 <= weaponexplode3; z1++)
                                    if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode3 * weaponexplode3 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1) != 0 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1 + 1, Entity.getZ(entityweapon) + z1) == 0) {
                                        setTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1, 79)
                                    }
                    }
                    if (weaponexplode4 > 0) {
                        for (var x1 = -weaponexplode4; x1 <= weaponexplode4; x1++)
                            for (var y1 = -weaponexplode4; y1 <= weaponexplode4; y1++)
                                for (var z1 = -weaponexplode4; z1 <= weaponexplode4; z1++)
                                    if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode4 * weaponexplode4 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1) != 0 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1 + 1, Entity.getZ(entityweapon) + z1) == 0) {
                                        setTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1, 10)
                                    }
                    }
                    if (weaponexplode5 > 0) {
                        for (var x1 = -weaponexplode5; x1 <= weaponexplode5; x1++)
                            for (var y1 = -weaponexplode5; y1 <= weaponexplode5; y1++)
                                for (var z1 = -weaponexplode5; z1 <= weaponexplode5; z1++)
                                    if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode5 * weaponexplode5 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1) != 0 && getTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1 + 1, Entity.getZ(entityweapon) + z1) == 0) {
                                        setTile(Entity.getX(entityweapon) + x1, Entity.getY(entityweapon) + y1, Entity.getZ(entityweapon) + z1, 8)
                                    }
                    }
                    if (weaponexplode6 > 0) {
                        for (var x1 = -weaponexplode6; x1 <= weaponexplode6; x1++)
                            for (var y1 = -weaponexplode6; y1 <= weaponexplode6; y1++)
                                for (var z1 = -weaponexplode6; z1 <= weaponexplode6; z1++)
                                    if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode6 * weaponexplode6) {
                                        setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 0)
                                    }
                    }
                    if (weapontp == 1) {
                        setPosition(pe, Entity.getX(entityweapon), Entity.getY(entityweapon) + 1, Entity.getZ(entityweapon))
                    }
                }
}

function superweaponaction0() {
    if (tw >= 0 && tws < fire2) {
        tw++
        if (tw >= fire3) {
            weaponvx[weaponvx.length] = -1 * Math.sin(getYaw() / 180 * Math.PI) * weaponv / 10
            weaponvy[weaponvy.length] = -1 * Math.sin((getPitch()) / 180 * Math.PI) * weaponv / 10
            weaponvz[weaponvz.length] = Math.cos(getYaw() / 180 * Math.PI) * weaponv / 10
            entityweapon[entityweapon.length] = Level.spawnMob(px + weaponvx[weaponvx.length - 1] * 2.2, py + weaponvy[weaponvy.length - 1] * 2.2, pz + weaponvz[weaponvz.length - 1] * 2.2, entityweaponid)
            setVelX(entityweapon[entityweapon.length - 1], weaponvx[weaponvx.length - 1] * weaponv / 10)
            setVelZ(entityweapon[entityweapon.length - 1], weaponvz[weaponvz.length - 1] * weaponv / 10)
            setVelY(entityweapon[entityweapon.length - 1], weaponvy[weaponvy.length - 1] * weaponv / 10)
            tw = 0
            tws++
            if (fire4 > 1) {
                for (var i = 0; i < fire4 - 1; i++) {
                    weaponvx[weaponvx.length] = -1 * Math.sin((getYaw() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    weaponvy[weaponvy.length] = -1 * Math.sin((getPitch() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    weaponvz[weaponvz.length] = Math.cos((getYaw() + getRandom(-21, 20)) / 180 * Math.PI) * weaponv / 10
                    entityweapon[entityweapon.length] = Level.spawnMob(px + weaponvx[weaponvx.length - 1] * 2, py + weaponvy[weaponvy.length - 1] * 2, pz + weaponvz[weaponvz.length - 1] * 2, entityweaponid)
                    setVelX(entityweapon[entityweapon.length - 1], weaponvx[weaponvx.length - 1])
                    setVelZ(entityweapon[entityweapon.length - 1], weaponvz[weaponvz.length - 1])
                    setVelY(entityweapon[entityweapon.length - 1], weaponvy[weaponvy.length - 1])
                }
            }
        }
        if (weaponfly == 1) {
            rideAnimal(pe, entityweapon[entityweapon.length - 1])
        }
        if (tws >= fire2) {
            tw = -1
            tws - 1
        }
    }
    for (var i = 0; i <= entityweapon.length; i++) {
        if (weaponyk == 1) {
            setVelX(entityweapon[i], -1 * Math.sin(getYaw() / 180 * Math.PI) * weaponv / 10)
            setVelZ(entityweapon[i], Math.cos(getYaw() / 180 * Math.PI) * weaponv / 10)
            setVelY(entityweapon[i], -1 * Math.sin((getPitch()) / 180 * Math.PI) * weaponv / 10)
        }
        for (var weaponi1 = -0.5; weaponi1 <= 0.5; weaponi1++)
            for (var weaponi2 = -0.5; weaponi2 <= 0.5; weaponi2++)
                for (var weaponi3 = -0.5; weaponi3 <= 0.5; weaponi3++)
                    if (getTile(Entity.getX(entityweapon[i]) + weaponi1, Entity.getY(entityweapon[i]) + weaponi2, Entity.getZ(entityweapon[i]) + weaponi3) != 0) {
                        if (weaponexplode1 > 0) {
                            explode(Entity.getX(entityweapon[i]), Entity.getY(entityweapon[i]), Entity.getZ(entityweapon[i]), weaponexplode1)
                        }
                        if (weaponexplode2 > 0) {
                            for (var x1 = -weaponexplode2; x1 <= weaponexplode2; x1++)
                                for (var y1 = -weaponexplode2; y1 <= weaponexplode2; y1++)
                                    for (var z1 = -weaponexplode2; z1 <= weaponexplode2; z1++)
                                        if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode2 * weaponexplode2) {
                                            setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 51)
                                        }
                        }
                        if (weaponexplode3 > 0) {
                            for (var x1 = -weaponexplode3; x1 <= weaponexplode3; x1++)
                                for (var y1 = -weaponexplode3; y1 <= weaponexplode3; y1++)
                                    for (var z1 = -weaponexplode3; z1 <= weaponexplode3; z1++)
                                        if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode3 * weaponexplode3) {
                                            setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 79)
                                        }
                        }
                        if (weaponexplode4 > 0) {
                            for (var x1 = -weaponexplode4; x1 <= weaponexplode4; x1++)
                                for (var y1 = -weaponexplode4; y1 <= weaponexplode4; y1++)
                                    for (var z1 = -weaponexplode4; z1 <= weaponexplode4; z1++)
                                        if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode4 * weaponexplode4) {
                                            setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 10)
                                        }
                        }
                        if (weaponexplode5 > 0) {
                            for (var x1 = -weaponexplode5; x1 <= weaponexplode5; x1++)
                                for (var y1 = -weaponexplode5; y1 <= weaponexplode5; y1++)
                                    for (var z1 = -weaponexplode5; z1 <= weaponexplode5; z1++)
                                        if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode5 * weaponexplode5) {
                                            setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 8)
                                        }
                        }
                        if (weaponexplode6 > 0) {
                            for (var x1 = -weaponexplode6; x1 <= weaponexplode6; x1++)
                                for (var y1 = -weaponexplode6; y1 <= weaponexplode6; y1++)
                                    for (var z1 = -weaponexplode6; z1 <= weaponexplode6; z1++)
                                        if (x1 * x1 + y1 * y1 + z1 * z1 <= weaponexplode6 * weaponexplode6) {
                                            setTile(Entity.getX(entityweapon[i]) + x1, Entity.getY(entityweapon[i]) + y1, Entity.getZ(entityweapon[i]) + z1, 0)
                                        }
                        }
                        if (weapontp == 1) {
                            setPosition(pe, Entity.getX(entityweapon[i]), Entity.getY(entityweapon[i]) + 1, Entity.getZ(entityweapon[i]))
                        }
                        if (Entity.getEntityTypeId(entityweapon[i]) == 80 || Entity.getY(entityweapon[i]) - py >= 50 || Entity.getX(entityweapon[i]) - px >= 50 || Entity.getZ(entityweapon[i]) - pz >= 50 || Entity.getY(entityweapon[i]) >= 127) {
                            Entity.remove(entityweapon[i])
                        }
                        entityweapon.splice(i, 1)
                        weaponvx.splice(i, 1)
                        weaponvy.splice(i, 1)
                        weaponvz.splice(i, 1)
                    }
    }
}

function superxikuang() {
    for (var x10 = -1; x10 <= 1; x10++)
        for (var y10 = -1; y10 <= 1; y10++)
            for (var z10 = -1; z10 <= 1; z10++)
                for (iore in inputore)
                    if (Level.getTile(px + x10, py + y10, pz + z10) == inputore[iore][1] && Level.getData(px + x10, py + y10, pz + z10) == inputore[iore][2] && inputore[iore][3] == 1) {
                        setTile(px + x10, py + y10, pz + z10, 0)
                        Player.addItemInventory(outputore[iore][1], getRandom(1, 9), outputore[iore][2])
                    }
}

function supertunkuang() {
    for (var x10 = -1; x10 <= 1; x10++)
        for (var y10 = -1; y10 <= 1; y10++)
            for (var z10 = -1; z10 <= 1; z10++)
                for (iore in inputore)
                    if (Level.getTile(px + x10, py + y10, pz + z10) == inputore[iore][1] && Level.getData(px + x10, py + y10, pz + z10) == inputore[iore][2] && inputore[iore][4] == 1) {
                        setTile(px + x10, py + y10, pz + z10, 0)
                    }
}

function action() {
    if (pointset == 1) {
        a = px1
        c = py1
        e = pz1
    }
    if (pointset == 2) {
        a = Math.min(px1, px2), b = Math.max(px1, px2)
        c = Math.min(py1, py2), d = Math.max(py1, py2)
        e = Math.min(pz1, pz2), f = Math.max(pz1, pz2)
    }
    if (pointset == 3) {
        a = Math.min(px1, px2, px3), b = Math.max(px1, px2, px3)
        c = Math.min(py1, py2, py3), d = Math.max(py1, py2, py3)
        e = Math.min(pz1, pz2, pz3), f = Math.max(pz1, pz2, pz3)
    }
    if (blockid1 >= 0) {} else {
        blockid1 = 0
    }
    if (blockid2 >= 0) {} else {
        blockid2 = 0
    }
    if (blockid3 >= 0) {} else {
        blockid3 = 0
    }
    if (data1 >= 0) {} else {
        data1 = 0
    }
    if (data2 >= 0) {} else {
        data2 = 0
    }
    if (data3 >= 0) {} else {
        data3 = 0
    }
    if (sc1 == 1) {
        if (mode == 1) {
            hollowsphere()
        }
        if (mode == 2) {
            if (sc2 == 1) {
                hollowc1Y()
            }
            if (sc2 == 2) {
                hollowc1X()
            }
            if (sc2 == 3) {
                hollowc1Z()
            }
        }
        if (mode == 3) {
            hollowc2(1)
        }
        if (mode == 4) {
            hollowc2(2)
        }
        if (mode == 5) {
            if (sc2 == 1) {
                hollowl1Y()
            }
            if (sc2 == 2) {
                hollowl1X()
            }
            if (sc2 == 3) {
                hollowl1Z()
            }
        }
        if (mode == 6) {
            hollowl2(1)
        }
        if (mode == 7) {
            hollowl2(2)
        }
        if (mode == 8) {
            hollowcubic()
        }
        if (mode == 9) {
            if (sc2 == 1) {
                hollowyhY()
            }
            if (sc2 == 2) {
                hollowyhX()
            }
            if (sc2 == 3) {
                hollowyhZ()
            }
        }
        if (mode == 12) {
            hollowc3()
        }
        if (mode == 17) {
            if (sc2 == 1) {
                hollowroundY()
            }
            if (sc2 == 2) {
                hollowroundX()
            }
            if (sc2 == 3) {
                hollowroundZ()
            }
        }
        if (mode == 41) {
            if (sc2 == 1) {
                hollowc4Y()
            }
            if (sc2 == 2) {
                hollowc4X()
            }
            if (sc2 == 3) {
                hollowc4Z()
            }
        }
        if (mode == 42) {
            hollowc5()
        }
        if (mode == 46) {
            if (sc2 == 1) {
                if (ap2 == 1) {
                    hollowhalfsphereY1()
                }
                if (ap2 == 2) {
                    hollowhalfsphereY2()
                }
            }
            if (sc2 == 2) {
                if (ap2 == 1) {
                    hollowhalfsphereX1()
                }
                if (ap2 == 2) {
                    hollowhalfsphereX2()
                }
            }
            if (sc2 == 3) {
                if (ap2 == 1) {
                    hollowhalfsphereZ1()
                }
                if (ap2 == 2) {
                    hollowhalfsphereZ2()
                }
            }
        }
        if (mode == 47) {
            if (sc2 == 1) {
                if (ap3 == 1) {
                    hollow4sphereY1()
                }
                if (ap3 == 2) {
                    hollow4sphereY2()
                }
                if (ap3 == 3) {
                    hollow4sphereY3()
                }
                if (ap3 == 4) {
                    hollow4sphereY4()
                }
            }
            if (sc2 == 2) {
                if (ap3 == 1) {
                    hollow4sphereX1()
                }
                if (ap3 == 2) {
                    hollow4sphereX2()
                }
                if (ap3 == 3) {
                    hollow4sphereX3()
                }
                if (ap3 == 4) {
                    hollow4sphereX4()
                }
            }
            if (sc2 == 3) {
                if (ap3 == 1) {
                    hollow4sphereZ1()
                }
                if (ap3 == 2) {
                    hollow4sphereZ2()
                }
                if (ap3 == 3) {
                    hollow4sphereZ3()
                }
                if (ap3 == 4) {
                    hollow4sphereZ4()
                }
            }
        }
    }
    if (sc1 == 2) {
        if (mode == 1) {
            solidsphere()
        }
        if (mode == 2) {
            if (sc2 == 1) {
                solidc1Y()
            }
            if (sc2 == 2) {
                solidc1X()
            }
            if (sc2 == 3) {
                solidc1Z()
            }
        }
        if (mode == 3) {
            solidc2(1)
        }
        if (mode == 4) {
            solidc2(2)
        }
        if (mode == 5) {
            if (sc2 == 1) {
                solidl1Y()
            }
            if (sc2 == 2) {
                solidl1X()
            }
            if (sc2 == 3) {
                solidl1Z()
            }
        }
        if (mode == 6) {
            solidl2(1)
        }
        if (mode == 7) {
            solidl2(2)
        }
        if (mode == 8) {
            solidcubic()
        }
        if (mode == 9) {
            if (sc2 == 1) {
                solidyhY()
            }
            if (sc2 == 2) {
                solidyhX()
            }
            if (sc2 == 3) {
                solidyhZ()
            }
        }
        if (mode == 12) {
            solidc3()
        }
        if (mode == 17) {
            if (sc2 == 1) {
                solidroundY()
            }
            if (sc2 == 2) {
                solidroundX()
            }
            if (sc2 == 3) {
                solidroundZ()
            }
        }
        if (mode == 41) {
            if (sc2 == 1) {
                solidc4Y()
            }
            if (sc2 == 2) {
                solidc4X()
            }
            if (sc2 == 3) {
                solidc4Z()
            }
        }
        if (mode == 42) {
            solidc5()
        }
        if (mode == 46) {
            if (sc2 == 1) {
                if (ap2 == 1) {
                    solidhalfsphereY1()
                }
                if (ap2 == 2) {
                    solidhalfsphereY2()
                }
            }
            if (sc2 == 2) {
                if (ap2 == 1) {
                    solidhalfsphereX1()
                }
                if (ap2 == 2) {
                    solidhalfsphereX2()
                }
            }
            if (sc2 == 3) {
                if (ap2 == 1) {
                    solidhalfsphereZ1()
                }
                if (ap2 == 2) {
                    solidhalfsphereZ2()
                }
            }
        }
        if (mode == 47) {
            if (sc2 == 1) {
                if (ap3 == 1) {
                    solid4sphereY1()
                }
                if (ap3 == 2) {
                    solid4sphereY2()
                }
                if (ap3 == 3) {
                    solid4sphereY3()
                }
                if (ap3 == 4) {
                    solid4sphereY4()
                }
            }
            if (sc2 == 2) {
                if (ap3 == 1) {
                    solid4sphereX1()
                }
                if (ap3 == 2) {
                    solid4sphereX2()
                }
                if (ap3 == 3) {
                    solid4sphereX3()
                }
                if (ap3 == 4) {
                    solid4sphereX4()
                }
            }
            if (sc2 == 3) {
                if (ap3 == 1) {
                    solid4sphereZ1()
                }
                if (ap3 == 2) {
                    solid4sphereZ2()
                }
                if (ap3 == 3) {
                    solid4sphereZ3()
                }
                if (ap3 == 4) {
                    solid4sphereZ4()
                }
            }
        }
    }
    if (mode == 14) {
        forline()
    }
    if (mode == 15) {
        if (sc2 == 1) {
            if (ap == 1) {
                universeY1()
            }
            if (ap == 2) {
                universeY2()
            }
        }
        if (sc2 == 2) {
            if (ap == 1) {
                universeX1()
            }
            if (ap == 2) {
                universeX2()
            }
        }
        if (sc2 == 3) {
            if (ap == 1) {
                universeZ1()
            }
            if (ap == 2) {
                universeZ2()
            }
        }
    }
    if (mode == 16) {
        forcpt()
    }
    if (mode == 10) {
        reset()
    }
    if (mode == 11) {
        MCing()
    }
    if (mode == 30) {
        copyx1 = Math.abs(px2 - px1)
        copyy1 = Math.abs(py2 - py1)
        copyz1 = Math.abs(pz2 - pz1)
        forcopy()
    }
    if (mode == 31) {
        setcopy()
    }
    if (mode == 32) {
        setcopyY90()
    }
    if (mode == 33) {
        setcopyY180()
    }
    if (mode == 34) {
        setcopyY270()
    }
    if (mode == 36) {
        setcopyX180()
    }
    if (mode == 37) {
        setcopyX270()
    }
    if (mode == 38) {
        if (sc2 == 1) {
            roundstarY()
        }
        if (sc2 == 2) {
            roundstarX()
        }
        if (sc2 == 3) {
            roundstarZ()
        }
    }
    if (mode == 43) {
        forline1()
    }
    if (mode == 44) {
        if (sc2 == 1) {
            if (ap == 1) {
                hollowl31Y()
            }
            if (ap == 2) {
                hollowl32Y()
            }
            if (ap == 3) {
                hollowl33Y()
            }
            if (ap == 4) {
                hollowl34Y()
            }
        }
        if (sc2 == 2) {
            if (ap == 1) {
                hollowl31X()
            }
            if (ap == 2) {
                hollowl32X()
            }
            if (ap == 3) {
                hollowl33X()
            }
            if (ap == 4) {
                hollowl34X()
            }
        }
        if (sc2 == 3) {
            if (ap == 1) {
                hollowl31Z()
            }
            if (ap == 2) {
                hollowl32Z()
            }
            if (ap == 3) {
                hollowl33Z()
            }
            if (ap == 4) {
                hollowl34Z()
            }
        }
    }
    if (mode == 35) {
        explode(exx1, exy1, exz1, exd1)
    }
    if (mode == 45) {
        l1()
    }
    if (mode == 48) {
        spherestar()
    }
    if (mode == 49) {
        eset()
    }
    if (mode == 50) {
        a1 = a
        e1 = e
        dxbj()
    }
    if (mode == 51) {
        if (sc2 == 1) {
            hollowliumangxingY()
        }
        if (sc2 == 2) {
            hollowliumangxingX()
        }
        if (sc2 == 3) {
            hollowliumangxingZ()
        }
    }
    if (mode == 52) {
        eset2()
    }
    if (mode == 53) {
        if (sc2 == 1) {
            hollowduobianxingY()
        }
        if (sc2 == 2) {
            hollowduobianxingX()
        }
        if (sc2 == 3) {
            hollowduobianxingZ()
        }
    }
    mode2 = mode
    mode = -1
    go = -1
    if (T > 0) {} else {
        toast("完成")
    }
}

function tomp430488(nummp430488) {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                switch (nummp430488) {
                    case 1:
                        website = "http://tieba.baidu.com/p/3048610017"
                        break
                    case 2:
                        website = "http://tieba.baidu.com/p/2995721307"
                        break
                    case 3:
                        website = "http://tieba.baidu.com/p/3197091379"
                        break
                    case 4:
                        website = "http://tieba.baidu.com/p/3194028313"
                        break
                    case 5:
                        website = "http://tieba.baidu.com/p/3043361236"
                        break
                    case 6:
                        website = "http://tieba.baidu.com/p/3220875033"
                        break
                    case 7:
                        website = "http://tieba.baidu.com/p/3197091379"
                        break
                    case 8:
                        website = "http://tieba.baidu.com/p/2787941913"
                        break
                    case 9:
                        website = "http://tieba.baidu.com/p/2808782133"
                        break
                    case 10:
                        website = "http://tieba.baidu.com/p/2804090745"
                        break
                    case 11:
                        website = "http://tieba.baidu.com/p/2927474293"
                        break
                    case 12:
                        website = "http://tieba.baidu.com/p/2939206502"
                        break
                    case 13:
                        website = "http://tieba.baidu.com/p/2981757345"
                        break
                    case 14:
                        website = "http://tieba.baidu.com/p/2992532682"
                        break
                    case 15:
                        website = "http://tieba.baidu.com/p/2962717675"
                        break
                    case 16:
                        website = "http://tieba.baidu.com/p/3199874936"
                        break
                    case 17:
                        website = "http://tieba.baidu.com/p/2795955373"
                        break
                    case 18:
                        website = "http://tieba.baidu.com/p/2771210719"
                        break
                    case 19:
                        website = "http://tieba.baidu.com/p/3221243345"
                        break
                    case 20:
                        website = "http://tieba.baidu.com/home/main?un=MP430488&fr=pb"
                        break
                    case 21:
                        website = "http://tieba.baidu.com/group/index?id=45215262"
                        break
                    case 22:
                        website = "http://tieba.baidu.com/p/3006878654"
                        break
                    case 23:
                        website = "http://tieba.baidu.com/p/3205610008"
                        break
                    case 24:
                        website = "http://tieba.baidu.com/f?kw=mp430488"
                        break
                    case 25:
                        website = "http://tieba.baidu.com/p/3266803628"
                        break
                    case 26:
                        website = "http://tieba.baidu.com/p/3235561599"
                        break
                    case 27:
                        website = "http://tieba.baidu.com/p/3243990793"
                        break
                    case 28:
                        website = "http://tieba.baidu.com/p/2966228399"
                        break
                    case 29:
                        website = "http://www.xszhuan.com/d/hfogz"
                        break
                    case 30:
                        website = "http://tieba.baidu.com/p/3257003459"
                        break
                    case 31:
                        website = "http://tieba.baidu.com/p/3252066685"
                        break
                    case 32:
                        website = "http://tieba.baidu.com/p/3248514915"
                        break
                    case 41:
                        website = "http://pan.baidu.com/s/1gduwH5h"
                        break
                }
                android.widget.Toast.makeText(ctx, "正在跳转", 0).show()
                var mpBrowser = new android.content.Intent(ctx)
                mpBrowser.setAction(android.content.Intent.ACTION_VIEW)
                mpBrowser.setData(android.net.Uri.parse(website))
                ctx.startActivity(mpBrowser)
            } catch (err) {
                clientMessage("Error:" + err)
                toast("你的系统无法显示")
            }
        }
    })
}

function getRandom(num1, num2) {
    var start = Math.max(num1, num2)
    var end = Math.min(num1, num2)
    end -= start
    return parseInt(Math.random() * end) + start
}