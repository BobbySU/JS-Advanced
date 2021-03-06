function attachEventsListeners() {
    let deysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let modul = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    deysBtn.addEventListener('click', onConvert);
    hoursBtn.addEventListener('click', onConvert);
    minutesBtn.addEventListener('click', onConvert);
    secondsBtn.addEventListener('click', onConvert);

    function convert(value, unit) {
        let days = value / modul[unit];
        return {
            days: days,
            hours: days * modul.hours,
            minutes: days * modul.minutes,
            seconds: days * modul.seconds
        }
    }

    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id)

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}