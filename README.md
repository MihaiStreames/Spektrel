# Spektrel
 Spektrel

# API 
* [x] Create Server
* [ ] Create GET Methods for each platform
	* [x] Instagram: User/Post
	* [ ] YouTube: Channel/Video
	* [ ] Spotify: Artist/Song
	* [ ] Twitter: User/Tweet
* [x] Host API endpoints on a https://api.spektrel.io subdomain


# Database 
* [x] Create Collection for Users
    * [x] All users = GET /users/
    * [x] Create user = POST /users/
        * [x] Encrypt Passwords
    * [ ] User's Cards = GET /cards/?query=userId <!-- * (only accesible if signed in and token matches) -->
    * [ ] Create Cards = POST /cards/ <!-- * (only accesible if signed in and token matches) -->

* [ ] Create Collection for Platform
	* [ ] Instagram
	* [ ] YouTube
	* [ ] Spotify
	* [ ] Twitter
* [ ] In those collections we keep the userId of the user

# Auth
* [x] Create Server
* [x] Create user with POST /users/
	* [x] validate required fields
	* [x] Check if username is unique
	* [x] hash password with bcrypt
	* [x] insert into db
* [ ] Create Landing Page
	* [ ] Link to Sign Up Page
* [ ] Create Sign Up Page
	* [ ] Form with: username and password
	* [ ] When form is submitted
		* [ ] Validate username
			* [ ] Display errors
		* [ ] Validate password
			* [ ] Display errors
		* [ ] POST request to server
			* [ ] Display errors
			* [ ] If succesful sign up
				* [ ] Redirect to login page
* [ ] Login user with POST /auth/login
	* [ ] validate the user
	* [ ] check if username in db
		* [ ] compare password with hashed password in db
		* [ ] Create and sign a JWT
      * [ ] Respond with JWT
* [ ] Create Login Page
	* [ ] Form with: username and password
	* [ ] When form is submitted
		* [ ] Validate username
			* [ ] Display errors
		* [ ] Validate password
			* [ ] Display errors
		* [ ] POST request to server /auth/login
			* [ ] Display errors
			* [ ] If succesful login
				* [ ] Store the token in localStorage
				* [ ] Redirect to the "dashboard"
* [ ] If a logged in user visits the signup or login page, redirect them to the dashboard
* [ ] If a non logged in user visits the dashboard, redirect to the login page
* [ ] After sign up, immediately login
* [ ] Show username on dashboard
* [ ] On homepage, show go to dashboard button instead of signup/login button
* [ ] If logged in:
	* [ ] Show logout button in header
	* [ ] Show user icon and username in header

### Authorization:
* [ ] Visitors can only see the homepage
	* [ ] checkTokenSetUser middleware
		* [ ] get token from Authorization header
			* [ ] if defined ---
				* [ ] Verify the token with the token secret
				* [ ] Set req.user to be the decoded verified payload
			* [ ] else - move along
	* [ ] isLoggedIn middleware
		* [ ] if req.user is set - move along
		* [ ] else - send an unauthorized error message
	* [ ] redirect to login form
* [ ] Logged in users can only see their page
* [ ] Create notes form on client
	* [ ] Title
	* [ ] Description
* [ ] POST /api/v1/notes
	* [ ] Must be logged in
	* [ ] Logged in Users Can Create Notes
		* [ ] Title
		* [ ] Description -- markdown
		* [ ] Set user_id on server with logged in users id
* [ ] GET /api/v1/notes
	* [ ] Must be logged in
	* [ ] Logged in Users Can request all their notes 
		* [ ] Get all notes in DB with logged in users user_id
* [ ] List all notes on client
	* [ ] Render description with Markdown

## STRETCH

* [ ] Store date of note in DB
	* [ ] Sort notes by date created.
* [ ] View user profile
* [ ] Users can mark notes as public
	* [ ] Notes show up on profile

## Admin Page:
* [ ] Admin page that lists all users
	* [ ] admin table with user_id
	* [ ] de-activate users
* [ ] Admin can see any page on site
* [ ] Rate limiting
  * [ ] Prevent brute force logins
	* [ ] Lock out account after too many login attempts
* [ ] Password strength meter!
* [ ] reCaptcha for signup/login
* [ ] Password reset with email
* [ ] Forgot password
	* [ ] Reset with email
	* [ ] Reset by answering security questions
* [ ] Testing...

## To deploy everything to the same heroku instance

* [ ] Move the server package.json to the root of the folder
* [ ] Update start script for server to be a relative path
* [ ] post-deploy script to server that will build Vue.js
* [ ] Add a static serve to the server that serves '../client/dist'
* [ ] Environment variable for DB connection and token secret
* [ ] Update calls in client from localhost:5000 to be your-app.herokuapp.com