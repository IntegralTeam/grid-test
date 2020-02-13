

### Start
Everything as usual, install the deps and run:
```
npm install
npm run start
```
Nopw open your browser and navigate to [http://localhost:3000/](http://localhost:3000/)

### Markup
Made with modular SASS. I made responsive design with css3 media queries with ```768px``` mobile breakpoint. All animations and transitions are CSS3 keyframes and transitions with ```will-change``` optimisation. 

No CSS frameworks or out-of-the-box react components from npm is used. The paddings and margins are from XD-file, didn't changed anything here.

### Slider
Slider is done from scratch. I know, we can use things like ```rc-slider``` or any other one, but for this simple kind of task react component with hooks and CSS is ok.

There's no description for ```1/2``` and ```x2``` buttons in task list, so I decided to not implement any logic with them.

Number input is just a number input, which accepts only positive numbers.

### Bet list
Bet list is just a table. New rows will appear with fade, older rows will scroll down. Number of records is adjustable.

Business logic is made with ```redux``` and ```redux-saga``` instead of just using ```useSubscription``` and ```useQuery```, because it's better to store all data in redux storage, not in component state.

First, I'm getting all bets by query and then subscribe to ```betAdded``` event to get all new bets.

### Clam
The clam is just SVG with viewBox for responsivity. Hover animation respects scaling and made with CSS3 and ease-out.

I made modal responsive at breakpoint.