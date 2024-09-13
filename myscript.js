

function displayPopUp(){

    alert("Hello Allll");
}


function displayPopUp2(){
    alert("OUUUTTTTT");
}


function test(){
    alert("Hello AXSOS Academy!")
    
    //setTimeout(  popup  ,  10000     )
}


function popup(){
    //console.log("Loading...")
    alert("Basel")
}

function changeTitle(){
    //var headertitle = document.querySelector("p");
    //var headertitle = document.getElementsByClassName("title")
    //var headertitleid = document.getElementById("mytitle")
    var headertitle_  = document.querySelectorAll("p")

    for( var i = 0 ; i < headertitle_.length ; i++){
        headertitle_[i].innerText = "Aseel";
        headertitle_[i].style.backgroundColor = "#383838";
        headertitle_[i].style.color= "White";
    }

    
}

function changeTitleToOrg(){
    var headertitle = document.querySelector(".title");
    headertitle.innerText = "Title";
     headertitle.style.backgroundColor = "White"
     headertitle.style.color= "Black";
}

function test_(){
    var btn  = document.querySelector(".mybtn");
    if ( btn.value == "Login"){
        btn.value = "Logout";
        btn.style.backgroundColor = "White";
    }
    else{
        btn.value = "Login";
        btn.style.backgroundColor = "purple";
    }
}