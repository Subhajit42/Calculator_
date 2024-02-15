document.addEventListener("click",function() {
    let valueButton = event.target.id;
    document.querySelector("h1").innerHTML += valueButton;
})

document.addEventListener("keydown", ()=>{
    if (event.keyCode == 13){
        solution();
    }else 
    if (event.keyCode == 8){
        Backspace();
    } else 
    if ( !Number.isNaN( Number(event.key) ) ){
        document.querySelector("h1").innerHTML += event.key;
    }
    else{
        let array = ['+','-','*','/','.','(',')'];
        array.forEach( (sign)=>{
            if (event.key === sign){
                // console.log(event.key);
                document.querySelector("h1").innerHTML += event.key;
            }
        })
    }
})


document.addEventListener("keydown",()=>{
    if (event.keyCode == 13){
        solution();
    }else if (event.keyCode == 8){
        Backspace();
    }
})




function solution(){
    let formula = document.querySelector("h1").innerHTML;
    // try{
    //     var answer =  eval(formula);
    //     if (isNan(answer)) throw "Error"
    // }
    // catch (err) {
    //     console.log(err.message);
    //     answer = err;
    // }

    var answer =  eval(formula);
    // console.log(answer);
    document.querySelector("h2").innerHTML = answer ;
}


function Backspace(){
    let formula = document.querySelector("h1").innerHTML;
    formula = formula.substr(0,formula.length-1);
    document.querySelector("h1").innerHTML = formula;
}

function AllClear(){
    document.querySelector("h1").innerHTML = "";
    document.querySelector("h2").innerHTML = "";
}

// ModeChange
function ToggleMode(EnteredClass){
    let list = document.querySelectorAll(EnteredClass);
    // console.log(listi);
    list.forEach((li)=>{
        // console.log(li.className.replace("light","dark"));
        if(li.className.search("dark") !== -1){
            li.className = li.className.replaceAll("dark","light");
        }else{
            li.className = li.className.replaceAll("light","dark");
        }
    });

    let bgElement = document.querySelector(".background");
    // div.style.color = 'red';
    // console.log(bgElement);
    if (bgElement.style.backgroundColor === "bisque" || bgElement.style.backgroundColor === "" ){
        // div.style.color = 'red';
        bgElement.style.backgroundColor = "#495057";
    }else{
        bgElement.style.backgroundColor = "bisque";
    }

    let imageElement = document.querySelector("img");
    if (bgElement.style.backgroundColor === "bisque"){
        imageElement.src = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png";
    }else{
        imageElement.src = "https://cdn2.iconfinder.com/data/icons/bubble-set-general/48/Sun-512.png";
    }
}