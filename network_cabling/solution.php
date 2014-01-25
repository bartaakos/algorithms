<?php

fscanf(STDIN, "%d", $n);
$coordsX = array();
$coordsY = array();

for ($i = 0; $i < $n; $i++)
{
    fscanf(STDIN, "%d %d", $x, $y);

    $coordsX[] = $x;
    $coordsY[] = $y;
}

$main = max($coordsX) - min($coordsX);
sort($coordsY);

$medY = $coordsY[$n/2];
$d = 0;

for($i=0; $i<$n; $i++) {
    $d += abs($coordsY[$i]-$medY);
}
$d += $main;

echo $d;

?>