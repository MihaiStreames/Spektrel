![spektrel](https://cdn.discordapp.com/attachments/550913067517607946/774530816889978910/logo.png)

# API 
* [x] Create Server
* [ ] Create GET Methods for each platform
	* [x] Soundcloud: User/Track
	* [ ] Instagram: User/Post
	* [ ] YouTube: Channel/Video
	* [ ] Spotify: Artist/Song
	* [ ] Twitter: User/Tweet
* [ ] Host API endpoints on a https://api.spektrel.io subdomain


# Database 
* [ ] Create Collection for Users
    * [ ] All users = GET /users/
    * [ ] Create user = POST /users/
        * [ ] Encrypt Passwords
    * [ ] User's Cards = GET /cards/?query=userId <!-- * (only accesible if signed in and token matches) -->
    * [ ] Create Cards = POST /cards/ <!-- * (only accesible if signed in and token matches) -->

* [ ] Create Collection for Platform
	* [ ] Instagram
	* [ ] YouTube
	* [ ] Spotify
	* [ ] Twitter
* [ ] In those collections we keep the userId of the user

# Auth
* [ ] Create Server
* [ ] Create user with POST /users/
	* [ ] validate required fields
	* [ ] Check if username is unique
	* [ ] hash password with bcrypt
	* [ ] insert into db
* [ ] Create Landing Page
	* [ ] Link to Sign Up Page
* [ ] Create Sign Up Page
* [ ] Create Navigation Bar
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
