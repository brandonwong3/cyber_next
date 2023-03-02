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

export const testQuiz = {
	title: 'Test Quiz',
	categories: [CATEGORIES.XXS],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.HARD,				// Choose one from above constants
	description: 'This is a Test Quiz',
	urlPath: 'test-quiz',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
        QUESTION_1,
	]
};

export default testQuiz;
