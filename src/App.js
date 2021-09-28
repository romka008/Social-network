import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <div className='preloader'>
        <Preloader />
      </div>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        {/* <Profile/> */}
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />

          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          <Route exact path='/users' render={() => <UsersContainer />} />

          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/music' render={() => <Music />} />
          <Route exact path='/setting' render={() => <Setting />} />
          <Route exact path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)


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