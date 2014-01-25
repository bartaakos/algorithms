<?php

function solution($A) {
    $l = count($A);

    $st = $A[0];
    $nd = 0;

    for($i=1; $i<$l; $i++) {
        $nd += $A[$i];
    }

    $min = abs($st-$nd);

    for($i=1; $i<$l-2; $i++) {
        $st += $A[$i];
        $nd -= $A[$i];
        $diff = abs($st-$nd);

        if($diff < $min) {
            $min = $diff;
        }
    }

    return $min;
}

?>