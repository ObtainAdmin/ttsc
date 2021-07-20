var he;
var as=1;
for (var x = 1; x < 5; x++) {
    for (var y = 1; y < 5; y++) {
        for (var z = 1; z < 5; z++) {
            if (x!=y&&x!=z&&y!=z) {
                he=''+x+y+z;
                ++as;
                console.log(he);
            }
        }
    
    }
    
}
console.log(as);