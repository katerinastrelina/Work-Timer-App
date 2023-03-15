let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let wm = document.getElementById("w_minutes");
let ws = document.getElementById("w_seconds");
let bm = document.getElementById("b_minutes");
let bs = document.getElementById("b_seconds");

let startTimer;

start.addEventListener("click", function() {
    if(startTimer === undefined) {
        startTimer=setInterval(timer, 1000);
    } else {
        alert("Timer is already running");
    }
})

start.addEventListener("click", function() {
    if(startTimer === undefined) {
        startTimer=setInterval(timer, 1000)
    }
    })

pause.addEventListener("click", function() {
    stopInterval()
    startTimer = undefined;
})

reset.addEventListener("click", function() {
    wm.innerText=0;
    ws.innerText="10";
    bm.innerText=0;
    bs.innerText="05";
    document.getElementById("counter").innerText=0;
    stopInterval()
    startTimer = undefined;
})

function stopInterval() {
    clearInterval(startTimer);
}

function timer() {
    if(ws.innerText !=0) {
        ws.innerText--;
    } else if(wm.innerText !=0 && ws.innerText == 0) {
        ws.innerText=59;
        wm.innerText--;
    }

    if(wm.innerText == 0 && ws.innerText == 0) {
        if(bs.innerText !=0) {
            bs.innerText--;
        } else if(bm.innerText !=0 && bs.innerText == 0) {
            bs.innerText=59;
            bm.innerText--;
        }
    }
    
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText=0;
        ws.innerHTML="10";

        bm.innerText=0;
        bs.innerText="05";

        document.getElementById("counter").innerText++;
    }
}

