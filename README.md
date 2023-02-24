# CyberNext

## Notes:
- We are using **Version 5** of React Router. [Package](https://www.npmjs.com/package/react-router-dom/v/5.0.0)
    - Refer to [this documentation](https://v5.reactrouter.com/) for **V5**

## TODO:
- [ ] Replace the `public/logo192.png` and `public/logo512.png` with relevant images for Cybernext logo.
- [ ] Create a new `favicon.ico` and replace the existing one.
- [ ] Remove `TestPage` before actual deployment. Also remove from the router.

##### Getting started. 
Simple run. Should open localhost:3000

First install Node from the [downloads page](https://nodejs.org/en/download/).

Then clone this repo, `cd` into it, install dependencies, and start.

```bash
git clone git@github.com:brandonwong3/cyber_next.git
cd cyber_next
npm install
npm start
```

##### Running Tests
```bash
npm test
```

##### Building the project and Deploying to Firebase
First install **FireBase cli**, log in with Google Credentials, initialize Firebase project in local repo, and select project.
```bash
npm install -g firebase-cli
firebase login
firebase init
```
This will create a build folder with the compiled code
```bash
npm run build
firebase deploy
```



#### Guides
- [Adding Firebase to JS project](https://firebase.google.com/docs/web/setup)
- [How to Create Public and Private Routes Using React Router](https://dev.to/nilanth/how-to-create-public-and-private-routes-using-react-router-72m)
