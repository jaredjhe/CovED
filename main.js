let provinceValue, gradeValue, resultingId;

let provinceElement = document.getElementById("select-form-province");
provinceElement.onchange = function() {
    provinceValue = provinceElement.value;
}

let gradeElement = document.getElementById("select-form-grade-level");
gradeElement.onchange = function() {
    gradeValue = gradeElement.value;
}

let buttonElement = document.getElementById("go-button");
buttonElement.onclick = function() {
    resultingId = "curriculum.html#" + provinceValue + "-" + gradeValue;
    buttonElement.href = resultingId;
}