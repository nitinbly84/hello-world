import logo from './logo.svg';
import './App.css';
import Greet, { Msg, NextMsg } from './components/Greet'
import Welcome from './components/Welcome'
import Subscribe from './components/SubscribeButton'
import CreateEl from './components/CreateElement'
import CustomEvent from './components/EventHandling'
import ParentComponent from './parentChildComponents/ParentComponent';
import NamesList from './listingComponents/Listing'
import CssProcessor from './components/CSSComponent'
import NormalForm from './formWithRefComponents/FormProcess';
import LifecycleA from './components/LifecycleComponent';
import FragmentSample2, { FragmentSample } from './components/Fragment'
import Parent from './pureComponents/Parent'
import RefForm from './formWithRefComponents/RefForm';

// https://codesandbox.io/p/sandbox/00254q4n6p?file=%2Fsrc%2Findex.js

// Create any new React App using: npx create--react--app <project name>
// npm install axios

// React and HTTP - GET Request
// https://jsonplaceholder.typicode.com/
function App() {
    // To format the code, select the code to format & press Ctrl+K then Ctrl+F
    return (
        <div className="App">
            <RefForm />
            {/*<Parent />
            <FragmentSample2 />
            <LifecycleA name='props'/>
            <NormalForm />
            <CssProcessor position={1} name={'primary'}/>
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
