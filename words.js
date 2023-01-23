
import {started, ended, display} from '/calculate_speed.js';
let number_of_words,word_length;
let pos = document.querySelector(".words");
async function main( length, nums ){
        
        document.querySelector(".control").innerHTML = 
         "Word length : "+length+" <br> Total Words : "+nums;
        number_of_words = nums;
        word_length = length;
        let total_characters = 0;
        let wrong_key = 0;
        let random_sentence = "";
        let words_array = ['',''];
        let mistake = false;
        
        fetch('https://random-word-api.herokuapp.com/word?number='+number_of_words+'&length='+word_length)
        .then(res => res.json())
        .then(data => {
        console.log(words_array = data);
        for(let i =0;i<number_of_words;i++){
            random_sentence += words_array[i];
            total_characters += words_array[i].length;
            random_sentence += ' ';
            console.log(random_sentence);
        }
        let original_sentence = random_sentence;

        let temp = '<span style="color:green";>'+random_sentence.substring(0,1)+'</span>'; 

        temp += random_sentence.substring(1,random_sentence.length);
        random_sentence = temp;
        pos.innerHTML = random_sentence;
        random_sentence += " ";
        let point = 0;
        let stop = original_sentence.length-1;
        
        
        function handle_key_pressed (event){
            var curr_key = event.key;
            var key_code = event.code;
            console.log("!!!! " + curr_key);
            if(point == 1)
                started();
            if(point == stop-1 || curr_key == 'Tab'){
                event.preventDefault();
                document.removeEventListener('keydown',handle_key_pressed);
                if(point == stop - 1){
                ended();
                display(total_characters,wrong_key);
                }
                main(word_length,number_of_words);
            }    
            else if(curr_key == original_sentence[point]){
                mistake = true;
                let change = original_sentence.substring(0,point+1);
                let value = original_sentence[point+1];
                if(value == ' ' && point != stop-1)
                    value = "_";
                console.log("its similar");
                change += '<span style="color:green";>'+value+'</span>';
                change += original_sentence.substring(point+2, original_sentence.length-1);
                pos.innerHTML = change;
                point++;
            }
            else{
                if(mistake == true){
                    wrong_key++;
                    mistake = false;
                    let change = original_sentence.substring(0,point);
                    let value = original_sentence[point];
                    if(value == ' ' && point != stop-1)
                    value = "_";
                    change += '<span style="color:red";>'+value+'</span>';
                    change += original_sentence.substring(point+1, original_sentence.length-1);
                    pos.innerHTML = change;
                }
            }

        }
        document.addEventListener('keydown',handle_key_pressed);
        let place = document.querySelector(".settings");
        let menu = document.querySelector(".change_settings")

        function fix(){
            let new_number_of_words = number_of_words;
            let new_word_length = word_length;
            menu.style.display='none';
            document.removeEventListener('keydown',handle_key_pressed);
            main(new_word_length,new_number_of_words);
        }

        function change(){

            console.log("it comes here");
    
            menu.innerHTML += "<button class = 'revert'>Done</button>"
            document.querySelector(".revert").addEventListener("click",fix)
            menu.style.display='flex';
    
        }


        place.addEventListener("click",change);
    });
}
{
    main(5,10);
    console.log("the flow is here");
}

