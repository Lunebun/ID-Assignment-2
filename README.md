# ID-Assignment-2

#Project Name: Odyssey

Hello. Odyssey is a quiz based web application with gamification designs and a rewards based system based on the score the user scored on the quiz. This quiz web application is generally designed to be used in booth games for general knowledge, for instance a game station at a school open house or to test the general knowledge of someone. It is meant to be played in multiple rounds in which the more the user scores the better the prizes he/she can redeem. 

#Design Process:

As mentioned before, this project is aimed towards to be used in game booths or any situations similar to it. Initially the plan was to create an overview application for a school open house. But we don't really know what to put in it so we scratched that idea and decided to focus on the more smaller aspects. For instance, we thought of a geology application for geography students but we decided to still follow through with the open house theme and decided to make an application to bring out the fun in an open house.

So we thought maybe we could create different topics for the quiz to choose from, but we realised that most of the open house freshmens would not be able to answer them well since they might not necessarily know the topic. And as such, we finalised on making it a general knowledge based quiz application.

We wanted to just make it look simple as to not overwhelm the newer students so we've went with a blue toned based background and a few lottie animations to ease the students.

#Features

- 1. Quiz 


The most important part of this application is definitely the quiz section. We did not hardcode the quiz questions since we generally don't trust ourselves with our general knowledge. As such, we found an alternative to use Open Trivia API which generates a genuine general knowledge question and provides the answer as well.

- 2. Rewards


Once the user has completed the quiz a few times, we count the score together and the user can then redeem rewards on the application itself.

- 3. Highscore saving


We can track the highest scoring users on the quiz by saving it onto a list.

- 3. Name Tracking


We've used RestDB to have a backend database so when a user saves his own highscores, we can easily find the name and add his score to his concurrent one.

#Technologies used:

- 1. RestDB


https://restdb.io/
RestDB is a backend database that we've used to save our data on.

- 2. Javascript


https://developer.mozilla.org/en-US/docs/Web/JavaScript
Javascript is mainly used here for interactive purposes on the application. For instance, I used javascript to make the bullet point on the navigation bar for the mobile view.

- 3. CSS


https://developer.mozilla.org/en-US/docs/Web/CSS
CSS works hand in hand with HTML to make the design more user-friendly and digestable so as to not confuse or overwhelm the user.

- 4. HTML


https://developer.mozilla.org/en-US/docs/Web/HTML
HTML is the bread and butter of web programming so it is definitely used here.

- 5. Lottie


https://lottiefiles.com/
We've incoporated some lottie animations for the loading screens to at least entertain the users during loading.
