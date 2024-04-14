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
		document.getElementById("accompliceNotification").innerHTML = "&lt;!";
}

function hideNotification() {
	document.getElementById("accompliceNotification").innerHTML = "";
}

function setAccompliceMessage(msg) {
	showNotification();
	document.getElementById("accompliceMessage").innerHTML = msg;
}