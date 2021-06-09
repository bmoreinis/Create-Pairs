var coders = ["Armand","Javien","Jayvier","Jomaet","Tony","Nate"];
var sisters = ["Chloe","Ernest","Andrew","Mason","Anaysia","Ethan"];
var another = confirm("Make pairs?");
var pair = 0;
if (another == true) makePair();

function makePair(){
  if (sisters.length != coders.length) {
    sisters.push("Mr. M");
  }
  while(coders.length > 0){
    var first = Math.floor(Math.random()*coders.length);
    var firstPerson = coders[first];
    var second = Math.floor(Math.random()*sisters.length);
    var secondPerson = sisters[second];
    var result = ("Pair "+(pair+1)+" = "+firstPerson+" and "+secondPerson);
    console.log(result);
    alert(result);
    coders.splice(first, 1);
    sisters.splice(second, 1);
    pair++;
  }
}