let inputEl = document.getElementById('textInput');
let timer = document.getElementById('timer');
let bomb = document.getElementById('bomb');



let counter=10;
let abc;
abc=setInterval(function(){
    counter=counter-1;
    timer.textContent=counter;
    if (counter===0){
        timer.textContent="BOOM !";
        bomb.src="explosion.png";
        clearInterval(abc);
    }
 },1000);
inputEl.addEventListener('keydown', function(event) {
    if ( inputEl.value === "Defuse" && event.key === 'Enter') {
        timer.textContent = "You did it!";
        clearInterval(abc);
    
    }
});

