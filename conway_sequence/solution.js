var n = readline(),
    l = readline(),
    res = "" + n,
    calc = function (str) {
        var res = "",
            last = "",
            c = 0,
            current = "",
            parts = str.split(' ');

        for (var i = 0; i < parts.length; i++) {
            current = parts[i];
            if (last != "") {
                if (last == current) {
                    c++;
                } else {
                    res += "" + c + " " + last + " ";
                    c = 1;
                    last = current;
                }
            } else {
                last = current;
                c = 1;
            }
        }

        return res += "" + c + " " + last;
    };

for (var i = 1; i < l; i++) {
    res = calc(res);
}

print(res);