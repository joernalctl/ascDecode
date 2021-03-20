/*  TODO: remove cypher and decypher functions.
/*  TODO: improve UI.
/*  TODO: create a button (and a function) to erase the boxes.
    TODO: error handling (show pop-up messages to user in case of bad input);
    TODO: use only one field and one text box for both functions.

*/


'use strict';

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "","", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
//Function to convert letter into ascii code
function converToAsc(s){
    
    let ascCode = 65;
    let converted = "";

    for (let index in s){
        
        for (let letter in alphabet ) {
            if (s[index] == alphabet[letter]){
                converted += ascCode + parseInt(letter);
            }
            
        }
    }

    return converted;
}


// Function to invert the string. 
function invertString(s){
    
    var pos = s.length;
    var n = 1;
    var ordStr = "";
    for (let index = 0; index < pos; index++){
       ordStr += s[pos-n];
       n++
    }
    return(ordStr);
}

//function to convert from ascii string into a letter string.
function converToLetter(s){
   
   let n = 1;
   let letter = "";
   
   for (let i = 0; i < s.length; i++){
       
       if (s[i] >= 6){
           let codedLetter = (s[i] + s[i+1]);
          
           letter += decrypt(codedLetter);
           
           i++;
           n++;
       }
       else if (s[i] == 1){
           let codedLetter = (s[i] + s[i+1] + s[i+2]);
           letter += decrypt(codedLetter);
           
           i += 2;
           n += 2;
       }
       else if (s[i] == 3 && s[n] == 2){
           letter += " ";
           i++;
           n++;
       };
   
       n++;
   }
   
   return letter;   
}

//Function to convert from ascii code into letters.
function decrypt(letter){
     
    
    let phrase = "";
    let ascCode = parseInt(letter) - 65;
    
    phrase = alphabet[ascCode];
         
    return phrase;
}



//Function which is called to encrypt the string
function encode(unencodedString) {
   
    let s = converToAsc(unencodedString); 
    s = invertString(s);

    return s;

}


//Function that is called by the main function, in order to decode the string. 
function decode(encodedString) {
   
   let s = invertString(encodedString);
   s = converToLetter(s);

   return s;
   
}


//I'll use one function to more than one action, but I'll break it down later.
//Function to receive the encrypted string, and return the unencrypted string.
function decipher(){
    
    let encString = document.getElementById("encStr")
    let textBox = document.getElementById("decOut");

    let result = decode(encString.value);

    textBox.innerText = result;
}

//function to receive the decripeted string, and return it encrypted
function cypher(){
    let decString = document.getElementById("decStr");
    let textBox = document.getElementById("encOut");

    let result = encode(decString.value);

    textBox.innerText = result;
}
 


