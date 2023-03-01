import AUTHENTICATION_QUIZ from './authenticationQuiz';

const ALL_QUIZZES = [
	AUTHENTICATION_QUIZ,
];

const allQuizUrlPaths = ALL_QUIZZES.map(quiz => quiz.urlPath);


export {
	ALL_QUIZZES,
	allQuizUrlPaths,		// Use this to filter/check if quiz is available
}
