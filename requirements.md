# Software Requirements
## Vision

- What is the vision of this product?
    - The goal of this project is to provide a fun way for people to interact with one another in straightforward, and sometimes duplicitous  ways. Although the form of the game should change from person to person, everyone should be able to have a generally swell time. 

- What pain point does this project solve?
  - It aims to provide a novel way for friends to spend time one another in a competitive, yet still carefree environment. 
- Why should we care about your product?
    - Because it will provide a new way for people to spend quality time with one another. 
## Scope (In/Out)
- IN: What will your product do?
    - It will create a situation in which multiple players are racing to see who can become a JimCoin billionaire. The mechanics are slightly similar to cookie clicker genre of games, but trading other reasources for the in game currency is the snowball mechanic.
- the Product will: 
  1. Keep a list of past winners of games, with the winner being the one who reaches 1 billion JimCoin first. 
  2. Allow players to login using Auth0. 
  3. Have an in game chat feature so that players can communicate their strategies with one another
  4. Implement a fun game for players to engage with their friends. 


## OUT - What will your product not do.

1. This Project will NOT be a serious economy simulator.
2. Will NOT have a match making system, all players will join in the first lobby that is available. 
3. Will not be able to add friends in game. 
4. Will NOT be a desktop app =(
Minimum Viable Product vs
## What will your MVP functionality be?
- Players will be able to generate coins by clicking on the central JimCoin
- Players will be able to login via Auth0
- Winners will be recorded in the Fastest Times leaderboard
- Players will be able to buy/sell resources to generate JimCoin without clicking 1 billion times. 
- The price of resources will vary based on the amount available. More available = less expensive. 
## What are your stretch goals?
- Skill based match making
- Chat feature in Lobby before game
- Chat feature in game
- Can have multiple games in progress simultaneously. 
- Different Game Modes.
- Allow for user created profiles. 

## Stretch

What stretch goals are you going to aim for?
1. Chat feature
2. Multiple games in progress simultaneously
3. Skill based match making.
4. User created Profiles.
5. Different games modes.  

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

- A user can sign in
- A user can update their profile information
- A user can become a player by being in the lobby when game is started.
- A player can click on JimCoin or sell resources to generate profit.
- Game is over at 1 million JimCoin. 

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.
1. User signs in via Auth0.
2. User information stored in database.
3. "Ready" button input from player puts them into the lobby. 
4. Server sends price information of resources to the players.
5. Players send info to the server when they click on JimCoin. 
6. Players send info to server when they buy resources, server sends back new price from player action. 
7. Players send info to server when they sell resources, server sends back new price from player action. 
8. Server notifies lobby when one player reaches 1 million JimCoin. 

## Non-Functional Requirements (301 & 401 only)

1. Useability
    - Game should have a minimalist UX where it is very clear to the user what they should do next. 
2.  Communication/Chat
    - Communicating with other players is half the fun, so allowing players to do so is important. 
3. Security 
    - Auth0 will allow us to keep players from accessing accounts they shouldnt have access to. 
