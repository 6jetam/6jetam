// function showTime() {
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes ();
//     var s = date.getSeconds ();
//     var den = "AM";


//     if (h == 0) {
//         h = 12;
//     }

//     if (h > 12 ) {
//         h = h - 12
//         den = "PM"
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + ":" + m + ":" + s + " " + den;

//     // document.getElementById('clockDisplay').innerHTML = time;
//     document.getElementById('clockDisplay').textContent = time;

//     setTimeout(showTime, 1000)
// }

// showTime();

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    // var session = "AM";
    
    if(h == 0){
        h = 24;
    }
    
    // if(h > 12){
    //     h = h - 12;
    //     session = "PM";
    // }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // var time = h + ":" + m + ":" + s + " " + session
    var time = h + ":" + m + ":" + s;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();