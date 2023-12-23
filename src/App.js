import logo from './logo.svg';
import './App.css';
import Greet, { Msg, NextMsg } from './components/Greet'
import Welcome from './components/Welcome'
import Subscribe from './components/SubscribeButton'
import CreateEl from './components/CreateElement'
import CustomEvent from './components/EventHandling'
import ParentComponent from './components/ParentComponent';
import NamesList from './components/Listing'
import CssProcessor from './components/CSSComponent'
import NormalForm from './components/FormProcess';


// Create any new React App using: npx create--react--app <project name>
// npm install axios

// React and HTTP - GET Request
// https://jsonplaceholder.typicode.com/
function App() {
    // To format the code, select the code to format & press Ctrl+K then Ctrl+F
    return (
        <div className="App">
            <NormalForm />
            {/*<CssProcessor position={1} name={'primary'}/>
            <NamesList />
            <ParentComponent />
             * <Greet name="Doctor" />
               <CustomEvent />*/}
            {/* without any tag like <p>, React doesn't know about the children*/}
            {/*<NextMsg><p>This is child prop</p></NextMsg>*/}
            {/*<Msg message= 'How are you?' name='Sam'/>*/}
            {/*<Welcome />*/}
            {/* Passing a value as props to set state*/}
            {/*<Subscribe count='0'></Subscribe>
            <CreateEl /> */}
        </div>
    );
}

export default App;
