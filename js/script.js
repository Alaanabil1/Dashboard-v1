let countDownBox = document.querySelector(".allTime");
let daysBox = document.querySelector(".days");
let hrsBox = document.querySelector(".hrs");
let minBox = document.querySelector(".min");
let secBox = document.querySelector(".sec");
let countDownDate = new Date("Mar 20, 2022 00:01:00").getTime();

// COUNT DOWN FUNCTION
let x = setInterval(function() {

    // GET DATE
    let now = new Date().getTime();

    // TIME BETWEEN NOW AND DATE
    let distance = countDownDate - now;

    // CALCULATION TIME
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysBox.innerHTML = days + "<span>Days</span>";
    hrsBox.innerHTML = hours + "<span>Hours</span>";
    minBox.innerHTML = minutes + "<span>Minutes</span>";
    secBox.innerHTML = seconds + "<span>Seconds</span>";


}, 1000);



let SessioncountDownBox = document.querySelector(".session-start");
let SessiondaysBox = document.querySelector(".session-start .days");
let SessionhrsBox = document.querySelector(".session-start .hrs");
let SessionminBox = document.querySelector(".session-start .min");
let SessionsecBox = document.querySelector(".session-start .sec");
let SessioncountDownDate = new Date("Mar 20, 2022 00:01:00").getTime();

// COUNT DOWN FUNCTION
let Sessionx = setInterval(function() {

    // GET DATE
    let Sessionnow = new Date().getTime();

    // TIME BETWEEN NOW AND DATE
    let Sessiondistance = countDownDate - Sessionnow;

    // CALCULATION TIME
    let Sessiondays = Math.floor(Sessiondistance / (1000 * 60 * 60 * 24));
    let Sessionhours = Math.floor((Sessiondistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let Sessionminutes = Math.floor((Sessiondistance % (1000 * 60 * 60)) / (1000 * 60));
    let Sessionseconds = Math.floor((Sessiondistance % (1000 * 60)) / 1000);

    SessiondaysBox.innerHTML = Sessiondays + "<span>Days</span>";
    SessionhrsBox.innerHTML = Sessionhours + "<span>Hours</span>";
    SessionminBox.innerHTML = Sessionminutes + "<span>Minutes</span>";
    SessionsecBox.innerHTML = Sessionseconds + "<span>Seconds</span>";


}, 1000);