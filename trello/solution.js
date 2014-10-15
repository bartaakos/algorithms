var hash = function(s) {
    var h = 7, letters = "acdegilmnoprstuw";

    for(var i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]));
    }
    return h;
}

var decode = function(h) {
    var h_base = 7, letters = "acdegilmnoprstuw", s = "", m = 0, mod = 37;

    while(h_base < h) {
        m = h % mod;

        if((mod-1) == m) {
            h = (h+1)/mod;
        } else {
            h = (h-m)/mod;
            s = letters[m] + s;
        }
    }

    return s;
}

alert(decode(hash("alma")));

alert(decode(956446786872726));