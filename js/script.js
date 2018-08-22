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

function validateLogin(){
	event.preventDefault();

	var username = document.getElementById("username").value,
		nameRegex = /^[\w]{6,12}$/;

	if(!username){
		alert("Enter: Username cannot be blank!");
	} else{
		let count = /^.{6,15}$/g,
			cap = /(.*[A-Z]){1,}/;
			lwr = /.*[a-z]/;
			num = /(.*\d){1,}/;

		let countResult = count.test(username);

		if(!countResult){
			console.error("Invalid username length");
			alert("Username must be between 6-15 chars long");
		} else{
			let capResult = cap.test(username);

			if(!capResult){
				console.error("Invalid username capitalisation");
				alert("Username must contain at least one capital!");
			} else{
				let lwrResult = lwr.test(username);

				if(!lwrResult){
					console.error("Invalid username capitalisation");
					alert("Username must contain at least one lowercase letter!");
				} else{
					let numResult = num.test(username);

					if(!numResult){
						console.error("Invalid username numerics");
						alert("Username must contain at least one number!");
					} else{
						console.log("Username valid");
					}
				}
			}
		}
	}

	var password = document.getElementById("password").value,
		confirmPass = document.getElementById("confirmPass").value,
		passRegex = /^[\w]{6,12}$/;

	if(!password){
		alert("Error: Password cannot be blank!");
	} else if(password !== confirmPass){
		console.error("Password mismatch");
		alert("Error: Passwords do not match!");
	} else{
		let count = /^.{9,}$/g,
			cap = /(.*[A-Z]){2,}/;
			lwr = /.*[a-z]/;
			num = /(.*\d){2,}/;

		let countResult = count.test(password);

		if(!countResult){
			console.error("Invalid password length");
			alert("Password must be at least 9 chars long");
		} else{
			let capResult = cap.test(password);

			if(!capResult){
				console.error("Invalid password capitalisation");
				alert("Password must contain at least two capitals!");
			} else{
				let lwrResult = lwr.test(password);

				if(!lwrResult){
					console.error("Invalid password capitalisation");
					alert("Password must contain at least one lowercase letter!");
				} else{
					let numResult = num.test(password);

					if(!numResult){
						console.error("Invalid password numerics");
						alert("Password must contain at least two numbers!");
					} else{
						console.log("Password valid");
					}
				}
			}
		}
	}
}
