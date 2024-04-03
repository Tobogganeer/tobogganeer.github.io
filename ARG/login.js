// Login stuff

const usernameHash = 1761534973;
const passwordHash = 1521057635;

function checkCookies()
{
	var cookie = getCookie("mainlogin");
	
	if (cookie == "loggedin")
		advance();
}

function login(form) {
    var username = generateHash(form.username.value);
	var password = generateHash(form.password.value);
	
	if (username === usernameHash && password === passwordHash)
	{
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
	setCookie("mainlogin", "loggedin", 5);
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