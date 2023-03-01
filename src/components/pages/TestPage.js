import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import QuizPage from './QuizPage';
import { MULTIPLE_CHOICE_MULTI_SELECT, TEXT_QUESTION_STRUCT, MULTIPLE_CHOICE_QUESTION_STRUCT, TRUE_FALSE_QUESTION_STRUCT} from '../../constants';



const TestPage = () => {

	const QUESTIONS = [MULTIPLE_CHOICE_MULTI_SELECT, TEXT_QUESTION_STRUCT, MULTIPLE_CHOICE_QUESTION_STRUCT, TRUE_FALSE_QUESTION_STRUCT];
	return (
		<BaseTemplate style={{height: '100%'}}>
			<div className={'force-absolute-center'}>
				<QuizPage title={'Test Quiz Page'} questions={QUESTIONS} />
			</div>
		</BaseTemplate>
	);
}

export default TestPage;
