let display = document.getElementById('inputbox');
let string = "";
let abc = '';
let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener(('click'), () => {
        if (btn.innerText == 'AC') {
            string = '';
            display.placeholder = '0';
        }
        else if (btn.innerText == 'DEL') {
            if (display.placeholder == '0') {
                display.placeholder == '0'
            }
            else if (string == '') {
                display.placeholder = '0';
            }
            else {
                string = string.substring(0, string.length - 1);
                display.placeholder = string;
            }
        }
        else if (btn.innerText == '=') {
            abc = eval(string);
            display.placeholder = abc;
            string = '';
        }
        else {
            string += btn.innerText;
            display.placeholder = string;
        }

    })
});