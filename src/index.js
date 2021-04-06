const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval

document.body.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
        case "start":
            interval = setInterval(() => document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)], 1000)
            e.target.disable = true
            break;
        case "stop":
            clearInterval(interval)
            e.target.disable = false
    }
})