// 1st Demo
// Use Native Node Modules
const fs = require('fs');

fs.copyFileSync('file1.txt', 'file2.txt');

// 2nd Demo
const superheroes = require('superheroes');
const supervillains = require('supervillains');

var myHero = superheroes.random();
var myVill = supervillains.random();

console.log('Hero: ' + myHero);
console.log('Villain: ' + myVill);
