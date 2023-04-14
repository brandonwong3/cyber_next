import React from 'react';
import ReactCardFlip from 'react-card-flip';


const FlipOverCard = ({question, answer, props}) => {

	const [showQuestion, setShowQuestion] = React.useState(true);

	return (
		<ReactCardFlip {...props} containerClassName={"flip-over-card"} isFlipped={!showQuestion} className={`hover-pointer rounded-5 p-5 m-5 flex flex-col justify-center items-center ${showQuestion ? 'flip-over-card-front' : 'flip-over-card-back'}`} onClick={() => setShowQuestion(!showQuestion)}>
			<div key="front" onClick={() => setShowQuestion(!showQuestion)}>
				<h1 className={"text-center font-bold text-lg-center"}>{question}</h1>
			</div>
			<div key="back" onClick={() => setShowQuestion(!showQuestion)}>
				{/*<p className={"text-center font-semibold"}>{answer}</p>*/}
				<div className={"font-semibold"} dangerouslySetInnerHTML={{__html: answer}}/>
			</div>
		</ReactCardFlip>
	)

}

export default FlipOverCard
