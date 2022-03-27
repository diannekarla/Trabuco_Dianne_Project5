function validateAge(){
    year = document.getElementById("year").value;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    dob = new Date(year+" "+month+" "+day);

    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if(age >= 18){
        window.location.href="home.html"
    }else{
        result = document.getElementById("result");
        if (result.classList.contains('hidden')) {
            setTimeout(function () {
                result.classList.remove('hidden');
            }, 20);
        }

    }

    return false;
}

function displayFAQ() {
    const answers = document.getElementByClass('abswers')
    alert("asdasdasd");
    answers.classList.toggle("show")
  }
