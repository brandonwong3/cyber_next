export const CATEGORIES = {
	NETWORKING: 'Networking',
	PAYLOAD_ANALYSIS: 'Payload Analysis',
	TRAFFIC_ANOMALY: 'Traffic Anomaly',
	GEOLOCATION: 'Geolocation',
	AUTHENTICATION: 'Authentication',
};

export const DIFFICULTY = {
	EASY: 'Easy',
	MEDIUM: 'Medium',
	HARD: 'Hard',
	EXTREME: 'Extreme',
};

export const AUTHENTICATION_QUIZ = {
	title: 'Authentication',
	categories: [CATEGORIES.AUTHENTICATION],	// Choose one or more from above constants to add to array
	difficulty: DIFFICULTY.MEDIUM,				// Choose one from above constants
	description: 'This quiz will test your knowledge about Authentication.',
	urlPath: 'authentication',					// This will be the url path to access this quiz (ex: /quiz/authentication); it cannot contain spaces
	questions: [
		// ...
	]
};


// Look in constants.js for how to properly format questions.



const ALL_QUIZZES = [
	AUTHENTICATION_QUIZ,
];

export default ALL_QUIZZES;
