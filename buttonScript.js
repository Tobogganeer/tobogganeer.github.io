
// https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript

async function getData() {
    const req = await fetch('https://httpbin.org/get');
    const json = await response.json()
    document.getElementById("weatherData").innerHTML = json;
}

// IP: http://checkip.dyndns.org/
// GET: https://httpbin.org/get