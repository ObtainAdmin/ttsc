// var a1=prompt("商品价格");
// var a2=prompt("商品数量");
// var a= a1*a2;
// var c=1200;
// if (a>=1000 ) {a=a*90/100;}
// if (a<=c && a!=0) {
//     alert("支付"+a+"元成功");
// }else{
//     alert("pay error");
// }
// var a=78
// if (a>0&&a<=100) {
//     switch (parseInt(a/10) ) {
//         case 10:
//         case 9:
//             console.log("优秀");
//             break;
//         case 8:
//             console.log("良好");
//             break;
//         case 7:
//             console.log("中等");
//             break;
//         case 6:
//             console.log("及格");
//             break;        
//         default:
//             console.log("不及格");
//             break;
//     }
// } else {
    
// }
// var a=0;
// var b=0;
// while (a<100) {
//     a++;
//     if (a%2==0) {
//         b+=a;
//     }
// }
// console.log(b);
// i=1;
// a=0;
// do {
//     if(i%7==0)console.log(a+=i)
//     i++
// } while (i<=100);
// var i=0;
// var pwd='123456'
// do {
//     var a=prompt("请输入密码");
//     if (a==pwd) {
//         alert("login success");
//         break;
//     }
//     i++
//     if (i==3) {
//         alert("login success");
//         break;
//     }
// } while (true);
// do {
//     var pwd=prompt("请输入密码");
    
// } while ("123456"!==pwd);
// var a=0.0001;
// var b=0;
// do {
//     a*=2;
//     b++;
//     console.log(a);
// } while (a<149597870000);
// console.log(b);

// for (let x = 1; x < 10; x++) {
//     var a="";
//     for (let y = 1; y <= x; y++) {
//         a=a+"  "+(x+"*"+y+"="+(x*y));
//     }
//     console.log(a);
// }


// for (let x = 9; x >=1; x--) {
//     var a="";
//     for (let y = x; y <= 81; y++) {
//         if (y%x==0) {
//             if (y/x<=x) {
//                 var su=y/x;
//                 a=a+"  "+(y+"/"+x+"="+(su));
//             // console.log(su);
//             }
            
//         }
//     }
//     console.log(a);
// }

// for (let x = 1; x < 10; x++) {
//     var a="";
//     for (let y = 1; y <10; y++) {
//        if (y>x) {
//            console;
//        }else{
//         a=a+"  "+(x+"*"+y+"="+(x*y));
//        }
//     }
//     console.log(a);
// }


// var i =prompt("请输入一个数字");
// var x=0;
// for ( x = 2; x <i; x++) {
//    if (i%x==0) {
//        alert(i+"不是素数");
//        break;
       
//    }
// //    a=a+1;

    
// } 
// if (x==i) {
//     alert(i+"是素数");
// } (a+168)*(a+168)==(a*a+168*2+168*a*2)
//程序题3
// var a=1;
// while (true) {
//     // if((a+100)*(a+100)==(a*a+10000+200*a)){
//     //     // if ((a+168)*(a+168)==(a*a+168*168+168*a*2)) {
//     //     //     console.log(a);
//     //     //     break;
//     //     // }
//         if ((a+268)*(a+268)==(a+100)*(a+100)==(a*a+10000+200*a)) {
//             console.log(a);
//             break;
//         }
    
//     console.log(a);
//     a++;
// }
// var a=0;
// for (var x=1;x<=100;x++){
// 	for (var y=1;y<=100;y++){
// 		for (var z=1;z<=100;z++){
// 			if((2*x+y+z/2)==100&&(100==x+y+z)){
//                 console.log(x,y,z);
//                 a=a+1;
//             }
//         }
//     }
// }
// console.log(a);

// for (let index = 0; index < 70000; index++) {
//     for (let x = 0; x < 70000; x++) {
//         if ((index+100==x*x)&&(index+268==x*x)) {
//             console.log(index);
//             break;
//         }
//     }
// }
// console.log(as);
// function getSum(params) {
//     switch (params) {
//         case 1:
//             return "等待付款"
//         case 2:
//             return "等待发货"
//         case 3:
//             return "运输中" 
//         case 4:
//             return "已签收"
//         case 5:
//             return "已取消"
//         default:
//             return "无法查询";
//     }
// }
// console.log(getSum(4));

// console.log(a);
// var a=1;
//斐波那契数列
//1  1   2  3   5  8  13  21


// function feibo(params) {
//     var x=1 
//     var y=1
//     //10
//     for (let a = 2; a < params; a++) {
//                 z=x+y;
//                 x=y;
//                 y=z;

//             }
//             return z;
// }
// // feibo(8);
// console.log(feibo(8));
// function y(n) {
//     if (n==1||n==2) {
//         return 1
//     }
//     return y(n-1)+y(n-2);
// }
// var jd={id:1012,tatle:"nih444",jg:123,time:"2021-7-13"}
// jd.pic='xiaomi.jpg';
// console.log(jd);
// Car, color, brand, width, length
// var car=new Object();
// car.color="红色";
// car.brand="红旗";
// car.width="360";
// car.leng="111";
// console.log(car.color)
// var shangping={
//     sid:666,
//     sname:"sss",
//     sjiage:666
// }

// if (!shangping.hasOwnProperty('spic')) {
//     shangping.pic="shangp.jpg"
// }
// if (shangping.hasOwnProperty('sjiage')) {
//     shangping.sjiage=shangping.sjiage*0.8;
// }
// console.log(shangping);
// var yuan={
//     r:15,
//     pai:3.14159265357,
//     zc:function(){
//         console.log(this.r*2*this.pai);
//     },
//     mj:function () {
//         console.log(this.r*this.r*this.pai);
//     }
// }
// yuan.zc();
// yuan.mj();
// var js={
//      sun:function (a,b){
//         console.log(a+b);
//     },
//     cheng:function (a,b){
//         console.log(a*b);
//     }
// }
// js.sun(15,16);
// js.cheng(15,33);
// var sp=['上海','郑州','北京','深圳'];
// var suzu=new Array('a','b','c','d');
// Array
// Array
// Array
// Array
// console.log(sp);
// var arr=[
//     {lid:1,title:'xiao',price:4199},
//     {lid:2,title:'vivo',price:3666},


// ]
// console.log(arr
// var a=["a","b","c","d"];
// var b=[];
// for (let index = 0; index < a.length; index++) {
//     b[index]=a[a.length-index-1];
    
// }
// console.log(b);
// var a=[23,9,45,6,78];
// var b;
// for (let x = 0; x < a.length; x++) {
//     for (let y = 0; y <a.length; y++) {
//         if (a[x]<a[y]) {
//             b=a[x];
//             a[x]=a[y];
//             a[y]=b;
//         }
        
//     }
    
// }

// console.log(a);

// var a=["a","b","c","d","e"];
// var b;
// for (let index = 0; index < parseInt(a.length/2) ; index++) {
//     b=a[a.length-index-1];
//     a[a.length-index-1]=a[index];
//     a[index]=b;

// }
// console.log(a)

//遍历数组元素，翻转数组中的元素
//['a','b','c','d']['d','c','b','a']
// var shu=['a','b','c','d'];
// var c
// for (var i=0;i<shu.length/2 ;i++ )
// {//先判断交换几次

//     c=shu[shu.length-1-i];
//     shu[shu.length-i-1]=shu[i];
//     shu[i]=c;
// }
// console.log(shu);
var a=[23,9,45,6,78,44,67,66];
// a.reverse();
// console.log(a);
// a.sort();
// console.log(a);
// a.concat();
console.log(a.slice(3,5))