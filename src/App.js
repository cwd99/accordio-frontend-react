import './scss/main.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './components/global/navigation/index'
import Footer from './components/global/footer/index'

import CreateAccount from './components/create-account/index'
import EmailVerification from './components/create-account/email-verification/index'
import CompleteAccount from './components/create-account/complete-account/index'
import LoginPage from './components/login-page/index'

import ImageUpload from './components/edit-tool/ImageUpload'

import LandingPage from './components/landing-page/index'

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/email-verification' component={EmailVerification} />
        <Route exact path='/complete-account' component={CompleteAccount} />
        <Route exact path='/login-page' component={LoginPage} />
        <Route exact path='/edit-tool' component={ImageUpload} />
        <Route exact path='/'>
          <LandingPage signedIn={false} /> 
        </Route>
        <Route exact path='/home'>
          <LandingPage signedIn={true} />
        </Route>
      </ BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
