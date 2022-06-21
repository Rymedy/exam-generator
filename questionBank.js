var questionNumber = 0;
class Exam {
	constructor(questions = questionBank()) {
		this.questions = questions
	}
	get numberOfQuestions() {
		return this.questions.length
	}
	shuffle() {
		for (let i = this.numberOfQuestions - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.questions[newIndex]
			this.questions[newIndex] = this.questions[i]
			this.questions[i] = oldValue
		}
	}
}

class Question {
	constructor(question, 
		subQuestionOne, 
		subQuestionTwo, 
		subQuestionThree, 
		subQuestionFour, 
		subQuestionFive, 
		answerOne, 
		answerTwo, 
		answerThree, 
		answerFour) {
		this.question = question;
		this.subQuestionOne = subQuestionOne;
		this.subQuestionTwo = subQuestionTwo;
		this.subQuestionThree = subQuestionThree;
		this.subQuestionFour = subQuestionFour;
		this.subQuestionFive = subQuestionFive;
		this.answerOne = answerOne;
		this.answerTwo = answerTwo;
		this.answerThree = answerThree;
		this.answerFour = answerFour;
	}

	fetchHTML() {
		questionNumber += 1;
		const questionContainer = document.createElement('div');
		const question = document.createElement('div');
		const questionContents = document.createElement('div');
		const answerA = document.createElement('div');
		const answerB = document.createElement('div');
		const answerC = document.createElement('div');
		const answerD = document.createElement('div');
		const subQuestionOne = document.createElement('div');
		const subQuestionTwo = document.createElement('div');
		const subQuestionThree = document.createElement('div');
		const subQuestionFour = document.createElement('div');
		const subQuestionFive = document.createElement('div');
		questionContainer.classList.add("questionContainer");
		question.classList.add("question");
		questionContents.classList.add("questionContents");
		answerA.classList.add("answerA");
		answerB.classList.add("answerB");
		answerC.classList.add("answerC");
		answerD.classList.add("answerD");
		subQuestionOne.classList.add("subQuestionOne");
		subQuestionTwo.classList.add("subQuestionTwo");
		subQuestionThree.classList.add("subQuestionThree");
		subQuestionFour.classList.add("subQuestionFour");
		subQuestionFour.classList.add("subQuestionFive");
		question.innerText = questionNumber + ". " + this.question;
		answerA.innerText = this.answerOne;
		answerB.innerText = this.answerTwo;
		answerC.innerText = this.answerThree;
		answerD.innerText = this.answerFour;
		subQuestionOne.innerText = this.subQuestionOne;
		subQuestionTwo.innerText = this.subQuestionTwo;
		subQuestionThree.innerText = this.subQuestionThree;
		subQuestionFour.innerText = this.subQuestionFour;
		subQuestionFive.innerText = this.subQuestionFive;
		questionContainer.appendChild(question);
		questionContainer.appendChild(questionContents);
		questionContents.appendChild(answerA);
		questionContents.appendChild(answerB);
		questionContents.appendChild(answerC);
		questionContents.appendChild(answerD);
		questionContents.appendChild(subQuestionOne);
		questionContents.appendChild(subQuestionTwo);
		questionContents.appendChild(subQuestionThree);
		questionContents.appendChild(subQuestionFour);
		questionContents.appendChild(subQuestionFive);

		return questionContainer
	}
}

