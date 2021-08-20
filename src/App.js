import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';



function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile/> */}
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route exact path='/profile' render={() => <Profile posts={props.posts}/>} />
          <Route exact path='/news' render={() => <News/>} />
          <Route exact path='/music' render={() => <Music/>} />
          <Route exact path='/setting' render={() => <Setting/>} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;