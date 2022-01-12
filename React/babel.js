const App = () => {
    // Here we simply created a function that returns a new React element
    return React.createElement("h1", {}, "Our First React page has rendered");
    }
    /* 
    *  SIDE NOTE:
    *  Because the function above returns 1 thing, we can re-write this function in 1 line:
    *  const App = () => React.createElement("h1", {}, "Our First React page has rendered");
    */
    // Then we call the function that returns the element that we intend to render.
    ReactDOM.render(App(), document.getElementById("root"));
    // Though, take a mental note on how we are firing the App function just like any other function

    // Notice the HTML syntax here. Although this may look like regular HTML, it's actually not. 
ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
// **Here is what the Babel translation looks like**
ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

const App = () => <h1>Our First React page has rendered</h1>;
// Notice The difference in syntax. Here we've created a React Functional Component, named App which looks 
// like regular HTML syntax
ReactDOM.render(<App></App>, document.getElementById("root"));
// Instead of the traditional way we are familiar with firing a function - App() -
// we wrap our function name in an HTML tag instead - <App /> -

// Below is HTML code
// <!--
// Lets look at a normal HTML input tag that is self closed. 
// -->
// <input .... />
// <!-- 
// With JSX, we can do the same thing. So, because our <App></App> tag doesn't wrap anything, we can self close it. 
// -->
// <script type="text/babel">
//     ReactDOM.render(<App />, document.getElementById('root'));
// </script>


    