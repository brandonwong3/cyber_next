import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import QuizPage from './QuizPage';
import AUTHENTICATION_QUIZ from '../../quizzes/authenticationQuiz';
import FlipOverCard from '../fragments/intermediate/FlipOverCard';


const TestPage = () => {
	return (
		<BaseTemplate>
			<div className={'force-absolute-center'}>
				<FlipOverCard question={'What is the difference between a cookie and a session?'}>
					<p className={'text-center'}>A cookie is stored on the client's computer and is sent to the server with every request. A session is stored on the server and is identified by a session ID stored in a cookie.</p>
				</FlipOverCard>
				{/*<QuizPage title={'Test Quiz Page'} questions={AUTHENTICATION_QUIZ.questions} />*/}
			</div>
		</BaseTemplate>
	);
}

export default TestPage;
