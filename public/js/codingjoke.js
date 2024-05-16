
const button = document.getElementById("btn")
const answer = document.querySelector(".answer")
const question = document.querySelector(".question")



button.addEventListener('click', function (event) {
   const answers = ["Because it ran out of cache!", "Because he didn't get arrays!", "Because light attracts bugs!", "None. It's a hardware problem!", "Because they don't see sharp!"]
   console.log("button")
   if (question.getAttribute('id') == '0') {
      answer.append(answers[0])
   } else if (question.getAttribute('id') == '1') {
      answer.append(answers[1])
   } else if (question.getAttribute('id') == '2') {
      answer.append(answers[2])
   } else if (question.getAttribute('id') == '3') {
      answer.append(answers[3])
   } else if (question.getAttribute('id') == '4') {
      answer.append(answers[4])
   }
});

document.getElementById('')



