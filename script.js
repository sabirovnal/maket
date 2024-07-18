const countdownDate = new Date("Jul 27, 2024 23:59:59").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));

    function formatTime(value) {
        return value < 10 ? '0' + value : value;
    }

    function getImageUrl(value) {
        const formattedValue = formatTime(value);
        return `https://i.postimg.cc/J0qkCHVj/${formattedValue}.png`;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").src = getImageUrl(0);
        document.getElementById("hours").src = getImageUrl(0);
        document.getElementById("minutes").src = getImageUrl(0);
    } else {
        document.getElementById("days").src = getImageUrl(days);
        document.getElementById("hours").src = getImageUrl(hours);
        document.getElementById("minutes").src = getImageUrl(minutes);
    }
}, 1000);

