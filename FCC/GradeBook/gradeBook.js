function getAverage(scores){
    let sum = 0;

    for (let i = 0; i < scores.length; i++){ //This will iterate through all the grade points
        sum += scores[i]; //This will add all iterated grade points
    }

    let average = sum / scores.length;

    return average;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score){
    if (score === 100){
        return "A++";
    }else if (score >= 90){
        return "A";
    }else if (score >= 80){
        return "B";
    }else if (score >= 70){
        return "C";
    }else if (score >= 60){
        return "D";
    }else{
        return "F";
    }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

function hasPassingGrade(score){
    let check = getGrade(score);
    if (check === "F"){
        return false;
    }else{
        return true;
    }
}

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore){
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);

    if (grade === "F"){
        return "Class average: " + average + "." + " Your grade: " + grade + "." + " You failed the course.";
    }else{
        return "Class average: " + average + "." + " Your grade: " + grade + "." + " You passed the course.";
    }
}

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));