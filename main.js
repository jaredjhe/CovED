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
    if (provinceValue == undefined) {
        let provinceLabelElement = document.getElementById("select-form-province-label");
        provinceLabelElement.innerHTML = '<span style="color:red;">Please Select a Province</span>';
    } else if (gradeValue == undefined) {
        let provinceLabelElement = document.getElementById("select-form-grade-level-label");
        provinceLabelElement.innerHTML = '<span style="color:red;">Please Select a Grade</span>';
    } else {
        resultingId = "curriculum.html#" + provinceValue + "-" + gradeValue;
        buttonElement.href = resultingId;
    }
}