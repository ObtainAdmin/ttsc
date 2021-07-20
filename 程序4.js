var a=prompt("请输入一个某年某月某日");
var n=parseInt(a/10000);
var y=parseInt(a/100)%100;
var r=a%100;

console.log(n);
console.log(y);
console.log(r);

if (n%100!=0&&n%4==0||n%400==0) {
    var z=0;
    for (let x = 1; x <=y; x++){
        switch (x) {
            case 4:
            case 6:
            case 9:
            case 11:
                z=z+30;
                break;
            case 2:
                z=z+29;
                break;
            default:
                z=z+31;
                break;
        }
    }
}else{
    var z=0;
    for (let x = 1; x <=y; x++){
        switch (x) {
            case 4:
            case 6:
            case 9:
            case 11:
                z=z+30;
                break;
            case 2:
                z=z+28;
                break;
            default:
                z=z+31;
                break;
        }
    }

}
console.log(z);



