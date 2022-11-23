document.addEventListener('DOMContentLoaded', function() {
    let a = document.getElementById('input');
    let b = document.getElementById('button');
    let c = document.getElementById('div');
    let d = 0;


    function startTimer() {
        nIntervId = setInterval(onClick, 1000);
    };



    function onClick() {
    
       c.textContent = a.value - d;
       d += 1;
       console.log(c.textContent)

       if (c.textContent <= 0) {
           c.textContent = 0;
           clearInterval(nIntervId);
       }
       
    };

    b.addEventListener('click', startTimer);
});