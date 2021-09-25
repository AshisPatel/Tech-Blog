<h1>Tech Blog - MVC</h1>
  <image src='https://img.shields.io/badge/license-MIT-green.svg' />
  <h2>Description</h2>
  
  The Tech Blog is a simple website that user's can visit and create an account that will allow them to make posts, edit their posts, view other user's posts, and comment on both their own and other user's posts. This is all made possible using the Model-View-Controller scheme. The primary drivers of this project are: NodeJs, Express (along with sessions and other middleware), MySQL & Sequelize, and Handlebars. The Models are tables in the MySQL db that are being created, quieried, and editted via Sequelize (as an ORM). The View is being handled (haha) by Handlebars and content is dynamically updated using pre-created templates based on fetch requests that are made from the front-end to the server controller. Speaking of the Controller, Express is used to create routes that appropraitely interact with the database to recieve / edit information and then send the proper information to displayed on the view by renders. Last but not lease, the website is live thanks to Heroku! 

  <h2>Functionality</h2>

  Models -- This project has three models: 1) User 2) Post 3) Comment. The User model contains the an ID PK, the username, and the password of the user. The password is encrypted using bcrypt so that the user's information is not easily accessible. In addition, general GET requests exclude the password from their response. The Post model contains an ID PK, the post title, the post text, the comments associated with the post id, and the user id of the user that created the post. The Comment model contains the comment text and is associated with both the user id of the user that created the comment and the post id of the post that the comment was added to. 

  View -- The pages created in handlebars are associated with the homepage, sign in, and sign up page, and when signed-in: the dashboard, single posts, and editting posts. There is some conditional formatting that uses a session variable to determine whether or not the user is signed in and will redirect the user to the sign up page if they are not signed in. There are two partials, one that loops through post information for the dashboard and the homepage, and a comment partial that loops through the comment information. Additionally, some helpers were created for handlebars to both format the date and show a shortened post text on the homepage. One more thing to note in the view is that all comments, and posts are listed in descending order. So, you should see the most recent content first! 

  Controller -- There are seperate api/routes that are designed to get and modify data from our main models, and then there are routes that are specific to rendering content based on route and fetch requests made by the main website. Furthermore, these routes are protected via our own middleware for authentication. 

  <h2>Future Changes or Thoughts For Next App</h2>

  Some future concepts that I would like to either include in this app, or include in future full-stack-applications are: 1) user account settings, such as resetting forgotten passwords, updating usernames / passwords, etc 2) Better status messages, rather than sending alerts the website should have either text-box modifications or modals that display an informative message to the user 3) Displaying the character limits, and character count remaining for things like comments, posts, or any other text entries. Ability to also edit / delete these comments or items authenticated on a per-user-basis. 4) Ability to favorite posts or items and include them in categorized folders - unique to the user. 5) Length control for extended amounts of posts, or comments. 

  <h2>Website</h2>
  
  [https://sheltered-ridge-15649.herokuapp.com/](https://sheltered-ridge-15649.herokuapp.com/)

  <h2 id="license">License</h2>

  MIT - Find out more about this project's license(s) at: [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)

  <h2 id="contribution">Contribution</h2>
  <p>If you find any bugs, or think of any cool features, PLEASE send them to me at the email address in the 'Questions' section.</p>

  <h2 id="questions">Questions</h2>
  
  <p> 
  Made by: AshisPatel<br />
  Github Profile: https://github.com/AshisPatel<br />
  </p>Email: ashis.n.patel@gmail.com<br />Please send me an email with any requests or inquiries regarding this project.

  <h2> End Note - A Thank You to the Reader </h2>

  Thank you for taking the time to visit my project directory and read through the README! I hope that you're having a wonderful day, and if not hopefully the fun fact and gif from my collection of things that make my laugh will give you a boost! Those will be included at the end of this section, and the next bit of content is just me rambling so feel free to skip that. This week was a bit of headache if I must say! It was a good headache though (if that makes sense)? So many files, so many things going on, however the wide-net of content created by the MVC paradigm made it easy to localize errors and make modifications. IT is definitely much better than having some 1000 + line of script or HTML code. Also, it felt INCREDIBLE to work on everything from start to finish. Please give me a moment of self-celebration to just admire the amount of development (haha) that's occurred over the last 2-3 months. 


  **Fun Fact:** This one made sense after I read it, but I had originally not given it a single thought. Animals can be allergic to humans! Much like how humans can be allergic to animals. Given that the animals reactions are generally not as severe, and it is much less frequent (one study said ~25 % of allergic animals were allergic to humans). The allergens often manifest as slight irritation on the skin and in more extreme cases, respitory symptoms.

  *Live footage of me finding out my original attempts at changing session variables broke my entire login system (I DON'T WANT TO GIVE UP ON THIS, BUT IT IS NOT CURRENTLY IN THE PROJECT)*

   ![Girl steals strawberry from other girl, causing other girl to cry](https://github.com/AshisPatel/Tech-Blog/blob/main/repo-assets/cry.gif)
  
  
  

