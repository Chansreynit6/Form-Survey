function getApi() {
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/question/10/answers?search_created_by=Group1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error: Invalid data');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let num = document.querySelector('.box-card-number');
        let count =0;
        for(let i=0 ; i<data.length; i++){

            count++;
        }
        console.log(count);
        num.innerHTML += `
        <p class="text-number">${count}</p>
        `
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

getApi();

function getApi2() {
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers?search_created_by=Group1&search_answer=Yes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error: Invalid data');
        }
        return response.json();
    })
    .then(function(datas) {
        console.log(datas);
        let interest = document.querySelector(".box-card-interest");
        let count1=0;
        for(let i=0 ; i<datas.length; i++){
            count1++;
        }
        console.log(count1)
        interest.innerHTML += `
        <p class="text-interest">${count1}</p>
        `
        
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

getApi2();



function gradeApi() {
    let grades =document.getElementById('myselect').value;
console.log(grades);
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=Group1&search_answer='+grades, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error: Invalid data');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let grade = data.length;
        document.getElementById('grade').innerHTML =grade;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}
gradeApi();

function schoolApi() {
    let school = document.getElementById('myschool').value;
    console.log(school);
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=Group1&search_answer='+school, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Error: Invalid data');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let schools = data.length;
        document.getElementById('school').innerHTML=schools;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}
schoolApi();