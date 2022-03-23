
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header/>
     
      {/*TinderCards*/}
      <TinderCards/>
      {/*SwipeButton*/}
      <SwipeButtons/>
    </div>
  );
}

export default App;
