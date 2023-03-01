import {CATEGORIES, DIFFICULTY, QUESTION_TYPES} from './quizzes';

const QUESTION_1 = {
    type: QUESTION_TYPES.TEXT,
    question: "Given a website known to be vulnerable to cross-site scripting, construct a payload that would inject alert (document.domain)",
	answers: [
		{
			text: "><script>alert(document.domain);</script>",
			isCorrect: true,
		}
		],
	hint: "close the current tag and add a SCRIPT tag",
	example: null,
	answeredCorrectly: false,
};

export const xssQuiz = {
	title: 'Cross-Site Scripting',
	categories: [CATEGORIES.SITE_SECURITY],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.MEDIUM,				// Choose one from above constants
	description: 'This question will test your knowledge about cross-site scripting domains',
	urlPath: 'cross-site-scripting',			// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
        QUESTION_1,
	]
};

export default xssQuiz
