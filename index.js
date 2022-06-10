function createExam() {
  questionNumber = 0;
  deleteChild();
  const examPaper = document.getElementById("examPaper");
  const numberOfQuestions = document.getElementById("numberOfQuestions");
	const exam = new Exam()
	const examMidpoint = Math.ceil(exam.numberOfQuestions / 2)
  originalExam = new Exam(exam.questions.slice(0, exam.numberOfQuestions))
  originalExam.shuffle();
  for (let i=0; i<numberOfQuestions.value; i++) {
    examPaper.appendChild(originalExam.questions[i].fetchHTML())
  }
  MathJax.typeset();
}
function deleteChild() {
    const examPaper = document.getElementById("examPaper");
        
    //examPaper.firstElementChild can be used.
    var child = examPaper.lastElementChild; 
    while (child) {
        examPaper.removeChild(child);
        child = examPaper.lastElementChild;
    }
}
// Initiate MathJax Onload
MathJax.typeset();
// createExam();
