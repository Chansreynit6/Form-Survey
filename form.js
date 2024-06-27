document.forms[0].addEventListener('submit', totalValue);

function totalValue(event){
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    
    console.log( fullName);
    console.log( email);

    
    let grade = document.getElementsByName('grade');
    for (let i = 0; i < grade.length; i++) {
        console.log( grade[i].checked,grade[i].value);
    }

    
    let learningPlace = document.getElementsByName('learning');
    for (let i = 0; i < learningPlace.length; i++) {
        console.log(  learningPlace[i].checked,learningPlace[i].value);
    }
    let interest = document.getElementsByName('interest');
    for (let i = 0; i < interest.length; i++) {
        console.log( interest[i].checked);
    }
    
    
    let checked1 = document.getElementsByName('checked1');
    for (let i = 0; i < checked1.length; i++) {
        console.log(checked1[i].nextElementSibling.textContent.trim() + ":", checked1[i].checked);
    }
}
