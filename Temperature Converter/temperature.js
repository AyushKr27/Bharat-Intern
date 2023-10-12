var celcius=document.getElementById('celcius');
var fahrenheit=document.getElementById('fahrenheit');

celcius.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    fahrenheit.value=f; 
})
fahrenheit.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)*5/9;
    if (!Number.isInteger(c)) {
        c=c.toFixed(2);
    }
    celcius.value=c;
});