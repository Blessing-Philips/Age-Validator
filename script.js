/* There's a ittlr bug in this code. When I input an age and it validates, when I type in another age, it appends the result to the former.
Run to get what I'm saying*/

let ageInput = document.getElementById("age");
let ageResult = document.getElementById("result");

function validateAge() {
    let confirmAge = parseInt(ageInput.value)
    if (isNaN(confirmAge)) {
        ageResult.innerHTML += "Please, input your age!"
    } else if (confirmAge < 18) {
        ageResult.innerHTML += "You cannot vote!"
    } else {
        ageResult.innerHTML += "You can vote!"
    }
}