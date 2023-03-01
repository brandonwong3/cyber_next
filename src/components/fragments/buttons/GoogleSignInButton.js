import React from 'react';


const GoogleSignInButton = ({onPress}) => {

	return (
		<button onClick={onPress} className={"flex-shrink mx-auto button bg-white p-2 mt-4 rounded-md"}>
			<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"} alt={"Google Logo"} height={20} width={20} className={"w-6 h-6 mr-2"}/>
			<span>Sign in with Google</span>
		</button>
	)

}

export default GoogleSignInButton;
