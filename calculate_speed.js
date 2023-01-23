let start_time = 0;
let end_time = 0;
function started(){
    const d = new Date();
    start_time = d.getTime()/1000;
}
function ended(){
    const d = new Date();
    end_time = d.getTime()/1000;
}
function display( x, y ){
    let select = document.querySelector(".speed");
    console.log(end_time - start_time);
    let calc_speed = Math.round(((x/4.7) /(end_time - start_time)) * 60);
    select.innerHTML = 'Your typing speed : '+calc_speed + " wpm " + "<br> Accuracy : "+Math.round(100-((y/x)*100)) + " % ";
}
export {started, ended, display};