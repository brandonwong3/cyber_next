import {CATEGORIES, DIFFICULTY, QUESTION_TYPES} from './quizzes';


const QUESTION_1 = {
	type: QUESTION_TYPES.MULTIPLE_CHOICE,
	question: "What is a secure way to store passwords?",
	answers: [
		{
			text: "Use a password manager",
			isCorrect: true,
		},
		{
			text: "Give your passwords to your friends",
			isCorrect: false,
		},
		{
			text: "Write your passwords on a sticky note and place it on your monitor",
			isCorrect: false,
		},
		],
	hint: 'Some companies are created to do this.',
	example: null,
	answeredCorrectly: false,		// Always false when creating a new question
};

const authenticationQuiz = {
	title: 'Authentication',
	categories: [CATEGORIES.AUTHENTICATION],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.MEDIUM,				// Choose one from above constants
	description: 'This quiz will test your knowledge about Authentication.',
	urlPath: 'authentication',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
		QUESTION_1,
	]
};

export default authenticationQuiz;
