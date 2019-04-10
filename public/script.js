/**
 * Created by COMPUTER POINT on 4/10/2019.
 */
var containerM = [];
var containerD = [];
var containerA = [];
var containerS = [];

function numdisplay (num){
    var input  = document.getElementById("input");
    input.value += num ;
}

function CE (){
    document.getElementById("input").value = null


}

function clearone (){
    var input = document.getElementById("input");
    var cl = input.value ;
    if ( cl > 0 ){
        cl = cl.substring(0,cl.length-1);
        input.value = cl
    }

}

function multipication (){

    var input  = document.getElementById("input");
    var firstnum = input.value;
    containerM.push (firstnum)
    document.getElementById("input").value = ""

    console.log(firstnum);

}

function division (){

    var input  = document.getElementById("input");
    var firstnum = input.value;
    containerD.push (firstnum);
    document.getElementById("input").value = "";

    console.log(firstnum);


}

function addition (){

    var input  = document.getElementById("input");
    var firstnum = input.value;
    containerA.push (firstnum);
    document.getElementById("input").value = "";

    console.log(firstnum);

}

function subtraction (){

    var input  = document.getElementById("input");
    var firstnum = input.value;
    containerS.push (firstnum);
    document.getElementById("input").value = "";

    console.log(firstnum);

}

function decimal (){

    var input  = document.getElementById("input");
    input.value += "."

}


function equal () {

    var input = document.getElementById("input");
    var secondnum = input.value ;
    if (containerM.length > 0){
        var answer = containerM * secondnum;
        input.value = answer;
    }
    if (containerD.length > 0){
        var answer = containerD / secondnum;
        input.value = answer;
    }
    if (containerA.length > 0){
        var add = parseFloat(containerA);
        var add2= parseFloat(secondnum);

        var answer = add + add2;
        input.value = answer;
    }
    if (containerS.length > 0){
        var answer = containerS - secondnum;
        input.value = answer;
    }




    containerM.shift();
    containerD.shift();
    containerA.shift();
    containerS.shift();


}

function sqirt (){
    var input = document.getElementById("input");
    var sqrkt = Math.sqrt(input.value);
    input.value = sqrkt

}

function percent (){

    var input = document.getElementById("input");
    var perc =( eval(input.value))/100;
    input.value = perc;
}
