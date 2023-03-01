import React from 'react';
import {QUESTION_TYPES} from '../../quizzes/quizzes';


const HintExampleSection = ({hint = null, example = null}) => {

	return (
		<div className={`${(!hint && !example) && 'mt-10'}`}>
			{
				hint &&
				<div className={"mt-2"}>
					<small className={'text-sm'}><b>Hint:</b> {hint}</small>
				</div>
			}

			{
				example &&
				<div className={"mt-2"}>
					<small className={'text-sm'}><b>Example:</b></small><br/>
					<code className={'text-sm'}>{example}</code>
				</div>
			}
		</div>
	)

};

const CorrectlyAnsweredQuestionLabel = ({text = 'Correctly Answered!'}) => {
	return (
		<small className={"text-center text-xs text-green font-bold"}>{text}<br/><br/></small>
	)
}

const ErrorText = ({errorText =  'Invalid Answer!'}) => {
	return (
		<small className={"text-center text-xs text-red font-bold"}>{errorText}<br/><br/></small>
	)
}

const SubmitAnswerButton = ({submitCheckAnswer}) => {
	return (
		<button className={"btn btn-primary btn-sm mx-auto mt-10 flex-grow"} onClick={submitCheckAnswer}>Submit</button>
	)
}

const AnswerInput = ({type, answers = [], hint = null, example = null, answeredCorrectly = false, length, currentIndex, progressIndex, validateAnswerCallback}) => {

	const [userAnswer, setUserAnswer] = React.useState('');

	const [multiSelectAnswers, setMultiSelectAnswers] = React.useState({});

	const [errorText, setErrorText] = React.useState('');

	const submitCheckAnswer = () => {
		switch (type) {
			case QUESTION_TYPES.MULTIPLE_CHOICE_MULTI_SELECT:
				// First we take the array of answers and filter out the ones that are correct.
				// Then we take the remaining answers and check if they are in the multiSelectAnswers object.

				let allTrueAnswers = answers.filter(answer => answer['isCorrect'] === true).map(answer => answer['text']);
				let allUserAnswers = Object.keys(multiSelectAnswers).filter(answer => multiSelectAnswers[answer] === true);

				if (allTrueAnswers.length === allUserAnswers.length && allTrueAnswers.every(answer => allUserAnswers.includes(answer))) {
					validateAnswerCallback(true);
					if (currentIndex < length) {
						progressIndex(currentIndex + 1);
					}
					setErrorText('');
					setUserAnswer('');
					setMultiSelectAnswers({});
				} else {
					setErrorText('Incorrect answer selection. Please try again.');
				}
				break;
			case QUESTION_TYPES.MULTIPLE_CHOICE || QUESTION_TYPES.TRUE_FALSE:
				if (userAnswer === answers.map(answer => answer['isCorrect'] ? answer['text'] : null).filter(answer => answer !== null)[0]) {
					validateAnswerCallback(true);
					if (currentIndex < length) {
						progressIndex(currentIndex + 1);
					}
					setErrorText('');
					setUserAnswer('');
					setMultiSelectAnswers({});
				} else {
					setErrorText('Incorrect answer selection. Please try again.');
				}
				break;
			case QUESTION_TYPES.TEXT:
				if (userAnswer === answers[0]['text']) {
					validateAnswerCallback(true);
					if (currentIndex < length) {
						progressIndex(currentIndex + 1);
					}
					setErrorText('');
					setUserAnswer('');
					setMultiSelectAnswers({});
				} else {
					setErrorText('Incorrect text answer. Please try again.');
				}
				break;
			default:
				break;

		}
	};


	switch(type) {
		case QUESTION_TYPES.MULTIPLE_CHOICE_MULTI_SELECT:
			return (
				<div className={"flex flex-col"}>
					{
						answeredCorrectly && <CorrectlyAnsweredQuestionLabel />
					}
					{
						errorText.length > 0 && <ErrorText errorText={errorText} />
					}
					{
						answers.map((answer, index) => {
							return (
								<div key={index.toString()} className={"form-check"}>
									<input type={"checkbox"}
										  checked={Object.keys(multiSelectAnswers).length > 0 && answer['text'] in multiSelectAnswers && multiSelectAnswers[answer['text']]}
										   className={"form-check-input"} id={`answer-${index}`}
										   onChange={(event) => {
											   if (event.target.checked) {
												   setMultiSelectAnswers({...multiSelectAnswers, [answer['text']]: true});
											   } else {
												   setMultiSelectAnswers({...multiSelectAnswers, [answer['text']]: false});
											   }
										   }
										   }
										   disabled={answeredCorrectly}
									/>
									<label className={"form-check-label"} htmlFor={`answer-${index}`}>
										{answer['text']}
									</label>
								</div>

							)
						})
					}

					<HintExampleSection hint={hint} example={example} />
					<SubmitAnswerButton submitCheckAnswer={submitCheckAnswer} />
				</div>
			)
		case QUESTION_TYPES.MULTIPLE_CHOICE:
			return (
				<div className={"flex flex-col"}>
					{
						answeredCorrectly && <CorrectlyAnsweredQuestionLabel />
					}
					{
						errorText.length > 0 && <ErrorText errorText={errorText} />
					}
					{answers.map((answer, index) => {
						return (
							<div key={index.toString()} className={"form-check"}>
								<input className={"form-check-input"} type={"radio"} name={"multiple-choice"} id={`answer-${index}`} value={answer['text']} onChange={(event) => setUserAnswer(event.target.value)} disabled={answeredCorrectly} checked={userAnswer === answer['text']}/>
								<label className={"form-check-label"} htmlFor={`answer-${index}`}>
									{answer['text']}
								</label>
							</div>
						)
					})}
					<HintExampleSection hint={hint} example={example} />
					<SubmitAnswerButton submitCheckAnswer={submitCheckAnswer} />
				</div>
			);
		case QUESTION_TYPES.TRUE_FALSE:
			return (
				<div className={"flex flex-col"}>
					{
						answeredCorrectly && <CorrectlyAnsweredQuestionLabel />
					}
					{
						errorText.length > 0 && <ErrorText errorText={errorText} />
					}
					<div className={"form-check"}>
						<input className={"form-check-input"} type={"radio"} name={"true-false"} id={"true"} value={"True"} onChange={(event) => setUserAnswer(event.target.value)} disabled={answeredCorrectly} checked={userAnswer === 'True'}/>
						<label className={"form-check-label"} htmlFor={"true"}>
							True
						</label>
					</div>
					<div className={"form-check"}>
						<input className={"form-check-input"} type={"radio"} name={"true-false"} id={"false"} value={"False"} onChange={(event) => setUserAnswer(event.target.value)} disabled={answeredCorrectly} checked={userAnswer === 'False'} />
						<label className={"form-check-label"} htmlFor={"false"}>
							False
						</label>
					</div>
					<HintExampleSection hint={hint} example={example} />
					<SubmitAnswerButton submitCheckAnswer={submitCheckAnswer} />
				</div>
			);
		case QUESTION_TYPES.TEXT:
			return (
				<div className={"flex flex-col"}>
					{
						answeredCorrectly && <CorrectlyAnsweredQuestionLabel />
					}
					{
						errorText.length > 0 && <ErrorText errorText={errorText} />
					}
					<input placeholder={`Ex: ${example}`} onChange={(event) => setUserAnswer(event.target.value)} value={answeredCorrectly ? answers[0]['text'] : userAnswer} type={"text"} className={"border form-control border-gray-300 rounded p-2"} disabled={answeredCorrectly} />
					<HintExampleSection hint={hint} example={example} />
					<SubmitAnswerButton submitCheckAnswer={submitCheckAnswer} />
				</div>
			);
		default:
			return null;
	}

};


const QuizTemplate = ({question = 'What is the question?', questions = [], setQuestions, answeredCorrectly = false, hint = null, example = null, answers = [], type,  index, progressIndex}) => {

	const validateAnswerCallback = React.useCallback((answer) => {
		const questionsData = [...questions];
		questionsData[index]['answeredCorrectly'] = answer;
		setQuestions(questionsData);
	}, [index, questions, setQuestions]);

	return (
		<div id={index} className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<h5 className={'mb-2 font-bold'}>{question}</h5>
			<AnswerInput type={type} answers={answers} hint={hint} example={example} answeredCorrectly={answeredCorrectly} length={questions.length} currentIndex={index} progressIndex={progressIndex} validateAnswerCallback={validateAnswerCallback} />
		</div>
	);
};


export default QuizTemplate;
