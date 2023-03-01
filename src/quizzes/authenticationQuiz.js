import {CATEGORIES, DIFFICULTY, QUESTION_TYPES} from './quizzes';


const QUESTION_1 = {
	type: QUESTION_TYPES.MULTIPLE_CHOICE_MULTI_SELECT,

    question: "Broken authentication may be prevented by: (select all that apply)",
    answers: [
        {
            text: "Implementing password strength restriction",
            isCorrect: true,
        },
        {
            text: "Using predictable session ID",
            isCorrect: false,
        },
        {
            text: "Destroying session token post logout",
            isCorrect: true,
        },
        {
            text: "Restricting internal URL to authenticated/authorized users only",
            isCorrect: true,
        }
        ],
	hint: null,
	example: null,
	answeredCorrectly: false,		// Always false when creating a new question
};

const authenticationQuiz = {
	title: 'Authentication',
	categories: [CATEGORIES.AUTHENTICATION],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.EASY,				// Choose one from above constants
	description: 'This quiz will test your knowledge about strong authentication practices.',
	urlPath: 'authentication',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
		QUESTION_1,
	]
};

export default authenticationQuiz;
