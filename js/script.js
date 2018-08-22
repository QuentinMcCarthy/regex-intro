function validatePhPost(){
	event.preventDefault();

	var phoneNumber = document.getElementById("phoneNum").value,
		// phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.][0-9]{3}[-\s][0-9]{4}$/;
		phoneRegex = /^([+]{0,1}|[0]{0,2})[0-9]{0,2}[-\s]{0,1}[(]{0,1}[0-9]{2}[)]{0,1}[-\s][0-9]{3}[-\s][0-9]{4}$/;

	var phoneResult = phoneRegex.test(phoneNumber);

	if(!phoneResult){
		alert("Please enter a valid Phone Number");
	} else{
		console.log("Phone number correct");
	}

	var postCode = document.getElementById("postCode").value,
		postRegex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

	var postResult = postRegex.test(postCode);

	if(!postResult){
		alert("Please enter a valid Postal Code");
	} else{
		console.log("Postal Code correct");
	}
}
