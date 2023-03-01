import React from 'react';
import AltSpecialRouter from './AltSpecialRouter';
import {Switch, BrowserRouter as Router} from "react-router-dom";


// Import pages here
import IndexPage from "../components/pages/IndexPage";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";
import HomePage from '../components/pages/HomePage';
import Navbar from '../components/fragments/structure/Navbar';
import DemoPage from '../components/pages/DemoPage';
import AboutUsPage from '../components/pages/AboutUsPage';
import InformationalPage from '../components/pages/InformationalPage';
import LearnPage from '../components/pages/LearnPage';
import OurServicesPage from '../components/pages/OurServicesPage';
import PracticePage from '../components/pages/PracticePage';
import ForgotPasswordPage from '../components/pages/ForgotPasswordPage';
import SearchPage from '../components/pages/SearchPage';
import PracticeBrokenAuthPage from '../components/pages/stacks/practice/PracticeBrokenAuthPage';
import PracticeCrossSiteScriptingPage from '../components/pages/stacks/practice/PracticeCrossSiteScriptingPage';
import PracticeSQLInjectionPage from '../components/pages/stacks/practice/PracticeSQLInjectionPage';
import ReadForStudentsPage from '../components/pages/stacks/read/ReadForStudentsPage';
import ReadForBusinessPage from '../components/pages/stacks/read/ReadForBusinessPage';
import ReadWhatsNextPage from '../components/pages/stacks/read/ReadWhatsNextPage';
import QuizPage from '../components/pages/QuizPage';

// Test page
import TestPage from '../components/pages/TestPage';



const RouterContainer = () => {
	return (

		<Router forceRefresh={false}>
			<div className={"d-flex flex-grow-1 flex-column"}>

				<Navbar />

				<Switch>

					<AltSpecialRouter path={"/home"} isAuthorizationRequired={true} component={HomePage} exact={true} />
					<AltSpecialRouter path={"/demo"} isAuthorizationRequired={true} component={DemoPage} exact={true} />
					<AltSpecialRouter path={"/about-us"} isAuthorizationRequired={false} component={AboutUsPage} exact={true} />
					<AltSpecialRouter path={"/informational"} isAuthorizationRequired={false} component={InformationalPage} exact={true} />
					<AltSpecialRouter path={"/learn"} isAuthorizationRequired={false} component={LearnPage} exact={true} />
					<AltSpecialRouter path={"/our-services"} isAuthorizationRequired={false} component={OurServicesPage} exact={true} />
					<AltSpecialRouter path={"/search"} isAuthorizationRequired={false} component={SearchPage} exact={true} />
					<AltSpecialRouter path={"/practice"} isAuthorizationRequired={true} component={PracticePage} exact={true} />
					<AltSpecialRouter path={"/practice/broken-auth"} isAuthorizationRequired={false} component={PracticeBrokenAuthPage} exact={true} />
					<AltSpecialRouter path={"/practice/cross-site-scripting"} isAuthorizationRequired={false} component={PracticeCrossSiteScriptingPage}  />
					<AltSpecialRouter path={"/practice/sql-injection"} isAuthorizationRequired={false} component={PracticeSQLInjectionPage} exact={true} />
					<AltSpecialRouter path={"/read/for-students"} isAuthorizationRequired={false} component={ReadForStudentsPage} exact={true} />
					<AltSpecialRouter path={"/read/for-business"} isAuthorizationRequired={false} component={ReadForBusinessPage} exact={true} />
					<AltSpecialRouter path={"/read/whats-next"} isAuthorizationRequired={false} component={ReadWhatsNextPage} exact={true} />
					<AltSpecialRouter path={"/forgot-password"} isAuthorizationRequired={false} component={ForgotPasswordPage} exact={true} />
					<AltSpecialRouter path={"/test"} isAuthorizationRequired={false} component={TestPage} exact={true} />
					<AltSpecialRouter path={"/login"} isAuthorizationRequired={false} component={LoginPage} exact={true} />
					<AltSpecialRouter path={"/signup"} isAuthorizationRequired={false} component={SignupPage} exact={true} />
					<AltSpecialRouter path={"/quiz/:quizUrlPath"} isAuthorizationRequired={false} component={QuizPage} exact={false} />
					<AltSpecialRouter path={"/"} isAuthorizationRequired={false} component={IndexPage} exact={true} />
				</Switch>

			</div>
		</Router>
	);
};


export default RouterContainer;
