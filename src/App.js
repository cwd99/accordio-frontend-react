import './scss/main.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './components/global/navigation/index'
import Footer from './components/global/footer/index'

import CreateAccount from './components/create-account/index'
import EmailVerification from './components/create-account/email-verification/index'
import CompleteAccount from './components/create-account/complete-account/index'
import LoginPage from './components/login-page/index'

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/email-verification' component={EmailVerification} />
        <Route exact path='/complete-account' component={CompleteAccount} />
        <Route exact path='/login-page' component={LoginPage} />
      </ BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
