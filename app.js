function getNumber(num){
//    console.log(num)
    var result = document.getElementById("result");
    result.value += num;
    // var newNum = document.querySelector(".btn");

    
    
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);

    
}

function remove(){
    var result = document.getElementById("result");

    result.value = result.value.slice(0, - 1);
}
