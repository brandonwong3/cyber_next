import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import QuizPage from './QuizPage';
import AUTHENTICATION_QUIZ from '../../quizzes/authenticationQuiz';


const TestPage = () => {
	return (
		<BaseTemplate>
			<div className={'force-absolute-center'}>
				<QuizPage title={'Test Quiz Page'} questions={AUTHENTICATION_QUIZ.questions} />
			</div>
		</BaseTemplate>
	);
}

export default TestPage;
