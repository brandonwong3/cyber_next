// noinspection JSCheckFunctionSignatures

import React from 'react';
import {auth} from "../firebaseConfig";
import {firestoreStorage} from '../firebaseConfig'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser, updatePassword, signOut, updateEmail, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import {updateDoc, doc, deleteDoc, getDoc, setDoc, } from 'firebase/firestore';


const AuthContext = React.createContext(undefined);



export const AuthProvider = ({ children }) => {

	const [currentUser, setCurrentUser] = React.useState({});	// Store the Firebase Auth object

	const [userData, setUserData] = React.useState();		// Store the user data from Realtime Database

	const currentUserRef = React.useRef(undefined);

	/**
	 * @function signup
	 * @description Create a new user in Firebase Auth and update the user's profile with the username.
	 * User must supply a username.
	 * Password must be at least 8 characters and include a mix of uppercase and lowercase letters,
	 * include a number, and include a special character.
	 * @param {string} email
	 * @param {string} username
	 * @param {string} password
	 * @returns {Promise<UserCredential>}
	 */
	const signup = async (email, username, password) => {
		try {
			if (!email || email.length === 0) {
			throw Error('Email is required');
		}
		if (email.includes('@') === false) {
			throw Error('Email is invalid');
		}
		if (!username || username.length === 0) {
			throw new Error('Username is required');
		}
		if (!username || username.length === 0) {
			throw new Error('Username is required');
		}


		// Check if username has been taken in Firestore usernames database
		const usernameRef = doc(firestoreStorage, "usernames", username.toLowerCase());
		let usernameDoc = await getDoc(usernameRef);
		if (usernameDoc.exists()) {
			throw new Error('Username has already been taken');
		}

		// Check if password is at least 8 characters and includes a mix of uppercase
		// and lowercase letters, numbers, and special characters
		if (!password || password.length < 6) {
			throw new Error('Password must be at least 8 characters');
		}

		// Uncomment for stricter password requirements

		// else if (password.match(/[a-z]/g) === null) {
		// 	throw new Error('Password must include at least one lowercase letter');
		// } else if (password.match(/[A-Z]/g) === null) {
		// 	throw new Error('Password must include at least one uppercase letter');
		// } else if (password.match(/[0-9]/g) === null) {
		// 	throw new Error('Password must include at least one number');
		// } else if (password.match(/[^a-zA-Z\d]/g) === null) {
		// 	throw new Error('Password must include at least one special character');
		// }

		return createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
			await user.user.reload();
			updateProfile(user.user, {
				displayName: username,
			}).then(async () => {
				// Set the user's data in the Firebase Database
				await setDoc(doc(firestoreStorage, "users", user.user.uid), {
					email: email,
					username: username,
					usernameLower: username.toLowerCase(),		// Store the username in lowercase for searching
				});
			}).then(async () => {
				// Set username mapped to user id in the Firestore Database to indicate if username has been taken
				await setDoc(doc(firestoreStorage, "usernames", username.toLowerCase()), {
					userId: user.user.uid,
					email: email,
				});

			}).then(() => {
				window.location.reload();
			});
		});
		} catch (error) {
			throw error;
		}
	}

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password).then(async (user) => {
			const userId = user.user.uid;
			// Get the user info from Firestore and set to userData
			const userRef = doc(firestoreStorage, "users", userId);
			if (userRef) {
				getDoc(userRef).then((doc) => {
					if (doc.exists()) {
						setUserData({...userData, userData: doc.data()});
						setCurrentUser(user.user);
						window.location.reload();
					}
				});
			}
		});
	}

	const signInWithUsernameAndPassword = (username, password) => {
		let userRef;
		try {
			// Try to find the user in the Firestore database for the lowercase username
			userRef = doc(firestoreStorage, "usernames", username.toLowerCase());
			if (userRef) {
				getDoc(userRef).then(async (doc) => {
					if (doc.exists()) {
						await login(doc.data().email, password);
					}
				});
			} else {
				console.log("User does not exist in Firestore database");
				return new Error('User does not exist');
			}
		} catch (error) {
			throw new Error(error);
		}
	};

	const logout = () => {
		return signOut(auth).then(() => {
			currentUserRef.current = null;
			setCurrentUser(null);
			setUserData(null);
			// Remove data from the window object
			window.localStorage.removeItem('userData');
		})
	}

	const requestPasswordResetEmail = (email) => {
		return sendPasswordResetEmail(auth, email);
	}

	const updateUserEmail = (email) => {
		return updateEmail(auth.currentUser, email).then(() => {
			setUserData({...userData, userData: { email: email }});
		}).then(async () => {
			// Update the user's email in the Firestore database
			await updateDoc(doc(firestoreStorage, "users", auth.currentUser.uid), {
				email: email
			});
		});
	}

	const updatePhotoURL = (downloadURL) => {
		return updateProfile(auth.currentUser, {
			photoURL: downloadURL
		}).then(async () => {

			// Update the user's photoURL in the Firestore database
			await updateDoc(doc(firestoreStorage, "users", auth.currentUser.uid), {
				photoURL: downloadURL
			});
		}).then(() => {
			setUserData({...userData, userData: { photoURL: downloadURL }});
		}).catch((error) => {
			throw new Error(error);
		})
	}

	const updateUserProfile = ( profileData ) => {

		// Update the user's profile data in the Firestore database
		const userRef = doc(firestoreStorage, "users", auth.currentUser.uid);
		return updateDoc(userRef, profileData).then(() => {
			setUserData({...userData, profileData});
		});
	}

	const updateUserPassword = (password) => {
		return updatePassword(auth.currentUser, password);
	}

	const updateUsername = (username) => {

		// First check if the username is already taken in the Firestore database
		let usernameRef = doc(firestoreStorage, "usernames", username.toLowerCase());
		if (usernameRef) {
			throw new Error('Username is already taken');
		}

		return updateProfile(auth.currentUser, {
			displayName: username
		}).then(async () => {
			// Update the username in the Firestore database
			await updateDoc(doc(firestoreStorage, "users", auth.currentUser.uid), {
				username: username,
				usernameLower: username.toLowerCase(),		// Store the username in lowercase for searching
			});

		}).then(async () => {
			// Update the Firestore username mapped to user id to indicate if username has been taken
			await deleteDoc(usernameRef);
			await updateDoc(doc(firestoreStorage, "usernames", username.toLowerCase()), {
				userId: auth.currentUser.uid,
				email: auth.currentUser.email,
			});
		});
	}

	const deleteAccount = async () => {
		try {
			// Delete the user's data from the Firestore database
			const userRef = doc(firestoreStorage, "users", auth.currentUser.uid);
			let promises = [];
			promises.push(deleteDoc(userRef));
			promises.push(deleteUser(auth.currentUser));
			await Promise.all(promises);
		} catch (error) {
			throw new Error(error);
		}
	}

	/**
	 * @name updateLocalUserData
	 * @description Update the localstorage as well as the state of the current user
	 * @param {Object} data
	 */
	const updateLocalUserData = (data) => {
		// Update AuthContext state
		setUserData({...userData, ...data});
		// Update localStorage
		let localUserData = window.localStorage.getItem("userData");
		localUserData = JSON.parse(localUserData);
		let newUserData = {...localUserData, ...data};
		newUserData = JSON.stringify(newUserData);
		window.localStorage.setItem("userData", newUserData);
	}

	const setCurrentUserCallback = React.useCallback((user) => {
		setCurrentUser(user);
	}, []);

	const setUserDataCallback = React.useCallback((data) => {
		setUserData(data);
	}, []);

	React.useEffect(() => {


		// Returning the auth listener for dismounting
		let unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user !== null) {


				// Fired when the user becomes authenticated
				try {

					// Grab the user's data from the Firestore database
					let accountDBRef = doc(firestoreStorage, "users", user.uid);

					if (!accountDBRef) {
						return new Error("User account not found");
					}
					getDoc(accountDBRef).then((doc) => {
						if (doc.exists()) {
							const data = doc.data();
							setUserDataCallback(data);
							setCurrentUserCallback(user);
							currentUserRef.current = user;
							// Save the user data to the window object
							window.localStorage.setItem('userData', JSON.stringify(data));
						} else {
							return new Error("User account not found");
						}
					});
				} catch (error) {
					console.error(error);
				}


			}

		});

		return () => {
			unsubscribe();
		}

	}, [])

	const value = {
		signup,
		login,
		logout,
		requestPasswordResetEmail,
		userData,
		setUserData,
		currentUser,
		updateUserEmail,
		updateUserPassword,
		updateUserProfile,
		updateUsername,
		updatePhotoURL,
		updateLocalUserData,
		deleteAccount,
		signInWithUsernameAndPassword,
		currentUserRef,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return React.useContext(AuthContext);
}
