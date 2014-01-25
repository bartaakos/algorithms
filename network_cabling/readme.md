# Network Cabling

http://www.codingame.com/

<pre>
An internet operator plans to connect a business park to the optical fiber network. The area to be covered is large and the operator is asking you to write a program that will calculate the minimum length of fiber optic cable required to connect all buildings.

For the implementation of the works, the operator has technical constraints whereby it is forced to proceed in the following manner:
A main cable will cross through the park from the West to the East (from the position x of the most westerly building to the position x of the most easterly building).
For each building, a dedicated cable will connect from the building to the main cable by a minimal path (North or South).

The minimum length with therefore depend on the position of the main cable.

INPUT:
Line 1 :The number N de bâtiments à relier à la fibre optique
On the N following lines: The coordinates x and y of the buildings

OUTPUT:
The minimum length L of cable required to connect all of the buildings. In other words, the length of the main cable plus the length of the cables dedicated to all the buildings.
The buildings with the same position x should not in any case share the same dedicated cable.

CONSTRAINTS:
0 < N ≤ 100000
0 ≤ L ≤ 263
-230 ≤ x ≤ 230
-230 ≤ y ≤ 230

Available RAM : 512MB
Timeout: x seconds
The program has to read inputs from standard input
The program has to write the solution to standard output
The program must run in the test environment
</pre>