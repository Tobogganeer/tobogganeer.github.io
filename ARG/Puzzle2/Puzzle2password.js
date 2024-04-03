
const passwordHash = -667920564;


function login(form) {
	 var password = generateHash(form.password.value.toUpperCase());
	 if (password === passwordHash)
     	window.location.replace("http://tobo.games/ARG/employee/index.html");
	 else
	 {
	    //   Be a bit nice and tell them what parts are wrong
	 	if (password !== passwordHash)
         //alert(" password is " + password)
			alert("Unknown username and password.");
	 }

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