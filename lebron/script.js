document.addEventListener('DOMContentLoaded', function() {
     document.addEventListener('keydown', function(event) {
         if (event.key === "Enter") {
             if (question.value.toLowerCase() == "sunshine") {
                 alert("Correct!");
             } else {
                 alert("WRONG");
             }
         }
     });
    var question = document.createElement('input');
    question.setAttribute('type', 'text');
    question.setAttribute('placeholder', 'Who is Lebron?');
    question.setAttribute('size', '50'); 
    document.body.appendChild(question);
});

