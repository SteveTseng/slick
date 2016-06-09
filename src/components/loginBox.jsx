import React from 'react';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      loginBox: false,
      username: null,
      password: null
    };
    // bind all o' this!
    this.registerClicked = this.registerClicked.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    this.createUser = this.createUser.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
    this.recordingUsername = this.recordingUsername.bind(this);
    this.recordingPassword = this.recordingPassword.bind(this);
  }

  registerClicked() {
    // set loginBox to 'register'
    //console.log('register clicked!');
    this.setState({ loginBox: 'register' });
  }

  loginClicked() {
    // set loginBox to 'login'
    //console.log('login clicked!');
    this.setState({ loginBox: 'login' });
  }

  createUser(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/user',
      crossDomain: true,
      data: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      contentType: 'application/json'
    })
    alert('please log in now')
  }

  verifyUser(e){
    e.preventDefault();
    $.get('http://localhost:3000/user?username='+ this.state.username +'&password='+ this.state.password).done((data)=>{
      this.props.loggedInHandler(data)
    });
  }

  recordingUsername(e){
    e.preventDefault();
    this.setState({
      username:e.target.value,
    })
  }

  recordingPassword(e){
    e.preventDefault();
    this.setState({
      password:e.target.value,
    })
  }

  render() {
    let theBox = '';
    if (this.state.loginBox) {
      if (this.state.loginBox === 'login') {
        // render login
        theBox =
          <div className='loginFormWrap'>
            <form id='loginForm' onSubmit={this.verifyUser}>
              <div>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' onChange={this.recordingUsername}/>
              </div>
              <div>
                <label for='password'>Password</label>
                <input type='text' id='password' name='password' onChange={this.recordingPassword}/>
              </div>
              <div>
                <input type='submit'/>
              </div>
            </form>
          </div>
      }
      else if (this.state.loginBox === 'register') {
        // render register
        theBox =
          <div className='registerFormWrap'>
            <form id='registerForm' onSubmit={this.createUser}>
              <div>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' onChange={this.recordingUsername}/>
              </div>
              <div>
                <label for='password'>Password</label>
                <input type='text' id='password' name='password' onChange={this.recordingPassword}/>
              </div>
              <div>
                <input type='submit'/>
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
