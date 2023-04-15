
// https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript

async function getData() {
    var doc = document.getElementById("weatherData")
    doc.innerHTML = "Fetching..."
    //const req = await fetch('https://httpbin.org/get');
    const req = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m");
    const json = await req.json()
    const hourly = json.hourly
    const time = hourly.time
    const temp = hourly.temperature_2m
    // time
    // temperature_2m
    //doc.innerHTML = JSON.stringify(time);
    let print = "";
    for (let i = 0; i < time.length; i++) {
        var index = time[i].indexOf("T") + 1
        //var index = 0
        //var date = Date.parse(time[i])
        // 2022-10-25T00:00
        print += "Time: " + time[i].substring(index) + " : " + temp[i] + "c<br>"
    }

    doc.innerHTML = print;

    //document.getElementById("weatherData").innerHTML = JSON.stringify(json);

}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
}

// IP: http://checkip.dyndns.org/
// GET: https://httpbin.org/get

// https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm
// https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m