// Login stuff

const usernameHash = -242402243;
const passwordHash = 1034980195;

function checkCookies()
{
	var cookie = getCookie("mainlogin");
	
	if (cookie == "loggedin")
		advance();
}

function login(form) {
    var username = generateHash(form.username.value.toLowerCase());
	var password = generateHash(form.password.value.toLowerCase());
	
	if (username === usernameHash && password === passwordHash)
	{
		setCookie("mainlogin", "loggedin", 20); // Stay logged in for 20 mins
		advance();
	}
	else
	{
		// Be a bit nice and tell them what parts are wrong
		if (username !== usernameHash && password !== passwordHash)
			alert("Unknown username and password.");
		else if (username !== usernameHash)
			alert("Unknown username.");
		else if (password !== passwordHash)
			alert("Incorrect password.")
	}
}

function advance()
{
	window.location.replace("http://tobo.games/ARG/employee/index.html");
}

function generateHash(str) {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}