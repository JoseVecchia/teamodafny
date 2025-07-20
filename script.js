
const startDate = new Date("2025-06-29T16:36:00");
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerHTML =
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}
setInterval(updateTimer, 1000);
updateTimer();
