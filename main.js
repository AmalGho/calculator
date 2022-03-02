
let display = document.getElementById('display');

let equ = document.getElementById('all');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                equ.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(equ.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    al.innerText = al.innerText.slice(0, -1);
                }
                break;
            default:
                if (e.target.innerText == Number || e.target.innerText == '0'){
                    display.innerText = e.target.innerText;
                }
                equ.innerText += e.target.innerText;
        }
    });
});


