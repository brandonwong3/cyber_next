export const QUESTION_TYPES = {
	MULTIPLE_CHOICE: "multiple_choice",
	MULTIPLE_CHOICE_MULTI_SELECT: "multiple_choice_multi_select",
	TRUE_FALSE: "true_false",
	TEXT: "text",
}


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
	hint: 'Use your brain.',
	example: 'HAHA',
	answeredCorrectly: false,
};


// Example of a True-False question
export const TRUE_FALSE_QUESTION_STRUCT = {
	type: QUESTION_TYPES.TRUE_FALSE,
	question: "Is the sky blue?",
	answers: [
		{
			text: "True",
			isCorrect: true,
		},
		{
			text: "False",
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
