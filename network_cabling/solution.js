var n = parseInt(readline()),
    coordsX = new Array(),
    coordsY = new Array(),
    main = 0,
    index = n % 2 == 0 ? n/2 : (n-1)/2;

for(var i = 0; i < n; i++) {
    var coords = readline().split(' '),
        x = parseInt(coords[0].valueOf()),
        y = parseInt(coords[1].valueOf());

    coordsX.push(x);
    coordsY.push(y);
}

main = Math.max.apply(null, coordsX) - Math.min.apply(null, coordsX);
coordsY.sort(function(a,b){
    return a - b;
});

var medY = coordsY[index];

var d = 0;
for(var i = 0; i < n; i++) {
    d += Math.abs(coordsY[i] - medY);
}

d += main;

print(d);