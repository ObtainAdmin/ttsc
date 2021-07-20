// var shiqu=['河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','台湾省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省'];
// var chengshi=[['石家庄','保定市','秦皇岛','唐山市','邯郸市','邢台市','沧州市','承德市','廊坊市','衡水市','张家口'],
//               ['太原市','大同市','阳泉市','长治市','临汾市','晋中市','运城市','晋城市','忻州市','朔州市','吕梁市'],
//               ['盘锦市','鞍山市','抚顺市','本溪市','铁岭市','锦州市','丹东市','辽阳市','葫芦岛','阜新市','朝阳市','营口市'],
//               ['吉林市','通化市','白城市','四平市','辽源市','松原市','白山市'],
//               ['伊春市','牡丹江','大庆市','鸡西市','鹤岗市','绥化市','双鸭山','七台河','佳木斯','黑河市','齐齐哈尔市'],
//               ['无锡市','常州市','扬州市','徐州市','苏州市','连云港','盐城市','淮安市','宿迁市','镇江市','南通市','泰州市'],
//               ['杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市'],
//               ['合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '阜阳市', '宿州市', '滁州市', '六安市', '宣城市', '池州市', '亳州市'],
//               []
//             ];
// console.log('C:\\Users\\wed');
// var a="sadasf@qq.com"
// // if (a.indexOf('@')!=-1) {
// //     console.log("合法邮箱")
// // }else{
// //     console.log("非法邮箱")
// // }
// var b=a.indexOf("@");
// var c1=a.slice(0,b);
// var c2=a.slice(b+1);
// console.log(c1,c1);

// var a="wHAt aEr yOU doIng"
// var b=a.split(" ");
// for (let index = 0; index < b.length; index++) {
//     var c=b[index].toString().toLowerCase();
//     var su=c.split("");
//     su[0]=su[0].toUpperCase();
//     b[index]=su.join("");
// }
// a=b.join(" ");
// console.log(a);

// var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var x=0;
// var ar="";
// while (true) {
//     var a=Math.random();
//     var c=parseInt(a*100);
//     if (c<26&&c>=0) { 
//         x++
//         ar=ar+arr[c];
//     }
//     if (x==4) {
//         break;
//     }
// }
// console.log(ar);
// console.log(1+ +"2"+"2");
// var d1=new Date();
// var d2=new Date('2021/7/16 18:00:00');

// var b=d2.getTime()-d1.getTime();
// var d =new Date(b);

// var t=d.getDate()-1;
// var h=d.getHours()-8;
// var m=d.getMinutes();
// var s=d.getSeconds();
// console.log(t,h,m,s);

// var d=new Date("2021/7/16");
// var c=new Date(d);
// c.setFullYear(c.getFullYear()+3);
// var a=new Date(c);
// var t=d.getTime();
// var c=new Date(t);

// a.setMonth(a.getMonth()-1);
// console.log(d.toLocaleString());
// console.log(c.toLocaleString());
// console.log(a.toLocaleString());
// SyntaxError:语法错误，代码编写不符合规则
// ReferenceError:引用错误，使用了为声明变量
// TypeError:引用错误，调用的不是函数

// var a="*";
// var c="  ";
// for (let x = 1; x <8; x++) {
//     var s="";
//    for (let y = 1; y <6; y++) {
//     if (x==1&&y>=3&&y<=5) {
//         s+=a;
        
//     } else if(x==2&&y==2||y==6) {
//         s+=a;
//     }else if(x==7&&y==2&&y==6){
//         s+=a;
//     }else{
//         s=s+c;
//     }
//     // var z=jin(s)
       
//    } 
//  console.log(s);   
// }

// for (let i = 1; i <= 9; i++) {
//     var a="";
//     for (let j = 1; j <= i; j++) {
//         a=a+"  "+i+"*"+j+"="+i*j;
//     }
//     console.log(a);
    
// }
// cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddddddddddddddddddddddddddddddddddddddddddddconl
// const express = require('express')

// // 创建 express 应用
// const app = express()

// // 监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//   res.send('hello node')
// })

// // 使 express 监听 5000 端口号发起的 http 请求
// const server = app.listen(5000, function() {
// 	console.log("服务器已启动，监听5000端口");
// })
// function names(ti) {
  
// var a=new Date(ti);
// var b=a.getFullYear()+"/1/1"
// var s=new Date(b);
// var ss=a-s;
// // ss/86400000
// console.log(ss/86400000)

// }
// var ti ='2021/7/16'
// names(ti);
// getAvg=(a,b,c)=>(a+b+c)/3


// console.log(getAvg(2,3,4))
// var sdt={
//    sname:"小米Air",
//    sex:1,
//   birthday:"19970605",
//    salary:9872,
// }
// console.log(`
//   名字：${sdt.sname}
//   性别：${sdt.sex ?'男':'女'}
//   生日：${sdt.birthday}
//   工资:${sdt.salary.toFixed(2)}
// `)
// var a =2;
// function sname() {
//   return 3;
// }
// console.time("开始");
// // console.log(window.a);
// // console.log(window.sname());
// console.log(1);//输出日志
// console.info(2);//输出消息 
// console.warn(3);//输出警告
// console.error(4);//输出错误
// console.timeEnd("开始");
// let a=setInterval(function name(params) {
//   console.log(1)
// },3000) // 周期性定时器，每个一段时间，调用一次函数
// // clearInterval(****)//  清除周期性定时器，参数填写定时器变量（let timer=set**）
// console.log(2);
// var a=0;
// var sh=setInterval(function() {
//     console.log("hallo word");
//     a++
//     if (a==3) {
//         clearInterval(sh);
//     }
// },1000);


var a=require("./Js_ss.js");
var r=15;
// var as=new a();
// console.log(as.setMj(r).toFixed(2),as.setZc(r).toFixed(2));
console.log(a.mymj(r))
