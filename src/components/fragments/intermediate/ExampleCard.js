import React from 'react';


export const SimpleFlipCard = ({Front, Back, showQuestion, setShowQuestion, props}) => {


	React.useEffect(() => {
		let simpleFlipCard = document.getElementById('simple-flip-card');
		simpleFlipCard.addEventListener('click', () => {
			setShowQuestion(!showQuestion);
		});
		return () => {
			simpleFlipCard.removeEventListener('click', () => {
				setShowQuestion(!showQuestion);
			});
		}
	}, [setShowQuestion, showQuestion]);

	return (
		<div {...props} id={"simple-flip-card"} className={`flip-over-card hover-pointer rounded-5 p-5 m-5 flex flex-col justify-center items-center ${showQuestion ? 'flip-over-card-front' : 'flip-over-card-back'}`} onClick={() => setShowQuestion(!showQuestion)}>
			{
				showQuestion ? (
					<Front />
				) : (
					<Back />
				)
			}
		</div>
	)
}

export const NoAnimationFlipCard = ({question, answer, props}) => {

	const [showQuestion, setShowQuestion] = React.useState(true);

	React.useEffect(() => {
		let noAnimationFlipCard = document.getElementById('no-animation-flip-card');
		noAnimationFlipCard.addEventListener('click', () => {
			setShowQuestion(!showQuestion);
		});
		return () => {
			noAnimationFlipCard.removeEventListener('click', () => {
				setShowQuestion(!showQuestion);
			});
		}
	}, [showQuestion]);

	return (
		<div {...props} id={"no-animation-flip-card"} className={`flip-over-card hover-pointer rounded-5 p-5 m-5 flex flex-col justify-center items-center ${showQuestion ? 'flip-over-card-front' : 'flip-over-card-back'}`} onClick={() => setShowQuestion(!showQuestion)}>
			<div key="front" onClick={() => setShowQuestion(!showQuestion)}>
				<h1 className={"text-center font-bold text-lg-center"}>{question}</h1>
			</div>
			<div key="back" onClick={() => setShowQuestion(!showQuestion)}>
				<div className={"font-semibold"} dangerouslySetInnerHTML={{__html: answer}}/>
			</div>
		</div>
	)

}


export const NoAnimationFlipOverCardHolder = ({data}) => {

	const [showQuestion, setShowQuestion] = React.useState(true);

	const [index, setIndex] = React.useState(0);

	const handleNext = () => {
		if (index < data.length - 1) {
			setIndex(index + 1);
			setShowQuestion(true);
		}
	}

	const handlePrev = () => {
		if (index > 0) {
			setIndex(index - 1);
			setShowQuestion(true);
		}
	}

	return (
		<div className="flip-over-card-holder">
			<SimpleFlipCard Back={data[index].answer} Front={data[index].question} showQuestion={showQuestion} setShowQuestion={setShowQuestion} />
			<div className="flex flex-row flex-shrink justify-center items-center align-center">
				<button className={"control-button"} onClick={handlePrev}>Prev</button>
				<div className={"w-10"} />
				<button className={"control-button"} onClick={handleNext}>Next</button>
			</div>
		</div>
	);

}
