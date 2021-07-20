/*
    分析斗地主玩法
        1、一副牌54张，共三个每人17张，底牌3张，分别为大王、小王、四张2、四张1、四张k、四张Q、四张J、四张10、四张9、四张8、四张7、四张6、四张5、四张4、四张3
        2、随机一个人，第一个人抢地主，分为两种情况
        3、其中一人抢到地主，亮底牌，地主拿到底牌
        4、游戏规则：
            炸弹：王炸》四个2》四个1》四个13》四个12》四个11》四个10》四个9》四个8》四个7》四个6》四个5》四个4》四个3
            顺子最低5张：10-J-Q-K-1》9-10-J-Q-K》8-9-10-J-Q》7-8-9-10-J》6-7-8-9-10》5-6-7-8-9》4-5-6-7-8》3-4-5-6-7
                   6连：9-10-J-Q-K-1》8-9-10-J-Q-K》7-8-9-10-J-Q》6-7-8-9-10-J》5-6-7-8-9-10》4-5-6-7-8-9》3-4-5-6-7-8
                   7连：8-9-10-J-Q-K-1》7-8-9-10-J-Q-K》6-7-8-9-10-J-Q》5-6-7-8-9-10-J》4-5-6-7-8-9-10》3-4-5-6-7-8-9
                   8连：7-8-9-10-J-Q-K-1》6-7-8-9-10-J-Q-K》5-6-7-8-9-10-J-Q》4-5-6-7-8-9-10-J》3-4-5-6-7-8-9-10
                   9连：6-7-8-9-10-J-Q-K-1》5-6-7-8-9-10-J-Q-K》4-5-6-7-8-9-10-J-Q》3-4-5-6-7-8-9-10-J
                  10连：5-6-7-8-9-10-J-Q-K-1》4-5-6-7-8-9-10-J-Q-K》3-4-5-6-7-8-9-10-J-Q
                  11连：4-5-6-7-8-9-10-J-Q-K-1》3-4-5-6-7-8-9-10-J-Q-K
                  12连：3-4-5-6-7-8-9-10-J-Q-K-1
            四带*：四个2+*》四个1+*》四个K+*》四个Q+*》四个J+*》四个10+*》四个9+*》四个8+*》四个7+*》四个6+*》四个5+*》四个4+*》四个3+*
            三带*：三个2+*》三个1+*》三个K+*》三个Q+*》三个J+*》三个10+*》三个9+*》三个8+*》三个7+*》三个6+*》三个5+*》三个4+*》三个3+*
             对子：对2》对1》对K》对Q》对J》对10》对9》对8》对7》对6》对5》对4》对3
             单张：大王》小王》2》1》K》Q》j》10》9》8》7》6》5》4》3

            炸弹》顺子
            炸弹》四带
            炸弹》三带
            炸弹》对子
            炸弹》单张
        两个农民，一个地主，两方谁先出完牌，谁赢

*/ 
var first;//隔壁老王的牌
var second;//IA的牌
var third;//IA的牌
var dipa;//底牌
//洗牌
function xipai(){
    var cards = ["大王", "小王"];
    let types = ["红桃", "黑桃", "方块", "梅花"]// 花色
    let points = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"] // 点数
    
// 遍历所有花色与点数
for (var i in types) {
    for (var j in points) {
        cards.push(types[i] + points[j])
    }
}
// 显示
// console.log(cards);

// 洗牌
// 遍历 cards 数组
for (var i = 0, len = cards.length; i < len; i++) {
    // 生成一个随机的数组下标(0~53)
    var index = Math.floor(Math.random() * len);
    // 将当前遍历到的元素与随机下标处的元素交换位置
    var tmp = cards[i];
    cards[i] = cards[index];
    cards[index] = tmp;
}

/*
cards.sort(function(){
    return Math.random() - 0.5;
});*/

// console.log(cards);

// 发牌
     first = cards.splice(0, 17);
     second = cards.splice(0, 17);
     third = cards.splice(0, 17);
     dipa =cards.splice(0, 3);
    //   console.log(cards);
    //  console.log(cards.splice(0,3));
    
}
//开始游戏发牌
var oJL=document.getElementById("jl");
function ks(){
    // 发牌
    xipai();
    document. getElementById('a1').innerHTML=first;//刷新牌
    document. getElementById('cxks').style.display="block";//显示重新开始
    document. getElementById('ks').style.display="none";//隐藏开始抢地主
    document. getElementById("qiang").style.display="block";//显示抢地主
}
//抢地主
function dizhu(){
   // document. getElementById('a3').innerHTML=second;
   var element='';//牌面按钮
   document. getElementById("qiang").style.display="none";//隐藏抢地主
   //记录抢地主成功
   var txt =document.createTextNode("隔壁老王抢地主成功");
   oJL.appendChild(txt);
//    console.log(first);
   first=first.concat(dipa);//抢地主加牌
//    console.log(first); 
   //加载牌和重新排序
    first=pxsf(first);
    for (let x = 0; x < first.length; x++) {
        element =element+'<button id="but'+x+
        '" type="button" onclick=xzcp("but'+x+'") class="layui-btn layui-btn-xs layui-btn-primary layui-border-green">'+first[x]+'</button>'; 
    // var ap =suanfa(first[x]);
        
    }
    console.log(first);
    document. getElementById('paimian').innerHTML=element;//显示准备出牌
    document. getElementById("pai").style.display="block";//显示准备出牌
    document. getElementById("a1").style.display="none";
}
//农民
function nongmin(){

}
//重新开始
function cxks(){
    //重新发牌
    xipai();
    //显示抢地主
    document. getElementById("qiang").style.display="block";
    //清空准备出牌
    element=''
    //隐藏准备出牌
    document. getElementById("pai").style.display="none";
    //刷新牌
    document. getElementById('a1').innerHTML=first;
    //显示牌
    document. getElementById("a1").style.display="block";
    
    //清空记录
    oJL.innerHTML='';
    
}
//选择出牌
var ss=3;
var pid;
function xzcp(a) {
    pid=a;
    console.log(a);
    console.log(pid);
    if (ss%2==0) {
        document.getElementById(a).style.backgroundColor="#FAFAFA"
    }else if (ss%2==1) {
        document.getElementById(a).style.backgroundColor="#5FB878"
    }
    ss++;
    // if (a!=pid) {;
    //     document.getElementById(a).style.backgroundColor="#5FB878"
    // }
    console.log(ss);
    // console.log();
    // document.getElementById(a).style.

}
//排序算法
function pxsf(first) {
    for (let x = 0; x < first.length; x++) {
        // console.log(x);
        if (first[x]==="大王") {
            max=first[0];
            first[0]=first[x];
            first[x]=max;
            // console.log(x);
            // break;
        } else if(first[x]==="小王") {
            if(first[0]==="大王"){
                max=first[1];
                first[1]=first[x];
                first[x]=max;
            } else{
                max=first[0];
                first[0]=first[x];
                first[x]=max;
            }
        }
    }
    if (first[0]==="大王") {//判断第一张是否为大王
        if (first[1]==="小王"){//判断第二张是否为小王
            //前两张为王
            for (let x = 2; x < first.length; x++) {
                for (let s = x; s < first.length; s++) {
                    var ap =suanfa(first[x]);
                    var bp =suanfa(first[s]);
                    if (bp>ap) {
                        max=first[s];
                        first[s]=first[x];
                        first[x]=max;
                    }
                    
                }
            }
        }else{
            //第一张为王
            for (let x = 1; x < first.length; x++) {
                for (let s = x; s < first.length; s++) {
                    var ap =suanfa(first[x]);
                    var bp =suanfa(first[s]);
                    if (bp>ap) {
                        max=first[s];
                        first[s]=first[x];
                        first[x]=max;
                    }
                    
                }
            }
        }
        //第一张为王
    } else if (first[0]==="小王") {//判断第一张是否为小王
        for (let x = 1; x < first.length; x++) {
            for (let s = x; s < first.length; s++) {
                var ap =suanfa(first[x]);
                var bp =suanfa(first[s]);
                if (bp>ap) {
                    max=first[s];
                    first[s]=first[x];
                    first[x]=max;
                }
                
            }
        }
        //没有王
    } else {
        for (let x = 0; x < first.length; x++) {
            for (let s = x; s < first.length; s++) {
                var ap =suanfa(first[x]);
                var bp =suanfa(first[s]);
                if (bp>ap) {
                    max=first[s];
                    first[s]=first[x];
                    first[x]=max;
                }
                
            }
        }

    }
    return first;
}
//牌值算法
function suanfa(p) {
    var mi=p.charAt(p.length-1);
    // console.log(mi);
    if (mi==='K') {
        // console.log(mi);
        return 13;
    } else if (mi==='Q') {
        // console.log(mi);
        return 12;
    } else if (mi==='J') {
        // console.log(mi);
        return 11;
    } else if (mi==='0') {
        // console.log(mi);
        return 10;
    } else if (mi==='A') {
        // console.log(mi);
        return 1;
    } else if(mi==='王'){
        return p;
    }else {
        // console.log(mi);
        return parseInt(mi);
    }
}
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(cards)
// document. getElementById('a3').innerHTML=bu;
// var a = Number(undefined);
// var as =2*false;
// console.log(a);
// console.log(parseInt(1.6),parseInt('2.5a'),parseInt('a2.5'));
// var uname='root';
// var pwd='123abc';
// var bu= ( uname=='root' )&&(pwd=='123abc') ;
// console.log(!);
// var a=18;
// console.log(a>=18 || a<18);
// var a=2020;
// (a%4==0 && a%100!=0 || a%400==0 )&& console.log("ren");
// 0101  100   0110
// 1000  111   1001
// 0     7     15
// var str = prompt("请输入年龄：");
// if (str>=18) {
//     console.log("成年人");
// }