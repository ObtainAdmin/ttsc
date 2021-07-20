    // function yuan() {
    // var r;
    //     this.setZc=function(r) {
    //         let a=2*r*Math.PI;
    //         return a;
    //     }
    //     this.setMj=function(r) {
    //         let a=r*r*Math.PI;
    //         return a;
    //     }
    // }
    // module.exports=yuan;
    function zc(r) {
        return 2*r*Math.PI;
    }
    function mj(r) {
        return r*r*Math.PI;
    }
module.exports={myzc:zc,mymj:mj};
