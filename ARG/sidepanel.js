// JavaScript Document

function openSidebar() {
	document.getElementById("accompliceSidepanel").style.width = "250px";
	hideNotification();
}

function closeSidebar() {
	document.getElementById("accompliceSidepanel").style.width = "0";
}

function showNotification() {
	// Check if the window is hidden
	if (document.getElementById("accompliceSidepanel").style.width != "0")
	{
		var marker = document.getElementById("accompliceNotification");
		marker.innerHTML = "&lt;!";
		marker.classList.add("emphasis");
		setTimeout(() => marker.classList.remove("emphasis"), 200);
	}
	
	try
	{
		var audio = new Audio("/ARG/audio/notification.wav");
		audio.play();
	}
	// Make sure the audio doesn't throw errors
	catch (err) { }
}

function hideNotification() {
	document.getElementById("accompliceNotification").innerHTML = "";
}

function setAccompliceMessage(msg) {
	document.getElementById("accompliceMessage").innerHTML = msg;
	showNotification();
}

function addAccompliceMessage(msg) {
	document.getElementById("accompliceMessage").innerHTML += "<br><br>" + msg;
	showNotification();
}
