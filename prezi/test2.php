<?php

function  getIntegerComplement($n)
{
    $decbin = decbin($n);
    $inv = "";

    for ($i = 0; $i < strlen($decbin); $i++) {
        $inv .= abs($decbin[$i] - 1);
    }

    return bindec($inv);
}

echo getIntegerComplement(20);