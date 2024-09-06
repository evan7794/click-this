document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    const equals = document.getElementById('equals');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;
            display.value += value;
        });
    });

    equals.addEventListener('click', function () {
        display.value = 'imissyouu'; // Override with the custom result
    });
});
