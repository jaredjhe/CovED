let subjectValue, provinceValue, gradeValue, resultingId;

let subjectElement = document.getElementById("select-form-subject");
subjectElement.onchange = function() {
    subjectValue = subjectElement.value;
}

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
    if (subjectValue == undefined) {
        let subjectLabelElement = document.getElementById("select-form-subject-label");
        subjectLabelElement.innerHTML = '<span style="color:red;">Please Select a Subject</span>';
    } else if (provinceValue == undefined) {
        let provinceLabelElement = document.getElementById("select-form-province-label");
        provinceLabelElement.innerHTML = '<span style="color:red;">Please Select a Province</span>';
    } else if (gradeValue == undefined) {
        let provinceLabelElement = document.getElementById("select-form-grade-level-label");
        provinceLabelElement.innerHTML = '<span style="color:red;">Please Select a Grade Level</span>';
    } else {
        resultingId = "curriculum.html#" + subjectValue + "-" + provinceValue + "-" + gradeValue;
        buttonElement.href = resultingId;
    }
}