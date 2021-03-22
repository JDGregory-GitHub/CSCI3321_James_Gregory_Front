function updateDisplay(newValue){
    //Find our display box
    var d = document.getElementById('display');
    
    switch (newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            break;
        
        case 'AC':
            d.innerHTML = '';
            break;
        
        case '+':
        case '-':
        case '*':
        case '/':
            //if box is empty do nothing
            if (d.innerHTML == '')
                break;
            //Else if d ends with any operators do nothing
            else if (d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || 
                d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                break;
            }
            //Else append key to display box
            else{
                d.innerHTML += newValue;
                break;
            }
                
        case '=':
            //If display box not empty eval total
            if(d.innerHTML != ''){
                d.innerHTML = eval(d.innerHTML);
                break;
            }
            //Else if d ends with any of our operators do nothing
            else if (d.endsWith('+') || d.endsWith('-') || d.endsWith('*') || d.endsWith('/')){
                break;
            }
            
        default:
            break;
    }
    
}