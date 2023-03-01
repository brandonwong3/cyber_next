import AUTHENTICATION_QUIZ from './authenticationQuiz';
import SQL_INJECTION_QUIZ from './sqlIQuiz';
import XSS_QUIZ from './xssQuiz';

const ALL_QUIZZES = [
	AUTHENTICATION_QUIZ,
	SQL_INJECTION_QUIZ,
	XSS_QUIZ,
];

const allQuizUrlPaths = ALL_QUIZZES.map(quiz => quiz.urlPath);

export {
	ALL_QUIZZES,
	allQuizUrlPaths,		// Use this to filter/check if quiz is available
}
