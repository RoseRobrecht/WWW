let url = "http://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=0b6ea5e45c27490cfa2c124b61b173f9";

function loadDoc() {
    
    //---------------------
    // This is where you would get references to all
    // HTML elements that you want to update with new data
    // based on the results of the asynchronous API call you make below
    //---------------------
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            //---------------------
            console.log("Successful...");
            //console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------
            
            let weatherDataDays = JSON.parse(this.response);
            //console.log(weatherDataDays.list);
            let initialDay = weatherDataDays.list;

            let today = new Date();
            var currentDay = today.getDate();

            var day1 = [];
            var day2 = [];
            var day3 = [];
            var day4 = [];
            var day5 = [];
            var day6 = [];

            for (let counter=0; counter<weatherDataDays.list.length; counter++) {

                let currentInf0 = weatherDataDays.list[counter];
                //console.log(currentTime);
                let currentTime = weatherDataDays.list[counter].dt_txt;
                let day = currentTime.substring(8, 10);

                //console.log(day);

                if (day==(currentDay+1)) {
                    day1.push(weatherDataDays.list[counter]);
                }
                if (day==(currentDay+2)) {
                    day2.push(weatherDataDays.list[counter]);
                }
                if (day==(currentDay+3)) {
                    day3.push(weatherDataDays.list[counter]);
                }
                if (day==(currentDay+4)) {
                    day4.push(weatherDataDays.list[counter]);
                }
                if (day==(currentDay+5)) {
                    day5.push(weatherDataDays.list[counter]);
                }
                
                
            }

            console.log(day1);
            console.log(day2);
            console.log(day3);
            console.log(day4);
            console.log(day5);

        } else {
            
            //---------------------
            console.log("failure...")
            // error message for user that API is down
            //---------------------
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
        
//---------------------
// Make sure you call the function to begin the request for information
// In the weather widget, you will want to call this function using the
// onClick event of the form submit button
loadDoc();
//--------------------