document.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const people = document.getElementById('count');
    let value = 0;

    const setValue = () => {
        people.innerHTML = `${value}`
    }

    minusButton.addEventListener('click', () => {
        value -= 1;
        setValue(value)
    });

    plusButton.addEventListener('click', () => {
        value += 1;
        setValue(value)
    });
})