let x = +prompt("введите первое число: ");

let y = prompt("введите знак: "); 


let z = +prompt("введите второе число: ");

    
if (y == '+') {
    res = x + z
    console.log(`Равно: ${res}`);
    alert(`Равно: ${res}`)
} 
else if(y == '-') {
    res = x - z
    console.log(`Равно: ${res}`);
    alert(`Равно: ${res}`)
    } 
    else if(y == '*') {
    res = x * z
    console.log(`Равно: ${res}`);
    alert(`Равно: ${res}`)
} 
    else if(y == '/') {
    res = x / z
    console.log(`Равно: ${res}`);
    alert(`Равно: ${res}`)
} else {
    let y = prompt("введите знак заново: "); 
}
    
    
    


