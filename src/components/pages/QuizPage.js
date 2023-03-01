import React from 'react';
import QuizTemplate from '../templates/QuizTemplate';
import {useLocation} from 'react-router-dom';
import {ALL_QUIZZES, allQuizUrlPaths} from '../../quizzes/allQuizzes';
import BaseTemplate from '../templates/BaseTemplate';


// Quizzes contain one of three types of questions. Each is listed above.

const QuizPage = () => {

	const location = useLocation();

	React.useEffect(() => {
		console.log(location);
		console.log(location.state);
		console.log(location.pathname);
	}, [location]);

	const isValidQuizPath = React.useMemo(() => {
		let rawUrlPath = location.pathname;
		rawUrlPath = rawUrlPath.replace('/quiz/', '');
		return rawUrlPath in allQuizUrlPaths;
	}, [location.pathname]);

	if (isValidQuizPath) {
		let rawUrlPath = location.pathname;
		rawUrlPath = rawUrlPath.replace('/quiz/', '');
		const quiz = ALL_QUIZZES.find(quiz => quiz.urlPath === rawUrlPath);
		return (
			<BaseTemplate>
				<div className={'force-absolute-center'}>
					<Quiz title={quiz.title} questions={quiz.questions} />
				</div>
			</BaseTemplate>
		);
	} else {
		return (
			<QuizDoesNotExist />
		)
	}

};

const Quiz = ({title = 'Quiz Title', questions = []}) => {

	const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
	const [questionsData, setQuestionsData] = React.useState(questions);


	React.useEffect(() => {
		// Set the page title using the DOM
		document.title = `PenSec Quiz | ${title}`;
	}, [title])

	return (
		<div className={'flex flex-1 flex-grow justify-center items-center align-center'}>

			<h1 className={"text-center font-bold"}>{title}</h1>

			<QuizTemplate
				question={questionsData[currentQuestionIndex]['question']}
				questions={questionsData}
				setQuestions={setQuestionsData}
				answeredCorrectly={questionsData[currentQuestionIndex]['answeredCorrectly']}
				hint={questionsData[currentQuestionIndex]['hint']}
				example={questionsData[currentQuestionIndex]['example']}
				answers={questionsData[currentQuestionIndex]['answers']}
				type={questionsData[currentQuestionIndex]['type']}
				index={currentQuestionIndex}
				progressIndex={setCurrentQuestionIndex}
			/>
			<ProgressIndicator setCurrentQuestionIndex={setCurrentQuestionIndex} currentQuestionIndex={currentQuestionIndex} totalCountQuestions={questionsData.length} />
		</div>
	)


};


const ProgressIndicator = ({setCurrentQuestionIndex, currentQuestionIndex = 0, totalCountQuestions = 10}) => {

	return (
		<div className={"flex flex-row justify-center mt-10"}>
			{
				Array.from(Array(totalCountQuestions).keys()).map((index) => {
					return (
						<div key={index} onClick={(event) => {
							event.preventDefault();
							setCurrentQuestionIndex(index);
						}
						} className={`rounded-full cursor-hover h-2 w-2 mx-1 ${index <= currentQuestionIndex ? 'bg-navy-blue' : 'bg-gray-300'}`}/>
					)
				}
			)}
		</div>
	)

}


const QuizDoesNotExist = () => {

	return (
		<BaseTemplate>
			<div className={'force-absolute-center'}>
				<h1 className={'text-center font-bold'}>Quiz does not exist</h1>
				<p className={'text-center'}>Please go back and try again</p>
			</div>
		</BaseTemplate>
	)

};

export default QuizPage;
