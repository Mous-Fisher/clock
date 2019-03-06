const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.sec-hand');

function setDate(){
    const now = new Date();

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(setDate, 1000);