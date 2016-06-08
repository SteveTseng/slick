import React from 'react';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      loginBox: false
    };
    // bind all o' this!
    this.registerClicked = this.registerClicked.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  registerClicked() {
    // set loginBox to 'register'
    console.log('register clicked!');
    this.setState({ loginBox: 'register' });
  }

  loginClicked() {
    // set loginBox to 'login'
    console.log('login clicked!');
    this.setState({ loginBox: 'login' });
  }

  render() {
    let theBox = '';
    if (this.state.loginBox) {
      if (this.state.loginBox === 'login') {
        // render login
        theBox =
          <div className='loginFormWrap'>
            <form id='loginForm'>
              <div>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' />
              </div>
              <div>
                <label for='password'>Password</label>
                <input type='text' id='password' name='password' />
              </div>
            </form>
          </div>
      }
      else if (this.state.loginBox === 'register') {
        // render register
        theBox =
          <div className='registerFormWrap'>
            <form id='registerForm'>
              <div>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' />
              </div>
              <div>
                <label for='password'>Password</label>
                <input type='text' id='password' name='password' />
              </div>
            </form>
          </div>
      }
    }
    else {
      // render NOTHING!@
    }

    return (
      <div className='login-box'>
        <button id='register-button' onClick={this.registerClicked}>Register</button>
        <button id='login-button' onClick={this.loginClicked}>Login</button>
        {theBox}
      </div>
    )
  }
}

export default LoginBox;
