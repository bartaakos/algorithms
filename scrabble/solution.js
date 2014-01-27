var point = {
        'e': 1, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1, 't': 1, 'l': 1, 's': 1, 'u': 1,
        'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
        'k': 5,
        'j': 8, 'x': 8,
        'q': 10, 'z': 10
    },
    n = parseInt(readline()),
    dict = new Array(),
    maxPoint = 0,
    maxWord = '',
    removeAt = function(w,pos) {
        return w.slice(0, pos) + w.slice(pos+1);
    },
    calc = function(word) {
        var p = 0, w = available;
        for(var i = 0; i < word.length; i++) {
            var pos = w.indexOf(word[i]);
            if(pos >= 0) {
                p += point[word[i]];
                w = removeAt(w,pos);
            } else {
                return -1;
            }
        }

        return p;
    },
    available = '';

for(var i = 0; i < n; i++) {
    dict.push(readline());
}

available = readline();

for(var i = 0; i < dict.length; i++) {
    var word = dict[i],
        p = calc(word);

    if(maxPoint < p) {
        maxPoint = p;
        maxWord = word;
    }
}

print (maxWord);
