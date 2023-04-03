let answer
let MissingOperation = "Please select an Operation"
let NotCool = "Why are you dividing by zero?"
let Funny = "Woah, funny number hahahahaahhaahahufiawoae"

function init() {
let numeroUno = document.getElementById('Question1').value * 1
let numeroDos = document.getElementById('Question2').value * 1

if (document.getElementById('add').checked){
    answer = numeroUno + numeroDos;
    document.getElementById('StinkinNumbers').src = 'DoingMath.jpg'
    if (answer == 69){
        answer = Funny
        document.getElementById('StinkinNumbers').src = 'funnee.jpg'
    }
}
        //Below is the calculation process
    else if (document.getElementById('subtract').checked){
        answer = numeroUno - numeroDos;
        document.getElementById('StinkinNumbers').src = 'DoingMath.jpg'
        if (answer == 69){
            answer = Funny
            document.getElementById('StinkinNumbers').src = 'funnee.jpg'

        }
    }
        else if (document.getElementById('multiply').checked){
            answer = numeroUno * numeroDos;
            document.getElementById('StinkinNumbers').src = 'DoingMath.jpg'
            if (answer == 69){
                answer = Funny
                document.getElementById('StinkinNumbers').src = 'funnee.jpg'

            }
        }
            else if (document.getElementById('divide').checked){
                answer = numeroUno / numeroDos;
                document.getElementById('StinkinNumbers').src = 'DoingMath.jpg'
                if (numeroDos == 0){
                    answer = NotCool;
                    document.getElementById('StinkinNumbers').src = 'notDoingMath.gif'
                if (answer == 69){
                    answer = Funny
                    document.getElementById('StinkinNumbers').src = 'funnee.jpg'

                }
                }
            }
                        else {
                            answer = MissingOperation;
                            document.getElementById('StinkinNumbers').src = 'notDoingMath.gif'
                        }
                    console.log(answer)
            displayFunction()
}

    

function displayFunction(){
    document.getElementById('FreeMathAnswer').textContent = answer
}
