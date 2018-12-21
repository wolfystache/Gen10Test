/*
Name: Arthur Clark
Date: 12/16/2018
Filename: restaurantSite.js 
Description:
- This is the script for validating the The Silver Spoon's contact page. It contains only one function, validate(), 
which validates that the user has submitted valid contact information, and alerts them if they are missing something.
 */


/*
 Function: validate
 Parameters: None 
 Return Value: bool upon successful/unsuccessfuly validation 
 Description:
 - This function simply checks the input that the user filled out in the contact me page to see if it's valid. Valid 
 means that all fields (besides additional info) are filled with something. E-mail must also follow e-mail form convention, 
 but this is checked by the browser through the type="email" attribute, not in this function. 
 */

function validate() {

	/* Errors is used as a string to identify any missing input fields the user may have submitted and is given to 
	them through an alert() message*/
	var errors = "";

	var name = document.getElementById("nameField").value;

	if (name == "") {
		errors += "- Please enter your name\n";
	}

	var email = document.getElementById("emailField").value;
	if (email.length == 0) {
		errors += "- Please enter your e-mail\n";	
	}


	var phone = document.getElementById("phoneField").value;
	if (phone.length == 0) {
		errors += "- Please enter your phone number\n";
	}


	var reason = document.getElementById("reasonDD").value; 
	if (reason.length == 0) {
		errors += "- Please enter your reason for inquiry";
		
	}


	var days = document.getElementsByName("bestDay");

	// This loop checks that at least one of the checkboxes is checked
	for (var i = 0; i < days.length; i++) {
		if (days[i].checked) {
			break;
		}
		else {
			if (i == (days.length - 1)) {
				errors += "- Please give us the best days to contact you";
			}

		}
	}
	/* If there are errors, the user is given an alert() message and the function returns false and the user is allowed to fill in the 
	remaining fields.
	*/
	if (errors != "") {
		alert("Oops!\n" + errors);
		return false;
	}
	// Upon successful validation, the page refreshes and all fields are set back to blank
	else {
		alert("Success! We look forward to working with you!");
		return true;
	}

}
