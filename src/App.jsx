import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const url = ""

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const LoginPage = () => {
    setIsLoggedIn(false);
    localStorage.setItem("login", 'false');
  };
  
  const ProfilePage = () => {
    setIsLoggedIn(true)
  };

  useEffect(() => {
  const data = localStorage.getItem("login");
  if (data === 'false') {
    setIsLoggedIn(false)
  }
  }, [])


    return (
      <div className='logged'>
        {isLoggedIn ? (
          <div>
            <h1>Login Page</h1>
            {
              /* Do your task below
              1. Create a username and password form `LoginPage`
              2. When submit button is clicked set `setIsLoggedIn` to true then show profile page
              3. `ProfilePage` should have basic user data.
              4. `ProfilePage` should have a logout button
              5. when logout button is click take user back to login page */
              // Extra store login state in local storage so when the page is refreshed the user is still logged in
              <div className='done1'>
                <form action="">
                  <label htmlFor="">Username:</label>
                  <input type="text" name='' />
                  <label htmlFor="">Password:</label>
                  <input type="password" name="" id="number" />
                </form>
                <button onClick={LoginPage}>SUBMIT</button>
              </div>
            }

          </div>
      ) : (
          <div className='done2'>
              <h1>Profile Page</h1>
              {/* <form action="">
                <label htmlFor="">Username:</label>
                <input type="text" />
                <label htmlFor="">Password:</label>
                <input type="password" name="" id="" />
              </form> */}
              <button>Contact Us</button>
              <button>Privacy Policy</button>
              <button onClick={ProfilePage}>LOG OUT</button>
          </div>
        )}
      </div>
    );
}

  

export default App
