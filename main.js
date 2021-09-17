const inputEnt = document.querySelector("#point");
let keyword = document.querySelector("#point").value;
const btn = document.querySelectorAll("button");
const history = document.querySelector("#hist");

function btnEntity(Event){ //Mother function
    let conD = Event.target.getAttribute("value");
    btnOptions(conD);
    

}

function btnOptions(x){ //Fuction of Actions
    let conD = x;
    let inputPrev = inputEnt.getAttribute("value");
    let plusInput;

    if(conD == "1"||conD == "2"||conD == "3"||conD == "4"||conD == "5"||conD == "6"||conD == "7"||conD == "8"||conD == "9"||conD == "0"||conD == "."||conD == "+"||conD == "-"||conD == "*"||conD == "/"){
        
        let notOperator = inputPrev.slice(inputPrev.length-1, inputPrev.length);
        let arrayOperator = ["+","-","*","/"];
        plusInput = inputPrev+conD;

        for(var i = 0; i < arrayOperator.length; i++){
            if(conD == arrayOperator[i] && conD == notOperator){
                let delOperator = inputPrev.slice(0,inputPrev.length-1);
                plusInput = delOperator+conD;               
            } else if(notOperator == arrayOperator[i]){
                if(conD == "1"||conD == "2"||conD == "3"||conD == "4"||conD == "5"||conD == "6"||conD == "7"||conD == "8"||conD == "9"||conD == "0"){
                    //Don´t make nothing 
                }else{
                    let delOperator = inputPrev.slice(0,inputPrev.length-1);
                    plusInput = delOperator+conD;     
                }
            }
        }        
        
        inputEnt.setAttribute("value",plusInput);

    } else if(conD == "c"||conD == "ce"){ //Delete all characters
        plusInput = "";
        inputEnt.setAttribute("value",plusInput);
        if(conD == "ce"){ 
            history.innerHTML = "";
        }

    } else if(conD == "del"){ //Delete last character
        let delInput = inputPrev.slice(0,inputPrev.length-1);
        inputEnt.setAttribute("value",delInput);

    } else if(conD == "equal" && inputPrev != ""){ //Result
        let result = eval(inputPrev);
        history.innerHTML += inputPrev + " = " + result + "<br>";
        inputEnt.setAttribute("value",result);
    }
}

for(var i = 0; i < btn.length; i++){ //Add onclick EventListeners
    btn[i].onclick = btnEntity;
}
