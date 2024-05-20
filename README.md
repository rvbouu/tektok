# TekTok

## Description

Welcome to Tek Tok! (Not to be confused with Tik Tok). We got our start in the Spring of 2024 when four individuals from all over the US found themselves paired up while enrolled in a full-stack coding program at the University of Minnesota. Through late night discussions, laughter, tears, and an idea that it would be great to have a social-media site for programmers; Tek Tok was born. Thanks for checking us out! 

[Here](https://github.com/users/rvbouu/projects/1) is the link to our project board. It is also linked below in our [Badges and Acknowledgements](#badges-and-acknowledgements) section.

## Table of Contents

* [Description](#description)

* [Authors](#authors)

* [Badges and Acknowledgements](#badges-and-acknowledgements)

* [Installation](#installation)

* [Usage and Screenshots](#usage-and-screenshots)

* [Functionality](#functionality)

* [Deployed Application](#deployed-application)

## Authors

[Reynolds Addy](https://github.com/Reynoldscode)

[Vanessa Bou](https://github.com/rvbouu)

[Joel Hansen](https://github.com/JoelhansenMN)

[Maggie McDowell](https://github.com/magtron3030)

## Badges and Acknowledgements

**Thank you** to our instructor Gary and TAs, Katy and Austin, for assisting us with our many GitHub and code issues.

**Thank you** to all team members for all their hard work and efforts.

[![Express JS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Handlebars JS](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)](https://handlebarsjs.com/)
[![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)

[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[![Socket.io](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)](https://socket.io/)
[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![GitHub Project Board](https://img.shields.io/badge/GitHub_Project_Board-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/users/rvbouu/projects/1)

[![Bootstrap]( https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

[![Animate.css](https://img.shields.io/badge/Animate.css-orange)](https://animate.style/)
[![Linkify](https://img.shields.io/badge/linkify-blue)](https://linkify.js.org/)

### *Inspired By*

[Personality Quiz: Paige Starkey](https://codepen.io/paigeellenstark/pen/MVGYWO)

[Breakout Game: MDN Web Docs](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)

## Installation

💾

`npm init`

`npm i animate.css animejs bcrypt connect-session-sequelize
dotenv express express-handlebars express session linkify-html linkifyjs pg sequelize socket.io`

## Usage and Screenshots

***Before beginning on local machine***

- To seed data and create the PostgreSQL tables, type `npm run seed` into command-line
- After seeding data, type `node server.js` or `nodemon server.js` to run the application.

When users first come to the site, they will get to see posts made by other users as well as the 'Coding Joke of the Day'.
![Homepage when not logged in](./public/assets/readme_img/home-login.png)

Users without accounts will also have access to the links that are in the footer. Because we are a small group with no funding yet, some of our pages will say 'Coming Soon from the Creators of Tek Tok'.
![Backstory page](./public/assets/readme_img/backstory.png)

![Coming soon page](./public/assets/readme_img/comingsoon.png)

If users try to navigate to a page that requires them to be logged in, they will be redirected to the signup/login page where they can create an account.
![Login page](./public/assets/readme_img/login.png)

Once a user creates an account or signs up for one, they are able to access the other pages linked in the header.

On the homepage, users will now have access to the chat feature and the ability to make their own 'queries' or posts and follow other users. 
![Homepage logged in](./public/assets/readme_img/home-logout.png)

On the Resources page, users will have access to links that have been shared throughout the cohort. These links are sorted by programming language.
![Resources page](./public/assets/readme_img/resources.png)

The Games page is for when users want to take a break from coding or just need to clear their head. They can play our fully functional Breakout game, or take a quick personality quiz to find out what programming language they are while listening to some music!
![Games page](./public/assets/readme_img/games.png)

On the user's profile page, they are able to see who their followers/following are, what queries they've made, as well as update their email, password, or README.md (about me section).
![Profile page](./public/assets/readme_img/profile.png)

When the user clicks on someone else's tag, their able to view the other user's profile. This includes their README.md, any queries they've made, as well as their followers/following.
![Other profile page](./public/assets/readme_img/other-prof.png)

After hanging around Tek Tok and writing a few posts, and also to make sure no one else makes any posts under their account, the user can call it a day by clicking the logout button. This will revert the website to how it was before logging in.

## Functionality

![Gif of TekTok functionality](./public/assets/readme_img/tektok.gif)

## Deployed Application

[Link to deployed application on Render](https://tektok.onrender.com/)
