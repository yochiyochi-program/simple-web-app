// alert('quiz!');

let value = 0;

function onClick(i) {
    console.log(i);
    value += i;
    update(value);
}

function update(i) {
    document.getElementById("result").textContent = i;
}

function reset() {
    console.log('clear');
    value = 0;
    update(value);
}