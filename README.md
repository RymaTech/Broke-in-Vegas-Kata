# Broke in Vegas Kata

This is a Kata I created and published on [Codewars](https://www.codewars.com/).

## Story 

Jimmy Vegas is fulfilling a lifelong ambition by going to Las Vegas and playing on the roulette table. He believes he has the solution which can beat the roulette table every time.

Jimmy has never seen a Red Black or Black Red pattern repeat itself more than four times; for example, Jimmy has never seen the following: Red, Black, Red, Black, Red or vice versa: Black, Red, Black, Red, Black.

If Jimmy’s above theory is correct, he knows that if he sees the Red Black or Black Red pattern repeat itself four times then the pattern is certain to break!

For example:
```
(Red, Black, Red, Black > bets Black)

(Black, Red, Black, Red > bets Red)
```

Notice how he is betting that the above patterns did not continue?

The problem is that Jimmy has a very short attention span and he is worried that if, one of the two, above patterns appear, he will miss it and therefore not bet.

## Task

Jimmy has a purse of $10 and the minimum bet is $1, work out how many spins it would take for Jimmy to lose all of his money if he used his RedBlack or BlackRed system.

It can be assumed Jimmy will only bet every time the (["Red", "Black", "Red", "Black"], bets "Black") or (["Black", "Red", "Black", "Red"], bets "Red") pattern appears.

If Jimmy wins on a spin he receives $2. If he loses, then he loses $1.

##### _Made in November 2018_
