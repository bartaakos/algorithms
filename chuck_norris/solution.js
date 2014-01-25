var m = readline(),
    decbin = function (number) {
        // From: http://phpjs.org/functions
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return parseInt(number, 10).toString(2);
    },
    pad7 = function(str) {
        return ("0000000" + str).slice(-7);
    },
    last = '',
    convertCN = function(str) {
        var cd = "";
        for (var i = 0; i < str.length; i++) {
            var c = str[i];

            cd += (last != c ? (c == 1 ? " 0 " : " 00 ") : "") + "0";

            last = c;
        }

        return cd;
    },
    r = "";

for (var i = 0; i < m.length; i++) {
    var part =  pad7(decbin(m.charCodeAt(i)));
    r += convertCN(part);
}

print(r.trim());