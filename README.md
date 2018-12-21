<h1>Broke in Vegas Kata</h1>

<p>
This is a new Kata I am currently working on and intend to publish on <a href="https://www.codewars.com/">Codewars</a>. To follow me on Codewars or view my other Katas click <a href="https://www.codewars.com/users/RymaTech/authored">here.</a>
</p>

<h2>Story</h2>

<p>Jimmy Vegas is fulfilling a lifelong ambition by going to Las Vegas and playing on the roulette table. He believes he has the solution which can beat the roulette table every time.</p>

<p>Jimmy has never seen a Red Black or Black Red pattern repeat itself more than four times; for example, Jimmy has never seen the following: Red, Black, Red, Black, Red or vice versa: Black, Red, Black, Red, Black.</p>

If Jimmy’s above theory is correct, he knows that if he sees the Red Black or Black Red pattern repeat itself four times then the pattern is certain to break!

For example:
```
(Red, Black, Red, Black > bets Black)

(Black, Red, Black, Red > bets Red)
```

Notice how he is betting that the above patterns did not continue?

The problem is that Jimmy has a very short attention span and he is worried that if, one of the two, above patterns appear, he will miss it and therefore not bet.

<h2>Task</h2>

<p>Jimmy has a purse of $10 and the minimum bet is $1, work out how many spins it would take for Jimmy to lose all of his money if he used his RedBlack or BlackRed system.</p>

<p>It can be assumed Jimmy will only bet every time the (["Red", "Black", "Red", "Black"], bets "Black") or (["Black", "Red", "Black", "Red"], bets "Red") pattern appears.</p>

<p>If Jimmy wins on a spin he receives $2. If he loses, then he loses $1</p>

<p>Good Luck!</p>
