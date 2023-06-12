//1 display number in textbox
function display(num){
    scrn.value += num
}

//AC- Clear the textbox
function clearbox(){
    scrn.value ="";
}

//evaluate the expresion(solve the string in display)
function solve(){
    string= scrn.value
    scrn.value=eval(string)
}

//do the backspace
function back(){
    scrn.value= scrn.value.slice(0,-1)
}