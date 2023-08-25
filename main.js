const quizData= [
    {
   questions:' JavaScript i ____ icat etmiştir.',
  a:'Brendan Eich',
  b:'Thomas Java',
  c:'James Gosling',
  d:'Linus Helsinki',
  e:'Thomas Helsinki',
  correct:'a',
},
  { 
    questions:' JavaScript in alternatif adı nedir',
  a:'LimeScript',
  b:'JXXScript',
  c:'ECMScript',
  d:'ECMAScript',
  e:'JVASCript',
  correct:'d',
},
  {
     questions:'Java ve JavaScript neden benzer ada sahiptir ? ',
  a:'Javascript, Javanın soyulmuş (stripped down) bir sürümüdür.',
  b:'JavaScript sözdizimi (syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.',
  c:'İkisi de Nesneye Yönelik Programlamayı destekler.',
  d:'Hiçbiri',
  e:'Hepsi',
  correct:'b',
},
{
    questions:'JavaScript ifadeleri ____ tarafından sonlandırılır.',
 a:'/',
 b:'!',
 c:',',
 d:';',
 e:'Hiçbiri',
 correct:'d',
},
{
    questions:'Bir web sayfasında “Hello World” yazmak için aşağıdakilerden hangisi doğru kabul edilir ?',
 a:'System.out.println(“Hello World”)',
 b:'print(“Hello World”)',
 c:'response.write(“Hello World”)',
 d:'document.write(“Hello World”)',
 e:'Hiçbiri',
 correct:'d',
},

]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.questions
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>

    `
    }
  }
})



