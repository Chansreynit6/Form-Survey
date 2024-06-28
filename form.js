document.forms[0].addEventListener("submit", totalValue);

function totalValue(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;


  console.log(fullName);
  console.log(email);
  let grade = document.getElementsByName("grade");
  let gradeValues = [];

  for (let i = 0; i < grade.length; i++) {
    console.log(grade[i].checked, grade[i].value);
    if (grade[i].checked) {
      gradeValues.push(grade[i].value);
    }
  }
  console.log(gradeValues);

  let school = document.getElementsByName("learning");
  let schoolValue = [];

  for (let i = 0; i < school.length; i++) {
    console.log(school[i].checked, school[i].value);

    if (school[i].checked) {
      schoolValue.push(school[i].value);
    }
  }
  console.log(schoolValue);

  let interest = document.getElementsByName("interest");
  let interestValue = [];

  for (let i = 0; i < interest.length; i++) {
    console.log(interest[i].checked, interest[i].value);

    if (interest[i].checked) {
      interestValue.push(interest[i].value);
    }
  }
  console.log(interestValue);
  let yes1 = document.getElementsByName("yes1");
  let yes1Value = [];

  for (let i = 0; i < yes1.length; i++) {
    console.log(yes1[i].checked, yes1[i].value);
    if (yes1[i].checked) {
      yes1Value.push(yes1[i].value);
    }
  }

  let area1 = document.getElementById("floatingTextarea1").value;

  console.log(area1);

  let checked1 = document.getElementsByName("checked1");
  let checked1Value = [];

  for (let i = 0; i < checked1.length; i++) {
    console.log(
      checked1[i].nextElementSibling.textContent.trim(),
      checked1[i].checked
    );

    if (checked1[i].checked) {
      checked1Value.push(
        checked1[i].nextElementSibling.textContent.trim(),
        checked1[i].value
      );
    }
  }
  console.log(checked1Value);
  let yes2 = document.getElementsByName("yes2");
  let yes2Value = [];

  for (let i = 0; i < yes2.length; i++) {
    console.log(yes2[i].checked, yes2[i].value);
    if (yes2[i].checked) {
      yes2Value.push(yes2[i].value);
    }
  }

  console.log(yes2Value);

  let floatingTextarea2 = document.getElementById("floatingTextarea2").value;

  console.log(floatingTextarea2);

  let yes3 = document.getElementsByName("yes3");
  let yes3Value = [];

  for (let i = 0; i < yes3.length; i++) {
    console.log(yes3[i].checked, yes3[i].value);
    if (yes3[i].checked) {
      yes3Value.push(yes3[i].value);
    }
  }
  console.log(yes3Value);
  let floatingTextarea3 = document.getElementById("floatingTextarea3").value;

  console.log(floatingTextarea3);

  let checked2 = document.getElementsByName("checked2");
  let checked2Value = [];

  for (let i = 0; i < checked2.length; i++) {
    console.log(
      checked2[i].nextElementSibling.textContent.trim(),
      checked2[i].checked
    );
    if (checked2[i].checked) {
      checked2Value.push(checked2[i].value);
    }
  }
  console.log(checked2Value);
  let learning_env = document.getElementsByName("learning-env");
  let learning_envValue = [];

  for (let i = 0; i < learning_env.length; i++) {
    console.log(learning_env[i].checked, learning_env[i].value);
    if (learning_env[i].checked) {
      learning_envValue.push(learning_env[i].value);
    }
  }
  console.log(learning_envValue);

  let peer_interaction = document.getElementsByName("peer-interaction");
  let peer_interactionValue = [];

  for (let i = 0; i < peer_interaction.length; i++) {
    console.log(peer_interaction[i].checked, peer_interaction[i].value);
    if (peer_interaction[i].checked) {
      peer_interactionValue.push(peer_interaction[i].value);
    }
  }
  console.log(peer_interactionValue);

  let feedback = document.getElementsByName("feedback");
  let feedbackValue = [];

  for (let i = 0; i < feedback.length; i++) {
    console.log(feedback[i].checked, feedback[i].value);
    if (feedback[i].checked) {
      feedbackValue.push(feedback[i].value);
    }
  }
  console.log(feedbackValue);

  let hope = document.getElementsByName("hope");
  let hopeValue = [];

  for (let i = 0; i < hope.length; i++) {
    console.log(hope[i].nextElementSibling.textContent.trim(), hope[i].checked);
    if (hope[i].checked) {
      hopeValue.push(hope[i].value);
    }
  }

  let floatingTextarea4 = document.getElementById("floatingTextarea4").value;

  console.log(floatingTextarea4);

  let floatingTextarea5 = document.getElementById("floatingTextarea5").value;

  console.log(floatingTextarea5);

  let floatingTextarea6 = document.getElementById("floatingTextarea6").value;

  console.log(floatingTextarea6);

  let floatingTextarea7 = document.getElementById("floatingTextarea7").value;

  console.log(floatingTextarea7);

  let dataValue = [];

  for (let i = 1; i <= 21; i++) {
    dataValue.push({
      email: email,
      fullname: fullName,
      question_id: i + 0,
      answer: [""],
      created_by: "Group1",
    });
  }
  console.log(dataValue);
  dataValue[0].answer = [fullName];
  dataValue[1].answer = [email];
  dataValue[2].answer = [gradeValues];
  dataValue[3].answer = [schoolValue];
  dataValue[4].answer = [interestValue];
  dataValue[5].answer = [yes1Value];
  dataValue[6].answer = [area1];
  dataValue[7].answer = [checked1Value];
  dataValue[8].answer = [yes2Value];
  dataValue[9].answer = [floatingTextarea2];
  dataValue[10].answer = [yes3Value];
  dataValue[11].answer = [floatingTextarea3];
  dataValue[12].answer = [checked2Value];
  dataValue[13].answer = [learning_envValue];
  dataValue[14].answer = [peer_interactionValue];
  dataValue[15].answer = [feedbackValue];
  dataValue[16].answer = [hopeValue];
  dataValue[17].answer = [floatingTextarea4];
  dataValue[18].answer = [floatingTextarea5];
  dataValue[19].answer = [floatingTextarea6];
  dataValue[20].answer = [floatingTextarea7];

  function postApi() {
    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
      method: "POST",
      body: JSON.stringify({ answers: dataValue }),
      headers: {
        "Content-Type": "application/json",
        "x-secret-key":
          "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Error: Invalid data");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  postApi();


  window.location.href = "pagethank.html";
}



