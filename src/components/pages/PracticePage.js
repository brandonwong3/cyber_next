import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import ALL_QUIZZES from '../../quizzes';
import {DIFFICULTY, CATEGORIES} from '../../quizzes';


const QuizCard = ({title = 'Test Card', description = 'Test description', difficulty = DIFFICULTY.EASY, categories = [CATEGORIES.AUTHENTICATION, CATEGORIES.GEOLOCATION], countQuestions = 10, urlPath = 'testpath'}) => {

	const navigateToQuiz = (event) => {
		event.preventDefault();
		// Use the DOM to navigate to the quiz page
		window.location.href = `/quiz/${urlPath}`;
	}

	return (
		<div key={title} onClick={event => navigateToQuiz(event)} className={"flex flex-col bg-white rounded-lg shadow-lg p-4 m-4 col-4 cursor-pointer"}>
			<div className={"flex flex-row"}>
				<div className={"flex flex-col"}>
					<h1>{title}</h1>
					<p>{description}</p>

					<div className={"flex flex-row"}>
						{
							categories.map((category, index) => {
								return (
									<p key={index.toString()} className={"text-xs text-gray-500"}>{category}</p>
								)
							}
						)}
					</div>

					<div className={"flex flex-row"}>
						<p className={"text-xs text-gray-500"}>{difficulty}</p>

						<p className={"text-xs text-gray-500"}>{countQuestions} questions</p>

					</div>

				</div>

			</div>
		</div>
	)
};



// We will use this to filter out the quizzes to show.
const LeftSideVerticalNavbar = ({filter, setFilter}) => {
	return (
		<div className={"flex flex-col"}>
			<div className={"flex flex-col"}>
				{
					Object.keys(DIFFICULTY).map((difficulty, index) => {
						return (
							<div key={index.toString()} className={"flex flex-row"}>
								<input type={"checkbox"} value={difficulty} onChange={(e) => {
									if (e.target.checked) {
										setFilter({
											...filter,
											difficulty: [...filter.difficulty, difficulty]
										})
									} else {
										setFilter({
											...filter,
											difficulty: filter.difficulty.filter(d => d !== difficulty)
										})
									}
								}} />
								<p>{difficulty}</p>
							</div>
						)
					})
				}
			</div>
			<div className={"flex flex-col"}>
				{
					Object.keys(CATEGORIES).map((category, index) => {
						return (
							<div key={index.toString()} className={"flex flex-row"}>
								<input type={"checkbox"} value={category} onChange={(e) => {
									if (e.target.checked) {
										setFilter({
											...filter,
											category: [...filter.category, category]
										})
									} else {
										setFilter({
											...filter,
											category: filter.category.filter(c => c !== category)
										})
									}
								}} />
								<p>{category}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

const PracticePage = () => {

	const [filter, setFilter] = React.useState({
		difficulty: [],
		category: []
	});

	const quizzesToDisplay = React.useMemo(() => {
		return ALL_QUIZZES.filter(quiz => {
			let filterKeys = Object.keys(filter);
			// eslint-disable-next-line array-callback-return
			return filterKeys.every(key => {
				if (key === 'difficulty') {
					return filter[key].includes(quiz[key]);
				} else if (key === 'category') {
					return filter[key].includes(quiz[key]);
				}
			})
		})
	}, [filter]);

	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>

				<div className={'flex flex-row'}>
					<div className={"flex flex-col flex-shrink"}>
						<LeftSideVerticalNavbar filter={filter} setFilter={setFilter} />
					</div>

					{/* The main navigation with the cards. */}
					<div className={"flex flex-col flex-grow"}>
						<div className={"flex flex-row flex-wrap justify-center row"}>
							{
								quizzesToDisplay.map((quiz, index) => {
									return (
										<QuizCard
											key={index.toString()}
											title={quiz.title}
											description={quiz.description}
											difficulty={quiz.difficulty}
											categories={quiz.categories}
											countQuestions={quiz.questions.length}
											urlPath={quiz.urlPath}
										/>
									)
								})
							}
						</div>
					</div>

				</div>

			</div>
		</BaseTemplate>
	);
}

export default PracticePage;
