<?php

fscanf(STDIN, "%d %d", $n, $k);
$data = fgets(STDIN);
$a = explode(' ',$data);

$p = 0;

for($i=0; $i<$n-1; $i++) {
    for($j=$i+1; $j<$n; $j++) {
        if(($a[$j] - $a[$i]) == $k) {
            $p++;
        }
    }
}

echo $p;