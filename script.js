function getMultiply(){
    let inputText = document.getElementById('input_field');
    let inputValue = parseInt(inputText.value)
    
    if ( inputValue > 0){
        let result = ''
        for( let i = 1; i <= 10; i++){
            result += ` ${inputValue}  X   ${i}  =  ${inputValue * i}  <br> `
    
            // result += inputValue + " X " + " " + i + " " + " = "+ inputValue * i + "<br>";
        }
        document.getElementById('result_input').innerHTML = result
        document.getElementById('footer_text').style.display = 'none'
    }
    else{
       document.getElementById('error_msg').style.display = 'block'
    //    document.getElementById('footer_text').style.display = 'none'
       
    }
    inputText.value = '';
}