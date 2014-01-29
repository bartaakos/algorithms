var n = readline(),
    nodes = new Array(),
    maxDepth = 0,
    calc = function (index, currentDepth) {
        maxDepth = Math.max(maxDepth, currentDepth);

        if(nodes[index] != undefined && nodes[index].length > 0) {
            for (var i = 0; i < nodes[index].length; i++) {
                var nextIndex = nodes[index][i];

                calc(nextIndex, currentDepth+1);
            }
        }
    };

for (var i = 0; i < n; i++) {
    var conn = readline().split(' '),
        from = parseInt(conn[0].valueOf()),
        to = parseInt(conn[1].valueOf());

    if(nodes[from] == undefined) {
        nodes[from] = new Array();
    }

    nodes[from].push(to);
}

for (var n in nodes) {
    var d = calc(n, 1);
}

print(maxDepth);