function RndNum() {
     var rnd = "";
     for (var i = 0; i < 5; i++)
         rnd += Math.floor(Math.random() * 10);
     return rnd;
 }
 for (i = 0; i < 99999; i++) {
     print("你妈被我捅了" + RndNum() + "刀，气死你哈哈哈")
 }