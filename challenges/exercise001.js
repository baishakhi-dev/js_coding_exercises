function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase()+word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0)+"."+lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  //Divide the number by 100
  var amount = originalPrice/100;
  //Multiply the number by the vatRate
  var amount2 = amount*vatRate;
  //Add the above amount to the originalPrice
  var addedAmount = amount2+originalPrice;
  //returning the only two places after decimal(using toFixed())
  return Number(addedAmount.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Multiply the discount % to the original price
  var amountSaved = originalPrice * (reduction /100);
  var salePrice = originalPrice - amountSaved;
  return Number(salePrice.toFixed(2));

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let mid;//declare mid character as mid
  //The string is of even length
  if(str.length%2 === 0){
	  mid = str.substring(str.length/2-1,str.length/2+1);
  }
  else{//The string is of odd length
	  mid = str.substring(str.length/2,str.length/2+1);
  }
  return mid;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  //Split the words into space seperated words
  var letters = word.split("");
  //reverse the words 
  var reverseWords = letters.reverse();
  //join the reversed words
  var result = reverseWords.join("");
  
  return result;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //declare the variables
  let reverseWords = [];
  let letters;
  let revWords;
  let result;
  for(var i =0;i < words.length;i++){
    //Split the words into letters
    letters = words[i].split("");
    //reverse the letters 
    revWords = letters.reverse();
    //join the reversed letters
    result = revWords.join("");
    //push into the reverse array
    reverseWords.push(result);

  }
  return reverseWords;
  

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  var count = users.filter(function (key)
  {
    return key.type === "Linux";
  }
  );
  return count.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  //Find the sum
  let sum = 0;
  for(let i in scores){
	  sum += scores[i];
  }
  //Get the length of the array
  let len = scores.length;
  let mean = sum/len;
  return Number(mean.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3 === 0 && n%5 === 0){
	  return 'fizzbuzz';
  }
  else if(n%5 === 0)
  {
	  return 'buzz';
  }
  else if(n%3 === 0)
  {
	  return 'fizz';
  }
  else
  {
	  return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
