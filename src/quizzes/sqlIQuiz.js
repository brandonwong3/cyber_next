import {CATEGORIES, DIFFICULTY, QUESTION_TYPES} from './quizzes';

const QUESTION_1 = {
    type: QUESTION_TYPES.MULTIPLE_CHOICE,

    question: "Given the following SQL error message when ' is entered, select the payload to successfully access the 'flag' user's credentials",
    answers: [
        {
            text: "flag",
            isCorrect: false,
        },
        {
            text: "'flag' or 1=1--",
            isCorrect: true,
        },
        {
            text: "--",
            isCorrect: false,
        },
        {
            text: "'--'",
            isCorrect: false,
        }
        ],
    hint: null,
    example: null,
    answeredCorrectly: false,
};

export const sqlIQuiz = {
	title: 'SQL Injection',
	categories: [CATEGORIES.SQLI],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.MEDIUM,				// Choose one from above constants
	description: 'This question will test your knowledge about SQL user credentials.',
	urlPath: 'sql-injection',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
        QUESTION_1,
	]
};

export default sqlIQuiz;
