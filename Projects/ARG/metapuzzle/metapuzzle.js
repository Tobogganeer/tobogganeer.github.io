
// Yeah we aren't gonna hash these numbers
// Just slap em in here
const coverUp = 129983;
const stealData = 836501;
const blowUp = 567443;


function submitConfig(form) {
	var cfg = form.config.value;
	
	if (cfg == coverUp)
	{
		if (confirm("Accomplice: Hey, what are you doing? That will secure their network!"))
			window.location.replace("http://tobo.games/ARG/metapuzzle/coverup.html");
	}
	else if (cfg == stealData)
	{
		if (confirm("Boss: Ummm ok, are you really going to try and steal all of our data?"))
			window.location.replace("http://tobo.games/ARG/metapuzzle/stealdata.html");
	}
	else if (cfg == blowUp)
	{
		if (confirm("Accomplice: Do it! Once you do this, you'll blow them to kingdom come!"))
			window.location.replace("http://tobo.games/ARG/metapuzzle/blowup.html");
	}
	else if (cfg == "")
	{
		alert("Mireson System: Please enter a config code.");
	}
	else
	{
		alert("Mireson System: Unknown config code entered. Please try again.");
	}
}