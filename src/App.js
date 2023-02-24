import React from 'react';

import {AuthProvider} from './context/AuthContext';
import RouterContainer from "./routes/RouterContainer";


function App() {

	return (
		<React.Fragment>
			<AuthProvider>
				<div className="flex flex-grow flex-1" id={"app"}>
					<RouterContainer />
				</div>
			</AuthProvider>
		</React.Fragment>
	);
}

export default App;
