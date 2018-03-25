			function wiggle() {
							document.getElementById("img2").class = "animat";
							}
function Validate() {
	//Variable Initialization
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var regU = username.value.search(/^[A-Za-z]{1}\w{5,22}$/);
  var regP = password.value.search(/^[A-Za-z]{1}\w{5,22}$/);
  
  //If statements
  if (regU != 0) {
    alert("The name you entered (" + username.value + 
          ") This is the wrong username format. \n" +
         "All username and passwords must be between 6 and 23 characters  \n" +
		 "" +
		 "The first character is a letter and the rest are letters or numbers.");
		 username.style.border = "1px solid red";
    document.getElementById('username_false').style.color = "red";
    username_false.textContent = "Username is required";
	document.Form1.username.focus();
    username.focus();
    username.select();
    return false;
  } else
    return true;

  if (regP != 0) {
    alert("The name you entered (" + password.value + 
          ") This is the wrong password format. \n" +
         "All username and passwords must be between 6 and 23 characters  \n" +
		 "" +
		 "The first character is a letter and the rest are letters or numbers.");
		 password.style.border = "1px solid red";
    document.getElementById('password_false').style.color = "red";
    password_false.textContent = "Password is required";
	document.Form1.password.focus();
    password.focus();
    password.select();
    return false;
  } else
    return true;
}