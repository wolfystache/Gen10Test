/*
Name: Arthur Clark
Date: 12 / 15 / 2018
Filename: luckySeven.js
Description:
- The script for the lucky seven problem. It contains two functions: One for playing the game, and the other 
for generating a random dice roll sum, which the first function calls.*/


/*
Function: play()
Parameters: None 
Return value: None 
Description: 
This function grabs the starting bet, checks to make sure it's a number, then 
simulates the game by looping until the user runs out of money. The rules for the game are 
that a die is rolled at every turn. If the sum of the roll is 7, $4 is added to the balance, and 
if the sum is not $7, $1 is subtracted from the balance. This continues until the balance is less than 
or equal to 0, where a table is displayed giving the user info about their game
*/
function play() {
	var bet = document.getElementById("startingBet").value; 

	if (bet == "" || isNaN(bet)) {
		alert("Please enter a valid number for your starting bet");
		document.getElementById("startingBet").value = "";
		return;
	}

	else if (bet <= 0) {
		alert("Please enter a number greater than 0 for your starting bet");
		document.getElementById("startingBet").value = "";
		return;
	}


	var numRolls = 0; 
	// Set highest roll to zeroth roll initally, before the first roll happens
	var hiRoll = 0;

	/*The parseFloat function is used to avoid type problems where the current balance is concatenated every turn 
	instead of being added/subtracted */
	var currMoney = parseFloat(bet);
	var maxMoney = parseFloat(bet);

	while (currMoney > 0) {
		numRolls++;
		var roll = rollDice();

		if (roll === 7) {
			currMoney += 4;
			
		}
		else {
			currMoney--;
			
		}
		if (currMoney > maxMoney) {
			maxMoney = currMoney;
			hiRoll = numRolls;
		}
		console.log("Money = " + currMoney + "\nCurrent Roll = " + numRolls);
		
	}

	

	var results = document.getElementById("results");
	results.style.display = "block";
	document.getElementById("bet").innerText = bet;
	document.getElementById("totalRolls").innerText = numRolls;
	document.getElementById("maxMoney").innerText = maxMoney;
	document.getElementById("hiRoll").innerText = hiRoll;



}

/*
Function: rollDice()
Parameters: None 
Return value: Sum of dice 0 and dice 1 
Description: 
This function returns of the sum of two random dice rolls
*/

function rollDice() {
	var die0, die1 = 0;
	die0 = Math.floor(6 * Math.random() + 1); 

	die1 = Math.floor(6 * Math.random() + 1); 

	return die0 + die1;
}