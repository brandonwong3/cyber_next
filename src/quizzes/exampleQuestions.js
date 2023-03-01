import {CATEGORIES, DIFFICULTY, QUESTION_TYPES} from './quizzes';

/**
 *
 * HOW TO FORMAT QUIZZES
 *
 * 1. Create a new file in the src/quizzes folder.
 * 2. Copy the code from authenticationQuiz.js and paste it into your new file.
 * 3. Change the name of the quiz to something more appropriate.
 * 4. Change the description of the quiz to something more appropriate.
 * 5. Change the urlPath to something more appropriate.
 * 6. Change the questions to something more appropriate.
 * NOTE: The easiest way to fill out questions is to just copy what's inside
 * The {} brackets and replace the data.
 *
 */


// Example of a Multiple Choice question
export const MULTIPLE_CHOICE_QUESTION_STRUCT = {
	type: QUESTION_TYPES.MULTIPLE_CHOICE,
	question: "What is the capital of the United States?",
	answers: [
		{
			text: "Washington, D.C.",
			isCorrect: true,
		},
		{
			text: "New York City",
			isCorrect: false,
		},
		{
			text: "Los Angeles",
			isCorrect: false,
		},
		{
			text: "Chicago",
			isCorrect: false,
		}
		],
	hint: 'Use your brain.',			// It is required to have a hint. Put null if there is no hint to display
	example: 'HAHA',
	answeredCorrectly: false,
};


// Example of a True-False question
// There can only be one correct answer
export const TRUE_FALSE_QUESTION_STRUCT = {
	type: QUESTION_TYPES.TRUE_FALSE,
	question: "Is the sky blue?",
	answers: [
		{
			text: "True",		// Has to match the exact text of "True" with capital "T"
			isCorrect: true,
		},
		{
			text: "False",		// Has to match the exact text of "False" with capital "F"
			isCorrect: false,
		}
		],
	hint: null,
	example: null,
	answeredCorrectly: false,
};


// Example of a Text Input Question
export const TEXT_QUESTION_STRUCT = {
	type: QUESTION_TYPES.TEXT,
	question: "What is the capital of the United States?",
	answers: [
		{
			text: "Washington, D.C.",
			isCorrect: true,
		}
		],
	hint: null,
	example: 'Seattle',
	answeredCorrectly: false,
}

// Example of a Multiple Choice Multi-Select Question
export const MULTIPLE_CHOICE_MULTI_SELECT = {
	type: QUESTION_TYPES.MULTIPLE_CHOICE_MULTI_SELECT,
	question: 'Broken Authentication may be prevented by (select all that apply):',
	answers: [
		{
			text: 'A.) Implementing password strength restriction',
			isCorrect: false,
		},
		{
			text: 'B.) Using predictable session ID',
			isCorrect: false,
		},
		{
			text: 'C.) Destroying session token post logout',
			isCorrect: true,
		},
		{
			text: 'D.) Restricting internal URL to authenticated/authorized users only',
			isCorrect: true,
		}
		],
	hint: null,
	example: null,
	answeredCorrectly: false,
}

// A sample quiz
const AUTHENTICATION_QUIZ = {
	title: 'Authentication',
	categories: [CATEGORIES.AUTHENTICATION],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.MEDIUM,				// Choose one from above constants
	description: 'This quiz will test your knowledge about Authentication.',
	urlPath: 'authentication',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
		// ...
	]
};
