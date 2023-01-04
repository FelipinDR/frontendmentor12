const submit=document.getElementById("subButton")
const container01=document.getElementById("container01")
const container02=document.getElementById("container02")

const thankMessage=document.getElementById("number")
    function button01(){
        thankMessage.innerText=1
    }
    function button02(){
        thankMessage.innerText=2
    }function button03(){
        thankMessage.innerText=3
    }function button04(){
        thankMessage.innerText=4
    }function button05(){
        thankMessage.innerText=5
    }

function changeScreen(){
    container01.style.display="none";
    container02.style.display="block";
}