function questionBank() {
	// (question, subQuestionOne, subQuestionTwo, subQuestionThree, subQuestionFour, subQuestionFive, answerOne, answerTwo, answerThree, answerFour)
	// PRELIMINARY COURSE
	// Polynomial Questions
	let polynomialQuestionOne = new Question("When $g(x)$ is divided by $x^2 + x - 6$ the remainder is $7x + 13$ . What is the remainder when $g(x)$ is divided by $x + 3$ ?", "", "", "", "", "", "A. -8", "B. -5", "C. 34", "D. 55")
	let polynomialQuestionTwo = new Question("if $ax^4 + 3x^3 - 48x^2 + 60x = 0$ has a double root at $x = 2$, find:", "(a) the value of $a$", "(b) the sum of the other 2 roots", "", "", "", "", "", "", "")
	let polynomialQuestionThree = new Question("It is known that two of the roots of the equation $3x^3 + x^2 - kx + 6 = 0$ are reciprocals of each other. What is the value of $k$?", "", "", "", "", "", "A. -2", "B. 6", "C. 7", "D. 17")
	let polynomialQuestionFour = new Question("The polynomial $f(x) = 2x^2 + kx + 4$ can be expressed as $f(x) = (x - 2)g(x) + 6$. Which of the following is the correct expression for $g(x)$?","","","","","","A. $2x - 1$", "B. $2x + 1$", "C. $2x - 3$", "D. $2x + 3$")
	let polynomialQuestionFive = new Question("If $\\alpha$ and $\\beta$ are the roots of $2x^2 + 4x + 1 = 0$, find the value of:", "(a) $\\alpha + \\beta$", "(b) $\\alpha\\beta$", "(c) ${1 \\over \\alpha\\beta^3} + {1 \\over \\alpha^3\\beta}$", "(d) $\\alpha^2 + \\beta^2$", "", "", "", "", "")
	let polynomialQuestionSix = new Question("If two roots of the equation $x^3 + qx + r = 0$ are equal, show that $4q^3 + 27r^2 = 0$.", "", "", "", "", "", "", "", "", "")
	let polynomialQuestionSeven = new Question("Simplify: ${4^{n+1} + 4^{n-1} \\over 4^{n-1} + 4^n}$", "", "", "", "", "", "", "", "", "")
	let polynomialQuestionEight = new Question("The polynomial $P(x) = x^3 + px^2 + qx + r$ has real roots $\\sqrt{k}, -\\sqrt{k}$ and $\\alpha$.", "(a) Find an expression for $\\alpha$", "(b) Show that $k\\alpha = r$.", "(c) Show that $pq = r$.", "", "", "", "", "", "")
	// Inequality Questions
	let inequalityQuestionOne = new Question("Solve ${5 \\over x + 2} \\le 1$", "", "", "", "", "", "A. $-3 < x \\le 3$", "B. $-2 < x \\le 3$", "C. $-3 < x \\le 2$", "D. $2 < x \\le 3$")
	let inequalityQuestionTwo = new Question("Solve $|3y - 4| \\ge 11$", "", "", "", "", "", "A. $y \\ge {-7 \\over 3}; y \\ge 5$", "B. $y \\ge {-7 \\over 3}; y \\le 5$", "C. $y \\le {7 \\over 3}; y \\ge 5$", "D. $y \\le {-7 \\over 3}; y \\ge 5$")
	let inequalityQuestionThree = new Question("Solve ${1 - x^2 \\over x} < 0$", "", "", "", "", "", "", "", "", "")
	let inequalityQuestionFour = new Question("Solve:", "(a) $|x + 1| = 2x$", "(b) $|x - 2| \\le 2x - 3$", "", "", "", "", "", "", "")
	let inequalityQuestionFive = new Question("Solve: $|{x + 1 \\over x - 2}| < 2$", "", "", "", "", "", "", "", "", "")
	// Calculus Questions
	let calculusQuestionOne = new Question("A large storage tank is conical in shape. The diameter of the tank at its top is 4m and the tank is 3m high. If $r$ is the radius of a tank at height $h$ m", "(a) Show that r = ${2h \\over 3}$", "(b) if water is flowing into the tank at a constant rate of 0.008 $m^3s^-1$ show that the height of water is increasing at the rate ${dh \\over dt} = {0.018 \\over \\pi h^2}$", "(c) At what rate is the water level rising when the tank is half full?", "", "", "", "", "", "")
	let calculusQuestionTwo = new Question("A sphereical balloon is being inflated and its radius is increasing at the rate of 2cm/min. At what rate is the volume increasing when the radius of the balloon is 7cm?", "", "", "", "", "", "", "", "", "")
	let calculusQuestionThree = new Question("Given that ${dM \\over dr} = 5$ and ${dM \\over dt} = 5t^3$, find the value of ${dr \\over dt}$ when $t = 2$.", "", "", "", "", "", "(A) 8", "(B) 12", "(C) 200", "(D) 300")
	// Trig Questions
	let trigQuestionOne = new Question("Find the exact value of $sec105^o$.", "", "", "", "", "", "", "", "", "")
	let trigQuestionTwo = new Question("Prove $sin(\\alpha + \\beta)sin(\\alpha - \\beta) = sin^2\\alpha - sin^2\\beta$", "", "", "", "", "", "", "", "", "")
	let trigQuestionThree = new Question("Prove $4sin75^osin15^o = 1$", "", "", "", "", "", "", "", "", "")
	// Perms and Combs Questions
	let permCombQuestionOne = new Question("Simplify the following:", "(a) ${(n-1)! \\over n!}$", "(b) $(n-1)!-n!$", "", "", "", "", "", "", "")
	let permCombQuestionTwo = new Question("Find the value of n:", "(a) ${}^n \\mathrm{ C }_2 = 90$", "(b) ${}^n \\mathrm{ C }_3 = 6n$", "(c) ${}^n \\mathrm{ C }_7 = 8\\times{}^n \\mathrm{ C }_6$", "", "", "", "", "", "")
	let permCombQuestionThree = new Question("How many different  four digit numbers may be formed from the digits 1, 2, 3, 4, 5, 6, 7, 8, 9 if:", "(a) none of the digits may be repeated?", "(b) the digits may be repeated?", "", "", "", "", "", "", "")
	let permCombQuestionFour = new Question("In how many ways can a committee of three people from four married couples be selected if:", "(a) all are equally eligible?", "(b) the committee must consist of two men and a woman?", "(c) the committee must consist of at least one woman?", "(d) husband and wife cannot serve on the same committee?", "", "", "", "", "")
	let permCombQuestionFive = new Question("Arthur, Guinevere, Lancelot, Bors and Percival sit around a round table. Find how many ways this can be done:", "(a) without restriction,", "(b) if Guinevere sits at Arthur's right hand,", "(c) if Guinevere sits between Lancelot and Bors,", "(d) if Arthur and Lancelot do not sit together.", "", "", "", "", "")
	let permCombQuestionSix = new Question("Ten keys are to be placed on a key ring. In how many ways can this be done", "(a) if the keys are all different?", "(b) if there are 3 identical keys?", "", "", "", "", "", "", "")
	let permCombQuestionSeven = new Question("In how many ways can the letters of the word PARRAMATTA be arranged if the R's are to be seperated?", "", "", "", "", "", "A. 41250", "B. 30300", "C. 24500", "D. 50320")
	let permCombQuestionEight = new Question("A class contains 15 students of whom 5 are prefects. How many committees of 8 can be formed, each containing", "(a) exactly 2 prefects?", "(b) at least 2 prefects?", "", "", "", "", "", "", "")
	let permCombQuestionNine = new Question("If the letters of MATHEMATICS are used to form a word, using all letters, what is the probability of that the letters { ICE } stay together?", "", "", "", "", "", "", "", "", "")
	let permCombQuestionTen = new Question("A hotel has 106 rooms and has some travellers expected to stay on a given night. What number of travellers would require the hotel to allocate at least 3 people to at least one room?", "", "", "", "", "", "(A) 107", "(B) 212", "(C) 213", "(D) 319")
	// Binomial Theorem Questions
	let bionomialQuestionOne = new Question("Expand $\\sum_{k=0}^4 {}^4 \\mathrm{ C }_k(3x)^{4-k}(-{y \\over 2})^k$", "", "", "", "", "", "", "", "", "")
	let bionomialQuestionTwo = new Question("Write the following binomial expressions in sigma notation:", "(a) $(1 - 2x)^4$", "(b) $(x + 3y)^7$", "(c) $(2x - {1 \\over x^2})^5$", "", "", "", "", "", "")
	let bionomialQuestionThree = new Question("Find the coefficient of $x^4$ in the expansion of $\\sum_{k=0}^9 {9 \\choose k}(2)^{9-k}(-{x \\over 3})^k$", "", "", "", "", "", "", "", "", "")
	let bionomialQuestionFour = new Question("Find the term independent of $x$ in the expansion of $({3x^2 \\over 2} + {2 \\over 3x})^9$", "", "", "", "", "", "", "", "", "")
	let bionomialQuestionFive = new Question("If the coefficients of the $3^{rd}$ and $4^{th}$ terms of $(2+x)^n$ are 240 and 160, find n.", "", "", "", "", "", "", "", "", "")
	let bionomialQuestionSix = new Question("Given $(3+4x)^{13}$", "(a) Write down expressions for $T_{k+1}$ and $T_k$", "(b) Show that ${T_{k+1} \\over T_k} = {(14-k)4x \\over 3k}$", "(c) Hence show that when $x = {1 \\over 2}$, $T_6$ is the greatest term in the expansion.", "(d) Write the greatest term when $x = {1 \\over 2}$ in factored form.", "", "", "", "", "")
	let bionomialQuestionSeven = new Question("A test consists of five multiple choice questions. Each question has four alternative answers. For each question only one of the alternative answers is correct. Huong randomly selects an answer to each of the five questions.", "(a) What is the probability that Huong selects three correct and two incorrect answers?", "(b) What is the probability that Huong selects three or more correct answers?", "(c) What is the probability that Huong selects at least one incorrect answer?", "", "", "", "", "", "")
	let bionomialQuestionEight = new Question("Find the coefficient of $x^3$ in the expansion of $(2-5x+x^2)(1+x)^{11}$", "", "", "", "", "", "", "", "", "")
	// Inverse Functions Questions
	let inverseQuestionOne = new Question("Which is the inverse to $y = \\sqrt{ln(2x + 1)}$ for $x \\ge 0$ ?", "", "", "", "", "", "(A) $y = 2(e^{x^2} - 1)$", "(B) $y = {(e^x - 1)^2 \\over 2}$", "(C) $y = {e^{x^2} - 1 \\over 2}$", "(D) $y = 2e^{x^2} - 2$")

	// HSC COURSE
	// Mathematical Induction Questions
	let mathInductionQuestionOne = new Question("Prove the following summation pattern using mathematical induction:", "(a) $\\sum_{r=1}^n rr!=(n+1)!-1$", "(b) $2\\times 1!+5\\times 2!+10\\times 3!+...+(n^2+1)n!=n(n+1)!$", "", "", "", "", "", "", "")
	let mathInductionQuestionTwo = new Question("Prove by mathematical induction that:", "(a) $3^{4n}-1$ is divisible by $80$, for all positive integer values of n.", "(b) $3^{3n}+2^{n+2}$ is divisible by $5$, for all positive integer values of n.", "(c) $13\\times 6^n+2$ is divisible by $10$, for all positive integer values of n.", "", "", "", "", "", "")
	let trigQuestionFour = new Question("Solve the following equations for $0^o \\le \\theta \\le 360^o$", "(a) $2tan{\\theta \\over 2} = -3$", "(b) $sin(2\\theta - 30^o) = {\\sqrt{3} \\over 2}$", "(c) $6sin^2\\theta - cos\\theta - 5 = 0$", "(d) $2cosec^2\\theta = 3cot\\theta + 1$", "", "", "", "", "")
	let trigQuestionFive = new Question("Solve the following equations for $0^o \\le \\theta \\le 360^o$", "(a) $1+cosA = 3sin{A \\over 2}$", "(b) $2cos^2 2\\theta - 3sin2\\theta - 3 = 0$", "(c) $4sinx-3cosx=2$", "(d) $\\sqrt{3} cosx - sinx = 1$", "", "", "", "", "")
	let trigQuestionSix = new Question("Using 't' substitution, solve the following equations for $0^o \\le \\theta \\le 360^o$", "(a) $4sin\\theta - 3cos\\theta = 2$", "(b) $3sinx - \\sqrt{3}cosx = \\sqrt{3}$", "", "", "", "", "", "", "")

	// Calculus Questions
	let calculusQuestionFour = new Question("Verify by differentiation that $x=Ae^{st}$ is a $sol^n$ of ${d^2x \\over dt^2} - 5{dx \\over dt} + 6x = 0,  x(0)=1$ and ${dx \\over dt}(0)=2$, for suitable values of $x$.", "", "", "", "", "", "", "", "", "")
	let calculusQuestionFive = new Question("Find the order and degree of the differential equations:", "(a) ${dy \\over dx} = (1+0.5cosx)^3$", "(b) $[{dy \\over dx}]^2 - 3{dy \\over dx} = 2x+4$", "(c) $[{dy \\over dx}]^2 = 3x^2+6$", "(d) ${d^2y \\over dx^2} + 3x = [{dy \\over dx}]^2$", "", "", "", "", "")
	let calculusQuestionSix = new Question("Construct the direction field ${dy \\over dx} = xy$ for $-2 \\le x \\le 2$", "", "", "", "", "", "", "", "", "")
	let calculusQuestionSeven = new Question("Find the particular solution of ${dy \\over dt} = -r(y-S)$, given that $y(0)=z$ with $r$, $S>0$ positive constants.", "", "", "", "", "", "", "", "", "")
	let calculusQuestionEight = new Question("By showing that ${2 \\over (1-y)(1+y)} = {1 \\over (1-y)} + {1 \\over (1+y)}$, find the general solution of ${dy \\over dx} = (1-y)(1+y)$, given that $y(0) = z$", "", "", "", "", "", "", "", "", "")

	return [
	polynomialQuestionOne,
	polynomialQuestionTwo,
	polynomialQuestionThree,
	polynomialQuestionFour,
	polynomialQuestionFive,
	polynomialQuestionSix,
	polynomialQuestionSeven,
	polynomialQuestionEight,
	inequalityQuestionOne,
	inequalityQuestionTwo,
	inequalityQuestionThree,
	inequalityQuestionFour,
	inequalityQuestionFive,
	calculusQuestionOne,
	calculusQuestionTwo,
	calculusQuestionThree,
	trigQuestionOne,
	trigQuestionTwo,
	trigQuestionThree,
	permCombQuestionOne,
	permCombQuestionTwo,
	permCombQuestionThree,
	permCombQuestionFour,
	permCombQuestionFive,
	permCombQuestionSix,
	permCombQuestionSeven,
	permCombQuestionEight,
	permCombQuestionNine,
	permCombQuestionTen,
	bionomialQuestionOne,
	bionomialQuestionTwo,
	bionomialQuestionThree,
	bionomialQuestionFour,
	bionomialQuestionFive,
	bionomialQuestionSix,
	bionomialQuestionSeven,
	bionomialQuestionEight,
	inverseQuestionOne,
	mathInductionQuestionOne,
	mathInductionQuestionTwo,
	trigQuestionFour,
	trigQuestionFive,
	trigQuestionSix,
	calculusQuestionFour,
	calculusQuestionFive,
	calculusQuestionSix,
	calculusQuestionSeven,
	calculusQuestionEight
	]
}