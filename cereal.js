
var num = process.argv[2];

var cerealA = ["apple", "cap'n","cinammon","cocoa","frosted","fruit","honey bunches of","raisin","shredded","toasted"];
var cerealB = ["bran","crunch","crisp","flakes","jacks","krispies","loops","pebbles","pops","puffs"];




for (i=0; i < num; i++){
	var randomCerealA = cerealA[Math.floor(Math.random()*(cerealA.length-1)+1)];
	var randomCerealB = cerealB[Math.floor(Math.random()*(cerealB.length-1)+1)];
	
	var newCereal = randomCerealA + randomCerealB;
	console.log(newCereal);
}




