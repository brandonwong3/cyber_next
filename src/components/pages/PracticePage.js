import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import {ALL_QUIZZES} from '../../quizzes/allQuizzes';
import {DIFFICULTY, CATEGORIES} from '../../quizzes/quizzes';


const QuizCard = ({title = 'Test Card', description = 'Test description', difficulty = DIFFICULTY.EASY, categories = [CATEGORIES.AUTHENTICATION, CATEGORIES.GEOLOCATION], countQuestions = 10, urlPath = 'testpath'}) => {

	const navigateToQuiz = (event) => {
		event.preventDefault();
		// Use the DOM to navigate to the quiz page
		window.location.href = `/quiz/${urlPath}`;
	}

	return (
		<div key={title} onClick={event => navigateToQuiz(event)} className={"flex flex-col bg-white rounded-lg shadow-lg p-4 m-4 col-3 cursor-pointer"}>
			<div className={"flex flex-row"}>
				<div className={"flex flex-col"}>
					<h4 className={"font-bold"}>{title}</h4>
					<small>{description}</small>

					<div className={"flex flex-col mt-1"}>
						<div className={"flex flex-row items-end my-0"}>
							<p className={"text-xs text-gray-500 mr-1 my-0"}><b>{categories.length === 1 ? 'Category: ' : 'Categories: '}</b> </p>
							{
								categories.map((category, index) => {
									return (
										<p key={index.toString()} className={"text-xs text-gray-500 my-0"}>{category}</p>
									)
								}
							)}
						</div>
						<p className={"text-xs text-gray-500 my-0"}><b>DIFFICULTY LEVEL:</b> {difficulty}</p>
						<p className={"text-xs text-gray-500 my-0"}><b>QUESTIONS:</b> {countQuestions}</p>
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

			<h5 className={"font-bold"}><u>Filter</u></h5>

			<div className={"flex flex-col"}>
				<p className={'font-bold mb-0'}>Difficulty</p>
				{
					Object.values(DIFFICULTY).map((difficulty, index) => {
						return (
							<div key={index.toString()} className={"flex flex-row items-center align-center"}>
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
								<small className={"my-auto ml-1"}>{difficulty}</small>
							</div>
						)
					})
				}
			</div>
			<div className={"flex flex-col mt-2"}>
				<p className={'font-bold mb-0'}>Category</p>
				{
					Object.values(CATEGORIES).map((category, index) => {
						return (
							<div key={index.toString()} className={"flex flex-row items-center align-center"}>
								<input type={"checkbox"} value={category} onChange={(e) => {
									if (e.target.checked) {
										setFilter({
											...filter,
											categories: [...filter.categories, category]
										})
									} else {
										setFilter({
											...filter,
											categories: filter.categories.filter(c => c !== category)
										})
									}
								}} />
								<small className={"my-auto ml-1 force-text-no-wrap"}>{category}</small>
							</div>
						)
					})
				}
			</div>

			<small onClick={(event) => {event.preventDefault(); setFilter({difficulty: [], categories: []})}} className={"cursor-hover cursor-pointer text-blue font-bold mt-2"}><u>Reset</u></small>

		</div>
	)
}

const PracticePage = () => {

	const [filter, setFilter] = React.useState({
		difficulty: [],
		categories: []
	});

	const quizzesToDisplay = React.useMemo(() => {
		if (filter.difficulty.length === 0 && filter.categories.length === 0) {
			return ALL_QUIZZES;
		}

		// NOTE: This filter is for filtering out the quizzes to display. This means that If the field for difficulty "Easy" is
		// checked, alongside the category "Site Security", then only quizzes that are "Easy" difficulty and have the category
		// "Site Security" will be displayed.

		// Map through all the quizzes and find the ones where the difficulty for the quiz is in the filter.difficulty array,
		// or at least one of the categories of the quiz are in the filter.categories array.
		return ALL_QUIZZES.filter(quiz => {
			return (filter.difficulty.length === 0 || filter.difficulty.includes(quiz.difficulty)) &&
				(filter.categories.length === 0 || quiz.categories.some(category => filter.categories.includes(category)));
		});
	}, [filter]);

	return (
		<BaseTemplate>
			<h1 className={"text-center mt-4"}>Practice your Skills</h1>
			<div className={"flex-grow flex-1"}>

				<div className={'flex flex-row'}>
					<div className={"flex flex-col flex-shrink"}>
						<LeftSideVerticalNavbar filter={filter} setFilter={setFilter} />
					</div>

					{/* The main navigation with the cards. */}
					<div className={"flex flex-col flex-grow"}>
						<div className={"row justify-content-center"}>
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
