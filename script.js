const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function (r) {
        console.log(r.target.id);
        if (r.target.id === 'grey') {
            body.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'yellow') {
            body.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'blue') {
            body.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'white') {
            body.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'aqua') {
            body.style.backgroundColor = r.target.id;
        }
    });
});
