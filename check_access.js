var flag = false;

function loggedin(){
    flag = false;
}
function access(){
    if(flag == false)
        window.open("./login.html","_self");
}
function give_access(){
    flag = true;
    window.open("./index.html","_self");
    document.querySelector("./flip").innerHTML = "1" ;   
}

function revoke_access(){
    flag = false;
    window.open("./login.html","_self");       
}
console.log(flag);

let place = document.querySelector(".login");
if(place)
    place.addEventListener("click",give_access);


let place2 = document.querySelector(".logout");
if(place2)
    place2.addEventListener("click",revoke_access);

export {loggedin,give_access,access};