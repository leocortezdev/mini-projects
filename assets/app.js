

function binaryfunction() {
    let input = document.getElementById('input-bi').value;
    if (input === '') {
        alert('Please enter a Binary Number!');
    
    }
    decimal = parseInt(input , 2);
    document.getElementById('binary-output').innerHTML = "Output: " + decimal;
    
}