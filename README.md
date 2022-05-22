# Memory Card Game

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-memory-card) curriculum. Goal of this project is to continue learning about React library. The main goal of this project is to use lifecycle methods as well as a lot of state.
The idea for this project comes from [this site](https://www.golangprograms.com/react-js-projects-for-beginners/memory-game-in-react-js.html). It’s a great resource for project ideas.

[Live preview](https://mojotron-memory-card.netlify.app/) of this project, hosted by Netlify.

## How to play

Test your memory. You are presented with multiple card of heros. The cards get shuffled every-time they are clicked. You CAN NOT click on any image more than once or else game is over. Get the highest score as possible.

This application puts your memory to the test. You are presented with multiple images of heros. The images get shuffled every-time they are clicked. You CAN NOT click on any image more than once or else your score resets to zero. The main objective is to get the highest score as possible.

## What have I learned

This project was all about learning about component lifecycle methods. I ended using only two in this project.
Documentation state not to derive state from props so i simplify implementation according through React documentation.

React lifecycle methods are series od events that happen from birth of react component to its death.

### Mounting phase

constructor() - constructor runs only one time on initial, before render. Place for setting up state.

static getDerivedStateFromProps(props, state) - this is a safer alternative to componentWillReceiveProps() method. Called before every other method after constructor (Note: called in mounting and updating phase), fired on every render. This is static function, does not have access to this. Returns object to update state in response to props changes or null if no changes are made to state.
For rare cases where the state depends on changes in props.
Purpose, give you chance to copy any values from props that you may be interested in transferring over to state.
Receive updated props and current state -> and we can compare the props we receive to the current state if needed -> return new state object or null for no changes.

render() - only required method, rendering happens during mounting and updating phase.
Returns JSX or null if there is nothing to render. Has to be pure with no side-effects. Must return same output when the
same inputs are passed, this means you can not setState() in render. If you need to modify state use other lifecycle method.

componentDidMount() - called right after render but only once when component is constructed, when is added to the actual DOM.
Good place to initiate API calls if you need to load data from remote endpoint.
Allows use of setState, cause another render but will happen before the browser updates UI. This is to ensure that the user will not see any UI updates whit the double rendering.
If component have children components, react will render this method after all lifecycle methods in children components.
Good for: ajax calls, subscriptions(must unsubscribe in componentWillUnmount)
If you set state here it will re-render - there are better methods for that (setState here for tooltips, modals, and similar concepts when you need to measure a DOM node before rendering when depends on its position)

### Updateing Phase

shouldComponentUpdate(nextProps, nextState) - purpose of this method to tell react if render should be triggered or not.
When setState() is triggered but you don't change anything in UI, especially if render is expensive to compute.
Any time setState() is called, component rerenders by default. This method is called to let react know if a component is or not affected by the state and props changes.
This method exist for certain performance optimizations, you cannot update component state in this method.
Do not rely on it to prevent rendering, can lead to several bugs. This method should always return boolean(make decision to render or not based on logic must return true/false).
We can compare current props with new props and the current state with new state, so we can return false here if we want prevent the component updating and re rendering
Alternative to this is to use Pure.Component

getSnapshotBeforeUpdate(prevProps, prevState) - safer alternative to componentWillUpdate().
Called right before the DOM is updated, allow us to capture some properties that are not storied in state before we rerender that component (list scroll, cursor in textarea).
Whatever is captured in this method is passed to componentDidUpdate as third parameter snapshot.
In here we get read access to the DOM before the change is actually committed to it.
This method should be used rarely or not used at all(use-case resizing window during an async rendering)

componentDidUpdate(prevProps, prevState, snapshot) - invoked as soon the updating happens.
Most common use case, updating the DOM in response to prop or state changes.
Can call setState(), must be wrapped in condition to check for state or prop changes from previous state (can lead to infinite loop).

### Error Boundaries

componentDidCatch(error, info) - gives us chance to gracefully handle any error we ran into
when we place component. In console we see error triggered, but if there is not componentDidCatch(), we lose everything that is rendered in DOM. When there is error, set new state properties to handle then in render() => this.setState({ error, info });

### Unmounting Phase

componentWillUnmount() - called just before the component is unmounted and destroyed. If there are any cleanup action that you need to do this is the place. This component will never be re-rendered -> cannot call setState()
Example: timers, cancelling api calls, cleaning caches in storage, cancelling subscriptions.
Undo config from componentDidMount.
